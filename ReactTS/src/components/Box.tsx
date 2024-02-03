import React from "react";
type myprop = {
  Count: number;
  Countsetter: React.Dispatch<React.SetStateAction<number>>;
  info: string | number;
  setinfo: React.Dispatch<React.SetStateAction<string | number>>;
};
const Box = ({ Countsetter, Count, info, setinfo }: myprop) => {
  function counAdder() {
    Countsetter(Count + 1);
  }
  function countminus() {
    Countsetter(Count - 1);
  }
  return (
    <div>
      <button onClick={counAdder} style={{ fontSize: "large" }}>
        {" "}
        Add{" "}
      </button>
      <button onClick={countminus} style={{ fontSize: "large" }}>
        Substract
      </button>
      <h1>{Count}</h1>
      <input
        onChange={(e) => {
          setinfo(e.target.value);
        }}
        value={info}
        type="text"
        placeholder="enter something"
      ></input>
      <h1>{info}</h1>
    </div>
  );
};

export default Box;
