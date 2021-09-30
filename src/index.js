import React from 'react';
import ReactDOM from 'react-dom';

import "bulma/css/bulma.css";

import App from "./App";

// React.render(isinya apa?, tempatnya dimana?)
ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
)


// Halaman yang dipanggil oleh index.html
// Halaman tempat pemanggilan file App.js