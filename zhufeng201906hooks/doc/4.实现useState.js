import React, { useReducer, useCallback } from 'react';
import ReactDOM from 'react-dom';

let initialState = { number: 0 };
const INCREMENT = "INCREMENT";
const DECREMENT = 'DECREMENT';

// const reducer = (state, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return { number: state.number + 1 }
//     case DECREMENT:
//       return { number: state.number - 1 }
//     default:
//       return state
//   }
// }
//自定义hooks 自己实现一个useState
const useState = (initialState) => {
  const reducer = useCallback((state, action) => action.payload);
  // console.log(reducer);
  let [state, dispatch] = useReducer(reducer, initialState);
  const setState = (payload) => {
    //payload是指想操作的那个数据
    dispatch({ payload })
  }
  return [state, setState]
}
const App = () => {
  // let [state, dispatch] = useReducer(reducer, initialState)
  let [state, setState] = useState(initialState);
  return (
    <div>
      <p>{state.number}</p>
      <button onClick={() => setState({ number: state.number + 1 })}>+</button>
      <button onClick={() => setState({ number: state.number - 1 })}>-</button>
    </div>
  )
}



ReactDOM.render(<App />, document.getElementById('root'));


