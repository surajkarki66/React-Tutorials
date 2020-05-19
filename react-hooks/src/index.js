import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import AuthContextProvider from './context/auth-context';

ReactDOM.render(<AuthContextProvider>  {/* listing to the context provider every where from app and inside it */}
                    <App />
                </AuthContextProvider>,
                document.getElementById('root')
                );
