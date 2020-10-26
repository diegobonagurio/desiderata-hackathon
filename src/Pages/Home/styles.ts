import styled from 'styled-components/native';
import {fonts, colors} from '../../constraints';


export const Container = styled.View`
  background: #fff;
  flex: 1;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContainerImage = styled.View`
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100px;
  top: 33%;
`;

export const ContainerLogo = styled.View`
  margin-top: 20px;
  align-items: center;
`;

export const Text = styled.Text`
  font-family: ${fonts.NunitoBold};
  color: ${colors.white};
`;

export const ContainerLogin = styled.View`
  border-radius: 25px;
  background: ${colors.primary};
  padding: 30px 20px 0px 20px;
  height: 59%;
  margin-bottom: -6%;
`;


export const SubTitleText = styled.Text`
  font-family: ${fonts.NunitoRegular};
  font-size: 13px;
  color: ${colors.white};
`;

export const ContainerButton = styled.View`
  margin: 0 20px;
  margin-bottom: 40px;
`;

export const LineBorder = styled.View`
  margin: 30px 0;
`;

export const LineText = styled.Text`
  font-size: 14px;
  font-family: ${fonts.NunitoRegular};
  color: ${colors.white};
  width: 40px;
  padding: 0 10px;
  background: #92cacb;
  text-align: center;
`;

export const LineContainer = styled.View`
  color: ${colors.white};
  align-items: center;
  position: relative;
  top: -12px;
  height: 0;
`;