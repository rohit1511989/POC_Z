import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Vehicle from '../components/Vehicle';
import Landbutton from '../components/Landbutton';
import Pagination from '../components/Pagination';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Landbutton />                   
                <Route path="/" exact strict component={Vehicle} />
                
            </BrowserRouter>
        )
    }
}

export default Router;