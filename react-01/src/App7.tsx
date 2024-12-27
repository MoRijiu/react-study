/*
 * @Author: zhengduo
 * @Date: 2024-12-25 16:10:55
 * @LastEditors: zhengduo
 * @LastEditTime: 2024-12-27 13:56:37
 * @Description: file content
 */
import React from "react";

const countContext = React.createContext(111);

function App() {
  return (
    <div>
      <countContext.Provider value={222}>
        <Bbb></Bbb>
      </countContext.Provider>
    </div>
  );
}

function Bbb() {
  return (
    <div>
      <Ccc></Ccc>
    </div>
  );
}

function Ccc() {
  const count = React.useContext(countContext);
  return <h2>context 的值为：{count}</h2>;
}

export default App;
