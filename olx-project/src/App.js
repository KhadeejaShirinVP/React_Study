import React ,{useEffect,useContext}from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Home from './Pages/Home';
import { AuthContext, FirebaseContext } from './store/Context';


function App() {
  const {setUser}=useContext(AuthContext)
  const {firebase}= useContext(FirebaseContext)
useEffect(()=>{
  firebase.auth().onAuthStateChanged((user)=>{
    setUser(user) 
  })
})
  return (
    <div>
       <Router>
        <Routes>
        <Route exact path='/' element={<Home/>}>
        </Route>
        <Route path='/signup' element={<Signup/>} >
        </Route>
        <Route path='/login' element={<Login/>} >
        </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
