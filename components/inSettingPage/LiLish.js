import React, { Component } from 'react'
import { StyleSheet, Image, Text, View, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Avar from '../../assets/avar.png'



export function LiLish(props) {
  // const [News, setNews] = useState([title: ])
  const { item } = props;
  return (
    <>
      <View style={{marginTop:10, marginLeft:10}}>
      <Image
          source={Avar}
          style={{ height: 80, width: 60, marginLeft: 15 }}
        ></Image>
        <Text style={{marginTop:20}}>Họ và tên: Nguyễn Bảo Minh Doanh</Text>
        <Text>Lớp: 17it1</Text>
        <Text>Mã Sinh Viên: 17it000</Text>
        <Text>Địa chỉ: Quảng Trị</Text>
        <Text>Khóa học: 2017 - 2022</Text>
        <Text>Khoa: Khoa học máy tính</Text>
        <Text>...</Text>
      </View>
    </>
  )

}

export default LiLish;