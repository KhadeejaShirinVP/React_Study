import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseContext } from './store/Context';
import { AuthProvider } from './store/AuthProvider';
import firebase from './/firebase/config'

ReactDOM.render(
    
    <FirebaseContext.Provider value={{firebase}}>
        <AuthProvider>
             <App/>
        </AuthProvider>
    </FirebaseContext.Provider>
,document.getElementById('root'));



