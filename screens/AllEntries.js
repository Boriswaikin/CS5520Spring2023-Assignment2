import { View, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import Color from "../components/Color";
import EntriesList from "../components/EntriesList";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../Firebase/Firebase-setup";

/**
 * This is the AllEntries screen setup.
 * It includes a Flatlist to render the entries items
 * when clicking the entries item, it will navigate to EditEntries screen
 * @param navigation: navigation prop
 * @returns AllEntries screen display
 */
export default function AllEntries({ navigation }) {
  const [entriesAll, setEntriesAll] = useState([]);

  /**
   * Function to navigate to EditEntries screen
   * @param entries: pass the entries item to the EditEntries screen
   */
  function navigate(entries) {
    navigation.navigate("EditEntries", { entriesItem: entries });
  }

  /**
   * Get real time update from firestore
   * push the data from firestore to an array - entriesAll
   */
  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "entries")),
      (querySnapshot) => {
        if (querySnapshot.empty) {
          setEntriesAll([]);
        } else {
          let entriesFromDB = [];
          querySnapshot.docs.forEach((doc) => {
            entriesFromDB.push({ ...doc.data(), id: doc.id });
          });
          setEntriesAll(entriesFromDB);
        }
      }
    );
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <View style={styles.container}>
      <EntriesList inputData={entriesAll} EntriesPressed={navigate} />
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
