import { View, StyleSheet,Button } from 'react-native'
import React from 'react'


export default function AddEntries() {
  return (
    <View style={styles.container}>
      <View style={styles.firstInput}>
        
      </View>
      <View style={styles.secondInput}>

      </View> 
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'mediumpurple',
      alignItems: 'stretch',
      justifyContent: 'center',
    },
    firstInput: {
      flex: 1,
      backgroundColor: 'mediumpurple',
      alignItems: 'stretch',
      justifyContent: 'center',
    },
    secondInput: {
      flex: 1,
      backgroundColor: 'mediumpurple',
      alignItems: 'stretch',
      justifyContent: 'center',
    },
})