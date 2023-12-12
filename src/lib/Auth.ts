import axios from "axios";
import { ISignupResponse, IUserDetails } from "../types";
import toast from "react-hot-toast";

const baseUrl: string = import.meta.env.VITE_REACT_APP_BASE_URL;

export const login = async (
  userDetails: IUserDetails,
  setLoading: (x: boolean) => void,
  navigate : (x : string) => void
) => {
  setLoading(true);
  try {
    const response = await axios.post(
      `${baseUrl}/api/login`,
      userDetails
    );
    setLoading(false);
    const {token} = response?.data;
    localStorage.setItem('token' , token);
    toast.success("Logged in");
    navigate("/data");
  } catch (error: any) {
    const err = error?.response?.data;
    setLoading(false);
    toast.error(err.error);
    throw err;
  }
};

export const signup = async (userDetails: IUserDetails) => {
  try {
    const response: ISignupResponse = await axios.post(
      `${baseUrl}/api/register`,
      userDetails
    );
    console.log("signup response is", response);
  } catch (error) {
    console.log(error);
  }
};
