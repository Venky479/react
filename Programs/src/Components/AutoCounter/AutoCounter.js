import {useEffect, useState} from 'react';

const AutoCounter = () =>{
    const [count, setCount] = useState(0);

    useEffect(()=>{
       const intervalId = setInterval(()=>{

          setCount((prevVal) => prevVal + 1);
        }, 1000);

        return ()=> clearInterval(intervalId);
    }, [])
    return (
        <div>
            {count}
        </div>
    )
}
export default AutoCounter;

/*
setInterval and clearInterval
setInterval(callback, delay) calls the callback function every delay milliseconds.

It returns an interval ID, which is just a number used to identify the timer.

clearInterval(intervalId) stops that interval from running further.

*/