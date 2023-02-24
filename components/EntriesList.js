import { View, FlatList, StyleSheet } from "react-native";
import Color from "./Color";
import React from "react";
import EntriesItem from "./EntriesItem";

export default function EntriesList({ inputData, EntriesPressed }) {
  return (
    <View style={styles.bottomContaineer}>
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        data={inputData}
        renderItem={({ item }) => {
          return (
            <EntriesItem
              entries={item}
              editEntriesPressed={() => {
                EntriesPressed(item);
              }}
            />
          );
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  bottomContaineer: {
    flex: 4,
    backgroundColor: Color.contentColor,
  },
  contentContainerStyle: {
    alignItems: "center",
    marginTop: 25,
  },
});
