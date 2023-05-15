import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AllClients() {
  let Navigate = useNavigate();
  const [Clients, setClients] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:7000/Client")
      .then((res) => setClients(res.data));
  });

  let UpdateClient = (Element) => {
    localStorage.setItem("EditClient", Element.Email);
    console.log(Element.Email);
    Navigate("/Edit-Client");
  };

  let DeleteClient = (Element) => {};
  return (
    <div className="container">
      <div className="col-md-12 my-5">
        <h3 className="text-center GreenColor fw-bold">Select a Client</h3>
      </div>

      <div className="col-md-1"></div>
      <div className="col-md-10 text-center border">
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>Title</th>
                <th>Given Name</th>
                <th>Mobile No</th>
                <th>Email</th>
                <th>Operations</th>
              </tr>
            </thead>
            <tbody>
              {Clients.map((Element) => {
                return (
                  <tr>
                    <td>{Element.Title}</td>
                    <td>{Element.GivenName}</td>
                    <td>{Element.Mobile}</td>
                    <td>{Element.Email}</td>
                    <td>
                      <button
                        onClick={() => UpdateClient(Element)}
                        className="my-1 mx-1"
                        id="UpdateButton"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => DeleteClient(Element)}
                        className="my-1 mx-1"
                        id="DeleteButton"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="col-md-1"></div>
    </div>
  );
}

export default AllClients;
