import './App.css';
import { useState } from 'react';
import List from "./components/List";
import Details from "./components/Details";


function App() {
  const [selected, setSelected] = useState(0);
  
  return (
    <div className="App">
      <List selected={selected} setSelected={setSelected} />
      <Details selected={selected} />
    </div>
  );
}

export default App;
