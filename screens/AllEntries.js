import { View, StyleSheet, Button, FlatList, Text } from "react-native";
import React, { useState, useEffect } from "react";
import Color from "../components/Color";
import EntriesList from "../components/EntriesList";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../Firebase/Firebase-setup";

export default function AllEntries({ navigation }) {
  const [entriesAll, setEntriesAll] = useState([]);

  function navigate(entries) {
    navigation.navigate("EditEntries", { entriesItem: entries });
  }

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "entries"),
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
