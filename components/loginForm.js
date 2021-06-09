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
    marginTop:50
  },
 
  emailAndPassContainer: {
    flex: 1,
    flexDirection:'row',
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "black",
    fontSize: 26,
    flex: 1,
  },
});
