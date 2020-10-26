import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import {fonts} from '../../constraints';

export const Container = styled.View`
  padding-left: 20px;
`;

export const ContainerStar = styled.View`
  margin-left: -20px; 
  align-items: center;
  margin-top: 30px;
`;

export const Card = styled(RectButton)`
  background: #FFF;
  width: 117px;
  height: 137px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  margin-top: 20px;
`;

export const Title = styled.Text`
  font-family: ${fonts.OpenSansRegular};
  font-size: 17px;
  padding-top: 20px;
`;

export const ContainerImage = styled.View`
  align-items: center;
  position: relative;
  height: 250px;
  margin-left: -20px;
  margin-top: -70px;
`;

export const ContainerBalao = styled.View`
  align-items: center;
  margin-top: 60px;
  margin-left: -20px;
`;

export const BalaoText = styled.View`
  position: relative;
  top: -45px;
`;

export const TextBalao = styled.Text`
  font-family: ${fonts.OpenSansSemiBold};
  font-size: 12px;
`;

export const ContainerModal = styled.View`
  margin-top: -50px;
`;

