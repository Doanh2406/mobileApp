import React, {Component} from "react";
import {View,Image,Text, StyleSheet, ScrollView} from 'react-native';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { HomeRef,NotiRef } from "../../firebase";
import News from './News';
import Noti from '../pageNoti/Noti';

export default class Home extends Component {
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
       this.readNewsRef();
       this.readNotiRef();
    }

//    constructor(props){
//        super(props);
//        this.state = {
//            news: [
//             {
//                 id: 1,
//                 image:'https://scontent.fdad3-3.fna.fbcdn.net/v/t1.6435-9/158579574_5128381190537228_3595236494514164582_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=e3f864&_nc_ohc=PT2D8HLQkF8AX-5Z2Lh&_nc_ht=scontent.fdad3-3.fna&oh=e6fa3bc51d8b4c7f619a89430828c8f4&oe=60A6D0CB',
//                  title: ' Sinh viên Trường Đại học ngoại ngữ Đà Nẵng đạt giải nhất cuộc thi hùng biện tiếng Nhật-2021 ',
//                  date:'30/03/2021'
//             },
//             {
//                 id: 2,
//                 image:'https://scontent.fdad3-3.fna.fbcdn.net/v/t1.6435-9/158579574_5128381190537228_3595236494514164582_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=e3f864&_nc_ohc=PT2D8HLQkF8AX-5Z2Lh&_nc_ht=scontent.fdad3-3.fna&oh=e6fa3bc51d8b4c7f619a89430828c8f4&oe=60A6D0CB',
//                  title: ' Sinh viên Trường Đại học ngoại ngữ Đà Nẵng đạt giải nhất cuộc thi hùng biện tiếng Nhật-2021 ',
//                  date:'30/03/2021'
//             },
//             {
//                 id:3,
//                 image:'https://scontent.fdad3-3.fna.fbcdn.net/v/t1.6435-9/158579574_5128381190537228_3595236494514164582_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=e3f864&_nc_ohc=PT2D8HLQkF8AX-5Z2Lh&_nc_ht=scontent.fdad3-3.fna&oh=e6fa3bc51d8b4c7f619a89430828c8f4&oe=60A6D0CB',
//                  title: ' Sinh viên Trường Đại học ngoại ngữ Đà Nẵng đạt giải nhất cuộc thi hùng biện tiếng Nhật-2021 ',
//                  date:'30/03/2021'
//             }
//            ]
//        }
//    }
   render() {
       return (
           <ScrollView style={styles.container}>
               <TouchableOpacity>
               <View style= {styles.view0}>
                    <Text style = {styles.textContent}> Đại học Đà Nẵng xét tuyển đại học hệ chính quy năm 2021 </Text>
                </View>
                <View style = {styles.view1} >
                    <Image source={{uri:'https://scontent.fdad3-3.fna.fbcdn.net/v/t1.6435-9/158579574_5128381190537228_3595236494514164582_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=e3f864&_nc_ohc=PT2D8HLQkF8AX-5Z2Lh&_nc_ht=scontent.fdad3-3.fna&oh=e6fa3bc51d8b4c7f619a89430828c8f4&oe=60A6D0CB'}} style = {{ height :200, width:390}}></Image>
                    </View>
                    <View>
                    <Text numberOfLines={4}>
                    THÔNG BÁO TUYỂN SINH VÀO ĐẠI HỌC HỆ CHÍNH QUY THEO PHƯƠNG THỨC XÉT HỌC BẠ THPT NĂM 2021 
                    </Text>
                    <Text numberOfLines={3}>
                    Đại học Đà Nẵng thông báo tuyển sinh đào tạo trình 
                    độ đại học hệ chính quy vào các trường đại học thành viên năm 2021, theo phương thức xét học bạ THPT như sau:
                    </Text>
                    <Text>
                                             🔸 … Xem thêm
                    </Text>
                    <View style =  {styles.lineStyle} />
                </View>
                </TouchableOpacity>
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
                        {this.state.News.slice(0,4).map(item => (
                            <News key={ item.id} item ={item.data} />
                        ))}
                
                </View>
                <View style =  {styles.lineStyle} />
                <View>
                    <View style = {styles.newContent}>
                        <Icon
                        style={styles.iconNews}
                        name='notifications'
                        color='#3A6CA9'
                        type='ionicon'
                        />
                        <Text style={styles.textEvent}>Thông Báo</Text>
                    </View>
                    {this.state.Noti.slice(0,4).map(item => (
                        <Noti key={ item.id} item ={item.data} />
                    ))}
                </View>
            </ScrollView>
       )
   }
}
const styles = StyleSheet.create({
    container:{
     flex:1,
     marginLeft: 10,
     
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
