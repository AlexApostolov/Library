import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  // Any key to the object provided to combineReducers ends up as a key in global state
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
