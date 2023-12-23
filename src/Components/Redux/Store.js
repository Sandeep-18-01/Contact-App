import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import ContactReducer from "./ContactReducer";

// creating store and pass ContactReducer and thunk
const store = createStore(
  ContactReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
