import React from 'react';

import {GestureResponderEvent, Text} from 'react-native';
import {ButtonPrimary, Title} from './styles';

interface ButtonProps {
  title: string;
  buttonColor: string;
  onPress: (event: GestureResponderEvent) => void;
}

export const Button = ({title, buttonColor, onPress}: ButtonProps) => {
  return (
    <ButtonPrimary backgroundColor={buttonColor} onPress={onPress}>
      <Title>{title}</Title>
    </ButtonPrimary>
  );
};
