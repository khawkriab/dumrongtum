import React, { Component } from 'react'
import TextHead from '../Components/TextHead'
import Main from '../Components/Main'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import color from '../Asset/color';
import NavbarFooter from '../Components/Navbar/NavbarFooter';
import User from '../mobx/user'
import { post } from '../api'
import Modal from "react-responsive-modal"
import swal from 'sweetalert'
import { observer } from 'mobx-react'

const products = [
    { id: '1234567891011', title: 'ชื่อหัวข้อร้องทุกข์ชื่อหัวข้อร้องทุกข์ชื่อหัวข้อร้องทุกข์', status: 'รอเจ้าหน้าที่รับเรื่อง', },
    { id: '1234567891012', title: 'ชื่อหัวข้อร้องทุกข์', status: 'กำลังตรวจสอบคำร้อง', },
    { id: '1234567891013', title: 'ชื่อหัวข้อร้องทุกข์ชื่อหัวข้อร้องทุกข์', status: 'ตรวจสอบข้อเท็จจริง', },
]

@observer
class PageLookTracking extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            id: '',
            openModal: false,
        }
    }

    componentDidMount = () => {
        const { push } = this.props.history
        switch (User.role) {
            case "ADMIN":
                return push("/")
            case "USER":
                return push("/")
            default:
                return
        }
    }
    // -----------------------------------------------------------------------------------------------------------------------
    onOpenModal = () => { this.setState({ openModal: true }); };
    onCloseModal = () => { this.setState({ openModal: false }); };
    // -----------------------------------------------------------------------------------------------------------------------
    _onLogin = async () => {
        try {
            const { username, password } = this.state
            const result = await post("/auth/login", { username, password })
            User.saveUser(result)
            this.props.history.push("/")
        } catch (error) {
            swal("login failed", error.message, "error")
        }
    }
    // -----------------------------------------------------------------------------------------------------------------------
    _onChangeText = e => this.setState({ [e.target.name]: e.target.value })
    // -----------------------------------------------------------------------------------------------------------------------
    lookDetail = (cell, row) => {
        console.log('row', row)
        return (
            <div className='tb-report-icon' onClick={() => this.props.history.push('/lookcomplaint/' + row.id)} >รายละเอียด</div>
        )
    }
    // -----------------------------------------------------------------------------------------------------------------------
    render() {
        const { username, password, openModal } = this.state
        return (
            <Main>
                <div className='nav-head' >
                    <a href='/login' className='a_back' style={{ margin: 0 }} > กลับ</a>
                    <button className='btn-login-track' onClick={this.onOpenModal}>เข้าสู่ระบบ</button>
                </div>
                {/* ------------------------------------------------------------------------------------------------------ */}
                <TextHead title='ติดตามเรื่องร้องเรียน' />
                <BootstrapTable data={products} pagination={true}
                    search striped
                    containerClass='my-container-class tb-setMinH'
                    tableContainerClass='my-tableContainer-class'
                    tableHeaderClass='my-tableHeader-class'
                >
                    <TableHeaderColumn dataField='id' columnClassName={'td-style'} isKey dataSort width={'15%'}>รหัสเรื่องร้องเรียน</TableHeaderColumn>
                    <TableHeaderColumn dataField='title' columnClassName={'td-style'} dataSort >เรื่องร้องเรียน</TableHeaderColumn>
                    <TableHeaderColumn dataField='status' tdStyle={{ fontWeight: '400', color: color.bluetheme }} columnClassName={'td-style'} dataSort width={'15%'}>สถานะเรื่อง</TableHeaderColumn>
                    <TableHeaderColumn dataField='detail' dataFormat={this.lookDetail} columnClassName={'td-style'} width={'15%'}>รายละเอียด</TableHeaderColumn>
                </BootstrapTable>
                {/* --------------------------------------------------- Footer -------------`-------------------------------------- */}
                <NavbarFooter />
                <Modal
                    open={openModal}
                    onClose={this.onCloseModal}
                    little
                    classNames={{ modal: 'Look-modal trackingSmall ' }}>
                    <div className="layout">
                        <h2 style={{ marginBottom: 30 }} >เข้าสู่ระบบ</h2>
                        <input type='text' placeholder="ชื่อผู้ใช้" className='form-control form-group login-User' name='username' value={username} onChange={this._onChangeText} />
                        <input type='password' placeholder="รหัสผ่าน" className='form-control form-group login-password' name='password' value={password} onChange={this._onChangeText} />
                        <button onClick={this._onLogin} className='btn-blue'>เข้าสู่ระบบ</button>
                    </div>
                </Modal>
            </Main>
        )
    }
}
