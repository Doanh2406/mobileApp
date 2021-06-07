import React, { Component } from 'react'
import { Picker, Text, View } from 'react-native';
import { DataTable, Provider } from 'react-native-paper';
import { DataAtd, DataHP } from './DataAtd'



export function HocPhi() {

  const [selectedValue, setSelectedValue] = React.useState();



  return (
    <>
      <Provider>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontWeight: 'bold', marginLeft: 5, marginTop: 5 }}>
            Học Phí
            </Text>

          <Picker
            mode="dropdown"
            selectedValue={selectedValue}
            style={{ marginLeft: 'auto', height: 30, width: 225, borderWidth: 0, backgroundColor: 'transparent' }}
            itemStyle={{}}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            {
              DataAtd.map(item => (<Picker.Item label={item} value={item} />))

            }

          </Picker>

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

              DataHP.map(item => (<>
                <DataTable.Row>
                  <DataTable.Cell numeric>{item.name}</DataTable.Cell>
                  <DataTable.Cell numeric>{item.stc}</DataTable.Cell>
                  <DataTable.Cell numeric>{item.stc*330000+" VND"}</DataTable.Cell>
                </DataTable.Row>

              </>))

            }
            {/* <DataTable.Row>
                <DataTable.Cell numeric>Chuyên đề</DataTable.Cell>  
                <DataTable.Cell numeric>2</DataTable.Cell>
                <DataTable.Cell numeric>2</DataTable.Cell>
              </DataTable.Row> */}
          </DataTable>
          <View style={{marginTop:10, marginLeft:'auto', marginRight:5, flexDirection:'column'}}>
            <Text style={{color:"#FF0000"}}>
              Tổng tiền: {DataHP.reduce((a, b) => a + b.stc*330000, 0)} VND
            </Text>
            <Text style={{color:"#FF0000"}}>
              Tình trạng: chưa nộp
            </Text>
          </View>
          

        </View>

      </Provider>
    </>
  )

}

export default HocPhi;