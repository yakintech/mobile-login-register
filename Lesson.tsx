import { Platform, View, Text, Button, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import DatePicker from 'react-native-date-picker'
import { TextInput, Switch } from 'react-native-paper';
import moment from 'moment';
import AutoComplete from 'react-native-autocomplete-input'

const Lesson = () => {

  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [birthDate, setbirthDate] = useState("");
  const [cityName, setcityName] = useState('')

  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const change = () => {
    setOpen(true);
  }


  let cities = ['Bakü', 'İstanbul', 'Ankara', 'İzmir'];

  return (
    <SafeAreaView>

      <TextInput
        label="Birth Date"
        value={birthDate}
        onPressIn={() => change()}
      />

      <Button title="Open" onPress={() => setOpen(true)} />

      <DatePicker
        mode='date'
        locale='en'
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date);

          let result = moment(date).format('DD.MM.YYYY');
          setbirthDate(result);

        }}
        onCancel={() => {
          setOpen(false)
        }}
      />

      <View>
        <Text>Switch</Text>
        <Switch color='tomato' value={isSwitchOn} onValueChange={onToggleSwitch} />
      </View>
      <View style={styles.container}>
        <View style={styles.autocompleteContainer}>
          <AutoComplete
            editable={true}
            autoCorrect={false}
            data={cities}
            value={cityName}
            onChangeText={setcityName}
            flatListProps={{
              keyboardShouldPersistTaps: 'always',
              keyExtractor: (item: string) => item,
              renderItem: ({ item }: any) => (
                <TouchableOpacity onPress={() => setcityName(item)}>
                  <Text style={styles.itemText}>{item}</Text>
                </TouchableOpacity>
              ),
            }}

          />
        </View>

        <View style={styles.descriptionContainer}>

          <Text style={styles.infoText}>Enter Title of a Star Wars movie</Text>

        </View>
      </View>


    </SafeAreaView>
  )


}


const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: '#F5FCFF',
    flex: 1,

    // Android requiers padding to avoid overlapping
    // with content and autocomplete
    paddingTop: 50,

    // Make space for the default top bar
    ...Platform.select({
      web: {
        marginTop: 0,
      },
      default: {
        marginTop: 25,
      },
    }),
  },
  itemText: {
    fontSize: 15,
    margin: 2,
  },
  descriptionContainer: {
    // `backgroundColor` needs to be set otherwise the
    // autocomplete input will disappear on text input.
    backgroundColor: '#F5FCFF',
    marginTop: 8,
  },
  infoText: {
    textAlign: 'center',
  },
  autocompleteContainer: {
    // Hack required to make the autocomplete
    // work on Andrdoid
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1,
    padding: 5,
  },
});

export default Lesson