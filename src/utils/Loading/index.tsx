import React, { useState } from 'react';

import { Container, ModalContent, BackgroundModal, Lottie } from './styles';
import image from '../../assets/images/background.jpg';
import { Modal } from 'react-native';
import { ImageBackground } from '../../config/generalStyles';

interface LoadingProps {
  visible: boolean;
}

const Loading: React.FC<LoadingProps> = ({ visible }) => {
  return (
    <Container style = {{backgroundColor: 'transparent'}}>
      <Modal transparent={true} animationType="fade" visible={visible}>
        <ModalContent>
          <BackgroundModal>
            <Lottie source={require('../../assets/json/loading.json')} autoPlay loop />
          </BackgroundModal>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Loading;
