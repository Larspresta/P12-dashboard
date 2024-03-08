import axios from "axios";

const API_URL = "http://localhost:3000";

export const GetUser = async (userId) => {
  try {
    const res = await axios.get(`${API_URL}/user/${userId}`);
    return res.data;
  } catch (error) {
    console.error("Failed to get user information", error);
    throw error;
  }
};

export const GetUserActivity = async (userId) => {
  try {
    const res = await axios.get(`${API_URL}/user/${userId}/activity`);
    return res.data;
  } catch (error) {
    console.error("Failed to get user activity", error);
    throw error;
  }
};

export const GetUserSessions = async (userId) => {
  try {
    const res = await axios.get(`${API_URL}/user/${userId}/average-sessions`);
    return res.data;
  } catch (error) {
    console.error("Failed to get user average sessions", error);
    throw error;
  }
};

export const GetUserPerformance = async (userId) => {
  try {
    const res = await axios.get(`${API_URL}/user/${userId}/performance`);
    return res.data;
  } catch (error) {
    console.error("Failed to get user performance", error);
    throw error;
  }
};
