import React, { Component, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

const HeadStep = ({
	selStep,
	step,
	_FirstBtn,
	_SecondBtn,
	_ThirdBtn,
	_FourthBtn,
	_FifthBtn,
	_SixthBtn,
	_SeventhBtn
}) => {
	// console.log('_FirstBtn', _FirstBtn);
	return (
		<React.Fragment>
			<div
				className={step == 0 ? 'addCompaint active' : 'addCompaint'}
				// onClick={_FirstBtn}
			>
				<label>1</label>
				<span>หัวข้อร้องทุกข์</span>
			</div>
			<div
				className={step == 1 ? 'addCompaint active' : 'addCompaint'}
				// onClick={_SecondBtn}
			>
				<label>2</label>
				<span>ข้อมูลผู้ร้อง</span>
			</div>
			<div
				className={step == 2 ? 'addCompaint active' : 'addCompaint'}
				// onClick={_ThirdBtn}
			>
				<label>3</label>
				<span>ผู้ถูกร้อง</span>
			</div>
			<div
				className={step == 3 ? 'addCompaint active' : 'addCompaint'}
				// onClick={_FourthBtn}
			>
				<label>4</label>
				<span>รายละเอียดคำร้อง</span>
			</div>
			<div
				className={step == 4 ? 'addCompaint active' : 'addCompaint'}
				// onClick={_FifthBtn}
			>
				<label>5</label>
				<span>ไฟล์หลักฐาน</span>
			</div>
			<div
				className={step == 5 ? 'addCompaint active' : 'addCompaint'}
				// onClick={_SixthBtn}
			>
				<label>6</label>
				<span>ตรวจสอบ</span>
			</div>
			<div
				className={step == 6 ? 'addCompaintEnd active' : 'addCompaintEnd'}
				// onClick={_SeventhBtn}
			>
				<label>7</label>
				<span>สำเร็จ</span>
			</div>
			{/* ================================================= */}
		</React.Fragment>
	);
};
export default withRouter(HeadStep);
