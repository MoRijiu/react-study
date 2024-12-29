import React, { useRef, useState } from "react";

interface AaaProps {
  name: string;
  content: React.ReactNode;
}

type CccProps = React.PropsWithChildren<{
  color: React.CSSProperties["color"];
  styles?: React.CSSProperties;
}>;

// function Aaa(props: AaaProps) {
//   return <div>aaa, {props.name}{props.content}</div>
// }
const Aaa: React.FunctionComponent<AaaProps> = (props: AaaProps) => {
  return (
    <div>
      aaa, {props.name}
      {props.content}
    </div>
  );
};

const content: JSX.Element = <div>aaa</div>;
console.log(content);

function Ccc(props: CccProps) {
  const [num, setNum] = useState<number>(1);
  console.log(num);

  const ref = useRef<HTMLDivElement>(null);

  const ref2 = useRef<{ num: number }>();
  ref2.current = { num: 2 };
  return (
    <div ref={ref} className="ccc-style">
      {props.children}
    </div>
  );
}

function App() {
  return (
    <div>
      <Aaa name="guang" content={<button>xxx</button>}></Aaa>
      <Aaa name="guang" content={null}></Aaa>
      <Ccc color="yellow" styles={{ backgroundColor: "#bfa" }}>
        <button>1234</button>
      </Ccc>
    </div>
  );
}

export default App;
