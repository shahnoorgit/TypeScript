import { useState } from "react";
import "./App.css";
import Box from "./components/Box";

function App() {
  const [Count, setCount] = useState<number>(0);
  const [info, setinfo] = useState<string | number>("");
  return (
    <Box
      Count={Count}
      Countsetter={setCount}
      setinfo={setinfo}
      info={info}
    ></Box>
  );
}

export default App;
