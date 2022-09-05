import { configureStore } from '@reduxjs/toolkit';
import membersReducer from '../features/members';

export const store = configureStore({
  reducer: { membersReducer },
});
