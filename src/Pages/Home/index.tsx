import React from 'react';
import { Image } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {colors, fonts} from '../../constraints';

import {
Container, 
Text,
ContainerImage,
ContainerLogin,
Welcome,
WelcomeText,
SubTitle,
SubTitleText,
ContainerButton,
LineText,
LineBorder,
LineContainer,
ContainerLogo
} from './styles';
import Button from '../../components/Button';

import childBg from '../../assets/childBG.png';
import spotLogo from '../../assets/spotLogo.png';
import Line from '../../components/Line';
import ButtonNew from '../../components/ButtonNew';

const Home: React.FC = () => {
  const { navigate } = useNavigation();

  
  return(
    <Container>
      <ContainerLogo>
        <Image source={spotLogo} />
      </ContainerLogo>

      <ContainerImage>
        <Image source={childBg} width={265} height={249} />
      </ContainerImage>


        <ContainerButton>
          <Button 
            name="Entrar" 
            color={`${colors.seconday}`}  
            fontSize={14}
            onPress={() => navigate('SignIn')}
          />

          <LineBorder>
            <Line />
            
            <LineContainer>
              <LineText>ou</LineText>
            </LineContainer>
          </LineBorder>

          <ButtonNew 
            name="Registrar" 
            color={`${colors.white}`}  
            fontSize={14} 
            onPress={() => navigate('SignUp')}
          />
        </ContainerButton>
    </Container>
  );
}

export default Home;