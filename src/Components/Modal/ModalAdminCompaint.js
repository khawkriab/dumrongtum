import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import { Search } from '../../Components/Search/Search';
import { Button } from '../../Asset/styleAdmin';
import { InputFormGroupArea, SelectFormGroup } from '../../Components/Form/Input';
import { responseTime } from '../Static/static';
import { ModalHeader, ModalBody, ModalFooter } from '../../Asset/styleAdmin';
import { LeftRight, ContentLeft, ContentRight } from '../../Asset/styled';

export default class ModalAdminCompaint extends Component {
	render() {
		let { Modalcompaint, onClose, result, sendTransfer, _onChangeText, onChangeBox } = this.props;
		// console.log('Modal>>>', result);
		return (
			<Modal
				open={Modalcompaint}
				onClose={() => onClose()}
				little
				classNames={{ modal: 'Look-modal ChangeStatus ' }}
			>
				<ModalHeader>ส่งต่อหน่วยงาน</ModalHeader>
				<ModalBody className="d-flex">
					<div className="w-50 px-3">
						<div>
							<Search placeholder="ค้นหา" onChange="" classNameDiv="mb-3" />
							<strong className="d-flex justify-content-center">หน่วยงาน</strong>
							<hr />
						</div>
						<div className="styleScroll" style={{ maxHeight: '180px' }}>
							{result.map((e) => (
								<div>
									<input
										type="checkbox"
										value={e.central_id}
										name={e.central_name}
										onClick={onChangeBox}
									/>{' '}
									<span>{e.central_name}</span>
								</div>
							))}
						</div>
					</div>
					<div className="w-50 px-3">
						<div className="d-flex flex-column">
							<SelectFormGroup
								title="ระยะเวลาการตอบกลับ"
								name="expire"
								currentItem="เลือก"
								allItem={responseTime}
								onChange={_onChangeText}
							/>
							<InputFormGroupArea
								title="ข้อความถึงหน่วยงาน"
								placeholder="กรอกข้แความถึงหน่วยงาน"
								name="description_transfer"
								onChange={_onChangeText}
							/>
						</div>
					</div>
				</ModalBody>
				<ModalFooter>
					<Button onClick={sendTransfer}>ส่งร้อง</Button>
				</ModalFooter>
			</Modal>
		);
	}
}
