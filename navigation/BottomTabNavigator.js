import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AllEntries from '../screens/AllEntries';
import OverLimitEntries from '../screens/OverLimitEntries';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PressableButton from '../components/PressableButton'
import { AntDesign } from '@expo/vector-icons'; 
const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {

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
                return <Ionicons name={iconName} size={22} color={color}/>},
            headerRight: ()=>{
                return <PressableButton 
                customizedStyle={{backgroundColor:'black'}}
                buttonPressed={()=>console.log("iconpressed")}
                pressedStyle={{
                    backgroundColor:'black'
                }}>
                <AntDesign name = "warning" size={30} color = "black"/>
                </PressableButton>
                }
            }
            )
            }
            >
            <Tab.Screen name="All Entries" component={AllEntries}/>
            <Tab.Screen name="Over Limit Entries" component={OverLimitEntries} />
      </Tab.Navigator>
    )
}