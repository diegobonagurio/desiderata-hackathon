import styled from 'styled-components/native';
import {fonts, colors} from '../../constraints';


export const Container = styled.View`
  background: ${colors.primary};
  flex: 1;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 20px 0px 20px;
`;

export const ContainerImage = styled.View`
  justify-content: center;
  align-items: center;
  position: relative;
  height: 200px;
  top: 250px;
`;

export const Text = styled.Text`
  font-family: ${fonts.NunitoBold};
  color: ${colors.white};
`;

export const Forgot = styled.View`
  margin-top: 10px;
`;

export const ForgotText = styled.Text`
  font-family: ${fonts.NunitoRegular};
  font-size: 12px;
  color: ${colors.white};
`;

export const ContainerInputs = styled.View`
  margin-bottom: -40px;
`;

export const ContainerInputIcon = styled.View`
  margin-left: 10px;

`;

export const ContainerIcon = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

export const ContainerButton = styled.View`
  margin-bottom: 40px;
`;

export const ContainerGoogle = styled.View`

`;

export const Join = styled.View`
  margin-top: 20px;
`;

export const ContainerInputIconGoogle = styled.View`
  margin-left: 10px;
  position: relative;
  height: 1px;
  top: -35px;
`;

export const ContainerInputIconEye = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 0 10px;
  margin-right: -93%;
`;