import React, { Component, useEffect, useState } from 'react'
import { Picker, Text, View } from 'react-native';
import { DataTable, Modal, Portal, Button, Provider } from 'react-native-paper';
import {DataAtd} from './DataAtd'



export function KetQua(props) {
  
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
  const [visible, setVisible] = React.useState(true);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
    <>
      <Provider>

      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Text style={{ fontWeight: 'bold', marginLeft: 5, marginTop: 5, fontSize:12}}>Vui lòng chọn học kỳ</Text>
          <Picker
            mode="dropdown"
            selectedValue={selectedValue}
            style={{ marginLeft: 'auto', height: 30, width: 225, borderWidth: 0, backgroundColor: 'transparent',marginTop:20 }}
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
            Kết Quả
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

        </View>
        <View style={{ marginTop: 30 }}>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title style={{}}
                sortDirection='descending'
              >
                Sort
          </DataTable.Title>
              <DataTable.Title numeric>C.Cần</DataTable.Title>
              
              <DataTable.Title numeric>G.Kỳ</DataTable.Title>
              <DataTable.Title numeric>C.Kỳ</DataTable.Title>
              <DataTable.Title numeric>Tb</DataTable.Title>
            </DataTable.Header>
            {

              items.map(item => (<>
                <DataTable.Row>
                  <DataTable.Cell  >{item.id}</DataTable.Cell>
                  <DataTable.Cell numeric>{item.data.dd}</DataTable.Cell>
                  <DataTable.Cell numeric>{item.data.gk}</DataTable.Cell>
                  <DataTable.Cell numeric>{item.data.cc}</DataTable.Cell>
                  <DataTable.Cell numeric>{(item.data.dd+item.data.gk*2+item.data.cc*5)/8}</DataTable.Cell>
                </DataTable.Row>

              </>))

            }
            
          </DataTable>
         
          

        </View>

      </Provider>
    </>
  )

}

export default KetQua;