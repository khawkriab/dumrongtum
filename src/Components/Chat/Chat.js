import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { PanelPopup, BlockPopup, DetailPopup, NamePopup } from '../../Asset/styled'
import Images from '../Images'
import { observer } from "mobx-react"
import Message from '../../mobx/message'


const Chat = ({ }) => {
    return (
        <PanelPopup>
            <label id='close' onClick={Message.onShowChat}>X</label>
            <p style={{ textAlign: 'center' }} >การตอบกลับเจ้าหน้าที่</p>
            <BlockPopup>
                <NamePopup>
                    <div className='nav-head-left-img' ><img src={Images.Asset30} alt='' /></div>
                    <div className='detail-name' >
                        <p>ชื่อ</p>
                        <span>ตำแหน่ง<label>date</label></span>
                    </div>
                </NamePopup>
                <DetailPopup>Text</DetailPopup>
            </BlockPopup>
        </PanelPopup>
    )
}
export default Chat