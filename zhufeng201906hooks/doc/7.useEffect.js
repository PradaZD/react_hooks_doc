import React, { useState, useEffect, Component } from 'react';
import ReactDOM from 'react-dom';

// class Counter extends Component {
//   state = { number: 0 }
//   componentDidMount() {
//     document.title = this.state.number;
//   }
//   componentDidUpdate() {
//     document.title = this.state.number;
//   }

//   render() {
//     return (
//       <div>
//         <p>{this.state.number}</p>
//         <button onClick={() => this.setState({ number: this.state.number + 1 })}>+</button>
//       </div>
//     )
//   }
// }

const Counter = () => {
  const [number, setNumber] = useState(0);
  //useEffect里的函数会在组件挂载完之后或者组件更新完成之后进行调用
  useEffect(() => {
    document.title = number
  }, [number])
  return (
    <div>
      <p>{number}</p>
      <button onClick={() => setNumber(number + 1)}>+</button>
    </div>
  )
}
//跳过effect进行性能优化
const Counter2 = () => {
  let [number, setNumber] = useState(0);
  //如果没有给第二个参数，那么这个函数会在每次执行渲染后调用
  //useEffect有返回值，会返回一个清理函数，当组件将要卸载的时候回执行清理函数
  useEffect(() => {
    let timer = setInterval(() => {
      setNumber(x => x + 1)
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])
  return (
    <div>
      <p>{number}</p>
      <button onClick={() => setNumber(number + 1)}>+</button>
    </div>
  )
}
const App = () => {
  let [visible, setVisible] = useState(true);
  return (
    <div>
      <button onClick={() => setVisible(false)}>hide</button>
      {visible && <Counter2 />}
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'));


