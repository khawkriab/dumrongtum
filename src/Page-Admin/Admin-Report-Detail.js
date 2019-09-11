import React, { Component } from 'react'
import Main from '../Components/Main'
import TextHead from '../Components/TextHead'
import { Tabs, Tab } from 'react-bootstrap'
import NavbarLeft from '../Components/Navbar/NavbarLeft'
import NavbarHead from '../Components/Navbar/NavbarHead'
import NarbarReport from '../Components/Navbar/NarbarReport'
import Images from '../Components/Images'
import CenterFx from '../Components/CenterFx'
export default class AdminReportDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // menuOpen: false,
        }
    }


    render() {
        console.log('--', this.props.location.pathname)
        return (
            <React.Fragment>
                {/* <NarbarReport location={this.props.location.pathname} /> */}

                <CenterFx>
                    <div style={{ width: 1206 }} >
                        <img src={Images.Asset41} alt='' style={{ width: '100%' }} />
                    </div>
                </CenterFx>
                <Main>
                    <TextHead title='ศูนย์ดำรงธรรม จังหวัดขอนแก่น' />
                    <p>บันทึกคำร้องทุกข์</p>
                </Main>
            </React.Fragment>
        )
    }
}
