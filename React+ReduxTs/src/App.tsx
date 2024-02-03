import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { Thala, decrement, increment, addit } from "./Redux-Store/Store";
import { Statetype } from "./Redux-Store/Store";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const [val, setval] = useState<number>(0);
  console.log(val);
  const count = useSelector((state: Statetype) => state.count);
  const Addval = () => {
    dispatch(addit(val));
    setval(0);
  };
  return (
    <>
      <div style={{ display: "flex", gap: "15px" }}>
        <button
          onClick={() => {
            dispatch(Thala());
          }}
        >
          Thala
        </button>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          -
        </button>
      </div>
      <input
        type="number"
        value={val}
        onChange={(e) => {
          setval(Number(e.target.value));
        }}
        placeholder="Enter something"
      />
      <button disabled={val < 0} onClick={Addval}>
        submit
      </button>
      <h1>{count}</h1>
    </>
  );
}

export default App;
