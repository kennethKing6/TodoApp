import React,{useState,useRef} from 'react';
import { View, Text, TouchableOpacity,StyleSheet,TextInput  } from 'react-native';
import { Overlay } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import {addTask} from '../redux/actions/Todos/todoActions'
import {connect} from 'react-redux';

 function AddTaskComponent(props) {
    const [visible, setVisible] = useState(true);
    const overlayRef = useRef(null);
    const [title, setTitle] = useState(null)
    const [description, setDescription] = useState(null)

    
    /**
     * This method is used to determine the visibility of the overlay
     * 
     * @returns {boolean} 
     */
    const determineVisibility = ()=>{
        if(props.visibility === true && visible === true ||
            props.visibility === false && visible === false)
            return true;
        else
            return false;
    }

    return (
      
        <Overlay overlayStyle={styles.container} ref={overlayRef} isVisible={determineVisibility()} >
           <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
           <View style={{flex:1}}>
          <Text style={{textAlign:"center",fontSize:25,fontWeight:"bold",color:"#EF4242",margin:"10%",marginTop:2,marginBottom:2,padding:5}}>Save your task</Text>
          <View style={styles.inputs}>
                <TextInput 
                     style={{ height: 40, borderColor: 'gray', borderWidth: 2,width:"100%",margin:5 }}
                     onChangeText={text => setTitle(text)}
                     value={title}
                     placeholder={"Add a new task"}
                     autoCorrect={true}

                />
                <TextInput 
                     style={{ marginTop:20,borderColor: 'gray', borderWidth: 2,width:"100%",margin:5 }}
                     onChangeText={text => setDescription(text)}
                     value={description}
                     multiline
                     maxLength={250}
                     placeholder={"describe your task"}
                     autoCorrect={true}
                />
            </View>

            <View style={styles.buttons}>
                <TouchableOpacity onPress={()=>{
                    setVisible(!visible)
                }} style={[styles.cancelButton]}>
                    <Text style={{color:"white",textAlign:"center",fontSize:16}}>Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{
                    setVisible(!visible)
                    addTask({title:title,description:description})
                }} style={[styles.saveButton]}>
                    <Text style={{color:"white",textAlign:"center",fontSize:16}}>Save</Text>
                </TouchableOpacity>
            </View> 
          </View>
          </ScrollView>
        
      </Overlay>
    )
}
const styles = StyleSheet.create({
    container:{
    width:"80%",
    height:"50%",
    },
    inputs:{
        flex:10,
        margin:5
    },
    buttons:{
        flex:1,
        flexDirection:"row"
    },
    cancelButton:{
        padding:10,
        flex:1,
        backgroundColor:"#FF1D1B",
        margin:3,
        borderRadius:6,
        height:40

    },
    saveButton:{
        fontSize:100,
        flex:1,
        padding:10,
        backgroundColor:"#0CD8FF",
        margin:3,
        borderRadius:6,
        height:40


    }
})

export default connect(null,{addTask})(AddTaskComponent) ;