import React from 'react';
import {Image} from 'react-native';
import {useNavigation} from '@react-navigation/native'

import {
Container, 
ContainerImage,
ContainerText,
TextSucess,
TextDescription,
ButtonContainer,
} from './styles';

import Button from '../../components/Button';

import sucess from '../../assets/sucess.png';

import { colors } from '../../constraints';

const ReportSent: React.FC = () => {
  const {navigate} = useNavigation();

  return(
    <Container>

      <ContainerImage>
        <Image source={sucess} width={86} height={86} style={{marginBottom: 30}}/>
      </ContainerImage>

      <ContainerText>
        <TextSucess>Sucesso!</TextSucess>
          <TextDescription>
            Deu tudo certo com o envio {'\n'} do seu relatório
          </TextDescription>
      </ContainerText>

      <ButtonContainer>
        <Button 
          name="Voltar" 
          onPress={() => navigate('Children')}  
          color={`${colors.primary}`} 
          style={{backgroundColor: '#fff'}} 
        />
      </ButtonContainer>
    </Container>
  );
}

export default ReportSent;