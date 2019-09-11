import React, { Component } from 'react';
import { TextLine } from '../TextHead';
import { address } from '../../functions/index';
import MapComponent from '../Maps/MapComponent';
import { path } from '../../api';
import _ from 'lodash';
import User from '../../mobx/user';
import { Button, LabelBT } from '../../Asset/styleAdmin';
import { PanelRight, PanelContent, PanelHead, PanelWhi, PanelWhiMar, PanelWhiMargL } from '../PartAdmin/MainAdmin';
import { SumTrack, Sumtext, SumDetail } from '../Div/SetDiv';
import {
	LeftRight,
	ContentLeft,
	ContentRight,
	TrackStatusStart,
	TrackStatus,
	TrackStatusEnd
} from '../../Asset/styled';
import '../../Asset/css/adminAddCompaintStyle.css';
import { Img } from '../../Components/Image/Img';
import Images from '../../Components/Images';
import moment from 'moment';
import 'moment/locale/th';
import { InputFormGroup } from './Input';
moment.locale('th');



export function Divls({ title, detail, onClick, request, requestLink }) {
	return (
		<div>
			<label>{title}</label>
			{!requestLink && <span style={{ color: request ? '#29a4db' : '' }}>{detail}</span>}
			{requestLink && (
				<a style={{ color: request ? '#29a4db' : '' }} onClick={onClick}>
					{detail}
				</a>
			)}
		</div>
	);
}
export function Head_compaint({
	modallistname,
	onClick,
	data,
	focut_head,
	addonClick,
	intensive,
	formstaff_join,
	btnTables,
	chat_staff,
	insert_staff_chat,
	set_message,
	onEnter,
	message,
	messagesEnd
}) {
	// console.log('formstaff_join', formstaff_join.filter((e) => e.status == 0));
	return focut_head == 1 ? (
		<PanelWhi>
			<div className="d-flex justify-content-between align-items-start">
				<div className="depart-grid">
					<Divls title="รหัสเรื่องร้องเรียน" detail={data.id == null ? '-' : data.id} />
					<Divls title="รหัส MOI" detail={data.moi == null ? '-' : data.moi} />
					<Divls
						title="แจ้งเรื่องวันที่"
						detail={
							data.insert_at == null ? (
								'-'
							) : (
									moment(data.insert_at).add(543, 'y').format('DD MMMM YYYY HH:mm:ss')
								)
						}
					/>
					<Divls
						title="วันที่รับเรื่อง"
						detail={
							data.receive_at == null ? (
								'-'
							) : (
									moment(data.receive_at).add(543, 'y').format('DD MMMM YYYY HH:mm:ss')
								)
						}
					/>
					<Divls title="ช่องทางการร้องเรียน" detail={data.platform == null ? '-' : data.platform} />
					<Divls title="สถานะเรื่อง" detail={data.status_name == null ? '-' : data.status_name} request />
					<Divls
						title="เจ้าหน้าที่หน่วยงานที่รับผิดชอบ"
						detail={
							formstaff_join.length > 0 && formstaff_join.filter((e) => e.status == 1).length > 0 ? (
								formstaff_join
									.filter((e) => e.status == 1)
									.sort((a, b) => moment(b.date) - moment(a.date))[0].name
							) : (
									'+ เพิ่มหน่วยงานที่รับผิดชอบ'
								)
						}
						onClick={formstaff_join.filter((e) => e.status == 1).length == 0 && addonClick}
						request={formstaff_join.filter((e) => e.status == 1).length == 0 ? true : false}
						requestLink={formstaff_join.filter((e) => e.status == 1).length == 0 ? true : false}
					/>
					<Divls
						title="หน่วยงานที่รับผิดชอบ"
						detail={
							formstaff_join.length > 0 && formstaff_join.filter((e) => e.status == 1).length > 0 ? (
								formstaff_join
									.filter((e) => e.status == 1)
									.sort((a, b) => moment(b.date) - moment(a.date))[0].central_name
							) : (
									'-'
								)
						}
					/>
				</div>
				<div className="d-flex">
					<Button>
						<i class="fas fa-qrcode" /> QR CODE
					</Button>
				</div>
			</div>
		</PanelWhi>
	) : // ---------------------------------------------------------------------------------------------------------------------------------------------------
		focut_head == 2 ? (
			<div>
				<PanelWhiMar>
					{formstaff_join.length > 0 ? User.role == 'ADMIN' ? (
						<div className="depart-chat-people">
							<div>
								{formstaff_join.filter((e) => e.status == 1).length > 0 && (
									<div>
										<ContentLeft>
											<SumTrack title="ผู้ร่วมห้องสนทนา" />
										</ContentLeft>
										<div>
											{formstaff_join
												.filter((e) => e.status == 1)
												.slice(0, 5)
												.map((e) => (
													<Img
														w={'50px'}
														h={'50px'}
														src={
															e.profile_pic == 'null' || e.profile_pic == null ? (
																Images.Asset4
															) : (
																	path + e.profile_pic
																)
														}
														alt={'something'}
													/>
												))}
											<i className="add fas fa-ellipsis-h" onClick={() => modallistname(1)} />
										</div>
									</div>
								)}
								{formstaff_join.filter((e) => e.status == 0).length > 0 && (
									<div className="waiting">
										รอการตอบรับ : &nbsp;
											{formstaff_join
											.filter((e) => e.status == 0)
											.slice(0, 5)
											.map((e) => <text>{e.central_name + ','}</text>)}
										<i className="add-wait fas fa-ellipsis-h" onClick={() => modallistname(0)} />
									</div>
								)}
							</div>
							<Button onClick={onClick}>เพิ่มหน่วยงาน </Button>
						</div>
					) : (
							<div>
								{formstaff_join.some(
									(e) =>
										e.user_info_id == User.user_info_id && e.status == 1 && e.central_id == User.central_id
								) ? (
										<div className="d-flex justify-content-between">
											<div>
												{formstaff_join.filter((e) => e.status == 1).length > 0 && (
													<div>
														<ContentLeft>
															<SumTrack title="ผู้ร่วมห้องสนทนา" />
														</ContentLeft>
														<div className="d-flex">
															{formstaff_join
																.filter((e) => e.status == 1)
																.slice(0, 5)
																.map((e) => (
																	<img
																		src={
																			e.profile_pic == 'null' || e.profile_pic == null ? (
																				Images.Asset4
																			) : (
																					path + e.profile_pic
																				)
																		}
																	/>
																))}
															<i className="add fas fa-ellipsis-h" onClick={() => modallistname(1)} />
														</div>
													</div>
												)}
												{formstaff_join.filter((e) => e.status == 0).length > 0 && (
													<div className="d-flex">
														<ContentLeft>
															<SumTrack title="รอการตอบรับ" />
														</ContentLeft>
														:
											<div className="d-flex">
															{formstaff_join
																.filter((e) => e.status == 0)
																.slice(0, 5)
																.map((e) => <text>{e.central_name + ','}</text>)}
															<button onClick={() => modallistname(0)}>...</button>
														</div>
													</div>
												)}
											</div>
											<button style={{ height: '30px' }} onClick={onClick}>
												เพิ่มหน่วยงาน
								</button>
										</div>
									) : formstaff_join.some((e) => e.status == 0 && e.central_id == User.central_id) ? (
										<div>
											<text style={{ width: '100%', fontWeight: '200px', fontSize: '15px' }}>
												------ คุณมีสิทธิ์รับเรื่อง ------
								</text>
											<br />
											<div>
												<button onClick={() => btnTables({ form_id: data.form_id })}>รับเรื่อง</button>
											</div>
										</div>
									) : (
											<text style={{ width: '100%', fontWeight: '200px', fontSize: '15px' }}>
												------ มีบุคคลากรคนอื่นรับเรื่องไปแล้ว ------
							</text>
										)}
							</div>
						) : User.role == 'ADMIN' ? (
							<div>
								<div>
									<text style={{ width: '100%', fontWeight: '200px', fontSize: '15px' }}>
										กรุณาเลือกหน่วยงาน
							</text>
								</div>
								<div>
									<Button onClick={onClick}>เลือกหน่วยงาน</Button>
								</div>
							</div>
						) : (
								<div>
									<div>
										<text style={{ width: '100%', fontWeight: '200px', fontSize: '15px' }}>
											------ คุณไม่มีสิทธิ์เข้าร่วมห้องสนทนา ------
							</text>
									</div>
								</div>
							)}
				</PanelWhiMar>
				{chat_staff.length > 0 && User.role == 'ADMIN' ? (
					<PanelWhiMar>
						<div className="depart-chat styleScroll">
							{chat_staff.sort((a, b) => moment(a.timestamp) - moment(b.timestamp)).map((e) => (
								<div>
									<div>
										<Img
											w={'40px'}
											h={'40px'}
											src={
												e.profile_pic == 'null' || e.profile_pic == null ? (
													Images.Asset4
												) : (
														path + e.profile_pic
													)
											}
										/>
										<div >
											<div>
												<strong >{e.name}</strong>
												<span>เจ้าหน้าที่{e.central_name}</span>
											</div>
											<text >{e.message}</text>
										</div>
									</div>
									<text>{moment(e.timestamp).add(543, 'years').format('LLL')}</text>
								</div>
							))}
							<div ref={(el) => messagesEnd(el)} > </div>
						</div>
						<div className="d-flex align-items-end w-100">
							<InputFormGroup
								value={message}
								onChange={(e) => set_message(e.target.value)}
								placeholder="กรอกข้อมูล"
								onKeyDown={onEnter}
								className={'w-100'}
								r={'20px'}
							/>
							<Button my={'1rem'} onClick={insert_staff_chat}>ส่ง</Button>
						</div>
					</PanelWhiMar>
				) : (
						formstaff_join.some(
							(e) => e.user_info_id == User.user_info_id && e.status == 1 && e.central_id == User.central_id
						) && (
							<PanelWhiMar>
								<div className="styleScroll" style={{ maxHeight: '300px' }}>
									{chat_staff.sort((a, b) => moment(a.timestamp) - moment(b.timestamp)).map((e) => (
										<div>
											<div className="d-flex justify-content-between">
												<div className="d-flex align-items-center">
													<div className="mr-2">
														<img
															src={
																e.profile_pic == 'null' || e.profile_pic == null ? (
																	Images.Asset4
																) : (
																		path + e.profile_pic
																	)
															}
														/>
													</div>
													<div className="d-flex flex-column">
														<div className="d-flex">
															<text className="mr-3">{e.name}</text>
															<text>เจ้าหน้าที่{e.central_name}</text>
														</div>
														<text className="text-align-left">{e.message}</text>
													</div>
												</div>
												<text>{moment(e.timestamp).add(543, 'years').format('LLL')}</text>
											</div>
											<hr />
										</div>
									))}
								</div>
								<div className="d-flex">
									<input
										value={message}
										onChange={(e) => set_message(e.target.value)}
										placeholder="กรอกข้อมูล"
										onKeyDown={onEnter}
									/>{' '}
									<button onClick={insert_staff_chat}>ส่ง</button>
								</div>
							</PanelWhiMar>
						)
					)}
			</div>
		) : // ---------------------------------------------------------------------------------------------------------------------------------------------------
			focut_head == 3 ? (
				<PanelWhiMar>
					<div>เจ้าหน้าที่ศุนย์ดำรงธรรม</div>
					<div>ติดต่อเจ้าหน้าที่</div>
				</PanelWhiMar>
			) : // ---------------------------------------------------------------------------------------------------------------------------------------------------
				focut_head == 4 ? (
					<PanelWhiMar>
						<embed
							src={`https://dkk.projectsoft.co.th/api/v1/form/pdf/${data.form_id}.pdf`}
							type="application/pdf"
							scrolling="auto"
							height="1000"
							width="850"
						/>
					</PanelWhiMar>
				) : (
						// ---------------------------------------------------------------------------------------------------------------------------------------------------
						focut_head == 5 && (
							<PanelWhiMar>
								<ContentLeft>
									<SumTrack title="เร่งรัดการดำเนินการ" />
								</ContentLeft>
								<hr />
								{intensive.length > 0 ? (
									intensive.map((e) => (
										<div style={{ paddingLeft: '3rem', paddingRight: '3rem' }}>
											<div style={{ display: 'flex', justifyContent: 'space-between' }}>
												<div>ผู้ว่าราชการจังหวัด</div>
												<div>{moment(e.timestamp).add(543, 'y').format('DD MMMM YYYY HH:mm:ss')}</div>
											</div>
											<div>{e.message}</div>
										</div>
									))
								) : (
										<div>---ไม่มีรายการเร่งรัด---</div>
									)}
							</PanelWhiMar>
						)
					);
}
export function History({
	data,
	uploadfile,
	filesupload,
	delImages,
	descrition,
	insert_form_tracking,
	del_tracking,
	openPic
}) {
	let USER = JSON.parse(localStorage.getItem('user'));
	return (
		<div>
			<textarea
				placeholder="กรอกข้อความ"
				style={{ width: '100%', minHeight: '100px', borderRadius: '5px', padding: '5px' }}
				onChange={(e) => descrition(e.target.value)}
			/>
			{filesupload.length > 0 && (
				<div className="mb-3">
					<div className="text-left mt-2">รายการอัพโหลด</div>
					<hr />

					{filesupload.map((e, i) => (
						<div className={`list depart-file ${e.name.match(/\.(png|jpg|jpeg)$/gi) ? 'jpg' : 'pdf'}`}>
							<div>{e.name}</div>
							<div className="close" onClick={() => delImages(i)}>
								x
							</div>
						</div>
					))}
				</div>
			)}
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<div style={{ display: 'flex' }}>
					<LabelBT
						bg="transparent"
						bgH="transparent"
						c="#000"
						bord="1px solid #ccc"
						mx="0px"
						className="file-upload jpg"
					>
						<input type="file" accept="image/x-png,image/jpeg" multiple onChange={uploadfile} />
						&nbsp;&nbsp;&nbsp; อัพโหลดรูปภาพ
					</LabelBT>
					<LabelBT
						bg="transparent"
						bgH="transparent"
						c="#000"
						bord="1px solid #ccc"
						className="file-upload pdf"
					>
						<input type="file" accept="application/pdf" multiple onChange={uploadfile} />
						&nbsp;&nbsp;&nbsp; อัพโหลดเอกสาร
					</LabelBT>
				</div>
				<Button mx="0" onClick={insert_form_tracking}>
					ส่ง
				</Button>
			</div>
			<hr />
			<div className="styleScroll">
				{data.trackinHistory.length > 0 ? (
					data.trackinHistory.sort((a, b) => moment(b.datetime) - moment(a.datetime)).map((e) => (
						<div className="depart-tracking">
							<div>
								<div>
									<div>{e.fname + ' ' + e.lname}</div>
									<span>{moment(e.datetime).add(543, 'y').format('DD MMMM YYYY HH:mm')} น.</span>
								</div>
								<div>
									{Number(USER.id_card) == Number(e.id_card) && (
										<span onClick={() => del_tracking(e.tracking_id)}>ลบ</span>
									)}
								</div>
							</div>
							<div>{e.description}</div>
							<div className="depart-about-file">
								ไฟล์ที่เกี่ยวข้อง :
								{e.files.length > 0 ? (
									e.files.map((e) => <label className="pdf"> {e.split('/')[2]} </label>)
								) : (
										''
									)}
							</div>
							<div>
								{e.pic.length === 1 ? (
									e.pic.map((e) => (
										<img className="full" src={path + e} alt="" onClick={() => openPic(path + e)} />
									))
								) : (
										e.pic.length > 0 &&
										e.pic.map((e) => <img src={path + e} alt="" onClick={() => openPic(path + e)} />)
									)}
							</div>
							<hr />
						</div>
					))
				) : (
						<div className="text-center">---ไม่มีรายการ---</div>
					)}
			</div>
		</div>
	);
}
export function DetailComp(props) {
	// console.log('props', props);
	const {
		complainant,
		subject,
		type,
		prefix,
		fname,
		lname,
		id_card,
		id_line,
		email,
		zipcode,
		location_name,
		disclose,
		complainant_data,
		detail,
		status,
		objective
	} = props.data;
	let coords = {
		latitude: props.data.lat,
		longitude: props.data.lng,
		location_name: props.data.location_name
	};
	let markerCoords = {
		lat: props.data.lat,
		lng: props.data.lng
	};
	let nameFile = props.data.evidence_files
		.map((e) => {
			let name = e.split('/')[2];
			let date = moment(new Date(Number(e.split('/')[2].split('.')[0]))).add(543, 'y').format('DD MMMM YYYY');
			return { name: name, date: date };
		})
		.concat(
			props.data.evidence_pic.map((e) => {
				let name = e.split('/')[2];
				let date = moment(new Date(Number(e.split('/')[2].split('.')[0]))).add(543, 'y').format('DD MMMM YYYY');
				return { name: name, date: date };
			})
		);
	// console.log('nameFile', nameFile);
	return (
		<div>
			<TextLine title="เรื่องร้องทุกข์" request />
			<Sumtext title="หัวข้อร้องทุกข์" detail={subject} wl="160px" />
			<Sumtext title="ประเภทเรื่อง" detail={type} wl="160px" />
			{/* -------------------------------------------------------------- */}
			<TextLine title="ข้อมูลผู้ร้อง" request />
			{disclose == 0 ? (
				<Sumtext title="ปกปิดข้อมูล" />
			) : (
					<div>
						<Sumtext title="ชื่อ-นามสกุลผู้ร้อง" detail={prefix + ' ' + fname + ' ' + lname} wl="160px" />
						<Sumtext title="หมายเลขประจำตัวประชาชน" detail={id_card} wl="160px" />
						<Sumtext title="ID LINE ผู้ร้องทุกข์" detail={id_line} wl="160px" />
						<Sumtext title="E-mail ผู้ร้องทุกข์" detail={email} wl="160px" />
						<Sumtext
							title="ที่อยู่"
							detail={
								address({
									..._.pick(props.data, [
										'house_number',
										'moo',
										'alleyway',
										'road',
										'sub_district',
										'district',
										'province'
									])
								}) + zipcode
							}
							wl="160px"
						/>
					</div>
				)}
			{/* -------------------------------------------------------------- */}
			<TextLine title="ผู้ถูกร้องทุกข์" request />
			{/* CENTRAL=หน่วยงาน,DEPARTMENT=หน่วยงานจากepam,PERSON=บุคคล,COMPANY=นิติบุคคล  */}
			{complainant === 'DEPARTMENT' ? (
				<Department item={complainant_data} />
			) : complainant === 'PERSON' ? (
				<Person item={complainant_data} />
			) : (
						<Company item={complainant_data} />
					)}
			{/* -------------------------------------------------------------- */}
			<TextLine title="รายละเอียดคำร้อง" request />
			<MapComponent coords={coords} markerCoords={markerCoords} onMarkerChange={(e) => console.log('e', e)} />
			<br />
			<Sumtext title="สถานที่เกิดเหตุ" detail={location_name} wl="100px" />
			<SumDetail title="รายละเอียด" detail={detail} />
			<SumDetail title="วัตถุประสงค์" detail={objective} />
			{/* -------------------------------------------------------------- */}
		</div>
	);
}
export function Department(props) {
	// console.log('propsCompany', props.item)
	let { department_name } = props.item;
	return (
		<React.Fragment>
			<Sumtext title="ข้อมูลผู้ร้อง" detail="หน่วยงาน" wl="160px" />
			<Sumtext title="หน่วยงานที่ถูกร้อง" detail={department_name} wl="160px" />
		</React.Fragment>
	);
}
export function Person(props) {
	// console.log('propsCompany', props.item)
	let { fname_person, lname_person, zipcode_person } = props.item;
	return (
		<React.Fragment>
			<Sumtext title="ข้อมูลผู้ร้อง" detail="บุคคล" wl="160px" />
			<Sumtext title="ชื่อ-นามสกุล ผู้ถูกร้องทุกข์" detail={fname_person + ' ' + lname_person} wl="160px" />
			{/* <Sumtext title='เบอร์โทรศัพท์ผู้ถูกร้องทุกข์' detail={} /> */}
			<Sumtext
				title="ที่อยู่"
				detail={
					address({
						..._.pick(props.item, [
							'house_number_person',
							'moo_person',
							'alleyway_person',
							'road_person',
							'sub_district_person',
							'district_person',
							'province_person'
						])
					}) + zipcode_person
				}
				wl="160px"
			/>
		</React.Fragment>
	);
}
export function Company(props) {
	// console.log('propsCompany', props.item)
	let { name_company, zipcode_company, phone_company, type_name } = props.item;
	return (
		<React.Fragment>
			<Sumtext title="ข้อมูลผู้ถูกร้อง" detail="นิติบุคคล" wl="160px" />
			<Sumtext title="ประเภท" detail={type_name} wl="160px" />
			<Sumtext title="ชื่อนิติบุคคลหรือบริษัท" detail={name_company} wl="160px" />
			<Sumtext title="หมายเลขโทรศัพท์" detail={phone_company} wl="160px" />
			<Sumtext
				title="ที่อยู่"
				detail={
					address({
						..._.pick(props.item, ['sub_district_company', 'district_company', 'province_company'])
					}) + zipcode_company
				}
				wl="160px"
			/>
		</React.Fragment>
	);
}
function HistoryStatus(status) {
	// console.log('status', status)
	switch (status) {
		case 0:
			return 'รอเจ้าหน้าที่รับเรื่อง';
		case 1:
			return 'กำลังตรวจสอบคำร้อง';
		case 2:
			return 'ตรวจสอบข้อเท็จจริง';
		case 3:
			return 'หน่วยงานกำลังดำเนินการ';
		case 4:
			return 'คำร้องไม่ชัดเจน';
		case 5:
			return 'ยุติเรื่อง';
		default:
			break;
	}
}
