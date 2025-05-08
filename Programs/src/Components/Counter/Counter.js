import {useState} from 'react';

import './Counter.css';

const Counter = () =>{
    const [count, setCount] = useState(0);

    const handleIncrement = () =>{
        setCount((prevVal)=>prevVal + 1)
    } 

    const handleDecrement = () =>{
        if(count > 0){
            setCount((prevVal) => prevVal - 1);
         }
    }
    return(
        <div className='counter'>           
            <button onClick={handleDecrement}>Decrement</button> 
            {count}
            <button onClick={handleIncrement}>Increment</button>
         </div>
    )
}

export default Counter;