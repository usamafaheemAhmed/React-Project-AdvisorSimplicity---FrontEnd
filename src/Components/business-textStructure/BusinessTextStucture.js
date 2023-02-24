import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";


import "./businessTextStructure.css"
import building from"./images/building.svg"
import plus from "./images/plus.svg"
import dealdone from "./images/deal-done.svg"
import businessman from "./images/businessman.svg"
import businessmen from "./images/businessmen.svg"
import trustbuilding from "./images/trustbuilding.svg"
import notebook from "./images/notebook.svg"

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

const BusinessTextStucture = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [showPartnership, setShowPartnership] = useState(false);
  const handleClosePartnership = () => setShowPartnership(false);
  const handleShowPartnership = () => setShowPartnership(true);

  const [showPartner, setShowPartner] = useState(false);
  const handleClosePartner = () => setShowPartner(false);
  const handleShowPartner = () => setShowPartner(true);

  const [showPrivate, setShowPrivate] = useState(false);
  const handleClosePrivate = () => setShowPrivate(false);
  const handleShowPrivate = () => setShowPrivate(true);

  const [showTrust, setShowTrust] = useState(false);
  const handleCloseTrust = () => setShowTrust(false);
  const handleShowTrust = () => setShowTrust(true);

  let initialValues =  {
    soleBusinessName: '',
    soleBusinessType: '',
    soleIncomeGenerated: '',
    soleBusinessExpenses: '',
    soleNetBusinessIncome: '',
    
    solePartnerBusinessName: '',
    solePartnerBusinessType: '',
    solePartnerIncomeGenerated: '',
    solePartnerBusinessExpenses: '',

    clientsShareofPartnership: '',
    partnersShareofPartnership: '',
    partnershipName: '',
    businessType: '',
    incomeGenerated: '',
    businessExpenses: '',

    privateNameOfCompany: '',
    privateNetAssetValueofCompany: '',
    privateTradingName: '',
    privateTotalRevenue: '',
    privateBusinessType: '',
    PrivatebusinessExpenses: '',
    privateDirectorsDetail: '',
    privateClientsshareholding: '',
    privatePartnersShareholding: '',
    privateClient: '',
    privatePartner: '',

    NameofTrust: '',
    netAssetValueofBusinessTrust: '',
    trustTradingName: '',
    trustTotalRevenue: '',
    trustBusinessType: '',
    trustBusinessExpenses: '',
    trustClientShareofDistribution: '',
    trustPartnerShareofDistribution: '',
    trustClient: '',
    trustPartner: ''
  }

  let validationSchema = Yup.object({
    soleBusinessName: Yup.string().required('Required'),
    soleBusinessType: Yup.string().required('Required'),
    soleIncomeGenerated: Yup.string().required('Required'),
    soleBusinessExpenses: Yup.number('Can only be numbers').required('Required'),
    soleNetBusinessIncome: Yup.number(),
    
    solePartnerBusinessName: Yup.string().required('Required'),
    solePartnerBusinessType: Yup.string().required('Required'),
    solePartnerIncomeGenerated: Yup.string().required('Required'),
    solePartnerBusinessExpenses: Yup.number('Can only be numbers').required('Required'),
    solePartnerNetBusinessIncome: Yup.number(),

    clientsShareofPartnership: Yup.number('Can only be numbers').required('Required'),
    partnersShareofPartnership: Yup.number('Can only be numbers').required('Required'),
    partnershipName: Yup.string().required('Required'),
    businessType: Yup.string().required('Required'),
    incomeGenerated: Yup.number('Can only be numbers').required('Required'),
    businessExpenses: Yup.number('Can only be numbers').required('Required'),

    privateNameOfCompany: Yup.string().required('Required'),
    privateNetAssetValueofCompany: Yup.number('Can only be numbers').required('Required'),
    privateTradingName: Yup.string().required('Required'),
    privateTotalRevenue: Yup.number('Can only be numbers').required('Required'),
    privateBusinessType: Yup.string().required('Required'),
    PrivatebusinessExpenses: Yup.number('Can only be numbers').required('Required'),
    privateDirectorsDetail: Yup.string().required('Required'),
    privateClientsshareholding: Yup.number('Can only be numbers').required('Required'),
    privatePartnersShareholding: Yup.number('Can only be numbers').required('Required'),
    privateClient: Yup.number('Can only be numbers').required('Required'),
    privatePartner: Yup.number('Can only be numbers').required('Required'),

    NameofTrust: Yup.string().required('Required'),
    netAssetValueofBusinessTrust: Yup.number('Can only be numbers').required('Required'),
    trustTradingName: Yup.string().required('Required'),
    trustTotalRevenue: Yup.number('Can only be numbers').required('Required'),
    trustBusinessType: Yup.string().required('Required'),
    trustBusinessExpenses: Yup.number('Can only be numbers').required('Required'),
    trustClientShareofDistribution: Yup.number('Can only be numbers').required('Required'),
    trustPartnerShareofDistribution: Yup.number('Can only be numbers').required('Required'),
    trustClient: Yup.number('Can only be numbers').required('Required'),
    trustPartner: Yup.number('Can only be numbers').required('Required'),
  })

  let onSubmit = (Values) => {
    console.log(Values)
  }

  let ClientModal_initialValues = {
    soleBusinessExpenses: '',
    soleRent: '',
    soleLeaseCosts: '',
    soleInsurances: '',
    soleStaffCosts: '',
    soleRunningCosts: '',
    soleTelephoneAndInternet: '',
    soleProfessionalFees: '',
    soleAllOther: ''
  }

  let ClientModal_validationSchema = Yup.object({
    soleBusinessExpenses: Yup.number(),
    soleRent: Yup.number().required('Required'),
    soleLeaseCosts: Yup.number().required('Required'),
    soleInsurances: Yup.number().required('Required'),
    soleStaffCosts: Yup.number().required('Required'),
    soleRunningCosts: Yup.number().required('Required'),
    soleTelephoneAndInternet: Yup.number().required('Required'),
    soleProfessionalFees: Yup.number().required('Required'),
    soleAllOther: Yup.number().required('Required')
  })

  let ClientModal_onSubmit = (Values) => {

  }


  let PartnerModal_initialValues = {
    solePartnerBusinessExpenses: '',
    solePartnerRent: '',
    soleLeaseCosts: '',
    solePartnerInsurances: '',
    solePartnerStaffCosts: '',
    solePartnerRunningCosts: '',
    solePartnerTelephoneAndInternet: '',
    solePartnerProfessionalFees: '',
    solePartnerAllOther: ''
  }

  let PartnerModal_validationSchema = Yup.object({
    solePartnerBusinessExpenses: Yup.number().required('Required'),
    solePartnerRent: Yup.number().required('Required'),
    soleLeaseCosts: Yup.number().required('Required'),
    solePartnerInsurances: Yup.number().required('Required'),
    solePartnerStaffCosts: Yup.number().required('Required'),
    solePartnerRunningCosts: Yup.number().required('Required'),
    solePartnerTelephoneAndInternet: Yup.number().required('Required'),
    solePartnerProfessionalFees: Yup.number().required('Required'),
    solePartnerAllOther: Yup.number().required('Required'),
  })

  let PartnerModal_onSubmit = (Values) => {

  }

  let Partnership_initialValues = {
    partnershipRent: '',
    partnershipLeaseCosts: '',
    partnershipInsurances: '',
    partnershipStaffCostWages: '',
    partnershipWageTakingByClient: '',
    partnerWageTakenByPartner: '',
    partnershipRunningCosts: '',
    partnershipTelephoneAndInternet: '',
    partnershipProfessionalFees: '',
    partnershipAllOther: ''
  }

  let Partnership_validationSchema = Yup.object({
    partnershipRent: Yup.number().required('Required'),
    partnershipLeaseCosts: Yup.number().required('Required'),
    partnershipInsurances: Yup.number().required('Required'),
    partnershipStaffCostWages: Yup.number().required('Required'),
    partnershipWageTakingByClient: Yup.number().required('Required'),
    partnerWageTakenByPartner: Yup.number().required('Required'),
    partnershipRunningCosts: Yup.number().required('Required'),
    partnershipTelephoneAndInternet: Yup.number().required('Required'),
    partnershipProfessionalFees: Yup.number().required('Required'),
    partnershipAllOther: Yup.number().required('Required'),
  })

  let Partnership_onSubmit = (Values) => {

  }

  let BusinessExpense_initialValues = {
    trustRent: '',
    trustLeaseCosts: '',
    trustInsurances: '',
    trustRunningCosts: '',
    trustStaffCostWages: '',
    trustWageTakingByClient: '',
    trustSuperForClient: '',
    trustWageTakenByPartner: '',
    trustSuperForPartner: '',
    trustTelephoneAndInternet: '',
    trustProfessionalFees: '',
    trustAllOther: '',
    trustLoanRepayments: ''
  }

  let BusinessExpense_validationSchema = Yup.object({
    trustRent: Yup.number().required('Required'),
    trustLeaseCosts: Yup.number().required('Required'),
    trustInsurances: Yup.number().required('Required'),
    trustRunningCosts: Yup.number().required('Required'),
    trustStaffCostWages: Yup.number().required('Required'),
    trustWageTakingByClient: Yup.number().required('Required'),
    trustSuperForClient: Yup.number().required('Required'),
    trustWageTakenByPartner: Yup.number().required('Required'),
    trustSuperForPartner: Yup.number().required('Required'),
    trustTelephoneAndInternet: Yup.number().required('Required'),
    trustProfessionalFees: Yup.number().required('Required'),
    trustAllOther: Yup.number().required('Required'),
    trustLoanRepayments: Yup.number().required('Required')
  })

  let BusinessExpense_onSubmit = (Values) => {
    
  }

  return (
    <>
      <div className="container-fluid mt-4 ">
        <div className="row m-0 px-0">
          <div className="col-md-2"></div>
          <div className="col-md-12">
            
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
              <Form>
            {/*------------------------------------Sole Trader - Client------------------------------------*/}
                  <div className="row">
                  <div className="col-md-12">
                    <div className=" shadow px-4 py-4">
                      <h3 className="heading">Sole Trader - Client
                      
                      <div className="iconContainerLg">
                                <img className="img-fluid" src={businessman} alt="" />

                                </div>
                      </h3>

                      {/*first row*/}
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label
                              htmlFor="soleBusinessName"
                              className="form-label"
                            >
                              Business Name
                            </label>
                            <Field
                              type="text"
                              className="form-control shadow inputDesign"
                              id="soleBusinessName"
                              name='soleBusinessName'
                              placeholder="Business Name"
                            />
                            <ErrorMessage component='div' className="text-danger fw-bold" name="soleBusinessName"/>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="mb-3">
                            <label
                              htmlFor="soleBusinessType"
                              className="form-label"
                            >
                              Business Type
                            </label>
                            <Field
                              type="text"
                              className="form-control inputDesign shadow"
                              id="soleBusinessType"
                              name="soleBusinessType"
                              placeholder="Business Type"
                            />
                            <ErrorMessage component='div' className="text-danger fw-bold" name='soleBusinessType'/>
                          </div>
                        </div>
                      </div>
                      {/*first row*/}

                      {/* second row */}
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label
                              htmlFor="soleIncomeGenerated"
                              className="form-label"
                            >
                              Income Generated
                            </label>
                            <Field
                              type="number"
                              className="form-control inputDesign shadow"
                              id="soleIncomeGenerated"
                              name='soleIncomeGenerated'
                              placeholder="Income Generated"
                            />
                            <ErrorMessage component='div' className="text-danger fw-bold" name="soleIncomeGenerated" />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="mb-3">
                            <label
                              htmlFor="soleBusinessExpenses"
                              className="form-label"
                            >
                              Business Expenses
                            </label>
                            <Field
                              type="number"
                              className="form-control inputDesign shadow"
                              id="soleBusinessExpenses"
                              name='soleBusinessExpenses'
                              placeholder="Business Expenses"
                            />
                            <ErrorMessage component='div' className="text-danger fw-bold" name="soleBusinessExpenses"/>
                          </div>
                        </div>
                      </div>
                      {/*second row*/}

                      {/* Third row */}
                      <div className="row ">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label htmlFor="" className="form-label">
                              Use Business Expense Schedule
                            </label>
                            <div>
                              <span
                                className=" btn w-50 h-50
                                btn-outline-success "
                                onClick={handleShow}
                              >
                                <div className="iconContainer mx-1">
                                <img className="img-fluid" src={plus} alt="" />

                                </div>
                                Use Business Schedule
                              </span>
                            </div>

                            {/* --------------------------------------------------------------- */}
                            <div>
                              {/* Business Expense Schedule */}
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
                                    Business Expense Schedule
                                    <div className="iconContainerLg">
                                <img className="img-fluid" src={notebook} alt="" />

                                </div>
                                  </Modal.Title>
                                </Modal.Header>
                                
                                  <Formik initialValues={ClientModal_initialValues} 
                                  validationSchema={ClientModal_validationSchema} 
                                  onSubmit={ClientModal_onSubmit} enableReinitialize>
                                  <Form>
                                  <Modal.Body>
                                  {/*  first row*/}
                                  <div className="row">
                                    {/*  Business Expenses */}
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="soleBusinessExpenses"
                                          className="form-label"
                                        >
                                          Business Expenses
                                        </label>
                                        <Field
                                          id="soleBusinessExpenses"
                                          name='soleBusinessExpenses'
                                          readOnly
                                          className="form-control inputDesign shadow"
                                          type="number"
                                        />
                                        <ErrorMessage component='div' className="text-danger fw-bold" name="soleBusinessExpenses"/>
                                      </div>
                                    </div>
                                    {/*  Business Expenses*/}

                                    {/* Rent*/}
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="soleRent"
                                          className="form-label"
                                        >
                                          Rent
                                        </label>
                                        <Field
                                          type="text"
                                          className="form-control inputDesign  shadow"
                                          id="soleRent"
                                          name='soleRent'
                                          placeholder="Rent"
                                        />
                                        <ErrorMessage component='div' className="text-danger fw-bold" name='soleRent'/>
                                      </div>
                                    </div>
                                    {/* soleRent*/}
                                  </div>

                                  {/* row 2 */}
                                  <div className="row">
                                    {/* Lease Costs */}
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="soleLeaseCosts"
                                          className="form-label"
                                        >
                                          Lease Costs
                                        </label>
                                        <Field
                                          type="number"
                                          className="form-control inputDesign shadow"
                                          id="soleLeaseCosts"
                                          name='soleLeaseCosts'
                                          placeholder="Lease Costs"
                                        />
                                        <ErrorMessage component='div' className="text-danger fw-bold" name='soleLeaseCosts'/>
                                      </div>
                                    </div>
                                    {/* Lease Costs */}

                                    {/* Insurances */}
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="soleInsurances"
                                          className="form-label"
                                        >
                                          Insurances
                                        </label>
                                        <Field
                                          type="number"
                                          className="form-control inputDesign shadow"
                                          id="soleInsurances"
                                          name='soleInsurances'
                                          placeholder="Insurances"
                                        />
                                        <ErrorMessage component='div' className="text-danger fw-bold" name='soleInsurances' />
                                      </div>
                                    </div>
                                    {/* Insurances */}
                                  </div>
                                  {/* row 2 */}

                                  {/* row 3 */}
                                  <div className="row">
                                    {/* Staff Costs */}
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="soleStaffCosts"
                                          className="form-label"
                                        >
                                          Staff Costs
                                        </label>
                                        <Field
                                          type="number"
                                          className="form-control inputDesign shadow"
                                          id="soleStaffCosts"
                                          name='soleStaffCosts'
                                          placeholder="Staff Costs "
                                        />
                                        <ErrorMessage component='div' className="text-danger fw-bold" name="soleStaffCosts" />
                                      </div>
                                    </div>
                                    {/* Staff Costs  */}

                                    {/* Running Costs */}
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="soleRunningCosts"
                                          className="form-label"
                                        >
                                          Running Costs
                                        </label>
                                        <Field
                                          type="number"
                                          className="form-control inputDesign shadow"
                                          id="soleRunningCosts"
                                          name='soleRunningCosts'
                                          placeholder="Running Costs"
                                        />
                                        <ErrorMessage component='div' className="text-danger fw-bold" name="soleRunningCosts" />
                                      </div>
                                    </div>
                                    {/* Running Costs */}
                                  </div>
                                  {/* row 3 */}

                                  {/* row 4 */}
                                  <div className="row">
                                    {/* Telephone and Internet*/}
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="soleTelephoneAndInternet"
                                          className="form-label"
                                        >
                                          Telephone and Internet
                                        </label>
                                        <Field
                                          type="number"
                                          className="form-control inputDesign shadow"
                                          id="soleTelephoneAndInternet"
                                          name='soleTelephoneAndInternet'
                                          placeholder="Telephone and Internet "
                                        />
                                        <ErrorMessage component='div' className="text-danger fw-bold" name="soleTelephoneAndInternet" />
                                      </div>
                                    </div>
                                    {/* Telephone and Internet */}

                                    {/* Professional fees (Accounting or Other)*/}
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="soleProfessionalFees"
                                          className="form-label"
                                        >
                                          Professional fees (Accounting or Other)
                                        </label>
                                        <Field
                                          type="number"
                                          className="form-control inputDesign shadow"
                                          id="soleProfessionalFees"
                                          name="soleProfessionalFees"
                                          placeholder="Professional Fees"
                                        />
                                        <ErrorMessage component='div' className="text-danger fw-bold" name="soleProfessionalFees" />
                                      </div>
                                    </div>
                                    {/* Professional fees (Accounting or Other) */}
                                  </div>
                                  {/* row 4 */}

                                  {/* row 5 */}
                                  <div className="row">
                                    {/* All Other*/}
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="soleAllOther"
                                          className="form-label"
                                        >
                                          All Other
                                        </label>
                                        <Field
                                          type="number"
                                          className="form-control inputDesign shadow"
                                          id="soleAllOther"
                                          name="soleAllOther"
                                          placeholder="All Other"
                                        />
                                        <ErrorMessage component='div' className="text-danger fw-bold" name="soleAllOther" />
                                      </div>
                                    </div>
                                    {/* All Other */}
                                  </div>
                                  {/* row 5*/}
                                  </Modal.Body>
                                  
                                
                                <Modal.Footer>
                                  <div className="col-md-12">
                                    <button
                                    type="submit"
                                      className="float-end btn w-25  bgColor modalBtn"
                                      // onClick={handleClose}
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
                                  </Formik>
                              </Modal>
                              {/* Business Expense Schedule */}
                            </div>

                            {/* --------------------------------------------------------------- */}
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="mb-3">
                            <label
                              htmlFor="soleNetBusinessIncome"
                              className="form-label"
                            >
                              Net Business Income
                            </label>
                            <Field
                              type="number"
                              className="form-control inputDesign shadow"
                              id="soleNetBusinessIncome"
                              name='soleNetBusinessIncome'
                              readOnly
                            />
                            <ErrorMessage component='div' className="text-danger fw-bold" name="soleNetBusinessIncome" />
                          </div>
                        </div>
                      </div>
                      {/*Third row*/}
                     
                    </div>
                  </div>
                </div>            
            {/*------------------------------------Sole Trader - Client------------------------------------*/}



            {/*------------------------------------Sole Trader - Partner------------------------------------*/}
            <div className="row my-5">
              <div className="col-md-12">
                <div className=" shadow px-4 py-4">
                  <h3 className="heading">Sole Trader - Partner
                  
                  <div className="iconContainerLg">
                            <img className="img-fluid" src={businessmen} alt="" />

                            </div>
                  </h3>
                      
                  {/*first row*/}
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="solePartnerBusinessName"
                          className="form-label"
                        >
                          Business Name
                        </label>
                        <Field
                          type="text"
                          className="form-control inputDesign shadow inputDesign"
                          id="solePartnerBusinessName"
                          name='solePartnerBusinessName'
                          placeholder="Business Name"
                        />
                        <ErrorMessage component='div' className='text-danger fw-bold' name='solePartnerBusinessName' />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="solePartnerBusinessType"
                          className="form-label"
                        >
                          Business Type
                        </label>
                        <Field
                          type="text"
                          className="form-control inputDesign shadow"
                          id="solePartnerBusinessType"
                          name='solePartnerBusinessType'
                          placeholder="Business Type"
                        />
                        <ErrorMessage component='div' className='text-danger fw-bold' name='solePartnerBusinessType' />
                      </div>
                    </div>
                  </div>
                  {/*first row*/}

                  {/* second row */}
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="solePartnerIncomeGenerated"
                          className="form-label"
                        >
                          Income Generated
                        </label>
                        <Field
                          type="number"
                          className="form-control inputDesign shadow"
                          id="solePartnerIncomeGenerated"
                          name="solePartnerIncomeGenerated"
                          placeholder="Income Generated"
                        />
                        <ErrorMessage component='div' className='text-danger fw-bold' name="solePartnerIncomeGenerated" />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="solePartnerBusinessExpenses"
                          className="form-label"
                        >
                          Business Expenses
                        </label>
                        <Field
                          type="number"
                          className="form-control inputDesign shadow"
                          id="solePartnerBusinessExpenses"
                          name="solePartnerBusinessExpenses"
                          placeholder="Business Expenses"
                        />
                        <ErrorMessage component='div' className='text-danger fw-bold' name="solePartnerBusinessExpenses" />
                      </div>
                    </div>
                  </div>
                  {/*second row*/}

                  {/* Third row */}
                  <div className="row ">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="" className="form-label">
                          Use Business Expense Schedule
                        
                        </label>
                        <div>
                          <span
                            className=" btn w-50 h-50
                            btn-outline-success "
                            onClick={handleShowPartner}
                          >
                             <div className="iconContainer mx-1">
                            <img className="img-fluid" src={plus} alt="" />

                            </div>
                            Use Business Schedule
                          </span>
                        </div>

                        {/* --------------------------------------------------------------- */}
                        <div>
                          {/* Business Expense Schedule */}
                          <Modal
                            show={showPartner}
                            onHide={handleClosePartner}
                            backdrop="static"
                            className="modal-lg"
                            keyboard={false}
                          >
                            <Modal.Header
                              className="text-light modalBG "
                              closeButton
                            >
                              <Modal.Title className="fontStyle">
                                Partner Business Expense Schedule
                                <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />

                            </div>
                              </Modal.Title>
                            </Modal.Header>
                            <Formik initialValues={PartnerModal_initialValues} validationSchema={PartnerModal_validationSchema} onSubmit={PartnerModal_onSubmit}>
                              <Form>
                              <Modal.Body>
                              {/*  first row*/}
                              <div className="row">
                                {/*  Business Expenses */}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="solePartnerBusinessExpenses"
                                      className="form-label"
                                    >
                                      Business Expenses
                                    </label>
                                    <Field
                                      id="solePartnerBusinessExpenses"
                                      name='solePartnerBusinessExpenses'
                                      readOnly
                                      className="form-control inputDesign shadow"
                                      type="number"
                                    />
                                  </div>
                                </div>
                                {/*  Business Expenses*/}

                                {/* Rent*/}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="solePartnerRent"
                                      className="form-label"
                                    >
                                      Rent
                                    </label>
                                    <Field
                                      type="text"
                                      className="form-control inputDesign  shadow"
                                      id="solePartnerRent"
                                      name='solePartnerRent'
                                      placeholder="Rent"
                                    />
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="solePartnerRent" />
                                  </div>
                                </div>
                                {/* soleRent*/}
                              </div>

                              {/* row 2 */}
                              <div className="row">
                                {/* Lease Costs */}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="soleLeaseCosts"
                                      className="form-label"
                                    >
                                      Lease Costs
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="soleLeaseCosts"
                                      name='soleLeaseCosts'
                                      placeholder="Lease Costs"
                                    />
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="soleLeaseCosts" />
                                  </div>
                                </div>
                                {/* Lease Costs */}

                                {/* Insurances */}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="solePartnerInsurances"
                                      className="form-label"
                                    >
                                      Insurances
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="solePartnerInsurances"
                                      name='solePartnerInsurances'
                                      placeholder="Insurances"
                                    />
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="solePartnerInsurances" />
                                  </div>
                                </div>
                                {/* Insurances */}
                              </div>
                              {/* row 2 */}

                              {/* row 3 */}
                              <div className="row">
                                {/* Staff Costs */}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="solePartnerStaffCosts"
                                      className="form-label"
                                    >
                                      Staff Costs
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="solePartnerStaffCosts"
                                      name='solePartnerStaffCosts'
                                      placeholder="Staff Costs "
                                    />
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="solePartnerStaffCosts" />
                                  </div>
                                </div>
                                {/* Staff Costs  */}

                                {/* Running Costs */}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="solePartnerRunningCosts"
                                      className="form-label"
                                    >
                                      Running Costs
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="solePartnerRunningCosts"
                                      name='solePartnerRunningCosts'
                                      placeholder="Running Costs"
                                    />
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="solePartnerRunningCosts" />
                                  </div>
                                </div>
                                {/* Running Costs */}
                              </div>
                              {/* row 3 */}

                              {/* row 4 */}
                              <div className="row">
                                {/* Telephone and Internet*/}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="solePartnerTelephoneAndInternet"
                                      className="form-label"
                                    >
                                      Telephone and Internet
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="solePartnerTelephoneAndInternet"
                                      name='solePartnerTelephoneAndInternet'
                                      placeholder="Telephone and Internet "
                                    />
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="solePartnerTelephoneAndInternet" />
                                  </div>
                                </div>
                                {/* Telephone and Internet */}

                                {/* Professional fees (Accounting or Other)*/}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="solePartnerProfessionalFees"
                                      className="form-label"
                                    >
                                      Professional fees (Accounting or Other)
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="solePartnerProfessionalFees"
                                      name='solePartnerProfessionalFees'
                                      placeholder="Professional Fees"
                                    />
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="solePartnerProfessionalFees" />
                                  </div>
                                </div>
                                {/* Professional fees (Accounting or Other) */}
                              </div>
                              {/* row 4 */}

                              {/* row 5 */}
                              <div className="row">
                                {/* All Other*/}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="solePartnerAllOther"
                                      className="form-label"
                                    >
                                      All Other
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="solePartnerAllOther"
                                      name="solePartnerAllOther"
                                      placeholder="All Other"
                                    />
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="solePartnerAllOther" />
                                  </div>
                                </div>
                                {/* All Other */}
                              </div>
                              {/* row 5*/}
                            </Modal.Body>
                            <Modal.Footer>
                              <div className="col-md-12">
                                <button
                                type="submit"
                                  className="float-end btn w-25  bgColor modalBtn"
                                  // onClick={handleClosePartner}
                                >
                                  Save
                                </button>
                                <button
                                  className="float-end btn w-25  btn-outline  backBtn mx-3"
                                  onClick={handleClosePartner}
                                >
                                  Cancel
                                </button>
                              </div>
                            </Modal.Footer>
                              </Form>
                            </Formik>
                          </Modal>
                          {/* Business Expense Schedule */}
                        </div>

                        {/* --------------------------------------------------------------- */}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="solePartnerNetBusinessIncome"
                          className="form-label"
                        >
                          Net Business Income
                        </label>
                        <Field
                          type="number"
                          className="form-control inputDesign shadow"
                          id="solePartnerNetBusinessIncome"
                          name="solePartnerNetBusinessIncome"
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                  {/*Third row*/}
                </div>
              </div>
            </div>
            {/*------------------------------------Sole Trader - Partner------------------------------------*/}



            {/*------------------------------------Partnership------------------------------------*/}
            <div className="row my-5">
              <div className="col-md-12">
                <div className=" shadow px-4 py-4">
                  <h3 className="heading">Partnership
                  <div className="iconContainerLg">
                    <img className="img-fluid" src={dealdone} alt="" />
                  </div>
                  </h3>
                  {/*first row*/}
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="clientsShareofPartnership"
                          className="form-label"
                        >
                          Client’s Share of Partnership
                        </label>
                        <Field
                          type="text"
                          className="form-control inputDesign shadow inputDesign"
                          id="clientsShareofPartnership"
                          name='clientsShareofPartnership'
                          placeholder="Client’s Share of Partnership"
                        />
                        <ErrorMessage component='div' className='text-danger fw-bold' name="clientsShareofPartnership" />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="partnersShareofPartnership"
                          className="form-label"
                        >
                          Partner’s Share of Partnership
                        </label>
                        <Field
                          type="text"
                          className="form-control inputDesign shadow"
                          id="partnersShareofPartnership"
                          name='partnersShareofPartnership'
                          placeholder="Partner’s Share of Partnership"
                        />
                        <ErrorMessage component='div' className='text-danger fw-bold' name="partnersShareofPartnership" />
                      </div>
                    </div>
                  </div>
                  {/*first row*/}

                  {/* second row */}
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="partnershipName" className="form-label">
                          Partnership Name
                        </label>
                        <Field
                          type="number"
                          className="form-control inputDesign shadow"
                          id="partnershipName"
                          name='partnershipName'
                          placeholder="Partnership Name"
                        />
                        <ErrorMessage component='div' className='text-danger fw-bold' name="partnershipName" />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="businessType" className="form-label">
                          Business Type
                        </label>
                        <Field
                          type="number"
                          className="form-control inputDesign shadow"
                          id="businessType"
                          name='businessType'
                          placeholder="Business Type"
                        />
                        <ErrorMessage component='div' className='text-danger fw-bold' name="businessType" />
                      </div>
                    </div>
                  </div>
                  {/*second row*/}

                  {/* Three row */}
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="incomeGenerated" className="form-label">
                          Income Generated
                        </label>
                        <Field
                          type="number"
                          className="form-control inputDesign shadow"
                          id="incomeGenerated"
                          name='incomeGenerated'
                          placeholder="Income Generated"
                        />
                        <ErrorMessage component='div' className='text-danger fw-bold' name="incomeGenerated" />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="businessExpenses"
                          className="form-label"
                        >
                          Business Expenses
                        </label>
                        <Field
                          type="number"
                          className="form-control inputDesign shadow"
                          id="businessExpenses"
                          name='businessExpenses'
                          placeholder="Business Expenses"
                        />
                        <ErrorMessage component='div' className='text-danger fw-bold' name="businessExpenses"/>
                      </div>
                    </div>
                  </div>
                  {/*Third row*/}

                  {/* four row */}
                  <div className="row ">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="" className="form-label">
                          Use Business Expense Schedule
                        </label>
                        <div>
                          <span
                            className=" btn btn-outline-success w-50 h-50"
                            onClick={handleShowPartnership}
                          >
                            <div className="iconContainer mx-1">
                            <img className="img-fluid" src={plus} alt="" />

                            </div>
                            Use Business Schedule
                          </span>
                        </div>

                        {/* -----------------------------Model------------------------------ */}
                        <div>
                          {/* Business Expense Schedule */}
                          <Modal
                            show={showPartnership}
                            onHide={handleClosePartnership}
                            backdrop="static"
                            className="modal-lg"
                            keyboard={false}
                          >
                            <Modal.Header
                              className="text-light modalBG "
                              closeButton
                            >
                              <Modal.Title className="fontStyle">
                                Business Expense Schedule
                                <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />

                            </div>
                              </Modal.Title>
                            </Modal.Header>
                            <Formik initialValues={Partnership_initialValues} validationSchema={Partnership_validationSchema} onSubmit={Partnership_onSubmit}>
                              <Form>
                              <Modal.Body>
                              {/*  first row*/}
                              <div className="row">
                                {/*  Business Expenses */}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="partnershipBusinessExpenses"
                                      className="form-label"
                                    >
                                      Business Expenses
                                    </label>
                                    <Field
                                      id="partnershipBusinessExpenses"
                                      readOnly
                                      className="form-control inputDesign shadow"
                                      type="number"
                                    />
                                  </div>
                                </div>
                                {/*  Business Expenses*/}

                                {/* Rent*/}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="partnershipRent"
                                      className="form-label"
                                    >
                                      Rent
                                    </label>
                                    <Field
                                      type="text"
                                      className="form-control inputDesign  shadow"
                                      id="partnershipRent"
                                      name='partnershipRent'
                                      placeholder="Rent"
                                    />
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="partnershipRent" />
                                  </div>
                                </div>
                                {/* soleRent*/}
                              </div>

                              {/* row 2 */}
                              <div className="row">
                                {/* Lease Costs */}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="partnershipLeaseCosts"
                                      className="form-label"
                                    >
                                      Lease Costs
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="partnershipLeaseCosts"
                                      name='partnershipLeaseCosts'
                                      placeholder="Lease Costs"
                                    />
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="partnershipLeaseCosts" />
                                  </div>
                                </div>
                                {/* Lease Costs */}

                                {/* Insurances */}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="partnershipInsurances"
                                      className="form-label"
                                    >
                                      Insurances
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="partnershipInsurances"
                                      name='partnershipInsurances'
                                      placeholder="Insurances"
                                    />
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="partnershipInsurances" />
                                  </div>
                                </div>
                                {/* Insurances */}
                              </div>
                              {/* row 2 */}

                              {/* row 3 */}
                              <div className="row">
                                {/* Staff Costs(Wages and Super) */}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="partnershipStaffCostWages"
                                      className="form-label"
                                    >
                                      Staff Costs(Wages and Super)
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="partnershipStaffCostWages"
                                      name='partnershipStaffCostWages'
                                      placeholder="Staff Costs "
                                    />
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="partnershipStaffCostWages" />
                                  </div>
                                </div>
                                {/* Staff Costs(Wages and Super)  */}

                                {/* Wage taking by Client*/}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="partnershipWageTakingByClient"
                                      className="form-label"
                                    >
                                      Wage taking by Client
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="partnershipWageTakingByClient"
                                      name='partnershipWageTakingByClient'
                                      placeholder="Wage taking by Client"
                                    />
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="partnershipWageTakingByClient" />
                                  </div>
                                </div>
                                {/*Wage taking by Client*/}
                              </div>
                              {/* row 3 */}

                              {/* row 4 */}
                              <div className="row">
                                {/* Wage taken by Partner*/}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="partnerWageTakenByPartner"
                                      className="form-label"
                                    >
                                      Wage taken by Partner
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="partnerWageTakenByPartner"
                                      name='partnerWageTakenByPartner'
                                      placeholder="Wage taken by Partner"
                                    />
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="partnerWageTakenByPartner" />
                                  </div>
                                </div>
                                {/* Wage taken by Partner*/}

                                {/* Running Costs(Utilities) */}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="partnershipRunningCosts"
                                      className="form-label"
                                    >
                                      Running Costs(Utilities)
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="partnershipRunningCosts"
                                      name='partnershipRunningCosts'
                                      placeholder="Running Costs(Utilities)"
                                    />
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="partnershipRunningCosts" />
                                  </div>
                                </div>
                                {/* Running Costs(Utilities) */}
                              </div>
                              {/* row 4 */}

                              {/* row 5 */}
                              <div className="row">
                                {/* Telephone and Internet*/}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="partnershipTelephoneAndInternet"
                                      className="form-label"
                                    >
                                      Telephone and Internet
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="partnershipTelephoneAndInternet"
                                      name='partnershipTelephoneAndInternet'
                                      placeholder="Telephone and Internet "
                                    />
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="partnershipTelephoneAndInternet" />
                                  </div>
                                </div>
                                {/* Telephone and Internet */}

                                {/* Professional fees*/}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="partnershipProfessionalFees"
                                      className="form-label"
                                    >
                                      Professional fees
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="partnershipProfessionalFees"
                                      name='partnershipProfessionalFees'
                                      placeholder="Professional Fees"
                                    />
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="partnershipProfessionalFees" />
                                  </div>
                                </div>
                                {/* Professional fees (Accounting or Other) */}
                              </div>
                              {/* row 5 */}

                              {/* row 6 */}
                              <div className="row">
                                {/* All Other*/}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="partnershipAllOther"
                                      className="form-label"
                                    >
                                      All Other
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="partnershipAllOther"
                                      name='partnershipAllOther'
                                      placeholder="All Other"
                                    />
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="partnershipAllOther" />
                                  </div>
                                </div>
                                {/* All Other */}
                              </div>
                              {/* row 6*/}
                            </Modal.Body>
                            <Modal.Footer>
                              <div className="col-md-12">
                                <button
                                type='submit'
                                  className="float-end btn w-25  bgColor modalBtn"
                                  // onClick={handleClosePartnership}
                                >
                                  Save
                                </button>
                                <button
                                  className="float-end btn w-25  btn-outline  backBtn mx-3"
                                  onClick={handleClosePartnership}
                                >
                                  Cancel
                                </button>
                              </div>
                            </Modal.Footer>
                              </Form>
                            </Formik>
                          </Modal>
                          {/* Business Expense Schedule */}
                        </div>
                        {/* ---------------------Model---------------------------- */}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="soleNetBusinessIncome"
                          className="form-label"
                        >
                          Net Business Income
                        </label>
                        <input
                          type="number"
                          className="form-control inputDesign shadow"
                          id="soleNetBusinessIncome"
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                  {/*four row*/}
                </div>
              </div>
            </div>
            {/*------------------------------------Partnership------------------------------------*/}



            {/*------------------------------------Private Company------------------------------------*/}
            <div className="row my-5">
              <div className="col-md-12">
                <div className=" shadow px-4 py-4">
                  <h3 className="heading">
                    Private Company
                    
                    <div className="iconContainerLg">
                            <img className="img-fluid" src={building} alt="" />

                            </div>
                    </h3>
                  {/*first row*/}
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="privateNameOfCompany"
                          className="form-label"
                        >
                          Name of Company
                        </label>
                        <Field
                          type="text"
                          className="form-control inputDesign shadow inputDesign"
                          id="privateNameOfCompany"
                          name='privateNameOfCompany'
                          placeholder="Name of Company"
                        />
                        <ErrorMessage component='div' className='text-danger fw-bold' name="privateNameOfCompany" />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="privateNetAssetValueofCompany"
                          className="form-label"
                        >
                          Net Asset Value of Company
                        </label>
                        <Field
                          type="text"
                          className="form-control inputDesign shadow"
                          id="privateNetAssetValueofCompany"
                          name='privateNetAssetValueofCompany'
                          placeholder="Net Asset Value of Company"
                        />
                        <ErrorMessage component='div' className='text-danger fw-bold' name="privateNetAssetValueofCompany" />
                      </div>
                    </div>
                  </div>
                  {/*first row*/}

                  {/* second row */}
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="privateTradingName"
                          className="form-label"
                        >
                          Trading Name
                        </label>
                        <Field
                          type="Text"
                          className="form-control inputDesign shadow"
                          id="privateTradingName"
                          name='privateTradingName'
                          placeholder="Trading Name"
                        />
                        <ErrorMessage component='div' className='text-danger fw-bold' name="privateTradingName" />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="privateTotalRevenue"
                          className="form-label"
                        >
                          Total Revenue
                        </label>
                        <Field
                          type="number"
                          className="form-control inputDesign shadow"
                          id="privateTotalRevenue"
                          name='privateTotalRevenue'
                          placeholder="Total Revenue"
                        />
                        <ErrorMessage component='div' className='text-danger fw-bold' name="privateTotalRevenue" />
                      </div>
                    </div>
                  </div>
                  {/*second row*/}

                  {/* Three row */}
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="privateBusinessType"
                          className="form-label"
                        >
                          Business Type
                        </label>
                        <Field
                          type="text"
                          className="form-control inputDesign shadow"
                          id="privateBusinessType"
                          name='privateBusinessType'
                          placeholder="Business Type"
                        />
                        <ErrorMessage component='div' className='text-danger fw-bold' name="privateBusinessType" />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="PrivatebusinessExpenses"
                          className="form-label"
                        >
                          Business Expenses
                        </label>
                        <Field
                          type="number"
                          className="form-control inputDesign shadow"
                          id="PrivatebusinessExpenses"
                          name='PrivatebusinessExpenses'
                          placeholder="Business Expenses"
                        />
                        <ErrorMessage component='div' className='text-danger fw-bold' name="PrivatebusinessExpenses" />
                      </div>
                    </div>
                  </div>
                  {/*Third row*/}

                  {/* four row */}
                  <div className="row ">
                  <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="privateDirectorsDetail" className="form-label">
                        Directors Detail
                        </label>
                        <Field
                          id="privateDirectorsDetail"
                          name='privateDirectorsDetail'
                          className="form-select shadow  inputDesign"
                          as='select'
                        >
                          <option value=''>Select</option>
                          <option value="Client">Client</option>
                          <option value="Partner">Partner</option>
                          <option value="Client & Partner">Client & Partner</option>
                          
                        </Field>
                        <ErrorMessage component='div' className='text-danger fw-bold' name="privateDirectorsDetail" />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="" className="form-label">
                          Use Business Expense Schedule
                        </label>
                        <div>
                          <span
                            className=" btn w-50 h-50
                            btn-outline-success "
                            onClick={handleShowPrivate}
                          >
                             <div className="iconContainer mx-1">
                            <img className="img-fluid" src={plus} alt="" />

                            </div>
                            Use Business Schedule
                          </span>
                        </div>

                        {/* -----------------------------Model------------------------------ */}
                        <div>
                          {/* Business Expense Schedule */}
                          <Modal
                            show={showPrivate}
                            onHide={handleClosePrivate}
                            backdrop="static"
                            className="modal-lg"
                            keyboard={false}
                          >
                            <Modal.Header
                              className="text-light modalBG "
                              closeButton
                            >
                              <Modal.Title className="fontStyle">
                                Business Expense Schedule
                                <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />

                            </div>
                              </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              {/*  first row*/}
                              <div className="row">
                                {/*  Business Expenses */}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="privateBusinessExpenses"
                                      className="form-label"
                                    >
                                      Business Expenses
                                    </label>
                                    <input
                                      id="privateBusinessExpenses"
                                      readOnly
                                      className="form-control inputDesign shadow"
                                      type="number"
                                    />
                                  </div>
                                </div>
                                {/*  Business Expenses*/}

                                {/* Rent*/}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="privateRent"
                                      className="form-label"
                                    >
                                      Rent
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control inputDesign  shadow"
                                      id="privateRent"
                                      placeholder="Rent"
                                    />
                                  </div>
                                </div>
                                {/* soleRent*/}
                              </div>

                              {/* row 2 */}
                              <div className="row">
                                {/* Lease Costs */}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="privateLeaseCosts"
                                      className="form-label"
                                    >
                                      Lease Costs
                                    </label>
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="privateLeaseCosts"
                                      placeholder="Lease Costs"
                                    />
                                  </div>
                                </div>
                                {/* Lease Costs */}

                                {/* Insurances */}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="privateInsurances"
                                      className="form-label"
                                    >
                                      Insurances
                                    </label>
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="privateInsurances"
                                      placeholder="Insurances"
                                    />
                                  </div>
                                </div>
                                {/* Insurances */}
                              </div>
                              {/* row 2 */}

                              {/* row 3 */}
                              <div className="row">

                                
                                 {/* Running Costs(Utilities) */}
                                 <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="privateRunningCosts"
                                      className="form-label"
                                    >
                                      Running Costs(Utilities)
                                    </label>
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="privateRunningCosts"
                                      placeholder="Running Costs(Utilities)"
                                    />
                                  </div>
                                </div>
                                {/* Running Costs(Utilities) */}
                                {/* Staff Costs(Wages and Super) */}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="privateStaffCostWages"
                                      className="form-label"
                                    >
                                      Staff Costs(Wages and Super)
                                    </label>
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="privateStaffCostWages"
                                      placeholder="Staff Costs "
                                    />
                                  </div>
                                </div>
                                {/* Staff Costs(Wages and Super)  */}


                               
                              </div>
                              {/* row 3 */}

                               {/* row 4 */}
                               <div className="row">
                              
                                {/* Wage taking by Client*/}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="privateWageTakingByClient"
                                      className="form-label"
                                    >
                                      Wage taking by Client
                                    </label>
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="privateWageTakingByClient"
                                      placeholder="Wage taking by Client"
                                    />
                                  </div>
                                </div>
                                {/*Wage taking by Client*/}

                                 {/* Super For Client*/}
                                 <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="privateSuperForClient"
                                      className="form-label"
                                    >
                                      Super For Client
                                    </label>
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="privateSuperForClient"
                                      placeholder="Super For Client"
                                    />
                                  </div>
                                </div>
                                {/* Super For Client*/}
                              </div>
                              {/* row 4 */}

                              {/* row 5 */}
                              <div className="row">
                                {/* Wage taken by Partner*/}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="privateWageTakenByPartner"
                                      className="form-label"
                                    >
                                      Wage taken by Partner
                                    </label>
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="privateWageTakenByPartner"
                                      placeholder="Wage taken by Partner"
                                    />
                                  </div>
                                </div>
                                {/* Wage taken by Partner*/}

                                   {/* Super For Partner*/}
                                   <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="privateSuperForPartner"
                                      className="form-label"
                                    >
                                      Super For Partner
                                    </label>
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="privateSuperForPartner"
                                      placeholder="Super For Partner"
                                    />
                                  </div>
                                </div>
                                {/* Super For Partner*/}
                              </div>
                              {/* row 5 */}

                              {/* row 6 */}
                              <div className="row">
                                {/* Telephone and Internet*/}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="privateTelephoneAndInternet"
                                      className="form-label"
                                    >
                                      Telephone and Internet
                                    </label>
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="privateTelephoneAndInternet"
                                      placeholder="Telephone and Internet "
                                    />
                                  </div>
                                </div>
                                {/* Telephone and Internet */}

                                {/* Professional fees*/}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="privateProfessionalFees"
                                      className="form-label"
                                    >
                                      Professional fees
                                    </label>
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="privateProfessionalFees"
                                      placeholder="Professional Fees"
                                    />
                                  </div>
                                </div>
                                {/* Professional fees (Accounting or Other) */}
                              </div>
                              {/* row 6 */}

                              {/* row 7 */}
                              <div className="row">
                                {/* All Other*/}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="privateAllOther"
                                      className="form-label"
                                    >
                                      All Other
                                    </label>
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="privateAllOther"
                                      placeholder="All Other"
                                    />
                                  </div>
                                </div>
                                {/* All Other */}

                                  {/* Loan Repayments*/}
                                  <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="privateLoanRepayments"
                                      className="form-label"
                                    >
                                      Loan Repayments
                                    </label>
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="privateLoanRepayments"
                                      placeholder="Loan Repayments"
                                    />
                                  </div>
                                </div>
                                {/* Loan Repayments*/}
                              </div>
                              {/* row 7*/}
                            </Modal.Body>
                            <Modal.Footer>
                              <div className="col-md-12">
                                <button
                                type='submit'
                                  className="float-end btn w-25  bgColor modalBtn"
                                  // onClick={handleClosePrivate}
                                >
                                  Save
                                </button>
                                <button
                                  className="float-end btn w-25  btn-outline  backBtn mx-3"
                                  onClick={handleClosePrivate}
                                >
                                  Cancel
                                </button>
                              </div>
                            </Modal.Footer>
                          </Modal>
                          {/* Business Expense Schedule */}
                        </div>
                        {/* ---------------------Model---------------------------- */}
                      
                      </div>
                    </div>                  
                  </div>
                  {/*four row*/}

                   {/* Five row */}
                   <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="privateClientsshareholding"
                          className="form-label"
                        >
                          Client’s shareholding %
                        </label>
                        <Field
                          type="text"
                          className="form-control inputDesign shadow"
                          id="privateClientsshareholding"
                          name='privateClientsshareholding'
                          placeholder="Client’s shareholding %"
                        />
                        <ErrorMessage component='div' className='text-danger fw-bold' name="privateClientsshareholding" />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="privatePartnersShareholding"
                          className="form-label"
                        >
                          Partner’s shareholding %
                        </label>
                        <Field
                          type="number"
                          className="form-control inputDesign shadow"
                          id="privatePartnersShareholding"
                          name='privatePartnersShareholding'
                          placeholder="Partner’s shareholding %"
                        />
                        <ErrorMessage component='div' className='text-danger fw-bold' name="privatePartnersShareholding" />
                      </div>
                    </div>
                  </div>
                  {/*Five row*/}

                   {/*  row 6*/}
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label  className="form-label">
                      Dividends Taken As Cash?
                      </label>
                     
                             {/* switch button style */}
                                <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="dividendsTakenradio" id="dividendsTakenopt1" />
                                <label htmlFor="dividendsTakenopt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="dividendsTakenradio" id="dividendsTakenopt2" />
                                <label htmlFor="dividendsTakenopt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>
                                </div>
                              {/* switch button style */}
                      

                    </div>
                  </div>

                  <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="privateTotalNetProfitAfterTax"
                          className="form-label"
                        >
                         Total Net Profit After Tax
                        </label>
                        <input
                          type="number"
                          className="form-control inputDesign shadow"
                          id="privateTotalNetProfitAfterTax"
                          placeholder=" Total Net Profit After Tax"
                          readOnly
                        />
                      </div>
                    </div>
                </div>
                {/*  row 6*/}

                 {/* 7 row */}
                 <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="privateClient"
                          className="form-label"
                        >
                          Client %
                        </label>
                        <Field
                          type="number"
                          className="form-control inputDesign shadow"
                          id="privateClient"
                          name='privateClient'
                          placeholder="Client %"
                        />
                        <ErrorMessage component='div' className='text-danger fw-bold' name="privateClient" />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="privatePartner"
                          className="form-label"
                        >
                          Partner %
                        </label>
                        <Field
                          type="number"
                          className="form-control inputDesign shadow"
                          id="privatePartner"
                          name="privatePartner"
                          placeholder="Partner %"
                        />
                        <ErrorMessage component='div' className='text-danger fw-bold' name="privatePartner" />
                      </div>
                    </div>
                  </div>
                  {/*7 row*/}
                </div>
              </div>
            </div>
            {/*------------------------------------Private Company------------------------------------*/}



            {/*------------------------------------Business Trust------------------------------------*/}
            <div className="row my-5">
              <div className="col-md-12">
                <div className=" shadow px-4 py-4">
                  <h3 className="heading">Business Trust
                  <div className="iconContainerLg">
                            <img className="img-fluid" src={trustbuilding} alt="" />

                            </div>
                  </h3>
                  {/*first row*/}
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="NameofTrust"
                          className="form-label"
                        >
                          Name of Trust
                        </label>
                        <Field
                          type="text"
                          className="form-control inputDesign shadow inputDesign"
                          id="NameofTrust"
                          name='NameofTrust'
                          placeholder="Name of Trust"
                        />
                        <ErrorMessage component='div' className="text-danger fw-bold" name="NameofTrust" />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="netAssetValueofBusinessTrust"
                          className="form-label"
                        >
                          Net Asset Value of Business Trust
                        </label>
                        <Field
                          type="text"
                          className="form-control inputDesign shadow"
                          id="netAssetValueofBusinessTrust"
                          name='netAssetValueofBusinessTrust'
                          placeholder="Net Asset Value of Business Trust"
                        />
                        <ErrorMessage component='div' className="text-danger fw-bold" name="netAssetValueofBusinessTrust" />
                      </div>
                    </div>
                  </div>
                  {/*first row*/}

                  {/* second row */}
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="trustTradingName"
                          className="form-label"
                        >
                          Trading Name
                        </label>
                        <Field
                          type="Text"
                          className="form-control inputDesign shadow"
                          id="trustTradingName"
                          name='trustTradingName'
                          placeholder="Trading Name"
                        />
                        <ErrorMessage component='div' className="text-danger fw-bold" name="trustTradingName" />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="trustTotalRevenue"
                          className="form-label"
                        >
                          Total Revenue
                        </label>
                        <Field
                          type="number"
                          className="form-control inputDesign shadow"
                          id="trustTotalRevenue"
                          name='trustTotalRevenue'
                          placeholder="Total Revenue"
                        />
                        <ErrorMessage component='div' className="text-danger fw-bold" name="trustTotalRevenue" />
                      </div>
                    </div>
                  </div>
                  {/*second row*/}

                  {/* Three row */}
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="trustBusinessType"
                          className="form-label"
                        >
                          Business Type
                        </label>
                        <Field
                          type="text"
                          className="form-control inputDesign shadow"
                          id="trustBusinessType"
                          name='trustBusinessType'
                          placeholder="Business Type"
                        />
                        <ErrorMessage component='div' className="text-danger fw-bold" name="trustBusinessType" />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="trustBusinessExpenses"
                          className="form-label"
                        >
                          Business Expenses
                        </label>
                        <Field
                          type="number"
                          className="form-control inputDesign shadow"
                          id="trustBusinessExpenses"
                          name='trustBusinessExpenses'
                          placeholder="Business Expenses"
                        />
                        <ErrorMessage component='div' className="text-danger fw-bold" name="trustBusinessExpenses" />
                      </div>
                    </div>
                  </div>
                  {/*Third row*/}

                  {/* four row */}
                  <div className="row ">
                  <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="trustClientShareofDistribution"
                          className="form-label"
                        >
                          Client’s share of Distribution %
                        </label>
                        <Field
                          type="number"
                          className="form-control inputDesign shadow"
                          id="trustClientShareofDistribution"
                          name='trustClientShareofDistribution'
                          placeholder="Client’s share of Distribution %"
                        />
                        <ErrorMessage component='div' className="text-danger fw-bold" name="trustClientShareofDistribution" />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="" className="form-label">
                          Use Business Expense Schedule
                        </label>
                        <div>
                          <button
                            className=" btn 
                            btn-outline-success"
                            onClick={handleShowTrust}
                          >
                             <div className="iconContainer mx-1">
                            <img className="img-fluid" src={plus} alt="" />

                            </div>
                            Use Business Schedule
                          </button>
                        </div>

                        {/* -----------------------------Model------------------------------ */}
                        <div>
                          {/* Business Expense Schedule */}
                          <Modal
                            show={showTrust}
                            onHide={handleCloseTrust}
                            backdrop="static"
                            className="modal-lg"
                            keyboard={false}
                          >
                            <Modal.Header
                              className="text-light modalBG "
                              closeButton
                            >
                              <Modal.Title className="fontStyle">
                                Business Expense Schedule
                                <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />

                            </div>
                              </Modal.Title>
                            </Modal.Header>
                           <Formik initialValues={BusinessExpense_initialValues} validationSchema={BusinessExpense_validationSchema} onSubmit={BusinessExpense_onSubmit}>
                            <Form>
                            <Modal.Body>
                              {/*  first row*/}
                              <div className="row">
                                {/*  Business Expenses */}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="trustBusinessExpenses"
                                      className="form-label"
                                    >
                                      Business Expenses
                                    </label>
                                    <input
                                      id="trustBusinessExpenses"
                                      readOnly
                                      className="form-control inputDesign shadow"
                                      type="number"
                                    />
                                  </div>
                                </div>
                                {/*  Business Expenses*/}

                                {/* Rent*/}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="trustRent"
                                      className="form-label"
                                    >
                                      Rent
                                    </label>
                                    <Field
                                      type="text"
                                      className="form-control inputDesign  shadow"
                                      id="trustRent"
                                      name='trustRent'
                                      placeholder="Rent"
                                    />
                                    <ErrorMessage component='div' className="text-danger fw-bold" name="trustRent" />
                                  </div>
                                </div>
                                {/* soleRent*/}
                              </div>

                              {/* row 2 */}
                              <div className="row">
                                {/* Lease Costs */}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="trustLeaseCosts"
                                      className="form-label"
                                    >
                                      Lease Costs
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="trustLeaseCosts"
                                      name='trustLeaseCosts'
                                      placeholder="Lease Costs"
                                    />
                                    <ErrorMessage component='div' className="text-danger fw-bold" name="trustLeaseCosts" />
                                  </div>
                                </div>
                                {/* Lease Costs */}

                                {/* Insurances */}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="trustInsurances"
                                      className="form-label"
                                    >
                                      Insurances
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="trustInsurances"
                                      name='trustInsurances'
                                      placeholder="Insurances"
                                    />
                                    <ErrorMessage component='div' className="text-danger fw-bold" name="trustInsurances" />
                                  </div>
                                </div>
                                {/* Insurances */}
                              </div>
                              {/* row 2 */}

                              {/* row 3 */}
                              <div className="row">

                                 {/* Running Costs(Utilities) */}
                                 <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="trustRunningCosts"
                                      className="form-label"
                                    >
                                      Running Costs(Utilities)
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="trustRunningCosts"
                                      name='trustRunningCosts'
                                      placeholder="Running Costs(Utilities)"
                                    />
                                    <ErrorMessage component='div' className="text-danger fw-bold" name="trustRunningCosts" />
                                  </div>
                                </div>
                                {/* Running Costs(Utilities) */}
                                {/* Staff Costs(Wages and Super) */}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="trustStaffCostWages"
                                      className="form-label"
                                    >
                                      Staff Costs(Wages and Super)
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="trustStaffCostWages"
                                      name='trustStaffCostWages'
                                      placeholder="Staff Costs "
                                    />
                                    <ErrorMessage component='div' className="text-danger fw-bold" name="trustStaffCostWages" />
                                  </div>
                                </div>
                                {/* Staff Costs(Wages and Super)  */}

                              </div>
                              {/* row 3 */}

                               {/* row 4 */}
                               <div className="row">
                              
                                {/* Wage taking by Client*/}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="trustWageTakingByClient"
                                      className="form-label"
                                    >
                                      Wage taking by Client
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="trustWageTakingByClient"
                                      name='trustWageTakingByClient'
                                      placeholder="Wage taking by Client"
                                    />
                                    <ErrorMessage component='div' className="text-danger fw-bold" name="trustWageTakingByClient" />
                                  </div>
                                </div>
                                {/*Wage taking by Client*/}

                                 {/* Super For Client*/}
                                 <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="trustSuperForClient"
                                      className="form-label"
                                    >
                                      Super For Client
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="trustSuperForClient"
                                      name="trustSuperForClient"
                                      placeholder="Super For Client"
                                    />
                                    <ErrorMessage component='div' className="text-danger fw-bold" name="trustSuperForClient" />
                                  </div>
                                </div>
                                {/* Super For Client*/}
                              </div>
                              {/* row 4 */}

                              {/* row 5 */}
                              <div className="row">
                                {/* Wage taken by Partner*/}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="trustWageTakenByPartner"
                                      className="form-label"
                                    >
                                      Wage taken by Partner
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="trustWageTakenByPartner"
                                      name=''trustWageTakenByPartner
                                      placeholder="Wage taken by Partner"
                                    />
                                    <ErrorMessage component='div' className="text-danger fw-bold" name="trustWageTakenByPartner" />
                                  </div>
                                </div>
                                {/* Wage taken by Partner*/}

                                   {/* Super For Partner*/}
                                   <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="trustSuperForPartner"
                                      className="form-label"
                                    >
                                      Super For Partner
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="trustSuperForPartner"
                                      name='trustSuperForPartner'
                                      placeholder="Super For Partner"
                                    />
                                    <ErrorMessage component='div' className="text-danger fw-bold" name="trustSuperForPartner" />
                                  </div>
                                </div>
                                {/* Super For Partner*/}
                              </div>
                              {/* row 5 */}

                              {/* row 6 */}
                              <div className="row">
                                {/* Telephone and Internet*/}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="trustTelephoneAndInternet"
                                      className="form-label"
                                    >
                                      Telephone and Internet
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="trustTelephoneAndInternet"
                                      name='trustTelephoneAndInternet'
                                      placeholder="Telephone and Internet "
                                    />
                                    <ErrorMessage component='div' className="text-danger fw-bold" name="trustTelephoneAndInternet" />
                                  </div>
                                </div>
                                {/* Telephone and Internet */}

                                {/* Professional fees*/}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="trustProfessionalFees"
                                      className="form-label"
                                    >
                                      Professional fees (Accounting or Other)
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="trustProfessionalFees"
                                      name='trustProfessionalFees'
                                      placeholder="Professional Fees"
                                    />
                                    <ErrorMessage component='div' className="text-danger fw-bold" name="trustProfessionalFees" />
                                  </div>
                                </div>
                                {/* Professional fees (Accounting or Other) */}
                              </div>
                              {/* row 6 */}

                              {/* row 7 */}
                              <div className="row">
                                {/* All Other*/}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="trustAllOther"
                                      className="form-label"
                                    >
                                      All Other
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="trustAllOther"
                                      name='trustAllOther'
                                      placeholder="All Other"
                                    />
                                    <ErrorMessage component='div' className="text-danger fw-bold" name="trustAllOther" />
                                  </div>
                                </div>
                                {/* All Other */}

                                  {/* Loan Repayments*/}
                                  <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="trustLoanRepayments"
                                      className="form-label"
                                    >
                                      Loan Repayments
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="trustLoanRepayments"
                                      name='trustLoanRepayments'
                                      placeholder="Loan Repayments"
                                    />
                                    <ErrorMessage component='div' className="text-danger fw-bold" name="trustLoanRepayments" />
                                  </div>
                                </div>
                                {/* Loan Repayments*/}
                              </div>
                              {/* row 7*/}
                            </Modal.Body>
                            <Modal.Footer>
                              <div className="col-md-12">
                                <button
                                type="submit"
                                  className="float-end btn w-25  bgColor modalBtn"
                                  // onClick={handleCloseTrust}
                                >
                                  Save
                                </button>
                                <button
                                  className="float-end btn w-25  btn-outline  backBtn mx-3"
                                  onClick={handleCloseTrust}
                                >
                                  Cancel
                                </button>
                              </div>
                            </Modal.Footer>
                            </Form>
                           </Formik>
                          </Modal>
                          {/* Business Expense Schedule */}
                        </div>
                        {/* ---------------------Model---------------------------- */}
                      </div>
                    </div>

                  
                  </div>
                  {/*four row*/}

                   {/* Five row */}
                   <div className="row">
                    

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="trustPartnerShareofDistribution"
                          className="form-label"
                        >
                          Partner's share of Distribution %
                        </label>
                        <Field
                          type="number"
                          className="form-control inputDesign shadow"
                          id="trustPartnerShareofDistribution"
                          name='trustPartnerShareofDistribution'
                          placeholder="Partner's share of Distribution %"
                        />
                        <ErrorMessage component='div' className="text-danger fw-bold" name="trustPartnerShareofDistribution" />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="trustTotalNetProfitToDistribute"
                          className="form-label"
                        >
                         Total Net Profit To Distribute
                        </label>
                        <Field
                          type="number"
                          className="form-control inputDesign shadow"
                          id="trustTotalNetProfitToDistribute"
                          placeholder="Total Net Profit To Distribute"
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                  {/*Five row*/}

                   {/*  row 6*/}
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label  className="form-label">
                      Distributions taken as cash?
                      </label>
                     

                        {/* switch button style */}
                        <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="DistributionsTakenradio" id="DistributionsTakenopt1" />
                                <label htmlFor="DistributionsTakenopt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="DistributionsTakenradio" id="DistributionsTakenopt2" />
                                <label htmlFor="DistributionsTakenopt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>
                                </div>
                              {/* switch button style */}
                      

                    </div>
                  </div>

                
                </div>
                {/*  row 6*/}

                 {/* 7 row */}
                 <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="trustClient"
                          className="form-label"
                        >
                          Client %
                        </label>
                        <Field
                          type="number"
                          className="form-control inputDesign shadow"
                          id="trustClient"
                          name='trustClient'
                          placeholder="Client %"
                        />
                        <ErrorMessage component='div' className="text-danger fw-bold" name="trustClient" />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="trustPartner"
                          className="form-label"
                        >
                          Partner %
                        </label>
                        <Field
                          type="number"
                          className="form-control inputDesign shadow"
                          id="trustPartner"
                          name='trustPartner'
                          placeholder="Partner %"
                        />
                        <ErrorMessage component='div' className="text-danger fw-bold" name="trustPartner" />
                      </div>
                    </div>
                  </div>
                  {/*7 row*/}

                  <div className="row my-3">
                    <div className="col-md-12">
                      <button  type='submit' className="float-end btn w-25  bgColor modalBtn">Next</button>
                      <button className="float-end btn w-25  btn-outline  backBtn mx-3">Back</button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            {/*------------------------------------Business Trust------------------------------------*/}


            </Form>
            </Formik>


          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessTextStucture;
