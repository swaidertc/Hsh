import * as React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

function CardComponent(props) {

  const {_id, task, date, address, roms, type, area} = props.tasks;

    return (
      <View style={styles.container}>
        <Text>{_id}</Text>
        <Text>{task}</Text>
        <Text>{date}</Text>
        <Text>{address}</Text>
        <Text>{roms}</Text>
        <Text>{type}</Text>
        <Text>{area}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor : '#fff',
    padding: 20,
    borderColor : 'black',
    borderWidth : 2,
    borderRadius : 5
  },
});

  

export default CardComponent;