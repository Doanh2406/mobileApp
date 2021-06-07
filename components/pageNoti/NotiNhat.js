import React, { Component } from "react";
import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { HomeRef, NotiRef } from "../../firebase";
import News from "../homePage/News";

export default class NewsNhat extends Component {
  state = {
    Noti: [],
  };
  readNewsRef = () => {
    let notis = [];
    NotiRef.onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        notis.push({ id: doc.id, data: doc.data() });
      });
      this.setState({ Noti: notis });
      // console.log(news)
    });
  };

  componentDidMount() {
    this.readNewsRef();
  }

  render() {
    return (
      <>
        {this.state.Noti.map((item) => (
          <View key={item.id}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() =>
                this.props.navigation.navigate("Noti", { item: item.data })
              }
            >
              <View style={styles.container}>
                <View style={styles.bodyMain}>
                  <View style={styles.contentBody}>
                    <Image
                      source={{
                        uri: "https://firebasestorage.googleapis.com/v0/b/reactnative-7.appspot.com/o/thongbao.jpg?alt=media&token=21c1f6a1-7328-4877-b218-6a75e1fa11fd",
                      }}
                      style={{ height: 80, width: 120 }}
                    ></Image>
                  </View>
                  <View style={styles.textContentBody}>
                    <Text style={styles.textContentBody1} numberOfLines={3}>
                      {item.data.title}
                    </Text>
                    <Text>{item.data.date}</Text>
                    <View style={styles.lineStyle} />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    // flex : 1,
    // marginTop:10,
    // marginLeft: 20,
    // marginRight: 20,
    // marginBottom: 10,
  },

  lineStyle: {
    borderWidth: 0.5,
    borderColor: "#999999",
    margin: 10,
  },
  bodyMain: {
    display: "flex",
    flexDirection: "row",
  },
  contentBody: {
    flex: 2,
  },
  textContentBody: {
    flex: 4,
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: "#999999",
    margin: 10,
  },
});
