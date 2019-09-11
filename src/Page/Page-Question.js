import React, { Component } from 'react'
import TextHead from '../Components/TextHead'
import Main from '../Components/Main'
import Images from '../Components/Images'
import { get } from '../api';
import Pagination from '../Components/Pagination/Pagination';
export default class PageQuestion extends Component {
    // -----------------------------------------------------

    constructor(props) {
        super(props)

        this.state = {
            accordionItems: [],
            oldSolution: [],
            currentAccordionItems: [],
            currentPage: 1,
        }
    }


    componentDidMount = () => {
        this._fetchQuestion()
    }

    _fetchQuestion = async () => {
        try {
            const accordion = await get('/solution')
            this.setState({
                accordionItems: accordion.map(el => ({ ...el, open: false })),
                oldSolution: accordion.map(el => ({ ...el, open: false })),
                currentAccordionItems: accordion
            })
        } catch (error) {
            console.error(error.message)
        }
    }

    searchQnA = (e) => {
        const value = e.target.value
        if (value !== '') {
            let newsolution = this.state.accordionItems.filter(el => {
                return (
                    el.title.includes(value) || el.detail.includes(value)
                )
            })
            this.setState(prev => ({ accordionItems: prev.oldSolution }))
            this.setState({ accordionItems: newsolution })
        } else {
            this.setState(prev => ({ accordionItems: prev.oldSolution }))
        }
    }


    click = (i) => {
        let newAccordion = this.state.accordionItems.slice();
        const index = newAccordion.indexOf(i)

        newAccordion = newAccordion.map(el => ({ ...el, open: false }));
        newAccordion[index].open = !newAccordion[index].open;
        this.setState({ accordionItems: newAccordion });
    }
    // -------------------------------------------------
    // #################################################################################################
    // ######################################## pagination #############################################
    // #################################################################################################
    onPageChanged = data => {
        let { currentPage } = data;
        this.setState({ currentPage })
    }
    // ################################### ########### ##################################################

    render() {
        const { currentAccordionItems, currentPage } = this.state;
        const totalAccordionItems = currentAccordionItems.length;
        const pageLimit = 10;
        let dataLength = this.state.accordionItems.length;
        if (totalAccordionItems === 0) return null;
        return (
            <Main>
                <TextHead title='แนวทางแก้ทุกข์' />
                <div className='search-input mt-5 justify-content-start' >
                    <input type='text' placeholder='ค้นหา' className='searchInput' style={{ width: '50%' }} onChange={this.searchQnA} />
                    <button>
                        <img src={Images.Asset21} alt='' />
                    </button>
                </div>
                <div className='setminHeight' >
                    <div className="-q-accordion">
                        {this.renderQnA(currentPage, pageLimit)}
                        <div className="d-flex flex-row col-md-6 py-4 justify-content-center align-items-center">
                            <Pagination totalRecords={dataLength} pageLimit={pageLimit} pageNeighbours={1} onPageChanged={this.onPageChanged} />
                        </div>
                    </div>
                </div>
            </Main>
        )
    }

    renderQnA = (currentPage, pageLimit) => {
        let data = this.state.accordionItems.slice((currentPage - 1) * pageLimit, currentPage * pageLimit)
        return this.state.accordionItems && data.map((el, i) => {
            return (
                <div key={el.solution_id}>
                    <div className="-q-title" onClick={this.click.bind(null, el)} >
                        {/* <div className="-q-title" onClick={this.renderQnAdetail(el.solution_id)} > */}
                        <div className="arrow-wrapper">
                            <i className={el.open ? "fa fa-angle-right" : "fa fa-angle-right fa-rotate-180"} ></i>
                        </div>
                        <img src={Images.Asset39} alt='' />
                        <span className="-q-title-text">
                            {el.title}
                        </span>
                    </div>
                    <div className={el.open ? "-q-content -q-content-open" : "-q-content"} >
                        <div className={el.open ? "-q-content-text -q-content-text-open" : "-q-content-text"} >
                            <img src={Images.Asset39} alt='' />
                            <span className="-q-title-text ml-3">
                                {el.title}
                            </span>
                            <div>
                                <span className="-q-detail">
                                    {el.detail}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }


}