import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
//useRef和React.createRef
/* 
   

*/
let lastRef;
function Child() {
  // let refObject = React.createRef();//refObject:{current:要引用的组件}
  let refObject = useRef();
  console.log(lastRef === refObject);
  lastRef = refObject;
  function getFocus() {
    refObject.current.focus();
  }
  useEffect(() => {
    console.log(refObject);

  }, [])
  return (
    <div>
      <input ref={refObject}></input>
      <button onClick={getFocus}>获得焦点</button>
    </div>
  )
}
function Parent() {
  let [number, setNumber] = useState(0);
  return (
    <div>
      <Child />
      <button onClick={() => setNumber(x => x + 1)}>+</button>
    </div>
  )
}
ReactDOM.render(<Parent />, document.getElementById('root'));


