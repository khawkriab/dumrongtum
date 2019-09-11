import React, { Component } from 'react';
import TextHead from '../Components/TextHead';
import { PanelRight, PanelContent, PanelHead, PanelWhi } from '../Components/PartAdmin/MainAdmin';
import { HeadBtn, HeadLeft, Bgblue, Contents, ContentsLeft, ContentsRight, Button } from '../Asset/styleAdmin';
import { post, path } from '../api';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import swal from 'sweetalert';
import LoaderSaving from '../Components/Load/LoaderSaving';

export default class AdminNewsEdit extends Component {
	constructor(props) {
		super(props);
		this.state = {
			img_core: '',
			Images: [],
			Images_core: [],
			Images_core_id: null,
			editorState: EditorState.createEmpty(),
			title: '',
			news_id: null,
			deletePic: [],
			loading: false,
		};
	}
	// ------------------------------------------------------------------------------------------------------------------
	componentDidMount = () => {
		let id = this.props.match.params.id;
		if (id !== -1) {
			this.fetchNews(id);
		}
	};
	// ------------------------------------------------------------------------------------------------------------------
	fetchNews = async (id) => {
		try {
			const news = await post(`/news/read`, { news_id: id });
			// set news id
			this.setState({ news_id: news.news_id, title: news.title })
			// set img
			console.log('news', news)
			news.images.forEach((e, i) => {
				let { Images } = this.state;
				let obj = {
					name: e.path.split('/')[2],
					pic_id: e.news_pic_id
				};
				Images.push(obj);
				this.setState({ Images });
			});
			this.setState({ news: news, img_core: path + news.images[0].path, Images_core_id: news.images[0].news_pic_id }, () => {
				let { Images } = this.state;
				Images.splice(0, 1);
				this.setState({ Images });
			});
			// set html to draft
			const { contentBlocks, entityMap } = htmlToDraft(news.detail);
			const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
			this.setState({ editorState: EditorState.createWithContent(contentState) });
		} catch (error) { }
	};
	_onChangeText = e => this.setState({ [e.target.name]: e.target.value })
	// -----------------------------------------------------------------------------------------------------------------------
	onEditorStateChange = (editorState) => {
		this.setState({
			editorState
		});
	};
	// -----------------------------------------------------------------------------------------------------------------------
	uploadImg_core = (event) => {
		let { deletePic, Images_core_id } = this.state;
		let Images_core = [];
		Images_core.push(event.target.files[0]);
		console.log('Images[0].news_pic_id', Images_core_id)
		deletePic.push(Images_core_id)
		this.setState({ Images_core });
		if (event.target.files && event.target.files[0]) {
			let reader = new FileReader();
			reader.onload = (e) => {
				this.setState({ img_core: e.target.result });
			};
			reader.readAsDataURL(event.target.files[0]);
		}
	};
	//-----------------------------------------------------------------------------------------------
	uploadImg = (event) => {
		Object.keys(event.target.files).forEach((key) => {
			let { Images } = this.state;
			Images.push(event.target.files[key]);
			this.setState({ Images });
		});
	};
	//-----------------------------------------------------------------------------------------------
	delImages = (i, pic_id) => {
		let { Images, deletePic } = this.state;
		deletePic.push(pic_id)
		Images.splice(i, 1);
		this.setState({ Images, deletePic });
		console.log('>>>>', pic_id)
	};
	//-----------------------------------------------------------------------------------------------
	Submit = async () => {
		const formData = new FormData();
		let { Images, Images_core } = this.state;

		// set loading
		this.setState({ loading: true })
		// 
		let obj = {
			title: this.state.title,
			detail: this.state.editorState,
			Images: Images_core.concat(Images),
			date: ''
		};
		formData.append("title", obj.title);
		formData.append("detail", draftToHtml(convertToRaw(obj.detail.getCurrentContent())));
		obj.Images.forEach(element => {
			formData.append("file", element);
		});
		for (let value of formData.values()) {
			console.log('formData', value);
		}
		if (this.state.news_id) {
			console.log('if', this.state.news_id)
			formData.append("deletePic", JSON.stringify(this.state.deletePic))
			formData.append("news_id", this.state.news_id);
			const item = await post('/news/update', formData, true)
			if (item) {
				// set loading
				this.setState({ loading: false })
				swal({
					title: "เรียบร้อย",
					text: 'แก้ไขข่าวสำเร็จ',
					icon: "success",
				})
					.then(() => {
						this.props.history.goBack()
					});

			}
		} else {
			console.log('else')
			const item = await post('/news/insert', formData, true)
			if (item) {
				// set loading
				this.setState({ loading: false })
				swal({
					title: "เรียบร้อย",
					text: 'เพิ่มข่าวสำเร็จ',
					icon: "success",
				})
					.then(() => {
						this.props.history.goBack()
					});

			}
		}
	};
	render() {
		let { img_core, Images, editorState } = this.state;
		return (
			<PanelRight>
				<Bgblue />
				<PanelContent>
					{/* ------------------------- */}
					<PanelHead>
						<HeadLeft>
							<HeadBtn
								onClick={() => {
									this.props.history.goBack();
								}}
								bgAct="#5DC0EC"
							>
								กลับ
							</HeadBtn>
						</HeadLeft>
					</PanelHead>
					{/* ------------------------- */}
					<PanelWhi>
						{this.state.loading ? <LoaderSaving /> : ''}
						{/* <TextHead title={this.props.title} /> */}
						<TextHead title="รายละเอียดข่าวสาร" />
						<Button bg="#29A4DB" bgH="#0e79a9" style={{ position: 'absolute', top: '20px', right: '10px' }}>Preview</Button>
						<Contents>
							<ContentsLeft>
								<div className="core-img">
									<label className="custom-file-upload">
										<input type="file" onChange={this.uploadImg_core} accept="image/x-png,image/jpeg" />
										อัพโหลดรูปภาพ
								</label>
									{img_core !== '' && (
										<div>
											<img src={img_core} alt="" />
										</div>
									)}
								</div>
								<div className="second-display">
									<div style={{ fontSize: 'small' }}>ไฟล์ภาพเพิ่มเติม</div>
									<label className="custom-file-upload-2">
										<input
											type="file"
											onChange={this.uploadImg}
											accept="image/x-png,image/jpeg"
											multiple
										/>
										อัพโหลดรูปภาพ
									</label>
								</div>
								<div className="second-display-list">
									{Images.length !== 0 &&
										Images.map((e, i) => (
											<div className="list">
												<div>
													{e.name}
												</div>
												<div className="close" onClick={() => this.delImages(i, e.pic_id)}>x</div>
											</div>
										))}
								</div>
							</ContentsLeft>
							<ContentsRight flexDirection="column" style={{ textAlign: 'left', fontWeight: '300' }}>
								{/* <InputFormGroup title="หัวข้อข่าว" /> */}
								<div className="form-group">
									<label for="">หัวข้อข่าว</label>
									<input type="text" className="form-control" name="title" value={this.state.title} onChange={this._onChangeText} />
								</div>
								<div className="form-group">
									<label for="">เนื้อหาข่าว</label>
									<Editor
										wrapperClassName="wrapper-class"
										editorClassName="editor-class"
										toolbarClassName="toolbar-class"
										toolbar={{
											options: ['inline', 'textAlign'],
											inline: {
												options: ['bold', 'italic', 'underline'],
												bold: { className: 'bordered-option-classname' },
												italic: { className: 'bordered-option-classname' },
												underline: { className: 'bordered-option-classname' },
											},
											textAlign: {
												visible: true,
											}
										}}
										editorState={editorState}
										onEditorStateChange={this.onEditorStateChange}
									/>
								</div>
								{/* <div dangerouslySetInnerHTML={{ __html: this.state.cc }} /> */}
								{/* <textarea
									disabled
								value={draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))}
								/> */}

							</ContentsRight>
							<div className="d-flex flex-row w-100 justify-content-center">
								<Button bg="#ff3300" bgH="#e23105" px="4rem">ลบข่าว</Button>
								<Button onClick={this.Submit}>บันทึกการแก้ไข</Button>
							</div>
						</Contents>
					</PanelWhi>
					{/* ------------------------- */}
				</PanelContent>
			</PanelRight >
		);
	}
}
