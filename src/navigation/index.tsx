import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS } from "../helpers/constants";
import LoginPage from "../page/home/Login";
import RegisterPage from "../page/home/Register";
import HomePage from "../page/home/HomePage";
import DetailPage from "../page/detail/detailPage";
import CartFood from "../page/home/cartFood";
import FoodHome from "../page/home/FoodHome";
import OnBoardScreen from "../page/home/OnBoardScreen";
import TabNavigation from "./tab";
import DetailsScreen from "../page/detail/DetailScreen";
const Stack = createNativeStackNavigator()
//Stack: Login, Register, một stack là component tab navigator
const Navigation = () => {
    return (
        <NavigationContainer>
           <Stack.Navigator screenOptions={{headerShown:false}} >
                <Stack.Screen name={SCREENS.ONBOARD} component={OnBoardScreen}/>
                <Stack.Screen name="Home" component={TabNavigation}/>
                <Stack.Screen name={SCREENS.DETAIL} component={DetailsScreen} />
               
            </Stack.Navigator>
        </NavigationContainer>
        
    )

}

export default Navigation;