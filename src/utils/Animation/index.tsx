import React from 'react';
import RNAnimated from 'react-native-animated-component';

interface AnimationProps {
  children: JSX.Element;
}

function Animation({children}: AnimationProps) {
  return (
    <RNAnimated appearFrom="top" animationDuration={800}>
      {children}
    </RNAnimated>
  );
}

export default Animation;
