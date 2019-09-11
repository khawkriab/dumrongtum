import React, { Component } from 'react'
import TextHead from '../Components/TextHead'
import Main from '../Components/Main'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import Images from '../Components/Images'
import color from '../Asset/color';
import { get } from '../api';

export default class PageTracking extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: [],
        }
    }
    // -----------------------------------------------------------------------------------------------------------------------
    componentDidMount = () => {
        this.fetchProduct()
    }
    // -----------------------------------------------------------------------------------------------------------------------
    fetchProduct = async () => {
        const products = await get('/complaint/me')
        this.setState({ products })
    }
    // -----------------------------------------------------------------------------------------------------------------------
    _onChangeText = e => this.setState({ [e.target.name]: e.target.value })
    // -----------------------------------------------------------------------------------------------------------------------
    lookStatus = (cell, row) => {
        // console.log('status', cell)
        switch (cell) {
            case 0: return 'รอเจ้าหน้าที่รับเรื่อง';
            case 1: return 'กำลังตรวจสอบคำร้อง';
            case 2: return 'ตรวจสอบข้อเท็จจริง';
            case 3: return 'หน่วยงานกำลังดำเนินการ';
            case 4: return 'คำร้องไม่ชัดเจน';
            case 5: return 'ยุติเรื่อง';
            default: return <div />
        }
    }
    // -----------------------------------------------------------------------------------------------------------------------
    lookDetail = (cell, row) => {
        // console.log('row', row)
        return (
            <div className='tb-report-icon' onClick={() => this.props.history.push('/lookcomplaint/' + row.form_id)} >รายละเอียด</div>
        )
    }
    // -----------------------------------------------------------------------------------------------------------------------
    render() {
        const { products, } = this.state
        return (
            <Main>
                <TextHead title='ติดตามเรื่องร้องเรียน' /><br />
                <div className='search-input' >
                    <input type='text' placeholder='ค้นหา (หมายเลขประจำตัวประชาชน, รหัสเรื่อง, รหัส MOI)' className='searchInput' style={{width:'400px'}} onChange={this.searchHotline} />
                    <button>
                        <img src={Images.Asset21} alt='' />
                    </button>
                </div>
                <BootstrapTable data={products} pagination={true}
                    containerClass='my-container-class tb-setMinH'
                    tableContainerClass='my-tableContainer-class'
                    tableHeaderClass='my-tableHeader-class'
                >
                    <TableHeaderColumn dataField='moi' columnClassName={'td-style'} isKey dataSort width={'15%'}>รหัสเรื่องร้องเรียน</TableHeaderColumn>
                    <TableHeaderColumn dataField='subject' columnClassName={'td-style'} dataSort >เรื่องร้องเรียน</TableHeaderColumn>
                    <TableHeaderColumn dataField='status' dataFormat={this.lookStatus} tdStyle={{ fontWeight: '400', color: color.bluetheme }} columnClassName={'td-style'} dataSort width={'15%'}>สถานะเรื่อง</TableHeaderColumn>
                    <TableHeaderColumn dataField='detail' dataFormat={this.lookDetail} columnClassName={'td-style'} width={'15%'}>รายละเอียด</TableHeaderColumn>
                </BootstrapTable>
            </Main>
        )
    }
}