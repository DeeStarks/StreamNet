import React, { Component } from 'react'
import IntroHeader from './IntroHeader'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class AuthIn extends Component {
    render() {
        return (
            <div id="auth_body">
                <IntroHeader />
                <br /><br /><br /><br />
                <div id="auth_form">
                    <h1>Log In</h1>
                    <hr />
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control id="input" type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control id="input" type="password" placeholder="Password" />
                            <Form.Text className="text-muted">
                            We'll never share your password with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox" className="text-center">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Link to="/home"><Button variant="primary" type="submit" className="w-100 text-center">
                            Sign In
                        </Button></Link>
                    </Form>
                </div>
            </div>
        )
    }
}
