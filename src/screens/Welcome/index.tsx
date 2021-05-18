import React from 'react';
import {StatusBar, ImageBackground} from 'react-native';

import {Actions} from 'react-native-router-flux';

import {Button} from '../../components/Button';

import {Description, Logo, Center} from './styles';
import {Container} from '../../config/generalStyles';
import colors from '../../config/colors';

const Welcome = () => {
  return (
    <Container style={{justifyContent: 'center'}}>
      <Center>
        <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor={colors.darkBlue}
        />
        <Logo source={require('../../assets/images/logo.png')} />
        <Description>
          Seja bem vindo ao exploratório Star Wars! Aventure-se por esse incrível mundo já!
        </Description>
        <Button
          title={<Description>Iniciar aventura</Description>}
          onPress={() => Actions.choose()}
          buttonColor={colors.darkBlue}
        />
      </Center>
    </Container>
  );
};

export default Welcome;
