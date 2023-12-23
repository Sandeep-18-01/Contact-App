import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Home.css";
import { Link } from "react-router-dom";
import { deleteContact } from "../Redux/ContactActions";

function Home() {
  // create state and dispatch function
  const contact = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="container-fluid">
      <div className="py-5 ">
        <Link to="add" type="button" className="btn btn-outline-primary btn-sm  ">
          Add Contact
        </Link>
      </div>

      {
        //if loading state is true
        contact.loading ? (
          <>loading....</>
        ) : //if error while making api call
        contact.error ? (
          <>{contact.error}</>
        ) : (
          // otherwise render the below code
          <table className="container">
            <thead>
              <tr className="table-heading bg-primary text-light">
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th> &nbsp; </th>
              </tr>
            </thead>
            <tbody>
              <>
                {contact.users &&
                  contact.users.map((user) => (
                    <tr key={Math.floor(Math.random() * 10000)}>
                      <td> {user.name} </td>
                      <td> {user.email} </td>
                      <td> {user.phone} </td>
                      <td>
                        {/* pass the user id to edit component when you click the edit button */}
                        <Link
                          to={`edit/${user.id}`}
                          type="button"
                          className=" m-2 text-decoration-none btn btn-sm btn-success px-2"
                        >
                          <i className="fas fa-edit"></i>
                        </Link>

                        <button
                          className="btn btn-sm btn-danger m-2 px-2"
                          //  pass the user email to deleteContact function
                          onClick={() => dispatch(deleteContact(user.email))}
                        >
                          <i className="fas fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
              </>
            </tbody>
          </table>
        )
      }
    </div>
  );
}

export default Home;
