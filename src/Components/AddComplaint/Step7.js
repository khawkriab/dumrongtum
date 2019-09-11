import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

const Step7 = ({ }) => {
  return (
    <div>
      <p>บันทึกเรื่องร้องเรียนสำเร็จ</p>
      <span>เพิ่มเรื่องร้องเรียนลงรายการเรื่องร้องเรียนเรียบร้อยแล้ว</span>
      <button>ไปยังรายการร้องเรียน</button>
      <button>รายละเอียดเรื่องร้องเรียนนี้</button>
    </div>
  )
}
export default withRouter(Step7)
