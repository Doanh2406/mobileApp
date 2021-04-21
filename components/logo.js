import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import LG from '../assets/icon.png';

const logo = () => {
    return (
        <View style = {styles.container}>
            <Image source={LG} style = {{ height :100, width:150}}></Image>
            {/* <Text style={{color:"red",fontSize:"28px"}}>MyUDN</Text> */}
        </View>
    )
}

export default logo

const styles = StyleSheet.create({
    container:{
       
    },
})
