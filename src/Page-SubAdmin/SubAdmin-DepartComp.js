import React, { Component } from 'react';
import {
	PanelRight,
	PanelContent,
	PanelHead,
	PanelWhi,
	PanelWhiMar,
	PanelWhiMargL
} from '../Components/PartAdmin/MainAdmin';
import { Bgblue, HeadLeft, HeadBtn } from '../Asset/styleAdmin';
import { SumTrack } from '../Components/Div/SetDiv';
import { LeftRight, ContentLeft, ContentRight, TrackStatusStart, TrackStatus, TrackStatusEnd } from '../Asset/styled';
import color from '../Asset/color';
import { changeStatusRadio } from '../Components/Static/static';
import { post, get } from '../api';
import moment from 'moment';
import { DetailComp, History, Head_compaint } from '../Components/Form/FormComp';
import Modal from 'react-responsive-modal';
import swal from 'sweetalert';
import Swal from 'sweetalert2';
import { TextLine } from '../Components/TextHead';
import { RadioRow } from '../Components/Form/Input';
import ModalCompaint from '../Components/Modal/ModalAdminCompaint';
import ModalPerson from '../Components/Modal/ModalPerson';
import LoaderSaving from '../Components/Load/LoaderSaving';
import USER from '../mobx/user';
import 'moment/locale/th';
moment.locale('th');

// export default class AdminDepartComp extends Component {
class SubAdminDepartComp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			form_id: '',
			result: null,
			showPopup: true,
			openModal: false,
			openPic: false,
			showImage: null,
			radiorow: '',
			focut_head: 1,
			intensive: [],
			Modalcompaint: false,
			status_id: null,
			loadingSave: false,
			//----------------
			files: [],
			descrition: '',
			nameFile: [],
			// ---------------
			central: [],
			category_id: [],
			description_transfer: null,
			expire: null,
			chat_staff: [],
			ModalPersons: false,
			waite: 0,
			formstaff_join: [],
			message: ''
		};
	}
	// ------------------------------------------------------------------------------------------------------------------
	componentDidMount = async () => {
		this.comPlaint();
		this.Intensive();
		this.formstaff_join();
		this.central();
		// this.interval = setInterval(() => {
		this.chat_staff();
		// }, 2000);
	};
	// componentWillUnmount() {
	// 	clearInterval(this.interval);
	// }
	chat_staff = async () => {
		const form_id = this.props.location.state.id;
		let res = await get('/chat/staff/' + form_id);
		// console.log('res', res);
		this.setState({ chat_staff: res });
	};
	formstaff_join = async () => {
		const form_id = this.props.location.state.id;
		let res = await get('/form/staff_join/' + form_id);
		this.setState({ formstaff_join: res });
		// console.log('res', res);
	};
	async comPlaint() {
		const form_id = this.props.location.state.id;
		try {
			const result = await post(`/complaint/form_tracking`, { form_id });
			// console.log('result', result);
			let nameFile = result.evidence_files
				.map((e) => {
					let name = e.split('/')[2];
					let date = moment(new Date(Number(e.split('/')[2].split('.')[0])))
						.add(543, 'y')
						.format('DD MMMM YYYY');
					return { name: name, date: date, type: 'pdf' };
				})
				.concat(
					result.evidence_pic.map((e) => {
						let name = e.split('/')[2];
						let date = moment(new Date(Number(e.split('/')[2].split('.')[0])))
							.add(543, 'y')
							.format('DD MMMM YYYY');
						return { name: name, date: date, type: 'jpg' };
					})
				);
			this.setState({ result: result, radiorow: result.status, nameFile });
		} catch (error) {
			alert('complant', error);
		}
	}
	// ------------------------------------------------------------------------------------------------------------------
	async central() {
		try {
			const result = await get(`/central/`);
			this.setState({ central: result });
			// console.log('central', this.state.central);
		} catch (error) {
			alert('central', error);
		}
	}
	// ------------------------------------------------------------------------------------------------------------------
	async Intensive() {
		let form_id = this.props.location.state.id;
		let res = await get('/form/precipitation/' + form_id);
		// console.log('res', res);
		this.setState({ intensive: res });
	}
	// ------------------------------------------------------------------------------------------------------------------
	updatetypeInput = (e) => {
		this.setState({ [e.target.name]: e.target.value, status_id: e.target.value });
	};
	// ------------------------------------------------------------------------------------------------------------------
	saveChangeStatus = async () => {
		try {
			let obj = {
				form_id: this.state.result.form_id,
				status: Number(this.state.status_id)
			};
			await post('/form/change_status', obj);
			swal({
				title: 'เรียบร้อย',
				text: 'เปลี่ยนสถานะการดำเนินการเรียบร้อย',
				icon: 'success'
			}).then((willDelete) => {
				if (willDelete) {
					window.location.reload();
					// this.props.history.push('/tracking')
				}
			});
			this.setState({ openModal: false });
		} catch (error) {
			swal('', error, 'warning');
		}
	};
	// ------------------------------------------------------------------------------------------------------------------
	onOpenModal = () => {
		this.setState({ openModal: true });
	};
	onOpenPic = (e) => {
		this.setState({ openPic: true, showImage: e });
	};
	onCloseModal = () => {
		this.setState({ openModal: false, openPic: false });
	};
	// ------------------------------------------------------------------------------------------------------------------
	///------------------------------------------------------------------------------------------------------------------
	uploadImg = (event) => {
		Object.keys(event.target.files).forEach((key) => {
			let { files } = this.state;
			files.push(event.target.files[key]);
			this.setState({ files });
		});
	};
	delImages = (i) => {
		let { files } = this.state;
		files.splice(i, 1);
		this.setState({ files });
	};
	async insert_form_tracking() {
		this.setState({ loadingSave: true });
		let { files, descrition } = this.state;
		let USER = JSON.parse(localStorage.getItem('user'));
		// console.log('USER', USER);
		let formdata = new FormData();

		formdata.append('form_id', this.props.location.state.id);
		formdata.append('user_info_id', USER.user_info_id);
		formdata.append('description', descrition);

		files.forEach((element) => {
			formdata.append('file', element);
		});
		try {
			await post('/complaint/insert_form_tracking', formdata, true);
			this.setState({ loadingSave: false });
			swal('สำเร็จ', 'เพิ่มรายการการติดตามเสร็จสิ้น', 'success').then(() => this.componentDidMount());
		} catch (error) {
			swal('', error, 'warning');
		}
	}
	del_tracking = async (e) => {
		Swal.fire({
			title: 'คุณต้องการลบหน่วยงานใช่หรือไม่',
			// text: 'ลบสำเร็จ',
			type: 'warning',
			showCancelButton: true,
			confirmButtonText: 'ใช่',
			cancelButtonText: 'ไม่'
		}).then(async (result) => {
			if (result.value) {
				try {
					await post('/complaint/delete_tracking', { tracking_id: e });
					swal('สำเร็จ', 'ลบรายการการติดตามเสร็จสิ้น', 'success').then(() => this.componentDidMount());
				} catch (error) {
					swal('', error, 'warning');
				}
			}
		});
	};
	// ------------------------------------------------------------------------------------------------------------------
	sendTransfer = async (e) => {
		Swal.fire({
			title: 'คุณต้องการส่งต่อหน่วยงานใช่หรือไม่',
			// text: 'ลบสำเร็จ',
			type: 'warning',
			showCancelButton: true,
			confirmButtonText: 'ใช่',
			cancelButtonText: 'ไม่'
		}).then(async (result) => {
			if (result.value) {
				try {
					await post('/form/transfer', {
						form_id: this.state.result.form_id,
						category_id: JSON.stringify(this.state.category_id),
						description: this.state.description_transfer,
						expire: this.state.expire
					});
					this.setState({ Modalcompaint: false });
					swal('สำเร็จ', 'ส่งต่อหน่วยงานแล้ว', 'success').then(() => this.componentDidMount());
				} catch (error) {
					swal('', error, 'warning');
				}
			}
		});
	};
	// ------------------------------------------------------------------------------------------------------------------
	_onChangeText = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	// -----------------------------------------------------------------------------------------------------------------------
	_onChangeBox = (e) => {
		const { category_id } = this.state;

		if (e.target.checked) {
			category_id.push(Number(e.target.value));
			this.setState({ category_id });
		} else {
			let i = category_id.indexOf(e.target.value);
			category_id.splice(i, 1);
			this.setState({ category_id });
		}
	};
	// -----------------------------------------------------------------------------------------------------------------------
	btnTables = (row) => {
		swal({
			title: 'ยืนยัน?',
			text: 'คุณต้องการรับเรื่องร้องเรียนนี้ใช้หรือไม่!',
			icon: 'warning',
			buttons: true,
			dangerMode: true
		}).then(async (willDelete) => {
			if (willDelete) {
				let res = await post('/form/staff_join_update_transfer', {
					id_user: USER.user_id,
					form_id: row.form_id,
					category_id: USER.central_id
				});

				if (res === 'update staff join success') {
					if (this.state.result.status == 0) {
						await post('/form/change_status', { form_id: row.form_id, status: 6 });
					}
					swal('สำเร็จ!', 'รับเรื่องสำเร็จ', 'success').then(() => this.componentDidMount());
				} else {
					swal('ผิดพลาด!', 'ไม่สามารถรับเรื่องได้', 'error');
				}
			}
		});
	};
	//---------------------------------------------------------------------------------------------------------------------
	insert_staff_chat = async () => {
		let { message } = this.state;
		let obj = {
			message: message,
			form_id: this.props.location.state.id
		};
		if (message === '') {
		} else {
			// console.log('obj', obj);
			let res = await post('/chat/insert_staff_chat', obj);
			if (res === 'insert chat success') {
				this.setState({ message: '' }, () => this.chat_staff());
			}
		}
	};
	//---------------------------------------------------------------------------------------------------------------------
	onEnter = async (e) => {
		if (e.key === 'Enter') {
			let { message } = this.state;
			let obj = {
				message: message,
				form_id: this.props.location.state.id
			};
			if (message === '') {
			} else {
				// console.log('obj', obj);
				let res = await post('/chat/insert_staff_chat', obj);
				if (res === 'insert chat success') {
					this.setState({ message: '' }, () => this.chat_staff());
				}
			}
		}
	};
	//---------------------------------------------------------------------------------------------------------------------
	render() {
		const {
			result,
			openModal,
			focut_head,
			Modalcompaint,
			intensive,
			files,
			nameFile,
			formstaff_join,
			chat_staff,
			ModalPersons,
			waite,
			message
		} = this.state;
		if (result) {
			return (
				<PanelRight className="pdf">
					<Bgblue />
					<PanelContent>
						{/* --------------------------------------------------------------------------------------------- */}
						<PanelHead>
							<HeadLeft>
								<HeadBtn
									onClick={() => this.setState({ focut_head: 1 })}
									bgAct={focut_head == 1 ? '#5DC0EC' : null}
								>
									เรื่องร้องเรียน
								</HeadBtn>
								<HeadBtn
									onClick={() => this.setState({ focut_head: 2 }, () => this.chat_staff())}
									bgAct={focut_head == 2 ? '#5DC0EC' : null}
								>
									ศูนย์ดำรงธรรมขอนแก่น
								</HeadBtn>
								<HeadBtn
									onClick={() => this.setState({ focut_head: 4 })}
									bgAct={focut_head == 4 ? '#5DC0EC' : null}
								>
									พิมพ์เอกสาร
								</HeadBtn>
								<HeadBtn
									onClick={() => this.setState({ focut_head: 5 })}
									bgAct={focut_head == 5 ? '#5DC0EC' : null}
								>
									เร่งรัดการดำเนินการ
								</HeadBtn>
							</HeadLeft>
						</PanelHead>
						{/* --------------------------------------------------------------------------------------------- */}
						<Head_compaint
							data={this.state.result}
							focut_head={focut_head}
							onClick={() => this.setState({ Modalcompaint: true })}
							addonClick={() => this.setState({ focut_head: 2 })}
							intensive={intensive}
							formstaff_join={formstaff_join}
							btnTables={(e) => this.btnTables(e)}
							chat_staff={chat_staff}
							modallistname={(e) => this.setState({ ModalPersons: true, waite: e })}
							insert_staff_chat={() => this.insert_staff_chat()}
							set_message={(e) => this.setState({ message: e })}
							onEnter={this.onEnter}
							message={message}
						/>
						{/**--------------------------------------------------------------------------------------------- */}
						{focut_head == 1 && (
							<div className="dp-in-fx width100" style={{ position: 'relative' }}>
								{this.state.loadingSave ? <LoaderSaving /> : ''}
								<PanelWhiMar cn="width66 d-table">
									<DetailComp data={this.state.result} />
								</PanelWhiMar>
								{/* ------------------------------------------------------------*/}
								<div className="width33">
									<div className="admin-PanelWhi history width100">
										<TextLine title="ไฟล์เอกสาร" request />
										{nameFile.length > 0 ? (
											nameFile.map((e) => (
												<div className={`depart-file ${e.type === 'pdf' ? 'pdf' : 'jpg'}`}>
													<div>{e.name}</div>
													<div>{e.date}</div>
												</div>
											))
										) : (
											<div>---ไม่มีรายการ---</div>
										)}
									</div>
									<div className="admin-PanelWhi history width100">
										<LeftRight>
											<ContentLeft>
												<label id="tracking">Tracking History</label>
											</ContentLeft>
											<ContentRight>
												<label id="update" onClick={this.onOpenModal}>
													อัปเดตการดำเนินการ
												</label>
											</ContentRight>
										</LeftRight>
										<div>
											<History
												data={this.state.result}
												uploadfile={(e) => this.uploadImg(e)}
												filesupload={files}
												delImages={(e) => this.delImages(e)}
												descrition={(e) => this.setState({ descrition: e })}
												insert_form_tracking={() => this.insert_form_tracking()}
												del_tracking={(e) => this.del_tracking(e)}
												openPic={(e) => this.onOpenPic(e)}
											/>
											<Modal
												open={this.state.openPic}
												onClose={this.onCloseModal}
												little
												classNames={{ modal: 'Look-modal ChangeStatus ' }}
											>
												<img
													src={this.state.showImage}
													style={{ width: '100%', maxWidth: '900px', display: 'flex' }}
												/>
											</Modal>
										</div>
									</div>
								</div>
							</div>
						)}
						{/**--------------------------------------------------------------------------------------------- */}
					</PanelContent>
					<ModalCompaint
						sendTransfer={this.sendTransfer}
						result={this.state.central}
						Modalcompaint={Modalcompaint}
						onClose={() => this.setState({ Modalcompaint: false })}
						_onChangeText={this._onChangeText}
						onChangeBox={this._onChangeBox}
					/>
					<ModalPerson
						Modalcompaint={ModalPersons}
						onClose={() => this.setState({ ModalPersons: false })}
						formstaff_join={formstaff_join}
						waite={waite}
						result={result}
						reload={() => this.componentDidMount()}
					/>
					<Modal
						open={openModal}
						onClose={this.onCloseModal}
						little
						classNames={{ modal: 'Look-modal ChangeStatus ' }}
					>
						<div className="layout">
							<h2 style={{ marginBottom: 30 }}>เปลี่ยนสถานะ</h2>
							{changeStatusRadio.map((el, i) => {
								return (
									<RadioRow
										checked={this.state[el.ref]}
										item={el}
										onChangeRadio={this.updatetypeInput}
									/>
								);
							})}
							<button className="btn-blue" onClick={this.saveChangeStatus}>
								บันทึก
							</button>
						</div>
					</Modal>
				</PanelRight>
			);
		} else {
			return <div />;
		}
	}
}
export default SubAdminDepartComp;
