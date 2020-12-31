import React,{useState} from 'react'
import { View } from 'react-native';
import { Text,TouchableOpacity,StyleSheet,Dimensions } from 'react-native';
import { Overlay,CheckBox  } from 'react-native-elements';
import {connect} from 'react-redux';
import {deleteTask,scheduleTask,cancelScheduledTask} from '../redux/actions/Todos/todoActions'

const { width,height } = Dimensions.get("screen");
 function TaskDetailsSettings(props) {

   
    const [addNotification,setAddNotification] = useState(props.task.notificationId ? true : false);

    return (
        <Overlay isVisible={props.visibility} containerStyle={styles.container}>
        <CheckBox
            center
            title='Turn on Notification'
            iconType='material'
            checkedIcon='done'
            uncheckedIcon='check'
            checkedColor='#03A61C'
            uncheckedColor='#F2F2F2'
            checked={addNotification}
            onPress={()=>{

                if(addNotification === false ){
                    scheduleTask(props.task,props.indexValue);
                    setAddNotification(true)
                }else{
                    cancelScheduledTask(props.notificationId,props.indexValue);
                    setAddNotification(false)
                }
            }}
            />

            <View style={{height:60,flexDirection:"row",width:"100%"}}>
                <TouchableOpacity
                    style={[styles.buttons,{backgroundColor:"#A60303"}]}
                 onPress={()=>{
                    deleteTask(props.notificationId,props.indexValue);
                     props.setVisibility(false)
                     }}>
                    <Text style={{color:"white",fontSize:18,textAlign:"center"}}>delete task</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={[styles.buttons,{backgroundColor:"#04D98B"}]}
                onPress={()=>{
                    props.setVisibility(false);
                }}>
                    <Text style={{color:"white",fontSize:18,textAlign:"center"}}>Done</Text>
                </TouchableOpacity>
            </View>
            
      </Overlay>
    )
}
const styles = StyleSheet.create({
    container:{
        height: height * 15,
        width: width * 15
    },
    buttons:{
        padding:8,
        margin:10,
        width:100,
        borderRadius:10
        
    }
})

const mapStateToProps = state=>({
    todos: state.todos
})
export default connect(mapStateToProps,
                        {deleteTask,
                        scheduleTask,
                        cancelScheduledTask})
                        (TaskDetailsSettings);
