import styled from 'styled-components/native';

export const StyledImageContainer = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const StyledImage = styled.Image`
  flex: 0.9;
  height: 100%;
  width: 100%;
  z-index: 0;
  resize-mode: contain;
`;

export const StyledCrossCont = styled.TouchableOpacity`
  background-color: white;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  align-self: flex-end;
  align-items: center;
`;

export const StyledCrossText = styled.Text`
  font-size: 24px;
  color: black;
  font-weight: bold;
`;
