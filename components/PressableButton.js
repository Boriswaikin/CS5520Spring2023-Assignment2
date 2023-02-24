//Type rnfe
import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import Color from "./Color";

export default function PressableButton({
  buttonPressed,
  customizedStyle,
  children,
}) {
  return (
    <Pressable
      style={({ pressed }) => {
        return [
          styles.pressableDefault,
          customizedStyle,
          pressed && styles.pressedStyle,
        ];
      }}
      android_ripple={{ Color: Color.rippleEffect }}
      onPress={buttonPressed}
    >
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressableDefault: {
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  pressedStyle: {
    backgroundColor: Color.buttonEffect,
  },
});
