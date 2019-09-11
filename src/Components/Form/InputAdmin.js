import React, { Component } from 'react';
import { ContanierRadio, Label, LabelLight, ContainerForm } from '../../Asset/styled';
import { Row, Col } from 'reactstrap';

// ------------------------ addcomplaint ------------------------
export function RadioCol({ item, onChangeRadio, checked }) {
	let { data, xs, sm, md, ref, length, title } = item;
	return (
		<ContainerForm key={ref}>
			<Row>
				<Col xs={2} style={{ textAlign: 'left' }}>
					<Label textAlign="left" style={{ minWidth: 150 }}>
						{title}
					</Label>
				</Col>
				<Col xs={9}>
					<Row>
						{data.map((el, i) => {
							let { label, value } = el;
							return (
								<Col key={i} xs={xs}>
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
										{label == 'หน่วยงานอื่น ๆ' && <input type="text" placeholder="ระบุ" />}
									</ContanierRadio>
								</Col>
							);
						})}
					</Row>
				</Col>
			</Row>
		</ContainerForm>
	);
}
