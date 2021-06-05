import React, {Component} from "react";
import {View,Text, StyleSheet, ScrollView} from 'react-native';
import Slideshow from 'react-native-image-slider-show';

 export default class SlideShow extends Component {
                constructor(props) {
                  super(props);
              
                  this.state = {
                    position: 1,
                    interval: null,
                    dataSource: [
                      {
                        title: 'Đại học Đà Nẵng tuyển sinh năm 2021',
                        caption: '4 Phương án tuyển sinh của đại học đà nẵng',
                        url: 'https://firebasestorage.googleapis.com/v0/b/reactnative-7.appspot.com/o/slide1.jpg?alt=media&token=515925c4-81cd-4146-bf6a-a36b3410a0af',
                      }, {
                        title: 'Title 2',
                        caption: 'Thông báo tuyển sinh đào tạo trình độ thạc sĩ khóa 43',
                        url: 'https://firebasestorage.googleapis.com/v0/b/reactnative-7.appspot.com/o/slide2.jpg?alt=media&token=6c5df062-d465-4ee3-bc40-0a0471a9b348',
                      }, {
                        title: 'Title 3',
                        caption: 'Lễ vinh danh thủ khoa và nâng bước sinh viên trẻ năm 2020',
                        url: 'https://firebasestorage.googleapis.com/v0/b/reactnative-7.appspot.com/o/slide3.jpg?alt=media&token=361484ab-3383-4b45-9065-84205dfb1713',
                      },
                      {
                        title: 'CITA 2021',
                        caption: 'Hội thảo khoa học lần thứ 10 và Workshop chuyển đổi số 2021',
                        url: 'https://firebasestorage.googleapis.com/v0/b/reactnative-7.appspot.com/o/slide4.jpg?alt=media&token=a88397aa-54c2-43da-94e9-1ef283f55851',
                      },
                    ],
                  };
                }
              
                componentWillMount() {
                  this.setState({
                    interval: setInterval(() => {
                      this.setState({
                        position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
                      });
                    }, 2000)
                  });
                }
              
                componentWillUnmount() {
                  clearInterval(this.state.interval);
                }
              
                render() {
                  return (
<>
                  <Slideshow 
                      dataSource={this.state.dataSource}
                      height={200}
                      position={this.state.position}
                      onPositionChanged={position => this.setState({ position })} />
                       <View style =  {styles.lineStyle} />
                      </>
                  );
                }
              }
const styles = StyleSheet.create({
    container:{
     flex:1,
     
    }, 
    lineStyle:{
        borderWidth: 1,
        borderColor:'#397CCF',
        margin:5,
   },
   view0:{
       marginBottom:10,
      margin:10,

   }, 
    })
