//Состояние(state) - это некторое значение в виде объекта, массива или примитивного значения, которе хранит в себе данные
const defaultState = {
  counter: 0,
}

//action - просто объект, состоящий из type и payload; по type мы определяем как состояние будет меняться; в payload мы передаём данные
//let action = { type: '', payload: '?' }

//Первым параметром данная функция принимает состояние(state), вторым - action(само действие)
export const counterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'DECREMENT':
      return { ...state, counter: state.counter - action.payload }
    case 'INCREMENT':
      return { ...state, counter: state.counter + action.payload }
    default:
      return state
  }
}

//Экспортируем reduser и импортируем его в store(находится в index.js)
