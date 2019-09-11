import React, { Component, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import NarbarReport from './NarbarReport';
import Images from '../Images';
import user from '../../mobx/user';
import { Noti } from '../Static/adminStatic';

const NavbarHeadAdmin = ({ location, userRole, menuNav, history, dropNoti, openDrop }) => {
	let [ path, setPath ] = useState('/');
	let { pathname } = location;

	let title =
		pathname === '/adminreport'
			? 'รายการร้องเรียน'
			: pathname === '/thing2'
				? 'หน่วยงานและการถูกร้องเรียน'
				: pathname === '/admin/reportsummary'
					? 'สรุปผลการดำเนินการ'
					: pathname === '/admin/news'
						? 'ข่าวสาร'
						: pathname === '/admin/hotline'
							? 'สายด่วน'
							: pathname === '/admin/question'
								? 'แนวทางแก้ทุกข์'
								: pathname === '/admin/rating'
									? 'การประมาณความพึงพอใจ'
									: pathname === '/admin/ipaddress' ? 'ค้นหาตาม IP Address' : null;

	return (
		<React.Fragment>
			<div className="nav-head-admin">
				<div className="-left">{title}</div>
				<div className="-right">
					<div className="nav-head-right-radius -noti" onClick={dropNoti}>
						{Noti.length != 0 ? (
							<div className="noti-alert">
								<p>{Noti.length}</p>
							</div>
						) : null}
						<img src={Images.Noti} alt="" />
					</div>
					{openDrop ? (
						<React.Fragment>
							<div className="dropdownNoti">
								{Noti.length == 0 ? (
									<div className="layerNotNoti">
										<p>ไม่มีการตอบกลับ</p>
									</div>
								) : (
									Noti.map((el, i) => {
										console.log(Noti.length);
										return (
											<div className={`layerNoti ${i % 2 ? 'even' : ''}`} key={i}>
												<h4>{el.name}</h4>
												<span>
													{el.position}, {el.date}
												</span>
												<p>
													ได้ตอบกลับเรื่องร้องเรียน
													<label> {el.moi}</label>
												</p>
											</div>
										);
									})
								)}
							</div>
							<div className="bgDrop" onClick={dropNoti} />
						</React.Fragment>
					) : null}
					<div
						className="-logout"
						onClick={() => {
							history.push('/login');
							user.removeUser();
						}}
					>
						ออกจากระบบ
					</div>
				</div>
			</div>
			{/* ---------------------------------------- */}
		</React.Fragment>
	);
};
export default withRouter(NavbarHeadAdmin);
