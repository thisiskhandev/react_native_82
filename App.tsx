import './global.css';

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, Text, useColorScheme, View, ActivityIndicator } from 'react-native';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/store';
import { Typography } from './src/components/index';

// const App = () => {
//   return (
//     <View className='h-screen flex-1 items-center justify-center bg-slate-700'>
//       <Text className='font-gordita-black text-4xl font-bold text-emerald-500'>HHH</Text>
//       <Text className='mt-2 font-poppins-regular text-base text-secondary'>
//         Styled with NativeWind + Gordita & Poppins 💎
//       </Text>

//       <Text>adlksfjalkj</Text>
//       <Typography>Hello lovely</Typography>

//       <Text style={styles.title}>Play. Style. Repeat.</Text>
//     </View>
//   );
// };

const App = () => {
  // useFirebaseMessaging();
  // const isDarkMode = useColorScheme() === 'dark';
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
          <SafeAreaView className='flex-1 bg-slate-300'>
            <View className='h-screen flex-1 items-center justify-center bg-slate-700'>
              <Text className='font-gordita-black text-4xl font-bold text-emerald-500'>HHH</Text>
              <Text className='mt-2 font-poppins-regular text-base text-secondary'>
                Styled with NativeWind + Gordita & Poppins 💎
              </Text>

              <Text>adlksfjalkj</Text>
              <Typography>Hellow dilawr</Typography>

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
