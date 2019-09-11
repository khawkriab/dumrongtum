import React, { Component } from 'react'
import Images from '../Components/Images';
import { PanelRight, PanelContent, PanelWhi } from '../Components/PartAdmin/MainAdmin';
import { HeadRight, HeadLeft, Bgblue, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from '../Asset/styleAdmin';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import { InputFormGroup } from '../Components/Form/Input'
import { Img } from '../Components/Image/Img'
import { Search } from '../Components/Search/Search'
import Modal from "react-responsive-modal"
import swal from 'sweetalert'
import Swal from 'sweetalert2'
import { post, get } from '../api';
import { changeStatusRadio } from '../Components/Static/static';
import Pagination from '../Components/Pagination/Pagination';

export default class AdminCentralGovermentDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            oldItem: [],
            Item: [],
            tab: 1,
            isOpen: false,
            // --------------
            centralUser: [],
            oldCentralUser: [],
            currentItem: [],
            currentPage: 1,
            user_info_id: null,
            username: null,
            password: null,
            fname: '',
            lname: null,
            phone: null,
            // --------------
            central_name: this.props.location.state.central_name,
            subject: this.props.location.state.subject,
            on: this.props.location.state.on,
            end: this.props.location.state.end,
            // --------------
            status: 12
        }
    }
    // -----------------------------------------------------------------------------------------------------------------------
    componentDidMount = () => {
        let id = this.props.match.params.id;
        this.fetchItem(id);
        this.fetchCentralUser(id)
    }
    // -----------------------------------------------------------------------------------------------------------------------
    fetchItem = async (e) => {
        const item = await get('/complaint/central/' + e)
        this.setState({ Item: item, oldItem: item })
    }
    // -----------------------------------------------------------------------------------------------------------------------
    fetchCentralUser = async (e) => {
        const item = await get('/central/user_central/' + e)
        this.setState({ centralUser: item, oldCentralUser: item })
    }
    // -----------------------------------------------------------------------------------------------------------------------
    onChangeStatus(e) {
        const { oldItem } = this.state
        let status = Number(e)
        this.setState({ status })
        if (status != 17 && status != 12 && status != -1 && status != 13) {
            let newsolution = this.state.oldItem.filter(el => el.status == status)
            this.setState({ Item: newsolution })
        } else if (status == 17) {
            let newsolution = this.state.oldItem.filter(el => el.status > 0 && el.status < 8)
            this.setState({ Item: newsolution })
        } else if (status == 13) {
            let newsolution = this.state.oldItem.filter(el => el.date_expire == '0')
            this.setState({ Item: newsolution })
        } else if (status == -1) {
            let newsolution = this.state.oldItem.filter(el => el.date_expire < 0)
            this.setState({ Item: newsolution })
        } else {
            this.setState({ Item: oldItem })
        }

    }
    // -----------------------------------------------------------------------------------------------------------------------
    onPageChanged = data => {
        let { currentPage } = data;
        this.setState({ currentPage })
    }
    // -----------------------------------------------------------------------------------------------------------------------
    searchCentralUser = (e) => {
        const value = e.target.value
        if (value !== '') {
            let newsolution = this.state.oldCentralUser.filter(el => {
                return (
                    el.fname.includes(value) || el.lname.includes(value) || el.phone.includes(value)
                )
            })
            this.setState({ centralUser: newsolution })
        } else {
            this.setState(prev => ({ centralUser: prev.oldCentralUser }))
        }
    }
    // -----------------------------------------------------------------------------------------------------------------------
    fullname = (cell, row) => {
        return (
            <p>
                {row.fname} {row.lname}
            </p>
        );
    };
    // -----------------------------------------------------------------------------------------------------------------------
    _onChangeText = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    // -----------------------------------------------------------------------------------------------------------------------
    onOpenModal = (func, el) => {
        func === 'create' || func === 'close' ?
            this.setState({
                isOpen: !this.state.isOpen,
                user_info_id: null,
                username: null,
                fname: '',
                lname: null,
                phone: null,
                password: null
            })
            : this.setState({
                isOpen: !this.state.isOpen,
                user_info_id: el.user_info_id,
                username: el.username,
                fname: el.fname,
                lname: el.lname,
                phone: el.phone,
                password: el.password
            })
    }
    // -----------------------------------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------------------------------
    onCreate = async () => {
        const { username, fname, lname, phone } = this.state
        try {
            const item = await post('/central/add_user', { username, fname, lname, phone, central_id: this.props.match.params.id })
            swal({
                title: "เรียบร้อย",
                text: 'เพิ่มเจ้าหน้าที่สำเร็จ \n Password : ' + item.password,
                icon: "success",
            })
                .then(() => {
                    this.onOpenModal('close')
                    this.componentDidMount()
                });
        }
        catch (error) {
            swal({
                title: error,
                // text: 'เพิ่มเจ้าหน้าที่สำเร็จ \n Password : ' + item.password ,
                icon: "warning",
            })
        }
    }
    // -----------------------------------------------------------------------------------------------------------------------
    onUpdate = async () => {
        const { user_info_id, fname, lname, phone } = this.state
        const item = await post('/central/update_user', { user_info_id, fname, lname, phone, central_id: this.props.match.params.id })
        if (item) {
            swal({
                title: "เรียบร้อย",
                text: 'แก้ไขเจ้าหน้าที่สำเร็จ',
                icon: "success",
            })
                .then(() => {
                    this.onOpenModal('close')
                    this.componentDidMount()
                });
        }
    }
    // -----------------------------------------------------------------------------------------------------------------------
    onRemove = async (e) => {
        Swal.fire({
            title: "คุณต้องการลบหน่วยงานใช่หรือไม่",
            text: 'คุณต้องการลบหน่วยงานใช่หรือไม่',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'ใช่',
            cancelButtonText: 'ไม่'
        })
            .then(async (result) => {
                if (result.value) {
                    const item = await post()
                    if (item) {
                        Swal.fire(
                            'ลบสำเร็จ!',
                            'หน่วยงานได้ถูกลบแล้ว',
                            'success'
                        )
                            .then(() => {
                                this.fetchItem()
                            });
                    }
                }
            });
    }
    // -----------------------------------------------------------------------------------------------------------------------

    render() {
        const { Item, tab, status, currentPage, centralUser } = this.state
        const optionsTable = {
            paginationSize: 3,
            sizePerPageList: [10],
            paginationShowsTotal: this.renderPaginationShowsTotal,
            onRowClick: (cell) => {
                this.props.history.push({ pathname: '/admindepartcompaint',state:{id:cell.id} });
            }
        };
        const totalItems = centralUser.length;
        const pageLimit = 6;
        let data = centralUser.slice((currentPage - 1) * pageLimit, currentPage * pageLimit);
        return (
            <PanelRight>
                <Bgblue />
                <PanelContent>
                    <div style={{ marginTop: '-75px' }}>
                        <PanelWhi>
                            <div className="government-detail-content">
                                <div>
                                    <Img src={Images.logo} w="125px" h="125px" raduis="10px" boxshow="1px 1px 5px #ccc" />
                                </div>
                                <div className="detail">
                                    <div>
                                        <h2>{this.state.central_name}</h2>
                                        <div>
                                            <Button my="0" raduis="50%" bg={this.state.tab === 1 ? '#5DC0EC' : ''} bgH="#5DC0EC" onClick={() => this.setState({ tab: 1 })}>รายการร้องเรียน</Button>
                                            <Button my="0" raduis="50%" bg={this.state.tab === 2 ? '#5DC0EC' : ''} bgH="#5DC0EC" onClick={() => this.setState({ tab: 2 })}>เจ้าหน้าที่หน่วยงาน</Button>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <div><span>เรื่องร้องเรียนทั้งหมด</span><span><strong>{this.state.subject}</strong>เรื่อง</span></div>
                                            <div><span>เรื่องที่ยุติ</span><span><strong>{this.state.end}</strong>เรื่อง</span></div>
                                            <div><span>อยู่ระหว่างดำเนินการ</span><span><strong>{this.state.on}</strong>เรื่อง</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </PanelWhi>
                    </div>
                    {/* ------------------------- */}
                    {tab === 1 &&
                        <PanelWhi>
                            <div className="government-detail-menu">
                                <div className={status === 12 ? 'active' : ''} onClick={() => this.onChangeStatus(12)}>ทั้งหมด</div>
                                <div className={status === 17 ? 'active' : ''} onClick={() => this.onChangeStatus(17)}>อยู่ระหว่างดำเนินการ</div>
                                <div className={status === 8 ? 'active' : ''} onClick={() => this.onChangeStatus(8)}>เรื่องที่ยุติ</div>
                                <div className={status === 13 ? 'active' : ''} onClick={() => this.onChangeStatus(13)}>เรื่องใกล้กำหนด</div>
                                <div className={status === -1 ? 'active' : ''} onClick={() => this.onChangeStatus(-1)}>เรื่องที่เกินกำหนด</div>
                                <div>

                                    <strong>ตัวกรองตามสถานะเรื่อง</strong>
                                    <div className="form-group select-arrow">
                                        <select className="form-control" onChange={(e) => this.onChangeStatus(e.target.value)}>
                                            <option value="">ทั้งหมด</option>
                                            {changeStatusRadio[0].data.map((e) => (
                                                <option value={e.value}>{e.label}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div id="my-tableHeader-class-text-left">
                                <BootstrapTable data={Item.map((e) => ({ ...e, expire: e.date_expire > -1 ? e.date_expire + 1 : e.date_expire }))} pagination={true}
                                    options={optionsTable}
                                    hover
                                    containerClass='my-container-class tb-setSearch'
                                    tableContainerClass='my-tableContainer-class'
                                    tableHeaderClass='my-tableHeader-class colorBlue'
                                    tableBodyClass='my-tableBody-pointer-class'
                                >
                                    <TableHeaderColumn dataField='form_id' isKey>เลขที่เรื่องเรียน</TableHeaderColumn>
                                    <TableHeaderColumn dataField='insert_at'>วันที่แจ้ง</TableHeaderColumn>
                                    <TableHeaderColumn dataField='type'>เรื่องร้องงเรียน</TableHeaderColumn>
                                    <TableHeaderColumn dataField='status_name'>สถานะเรื่อง</TableHeaderColumn>
                                    <TableHeaderColumn dataField='fname' dataFormat={this.fullname} >ชื่อผู้ร้อง</TableHeaderColumn>
                                    <TableHeaderColumn dataField='expire'>เหลือเวลา(วัน)</TableHeaderColumn>
                                </BootstrapTable>
                            </div>
                        </PanelWhi>
                    }
                    {tab === 2 &&
                        <PanelWhi>
                            <div className="d-flex justify-content-between align-items-end">
                                <HeadLeft>
                                    <Search title="ค้นหาหน่วยงาน" placeholder="ค้นหา" onChange={this.searchCentralUser} />
                                </HeadLeft>
                                <HeadRight>
                                    <Button bg='#29a4db' onClick={() => this.onOpenModal('create')}>+ เพิ่มเจ้าหน้าที่</Button>
                                </HeadRight>
                            </div>
                            {totalItems === 0 ? <div><hr /> ไม่มีผลลัพธ์</div> :
                                <div className="government-detail-officer">
                                    {data && data.map((el) =>
                                        <div>
                                            <div>
                                                <Img src={Images.logo} w="50px" h="50px" raduis="50%" border="1px solid #ddd" />
                                                <span><strong>{el.fname} {el.lname}</strong></span>
                                                {el.phone && <span> <img src={Images.Asset18} alt='' /> {el.phone}</span>}
                                            </div>
                                            <div onClick={() => this.onOpenModal('edit', el)}>
                                                <strong>แก้ไข</strong>
                                            </div>
                                        </div>
                                    )}
                                    <div className="w-100 d-flex align-items-center justify-content-center">
                                        <div className="d-flex flex-row py-2 align-items-center">
                                            <Pagination
                                                totalRecords={totalItems}
                                                pageLimit={pageLimit}
                                                pageNeighbours={1}
                                                onPageChanged={this.onPageChanged}
                                                pnPage
                                            />
                                        </div>
                                    </div>
                                </div>

                            }
                        </PanelWhi>
                    }
                    {this.Modal()}
                </PanelContent>
            </PanelRight>
        )
    }

    Modal() {
        let { isOpen } = this.state
        return (
            <Modal open={isOpen} onClose={() => this.onOpenModal('close')} little>
                <ModalContent>
                    <ModalHeader>แก้ไขเจ้าหน้าที่หน่วยงาน</ModalHeader>
                    <ModalBody>
                        <div className="d-flex justify-content-between">
                            <Img src={Images.logo}
                                w="140px"
                                h="140px"
                                border="1px solid #ddd"
                                px="10px"
                                py="10px"
                            />
                            <div style={{ width: '320px' }}>
                                <InputFormGroup title="ชื่อผู้ใช้" name="username" value={this.state.username} onChange={this._onChangeText} disabled={this.state.user_info_id} />
                                {this.state.user_info_id && <InputFormGroup title="รหัสผ่าน" name="password" value={this.state.password} disabled />}
                                <InputFormGroup title="ชื่อจริง" name="fname" value={this.state.fname} onChange={this._onChangeText} />
                                <InputFormGroup title="นามสกุล" name="lname" value={this.state.lname} onChange={this._onChangeText} />
                                <InputFormGroup title="หมายเลขโทรศัพท์" name="phone" value={this.state.phone} onChange={this._onChangeText} />
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        {this.state.user_info_id && <Button onClick={this.onUpdate}>บันทึก</Button>}
                        {this.state.user_info_id && <Button bg="#f00" bgH="#c00" onClick={() => this.onRemove()}>ลบเจ้าหน้าที่</Button>}
                        {!this.state.user_info_id && <Button onClick={this.onCreate}>เพิ่ม</Button>}
                    </ModalFooter>
                </ModalContent>
            </Modal>
        )
    }
}
