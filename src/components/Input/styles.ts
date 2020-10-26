import styled from 'styled-components/native';
import {fonts, colors} from '../../constraints';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  height: 40px;
`;

export const TextInput = styled.TextInput`
  padding-left: 10px;
`;

export const Title = styled.Text`
  font-family: ${fonts.NunitoRegular};
  font-size: 12px;
`;

export const ViewColor = styled.View`
`;