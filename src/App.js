import {useState} from 'react'

function App() {

  const [value, setValue] = useState(0)
  return (
    <div className="res-body">
      <h1 className="header">Counter App</h1>
      <p className="display">{value}</p>
      <button className="+" onClick={ () => setValue(value + 1)}>+</button>
      <button className="-" onClick={ () => setValue(value - 1)}>-</button>
      <button className="reset" onClick={ () => setValue(0)}>Reset</button>
    </div>
  );
}

export default App;