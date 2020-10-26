import styled from 'styled-components/native';
import {colors, fonts} from '../../constraints';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 43px;
  justify-content: center;
  display: flex;
  background: #fff;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  text-align: center;
  font-family: ${fonts.NunitoBold};
  color: ${colors.primary};
  font-size: 14px;
`;