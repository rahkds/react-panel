import {Route, Routes} from "react-router-dom";
import Login from "../pages/auth/Login";


export default function() {
    return (
        <>
            <Routes>
                <Route path="/auth/login" element={ <Login/>}  />
            </Routes>
        </>
    );
}