import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { ActivityIndicator } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store } from 'store/store';
import { Provider } from 'react-redux';

interface StoreProviderProps {
  children: React.ReactNode;
}

const StoreProvider = ({ children }: StoreProviderProps) => {
  console.log('store', store);

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        {/* <PersistGate loading={<ActivityIndicator />} persistor={persistor}> */}
        {children}
        {/* </PersistGate> */}
      </Provider>
    </SafeAreaProvider>
  );
};

export default StoreProvider;
