import "./App.css";
import { useState } from "react";
import { Button } from "./components/index.ts";

function App() {
  const [data, setData] = useState(0);
  const apretalo = () => {
    setData((data) => data + 1);
  };

  return (
    <>
      <Button label={`El numero es ${data}`} parentMethod={apretalo}></Button>
    </>
  );
}

export default App;
