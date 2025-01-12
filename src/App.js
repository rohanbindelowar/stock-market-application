import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import DayIntervalData from "./components/DayIntervalData";

function App() {
  const [name, setName] = useState("IBM");
  const [dayIntervalData, setDayIntervalData] = useState({})
  return (
    <div className="App">
      <Header />
      <Search name={name} setName={setName} setDayIntervalData={setDayIntervalData}/>
      <DayIntervalData dayIntervalData={dayIntervalData} id="first" />
      <DayIntervalData dayIntervalData={dayIntervalData} id="second"/>
    </div>
  );
}

export default App;
