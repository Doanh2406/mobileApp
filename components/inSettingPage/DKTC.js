import React, { Component } from 'react'
import { Picker, Text, View } from 'react-native';
import { Button, Dialog, Portal, Provider } from 'react-native-paper';


const dataAotd = ["Học Kỳ 1/ 2017-2018", "Học Kỳ 2/ 2017-2018", "Học Kỳ 1/ 2018-2019", "Học Kỳ 2/ 2018-2019", "Học Kỳ 1/ 2019-2020", "Học Kỳ 2/ 2019-2020", "Học Kỳ 1/ 2021-2022", "Học Kỳ 2/ 2021-2022"]

export function DKTC() {

  const [selectedValue, setSelectedValue] = React.useState();

  const [visible, setVisible] = React.useState(true);
  const hideDialog = () => setVisible(false);


  return (
    <>
      <Provider>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontWeight: 'bold', marginLeft: 5, marginTop: 5 }}>
            Đăng ký tín Chỉ
            </Text>

          <Picker
            mode = "dropdown"
            selectedValue={selectedValue}
            style={{ marginLeft: 'auto', height: 30, width: 225 ,borderWidth:0, backgroundColor: 'transparent'}}
            itemStyle={{}}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            {
              dataAotd.map(item => (<Picker.Item  label={item} value={item} />))

            }

          </Picker>

        </View>
        <View style={{marginTop:200, alignItems: 'center'}}>
          <Text style={{
            color: "#E10000",
            fontSize: 18, 
            justifyContent: 'center',
           
          }}>Bạn đã đăng ký hết đủ tính chỉ cho phép!!!!</Text>
          
        </View>

      </Provider>
    </>
  )

}

export default DKTC;