import {Record} from "immutable";
import {SHOW_NOTIFICATION, HIDE_NOTIFICATION, IAction} from "./Actions";
import {NotificationType} from "./Dto";

const State = Record({
    isShown: false,
    text: '',
    type: NotificationType.Default,
    className: ''
});

export class NotificationState extends State {
    isShown:boolean;
    text:string;
    type:NotificationType;
    className:string;
}

export default function NotificationReducer(state:NotificationState | undefined,
                                            action:IAction):NotificationState {
    if (!state) state = new NotificationState();

    switch (action.type) {
        case HIDE_NOTIFICATION:
            return state.merge({
                isShown: false
            }) as NotificationState;
        case SHOW_NOTIFICATION:
            return state.merge({
                isShown: true,
                text: action.notificationText,
                type: action.notificationType,
                className: action.notificationClassName,
            }) as NotificationState;
        default:
            return state;
    }
}