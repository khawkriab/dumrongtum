import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Images from '../Images'
import { get } from '../../api'
@observer
class NavbarFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            footer: []
        }
    }

    async componentDidMount() {
        // alert('foot')
        try {
            const get_footer = await get('/footer')

            this.setState({ footer: get_footer })

            // console.log(get_footer)
            // alert(get_footer)
            // setProfile({ ...get_profile })

        } catch (error) {
            alert(error)
            console.error(error.message)
        }

    }


    render() {
        const { address, website, phone, email, postoffice, facebook, line } = this.state.footer

        return (
            <div className='-footer-pos' >
                <div className='-footer'>
                    <div className='-footer-contact'>
                        <div>
                            <img src={Images.Asset43} alt='' />
                            <a href='https://www.google.co.th/maps/place/ศาลากลางจังหวัดขอนแก่น/@16.4425514,102.8355112,18z/data=!4m5!3m4!1s0x31228a391f2d4cbf:0x5a28702d9cd26f4c!8m2!3d16.4423716!4d102.8364247' target='_blank'>
                                <p>{address}  {postoffice}</p>
                            </a>
                        </div>
                    </div>
                    <div className='-footer-contact'>
                        <div>
                            <img src={Images.Asset44} alt='' />
                            <p>{phone}</p>
                        </div>
                        <div>
                            <img src={Images.Asset47} alt='' />
                            <a href='#'>
                                <p>{email}</p>
                            </a>
                        </div>
                    </div>
                    <div className='-footer-contact'>
                        <div>
                            <img src={Images.Asset46} alt='' />
                            <a href='https://www.facebook.com/ศูนย์ดำรงธรรมจังหวัดขอนแก่น-1492922827625207/' target='_blank'>
                                <p>{facebook}</p>
                            </a>
                        </div>
                        <div>
                            <img src={Images.Asset49} alt='' />
                            <p>{line}</p>
                        </div>
                        <div>
                            <img src={Images.Asset48} alt='' />
                            <a href='https://www.khonkaennonestop.org' target='_blank'>
                                <p>{website}</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
export default NavbarFooter