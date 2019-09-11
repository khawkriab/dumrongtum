import React, { Component } from 'react';
import Images from '../Components/Images';
import CenterGd from '../Components/CenterGd';
import swal from 'sweetalert';
import User from '../mobx/user';
import { post } from '../api';
import { observer } from 'mobx-react';
import Modal from 'react-responsive-modal';
import InputMask from 'react-input-mask';
import { withRouter } from 'react-router-dom';

@observer
@withRouter
class PageLogin extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: 'test02',
			password: '12345',
			id: '',
			openModal: false
		};
	}

	componentDidMount = () => {
		const { push } = this.props.history;
		switch (User.role) {
			case 'ADMIN':
				return push('/adminreport');
			case 'USER':
				return push('/');
			default:
				return;
		}
	};
	// -----------------------------------------------------------------------------------------------------------------------
	_handleKeyPress = async (e) => {
		// console.log(e.key);
		if (e.key === 'Enter') {
			let { username, password } = this.state;
			try {
				if (username && password) {
					const result = await post('/auth/login', { username, password });
					// console.log('result', result);
					User.saveUser(result);
					switch (User.role.toUpperCase()) {
						case 'ADMIN':
							this.props.history.push('/adminreport');
							break;
						case 'USER':
							this.props.history.push('/');
							break;
						case 'CENTRAL':
							this.props.history.push('/subadminreport');
							break;
						default:
							break;
					}
					// if (result.success) {
					//     User.saveUser(result)
					//     switch (User.role.toUpperCase()) {
					//         case "ADMIN": this.props.history.push('/adminreport'); break;
					//         case "USER": this.props.history.push("/"); break;
					//         default: break;
					//     }
					// }
				}
			} catch (error) {
				console.log(error);
				swal('ล็อคอินผิดพลาด', 'โปรดตรวจสอบ username หรือ password', 'error');
			}
		} else if (e.key === 'Backspace' || e.key === 'Delete') {
			this.setState({});
		}
	};
	// -----------------------------------------------------------------------------------------------------------------------
	onOpenModal = () => {
		this.setState({ openModal: true });
	};
	onCloseModal = () => {
		this.setState({ openModal: false });
	};
	// -----------------------------------------------------------------------------------------------------------------------
	_lookReport = () => this.props.history.push('/looktracking');
	// -----------------------------------------------------------------------------------------------------------------------
	_onLoginGOAHEAD = () => this.props.history.push('/');
	// -----------------------------------------------------------------------------------------------------------------------
	_onLogin = async () => {
		try {
			const { username, password } = this.state;
			const result = await post('/auth/login', { username, password });
			// console.log(result);

			User.saveUser(result);
			switch (User.role.toUpperCase()) {
				case 'ADMIN':
					this.props.history.push('/adminreport');
					break;
				case 'USER':
					this.props.history.push('/');
					break;
				case 'CENTRAL':
					this.props.history.push('/subadminreport');
					break;
				default:
					break;
			}
		} catch (error) {
			swal('login failed', 'login error', 'error');
		}
	};
	// -----------------------------------------------------------------------------------------------------------------------
	_goRegister = () => this.props.history.push('/register');
	// -----------------------------------------------------------------------------------------------------------------------
	_onChangeText = (e) => this.setState({ [e.target.name]: e.target.value });
	// -----------------------------------------------------------------------------------------------------------------------
	render() {
		const { username, password, openModal, id } = this.state;
		return (
			<CenterGd cn="height100vh">
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<div className="login-img">
						<img src={Images.logo} alt="" />
						<h2 id="logoh2">ศูนย์ดำรงธรรม</h2>
						<h5 id="logoh5">จังหวัดขอนแก่น</h5>
					</div>
					<div className="row">
						<div className="col-md-6 label-button">
							<button className="btn-blue" onClick={this._goRegister}>
								ลงทะเบียน
							</button>
							<button className="btn-orange" onClick={this.onOpenModal}>
								ดูสถานะเรื่อง
							</button>
						</div>
						<div className="col-md-6 label-login">
							<h2>เข้าสู่ระบบ</h2>
							<input
								type="text"
								placeholder="ชื่อผู้ใช้"
								className="form-control form-group login-User"
								name="username"
								value={username}
								onChange={this._onChangeText}
								onKeyDown={this._handleKeyPress}
							/>
							<input
								type="password"
								placeholder="รหัสผ่าน"
								className="form-control form-group login-password"
								name="password"
								value={password}
								onChange={this._onChangeText}
								onKeyDown={this._handleKeyPress}
							/>
							{/* <button onClick={this._onLoginGOAHEAD} className='btn-blue'>เข้าสู่ระบบ</button> */}
							<button onClick={this._onLogin} className="btn-blue">
								เข้าสู่ระบบ
							</button>
						</div>
					</div>
				</div>
				{/* <pre>{JSON.stringify(this.state, null, '\t')}</pre> */}
				<img src={Images.bglogin} alt="bglogin" id="bglogin" />
				<Modal
					open={openModal}
					onClose={this.onCloseModal}
					little
					classNames={{ modal: 'Look-modal trackingSmall ' }}
				>
					<div className="layout">
						<h1>ติดตามเรื่องและสถานะเรื่อง</h1>
						<p>ค้นหาโดยหมายเลขประจำตัวประชาชนหรือรหัสเรื่องร้องทุกข์</p>
						<IDInput
							onChange={this._onChangeText}
							name="id_number"
							inputMode="numeric"
							type="text"
							className="form-control form-group"
						/>
						<button className="btn-blue" onClick={this._lookReport}>
							ค้นหา
						</button>
					</div>
				</Modal>
			</CenterGd>
		);
	}
}
const IDInput = (props) => (
	<InputMask
		maskChar={null}
		mask={'9-9999-99999-99-9'}
		{...props}
		placeholder="หมายเลขประจำตัวประชาชนหรือรหัสเรื่องร้องทุกข์"
	/>
);

export default PageLogin;
