import React, { Component } from 'react'
import Images from '../Components/Images';
import { PanelWhi } from '../Components/PartAdmin/MainAdmin';
import { ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from '../Asset/styleAdmin';
import Pagination from '../Components/Pagination/Pagination';
import Modal from "react-responsive-modal"
import { InputFormGroup, SelectFormGroup } from '../Components/Form/Input'
import { Search } from '../Components/Search/Search'
import { Img } from '../Components/Image/Img'
import { post, get } from '../api';
import swal from 'sweetalert'
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
import { disTrict } from '../Components/Static/static'

export default class AdminCentralGoverment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            oldItem: [],
            Item: [],
            currentItem: [],
            currentPage: 1,
            isOpen: false,
            showDrop: false,
            central_id: null,
            central_name: '',
            district: null,
            phone: null,
        }
    }
    componentDidMount = () => {
        this.props.onRef(this)
        this.fetchItem()
    }
    // -----------------------------------------------------------------------------------------------------------------------
    fetchItem = async () => {
        const item = await get('/central')
        this.setState({ Item: item, oldItem: item, currentItem: item })
        console.log('object',this.state.Item)
    }
    // -----------------------------------------------------------------------------------------------------------------------
    onPageChanged = data => {
        let { currentPage } = data;
        this.setState({ currentPage })
    }
    // -----------------------------------------------------------------------------------------------------------------------
    searchItem = (e) => {
        const value = e.target.value
        if (value !== '') {
            let newsolution = this.state.oldItem.filter(el => {
                return (
                    el.central_name.includes(value)
                )
            })
            this.setState({ Item: newsolution, currentItem: newsolution })
        } else {
            this.setState(prev => ({ Item: prev.oldItem, currentItem: prev.oldItem }))
        }
    }
    // -----------------------------------------------------------------------------------------------------------------------

    _onChangeText = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    // -----------------------------------------------------------------------------------------------------------------------

    onOpenModal = (func, el) => {
        func === 'create' || func === 'close' ?
            this.setState({
                isOpen: !this.state.isOpen,
                central_id: null,
                central_name: '',
                district: null,
                phone: null,
            })
            : this.setState({
                isOpen: !this.state.isOpen,
                central_id: el.central_id,
                central_name: el.central_name,
                district: el.district,
                phone: el.phone,
            })
    }
    // -----------------------------------------------------------------------------------------------------------------------
    onCreate = async () => {
        const item = await post('/central/insert', { central_name: this.state.central_name, district: this.state.district, phone: this.state.phone })
        console.log('hotline')
        if (item) {
            swal({
                title: "เรียบร้อย",
                text: 'เพิ่มหน่วยงานสำเร็จ',
                icon: "success",
            })
                .then(() => {
                    this.onOpenModal('close')
                    this.fetchItem()
                });
        }
    }
    // -----------------------------------------------------------------------------------------------------------------------
    onUpdate = async () => {
        const item = await post('/central/update', { central_id: this.state.central_id, central_name: this.state.central_name, district: this.state.district, phone: this.state.phone })
        if (item) {
            swal({
                title: "เรียบร้อย",
                text: 'แก้ไขหน่วยงานสำเร็จ',
                icon: "success",
            })
                .then(() => {
                    this.onOpenModal('close')
                    this.fetchItem()
                });
        }
    }
    // -----------------------------------------------------------------------------------------------------------------------
    onRemove = async (e) => {
        Swal.fire({
            title: "คุณต้องการลบหน่วยงานใช่หรือไม่",
            // text: 'ลบสำเร็จ',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'ใช่',
            cancelButtonText: 'ไม่'
        })
            .then(async (result) => {
                if (result.value) {
                    const item = await post('/central/remove', { central_id: e })
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
    onPageDetail= (e) =>  {
        this.props.props.history.push({
            pathname: '/admin/government_detail/' + e.central_id,
            state: { central_name: e.central_name, subject: e.subject, on: e.on, end: e.end}
        });
    }
    // -----------------------------------------------------------------------------------------------------------------------
    render() {
        return (
            <div>
                {/* ------------------------- */}
                <PanelWhi>
                    <Search title="ค้นหาหน่วยงาน" placeholder="ค้นหา" onChange={this.searchItem} />
                </PanelWhi>
                {/* ------------------------- */}
                <PanelWhi>
                    {this.departAndCompaint()}
                    {this.Modal()}
                </PanelWhi>
            </div>
        )
    }

    departAndCompaint() {
        const { currentItem, currentPage, Item } = this.state;
        const totalItem = currentItem.length;
        const pageLimit = 6;
        let data = Item.slice((currentPage - 1) * pageLimit, currentPage * pageLimit)
        let dataLength = Item.length;

        if (totalItem === 0) return 'ไม่พบข้อมูล';
        return (<div className="admin-central">
            {Item && data.map((el, i) => {
                return (
                    <div>
                        <div className='admin-central-img' >
                            <img src={Images.logo} alt='' />
                        </div>
                        <div className='admin-central-text' onClick={() => this.onPageDetail(el)}>
                            <h1>{el.central_name}</h1>
                            <span><i>จำนวนเรื่องร้องเรียนทั้งหมด : </i><strong> {el.subject}</strong></span>
                            <span><i>จำนวนเรื่องที่ยุติ : </i><strong> {el.on}</strong></span>
                            <span><i>จำนวนเรื่องที่อยู่ระหว่างดำเนินการ : </i><strong> {el.end}</strong></span>
                        </div>
                        <button className="admin-central-edit">
                            <i>...</i>
                            {/* dropdown */}
                            <div className="shows">
                                <span onClick={() => this.onOpenModal('edit', el)}>แก้ไข</span>
                                <span onClick={() => this.onRemove(el.central_id)}>ลบ</span>
                            </div>
                        </button>
                    </div >
                )
            })}
            <div className="w-100 d-flex justify-content-center">
                <div className="d-flex flex-row py-2 align-items-center">
                    <Pagination totalRecords={dataLength} pageLimit={pageLimit} pageNeighbours={1} onPageChanged={this.onPageChanged} pnPage />
                </div>
            </div>

        </div >
        )
    }

    Modal() {
        let { isOpen } = this.state
        return (
            <Modal open={isOpen} onClose={() => this.onOpenModal('close')} little>
                <ModalContent>
                    <ModalHeader>{this.state.central_id ? 'แก้ไขหน่วยงาน' : 'เพิ่มหน่วยงาน'}</ModalHeader>
                    <ModalBody>
                        <div className="d-flex justify-content-between">
                            <Img src={Images.logo}
                                w="140px"
                                h="140px"
                                border="1px solid #eee"
                                px="10px"
                                py="10px"
                                raduis="50%"
                            />
                            <div style={{ width: '320px' }}>
                                <InputFormGroup title="ชื่อหน่วยงาน" name="central_name" value={this.state.central_name} onChange={this._onChangeText} />
                                <SelectFormGroup title="อำเภอ" name="district" currentItem={this.state.district} allItem={disTrict} onChange={this._onChangeText} />
                                <InputFormGroup title="หมายเลขโทรศัพท์" name="phone" value={this.state.phone} onChange={this._onChangeText} />
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        {this.state.central_id && <Button onClick={this.onUpdate}>บันทึก</Button>}
                        {!this.state.central_id && <Button onClick={this.onCreate}>เพิ่ม</Button>}
                    </ModalFooter>
                </ModalContent>
            </Modal>
        )
    }

}
