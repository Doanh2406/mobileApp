import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Setting from './Setting'
import LichThi from '../inSettingPage/lichThi'
import GioiThieu from "../inSettingPage/GioiThieu";

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator headerMode="none">

    <Screen name="Setting" component={Setting} />
    <Screen name="LichThi" component={LichThi} />
    <Screen name="GioiThieu" component={GioiThieu}/>
  </Navigator>
);

const  AppNavigator = () => (
  
    <HomeNavigator />
 
);
export default  AppNavigator;