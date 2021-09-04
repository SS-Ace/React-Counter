import {useState} from 'react'

function App() {

  const [value, setValue] = useState(0)
  return (
    <div>
      <div className="res-body">
      <h1 className="header">Counter App</h1>
      <div className="break"></div>
      <p className="display">{value}</p>
      </div>
      <div className="buttons">
      <button className="inc" onClick={ () => setValue(value + 1)}>+</button>
      <div className="break-col"></div>
      <button className="dec" onClick={ () => setValue(value - 1)}>-</button>
      <div className="break-col" ></div>
      <button className="reset" onClick={ () => setValue(0)}>Reset</button>
    </div>
    </div>
  );
}

export default App;
