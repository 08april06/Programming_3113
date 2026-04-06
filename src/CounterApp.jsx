import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'

function CounterApp() {
  const [count, setCount] = useState(0) 
  // 상태. 기본값 : 0, count : 이전 또는 현재 값, setCount : count 값 변경, 함수
  // count 값을 변경할 때 setCount()를 사용해서 변경해야함 => react가 상태변화를 눈치챔

  return (
    <>
    <h1>{count}</h1>
      <button onClick={() => setCount((count) => count + 1)} >+</button>
      <button onClick={() => setCount((count) => count + 2)} >+2</button>
      <button onClick={() => setCount((count) => count - 1)} >-</button>
      <button onClick={() => setCount((0))}>reset</button>
      <button onClick={() => setCount((count) => count + 1 >= 10 ? 10 : count + 1)}>+(최대 10까지)</button>
      {/* <button onClick={plusMax10}>+(최대 10까지)</button> */}
      <button onClick={() => setCount((count) => Math.min(10, count + 1))}>+(max 10까지)</button>

<button
        className="counter"
        onClick={() => setCount((count) => count + 1)} 
      >
        Count is {count}
      </button>


    </>
  )
}

export default CounterApp
