import { View, StyleSheet, Platform } from "react-native";
import React from "react";

/**
 * This is the card component that will be used by three screens
 * @param props.width : the width of the card
 * @param props.height : the height of the card
 * @param props.color : the color of the card
 * @param props.radius : the border radius of the card
 * @returns the card configuration
 */
const CardComponent = (props) => {
  return (
    <View
      style={[
        styles(props).body,
        Platform.OS === "ios"
          ? styles(props).shadowIOS
          : styles(props).shadowAndroid,
      ]}
    >
      {props.children}
    </View>
  );
};
const styles = (props) =>
  StyleSheet.create({
    body: {
      flexDirection: props.flexDirection,
      justifyContent: props.justifyContent,
      alignItems: props.alignItems,
      backgroundColor: props.color,
      width: props.width,
      height: props.height,
      borderRadius: props.radius,
      marginBottom: props.marginBottom,
      marginRight: props.marginRight,
      marginTop: props.marginTop,
    },
    shadowIOS: {
      shadowColorIos: "#171717",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 10,
    },
    shadowAndroid: {
      shadowColorAndroid: "#171717",
      elevation: 10,
    },
  });

export default CardComponent;
