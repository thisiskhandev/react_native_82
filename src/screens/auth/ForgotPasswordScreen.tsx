import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<any>;

const ForgotPasswordScreen = ({ navigation }: Props) => {
  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <Text className='mb-4 text-2xl font-bold'>Forgot Password</Text>
      <Text className='mb-6 text-gray-500'>We’ll send a reset link to your email.</Text>

      <TouchableOpacity
        className='rounded-lg bg-indigo-600 px-6 py-3'
        onPress={() => navigation.navigate('Login')}
      >
        <Text className='font-semibold text-white'>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPasswordScreen;
