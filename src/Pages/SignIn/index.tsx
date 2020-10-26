import React from 'react';
import { Image } from 'react-native';
import { useNavigation}  from '@react-navigation/native';
import { colors } from '../../constraints';

import {
Container, 
Text,
ContainerImage,
ContainerInputs,
ContainerButton,
Join,
Forgot,
ForgotText,
ContainerIcon,
ContainerInputIcon,
ContainerInputIconGoogle,
ContainerInputIconEye
} from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Header from '../../components/Header';

import closeEye from '../../assets/closeEye.png';
import responsibleBG from '../../assets/responsibleBG.png';
import Email from '../../assets/mail.png';
import Lock from '../../assets/lock.png';
import google from '../../assets/google.png';
import Line from '../../components/Line';

const SignIn: React.FC = () => {
  const { navigate } = useNavigation();

  return(
    <Container>
      <Header color={false} />
      <ContainerImage>
        <Image source={responsibleBG} width={200} height={200} />
      </ContainerImage>

        <ContainerInputs>
          <ContainerIcon>
            <ContainerInputIcon>
              <Image source={Email} />
            </ContainerInputIcon>

            <Input placeholder="E-mail" />
          </ContainerIcon>
          <Line />

          
          <ContainerIcon>
            <ContainerInputIconEye>
              <Image source={Lock} />
              <Image source={closeEye} />
            </ContainerInputIconEye>

            <Input placeholder="Senha" />
          </ContainerIcon>
          <Line />

          <Forgot>
            <ForgotText>Esqueceu sua senha?</ForgotText>
          </Forgot>
        </ContainerInputs>

        <ContainerButton>
          <Join>
            <Button 
              name="Entrar"
              color={`${colors.primary}`}  
              fontSize={14}
              onPress={() => navigate('Children')}
            />
          </Join>
          
          <Join>
            
            <Button 
              name="Entrar com o Google" 
              color={`${colors.primary}`}  
              fontSize={14}
              onPress={() => navigate('SplashChild')}
            />

            <ContainerInputIconGoogle>
              <Image source={google} />
            </ContainerInputIconGoogle>
          </Join>
        </ContainerButton>
    </Container>
  );
}

export default SignIn;