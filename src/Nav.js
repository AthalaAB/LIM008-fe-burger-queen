import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <div  className='d-flex justify-content-between'>
          <button type="button" className="btn btn-warning btn-lg">Desayuno</button>
          <button type="button" className="btn btn-secondary btn-lg">Resto del día</button>
      </div>
    );
  }
}

export default Nav;