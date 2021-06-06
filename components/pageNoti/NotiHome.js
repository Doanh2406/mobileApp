import React, {Component} from "react";
import {View,Image,Text, StyleSheet, ScrollView} from 'react-native';
import { Icon } from 'react-native-elements';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { NotiRef } from "../../firebase";
import Noti from '../pageNoti/Noti';

export default class NotiHome extends Component {
    state = {
        Noti: [],
    };
    readNotiRef =() =>{
        let notis = [];
        NotiRef.onSnapshot((querySnapshot) =>{
            querySnapshot.forEach((doc) =>{
                notis.push({id: doc.id , data : doc.data()});
            });
            this.setState({Noti : notis});
        })
    }
   
   
    componentDidMount(){
       this.readNotiRef();
    }


   render() {
       return (
           <ScrollView style={styles.container}>
                <View>
                    <View style = {styles.newContent}>
                            <Icon
                            style={styles.iconNews}
                            name='notifications'
                            color='#3A6CA9'
                            type='ionicon'
                            />
                            <Text style={styles.textEvent}>Thông Báo Chung</Text>
                        </View>
                        {this.state.Noti.map(item => (
                            <Noti key={ item.id} item ={item.data} />
                        ))}
                
                </View>
                {/* <View style =  {styles.lineStyle} /> */}
                
            </ScrollView>
       )
   }
}
const styles = StyleSheet.create({
    container:{
     flex:1,
     margin: 10,
     
    },  
     view0:{
        marginTop: 10,
        marginBottom:10
    },
    view1:{
        marginTop:10,
        marginBottom: 10
    },
    textContent:{
        color: "#000000",
        fontSize: 20,
        fontWeight: "bold"
    },
    textEvent:{
        marginLeft:10,
        marginBottom:20,
        color:'#3A6CA9',
        fontSize: 20,
        fontWeight: 'bold'
    },
    image:{
        width: 200, height: 200,
        marginBottom:20,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10
    },
    newContent:{
        flex:1,
        flexDirection: 'row'

    },
    iconNews:{
    },
    lineStyle:{
        borderWidth: 1,
        borderColor:'#397CCF',
        margin:10,
   }
    
    
})
