import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store/store'
import AuthProvider from './context/auth/AuthProvider';
import DBProvider from './context/database/DBProvider';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <DBProvider>
                    <AuthProvider>
                        <App />
                    </AuthProvider>
                </DBProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
