import { useState, useEffect, useRef } from "react";
import fetchData from "../utils/fetchData";

const MEDIA_API = import.meta.env.VITE_MEDIA_API;
const AUTH_API = import.meta.env.VITE_AUTH_API;
// TODO: add necessary imports
const useMedia = () => {
  // TODO: move mediaArray state here
  // TODO: move getMedia function here
  const [mediaArray, setMediaArray] = useState([]);

  useEffect(() => {
    try {
      const getMedia = async () => {
        const mediaData = await fetchData(MEDIA_API + "/media");

        const newArray = await Promise.all(
          mediaData.map(async (item) => {
            const result = await fetchData(AUTH_API + "/users/" + item.user_id);
            //combine the result/userdata to mediaData/json item

            return { ...item, username: result.username };
          }),
        );
        console.log(newArray);
        setMediaArray(newArray);
      };
      getMedia();
    } catch (error) {
      console.log("ERROR", error);
    }
  }, []);

  // TODO: move useEffect here
  return { mediaArray };
};

const useAuthentication = () => {
  const postLogin = async (inputs) => {
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    };

    try {
      const loginResult = await fetchData(
        import.meta.env.VITE_AUTH_API + "/auth/login",
        fetchOptions,
      );
      return loginResult;
    } catch (error) {
      console.log("ERROR in postLogin:", error);
      throw error;
    }
  };

  return {
    postLogin,
  };
};

const useUser = () => {
  const getUserByToken = async (token) => {
    const fetchOptions = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const userData = await fetchData(AUTH_API + "/users/token", fetchOptions);
      return userData;
    } catch (error) {
      console.log("ERROR in getUserByToken:", error);
      throw error;
    }
  };

  const postUser = async (inputs) => {
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    };

    try {
      const userResult = await fetchData(AUTH_API + "/users", fetchOptions);
      return userResult;
    } catch (error) {
      console.log("ERROR in postUser:", error);
      throw error;
    }
  };

  return {
    getUserByToken,
    postUser,
  };
};

export { useMedia, useAuthentication, useUser };
