/**
 * @format
 */
import { useSelector } from "react-redux";
import type { IUserState } from "../redux/user/auth";
import type { RootState } from "../redux/store";

function useUserInfo(): IUserState {
    const userInfo: IUserState = useSelector((state: RootState) => state.user);
    return userInfo;
}

export default useUserInfo;
