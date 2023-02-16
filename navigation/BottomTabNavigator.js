import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AllEntries from '../screens/AllEntries';
import OverLimitEntries from '../screens/OverLimitEntries';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
    return (
        <Tab.Navigator screenOptions={{headerShown:false}}>
            <Tab.Screen name="All Entries" component={AllEntries} />
            <Tab.Screen name="Over Limit Entries" component={OverLimitEntries} />
      </Tab.Navigator>
    )
}