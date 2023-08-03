import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decremented, incrementByAmount, incremented } from './redux/counter';

export default function App() {
  // useSelector hook is used to access the state variables within the store
  const count = useSelector(state => state.counter.count)
  // useDispatch hook is used to access the actions to change the state
  const dispatch = useDispatch()

  return (
    <div className='App'>
      <h1>The count is: {count}</h1>
      <button onClick={() => dispatch(incremented())}>increment</button>
      <button onClick={() => dispatch(decremented())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount(33))}>increment by 33</button>
    </div>
  )
}