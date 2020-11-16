import React, { Component } from 'react'

export default class DropDown extends Component {
    render() {
        return (
            <div id="profile_down">
                <div id="profile_down_top">
                    <i className="fa fa-user"></i>
                    <p>You're signed in as <em>DeeStarks</em></p>
                </div>
                <div id="profile_down_bottom">
                    <p>Profile</p>
                    <p>Help</p>
                    <p>Settings</p>
                    <p>Log Out</p>
                    <p>Switch Account</p>
                </div>
            </div>
        )
    }
}
