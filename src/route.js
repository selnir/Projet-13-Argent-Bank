import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import User from "./pages/user/user";


const route=
<BrowserRouter key="RouterBank">
        <Routes >
          <Route path="/" element={<App />}>
          <Route index element={<Home />} /> 
          <Route path="Login" element={<Login />} /> 
          <Route path="/user"  element={<User />}/>
          </Route>
        </Routes>
</BrowserRouter>  

export default [route];
