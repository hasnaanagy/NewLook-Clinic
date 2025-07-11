import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import MainLayout from './layouts/MainLayout';
import './styles/global.module.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <MainLayout />
    </Provider>
  </StrictMode>,
);
