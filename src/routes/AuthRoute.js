import {Route, Routes} from "react-router-dom";
import MainLayout from "../layout/menu/MenuBar";
import Login from "../pages/auth/Login";

export default function() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route path="test"  element={<Login/>}></Route>
                </Route>
               
            </Routes> 
        </>
    );
}