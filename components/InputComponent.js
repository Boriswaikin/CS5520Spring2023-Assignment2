import { View, TextInput,StyleSheet} from "react-native";
import React from "react";

/**
 * This is the textInput component that will be used by three screens
 * @param inputStyle : the style of the textInput
 * @param inputValue : the text value of the textInput
 * @param inputChangeText : the changeText of the textInput
 * @param textAlign : the text alignment of the textInput
 * @returns the textInput configuration
 */
const InputComponent = ({
  inputHeight,
  inputValue,
  inputChangeText,
  inputAlign,
}) => {
  return (
    <View>
      <TextInput
        multiline
        style={[styles.input,{height:inputHeight}]}
        value={inputValue}
        onChangeText={inputChangeText}
        textAlign={inputAlign}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  input:{
    // position:'absolute',
    marginTop: 10,
    padding:5,
    borderRadius:6,
    width:210,
    backgroundColor:'rgba(210, 230, 255,0.2)'
  }
})
export default InputComponent;
