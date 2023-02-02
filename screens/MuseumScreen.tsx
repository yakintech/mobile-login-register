import { View, Text, Button } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'

const MuseumScreen = ({navigation} : any) => {

    useEffect(() => {

        AsyncStorage.getItem('token')
            .then(token => {
                axios.get('https://seal-app-mobi6.ondigitalocean.app/api/museums', {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                })
                    .then(res => {
                        console.log('Museum', res.data);

                    })
            })

    }, [])

    const logout = () => {
        AsyncStorage.removeItem('token')
        .then(() => {
            navigation.navigate('Login')
        })
    }

    return (
        <View>
            <Button title='Logout' onPress={() => logout()}></Button>
            <Text>MuseumScreen</Text>
        </View>
    )
}

export default MuseumScreen