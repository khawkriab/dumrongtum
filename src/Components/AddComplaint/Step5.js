import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { headComplaint, } from '../Static/static';
import { InputForm, } from '../Form/Input';
import { RadioCol, } from '../Form/InputAdmin';

const Step5 = ({ updatetypeInput, type }) => {
  return (
    <div>
      <p className='headStep' >ไฟล์หลักฐาน</p>
      {
        headComplaint.map((el) => {
          switch (el.type) {
            case 'input': return <InputForm item={el} onChangeText={updatetypeInput} />;
            case 'radio': return <RadioCol checked={type} item={el} onChangeRadio={updatetypeInput} />;
            default: return <div />
          }
        })
      }
    </div>
  )
}
export default withRouter(Step5)
