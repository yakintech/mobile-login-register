import { View, Text, Button, Image } from 'react-native'
import React, { useState } from 'react';
import { launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';

const ImagePickerSample = () => {

    const [base64Data, setbase64Data] = useState<string>('');

    const openGallery = () => {

        launchImageLibrary({
            mediaType: 'photo',
            includeBase64: true
        }, (res) => {

            let base = res.assets != undefined ? res.assets[0] : null;

            let imageData = base?.base64;
            setbase64Data(imageData == undefined ? '' : imageData);
           
            

        })
    }

    const sendPhoto = () => {
        axios.post('',)
        .then(res => {

        })
    }
    return (<>
     <View>
     <Button title='Send Photo' onPress={sendPhoto}></Button>
            <Button onPress={openGallery} title='Open Gallery'></Button>
            <Image style={{width:100, height:100}} source={{ uri: `data:image/jpeg;base64,${base64Data}` }} />
        </View>
       
    </>
       
    )
}

export default ImagePickerSample