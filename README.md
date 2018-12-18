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

Sagas are Generator functions that yield objects to the redux-saga middleware. The yielded objects instructions to be interpreted by the middleware.

###yield
prefix to any object/effect/helper function, which is then presented to the middleware.
The saga is suspended until the presented element is fulfilled.

##effects
Simple JavaScript objects which contain instructions to be fulfilled by the middleware.
When an effect is yielded the saga suspends until the Effect is fulfilled.  Some commonly used Effects are;

###delay
technically a helper function
returns a Promise so the middleware suspends the Saga until the Promise resolves
after a time specified in milliseconds as delays argument

###put
instructs the middleware to dispatch an action put returns as its argument

###takeEvery
this helper function/effect listens for a dispatched REDUX_ACTION and then runs
the function submitted as its second argument each times
