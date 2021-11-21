import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import {Iteam} from './Iteam';
import cardReduser from './reducers/sellCard';
// import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
     card: cardReduser,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
