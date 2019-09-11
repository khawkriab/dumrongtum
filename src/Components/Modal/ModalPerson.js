import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import { Search } from '../../Components/Search/Search';
import { Button } from '../../Asset/styleAdmin';
import { InputFormGroupArea, SelectFormGroup } from '../../Components/Form/Input';
import { responseTime } from '../Static/static';
import { ModalHeader, ModalBody, ModalFooter } from '../../Asset/styleAdmin';
import { LeftRight, ContentLeft, ContentRight } from '../../Asset/styled';
import Images from '../Images';
import { get, post } from '../../api';
import swal from 'sweetalert';
import { Img } from '../Image/Img';

export default class ModalPerson extends Component {
	deleteTBL = async (e) => {
		let { result } = this.props;
		let res = await post('/complaint/delete_transfer_row', { form_id: result.form_id, category_id: e });
		if (res === 'remove success') {
			swal('สำเร็จ!', res, 'success').then(() => this.props.reload());
		} else {
			swal('ผิดพลาด!', 'remove fail', 'error');
		}
	};
	render() {
		let { Modalcompaint, onClose, formstaff_join, waite } = this.props;
		// console.log('waite>>>', waite);
		return (
			<Modal
				open={Modalcompaint}
				onClose={() => onClose()}
				little
				classNames={{ modal: 'Look-modal ChangeStatus ' }}
			>
				<ModalHeader p={'1rem'}>{waite == 1 ? 'ผู้ร่วมห้องสนทนา' : 'รอการตอบรับ'}</ModalHeader>
				<hr />
				<ModalBody>
					{formstaff_join.length > 0 &&
						waite == 1 &&
						formstaff_join.map((e) => (
							<div className="chat-modal styleScroll">
								<div>
									<div>
										<Img w={'40px'} h={'40px'} src={Images.Asset4} />
									</div>
									<div>
										<text>
											{e.status == 1 && e.name} {e.status == 0 && '(รอการตอบรับ)'}
										</text>
										<text>{e.central_name}</text>
									</div>
								</div>
								<div>
									<span onClick={() => this.deleteTBL(e.central_id)}>ลบ</span>
								</div>
							</div>
						))}
					{formstaff_join.length > 0 &&
						waite == 0 &&
						formstaff_join.filter((e) => e.status == 0).map((e, i) => (
							<div className="d-flex justify-content-between styleScroll" style={{ width: '35rem', maxHeight:'300px' }}>
								<div className="d-flex align-items-center">
									<div>{i + 1}.</div>
									<div className="d-flex flex-column">
										<text>{e.central_name}</text>
									</div>
								</div>
								<div>
									<span className="chat-modal-del" onClick={() => this.deleteTBL(e.central_id)}>ลบ</span>
								</div>
							</div>
						))}
				</ModalBody>
			</Modal>
		);
	}
}
