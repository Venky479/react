import { useState, useEffect } from "react";

const Fetch = () => {
  const userDetails = "https://jsonplaceholder.typicode.com/posts";

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await fetch(userDetails);
      const jsonData = await data.json();
      console.log(jsonData);
      setData(jsonData);
    };
    fetchDetails();
  }, []);

  return (
    <div>
      {data.map((ele) => (
        <div
          style={{
            color: "red",
          }}
        >
          <span style={{
            color:'green'
          }}>{ele.title}</span>
          <br />
          <span>{ele.body}</span>
        </div>
      ))}
    </div>
  );
};

export default Fetch;
