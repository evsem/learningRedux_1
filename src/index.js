import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App'

//Состояние(state) - это некторое значение в виде объекта, массива или примитивного значения, которе хранит в себе данные
const defaultState = {
  counter: 0,
}

//action - просто объект, состоящий из type и payload; по type мы определяем как состояние будет меняться; в payload мы передаём данные
//let action = { type: '', payload: '?' }

//Первым параметром данная функция принимает состояние(state), вторым - action(само действие)
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'DECREMENT':
      return { ...state, counter: state.counter - action.payload }
    case 'INCREMENT':
      return { ...state, counter: state.counter + action.payload }
    default:
      return state
  }
}

//Создаём store
const store = createStore(reducer)

ReactDOM.render(
  //Оборачиваем компонент App в Provider для того чтобы связать Redux с React; в качестве параметра принимает вышк созданный store
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)
