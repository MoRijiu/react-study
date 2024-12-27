/*
 * @Author: zhengduo
 * @Date: 2024-12-25 16:10:55
 * @LastEditors: zhengduo
 * @LastEditTime: 2024-12-27 14:05:25
 * @Description: file content
 */
import React, { useEffect, useImperativeHandle, useRef } from "react";

interface RefProps {
  aaa: () => void;
  bbb: () => void;
}

const Guang: React.ForwardRefRenderFunction<RefProps> = (props, ref) => {
  console.log(props);

  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => {
    return {
      aaa() {
        inputRef.current?.focus();
      },
      bbb() {
        console.log("bbb");
      },
    };
  });
  return (
    <div>
      <input ref={inputRef} />
    </div>
  );
};

const WrapedGuang = React.forwardRef(Guang);

function App() {
  const inputRef = useRef<RefProps>(null);

  useEffect(() => {
    console.log("ref", inputRef.current);
    // inputRef.current?.focus();
    inputRef.current?.aaa();
    inputRef.current?.bbb();
  }, []);

  return (
    <div>
      <WrapedGuang ref={inputRef} />
    </div>
  );
}

export default App;
