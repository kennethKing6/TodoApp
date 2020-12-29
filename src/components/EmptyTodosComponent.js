import React from 'react'
import { View, Text,Image,StyleSheet } from 'react-native'

export function EmptyTodosComponent(props) {
    return (
        <View style={[styles.container]}>
            <Image source={require("../assets/icons/no_task.png")} style={styles.image}/>
            <Text style={styles.text}>Oops, no todo yet</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:30,
        padding:100,

    },
    image:{
        flex:2,
        alignSelf:"center",
       
    },
    text:{
        flex:1,
       textAlign:"center",
        fontSize:18,
        fontWeight:'bold',
        color:"#080E33",
        margin:5,
        marginTop:25
    }
})
