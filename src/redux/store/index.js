import { createStore, applyMiddleware,compose } from 'redux'
import Reducer from '../reducers'
import Thunk from 'redux-thunk'

const mw = applyMiddleware(Thunk)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(Reducer, composeEnhancers(mw))

export default store