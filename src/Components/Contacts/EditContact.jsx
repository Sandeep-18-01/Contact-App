
// importing component/function and hooks 
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { editContact } from "../Redux/ContactActions";

// Edit component
function EditContact() {
  //fetching id form route from app.js using useParams
  const { id } = useParams();
  const contact = useSelector((state) => state);
  const [user, setUser] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    // return  if contact.user length is greater then 1
    if (contact.users.length < 1) {
      return;
    }
    //set the value of user with respect to id 
    setUser(contact.users.find((data) => data.id === parseInt(id)));
    
    // adding dependency of contact.users
  }, [contact.users]);

  // submit handler here we dipatch the editContact and show notification
  const submitHandler = (e) => {
    e.preventDefault();
    toast.success("Contact Updated Successfully");
    dispatch(editContact(user));
  };

  return (
    <div className="container py-5">
      <div className="row">
        <h1 className="display-3 text-center pt-5">Edit Contact {id} </h1>
        <div className="col-md-6 rounded shadow mx-auto">
          {/*  if loading is true the render */ }
          {contact.loading ? (
            <div>Loading.....</div>
            // if any error while editing
          ) : contact.error ? (
            <div>{contact.error}</div>
          ) : (
            // otherwise render
            user && (
              <form
                onSubmit={submitHandler}
                className="form-group  d-flex flex-column justify-around p-5 "
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="form-control m-2"
                  value={user.name}
                  onChange={(e) =>
                    setUser((prevuser) => ({
                      ...prevuser,
                      name: e.target.value,
                    }))
                  }
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={user.email}
                  onChange={(e) =>
                    setUser((prevuser) => ({
                      ...prevuser,
                      email: e.target.value,
                    }))
                  }
                  className="form-control m-2"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={user.phone}
                  onChange={(e) =>
                    setUser((prevuser) => ({
                      ...prevuser,
                      phone: e.target.value,
                    }))
                  }
                  className="form-control m-2"
                />
                <input
                  type="submit"
                  value="Update Contact"
                  className="btn btn-block btn-success m-2"
                />
                <Link to="/" className="btn btn-block btn-danger m-2">
                  Cancel
                </Link>
              </form>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default React.memo(EditContact);
