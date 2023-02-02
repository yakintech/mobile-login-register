import { View, Text, StyleSheet, Button, TextInput } from 'react-native'
import React, { Dispatch, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Product } from './store/models/Product'
import { add, AddProductToApi } from './store/productSlice'
import { createAction } from '@reduxjs/toolkit'



const AddProduct = () => {

  const [name, setname] = useState<string>('');
  const [unitPrice, setunitPrice] = useState<string>('');

  let dispatch : Dispatch<any> = useDispatch();

  const addNewProduct = () => {

    let newProduct: Product = {
      name: name,
      unitPrice: Number(unitPrice)
    }

     dispatch(AddProductToApi(newProduct));
   // dispatch(add(newProduct))

  


    
  }

  return (
    <View>
      <TextInput
        placeholder='Name'
        style={styles.input}
        onChangeText={setname}
        value={name}
      />
      <TextInput
        placeholder='Unit Price'
        style={styles.input}
        onChangeText={setunitPrice}
        value={unitPrice}
      />
      <Button title='Add' onPress={addNewProduct}></Button>
    </View>
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
export default AddProduct