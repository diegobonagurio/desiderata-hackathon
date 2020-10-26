import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Auth = createStackNavigator();

import Home from '../Pages/Home';
import SignUp from '../Pages/SignUp';
import SignIn from '../Pages/SignIn';
import Children from '../Pages/Children';
import SplashChild from '../Pages/SplashChild';
import Foods from '../Pages/Foods';
import CategoryFoods from '../Pages/CategoryFoods';
import SucessFood from '../Pages/SucessFood';
import SendReport from '../Pages/SendReport';
import ReportSent from '../Pages/ReportSent';

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: '#fff'},
    }}>
    <Auth.Screen name="Home" component={Home} />
    <Auth.Screen name="SignUp" component={SignUp} />
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="Children" component={Children} />
    <Auth.Screen name="SplashChild" component={SplashChild} />
    <Auth.Screen name="Foods" component={Foods} />
    <Auth.Screen name="CategoryFoods" component={CategoryFoods} />
    <Auth.Screen name="SucessFood" component={SucessFood} />
    <Auth.Screen name="SendReport" component={SendReport} />
    <Auth.Screen name="ReportSent" component={ReportSent} />
  </Auth.Navigator>
);

export default AuthRoutes;
