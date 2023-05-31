import {Route, Routes} from "react-router-dom";
import MainLayout from "../layout/main/MainLayout";
import Login from "../pages/auth/Login";
import List from  "../pages/admin/List";

export default function() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route path="test"  element={<Login/>}></Route>
                    <Route path="admin/list"  element={<List/>}></Route>
                </Route>
               
            </Routes> 
        </>
    );
}