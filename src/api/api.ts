import axios from "axios";

const TIMEOUT = 5000;
const BASE_URL = "http://demo7252994.mockable.io";

const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});

const BREAKPOINTS = {
  verify: "/verify",
  register: "/register",
  login: "/login",
};

export const registerUser = async (data: {
  name: string;
  lastName: string;
  phoneNumber: string;
}) => {
  try {
    const response = await apiClient.post(BREAKPOINTS.register, data);
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

export const verifyCode = async (data: {
  phoneNumber: string;
  code: string;
}) => {
  try {
    const response = await apiClient.post(BREAKPOINTS.verify, data);
    return response.data;
  } catch (error) {
    console.error("Error verifying code:", error);
    throw error;
  }
};

export const loginUser = async (phoneNumber: string) => {
  try {
    const response = await apiClient.post(BREAKPOINTS.login, { phoneNumber });
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export const verifyUser = async (phoneNumber: string, code: string) => {
  try {
    const response = await apiClient.post(BREAKPOINTS.verify, {
      phoneNumber,
      code,
    });
    return response.data;
  } catch (error) {
    console.error("Verification error:", error);
    throw error;
  }
};
