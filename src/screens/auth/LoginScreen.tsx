import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Wrapper from 'components/Wrapper';
import Typography from 'components/Typography';

type Props = NativeStackScreenProps<any>;

const LoginScreen = ({ navigation }: Props) => {
  return (
    <Wrapper className='flex-1 items-center justify-center bg-white'>
      <Typography className='mb-4 text-2xl font-bold'>Login Screen</Typography>

      <TouchableOpacity
        className='mb-3 rounded-lg bg-indigo-600 px-6 py-3'
        onPress={() => navigation.navigate('Signup')}
      >
        <Text className='font-semibold text-white'>Go to Signup</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text className='text-indigo-500'>Forgot Password?</Text>
      </TouchableOpacity>
    </Wrapper>
  );
};

export default LoginScreen;
