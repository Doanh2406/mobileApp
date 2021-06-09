import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import LoginForm from "./components/loginForm";
// import Articles from './components/articles';
// import BG from './assets/bg1.png';
import Loading from "./components/loading";
import Home from "./components/homePage/Home";
import TimeTable from "./components/pageTimeTable/TimeTable";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Setting from "./components/homePage/Setting";
import Navbar from "./components/Navbar";
import Ionicons from "react-native-vector-icons/Ionicons";
import firebase from "./firebase";
import AppNavigator from "./components/homePage/AppNavigator";
import NewNavigator from "./components/newPage/NewNavigator";
import NotiNavigation from "./components/pageNoti/NotiNavigation";
import {NotiRef} from './firebase'
import Noti from "./components/pageNoti/Noti";



const Tab = createBottomTabNavigator();

export default class App extends Component {
  
  readNewsRef = () => {
    let notis = [];
    NotiRef.onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        notis.push({ id: doc.id, data: doc.data() });
      });
      this.setState({ Noti: notis });
      
    });
  };

  componentDidMount() {
    this.readNewsRef();
  }

  state = {
    Noti: [],
    loggedIn: false,
   };
  componentDidMount() {
    this.readNewsRef();
    firebase.app();
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: false });
      } else {
        this.setState({ loggedIn: true });
      }
    });
  }

  


  renderContent = () => {
    
    switch (this.state.loggedIn) {
      case true:
        return <LoginForm />;
      case false:
        return (
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
                  switch (route.name) {
                    case "Home":
                      iconName = focused ? "home" : "home-outline";
                      break;
                    case "News":
                      iconName = focused ? "newspaper" : "newspaper-outline";
                      break;
                    case "Calendar":
                      iconName = focused ? "calendar" : "calendar-outline";
                      break;
                    case "Notifications":
                      iconName = focused
                        ? "notifications"
                        : "notifications-outline";
                      break;
                    case "Menu":
                      iconName = focused ? "menu" : "menu-outline";
                      break;
                    default:
                  }
                  // You can return any component that you like here!
                  return (
                    <>
                      <View style={{ width: 24, height: 24, margin: 5 }}>
                        <Ionicons name={iconName} size={size} color={color}  />

                        {
                          route.name=="Notifications" && (
                            <View style={{
                              // If you're using react-native < 0.57 overflow outside of the parent
                              // will not work on Android, see https://git.io/fhLJ8
                              position: 'absolute',
                              right: -6,
                              top: -3,
                              backgroundColor: 'red',
                              borderRadius: 6,
                              width: 12,
                              height: 12,
                              justifyContent: 'center',
                              alignItems: 'center'
                            }}>
                              <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>{this.state.Noti.length}</Text>
                            </View>


                          )}

                      </View>


                    </>
                  );
                },
              })}
              tabBarOptions={{
                activeTintColor: "#3A6CA9",
                inactiveTintColor: "gray",
              }}
            >
              <Tab.Screen name="Home" component={Home} />
              <Tab.Screen name="News" component={NewNavigator} />
              <Tab.Screen name="Calendar" component={TimeTable} />
              <Tab.Screen name="Notifications" component={NotiNavigation} />
              <Tab.Screen name="Menu" component={AppNavigator} />
            </Tab.Navigator>
          </NavigationContainer>
        );
      default:
        return <Loading />;
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Navbar />
        </View>
        {this.renderContent()}
        {/* <StatusBar style="auto" /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // justifyContent: "center",
    marginTop: 30,
    height: "100%",
    width: "100%",
  },
});
