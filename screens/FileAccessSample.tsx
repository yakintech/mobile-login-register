import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import RNFS from 'react-native-fs';



const FileAccessSample = () => {

    const [files, setfiles] = useState<RNFS.ReadDirItem[]>([]);

    const getFileContent = async (path: string) => {
        const reader = await RNFS.readDir(path);
        console.log('reader ', reader);
        
        setfiles(reader);
    };

    useEffect(() => {

 
       
        RNFS.readDir(RNFS.DownloadDirectoryPath)
        .then(res => {
            console.log('RES', res);
            
            setfiles(res)
        })

    }, [])


    return (
        <View>
            {
                files && files.map(item => <Text>{item.name}</Text>)
            }
        </View>
    )
}

export default FileAccessSample