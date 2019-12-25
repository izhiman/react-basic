import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'

import App from './components/app'
import './index.css'

ReactDOM.render(
    (   // 用router管理整个应用
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    ),
    document.getElementById('root')
);
