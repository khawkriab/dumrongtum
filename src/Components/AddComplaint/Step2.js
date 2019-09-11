import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { complaint, } from '../Static/static';
import { InputForm, SelectName, InputRow, } from '../Form/Input';
import { RadioCol, } from '../Form/InputAdmin';
import { Label } from '../../Asset/styled';
import InputMask from "react-input-mask"
import { Selecter } from '../Form/SelectProvince'
const Step2 = ({ updatetypeInput, disclose, ref, refRadio, value, activecomplaint, id_card, type, onChange }) => {
  return (
    <div>
      <p className='headStep' >ข้อมูลผู้ร้อง</p>
      {
        complaint.map((el) => {
          switch (el.type) {
            case 'cardno': return (
              <div key={el.refRadio} className='-comp-form-cardno-ad'>
                <Label>{el.title}</Label>
                <InputMask
                  disabled={!activecomplaint}
                  maskChar={null}
                  mask={"9-9999-99999-99-9"}
                  onChange={updatetypeInput}
                  name={'id_card'}
                  inputMode="numeric"
                  type="text"
                  className='form-control form-group'
                  value={id_card}
                  placeholder="หมายเลขประจำตัวประชาชน"
                />
              </div>
            )
            case 'selectName': return <SelectName active={activecomplaint} item={el} onChangeText={updatetypeInput} value={value} />;
            case 'input': return <InputForm active={activecomplaint} item={el} onChangeText={updatetypeInput} />;
            case 'radio': return <RadioCol checked={disclose} item={el} onChangeRadio={updatetypeInput} />;
            case 'row': return <InputRow active={activecomplaint} item={el} onChangeText={updatetypeInput} value={value} />;
            case 'rowProv': return <Selecter active={activecomplaint} name={refRadio} onChange={(refRadio, value) => onChange(refRadio, value)} value={refRadio == 'right' ? value : {}} />;
            
            default: return <div />
          }
        })
      }
    </div>
  )
}
export default withRouter(Step2)
