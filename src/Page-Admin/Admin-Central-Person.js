import React, { Component } from 'react'
import Images from '../Components/Images';
import { PanelWhi } from '../Components/PartAdmin/MainAdmin';
import { get } from '../api';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'

export default class AdminPerson extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Item: []
        }
    }
    componentDidMount = () => {
        this.fetchItem()
    }
    // -----------------------------------------------------------------------------------------------------------------------
    fetchItem = async () => {
        const item = await get('/complaint/person')
        this.setState({ Item: item, oldItem: item })
        console.log('sdsd>>>', this.state.Item)
    }

    // -----------------------------------------------------------------------------------------------------------------------
    fullname = (cell, row) => {
        //   alert(row)
        return (
          <p>{row.name} &nbsp; {row.lname}</p>
        )
      }
    // -----------------------------------------------------------------------------------------------------------------------
    searchItem = (e) => {
        const value = e.target.value
        if (value !== '') {
            let newsolution = this.state.oldItem.filter(el => {
                return (
                    el.lname.includes(value)
                )
            })
            this.setState({ Item: newsolution })
        } else {
            this.setState(prev => ({ Item: prev.oldItem }))
        }
    }
    // -----------------------------------------------------------------------------------------------------------------------


    // -----------------------------------------------------------------------------------------------------------------------
    render() {
        const { Item } = this.state;
        const optionsTable = {
            paginationSize: 3,
            sizePerPageList: [10],
            paginationShowsTotal: this.renderPaginationShowsTotal,
        };
        return (
            <div>
                {/* ------------------------- */}
                <PanelWhi>

                    {/* ----------search ----------- */}
                    <div className="text-align-left"><h4 >ค้นหาหน่วยงาน</h4></div>

                    <div className='admin-search-input mb-5'>
                        <button>
                            <img src={Images.Asset21} alt='' />
                        </button>
                        <input type='text' placeholder='ค้นหา' className='admin-searchInput' onChange={this.searchItem} />
                    </div>
                    <div id="my-tableHeader-class-text-left">
                        <BootstrapTable data={Item} pagination={true}
                            options={optionsTable}
                            hover
                            containerClass='my-container-class tb-setSearch'
                            tableContainerClass='my-tableContainer-class'
                            tableHeaderClass='my-tableHeader-class colorBlue'
                            tableBodyClass='my-tableBody-pointer-class'
                        >
                            <TableHeaderColumn dataField='name' dataFormat={this.fullname} isKey>ชื่อผู้ร้อง</TableHeaderColumn>
                            <TableHeaderColumn dataField='phone' >หมายเลขโทรศัพท์(ถ้ามี)</TableHeaderColumn>
                            <TableHeaderColumn dataField='sub_district' >แขวง/ตำบล(ถ้ามี)</TableHeaderColumn>
                            <TableHeaderColumn dataField='district' >อำเภอ(ถ้ามี)</TableHeaderColumn>
                            <TableHeaderColumn dataField='province' >จังหวัด(ถ้ามี)</TableHeaderColumn>
                        </BootstrapTable>
                    </div>
                </PanelWhi>
            </div>
        )
    }
}
