import React from 'react';
import {StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';

export function TaskComponent(props) {
    const isSelected = props.valueObject.selected;

  
        
    
    return (
         
            <CheckBox
             key={props.valueKey} 
            title={props.title}
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={isSelected}
            containerStyle={[styles.container,props.checkboxStyle]}
            onPress={props.onPress}
            />
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})
