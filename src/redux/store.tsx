// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import AddressReducer from './slices/address';
import AppReducer from './slices/appSettings';
import NotificationReducer from './slices/notification';
import UserReducer from './slices/user';

export const store = configureStore({
  reducer: {
    Address: AddressReducer,
    App: AppReducer,
    Notification: NotificationReducer,
    User: UserReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
