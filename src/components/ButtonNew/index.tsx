import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonText, Border } from './styles';

interface ButtonProps extends RectButtonProperties {
  children?: string;
  name?: string;
  fontSize?: number;
  color?: string;
  onPress?: (pointerInside: boolean) => void | undefined;
}

const ButtonNew: React.FC<ButtonProps> = ({
  children,
  fontSize,
  color,
  name,
  onPress,
  ...rest
}) => {
  return (
    <Border>
      <Container onPress={onPress} {...rest}>
        <ButtonText
          style={{
            fontSize: fontSize !== undefined ? fontSize : 17,
            color: color !== undefined ? color : '#000',
          }}>
          {name}
        </ButtonText>
      </Container>
    </Border>
  );
};

export default ButtonNew;
