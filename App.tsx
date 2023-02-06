import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import ProductReducer from './store/productSlice'
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MuseumScreen from './screens/MuseumScreen'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import ConfirmCodeScreen from './screens/ConfirmCodeScreen'
import Chat from './screens/Chat'


const Stack = createNativeStackNavigator();

const App = () => {

  const [loginStatus, setloginStatus] = useState(false);
  const [loading, setloading] = useState(true);

  const store = configureStore({
    reducer: {
      productReducer: ProductReducer
    }
  })

  // AsyncStorage.getItem('token')
  //   .then(res => {
  //     console.log('res', res);

  //     if (res)
  //       axios.post('https://seal-app-mobi6.ondigitalocean.app/token/tokencontrol', {
  //         token: res
  //       })
  //         .then(res => {
  //           setloginStatus(true);
  //           setloading(false);
            
  //         })
  //         .catch(err => {
  //           setloginStatus(false);
  //           setloading(false);
            
  //         })
  //     else {
  //       console.log('no token!');
        
  //       setloading(false)
  //     }
  //   })


  return (<>
  <SafeAreaView>
    <Chat/>
  </SafeAreaView>
    {/* <Provider store={store} >
      {
        loading == true ? <Text>loading..</Text> : <>
          <NavigationContainer>

            <Stack.Navigator>
              {
                loginStatus == true ?
                  <>
                    <Stack.Screen name="Museum" component={MuseumScreen} />
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Confirm" component={ConfirmCodeScreen} />

                  </>

                  : <>
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Museum" component={MuseumScreen} />
                    <Stack.Screen name="Confirm" component={ConfirmCodeScreen} />

                  </>
              }

            </Stack.Navigator>

          </NavigationContainer>
        </>
      }

    </Provider> */}
  </>
  )
}



export default App