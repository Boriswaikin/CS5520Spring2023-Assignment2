import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer,getFocusedRouteNameFromRoute} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddEntries from './screens/AddEntries';
import BottomTabNavigator from './navigation/BottomTabNavigator';

const Stack = createNativeStackNavigator();

function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route)?? "All Entries";

  switch (routeName) {
    case 'All Entries':
      return 'All Entries';
    case 'Over Limit Entries':
      return 'Over-limit Entries';
  }
}

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
          name="Home"
          component={BottomTabNavigator} 
          options={({ route }) => ({ title: getHeaderTitle(route) })}  
        />
         <Stack.Screen name ="AddEntries" component={AddEntries}
         options={{
          title:"Add An Entry"}}/>
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
