import { Reducer, useEffect, useReducer, useRef, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount(count + 1);
  };

  const ref = useRef(updateCount)

  ref.current = updateCount
  
  useEffect(() => {
    setInterval(() => {
      ref.current()
      // setCount(count + 1);
    }, 1000)
  }, [])

  return <div>{count}</div>;
}

export default App;
