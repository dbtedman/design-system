import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import {defineCustomElements} from 'design-system-react';

defineCustomElements();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
)
