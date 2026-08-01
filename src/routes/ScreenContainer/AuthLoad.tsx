import { lazy } from "react";

// Lazy load Login page
export const Login = lazy(() => import("../../pages/Auth/Login"));
export const SignUp = lazy(() => import("../../pages/Auth/SignUp"));
export const Home = lazy(() => import("../../pages/Public/Home"));