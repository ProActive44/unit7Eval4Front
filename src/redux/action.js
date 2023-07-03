import axios from "axios";
import { LOGIN_USER, SIGNUP_USER } from "./actionTypes";

let mainUrl = "https://employeemanagement-z8on.onrender.com";

const postUserAction = (payload) => {
  return {
    type: SIGNUP_USER,
    payload,
  };
};

const postNewUser = (newUser) => {
  try {
    axios
      .post(`${mainUrl}/signup`, newUser)
      .then((res) => alert("Signup successful"))
      .catch((err) => console.log(err));
  } catch (error) {}
};

export const signupUser = (newUser, goToLogin) => (dispatch) => {
  try {
    axios
      .get(`${mainUrl}/signup/:${newUser.email}`)
      .then((res) => {
        console.log(res);
        if (res.data.length !== 0) {
          alert("User Already present");
          return;
        }
        goToLogin();
        postNewUser(newUser);
      })
      .catch((err) => console.log(err));
  } catch (error) {}
};

const loginAction = (user) => {
  return {
    type: LOGIN_USER,
    payload: user,
  };
};

export const loginUser = (user, navigate) => (dispatch) => {
  try {
    axios.post(`${mainUrl}/login`, user).then((res) => {
      let token = res.data.token;
      if(!token){
        alert("Login Failed")
        return;
      }
      alert("Login Successful");
      localStorage.setItem("token", JSON.stringify(token));
    navigate("/dashboard");
    });
  } catch (error) {}
};

