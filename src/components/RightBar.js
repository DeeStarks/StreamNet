import React, { Component } from 'react'

export default class RightBar extends Component {
    render() {
        return (
            <div id="right_bar">
                <div id="right_bar_top">
                    <div id="side_search"><i className="fa fa-search"></i></div>
                    <div id="side_profile"><i className="fa fa-user"></i></div>
                    <div id="recommendation"><i className="fa fa-play"></i></div>
                    <div id="settings"><i className="fa fa-cogs"></i></div>
                    <div id="notification"><i className="fa fa-bell"></i></div>
                    <div id="balance"><i className="fa fa-money"></i></div>
                </div>
                <div id="right_bar_bottom">

                </div>
            </div>
        )
    }
}
