import React, { Component } from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import Images from '../Components/Images'
import { PanelRight, PanelContent, PanelHead, PanelWhi } from '../Components/PartAdmin/MainAdmin';
import { HeadRight, HeadBtn, HeadLeft, Bgblue, Button } from '../Asset/styleAdmin';
import { get, post } from '../api';
import swal from 'sweetalert'

export default class AdminContact extends Component {


  constructor(props) {
    super(props)
    // console.log(this.props.history)
    this.state = {
      id: '',
      address: '',
      website: '',
      phone: '',
      email: '',
      postoffice: '',
      facebook: '',
      line: ''
    }
  }

  componentDidMount = () => {
    this.fetchContact()
  }
  // -----------------------------------------------------------------------------------------------------------------------
  fetchContact = async () => {
    const products = await get('/footer')
    // alert(JSON.stringify(products))
    this.setState({
      id: products.id,
      address: products.address,
      website: products.website,
      phone: products.phone,
      email: products.email,
      postoffice: products.postoffice,
      facebook: products.facebook,
      line: products.line

    })
  }

  onUpdate = async () => {
    const products = await post('/footer/editFooter', this.state)
    if (products) {
      swal({
        title: "เรียบร้อย",
        text: 'แก้ไขข้อมูลการติดต่อสำเร็จ',
        icon: "success",
      })

    }
  }


  _onChangeText = e => this.setState({ [e.target.name]: e.target.value })
  // -----------------------------------------------------------------------------------------------------------------------

  render() {
    const { address, website, phone, email, postoffice, facebook, line } = this.state


    return (
      <PanelRight>
        <Bgblue />
        <PanelContent>
          {/* ------------------------- */}
          <PanelHead>
            <HeadLeft>
              <HeadBtn bgAct='#5DC0EC'>ข้อมูลการติดต่อ</HeadBtn>
            </HeadLeft>
          </PanelHead>
          {/* ------------------------- */}
          <PanelWhi>
            <div className="contact-input">
              <div>
                <label>ที่อยู่</label>
                <textarea value={address} placeholder="ที่อยู่" className='form-control form-group' name='address' onChange={this._onChangeText} />
              </div>
              <div >
                <label>เว็บไซต์</label>
                <input value={website} type='text' placeholder="เว็บไซต์" className='form-control form-group' name='website' onChange={this._onChangeText} />
              </div>
              <div >
                <label>หมายเลขโทรศัพท์</label>
                <input value={phone} type='text' placeholder="หมายเลขโทรศัพท์" className='form-control form-group' name='phone' onChange={this._onChangeText} />
              </div>
              <div >
                <label>อีเมล</label>
                <input value={email} type='text' placeholder="อีเมล" className='form-control form-group' name='email' onChange={this._onChangeText} />
              </div>
              <div >
                <label>ไปรษณีย์</label>
                <input value={postoffice} type='text' placeholder="ไปรษณีย์" className='form-control form-group' name='postoffice' onChange={this._onChangeText} />
              </div>
              <div >
                <label>facebook</label>
                <input value={facebook} type='text' placeholder="facebook" className='form-control form-group' name='facebook' onChange={this._onChangeText} />
              </div>
              <div >
                <label>Line ID</label>
                <input value={line} type='text' placeholder="Line ID" className='form-control form-group' name='line' onChange={this._onChangeText} />
              </div>
              <Button onClick={() => { this.onUpdate() }} bg='#5DC0EC'>บันทึก</Button>
            </div>
          </PanelWhi>
        </PanelContent>
      </PanelRight>
    )
  }
}

// ----------------------------------------------------------------------------------------