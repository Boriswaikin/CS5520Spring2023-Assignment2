import { View, StyleSheet,Button } from 'react-native'
import React, {useEffect} from 'react'
import Color from '../components/Color'

export default function AllEntries({ navigation }) {
  return (
    <View style={styles.container}>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Color.contentColor,
      alignItems: 'stretch',
      justifyContent: 'center',
    },
})