import React, { Component } from 'react'

import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import {Navbar,Nav,Image , Dropdown,Button,Modal,Card , Row,Col,Tabs,Tab, FormControl, Container} from 'react-bootstrap'

import Logo from '../../images/logo.svg'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };       
    }
    render() {
        return (
            <>
            <header >
                <Navbar bg="info" variant="dark" expand="lg" >
                    <Link to="/"  className="navbar-brand"><Image src={Logo} width={60} fluid/></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="mainNavbar">
                        <Nav >
                            <Nav.Item>
                                <Link to="/upload" className="nav-link">Upload</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to="/edit" className="nav-link">Edit</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to="/results" className="nav-link">Results </Link>
                            </Nav.Item>
                        </Nav>                    
                    </Navbar.Collapse>
                </Navbar>
            </header>
           
        </>
        )
    }
}
export default Header

