import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  const [name, setName] = useState("IBM");
  return (
    <div className="App">
      <Header />
      <Search name={name} setName={setName}/>
    </div>
  );
}

export default App;
