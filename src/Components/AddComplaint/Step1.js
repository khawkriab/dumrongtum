import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { headComplaint } from '../Static/static';
import { InputForm } from '../Form/Input';
import { RadioCol } from '../Form/InputAdmin';

const Step1 = ({ updatetypeInput, type, value, ref }) => {
	console.log('type', type);
	let items_1 = {
		placeholder: 'กรุณากรอกหัวข้อร้องทุกข์',
		ref: 'subject',
		title: 'หัวข้อร้องทุกข์',
		type: 'input'
	};
	let items_2 = {
		placeholder: 'กรุณากรอกหัวข้อร้องทุกข์',
		ref: 'type',
		title: 'ประเภทเรื่องย่อย',
		type: 'input'
	};
	let items_3 = {
		placeholder: 'กรุณากรอกรหัส MOI',
		ref: 'moi',
		title: 'รหัส MOI',
		type: 'input'
	};
	return (
		<div>
			<p className="headStep">หัวข้อร้องทุกข์</p>
			<InputForm item={items_1} onChangeText={updatetypeInput} value={value} ref={ref} />
			<RadioCol checked={type} item={headComplaint[1]} onChangeRadio={updatetypeInput} />
			<InputForm item={items_2} onChangeText={updatetypeInput} value={value} ref={ref} />
			<RadioCol checked={type} item={headComplaint[2]} onChangeRadio={updatetypeInput} />
			<InputForm item={items_3} onChangeText={updatetypeInput} value={value} ref={ref} />
			{/* {headComplaint.map((el) => {
				switch (el.type) {
					case 'input':
						return <InputForm item={el} onChangeText={updatetypeInput} value={value} ref={ref} />;
					case 'radio':
						return <RadioCol checked={type} item={el} onChangeRadio={updatetypeInput} />;
					default:
						return <div />;
				}
			})} */}
		</div>
	);
};
export default withRouter(Step1);
