import {Route, Routes} from "react-router-dom";
import MainLayout from "../layout/main/MainLayout";
import Login from "../pages/auth/Login";
import List from  "../pages/admin/List";
import AddUpdate from "../pages/admin/AddUpdate";
import { useNavigate, Navigate } from "react-router-dom";
import Constant from "../config/Constant";
import { useEffect } from "react";



export default function() {
    // const navigate = useNavigate();


    let isLoggedIn = (localStorage.getItem("login") == "1") ? true : false;
    if(!isLoggedIn) {
        return (
            <Routes>
                <Route path="*" element={<Navigate to={Constant.PUBLIC_ROUTES.LOGIN_URL} replace />}></Route>
            </Routes>
        );
      
    }

    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route path="test"  element={<Login/>}></Route>
                    <Route path="admin/list"  element={<List/>}></Route>
                    <Route path="admin/create"  element={<AddUpdate/>}></Route>
                </Route>
            </Routes> 
        </>
    );
}