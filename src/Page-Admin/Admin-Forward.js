import React, { Component } from 'react'
import Main from '../Components/Main'
import TextHead from '../Components/TextHead'
import Images from '../Components/Images'
import { user } from '../Components/Static/static'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
const products = [
    { id: '001', title: 'ชื่อหัวข้อร้องทุกข์', date1: '5/10/2561', date2: '27/12/2561', status: 'รอการตอบกลับ', },
    { id: '002', title: 'ชื่อหัวข้อร้องทุกข์', date1: '5/10/2561', date2: '27/12/2561', status: 'รอการตอบกลับ', },
    { id: '003', title: 'ชื่อหัวข้อร้องทุกข์', date1: '5/10/2561', date2: '27/12/2561', status: 'มีการตอบกลับ', },
]
export default class AdminForward extends Component {
    icon1 = () => {
        return (
            <img src={Images.Asset8} alt='' />
        )
    }
    render() {
        return (
            <Main>
                <TextHead title='การส่งต่อหน่วยงาน' />
                <div className='admin-forW-panel' >
                    <div className='admin-forW-left' >
                        <h1>หน่วยงาน</h1>
                        <div className='admin-forW-left-group' >
                            {this.renderDep()}
                        </div>
                    </div>
                    <div className='admin-forW-right'>
                        <BootstrapTable data={products} search striped hover
                            containerClass='my-container-class'
                            tableContainerClass='my-tableContainer-class'
                            tableHeaderClass='my-tableHeader-class'
                            tableBodyClass='my-tableBody-pointer-class'
                        >
                            <TableHeaderColumn dataField='id' isKey dataSort width={140}>รหัสเรื่องร้องเรียน</TableHeaderColumn>
                            <TableHeaderColumn dataField='title' dataSort >หัวข้อร้องทุกข์</TableHeaderColumn>
                            <TableHeaderColumn dataField='date1' dataSort width={90}>วันที่แจ้ง</TableHeaderColumn>
                            <TableHeaderColumn dataField='date2' dataSort width={90}></TableHeaderColumn>
                            <TableHeaderColumn dataField='status' dataSort width={120}>สถานะ</TableHeaderColumn>
                            <TableHeaderColumn dataField='icon1' dataFormat={this.icon1} width={40}></TableHeaderColumn>
                        </BootstrapTable>
                    </div>
                </div>

            </Main>
        )
    }
    renderDep() {
        return user.map((el, i) => {
            return <div className='admin-forW-left-dep'>
                <div className='admin-forW-rad' >
                    <img src={Images.Asset30} alt='' />
                </div>
                <p>{el.depname} {` ${i}`}</p>
            </div>
        })
    }
}
