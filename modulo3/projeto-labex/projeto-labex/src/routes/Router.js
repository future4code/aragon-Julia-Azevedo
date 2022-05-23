import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage';
import AdminPage from '../pages/AdminPage';
import ErrorPage from "../pages/ErrorPage";

const Router = () => {
    return (
        
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path={"/admin"} element={<AdminPage />} />
                <Route path={"*"} element={<ErrorPage />} />   
            </Routes>
        </BrowserRouter>
    )
}

export default Router;