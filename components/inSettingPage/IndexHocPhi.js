import React, { Component } from "react";
import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import { HocKyRef } from "../../firebase";
import HocPhi from "./HocPhi";

export default class Index extends Component {
  state = {
    HocKy: [],
  };
  readHocKyRef = () => {
    let news = [];
    HocKyRef.onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        news.push({ id: doc.id, data: doc.data() });
      });
      this.setState({ HocKy: news });
    });
  };

  componentDidMount() {
    this.readHocKyRef();
  }

  render() {
    return (
      <>
        <HocPhi items={this.state.HocKy} /> 
        {/* {this.state.HocKy.map()} */}
      </>
    );
  }
}
