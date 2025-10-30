import './global.css';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Button, Icons, Typography } from 'components/index';
import { init } from 'lib/language/i18nextConfig';
import { changeAppLanguage, loadAppLanguage, resetAppLanguage } from 'lib/language/languageUtils';
import { useTranslation } from 'hooks/useTranslation';
import { useDispatch } from 'react-redux';
import { setAppLanguage } from 'redux/slices/appSettings';
import StoreProvider from './StoreProvider';

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

  return (
    <View className='flex h-screen items-center justify-center gap-5 bg-slate-700'>
      <View className='flex w-full max-w-[300px] items-center gap-5'>
        {currentLocale && (
          <Typography className='text-white' variant='h3'>
            Current Locale: {currentLocale}
          </Typography>
        )}
        <Icons componentName='AntDesign' iconName='home' size={40} color='#000' />
        <Button title='Reset Language' onPress={resetAppLanguage} />
        <Button className='w-full' onPress={() => changeAppLanguage('en')} title='Change English' />
        <Button className='w-full' onPress={() => changeAppLanguage('ar')} title='Change Arabic' />
        <Button className='w-full' onPress={() => changeAppLanguage('hi')} title='Change Hindi' />
        <Typography text='continue' />
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
