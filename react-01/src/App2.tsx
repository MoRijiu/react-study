import { useState, useEffect } from "react";
// import "./App.css";

async function queryData() {
  const data = await new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(666);
    }, 2000);
  });
  return data;
}

function App() {
  const [num, setNum] = useState(0);
  console.log(1233333);
  
  useEffect(() => {
    // queryData().then((data) => {
    //   setNum(data);
    // });
    console.log("effect");
    const timer = setInterval(() => {
      console.log(num);
    }, 1000);
    return () => {
      console.log("clean up");

      clearInterval(timer);
    };
  }, [num]);

  return <div onClick={() => setNum((prevNum) => prevNum + 1)}>{num}</div>;
}

export default App;
