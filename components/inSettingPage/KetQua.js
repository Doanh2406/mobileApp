import React, { Component, useEffect, useState } from 'react'
import { Picker, Text, View } from 'react-native';
import { DataTable, Provider } from 'react-native-paper';
import { DataAtd, DataKQ } from './DataAtd'



export function KetQua() {

  const [selectedValue, setSelectedValue] = useState("Học Kỳ 2/ 2021-2022");

  const [data,setData] = useState(DataKQ.id1)
  
  const handleOnValueChange = (itemValue, itemIndex) =>{ 
    setSelectedValue(itemValue)
    if(itemIndex==0){
      setData(DataKQ.id1)
    }
    else{
      setData(DataKQ.id2)
    }
  }
  

  return (
    <>
      <Provider>
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
              {/* <DataTable.Title numeric>Tb</DataTable.Title> */}
            </DataTable.Header>
            {

              data.map(item => (<>
                <DataTable.Row>
                  <DataTable.Cell  >{item.name}</DataTable.Cell>
                  <DataTable.Cell numeric>{item.dd}</DataTable.Cell>
                  <DataTable.Cell numeric>{item.gk}</DataTable.Cell>
                  <DataTable.Cell numeric>{item.cc}</DataTable.Cell>
                  {/* <DataTable.Cell numeric>{(item.dd+item.gk*2+item.cc*5)/8}</DataTable.Cell> */}
                </DataTable.Row>

              </>))

            }
            {/* <DataTable.Row>
                <DataTable.Cell numeric>Chuyên đề</DataTable.Cell>  
                <DataTable.Cell numeric>2</DataTable.Cell>
                <DataTable.Cell numeric>2</DataTable.Cell>
              </DataTable.Row> */}
          </DataTable>
         
          

        </View>

      </Provider>
    </>
  )

}

export default KetQua;