import * as React from 'react';
import { View, Text, Button, ImageBackground, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PrincipalScreen from './screens/Principal/Principal'
import Login from './screens/Login/Login'
import Register from'./screens/Register/Register'

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hsh</Text>
      <Button
        title="Go!"
        onPress={() => navigation.navigate('Principal')}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name="Hsh" component={HomeScreen} />
        <Stack.Screen name="Principal" component={PrincipalScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;


const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor : '#fff',
    flexDirection : 'column',
    alignItems : 'center',
    justifyContent : 'center'
  },
  img: {
    alignItems: 'center'
  }

});