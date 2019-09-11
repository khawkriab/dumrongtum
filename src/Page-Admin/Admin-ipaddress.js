import React, { Component } from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import Images from '../Components/Images'
import { PanelRight, PanelContent, PanelHead, PanelWhi } from '../Components/PartAdmin/MainAdmin';
import { HeadRight, HeadLeft, Bgblue } from '../Asset/styleAdmin';
import { get } from '../api';

export default class AdminIpaddress extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: [],
      oldProducts: [],
    }
  }
  // -----------------------------------------------------------------------------------------------------------------------
  componentDidMount = () => {
    this.fetchProduct()
  }
  // -----------------------------------------------------------------------------------------------------------------------
  fetchProduct = async () => {
    const products = await get('/auth/getip')
    this.setState({ products, oldProducts: products })
  }
  // -----------------------------------------------------------------------------------------------------------------------
  fullname = (cell, row) => {
    //   alert(row)
    return (
      <p>{row.fname} {row.lname}</p>
    )
  }
  // -----------------------------------------------------------------------------------------------------------------------
  search = (e) => {
    const value = e.target.value
    if (value !== '') {
      let newsolution = this.state.oldProducts.filter(el => {
        return (
          el.ip_address.includes(value) || el.id_card.includes(value) || el.fname.includes(value) || el.lname.includes(value)
        )
      })
      this.setState({ products: newsolution })
    } else {
      this.setState(prev => ({ products: prev.oldProducts }))
    }
  }
  render() {
    const { products } = this.state
    const optionsTable = {
      paginationSize: 3,
      sizePerPageList: [10],
      paginationShowsTotal: this.renderPaginationShowsTotal,
    };
    return (
      <PanelRight>
        <Bgblue />
        <PanelContent>
          {/* ------------------------- */}
          <PanelHead>
            <HeadLeft>

            </HeadLeft>
            <HeadRight>

            </HeadRight>
          </PanelHead>
          {/* ------------------------- */}
          <PanelWhi>
            {/* ----------search ----------- */}
            <div className="text-align-left"><h4>ค้นหา</h4></div>

            <div className='admin-search-input mb-5'>
              <button>
                <img src={Images.Asset21} alt='' />
              </button>
              <input type='text' placeholder='ค้นหา(หมายเลขประจำตัวประชาชน, ชื่อ, นามสกุล, IP Address)' className='admin-searchInput w-50' onChange={this.search} />
            </div>
            {/* ----------search ----------- */}
            <div id="my-tableHeader-class-text-left">
              <BootstrapTable data={products} pagination={true}
                options={optionsTable}
                hover
                containerClass='my-container-class tb-setSearch'
                tableContainerClass='my-tableContainer-class'
                tableHeaderClass='my-tableHeader-class colorBlue'
                tableBodyClass='my-tableBody-pointer-class'
              >
                <TableHeaderColumn dataField='ip_address'  >IP Address</TableHeaderColumn>
                <TableHeaderColumn dataField='id_card' isKey >เลขบัตรประชาชน</TableHeaderColumn>
                <TableHeaderColumn dataField='fname' dataFormat={this.fullname} >ชื่อผู้ร้อง</TableHeaderColumn>
              </BootstrapTable>
            </div>
          </PanelWhi>
        </PanelContent>
      </PanelRight>
    )
  }
}

// ----------------------------------------------------------------------------------------