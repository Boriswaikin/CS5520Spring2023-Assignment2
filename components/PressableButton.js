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
            pressed && pressedStyle]}}
            onPress={buttonPressed}>
            {children}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    pressableDefault: {
        height:35,
        width:100,
        borderRadius:4,
        justifyContent:'center',
        alignItems:'center',
    },
})