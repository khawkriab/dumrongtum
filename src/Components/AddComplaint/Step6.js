import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { headComplaint, selectComplaint, sub_complaint } from '../Static/static';
import { InputForm, } from '../Form/Input';
import { RadioCol, } from '../Form/InputAdmin';
import { TextLine } from '../TextHead';
import { Sumtext } from '../Div/SetDiv';
import { FormCompAgree } from '../Form/Complaint';
import _ from 'lodash'
import { address } from '../../functions/index'

const Step6 = ({ updatetypeInput, type, ckDetail, sayyes, agree, value, updatetypeStatus }) => {
  console.log('check detail', ckDetail)
  return (
    < div >
      <p className='headStep' >ตรวจสอบ</p>
      <div>
        <TextLine title='เรื่องร้องทุกข์' />
        <Sumtext title='หัวข้อร้องทุกข์' detail={ckDetail.subject} />
        <Sumtext title='ประเภทเรื่อง' detail={headComplaint[1].data.filter((e) => Number(e.value) === Number(ckDetail.type))[0].label} />
        <Sumtext title='ประเภทเรื่องย่อย' detail={ckDetail.subtype} />
        {/* <Sumtext title='ช่องทาง' detail={ckDetail.complaint_channel} />
        <Sumtext title='รหัส MOI' detail={ckDetail.moi} /> */}
        {/* -------------------------------------------------------------- */}
        <TextLine title='ผู้ร้องทุกข์' />
        {ckDetail.activecomplaint ? <div>
          <Sumtext title='ชื่อ-นามสกุล ผู้ร้อง' detail={ckDetail.fname + ' ' + ckDetail.lname} />
          <Sumtext title='หมายเลขประจำตัวประชาชน' detail={ckDetail.id_card} />
          <Sumtext title='ID LINE ผู้ร้องทุกข์' detail={ckDetail.id_line} />
          <Sumtext title='E-mail ผู้ร้องทุกข์' detail={ckDetail.email} />
          <Sumtext title='ที่อยู่' detail={address({
            ..._.pick(ckDetail, ['house_number', 'moo', 'alleyway', 'road']), ..._.pick(ckDetail.complaint, ['sub_district', 'district', 'province', 'zipcode'])
          })} />
        </div>
          : <p className='closeInfo' >ปกปิดชื่อ</p>}
        {/* -------------------------------------------------------------- */}
        <TextLine title='ผู้ถูกร้องทุกข์' />
        {/* <Sumtext title='ผู้ถูกร้อง' detail={selectComplaint[0].data.find(el => el.value == ckDetail.select_complaintTo).label} /> */}
        <Sumtext title='ผู้ถูกร้อง' detail={selectComplaint[0].data.find(el => el.value == ckDetail.select_complaintTo).label} />
        {ckDetail.select_complaintTo === 12 ?
          <div>
            <Sumtext title='ประเภท' detail={ckDetail.type_id} />
            <Sumtext title='ชื่อนิติบุคคลหรือบริษัท' detail={ckDetail.corporation_name} />
            <Sumtext title='หมายเลขโทรศัพท์' detail={ckDetail.corporation_phone} />
            <Sumtext title='ที่อยู่' detail={address({
              ..._.pick(ckDetail, ['defendant_house_number', 'defendant_moo', 'defendant_alley', 'defendant_road']),
              ..._.pick(ckDetail, ['house_number_person', 'moo_person', 'alleyway_person', 'road_person']),
              ..._.pick(ckDetail.center, ['tumbon', 'district', 'province', 'zipcode']),
              ..._.pick(ckDetail.right, ['tumbon', 'district', 'province', 'zipcode'])
            })} />
          </div>
          : null}
        {ckDetail.select_complaintTo === 11 ?
          <div>
            <Sumtext title='ชื่อผู้ถูกร้องทุกข์' detail={ckDetail.fname_person + '&nbsp;' + ckDetail.lname_person} />
            <Sumtext title='เบอร์โทรศัพท์ผู้ถูกร้องทุกข์' detail={ckDetail.phone_person} />
            <Sumtext title='ที่อยู่' detail={address({
              ..._.pick(ckDetail, ['defendant_house_number', 'defendant_moo', 'defendant_alley', 'defendant_road']),
              ..._.pick(ckDetail, ['house_number_person', 'moo_person', 'alleyway_person', 'road_person']),
              ..._.pick(ckDetail.center, ['tumbon', 'district', 'province', 'zipcode']),
              ..._.pick(ckDetail.right, ['tumbon', 'district', 'province', 'zipcode'])
            })} />
          </div>
          : null}

        {/* -------------------------------------------------------------- */}
        <TextLine title='รายละเอียดคำร้อง' />
        <Sumtext title='รายละเอียด' detail={ckDetail.detail} />
        <Sumtext title='วัตถุประสงค์' detail={ckDetail.objective} />
        {/* -------------------------------------------------------------- */}
        <TextLine title='ไฟล์เอกสาร' />
        <FormCompAgree style={{ width: '100%' }} >
          <input type="checkbox" id="agree" name="feature" value={sayyes} onChange={agree} />
          <label for="agree">ข้าพเจ้าขอรับรองว่าเป็นความจริงทุกประการ หากปรากฏว่าไม่เป็นความจริง ข้าพเจ้ายอกรับผิด และให้ดำเนินการได้ตามกฎหมาย</label>
        </FormCompAgree>
        {/* -------------------------------------------------------------- */}
        <TextLine title='สถานะเรื่อง' />
        <div className='radioStatus' >
          <div>
            <input type="radio" id="status1" name="status" value="status1" onChange={updatetypeStatus} />
            <label for="status1">รอเจ้าหน้าที่รับเรื่อง</label>
          </div>
          <div>
            <input type="radio" id="status2" name="status" value="status2" onChange={updatetypeStatus} />
            <label for="status2">กำลังตรวจสอบคำร้อง</label>
          </div>
          <div>
            <input type="radio" id="3" name="status" value="status3" onChange={updatetypeStatus} />
            <label for="3">ตรวจสอบข้อเท็จจริง </label><span for="3">(สั่งการให้หน่วยงานตรวจสอบข้อเท็จจริง)</span>
          </div>
          <div>
            <input type="radio" id="4" name="status" value="status4" onChange={updatetypeStatus} />
            <label for="4">หน่วยงานกำลังดำเนินการ </label><span for="4">(อยู่ระหว่างการดำเนินการของหน่วยงานหรือจังหวัด)</span>
          </div>
          <div>
            <input type="radio" id="5" name="status" value="status5" onChange={updatetypeStatus} />
            <label for="5">คำร้องไม่ชัดเจน </label><span for="5">(รายละเอียดคำร้องไม่ชัดเจน)</span>
          </div>
          <div>
            <input type="radio" id="6" name="status" value="status6" onChange={updatetypeStatus} />
            <label for="6">ยุติเรื่อง</label>
          </div>
        </div>
      </div>
    </div >
  )
}
export default withRouter(Step6)
