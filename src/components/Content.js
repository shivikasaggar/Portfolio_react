import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
function Content(props) {
    return (
        <Container fluid={true} style={{ position: "relative", top:"-32px" }}>
            <Row className="justify-content-center  textstyle" style={{ backgroundColor: "black" }}>
                <Col md={8}>
                    {props.children}
                </Col>
            </Row>

        </Container>
    );
}
export default Content;
