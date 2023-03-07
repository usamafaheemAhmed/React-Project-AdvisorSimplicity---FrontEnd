import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";

import plus from "./images/plus.svg"
import doctor from './images/doctor.svg'
import lawyer from './images/lawyer.svg'
import accounting from './images/accounting.svg'
import businessman from './images/businessman.svg'
import notebook from './images/notebook.svg';

import * as Yup from 'yup';
import 'yup-phone';

import { ErrorMessage, Field, Form, Formik } from 'formik';

const ProfessionalAdvisors = () => {
  let letters = /^[a-zA-Z ]*$/;
  let phonePattern=/^[1-9][0-9]{9}$/;


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [advisorState, setAdvisorState] = useState(false);
  const [advisorState2, setAdvisorState2] = useState(false);


  let advisorHandler=(elem)=>{
    if (elem==="No"){
      setAdvisorState(false)
    }
    else{
      setAdvisorState(true)
    }
    
    }

    let advisorHandler2=(elem)=>{
      if (elem==="No"){
        setAdvisorState2(false)
      }
      else{
        setAdvisorState2(true)
      }
      
      }


  let Client_initialValues={
    solicitorName: '',
    solicitorCompany: '',
    solicitorPhone: '',
    solicitorEmail: '',

    accountantName: '',
    accountantCompany: '',
    accountantPhone: '',
    accountantEmail: '',

    insuranceAdvisorName: '',
    insuranceAdvisorCompany: '',
    insuranceAdvisorPhone: '',
    insuranceAdvisorEmail: '',

    doctorName: '',
    doctorCompany: '',
    doctorPhone: '',
    doctorEmail: '',

    otherName: '',
    otherCompany: '',
    otherPhone: '',
    otherEmail: ''
  }

  let Client_validationSchema = Yup.object({
    solicitorName:  Yup.string().matches(letters, "Only letters").required('Required') ,
    solicitorCompany:  Yup.string().matches(letters, "Only letters").required('Required') ,
    solicitorPhone: Yup.string().matches(phonePattern, "invalid phone number")
    .required('Required'),
    solicitorEmail: Yup.string().email("Invalid email format").required("Required"),

    accountantName:  Yup.string().matches(letters, "Only letters").required('Required') ,
    accountantCompany:  Yup.string().matches(letters, "Only letters").required('Required') ,
    accountantPhone: Yup.string().matches(phonePattern, "invalid phone number")
    .required('Required'),
    accountantEmail: Yup.string().email("Invalid email format").required("Required"),

    insuranceAdvisorName:  Yup.string().matches(letters, "Only letters").required('Required') ,
    insuranceAdvisorCompany:  Yup.string().matches(letters, "Only letters").required('Required') ,
    insuranceAdvisorPhone: Yup.string().matches(phonePattern, "invalid phone number")
    .required('Required'),
    insuranceAdvisorEmail: Yup.string().email("Invalid email format").required("Required"),

    doctorName:  Yup.string().matches(letters, "Only letters").required('Required') ,
    doctorCompany:  Yup.string().matches(letters, "Only letters").required('Required') ,
    doctorPhone: Yup.string().matches(phonePattern, "invalid phone number")
    .required('Required'),
    doctorEmail: Yup.string().email("Invalid email format").required("Required"),

    otherName:  Yup.string().matches(letters, "Only letters").required('Required') ,
    otherCompany:  Yup.string().matches(letters, "Only letters").required('Required') ,
    otherPhone: Yup.string().matches(phonePattern, "invalid phone number")
    .required('Required'),
    otherEmail: Yup.string().email("Invalid email format").required("Required"),
  })

  let Client_onSubmit = (Values) => {
console.log(Values)
  }

  let Partner_initialValues={
    solicitorName2: '',
    solicitorCompany2: '',
    solicitorPhone2: '',
    solicitorEmail2: '',

    accountantName2: '',
    accountantCompany2: '',
    accountantPhone2: '',
    accountantEmail2: '',

    insuranceAdvisorName2: '',
    insuranceAdvisorCompany2: '',
    insuranceAdvisorPhone2: '',
    insuranceAdvisorEmail2: '',

    doctorName2: '',
    doctorCompany2: '',
    doctorPhone2: '',
    doctorEmail2: '',

    otherName2: '',
    otherCompany2: '',
    otherPhone2: '',
    otherEmail2: ''
  }

  let Partner_validationSchema = Yup.object({
    solicitorName2:  Yup.string().matches(letters, "Only letters").required('Required') ,
    solicitorCompany2:  Yup.string().matches(letters, "Only letters").required('Required') ,
    solicitorPhone2: Yup.string().matches(phonePattern, "invalid phone number")
    .required('Required'),
    solicitorEmail2: Yup.string().email("Invalid email format").required("Required"),

    accountantName2:  Yup.string().matches(letters, "Only letters").required('Required') ,
    accountantCompany2:  Yup.string().matches(letters, "Only letters").required('Required') ,
    accountantPhone2: Yup.string().matches(phonePattern, "invalid phone number")
    .required('Required'),
    accountantEmail2: Yup.string().email("Invalid email format").required("Required"),

    insuranceAdvisorName2:  Yup.string().matches(letters, "Only letters").required('Required') ,
    insuranceAdvisorCompany2:  Yup.string().matches(letters, "Only letters").required('Required') ,
    insuranceAdvisorPhone2: Yup.string().matches(phonePattern, "invalid phone number")
    .required('Required'),
    insuranceAdvisorEmail2: Yup.string().email("Invalid email format").required("Required"),

    doctorName2:  Yup.string().matches(letters, "Only letters").required('Required') ,
    doctorCompany2:  Yup.string().matches(letters, "Only letters").required('Required') ,
    doctorPhone2: Yup.string().matches(phonePattern, "invalid phone number")
    .required('Required'),
    doctorEmail2: Yup.string().email("Invalid email format").required("Required"),

    otherName2:  Yup.string().matches(letters, "Only letters").required('Required') ,
    otherCompany2:  Yup.string().matches(letters, "Only letters").required('Required') ,
    otherPhone2: Yup.string().matches(phonePattern, "invalid phone number")
    .required('Required'),
    otherEmail2: Yup.string().email("Invalid email format").required("Required"),
  })

  let Partner_onSubmit = (Values) => {

  }

  let initialValues={
    ProfessionalAdvisors1radio:'No',
    ProfessionalAdvisors2radio:'No'
  }
  let onSubmit=(values)=>{
  console.log(values)
  }


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
                      <h3 className="text-center">Professional Advisors</h3>
<Formik
initialValues={initialValues}
onSubmit={onSubmit}
enableReinitialize
>
  {({values,handleChange})=>
<Form>


                      {/* Client Professional Advisors */}
                      <div>
                      <h3 className="">Client Professional Advisors</h3>

                           {/* 1 row */}
                           <div className="row">
                        <div className="col-md-6">
                              <div className="mb-3">
                            <label  className="form-label">
                            Do you have any Professional Advisors?
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="ProfessionalAdvisors1radio"
                             id="ProfessionalAdvisors1opt1" value="Yes"
                             onClick={()=>advisorHandler("Yes")} 
                             onChange={handleChange}
                             checked={values.ProfessionalAdvisors1radio==="Yes"}
                             />
                            <label htmlFor="ProfessionalAdvisors1opt1" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="ProfessionalAdvisors1radio"
                             id="ProfessionalAdvisors1opt2" value="No"
                             onClick={()=>advisorHandler("No")} 
                             onChange={handleChange}
                             checked={values.ProfessionalAdvisors1radio==="No"}
                           />
                            <label htmlFor="ProfessionalAdvisors1opt2" className="label2">
                              <span>NO</span>
                            </label>
                          </div>



                              
                            </div>
                              </div>    
                        </div>
                        {advisorState && <div className='col-md-6'>
                        <label  className="form-label">
                        Please enter the details of your professional Advisors
                            </label>
                            <br />
                          
                          <span
                            className=" btn h-50 w-50
                            btn-outline-success "
                            onClick={handleShow}
                          >
                            <div className="iconContainer mx-1">
                            <img className="img-fluid" src={plus} alt="" />

                            </div>
                            Enter Details
                          </span>
                        </div>}
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
                              Professional Advisor Detail
                                <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />

                            </div>
                              </Modal.Title>
                            </Modal.Header>
                           <Formik
                            initialValues={Client_initialValues}
                            validationSchema={Client_validationSchema}
                            onSubmit={Client_onSubmit}>
                          {({values , setFieldValue ,setValues,handleChange,formik})=>
                            <Form>
                            <Modal.Body>
                                {/* Professional Advisor Detail Form */}

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
                          <Field type="text" className="form-control shadow inputDesign" 
                          id="solicitorName" name='solicitorName' placeholder="Name"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='solicitorName' />
                        </div>            
                        </div>
                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="solicitorCompany" className="form-label">Company</   label>
                          <Field type="text" className="form-control shadow inputDesign"
                           id="solicitorCompany" name='solicitorCompany' placeholder="Company"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='solicitorCompany' />
                        </div>            
                        </div>

                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="solicitorPhone" className="form-label">Phone</   label>
                          <Field type="number" className="form-control shadow inputDesign"
                           id="solicitorPhone" name='solicitorPhone' placeholder="Phone"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='solicitorPhone' />
                        </div>            
                        </div>

                         <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="solicitorEmail" className="form-label">Email</   label>
                          <Field type="email" className="form-control shadow inputDesign" 
                          id="solicitorEmail" name='solicitorEmail' placeholder="Email"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='solicitorEmail' />
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
                          <Field type="text" className="form-control shadow inputDesign" 
                          id="accountantName" name='accountantName' placeholder="Name"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='accountantName' />
                        </div>            
                        </div><div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="accountantCompany" className="form-label">Company</   label>
                          <Field type="text" className="form-control shadow inputDesign"
                          id="accountantCompany" name='accountantCompany' placeholder="Company"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='accountantCompany' />
                        </div>            
                        </div>
                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="accountantPhone" className="form-label">Phone</   label>
                          <Field type="number" className="form-control shadow inputDesign"
                           id="accountantPhone" name='accountantPhone' placeholder="Phone"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='accountantPhone' />
                        </div>            
                        </div>

                         <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="accountantEmail" className="form-label">Email</   label>
                          <Field type="email" className="form-control shadow inputDesign" 
                          id="accountantEmail" name='accountantEmail' placeholder="Email"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='accountantEmail' />
                        </div>            
                        </div>
                        </div>
                          </div>
                         {/* Accountant */}

                           {/* InsuranceAdvisor */}
                           <div className='my-2'>
                        <h3 className='mt-1'>
                        <div className="iconContainerLg mx-1">
                            <img className="img-fluid" src={businessman} alt="" />

                            </div>
                            Insurance Advisor</h3>
                        <div className="row">
                       <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="insuranceAdvisorName" className="form-label">Name</   label>
                          <Field type="text" className="form-control shadow inputDesign" 
                          id="insuranceAdvisorName" name="insuranceAdvisorName" placeholder="Name"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='insuranceAdvisorName' />
                        </div>            
                        </div><div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="insuranceAdvisorCompany" className="form-label">Company</   label>
                          <Field type="text" className="form-control shadow inputDesign"
                          id="insuranceAdvisorCompany" name="insuranceAdvisorCompany" placeholder="Company"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='insuranceAdvisorCompany' />
                        </div>            
                        </div>
                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="insuranceAdvisorPhone" className="form-label">Phone</   label>
                          <Field type="number" className="form-control shadow inputDesign"
                          id="insuranceAdvisorPhone" name="insuranceAdvisorPhone" placeholder="Phone"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='insuranceAdvisorPhone' />
                        </div>            
                        </div>

                         <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="insuranceAdvisorEmail" className="form-label">Email</   label>
                          <Field type="email" className="form-control shadow inputDesign" 
                          id="insuranceAdvisorEmail" name="insuranceAdvisorEmail" placeholder="Email"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='insuranceAdvisorEmail' />
                        </div>            
                        </div>
                        </div>
                          </div>
                         {/* Insurance Advisor */}

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
                          <Field type="text" className="form-control shadow inputDesign" 
                          id="doctorName" name='doctorName' placeholder="Name"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='doctorName' />
                        </div>            
                        </div><div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="doctorCompany" className="form-label">Company</   label>
                          <Field type="text" className="form-control shadow inputDesign"
                           id="doctorCompany" name='doctorCompany' placeholder="Company"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='doctorCompany' />
                        </div>            
                        </div>
                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="doctorPhone" className="form-label">Phone</   label>
                          <Field type="number" className="form-control shadow inputDesign"
                           id="doctorPhone" name='doctorPhone' placeholder="Phone"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='doctorPhone'/>
                        </div>            
                        </div>

                         <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="doctorEmail" className="form-label">Email</   label>
                          <Field type="email" className="form-control shadow inputDesign" 
                          id="doctorEmail" name='doctorEmail' placeholder="Email"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='doctorEmail' />
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
                          <Field type="text" className="form-control shadow inputDesign" 
                          id="otherName" name='otherName' placeholder="Name"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='otherName' />
                        </div>            
                        </div><div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="otherCompany" className="form-label">Company</   label>
                          <Field type="text" className="form-control shadow inputDesign"
                           id="otherCompany" name='otherCompany' placeholder="Company"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='otherCompany' />
                        </div>            
                        </div>
                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="otherPhone" className="form-label">Phone</   label>
                          <Field type="number" className="form-control shadow inputDesign"
                           id="otherPhone" name='otherPhone' placeholder="Phone"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='otherPhone' />
                        </div>            
                        </div>

                         <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="otherEmail" className="form-label">Email</   label>
                          <Field type="email" className="form-control shadow inputDesign" id="otherEmail"
                          name='otherEmail' placeholder="Email"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='otherEmail' />
                        </div>            
                        </div>
                        </div>
                          </div>
                         {/* Other */}
                         </div>
                         {/* Professional Advisor Detail Form */}
                           
                            </Modal.Body>
                            <Modal.Footer>
                              <div className="col-md-12">
                                <button
                                  className="float-end btn w-25  bgColor modalBtn"
                                  // onClick={handleClose}
                                  type='submit'
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
                            </Form>
                            }
                           </Formik>
                          </Modal>
                           {/* ---------------------------------------------------- */}
                      </div>
                      {/* Client Professional Advisors */}


                       {/* Partner Professional Advisors */}
                       <div className='mt-5'>
                      <h3 className="">Partner Professional Advisors</h3>

                           {/* 1 row */}
                           <div className="row">
                        <div className="col-md-6">
                              <div className="mb-3">
                            <label  className="form-label">
                            Do you have any Professional Advisors?
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="ProfessionalAdvisors2radio" id="ProfessionalAdvisors2opt1"
                             onClick={()=>advisorHandler2("Yes")} 
                            value="Yes"
                             onChange={handleChange} 
                             checked={values.ProfessionalAdvisors2radio==="Yes"} />
                            <label htmlFor="ProfessionalAdvisors2opt1" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="ProfessionalAdvisors2radio" id="ProfessionalAdvisors2opt2"
                             onClick={()=>advisorHandler2("No")} 
                             value="No"
                             onChange={handleChange}
                             checked={values.ProfessionalAdvisors2radio==="No"} />
                            <label htmlFor="ProfessionalAdvisors2opt2" className="label2">
                              <span>NO</span>
                            </label>
                          </div>
                            </div>
                              </div>    
                        </div>
                        {advisorState2 &&  <div className='col-md-6'>
                        <label  className="form-label">
                        Please enter the details of your professional Advisors
                            </label>
                            <br />
                          
                          <span
                            className=" btn h-50 w-50
                            btn-outline-success "
                            onClick={handleShow2}
                          >
                            <div className="iconContainer mx-1">
                            <img className="img-fluid" src={plus} alt="" />

                            </div>
                            Enter Details
                          </span>
                          </div>}
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
                              Professional Advisor Detail
                                <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />

                            </div>
                              </Modal.Title>
                            </Modal.Header>
                            <Formik initialValues={Partner_initialValues} validationSchema={Partner_validationSchema} onSubmit={Partner_onSubmit}>
                              <Form>
                                <Modal.Body>
                                {/* Professional Advisor Detail Form */}

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
                          <Field type="text" className="form-control shadow inputDesign" 
                          id="solicitorName2" name='solicitorName2' placeholder="Name"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='solicitorName2' /> 
                        </div>            
                        </div>
                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="solicitorCompany2" className="form-label">Company</   label>
                          <Field type="text" className="form-control shadow inputDesign"
                           id="solicitorCompany2" name='solicitorCompany2' placeholder="Company"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='solicitorCompany2' />
                        </div>            
                        </div>

                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="solicitorPhone2" className="form-label">Phone</   label>
                          <Field type="number" className="form-control shadow inputDesign"
                           id="solicitorPhone2" name='solicitorPhone2' placeholder="Phone" />
                           <ErrorMessage component='div' className='text-danger fw-bold' name='solicitorPhone2' />
                        </div>            
                        </div>

                         <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="solicitorEmail2" className="form-label">Email</   label>
                          <Field type="email" className="form-control shadow inputDesign" 
                          id="solicitorEmail2" name='solicitorEmail2' placeholder="Email"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='solicitorEmail2' />
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
                          <Field type="text" className="form-control shadow inputDesign" 
                          id="accountantName2" name='accountantName2' placeholder="Name"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='accountantName2' />
                        </div>            
                        </div><div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="accountantCompany2" className="form-label">Company</   label>
                          <Field type="text" className="form-control shadow inputDesign"
                           id="accountantCompany2" name='accountantCompany2' placeholder="Company"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='accountantCompany2' />
                        </div>            
                        </div>
                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="accountantPhone2" className="form-label">Phone</   label>
                          <Field type="number" className="form-control shadow inputDesign"
                           id="accountantPhone2" name='accountantPhone2' placeholder="Phone"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='accountantPhone2' />
                        </div>            
                        </div>

                         <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="accountantEmail2" className="form-label">Email</   label>
                          <Field type="email" className="form-control shadow inputDesign" 
                          id="accountantEmail2" name='accountantEmail2' placeholder="Email"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='accountantEmail2' />
                        </div>            
                        </div>
                        </div>
                          </div>
                         {/* Accountant */}

                           {/* InsuranceAdvisor */}
                           <div className='my-2'>
                        <h3 className='mt-1'>
                        <div className="iconContainerLg mx-1">
                            <img className="img-fluid" src={businessman} alt="" />

                            </div>
                            Insurance Advisor</h3>
                        <div className="row">
                       <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="insuranceAdvisorName2" className="form-label">Name</   label>
                          <Field type="text" className="form-control shadow inputDesign" 
                          id="insuranceAdvisorName2" name='insuranceAdvisorName2' placeholder="Name"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='insuranceAdvisorName2' />
                        </div>            
                        </div><div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="insuranceAdvisorCompany2" className="form-label">Company</   label>
                          <Field type="text" className="form-control shadow inputDesign"
                           id="insuranceAdvisorCompany2" name='insuranceAdvisorCompany2' placeholder="Company"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='insuranceAdvisorCompany2' />
                        </div>            
                        </div>
                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="insuranceAdvisorPhone2" className="form-label">Phone</   label>
                          <Field type="number" className="form-control shadow inputDesign"
                           id="insuranceAdvisorPhone2" name='insuranceAdvisorPhone2' placeholder="Phone"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='insuranceAdvisorPhone2' />
                        </div>            
                        </div>

                         <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="insuranceAdvisorEmail2" className="form-label">Email</   label>
                          <Field type="email" className="form-control shadow inputDesign" 
                          id="insuranceAdvisorEmail2" name='insuranceAdvisorEmail2' placeholder="Email"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='insuranceAdvisorEmail2' />
                        </div>            
                        </div>
                        </div>
                          </div>
                         {/* Insurance Advisor */}

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
                          <Field type="text" className="form-control shadow inputDesign" 
                          id="doctorName2" name='doctorName2' placeholder="Name"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='doctorName2' />
                        </div>            
                        </div><div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="doctorCompany2" className="form-label">Company</   label>
                          <Field type="text" className="form-control shadow inputDesign"
                           id="doctorCompany2" name='doctorCompany2' placeholder="Company"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='doctorCompany2' />
                        </div>            
                        </div>
                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="doctorPhone2" className="form-label">Phone</   label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="doctorPhone2" name='doctorPhone2' placeholder="Phone"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='doctorPhone2' />
                        </div>            
                        </div>

                         <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="doctorEmail2" className="form-label">Email</   label>
                          <Field type="email" className="form-control shadow inputDesign" 
                          id="doctorEmail2" name='doctorEmail2' placeholder="Email"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='doctorEmail2' />
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
                          <Field type="text" className="form-control shadow inputDesign" 
                          id="otherName2" name='otherName2' placeholder="Name"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='otherName2' />
                        </div>            
                        </div><div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="otherCompany2" className="form-label">Company</   label>
                          <Field type="text" className="form-control shadow inputDesign"
                           id="otherCompany2" name='otherCompany2' placeholder="Company"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='otherCompany2' />
                        </div>            
                        </div>
                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="otherPhone2" className="form-label">Phone</   label>
                          <Field type="number" className="form-control shadow inputDesign"
                           id="otherPhone2" name='otherPhone2' placeholder="Phone"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='otherPhone2' />
                        </div>            
                        </div>

                         <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="otherEmail2" className="form-label">Email</   label>
                          <Field type="email" className="form-control shadow inputDesign" 
                          id="otherEmail2" name='otherEmail2' placeholder="Email"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='otherEmail2' />
                        </div>            
                        </div>
                        </div>
                          </div>
                         {/* Other */}
                         </div>
                         {/* Professional Advisor Detail Form */}
                            

                            

                        

                           
                            </Modal.Body>
                            <Modal.Footer>
                              <div className="col-md-12">
                                <button
                                  className="float-end btn w-25  bgColor modalBtn"
                                  // onClick={handleClose2}
                                  type='submit'
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
                              </Form>
                            </Formik>
                          </Modal>
                           {/* ---------------------------------------------------- */}
                       </div>
                      {/* Partner Professional Advisors */}
                     
                      <div className="row mt-5 mb-3">
                        <div className="col-md-12">
                          <button  type='submit' className="float-end btn w-25  bgColor modalBtn">Next</button>
                          <button className="float-end btn w-25  btn-outline  backBtn mx-3">Back</button>
                        </div>
                      </div>
                      </Form>
}
</Formik>
                     </div>
                  </div>
             

                </div>
                {/*Expenses */}



   
    </div></div></div>
    </>
  )
}

export default ProfessionalAdvisors