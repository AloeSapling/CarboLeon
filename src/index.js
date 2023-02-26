import ReactDOM from "react-dom/client";
import React, {Suspense} from 'react';
import App from './App'
import './i18next'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Suspense fallback={(<div>Loading...</div>)}>
        <App />
    </Suspense>
)