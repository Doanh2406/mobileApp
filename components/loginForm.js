import React from "react";
import { StyleSheet, Text, View } from "react-native";
import EmailAndPassword from "./EmailAndPassword";
// import Logo from './logo';

const loginForm = () => {
  return (
    <View styler={styles.container}>
      <View>
        <Text style={styles.text}>Đăng Nhập</Text>
      </View>

      <View style={styles.emailAndPassContainer}>
        <EmailAndPassword />
      </View>
    </View>
  );
};

export default loginForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  // logoContainer: {
  //     flex :1,
  //     alignItems: 'center',
  //     justifyContent : 'center',
  //     paddingBottom: 100
  // },
  emailAndPassContainer: {
    flex: 1,
  },
  text: {
    color: "black",
    fontSize: 26,
    flex: 1,
  },
});
