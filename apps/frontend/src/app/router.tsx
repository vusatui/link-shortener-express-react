import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from "react-router-dom";
import { RegisterPage } from "../pages/register";
import { isAuthenticated } from "../features/auth";
import { FC } from "react";

const RootRedirect: FC = () => {
    if (!isAuthenticated()) return <Navigate to="/register" />;
};

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route index element={<RootRedirect />} />
            <Route path="register" element={<RegisterPage />} />
        </Route>,
    ),
);
