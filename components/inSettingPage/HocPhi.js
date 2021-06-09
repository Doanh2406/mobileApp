<<<<<<< HEAD
import React, { Component } from "react";
import { Picker, Text, View } from "react-native";
import { DataTable, Provider } from "react-native-paper";

export default function HocPhi(props) {
  const { items } = props;
  const [selectedValue, setSelectedValue] = React.useState();
  console.log(items.name);

  return (
    <>
      <Provider>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontWeight: "bold", marginLeft: 5, marginTop: 5 }}>
            Học Phí
          </Text>

          <Picker
            mode="dropdown"
            selectedValue={selectedValue}
            style={{
              marginLeft: "auto",
              height: 30,
              width: 225,
              borderWidth: 0,
              backgroundColor: "transparent",
            }}
            itemStyle={{}}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            {items.name.map((item) => (
              <Picker.Item label={item} value={item} />
            ))}
          </Picker>
=======
import React, { Component ,useEffect} from 'react'
import { Picker, Text, View } from 'react-native';
import { DataTable,  Modal, Portal, Button, Provider } from 'react-native-paper';
import { set } from 'react-native-reanimated';
import {DataAtd} from './DataAtd'



export default function HocPhi (props) {
   const {items1,items2,items3, items4} = props
   const [selectedValue, setSelectedValue] = React.useState();
   const [items, setItems] = React.useState(items1)
    
    
    const handleOnValueChange =(itemValue, itemIndex) =>{
      setSelectedValue(itemValue);
      if(itemIndex==0){
        setItems(items1);
      }
      else if(itemIndex==1){
        setItems(items2)
      }
      else if(itemIndex==2){
        setItems(items3)
      }
      else if(itemIndex==3){
        setItems(items4)
      }
    }

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'white', padding: 20};
    const [visible, setVisible] = React.useState(true);
   
    return (
      <>
      
        <Provider>


        <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Text style={{ fontWeight: 'bold', marginLeft: 5, marginTop: 5, fontSize:12}}>Vui lòng chọn học kỳ</Text>
          <Picker
            mode="dropdown"
            selectedValue={selectedValue}
            style={{ marginLeft: 'auto', height: 30, width: 225, borderWidth: 0, backgroundColor: 'transparent' ,marginTop:20}}
            itemStyle={{}}
            onValueChange={handleOnValueChange}
          >
            {
              DataAtd.map(item => (<Picker.Item label={item} value={item} />))

            }

          </Picker>

        </Modal>
      </Portal>




          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontWeight: 'bold', marginLeft: 5, marginTop: 5 }}>
              Học Phí
            </Text>

            <Picker
              mode="dropdown"
              selectedValue={selectedValue}
              style={{ marginLeft: 'auto', height: 30, width: 225, borderWidth: 0, backgroundColor: 'transparent' }}
              itemStyle={{}}
              onValueChange={handleOnValueChange}
            >
              {
                DataAtd.map(item => (<Picker.Item label={item} value={item} />))
                

              }

            </Picker>
>>>>>>> 1c43cb5b6557e5e6a8e9d00408c90e2aea6b628e

          </View>
          <View style={{ marginTop: 30 }}>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title
                  sortDirection='descending'
                >
                  Môn học
          </DataTable.Title>
                <DataTable.Title numeric>Số tín chỉ</DataTable.Title>

                <DataTable.Title numeric>Số tiền</DataTable.Title>
              </DataTable.Header>
              {

                items.map(item => (<>
                  <DataTable.Row>
                    <DataTable.Cell >{item.id}</DataTable.Cell>
                    <DataTable.Cell numeric>{item.data.stc}</DataTable.Cell>
                    <DataTable.Cell numeric>{item.data.stc * 330000 + " VND"}</DataTable.Cell>
                  </DataTable.Row>

                </>))

<<<<<<< HEAD
          {/* }
              
            </DataTable> */}
          <View
            style={{
              marginTop: 10,
              marginLeft: "auto",
              marginRight: 5,
              flexDirection: "column",
            }}
          >
            <Text style={{ color: "#FF0000" }}>
              Tổng tiền: {DataHP.reduce((a, b) => a + b.stc * 330000, 0)} VND
            </Text>
            <Text style={{ color: "#FF0000" }}>Tình trạng: chưa nộp</Text>
=======
              }
              
            </DataTable>
            <View style={{ marginTop: 10, marginLeft: 'auto', marginRight: 5, flexDirection: 'column' }}>
              <Text style={{ color: "#FF0000" }}>
                Tổng tiền: {items.reduce((a, b) => a + b.data.stc * 330000, 0)} VND
            </Text>
              <Text style={{ color: "#FF0000" }}>
                Tình trạng: Đã nộp
            </Text>
            </View>


>>>>>>> 1c43cb5b6557e5e6a8e9d00408c90e2aea6b628e
          </View>
        </View>
      </Provider>
    </>
  );
}
