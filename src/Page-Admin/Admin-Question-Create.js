import React, { Component } from 'react'
import TextHead from '../Components/TextHead'
import Block from '../Components/Block'
import LabelInput from '../Components/LabelInput'
import { PanelRight, PanelContent, PanelHead, PanelWhi } from '../Components/PartAdmin/MainAdmin';
import { HeadRight, HeadBtn, HeadLeft, Bgblue } from '../Asset/styleAdmin';
import { post } from '../api';
import swal from 'sweetalert'

export default class AdminQuestionCreate extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            detail: '',
            // solution_id: this.props.location.state.solution_id,

        }
    }


    onUpdate = async () => {
        const products = await post('/solution/insert', this.state)
        if (products) {
            swal({
                title: "เรียบร้อย",
                text: 'บันทึกแนวทางแก้ทุกข์สำเร็จ',
                icon: "success",
            })
                .then(() => {
                    this.props.history.goBack()
                });

        }
        // this.setState({ products })
    }

    _onChangeText = e => this.setState({ [e.target.name]: e.target.value })



    render() {
        return (
            <PanelRight>
                <Bgblue />
                <PanelContent>

                    {/* ------------------------- */}
                    <PanelHead>
                        <HeadLeft>
                            <HeadBtn onClick={() => { this.props.history.goBack() }} bgAct='#5DC0EC'>กลับ</HeadBtn>

                        </HeadLeft>
                        <HeadRight>

                        </HeadRight>
                    </PanelHead>
                    {/* ------------------------- */}
                    <PanelWhi>
                        <div className='w-100 px-5'>
                            <TextHead title='แนวทางแก้ทุกข์' />
                            <Block>
                                <LabelInput>
                                    <label>หัวข้อคำถาม</label>
                                    <input name="title" placeholder="หัวข้อคำถามหัวข้อคำถามหัวข้อคำถาม ?" onChange={this._onChangeText} value={this.state.title} className='form-control form-group' />
                                </LabelInput>
                                <LabelInput>
                                    <label className='mt-4'>เนื้อหาคำตอบ</label>
                                    <textarea name="detail" placeholder="" value={this.state.detail} onChange={this._onChangeText} className='form-control form-group' style={{minHeight:'250px'}}/>
                                </LabelInput>
                            </Block>
                            <div className="row justify-content-center" >
                                <HeadBtn onClick={() => { this.onUpdate() }} bgAct='#5DC0EC' className='w-10 ml-2'>บันทึก</HeadBtn>
                            </div>
                        </div>
                    </PanelWhi>
                </PanelContent>
            </PanelRight>

        )
    }
}
