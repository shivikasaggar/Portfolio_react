import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import Footer from './components/Footer';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title: 'shivika',
            headerLinks: [
                { title: 'Home', path:'/' },
                { title: 'About', path:'/about' },
                { title: 'Contact', path:'/contact' },


            ],
            home: {
                title: 'xyx',
                subtitle: 'makes difference',
                text:'abc'
            },
            about: {
                title:'about'
            },
            contact: {
                title: 'contact'
            }
        }
    }
    render() {
        return (
            <BrowserRouter>
                <Container  className="p-0" fluid={true}>
                    <Navbar className="border-bottom" bg="dark" fixed="top" variant="dark" expand="lg">
                        <Navbar.Brand >SHIVIKA</Navbar.Brand>

                        <Navbar.Toggle aria-controls="navbar-toggle" />
                        <Navbar.Collapse id="navbar-toggle">
                            <Nav className="ml-auto" >
                                <Link  className="nav-link" to="/">HOME</Link>
                                <Link  className="nav-link" to="/about">ABOUT</Link>
                                <Link className="nav-link" to="/contact">CONTACT</Link>

                                
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <Route path="/" exact
                        render={() =>
                            <Home
                                title={this.state.home.title}
                                subtitle={this.state.home.subtitle}
                                text={this.state.home.text} />}>
                    </Route>
                    <Route path="/about" exact
                        render={() =>
                            <About
                                title={this.state.about.title} />}>
                    </Route>
                    <Route path="/contact" exact
                        render={() =>
                            <Contact
                                title={this.state.contact.title} />}>
                    </Route>
                    <Footer />
                </Container>
            </BrowserRouter>

        );
    }
  
}

export default App;
