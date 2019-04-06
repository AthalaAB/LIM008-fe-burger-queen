import React, { Component } from 'react';
import Header from './Header';
import List from './List';
import Nav from './Nav';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='conteiner-all'>
        <div>
          <Header/>
        </div>
        <nav className='col-5'>
          <Nav/>
        </nav>
        <div>
          <List/>
        </div>
      </div>
    );
  }
}

export default App;
