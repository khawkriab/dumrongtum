import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Images from '../Images';
import User from '../../mobx/user';

export default class NavbarTopAdmin extends Component {
	render() {
		let pathname = window.location.pathname;
		if (User.role == 'ADMIN') {
			return (
				<div>
					<ul>
						<li
							className={
								pathname.includes('/adminreport') ||
								pathname === '/' ||
								pathname.includes('admindepartcompaint') ? (
									'active'
								) : (
									''
								)
							}
						>
							<Link to="/adminreport">รายการร้องเรียน</Link>
						</li>
						<li
							className={
								pathname === '/admin/central' || pathname.includes('/admin/government') ? 'active' : ''
							}
						>
							<Link to="/admin/central">หน่วยงานและการถูกร้องเรียน</Link>
						</li>
						<li className={pathname === '/admin/reportsummary' ? 'active' : ''}>
							<Link to="/admin/reportsummary">สรุปผลการดำเนินการ</Link>
						</li>
						<li className={pathname === '/admin/news' ? 'active' : ''}>
							<Link to="/admin/news">ข่าวสาร</Link>
						</li>
						<li className={pathname === '/admin/hotline' ? 'active' : ''}>
							<Link to="/admin/hotline">สายด่วน</Link>
						</li>
						<li
							className={
								pathname === '/admin/question' || pathname.includes('/admin/question_edit') ? (
									'active'
								) : (
									''
								)
							}
						>
							<Link to="/admin/question">แนวทางแก้ทุกข์</Link>
						</li>
						<li className={pathname === '/admin/rating' ? 'active' : ''}>
							<Link to="/admin/rating">การประมาณความพึงพอใจ</Link>
						</li>
						<li className={pathname === '/admincontact' ? 'active' : ''}>
							<Link to="/admincontact">แก้ไขข้อมูลการติดต่อ</Link>
						</li>
						<li className={pathname === '/admin/ipaddress' ? 'active' : ''}>
							<Link to="/admin/ipaddress">ค้นหาตาม IP Address</Link>
						</li>
					</ul>
				</div>
			);
		}
		if (User.role == 'CENTRAL') {
			return (
				<div>
					<ul>
						<li
							className={
								pathname.includes('/subadminreport') ||
								pathname === '/' ||
								pathname.includes('subadmindepartcomp') ? (
									'active'
								) : (
									''
								)
							}
						>
							<Link to="/subadminreport">รายการร้องเรียน</Link>
						</li>
						<li className={pathname.includes('/subadmin_government_detail') ? 'active' : ''}>
							<Link to="/subadmin_government_detail">หน่วยงาน</Link>
						</li>
					</ul>
				</div>
			);
		}
	}
}
