import React, { Component } from 'react';
import { get, path } from '../api';
import Images from '../Components/Images';
import { PanelRight, PanelContent, PanelHead, PanelWhi } from '../Components/PartAdmin/MainAdmin';
import { HeadRight, HeadBtn, HeadLeft, Bgblue, HeadRightBtn } from '../Asset/styleAdmin';
import Pagination from '../Components/Pagination/Pagination';

export default class AdminNews extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newsToday: [],
			oldNews: [],
			currentPage: 1
		};
	}
	componentDidMount = () => {
		this.fetchNews();
	};
	// ------------------------------------------------------------------------------------------------------------------
	fetchNews = async () => {
		try {
			const news = await get(`/news/`);
			this.setState({ newsToday: news, oldNews: news });
			console.log('newsToday',news)
		} catch (error) { }
	};
	// -----------------------------------------------------------------------------------------------------------------------
	search = (e) => {
		const value = e.target.value;
		if (value !== '') {
			let newsolution = this.state.oldNews.filter((el) => {
				return el.title.includes(value);
			});
			this.setState({ newsToday: newsolution });
		} else {
			this.setState((prev) => ({ newsToday: prev.oldNews }));
		}
	};
	// ------------------------------------------------------------------------------------------------------------------
	onEdit(e) {
		if (e === -1) {
			this.props.history.push('/admin/news_edit/' + e);
		} else {
			this.props.history.push({
				pathname: '/admin/news_edit/' + e.news_id
			});
		}
	}
	// ------------------------------------------------------------------------------------------------------------------
	onPageChanged = data => {
		let { currentPage } = data;
		this.setState({ currentPage })
	}
	// ------------------------------------------------------------------------------------------------------------------

	render() {
		return (
			<PanelRight>
				<Bgblue />
				<PanelContent>
					{/* ------------- header------------ */}
					<PanelHead>
						<HeadLeft>
							<HeadBtn bgAct="#5DC0EC">ข่าวสารทั้งหมด</HeadBtn>
						</HeadLeft>
						<HeadRight>
							<HeadRightBtn onClick={() => this.onEdit(-1)}>+ เพิ่มข่าวสาร</HeadRightBtn>
						</HeadRight>
					</PanelHead>
					{/* ------------- / header ------------ */}
					<PanelWhi>
						<div className="d-flex">
							{/* ----------search ----------- */}
							<div className="mr-auto w-30">
								<div className="text-align-left">
									<h4>ค้นหา</h4>
								</div>
								<div className="admin-search-input mb-5">
									<button>
										<img src={Images.Asset21} alt="" />
									</button>
									<input
										type="text"
										placeholder="ค้นหา"
										className="admin-searchInput w-100"
										onChange={this.search}
									/>
								</div>
							</div>
							{/* ----------/search ----------- */}
							{/* <div className="ml-auto w-25">
								<div className="text-align-left">
									<h4>ตัวกรอง</h4>
								</div>
								<select className="admin-search-select">
									<option>ทั้งหมด</option>
								</select>
							</div> */}
						</div>
					</PanelWhi>
					{/* ------------------------- */}
					{/* ----------- news ---------- */}
					<PanelWhi>{this.renderNews()}</PanelWhi>
					{/* -----------/ news ---------- */}
				</PanelContent>
			</PanelRight>
		);
	}
	renderNews() {
		const { currentPage, newsToday } = this.state;
		const totalItems = newsToday.length;
		const pageLimit = 6;
		let data = newsToday.slice((currentPage - 1) * pageLimit, currentPage * pageLimit);
		if (totalItems === 0) return 'ไม่มีผลลัพธ์';
		return (
			<div className="row">
				{newsToday &&
					data.map((el, i) => {
						return (
							<div className="col-md-6">
								<div className="admin-news-fx 555" onClick={() => this.onEdit(el)}>
									<div className="admin-news-rad">
										<img src={path + el.path} alt="" />
									</div>
									<div className="admin-news-text">
										<h1>{el.title}</h1>
										<p>{el.date}</p>
										<div className="-ellipsis" dangerouslySetInnerHTML={{ __html: el.detail }} />
										{/* <div dangerouslySetInnerHTML={{ __html: this.state.cc }} /> */}
									</div>
								</div>
							</div>
						);
					})}
				<div className="w-100 d-flex align-items-center justify-content-center">
					<div className="d-flex flex-row py-2 align-items-center">
						<Pagination
							totalRecords={totalItems}
							pageLimit={pageLimit}
							pageNeighbours={1}
							onPageChanged={this.onPageChanged}
							pnPage
						/>
					</div>
				</div>
			</div>
		);
	}
}
