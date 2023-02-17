//Type rnfe
import { View, Text ,Pressable,StyleSheet} from 'react-native'
import React from 'react'

export default function PressableButton(
    
     {buttonPressed,customizedStyle,pressedStyle,children}
    // props,
){
    return (
        <Pressable 
        style= {({pressed})=>{
            return [
            styles.pressableDefault,
            customizedStyle,
            pressed && styles.pressedStyle]}}
            android_ripple={{Color:"red"}}
            onPress={buttonPressed}>
            {children}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    pressableDefault: {
        borderRadius:4,
        justifyContent:'center',
        alignItems:'center',
    },
    pressedStyle:{
        backgroundColor:'rgba(210, 230, 255, 0.1)'
    }
})