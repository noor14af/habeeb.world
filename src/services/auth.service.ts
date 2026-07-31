import type { ILoginRequest } from "../interfaces/auth";
import client from "../utils/ApiClient";
import API_URLS from "./endPoints";

async function login(req: ILoginRequest): Promise<any> {
  return client.post(API_URLS.LOGIN, req);
}

export { login };
