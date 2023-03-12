import { React, useState } from 'react';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Modal } from 'react-bootstrap';

import plus from './images/plus.svg'
import accounting from './images/accounting.svg'
import businessman from './images/businessman.svg'
import doctor from './images/doctor.svg'
import lawyer from './images/lawyer.svg'
import notebook from './images/notebook.svg'
import { NavLink, useNavigate } from 'react-router-dom';


function SuperRetriement() {

    const [Super, setSuper] = useState(false);
    const [Supershow, setSuperShow] = useState(false);
    const SuperhandleClose = () => setSuperShow(false);
    const SuperhandleShow = () => setSuperShow(true);
    let SuperHandler=(elem)=>{
        if (elem==="No"){
        setSuper(false)
        }
        else{
        setSuper(true)
        }
    }
    
    const [Pension, setPension] = useState(false);
    const [Pensionshow, setPensionShow] = useState(false);
    const PensionhandleClose = () => setPensionShow(false);
    const PensionhandleShow = () => setPensionShow(true);
    let PensionHandler=(elem)=>{
        if (elem==="No"){
        setPension(false)
        }
        else{
        setPension(true)
        }
    }

    const [Annuities, setAnnuities] = useState(false);
    const [Annuitiesshow, setAnnuitiesShow] = useState(false);
    const AnnuitieshandleClose = () => setAnnuitiesShow(false);
    const AnnuitieshandleShow = () => setAnnuitiesShow(true);
    let AnnuitiesHandler=(elem)=>{
        if (elem==="No"){
        setAnnuities(false)
        }
        else{
        setAnnuities(true)
        }
    }

    const [LifetimePension, setLifetimePension] = useState(false);
    const [LifetimePensionshow, setLifetimePensionShow] = useState(false);
    const LifetimePensionhandleClose = () => setLifetimePensionShow(false);
    const LifetimePensionhandleShow = () => setLifetimePensionShow(true);
    let LifetimePensionHandler=(elem)=>{
        if (elem==="No"){
        setLifetimePension(false)
        }
        else{
        setLifetimePension(true)
        }
    }

    let Client_initialValues={
        SuperFundName: '',
        SuperMemberNo: '',
        SuperFundType: '',
        SuperContactNO: '',
        SuperFaxNO: '',
        SuperPostalAddress: '',
        SuperABN: '',
        SuperSPIN: '',
        SuperWebsite: '',
        SuperEmail: '',
        SuperFundType2: '',
        SuperCommencementDate: '',
        SuperEligibleDate: '',
        SuperTFNQuoted: 'No',
        SuperCurrentBalance: '',
        SuperTaxFree: '',
        SuperTaxed: '',
        SuperRestrictionNonPreserved: '',
        SuperUnRestrictionNonPreserved: '',
        SuperPreservedAmount: '',

        PensionFundName: '',
        PensionMemberNo: '',
        PensionFundType: '',
        PensionContactNO: '',
        PensionFaxNO: '',
        PensionPostalAddress: '',
        PensionABN: '',
        PensionSPIN: '',
        PensionWebsite: '',
        PensionEmail: '',
        PensionFundType2: '',
        PensionCommencementDate: '',
        PensionEligibleDate: '',
        PensionCurrentBalance: '',
        PensionTaxFree: '',
        PensionTaxed: '',
        PensionPurchasePrice: '',
        PensionFrequency: '',
        PensionRegularIncomeDrawn: '',
        PensionMinimumRequired: '',
        PensionRelevantNumber: '',
        PensionPurchasePrice: '',
        PensionLumpsumTaken: '',
        PensionDeductibleAmount: '',

        AnnuitiesProductProvider: '',
        AnnuitiesOriginalInvestment: '',
        AnnuitiesCurrentValue: '',
        AnnuitiesAnnuityType: '',
        AnnuitiesRCV: '',
        AnnuitiesTerm: '',
        AnnuitiesMaturityYears: '',
        AnnuitiesRegularIncomeDrawn: '',
        AnnuitiesFrequency: '',
        AnnuitiesInflationRate: '',

        LifetimePensionFundName: '',
        LifetimePensionIncomeDrawn: '',
        LifetimePensionFrequency: '',
        LifetimePensionDeductibleAmount: '',
        LifetimePensionTaxFree: 'No',
        LifetimePensionTaxableAmount: ''
    }
    
    let Client_validationSchema = Yup.object({
        SuperFundName: Yup.string().required("Required"),
        SuperMemberNo: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
        SuperFundType: Yup.string().required("Required"),
        SuperContactNO: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
        SuperFaxNO: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
        SuperPostalAddress: Yup.string().required("Required"),
        SuperABN: Yup.string().required("Required"),
        SuperSPIN: Yup.string().required("Required"),
        SuperWebsite: Yup.string().required("Required"),
        SuperEmail: Yup.string().required("Required"),
        SuperFundType2: Yup.string().required("Required"),
        SuperCommencementDate: Yup.string().required("Required"),
        SuperEligibleDate: Yup.string().required("Required"),
        SuperCurrentBalance: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
        SuperTaxFree: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
        SuperTaxed: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
        SuperRestrictionNonPreserved: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
        SuperUnRestrictionNonPreserved: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
        SuperPreservedAmount: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),

        PensionFundName: Yup.string().required("Required"),
        PensionMemberNo: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
        PensionFundType: Yup.string().required("Required"),
        PensionContactNO: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
        PensionFaxNO: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
        PensionPostalAddress: Yup.string().required("Required"),
        PensionABN: Yup.string().required("Required"),
        PensionSPIN: Yup.string().required("Required"),
        PensionWebsite: Yup.string().required("Required"),
        PensionEmail: Yup.string().required("Required"),
        PensionFundType2: Yup.string().required("Required"),
        PensionCommencementDate: Yup.string().required("Required"),
        PensionEligibleDate: Yup.string().required("Required"),
        PensionCurrentBalance: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
        PensionTaxFree: Yup.string().required("Required"),
        PensionTaxed: Yup.string().required("Required"),
        PensionPurchasePrice: Yup.string().required("Required"),
        PensionFrequency: Yup.string().required("Required"),
        PensionRegularIncomeDrawn: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
        PensionMinimumRequired: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
        PensionRelevantNumber: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
        PensionPurchasePrice: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
        PensionLumpsumTaken: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
        PensionDeductibleAmount: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),

        AnnuitiesProductProvider: Yup.string().required("Required"),
        AnnuitiesOriginalInvestment: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
        AnnuitiesCurrentValue: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
        AnnuitiesAnnuityType: Yup.string().required("Required"),
        AnnuitiesRCV: Yup.string().required("Required"),
        AnnuitiesTerm: Yup.string().required("Required"),
        AnnuitiesMaturityYears: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
        AnnuitiesRegularIncomeDrawn: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
        AnnuitiesFrequency: Yup.string().required("Required"),
        AnnuitiesInflationRate: Yup.string().required("Required"),

        LifetimePensionFundName: Yup.string().required("Required"),
        LifetimePensionIncomeDrawn: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
        LifetimePensionFrequency: Yup.string().required("Required"),
        LifetimePensionDeductibleAmount: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
        LifetimePensionTaxableAmount: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
    })
    
    let Client_onSubmit = (Values) => {
        console.log(Values)
    }

    let initialValues={
        SuperRadio: 'No',
        PensionRadio: 'No',
        AnnuitiesRadio: 'No',
        LifetimePensionRadio: 'No'
    }

    let onSubmit = (Values) => {
        console.log(Values)
    }

  return (
    <div className='container-fluid'>
      <div className='shadow px-4 mx-4'>
        <div className='row my-5'>
          <div className='col-md-12 text-center'>
            <h3 className='mt-3'>Super & Retirement</h3>
          </div>
        </div>
      
        <div className='row my-3'>
          <div className='col-md-12'>
            <Formik initialValues={initialValues} onSubmit={onSubmit} enableReinitialize>
              {({ values, handleChange })=>
                <Form>

                  {/* Super Details */}
                    <div className='mb-5'>
                          <h3 className="">Super</h3>

                              {/* 1 row */}
                              <div className="row">
                            <div className="col-md-6">
                                  <div className="mb-3">
                                <label  className="form-label">
                                Do you have any Super Accounts?
                                </label>
                              {/* switch button style */}
                                <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="SuperRadio"
                                id="SuperRadioopt1" value="Yes"
                                onClick={()=>SuperHandler("Yes")} 
                                onChange={handleChange}
                                checked={values.SuperRadio==="Yes"}
                                />
                                <label htmlFor="SuperRadioopt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="SuperRadio"
                                id="SuperRadioopt2" value="No"
                                onClick={()=>SuperHandler("No")} 
                                onChange={handleChange}
                                checked={values.SuperRadio==="No"}
                              />
                                <label htmlFor="SuperRadioopt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>



                                  
                                </div>
                                  </div>    
                            </div>
                            {Super && <div className='col-md-6'>
                            <label  className="form-label">
                            Please enter the details of your Super Accounts
                                </label>
                                <br />
                              
                              <span
                                className=" btn h-50 w-50
                                btn-outline-success "
                                onClick={SuperhandleShow}
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
                                show={Supershow}
                                onHide={SuperhandleClose}
                                backdrop="static"
                                className="modal-lg"
                                keyboard={false}
                              >
                                <Modal.Header
                                  className="text-light modalBG "
                                  closeButton
                                >
                                  <Modal.Title className="fontStyle">
                                  Super Account Details
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
                                    
                                    {/* Solicitor */}
                                    <div className=' '>
                                    <h3 className=''>
                                    <div className="iconContainerLg mx-1">
                                        <img className="img-fluid" src={lawyer} alt="" />

                                        </div>
                                        Super Accounts
                                    
                                        </h3>
                                    <div className="row">
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="SuperFundName" className="form-label">Fund Name</   label>
                                    <Field
                                            as='select'
                                            name="SuperFundName"
                                            id="SuperFundName"
                                            className="form-select shadow  inputDesign"
                                            >
                                            <option value=''>Select</option>
                                            <option value="AMIST Super">AMIST Super</option>
                                            <option value="AMP Choice">AMP Choice</option>
                                            <option value="AMP North">AMP North</option>
                                            <option value="AMP South">AMP South</option>
                                            </Field>
                                            <ErrorMessage name="SuperFundName" component='div' className="text-danger fw-bold"/>
                                    </div>
                                    </div>  
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="SuperMemberNo" className="form-label">Member No</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="SuperMemberNo" name='SuperMemberNo' placeholder="Member No"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='SuperMemberNo' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="SuperFundType" className="form-label">Fund Type</   label>
                                    <Field
                                            as='select'
                                            name="SuperFundType"
                                            id="SuperFundType"
                                            className="form-select shadow  inputDesign"
                                            >
                                            <option value=''>Select</option>
                                            <option value="Personal Industry">Personal Industry</option>
                                            <option value="Personal Retail">Personal Retail</option>
                                            <option value="Personal Master">Personal Master</option>
                                            <option value="Personal WRAP">Personal WRAP</option>
                                            <option value="Personal Public Sector">Personal Public Sector</option>
                                            </Field>
                                            <ErrorMessage name="SuperFundType" component='div' className="text-danger fw-bold"/>
                                    </div>
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="SuperContactNO" className="form-label">Contact No</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="SuperContactNO" name='SuperContactNO' placeholder="Contact No"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='SuperContactNO' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="SuperFaxNO" className="form-label">Fax No</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="SuperFaxNO" name='SuperFaxNO' placeholder="Fax No"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='SuperFaxNO' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="SuperPostalAddress" className="form-label">Postal Address</   label>
                                    <Field type="text" className="form-control shadow inputDesign" 
                                    id="SuperPostalAddress" name='SuperPostalAddress' placeholder="Postal Address"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='SuperPostalAddress' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="SuperABN" className="form-label">ABN</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="SuperABN" name='SuperABN' placeholder="ABN"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='SuperABN' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="SuperSPIN" className="form-label">SPIN</   label>
                                    <Field type="text" className="form-control shadow inputDesign" 
                                    id="SuperSPIN" name='SuperSPIN' placeholder="SPIN"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='SuperSPIN' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="SuperWebsite" className="form-label">Website</   label>
                                    <Field type="text" className="form-control shadow inputDesign" 
                                    id="SuperWebsite" name='SuperWebsite' placeholder="Website"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='SuperWebsite' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="SuperEmail" className="form-label">Email</   label>
                                    <Field type="text" className="form-control shadow inputDesign" 
                                    id="SuperEmail" name='SuperEmail' placeholder="Email"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='SuperEmail' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="SuperFundType2" className="form-label">Fund Type</   label>
                                    <Field
                                            as='select'
                                            name="SuperFundType2"
                                            id="SuperFundType2"
                                            className="form-select shadow  inputDesign"
                                            >
                                            <option value=''>Select</option>
                                            <option value="Accumulation">Accumulation</option>
                                            <option value="Defined Benefit">Defined Benefit</option>
                                            </Field>
                                            <ErrorMessage name="SuperFundType2" component='div' className="text-danger fw-bold"/>
                                    </div>
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="SuperCommencementDate" className="form-label">Commencment Date</   label>
                                    <Field type="date" className="form-control shadow inputDesign" 
                                    id="SuperCommencementDate" name='SuperCommencementDate'/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='SuperCommencementDate' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="SuperEligibleDate" className="form-label">Eligible Service Date</   label>
                                    <Field type="date" className="form-control shadow inputDesign" 
                                    id="SuperEligibleDate" name='SuperEligibleDate'/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='SuperEligibleDate' />
                                    </div>            
                                    </div>
                            <div className="col-md-6">
                                  <div className="mb-3">
                                <label  className="form-label">
                                TFN Quoted
                                </label>
                              {/* switch button style */}
                                <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="SuperTFNQuoted"
                                id="SuperTFNQuoted1opt1" value="Yes"
                                onChange={handleChange}
                                checked={values.SuperTFNQuoted==="Yes"}
                                />
                                <label htmlFor="SuperTFNQuoted1opt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="SuperTFNQuoted"
                                id="SuperTFNQuotedopt2" value="No"
                                onChange={handleChange}
                                checked={values.SuperTFNQuoted==="No"}
                              />
                                <label htmlFor="SuperTFNQuotedopt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>



                                  
                                </div>
                                  </div>    
                            </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="SuperCurrentBalance" className="form-label">Current Balance</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="SuperCurrentBalance" name='SuperCurrentBalance' placeholder="Current Balance"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='SuperCurrentBalance' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="SuperTaxFree" className="form-label">Tax Free</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="SuperTaxFree" name='SuperTaxFree' placeholder="Tax Free"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='SuperTaxFree' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="SuperTaxed" className="form-label">Taxed</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="SuperTaxed" name='SuperTaxed' placeholder="Taxed"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='SuperTaxed' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="SuperRestrictionNonPreserved" className="form-label">Restriction Non Preserved</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="SuperRestrictionNonPreserved" name='SuperRestrictionNonPreserved' placeholder="Restriction Non Preserved"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='SuperRestrictionNonPreserved' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="SuperUnRestrictionNonPreserved" className="form-label">Un-Restriction Non Preserved</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="SuperUnRestrictionNonPreserved" name='SuperUnRestrictionNonPreserved' placeholder="UnRestriction Non Preserved"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='SuperUnRestrictionNonPreserved' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="SuperPreservedAmount" className="form-label">Preserved Amount</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="SuperPreservedAmount" name='SuperPreservedAmount' placeholder="Preserved Amount"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='SuperPreservedAmount' />
                                    </div>            
                                    </div>

                                    </div>
                                    
                                    </div>
                                    {/* Solicitor */}

                            {/* Bank Account Detail Form */}
                              
                                </Modal.Body>
                                <Modal.Footer>
                                  <div className="col-md-12">
                                    <button
                                      className="float-end btn w-25  bgColor modalBtn"
                                      // onClick={BankhandleClose}
                                      type='submit'
                                    >
                                      Save
                                    </button>
                                    <button
                                      className="float-end btn w-25  btn-outline  backBtn mx-3"
                                      onClick={SuperhandleClose}
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
                  {/* Super Details */}
                  
                  {/* Pension Account Details */}
                  <div className='mb-5'>
                          <h3 className="">Pension Account</h3>

                              {/* 1 row */}
                              <div className="row">
                            <div className="col-md-6">
                                  <div className="mb-3">
                                <label  className="form-label">
                                Do you have any Pension Accounts?
                                </label>
                              {/* switch button style */}
                                <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="PensionRadio"
                                id="PensionRadioopt1" value="Yes"
                                onClick={()=>PensionHandler("Yes")} 
                                onChange={handleChange}
                                checked={values.PensionRadio==="Yes"}
                                />
                                <label htmlFor="PensionRadioopt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="PensionRadio"
                                id="PensionRadioopt2" value="No"
                                onClick={()=>PensionHandler("No")} 
                                onChange={handleChange}
                                checked={values.PensionRadio==="No"}
                              />
                                <label htmlFor="PensionRadioopt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>



                                  
                                </div>
                                  </div>    
                            </div>
                            {Pension && <div className='col-md-6'>
                            <label  className="form-label">
                            Please enter the details of your Pension Accounts
                                </label>
                                <br />
                              
                              <span
                                className=" btn h-50 w-50
                                btn-outline-success "
                                onClick={PensionhandleShow}
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
                                show={Pensionshow}
                                onHide={PensionhandleClose}
                                backdrop="static"
                                className="modal-lg"
                                keyboard={false}
                              >
                                <Modal.Header
                                  className="text-light modalBG "
                                  closeButton
                                >
                                  <Modal.Title className="fontStyle">
                                  Pension Account Details
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
                                    
                                    {/* Solicitor */}
                                    <div className=' '>
                                    <h3 className=''>
                                    <div className="iconContainerLg mx-1">
                                        <img className="img-fluid" src={lawyer} alt="" />

                                        </div>
                                        Pension Accounts
                                    
                                        </h3>
                                    <div className="row">
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="PensionFundName" className="form-label">Fund Name</   label>
                                    <Field
                                            as='select'
                                            name="PensionFundName"
                                            id="PensionFundName"
                                            className="form-select shadow  inputDesign"
                                            >
                                            <option value=''>Select</option>
                                            <option value="AMIST Pension">AMIST Pension</option>
                                            <option value="AMP Choice">AMP Choice</option>
                                            <option value="AMP North">AMP North</option>
                                            <option value="AMP South">AMP South</option>
                                            </Field>
                                            <ErrorMessage name="PensionFundName" component='div' className="text-danger fw-bold"/>
                                    </div>
                                    </div>  
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="PensionMemberNo" className="form-label">Member No</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="PensionMemberNo" name='PensionMemberNo' placeholder="Member No"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='PensionMemberNo' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="PensionFundType" className="form-label">Fund Type</   label>
                                    <Field
                                            as='select'
                                            name="PensionFundType"
                                            id="PensionFundType"
                                            className="form-select shadow  inputDesign"
                                            >
                                            <option value=''>Select</option>
                                            <option value="Personal Industry">Personal Industry</option>
                                            <option value="Personal Retail">Personal Retail</option>
                                            <option value="Personal Master">Personal Master</option>
                                            <option value="Personal WRAP">Personal WRAP</option>
                                            <option value="Personal Public Sector">Personal Public Sector</option>
                                            </Field>
                                            <ErrorMessage name="PensionFundType" component='div' className="text-danger fw-bold"/>
                                    </div>
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="PensionContactNO" className="form-label">Contact No</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="PensionContactNO" name='PensionContactNO' placeholder="Contact No"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='PensionContactNO' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="PensionFaxNO" className="form-label">Fax No</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="PensionFaxNO" name='PensionFaxNO' placeholder="Fax No"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='PensionFaxNO' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="PensionPostalAddress" className="form-label">Postal Address</   label>
                                    <Field type="text" className="form-control shadow inputDesign" 
                                    id="PensionPostalAddress" name='PensionPostalAddress' placeholder="Postal Address"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='PensionPostalAddress' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="PensionABN" className="form-label">ABN</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="PensionABN" name='PensionABN' placeholder="ABN"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='PensionABN' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="PensionSPIN" className="form-label">SPIN</   label>
                                    <Field type="text" className="form-control shadow inputDesign" 
                                    id="PensionSPIN" name='PensionSPIN' placeholder="SPIN"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='PensionSPIN' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="PensionWebsite" className="form-label">Website</   label>
                                    <Field type="text" className="form-control shadow inputDesign" 
                                    id="PensionWebsite" name='PensionWebsite' placeholder="Website"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='PensionWebsite' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="PensionEmail" className="form-label">Email</   label>
                                    <Field type="text" className="form-control shadow inputDesign" 
                                    id="PensionEmail" name='PensionEmail' placeholder="Email"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='PensionEmail' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="PensionFundType2" className="form-label">Pension Type</   label>
                                    <Field
                                            as='select'
                                            name="PensionFundType2"
                                            id="PensionFundType2"
                                            className="form-select shadow  inputDesign"
                                            >
                                            <option value=''>Select</option>
                                            <option value="TTR">TTR</option>
                                            <option value="Account Based">Account Based</option>
                                            </Field>
                                            <ErrorMessage name="PensionFundType2" component='div' className="text-danger fw-bold"/>
                                    </div>
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="PensionCommencementDate" className="form-label">Commencment Date</   label>
                                    <Field type="date" className="form-control shadow inputDesign" 
                                    id="PensionCommencementDate" name='PensionCommencementDate'/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='PensionCommencementDate' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="PensionEligibleDate" className="form-label">Eligible Service Date</   label>
                                    <Field type="date" className="form-control shadow inputDesign" 
                                    id="PensionEligibleDate" name='PensionEligibleDate'/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='PensionEligibleDate' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="PensionCurrentBalance" className="form-label">Current Balance</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="PensionCurrentBalance" name='PensionCurrentBalance' placeholder="Current Balance"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='PensionCurrentBalance' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="PensionTaxFree" className="form-label">Tax Free</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="PensionTaxFree" name='PensionTaxFree' placeholder="Tax Free"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='PensionTaxFree' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="PensionTaxed" className="form-label">Taxed</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="PensionTaxed" name='PensionTaxed' placeholder="Taxed"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='PensionTaxed' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="PensionPurchasePrice" className="form-label">Original Purchase Price</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="PensionPurchasePrice" name='PensionPurchasePrice' placeholder="Original Purchase Price"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='PensionPurchasePrice' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="PensionFrequency" className="form-label">Frequency</   label>
                                    <Field
                                            as='select'
                                            name="PensionFrequency"
                                            id="PensionFrequency"
                                            className="form-select shadow  inputDesign"
                                            >
                                            <option value=''>Select</option>
                                            <option value="Fortnightly">Fortnightly</option>
                                            <option value="Monthly">Monthly</option>
                                            <option value="Quarterly">Quarterly</option>
                                            <option value="Six Monthly">Six Monthly</option>
                                            <option value="Anually">Anually</option>
                                            </Field>
                                            <ErrorMessage name="PensionFrequency" component='div' className="text-danger fw-bold"/>
                                    </div>
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="PensionRegularIncomeDrawn" className="form-label">Regular Income Drawn</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="PensionRegularIncomeDrawn" name='PensionRegularIncomeDrawn' placeholder="Regular Income Drawn"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='PensionRegularIncomeDrawn' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="PensionMinimumRequired" className="form-label">Minimum Required</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="PensionMinimumRequired" name='PensionMinimumRequired' placeholder="Minimum Required"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='PensionMinimumRequired' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="PensionRelevantNumber" className="form-label">Relevant Number</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="PensionRelevantNumber" name='PensionRelevantNumber' placeholder="Relevant Number"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='PensionRelevantNumber' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="PensionLumpsumTaken" className="form-label">Lumpsum Withdrawl Taken</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="PensionLumpsumTaken" name='PensionLumpsumTaken' placeholder="Lumpsum Withdrawl Taken"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='PensionLumpsumTaken' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="PensionDeductibleAmount" className="form-label">Deductible Amount</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="PensionDeductibleAmount" name='PensionDeductibleAmount' placeholder="Deductible Amount"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='PensionDeductibleAmount' />
                                    </div>            
                                    </div>

                                    </div>
                                    
                                    </div>
                                    {/* Solicitor */}

                            {/* Bank Account Detail Form */}
                              
                                </Modal.Body>
                                <Modal.Footer>
                                  <div className="col-md-12">
                                    <button
                                      className="float-end btn w-25  bgColor modalBtn"
                                      // onClick={BankhandleClose}
                                      type='submit'
                                    >
                                      Save
                                    </button>
                                    <button
                                      className="float-end btn w-25  btn-outline  backBtn mx-3"
                                      onClick={PensionhandleClose}
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
                  {/* Pension Account Details */}

                  {/* Annuities Details */}
                  <div className='mb-5'>
                          <h3 className="">Annuities</h3>

                              {/* 1 row */}
                              <div className="row">
                            <div className="col-md-6">
                                  <div className="mb-3">
                                <label  className="form-label">
                                Do you have any Annuities?
                                </label>
                              {/* switch button style */}
                                <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="AnnuitiesRadio"
                                id="AnnuitiesRadioopt1" value="Yes"
                                onClick={()=>AnnuitiesHandler("Yes")} 
                                onChange={handleChange}
                                checked={values.AnnuitiesRadio==="Yes"}
                                />
                                <label htmlFor="AnnuitiesRadioopt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="AnnuitiesRadio"
                                id="AnnuitiesRadioopt2" value="No"
                                onClick={()=>AnnuitiesHandler("No")} 
                                onChange={handleChange}
                                checked={values.AnnuitiesRadio==="No"}
                              />
                                <label htmlFor="AnnuitiesRadioopt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>



                                  
                                </div>
                                  </div>    
                            </div>
                            {Annuities && <div className='col-md-6'>
                            <label  className="form-label">
                            Please enter the details of your Annuities Accounts
                                </label>
                                <br />
                              
                              <span
                                className=" btn h-50 w-50
                                btn-outline-success "
                                onClick={AnnuitieshandleShow}
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
                                show={Annuitiesshow}
                                onHide={AnnuitieshandleClose}
                                backdrop="static"
                                className="modal-lg"
                                keyboard={false}
                              >
                                <Modal.Header
                                  className="text-light modalBG "
                                  closeButton
                                >
                                  <Modal.Title className="fontStyle">
                                  Annuities Account Details
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
                                    
                                    {/* Solicitor */}
                                    <div className=' '>
                                    <h3 className=''>
                                    <div className="iconContainerLg mx-1">
                                        <img className="img-fluid" src={lawyer} alt="" />

                                        </div>
                                        Annuities Accounts
                                    
                                        </h3>
                                    <div className="row">
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="AnnuitiesProductProvider" className="form-label">Product Provider</   label>
                                    <Field
                                            as='select'
                                            name="AnnuitiesProductProvider"
                                            id="AnnuitiesProductProvider"
                                            className="form-select shadow  inputDesign"
                                            >
                                            <option value=''>Select</option>
                                            <option value="Challenger">Challenger</option>
                                            <option value="CommInsure">CommInsure</option>
                                            <option value="Other">Other</option>
                                            </Field>
                                            <ErrorMessage name="AnnuitiesProductProvider" component='div' className="text-danger fw-bold"/>
                                    </div>
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="AnnuitiesOriginalInvestment" className="form-label">Original Investment Amount</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="AnnuitiesOriginalInvestment" name='AnnuitiesOriginalInvestment' placeholder="Original Investment Amount"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='AnnuitiesOriginalInvestment' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="AnnuitiesCurrentValue" className="form-label">Current Value</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="AnnuitiesCurrentValue" name='AnnuitiesCurrentValue' placeholder="Current Value"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='AnnuitiesCurrentValue' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="AnnuitiesAnnuityType" className="form-label">Annuity Type</   label>
                                    <Field
                                            as='select'
                                            name="AnnuitiesAnnuityType"
                                            id="AnnuitiesAnnuityType"
                                            className="form-select shadow  inputDesign"
                                            >
                                            <option value=''>Select</option>
                                            <option value="Short Term">Short Term</option>
                                            <option value="Long Term">Long Term</option>
                                            </Field>
                                            <ErrorMessage name="AnnuitiesAnnuityType" component='div' className="text-danger fw-bold"/>
                                    </div>
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="AnnuitiesRCV" className="form-label">RCV</   label>
                                    <Field type="text" className="form-control shadow inputDesign" 
                                    id="AnnuitiesRCV" name='AnnuitiesRCV' placeholder="RCV"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='AnnuitiesRCV' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="AnnuitiesTerm" className="form-label">Term</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="AnnuitiesTerm" name='AnnuitiesTerm' placeholder="Term"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='AnnuitiesTerm' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="AnnuitiesMaturityYears" className="form-label">Years Until Maturity</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="AnnuitiesMaturityYears" name='AnnuitiesMaturityYears' placeholder="Years Until Maturity"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='AnnuitiesMaturityYears' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="AnnuitiesRegularIncomeDrawn" className="form-label">Regular Income Drawn</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="AnnuitiesRegularIncomeDrawn" name='AnnuitiesRegularIncomeDrawn' placeholder="Regular Income Drawn"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='AnnuitiesRegularIncomeDrawn' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="AnnuitiesFrequency" className="form-label">Frequency</   label>
                                    <Field
                                            as='select'
                                            name="AnnuitiesFrequency"
                                            id="AnnuitiesFrequency"
                                            className="form-select shadow  inputDesign"
                                            >
                                            <option value=''>Select</option>
                                            <option value="Fortnightly">Fortnightly</option>
                                            <option value="Monthky">Monthky</option>
                                            <option value="Quarterly">Quarterly</option>
                                            <option value="Six Monthly">Six Monthly</option>
                                            <option value="Annually">Annually</option>
                                            </Field>
                                            <ErrorMessage name="AnnuitiesFrequency" component='div' className="text-danger fw-bold"/>
                                    </div>
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="AnnuitiesInflationRate" className="form-label">Annual Inflation Rate</   label>
                                    <Field
                                            as='select'
                                            name="AnnuitiesInflationRate"
                                            id="AnnuitiesInflationRate"
                                            className="form-select shadow  inputDesign"
                                            >
                                            <option value=''>Select</option>
                                            <option value="%0.00">%0.00</option>
                                            <option value="%0.50">%0.50</option>
                                            <option value="%1.00">%1.00</option>
                                            <option value="%1.50">%1.50</option>
                                            <option value="%2.00">%2.00</option>
                                            <option value="%2.50">%2.50</option>
                                            <option value="%3.00">%3.00</option>
                                            <option value="%3.50">%3.50</option>
                                            <option value="%4.00">%4.00</option>
                                            <option value="%4.50">%4.50</option>
                                            <option value="%5.00">%5.00</option>
                                            <option value="%5.50">%5.50</option>
                                            <option value="%6.00">%6.00</option>
                                            <option value="%6.50">%6.50</option>
                                            <option value="%7.00">%7.00</option>
                                            <option value="%7.50">%7.50</option>
                                            <option value="%8.00">%8.00</option>
                                            <option value="%8.50">%8.50</option>
                                            <option value="%9.00">%9.00</option>
                                            <option value="%9.50">%9.50</option>
                                            <option value="%10.00">%10.00</option>
                                            </Field>
                                            <ErrorMessage name="AnnuitiesInflationRate" component='div' className="text-danger fw-bold"/>
                                    </div>
                                    </div>

                                    </div>
                                    
                                    </div>
                                    {/* Solicitor */}

                            {/* Bank Account Detail Form */}
                              
                                </Modal.Body>
                                <Modal.Footer>
                                  <div className="col-md-12">
                                    <button
                                      className="float-end btn w-25  bgColor modalBtn"
                                      // onClick={BankhandleClose}
                                      type='submit'
                                    >
                                      Save
                                    </button>
                                    <button
                                      className="float-end btn w-25  btn-outline  backBtn mx-3"
                                      onClick={AnnuitieshandleClose}
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
                  {/* Annuities Details */}

                  {/* Lifetime Pension Details */}
                  <div className='mb-5'>
                          <h3 className="">Lifetime Pension</h3>

                              {/* 1 row */}
                              <div className="row">
                            <div className="col-md-6">
                                  <div className="mb-3">
                                <label  className="form-label">
                                Do you have any Lifetime Pension?
                                </label>
                              {/* switch button style */}
                                <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="LifetimePensionRadio"
                                id="LifetimePensionRadioopt1" value="Yes"
                                onClick={()=>LifetimePensionHandler("Yes")} 
                                onChange={handleChange}
                                checked={values.LifetimePensionRadio==="Yes"}
                                />
                                <label htmlFor="LifetimePensionRadioopt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="LifetimePensionRadio"
                                id="LifetimePensionRadioopt2" value="No"
                                onClick={()=>LifetimePensionHandler("No")} 
                                onChange={handleChange}
                                checked={values.LifetimePensionRadio==="No"}
                              />
                                <label htmlFor="LifetimePensionRadioopt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>



                                  
                                </div>
                                  </div>    
                            </div>
                            {LifetimePension && <div className='col-md-6'>
                            <label  className="form-label">
                            Please enter the details of your LifetimePension Accounts
                                </label>
                                <br />
                              
                              <span
                                className=" btn h-50 w-50
                                btn-outline-success "
                                onClick={LifetimePensionhandleShow}
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
                                show={LifetimePensionshow}
                                onHide={LifetimePensionhandleClose}
                                backdrop="static"
                                className="modal-lg"
                                keyboard={false}
                              >
                                <Modal.Header
                                  className="text-light modalBG "
                                  closeButton
                                >
                                  <Modal.Title className="fontStyle">
                                  Lifetime Pension Account Details
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
                                    
                                    {/* Solicitor */}
                                    <div className=' '>
                                    <h3 className=''>
                                    <div className="iconContainerLg mx-1">
                                        <img className="img-fluid" src={lawyer} alt="" />

                                        </div>
                                        Lifetime Pension Accounts
                                    
                                        </h3>
                                    <div className="row">
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="LifetimePensionFundName" className="form-label">Fund Name</   label>
                                    <Field type="text" className="form-control shadow inputDesign" 
                                    id="LifetimePensionFundName" name='LifetimePensionFundName' placeholder="Fund Name"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='LifetimePensionFundName' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="LifetimePensionIncomeDrawn" className="form-label">Regular Income Drawn</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="LifetimePensionIncomeDrawn" name='LifetimePensionIncomeDrawn' placeholder="Regular Income Drawn"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='LifetimePensionIncomeDrawn' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="LifetimePensionFrequency" className="form-label">Frequency</   label>
                                    <Field
                                            as='select'
                                            name="LifetimePensionFrequency"
                                            id="LifetimePensionFrequency"
                                            className="form-select shadow  inputDesign"
                                            >
                                            <option value=''>Select</option>
                                            <option value="Fortnightly">Fortnightly</option>
                                            <option value="Monthky">Monthky</option>
                                            <option value="Quarterly">Quarterly</option>
                                            <option value="Six Monthly">Six Monthly</option>
                                            <option value="Annually">Annually</option>
                                            </Field>
                                            <ErrorMessage name="LifetimePensionFrequency" component='div' className="text-danger fw-bold"/>
                                    </div>
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="LifetimePensionDeductibleAmount" className="form-label">Deductible Amount</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="LifetimePensionDeductibleAmount" name='LifetimePensionDeductibleAmount' placeholder="Deductible Amount"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='LifetimePensionDeductibleAmount' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                  <div className="mb-3">
                                <label  className="form-label">
                                Is this Pension Tax-Free?
                                </label>
                              {/* switch button style */}
                                <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="LifetimePensionTaxFree"
                                id="LifetimePensionopt1" value="Yes"
                                onChange={handleChange}
                                checked={values.LifetimePensionTaxFree==="Yes"}
                                />
                                <label htmlFor="LifetimePensionopt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="LifetimePensionTaxFree"
                                id="LifetimePensionopt2" value="No"
                                onChange={handleChange}
                                checked={values.LifetimePensionTaxFree==="No"}
                              />
                                <label htmlFor="LifetimePensionopt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>



                                  
                                </div>
                                  </div>    
                            </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="LifetimePensionTaxableAmount" className="form-label">Taxable Pension Amount</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="LifetimePensionTaxableAmount" name='LifetimePensionTaxableAmount' placeholder="Taxable Pension Amount"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='LifetimePensionTaxableAmount' />
                                    </div>            
                                    </div>
                                    </div>
                                    
                                    </div>
                                    {/* Solicitor */}

                            {/* Bank Account Detail Form */}
                              
                                </Modal.Body>
                                <Modal.Footer>
                                  <div className="col-md-12">
                                    <button
                                      className="float-end btn w-25  bgColor modalBtn"
                                      // onClick={BankhandleClose}
                                      type='submit'
                                    >
                                      Save
                                    </button>
                                    <button
                                      className="float-end btn w-25  btn-outline  backBtn mx-3"
                                      onClick={LifetimePensionhandleClose}
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
                  {/* Lifetime Pension Details */}

                </Form>}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuperRetriement