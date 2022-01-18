import React from 'react';
import {TextInput} from 'react-native';
import {Container} from './styles';

interface InputProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
}
export const Input = ({value, onChange, placeholder}: InputProps) => {
  return (
    <Container>
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        style={{height: 50, padding: 10}}
      />
    </Container>
  );
};

export default React.memo(Input);
