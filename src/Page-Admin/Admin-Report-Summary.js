import React, { Component } from 'react';
import TextHead from '../Components/TextHead';
import Main from '../Components/Main';
import Images from '../Components/Images';
import { PanelRight, PanelContent, PanelHead, PanelWhi, PanelWhiMar, PanelWhiMargL } from '../Components/PartAdmin/MainAdmin';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from 'recharts';
import { Bgblue, HeadLeft, HeadBtn, Button } from '../Asset/styleAdmin';
import { Search } from '../Components/Search/Search'
import { SelectType, SelectSubtype, InputFormGroup, SelectFormGroup } from '../Components/Form/Input'
import { disTrict, years, month, headComplaint, sub_complaint, changeStatusRadio } from '../Components/Static/static'
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import { get, post } from '../api';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import LoaderSaving from '../Components/Load/LoaderSaving';
import swal from 'sweetalert';

const CustomTooltip = ({ active, status, label, length }) => {
	console.log('object',status[label],'ghjk',length)
	if (active) {
		return (
			<div className="custom-tooltip">
				<p className="label">{status[label].status_name}</p>
				<p className="intro"> จำนวน {status[label].count}  เรื่อง</p>
			</div>
		);
	}

	return null;
};
const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
	console.log('value', value)
	return (
		<text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-6}>
			{value}
		</text>
	);
};
export default class AdminReportSummary extends Component {
	constructor(props) {
		super(props)
		this.state = {
			yearsAdjust: [],
			select_year: '',
			timemin: '',
			timemax: '',
			type: '',
			sub_type: '',
			values:'',
			// ---search-------
			items: [],
			itemsOld: [],
			graphs: [],
			search_status: false,
			central: null,
			comCount:{},
			// ----------
			clientWidth: document.body.clientWidth,
			// ----------
			tab: 1,
			// ----------
			loadingSave: false,

		}
	}
	componentDidMount() {
		this.yearsAdjust();
		this.fetchItem();
		this.fetchCentral();

	}

	async fetchItem(e) {
		let { category_id, district, sub_type, type, timemin, timemax, values } = this.state
		const com = await get('/complaint/get_complaint_count')
		this.setState({comCount: com})
		console.log('object',com)
		if (e) {
			this.setState({ loadingSave: true })
			const item = await post('/complaint/search_graph', {values, type, sub_type, timemin, timemax, district, category_id });
			this.setState({ graphs: item })
			this.setState({ loadingSave: false })
			// console.log('item search>>>', graphs)
		} else {
			const item = await post('/complaint/search_graph');
			this.setState({ graphs: item })
			this.setState({ loadingSave: false })
			// console.log('item all>>>', this.state.graphs)
		}
	}

	async fetchCentral() {
		const central = await get('/central/')
		this.setState({ central })
	}

	yearsAdjust() {
		const { yearsAdjust } = this.state;
		years().map((e) => {
			yearsAdjust.push({
				label: Number(e.id + 543),
				value: Number(e.naem + 543)
			})
			this.setState({ yearsAdjust })
		})
	}
	fullname = (cell, row) => {
		return (
			<p>
				{row.fname} {row.lname}
			</p>
		);
	};

	// -----------------------------------------------------------------------------------------------------------------------
	render() {
		const colors = scaleOrdinal(schemeCategory10).range();
		const { graphs, select_year, timemin, central, clientWidth, tab, items, itemsOld, comCount } = this.state;
		const optionsTable = {
			paginationSize: 3,
			sizePerPageList: [10],
			paginationShowsTotal: this.renderPaginationShowsTotal,
			onRowClick: (cell) => {
				this.props.history.push({ pathname: '/admindepartcompaint/' + cell.form_id });
			}
		};
		return (
			<PanelRight>
				<Bgblue />
				{tab === 1 ?
					<PanelContent>
						<PanelHead>
							<HeadLeft>
								<div className="report-header"><span>จำนวนรับเรื่องโดยศูย์ดำรงธรรม</span><strong>{Number(comCount.complaitCount).toLocaleString()}</strong></div>
								<div className="report-header"><span>จำนวนรับเรื่องโดยหน่วยงาน</span><strong>{Number(comCount.complaitCountByCentral).toLocaleString()}</strong></div>
							</HeadLeft>
						</PanelHead>
						<PanelWhi>
							<TextHead title="สรุปผลการร้องเรื่องในแต่ละอำเภอ" />
							{/******************************************************************************* */}
							<div className="d-grid mt-4">
								<div className="d-flex align-items-end">
									<Search
										title="ค้นหาเรื่องร้องเรียน"
										classNameDiv="mb-3 col-md-3"
										raduis="5px" w="100%"
										hint="ค้าหาได้จาก ชื่อ-นามสกุล, เลขที่บัตรประชาชน, รหัสเรื่องจากระบบ, รหัส MOI, ชื่อเรื่อง,ที่อยู่, หน่วยงานที่รับผิดชอบ, ชื่อผู้ถูกร้อง, ชื่อเจ้าหน้าที่ศุนย์ดำรงธรรมที่รับผิดชอบ"
										onChange={(e) => this.setState({ values: e.target.value })}
									/>
									<SelectFormGroup
										title="หน่วยงาน"
										className="col-md-3"
										allItem={central ? central.map((e) => { return { label: e.central_name, value: e.central_id } }) : null}
										onChange={(e) => this.setState({ category_id: e.target.value })} />
									<SelectFormGroup
										title="ค้นหาตามช่วงเวลา"
										currentItem="เลือกปี"
										allItem={this.state.yearsAdjust}
										onChange={(e) => this.setState({ select_year: e.target.value })}
										className="col-md-2" />
									<SelectFormGroup
										currentItem="เลือกเดือนเริ่มต้น"
										allItem={month}
										disabled={select_year == ''}
										onChange={(e) => this.setState({ timemin: e.target.value })}
										className="col-md-2" />
									<SelectFormGroup
										currentItem="เลือกเดือนสิ้นสุด"
										allItem={month}
										disabled={select_year == '' || timemin == ''}
										onChange={(e) => this.setState({ timemax: e.target.value })}
										className="col-md-2" />
								</div>
								<div className="d-flex align-items-end">
									<SelectType
										value={this.state.type}
										item={headComplaint[1]}
										onChangeSelect={(e) => this.setState({ type: e.target.value })}
										className="col-md-4"
									/>
									<SelectSubtype
										disabled={this.state.type === 0 || this.state.type === ''}
										value={this.state.sub_type}
										item={sub_complaint[0]}
										head={this.state.type}
										onChangeSelect={(e) => this.setState({ sub_type: e.target.value })}
										className="col-md-4"
									/>
									<SelectFormGroup
										title="อำเภอ"
										allItem={disTrict}
										className="col-md-2"
										onChange={(e) => this.setState({ district: e.target.value })} />
									<Button my="1rem" mx="auto" onClick={() => this.fetchItem(true)}>ผลลัพธ์</Button>
								</div>
							</div>
							{/******************************************************************************* */}
							<div className="report-chart">
								<div className="chart">
									{this.state.loadingSave ? <LoaderSaving /> : graphs.length < 1 ? <LoaderSaving /> : ''}
									{ graphs && <BarChart width={clientWidth < 1367 ? clientWidth - 626 : clientWidth - 916} height={clientWidth < 1367 ? 300 : 400} data={graphs}>
										<YAxis />
										<Tooltip content={<CustomTooltip status={graphs} label />} />
										<Bar
											// type="monotone"
											dataKey="count"
											barSize={clientWidth < 1367 ? 60 : clientWidth - 1750}
											style={{ cursor: 'pointer' }}
											onClick={(data) => this.setState({ items: data.data, itemsOld: data.data, tab: 2 })}
											label={renderCustomBarLabel}
										>
											{graphs.map((entry, index) => (
												<Cell key={`cell-${index}`} fill={colors[index % 20]} />
											))}
										</Bar>
									</BarChart>
									}
									<span className="chart-x">สถานะเรื่องร้องเรียน</span>
									<span className="chart-y">จำนวนเรื่องร้องเรียน</span>
								</div>
								<div className="chart-note">
									{changeStatusRadio[0].data.map((el, index) => {
										return (
											<div>
												<i style={{ backgroundColor: colors[index % 20] }}></i>
												<span onClick={() => graphs[index].statusLength > 0 ? this.setState({ items: graphs[index].all_item, itemsOld: graphs[index].all_item, tab: 2 }) : console.log('object',graphs)}>
													{el.label}
												</span>
											</div>
										)
									})}
								</div>
							</div>

							{/******************************************************************************* */}
						</PanelWhi>
					</PanelContent>
					: <PanelContent>
						<PanelHead>
							<HeadLeft>
								<Button bg="#5DC0EC" onClick={() => this.setState({ tab: 1 })}>กลับ</Button>
							</HeadLeft>
						</PanelHead>
						<PanelWhi>
							<div className="d-flex justify-content-between align-items-center mb-4">
								<div className="report-header-detail"> {itemsOld[0].status_name} <strong> {itemsOld.length} เรื่อง</strong></div>
								<div>
									<Search title="ค้นหาเรื่องร้องเรียน" onChange={this.searchItem} />
								</div>
							</div>
							{/* {console.log('items', items)} */}
							<div id="my-tableHeader-class-text-left">
								<BootstrapTable
									data={items}
									pagination={true}
									options={optionsTable}
									containerClass="my-container-class tb-setSearch"
									tableContainerClass="my-tableContainer-class"
									tableHeaderClass="my-tableHeader-class colorBlue"
									tableBodyClass="my-tableBody-pointer-class"
								>
									<TableHeaderColumn dataField="form_id" isKey>เลขที่เรื่องร้องเรียน</TableHeaderColumn>
									<TableHeaderColumn dataField="timestamp" dataFormat={this.datetime}>วันที่แจ้ง</TableHeaderColumn>
									<TableHeaderColumn dataField="subject">เรื่องร้องเรียน</TableHeaderColumn>
									<TableHeaderColumn dataField="name" dataFormat={this.fullname}>ผู้ร้องเรียน</TableHeaderColumn>
								</BootstrapTable>
							</div>
						</PanelWhi>
					</PanelContent>}
			</PanelRight>
		);
	}

	BarChart() {

	}
}
