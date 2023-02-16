import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import PressableButton from './components/PressableButton';
import { AntDesign } from '@expo/vector-icons'; 
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
        <Stack.Screen 
          name="BottomTabNavigator" 
          component={BottomTabNavigator}
          options={{
          headerRight: ()=>{
            return <PressableButton 
            customizedStyle={{backgroundColor:'blueviolet'}}
            buttonPressed={()=>console.log("iconpressed")}
            pressedStyle={{
                backgroundColor:'blueviolet'
            }}>
            <AntDesign name = 'plus' size={20} color = "white"/>
            </PressableButton>
            }}}
        />
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
