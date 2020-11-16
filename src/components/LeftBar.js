import React, { Component } from 'react'

export default class LeftBar extends Component {
    render() {
        return (
            <div id="left_bar">
                <div>
                    <ul>
                        <li><a>Trending</a></li>
                        <li><a>Latest Release</a></li>
                        <li><a>LIVE STREAM <i className="fa fa-chevron-down"></i></a>
                            <ul>
                                <li><a>Channel 1</a></li>
                                <li><a>Channel 2</a></li>
                                <li><a>Channel 3</a></li>
                                <li><a>Channel 4</a></li>
                                <li><a>View all...</a></li>
                            </ul>
                        </li>
                        <li><a>CATEGORIES <i className="fa fa-chevron-down"></i></a>
                            <ul>
                                <li><a>Hollywood</a></li>
                                <li><a>Nollywood</a></li>
                                <li><a>Bollywood</a></li>
                                <li><a>Spanish</a></li>
                                <li><a>Korean</a></li>
                                <li><a>Turkish</a></li>
                                <li><a>View all...</a></li>
                            </ul>
                        </li>
                        <li><a>Stream Version <i className="fa fa-chevron-down"></i></a>
                            <ul>
                                <li><a>Free Version</a></li>
                                <li><a>Premium Version</a></li>
                            </ul>
                        </li>
                        <li><a>Conferences</a></li>
                        <li><a>Tutorials</a></li>
                        <li><a>Others</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
