import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Quote from './components/Quote';

ReactDOM.render(
    <Provider store={store}>
        <Quote />
    </Provider>,
    document.getElementById('root')
);
