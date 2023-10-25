import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import GlobalStyle from './components/GlobalStyles/GlobalStyle';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalStyle>
            <App />
        </GlobalStyle>
    </React.StrictMode>,
);
