import { Reducer, useEffect, useReducer, useState } from "react";

interface Action {
  type: "add" | "minus";
  num: number;
}

function reducer(state: number, action: Action) {
  switch (action.type) {
    case "add":
      return state + action.num;
    case "minus":
      return state - action.num;
  }
  return state;
}

function App() {
  // const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer<Reducer<number, Action>>(reducer, 0);

  useEffect(() => {
    setInterval(() => {
      console.log(count);

      dispatch({ type: "add", num: 1 });

      // setCount(count => count + 1);
    }, 1000);
  }, []);

  return <div>{count}</div>;
}

export default App;