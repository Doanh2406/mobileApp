import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native';
import LG from '../assets/dhdn.png';

const Navbar = () => {
    return (
        <View>
           <View style = {styles.header}>
                    <View style= {styles.imageLogo}>
                       <Image style = {{ height :100, width:150}} source={LG}></Image>
                    </View>
                        <Text style = {styles.slogan}> Tri Thức - Đạo đức - Sáng tạo</Text>
                </View>
                   <View style =  {styles.lineStyle} />
        </View>
    )
}

export default Navbar;
const styles = StyleSheet.create({
    header:{
        display:'flex',
        flexDirection: 'row',
    },
    imageLogo:{
        marginTop:32,
        marginLeft:10,
        flex:3

    },
    slogan:{
        flex: 3,
        color: "#999999",
        fontSize: 13,
        // textAlign:'right'
        paddingTop:115

    },
    lineStyle:{
        borderWidth: 0.4,
        borderColor:'blue',
        marginTop:10
   }
})
