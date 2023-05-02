import {Route, Routes} from "react-router-dom";

export default function() {
    return (
        <>
            <Routes>
                <Route path={`*`}  element={<div>test</div>}></Route>)
            </Routes> 
        </>
    );
}