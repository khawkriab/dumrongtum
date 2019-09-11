import { observable, computed, action } from 'mobx';

class User {
	// @observable role = 'user';
	@observable role = '';
	@observable fname = '';
	@observable lname = '';
	@observable prefix = '';
	@observable id_card = '';
	@observable user_info_id = '';
	@observable central_id = '';
	@observable user_id = '';

	constructor() {
		// load user from local storage
		const userData = JSON.parse(localStorage.getItem('user'));

		if (userData) {
			this.role = userData.role;
			this.fname = userData.fname;
			this.lname = userData.lname;
			this.prefix = userData.prefix;
			this.id_card = userData.id_card;
			this.user_info_id = userData.user_info_id;
			this.central_id = userData.central_id;
			this.user_id = userData.user_id;
		}
	}

	@action
	saveUser(userData) {
		if (userData) {
			this.role = userData.role;
			this.fname = userData.fname;
			this.lname = userData.lname;
			this.prefix = userData.prefix;
			this.id_card = userData.id_card;
			this.user_info_id = userData.user_info_id;
			this.central_id = userData.central_id;
			this.user_id = userData.central_id;
			localStorage.setItem('user', JSON.stringify(userData));
		}
	}

	@action
	removeUser() {
		localStorage.removeItem('user');
		this.role = '';
		this.fname = '';
		this.lname = '';
		this.prefix = '';
		this.id_card = '';
		this.user_info_id = '';
		this.central_id = '';
		this.user_id = '';
	}
}
export default new User();
