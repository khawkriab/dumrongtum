import React, { Component } from 'react';
import LabelInput from '../LabelInput';
import {
	ContanierRadio,
	Label,
	LabelLight,
	ContainerRow,
	InputText,
	Line,
	ContainerForm,
	InputTextarea,
	InputTextSmall,
	SelectTitle,
	ContainerRadioRow
} from '../../Asset/styled';
import { Container, Row, Col } from 'reactstrap';
import InputMask from "react-input-mask";

export function InputForm({ item, onChangeText, active = true, value }) {
	let { ref, title, placeholder, validation } = item;
	return (
		<LabelInput key={ref}>
			<Label>{title}</Label>
			<InputText
				type={validation ? validation.type : 'text'}
				disabled={!active}
				placeholder={placeholder}
				name={ref}
				onChange={onChangeText}
				className="form-control form-group"
				value={value ? value[ref] : null}
			/>
		</LabelInput>
	);
}

export function RadioForm({ item, onChangeRadio, checked }) {
	let { ref, title, data } = item;
	return (
		<ContainerForm>
			<ContainerRow key={ref}>
				<Label textAlign={'left'} style={{ minWidth: '150px' }}>
					{title}
				</Label>
				<Row>
					{data.map((el, i) => {
						let { label, value } = el;
						return (
							<ContanierRadio key={i}>
								<input
									type={'radio'}
									value={value}
									name={ref}
									id={value}
									onChange={onChangeRadio}
									className="-comp-form-input"
									checked={checked == value}
								/>
								<LabelLight for={value}>{label}</LabelLight>
							</ContanierRadio>
						);
					})}
				</Row>
			</ContainerRow>
		</ContainerForm>
	);
}

export function RadioRow({ item, onChangeRadio, checked }) {
	let { ref, title, data } = item;
	return (
		<div key={ref}>
			{data.map((el, i) => {
				let { label, value, sublabel } = el;
				return (
					<ContainerRadioRow key={i}>
						<input
							type={'radio'}
							value={value}
							name={ref}
							id={value}
							onChange={onChangeRadio}
							className="-comp-form-input"
							checked={checked == value}
						/>
						<Label style={{ marginRight: 5 }} for={value}>
							{label}
						</Label>
						<LabelLight for={value}>{sublabel}</LabelLight>
					</ContainerRadioRow>
				);
			})}
		</div>
	);
}

export function RadioeDePart({ item, onChangeRadio }) {
	let { ref, title, data } = item;
	return (
		<ContainerForm>
			<ContainerRow key={ref}>
				<Label textAlign={'left'} style={{ minWidth: '150px' }}>
					{title}
				</Label>
				<div className="styleScroll scrollDepart">
					{data.map((el, i) => {
						let { label, value, type } = el;
						return (
							<ContanierRadio key={i}>
								<input
									type={'radio'}
									value={[value, type]}
									id={value + 'dep'}
									name={ref}
									onChange={onChangeRadio}
									className="-comp-form-input"
								/>
								<LabelLight htmlFor={value + 'dep'}>{label}</LabelLight>
							</ContanierRadio>
						);
					})}
				</div>
			</ContainerRow>
		</ContainerForm>
	);
}
export function InputRow({ item, onChangeText, active, value }) {
	let { data, xs, sm, md, ref, length } = item;
	return (
		<ContainerForm>
			<Row>
				{data.map((el, i) => {
					return (
						<Col key={i} sm={sm} md={md} xs={xs}>
							<InputForm
								active={active}
								item={el}
								name={ref}
								onChangeText={onChangeText}
								maxLength={length}
								value={value}
							/>
						</Col>
					);
				})}
			</Row>
		</ContainerForm>
	);
}

export function Textarea({ item, onChangeText }) {
	let { ref, title, placeholder } = item;
	return (
		<LabelInput key={ref}>
			<Label>{title}</Label>
			<InputTextarea
				placeholder={placeholder}
				name={ref}
				onChange={onChangeText}
				className="form-control form-group styleScroll"
			/>
		</LabelInput>
	);
}

export function InputID({ item, onChangeText, value }) {
	let { ref, title, length } = item;
	const IDInput = (props) => (
		<InputMask maskChar={null} mask={'9-9999-99999-99-9'} {...props} placeholder="หมายเลขประจำตัวประชาชน" />
	);
	return (
		<div key={ref} className="-comp-form-cardno">
			<Label>{title}</Label>
			<IDInput
				onChange={onChangeText}
				name={ref}
				inputMode="numeric"
				type="text"
				className="form-control form-group"
				value={value}
			/>
		</div>
	);
}

export function SelectSex({ item, onChangeSelect, active, value }) {
	let { ref, title, length } = item;
	return (
		<React.Fragment>
			<div key={ref} className="LabelInput-panel">
				<Label>{title}</Label>
				<select
					name={ref}
					onChange={onChangeSelect}
					className="selectTitleName"
					disabled={!active}
					value={value ? value[ref] : null}
				>
					<option value="0" disabled selected>
						เลือก
					</option>
					<option value="MS">นางสาว</option>
					<option value="MRS">นาง</option>
					<option value="MR">นาย</option>
				</select>
			</div>
		</React.Fragment>
	);
}
export function SelectName({ item, onChangeText, active, value }) {
	let { data, xs, sm, md, ref, mdT, xsT } = item;
	return (
		<ContainerForm>
			<Row>
				{data.map((el, i) => {
					switch (el.type) {
						case 'input':
							return (
								<Col key={i} sm={sm} md={md} xs={xs}>
									<InputForm active={active} item={el} onChangeText={onChangeText} value={value} />
								</Col>
							);
						case 'selected':
							return (
								<Col key={i} sm={sm} md={mdT} xs={xsT}>
									<SelectSex active={active} item={el} onChangeSelect={onChangeText} value={value} />
								</Col>
							);
						default:
							return <div />;
					}
				})}
			</Row>
		</ContainerForm>
	);
}
// ------------------------ register ------------------------
export function InputRowProv({ item, onChangeText }) {
	let { data, xs, sm, md, ref } = item;
	return (
		<ContainerForm>
			<Row>
				{data.map((el, i) => {
					return (
						<Col sm={sm} md={md} xs={xs} key={i}>
							<InputForm item={el} name={ref} onChangeText={onChangeText} />
						</Col>
					);
				})}
			</Row>
		</ContainerForm>
	);
}

//----------------------- test by khawkriab ------------------
export function SelectSubtype({ item, onChangeSelect, head, value, disabled, className }) {
	let { ref, title, length } = item;
	// console.log('SelectSubtype>.', item[`${head}`])
	if (head >= 1) {
		return (
			<div className={`form-group select-arrow ${className}`}>
				<label>{title}</label>
				<select
					disabled={disabled}
					value={value}
					onChange={onChangeSelect}
					name={ref}
					className="form-control"
				>
					<option value="">เลือก</option>
					{item[`${head}`].data.map((el, i) => {
						let { option, value } = el;
						return (
							<React.Fragment>
								<option value={value}>{value}</option>
							</React.Fragment>
						);
					})}
				</select>
			</div>
		);
	} else {
		return (
			<div className={`form-group select-arrow ${className}`}>
				<label>{title}</label>
				<select
					disabled={disabled}
					value={value}
					onChange={onChangeSelect}
					name={ref}
					className="form-control">
					<option value="เลือก">เลือก</option>
				</select>
			</div>
		);
	}
}

export function SelectType({ item, onChangeSelect, head, value, className }) {
	let { ref, title, length } = item;
	return (
		<div className={`form-group select-arrow ${className}`}>
			<label>{title}</label>
			<select
				value={value}
				onChange={onChangeSelect}
				name={value}
				className="form-control"
			>
				<option value="">เลือก</option>
				{item.data.map((el, i) => {
					let { label, value } = el;
					return (
						<React.Fragment>
							<option value={label}>{label}</option>
						</React.Fragment>
					);
				})}
			</select>
			<i>{/* icon */}</i>
		</div>
	);
}
export function InputFormGroup({ title, name, placeholder, onChange, disabled, value, r, onKeyDown ,className}) {
	return (
		<div className={`form-group  ${className}`} style={{ textAlign: 'left' }}>
			<label>{title}</label>
			<input
				className="form-control"
				disabled={disabled}
				id={name} name={name}
				placeholder={placeholder}
				onChange={onChange}
				onKeyDown={onKeyDown}
				value={value}
				style={{ borderRadius: r}}
			/>
		</div>
	)
}
export function InputFormGroupArea({ title, name, placeholder, onChange, disabled, value }) {
	return (
		<div className="form-group" style={{ textAlign: 'left' }}>
			<label>{title}</label>
			<textarea
				className="form-control"
				disabled={disabled}
				id={name} name={name}
				placeholder={placeholder}
				onChange={onChange}
				value={value} />
		</div>
	)
}
export function SelectFormGroup({ title, name, onChange, disabled, currentItem, allItem, className }) {
	// item show current value
	return (
		<div className={`form-group select-arrow ${className}`}>
			{title && <label>{title}</label>}
			<select
				disabled={disabled}
				onChange={onChange}
				name={name}
				className="form-control"
			>
				{/* warning value = item in option*/}
				<option value="">{currentItem ? currentItem : 'กรุณาเลือก'}</option>
				{allItem && allItem.map((el, i) => {
					let { label, value, } = el
					return <option value={value ? value : label}>{label}</option>
				})}
			</select>
		</div>
	)
}
export function RadioFormGroup({ title, name, allItem, currentItem, onChange, xs }) {
	// console.log('allItem',allItem)
	return (
		<ContainerForm>
			<ContainerRow key={name}>
				<Label textAlign={'left'} style={{ minWidth: '150px' }}>
					{title}
				</Label>
				<Row>
					{allItem.map((el, i) => {
						let { label, value } = el;
						return (
							<Col key={i} xs={xs}>
								<ContanierRadio key={i}>
									<input
										type={'radio'}
										value={value}
										name={name}
										id={value}
										onChange={onChange}
										className="-comp-form-input"
										checked={currentItem == value}
									/>
									<LabelLight for={value}>{label}</LabelLight>
									{label == 'หน่วยงานอื่น ๆ' && <input type="text" placeholder="ระบุ" />}
								</ContanierRadio>
							</Col>
						);
					})}
				</Row>
			</ContainerRow>
		</ContainerForm>
	)
}
