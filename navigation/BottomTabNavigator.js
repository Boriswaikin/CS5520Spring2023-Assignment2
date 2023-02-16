import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, {useEffect} from 'react';
import AllEntries from '../screens/AllEntries';
import OverLimitEntries from '../screens/OverLimitEntries';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PressableButton from '../components/PressableButton';
import { AntDesign } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();
export default function BottomTabNavigator({route,navigation}) {
    // console.log(route);
    useEffect(() => {
        // Use `setOptions` to update the button that we previously specified
        // Now the button includes an `onPress` handler to update the count
        navigation.setOptions({
            // title: 'My profile',
            headerRight: () => {
                return <PressableButton 
                customizedStyle={{backgroundColor:'blueviolet'}}
                buttonPressed = {()=>navigation.navigate("AddEntries")}
                pressedStyle={{
                    backgroundColor:'blueviolet'
                }}>
                <AntDesign name = 'plus' size={20} color = "white"/>
                </PressableButton>
                },
        });
      },[navigation]);

    return (
        <Tab.Navigator screenOptions={({route})=>({
            headerShown:false,
            tabBarActiveTintColor:'gold',
            tabBarStyle:{backgroundColor:'blueviolet'},
            tabBarIcon: ({color,focused})=>{
                var iconName;
                if(route.name === "All Entries"){
                    iconName = focused ? 'md-cafe' : 'md-cafe-outline'
                }
                if(route.name === "Over Limit Entries"){
                    iconName = focused ? 'md-alert-sharp' : 'md-alert-outline'
                }
                return <Ionicons name={iconName} size={22} color={color}/>}
            })}>
            <Tab.Screen 
                name="All Entries" 
                component={AllEntries} />
            <Tab.Screen name="Over Limit Entries" component={OverLimitEntries} />
      </Tab.Navigator>
    )
}