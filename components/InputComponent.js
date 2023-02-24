import { View, TextInput, StyleSheet } from "react-native";
import React from "react";

/**
 * This is the textInput component that will be used by three screens
 * @param inputStyle : the style of the textInput
 * @param inputValue : the text value of the textInput
 * @param inputChangeText : the changeText of the textInput
 * @param textAlign : the text alignment of the textInput
 * @returns the textInput configuration
 */
const InputComponent = (props) => {
  return (
    <View>
      <TextInput
        multiline
        style={[styles(props).input, { height: props.inputHeight }]}
        value={props.inputValue}
        onChangeText={props.inputChangeText}
        textAlign={props.inputAlign}
      />
    </View>
  );
};
const styles = (props) =>
  StyleSheet.create({
    input: {
      backgroundColor: props.backgroundColor,
      width: props.width,
      padding: props.padding,
      borderRadius: props.radius,
      marginTop: props.marginTop,
    },
  });
export default InputComponent;
