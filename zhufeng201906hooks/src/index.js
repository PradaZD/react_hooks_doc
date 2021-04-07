import React, { Component, useState, useCallback } from 'react';
import ReactDOM from 'react-dom';

class Counter1 extends Component {
  state = { number: 0 }
  render() {
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={() => { this.setState({ number: this.state.number + 1 }) }}>+</button>
      </div>
    )
  }
}
const Counter2 = () => {
  const [number, setNumber] = useState(0);
  const alertNumber = () => {
    setTimeout(() => {
      console.log(number);
    }, 3000)
  }
  return (
    <div>
      <p>{number}</p>
      <button onClick={() => { setNumber(number + 1) }}>+</button>
      <button onClick={alertNumber}>alert</button>
    </div>
  )
}
//函数式更新
//如果新的状态需要使用先前的状态计算出来，类似class组件中的setState接收函数参数
const Counter3 = () => {
  const [number, setNumber] = useState(0);
  const lazy = function () {
    setTimeout(() => {
      setNumber(number + 1)
    }, 3000)
  }
  const lazyFunction = () => {
    setTimeout(() => {
      setNumber()
    }, 3000)
  }
}

//惰性初始state
//initialState初始状态参数只会在组件初始渲染的时候调用，后续渲染会被忽略
const Counter4 = () => {
  const [state, setState] = useState(function () {
    console.log('初始状态');
    return { name: '计数器', number: 0 }
  })
  return (
    <div>
      <p>{state.name}:{state.number}</p>
      <button onClick={() => { setState({ ...state, number: state.number + 1 }) }}>+</button>

    </div>
  )
}
const Counter5 = () => {
  const [state, setState] = useState(function () {
    return { name: '计数器', number: 0 }
  })
  console.log('Counter5 render');
  return (
    <div>
      <p>{state.name}:{state.number}</p>
      <button onClick={() => { setState({ ...state, number: state.number + 1 }) }}>+</button>
      <button onClick={() => { setState(state) }}>+</button>
    </div>
  )
}
let lastAddClick;
let lastChangeName;
const Counter6 = () => {
  let [number, setNumber] = useState(0);
  let [name, setName] = useState('zhufeng');

  const addClick = useCallback(() => setNumber(number + 1), [number]);
  console.log(lastAddClick === addClick);
  lastAddClick = addClick;
  const changeName = useCallback(() => setName(+new Date()), [name])
  console.log(lastChangeName === changeName);
  lastChangeName = changeName;

  return (
    <div>
      <p>{name}:{number}</p>
      <button onClick={addClick}>addClick</button>
      <button onClick={changeName}>changeName</button>
    </div>
  )
}

ReactDOM.render(<Counter6 />, document.getElementById('root'));


