import { createStore } from 'redux';
import { rootReducer } from './reducers/reducers';

const initialState = {
  count: 0,
};

// currently -- 
// took out initialState argument from the initializing createStore
// 

export default() => {
  return createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
}

