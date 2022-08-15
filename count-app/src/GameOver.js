import React from 'react'
import style from './Count.module.css';



export default function GameOver({reset,gameOver}) {

    const handelReset = ()=>{
        reset()
    }

  return (
    <div>
        {gameOver && <h2 style={{color:'springgreen'}}>Game Over !!!</h2>}
        <button onClick={handelReset} className='btn btn-danger m-4'>Reset</button>
    </div>
  )
}
