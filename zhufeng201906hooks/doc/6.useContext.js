import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';

let MyContext = React.createContext();
const Counter = () => {
  let { state, setState } = useContext(MyContext);
  return (
    <div>
      <p>{state.number}</p>
      <button onClick={() => setState({ number: state.number + 1 })}>+</button>
    </div>
  )
}

const App = () => {
  const [state, setState] = useState({ number: 0 });
  return (
    <MyContext.Provider value={{ state, setState }}>
      <Counter />Provider
    </MyContext.Provider>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));


