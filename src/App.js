import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import AuthRoute from './routes/AuthRoute';
import NonAuthRoute from './routes/NonAuthRoute';
import Footer from './layout/footer/Footer';


function App() {

  let isLoggedIn = true;
  
  return (
    <>
        {
          isLoggedIn ? <AuthRoute/> : <NonAuthRoute/>
        }
         <Footer/>
    </>
  );
}

export default App;
