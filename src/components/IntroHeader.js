import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Nav, Navbar} from 'react-bootstrap';

export default class IntroHeader extends Component {
    render() {
        return (
            <div>
                <Navbar id="navbar" collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <div className="container">
                    <Link to="/"><Navbar.Brand href="#home" id="intro_brand"><img src="logo.png" alt="Logo" id="logo" /> StreamLit</Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Link to="/sign_up" className="auth">Register</Link>
                            <Link to="/sign_in" className="auth">Sign In</Link>
                        </Nav>
                    </Navbar.Collapse>
                    </div>
                </Navbar>
            </div>
        )
    }
}
