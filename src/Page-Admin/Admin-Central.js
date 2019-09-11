import React, { Component } from 'react'
import { PanelRight, PanelContent, PanelHead } from '../Components/PartAdmin/MainAdmin';
import { HeadRight, HeadBtn, HeadLeft, Bgblue, HeadRightBtn, Button } from '../Asset/styleAdmin';
import AdminCentralGoverment from './Admin-Central-Government'
import AdminCompanyAndOther from './Admin-Central-Company-Other'
import AdminPerson from './Admin-Central-Person'

export default class AdminCentral extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tab: 1
        }
    }
    // -----------------------------------------------------------------------------------------------------------------------
    onChangeTab = (e) => {
        this.setState({ tab: e })
    }
    // -----------------------------------------------------------------------------------------------------------------------

    render() {
        let { tab } = this.state
        return (
            <PanelRight>
                <Bgblue />
                <PanelContent>
                    {/* ------------------------- */}
                    <PanelHead>
                        <HeadLeft>
                            <Button bg={tab === 1 ? '#5DC0EC' : 'transparent'} onClick={() => this.onChangeTab(1)}>หน่วยงานรับผิดชอบ</Button>
                            <Button bg={tab === 2 ? '#5DC0EC' : 'transparent'} onClick={() => this.onChangeTab(2)}>นิติบุคคลที่ถูกร้อง</Button>
                            <Button bg={tab === 3 ? '#5DC0EC' : 'transparent'} onClick={() => this.onChangeTab(3)}>บุคคลที่ถูกร้อง</Button>
                        </HeadLeft>
                        <HeadRight>
                            <HeadRightBtn onClick={() => this.acg.onOpenModal('create')}>+ เพิ่มหน่วยงาน</HeadRightBtn>
                        </HeadRight>
                    </PanelHead>

                    {/* ------------------------- */}
                    {tab === 1 ? < AdminCentralGoverment props={this.props} onRef={(ref) => this.acg = ref} />
                        : tab === 2 ? <AdminCompanyAndOther />
                            : <AdminPerson />}
                </PanelContent>
            </PanelRight>
        )
    }


}
