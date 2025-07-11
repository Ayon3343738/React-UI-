import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, Image, TextInput, Pressable, TouchableOpacity } from 'react-native';
import { Button } from '@rneui/themed';
import Axios from 'axios';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin =() => {
     Axios.post('http://10.0.2.2:5000/login', {
        username,
        password,
      }).then((response) => {  
        console.log(response.data);
      }); 
    };
  


  return (
    <View style={styles.first}>
      <SafeAreaView>
        <ScrollView>
          <Image style={styles.sdf} source={require('../components/icon.png')} resizeMode={'contain'} />

          <View style={styles.cent}>
            <TextInput
              style={styles.textInput1}
              placeholder="username"
              value={username}
              onChangeText={setUsername}
            />
            <TextInput
              style={styles.textInput}
              placeholder="password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <View>
            <Button
              style={styles.containerStyle}
              title="Forget password?"
              type="password"
              titleStyle={{ color: 'white' }}
            />
          </View>

          <View style={styles.formInput}>
            <TouchableOpacity onPress={handleLogin}>
              <Text style={styles.defaultButton} color="rgba(0, 215, 255, 1)" >Login</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.formInput}>
            <TouchableOpacity>
              <Button title="Create account" color="rgba(255, 124, 0, 1)" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({

    sdf:{
      width:'100%',
      height:300, 
      
    },
     cent:{
      justifyContent: 'center',
    alignItems: 'center',
    
    
    },
    textInput1:{
       paddingTop:10,
        fontSize:18,
        borderWidth:1,
        borderColor:"#a7a7a7",
        borderRadius:5,
        width:300,
       backgroundColor:'white',
      marginBottom:30
    },textInput:{
       paddingTop:10,
        fontSize:18,
        borderWidth:1,
        borderColor:"#a7a7a7",
        borderRadius:5,
        width:300, 
        backgroundColor:'white',
    },
    first:{
      flex:1,
      backgroundColor:'rgba(0, 150, 255, 1)'
    },formInput:{
       paddingBottom:10,
       paddingTop:2,
       paddingRight:50,
       paddingLeft:50,
      borderRadius: 30,
 
      
    },containerStyle:{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              },
   
  
              defaultButton:{
                padding:15,
                backgroundColor:'red',
                borderRadius:10,
                width:300,
               justifyContent: 'center',
            alignItems: 'center',
             textAlign: 'center',
            }
 
    });