import { useCallback, useState } from "react"
import Child from "./Child";

const Parent = () =>{
const [count, setCount] = useState(0);
// const [text, setText] = useState('')

console.log("Parent is rendered");

const handleIncrement = useCallback(() =>{
    setCount((prevVal)=>prevVal + 1)
}, []);

    return(
        <div>
          {count}
          {/* <input type='text' value ={text} onChange={(e)=>setText(e.target.value)}/> */}
          <Child onClick={handleIncrement}/>
        </div>
    )
}

export default Parent;