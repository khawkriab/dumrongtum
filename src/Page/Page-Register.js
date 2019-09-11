import React, { Component } from 'react'
import Images from '../Components/Images'
import CenterGd from '../Components/CenterGd'
import styled from 'styled-components'
import { register, prefixData } from '../Components/Static/static'
import { InputForm, InputRow, SelectSex, SelectName, InputRowProv, } from '../Components/Form/Input'
import swal from 'sweetalert'
import { Container, Row, Col } from 'reactstrap'
import { get, post } from '../api'
import lodash from 'lodash'
import Register from '../Components/Register'
import { Line, Label, ContainerForm } from '../Asset/styled'
const MyHeader = styled.p`
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 30px;
`
const TextCenter = styled.div`
    text-align: center;
    margin-top: 50px;
`
const Content = styled.div` 
    display: table;
    flex-direction: column;
    align-items: center;    
    @media (min-width: 768px){
        width: 600px;
      }    
`

export default class PageRegister extends Component {
    constructor(props) {
        super(props)

        this.state = {
            prefix: null,
            fname: null,
            lname: null,
            id_card: null,
            phone: null,
            house_number: null,
            moo: null,
            alleyway: '-',
            road: null,
            username: null,
            password: null,
            old_password: null,
            allDistrict: [],
            allProvince: [],
            allTombon: [],
            // จังหวัด
            province: '',
            district: '',
            sub_district: '',
            zipcode: '',

        }
    }
    // ------------------------------------------------------------------------------------
    componentDidMount() {
        this.get_province(this.state.selProvince)
    }
    // ------------------------------------------------------------------------------------
    _onRegister = async () => {
        try {
            const registerData = lodash.omit(this.state, ['allDistrict', 'allProvince', 'allTombon', 'old_password'])
            const emptyRegis = lodash.some(registerData, lodash.isEmpty)
            console.log(registerData)
            if (this.state.password !== this.state.old_password && !this.state.password && !this.state.old_password) {
                return swal("", "รหัสผ่านไม่ตรงกัน", "warning");
            }
            if (!emptyRegis) {
                await post('/auth/user_register', registerData)
                return swal("", "ลงทะเบียนสำเร็จ", "success").then(() => {
                    this.props.history.push('/login');
                })
            } else {
                swal("", "โปรดกรอกข้อมูลให้ครบทุกช่อง", "warning");
            }
        } catch (error) {
            swal("", error, "warning");
        }

    }
    // ------------------------------------------------------------------------------------
    updatetypeInput = (e) => { this.setState({ [e.target.name]: e.target.value, }) }
    // ------------------------------------------------------------------------------------
    _updateProvince = (event) => { this.get_district(event.target.value) };
    _updateDistrict = (event) => { this.get_tombon(event.target.value) };
    _updateTombon = (event) => {
        const [sub_district, zipcode] = event.target.value.split(',')
        this.setState({ sub_district, zipcode })
    };
    // ------------------------------------------------------------------------------------
    get_province = async () => {
        try {
            const allProvince = await get('/homeland/provinces')
            this.setState({ allProvince, })
        } catch (err) {
            console.log(err)
        }
    }
    get_district = async (province_id) => {
        try {
            const province = this.state.allProvince.find(el => el.value == province_id).label
            const allDistrict = await post(`/homeland/districts`, { province_id })
            this.setState({ allDistrict, province })
        } catch (err) {
            console.log(err)
        }
    }
    get_tombon = async (district_id) => {
        try {
            const district = this.state.allDistrict.find(el => el.value == district_id).label
            const allTombon = await post(`/homeland/sub_districts`, { district_id })
            this.setState({ allTombon, district })
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <React.Fragment>
                <div style={{ background: '#fff' }}>
                    <a href='/login' className='a_back'> กลับ</a>
                </div>
                <CenterGd>
                    <Content>
                        <div className='login-img' >
                            <img src={Images.Asset1} alt='' />
                        </div>
                        <MyHeader>ลงทะเบียน</MyHeader>
                        {this.renderForm()}
                        <TextCenter>
                            <button className='btn-blue' onClick={this._onRegister} >ลงทะเบียน</button>
                        </TextCenter>
                        {/* <pre>{JSON.stringify(this.state, null, '\t')}</pre> */}
                    </Content>
                </CenterGd>
            </React.Fragment>
        )
    }
    renderForm() {
        return register.map(el => {
            switch (el.type) {
                case 'selectName': return <SelectName item={el} onChangeText={this.updatetypeInput} active={true} />;
                case 'input': return <InputForm item={el} onChangeText={this.updatetypeInput} />;
                case 'row': return <InputRow item={el} onChangeText={this.updatetypeInput} />;
                case 'rowAddr': return <InputRow item={el} onChangeText={this.updatetypeInput} />;
                case 'rowProv': return (this.renderProv());
                default: return <div />
            }
        })
    }
    renderProv() {
        return (
            <Row style={{ paddingTop: 10 }} >
                <div className='col-sm-4 LabelInput-panel'>
                    <Label>จังหวัด</Label>
                    <select onChange={this._updateProvince}>
                        <option value='all' >-โปรดเลือกจังหวัด-</option>
                        {
                            this.state.allProvince.map(el => <option key={el.label} value={el.value} >{el.label}</option>)
                        }
                    </select>
                </div>
                <div className='col-sm-4 LabelInput-panel'>
                    <Label>อำเภอ</Label>
                    <select onChange={this.updatetypeInput} onChange={this._updateDistrict}>
                        <option value='all' >-โปรดเลือกอำเภอ-</option>
                        {
                            this.state.allDistrict.map(el => <option key={el.label} value={el.value} >{el.label}</option>)
                        }
                    </select>
                </div>
                <div className='col-sm-4 LabelInput-panel'>
                    <Label>ตำบล</Label>
                    <select onChange={this._updateTombon}>
                        <option value='all' >-โปรดเลือกตำบล-</option>
                        {
                            this.state.allTombon.map(el => <option key={el.label} value={[el.label, el.zipcode]} >{el.label}</option>)
                        }
                    </select>
                </div>
                <div className='col-sm-4 LabelInput-panel zipcodeStyle'>
                    <Label>รหัสไปรษณีย์</Label>
                    <input type='text' name='inputZipcode' value={this.state.zipcode} className="" disabled onChange={this.updateInputValue} placeholder='รหัสไปรษณีย์' />
                </div>
                <Line />
            </Row >
        )
    }
}
