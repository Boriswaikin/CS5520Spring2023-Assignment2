import { View, StyleSheet } from "react-native";
import React from "react";
import Color from "../components/Color";
import EntriesList from "../components/EntriesList";
import { collection, query, where } from "firebase/firestore";
import { db } from "../Firebase/Firebase-setup";

/**
 * This is the OverLimitEntries screen setup.
 * It includes a Flatlist to render the entries items,
 * only the items in which the alories>500 and is not being reviewed will be rendered
 * when clicking the entries item, it will navigate to EditEntries screen
 * @param navigation: the navigation prop
 * @returns the OverLimitEntries screen display
 */
export default function OverLimitEntries({ navigation }) {
  // const [entriesOverlimit, setEntriesOverlimit] = useState([]);

  const q = query(
    collection(db, "entries"),
    where("flagOverlimit", "==", true),
    where("reviewedStatus", "==", false)
  );

  /**
   * Navigate to EditEntries screen
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
