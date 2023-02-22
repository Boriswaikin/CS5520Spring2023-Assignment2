import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import PressableButton from './PressableButton';
import Color from './Color';
import { Ionicons } from '@expo/vector-icons'; 

export default function EntriesItem({entries,onEntriesPressed}) {
  return (
    <View>
      <PressableButton
        customizedStyle = {styles.textContainer}
        buttonPressed= {()=>{
            console.log("happy");
        }}
      >
      <Text style={styles.textDescription}>{entries.description}</Text>   
      <View style={styles.caloriesContainer}>
      {entries.flagOverlimit && (
          <Ionicons name = 'warning' size={18} color = "yellow"> 
          </Ionicons>
          )}
          <View style={styles.caloriesTextContainer}>
          <Text style={styles.textCalories}>{entries.calories}</Text>
        </View>
      </View>
      </PressableButton>
    </View>
  )
}
const styles = StyleSheet.create({

  textContainer : {
    backgroundColor: Color.buttonColor,
    height:45,
    width:300,
    flexDirection:"row",
    justifyContent: "space-between",
    alignItems:'center',
    marginBottom:15,
    borderRadius:5,
    },

    textDescription:{
    color:'white',
    paddingLeft:10,
    fontSize:15,
    fontWeight: 'bold',
    },

    caloriesContainer:{
      flexDirection:"row",
      alignItems:"center",
    },

    caloriesTextContainer:{
      backgroundColor:'white',
      height:25,
      width:60,
      borderRadius:3,
      marginRight:10,
      justifyContent:'center',
      alignItems:'center',
    },

    textCalories: { 
    color:'black',
    fontSize:12,
    // fontWeight: 'bold',
    },
})