import React, { useState } from 'react';

const CountFunction = () => {
    const [count, setCount] = useState(1);

    return (
        <div>
            <button onClick={()=> setCount(count - 1)}>-</button>
            {count}
            <button onClick={()=> setCount(count + 1)}>+</button>
        </div>
    )
}

export default CountFunction;