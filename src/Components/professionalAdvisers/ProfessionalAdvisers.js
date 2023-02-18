import React,{useState} from 'react'
import Modal from "react-bootstrap/Modal";


import plus from "./images/plus.svg"
import doctor from './images/doctor.svg'
import lawyer from './images/lawyer.svg'
import accounting from './images/accounting.svg'
import businessman from './images/businessman.svg'
import notebook from './images/notebook.svg'




const ProfessionalAdvisers = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  return (
    <>

<div className="container-fluid">
        <div className="row m-0 px-0">
          <div className="col-md-2"></div>
          <div className="col-md-12">
              {/*Expenses */}
              <div className="row my-4">
                  <div className="col-md-12">
                    <div className="shadow px-4 py-4">
                      <h3 className="text-center">Professional Advisers</h3>

                      {/* Client Professional Advisers */}
                      <div>
                      <h3 className="">Client Professional Advisers</h3>

                           {/* 1 row */}
                           <div className="row">
                        <div className="col-md-6">
                              <div className="mb-3">
                            <label  className="form-label">
                            Do you have any Professional advisers?
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="ProfessionalAdvisers1radio" id="ProfessionalAdvisers1opt1" />
                            <label htmlFor="ProfessionalAdvisers1opt1" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="ProfessionalAdvisers1radio" id="ProfessionalAdvisers1opt2" />
                            <label htmlFor="ProfessionalAdvisers1opt2" className="label2">
                              <span>NO</span>
                            </label>
                          </div>
                            </div>
                              </div>    
                        </div>
                        <div className='col-md-6'>
                        <label  className="form-label">
                        Please enter the details of your professional advisers
                            </label>
                            <br />
                          
                          <button
                            className=" btn 
                            btn-outline-success "
                            onClick={handleShow}
                          >
                            <div className="iconContainer mx-1">
                            <img className="img-fluid" src={plus} alt="" />

                            </div>
                            Enter Details
                          </button>
                          </div>
                           </div>
                           {/* 1 row */}
                           
                           {/* --------------------------------------------- */}

                           <Modal
                            show={show}
                            onHide={handleClose}
                            backdrop="static"
                            className="modal-lg"
                            keyboard={false}
                          >
                            <Modal.Header
                              className="text-light modalBG "
                              closeButton
                            >
                              <Modal.Title className="fontStyle">
                              Professional Adviser Detail
                                <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />

                            </div>
                              </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {/* Professional Adviser Detail Form */}

                         <div className=''>

                        {/* Solicitor */}
                        <div className=' '>
                        <h3 className=''>
                        <div className="iconContainerLg mx-1">
                            <img className="img-fluid" src={lawyer} alt="" />

                            </div>
                            Solicitor
                        
                            </h3>
                        <div className="row">
                       <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="solicitorName" className="form-label">Name</   label>
                          <input type="text" className="form-control shadow inputDesign" id="solicitorName"
                           placeholder="Name"/>
                        </div>            
                        </div>
                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="solicitorCompany" className="form-label">Company</   label>
                          <input type="text" className="form-control shadow inputDesign"
                           id="solicitorCompany" placeholder="Company"/>
                        </div>            
                        </div>

                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="solicitorPhone" className="form-label">Phone</   label>
                          <input type="number" className="form-control shadow inputDesign"
                           id="solicitorPhone" placeholder="Phone"/>
                        </div>            
                        </div>

                         <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="solicitorEmail" className="form-label">Email</   label>
                          <input type="email" className="form-control shadow inputDesign" id="solicitorEmail"
                           placeholder="Email"/>
                        </div>            
                        </div>
                        </div>
                        </div>
                        {/* Solicitor */}

                          {/* Accountant */}
                          <div className='my-2 '>
                        <h3 className='mt-1'>
                        <div className="iconContainerLg mx-1">
                            <img className="img-fluid" src={accounting} alt="" />
                            </div>
                            Accountant</h3>
                        <div className="row">
                       <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="accountantName" className="form-label">Name</   label>
                          <input type="text" className="form-control shadow inputDesign" id="accountantName"
                           placeholder="Name"/>
                        </div>            
                        </div><div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="accountantCompany" className="form-label">Company</   label>
                          <input type="text" className="form-control shadow inputDesign"
                           id="accountantCompany" placeholder="Company"/>
                        </div>            
                        </div>
                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="accountantPhone" className="form-label">Phone</   label>
                          <input type="number" className="form-control shadow inputDesign"
                           id="accountantPhone" placeholder="Phone"/>
                        </div>            
                        </div>

                         <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="accountantEmail" className="form-label">Email</   label>
                          <input type="email" className="form-control shadow inputDesign" id="accountantEmail"
                           placeholder="Email"/>
                        </div>            
                        </div>
                        </div>
                          </div>
                         {/* Accountant */}

                           {/* InsuranceAdviser */}
                           <div className='my-2'>
                        <h3 className='mt-1'>
                        <div className="iconContainerLg mx-1">
                            <img className="img-fluid" src={businessman} alt="" />

                            </div>
                            Insurance Adviser</h3>
                        <div className="row">
                       <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="insuranceAdviserName" className="form-label">Name</   label>
                          <input type="text" className="form-control shadow inputDesign" id="insuranceAdviserName"
                           placeholder="Name"/>
                        </div>            
                        </div><div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="insuranceAdviserCompany" className="form-label">Company</   label>
                          <input type="text" className="form-control shadow inputDesign"
                           id="insuranceAdviserCompany" placeholder="Company"/>
                        </div>            
                        </div>
                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="insuranceAdviserPhone" className="form-label">Phone</   label>
                          <input type="number" className="form-control shadow inputDesign"
                           id="insuranceAdviserPhone" placeholder="Phone"/>
                        </div>            
                        </div>

                         <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="insuranceAdviserEmail" className="form-label">Email</   label>
                          <input type="email" className="form-control shadow inputDesign" id="insuranceAdviserEmail"
                           placeholder="Email"/>
                        </div>            
                        </div>
                        </div>
                          </div>
                         {/* Insurance adviser */}

                            {/* Doctor */}
                            <div className='my-2'>
                        <h3 className='mt-1'>
                        <div className="iconContainerLg mx-1">
                            <img className="img-fluid" src={doctor} alt="" />

                            </div>
                            Doctor
                            </h3>
                        <div className="row">
                       <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="doctorName" className="form-label">Name</   label>
                          <input type="text" className="form-control shadow inputDesign" id="doctorName"
                           placeholder="Name"/>
                        </div>            
                        </div><div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="doctorCompany" className="form-label">Company</   label>
                          <input type="text" className="form-control shadow inputDesign"
                           id="doctorCompany" placeholder="Company"/>
                        </div>            
                        </div>
                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="doctorPhone" className="form-label">Phone</   label>
                          <input type="number" className="form-control shadow inputDesign"
                           id="doctorPhone" placeholder="Phone"/>
                        </div>            
                        </div>

                         <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="doctorEmail" className="form-label">Email</   label>
                          <input type="email" className="form-control shadow inputDesign" id="doctorEmail"
                           placeholder="Email"/>
                        </div>            
                        </div>
                        </div>
                            </div>
                            {/* Doctor */}

                              {/* Other */}
                          <div className='my-2'>
                        <h3 className='mt-1'>
                        <div className="iconContainerLg mx-1">
                            <img className="img-fluid" src={businessman} alt="" />

                            </div>
                            Other</h3>
                        <div className="row">
                       <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="otherName" className="form-label">Name</   label>
                          <input type="text" className="form-control shadow inputDesign" id="otherName"
                           placeholder="Name"/>
                        </div>            
                        </div><div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="otherCompany" className="form-label">Company</   label>
                          <input type="text" className="form-control shadow inputDesign"
                           id="otherCompany" placeholder="Company"/>
                        </div>            
                        </div>
                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="otherPhone" className="form-label">Phone</   label>
                          <input type="number" className="form-control shadow inputDesign"
                           id="otherPhone" placeholder="Phone"/>
                        </div>            
                        </div>

                         <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="otherEmail" className="form-label">Email</   label>
                          <input type="email" className="form-control shadow inputDesign" id="otherEmail"
                           placeholder="Email"/>
                        </div>            
                        </div>
                        </div>
                          </div>
                         {/* Other */}
                         </div>
                         {/* Professional Adviser Detail Form */}
                            

                            

                        

                           
                            </Modal.Body>
                            <Modal.Footer>
                              <div className="col-md-12">
                                <button
                                  className="float-end btn w-25  bgColor modalBtn"
                                  onClick={handleClose}
                                >
                                  Save
                                </button>
                                <button
                                  className="float-end btn w-25  btn-outline  backBtn mx-3"
                                  onClick={handleClose}
                                >
                                  Cancel
                                </button>
                              </div>
                            </Modal.Footer>
                          </Modal>
                           {/* ---------------------------------------------------- */}
                      </div>
                      {/* Client Professional Advisers */}


                       {/* Partner Professional Advisers */}
                       <div>
                      <h3 className="">Partner Professional Advisers</h3>

                           {/* 1 row */}
                           <div className="row">
                        <div className="col-md-6">
                              <div className="mb-3">
                            <label  className="form-label">
                            Do you have any Professional advisers?
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="ProfessionalAdvisers2radio" id="ProfessionalAdvisers2opt1" />
                            <label htmlFor="ProfessionalAdvisers2opt1" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="ProfessionalAdvisers2radio" id="ProfessionalAdvisers2opt2" />
                            <label htmlFor="ProfessionalAdvisers2opt2" className="label2">
                              <span>NO</span>
                            </label>
                          </div>
                            </div>
                              </div>    
                        </div>
                        <div className='col-md-6'>
                        <label  className="form-label">
                        Please enter the details of your professional advisers
                            </label>
                            <br />
                          
                          <button
                            className=" btn 
                            btn-outline-success "
                            onClick={handleShow2}
                          >
                            <div className="iconContainer mx-1">
                            <img className="img-fluid" src={plus} alt="" />

                            </div>
                            Enter Details
                          </button>
                          </div>
                           </div>
                           {/* 1 row */}
                           
                           {/* --------------------------------------------- */}

                           <Modal
                            show={show2}
                            onHide={handleClose2}
                            backdrop="static"
                            className="modal-lg"
                            keyboard={false}
                          >
                            <Modal.Header
                              className="text-light modalBG "
                              closeButton
                            >
                              <Modal.Title className="fontStyle">
                              Professional Adviser Detail
                                <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />

                            </div>
                              </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {/* Professional Adviser Detail Form */}

                         <div className=''>

                        {/* Solicitor */}
                        <div className=' '>
                        <h3 className=''>
                        <div className="iconContainerLg mx-1">
                            <img className="img-fluid" src={lawyer} alt="" />

                            </div>
                            Solicitor
                        
                            </h3>
                        <div className="row">
                       <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="solicitorName2" className="form-label">Name</   label>
                          <input type="text" className="form-control shadow inputDesign" id="solicitorName2"
                           placeholder="Name"/>
                        </div>            
                        </div>
                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="solicitorCompany2" className="form-label">Company</   label>
                          <input type="text" className="form-control shadow inputDesign"
                           id="solicitorCompany2" placeholder="Company"/>
                        </div>            
                        </div>

                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="solicitorPhone2" className="form-label">Phone</   label>
                          <input type="number" className="form-control shadow inputDesign"
                           id="solicitorPhone2" placeholder="Phone" />
                        </div>            
                        </div>

                         <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="solicitorEmail2" className="form-label">Email</   label>
                          <input type="email" className="form-control shadow inputDesign" id="solicitorEmail2"
                           placeholder="Email"/>
                        </div>            
                        </div>
                        </div>
                        </div>
                        {/* Solicitor */}

                          {/* Accountant */}
                          <div className='my-2 '>
                        <h3 className='mt-1'>
                        <div className="iconContainerLg mx-1">
                            <img className="img-fluid" src={accounting} alt="" />
                            </div>
                            Accountant</h3>
                        <div className="row">
                       <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="accountantName2" className="form-label">Name</   label>
                          <input type="text" className="form-control shadow inputDesign" id="accountantName2"
                           placeholder="Name"/>
                        </div>            
                        </div><div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="accountantCompany2" className="form-label">Company</   label>
                          <input type="text" className="form-control shadow inputDesign"
                           id="accountantCompany2" placeholder="Company"/>
                        </div>            
                        </div>
                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="accountantPhone2" className="form-label">Phone</   label>
                          <input type="number" className="form-control shadow inputDesign"
                           id="accountantPhone2" placeholder="Phone"/>
                        </div>            
                        </div>

                         <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="accountantEmail2" className="form-label">Email</   label>
                          <input type="email" className="form-control shadow inputDesign" id="accountantEmail2"
                           placeholder="Email"/>
                        </div>            
                        </div>
                        </div>
                          </div>
                         {/* Accountant */}

                           {/* InsuranceAdviser */}
                           <div className='my-2'>
                        <h3 className='mt-1'>
                        <div className="iconContainerLg mx-1">
                            <img className="img-fluid" src={businessman} alt="" />

                            </div>
                            Insurance Adviser</h3>
                        <div className="row">
                       <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="insuranceAdviserName2" className="form-label">Name</   label>
                          <input type="text" className="form-control shadow inputDesign" id="insuranceAdviserName2"
                           placeholder="Name"/>
                        </div>            
                        </div><div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="insuranceAdviserCompany2" className="form-label">Company</   label>
                          <input type="text" className="form-control shadow inputDesign"
                           id="insuranceAdviserCompany2" placeholder="Company"/>
                        </div>            
                        </div>
                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="insuranceAdviserPhone2" className="form-label">Phone</   label>
                          <input type="number" className="form-control shadow inputDesign"
                           id="insuranceAdviserPhone2" placeholder="Phone"/>
                        </div>            
                        </div>

                         <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="insuranceAdviserEmail2" className="form-label">Email</   label>
                          <input type="email" className="form-control shadow inputDesign" id="insuranceAdviserEmail2"
                           placeholder="Email"/>
                        </div>            
                        </div>
                        </div>
                          </div>
                         {/* Insurance adviser */}

                            {/* Doctor */}
                            <div className='my-2'>
                        <h3 className='mt-1'>
                        <div className="iconContainerLg mx-1">
                            <img className="img-fluid" src={doctor} alt="" />

                            </div>
                            Doctor
                            </h3>
                        <div className="row">
                       <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="doctorName2" className="form-label">Name</   label>
                          <input type="text" className="form-control shadow inputDesign" id="doctorName2"
                           placeholder="Name"/>
                        </div>            
                        </div><div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="doctorCompany2" className="form-label">Company</   label>
                          <input type="text" className="form-control shadow inputDesign"
                           id="doctorCompany2" placeholder="Company"/>
                        </div>            
                        </div>
                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="doctorPhone2" className="form-label">Phone</   label>
                          <input type="number" className="form-control shadow inputDesign"
                           id="doctorPhone2" placeholder="Phone"/>
                        </div>            
                        </div>

                         <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="doctorEmail2" className="form-label">Email</   label>
                          <input type="email" className="form-control shadow inputDesign" id="doctorEmail2"
                           placeholder="Email"/>
                        </div>            
                        </div>
                        </div>
                            </div>
                            {/* Doctor */}

                              {/* Other */}
                          <div className='my-2'>
                        <h3 className='mt-1'>
                        <div className="iconContainerLg mx-1">
                            <img className="img-fluid" src={businessman} alt="" />

                            </div>
                            Other</h3>
                        <div className="row">
                       <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="otherName2" className="form-label">Name</   label>
                          <input type="text" className="form-control shadow inputDesign" id="otherName2"
                           placeholder="Name"/>
                        </div>            
                        </div><div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="otherCompany2" className="form-label">Company</   label>
                          <input type="text" className="form-control shadow inputDesign"
                           id="otherCompany2" placeholder="Company"/>
                        </div>            
                        </div>
                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="otherPhone2" className="form-label">Phone</   label>
                          <input type="number" className="form-control shadow inputDesign"
                           id="otherPhone2" placeholder="Phone"/>
                        </div>            
                        </div>

                         <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="otherEmail2" className="form-label">Email</   label>
                          <input type="email" className="form-control shadow inputDesign" id="otherEmail2"
                           placeholder="Email"/>
                        </div>            
                        </div>
                        </div>
                          </div>
                         {/* Other */}
                         </div>
                         {/* Professional Adviser Detail Form */}
                            

                            

                        

                           
                            </Modal.Body>
                            <Modal.Footer>
                              <div className="col-md-12">
                                <button
                                  className="float-end btn w-25  bgColor modalBtn"
                                  onClick={handleClose2}
                                >
                                  Save
                                </button>
                                <button
                                  className="float-end btn w-25  btn-outline  backBtn mx-3"
                                  onClick={handleClose2}
                                >
                                  Cancel
                                </button>
                              </div>
                            </Modal.Footer>
                          </Modal>
                           {/* ---------------------------------------------------- */}
                           </div>
                      {/* Partner Professional Advisers */}

                     </div>
                  </div>
             

                </div>
                {/*Expenses */}



   
    </div></div></div>
    </>
  )
}

export default ProfessionalAdvisers