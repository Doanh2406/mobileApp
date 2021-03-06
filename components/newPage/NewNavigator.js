import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//import NewsHome from "./NewsHome";
import New from "./New";
import News from "../homePage/News";
import NewsNhat from "./NewNhat";

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator headerMode="none">
    <Screen name="News" component={NewsNhat} />
    <Screen name="New" component={New} />
  </Navigator>
);

const  NewNavigator = () => (
  
    <HomeNavigator />
 
);
export default  NewNavigator;