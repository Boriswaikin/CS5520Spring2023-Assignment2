import { View, Text, StyleSheet, Platform } from "react-native";
import React from "react";
import PressableButton from "./PressableButton";
import Color from "./Color";
import { Ionicons } from "@expo/vector-icons";
import CardComponent from "./CardComponent";

export default function EntriesItem({ entries, editEntriesPressed }) {
  return (
    <View>
      <CardComponent
        flexDirection="row"
        color={Color.headerTabColor}
        width={300}
        height={45}
        radius={5}
        marginBottom={15}
      >
        <PressableButton
          customizedStyle={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: 300,
          }}
          buttonPressed={() => {
            editEntriesPressed();
          }}
        >
          <Text style={styles.textDescription}>{entries.description}</Text>
          <View style={styles.caloriesContainer}>
            {entries.flagOverlimit && (
              <Ionicons name="warning" size={18} color="yellow"></Ionicons>
            )}
            <CardComponent
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              color={Color.headerTintColor}
              width={60}
              height={25}
              radius={3}
              marginRight={10}
            >
              <Text style={styles.textCalories}>{entries.calories}</Text>
            </CardComponent>
          </View>
        </PressableButton>
      </CardComponent>
    </View>
  );
}
const styles = StyleSheet.create({
  textDescription: {
    color: Color.headerTintColor,
    paddingLeft: 10,
    fontSize: 15,
    fontWeight: "bold",
  },

  caloriesContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  textCalories: {
    color: Color.textCalories,
    fontSize: 12,
  },
});
