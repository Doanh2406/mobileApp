import React, { Component } from 'react'
import { StyleSheet, Image,Text, View, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';




export function GioiThieu(props){
    // const [News, setNews] = useState([title: ])
    const {item} = props;
        return (
            <>
              <Image source={require('../../assets/Boss.jpg')}/>
             <Text>cc</Text>
           </>
        )
    
}

export default GioiThieu;