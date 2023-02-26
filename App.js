import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddEntries from "./screens/AddEntries";
import EditEntries from "./screens/EditEntries";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import Color from "./components/Color";

const Stack = createNativeStackNavigator();

/**
 * This is main app set up which consists of the navigation of the screens
 * It also sets up the header tab display of AllEntries and OverLimitEntries screen
 * @returns the navigation between screens
 */
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Color.headerTabColor,
          },
          headerTintColor: Color.headerTintColor,
          headerTitleStyle: {
            fontSize: 18,
          },
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen name="Home" component={BottomTabNavigator} />
        <Stack.Screen
          name="AddEntries"
          component={AddEntries}
          options={{
            title: "Add An Entry",
          }}
        />
        <Stack.Screen
          name="EditEntries"
          component={EditEntries}
          options={{
            title: "Edit Entry",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
