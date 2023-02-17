import { View, StyleSheet,Button ,Text,Alert} from 'react-native'
import React, {useState} from 'react'
import Color from '../components/Color'
import InputComponent from '../components/InputComponent';
import PressableButton from '../components/PressableButton';
export default function AddEntries() {

  const [inputCalories, setInputCalories] = useState();
  const [inputDescription, setInputDescription] = useState();

  function setAlert(){
    if(isNaN(inputCalories)||inputCalories<0||inputCalories.length === 0){
      Alert.alert("Invalid input","Please check your input values");
    }
  }

  function resetInput() {
    setInputCalories("");
    setInputDescription("");
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}/>
      <View style={styles.firstInput}>
        <Text
            style={{
              fontSize: 20,
              color: Color.textColor,
              marginLeft: 10,
              marginTop: 10,
            }}>
            Calories
        </Text>
        <InputComponent
          inputHeight = {30}
          inputChangeText={setInputCalories}
          inputValue={inputCalories}
          inputAlign="left"
        />
      </View>
      <View style={styles.secondInput}>
      <Text
            style={{
              fontSize: 20,
              color: Color.textColor,
              marginLeft: 10,
              marginTop: 10,
            }}>
            Description
        </Text>
        <InputComponent
          inputHeight = {100}
          inputChangeText={setInputDescription}
          inputValue={inputDescription}
          inputAlign="left"
        />
      </View> 
      <View style={styles.fixToText}>
          <PressableButton
            customizedStyle = {{
              backgroundColor: Color.buttonColor,
              height:35,
              width:100}}
            buttonPressed= {()=>{
              resetInput();
            }}
          >
          <Text style={{color:'white'}}>Reset</Text>
          </PressableButton>
          <PressableButton
            customizedStyle = {{
              backgroundColor: Color.buttonColor,
              height:35,
              width:100}}
            buttonPressed= {()=>{
            console.log("Reset");
            setAlert();
            }}
          >
          <Text style={{color:'white'}}>Submit</Text>
          </PressableButton>
        </View>
      <View style={styles.emptyContent}/>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      
      flexDirection:'column',
      backgroundColor: 'mediumpurple',
      alignItems: 'stretch',
      justifyContent: 'center',
    },
    content: {
      flex: 1,
    },
    firstInput: {
      marginLeft: 5,
      marginRight: 30,
      justifyContent: "space-between",
      flex: 1,
      backgroundColor: 'mediumpurple',
      flexDirection: 'row',
    },
    secondInput: {
      marginLeft: 5,
      marginRight:30,
      justifyContent: "space-between",
      flex: 3,
      backgroundColor: 'mediumpurple',
      flexDirection: 'row',
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
})