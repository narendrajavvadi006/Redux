import  {  applyMiddleware, combineReducers,  createStore,} from 'redux'
import { cakeReducer } from './reducers/cakeReduces'
import { chocolateReducer } from './reducers/chocolateReducer'
import logger from 'redux-logger'



var rootReducer=combineReducers({
   cakeReducer:cakeReducer,
  chocolateReducer:chocolateReducer
})



export var store=createStore(rootReducer,applyMiddleware(logger))