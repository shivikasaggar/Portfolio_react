import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Social from './SocialIcon';
function Footer() {
    return (
        <footer style={{
            marginTop: "auto"
           }} >
            <Container fluid={true}>
                <Row style={{ backgroundColor:"black" }} className="border-top justify-content-between p-3">
                    <Social />
                    <Col className="p-0 d-flex justify-content-end textstyle" md={3} >With <span style={{ color: "#e25555" }}>&hearts;</span> by shivika</Col>
                    
                </Row> 
            </Container>
        </footer>
        );

}
export default Footer;