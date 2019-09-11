import React, { Component } from 'react'
import Images from '../Components/Images'
import { PanelRight, PanelContent, PanelHead, PanelWhi } from '../Components/PartAdmin/MainAdmin';
import { HeadRight, HeadBtn, HeadLeft, Bgblue, HeadRightBtn } from '../Asset/styleAdmin';
import { get } from '../api';
import Pagination from '../Components/Pagination/Pagination';

export default class AdminQuestion extends Component {
  constructor(props) {
    super(props)
    console.log(this.props.history)
    this.state = {
      oldSolution: [],
      solution: [],
      currentPage: 1
    }
  }
  // -----------------------------------------------------------------------------------------------------------------------
  componentDidMount = () => {
    this.fetchProduct()
  }
  // -----------------------------------------------------------------------------------------------------------------------
  fetchProduct = async () => {
    const solution = await get('/solution')
    console.log(JSON.stringify(solution))
    this.setState({ solution, oldSolution: solution })
  }

  fullname = (cell, row) => {
    //   alert(row)
    return (
      <p>{row.fname} {row.lname}</p>
    )
  }

  editFormat = (row) => {
    this.props.history.push({
      pathname: '/admin/question_edit/' + row.solution_id,
      state: { title: row.title, detail: row.detail, solution_id: row.solution_id }
    })
  }

  onPageChanged = data => {
    let { currentPage } = data;
    this.setState({ currentPage })
  }

  // -----------------------------------------------------------------------------------------------------------------------
  search = (e) => {
    const value = e.target.value
    if (value !== '') {
      let newsolution = this.state.oldSolution.filter(el => {
        return (
          el.title.includes(value)
        )
      })
      this.setState({ solution: newsolution })
    } else {
      this.setState(prev => ({ solution: prev.oldSolution }))
    }
  }

  render() {

    return (
      <PanelRight>
        <Bgblue />
        <PanelContent>
          {/* ------------------------- */}
          <PanelHead>
            <HeadLeft>
              <HeadBtn bgAct='#5DC0EC'>แนวทางแก้ทุกข์</HeadBtn>

            </HeadLeft>
            <HeadRight>
              <HeadRightBtn href="/admin/question_create" >+ แนวทางแก้ทุกข์</HeadRightBtn>

            </HeadRight>
          </PanelHead>
          {/* ------------------------- */}
          <PanelWhi>
            <div className="text-align-left mb-3"><h4>ค้นหาหัวข้อคำถาม</h4></div>
            <div className='admin-search-input mb-4'>
              <button>
                <img src={Images.Asset21} alt='' />
              </button>
              <input type='text' placeholder='ค้นหา' className='admin-searchInput w-50' onChange={this.search} />
            </div>

          </PanelWhi>
          <PanelWhi>
            {this.renderQuestion()}
          </PanelWhi>
        </PanelContent>
      </PanelRight>
    )
  }

  // --------------------------------------------------------------------------------------

  renderQuestion() {
    const { oldSolution, currentPage, solution } = this.state;
    const totalItems = solution.length;
    const pageLimit = 8;
    let data = solution.slice((currentPage - 1) * pageLimit, currentPage * pageLimit)
    if (totalItems === 0) return null;
    return (
      <div className="admin-question">
        {solution && data.map((el, i) => {
          return (
            <div>
              <div className='admin-question-text'>
                <img src={Images.Asset50} alt='' />
                <h1>{el.title}</h1>
              </div>
              <div className="admin-question-edit"><i onClick={() => this.editFormat(el)}>แก้ไข</i></div>
            </div >
          )
        })}
        <div className="w-100 d-flex align-items-center justify-content-center">
          <div className="d-flex flex-row py-2 align-items-center">
            <Pagination totalRecords={totalItems} pageLimit={pageLimit} pageNeighbours={1} onPageChanged={this.onPageChanged} />
          </div>
        </div>
      </div >
    )
  }
}

// ----------------------------------------------------------------------------------------

