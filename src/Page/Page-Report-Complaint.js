import React, { Component, useState } from 'react'
import { withRouter } from 'react-router-dom'
import TextHead, { TextLine } from '../Components/TextHead'
import Main from '../Components/Main'
import Block from '../Components/Block'
import Images from '../Components/Images'
import { sub_complaint, headComplaint, complaint, complaintToLeft, complaintToCenter, complaintToRight, detailComplaint, selectComplaint } from '../Components/Static/static';
import { InputForm, RadioForm, InputRow, Textarea, InputIdentifi, InputID, SelectName, RadioeDePart, SelectSubtype } from '../Components/Form/Input';
import { FormCompUpload, FormCompUpList, FormCompAgree, } from '../Components/Form/Complaint'
import InputMask from "react-input-mask"
import swal from 'sweetalert'
import Modal from "react-responsive-modal"
import { Container, Row, Col } from 'reactstrap'
import { Line, Label, ContainerForm, LabelL, LabelR, SummaryText } from '../Asset/styled'
import { get, post } from '../api'
import { Selecter } from '../Components/Form/SelectProvince';
import MapComponent from '../Components/Maps/MapComponent'
import { Sumtext } from '../Components/Div/SetDiv'
import _ from 'lodash'
import { fullname, address } from '../functions';
import UploadFile from '../Components/Form/UploadFile';
import { throws } from 'assert';
import { uploadState } from '../Components/Form/UploadFile'

export default class PageReportComplaint extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sayyes: false,
            allDistrict: [],
            allProvince: [],
            allTombon: [],
            allZipcode: {},
            prefix: '',
            fname: '',
            lname: '',
            house_number: '',
            phone: '',
            id_line: '',
            email: '',
            moo: '',
            alley: '',
            road: '',
            detail: '',
            objective: '',

            complaint: {
                province: '',
                district: '',
                tumbon: '',
                zipcode: ''
            },
            complainant: '',
            fname_person: '',
            lname_person: '',

            house_number_person: '',
            moo_person: '',
            alleyway_person: '',
            road_person: '',
            right: {
                province: '',
                district: '',
                tumbon: '',
                zipcode: ''
            },
            center: {
                province: '',
                district: '',
                tumbon: '',
                zipcode: ''
            },
            corporation_name: '',
            corporation_phone: '',
            activecomplaint: false,
            activeleft: true,
            activeright: false,
            openModal: false,
            // select_info: 8, ==> disclose: 8,
            disclose: 8,
            select_complaintTo: 10,
            select_headcomplaintTo: 1,
            type: 0,
            id_card: '',
            province: '',
            district: '',
            sub_district: '',
            zipcode: '',
            sub_type: 'เลือก',

            // department complaint
            departmentComplaint: [{ data: [] }],
            companyType: [],

            // state for api department
            select_depart: '', // department_id
            department_name: '', // find from departmentComplaint
            department_type: '', // 
            // company type
            type_id: 0,
            // location
            lat: 0,
            lng: 0,
            location_name: ''
        }
    }
    // ------------------------------------------------------------------------------------
    componentDidMount() {
        this._fetchUserData()
        this._fetchDepartmentAndCompanyType()
    }
    // ------------------------------------------------------------------------------------
    _fetchUserData = async () => {
        try {
            const res = await get('/auth/profile')
            this.setState({ ...res })
        } catch (error) {
            console.log(error)
        }
    }
    // ------------------------------------------------------------------------------------
    _fetchDepartmentAndCompanyType = async () => {
        try {
            const companyType = await get('/form/company_type')
            this.setState({
                departmentComplaint: [
                    {
                        ref: 'department_name',
                        title: 'หน่วยงานที่ถูกร้อง',
                        type: 'input',
                        placeholder: 'กรุณากรอกหน่วยงานที่ถูกร้อง',

                    }
                ],
                companyType
            })
        } catch (error) {
            console.log(error)
        }
    }
    // ------------------------------------------------------------------------------------
    componentWillUpdate = (prevProps, prevState) => {
        if (prevState.select_complaintTo !== this.state.select_complaintTo) {
            this.setState(prev => ({ activeleft: !prev.activeleft, activeright: !prev.activeright }))
        } else if (prevState.disclose !== this.state.disclose) {
            this.setState(prev => ({ activecomplaint: !prev.activecomplaint }))
        }
    }
    // ------------------------------------------------------------------------------------
    updatetypeInput = (e) => {
        // alert(e.target.name)
        if (e.target.name == "select_headcomplaintTo") {
            // alert("select")
            this.setState({ sub_type: 'เลือก' })
        }
        this.setState({ [e.target.name]: e.target.value })
    }

    // 
    updateRadioDep = e => {
        const { value } = e.target
        console.log(value)
        const [select_depart, department_type] = value.split(",")
        this.setState({ select_depart, department_type })
    }
    // ------------------------------------------------------------------------------------
    onChange = (ref, value) => {
        this.setState({ [ref]: value })
    }
    // ------------------------------------------------------------------------------------
    onOpenModal = () => { this.setState({ openModal: true }); };
    onCloseModal = () => { this.setState({ openModal: false }); };
    onMapChange = e => {
        this.setState(e)
    }
    // ------------------------------------------------------------------------------------
    // ------------------------------------------------------------------------------------
    _onSentComplaint = async () => {
        // alert(this.state.disclose)
        console.log(this.state)
        let detailJson = JSON.stringify(this.state);
        let detail = JSON.parse(detailJson)
        detail.type = headComplaint[1].data[this.state.select_headcomplaintTo].label
        detail.disclose = this.state.disclose == 8 ? 0 : 1
        detail.sub_district_person = detail.center.tumbon
        detail.district_person = detail.center.district
        detail.province_person = detail.center.province
        detail.zipcode_person = detail.center.zipcode
        detail.name_company = detail.corporation_name
        detail.phone_company = detail.corporation_phone
        detail.sub_district_company = detail.right.tumbon
        detail.district_company = detail.right.district
        detail.province_company = detail.right.province
        detail.zipcode_company = detail.right.zipcode
        detail.complainant = detail.select_complaintTo == 10 ? 'DEPARTMENT' : detail.select_complaintTo == 11 ? 'PERSON' : 'COMPANY'
        //alert(JSON.stringify(detail))
        console.log(detail)
        if (this.state.sayyes) {
            const insert = await post('/form/insert', detail)
            // console.log('insert>>>', insert)
            const formData = new FormData()

            formData.append("form_id", insert.form_id)
            uploadState.fileImgList.forEach(async (e) => {
                await formData.append("files", e);
            })
            uploadState.filePdfList.forEach(async (e) => {
                await formData.append("files", e);
            })
            
            await post('/form/insert/evidence', formData, true)

            swal({
                title: "ส่งเรื่องร้องเรียนเรียบร้อยแล้ว",
                text: 'ท่านสามารถตรวจสอบเรื่องร้องเรียนได้ที่ เมนู"ติดตามเรื่องและสถานะเรื่อง" ',
                icon: "success",
            }).then((willDelete) => {
                if (willDelete) {
                    this.props.history.push('/tracking')
                }
            });
        } else {
            swal("", "โปรดกรอกข้อมูลให้ครบทุกช่อง", "warning");
        }
    }
    // --------------------------------------------------------------------------------------------------------------//
    // --------------------------------------------------------------------------------------------------------------//
    //                                                                                                               //
    //                                                   render                                                      //
    //                                                                                                               //
    // --------------------------------------------------------------------------------------------------------------//
    // --------------------------------------------------------------------------------------------------------------//
    render() {
        let { sayyes, openModal, } = this.state;
        return (
            <Main>
                <TextHead title='แจ้งเรื่องร้องเรียน' />
                <Block>
                    <TextLine title='เรื่องร้องทุกข์' />
                    {this.renderHeadComplaint()}
                    <div className="selectSubtype">{this.renderHeadComplaintTo()}</div>
                    <TextLine title='ผู้ร้องทุกข์' />
                    {this.renderComplaint()}
                    <TextLine title='ผู้ถูกร้องทุกข์' />
                    {selectComplaint.map((el, i) => { return this.onSwitch(el, 'selectTo') })}
                    {this.renderComplaintTo()}
                    <TextLine title='รายละเอียดคำร้อง' />
                    {this.renderDetailComplaint()}
                    <TextLine title='ไฟล์เอกสาร' />
                </Block>
                {/* ------------------------------------------------------------- */}
                <UploadFile />
                {/* ------------------------------------------------------------- */}
                <button className='btn-send-blue' onClick={this.onOpenModal} >ดำเนินการต่อ</button>
                <Modal
                    open={openModal}
                    onClose={this.onCloseModal}
                    little
                    classNames={{ modal: 'Look-modal SummaryComplaint ' }}>
                    <div className="layout">
                        <h2 style={{ marginBottom: 30 }} >ตรวจสอบเรื่องร้องเรียน</h2>
                        {this.modalCheckComplaint()}
                        <button onClick={this._onSentComplaint} className='btn-blue'>ส่งคำร้อง</button>
                    </div>
                </Modal>
                <pre style={{ display: 'none' }}>{JSON.stringify(_.omit(this.state, ["departmentComplaint", "allDistrict", "allProvince", "allTombon"]), null, '\t')}</pre>
            </Main>
        )
    }
    // --------------------------------------------------------------------------------------------------------------//
    renderHeadComplaint() {
        return headComplaint.map((el) => {
            return this.onSwitch(el, 'head')
        })
    }

    // --------------------------------------------------------------------------------------------------------------//
    // --------------------------------------------------------------------------------------------------------------//
    //                                                                                                               //
    //                                                   renderHeadComplaintTo                                                      //
    //                                                                                                               //
    // --------------------------------------------------------------------------------------------------------------//
    // --------------------------------------------------------------------------------------------------------------//

    renderHeadComplaintTo() {
        return (
            <Row>
                {
                    <Col sm={6}>
                        {
                            sub_complaint.map((el, i) => {
                                return this.onSwitch(el)
                            })
                        }
                    </Col>
                }
            </Row>
        )
    }
    // --------------------------------------------------------------------------------------------------------------//
    renderComplaint() {
        return complaint.map((el) => {
            return this.onSwitch(el, 'complaint')
        })
    }
    // --------------------------------------------------------------------------------------------------------------//
    renderComplaintTo() {
        return (
            <Row>
                {
                    this.state.select_complaintTo == 10 ?
                        <Col sm={6}>
                            {
                                this.state.departmentComplaint.map((el, i) => {
                                    return this.onSwitch(el, 'left')
                                })
                            }
                        </Col>

                        : this.state.select_complaintTo == 11 ?
                            <Col sm={7}>
                                {
                                    complaintToCenter.map((el, i) => {
                                        return this.onSwitch(el, 'center')
                                    })
                                }
                            </Col>
                            : <Col sm={7}>
                                {
                                    complaintToRight.map((el, i) => {
                                        return this.onSwitch(el, 'right')
                                    })
                                }
                            </Col>
                }
            </Row>
        )
    }
    // --------------------------------------------------------------------------------------------------------------//
    renderDetailComplaint() {
        return (
            <Row>
                <Col sm={6}>
                    <MapComponent
                        onMarkerChange={this.onMapChange}
                        markerCoords={_.pick(this.state, ['lat', 'lng'])}
                    />
                </Col>
                <Col sm={6}>
                    {
                        detailComplaint.map((el, i) => {
                            return this.onSwitch(el, 'detailComplaint')
                        })
                    }
                </Col>
            </Row>
        )
    }

    // --------------------------------------------------------------------------------------------------------------//
    // --------------------------------------------------------------------------------------------------------------//
    //                                                                                                               //
    //                                                   onSwitch()                                                      //
    //                                                                                                               //
    // --------------------------------------------------------------------------------------------------------------//
    // --------------------------------------------------------------------------------------------------------------//
    onSwitch(el, ref) {
        // console.log(el.type)
        switch (el.type) {
            case 'selectName': return <SelectName active={this.state['active' + ref]} item={el} onChangeText={this.updatetypeInput} value={this.state} />;
            case 'input': return <InputForm item={el} onChangeText={this.updatetypeInput} value={this.state} />;
            case 'radio': return <RadioForm checked={this.state[el.ref]} item={el} onChangeRadio={this.updatetypeInput} />;
            // test by khawkriab
            case 'selectedSubType': return <SelectSubtype value={this.state.sub_type} item={el} head={this.state.select_headcomplaintTo} onChangeSelect={this.updatetypeInput} />
            case 'radioDepart': return <RadioeDePart item={el} onChangeRadio={this.updateRadioDep} />;
            case 'radioDep': return <RadioForm item={el} onChangeRadio={this.updatetypeInput} />;
            case 'row': return <InputRow active={ref == 'right' ? true : this.state['active' + ref]} item={el} onChangeText={this.updatetypeInput} value={this.state} />;
            case 'cardno': return (
                <div key={el.ref} className='-comp-form-cardno'>
                    <Label>{el.title}</Label>
                    <InputMask disabled={!this.state.activecomplaint} maskChar={null} mask={"9-9999-99999-99-9"} onChange={this.updatetypeInput} name={'id_card'} inputMode="numeric" type="text" className='form-control form-group' value={this.state.id_card} placeholder="หมายเลขประจำตัวประชาชน" />
                </div>
            )
            case 'textarea': return <Textarea item={el} onChangeText={this.updatetypeInput} />;
            case 'rowProv': return <Selecter active={ref == 'right' ? true : this.state['active' + ref]} name={ref} onChange={(ref, value) => this.onChange(ref, value)} value={ref == 'complaint' ? this.state : {}} />
            case 'corporationType': return (
                <div key={ref} className='LabelInput-panel'>
                    <Label>ประเภท</Label>
                    <select name='type_id' onChange={this.updatetypeInput} className='selectTitleName'>
                        <option value="0" disabled selected>เลือก</option>
                        {
                            this.state.companyType.map(el => <option key={el.type_id} value={el.type_id} >{el.type_name}</option>)
                        }
                    </select>
                </div>
            );
            default: return <div />
        }
    }
    // --------------------------------------------------------------------------------------------------------------//
    modalCheckComplaint = () => {

        // console.log(JSON.stringify( sub_complaint[0][`${this.state.select_headcomplaintTo}`].data))
        // console.log("headComplaint",headComplaint)
        // console.log("headComplaint[1].data[this.state.select_headcomplaintTo].label",headComplaint[1].data[this.state.select_headcomplaintTo == 8.1 ? 7 :this.state.select_headcomplaintTo-1].label)
        let { sayyes, select_complaintTo, select_depart, departmentComplaint } = this.state;
        return (
            <div>
                <TextLine title='เรื่องร้องทุกข์' />
                <Sumtext title='หัวข้อร้องทุกข์' detail={this.state.subject} />
                <Sumtext title='ประเภทเรื่อง' detail={ headComplaint[1].data[this.state.select_headcomplaintTo == 8.1 ? 7 :this.state.select_headcomplaintTo-1].label} />
                <Sumtext title='ประเภทเรื่องย่อย' detail={this.state.sub_type} />
                {/* -------------------------------------------------------------- */}
                <TextLine title='ผู้ร้องทุกข์' />
                <Sumtext title='ชื่อ-นามสกุลผู้ร้อง' detail={fullname(this.state.fname, this.state.lname)} />
                <Sumtext title='หมายเลขประจำตัวประชาชน' detail={this.state.id_card} />
                <Sumtext title='ID LINE ผู้ร้องทุกข์' detail={this.state.id_line} />
                <Sumtext title='E-mail ผู้ร้องทุกข์' detail={this.state.email} />
                <Sumtext title='ที่อยู่' detail={address({ ..._.pick(this.state, ['house_number', 'moo', 'alleyway', 'road']), ..._.pick(this.state, ['sub_district', 'district', 'province', 'zipcode']) })} />
                {/* -------------------------------------------------------------- */}
                <TextLine title='ผู้ถูกร้องทุกข์' />
                <Sumtext title='ผู้ถูกร้อง' detail={selectComplaint[0].data.find(el => el.value == select_complaintTo).label + (select_complaintTo == 10 ? " : " + this.state.department_name : "")} />
                {
                    select_complaintTo == 10 ?
                        null : select_complaintTo == 11 ?
                            <div>
                                <Sumtext title="ชื่อผู้ถูกร้อง" detail={this.state.fname_person + ' ' + this.state.lname_person} />
                                <Sumtext title='ที่อยู่' detail={address({ ..._.pick(this.state, ['house_number_person', 'moo_person', 'alleyway_person', 'road_person']), ..._.pick(this.state.center, ['tumbon', 'district', 'province', 'zipcode']) })} />
                            </div>
                            :
                            <div>
                                <Sumtext title="ชื่อผู้ถูกร้อง" detail={this.state.corporation_name} />
                                <Sumtext title='ที่อยู่' detail={address({ ..._.pick(this.state.right, ['tumbon', 'district', 'province', 'zipcode']) })} />
                            </div>
                }
                {/* -------------------------------------------------------------- */}
                <TextLine title='รายละเอียดคำร้อง' />
                <Sumtext title='รายละเอียด' detail={this.state.detail} />
                <Sumtext title='วัตถุประสงค์' detail={this.state.objective} />
                {/* -------------------------------------------------------------- */}
                <TextLine title='ไฟล์เอกสาร' />
                <FormCompAgree>
                    <input type="checkbox" id="agree" name="feature" value={sayyes} onChange={e => this.setState(prev => ({ sayyes: !prev.sayyes }))} />
                    <label for="agree">ข้าพเจ้าขอรับรองว่าเป็นความจริงทุกประการ หากปรากฏว่าไม่เป็นความจริง ข้าพเจ้ายอกรับผิด และให้ดำเนินการได้ตามกฎหมาย</label>
                </FormCompAgree>
            </div>
        )
    }
}
// --------------------------------------------------------------------------------------------------------------//

