import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
function App() {
  let getData = async () => {
    const res = await fetch("http://localhost:4003/albums");
    const data = await res.json();
    console.log(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return <div className="App">hello</div>;
}

export default App;
