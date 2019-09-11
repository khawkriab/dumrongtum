import React, { Component } from 'react';
import Images from '../Components/Images';
import { PanelRight, PanelContent, PanelWhi } from '../Components/PartAdmin/MainAdmin';
import {
	HeadRight,
	HeadLeft,
	Bgblue,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button
} from '../Asset/styleAdmin';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { InputFormGroup } from '../Components/Form/Input';
import { Img } from '../Components/Image/Img';
import { Search } from '../Components/Search/Search';
import Modal from 'react-responsive-modal';
import swal from 'sweetalert';
import Swal from 'sweetalert2';
import { post, get } from '../api';
import moment from 'moment';

export default class SubAdminCentralGovermentDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			oldItem: [],
			Item: [],
			currentItem: [],
			currentPage: 1,
			tab: 1,
			isOpen: false,
			// --------------
			centralUser: [],
			user_info_id: null,
			username: null,
			password: null,
			fname: '',
			lname: null,
			phone: null,
			// --------------
			central_info: {}
		};
	}
	// -----------------------------------------------------------------------------------------------------------------------
	componentDidMount = () => {
		this.fetchCentralUser();
	};
	// -----------------------------------------------------------------------------------------------------------------------
	fetchCentralUser = async (e) => {
		const item = await get('/central/user_central');
		this.setState({ centralUser: item.all_central, central_info: item.central_info });
		// console.log('item>>>>', item);
	};
	// -----------------------------------------------------------------------------------------------------------------------
	onPageChanged = (data) => {
		let { currentPage } = data;
		this.setState({ currentPage });
	};
	// -----------------------------------------------------------------------------------------------------------------------
	searchItem = async (e) => {
		let texts = e.target.value.toLowerCase();
		const item = await get('/central/user_central');
		let res_products = item.all_central
			.map((e) => ({ ...e, fullname: e.fname + ' ' + e.lname }))
			.filter(
				(e, i) =>
					String(e.fname).toLowerCase().indexOf(texts) > -1 ||
					String(e.lname).toLowerCase().indexOf(texts) > -1 ||
					String(e.phone).toLowerCase().indexOf(texts) > -1 ||
					String(e.fullname).toLowerCase().indexOf(texts) > -1
			);
		this.setState({ centralUser: res_products });
	};
	// -----------------------------------------------------------------------------------------------------------------------
	fullname = (cell, row) => {
		return (
			<p>
				{row.fname} {row.lname}
			</p>
		);
	};
	// -----------------------------------------------------------------------------------------------------------------------
	_onChangeText = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	// -----------------------------------------------------------------------------------------------------------------------
	onOpenModal = (func, el) => {
		func === 'create' || func === 'close'
			? this.setState({
					isOpen: !this.state.isOpen,
					user_info_id: null,
					username: null,
					fname: '',
					lname: null,
					phone: null,
					password: null
				})
			: this.setState({
					isOpen: !this.state.isOpen,
					user_info_id: el.user_info_id,
					username: el.username,
					fname: el.fname,
					lname: el.lname,
					phone: el.phone,
					password: el.password
				});
	};
	// -----------------------------------------------------------------------------------------------------------------------
	onCreate = async () => {
		const { username, fname, lname, phone, central_info } = this.state;
		try {
			const item = await post('/central/add_user', {
				username,
				fname,
				lname,
				phone,
				central_id: central_info.central_id
			});
			swal({
				title: 'เรียบร้อย',
				text: 'เพิ่มเจ้าหน้าที่สำเร็จ \n Password : ' + item.password,
				icon: 'success'
			}).then(() => {
				this.onOpenModal('close');
				this.componentDidMount();
			});
		} catch (error) {
			swal({
				title: error,
				// text: 'เพิ่มเจ้าหน้าที่สำเร็จ \n Password : ' + item.password ,
				icon: 'warning'
			});
		}
	};
	// -----------------------------------------------------------------------------------------------------------------------
	onUpdate = async () => {
		const { user_info_id, fname, lname, phone } = this.state;
		const item = await post('/central/update_user', {
			user_info_id,
			fname,
			lname,
			phone,
			central_id: this.props.match.params.id
		});
		if (item) {
			swal({
				title: 'เรียบร้อย',
				text: 'แก้ไขเจ้าหน้าที่สำเร็จ',
				icon: 'success'
			}).then(() => {
				this.onOpenModal('close');
				this.componentDidMount();
			});
		}
	};
	// -----------------------------------------------------------------------------------------------------------------------
	onRemove = async (e) => {
		Swal.fire({
			title: 'คุณต้องการลบหน่วยงานใช่หรือไม่',
			text: 'คุณต้องการลบหน่วยงานใช่หรือไม่',
			type: 'warning',
			showCancelButton: true,
			confirmButtonText: 'ใช่',
			cancelButtonText: 'ไม่'
		}).then(async (result) => {
			if (result.value) {
				const item = await post();
				if (item) {
					Swal.fire('ลบสำเร็จ!', 'หน่วยงานได้ถูกลบแล้ว', 'success').then(() => {
						this.fetchItem();
					});
				}
			}
		});
	};
	// -----------------------------------------------------------------------------------------------------------------------

	render() {
		const { Item, tab, centralUser, central_info } = this.state;
		return (
			<PanelRight>
				<Bgblue />
				<PanelContent>
					<div style={{ marginTop: '-75px' }}>
						<PanelWhi>
							<div className="government-detail-content">
								<div>
									<Img
										src={Images.logo}
										w="125px"
										h="125px"
										raduis="10px"
										boxshow="1px 1px 5px #ccc"
									/>
								</div>
								<div className="detail">
									<div>
										<h2>{central_info.central_name}</h2>
										<div>
											<Button bg="#29a4db" onClick={() => this.onOpenModal('create')}>
												+ เพิ่มเจ้าหน้าที่
											</Button>
										</div>
									</div>
									<div>
										<div>
											<div>
												<span>เรื่องร้องเรียนทั้งหมด</span>
												<span>
													<strong>{central_info.subject}</strong>เรื่อง
												</span>
											</div>
											<div>
												<span>เรื่องที่ยุติ</span>
												<span>
													<strong>{central_info.end}</strong>เรื่อง
												</span>
											</div>
											<div>
												<span>อยู่ระหว่างดำเนินการ</span>
												<span>
													<strong>{central_info.on}</strong>เรื่อง
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</PanelWhi>
					</div>
					{/* ------------------------- */}
					<PanelWhi>
						<div className="d-flex justify-content-between align-items-end">
							<HeadLeft>
								<Search title="ค้นหาหน่วยงาน" placeholder="ค้นหา" onChange={this.searchItem} />
							</HeadLeft>
						</div>
						<div className="government-detail-officer">
							{centralUser.length > 0 &&
								centralUser.map((el) => (
									<div>
										<div>
											<Img
												src={Images.logo}
												w="50px"
												h="50px"
												raduis="50%"
												border="1px solid #ddd"
											/>
											<span>
												<strong>
													{el.fname} {el.lname}
												</strong>
											</span>
											{el.phone && (
												<span>
													{' '}
													<img src={Images.Asset18} alt="" />{' '}
													{el.phone.slice(0, 3) + '-' + el.phone.slice(3, 10)}
												</span>
											)}
										</div>
										<div onClick={() => this.onOpenModal('edit', el)}>
											<strong>แก้ไข</strong>
										</div>
									</div>
								))}
						</div>
					</PanelWhi>
					{this.Modal()}
				</PanelContent>
			</PanelRight>
		);
	}

	Modal() {
		let { isOpen } = this.state;
		return (
			<Modal open={isOpen} onClose={() => this.onOpenModal('close')} little>
				<ModalContent>
					<ModalHeader>แก้ไขเจ้าหน้าที่หน่วยงาน</ModalHeader>
					<ModalBody>
						<div className="d-flex justify-content-between">
							<Img src={Images.logo} w="140px" h="140px" border="1px solid #ddd" px="10px" py="10px" />
							<div style={{ width: '320px' }}>
								<InputFormGroup
									title="ชื่อผู้ใช้"
									name="username"
									value={this.state.username}
									onChange={this._onChangeText}
									disabled={this.state.user_info_id}
								/>
								{this.state.user_info_id && (
									<InputFormGroup
										title="รหัสผ่าน"
										name="password"
										value={this.state.password}
										disabled
									/>
								)}
								<InputFormGroup
									title="ชื่อจริง"
									name="fname"
									value={this.state.fname}
									onChange={this._onChangeText}
								/>
								<InputFormGroup
									title="นามสกุล"
									name="lname"
									value={this.state.lname}
									onChange={this._onChangeText}
								/>
								<InputFormGroup
									title="หมายเลขโทรศัพท์"
									name="phone"
									value={this.state.phone}
									onChange={this._onChangeText}
								/>
							</div>
						</div>
					</ModalBody>
					<ModalFooter>
						{this.state.user_info_id && <Button onClick={this.onUpdate}>บันทึก</Button>}
						{this.state.user_info_id && (
							<Button bg="#f00" bgH="#c00" onClick={() => this.onRemove()}>
								ลบเจ้าหน้าที่
							</Button>
						)}
						{!this.state.user_info_id && <Button onClick={this.onCreate}>เพิ่ม</Button>}
					</ModalFooter>
				</ModalContent>
			</Modal>
		);
	}
}
