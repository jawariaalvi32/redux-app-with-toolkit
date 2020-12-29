import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import todoReducer from '../features/todolist/todoSlicer';
// import rootReducer from './rootReducer';

export default  configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer
  },
  // reducer : rootReducer
});
