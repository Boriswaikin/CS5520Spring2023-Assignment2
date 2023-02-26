import { View, StyleSheet, Text, Alert } from "react-native";
import React, { useState } from "react";
import Color from "../components/Color";
import InputComponent from "../components/InputComponent";
import PressableButton from "../components/PressableButton";
import { writeToDB } from "../Firebase/Firebase-helper";

/**
 * This is the AddEntries screen setup.
 * It shows two text(calories; description)
 * and the two textinput(for user to input calories and description)
 * and two buttons(Reset and Sign up). Reset button allows user to clear all the input;
 * submit button allows user to write the entries data to firestore and navigate to AllEntries screen
 * @param navigation: navigation prop
 * @returns AddEntries screen display
 */
export default function AddEntries({ navigation }) {
  const [inputCalories, setCalories] = useState("");
  const [inputDescription, setDescription] = useState("");
  const [overlimit, setOverlimit] = useState(false);
  const reviewed = false;
  const [caloriesLimit, setCaloriesLimit] = useState(500);

  /**
   * Function to navigate the all entries screen
   */
  function navigate() {
    navigation.navigate("Home", { screen: "All Entries" });
  }

  /**
   * Function to write the entries to firestore
   */
  function OnTextEnterDB() {
    const newEntries = {
      calories: inputCalories,
      description: inputDescription,
      flagOverlimit: overlimit,
      reviewedStatus: reviewed,
    };
    writeToDB(newEntries);
  }

  /**
   * Function to check if the input is valid; if not, then alert message will be pop out
   * if the input is valud, then the entries will be written to firestore
   * and navigate to all entries screen
   */
  function onEntriesPressed() {
    if (
      !inputCalories.trim() ||
      isNaN(inputCalories) ||
      inputCalories < 0 ||
      !inputDescription.trim()
    ) {
      Alert.alert("Invalid input", "Please check your input values");
    } else {
      OnTextEnterDB();
      navigate();
    }
  }

  /**
   * Function to reset the calories and description input
   */
  function resetInput() {
    setCalories("");
    setDescription("");
  }
  return (
    <View style={styles.container}>
      <View style={styles.firstInput}>
        <Text
          style={{
            fontSize: 20,
            color: Color.headerTabColor,
            marginLeft: 10,
            marginTop: 10,
          }}
        >
          Calories
        </Text>
        <InputComponent
          inputHeight={30}
          inputChangeText={(text) => {
            setCalories(text);
            setOverlimit(parseFloat(text) > caloriesLimit);
          }}
          inputValue={inputCalories}
          inputAlign="left"
          backgroundColor={Color.transparent}
          width={210}
          padding={5}
          radius={6}
          marginTop={12}
        />
      </View>
      <View style={styles.secondInput}>
        <Text
          style={{
            fontSize: 20,
            color: Color.headerTabColor,
            marginLeft: 10,
            marginTop: 10,
          }}
        >
          Description
        </Text>
        <InputComponent
          inputHeight={100}
          inputChangeText={setDescription}
          inputValue={inputDescription}
          inputAlign="left"
          backgroundColor={Color.transparent}
          width={210}
          padding={5}
          radius={6}
          marginTop={12}
        />
      </View>
      <View style={styles.fixToText}>
        <PressableButton
          customizedStyle={{
            backgroundColor: Color.headerTabColor,
            height: 35,
            width: 100,
          }}
          buttonPressed={() => {
            resetInput();
          }}
        >
          <Text style={{ color: "white" }}>Reset</Text>
        </PressableButton>
        <PressableButton
          customizedStyle={{
            backgroundColor: Color.headerTabColor,
            height: 35,
            width: 100,
          }}
          buttonPressed={() => {
            onEntriesPressed();
          }}
        >
          <Text style={{ color: "white" }}>Submit</Text>
        </PressableButton>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: Color.contentColor,
    justifyContent: "flex-start",
  },
  firstInput: {
    marginTop: 40,
    marginLeft: 5,
    marginRight: 30,
    marginBottom: 10,
    justifyContent: "space-between",
    backgroundColor: Color.contentColor,
    flexDirection: "row",
  },
  secondInput: {
    marginLeft: 5,
    marginRight: 30,
    marginBottom: 30,
    justifyContent: "space-between",
    backgroundColor: Color.contentColor,
    flexDirection: "row",
  },
  fixToText: {
    marginLeft: 80,
    marginRight: 80,
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
