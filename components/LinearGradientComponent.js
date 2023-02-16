import { StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

/**
 * This is to set the linear Gradient on the background of three screens
 * @param props.colors : colors of linearGradient
 * @param props.flex : flex of linearGradient
 * @param props.flexDirection : flexDirection of linearGradient
 * @param props.alignItems : alignItems of linearGradient
 * @param props.justifyContent : justifyContent of linearGradient
 * @returns
 */
const LinearGradientComponent = (props) => {
  return (
    <LinearGradient colors={props.colors} style={styles(props).linearGradient}>
      {props.children}
    </LinearGradient>
  );
};
const styles = (props) =>
  StyleSheet.create({
    linearGradient: {
      flex: props.flex,
      flexDirection: props.flexDirection,
      alignItems: props.align,
      justifyContent: props.justifyContent,
    },
  });

export default LinearGradientComponent;
