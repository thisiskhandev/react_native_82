import React, { useEffect, useState } from 'react';
import { Keyboard, KeyboardAvoidingView, ScrollView, StatusBar, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Loader } from 'components/index';
import { COLORS, isIOS } from 'lib/index';
import { cn } from 'lib/index';
import { RootState, useAppSelector } from 'store/store';

interface WrapperProps {
  children: React.ReactNode;
  useSafeArea?: boolean;
  useScrollView?: boolean;
  backgroundColor?: string;
  darkMode?: boolean;
  loader?: boolean;
  showAppLoader?: boolean;
  className?: string;
  contentClassName?: string;
  style?: object;
}

const Wrapper: React.FC<WrapperProps> = ({
  children,
  useSafeArea = true,
  useScrollView = false,
  backgroundColor = COLORS.WHITE,
  darkMode = true,
  loader,
  showAppLoader = false,
  className,
  contentClassName,
  style,
}) => {
  const isAppLoading = useAppSelector((state: RootState) => state.app.isAppLoading);
  const insets = useSafeAreaInsets();
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const showSub = Keyboard.addListener('keyboardDidShow', () => setKeyboardVisible(true));
    const hideSub = Keyboard.addListener('keyboardDidHide', () => setKeyboardVisible(false));
    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  return (
    <>
      {useSafeArea && (
        <SafeAreaView
          edges={['top']}
          style={{ backgroundColor }}
          className={cn('flex-0', className)}
        />
      )}

      <StatusBar
        backgroundColor={backgroundColor}
        barStyle={darkMode ? 'dark-content' : 'light-content'}
      />

      {(loader || (showAppLoader && isAppLoading)) && <Loader />}

      <KeyboardAvoidingView
        behavior={isIOS() ? 'padding' : isKeyboardVisible ? 'height' : undefined}
        style={[{ flex: 1, backgroundColor, paddingBottom: insets.bottom }, style]}
        className={cn('flex-1', className)}
      >
        {useScrollView ? (
          <ScrollView
            nestedScrollEnabled
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            bounces={false}
            style={{ flex: 1, backgroundColor }}
            className={cn('flex-1', contentClassName)}
          >
            {children}
          </ScrollView>
        ) : (
          <View className={cn('flex-1', contentClassName)}>{children}</View>
        )}
      </KeyboardAvoidingView>
    </>
  );
};

export default Wrapper;
