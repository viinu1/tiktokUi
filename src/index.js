import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/Store';

import App from './App';
import GlobalStyle from './components/GlobalStyles/GlobalStyle';
import 'tippy.js/dist/tippy.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalStyle>
            <Provider store={store}>
                <App />
            </Provider>
        </GlobalStyle>
    </React.StrictMode>,
);
