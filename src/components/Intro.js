import React, { Component } from 'react'
import Link from 'react-router-dom'
import IntroHeader from './IntroHeader'
import IntroContainer from './IntroContainer'

export default class Intro extends Component {
    render() {
        return (
            <div>
                <IntroHeader />
                <br />
                <IntroContainer />
            </div>
        )
    }
}
