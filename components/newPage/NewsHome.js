import React, {Component} from "react";
import {View,Image,Text, StyleSheet, ScrollView} from 'react-native';
import { Icon } from 'react-native-elements';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { HomeRef,NotiRef } from "../../firebase";
import News from '../homePage/News';

export default class NewsHome extends Component {
    state = {
        News :[],
        Noti: [],
    };
    readNewsRef = () => {
        let news = [];
        HomeRef.onSnapshot((querySnapshot) =>{
            querySnapshot.forEach((doc) =>{
                news.push({id: doc.id , data : doc.data()});
            });
            this.setState({News : news});
        })
    }
   
    componentDidMount(){
       this.readNewsRef();
    }


   render() {
       return (
           <ScrollView style={styles.container}>
                <View>
                    <View style = {styles.newContent}>
                            <Icon
                            style={styles.iconNews}
                            name='newspaper'
                            color='#3A6CA9'
                            type='ionicon'
                            />
                            <Text style={styles.textEvent}>Tin Tức - Sự Kiện</Text>
                        </View>
                        {this.state.News.map(item => (
                            <News key={ item.id} item ={item.data} />
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
