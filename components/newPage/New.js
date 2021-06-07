import React, { Component } from "react";
import { StyleSheet, Image, Text, View, ScrollView } from "react-native";
import { Icon } from "react-native-elements";

// import { useNavigation } from '@react-navigation/native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import image_1 from '../../assets/dhdn.png';

export function New({ route }) {
  const { item } = route.params;

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.titleContent}>
          <Text style={styles.textContentBody1} numberOfLines={3}>
            {item.title}
          </Text>
          <View style={styles.viewDate}>
            <Icon
              style={styles.iconNews}
              name="clock"
              color="#DCDCDB"
              type="entypo"
            />
            <Text style={styles.dateStyle}>{item.date}</Text>
          </View>
        </View>

        <Text style={styles.icontentStyle}>{item.icontent}</Text>
        <View>
          <Image
            source={{ uri: item.image }}
            style={{ height: 250, width: 400 }}
          ></Image>
        </View>
        <View style={styles.bodyMain}>
          <Text style={styles.mcontentStyle}>{item.mcontent}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default New;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  textContentBody1: {
    color: "#3A6CA9",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "justify",
  },
  bodyMain: {
    display: "flex",
    flexDirection: "row",
  },
  viewDate: {
    flex: 1,
    flexDirection: "row",
    marginRight: 10,
  },
  dateStyle: {
    marginLeft: 10,
  },
  icontentStyle: {
    color: "#080808",
    fontSize: 17,
    textAlign: "justify",
    fontWeight: "bold",
  },
  mcontentStyle: {
    color: "#080808",
    fontSize: 17,
    opacity: 0.7,
    textAlign: "justify",
  },
});
