import React from 'react';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import shivika from '../assets/images/shivika.jpeg';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Home(props) {
    return (
        <div style={{ backgroundColor: "black" }}>
            <Hero title={props.title} subtitle={props.subtitle} text={props.text} />

            <div className="mainimg">
                <Image src={shivika} className="circleimg" roundedCircle />
            </div>
              
               
            
            <Carousel  />
        </div>
        );
}
export default Home;
