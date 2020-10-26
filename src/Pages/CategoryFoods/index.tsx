import React, { useState, useEffect } from 'react';
import { categoryFoods } from '../../services/arr';
import {useNavigation} from '@react-navigation/native';

import { 
Container,
Card,
Title,
ContainerImage,
ContainerStar,
ContainerBalao,
BalaoText,
TextBalao,
ViewFoods,
TitleFood,
TitleName,
ContainerScroll,
ContainerClose,
} from './styles';
import { Image, ScrollView } from 'react-native';

import closeRed from '../../assets/closeRed.png';
import balao from '../../assets/balao.png';
import monster from '../../assets/monster1.png';
import star from '../../assets/star.png';


const CategoryFoods: React.FC = () => {
  const {navigate} = useNavigation();
  
  return(
    <Container>
      <ScrollView>
        <ContainerStar>
          <Image source={star} />
        </ContainerStar>

        <ContainerBalao>
          <Image source={balao} />

          <BalaoText>
            <TextBalao>O que comemos hoje?</TextBalao>
          </BalaoText>
        </ContainerBalao>
      

        <ContainerImage>
          <Image source={monster} />
        </ContainerImage>

        <ViewFoods>
          <ContainerClose onPress={() => navigate('Foods')}>
            <Image source={closeRed} />
          </ContainerClose>

          <TitleFood>
            <TitleName>Frutas</TitleName>
          </TitleFood>

          <ContainerScroll>
              {categoryFoods.map(food => {
              return (
                <Card key={food.id} onPress={() => navigate('SucessFood')}>
                  <Image source={food.uri} />
                  <Title>{food.title}</Title>
                </Card>
              )
            })}
          </ContainerScroll>
        </ViewFoods>
      </ScrollView>
    </Container>
  );
}

export default CategoryFoods;