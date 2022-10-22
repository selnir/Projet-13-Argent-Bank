import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import User from "./pages/user/user";
import {useSelector} from "react-redux"




 function RouteBank (){

  const isLogged = useSelector((state) => state.login.isConnected)

return <BrowserRouter key="RouterBank">
        <Routes >
          <Route path="/" element={<App />}>
          <Route index element={<Home />} /> 
          <Route path="Login" element={ <Login />} /> 
          <Route path="/user"  element={ isLogged ? (<User />) : <Login />} />
          </Route>
        </Routes>
  </BrowserRouter>  
};
export default RouteBank;

