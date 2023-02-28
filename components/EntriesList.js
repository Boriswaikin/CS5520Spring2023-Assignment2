import { View, FlatList, StyleSheet } from "react-native";
import Color from "./Color";
import React, { useState, useEffect } from "react";
import EntriesItem from "./EntriesItem";
import { onSnapshot } from "firebase/firestore";

/**
 * This is the Entries Flatlist that will be used by AllEntries/OverLimitEntries screen
 * @param query: the query to get the collection
 * including calories, description, flag to indicate if it is overlimit calories and
 * reviewed status of the entries
 * @param EntriesPressed: the function called after pressing the entries
 * @returns Entries Flatlist that will be displayed in the screens
 */
export default function EntriesList({ query, EntriesPressed }) {
  const [entries, setEntries] = useState([]);

  /**
   * Get real time update from firestore
   * push the data from firestore to an array - entries
   */

  useEffect(() => {
    const unsubscribe = onSnapshot(query, (querySnapshot) => {
      if (querySnapshot.empty) {
        setEntries([]);
      } else {
        let entriesFromDB = [];
        querySnapshot.docs.forEach((doc) => {
          entriesFromDB.push({ ...doc.data(), id: doc.id });
        });
        setEntries(entriesFromDB);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <View style={styles.bottomContaineer}>
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        data={entries}
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
