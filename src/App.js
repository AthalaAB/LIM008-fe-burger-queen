import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './Header';
import List from './List';
import Nav from './Nav';
import Client from './ClientName';
import Order from './Pedidos';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='container-all'>
        <div>
          <Header/>
        </div>
          <div>
            <Client/>
          </div>
        <div className='row'>
          <nav className='col-5'>
            <Nav/>
          </nav>
          <div className='col-5'>
            <Order/>
          </div>
        </div>
        <div>
          <List/>
        </div>
      </div>
    );
  }
}

export default App;
