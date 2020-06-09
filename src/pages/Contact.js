import React, { Component } from 'react';
import Hero from '../components/Hero';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Content from '../components/Content';
import axios from 'axios';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null

        }
    }


    changeHandler = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({

            [name]: value
        })
    }
    submitHandler = (event) => {
        event.preventDefault();
        this.setState({
            disabled: true
        });
        axios.post('http://localhost:3030/api/email', this.state)
            .then(res => {
                if (res.data.success) {
                    this.setState({
                        disabled: false,
                        emailSent: true
                    });
                }
                else {
                    this.setState({
                        disabled: false,
                        emailSent: false
                    });
                }
                
            })

            .catch(err => {
                console.log(err);
                this.setState({
                    disabled: false,
                    emailSent: false
                });
        })
    }

    render() {
        return (
            <div style={{ backgroundColor: "black" }}>
                <Hero title={this.props.title} />
                <Content>
                    <Form onSubmit={this.submitHandler} >
                        <Form.Group>
                            <Form.Label htmlFor="full-name">Full Name</Form.Label>
                            <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.changeHandler}></Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.changeHandler}></Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="message">Message</Form.Label>
                            <Form.Control id="message" name="message" as="textarea" rows="6" value={this.state.message} onChange={this.changeHandler}></Form.Control>
                        </Form.Group>

                        <Button
                            className="d-inline-block"
                            variant="primary"
                            type="submit"
                            disabled={this.state.disabled}>
                            SEND
                            </Button>
                        {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                        {this.state.emailSent === false && <p className="d-inline error-msg">Email not Sent</p>}
                    </Form>
                </Content>
            </div>
        );
    }
    
}
export default Contact;
