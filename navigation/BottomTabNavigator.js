import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect } from "react";
import AllEntries from "../screens/AllEntries";
import OverLimitEntries from "../screens/OverLimitEntries";
import Ionicons from "react-native-vector-icons/Ionicons";
import PressableButton from "../components/PressableButton";
import { AntDesign } from "@expo/vector-icons";
import Color from "../components/Color";

const Tab = createBottomTabNavigator();

/**
 * This is the nested navigator to include the all entries screen and over-limit entries screen
 * also setup the display of header tab , tab bar icon and the bottom tab of the screens
 * @param navigation: the navigation prop
 * @returns the display of all entries screen and over-limit screen
 */
export default function BottomTabNavigator({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: Color.headerTabColor,
        },
        headerTintColor: Color.headerTintColor,
        headerTitleStyle: {
          fontSize: 18,
        },
        headerTitleAlign: "center",
        tabBarActiveTintColor: Color.tabIconColor,
        tabBarStyle: { backgroundColor: Color.headerTabColor },
        tabBarIcon: ({ color, focused }) => {
          var iconName;
          if (route.name === "All Entries") {
            iconName = focused ? "md-cafe" : "md-cafe-outline";
          }
          if (route.name === "Over-limit Entries") {
            iconName = focused ? "md-alert-sharp" : "md-alert-outline";
          }
          return <Ionicons name={iconName} size={22} color={color} />;
        },
        headerRight: () => {
          return (
            <View style={{ marginRight: 10 }}>
              <PressableButton
                customizedStyle={{ backgroundColor: Color.headerTabColor }}
                buttonPressed={() => navigation.navigate("AddEntries")}
              >
                <AntDesign
                  name="plus"
                  size={24}
                  color={Color.headerTintColor}
                />
              </PressableButton>
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="All Entries" component={AllEntries} />
      <Tab.Screen name="Over-limit Entries" component={OverLimitEntries} />
    </Tab.Navigator>
  );
}
