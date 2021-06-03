import React, { Component } from 'react'
import { StyleSheet, Image,Text, View, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import image_1 from '../../assets/dhdn.png';



export default class News extends Component {
    state = {
        News :[],
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

    render (){

        return (
            <TouchableOpacity activeOpacity={0.8}>
                 <View style = {styles.container}>
                        <View style={styles.bodyMain}>
                            <View style={styles.contentBody}>
                                <Image source={{uri:item.image}} 
                                style = {{ height :80, width:120}}></Image>
                            </View>
                        <View  style={styles.textContentBody}>
                            <Text style={styles.textContentBody1} numberOfLines={3}>
                            {item.title}
                            </Text>
                            <Text>
                                {item.date}
                            </Text>
                            <View style =  {styles.lineStyle} />
                        </View>
                        
                    </View>
            </View>
            </TouchableOpacity>
        )
    }
    
}

export default News

const styles = StyleSheet.create({
    container:{
        // flex : 1,
        // marginTop:10,
        // marginLeft: 20,
        // marginRight: 20,
        // marginBottom: 10,
    }, 
    
    lineStyle:{
        borderWidth: 0.5,
        borderColor:'#999999',
        margin:10,
   },
   bodyMain:{
    display:'flex',
    flexDirection: 'row',
   },
   contentBody:{
    flex:2
 },
 textContentBody:{
        flex:4
    },
    lineStyle:{
        borderWidth: 0.5,
        borderColor:'#999999',
        margin:10,
   }

})
