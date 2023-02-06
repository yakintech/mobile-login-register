import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ConfirmCodeScreen = ({ navigation }: any) => {

  const [confirmCode, setconfirmCode] = useState('');

  const confirm = () => {

    AsyncStorage.getItem('webUserId')
      .then(res => {
        let postData = {
          webUserId: res,
          confirmCode: confirmCode
        }

        axios.post('https://seal-app-mobi6.ondigitalocean.app/token', postData)
          .then(res => {

            AsyncStorage.setItem('token', res.data.token)
              .then(res => {
                navigation.navigate('Museum')
              })
          })
          .catch(err => {
            console.log('Confirm Code Error');

          })

      })

  }

  return (<>

    <View>
      <Text>Confirm Code</Text>
      <TextInput style={styles.input} onChangeText={setconfirmCode} value={confirmCode} />
      <Button title='Confirm' onPress={confirm}></Button>
    </View>

  </>)
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});


export default ConfirmCodeScreen