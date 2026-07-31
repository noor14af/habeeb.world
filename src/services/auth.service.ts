import { ILoginRequest } from "interfaces/auth";
import client from "../utils/ApiClient";
import API_URLS from "./endPoints";

async function login(req: ILoginRequest): Promise<any> {
  console.log("API_URLS.LOGIN", API_URLS.LOGIN);
  return client.post(API_URLS.LOGIN, req);
}

async function signup(req: any): Promise<any> {
    console.log("API_URLS.SIGNUP", API_URLS.SIGNUP);
  return client.post(API_URLS.SIGNUP, req);
}

// const logout = () => {
//   localStorage.removeItem("user");
// };

export {
    //   logout,
  login,
  signup
};
