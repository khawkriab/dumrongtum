import React, { Component } from 'react'
import { QnA } from './Static/static'
import TextHead from './TextHead'
import Main from './Main'
import Images from './Images'

export default class PaginationAcc extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: QnA,
            totalItemsPerPage: 3,
            currentPage: 1,
            pageBound: 10,
            isFirstBtnActive: false,
            isPrevBtnActive: false,
            isNextBtnActive: true,
            isLastBtnActive: true
        }
    }


    // -----------------------------------------------------
    componentWillMount = () => {
        let accordion = [];
        QnA.forEach((i) => {
            accordion.push({
                title: i.title,
                content: i.content,
                open: false
            });
        });

        this.setState({
            accordionItems: accordion
        });
    }

    click = (i) => {
        const newAccordion = this.state.accordionItems.slice();
        const index = newAccordion.indexOf(i)

        newAccordion[index].open = !newAccordion[index].open;
        this.setState({ accordionItems: newAccordion });
    }
    // -------------------------------------------------
    changePage(i) {
        this.setState({
            currentPage: i
        });
    }

    firstPage = () => {
        this.setState({
            currentPage: 1
        });
    };

    prevPage = () => {
        this.setState({
            currentPage: this.state.currentPage - 1
        });
    };

    nextPage = () => {
        this.setState({
            currentPage: this.state.currentPage + 1
        });
    };

    lastPage = totalPages => {
        this.setState({
            currentPage: totalPages
        });
    };

    render() {
        let { items, totalItemsPerPage, currentPage, isPrevBtnActive, isNextBtnActive } = this.state;

        console.log("items:", items);
        const totalPages = Math.ceil(items.length / totalItemsPerPage);

        const startItem = (currentPage - 1) * totalItemsPerPage;
        const endItem = startItem + totalItemsPerPage;
        const itemsPerPage = items.slice(startItem, endItem);

        const lowerPageBound = Math.min(
            Math.max(currentPage - 5, 1),
            totalPages - 9
        );
        const upperPageBound = Math.min(Math.max(currentPage + 4, 10), totalPages);

        const range = [];
        for (let i = lowerPageBound; i <= upperPageBound; i++) {
            range.push(i);
        }

        console.log("lowerPageBound:", lowerPageBound);

        console.log("upperPageBound:", upperPageBound);

        isPrevBtnActive = currentPage > 1;
        isNextBtnActive = currentPage < totalPages;
        return (
            <Main>
                <TextHead title='แนวทางแก้ทุกข์' />
                <div className='row' >
                    <div className='col-md-6' >
                        <div className='page-q-img'>
                            <img src={Images.Asset1} alt='' />
                        </div>
                    </div>
                    <div className='col-md-6' >
                        <div className="-q-accordion">
                            {/* {this.renderQnA()} */}
                            {this.renderQnA(itemsPerPage)}
                        </div>
                        {/* -------- */}
                        <div className="pagination">
                            <button className={isPrevBtnActive ? "" : "disable"} onClick={this.firstPage} disabled={!isPrevBtnActive} > First </button>
                            <button className={isPrevBtnActive ? "" : "disable"} onClick={this.prevPage} disabled={!isPrevBtnActive}  >Prev</button>
                            {
                                range.map(i => (
                                    <button key={i} className={currentPage === i ? "active" : ""} onClick={() => this.changePage(i)} >
                                        {i}
                                    </button>
                                ))
                            }
                            <button className={isNextBtnActive ? "" : "disable"} onClick={this.nextPage} disabled={!isNextBtnActive}>Next</button>
                            <button className={isNextBtnActive ? "" : "disable"} onClick={() => this.lastPage(totalPages)} disabled={!isNextBtnActive} > Last </button>
                        </div>
                        {/* -------- */}
                    </div>
                </div>
            </Main>

        )
    }
    // ----------------------------------
    renderQnA(item) {
        return item.map((el, i) => {
            return <div key={el.id}>
                <div className="-q-title" onClick={this.click.bind(null, el)} >
                    <div className="arrow-wrapper">
                        <i className={el.open ? "fa fa-angle-down fa-rotate-180" : "fa fa-angle-down"} ></i>
                    </div>
                    <img src={Images.Asset39} alt='' />
                    <span className="-q-title-text">
                        {el.title}
                    </span>
                </div>
                <div className={el.open ? "-q-content -q-content-open" : "-q-content"} >
                    <div className={el.open ? "-q-content-text -q-content-text-open" : "-q-content-text"} >
                        {el.content}
                    </div>
                </div>
            </div>
        })
    }
    // ----------------------------------
}
