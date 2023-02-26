import { View, FlatList, StyleSheet } from "react-native";
import Color from "./Color";
import React from "react";
import EntriesItem from "./EntriesItem";

/**
 * This is the Entries Flatlist that will be used by AllEntries/OverLimitEntries screen
 * @param inputData: the array contain the items
 * including calories, description, flag to indicate if it is overlimit calories and
 * reviewed status of the entries
 * @param EntriesPressed: the function called after pressing the entries
 * @returns Entries Flatlist that will be displayed in the screens
 */
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
