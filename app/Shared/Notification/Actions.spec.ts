import * as Actions from './Actions'
import {NotificationType} from './Dto'

describe('Notification actions', () => {
    it('should create an action to show a default notification', () => {
        const expectedAction = {
            type: Actions.SHOW_NOTIFICATION,
            notificationText: 'There has been an error',
            notificationType: NotificationType.Info,
            notificationClassName: 'info'
        };

        expect(Actions.showNotification('There has been an error')).toEqual(expectedAction);
    });

    it('should create an action to show a notification (accidentally with no method)', () => {
        const expectedAction = {
            type: Actions.SHOW_NOTIFICATION,
            notificationText: '',
            notificationType: NotificationType.Error,
            notificationClassName: 'error'
        };

        expect(Actions.showNotification('', NotificationType.Error)).toEqual(expectedAction);
    });

    it('should create an action to hide a notification', () => {
        const expectedAction = {
            type: Actions.HIDE_NOTIFICATION,
            notificationText: '',
            notificationType: NotificationType.Default,
            notificationClassName: ''
        };

        expect(Actions.hideNotification()).toEqual(expectedAction);
    });
});