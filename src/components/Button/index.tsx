import React from 'react';

import {GestureResponderEvent, Text} from 'react-native';
import { colors } from 'react-native-elements';
import {ButtonPrimary, Title} from './styles';

interface ButtonProps {
  title: string;
  titleColor ?: string;
  buttonColor: string;
  onPress: (event: GestureResponderEvent) => void;
}

export const Button = ({title, titleColor = colors.black, buttonColor, onPress}: ButtonProps) => {
  return (
    <ButtonPrimary backgroundColor={buttonColor} onPress={onPress}>
      <Title style = {{color: titleColor}}>{title}</Title>
    </ButtonPrimary>
  );
};
