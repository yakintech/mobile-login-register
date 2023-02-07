import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

interface Message{
    message: String;
    date: String
}

const Chat = () => {

    const [message, setmessage] = useState('');
    const [messages, setmessages] = useState<Message[]>([]);

    const socket = io('https://seal-app-mobi6.ondigitalocean.app');


    const send = () => {


        const d = new Date();
        let dateString = d.getHours() + ":" + d.getMinutes();
        let messageData = {
            message: message,
            date: dateString
        }

        socket.emit('chatMessage', messageData);
    }

    useEffect(() => {

        socket.on('chatMessage2', (data) => {
            setmessages([...messages, data])
        })


        // socket.on('upload2', (data) => {
        //     console.log('data ', data);  
        // })

        socket.on('upload3', (data) => {
            console.log('data ', data);
            
        })

    }, [messages])

    return (<>
        <View>
            <Text>Message</Text>
            <TextInput style={styles.input} onChangeText={setmessage} />
            <Button onPress={send} title='Send Message'></Button>
        </View>
        <View>
            {
                messages && messages.map((item,key) => <Text key={key}>{item.message} {item.date}</Text>)
            }
        </View>
    </>

    )
}

export default Chat

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});


