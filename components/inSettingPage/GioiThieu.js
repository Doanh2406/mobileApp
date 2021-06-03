import React, { Component } from 'react'
import { StyleSheet, Image,Text, View, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';




export function GioiThieu(props){
    // const [News, setNews] = useState([title: ])
    const {item} = props;
        return (
            <>
              <View style={{flexDirection:'row', marginTop: 20}}>
                <View style={{flexDirection:'column'}}>
                  <Image
                  style={{width: 150, height: 200,marginLeft:5}}
                  source={{
                    uri: 'http://www.udn.vn/app/webroot/upload/images/File%202.jpg',
                  }}
                  
                  />
                  <Text style={{color:'red',fontWeight:'bold',fontSize:12}}>
                    PGS.TS. NGUYỄN NGỌC VŨ
                  </Text>
                  <Text style={{color:'red',fontWeight:'bold',fontSize:12,alignSelf:'center'}}>
                      Giám đốc ĐHĐN
                  </Text>
                </View>
              <Text style={{marginLeft:10,marginRight:5}}>
                 - Đại học Đà Nẵng (ĐHĐN) được thành lập theo Nghị định số 32/CP ngày 04/4/1994 của Chính phủ. Đến nay ĐHĐN đã trải qua hơn 25 năm xây dựng và phát triển kế thừa truyền thống gần 45 năm đào tạo, nghiên cứu khoa học của các trường thành viên (1975-2020).

                 
              
              </Text>
              </View>
              <View>
                <Text style={{marginTop:5, marginLeft:5, marginRight:5}}>- Nằm ở trung tâm thành phố Đà Nẵng, thành phố năng động, phát triển và là hạt nhân, động lực phát triển của khu vực miền Trung-Tây Nguyên, giữa các di sản văn hoá thế giới là Đô thị cổ Hội An, Khu đền tháp Mỹ Sơn (Quảng Nam), Cố đô Huế (Thừa Thiên Huế) và Danh thắng Phong Nha-Kẻ Bàng (Quảng Bình), ĐHĐN nằm ở vị trí địa chiến lược trên hành lang kinh tế Đông - Tây hướng ra cửa ngõ biển Đông có nhiều tiềm năng và lợi thế phát triển của đất nước.

              </Text>
                <Text style={{marginTop:5, marginLeft:5, marginRight:5}}>
                - ĐHĐN là đại học vùng trọng điểm quốc gia, đa cấp, đa lĩnh vực, đa ngành gồm: 06 trường ĐH thành viên (Trường ĐH Bách khoa, Trường ĐH Kinh tế, Trường ĐH Sư phạm, Trường ĐH Ngoại ngữ, Trường ĐH Sư phạm Kỹ thuật và Trường ĐH Công nghệ Thông tin và Truyền thông Việt - Hàn) và 07 đơn vị đào tạo trực thuộc (Phân hiệu ĐHĐN tại Kon Tum, Viện Nghiên cứu và Đào tạo Việt - Anh, Viện Công nghệ quốc tế Đà Nẵng DNIIT, Khoa Y Dược, Khoa Công nghệ Thông tin và Truyền thông, Khoa Đào tạo Quốc tế và Khoa Giáo dục Thể chất).
                </Text>
              </View>
           </>
        )
    
}

export default GioiThieu;