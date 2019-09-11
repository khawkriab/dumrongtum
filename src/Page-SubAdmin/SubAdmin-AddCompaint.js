import React, { Component } from 'react';
import Main from '../Components/Main';
import { Link, withRouter } from 'react-router-dom';
import TextHead from '../Components/TextHead';
import { Tabs, Tab } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Images from '../Components/Images';
import { PanelRight, PanelContent, PanelHead, PanelWhi } from '../Components/PartAdmin/MainAdmin';
import { HeadRight, HeadBtn, HeadLeft, Bgblue, HeadRightBtn } from '../Asset/styleAdmin';
import { Noti } from '../Components/Static/adminStatic';
import moment from 'moment';
import { get } from '../api';
import { Label } from '../Asset/styled';
import '../Asset/css/adminAddCompaintStyle.css';
import HeadStep from '../Components/AddComplaint/HeadStep';
import Step1 from '../Components/AddComplaint/Step1';
import Step2 from '../Components/AddComplaint/Step2';
// import Step3 from '../Components/AddComplaint/Step3';
import Step4 from '../Components/AddComplaint/Step4';
// import Step5 from '../Components/AddComplaint/Step5';
import Step6 from '../Components/AddComplaint/Step6';
import Step7 from '../Components/AddComplaint/Step7';
import { Container, Row, Col } from 'reactstrap';
import { complaintToRight, complaintToCenter, selectComplaint } from '../Components/Static/static';
import {
	InputForm,
	RadioForm,
	InputRow,
	Textarea,
	InputIdentifi,
	InputID,
	SelectName,
	RadioeDePart
} from '../Components/Form/Input';
import InputMask from 'react-input-mask';
import { Selecter } from '../Components/Form/SelectProvince';
import UploadFileAddmin from '../Components/Form/UploadFileAddmin';
import _ from 'lodash';

export default class SubAdminAddCompaint extends Component {
	constructor(props) {
		super(props);

		this.state = {
			step: 0,
			disableNext: false,
			step_success: [ false, false, false, false, false, false, false ],
			// ----------------------
			type: 0,
			disclose: 8,
			select_complaintTo: 10,
			// ----------------------
			activecomplaint: false,
			activeleft: true,
			activeright: false,
			// ----------------------
			typeItem: 'depart',
			departmentComplaint: [],
			// ----------------------
			fileImgList: [],
			filePdfList: [],
			typeStatus: '',
			// ----------------------
			complaint: {
				province: '',
				district: '',
				tumbon: '',
				zipcode: ''
			},
			// ----------------------
			center: {
				province: '',
				district: '',
				tumbon: '',
				zipcode: ''
			},
			// ----------------------
			right: {
				province: '',
				district: '',
				tumbon: '',
				zipcode: ''
			},
			// ----------------------
			province: '',
			district: '',
			sub_district: '',
			zipcode: ''
		};
	}
	componentDidMount = () => {
		this._fetchDepartmentAndCompanyType();
	};
	// ------------------------------------------------------------------------------------
	_fetchDepartmentAndCompanyType = async () => {
		try {
			const res = await get('/department/all');
			const companyType = await get('/form/company_type');
			this.setState({
				departmentComplaint: [
					{
						ref: 'select_depart',
						title: 'หน่วยงานที่ถูกร้อง',
						type: 'radioDepart',
						data: res.map((el) => ({
							label: el.department_name,
							value: el.department_id,
							type: el.department_type
						}))
					}
				],
				companyType
			});
		} catch (error) {
			console.log(error);
		}
	};
	// ------------------------------------------------------------------------------------------------------------------
	updatetypeInput = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	updatetypeItem = (event) => {
		this.setState({ typeItem: event.target.value });
	};
	updatetypeStatus = (event) => {
		this.setState({ typeStatus: event.target.value });
	};
	// ------------------------------------------------------------------------------------
	componentWillUpdate = (prevProps, prevState) => {
		if (prevState.select_complaintTo !== this.state.select_complaintTo) {
			this.setState((prev) => ({ activeleft: !prev.activeleft, activeright: !prev.activeright }));
		} else if (prevState.disclose !== this.state.disclose) {
			this.setState((prev) => ({ activecomplaint: !prev.activecomplaint }));
		}
	};
	// ------------------------------------------------------------------------------------------------------------------
	onChange = (ref, value) => {
		this.setState({ [ref]: value });
	};
	// ------------------------------------------------------------------------------------------------------------------
	_FirstBtn = () => {
		this.setState({ step: 0 });
	};
	// _SecondBtn = () => { this.setState({ step: 1 }) }
	// _ThirdBtn = () => { this.setState({ step: 2 }) }
	// _FourthBtn = () => { this.setState({ step: 3 }) }
	// _FifthBtn = () => { this.setState({ step: 4 }) }
	// _SixthBtn = () => { this.setState({ step: 5 }) }
	// _SeventhBtn = () => { this.setState({ step: 6 }) }
	_SecondBtn = () => {
		if (this.state.step >= 6 || !this.state.step_success[0]) {
		} else {
			this.setState({ step: 1 });
		}
	};
	_ThirdBtn = () => {
		if (this.state.step >= 6 || !this.state.step_success[1]) {
		} else {
			this.setState({ step: 2 });
		}
	};
	_FourthBtn = () => {
		if (this.state.step >= 6 || !this.state.step_success[2]) {
		} else {
			this.setState({ step: 3 });
		}
	};
	_FifthBtn = () => {
		if (this.state.step >= 6 || !this.state.step_success[3]) {
		} else {
			this.setState({ step: 4 });
		}
	};
	_SixthBtn = () => {
		if (this.state.step >= 6 || !this.state.step_success[4]) {
		} else {
			this.setState({ step: 5 });
		}
	};
	_SeventhBtn = () => {
		this.setState({ step: 6 });
	};
	// ------------------------------------------------------------------------------------------------------------------
	resetState = () => {
		this.setState({ step: 0 });
	};
	// ------------------------------------------------------------------------------------------------------------------
	nextstep = () => {
		let { step } = this.state;
		if (step < 6) {
			this.setState((prevState) => ({
				step_success: [
					...prevState.step_success.slice(0, prevState.step),
					true,
					...prevState.step_success.slice(prevState.step + 1)
				],
				step: prevState.step + 1
			}));
		}
	};
	// ------------------------------------------------------------------------------------------------------------------
	_handleNextStep = () => {
		let { step } = this.state;
		switch (step) {
			case 0:
				this.nextstep();
				break;
			case 1:
				this.nextstep();
				break;
			case 2:
				this.nextstep();
				break;
			case 3:
				this.nextstep();
				break;
			case 4:
				this.nextstep();
				break;
			case 5:
				this.nextstep();
				break;
			case 6:
				this.resetState();
				break;
			default:
				alert('err');
				break;
		}
	};
	// ------------------------------------------------------------------------------------------------------------------
	_handlePrevStep = () => {
		let { step } = this.state;
		if (step > 0) {
			this.setState((prevState) => ({ step: prevState.step - 1 }));
			console.log('PrevStep', step);
		} else {
		}
	};
	// -----------------------------------------------------------------------------------------------------------------
	stepController = () => {
		switch (this.state.step) {
			case 0:
				return (
					<Step1
						updatetypeInput={this.updatetypeInput}
						type={this.state.type}
						value={this.state}
						ref={'subject'}
					/>
				);
			case 1:
				return (
					<Step2
						updatetypeInput={this.updatetypeInput}
						disclose={this.state.disclose}
						value={this.state}
						refRadio={'complaint'}
						activecomplaint={this.state.activecomplaint}
						onChange={this.onChange}
					/>
				);
			case 2:
				return this.renderStep3();
			case 3:
				return (
					<Step4
						updatetypeInput={this.updatetypeInput}
						map={this.state.map}
						detail={this.state.detail}
						objective={this.state.objective}
					/>
				);
			case 4:
				return (
					<UploadFileAddmin
						handleFileAdd={this.handleFileAdd}
						handleFilePdfAdd={this.handleFilePdfAdd}
						fileImgList={this.state.fileImgList}
						filePdfList={this.state.filePdfList}
						removeFile={this.removeFile}
						removePdfFile={this.removePdfFile}
					/>
				);
			case 5:
				return (
					<Step6
						ckDetail={this.state}
						agree={this.agree}
						updatetypeStatus={this.updatetypeStatus}
						value={this.state}
					/>
				);
			case 6:
				return <Step7 />;
			default:
				return <Step1 />;
		}
	};
	// ------------------------------------------------------------------------------------
	handleFileAdd = (event) => {
		const newFile = event.target.files[0];
		if (!newFile) {
			return;
		}
		this.setState((prev) => ({ fileImgList: [ ...prev.fileImgList, newFile ] }));
		const isNotDuplicate = this.state.fileImgList.every((fileImg) => {
			return fileImg.name !== newFile.name;
		});
		if (isNotDuplicate) {
			this.setState((prev) => ({ fileImgList: [ ...prev.fileImgList, newFile ] }));
		}
	};
	// ------------------------------------------------------------------------------------
	removeFile = (index) => {
		let newFileList = this.state.fileImgList.filter((item, index2) => index !== index2);
		// setFileImgList(newFileList);
		this.setState({ fileImgList: newFileList });
	};
	// ------------------------------------------------------------------------------------
	handleFilePdfAdd = (event) => {
		const newFile = event.target.files[0];
		if (!newFile) {
			return;
		}
		const isNotDuplicate = this.state.filePdfList.every((filePdf) => {
			return filePdf.name !== newFile.name;
		});
		if (isNotDuplicate) {
			// setFilePdfList([...filePdfList, newFile]);
			this.setState((prev) => ({ filePdfList: [ ...prev.filePdfList, newFile ] }));
		}
	};
	// ------------------------------------------------------------------------------------
	removePdfFile = (index) => {
		let newFileList = this.state.filePdfList.filter((item, index2) => index !== index2);
		// setFilePdfList(newFileList);
		this.setState({ filePdfList: newFileList });
	};
	// ------------------------------------------------------------------------------------
	agree = (e) => this.setState((prev) => ({ sayyes: !prev.sayyes }));
	// ------------------------------------------------------------------------------------
	// address = () => { ({ ..._.pick(['house_number', 'moo', 'alleyway', 'road']), ..._.pick(['sub_district', 'district', 'province', 'zipcode']) }) }
	// ------------------------------------------------------------------------------------
	render() {
		const { step } = this.state;
		return (
			<PanelRight>
				<Bgblue />
				<PanelContent>
					{/* ------------------------- */}
					<PanelHead>
						<HeadLeft>
							<HeadStep
								step={step}
								_FirstBtn={this._FirstBtn}
								_SecondBtn={this._SecondBtn}
								_ThirdBtn={this._ThirdBtn}
								_FourthBtn={this._FourthBtn}
								_FifthBtn={this._FifthBtn}
								_SixthBtn={this._SixthBtn}
								_SeventhBtn={this._SeventhBtn}
							/>
						</HeadLeft>
					</PanelHead>
					{/* ------------------------- */}
					<PanelWhi>
						{this.stepController()}
						<div className="labelAddComplaint">
							<button
								className={step == 0 ? 'box btn-orange -hiddle' : 'box btn-orange'}
								onClick={this._handlePrevStep}
							>
								ย้อนกลับ
							</button>
							<button
								className="box btn-blue"
								onClick={this._handleNextStep}
								disabled={this.state.disableNext}
							>
								ดำเนินการต่อ
							</button>
							<button className="box btn-hiddle" />
						</div>
					</PanelWhi>
				</PanelContent>
				{/* <pre>{JSON.stringify(this.state, null, '\t')}</pre> */}
			</PanelRight>
		);
	}
	// ------------------------------------------------------------------------------------------------------------------
	renderStep3() {
		return (
			<div>
				{selectComplaint.map((el, i) => {
					return this.onSwitch(el, 'selectTo');
				})}
				<Row>
					{this.state.select_complaintTo == 10 ? (
						<Col sm={6}>
							{this.state.departmentComplaint.map((el, i) => {
								return this.onSwitch(el, 'left');
							})}
						</Col>
					) : this.state.select_complaintTo == 11 ? (
						<Col sm={9}>
							{complaintToCenter.map((el, i) => {
								return this.onSwitch(el, 'center');
							})}
						</Col>
					) : (
						<Col sm={9}>
							{complaintToRight.map((el, i) => {
								return this.onSwitch(el, 'right');
							})}
						</Col>
					)}
				</Row>
			</div>
		);
	}
	// ------------------------------------------------------------------------------------------------------------------
	onSwitch(el, ref) {
		switch (el.type) {
			case 'selectName':
				return (
					<SelectName
						active={this.state['active' + ref]}
						item={el}
						onChangeText={this.updatetypeInput}
						value={this.state}
					/>
				);
			case 'input':
				return <InputForm item={el} onChangeText={this.updatetypeInput} />;
			case 'radio':
				return <RadioForm checked={this.state[el.ref]} item={el} onChangeRadio={this.updatetypeInput} />;
			case 'radioDepart':
				return <RadioeDePart item={el} onChangeRadio={this.updatetypeInput} />;
			case 'radioDep':
				return <RadioForm item={el} onChangeRadio={this.updatetypeInput} />;
			case 'row':
				return (
					<InputRow
						active={ref == 'right' ? true : this.state['active' + ref]}
						item={el}
						onChangeText={this.updatetypeInput}
						value={this.state}
					/>
				);
			case 'cardno':
				return (
					<div key={el.ref} className="-comp-form-cardno">
						<Label>{el.title}</Label>
						<InputMask
							disabled={!this.state.activecomplaint}
							maskChar={null}
							mask={'9-9999-99999-99-9'}
							onChange={this.updatetypeInput}
							name={'id_card'}
							inputMode="numeric"
							type="text"
							className="form-control form-group"
							value={this.state.id_card}
							placeholder="หมายเลขประจำตัวประชาชน"
						/>
					</div>
				);
			case 'textarea':
				return <Textarea item={el} onChangeText={this.updatetypeInput} />;
			case 'rowProv':
				return (
					<Selecter
						active={ref == 'right' ? true : this.state['active' + ref]}
						name={ref}
						onChange={(ref, value) => this.onChange(ref, value)}
						value={ref == 'complaint' ? this.state : {}}
					/>
				);
			case 'corporationType':
				return (
					<div key={ref} className="LabelInput-panel">
						<Label>ประเภท</Label>
						<select name="type_id" onChange={this.updatetypeInput} className="selectTitleName">
							<option value="0" disabled selected>
								เลือก
							</option>
							{this.state.companyType.map((el) => (
								<option key={el.type_id} value={el.type_id}>
									{el.type_name}
								</option>
							))}
						</select>
					</div>
				);
			default:
				return <div />;
		}
	}
}
