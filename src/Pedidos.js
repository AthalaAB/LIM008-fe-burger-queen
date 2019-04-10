import React, { Component } from 'react';

class Order extends Component {
  render() {
    return (
      <div className='d-flex justify-content-between'>
          <button type="button" className="btn btn-danger btn-lg">Anular Pedido</button>
          <button type="button" className="btn btn-danger btn-lg">Enviar a Cocina</button>
      </div>
    );
  }
}

export default Order;
