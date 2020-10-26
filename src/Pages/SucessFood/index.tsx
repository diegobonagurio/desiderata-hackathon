import React, { useEffect, useState } from 'react';
import { foods } from '../../services/arr';
import {useNavigation} from '@react-navigation/native';
import Dialog from "react-native-dialog";

import { 
Container,
Card,
Title,
ContainerImage,
ContainerStar,
ContainerBalao,
BalaoText,
TextBalao,
ContainerModal
} from './styles';
import { Image, ScrollView } from 'react-native';

import modal from '../../assets/modal.png'
import balao from '../../assets/balao.png';
import monster from '../../assets/monster1.png';
import cstar from '../../assets/cstar.png';


const SucessFood: React.FC = () => {
  const {navigate} = useNavigation();

  const [visible, setVisible] = useState(false);
 
  const showDialog = () => {
    setVisible(true);
  };
 
  const handleCancel = () => {
    setVisible(false);
  };
 
  const handleDelete = () => {
    // The user has pressed the "Delete" button, so here you can do your own logic.
    // ...Your logic
    setVisible(false);
  };

  useEffect(() => {
    showDialog();
  },[])

  return(
    <Container>
      <ContainerStar>
        <Image source={cstar} />
      </ContainerStar>

      <ContainerBalao>
        <Image source={balao} />

        <BalaoText>
          <TextBalao>Gosto muito de maçã!</TextBalao>
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
      
      <Dialog.Container visible={visible}>
        <Dialog.Description>
          <ContainerModal>
            <Image source={modal} />
          </ContainerModal>
        </Dialog.Description>
        <Dialog.Button label="Fechar" onPress={handleCancel} />
      </Dialog.Container> 
    </Container>
  );
}

export default SucessFood;