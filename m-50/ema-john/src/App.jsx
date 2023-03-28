import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="mb-14">
        <Header></Header>
      </div>
      <Main></Main>
    </div>
  );
}

export default App;
