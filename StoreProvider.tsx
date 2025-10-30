import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ActivityIndicator } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store, persistor } from 'redux/store';

interface StoreProviderProps {
  children: React.ReactNode;
}

const StoreProvider = ({ children }: StoreProviderProps) => (
  <Provider store={store}>
    <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
      <SafeAreaProvider>{children}</SafeAreaProvider>
    </PersistGate>
  </Provider>
);

export default StoreProvider;
