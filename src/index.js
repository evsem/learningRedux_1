import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import { store } from './Store'

ReactDOM.render(
  //Оборачиваем компонент App в Provider для того чтобы связать Redux с React; в качестве параметра принимает вышк созданный store
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)
