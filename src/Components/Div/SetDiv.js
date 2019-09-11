import React, { Component } from 'react';
import { LabelL, LabelR, SummaryText, LabelLS } from '../../Asset/styled';

export function Sumtext({ title, detail ,wl}) {
	return (
		// console.log('detaildetail',detail),
		<SummaryText>
			<LabelL w={wl}>{title}</LabelL>
			<LabelR>{!isNaN(parseInt(detail)) && detail.length == 13 ? (detail = '*************') : detail}</LabelR>
		</SummaryText>
	);
}
export function SumTrack({ title, detail }) {
	return (
		<SummaryText>
			<LabelLS>{title}</LabelLS>
			<LabelR>{detail}</LabelR>
		</SummaryText>
	);
}
export function SumDetail({ title, detail }) {
	return (
		<div className="text-left">
			<LabelLS>{title}</LabelLS>
			<p style={{fontSize:'12px'}}>{detail}</p>
		</div>
	);
}

