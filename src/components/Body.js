import React from 'react';
import InnerBody from './InnerBody';
import LeftBar from './LeftBar';
import RightBar from './RightBar'
import Header from './Header';

class Body extends React.Component {
    render() {
        return (
            <div>
                <div id="Header"><Header /></div>
                <div id="LeftBar"><LeftBar /></div>
                <br /><br /><br />
                <div id="body">
                    <InnerBody />
                </div>
                <div id="RightBar"><RightBar /></div>
            </div>
        )
    }
}

export default Body;