import React, { Component } from 'react';
import Card from '../components/Card';
import tff from '../assets/images/tff.jpg';
import virsa from '../assets/images/virsa.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'title 1',
                    subtitle: 'subtitle 1',
                    imgsrc:tff,
                    link: '',
                    selected: false
                },
                {
                    id: 1,
                    title: 'title 2',
                    subtitle: 'subtitle 2',
                    imgsrc:virsa,
                    link: '',
                    selected: false
                }
                
            ]
        }
    }


    cardClickHandler = (id, card) => {
        let items = [...this.state.items];
        items[id].selected = items[id].selected ? false : true;
        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });
        this.setState({ items });
    }

    makeItemsHandler = (items) => {
        return items.map(item => {
            return <Card item={item}
                click={(e=>this.cardClickHandler(item.id, e))}
                key={item.id}
            />
        })
    }

    render() {
        return (
            <Container fluid={true} style={{ top: -32, position: "relative" }}>
                <Row style={{ backgroundColor: "black" }} className="justify-content-around">
                    {this.makeItemsHandler(this.state.items)}
                </Row>

            </Container>
            
            );
    }
}
export default Carousel;
