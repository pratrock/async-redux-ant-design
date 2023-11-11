import axios from "axios";
import {
  SHOW_USERS,
  SHOW_USERS_SUCCESS,
  SHOW_USERS_FAILURE,
  UPDATE_USER,
  DELETE_USER,
  LIKE_USER,
} from "./userType";
export const showUsers = () => {
  return {
    type: SHOW_USERS,
  };
};

export const showUsersSuccess = (users) => {
  return {
    type: SHOW_USERS_SUCCESS,
    payload: users,
  };
};

export const showUsersFailure = (error) => {
  return {
    type: SHOW_USERS_FAILURE,
    payload: error,
  };
};

export const updateUser = (user) => {
  return { type: UPDATE_USER, payload: user };
};

export const deleteUser = (id) => {
  return {
    type: DELETE_USER,
    payload: id,
  };
};
export const likeUser = (id) => {
  return {
    type: LIKE_USER,
    payload: id,
  };
};
export const showUserData = () => {
  return (dispatch) => {
    dispatch(showUsers());
    axios
      .get("http://localhost:3001/api/users")
      .then((response) => {
        const users = response.data;
        dispatch(showUsersSuccess(users));
      })
      .catch((error) => {
        const errMsg = error.Message;
        dispatch(showUsersFailure(errMsg));
      });
  };
};
