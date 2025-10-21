
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(args));
};

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const openCameraOrGallery = ({
  cameraPress,
  galleryPress,
}: {
  cameraPress: voidFuntionType;
  galleryPress: voidFuntionType;
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