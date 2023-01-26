import React from 'react';
import './index.css';

function App() {

  const [count, setCount] = React.useState(0)

  const onClickPlus = () => {
    setCount(count + 1)
  }

  const onClickMinus = () =>{
    setCount(count - 1)
  }

  return (
    <div className="App">
      <div>
        <h2>Simply counter:</h2>
        <h1>{count}</h1>
        <button className="minus" onClick={onClickMinus}>- Minus</button>
        <button className="plus" onClick={onClickPlus}>Plus +</button>
      </div>
    </div>
  );
}

export default App;