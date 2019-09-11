import React, { Component, useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import NarbarReport from './NarbarReport'
import Images from '../Images'
import user from '../../mobx/user';

const NavbarTop = ({ location, userRole, }) => {
    let [path, setPath] = useState("/")
    let { pathname } = location
    return (
        <React.Fragment>
            {
                user.role.toLocaleLowerCase() !== 'user' ? ''
                    :
                    <div className='nav-top row' >
                        <div className={pathname === '/news' ? 'col-md-2 navbar-list -active' : 'col-md-2 navbar-list'}>
                            <Link to={`/news`} >
                                <img src={Images.Asset10} alt='' />
                                <p>ข่าวจริงประเทศไทย</p>
                            </Link>
                        </div>
                        {/* <div className={path === '/' ? 'col-md-2 navbar-list -active' : 'col-md-2 navbar-list'} onClick={() => setPath('/')}> */}
                        <div className={pathname === '/' ? 'col-md-2 navbar-list -active' : 'col-md-2 navbar-list'}>
                            <Link to={`/`} >
                                <img src={Images.Asset8} alt='' />
                                <p>แจ้งเรื่องร้องเรียน</p>
                            </Link>
                        </div>
                        {/* <div className={path === '/tracking' ? 'col-md-2 navbar-list -active' : 'col-md-2 navbar-list'} onClick={() => setPath('/tracking')} > */}
                        <div className={pathname === '/tracking' ? 'col-md-2 navbar-list -active' : 'col-md-2 navbar-list'}>
                            <Link to={`/tracking`} >
                                <img src={Images.Asset9} alt='' />
                                <p>ติดตามเรื่องและสถานะเรื่อง</p>
                            </Link>
                        </div>
                        <div className={pathname === '/hotline' ? 'col-md-2 navbar-list -active' : 'col-md-2 navbar-list'} >
                            <Link to={`/hotline`} >
                                <img src={Images.Asset11} alt='' />
                                <p>สายด่วน</p>
                            </Link>
                        </div>
                        <div className={pathname === '/question' ? 'col-md-2 navbar-list -active' : 'col-md-2 navbar-list'} >
                            <Link to={`/question`} >
                                <img src={Images.Asset12} alt='' />
                                <p>แนวทางแก้ทุกข์</p>
                            </Link>
                        </div>
                        <div className={pathname === '/rate' ? 'col-md-2 navbar-list -active' : 'col-md-2 navbar-list'}>
                            <Link to={`/rate`} >
                                <img src={Images.Asset13} alt='' />
                                <p>ประเมินความพึงพอใจ</p>
                            </Link>
                        </div>
                    </div>
            }
            {/* ---------------------------------------- */}
        </React.Fragment>
    )
}
export default withRouter(NavbarTop)
