import React, { Component } from 'react'
import firebase from 'firebase';

import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native'

class EmailAndPassword extends Component {
    state = {
        email: '',
        password :'',
        error: '',
        loading : false
    }

    onBottomPress = () =>{
        firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
        .then(this.onLoginSuccess)
        .catch(error => {
            this.setState({
                error : error.message
            })
        })
    }
    onLoginSuccess = () =>{
        this.setState({
            error: '',
            loading: false,

        })
    }

    render(){
        return (
            <View style={styles.container}>
                <TextInput
                 placeholder="email" 
                 style={styles.input} 
                 value={this.state.email}
                 onChangeText = {email => this.setState({email})}
                 />
                <TextInput 
                placeholder="password" 
                style={styles.input} 
                value={this.state.password}
                onChangeText = {password => this.setState({password})}/>
                <TouchableOpacity style ={styles.buttonContainer} onPress={this.onBottomPress}>
                    <Text style ={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity >
                    <Text style ={styles.errorText}>
                    {this.state.error}
                    </Text>
                    <Text style ={styles.note}>
                    *Tên Đăng nhập là mã sinh viên của bạn 
                    
                    </Text>
                    
            </View>
        )
    }
}

export default EmailAndPassword

const styles = StyleSheet.create({
    container:{
        padding:20
    },
    input:{
        height : 40,
        backgroundColor: '#fff',
        paddingLeft:10,
        marginBottom:15,
        borderRadius:15,
        fontSize: 15,
       borderColor: "black",
       borderWidth: 2,

    },
    errorText:{
        fontSize: 35,
        color: 'white',
        alignSelf: 'center',
        marginTop: 20
    },
    buttonText:{
        textAlign: 'center',
        color : '#fff',
        fontWeight: 'bold',
        fontSize: 20

    },
    buttonContainer:{
        backgroundColor:'#CCCCFF',
        padding: 15,
        borderRadius:15,
        height: 50,
        width: 120,marginLeft: 250
    },
    note:{
        fontStyle:"italic"
    }
})
