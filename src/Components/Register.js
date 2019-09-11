import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Label } from '../Asset/styled';

export default class Register extends Component {
    render() {
        let { item, ref, title, onChangeSelect } = this.props
        return (
            <Col sm={item.sm} md={item.mdT} xs={item.xsT} >
                <div key={ref} className='LabelInput-panel'>
                    <Label>{item.title}</Label>
                    <select onChange={onChangeSelect} className='' >
                        <option value="0" disabled selected>เลือก</option>
                        <option value="miss">นางสาว</option>
                        <option value="mrs">นาง</option>
                        <option value="mr">นาย</option>
                    </select>
                </div>
            </Col>
        )
    }
}