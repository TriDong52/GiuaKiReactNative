import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from 'react-native-vector-icons/FontAwesome';
import { SCREENS } from "../helpers/constants";
import FoodHome from "../page/home/FoodHome";
import LoginPage from "../page/home/Login";
import RegisterPage from "../page/home/Register";
import CartFood from "../page/home/cartFood";

const LoginStack = createNativeStackNavigator()

const LoginStackScreen = () => {
  return (
    <LoginStack.Navigator screenOptions={{headerShown:false}}>
      <LoginStack.Screen name={SCREENS.LOGIN} component={LoginPage} />
      <LoginStack.Screen name={SCREENS.REGISTER} component={RegisterPage} />
    </LoginStack.Navigator>
  )
}

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = "defaultIconName";
          if (route.name === "HomeFood") {
            iconName = "home";
          } else if (route.name === "CartFood") {
            iconName = "shopping-cart";
          } else if (route.name === "login") {
            iconName = "sign-in";
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="HomeFood"
        component={FoodHome}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="CartFood"
        component={CartFood}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="shopping-cart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="login"
        component={LoginStackScreen}
        options={{
          headerShown:false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="sign-in" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
