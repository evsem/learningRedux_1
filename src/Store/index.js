import { combineReducers, createStore } from 'redux'

//Импортируем функцию для взаимодействия с инструментами разработчика
import { composeWithDevTools } from 'redux-devtools-extension'
import { counterReducer } from './counterReducer'
import { customerReducer } from './customerReducer'

//Создаём корневой reducer, присваиваем ему combineReducers(будет собирать все reducer); параметром принимает объект, в который мы и передаём все имеющиеся reducer
let rootReducer = combineReducers({
  counter: counterReducer,
  customers: customerReducer,
})

//В сам store передаём корневой reducer
export const store = createStore(rootReducer, composeWithDevTools())
