import React, { Component } from 'react'

export default class TestGrid extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col sm={1} md={3} lg={2} className='bgCol1' />
                    <Col sm={12} md={3} lg={2} className='bgCol2' />
                    <Col sm={12} md={3} lg={2} className='bgCol3' />
                    <Col sm={12} md={3} lg={2} className='bgCol4' />
                    <Col sm={12} md={3} lg={2} className='bgCol5' />
                    <Col sm={1} md={3} lg={2} className='bgCol1' />
                    <Col sm={12} md={3} lg={2} className='bgCol2' />
                    <Col sm={12} md={3} lg={2} className='bgCol3' />
                    <Col sm={12} md={3} lg={2} className='bgCol4' />
                    <Col sm={12} md={3} lg={2} className='bgCol5' />
                    <Col sm={1} md={3} lg={2} className='bgCol1' />
                    <Col sm={12} md={3} lg={2} className='bgCol2' />
                    <Col sm={12} md={3} lg={2} className='bgCol3' />
                    <Col sm={12} md={3} lg={2} className='bgCol4' />
                    <Col sm={12} md={3} lg={2} className='bgCol5' />
                </Row>
            </div>
        )
    }
}
