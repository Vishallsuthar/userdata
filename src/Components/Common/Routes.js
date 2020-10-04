import React, { Component } from 'react'

import {  Switch, Route} from "react-router-dom";
import Dashboard from './../../Pages/dashboard'
import Upload from './../../Pages/upload'
import Edit from './../../Pages/edit'
import Result from '../../Pages/result'
export default class Routes extends Component {
    render() {
        return (
            <>
                <Switch>
                    <Route exact path="/">
                        <Dashboard />
                    </Route>
                    <Route  path="/upload">
                        <Upload />
                    </Route>
                    <Route  path="/edit">
                        <Edit />
                    </Route>
                    <Route  path="/results">
                        <Result/>
                    </Route>
                </Switch>
            </>
        )
    }
}
