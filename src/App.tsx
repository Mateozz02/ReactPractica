import "./App.css";
import { useState } from "react";
import { Button } from "./components/index.ts";
import { useFetch } from "./hooks/useFetch.ts";
interface Data {
  name: string;
  id: number;
  email: string;
}
function App() {
  const [counter, setCounter] = useState(0);
  const apretalo = () => {
    setCounter((counter) => counter + 1);
  };

  const { data, error, loading } = useFetch<Data>(
    "https://jsonplaceholder.typicode.com/users",
  );

  if (loading) {
    return <div>Cargando...</div>;
  }
  if (error) {
    return <div>Se rompio TODO</div>;
  }
  return (
    <>
      <Button
        label={`El numero es ${counter}`}
        parentMethod={apretalo}
      ></Button>

      <div>{JSON.stringify(data)}</div>
    </>
  );
}

export default App;
