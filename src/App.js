import { Outlet } from "react-router-dom";
import './main.css';
import Header from "./component/header/header";
import Footer from "./component/footer/footer";


const App = () => {
  return (
    <body> 
      <Header />
        <Outlet />
      <Footer />
    </body>
  );
}

export default App;
