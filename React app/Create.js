import { Text, View, StyleSheet, Image, Button, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import Constants from 'expo-constants';
import { ScrollView } from 'react-native-gesture-handler';
import React, { useState } from 'react';
import Axios from 'axios';

export default function Home() {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit =  () => {
    
     
       Axios.post('http://10.0.2.2:5000/signup', {
        fullName, username, email, password, confirmPassword 
      }).then((response) => {
        console.log("hgfgh")
        console.log(response.data);
      }); // Optional: handle the response from the server
     
  };
  return (
    <View>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <Image style={styles.sdf} source={require('../components/icon.png')} resizeMode={'contain'} />
            <Text style={styles.zxc}>Create AALEE Account</Text>
          </View>
          <View style={styles.cent}>
            <Text style={styles.cvb}>Full name</Text>
            <TextInput
              style={styles.textInput}
              placeholder="e.g. John Rogers"
              value={fullName}
              onChangeText={setFullName}
            />

            <Text style={styles.cvb}>Username</Text>
            <TextInput
              style={styles.textInput}
              placeholder="must be unique"
              value={username}
              onChangeText={setUsername}
            />

            <Text style={styles.cvb}>Email</Text>
            <TextInput
              style={styles.textInput}
              placeholder="e.g. user@gmail.com"
              value={email}
              onChangeText={setEmail}
            />

            <Text style={styles.cvb}>Password</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            <Text style={styles.cvb}>Retype Password</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Confirm password"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </View>
          <View style={styles.formInput}>
            <TouchableOpacity onPress={handleSubmit}>
              <Text style={styles.defaultButton}>Submit</Text>
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
      height:200, 
      
    },
    zxc:{
       textAlign: 'center',
       fontSize:27,
       color:'white'
    },
  
  container:{
        flex:1,
        backgroundColor:'rgba(0, 150, 255, 1)',
     
    },
    cvb:{
      textAlign: 'center',
      fontSize:27,
      paddingTop:20,
    },
    textInput:{
       paddingTop:10,
        fontSize:18,
        borderWidth:1,
        borderColor:"#a7a7a7",
        borderRadius:5,
        width:300, 
      
    },cent:{
      justifyContent: 'center',
    alignItems: 'center',
    },
    formInput:{
        marginTop:10,
        padding:10,
         alignItems: 'center',
    },
    defaultButton:{
        padding:15,
        backgroundColor:'#4287f5',
        borderRadius:10,
        width:300,
       justifyContent: 'center',
    alignItems: 'center',
     textAlign: 'center',
    }
});