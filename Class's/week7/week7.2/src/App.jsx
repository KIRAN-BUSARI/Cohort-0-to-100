import { RecoilRoot, useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import { countAtom, isEvenSelector } from "./store/atoms/Count";
import { useMemo } from "react";
function App() {
  // wrap anyone that wants to use the teleported value inside a provider
  // recoil, redux, Themes in mUI
  return (
    <div>
      <RecoilRoot>
        <Count />
        <Text />
      </RecoilRoot>
    </div>
  )
}

function Count() {
  // console.log("Render");
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  )
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <h2>
    {count}
  </h2>
}

function Buttons() {
  // console.log("rerender");
  const setCount = useSetRecoilState(countAtom);
  // const [count, setCount] = useRecoilState(countAtom);
  return <div style={{ marginTop: "10px" }}>
    <button onClick={() => {
      setCount(count => count + 1)
    }}>Increase</button>

    <button style={{ marginLeft: "10px" }} onClick={() => {
      setCount(count => count - 1)
    }}>Decrease</button>
  </div>
}

function Text() {
  const isEven = useRecoilValue(isEvenSelector);
  // const isEven = useMemo(() => {
  //   return count % 2 === 0
  // }, [count])

  return (
    <h1>
      {isEven ? "Even" : "Odd"}
    </h1>
  )
}

export default App
