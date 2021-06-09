import React, { Component } from "react";
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';
import {KetQuaRef,KetQua2Ref,KetQua3Ref,KetQua4Ref} from "../../firebase";
import KetQua from "./KetQua"

export default class IndexHocPhi extends Component {
  state = {
    News1: [],
    News2: [],
    News3: [],
    News4: [],
  };
  readNewsRef = () => {
    let news = [];
    KetQuaRef.onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        news.push({ id: doc.id, data: doc.data()});
      });
      this.setState({ News1: news });
    });
  };
  
  readNews2Ref = () => {
    let news = [];
    KetQua2Ref.onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        news.push({ id: doc.id, data: doc.data()});
      });
      this.setState({ News2: news });
    });
  };
  
  readNews3Ref = () => {
    let news = [];
    KetQua3Ref.onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        news.push({ id: doc.id, data: doc.data()});
      });
      this.setState({ News3: news });
    });
  };

  readNews4Ref = () => {
    let news = [];
    KetQua4Ref.onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        news.push({ id: doc.id, data: doc.data()});
      });
      this.setState({ News4: news });
    });
  };

  renderNew = () => {};
  componentDidMount() {
    this.readNewsRef();
    this.readNews2Ref();
    this.readNews3Ref();
    this.readNews4Ref();
   
  }
  
  render() {
    console.log(this.state.News2)
    return (
      <>
          <KetQua  items1={this.state.News1} items2={this.state.News2} items3={this.state.News3} items4={this.state.News4} />     
      </>
    )
  }
}

