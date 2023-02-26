import { View, StyleSheet, Text, Alert } from "react-native";
import React from "react";
import Color from "../components/Color";
import PressableButton from "../components/PressableButton";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { deletefromDB } from "../Firebase/Firebase-helper";
import { updateDB } from "../Firebase/Firebase-helper";
import CardComponent from "../components/CardComponent";

/**
 * This is the EditEntries screen setup.
 * It includes a card component to show the details of the entries item
 * The details of the entries item:
 * Calories; description; button to delete the item ;
 * When clicking delete/review button, alert will be shown to the user to confirm their action
 * @param route: the route prop
 * @param navigation: the navigation prop
 * @returns the EditEntries screen display
 */
export default function EditEntries({ route, navigation }) {
  const entriesItem = route.params.entriesItem;

  /**
   * Function to delete the item from the firestore
   * After deleting the item, go back to the screen the user start from
   */
  function onDeletePressed() {
    deletefromDB(entriesItem.id);
    navigation.goBack();
  }

  /**
   * Function to update the item from firestore (mark the item as reviewed)
   * After updating the item, go back to the screen the user start from
   */
  function onReviewPressed() {
    updateDB(entriesItem.id, true);
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <CardComponent
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        color={Color.transparent}
        width={280}
        height={100}
        radius={8}
        marginTop={40}
      >
        <Text style={styles.textDescription}>
          Calories: {entriesItem.calories}
        </Text>
        <Text style={styles.textDescription}>
          Description: {entriesItem.description}
        </Text>
        <View style={styles.buttons}>
          <PressableButton
            customizedStyle={styles.deleteButton}
            buttonPressed={() => {
              Alert.alert(
                "Delete",
                "Are you sure you want to delete this?",
                [
                  { text: "No" },
                  {
                    text: "Yes",
                    onPress: () => {
                      onDeletePressed();
                    },
                  },
                ],
                { cancelable: false }
              );
            }}
          >
            <Feather name="trash" size={14} color="white" />
          </PressableButton>
          {entriesItem.flagOverlimit && !entriesItem.reviewedStatus && (
            <PressableButton
              customizedStyle={styles.deleteButton}
              buttonPressed={() => {
                Alert.alert(
                  "Important",
                  "Are you sure you want to mark this item as reviewed?",
                  [
                    { text: "No" },
                    {
                      text: "Yes",
                      onPress: () => {
                        onReviewPressed();
                      },
                    },
                  ],
                  { cancelable: false }
                );
              }}
            >
              <AntDesign name="check" size={14} color="white" />
            </PressableButton>
          )}
        </View>
      </CardComponent>
      <View style={styles.endcontainer}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.contentColor,
    alignItems: "center",
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
  },
  deleteButton: {
    backgroundColor: Color.headerTabColor,
    width: 42,
    height: 25,
    borderRadius: 2,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
  },
  textDescription: {
    color: Color.headerTabColor,
    marginBottom: 5,
    fontWeight: "bold",
  },
  endcontainer: {
    flex: 5,
  },
});
