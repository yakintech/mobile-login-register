import { View, Text, Vibration, Button } from 'react-native'
import React from 'react'



const VibrationSample = () => {

    const vibrate = () => {
        Vibration.vibrate(10 * 1000)
    }
  return (<>
    <Button title='Vibrate' onPress={vibrate}></Button>
  </>
  )
}

export default VibrationSample