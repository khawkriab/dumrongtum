import React, { Component } from 'react';
import Main from '../Components/Main';
import { Link, withRouter } from 'react-router-dom';
import TextHead from '../Components/TextHead';
import { Tabs, Tab } from 'react-bootstrap';
import AdminReportCreate from './Admin-Report-Create';
import AdminForward from './Admin-Forward';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Images from '../Components/Images';
import { PanelRight, PanelContent, PanelHead, PanelWhi } from '../Components/PartAdmin/MainAdmin';
import { HeadRight, HeadBtn, HeadLeft, Bgblue, HeadRightBtn, Button } from '../Asset/styleAdmin';
import { Noti } from '../Components/Static/adminStatic';
import moment from 'moment';
import { SelectType, SelectSubtype, SelectFormGroup } from '../Components/Form/Input';
import { get } from '../api';
import { headComplaint, sub_complaint, month, years, changeStatusRadio } from '../Components/Static/static';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { th } from 'date-fns/esm/locale';
import { Search } from '../Components/Search/Search';

export default class AdminReport extends Component {
	constructor(props) {
		super(props);

		this.state = {
			Noti: Noti,
			products: [],
			type: 0,
			sub_type: '',
			type_status: 1,
			status_name: '',
			//-----------------
			startDate: '',
			endDate: ''
		};
	}
	// -----------------------------------------------------------------------------------------------------------------------
	componentDidMount = () => {
		let th = require('moment/locale/th');
		moment.updateLocale('th', th);
		this.fetchProduct();
	};
	// -----------------------------------------------------------------------------------------------------------------------
	fetchProduct = async () => {
		let { type_status } = this.state;
		const products = await get('/complaint/admin_or_central'); //status รอเจ้าหน้าที่รับเรื่อง
		this.setState({
			products:
				type_status == 1
					? products.filter((e) => e.status == 0)
					: type_status == 2
						? products
						: type_status == 3
							? products.filter((e) => e.status >= 1 && e.status <= 7)
							: products.filter((e) => e.status == 8)
		});
	};
	datetime = (cell, row) => {
		return <p>{moment(cell).add(543, 'year').format('DD MMMM YYYY')}</p>;
	};
	lookStatus = (cell, row) => {
		switch (cell) {
			case 0:
				return 'รอเจ้าหน้าที่รับเรื่อง';
			case 1:
				return 'กำลังตรวจสอบคำร้อง';
			case 2:
				return 'เสนอผู้อำนวยการกลุ่มงานศุนย์ดำรงธรรมจังหวัดขอนแก่นพิจรณา';
			case 3:
				return 'เสนอหัวหน้าสำนักงานจังหวัดขอนแก่นพิจารณา';
			case 4:
				return 'เสนอรองผู้ว่าราชการจังหวัดขอนแก่น/ผู้ว่าราชการจังหวัดขอนแก่นพิจารณา';
			case 5:
				return 'สั่งการให้หน่วยงานตรวจสอบข้อเท็จจริง';
			case 6:
				return 'อยู่ระหว่างการดำเนินการของหน่วยงานหรือจังหวัด';
			case 7:
				return <div style={{ color: '#f44336' }}>รายระเอียดคำร้องไม่ชัดเจน</div>;
			case 8:
				return <div style={{ color: '#8bc34a' }}>ยุติเรื่อง</div>;
			default:
				return <div />;
		}
	};
	fullname = (cell, row) => {
		return (
			<p>
				{row.fname} {row.lname}
			</p>
		);
	};
	goAddcompaint = () => {
		return this.props.history.push('/addcompaint');
	};
	searchSubject = async (e) => {
		let { type_status } = this.state;
		const ress = await get('/complaint/admin_or_central');
		let res =
			type_status == 1
				? ress.filter((e) => e.status == 0)
				: type_status == 2
					? ress
					: type_status == 3
						? ress.filter((e) => e.status >= 1 && e.status <= 7)
						: ress.filter((e) => e.status == 8);
		let texts = e.toLowerCase();
		let res_products = res.filter((e, i) => e.subject.toLowerCase().indexOf(texts) > -1 || e.form_id.toLowerCase().indexOf(texts) > -1);
		this.setState({ products: res_products });
	};
	Clicksearch = async () => {
		let { sub_type, type, status_name, type_status, startDate, endDate } = this.state;
		let sub_typeName = type == 0 || type == '' ? '' : sub_type;
		let type_name =
			type == 1
				? 'ได้รับความเดือดร้อน'
				: type == 2
					? 'ขอความช่วยเหลือ'
					: type == 3
						? 'ขอความเป็นธรรม'
						: type == 4
							? 'ปัญหาที่อยู่อาศัย/ที่ดิน'
							: type == 5
								? 'แจ้งเบาะแส'
								: type == 6
									? 'ทรัพยากรธรรมชาติและสิ่งแวดล้อม'
									: type == 7 ? 'หนี้สิน' : type == 8.1 ? 'ร้องเรียนกล่าวโทษเจ้าหน้าที่/หน่วยงานของรัฐ' : '';
		const ress = await get('/complaint/admin_or_central');
		let res =
			type_status == 1
				? ress.filter((e) => e.status == 0)
				: type_status == 2
					? ress
					: type_status == 3
						? ress.filter((e) => e.status >= 1 && e.status <= 7)
						: ress.filter((e) => e.status == 8);
		let res_products = res
			.filter(
				(e) =>
					endDate !== ''
						? endDate !== 'null'
							? endDate !== null ? moment(e.timestamp) <= moment(endDate).add(1, 'day') : e
							: e
						: e
			)
			.filter(
				(e) =>
					startDate !== ''
						? startDate !== 'null'
							? startDate !== null ? moment(e.timestamp) >= moment(startDate).add(-1, 'day') : e
							: e
						: e
			)
			.filter(
				(e) =>
					startDate !== '' && endDate !== ''
						? startDate !== 'null' && endDate !== 'null'
							? startDate !== null && endDate !== null
								? moment(e.timestamp) >= moment(startDate).add(-1, 'day') &&
								moment(e.timestamp) <= moment(endDate).add(1, 'day')
								: e
							: e
						: e
			)
			.filter((e) => (type_name !== '' ? e.type == type_name : e))
			.filter((e) => (sub_typeName !== '' ? e.sub_type == sub_typeName : e))
			.filter((e) => (status_name !== '' ? Number(e.status) == Number(status_name) : e));
		this.setState({ products: res_products });
	};
	render() {
		const { Noti, products, type_status, startDate, endDate } = this.state;
		const optionsTable = {
			paginationSize: 3,
			sizePerPageList: [10],
			paginationShowsTotal: this.renderPaginationShowsTotal,
			onRowClick: (cell) => {
				this.props.history.push({ pathname: '/admindepartcompaint', state: { id: cell.id } });
			}
		};
		return (
			<PanelRight>
				<Bgblue />
				<PanelContent>
					{/* ------------------------- */}
					<PanelHead>
						<HeadLeft>
							<HeadBtn
								onClick={() =>
									this.setState({ type_status: 1, products: [] }, () => this.fetchProduct())}
								bgAct={type_status == 1 ? '#5DC0EC' : null}
							>
								เรื่องร้องเรียนเข้าใหม่
							</HeadBtn>
							<HeadBtn
								onClick={() =>
									this.setState({ type_status: 2, products: [] }, () => this.fetchProduct())}
								bgAct={type_status == 2 ? '#5DC0EC' : null}
							>
								เรื่องร้องเรียนทั้งหมด
							</HeadBtn>
							<HeadBtn
								onClick={() =>
									this.setState({ type_status: 3, products: [] }, () => this.fetchProduct())}
								bgAct={type_status == 3 ? '#5DC0EC' : null}
							>
								เรื่องที่อยู่ระหว่างดำเนินการ
							</HeadBtn>
							<HeadBtn
								onClick={() =>
									this.setState({ type_status: 4, products: [] }, () => this.fetchProduct())}
								bgAct={type_status == 4 ? '#5DC0EC' : null}
							>
								เรื่องที่ยุติ
							</HeadBtn>
						</HeadLeft>
						<HeadRight>
							<HeadRightBtn href="/adminaddcompaint">+ บันทึกเรื่องร้องเรียน</HeadRightBtn>
						</HeadRight>
					</PanelHead>
					{/* ------------------------- */}
					<PanelWhi>
						<div className="row mb-3">
							<div className={`${type_status == 2 ? 'col-md-4' : 'col-md-5'}`}>
								{/* ----------search ----------- */}
								<Search
									classNameInp="mr-auto w-100"
									raduis="5px"
									title="ค้นหา"
									placeholder="ค้นหา"
									onChange={(e) => this.searchSubject(e.target.value)}
									hint="ค้าหาได้จาก ชื่อ-นามสกุล, เลขที่บัตรประชาชน, รหัสเรื่องจากระบบ, รหัส MOI, ชื่อเรื่อง,ที่อยู่, หน่วยงานที่รับผิดชอบ, ชื่อผู้ถูกร้อง, ชื่อเจ้าหน้าที่ศุนย์ดำรงธรรมที่รับผิดชอบ"
								/>

								{/* /--------------------------------- */}
							</div>
							<div className={`${type_status == 2 ? 'col-md-4' : 'col-md-5'}`}>
								<div className="form-group select-arrow">
									<label>ค้นหาตามช่วงเวลา</label>
									<div className="d-flex justify-content-between">
										<DatePicker
											placeholderText="เลือกวันเริ่มต้น"
											locale={th}
											dateFormat={'dd MMMM ' + moment(startDate).add(543, 'year').format('YYYY')}
											renderCustomHeader={({ date, changeYear, changeMonth }) => (
												<div
													style={{
														display: 'flex',
														justifyContent: 'between'
													}}
												>
													<select
														className="form-control mx-1"
														value={
															startDate == '' ||
																startDate == 'null' ||
																startDate == null ? (
																	moment(new Date()).month()
																) : (
																	moment(startDate).month()
																)
														}
														onClick={() => this.setState({ startDate: date })}
														onChange={({ target: { value } }) => {
															changeMonth(value);
														}}
													>
														{month.map((e) => (
															<option value={Number(e.value) - 1}>{e.label}</option>
														))}
													</select>
													<select
														className="form-control mx-1"
														value={
															startDate == '' ||
																startDate == 'null' ||
																startDate == null ? (
																	moment(new Date()).year()
																) : (
																	moment(startDate).year()
																)
														}
														onClick={() => this.setState({ startDate: date })}
														onChange={({ target: { value } }) => {
															changeYear(value);
														}}
													>
														{years().map((e) => (
															<option value={e.id}>{Number(e.name + 543)}</option>
														))}
													</select>
												</div>
											)}
											selected={startDate}
											onChange={(date) => this.setState({ startDate: date })}
										/>
										<DatePicker
											placeholderText="เลือกวันสิ้นสุด"
											locale={th}
											dateFormat={'dd MMMM ' + moment(endDate).add(543, 'year').format('YYYY')}
											renderCustomHeader={({ date, changeYear, changeMonth }) => (
												<div
													style={{
														display: 'flex',
														justifyContent: 'center'
													}}
												>
													<select
														className="form-control mx-1"
														value={
															endDate == '' || endDate == 'null' || endDate == null ? (
																moment(new Date()).month()
															) : (
																	moment(endDate).month()
																)
														}
														onClick={() => this.setState({ endDate: date })}
														onChange={({ target: { value } }) => {
															changeMonth(value);
														}}
													>
														{month.map((e) => (
															<option value={Number(e.value) - 1}>{e.label}</option>
														))}
													</select>
													<select
														className="form-control mx-1"
														value={
															endDate == '' || endDate == 'null' || endDate == null ? (
																moment(new Date()).year()
															) : (
																	moment(endDate).year()
																)
														}
														onClick={() => this.setState({ endDate: date })}
														onChange={({ target: { value } }) => {
															changeYear(value);
														}}
													>
														{years().map((e) => (
															<option value={e.id}>{Number(e.name + 543)}</option>
														))}
													</select>
												</div>
											)}
											selected={endDate}
											onChange={(date) => this.setState({ endDate: date })}
										/>
									</div>
								</div>
							</div>
							{type_status === 2 && (
								<div className="col-md-4">
									<div className="form-group select-arrow">
										<label>สถานะเรื่อง</label>
										<select
											className="form-control"
											onChange={(e) => this.setState({ status_name: e.target.value })}
										>
											<option value="">ทั้งหมด</option>
											{changeStatusRadio[0].data.map((e) => (
												<option value={e.value}>{e.label}</option>
											))}
										</select>
									</div>
								</div>
							)}
							<div className="col-md-5 col-lg-5">
								<SelectType
									value={this.state.type}
									item={headComplaint[1]}
									onChangeSelect={(e) => this.setState({ type: e.target.value })}
								/>
							</div>
							<div className="col-md-5 col-lg-5">
								<SelectSubtype
									disabled={this.state.type === 0 || this.state.type === ''}
									value={this.state.sub_type}
									item={sub_complaint[0]}
									head={this.state.type}
									onChangeSelect={(e) => this.setState({ sub_type: e.target.value })}
								/>
							</div>
							<div className="col d-flex align-items-end">
								<Button my=".75rem" onClick={this.Clicksearch}>
									ค้นหา
								</Button>
							</div>
						</div>
						{/* ----------------------------------------------------------------------------------------------- */}
						<BootstrapTable
							data={products.sort((a, b) => moment(b.timestamp) - moment(a.timestamp))}
							pagination={true}
							options={optionsTable}
							containerClass="my-container-class tb-setSearch"
							tableContainerClass="my-tableContainer-class"
							tableHeaderClass="my-tableHeader-class colorBlue"
							tableBodyClass="my-tableBody-pointer-class"
						>
							<TableHeaderColumn dataField="form_id" isKey>
								เลขที่เรื่องร้องเรียน
							</TableHeaderColumn>
							<TableHeaderColumn dataField="timestamp" dataFormat={this.datetime}>
								วันที่แจ้ง
							</TableHeaderColumn>
							<TableHeaderColumn dataField="subject">เรื่องร้องเรียน</TableHeaderColumn>
							<TableHeaderColumn dataField="type">ประเภทเรื่องหลัก</TableHeaderColumn>
							<TableHeaderColumn dataField="sub_type">ประเภทเรื่องย่อย</TableHeaderColumn>
							<TableHeaderColumn dataField="status" dataFormat={this.lookStatus}>
								สถานะเรื่อง
							</TableHeaderColumn>
							<TableHeaderColumn dataField="name" dataFormat={this.fullname}>
								ชื่อ-นามสกุล ผู้ร้องเรียน
							</TableHeaderColumn>
						</BootstrapTable>
					</PanelWhi>
				</PanelContent>
			</PanelRight>
		);
	}
}

// ----------------------------------------------------------------------------------------
