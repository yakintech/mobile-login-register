import { View, Text, Button } from 'react-native'
import React, { useEffect } from 'react'
import Contacts from 'react-native-contacts';



const ContactSample = () => {

    useEffect(() => {

        Contacts.getAll()
            .then(res => {
                console.log('Response ', res[6]);

            })


           
        

    }, [])

    const add = () => {
        Contacts.openContactForm({})
    }
    return (
        <View>
            <Text>ContactSample</Text>
            <Button title='Add' onPress={add}></Button>
        </View>
    )
}

export default ContactSample