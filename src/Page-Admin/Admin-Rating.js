import React, { Component } from 'react'
import TextHead from '../Components/TextHead';
import { PanelRight, PanelContent, PanelHead, PanelWhi } from '../Components/PartAdmin/MainAdmin';
import { Bgblue, HeadLeft, Button } from '../Asset/styleAdmin';
import { SelectFormGroup } from '../Components/Form/Input'
import { years, month } from '../Components/Static/static'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from 'recharts';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import { Img } from '../Components/Image/Img'
import Images from '../Components/Images';
import { get } from '../api';
import moment from 'moment';
import LoaderSaving from '../Components/Load/LoaderSaving';

const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
    // console.log('value', value)
    return (
        <text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-6}>
            {value}
        </text>
    );
};

const quarter = [
    { label: 'มกราคม - มีนาคม', value: '1' },
    { label: 'เมษายน - มิถุนายน', value: '2' },
    { label: 'กรกฎาคม - กันยายน', value: '3' },
    { label: 'ตุลาคม - ธันวาคม', value: '4' }
]

export default class AdminRating extends Component {
    constructor(props) {
        super(props)
        this.state = {
            yearsAdjust: [],
            select_year: '',
            month: '',
            // ----------
            clientWidth: document.body.clientWidth,
            // ----------
            tab: 1,
            loadingSave: false,
            // ----------
            satisfaction: [],
            comments: [],
        }
    }
    componentDidMount() {
        this.fetchRating();
    }
    yearsAdjust() {
        const { yearsAdjust } = this.state;
        years().map((e) => {
            yearsAdjust.push({
                label: Number(e.id + 543),
                value: Number(e.name + 543)
            })
        })
        this.setState({ yearsAdjust, select_year:'' })
    }

    fetchRating = async (e) => {
        const { tab } = this.state
        if (e == 1) {
            this.setState({ loadingSave: true })
            const satisfaction = await get('/rate/resolve/ALL')
            this.setState({ satisfaction })
            const comments = await get('/rate/comments/ALL')
            this.setState({ comments })
            console.log('resolve>>>', satisfaction)
            this.setState({ loadingSave: false })
        } else if (e == 2) {
            this.setState({ loadingSave: true })
            const satisfaction = await get('/rate/satisfaction/APP')
            this.setState({ satisfaction })
            const comments = await get('/rate/comments/APP')
            this.setState({ comments })
            // console.log('app>>>', this.state.comments)
            this.setState({ loadingSave: false })
        } else {
            this.setState({ loadingSave: true })
            const satisfaction = await get('/rate/satisfaction/WEB')
            this.setState({ satisfaction })
            const comments = await get('/rate/comments/WEB')
            this.setState({ comments })
            // console.log('wab>>>', satisfaction)
            this.setState({ loadingSave: false })
        }
        this.setState({ yearsAdjust: [] })
        this.yearsAdjust();

    }

    onSearchQuarter = async (years, month) => {
        let { tab } = this.state
        years = years ? Number(years - 543) : ''
        month = month ? '/' + month : ''
        let type = 'satisfaction/WEB'
        let comment = '/comments/WEB'
        type = tab === 1 ? 'satisfaction/WEB' : tab === 2 ? 'satisfaction/APP' : 'resolve/ALL'
        comment = tab === 1 ? 'comments/WEB' : tab === 2 ? 'comments/APP' : 'comments/ALL'

        // ------------------------------------------------------------------------
        this.setState({ loadingSave: true })
        const satisfaction = await get('/rate/' + type + '/' + years + month)
        this.setState({ satisfaction })
        const comments = await get('/rate/' + comment + '/' + years + month)
        this.setState({ comments })
        this.setState({ loadingSave: false })
        // console.log('satisfaction', satisfaction)
    }

    render() {
        const colors = scaleOrdinal(schemeCategory10).range();
        const { select_year, yearsAdjust, clientWidth, tab, satisfaction, comments } = this.state
        return (
            <PanelRight>
                <Bgblue />
                <PanelContent>
                    <PanelHead>
                        <HeadLeft>
                            <Button onClick={() => { this.setState({ tab: 1 }); this.fetchRating(0) }} bg={tab === 1 ? '#5DC0EC' : ''}>การประเมินการให้บริการ(เว็บไซต์)</Button>
                            <Button onClick={() => { this.setState({ tab: 2 }); this.fetchRating(2) }} bg={tab === 2 ? '#5DC0EC' : ''}>การประเมินการให้บริการ(App)</Button>
                            <Button onClick={() => { this.setState({ tab: 3 }); this.fetchRating(1) }} bg={tab === 3 ? '#5DC0EC' : ''}>การประเมินการใขปัญหา</Button>
                        </HeadLeft>
                    </PanelHead>
                    <PanelWhi>
                        <div className="d-flex">
                            {this.state.loadingSave ? <LoaderSaving /> : ''}
                            <div>
                                <div className="rating-title">สรุปผลการประเมินความพึงพอใจการให้บริการผ่านเว็บไซต์ศูนย์ดำรงธรรมจังหวัดขอนแก่น</div>
                                {/******************************************************************************* */}
                                <div className="d-grid mt-4">
                                    <div className="d-flex align-items-end">
                                        <SelectFormGroup
                                            title="ไตรมาส"
                                            currentItem="เลือกปี"
                                            allItem={yearsAdjust}
                                            onChange={(e) => { this.setState({ select_year: e.target.value }); this.onSearchQuarter(e.target.value, '') }}
                                            className="col-md-2" />
                                        <SelectFormGroup
                                            currentItem="เลือกช่วงเดือน"
                                            allItem={select_year == '' ? null : quarter}
                                            disabled={select_year == ''}
                                            onChange={(e) => { this.setState({ month: e.target.value }); this.onSearchQuarter(select_year, e.target.value) }}
                                            className="col-md-2" />
                                    </div>
                                </div>
                                <div className="rating-chart">
                                    <div className="chart">
                                        <BarChart width={clientWidth < 1367 ? clientWidth - 676 : clientWidth - 966} height={clientWidth < 1367 ? 400 : 500} data={satisfaction}>
                                            <YAxis />
                                            <XAxis dataKey="satisfaction" />
                                            <Bar
                                                // type="monotone"
                                                dataKey="count"
                                                barSize={clientWidth < 1367 ? 70 : clientWidth - 1850}
                                                style={{ cursor: 'pointer' }}
                                                label={renderCustomBarLabel}
                                            >	{
                                                    satisfaction.map((entry, index) => (
                                                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                                                    ))
                                                }</Bar>
                                        </BarChart>
                                        <span className="chart-y">จำนวนผู้ประเมิน</span>
                                        <span className="chart-x">ระดับการประเมิน</span>
                                    </div>

                                </div>
                            </div>
                            <div className="chart-chat">
                                <span>ข้อเสนอแนะเพิ่มเติม</span>
                                <div className="styleScroll">
                                    {comments.length ? comments.map((e) =>
                                        <div>
                                            <div>
                                                <Img src={Images.logo} w="40px" h="40px" raduis="50%" border="1px solid #ccc" />
                                                <div>
                                                    <span>{e.fname}&nbsp;{e.lname}</span>
                                                    <i>{moment(e.timestamp).add(543, 'year').format('DD/MM/YYYY')}</i>
                                                </div>
                                            </div>
                                            <div>
                                                <span> {e.message} </span>
                                            </div>
                                        </div>
                                    )
                                        : <div> ----- ไม่ข้อเสนอแนะเพิ่มเติม ----- </div>}
                                </div>
                            </div>
                        </div>
                    </PanelWhi>
                </PanelContent>
            </PanelRight>
        )
    }
}
