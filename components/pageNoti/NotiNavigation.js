import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NotiNhat from "../pageNoti/NotiNhat";
import Notication from "../pageNoti/Notication";

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator headerMode="none">
    <Screen name="Notis" component={NotiNhat} />
    <Screen name="Noti" component={Notication} />
  </Navigator>
);

const NotiNavigation = () => <HomeNavigator />;
export default NotiNavigation;
