import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { headComplaint, } from '../Static/static';
import { InputForm, } from '../Form/Input';
import { RadioCol, } from '../Form/InputAdmin';
import { Container, Row, Col } from 'reactstrap'
import MapComponent from '../Maps/MapComponent'
import LabelInput from '../LabelInput';
import { Label, InputTextarea, InputText } from '../../Asset/styled';

const Step4 = ({ updatetypeInput, location, detail, objective, map }) => {
  return (
    <div>
      <p className='headStep' >รายละเอียดคำร้อง</p>
      <Row>
        <Col sm={6}>
          {/* <MapComponent /> */}
        </Col>
        <Col sm={6}>
          <LabelInput>
            <Label>สถานที่เกิดเหตุ</Label>
            <InputText name='map' value={map} onChange={updatetypeInput} placeholder='' className='form-control form-group styleScroll' />
          </LabelInput>
          <LabelInput>
            <Label>รายละเอียด</Label>
            <InputTextarea name='detail' value={detail} onChange={updatetypeInput} placeholder='กรุณากรอก รายละเอียด' className='form-control form-group styleScroll' />
          </LabelInput>
          <LabelInput>
            <Label>วัตถุประสงค์</Label>
            <InputTextarea name='objective' value={objective} onChange={updatetypeInput} placeholder='กรุณากรอก วัตถุประสงค์' className='form-control form-group styleScroll' />
          </LabelInput>
        </Col>
      </Row>

    </div>
  )
}
export default withRouter(Step4)
