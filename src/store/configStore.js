import { createStore, combineReducers } from 'redux';
import bookReducers from '../book/BookReducers';
import userReducers from '../user/UserReducers';

export default () => {
  // Store creation
  const store = createStore(
    combineReducers({
      books: bookReducers,
      users: userReducers,
      // filters: filterReducer,
    }),
    /* eslint-disable no-underscore-dangle */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  return store;
};

