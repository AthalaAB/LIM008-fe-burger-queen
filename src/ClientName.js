import React, { useState } from 'react';


const Client = ()=>{
  const [input, setInput] = useState(''); // '' is the initial state value
  return (
    <div>
      <label>Please specify:</label>
      <input value={input} onInput={e => setInput(e.target.value)}/>
    </div>
  )
}
export default Client;