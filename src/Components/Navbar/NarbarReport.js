import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

const NarbarReport = ({ location, }) => {
    // let { pathname } = location
    console.log(location)
    return (
        <div className='nav-top row' >
            <div className={location === '/admin/reportdetail' ? 'col-md-4 navbar-list -active' : 'col-md-4 navbar-list'} >
                <Link to={`/admin/reportdetail`} >
                    <p>เรื่องร้องเรียนเข้ามาใหม่</p>
                </Link>
            </div>
            <div className={location === '/admin/reportcreate' ? 'col-md-4 navbar-list -active' : 'col-md-4 navbar-list'} >
                <Link to={`/admin/reportcreate`} >
                    <p>สร้างเรื่องร้องเรียนใหม่</p>
                </Link>
            </div>
            <div className={location === '/admin/forward' ? 'col-md-4 navbar-list -active' : 'col-md-4 navbar-list'} style={{ border: 'none' }} >
                <Link to={`/admin/forward`} >
                    <p>การส่งต่อหน่วยงาน</p>
                </Link>
            </div>
        </div>
    )
}
export default NarbarReport