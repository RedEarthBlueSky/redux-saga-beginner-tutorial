// Readme has a description of the contents if this component
import { delay } from 'redux-saga'
import { put, takeEvery, all } from 'redux-saga/effects'

//  the SAGAS = Generator functions
function* helloSaga() {
  yield console.log('Hello World from Sagas');
}

//  Worker Saga:  will perform the async increment task
export function* incrementAsync() {
  yield call(delay, 1000) // function suspends until returned Promise resolves.
  yield put({ type: 'INCREMENT'}) //  put instructs middleware to dispatch an 'ACTION'
}

//  Watcher Saga:  spawn a new incrementAsync task on each INCREMENT_ASYNC
function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

// refactor to only export the rootSaga, a single
// entry point to all Sagas at once
export default function* rootSaga() {
  yield all([
      helloSaga(),
      watchIncrementAsync(),
  ])
}
