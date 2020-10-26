import React from 'react';
import {useNavigation} from '@react-navigation/native';

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
import Line from '../../components/Line';
import LineGreen from '../../components/LineGreen';

const Children: React.FC = () => {
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
        <Title>Filhos</Title>

        <ContainerSubTitle>
          <SubTitle>Adicionar filho</SubTitle>
        </ContainerSubTitle>
      </ContainerTitle>

      <ContainerCard>
        <ContainerChild>
          <ContainerInfo>
            <Image source={ana} />

            <ChildText>
              <NameChild>Ana Soprani</NameChild>
            </ChildText>
          </ContainerInfo>
          <Image source={config} />
        </ContainerChild>

        <ContainerFood>
          <Food>
            <FoodName>Maçã</FoodName>
            
            <ContainerActions>
              <Image source={close} />
              <Image source={check} />
            </ContainerActions>
          </Food>
          <LineGreen />

          <Food>
            <FoodName>Macarrão</FoodName>
            
            <ContainerActions>
              <Image source={close} />
              <Image source={check} />
            </ContainerActions>
          </Food>
          <LineGreen />

          <Food>
            <FoodName>Batata</FoodName>
            
            <ContainerActions>
              <Image source={close} />
              <Image source={check} />
            </ContainerActions>
          </Food>
        </ContainerFood>
      </ContainerCard>

      <ContainerAll>
        <ContainerButton>
          <Button 
            name="Visualizar relatório"
            color={`${colors.primary}`}  
            fontSize={14}
          />
        </ContainerButton>
        
        <ContainerButton>
          <Button 
            name="Enviar relatório"
            color={`${colors.primary}`}  
            fontSize={14}
            onPress={() => navigate('SendReport')}
          />
        </ContainerButton>
      </ContainerAll>

      
    </Container>
  );
}

export default Children;