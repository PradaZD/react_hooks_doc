import React, { useState, useCallback, useMemo } from 'react';
import ReactDOM from 'react-dom';

function Child(props) {
  // console.log('render child');
  return (
    <button onClick={props.addClick}>{props.number}</button>
  )
}
//就让函数组件拥有了记忆功能，只有当组件的属性发生变更的时候才会刷新 否则不刷新
// Child = memo(Child);
//函数组件的每次调用都会执行其内部的所有逻辑，这样很耗费性能
let lastData;
function App() {
  let [number, setNumber] = useState(0);
  let [name, setName] = useState('zhufeng');
  //第二个参数deps，表示此函数缓存依赖的变量，如果变量变了 会重新生成函数；
  const addClick = useCallback(() => setNumber(x => x + 1), [number]);
  const data = useMemo(() => ({ number }), [number]);
  console.log(lastData === data);
  lastData = data;
  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)}></input>
      <Child addClick={addClick} number={number} />
    </div>
  )
}



ReactDOM.render(<App />, document.getElementById('root'));


