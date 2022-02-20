import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import './Style/App.css'

const App = () => {
  //Для изменения состояние нам нужен dispatch, создаём его через хук useDispatch
  const dispatch = useDispatch()

  //Для получения состояние нужно воспользоваться хуком useSelector, который параметром принимает функцию; сама функция принимает параметром состояние и из этого состояния мы получаем нужную переменную(смотри пример ниже)
  const counter = useSelector((state) => state.counter)

  const increment = () => {
    dispatch({ type: 'INCREMENT', payload: 2 })
  }
  const decrement = () => {
    dispatch({ type: 'DECREMENT', payload: 2 })
  }
  return (
    <div className="App">
      <h3 className="App_titleCounter">{counter}</h3>
      <div className="App_buttonsContainer">
        <button className="App_btn" onClick={() => decrement()}>
          Decrement
        </button>
        <button className="App_btn" onClick={() => increment()}>
          Increment
        </button>
      </div>
    </div>
  )
}

export default App
