import axios from "axios";

const config = {
  baseURL: "http://localhost:5173",
  timeout: 5000,
  headers: {
    "X-Created-By": "Rishab Khivsara",
    "Content-Type": "application/json",
  },
};

const axiosInstance = axios.create(config);

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    console.log("config", config);
    config.headers = getHeaders();

    return config;
  },
  (error) => handleError(error)
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => handleResponse(response),
  (error) => handleError(error)
);

function handleError(error) {
  console.log("error", error);
  // Any status codes that falls outside the range of 2xx triggers this function
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    // The request was made but no response was received
    console.log(error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log("Error", error.message);
  }
  console.log(error.config);
  return Promise.reject(error);
}

function handleResponse(response) {
  console.log("response", response);
  return {
    ...response,
    data: response.data,
    status: response.status,
    message: response.statusText,
  };
}

function getHeaders() {
  const user = JSON.parse(localStorage.getItem("user") || "");
  const authToken = user?.adminAuthToken || "";

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${authToken}`,
  };

  return headers;
}

export default axiosInstance;
