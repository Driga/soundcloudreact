import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
import configureStore, {history} from './store'
import preloadedState from './initialState'
import App from './containers/app'

import './assets/styles/index.css'



const store = configureStore(preloadedState)
const target = document.querySelector('#root');

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <App/>
            </div>
        </ConnectedRouter>
    </Provider>,
    target
)
