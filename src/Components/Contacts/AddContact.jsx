import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../Redux/ContactActions";
import { Link } from "react-router-dom";

function AddContacts() {
  const contact = useSelector((state) => state);
  const [newContact, setNewContact] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    const checkEmail = contact.users.find(
      (ele) => ele.email === newContact.email
    );
    const checkPhone = contact.users.find(
      (ele) => ele.phone === newContact.phone
    );

    if (!newContact.name || !newContact.email || !newContact.phone) {
      return toast.warning("Please fill in all fields!");
    }

    if (checkEmail) {
      return toast.warning("This email is already exist");
    }

    if (checkPhone) {
      return toast.warning("This phone number is already exist");
    }

    setLoading(true);

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newContact),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setNewContact({
          name: "",
          email: "",
          phone: "",
        });
        toast.success("Contact Added Successfully");
        dispatch(addContact(data));
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("An error occurred while adding the contact");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="container py-5">
      <div className="row">
        <h1 className="display-3 text-center pt-5">Add Contact</h1>
        <div className="col-md-6 rounded shadow mx-auto">
          <form
            onSubmit={submitHandler}
            className="form-group  d-flex flex-column justify-around p-5 "
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="form-control m-2"
              value={newContact.name}
              onChange={(e) =>
                setNewContact({ ...newContact, name: e.target.value })
              }
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-control m-2"
              value={newContact.email}
              onChange={(e) =>
                setNewContact({ ...newContact, email: e.target.value })
              }
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="form-control m-2"
              value={newContact.phone}
              onChange={(e) =>
                setNewContact({ ...newContact, phone: e.target.value })
              }
            />
            <button
              className="btn btn-block btn-success m-2"
              type="submit"
              disabled={loading}
            >
              {loading ? "Adding..." : "Add Contact"}
            </button>
            <Link to="/" className="btn btn-block btn-primary m-2">
              Go back
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddContacts;
