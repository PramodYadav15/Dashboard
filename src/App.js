// import logo from './logo.svg';
// import './App.css';
import Login from "./../src/Component/Auth/Login/Login.js";
import Signup from "./../src/Component/Auth/Signup/Signup.js"
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Forgot from "./Component/Auth/FPassword/Forgot.js";
import Otp from "./Component/Auth/Otp/Otp.js";
import NewPassword from "./Component/Auth/newPass/Password.js";
// import Dashboard from "./Component/Assets/Dashboard.js";
import Dashboard from "./Component/Assets/Dashboard.js";
import User from "./Component/Assets/User.js";
import Role from "./Component/Assets/Role.js";
import Module from "./Component/Assets/Module.js";
import Permission from "./Component/Assets/Permission.js";
import Profile from "./Component/Profile/Profile.js";
function App() {
  return (
    <>
     <BrowserRouter>
          <Routes>
          <Route path="/login" element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/forgot' element={<Forgot/>}></Route>
          <Route path='/otp' element={<Otp/>}></Route>
          <Route path='/newpassword' element={<NewPassword/>}></Route>
          {/* <Route path='/dashboard' element={<Dashboard/>}></Route> */}
          <Route path="/"  element={<Dashboard/>}></Route>
          <Route path="/user"  element={<User/>}></Route>
          <Route path="/role"  element={<Role/>}></Route>
          <Route path="/module"  element={<Module/>}></Route>
          <Route path="/permission"  element={<Permission/>}></Route>
          <Route path="/profile"  element={<Profile/>}></Route>
          </Routes>
     </BrowserRouter>
 

     </>  
   
  );
}

export default App;
