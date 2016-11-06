import ReactDOM from 'react-dom';
import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { App } from './components/index.jsx';
import reducer from './reducers';
import { tick, updateSequence } from './actions';

import {AudioOutput} from './audio/output.js';

const store = createStore(reducer);

const _ao = new AudioOutput(store);

// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
let unsubscribe = store.subscribe(() => {
        console.log(store.getState())
    }
)

window.tick = () => { store.dispatch(tick('Learn about actions')); }
window.tock = () => { store.dispatch(updateSequence({value : 1})); }
let _ticker = setInterval(() => { store.dispatch(tick('timer tick')) }, 500);

store.dispatch(tick('Learn about actions'));
store.dispatch(tick('Learn about actions'));
store.dispatch(tick('Learn about actions'));
store.dispatch(tick('Learn about actions'));
store.dispatch(tick('Learn about actions'));

// Stop listening to state updates
//unsubscribe()


//_386 = { onePass: true, speedFactor: 1.25 };
_386 = { fastLoad: true};


ReactDOM.render(
    <Provider store={store} >
        <App/>
    </Provider>,
    document.getElementById('app')
);