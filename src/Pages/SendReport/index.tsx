import React from 'react';
import {useNavigation} from '@react-navigation/native'

import { 
Container,
ContainerTitle,
Title,
ContainerSubTitle,
SubTitle,
ContainerUser,
AvatarContainer,
AvatarName,
TextAvatar,
ContainerCard,
ContainerChild,
ContainerInfo,
ChildText,
NameChild,
ContainerFood,
Food,
FoodName,
ContainerActions,
ContainerAll,
ContainerButton,
ContainerBallGreen
} from './styles';

import ballGreen from '../../assets/ballGreen.png';
import ana from '../../assets/ana.png';
import fabiana from '../../assets/fabiana.png';
import close from '../../assets/close.png';
import check from '../../assets/check.png';
import config from '../../assets/config.png';

import Button from '../../components/Button';
import { colors } from '../../constraints';
import { Image } from 'react-native';
import Header from '../../components/Header';
import LineGreen from '../../components/LineGreen';
import Input from '../../components/Input';
import Line from '../../components/Line';

const SendReport: React.FC = () => {
  const {navigate} = useNavigation();
  return (
    <Container>
      <Header color={false} />
      
      <ContainerBallGreen>
        <Image source={ballGreen} />
      </ContainerBallGreen>

      <ContainerUser>
        <AvatarContainer>
          <Image source={fabiana} width={40} height={40} />
        </AvatarContainer>

        <AvatarName>
          <TextAvatar>Fabiana Soprani</TextAvatar>
        </AvatarName>
      </ContainerUser>

      <ContainerTitle>
        <Title>Enviar relatório alimentar</Title>
      </ContainerTitle>

      <Input placeholder="Endereço de e-mail do profissional" />
      <Line />

      

      <ContainerAll>
        <ContainerButton>
          <Button 
            name="Enviar relatório"
            color={`${colors.primary}`}  
            fontSize={14}
            onPress={() => navigate('ReportSent')}
          />
        </ContainerButton>
      </ContainerAll>

      
    </Container>
  );
}

export default SendReport;