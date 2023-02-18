import React from 'react'
import "./Side.css"
// import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faReceipt, faTasks } from '@fortawesome/free-solid-svg-icons';

const SideBarrr = () => {

    
  
//   let Navigate = useNavigate();
  let manageTaskHandler=()=>{
    alert("manageTaskHandler")
  }
  

  return (
    <div className='container-fluid'>
      
    <div className="row">
       
        <div className="col-md-12 p-0">
        <div className="sideBar2 ">
       
          <h6 className='text-center'>Advisor Simplicity </h6>
      <li className="dropdown d-block">
      <li className=""><FontAwesomeIcon icon={faHome}/> Dashboard</li>
     </li>
    
      <li className="dropdown d-block">
  <li className=""><FontAwesomeIcon icon={faUser}/> Client</li>
  <div className="dropdown-content">
    <a href="#." className='py-1 '>Select Client</a>
    <a href="#." className='py-1 '>Edit Client</a>
    <a href="#." className='py-1 '>Goal and Objectives</a>
    <a href="#." className='py-1 '>Risk Profile</a>
    <a href="#." className='py-1 '>Scenario</a>
    <a href="#." className='py-1 '>Cash Flow</a>
    <a href="#." className='py-1 '>Document Wizard</a>
    <a href="#." className='py-1 '>Manage Task</a>
    <a href="#." className='py-1 '>Manage Document</a>






  </div>
      </li>
            
      <li className="dropdown d-block">
  <li className="dropbtn1"><FontAwesomeIcon icon={faReceipt}/> Report</li>
  <div className="dropdown-content">
    <a href="#." className='py-1'>CRM Report</a>
    </div>
      </li>   

      <li className="dropdown d-block">
      <li className=""><FontAwesomeIcon icon={faTasks}/> Task</li>
      <div className="dropdown-content">
    <a href="#." onClick={manageTaskHandler} className='py-1'>Manage Task</a>
    <a href="#." className='py-1'>Manage Document</a>

    </div>
     </li>
    
    </div>
        </div>

        <div className="col-md-10 p-0">
        </div>
      
    </div>
    
    
    </div>
   
  )
}

export default SideBarrr