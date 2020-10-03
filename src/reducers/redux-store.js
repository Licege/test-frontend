import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleWare from 'redux-thunk'
import appReducer from './appReducer'

let rootReducer = combineReducers({
    app: appReducer,
})

let store = createStore(rootReducer, applyMiddleware(thunkMiddleWare))

export default store
