/*
 * @Author: zhengduo
 * @Date: 2024-12-25 16:10:55
 * @LastEditors: zhengduo
 * @LastEditTime: 2024-12-27 14:44:20
 * @Description: file content
 */
import React, { useEffect, useState } from "react";


function App() {
  const [, setNum] = useState(0);
  const [count, setCount] = useState(1);
  useEffect(() => {
    setInterval(() => {
      setNum(Math.random())
    }, 2000)
  }, [])

  // useEffect(() => {
  //   setInterval(() => {
  //     setCount(Math.random())
  //   }, 2000)
  // }, [])

  // function bbbCallback() {
    
  // }
  const bbbCallback = React.useCallback(function() {

  }, [])

  return (
    <div>
      <MemoBbb count={count} callback={bbbCallback}></MemoBbb>
      {/* <Bbb count={count} callback={bbbCallback}></Bbb> */}
    </div>
  );
}

interface BbbProps {
  count: number;
  callback: Function;
}

function Bbb(props: BbbProps) {
  console.log('bbb');
  
  return <h2>{props.count}</h2>;
}

const MemoBbb = React.memo(Bbb);

export default App;
