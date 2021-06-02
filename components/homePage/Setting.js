import * as React from 'react';
import { Text, Searchbar,Button,Card, Divider } from 'react-native-paper';
import { StyleSheet, View,Image } from 'react-native';
import Avar from '../../assets/avar.png'


const Setting = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

  return (
      <>
        <View style={styles.search}>
        <Text style={{fontSize:18,fontWeight:'bold', marginLeft:15,alignItems:'flex-start'}}>Menu</Text>
           <View style={{alignSelf:'flex-end'}}>
                <Searchbar placeholder="Search"
                                onChangeText={onChangeSearch}
                                value={searchQuery}
                                style={{width:200,height:30,borderRadius:6,marginStart:120}}/>
           </View>
     </View>



        <View style={styles.profile}>
            <Image source={Avar} style ={{ height :80, width:60,marginLeft:15}}></Image>
            <View style={styles.profileTitle} >
                <Text style={{fontSize:16,fontWeight:'bold',marginTop:10}}>Day la ten</Text>
                <Text style={{marginTop:15,}}>Xem li lich sinh vien</Text>
            </View>
            <View style={{marginTop:20,alignItems:'flex-end'}}>
                <Button icon="logout" mode="text" onPress={() => console.log('Pressed')}>
                    Dang Xuat
                </Button>
            </View>
        </View>
    
    <Divider style={{backgroundColor:'#0066ff',marginTop:20,width:'80%',alignSelf:'center'}}/>


    <View style={styles.menu}>
        <Card style={styles.card}>
            <Card.Actions>
             <Button icon="calendar" mode="text" onPress={() => console.log('Pressed')}>
                        TKB
                </Button>
            </Card.Actions>
        </Card>
        <Card style={styles.card}>
            <Card.Actions>
                <Button icon="account-details" mode="text" onPress={() => console.log('Pressed')}>
                           Dang ky Tc
                    </Button>
            </Card.Actions>
        </Card>
        <Card style={styles.card}>
            <Card.Actions>
                <Button icon="calendar-check" mode="text" onPress={() => console.log('Pressed')}>
                        Ket Qua
                </Button>
            </Card.Actions>
        </Card>
        <Card style={styles.card}>
            <Card.Actions>
                <Button icon="cash-register" mode="text" onPress={() => console.log('Pressed')}>
                        Hoc Phi
                </Button>
            </Card.Actions>
        </Card>
        <Card style={styles.card}>
            <Card.Actions>
                <Button icon="calendar-alert" mode="text" onPress={() => console.log('Pressed')}>
                        Lich thi
                </Button>
            </Card.Actions>
        </Card>
        <Card style={styles.card}>
            <Card.Actions>
                <Button icon="account-search" mode="text" onPress={() => console.log('Pressed')}>
                        Gioi thieu
                </Button>
            </Card.Actions>
        </Card>
    </View>
      </>
    
  );
};
const styles = StyleSheet.create({
    search:{
        flexDirection:'row'
    },
    profile:{
        marginTop:20,
        flexDirection:'row',
    },
    profileTitle:{
        marginLeft:10
    },
    menu:{
        marginTop:20,
        flexDirection:'row',
        flexWrap:'wrap',
        marginLeft:31
    },
    card:{
        marginTop:10,
        width:150,
        height:60,
        marginLeft:10
    }
   
})
export default Setting;