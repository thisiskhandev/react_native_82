import './global.css';

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, Text, useColorScheme, View, ActivityIndicator } from 'react-native';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/store';
import { FONT_FAMILY } from 'src/lib/fonts';

const App = () => {
  // useFirebaseMessaging();
  // const isDarkMode = useColorScheme() === 'dark';
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
          <SafeAreaView className='flex-1 bg-slate-300'>
            <View className='h-screen flex-1 items-center justify-center bg-slate-700'>
              <Text className='font-gordita-black text-4xl font-bold text-emerald-500'>
                Welcome to Nativewind!
              </Text>
              <Text className='text-secondary font-poppins-regular mt-2 text-base'>
                Styled with NativeWind + Gordita & Poppins 💎
              </Text>

              <Text style={styles.title}>Play. Style. Repeat.</Text>
            </View>
          </SafeAreaView>
        </PersistGate>
      </SafeAreaProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'Gordita-Black',
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    marginTop: 10,
  },
});

export default App;
