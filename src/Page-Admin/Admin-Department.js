import React, { Component } from 'react'
import TextHead from '../Components/TextHead'
import Main from '../Components/Main'
import Images from '../Components/Images'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
const products = [
    { id: '001', title: 'ชื่อหัวข้อร้องทุกข์', date1: '5/10/2561', date2: '27/12/2561', status: 'รอการตอบกลับ', },
    { id: '002', title: 'ชื่อหัวข้อร้องทุกข์', date1: '5/10/2561', date2: '27/12/2561', status: 'รอการตอบกลับ', },
    { id: '003', title: 'ชื่อหัวข้อร้องทุกข์', date1: '5/10/2561', date2: '27/12/2561', status: 'มีการตอบกลับ', },
]
export default class AdminDepartment extends Component {
    icon1 = () => {
        return (
            <img src={Images.Asset8} alt='' />
        )
    }
    render() {
        return (
            <Main>
                <TextHead title='รายการหน่วยงาน' />
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
            </Main>
        )
    }
}
