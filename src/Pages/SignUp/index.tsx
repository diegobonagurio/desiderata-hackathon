import React from 'react';
import { 
Container,
ContainerTitle,
TextTitle,
ContainerSubTitle,
TextSubTitle,
ContainerButton,
ContainerText,
ContainerInput
} from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';
import ButtonNew from '../../components/ButtonNew';
import Header from '../../components/Header';
import Line from '../../components/Line';
import LineGreen from '../../components/LineGreen';
import { colors } from '../../constraints';

const SignUp: React.FC = () => {
  return (
    <Container>
      <Header color={false} />

      <ContainerText>
        <ContainerTitle>
          <TextTitle>Registrar</TextTitle>
        </ContainerTitle>

        <ContainerSubTitle>
          <TextSubTitle>Frase aqui</TextSubTitle>
        </ContainerSubTitle>
      </ContainerText>
      
      <ContainerInput>
        <Input placeholder="Nome Completo" />
        <LineGreen />
      </ContainerInput>

      <ContainerInput>
        <Input placeholder="Endereço de e-mail" />
        <LineGreen />
      </ContainerInput>

      <ContainerInput>
        <Input placeholder="CPF" />
        <LineGreen />
      </ContainerInput>
      
      <ContainerInput>
        <Input placeholder="Cidade" />
        <LineGreen />
      </ContainerInput>

      <ContainerInput>
        <Input placeholder="Senha" />
        <LineGreen />
      </ContainerInput>

      <ContainerInput>
        <Input placeholder="Confirmar senha" />
        <LineGreen />
      </ContainerInput>

      <ContainerButton>
        <ButtonNew 
          name="Registrar" 
          color={`${colors.white}`}  
          fontSize={14} 
        />
      </ContainerButton>
    </Container>
  );
}

export default SignUp;