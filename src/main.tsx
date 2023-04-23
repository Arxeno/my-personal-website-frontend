import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.scss';
import './styles/responsive.scss';
import { GlobalStateProvider } from './GlobalStateContext';
import { store } from './app/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStateProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </GlobalStateProvider>
  </React.StrictMode>
);
