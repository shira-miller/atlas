import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function Counter2() {
  const {counter,SetCounter}=useContext(AppContext);
  return (
    <div>
      <h2>
        Counter: {counter}
      </h2>
      <button onClick={()=>{
        SetCounter(counter+1);
      }
      }>
        +
      </button>
    </div>
  )
}

export default Counter2
