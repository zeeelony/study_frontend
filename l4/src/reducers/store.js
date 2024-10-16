import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import YourComponent from '../components/Component';

function App() {
  return (
    <Provider store={store}>
      <YourComponent />
    </Provider>
  );
}

export default App;
