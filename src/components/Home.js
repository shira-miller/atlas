import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function Home() {
    const {number}=useContext(AppContext);
  return (
    <div className='container'>
      Home
      <h3>number from counter: {number}</h3>
    </div>
  )
}

export default Home
