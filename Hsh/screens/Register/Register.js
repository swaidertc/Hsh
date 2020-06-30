import React, { useState } from 'react';
import { Alert, TextInput, View, StyleSheet, Button } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';


function CreateRegister({navigation}) {

  const [taskName, setTaskName] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [taskAddress, setTaskAddress] = useState('');
  const [taskRoms, setTaskRoms] = useState('');
  const [taskType, setTaskType] = useState('');
  const [taskArea, setTaskArea] = useState('');


  const createRegister = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/addtask', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          task: taskName,
          date: taskDate,
          address: taskAddress,
          roms: taskRoms,
          type: taskType,
          area: taskArea,

        }),
      });
      const json = await response.json();
      Alert.alert("Registro exitoso"); 
      navigation.navigate('Principal')
    }
    catch {

    }
  }

  

  return(
    
    <View style={styles.container}>
        <TextInput
          onChangeText={text => setTaskName(text)}
          placeholder='Title'
          style={styles.input}
        />
        <TextInput
          onChangeText={text => setTaskDate(text)}
          placeholder='Price'
          style={styles.input}
        />
        <TextInput
          onChangeText={text => setTaskAddress(text)}
          placeholder='Address'
          style={styles.input}
        />
        <TextInput
          onChangeText={text => setTaskRoms(text)}
          placeholder='Rooms'
          style={styles.input}
        />
        <TextInput
          onChangeText={text => setTaskType(text)}
          placeholder='Type'
          style={styles.input}
        />
        <TextInput
          onChangeText={text => setTaskArea(text)}
          placeholder='Area'
          style={styles.input}
        />

        
        <Button 
        style={styles.input} 
        onPress={createRegister} 
        title='Add House'>
        </Button>
      </View>
  )

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});

export default CreateRegister;