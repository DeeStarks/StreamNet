import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';
// import Video from './Video'

export default class IntroContainer extends Component {
    render() {
        return (
            <div id="intro_container">
                <div id="intro_img">
                    <img src="intro.jpg" alt="Top Movies" />
                </div>
                <div id="intro_text">
                    <h1>- Watch HD quality movies at low prices</h1>
                    <h1>- Subscribe anytime</h1>
                    <h1>- No Expiring Subscription</h1>
                    <h1>- Watch latest Movies anytime, anywhere</h1>
                    <h1>- Others for free</h1>
                    <h1>- and more...</h1>
                </div>
                <div className="container">
                    <Row>
                        <Col className='p-3 border'>
                            {/* <Video src="vid1.mp4" poster="my_poster_url" /> */}
                        </Col>
                        <Col className='p-3 border'>2 of 2</Col>
                    </Row>
                    <Row>
                        <Col className='p-3 border'>1 of 3</Col>
                        <Col className='p-3 border'>2 of 3</Col>
                        <Col className='p-3 border'>3 of 3</Col>
                    </Row>
                    <Row>
                        <Col className='p-3 border'>1 of 2</Col>
                        <Col className='p-3 border'>2 of 2</Col>
                    </Row>
                    <Row>
                        <Col className='p-3 border'>1 of 3</Col>
                        <Col className='p-3 border'>2 of 3</Col>
                        <Col className='p-3 border'>3 of 3</Col>
                    </Row>
                    <Row>
                        <Col className='p-3 border'>1 of 2</Col>
                        <Col className='p-3 border'>2 of 2</Col>
                    </Row>
                </div>
            </div>
        )
    }
}
