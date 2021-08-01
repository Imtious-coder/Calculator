import { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState("hey");
  return (
    <>
      <div className="container">
        <form action="">
          <input type="text" name="" id="" value={result} />
        </form>
        <div className="keypad">
          <button>clear</button>
          <button>c</button>
          <button>&divide;</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>&times;</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>&ndash</button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
        </div>
      </div>
    </>
  );
}

export default App;
