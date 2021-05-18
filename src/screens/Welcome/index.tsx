import React from 'react';
import {StatusBar, Text} from 'react-native';

import {Actions} from 'react-native-router-flux';

import {Button} from '../../components/Button';
import image from '../../assets/images/background.jpg'
import {Description, Logo, Center} from './styles';
import {Container, ImageBackground} from '../../config/generalStyles';
import colors from '../../config/colors';

const Welcome = () => {
  return (
    <ImageBackground source={image}>
      <Container style={{justifyContent: 'center', backgroundColor: 'transparent'}}>
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
              title={"Iniciar Aventura!"}
              onPress={() => Actions.choose()}
              buttonColor={colors.green}
            />
        </Center>
      </Container>
    </ImageBackground>
  );
};

export default Welcome;
