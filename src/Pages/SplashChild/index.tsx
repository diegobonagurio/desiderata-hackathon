import React from 'react';
import {useNavigation} from '@react-navigation/native';

import { 
Container,
ContainerImage,
Welcome,
WelcomeText,
ViewName,
Name,
ContainerButton
} from './styles';

import monster from '../../assets/monster1.png';
import { Image } from 'react-native';
import Button from '../../components/Button';
import { colors } from '../../constraints';

const SplashChild: React.FC = () => {
  const {navigate} = useNavigation();

  return(
    <Container>

      <Welcome>
        <WelcomeText>
          Bem-vinda, {'\n'}

          <ViewName>
            <Name>Ana Soprani</Name>
          </ViewName>
        </WelcomeText>
      </Welcome>

      <ContainerImage>
        <Image source={monster} width={640} height={785} />
      </ContainerImage>

      <ContainerButton>
        <Button 
          name="Continuar"
          color={`${colors.primary}`}  
          fontSize={14}
          onPress={() => navigate('Foods')}
        />
      </ContainerButton>

      
    </Container>
  );
}

export default SplashChild;