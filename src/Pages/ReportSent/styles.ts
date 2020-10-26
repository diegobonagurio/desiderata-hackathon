import styled from 'styled-components/native';
import { colors, fonts } from '../../constraints';

export const Container = styled.View`
  background: ${colors.primary};
  height: 100%;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  padding: 0 20px;
`;

export const ContainerImage = styled.View`
  justify-content: center;
  align-items: center;
  
`;

export const ContainerText = styled.View`
`;


export const TextSucess = styled.Text`
  color: #fff;
  font-family: ${fonts.NunitoBold};
  font-size: 28px;
  text-align: center;
`;


export const TextDescription = styled.Text`
  color: #fff;
  font-family: ${fonts.NunitoSemiBold};
  font-size: 16px;
  text-align: center;

`;

export const ButtonContainer = styled.View`
  width: 100%;
  margin-bottom: 60px;
  margin-top: 170px;
`;

