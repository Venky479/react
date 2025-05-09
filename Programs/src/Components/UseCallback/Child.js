import React from "react";

const Child = React.memo((props) => {
console.log(props);
const{onClick} = props;

console.log("Child is rendered");

    return (
        <div>
            <button onClick={onClick}>Increment</button>
        </div>
    )
})

export default Child;
