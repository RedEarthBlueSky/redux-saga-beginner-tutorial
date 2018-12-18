import "babel-polyfill"
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'

import createSagaMiddleware from 'redux-saga'

import Counter from './Counter'
import reducer from './reducers'

// 1. Import Saga from ./sagas module
import rootSaga from './sagas'

// 2. Create middleware using factory function createSagaMiddleware
const sagaMiddleware = createSagaMiddleware()

// 3. Connect middleware to the store using applyMiddleware
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

// 4. Nowstart our saga
sagaMiddleware.run(rootSaga)

// Function to dispatch action - type only - to the store
const action = type => store.dispatch({type})

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')}
      onIncrementAsync={() => action('INCREMENT_ASYNC')}
      />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
