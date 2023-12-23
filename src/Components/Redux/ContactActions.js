import axios from "axios";
// import Action types form contactType
import {
  ADD_CONTACT,
  EDIT_CONTACT,
  FETCH_USERS_FAILURE,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_REQUEST,
  DELETE_CONTACT,
} from "./ContactType";

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

export const addContact = (contact) => {
  return {
    type: ADD_CONTACT,
    payload: contact,
  };
};

export const editContact = (contact) => {
  return {
    type: EDIT_CONTACT,
    payload: contact,
  };
};

export const deleteContact = (id) => {
  return {
    type: DELETE_CONTACT,
    payload: id,
  };
};

// fetching contact from api with help of redux-thunk
export const fetchUsers = () => {
  return (dispatch) => {
    //   dispatching fetchUsersRequest
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data;
        //     //   dispatching fetchUsersSuccess with users
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        const errorMsg = error.message;
        // dispatching fetchUsersFailure with errorMsg
        dispatch(fetchUsersFailure(errorMsg));
      });
  };
};
