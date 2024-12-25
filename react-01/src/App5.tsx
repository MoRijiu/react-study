/*
 * @Author: zhengduo
 * @Date: 2024-12-25 16:10:55
 * @LastEditors: zhengduo
 * @LastEditTime: 2024-12-25 16:25:18
 * @Description: file content
 */
import { useEffect, useRef, useState } from "react";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const numRef = useRef(0);
  // 不推荐
  const [, forceRender] = useState(0);
  
  useEffect(() => {
    inputRef.current?.focus();
  });

  return (
    <div>
      <input ref={inputRef} value={numRef.current} />
      <button onClick={() => {
        numRef.current++
        forceRender(Math.random())
      }}>+</button>
    </div>
  );
}

export default App;
