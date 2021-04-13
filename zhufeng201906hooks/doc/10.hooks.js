import React, { useState, useEffect, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';
function useCounter() {
  let [number, setNumber] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setNumber(x => x + 1)
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  })
  return number
}
function Counter1() {
  let number = useCounter();
  return (
    <div>
      {number}
    </div>
  )
}
function Counter2() {
  let number = useCounter();
  return (
    <div>
      {number}
    </div>
  )
}

ReactDOM.render(<><Counter1 /><Counter2 /></>, document.getElementById('root'));




