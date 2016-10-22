import * as React from "react";
import {connect} from "react-redux";
import {hideNotification} from "./Actions";
import {NotificationState} from "./Reducer";

interface IProps extends React.Props<any> {
    Notification:NotificationState;
    hideNotification:() => void;
}

function mapStateToProps(state:any) {
    return {
        Notification: state.NotificationReducer
    };
}

function mapDispatchToProps(dispatch:any) {
    return {
        hideNotification: () => dispatch(hideNotification()),
    };
}

class Notification extends React.Component<IProps, void> {
    hideAfterTimeout:any;

    hideNotification(e:React.MouseEvent) {
        e.preventDefault();

        this.props.hideNotification();
    }

    getClassName():string {
        return this.props.Notification.className + (this.props.Notification.isShown ? (' active') : '');
    }

    render() {
        if (this.hideAfterTimeout) clearTimeout(this.hideAfterTimeout);

        // @TODO export timeout to a config var
        if (this.props.Notification.isShown) {
            this.hideAfterTimeout = setTimeout(() => {
                this.props.hideNotification();
            }, 4500);
        }

        return (
            <div id="notification" className={this.getClassName()} onClick={(e) => this.hideNotification(e)}>
                <span className="close">&times;</span>
                <small>Click to close</small>
                <p>{this.props.Notification.text}</p>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
(Notification);