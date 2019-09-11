import React, { Component } from 'react'
import Images from '../Components/Images';
import { PanelRight, PanelContent, PanelHead, PanelWhi } from '../Components/PartAdmin/MainAdmin';
import { HeadRight, HeadBtn, HeadLeft, Bgblue, HeadRightBtn, ModalCustom, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalClose, ModalBgClose, ModalButton} from '../Asset/styleAdmin';
import { get } from '../api';
import Pagination from '../Components/Pagination/Pagination';
import LabelInput from '../Components/LabelInput'
import { post } from '../api';
import swal from 'sweetalert'

export default class AdminHotline extends Component {

    constructor(props) {
        super(props)
        this.state = {
            oldHotline: [],
            hotline: [],
            currentHotline: [],
            currentPage: 1,
            isOpen: false,
            hotline_id: null,
            title: '',
            location: '',
            phone: '',
            link: ''
        }
    }
    componentDidMount = () => {
        this.fetchHotline()
    }
    onModalFunc = (func, el) => {
        func === 'create' || func === 'close' ?
            this.setState({
                isOpen: !this.state.isOpen,
                hotline_id: null,
                title: '',
                location: '',
                phone: '',
                link: '',
            })
            : this.setState({
                isOpen: !this.state.isOpen,
                hotline_id: el.hotline_id,
                title: el.title,
                location: el.location,
                phone: el.phone,
                link: el.link,
            })
        console.log('65555', this.state.hotline_id)
    }

    _onChangeText = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onCreate = async () => {
        const hotline = await post('/hotline/insert', { title: this.state.title, location: this.state.location, phone: this.state.phone, link: this.state.link })
        console.log('hotline')
        if (hotline) {
            swal({
                title: "เรียบร้อย",
                text: 'เพิ่มสายด่วนสำเร็จ',
                icon: "success",
            })
                .then(() => {
                    this.onModalFunc('close')
                    this.fetchHotline()
                });
        }
    }
    onUpdate = async () => {
        const hotline = await post('/hotline/update', { hotline_id: this.state.hotline_id, title: this.state.title, location: this.state.location, phone: this.state.phone, link: this.state.link })
        if (hotline) {
            swal({
                title: "เรียบร้อย",
                text: 'แก้ไขสายด่วนสำเร็จ',
                icon: "success",
            })
                .then(() => {
                    this.onModalFunc('close')
                    this.fetchHotline()
                });
        }
    }
    onRemove = async () => {
        const hotline = await post('/hotline/remove', { hotline_id: this.state.hotline_id })
        if (hotline) {
            swal({
                title: "เรียบร้อย",
                text: 'ลบสายด่วนสำเร็จ',
                icon: "success",
            })
                .then(() => {
                    this.onModalFunc('close')
                    this.fetchHotline()
                });
        }
    }

    // -----------------------------------------------------------------------------------------------------------------------
    fetchHotline = async () => {
        const hotline = await get('/hotline')
        this.setState({ hotline, oldHotline: hotline, currentHotline: hotline })
    }

    onPageChanged = data => {
        let { currentPage } = data;
        this.setState({ currentPage })
    }

    searchHotline = (e) => {
        const value = e.target.value
        if (value !== '') {
            let newsolution = this.state.oldHotline.filter(el => {
                return (
                    el.title.includes(value) || el.phone.includes(value) || el.location.includes(value)
                )
            })
            this.setState({ hotline: newsolution, currentHotline: newsolution, totalHotline: newsolution.length })
        } else {
            this.setState(prev => ({ hotline: prev.oldHotline, currentHotline: prev.oldHotline }))
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
                            <HeadBtn bgAct='#5DC0EC'>รายการสายด่วน</HeadBtn>
                        </HeadLeft>
                        <HeadRight>
                            <HeadRightBtn onClick={() => this.onModalFunc('create')}>+ เพิ่มสายด่วน</HeadRightBtn>
                        </HeadRight>
                    </PanelHead>

                    {/* ------------------------- */}
                    <PanelWhi>
                        {/* ----------search ----------- */}
                        <div className="text-align-left"><h4 >ค้นหาสายด่วน</h4></div>

                        <div className='admin-search-input'>
                            <button>
                                <img src={Images.Asset21} alt='' />
                            </button>
                            <input type='text' placeholder='ค้นหา' className='admin-searchInput' onChange={this.searchHotline} />
                        </div>
                    </PanelWhi>

                    {/* ------------------------- */}
                    <PanelWhi>
                        {this.renderHotline()}
                        {/* ------------ modal------------ */}
                        {this.Modal()}
                        {/* ------------/ modal------------ */}
                    </PanelWhi>
                </PanelContent>
            </PanelRight>
        )
    }
    renderHotline() {
        const { currentHotline, currentPage, hotline } = this.state;
        const totalHotline = currentHotline.length;
        const pageLimit = 6;
        let data = hotline.slice((currentPage - 1) * pageLimit, currentPage * pageLimit)
        let dataLength = hotline.length;
        if (totalHotline === 0) return null;
        return (<div className="admin-hotline">
            {hotline && data.map((el, i) => {
                return (
                    <div>
                        <div className='admin-hotline-rad' >
                            <img src={Images.logo} alt='' />
                        </div>
                        <div className='admin-hotline-text'>
                            <h1>{el.title}</h1>
                            <span><img src={Images.Asset18} alt=''/><i>{el.phone}</i></span>
                            {el.link !== null && el.link !== '' ? <span><img src={Images.Asset19} alt=''/><i>{el.link}</i></span> : ''}
                            <span><img src={Images.Asset17} alt=''/><i>{el.location}</i></span>
                        </div>
                        <div className="admin-hotline-edit" onClick={() => this.onModalFunc('edit', el)}><i>แก้ไข</i></div>
                    </div >
                )
            })}
            <div className="w-100 d-flex flex-row flex-wrap align-items-center justify-content-center">
                <div className="d-flex flex-row py-2 align-items-center">
                    <Pagination totalRecords={dataLength} pageLimit={pageLimit} pageNeighbours={1} onPageChanged={this.onPageChanged} />
                </div>
            </div>

        </div >
        )
    }

    Modal() {
        return (
            <ModalCustom isOpen={this.state.isOpen} >
                <ModalBgClose onClick={() => this.onModalFunc('close')} />
                <ModalContent>
                    <ModalClose onClick={() => this.onModalFunc('close')}>x</ModalClose>
                    <ModalHeader>เพิ่มสายด่วน</ModalHeader>
                    <ModalBody>
                        <div className="modal-body-hotline">
                            <div>
                                <div className="img"><img src={Images.logo} alt=''/></div>
                                <div className="fr">
                                    <LabelInput>
                                        <label>ชื่อหน่วยงาน</label>
                                        <input placeholder="กรอกชื่อหน่วยงาน" name="title" value={this.state.title} onChange={this._onChangeText} />
                                    </LabelInput>
                                    <LabelInput>
                                        <label>ที่อยู่หน่วยงาน</label>
                                        <input placeholder="กรอกที่อยู่หน่วยงาน" name="location" value={this.state.location} onChange={this._onChangeText} />
                                    </LabelInput>
                                </div>
                            </div>
                            <div >
                                <LabelInput >
                                    <label>หมายเลขโทรศัพท์หน่วยงาน</label>
                                    <input placeholder="กรอกหมายเลขโทรศัพท์หน่วยงาน" name="phone" value={this.state.phone} onChange={this._onChangeText} />
                                </LabelInput> <LabelInput >
                                    <label>Facebook หน่วยงาน</label>
                                    <input placeholder="กรอก Facebook หน่วยงาน" name="link" value={this.state.link} onChange={this._onChangeText} />
                                </LabelInput>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        {!this.state.hotline_id && <ModalButton bg="#0eaae7" onClick={this.onCreate}>บันทึก</ModalButton>}
                        {this.state.hotline_id &&  <ModalButton bg="#ff1100" onClick={this.onRemove} >ลบสายด่วน</ModalButton>}
                        {this.state.hotline_id && <ModalButton bg="#0eaae7" onClick={this.onUpdate} >บันทึก</ModalButton>}
                    </ModalFooter>
                </ModalContent>
            </ModalCustom>
        )
    }
}

