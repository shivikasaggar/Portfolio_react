import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Hero(props) {
    return (
        <div >
        <Jumbotron className=" jumbotron-fluid p-0 " style={{ backgroundColor:"black" }} >
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={8} sm={12}>
                        {props.title && <h1 className="display-1 textstyle font-weight-bolder">{props.title}</h1>}
                            {props.subtitle && <h2 className="display-4  textstyle font-weight-light">{props.subtitle}</h2>}
                            {props.text && <h3 className="lead   textstyle font-weight-light">{props.text}</h3>}
                    </Col>

                </Row>
            </Container>
            </Jumbotron>
            </div>
    );
}
export default Hero;
