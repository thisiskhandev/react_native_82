import "./global.css"

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, Text, useColorScheme, View, ActivityIndicator } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/redux/store";

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <NewAppScreen
        templateFileName="App.tsx"
        safeAreaInsets={safeAreaInsets}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// const App = () => {
//   // useFirebaseMessaging();
//   return (
//     <Provider store={store}>
//         <SafeAreaProvider>
//           <SafeAreaView>
//          <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
//         {/* <MainNavigation /> */}
//        <View className="flex-1 h-screen items-center justify-center bg-pink-400">
//       <Text className="text-xl font-bold text-blue-500">
//         Welcome to Nativewind!
//       </Text>
//     </View>
//         </PersistGate>
//         </SafeAreaView>
//     </SafeAreaProvider>
//       </Provider>
//   );
// };

export default App;
