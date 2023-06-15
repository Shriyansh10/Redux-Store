import React from 'react'
import "../App.css"
import { useSelector, useDispatch } from 'react-redux'
import {incNumber, decNumber} from '../Actions/index'

const IncDec = () => {

  const myState = useSelector((state) => state.numberUpdate)
  const dispatch = useDispatch();

  return (
    <div className='container'>
        <h1>Increment/Decrement counter using React Redux</h1>
        <div>
            <button onClick={() => dispatch(incNumber())}>+</button>
            <input type="text" value ={myState}/>
            <button onClick={() => dispatch(decNumber())}>-</button>
        </div>
    </div>
  )
}

export default IncDec