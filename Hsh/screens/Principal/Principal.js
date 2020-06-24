import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import CardComponent from './CardComponent';


function PrincipalScreen({navigation}) {  

  const [DATA, setData] = useState([]); 

   const fetchTasks = async () =>{
     try {
       let response = await fetch('http://localhost:3002/api/house')
       let jsonResponse = await response.json();
       setData(jsonResponse.tasks);
     } catch (error) {
       console.log('errr');
     }
   }

   useEffect(()=>{
    fetchTasks();
   },[]);

  return(
    <View style={styles.container}>
    <FlatList
      data={DATA}
      renderItem={({item})=><CardComponent tasks={item}/>}
      keyExtractor={item => item._id}>
    </FlatList>
    <Button
        title="Login!"
        onPress={() => navigation.navigate('Login')}
    />
    <Button
        title="Register!"
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

