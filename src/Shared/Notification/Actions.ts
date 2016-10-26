import {NotificationType} from "./Dto";

export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';
export function showNotification(text:string, type:NotificationType = NotificationType.Info):IAction {
    return {
        type: SHOW_NOTIFICATION,
        notificationText: text,
        notificationType: type,
        notificationClassName: getNotificationClassName(type)
    };
}

export const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION';
export function hideNotification():IAction {
    return {
        type: HIDE_NOTIFICATION,
        notificationText: '',
        notificationType: NotificationType.Default,
        notificationClassName: ''
    };
}

function getNotificationClassName(type:NotificationType) {
    switch (type) {
        case NotificationType.Warning:
            return 'warning';
        case NotificationType.Error:
            return 'error';
        case NotificationType.Success:
            return 'success';
        default:
            return 'info';
    }
}

export interface IAction {
    type:string;
    notificationText:string;
    notificationType:NotificationType;
    notificationClassName:string;
}