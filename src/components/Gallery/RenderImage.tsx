import React from 'react';
import {ActivityIndicator} from 'react-native';
import {
  ActivityContainer,
  StyledImage,
  StyledTouchableContainer,
} from './styles';
import {ModalItemType,GiphsDataType} from '../../types';

interface RenderImageProps {
  item: GiphsDataType;
  setModal: (val: ModalItemType) => void;
}

export const RenderImage = ({item, setModal}: RenderImageProps) => {
  const [isLoading, setIsLoading] = React.useState(false);
  function onLoading(value: boolean) {
    setIsLoading(value);
  }
  return (
    <StyledTouchableContainer
      onPress={() => {
        setModal({isVisible: true, data: item});
      }}
      key={item.id}>
      {isLoading && (
        <ActivityContainer>
          <ActivityIndicator size="large" color="#7D8698" />
        </ActivityContainer>
      )}
      <StyledImage
        source={{uri: item?.images?.preview_gif?.url}}
        onLoadStart={() => onLoading(true)}
        onLoadEnd={() => onLoading(false)}
      />
    </StyledTouchableContainer>
  );
};

export default React.memo(RenderImage);
