import * as Actions from "./Actions";
import {NotificationType} from "./Dto";
import Reducer, {NotificationState} from "./Reducer";

describe('Notification Reducer', () => {
    let latestState:NotificationState;

    it('is a Redux store configured with the correct reducer', () => {
        const action = {
            type: '',
            notificationText: '',
            notificationType: NotificationType.Default,
            notificationClassName: ''
        };

        const newReducer = Reducer(undefined, action);

        expect(newReducer).toEqual(new NotificationState());
    });

    it('updates the Reducer after showing a notification has been requested', () => {
        const
            action = Actions.showNotification('Hello, World!', NotificationType.Success),
            newReducer:NotificationState = Reducer(undefined, action);

        expect(newReducer.isShown).toBe(true);
        expect(newReducer.text).toEqual('Hello, World!');
        expect(newReducer.type).toEqual(NotificationType.Success);
        expect(newReducer.className).toEqual('success');

        // To test successful hideNotification() later
        latestState = Reducer(undefined, action);
    });

    it('updates the Reducer after hiding a notification has been requested', () => {
        const
            action = Actions.hideNotification(),
            newReducer:NotificationState = Reducer(latestState, action).toJS();

        expect(newReducer.isShown).toBe(false);
        expect(newReducer.text).toEqual('Hello, World!');
        expect(newReducer.type).toEqual(NotificationType.Success);
        expect(newReducer.className).toEqual('success');
    });
});