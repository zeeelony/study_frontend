import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import CounterPage from './pages/MainPage';

ReactDOM.render(
    <Provider store={store}>
      <CounterPage />
    </Provider>,
    document.getElementById('root')
);

export default root;