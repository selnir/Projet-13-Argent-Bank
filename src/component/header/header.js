import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { stopSession } from "../../features/loginSlice";
import { cleanUserProfile } from "../../features/userProfile";




function Header() {
  const isLogged = useSelector((state) => state.login.isConnected)
  const firstName = useSelector((state) => state.userProfile.firstName)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const  logOut = () => {
    dispatch(stopSession())
    dispatch(cleanUserProfile())
    navigate("/")
   
}

    return (<nav className="main-nav">
    <a className="main-nav-logo" href="./index.html">
      <Link to="/">
      <img
        className="main-nav-logo-image"
        src="./img/argentBankLogo.png"
        alt="Argent Bank Logo"
      /></Link>
      <h1 className="sr-only">Argent Bank</h1>
    </a>

    {isLogged ? (<div className="main-nav-item"><i className="fa fa-user-circle">
      </i>{firstName}<button onClick={logOut} ><i className="fa fa-sign-out">
        </i>Sign Out</button></div>) :<div className="main-nav-item">
        <Link  to="Login"><i className="fa fa-user-circle"></i>Sign In</Link>     
    </div>}

  </nav>
    );
    }
    export default Header;







