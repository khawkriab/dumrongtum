import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Images from '../Images'
const NavbarLeft = ({ menuOpen, menuNav, }) => {
    return (
        <div className='nav-left' style={menuOpen ? { display: 'none' } : {}}>
            <div className='nav-left-close'>
                <button onClick={menuNav}>{menuOpen ? 'x' : ''}</button>
            </div>
            <div className='nav-left-label' >
                <div className='nav-left-top' >
                    <img src={Images.Asset3} alt='' />
                </div>
                <ul>
                    <li><Link to="/thing1" >รายการร้องเรียนเข้าใหม่</Link></li>
                    <li><Link to="/thing2" >สรุปผลการดำเนินการ</Link></li>
                    <li><Link to="/thing1" >รายการร้องเรียนแต่ละหน่วยงาน</Link></li>
                    <li><Link to="/thing2" >ข่าวสาร</Link></li>
                    <li><Link to="/thing1" >สายด่วน</Link></li>
                    <li><Link to="/thing2" >แนวทางแก้ทุกข์</Link></li>
                    <li><Link to="/thing1" >การประมาณความพึงพอใจ</Link></li>
                </ul>
            </div>
        </div>
    )
}
export default NavbarLeft