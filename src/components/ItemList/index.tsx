import React from 'react';
import {GestureResponderEvent} from 'react-native';

import {Card, Image, TextImage, Right, Title, Description} from './styles';

interface ItemListProps {
  title: string;
  description: string;
  imageText: string;
  onPress: (event: GestureResponderEvent) => void;
}

export const ItemList = ({
  title,
  description,
  imageText,
  onPress,
}: ItemListProps) => {
  return (
    <Card onPress={onPress}>
      <Image>
        <TextImage>{imageText}</TextImage>
      </Image>
      <Right>
        <Title numberOfLines={1} ellipsizeMode='tail'>{title}</Title>
        <Description numberOfLines={1} ellipsizeMode='tail'>{description}</Description>
      </Right>
    </Card>
  );
};

export default ItemList;
