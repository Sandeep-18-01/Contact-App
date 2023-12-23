import "./App.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Navbar from "./Components/Contacts/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Contacts/Home";
import EditContact from "./Components/Contacts/EditContact";
import AddContacts from "./Components/Contacts/AddContact";
import {useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "./Components/Redux/ContactActions";


function App() {
  const dispatch = useDispatch()

  // dispatch fetchUsers 
  useEffect(() => {
      dispatch(fetchUsers())
  },[])

  return (
      <div className="App">
        {/* for notification from react-toastify */}
      <ToastContainer />
      {/* navbar component */}
      <Navbar />
      {/* adding routes */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/edit/:id" element={<EditContact/>} />
        <Route path="/add" element={<AddContacts/>} />
      </Routes>
    </div>
  );
}

export default App;
