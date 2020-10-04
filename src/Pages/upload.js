import React, { Component,useState} from 'react'
import {Navbar,Nav,Form,FormGroup,Button,Modal,Card,Row,Col,Tabs,Tab,Container} from 'react-bootstrap'
import { useForm} from "react-hook-form";
import ReactFileReader from 'react-file-reader';
import { useHistory } from "react-router-dom";
const UploadFrom = ({location}) => {
    let history = useHistory();
    const { handleSubmit, register, errors } = useForm();
    const [data,setdata] = useState([]); 
    const onSubmit = (values) => {
        fetch(location)
          .then(resp => {
            values.csvData = data;            
            localStorage.setItem('myData', JSON.stringify(values));
             history.push({
                    pathname : '/edit',
                    data: values
                } 
              );
          });
      }
      const handleFiles = async  (files) => {
        var reader = new FileReader();
        reader.onload = (e) =>  {
            const parsedata = reader.result.split("\n").map((elem)=>{
                const coordinates = elem.trim().split(",");
                return { x:parseInt(coordinates[0]),y:parseInt(coordinates[1])}
            });        
            console.log(parsedata.slice(1,parsedata.length -1))
            setdata(parsedata.slice(1,parsedata.length -1))
        }
        reader.readAsText(files[0]);
    }
    return (
      <Form method="post" onSubmit={handleSubmit(onSubmit)} action="/">
        <Row className="justify-content-center">
            <Col lg="10">
                <h1 className="text-info py-2 text-center">Upload Data Form</h1>
                <Row className="justify-content-center">
                    <Col lg="6">
                        <Form.Group>
                            <Form.Label>User Name :</Form.Label>
                            <Form.Control name="name" placeholder="Enter your name"      ref={register({
                                    required: "Enter your name",
                                    
                                })}/>
                           {(errors)?(<><span className="text-danger d-block mt-2">{errors.name && errors.name.message}</span></>):("")} 
                        </Form.Group>
                    </Col>
                    <Col lg="6">
                        <Form.Group>
                            <Form.Label>User Email :</Form.Label>
                            <Form.Control  name="email"  placeholder="Enter email address"  ref={register({
                                    required: "Enter email address",
                                    pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Enter your  valid email address"
                                    }
                                })}/>
                                {(errors)?(<><span className="text-danger d-block mt-2">{errors.email && errors.email.message}</span></>):("")}                           
                        </Form.Group>
                    </Col>
                    <Col lg="6">
                        <Form.Group>
                            <Form.Label>Company Name :</Form.Label>
                            <Form.Control name="companyName" placeholder="Enter company name"   ref={register({required: "Enter your company name", validate: value => value !== "" })} />
                            {(errors)?(<><span className="text-danger d-block mt-2">{errors.companyName && errors.companyName.message}</span></>):("")}
                        </Form.Group>
                    </Col>
                    <Col lg="6">
                        <Form.Group>
                            <Form.Label>Mill Name :</Form.Label>
                            <Form.Control name="mill" placeholder="Enter mill name"   ref={register({required: "Enter your mill name", validate: value => value !== "" })} />                   
                            {(errors)?(<><span className="text-danger d-block mt-2">{errors.mill && errors.mill.message}</span></>):("")}
                        </Form.Group>
                    </Col>
                    <Col lg="6">
                        <Form.Group>
                            <Form.Label>Machine Name :</Form.Label>
                            <Form.Control name="Machine" placeholder="Enter machine name"   ref={register({required: "Enter your Machine name", validate: value => value !== "" })} />
                            {(errors)?(<><span className="text-danger d-block mt-2">{errors.Machine && errors.Machine.message}</span></>):("")}
                        </Form.Group>
                    </Col>
                    <Col lg="6">
                        <Form.Group>
                            <Form.Label>Data  :</Form.Label>
                            <ReactFileReader handleFiles={handleFiles} fileTypes={'.csv'}>
                                <Button type="button" variant="outline-primary btn-block">Upload Data</Button>
                            </ReactFileReader>
                        </Form.Group>
                    </Col>
                    <Col lg="6 py-4">
                        <Form.Group>
                             <Button variant="info btn-block" type="submit">Submit</Button>
                        </Form.Group>
                    </Col>
                </Row>
            </Col>
        </Row>
      </Form>
    );
  };
export default class upload extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data1: ""
        };
      }
    render() {
        return (
            <>
               <Container>
                    <UploadFrom location={this.props.location}/>
                </Container>
            </>
        )
    }
}
