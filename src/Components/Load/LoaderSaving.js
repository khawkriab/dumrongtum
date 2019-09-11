import React, { Component } from 'react'
import './loaderstyle.css'
// import '../css/loaderstyle.css'
export default class LoaderSaving extends Component {
    render() {
        return (
            <div className='bgloader-saving' >
                <div id="loader">
                    {/* <div id="load-shadow"></div> */}
                    {/* <div id="load-box"></div> */}
                    <div id="load-cycle" />
                    {/* <p style={{ marginTop: 80 }} ></p>
                    <span id='l' >L</span>
                    <span id='o' >o</span>
                    <span id='a' >a</span>
                    <span id='d' >d</span>
                    <span id='i' >i</span>
                    <span id='n' >n</span>
                    <span id='g' >g</span> */}
                    {/* <span id='d1' > . </span>
                    <span id='d2' > . </span>
                    <p className='load-text' > LOADING . . </p> */}
                </div>
            </div>
            // <div class="loader-3 center"><span>loading</span></div>
        )
    }
}
