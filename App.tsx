import './global.css';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { Button, Icons, Typography } from 'components/index';
import { init } from 'lib/language/i18nextConfig';
import {
  changeAppLanguage,
  loadAppLanguage,
  Locale,
  resetAppLanguage,
} from 'lib/language/languageUtils';
import { useTranslation } from 'hooks/useTranslation';
import { useDispatch } from 'react-redux';
import { setAppLanguage } from 'redux/slices/appSettings';
import StoreProvider from './StoreProvider';
import { cn } from 'lib/helper';
// import AppNavigator from 'navigation/AppNavigator';
// import { Login } from 'screens/auth';
// import LoginScreen from 'screens/auth/LoginScreen';

const btns = [
  {
    title: 'English',
    lang: 'en',
  },
  {
    title: 'Arabic',
    lang: 'ar',
  },
  {
    title: 'Hindi',
    lang: 'hi',
  },
];

const App = () => {
  const dispatch = useDispatch();
  const { currentLocale } = useTranslation();

  console.log('currentLocale', currentLocale);

  useEffect(() => {
    (async () => {
      await init();
      const { locale } = await loadAppLanguage();
      dispatch(setAppLanguage(locale));
    })();
  }, [dispatch]);

  // return <LoginScreen />;

  return (
    <View className='flex h-screen items-center justify-center gap-5 bg-red-400'>
      <View className='flex w-full max-w-[300px] items-center gap-5'>
        {currentLocale && (
          <Text className='text-h1 text-white'>Current Locale: {currentLocale}</Text>
        )}
        <Icons componentName='AntDesign' iconName='home' size={40} color='#fff' />
        <Button title='Reset Language' onPress={resetAppLanguage} />
        {btns.map(({ lang, title }, idx) => (
          <>
            {console.log(lang)}
            <Button
              key={idx}
              className={cn(
                'w-full',
                lang == currentLocale ? 'pointer-events-none bg-pink-50 opacity-30' : '',
              )}
              onPress={() => changeAppLanguage(lang as Locale)}
              title={`Change ${title}`}
            />
          </>
        ))}
        <Typography className='text-h1 text-white' text='continue' />
      </View>
    </View>
  );
};

export default function Main() {
  return (
    <StoreProvider>
      <App />
    </StoreProvider>
  );
}
