import React from 'react'
import "./navBar.css";


import home from './images/home.svg'

import client from "./images/client.svg"
import files from "./images/files.svg"
import task from "./images/task.svg"

const TopNavBar = () => {
  return (
    <div className='container-fluid'>
          <div className="row  mainrow py-3">
          {/* <div className="col-2"></div> */}
          <div className="col-6">
          <h5 className='m-0'>Hi Fahad!</h5>
          <p className='m-0'>Fahad Tech Solution</p>
          </div>
          <div className="col-6">
          <p className='  float-end mt-2 m-0'>this is a notification message</p>

          </div>
      </div>
    </div>
  //  <>
  //  <div className="container-fluid">
  //   <div className="row ">
  //     {/* <div className="col-md-2">
  //       <div className='bg-dark text-light  p-2 border rounded'>
  //         <h6>Adviser Simplicity</h6>
  //         <p>
  //           <span className='sideImgContainer'>
  //           <img src={home} className="img-fluid " alt="" />
  //           </span>
  //            Dashboard</p>

  //            <span className='sideImgContainer '>
  //           <img src={client} className="img-fluid " alt="" />
  //           </span>
  //            <select className='mx-1 bg-dark text-white select'>
  //         <option selected>Client</option>
  // <option value="1">One</option>
  // <option value="2">Two</option>
  // <option value="3">Three</option>
  //            </select>
  //            <div className=' mt-2'>
  //            <p>
  //         <span className='sideImgContainer'>
  //           <img src={files} className="img-fluid " alt="" />
  //           </span>
  //           Report</p>
  //            </div>
           
  //         <p>
  //         <span className='sideImgContainer'>
  //           <img src={task} className="img-fluid " alt="" />
  //           </span>
  //           Task</p>



  //       </div>
  //     </div> */}


  //       {/* <div className="col-md-2">
  //       <div className='bg-dark text-light  p-2 border rounded' id='maincontainer'>
  //         <h6>Adviser Simplicity</h6>
          
  //         <ul>
  //           <li>
  //           <span className='sideImgContainer'>
  //           <img src={home} className="img-fluid " alt="" />
  //           </span>
  //            Dashboard
  //           </li>

  //           <li className=''>
  //           <span className='sideImgContainer '>
  //           <img src={client} className="img-fluid " alt="" />
  //           </span>
  //            <select className='mx-1 bg-dark text-white select'>
  //         <option selected>Client</option>
  // <option value="1">One</option>
  // <option value="2">Two</option>
  // <option value="3">Three</option>
  //            </select>
  //           </li>

  //           <li className=''>
  //           <span className='sideImgContainer '>
  //           <img src={files} className="img-fluid " alt="" />
  //           </span>
  //            <select className='mx-1 bg-dark text-white select'>
  //            <option selected>Report</option>
  //            <option value="1">One</option>
  
  //            </select>
  //           </li>

  //           <li className=''>
  //           <span className='sideImgContainer '>
  //           <img src={task} className="img-fluid " alt="" />
  //           </span>
  //            <select className='mx-1 bg-dark text-white select'>
  //            <option selected>Task</option>
  //            <option value="1">One</option>
  
  //            </select>
  //           </li>
  //         </ul>
  //           </div>
  //       </div> */}
  //   </div>
  //  </div>
   
  //  </>
  )
}

export default TopNavBar