import 'react-native-gesture-handler';
import {colors} from './constraints'

import React from 'react';
import {View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Routes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor={`${colors.primary}`} />
    <View style={{flex: 1, backgroundColor: '#312e38'}}>
      <Routes />
    </View>
  </NavigationContainer>
);

export default App;
