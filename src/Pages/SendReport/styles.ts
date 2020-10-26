import styled from 'styled-components/native';
import { colors, fonts } from '../../constraints';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background: ${colors.primary};
  padding: 0px 20px 0px 20px;
`;

export const ContainerUser = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 30px 0;
`;

export const AvatarContainer = styled.View`
  margin-right: 15px;
`;

export const AvatarName = styled.View`
  
`;

export const TextAvatar = styled.Text`
  font-family: ${fonts.NunitoBold};
  font-size: 14px;
  color: ${colors.white};
`;

export const ContainerData = styled.View`
  border-radius: 25px;
  background: ${colors.primary};
  padding: 30px 20px 0 20px;
  height: 100%;
  margin: 0 -20px;
  margin-bottom: -6%;
`;

export const ContainerTitle = styled.View`
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: ${fonts.OpenSansBold};
  font-size: 20px;
  color: ${colors.white};
`;

export const ContainerSubTitle = styled(RectButton)`
  margin-bottom: 30px;
`;

export const SubTitle = styled.Text`
  font-family: ${fonts.NunitoRegular};
  font-size: 14px;
  color: #3AFFFD;
`;

export const ContainerCard = styled.View`
  background: ${colors.white};
  border-radius: 10px;
  padding: 20px;
`;

export const ContainerChild = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const ContainerInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ChildText = styled.View`
  margin-left: 15px;
`;

export const NameChild = styled.Text`
  font-family: ${fonts.OpenSansBold};
  font-size: 16px;
  color: #373737;
`;

export const ContainerFood = styled.View`
`;

export const Food = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const FoodName = styled.Text`
  font-family: ${fonts.OpenSansRegular};
  font-size: 14px;
  color: #373737;
  margin-top: 20px;
`;

export const ContainerActions = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 45px;
`;

export const ContainerAll = styled.View`
  margin-top: 290px;
`;

export const ContainerButton = styled.View`
  margin-top: 20px;
`;

export const ContainerBallGreen = styled.View`
  position: relative;
  height: 1px;
  top: 34%;
  margin: 0 -20px;
  align-items: center;
`;



