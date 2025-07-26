import { configureStore } from '@reduxjs/toolkit';
import dummyReducer from './slices/dummySlice';
import formReducer from './slices/formSlice';

export const store = configureStore({
  reducer: {
    counter: dummyReducer,
    form: formReducer
  },
});
