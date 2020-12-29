import React,{useState} from 'react'
import { View, Text,FlatList,StyleSheet } from 'react-native'
import {TaskComponent} from './TaskComponent';
import {EmptyTodosComponent} from './EmptyTodosComponent';
import {selectTask} from '../redux/actions/Todos/todoActions';

export function TodosList(props) {
    const [rerender,setRerender] = useState(false);
    // console.log("rerender",rerender)
    const renderItem = ({ item,index }) => {
        return (<TaskComponent valueObject={item} valueKey={index} 
                title={item.title} checked={item.selected} 
                checkboxStyle={styles.item} 
                onPress={()=>{
                    selectTask(index);
                }} />)

    }
        
      ;
    return (
       <FlatList
           data={props.data}
           renderItem={renderItem}
           keyExtractor={item => item.id}
           ListEmptyComponent={<EmptyTodosComponent/>}
           style={styles.flatlist}
           
       />

    )
}
const styles = StyleSheet.create({
    flatlist:{
        flex:1,
    },
    emptyComponent:{
    alignSelf:"center"
    }
})
