import { useState } from "react";
import "./App.css";
import IplPlayers from "./Components/Ipl/IplPlayers";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <IplPlayers />
    </div>
  );
}

export default App;
