// take all reducers from dir + combine into rootReducer
import { combineReducers } from 'redux'
import countReducer from './count'

export const rootReducer = combineReducers({
    countReducer
})