import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router, Route} from 'react-router'

import {store, history} from './configureStoreAndHistory'

import {NoMatch} from './Shared/NoMatch/Component'
import Notification from './Shared/Notification/Component'
import Homepage from './Components/Homepage/Component'

const renderTo = document.getElementById('AppContainer') as Element;

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Notification/>

            <Router history={history}>
                <Route path="/" component={Homepage}/>

                <Route path="*" component={NoMatch}/>
            </Router>
        </div>
    </Provider>,
    renderTo
);