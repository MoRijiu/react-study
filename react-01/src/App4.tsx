/*
 * @Author: zhengduo
 * @Date: 2024-12-25 15:55:01
 * @LastEditors: zhengduo
 * @LastEditTime: 2024-12-25 15:57:45
 * @Description: file content
 */
import { produce } from "immer";
import { useReducer, Reducer } from "react";

interface Data {
  a: {
    c: {
      e: number,
      f: number
    },
    d: number
  },
  b: number
}

interface Action {
  type: "add" | "minus";
  num: number;
}

function reducer(state: Data, action: Action) {
  switch (action.type) {
    case "add":
      return produce(state, (state) => {
        state.a.c.e += action.num;
      })
      // return {
      //   ...state,
      //   a: {
      //     ...state.a,
      //     c: {
      //       ...state.a.c,
      //       e: state.a.c.e + action.num
      //     }
      //   }
      // };
  }
  return state;
}

function App() {
  const [res, dispatch] = useReducer<Reducer<Data, Action>, String>(
    reducer,
    "zero",
    (params) => {
      return {
        a: {
          c: {
            e: 0,
            f: 0
          },
          d: 0
        },
        b: 0
      };
    }
  );
  return (
    <div>
      <div onClick={() => dispatch({ type: "add", num: 2 })}>加</div>
      <div>{JSON.stringify(res)}</div>
    </div>
  );
}

export default App;
