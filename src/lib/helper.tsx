import { clsx, type ClassValue } from 'clsx';
import { Alert, AlertButton, Dimensions, Platform } from 'react-native';
import { twMerge } from 'tailwind-merge';
import { showToast } from './toast';
import NetInfo from '@react-native-community/netinfo';
import parsePhoneNumber from 'libphonenumber-js';
import { IconComponentProps } from 'components/Icons';
import Icons from 'components/Icons';

import { extendTailwindMerge } from 'tailwind-merge';

const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': ['text-h1a'], // Add your custom text sizes
    },
  },
});

// Your new cn function
export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}

// export const cn = (...args: ClassValue[]) => {
//   return twMerge(clsx(args));
// };

export const renderStartEndContent = (content?: IconComponentProps | React.ReactNode) => {
  if (!content) return null;

  // If it's an object that contains 'componentName' and 'iconName', assume it's an icon config
  if (typeof content === 'object' && 'componentName' in content && 'iconName' in content) {
    return <Icons {...(content as IconComponentProps)} />;
  }

  // Otherwise, render it as-is (for text, nodes, etc.)
  return content;
};

export const screenHeight = (percent: number) => {
  const screenHeight = Dimensions.get('window').height;
  return (screenHeight * percent) / 100;
};

export const screenWidth = (percent: number) => {
  const screenWidth = Dimensions.get('window').width;
  return (screenWidth * percent) / 100;
};

export const fontScale = (percent: number) => {
  const scale = Dimensions.get('window').scale;
  return (scale * percent) / 2;
};

export const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

export const isIOS = () => {
  const isIOS = Platform.OS === 'ios';
  return isIOS;
};

export const initNetworkListener = () => {
  NetInfo.addEventListener(state => {
    if (!state.isConnected) {
      showToast({ message: '📴 No Internet Connection' });
    } else {
      showToast({ message: '✅ Back Online', isError: false });
    }
  });
};

export function splitPhoneNumberWithCode(phoneNumber: string | null | undefined) {
  try {
    const parsed = parsePhoneNumber(phoneNumber ?? '');
    return {
      countryCode: '+' + parsed?.countryCallingCode,
      number: parsed?.nationalNumber,
    };
  } catch {
    return {
      countryCode: '',
      number: phoneNumber,
    };
  }
}

export const openCameraOrGallery = ({
  cameraPress,
  galleryPress,
}: {
  cameraPress: AlertButton['onPress'];
  galleryPress: AlertButton['onPress'];
}) => {
  Alert.alert(
    'Choose Option',
    'Select an option to upload a photo',
    [
      {
        text: 'Camera',
        onPress: cameraPress,
      },
      {
        text: 'Gallery',
        onPress: galleryPress,
      },
      { text: 'Cancel', style: 'cancel' },
    ],
    { cancelable: true },
  );
};
