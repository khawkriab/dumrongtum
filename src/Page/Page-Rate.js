import React, { Component } from 'react'
import TextHead from '../Components/TextHead'
import Main from '../Components/Main'
import swal from 'sweetalert'
import { post } from '../api';
export default class PageRate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            app_rate: null,
            solving_rate: null,
            message: null,
        }
    }

    updatetypeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    selectAppRate = (e) => {
        this.setState({ app_rate: e })
    }

    selectSolvingRate = (e) => {
        this.setState({ solving_rate: e })
    }

    sentComment = async () => {
        const { app_rate, solving_rate, message } = this.state
        if (app_rate || solving_rate || message) {
            await post('/rate/insert', { app_rate, solving_rate, message, type: "WEB" })
            swal({
                title: "ขอขอบคุณสำหรับการประเมิน?",
                text: "ผลประเมินความพึงพอใจ และข้อเสนอแนะที่ได้รับจากท่านเป็นประโยชน์อย่างยิ่งในการพัฒนา และปรับปรุงระบบการให้บริการของศูนย์ดำรงธรรมจังหวัดขอนแก่น",
                icon: "success",
            })
                .then((willDelete) => {
                    if (willDelete) {
                        setTimeout(() => {
                            window.location.reload();
                        }, 250)
                    }
                });
        } else {
            swal("", "โปรดประเมินความพึงพอใจ", "warning");
        }

    }

    render() {
        return (
            <Main>
                <TextHead title='ประเมินความพึงพอใจ' />
                <div className='-rate' >
                    <div className='-rate-b'>
                        <p>ท่านพึงพอใจกับการให้บริการผ่านเว็บไซต์ศูนย์ดำรงธรรมจังหวัดขอนแก่นมากน้อยเพียงใด</p>
                        <div className='-rate-select' >
                            <div class="radio-tile-group">
                                {
                                    [1, 2, 3, 4, 5].map((el) => {
                                        return (
                                            <div class="input-container" onClick={this.selectAppRate.bind(null, el)} key={el}>
                                                <input id={'rate-service-' + el} class="radio-button" type="radio" name="service" />
                                                <div class="radio-tile">
                                                    <label for={'rate-service-' + el} class="radio-tile-label">{el}</label>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className='-rate-b'>
                        <p>ท่านพึงพอใจกับการแก้ไขปัญหาเรื่องร้องเรียน ร้องทุกข์ ผ่านเว็บไซต์ศูนย์ดำรงธรรมจังหวัดขอนแก่นมากน้อยเพียงใด</p>
                        <div className='-rate-select' >
                            <div class="radio-tile-group">
                                {
                                    [1, 2, 3, 4, 5].map(el => {
                                        return (
                                            <div class="input-container" onClick={this.selectSolvingRate.bind(null, el)} key={el}>
                                                <input id={'rate-solution-' + el} class="radio-button" type="radio" name="solution" />
                                                <div class="radio-tile" >
                                                    <label for={'rate-solution-' + el} class="radio-tile-label">{el}</label>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className='center-grid' >
                        <div className='-rate-textarea'>
                            <label>ข้อเสนอแนะเพิ่มเติม</label>
                            <textarea name='message' onChange={this.updatetypeInput} placeholder="กรอกข้อเสนอแนะ" className='styleScroll' />
                        </div>
                        <button onClick={this.sentComment} className='btn-send-blue jus-s-center' > ส่งคำตอบ </button>
                    </div>
                    {/* <pre>{JSON.stringify(this.state, null, '\t')}</pre> */}
                </div>
            </Main>
        )
    }
}