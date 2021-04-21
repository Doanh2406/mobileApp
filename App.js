import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import firebase from 'firebase';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import LoginForm from './components/loginForm';
import Articles from './components/articles';
import BG from './assets/bg1.png';
import Loading from './components/loading';

export default class App extends Component {
  state = { loggedIn : false}
  componentDidMount(){
    var firebaseConfig = {
      apiKey: "AIzaSyBoHu4GKvbIG6gZpa2OHsxVmHikgpsNBGM",
      authDomain: "reactnative-7.firebaseapp.com",
      projectId: "reactnative-7",
      storageBucket: "reactnative-7.appspot.com",
      messagingSenderId: "58821640843",
      appId: "1:58821640843:web:e05dc6471d8aa573694a8e",
      measurementId: "G-C4CGCXS18M"
    };
  firebase.initializeApp(firebaseConfig);
     firebase.app();
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.setState({loggedIn: false})
      }else{
        this.setState({loggedIn: true})
      }
    })
  }
  renderContent = () =>{
    switch(this.state.loggedIn){
      case  true:
        return <LoginForm/>
        // <ImageBackground style = {styles.container} source={BG}>
          
        // </ImageBackground>
      case false:
        return <Articles/>
        default:
          return <Loading/>
    }
  }
  render(){
      return (
        <View style={styles.container}>
          {this.renderContent()}
          <StatusBar style="auto" />
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    height : '100%',
    width : '100%'
  },
});
