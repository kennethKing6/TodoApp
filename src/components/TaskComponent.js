
import React,{useState} from 'react';
import {StyleSheet,Dimensions, View,Text,TouchableHighlight,Platform } from 'react-native';
import { CheckBox  } from 'react-native-elements';
import {connect} from 'react-redux';
import TaskDetailsSettings from './TaskDetailsSettings';
import {setTaskDate,setTaskTime} from '../redux/actions/Todos/todoActions';
import Icon from 'react-native-vector-icons/Entypo';
import {DatePickerModal,TimePickerModal} from 'react-native-paper-dates';
import moment from 'moment';

// Need manually add Intl polyfill for react-native app
import "intl";

if (Platform.OS === "android") {
    // See https://github.com/expo/expo/issues/6536 for this issue.
    Intl.__disableRegExpRestore();
    
}
import "intl/locale-data/jsonp/en";

const {width,height} = Dimensions.get("screen");



 function TaskComponent(props) {

     const [datePickerVisibility,setDatePickerVisibility] = useState(false);
     const [timePickerVisibility,setTimePickerVisibility] = useState(false); 
     const [taskDetailVisibility,setTaskDetailsVisibility] = useState(false);

     const isSelected = props.valueObject.selected;
     const time = `${moment(props.valueObject.date).format("MMM DD YYYY")},${props.valueObject.time.hours}:${props.valueObject.time.minutes}`;

     function DatePicker(){

        const onDismiss = React.useCallback(() => {
            setDatePickerVisibility(false)
          }, [datePickerVisibility])
        
          const onChange = React.useCallback(({ date }) => {
            setDatePickerVisibility(false)
            setTaskDate(date,props.valueKey)
          }, [])
        
          const date = new Date();
          return(
            <DatePickerModal
                mode="single"
                visible={datePickerVisibility}
                onDismiss={onDismiss}
                date={new Date(props.valueObject.date)}
                onConfirm={onChange}
                saveLabel="Save" // optional
                label="Select date" // optional
                animationType="fade" // optional, default is 'slide' on ios/android and 'none' on web
            />
          )
      }
      function TimePicker(){
        const onDismiss = React.useCallback(() => {
          setTimePickerVisibility(false)
        }, [timePickerVisibility])
      
        const onConfirm = React.useCallback(
          ({ hours, minutes }) => {
            setTimePickerVisibility(false);
            setTaskTime({hours:hours,minutes:minutes},props.valueKey);
           

          },
          [timePickerVisibility]
        );
      
        return (
            <TimePickerModal
              visible={timePickerVisibility}
              onDismiss={onDismiss}
              onConfirm={onConfirm}
              hours={props.valueObject.time.hours} // default: current hours
              minutes={props.valueObject.time.minutes} // default: current minutes
              label="Select time" // optional, default 'Select time'
              cancelLabel="Cancel" // optional, default: 'Cancel'
              confirmLabel="Ok" // optional, default: 'Ok'
              animationType="fade" // optional, default is 'none'

            />)
      }

    return (
         <View style={styles.container} key={props.valueKey}>
           <Icon name='dots-three-vertical' size={20} color="#F25F29" 
                style={{position:"relative",left: "90%",top:10,margin:10,marginBottom:20,opacity:2}}
                onPress={()=>setTaskDetailsVisibility(true)}
            />
            <Text  style={styles.titleText}>{props.valueObject.title}</Text>

            <View style={{alignSelf:"center",width:"90%",backgroundColor:"#5B7F9A",borderRadius:15 }}>
            <Text  style={styles.descriptionText}>{props.valueObject.description}</Text>
            </View>

             <CheckBox
             title={'Done'}
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={isSelected}
            containerStyle={[styles.checkbox]}
            onPress={props.onPress}
            />
            <Icon name='calendar' size={20} color="#D1312F" 
                style={{position:"absolute",left: 10,top:height * 0.24,opacity:2,padding:24}}
                onPress={()=>{setDatePickerVisibility(true)}}
            />
            <Icon name='clock' size={20} 
            color="#D1312F"
            activeOpacity={0.8} 
            style={{position:"absolute",left: 50,top:height * 0.24,padding:24}}
            onPress={()=>{setTimePickerVisibility(true)}}/>
             <DatePicker/>

             <TimePicker/>
              <TaskDetailsSettings visibility={taskDetailVisibility} 
              task={props.valueObject} notificationId={props.valueObject.notificationId} 
              indexValue={props.valueKey} setVisibility={setTaskDetailsVisibility}
              />
             <View style={{flex:1,flexDirection:"row",position:"absolute",
                          padding:10,}}>

               <Text style={styles.timeDate}>
               Date: {moment(props.valueObject.date).format("MMMM Do YYYY")}
               </Text>
               <Text style={[styles.timeDate,{backgroundColor:"#F2D272"}]}>
               Time {moment(time).format('h:mm a')}
               </Text>

             </View>
         </View>
           
    )
}

const styles = StyleSheet.create({
    container:{
        height: (height * 1/3),
        elevation:30,
        borderRadius:20,
        borderWidth:5,
        backgroundColor:"white",
        margin:15,
        borderColor:"white",


    },
    checkbox:{
        position:"absolute",
        top: "77%",
        left:"65%"
    },
    titleText:{
        color:"black",
        fontSize:24,
        textAlign:"center",
        color:"#0669BF",
        marginBottom:7,
        marginTop:15
    },
    descriptionText:{
        color:"black",
        fontSize:16,
        color:"white",
        width:undefined,
        height:undefined,
        padding:15,
        backgroundColor:"#04ADBF",
        borderRadius:12

    },
    timeDate:{
      fontSize:16,
      margin:5,
      color:"white",
      borderRadius:10,
      backgroundColor:"#F25F29",
      padding:10
    }
})
const mapStateToProps = state =>({
  todos: state.todos
})
export default connect(mapStateToProps,{setTaskDate,setTaskTime})(TaskComponent);