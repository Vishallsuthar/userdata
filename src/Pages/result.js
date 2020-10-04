import React, { Component } from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import {Navbar,Nav,Form, FormGroup,Button,Modal,Card,Row,Col,Table,Tab,Container} from 'react-bootstrap'

import ReactHighcharts from 'react-highcharts'; 
export default class Results extends Component {
    constructor(props) {
        super(props);       
        this.state = { 
            data:  JSON.parse(localStorage.getItem('myData')),          
        };         
      }
    render() {
        const config = {
            title: {
              text: 'Data Chart'
            },
            xAxis: {
              categories: this.state.data.csvData.map(({x}) => x)
            },            
            series: [{
              data: this.state.data.csvData.map(({y}) => y)
            }]
        };       
        return (
            <>
                <Container>
                    {(this.state.data != "")?(
                        <>
                            <Card className="mb-4">
                                <Card.Header>
                                    User Details
                                </Card.Header>
                                <Card.Body>
                                    <Row>
                                        <Col lg="6"><label>User Name: {this.state.data.name}</label></Col>
                                        <Col lg="6"><label>User Email: {this.state.data.email}</label></Col>
                                        <Col lg="6"><label>Company Name: {this.state.data.companyName}</label></Col>
                                        <Col lg="6"><label>Mill Name: {this.state.data.mill}</label></Col>
                                        <Col lg="6"><label>Machine Name: {this.state.data.Machine}</label></Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Header>
                                    User Data
                                </Card.Header>
                                <Card.Body>
                                    <ReactHighcharts config = {config}/>
                                </Card.Body>
                            </Card>
                        </>
                    ):
                    (
                        <>
                            <div className="text-center py-4">
                                <span>
                                    <svg width="8em" height="8em" viewBox="0 0 16 16" className="text-danger font-large " fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fillRule="evenodd" d="M9.146 5.146a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 1 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 0-.708zm-5 0a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 1 1 .708.708l-.647.646.647.646a.5.5 0 1 1-.708.708L5.5 7.207l-.646.647a.5.5 0 1 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 0-.708z"/><path d="M10 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/></svg>
                                </span>
                                <p className="h1 py-4 text-dark">Opps Upload Data</p>
                                <Link to="/upload" className="btn btn-info">Lets upload some Data</Link>
                            </div>
                        </>
                    )}
                </Container>
            </>
        )
    }
}
