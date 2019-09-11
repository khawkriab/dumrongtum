import React, { Component } from 'react'
import TextHead from '../Components/TextHead'
import Main from '../Components/Main'
import Images from '../Components/Images';
import { get } from '../api';
import Pagination from '../Components/Pagination/Pagination';
export default class PageHotline extends Component {
    constructor(props) {
        super(props)

        this.state = {
            oldHotline: [],
            hotline: [],
            currentHotline: [],
            currentPage: 1,
        }
    }

    componentDidMount = () => {
        this._fetchHotline()
    }

    _fetchHotline = async () => {
        try {
            const hotline = await get('/hotline')
            this.setState({ hotline, oldHotline: hotline, currentHotline: hotline })
        } catch (error) {
            console.error(error.message)
        }
    }
    // #################################################################################################
    // ######################################## pagination #############################################
    // #################################################################################################
    onPageChanged = data => {
        let { currentPage } = data;
        this.setState({ currentPage })
    }
    // ################################### ########### ##################################################

    searchHotline = (e) => {
        const value = e.target.value
        if (value !== '') {
            let newsolution = this.state.oldHotline.filter(el => {
                return (
                    el.title.includes(value) || el.phone.includes(value) || el.location.includes(value)
                )
            })
            this.setState({ hotline: newsolution, currentHotline: newsolution.slice(0, 10), totalHotline: newsolution.length / 10 })
        } else {
            this.setState(prev => ({ hotline: prev.oldHotline, currentHotline: prev.oldHotline.slice(0, 10) }))
        }
    }

    render() {
        return (
            <Main>
                <TextHead title='สายด่วน' />
                <div className='search-input mt-5'>
                    <input type='text' placeholder='ค้นหา' className='searchInput' onChange={this.searchHotline} />
                    <button>
                        <img src={Images.Asset21} alt='' />
                    </button>
                </div>
                <div className='admin-hotline-center setminHeight' >
                    <div className='row' >
                        {this.renderHotline()}
                    </div>
                </div>
            </Main>
        )
    }
    renderHotline = () => {
        const { currentHotline, currentPage, hotline } = this.state;
        const totalHotline = currentHotline.length;
        const pageLimit = 10;
        let data = hotline.slice((currentPage - 1) * pageLimit, currentPage * pageLimit)
        let dataLength = hotline.length;
        if (totalHotline === 0) return null;
        return (
            <div className="container mb-5">
                <div className="row d-flex flex-row">
                    {hotline && data.map((el, i) => {
                        return <div className='col-md-6' key={el.hotline_id} >
                            <div className='admin-hotline-fx' >
                                <div className='admin-hotline-rad' >
                                    <img src={Images.logo} alt='' />
                                </div>
                                <div className='admin-hotline-text'>
                                    <h1>{el.title}</h1>
                                    <p><img src={Images.Asset17} alt='' />{el.location}</p>
                                    <p><img src={Images.Asset18} alt='' />{el.phone}</p>
                                    {/* <a href={el.link} target='_blank' ><img src={Images.Asset19} alt='' />{el.link}</a> */}
                                </div>
                            </div>
                            <div style={{ borderBottom: '1px solid #eee' }} />
                        </div>
                    })}
                    <div className="w-100 d-flex flex-row flex-wrap align-items-center justify-content-center">
                        {/* <div className="d-flex flex-row align-items-center">
                        <h2> <strong className="text-secondary">{totalHotline}</strong> Hotline</h2>
                        {currentPage && (
                            <span className="current-page d-inline-block h-100 pl-4 text-secondary">
                                Page <span className="font-weight-bold">{currentPage}</span> / <span className="font-weight-bold">{totalPages}</span>
                            </span>
                        )}
                        </div> */}
                        <div className="d-flex flex-row py-4 align-items-center">
                            <Pagination totalRecords={dataLength} pageLimit={10} pageNeighbours={1} onPageChanged={this.onPageChanged} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
