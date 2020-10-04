import React, { Component } from 'react'

import {Link} from "react-router-dom";
import {Button,Card,Row,Col,Table,Tab,Container} from 'react-bootstrap'

import { useHistory } from "react-router-dom";
const EditIcon = () => {
    return(
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/></svg>
    )
}

export default class Edit extends Component {
    constructor(props) {
        super(props);       
        this.state = { 
            data:  JSON.parse(localStorage.getItem('myData')),  
        };
      } 
    render() {       
        return (
                <>
                <Container>
                    {(this.state.data !== "")?(
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
                                    <Table bordered hover >
                                        <colgroup>
                                            <col></col>
                                            <col></col>
                                            <col style={{width:50+"px"}}></col>
                                        </colgroup>
                                        <thead className="bg-info text-white">
                                            <tr>
                                                <th>X</th>
                                                <th>Y</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.data.csvData.map((item) =>{
                                            return(<>
                                                <tr>
                                                    <td >{item.x}</td>
                                                    <td >{item.y}</td>
                                                    <td ><Button variant="info btn-sm" type="button"><EditIcon/></Button></td>
                                                </tr>
                                                </>
                                                )
                                            })}
                                        </tbody>
                                    </Table>
                                </Card.Body>
                                <Card.Footer>
                                    <Link to="/results" type="button" onClick={this.ConfirmData}  className="btn btn-info mr-2">
                                        Confirm
                                    </Link>
                                    <Button type="button" variant="outline-secondary">
                                        Cancel
                                    </Button>
                                </Card.Footer>
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
