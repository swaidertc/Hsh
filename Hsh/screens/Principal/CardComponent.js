import * as React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

function CardComponent(props) {

  const {_id, title, price, address, rooms, area, photo, type} = props.tasks;

    return (
      <View style={styles.container}>
        <Text>{_id}</Text>
        <Text>{title}</Text>
        <Text>{price}</Text>
        <Text>{address}</Text>
        <Text>{rooms}</Text>
        <Text>{area}</Text>
        <Text>{photo}</Text>
        <Text>{type}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor : '#fff',
    borderColor : 'black',
    borderWidth : 2,
    borderRadius : 5
  },
});

  

export default CardComponent;