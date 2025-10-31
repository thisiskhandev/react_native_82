import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<any>;

const SignupScreen = ({ navigation }: Props) => {
  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <Text className='mb-4 text-2xl font-bold'>Signup Screen</Text>

      <TouchableOpacity
        className='rounded-lg bg-green-600 px-6 py-3'
        onPress={() => navigation.navigate('Login')}
      >
        <Text className='font-semibold text-white'>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;
