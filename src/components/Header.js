import React from 'react';
import { Link } from 'react-router-dom'
import DropDown from './DropDown'

class Header extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            showComponent: false,
        };
        
        this.popup_prof = this.popup_prof.bind(this);
    }

    popup_prof() {
        if(this.state.showComponent == false){
            this.setState({
                showComponent: true,
            });
        } else{
            this.setState({
                showComponent: false,
            });
        }
    }
    
    render() {
        return (
            <div id="navbar">
                <Link to="/home"><h1 id="brand"><img src="logo.png" alt="Logo" id="logo" /> StreamLit</h1></Link>
                <div className="intro">
                    <div id="intro_inner">
                        <a href="#"><p>Free</p></a>
                        <a href="#"><p>Premium</p></a>
                        <div id="nav_form">
                            <form>
                                <input type="text" placeholder="Search here" />
                                <button type="submit"><i className="fa fa-search"></i></button>
                            </form>
                        </div>
                        <div id="nav_profile" onClick={this.popup_prof}>
                            <div id="nav_user">
                                <i className="fa fa-user"></i>
                            </div>
                            <div id="nav_user_down">
                                <i className="fa fa-chevron-down"></i>
                            </div>
                        </div>
                    </div>
                </div>
                
                {this.state.showComponent ? <DropDown /> : null}
            </div>
        )
    }
}

export default Header