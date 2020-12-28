import React from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';


export function TaskComponent(props) {
    return (
        <TouchableOpacity style={styles.container}>
            <CheckBox
            title={props.title}
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={props.checked}
            containerStyle={[styles.checkbox,props.checkboxStyle]}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    checkbox:{
    flex:1,
    width:"100%"
    }
})
