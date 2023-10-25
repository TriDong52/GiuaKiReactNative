import React from 'react';
import Homepage from './src/page/home/HomePage';
import Loginpage from './src/page/home/Login';
import RootNavigator from './src/navigation/rootTab';
import RegisterPage from './src/page/home/Register';
import Navigation from './src/navigation';
import FoodHome from './src/page/home/FoodHome'
import CartFood from './src/page/home/cartFood';
import DetailsScreen from './src/page/detail/DetailScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function App(): JSX.Element {

  return (
    
    <Navigation/> 
 
  );
}

export default App;