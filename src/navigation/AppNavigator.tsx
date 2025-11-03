import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import { theme } from 'theme/CommonTheme';
import { navigationRef } from './Navigators';
import { useAppSelector } from 'store/hooks';
import { RootState } from 'store/store';

const AppNavigator = () => {
  const { isUserLoggedIn } = useAppSelector((state: RootState) => state.App);

  return (
    <NavigationContainer theme={theme} ref={navigationRef}>
      <AuthNavigator />
      {/* {isUserLoggedIn ? <MainNavigator /> : <AuthNavigator />} */}
    </NavigationContainer>
  );
};

export default AppNavigator;
