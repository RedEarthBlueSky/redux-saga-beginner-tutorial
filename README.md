# redux-saga-beginner-tutorial
Companion Repo for [Redux/Redux-saga beginner tutorial](https://github.com/redux-saga/redux-saga/blob/master/docs/introduction/BeginnerTutorial.md)

# Instructions

Setup

```
// clone the repo
git clone https://github.com/redux-saga/redux-saga-beginner-tutorial.git

cd redux-saga-beginner-tutorial

npm install
```

Run the demo

```
npm start
```

Run tests

```
npm test
```
Saga is a process manager in the CQRS - Command Query Responsibility - model

Sagas are Generator functions that 'yield' objects to the redux-saga middleware. The yielded objects are instructions to be interpreted by the middleware.

Generator functions are denoted by an asterix at the end of the function*

function* mySaga() {
  yield { ...something }
}

### yield
prefix to any object/effect/helper function, which is then presented to the middleware.
The saga is suspended until the presented element is fulfilled.

## effects
Simple JavaScript objects which contain instructions to be fulfilled by the middleware.
When an effect is yielded the saga suspends until the Effect is fulfilled.  Some commonly used Effects are;

### delay
technically a helper function
returns a Promise so the middleware suspends the Saga until the Promise resolves
itself, after a time specified in milliseconds as delay's argument

yield delay(1000) //  suspends the saga for one second

### put
instructs the middleware to dispatch an action put returns as its argument

yield put({ type: 'INCREMENT' }) // => { PUT: { type: 'INCREMENT' }}

### takeEvery
this helper function/effect listens for a dispatched REDUX_ACTION and then runs
the function submitted as its second argument each times

yield takeEvery('ACTION_TYPE', calledFunction)

### all
allows a collections of sagas to be exported wrapped by a single parent root saga

export default function* rootSaga() {
  yield all([
      firstSaga(),
      helloWorld(),
      returnSomething(),
    ])
}

### call
instructs the middleware to call a function with the given argument
call(delay, 1000)  // { CALL: { fn: delay, args: 1000 }}
