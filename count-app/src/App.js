import React, { useState } from 'react'
import GameOver from './GameOver';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './Count.module.css';



export default function App() {

  const [count, setCount] = useState(0);
  const [gameOver,setGameOver] = useState(false);


  const increment = () =>{
    if(count === 10){
      setGameOver(true)
    }else{
      setCount((prevCount)=>{
        return (
          prevCount + 1
        )
      })
    }
  }

  const decrement = () =>{
    setCount((prevCount)=>{
      return (
        prevCount - 1
      )
    })
    
  }

  const reset = ()=>{
    setCount(0);
    setGameOver(false)
  }

  return (
    <div className={style.container}>
      <h1>Count : <span style={{color:'crimson'}}>{count}</span></h1>
      <button onClick={decrement} disabled={gameOver} className='btn btn-info m-3'>-</button>
      <button onClick={increment} disabled={gameOver} className='btn btn-info m-3'>+</button>

      <GameOver count={count} gameOver={gameOver} reset={reset}/>
    </div>
  )
}
