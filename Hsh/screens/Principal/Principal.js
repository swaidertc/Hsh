import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text, Button, ImageBackground } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import CardComponent from './CardComponent';


function PrincipalScreen({navigation}) {  

  const [DATA, setData] = useState([]); 

   const fetcTasks = async () =>{
     try {
       let response = await fetch('http://localhost:3000/api/listtasks')
       let jsonResponse = await response.json();
       setData(jsonResponse.tasks);
     } catch (error) {
       console.log('errr');
     }
   }

   useEffect(()=>{
    fetcTasks();
   },[]);

  return(
      <View style={styles.container}>
    <FlatList
      data={DATA}
      renderItem={({item})=> <CardComponent tasks={item}/>}
      keyExtractor={item => item._id}>
    </FlatList>
    <Button
        title="Go To Add House!"
        onPress={() => navigation.navigate('Register')}
    />
    </View>

    
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor : '#fff',
    flexDirection : 'column',
    alignItems : 'center',
    justifyContent : 'center'
  },
});

export default PrincipalScreen;