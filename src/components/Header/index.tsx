import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { BorderlessButton } from 'react-native-gesture-handler';
import { Container } from './styles';

import backWhite from '../../assets/backWhite.png';
import backBlue from '../../assets/backBlue.png';

interface PageHeaderProps {
  color: boolean;
}

const Header: React.FC<PageHeaderProps> = ({ color }) => {
  const { goBack } = useNavigation();

  function handleGoBack() {
    goBack();
  }

  return (
    <Container>
      <BorderlessButton onPress={handleGoBack}>
        {color === true ? (
          <Image source={backBlue} width={9} height={18} resizeMode="contain"/>
        ) : (
          <Image source={backWhite} width={9} height={18} resizeMode="contain"/>
        )} 
      </BorderlessButton>

    </Container>
  );
};

export default Header;