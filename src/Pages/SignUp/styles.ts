import styled from 'styled-components/native';
import {fonts, colors} from '../../constraints';

export const Container = styled.View`
  background: ${colors.white};
  width: 100%;
  height: 100%;
  flex: 1;
  padding: 0px 20px 0 20px;
`;

export const ContainerTitle = styled.View`
  padding-bottom: 10px;
  margin-top: 20px;
  margin-left: -1px;
`;

export const TextTitle = styled.Text`
  font-family: ${fonts.NunitoBold};
  font-size: 28px;
  color: #000;
`;

export const ContainerInput = styled.View`
  margin-top: 20px;
`;

export const ContainerText = styled.View`
`;

export const ContainerSubTitle = styled.View`

`;

export const TextSubTitle = styled.Text`
  font-family: ${fonts.NunitoRegular};
  font-size: 14px;
  color: ${colors.white};
`;

export const ContainerButton = styled.View`
  margin-top: 40px;
`;
