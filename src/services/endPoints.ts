const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;

const endPoints = {
  login: "login",
};

const API_URLS = {
  LOGIN: `${VITE_BASE_URL}${endPoints.login}`,
};

export default API_URLS;
