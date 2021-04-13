import React, { useReducer, useEffect } from 'react';
import ReactDOM from 'react-dom';

const initialState = { number: 0 };
function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { number: state.number + 1 };
    case 'DECREMENT':
      return { number: state.number - 1 }
    default:
      return state;
  }
}
//实现redux-logger,在每次状态变更后打印新的状态值
//
function useLogger(reducer, initialState) {
  const [state, dispatch] = useReducer(reducer, initialState);
  function loggerDispatch(action) {
    console.log('老状态', state);
    dispatch(action);
  }
  useEffect(() => {
    console.log('新状态', state);

  })
  return [state, loggerDispatch];
}
function App() {
  const [state, dispatch] = useLogger(reducer, initialState);
  return (
    <div>
      <p>{state.number}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));




