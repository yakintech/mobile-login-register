import { SafeAreaView, Button, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation}: any) => {
    const [email, setemail] = useState<string>('');
    const [password, setpassword] = useState<string>('');


    const login = () => {

        let user = {
            email: email,
            password: password
        }

        axios.post('https://seal-app-mobi6.ondigitalocean.app/token', user)
            .then(res => {
                AsyncStorage.setItem('token', res.data.token)
                .then(res => {
                    navigation.navigate('Museum')
                })
            })
            .catch(err => {
                console.log('err', err);

            })

    }

    return (
        <SafeAreaView>
            <TextInput
                autoCapitalize='none'
                placeholder='EMail'
                style={styles.input}
                onChangeText={setemail}
                value={email}
            />
            <TextInput
                secureTextEntry={true}
                placeholder='Password'
                style={styles.input}
                onChangeText={setpassword}
                value={password}
            />
            <Button title='Login' onPress={login}></Button>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default LoginScreen