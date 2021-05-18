import React from 'react';

import {GestureResponderEvent, Text} from 'react-native';

import {Card, Title, Image} from './styles';

interface CardSelectProps {
  title: string;
  color: string;
  icon: string;
  smallTitle?: boolean;
  onPress: (event: GestureResponderEvent) => void;
}

export const CardSelect = ({
  title,
  color,
  icon,
  onPress,
  smallTitle,
}: CardSelectProps) => {
  return (
    <Card bgColor={color} onPress={onPress}>
      <Title small={smallTitle}>{title}</Title>
      <Image source={icon} />
    </Card>
  );
};
