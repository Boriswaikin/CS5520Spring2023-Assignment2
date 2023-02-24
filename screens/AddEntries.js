import { View, StyleSheet, Text, Alert } from "react-native";
import React, { useState } from "react";
import Color from "../components/Color";
import InputComponent from "../components/InputComponent";
import PressableButton from "../components/PressableButton";
import { writeToDB } from "../Firebase/Firebase-helper";
export default function AddEntries({ navigation }) {
  const [inputCalories, setCalories] = useState();
  const [inputDescription, setDescription] = useState("");
  const [overlimit, setOverlimit] = useState(false);
  const reviewed = false;
  const [caloriesLimit, setCaloriesLimit] = useState(500);

  function navigate() {
    navigation.navigate("Home", { screen: "All Entries" });
  }

  function OnTextEnterDB() {
    const newEntries = {
      calories: inputCalories,
      description: inputDescription,
      flagOverlimit: overlimit,
      reviewedStatus: reviewed,
    };
    writeToDB(newEntries);
  }

  function onEntriesPressed() {
    if (isNaN(inputCalories) || inputCalories < 0 || !inputDescription.trim()) {
      Alert.alert("Invalid input", "Please check your input values");
    } else {
      OnTextEnterDB();
      navigate();
    }
  }

  function resetInput() {
    setCalories("");
    setDescription("");
  }
  return (
    <View style={styles.container}>
      <View style={styles.content} />
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
          marginTop={10}
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
          marginTop={10}
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
      <View style={styles.emptyContent} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: Color.contentColor,
    justifyContent: "center",
  },
  content: {
    flex: 1,
  },
  firstInput: {
    flex: 1,
    marginLeft: 5,
    marginRight: 30,
    justifyContent: "space-between",
    backgroundColor: Color.contentColor,
    flexDirection: "row",
  },
  secondInput: {
    flex: 3,
    marginLeft: 5,
    marginRight: 30,
    justifyContent: "space-between",
    backgroundColor: Color.contentColor,
    flexDirection: "row",
  },
  fixToText: {
    flex: 1,
    marginLeft: 80,
    marginRight: 80,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  emptyContent: {
    flex: 7,
  },
});
