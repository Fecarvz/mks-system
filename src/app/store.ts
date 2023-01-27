import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { cartReducer } from './reducers/cartReducer';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  middleware: [...getDefaultMiddleware()]
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;


