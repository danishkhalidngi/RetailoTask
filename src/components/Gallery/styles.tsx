import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const ActivityContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  align-content: center;
  z-index: 0;
  height: 100px;
`;
export const StyledImage = styled.Image`
  height: 100%;
  width: 100%;
  z-index: 0;
`;

export const StyledTouchableContainer = styled.TouchableOpacity`
  height: 150px;
  width: ${Dimensions.get('window').width / 2}px;
`;

export const StyledLoader = styled.View`
  margin-top: 20px;
  align-items: center;
`;

export const StyledEmptyCont = styled.View`
  flex: 1;
  height: 400px;
  margin-top: 40%;
`;
export const StyledEmptyText = styled.Text`
  text-align: center;
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
`;
