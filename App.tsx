import './global.css';

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, Text, useColorScheme, View, ActivityIndicator } from 'react-native';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/store';

const App = () => {
  // useFirebaseMessaging();
  // const isDarkMode = useColorScheme() === 'dark';
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
          <SafeAreaView className='flex-1 bg-slate-300'>
            <View className='bg-primary h-screen flex-1 items-center justify-center bg-slate-700 font-sans'>
              <Text className='text-xl font-bold text-emerald-500'>Welcome to Nativewind!</Text>
            </View>
          </SafeAreaView>
        </PersistGate>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
