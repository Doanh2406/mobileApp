import React from 'react'
import firebase from 'firebase';

import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'

const articles = () => {
    return (
        <View style={styles.container}>
           <View style={styles.articleContainer}>
                <Text style = {styles.heading}>
                    Welcome to the MyUDN
                </Text>
                <Text style = {styles.content}>
                    You are Logged!
                </Text>
               <TouchableOpacity style = {{padding:20,alignItems:'center'}} onPress = {() => firebase.auth().signOut()}>
                    <Text style = {{color:'blue'}}>
                        LOGOUT
                    </Text>
                </TouchableOpacity>
           </View>
        </View>
    )
}

export default articles

const styles = StyleSheet.create({
    container:{flex:1,
    justifyContent: 'center',
    alignItems:'center'

},
    articleContainer:{
        padding:10,
        borderBottomColor: 'rgba(255,255,255,.7)',
        borderBottomWidth: 5,
        alignItems:'center'

    },
    heading:{
        fontSize:22,
        color: 'black',
        padding:10,
        marginBottom:10,alignItems:'center'
    },
    content:{
        marginTop:10,
        fontSize: 19,
        alignItems:'center'
    }
})
