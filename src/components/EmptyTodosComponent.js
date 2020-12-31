import React from 'react'
import { View, Text,Image,StyleSheet } from 'react-native'
import { colors } from 'react-native-elements'

export function EmptyTodosComponent(props) {
    return (
        <View style={[styles.container]}>
            <Image source={require("../assets/icons/no_task.png")} style={styles.image}/>
            <Text style={styles.text}>Oops, no task added yet</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:30,
        padding:50,

    },
    image:{
        flex:2,
        alignSelf:"center",
       
    },
    text:{
        flex:1,
       textAlign:"center",
        fontSize:20,
        fontWeight:'bold',
        color:"white",
        margin:5,
        marginTop:25
    }
})
