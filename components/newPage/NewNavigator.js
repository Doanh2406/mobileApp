import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//import NewsHome from "./NewsHome";
import New from "./New";
import News from "../homePage/News";

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator headerMode="none">
    <Screen name="News" component={News} />
    <Screen name="New" component={New} />
  </Navigator>
);

const  NewNavigator = () => (
  
    <HomeNavigator />
 
);
export default  NewNavigator;