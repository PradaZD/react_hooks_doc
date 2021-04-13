import React, { useState, useImperativeHandle, useRef } from 'react';
import ReactDOM from 'react-dom';
//useRef和React.createRef
/* 
  useRef本质是缓存 

*/
function Child(props, ref) {
  let refObject1 = useRef();
  let refObject2 = useRef();
  useImperativeHandle(ref, () => ({
    focus() {
      refObject1.current.focus();
    },
    setVal(val) {
      refObject2.current.value = val;
    }
  }))
  return (
    <div>
      <input ref={refObject1}></input>
      <input ref={refObject2}></input>
    </div>
  )
}
let ForwardChild = React.forwardRef(Child);
function Parent() {
  let [number, setNumber] = useState(0);
  let refObject = useRef();
  function getFocus() {
    refObject.current.focus();
    // console.log(refObject);
  }
  function setValue(val) {
    refObject.current.setVal(val)
  }
  return (
    <div>
      <ForwardChild ref={refObject} />
      <button onClick={getFocus}>获得焦点</button>
      <button onClick={() => setValue(Date.now())}>设置值</button>
      <button onClick={() => setNumber(x => x + 1)}>+</button>
    </div>
  )
}
ReactDOM.render(<Parent />, document.getElementById('root'));


