import React, { useEffect, useState } from 'react';

const Breakfast = () => {
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
    if(products.categoria === 'Desayuno')
   {return (  
        <div> 
          {products.map(products => <button key={products.id} className='btn btn-warning btn-lg col my-2'>{products.nombre} S/.{products.precio}</button>)}
        </div>
      )}
  }
  
  export default Breakfast;