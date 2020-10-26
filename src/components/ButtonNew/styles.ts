import styled from 'styled-components/native';
import {colors, fonts} from '../../constraints';
import { RectButton } from 'react-native-gesture-handler';

export const Border = styled.View`
  border-radius: 5px;
`;

export const Container = styled(RectButton)`
  height: 43px;
  justify-content: center;
  display: flex;
  background: ${colors.primary};
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  text-align: center;
  font-family: ${fonts.NunitoBold};
  color: ${colors.primary};
  font-size: 14px;
`;