import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store'; 
import { PersistGate } from 'redux-persist/integration/react';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

const theme = createTheme();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="/goit-react-hw-08-phonebook">
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ThemeProvider>
    
    
  </React.StrictMode>
);
