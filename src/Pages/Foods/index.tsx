import React, { useEffect, useState } from 'react';
import { foods } from '../../services/arr';
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
ContainerModal,
} from './styles';
import { Image, ScrollView } from 'react-native';

import balao from '../../assets/balao.png';
import monster from '../../assets/monster1.png';
import star from '../../assets/star.png';

const Foods: React.FC = () => {
  const {navigate} = useNavigation();
  return(
    <Container>
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

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {foods.map(food => {
          return (
            <Card key={food.id} onPress={() => navigate('CategoryFoods')}>
              <Image source={food.uri} />
              <Title>{food.title}</Title>
            </Card>
          )
        })}
      </ScrollView>
      
    </Container>
  );
}

export default Foods;