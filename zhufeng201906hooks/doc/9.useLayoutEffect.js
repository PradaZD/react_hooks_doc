import React, { useState, useEffect, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';

function LayoutEffect() {
  let [color, setColor] = useState('red');
  //在页面绘制painting之前执行
  //先走useLayoutEffect 再走渲染 最后走useEffect
  useLayoutEffect(() => {
    alert(color);
  })
  useEffect(() => {
    console.log('当前的颜色useEffect', color);
  })
  return (
    <>
      <div id='myDiv' style={{ backgroundColor: color }}>
        颜色
    </div>
      <button onClick={() => setColor('red')}>红</button>
      <button onClick={() => setColor('yellow')}>黄</button>
      <button onClick={() => setColor('blue')}>蓝</button>
    </>
  )
}
ReactDOM.render(<LayoutEffect />, document.getElementById('root'));