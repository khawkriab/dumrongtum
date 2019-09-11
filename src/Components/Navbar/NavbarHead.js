import React, { useState, useEffect } from 'react'
import Images from '../Images'
import { Link, } from 'react-router-dom'
import user from '../../mobx/user';
import { Observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import { get, post } from '../../api'


const NavbarHead = ({ userRole, menuOpen, menuNav, history }) => {

    const [profile, setProfile] = useState(null)

    // load profile data
    useEffect(async () => {
        try {
            const get_profile = await get('/auth/profile')
            setProfile({ ...get_profile })

        } catch (error) {
            console.error(error.message)
        }
    }, [])

    const onLogout = async () => {
        await post('/auth/logout')
        history.push('/login')
        user.removeUser()

    }

    return (
        <Observer>
            {() =>
                <React.Fragment>
                    <div className='nav-head' >
                        {
                            user.role.toLocaleLowerCase() !== 'user' ? <React.Fragment>
                                <div className='nav-head-left'>
                                    <img onClick={menuNav} src={Images.Asset40} alt='' style={{ cursor: 'pointer' }} />
                                </div>
                            </React.Fragment>
                                : <React.Fragment>
                                    <div className='nav-head-left'>
                                        <div className='nav-head-left-img'>
                                            {/* ================= profile ================*/}
                                            <img src={profile ? profile.path : Images.Asset30} alt='' />
                                        </div>
                                        <p>{profile && profile.fname} {profile && profile.lname}</p>
                                    </div>
                                </React.Fragment>
                        }
                        <div className='nav-head-cen'>
                            <img src={Images.Asset42} alt='' />
                        </div>
                        <div className='nav-head-right'>
                            <div className='nav-head-right-radius'>
                                <div className='noti-alert' >
                                    <p>1</p>
                                </div>
                                <img src={Images.Asset6} alt='' />
                            </div>
                            <div className='nav-head-right-out' onClick={onLogout} >
                                <img src={Images.Asset7} alt='' />
                                <p>ออกจากระบบ</p>
                            </div>
                        </div>
                    </div>

                    <div className='nav-left' style={menuOpen ? { display: 'none' } : {}}>
                        <div>
                            <div className='nav-left-close'>
                                <button onClick={menuNav}>{menuOpen ? '' : 'x'}</button>
                            </div>
                            <div className='nav-left-label' >
                                <div className='nav-left-top' >
                                    <img src={Images.Asset3} alt='' />
                                </div>
                                <ul>
                                    <li><Link to="/admin/report" >รายการร้องเรียนเข้าใหม่</Link></li>
                                    <li><Link to="/admin/reportsummary" >สรุปผลการดำเนินการ</Link></li>
                                    <li><Link to="/admin/department" >รายการร้องเรียนแต่ละหน่วยงาน</Link></li>
                                    <li><Link to="/admin/news" >ข่าวสาร</Link></li>
                                    <li><Link to="/admin/hotline" >สายด่วน</Link></li>
                                    <li><Link to="/admin/questionanswer" >แนวทางแก้ทุกข์</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            }

        </Observer>

    )
}

const _NavbarHead = withRouter(NavbarHead)

export default _NavbarHead


