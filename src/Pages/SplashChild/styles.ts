import styled from 'styled-components/native';
import {colors, fonts} from '../../constraints';

export const Container = styled.View`
  width: 100%;
  height: 100%;
`;

export const ContainerImage = styled.View`
  align-items: center;
  position: relative;
  height: 50%;
  top: 15%;
`;

export const Welcome = styled.View`
  align-items: center;
  justify-content: center;
`;

export const WelcomeText = styled.Text`
  font-family: ${fonts.NunitoRegular};
  font-size: 32px;
  color: ${colors.primary};
  text-align: center;
  margin-top: 30%;
`;

export const ViewName = styled.View`
`;

export const Name = styled.Text`
  font-family: ${fonts.NunitoBold};
  font-size: 32px;
  color: ${colors.primary};
`;

export const ContainerButton = styled.View`
  margin: 0 20px;
`;
