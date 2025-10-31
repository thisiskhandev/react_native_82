// import '../../global.css';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState, useAppSelector } from 'redux/store';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigation';
import { theme } from 'theme/CommonTheme';
import { navigationRef } from './Navigators';

const AppNavigator = () => {
  const { isUserLoggedIn } = useAppSelector((state: RootState) => state.app);

  return (
    <NavigationContainer theme={theme} ref={navigationRef}>
      <AuthNavigator />
      {/* {isUserLoggedIn ? <MainNavigator /> : <AuthNavigator />} */}
    </NavigationContainer>
  );
};

export default AppNavigator;
