import { View, StyleSheet } from "react-native";
import React from "react";
import Color from "../components/Color";
import EntriesList from "../components/EntriesList";
import { collection, query } from "firebase/firestore";
import { db } from "../Firebase/Firebase-setup";

/**
 * This is the AllEntries screen setup.
 * It includes a Flatlist to render the entries items
 * when clicking the entries item, it will navigate to EditEntries screen
 * @param navigation: navigation prop
 * @returns AllEntries screen display
 */
export default function AllEntries({ navigation }) {
  const q = query(collection(db, "entries"));

  /**
   * Function to navigate to EditEntries screen
   * @param entries: pass the entries item to the EditEntries screen
   */
  function navigate(entries) {
    navigation.navigate("EditEntries", { entriesItem: entries });
  }

  return (
    <View style={styles.container}>
      <EntriesList query={q} EntriesPressed={navigate} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.contentColor,
    justifyContent: "center",
  },
});
