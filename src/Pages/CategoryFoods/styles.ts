import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import {fonts, colors} from '../../constraints';

export const Container = styled.View`
`;

export const ContainerStar = styled.View`
  align-items: center;
  margin-top: 30px;
`;

export const Card = styled(RectButton)`
  background: #ECF4FF;
  width: 117px;
  height: 137px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin: 0px 5px 20px 5px;
  padding: 20px 0;
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
  margin-top: -70px;
`;

export const ContainerBalao = styled.View`
  align-items: center;
  margin-top: 60px;
`;

export const BalaoText = styled.View`
  position: relative;
  top: -45px;
`;

export const TextBalao = styled.Text`
  font-family: ${fonts.OpenSansSemiBold};
  font-size: 12px;
`;

export const ViewFoods = styled.View`
  background: ${colors.white};
  border-radius: 10px;
  align-items: center;
`;

export const TitleFood = styled.View`

`;

export const TitleName = styled.Text`
  font-family: ${fonts.NunitoBold};
  font-size: 24px;
  color: ${colors.primary};
  margin: 20px 0;
`;

export const ContainerScroll = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ContainerClose = styled(RectButton)`
  top: -20px;
  height: 40px;
  margin-bottom: -20px;
`;





