import { Reducer, useEffect, useReducer, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      console.log(count);
      setCount(count + 1);
    }, 1000);
  },
  [],
  // [count]
  );

  return <div>{count}</div>;
}

export default App;
