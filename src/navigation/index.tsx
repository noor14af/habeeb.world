import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// import useUserInfo from "../hooks/useUserInfo";
import * as AuthLoadable from "./ScreenContainer/AuthLoad";
import AppRoutes from "./appRoutes";
import { Spinner } from "../components/Loader";

function Application() {
  // const { isLoggedIn } = useUserInfo();


  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path={AppRoutes.HOME} element={<AuthLoadable.Home />} />

        <Route path={AppRoutes.LOGIN} element={<AuthLoadable.Login />} />
        <Route path={AppRoutes.SIGNUP} element={<AuthLoadable.SignUp />} />
      </Routes>
    </Suspense>
  );
}

export default Application;