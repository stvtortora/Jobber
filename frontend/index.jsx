import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState;
  if (window.currentUser) {
    const { id, fname, lname, dname } = window.currentUser;
    preloadedState = {
      session: {
        id, fname, lname, dname
      }
    }
  }
  const store = configureStore(preloadedState);
  window.getState = store.getState;
  ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
});
