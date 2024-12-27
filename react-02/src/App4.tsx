import { Reducer, useCallback, useEffect, useLayoutEffect, useReducer, useRef, useState } from "react";

function useInterval(fn: Function, delay: number | null) {
  const callbackFn = useRef(fn)

  useLayoutEffect(() => {
    callbackFn.current = fn
  })

  let cleanUpFnRef = useRef<Function>();

  const clean = useCallback(() => {
    cleanUpFnRef.current?.()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      callbackFn.current()
    }, delay || 0)

    cleanUpFnRef.current = () => {
      clearInterval(timer)
    }

    return clean
  }, [])

  return clean
}

function App() {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount(count + 1);
  };
  
  useInterval(updateCount, 1000)

  return <div>{count}</div>;
}

export default App;
