import React from 'react'

class InnerBody extends React.Component {
    render() {
        return (
            <div id="main_body">
                <div id="inner_body">
                    <div id="recommended_img">
                        <div id="recommend_text" className="container">
                            <h1>RECOMMENDATIONS FOR YOU</h1>
                            <div id="title">DEATHSTROKE</div>
                            <div id="sub_title">KNIGHTS AND DRAGONS</div>
                        </div>
                        <div id="img_overlay"></div>
                        <img src="deathstroke.jpg" alt="Recommended for you" />
                    </div>
                    <div id="home_container">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default InnerBody;