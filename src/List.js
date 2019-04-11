import React, {useEffect, useState } from 'react';

// class List extends Component {

//     constructor(props){
//         super(props);
//         this.state = {
//             items : [],
//             isLoaded: false
//         }
//     }

//     componentDidMount(){
//         fetch('https://raw.githubusercontent.com/AthalaAB/LIM008-fe-burger-queen/develop/menu.json')
//         .then( res => res.json())
//         .then(json => {
//             this.setState({
//                 isLoaded: true,
//                 items : json
//             })
//         });
//     }

//     render() {
//         const {isLoaded, items} = this.state;

//     if (!isLoaded) {
//         return <div>Cargando...</div>
        
//     }
//     else{
//       return (
//         <div className='col-5'>
//             {items.map(item  => (
//                 <button key = {item.id} className='btn btn-warning btn-lg col my-2'>
//                     {item.nombre} S/.{item.precio}
//                 </button>
//             ))}
//         </div>
//       );
//     }
//   }
// }
  
//   export default List;


const DataList = () => {
  const [products, setProducts] = useState( [] )

  function getProducts() {
    fetch('https://raw.githubusercontent.com/AthalaAB/LIM008-fe-burger-queen/develop/menu.json')
      .then(response => response.json())
      .then(products => setProducts(products))
      .catch(err => console.log(err.message))
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (  
    <div>
      {products.map(products => <button key={products.id} className='btn btn-warning btn-lg col my-2'>{products.nombre} S/.{products.precio}</button>)}
    </div>
  )
}

export default DataList;