import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Images from '../Images'
import NavbarToptAdmin from './NavbarTopAdmin'
const NavbarLeftAdmin = ({ }) => {
    return (
        <div className='nav-left -admin' >
            <div className='nav-left-label -admin' >
                <div className='nav-left-top -admin' >
                    <div className='admin-logo-head' >
                        <img src={Images.logo} alt='' />
                        <div className='-right' >
                            <h2>ศูนย์ดำรงธรรม</h2>
                            <h5>จังหวัดขอนแก่น</h5>
                        </div>
                    </div>
                    <div className='setFxCen' >
                        <div className='-cycle' >
                            <img src={Images.Asset30} alt='' />
                        </div>
                    </div>
                    <p>พิมฐา</p>
                    <label>เจ้าหน้าที่ศูนย์ดำรงธรรม</label>
                    <button>แก้ไขข้อมูล</button>
                </div>
                <p style={{fontWeight:'400'}}>เมนู</p>
                <NavbarToptAdmin />
            </div>
        </div>
    )
}
export default NavbarLeftAdmin