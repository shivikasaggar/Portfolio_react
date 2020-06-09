import React, { useContext} from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Progress from '../components/Progress';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

 function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
}
function About(props) {
    const { height, width } = useWindowDimensions();
    return (
        <div style={{ backgroundColor: "black" }}>
            <Hero title={props.title} />
            
            <Content >
                heyacvnkllal;;;,daaaaaaaaaa
                nnnnnnnnnnnnnnnnnnnnnnnnn
                mmmmmmmmmmmmm
                am
                mmmmmmmmmmm
               
            </Content>
            
            <Content>
                Technical skills
            </Content>
            <Content>
                <Progress tech={"r"} width={width / 10} percent={10} />
                <Progress tech={"r"} width={width / 10} percent={20} />
                <Progress tech={"r"} width={width / 10} percent={50} />
                <Progress tech={"r"} width={width / 10} percent={10} />
                <Progress tech={"r"} width={width / 10} percent={15} />
            </Content>
            <Content>
               Previous Experience
            </Content>
            <Content>
                <Accordion >
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0" className={"acctog"}>
                            <FontAwesomeIcon icon={faChevronDown} className={"iconclass"} size="1x" />
                            Click me!
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0" className={"acctog"}>
                            <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1" className={"acctog"}>
                            <FontAwesomeIcon icon={faChevronDown} className={"iconclass"} size="1x" />
                            Click me!
                         </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1" className={"acctog"}>
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2" className={"acctog"}>
                            <FontAwesomeIcon icon={faChevronDown} className={"iconclass"} size="1x" />
                            Click me!
                         </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2" className={"acctog"}>
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Content>
        </div>
    );
}
export default About;
