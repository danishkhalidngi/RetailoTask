import React from 'react';
import {Modal} from 'react-native';
import {
  StyledImageContainer,
  StyledImage,
  StyledCrossCont,
  StyledCrossText,
} from './styles';
import {ModalItemType} from '../../types';

interface ModalProps {
  item: ModalItemType;
  setModal: (val: ModalItemType) => void;
}

export const Overlay = ({item, setModal}: ModalProps) => {
  return (
    <Modal
      visible={item.isVisible}
      transparent={true}
      onRequestClose={() => setModal({isVisible: false, data: item.data})}
      key={item?.data?.id}>
      <StyledImageContainer>
        <StyledCrossCont
          onPress={() => setModal({isVisible: false, data: item.data})}>
          <StyledCrossText>x</StyledCrossText>
        </StyledCrossCont>
        <StyledImage
          source={{uri: item?.data?.images?.fixed_width_downsampled?.url}}
        />
      </StyledImageContainer>
    </Modal>
  );
};

export default Overlay;
