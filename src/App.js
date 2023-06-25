import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";

import AuthRoute from './routes/AuthRoute';
import PublicRoute from './routes/PublicRoute';
import Footer from './layout/footer/Footer';


function App() {
  
  return (
    <>
        <PublicRoute/>
        <AuthRoute/>
        <Footer/>
    </>
  );
}



export default App;

