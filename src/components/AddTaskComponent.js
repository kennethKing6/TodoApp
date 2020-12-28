import React,{useState,useRef} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Overlay } from 'react-native-elements';


export  function AddTaskComponent(props) {
    const [visible, setVisible] = useState(props.displayTaskData);
    const overlayRef = useRef(null);

    return (
        <Overlay ref={overlayRef} isVisible={visible} >
            <Text>Hello from Overlay!</Text>

            <View style={{width:"100%"}}>
                <TouchableOpacity onPress={()=>{
                    setVisible(false)
                }}>
                    <Text>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Save</Text>
                </TouchableOpacity>
            </View> 
      </Overlay>
    )
}
const styles = StyleSheet.create({

})