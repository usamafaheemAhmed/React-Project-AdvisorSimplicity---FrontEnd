import React from "react";
import "./Side.css";
// import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faReceipt,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";
const SideBarrr = () => {
  //   let Navigate = useNavigate();
  function EmptyLocalStorage() {
    localStorage.setItem("Edit", "false");
  }

  function SetLocalStorage() {
    localStorage.setItem("Edit", "true");
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 p-0">
          <div className="sideBar2 ">
            <h6 className="text-center">Advisor Simplicity </h6>

            <li className="dropdown d-block">
              <li className="">
                <FontAwesomeIcon icon={faHome} /> Dashboard
              </li>
            </li>

            <li className="dropdown d-block">
              <li className="">
                <FontAwesomeIcon icon={faUser} /> Client
              </li>
              <div className="dropdown-content">
                <a href="/" className="py-1" onClick={EmptyLocalStorage}>
                  Add Client
                </a>
                <a href="/All-Clients" className="py-1 ">
                  Select Client
                </a>
                <a
                  href="/All-Clients"
                  className="py-1 "
                  onClick={SetLocalStorage}
                >
                  Edit Client
                </a>
                <a href="Goals-And-Objectives" className="py-1 ">
                  Goals and Objectives
                </a>
                <a href="Risk-Profile" className="py-1 ">
                  Risk Profile
                </a>
                <a href="#" className="py-1 ">
                  Scenario
                </a>
                <a href="#" className="py-1 ">
                  Cash Flow
                </a>
                <a href="#" className="py-1 ">
                  Document Wizard
                </a>
                <a href="#" className="py-1 ">
                  Manage Task
                </a>
                <a href="#" className="py-1 ">
                  Manage Document
                </a>
              </div>
            </li>

            {/* <li onClick={ShowAllCompanies}><FontAwesomeIcon icon={faReceipt}/> Report</li>    */}
            <li className="dropdown d-block">
              <li className="dropbtn1">
                <FontAwesomeIcon icon={faReceipt} /> Report
              </li>
              <div className="dropdown-content">
                <a href="#" className="py-1">
                  CRM Report
                </a>
              </div>
            </li>
            {/* <li onClick={AddingCompany} className=""><FontAwesomeIcon icon={faTasks}/> Task</li> */}

            <li className="dropdown d-block">
              <li className="">
                <FontAwesomeIcon icon={faTasks} /> Task
              </li>
              <div className="dropdown-content">
                <a className="py-1">Manage Task</a>
                <a href="#" className="py-1">
                  Manage Document
                </a>
              </div>
            </li>
          </div>
        </div>

        <div className="col-md-10 p-0">{/* <TopNavBar/> */}</div>
      </div>
    </div>
  );
};

export default SideBarrr;
