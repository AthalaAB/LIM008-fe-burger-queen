import React, { Component } from 'react';
import './List.css';
class List extends Component {

    constructor(props){
        super(props);
        this.state = {
            items : [],
            isLoaded: false
        }
    }

    componentDidMount(){
        fetch('https://raw.githubusercontent.com/AthalaAB/LIM008-fe-burger-queen/develop/menu.json')
        .then( res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                items : json
            })
        });
    }

    render() {
        const {isLoaded, items} = this.state;

    if (!isLoaded) {
        return <div>Cargando...</div>
        
    }
    else{
      return (
        <div className='col-5'>
            {items.map(item  => (
                <button key = {item.id} className='btn btn-warning btn-lg col my-2'>
                    {item.nombre}
                </button>
            ))}
        </div>
      );
    }
  }
}
  
  export default List;