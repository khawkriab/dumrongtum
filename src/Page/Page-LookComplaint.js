import React, { Component } from 'react'
import Main from '../Components/Main';
import TextHead from '../Components/TextHead';
import { SumTrack } from '../Components/Div/SetDiv';
import { lookcomp } from '../Components/Static/static'
import { History, DetailComp } from '../Components/Form/FormComp'
import Images from '../Components/Images'
import { post } from '../api';
import 'moment/locale/th'
import moment from 'moment'
import { observer } from 'mobx-react'
import Message from '../mobx/message'
moment.locale('th')

@observer
class PageLookComplaint extends Component {
    constructor(props) {
        super(props)

        this.state = {
            form_id: '',
            result: null,
            showPopup: true,
        }
    }
    // ------------------------------------------------------------------------------------------------------------------
    componentDidMount = async () => {
        const form_id = this.props.match.params.id;
        try {
            const result = await post(`/complaint/form`, { form_id })
            // alert(JSON.stringify(result))
            this.setState({ result: result })
            // console.log('result.status', result.status)
        } catch (error) {
            alert(error)
        }
    }
    // ------------------------------------------------------------------------------------------------------------------
    componentWillMount = () => {
        let accordion = [];
        lookcomp.forEach((i) => {
            accordion.push({
                title: i.title,
                content: i.content,
                ref: i.ref,
                open: false
            });
        });

        this.setState({
            accordionItems: accordion
        });
    }
    // ------------------------------------------------------------------------------------------------------------------
    click = (i) => {
        const newAccordion = this.state.accordionItems.slice();
        const index = newAccordion.indexOf(i)

        newAccordion[index].open = !newAccordion[index].open;
        this.setState({ accordionItems: newAccordion });
    }
    // ------------------------------------------------------------------------------------------------------------------
    popupChat = () => {
        // this.setState({ showPopup: !this.state.showPopup })
    }
    render() {
        // const { open, result, showPopup } = this.state
        const { result } = this.state
        console.log('result852>>',result)
        if (result) {
            return (
                <Main>
                    <TextHead title='ติดตามเรื่องร้องเรียน' /><br />
                    <div className="row">
                        <div className="-comp-look-content col-md-9">
                            <div className="col-md-12"> <SumTrack title='หัวข้อเรื่องร้องเรียน' detail={result.subject} /></div>
                            <div className="col-md-7">  <SumTrack title='รหัสเรื่องร้องเรียน' detail='?' /></div>
                            <div className="col-md-5">  <SumTrack title='รหัส MOI' detail={result.moi} /></div>
                            <div className="col-md-12">  <SumTrack title='สถานะเรื่องร้องเรียน' detail={result.status} /></div>
                            <div className="col-md-7"> <SumTrack title='แจ้งเรื่องวันที่' detail={moment(result.timestamp).add(543, 'y').format('DD MMMM YYYY HH:MM:SS')} /></div>
                            <div className="col-md-5">  <SumTrack title='วันที่รับเรื่อง' detail={moment(result.history.datatime).add(543, 'y').format('DD MMMM YYYY HH:MM:SS')} /></div>
                            <div className="col-md-7">  <SumTrack title='เจ้าหน้าที่หน่วยงานที่รับผิดชอบ' detail='?' /></div>
                            <div className="col-md-5">  <SumTrack title='เจ้าหน้าที่ศูนย์ดำรงธรรมที่รับผิดชอบ' detail='?' /></div>
                            <div className="col-md-7">  <SumTrack title='หน่วยงานที่รับผิดชอบ' detail='?' /></div>
                        </div>
                        <div className="col-md-3 text-align-right">
                            <img src={Images.Asset23} alt='' />
                            <span id='callBack' className="h4 ml-2" onClick={Message.onShowChat} >การตอบกลับเจ้าหน้าที่</span>
                        </div>
                    </div>
                    <div style={{ marginTop:'20px', marginLeft: '10px'}} >
                        {this.renderLookcomp()}
                    </div>
                    {/* --------------------------------------------------------------------------------------------- 
                    {
                        showPopup ? <React.Fragment> {this.renderPopup()}</React.Fragment>
                            : null
                    }*/}
                </Main>
            )
        } else {
            return <></>
        }

    }
    renderLookcomp() {
        return this.state.accordionItems.map((el, i) => {
            // alert(el.ref)
            return <div key={el.id}>
                <div className="-comp-look-q-title" onClick={this.click.bind(null, el)} >
                    <div className="arrow-wrapper">
                        <i className={el.open ? "fa fa-angle-down fa-rotate-180" : "fa fa-angle-down"} ></i>
                    </div>
                    <span className="-q-title-text">
                        {el.title}
                    </span>
                </div>
                <div className={el.open ? "-comp-look-q-content -q-content-open" : "-comp-look-q-content"} >
                    <div className={el.open ? "-q-content-text -q-content-text-open colorLabel" : "-q-content-text"} >
                        {
                            el.ref === 'comp' ? <DetailComp data={this.state.result} /> : <History data={this.state.result} />
                        }
                    </div>
                </div>
            </div>
        })
    }
    // renderPopup() {
    //     return (
    //         <PanelPopup>
    //             <p id='close' onClick={this.popupChat}>X</p>
    //             <p style={{ textAlign: 'center' }} >การตอบกลับเจ้าหน้าที่</p>
    //             <BlockPopup>
    //                 <NamePopup>
    //                     <div className='nav-head-left-img' ><img src={Images.Asset30} alt='' /></div>
    //                     <div className='detail-name' >
    //                         <p>ชื่อ</p>
    //                         <span>ตำแหน่ง<label>date</label></span>
    //                     </div>
    //                 </NamePopup>
    //                 <DetailPopup>Text</DetailPopup>
    //             </BlockPopup>
    //         </PanelPopup>
    //     )
    // }
}
export default PageLookComplaint