import About from "./Container/About";
import Profile from "./Container/Profile";
import {useState} from 'react'
import { BrowserRouter as Router,Route, Routes,Link} from "react-router-dom";
import { AppContext } from "./AppContext";

function App() {
  const [state,setState]=useState(25)
  // let component;
  // if(state==='about'){
  //   component=<About />
  // }
  // if(state==='profile'){
  //   component=<Profile />
  // }
  return (
    <div className="App">
      <AppContext.Provider value={{data:state}}> 

      
      {/* <button onClick={()=>setState('about')}>About</button>
      <button onClick={()=>setState('profile')}>Profile</button> */}
      <Router>
        <Link to='/about'>About Page</Link>
        <Link to='/profile'>Profile Page</Link>
        <Routes>
          
          <Route element={<About />}  path='/about'/>
          {/* <Route element={<Profile />} path='/profile'/> */}
          <Route  element={<Profile/>} path='/profile'/>
        </Routes>
       </Router>
       </AppContext.Provider>
    </div>
  );
}

export default App;
