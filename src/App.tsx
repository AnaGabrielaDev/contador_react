import { useState } from "react";
import './App.css';
import { CountCoontrollsComponent } from "./Components/CountControllsComponent";
import { CountVisualizeComponent } from "./Components/CountVisualizeComponent";

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <>
      <h1>Contador</h1>
      <hr/>
      <section>
        <CountVisualizeComponent count={count}/>
        <CountCoontrollsComponent count={count} setCount={setCount}/>
      </section>
    </>
  );
}

export default App;
