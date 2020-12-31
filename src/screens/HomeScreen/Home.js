import React,{useEffect,useState} from 'react';
import { View, Text,StyleSheet,Dimensions,Platform } from 'react-native';
import {connect} from 'react-redux';
import {addTask} from '../../redux/actions/Todos/todoActions';
import AddTaskComponent from '../../components/AddTaskComponent';
import {TodosList} from '../../components/TodosList';
import { Avatar } from 'react-native-elements';
import {AppStyles} from '../AppStyles';



const {width,height} = Dimensions.get("screen");
function Home(props) {
    const [addItem,setAddItem]= useState(false);

    


console.log("todos",props.todos)
    return (
        <View style={[styles.container,AppStyles.appStyle]}>
            <AddTaskComponent visibility={addItem}/>
           <TodosList data={props.todos}/>
            <Avatar 
                   rounded
                   onPress={()=>{
                       setAddItem(!addItem);
                   }}
                   activeOpacity={0.6}
                   icon={{name:"plus", type: 'font-awesome',size:30,
                        iconStyle:{backgroundColor:"white"}}}
                   size={"large"}
                   containerStyle={{backgroundColor:"#6E2EE8",position:"absolute",top:height * 0.8,left:width * 0.75}}
               />
          
       
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    TodosList:{
        flex:4
    },
    floatingButton:{
        flex:1,

    }

})
const mapStateToProps = state => ({
    todos: state.todos,
  });
export default connect(mapStateToProps,{addTask})(Home)
