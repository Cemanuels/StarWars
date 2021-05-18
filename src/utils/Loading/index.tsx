import React, { useState } from 'react';

import { Container, ModalContent, BackgroundModal, Lottie } from './styles';

import { Modal } from 'react-native';

interface LoadingProps {
  visible: boolean;
}

const Loading: React.FC<LoadingProps> = ({ visible }) => {
  return (
    <Container>
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
