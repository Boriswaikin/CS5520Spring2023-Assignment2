import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './navigation/BottomTabNavigator';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle:{
          backgroundColor:'blueviolet'
        },
        headerBackTitle:'Back',
        headerTintColor: 'white',
        headerTitleStyle:{
          fontSize:18
        }
        }}>
        <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator}
        options={{title:"All my goals"}} />
      </Stack.Navigator>                   
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
