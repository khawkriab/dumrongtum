import React, { Component } from 'react'
import Main from '../Components/Main'
import TextHead from '../Components/TextHead'
import Block from '../Components/Block'
import LabelInput from '../Components/LabelInput'
export default class AdminReportCreate extends Component {
    render() {
        return (
            <Main>
                <TextHead title='สร้างเรื่องร้องเรียนใหม่' />
                <Block>
                    <LabelInput>
                        <label>หัวข้อร้องทุกข์</label>
                        <input placeholder="กรุณากรอกหัวข้อร้องทุกข์" className='form-control form-group' />
                    </LabelInput>
                    <LabelInput>
                        <label>เรียนผู้อำนวยการศูนย์ดำรงธรรม</label>
                        <input placeholder="กรุณากรอก ชื่อ-สกุล ผู้อำนวยการศูนย์ดำรงธรรม" className='form-control form-group' />
                    </LabelInput>
                </Block>
            </Main>
        )
    }
}
