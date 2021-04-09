import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Counter = () => {
  return (
    <div>
      <MyContext.Consumer>
        {value => (
          <div>
            <p>{value.state.number}</p>
            <button onClick={() => value.setState({ number: value.state.number + 1 })}>+</button>
          </div>
        )}
      </MyContext.Consumer>
    </div>
  )
}
let MyContext = React.createContext();
const App = () => {
  const [state, setState] = useState({ number: 0 });
  return (
    <MyContext.Provider value={{ state, setState }}>
      <Counter />
    </MyContext.Provider>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));


