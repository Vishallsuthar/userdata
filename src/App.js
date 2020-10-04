import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

import Header from "../src/Components/Common/Header"
import Routes from "../src/Components/Common/Routes"

import {Container} from 'react-bootstrap'
function App() {
  return (
    <>
    <Router>
      <Header/>
        <div className="content-box">
            <Container fluid className="p-0 py-4">
                <Routes/>
            </Container>
        </div>
      </Router>
    </>
  );
}

export default App;
