// import ActionTypes form contactType file
import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  ADD_CONTACT,
  EDIT_CONTACT,
  DELETE_CONTACT,
} from "./ContactType";

// create initialState
let initialState = {
  loading: true,
  users: [],
  error: "",
};

// Reducer function
const ContactReducer = (state = initialState, action) => {
  // handle actions
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };

    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        error: action.payload,
        users: [],
      };

    case ADD_CONTACT:
      return {
        ...state,
        // adding new contacts
        users: [...state.users, action.payload],
      };

    case EDIT_CONTACT:
      const users = [...state.users];
      //   find contact by id
      const findIndex = users.findIndex(
        (user) => user.id === parseInt(action.payload.id)
      );
      //   and replace the previous contact to edited one
      users[findIndex] = action.payload;
      return {
        ...state,
        users,
      };

    case DELETE_CONTACT: 
      const email = action.payload;
      // find by email and filter it 
      let contact = [...state.users].filter(ele => ele.email !== email);
      return {
        ...state,
        users : contact
      }
    //   return state byDefault
    default:
      return state;
  }
};

export default ContactReducer;
