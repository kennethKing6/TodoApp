import * as Notifications from 'expo-notifications';
import {Platform} from 'react-native';


export class TodoNotifications {

    constructor(){
        
    }
    static initNotification(){
        Notifications.setNotificationHandler({
            handleNotification: async () => ({
            shouldShowAlert: true,
            shouldPlaySound: true,
            shouldSetBadge: false,
            priority:Notifications.AndroidNotificationPriority.HIGH
            }),
        });
        // sound:'default'

        // Prepare the notification channel
    Notifications.setNotificationChannelAsync('new-task', {
        name: 'Task to be completed',
        importance: Notifications.AndroidImportance.HIGH,
        sound:'default'
    });
    }

 

    /**
     * 
     * @param {*Object} task that needs to be scheduled
     * 
     * @returns a promise containing the notification Id
     */
    static scheduleNotification(task){
       
       
        
        const trigger = new Date(task.date);
        trigger.setHours(task.time.hours);
        trigger.setMinutes(task.time.minutes);
        TodoNotifications.initNotification();
        return Notifications.scheduleNotificationAsync({
            content: {
            title: task.title,
            body: task.description,
            vibrate:true
            },
            trigger,

        })
    }

    static cancelNotification(notificationId){
       return Notifications.cancelScheduledNotificationAsync(notificationId);
    }

    static cancellAllNotifications(){
        return Notifications.cancelAllScheduledNotificationsAsync()
    }
     static async requestNotificationPermission(){
        return await Notifications.requestPermissionsAsync({
            ios: {
              allowAlert: true,
              allowBadge: true,
              allowSound: true,
              allowAnnouncements: true,
            },
          });
    }

     static async allowsNotificationsAsync(){
        const settings = await Notifications.getPermissionsAsync();
    return settings.granted || settings.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL
    
    }
}