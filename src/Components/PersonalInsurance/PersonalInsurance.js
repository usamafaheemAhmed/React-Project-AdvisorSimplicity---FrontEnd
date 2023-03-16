import { React, useState } from 'react';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';

import notsmoking from "./images/no-smoking.svg";
import notebook from "./images/notebook.svg";
import smoking from "./images/smoking.svg";

import plus from './images/plus.svg';

import { Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function PersonalInsurance() {

  const [BenefitClaimed, setBenefitClaimed] = useState(false);
  let BenefitHandler=(e)=>{ 
    if(e==="no"){
      setBenefitClaimed(false)
    }
    else{
      setBenefitClaimed(true)
    }
   }   

  const [ApplicationInsurance, setApplicationInsurance] = useState(false);
  let ApplicationInsuranceHandler=(e)=>{ 
    if(e==="no"){
      setApplicationInsurance(false)
    }
    else{
      setApplicationInsurance(true)
    }
   }
   
  const [ImpedimentReason, setImpedimentReason] = useState(false);
  let ImpedimentReasonHandler=(e)=>{ 
    if(e==="no"){
      setImpedimentReason(false)
    }
    else{
      setImpedimentReason(true)
    }
   }

   const [PersonalInsuranceCover, setPersonalInsuranceCover] = useState(false);
  const [PersonalInsuranceCovershow, setPersonalInsuranceCoverShow] = useState(false);
  const PersonalInsuranceCoverhandleClose = () => setPersonalInsuranceCoverShow(false);
  const PersonalInsuranceCoverhandleShow = () => setPersonalInsuranceCoverShow(true);
  let PersonalInsuranceCoverHandler=(elem)=>{
    if (elem==="No"){
      setPersonalInsuranceCover(false)
    }
    else{
      setPersonalInsuranceCover(true)
    }
  }
  
  const [PersonalInsuranceCovershow2, setPersonalInsuranceCoverShow2] = useState(false);
  const PersonalInsuranceCover2handleClose = () => setPersonalInsuranceCoverShow2(false);
  const PersonalInsuranceCover2handleShow = () => setPersonalInsuranceCoverShow2(true);

  const [clientSmoker, setClientSmoker] = useState(true);
  let smokerHandler=(elem)=>{
    if(elem=="smoker"){
      // notSmokingID
      document.getElementById("YesSmokerID").classList.add('selectedimage');
      document.getElementById("notSmokingID").classList.add('notSelectedimage');
      document.getElementById("notSmokingID").classList.remove('selectedimage');
      setClientSmoker("True")
    }
      else{
        document.getElementById("notSmokingID").classList.add('selectedimage');
        document.getElementById("YesSmokerID").classList.remove('selectedimage');
        document.getElementById("YesSmokerID").classList.add('notSelectedimage');
        setClientSmoker("False")

      }
  }

  const [Description1, setDescription1] = useState(false);
  let Description1Handler=(e)=>{ 
    if(e==="no"){
      setDescription1(false)
    }
    else{
      setDescription1(true)
    }
   }

   const [Description2, setDescription2] = useState(false);
  let Description2Handler=(e)=>{ 
    if(e==="no"){
      setDescription2(false)
    }
    else{
      setDescription2(true)
    }
   }

    let initialValues = {
      PersonalInsuranceWeeks: '',

      PersonalInsuranceBenefitClaimedradio: 'No',
      PersonalInsuranceApplicationInsuranceradio: 'No',
      PersonalInsuranceImpedimentReasonradio: 'No',
      PersonalInsuranceCoverRadio: 'No',

      PersonalInsuranceBenefitsDescription: '',
      PersonalInsuranceApplicationDescription: '',
      PersonalInsuranceImpedimentReasonDescription: '',
    }

    let validationSchema = Yup.object({
      PersonalInsuranceWeeks: Yup.number().required("Required"),

      PersonalInsuranceBenefitsDescription: Yup.string().when('PersonalInsuranceBenefitClaimedradio',{
        is: val => val && val.length === 3,
        then: Yup.string().required("Required"),
        otherwise: Yup.string().notRequired()
      }),
      PersonalInsuranceApplicationDescription:Yup.string().when('PersonalInsuranceApplicationInsuranceradio',{
        is: val => val && val.length === 3,
        then: Yup.string().required("Required"),
        otherwise: Yup.string().notRequired()
      }),
      PersonalInsuranceImpedimentReasonDescription:Yup.string().when('PersonalInsuranceImpedimentReasonradio',{
        is: val => val && val.length === 3,
        then: Yup.string().required("Required"),
        otherwise: Yup.string().notRequired()
      })
    })

    let Navigate = useNavigate();
    function BackFunction(){
      Navigate('/Investment-Trust')
    }
    let onSubmit = () => {
      Navigate('/')
    }

    let Client_initialValues = {
      PersonalInsurancePolicyNO1: '1',
      PersonalInsuranceLifeRadio: 'No',
      PersonalInsuranceTPDRadio: 'No',
      PersonalInsuranceTraumaRadio: 'No',
      PersonalInsurancePolicyOwner: '',
      PersonalInsuranceLifeInsured: '',
      PersonalInsuranceInsuranceCompany: '',
      PersonalInsuranceProductName: '',
      PersonalInsurancePolicySrNo: '',
      PersonalInsuranceCommencedDate: '',
      PersonalInsuranceRenewalDate: '',
      PersonalInsurancePremiumPA: '',
      PersonalInsurancePremiumType: '',
      PersonalInsuranceCPIIndexedRadio: 'No',
      PersonalInsuranceSuperannuationRadio: 'No',
      PersonalInsuranceContinuationRadio: 'No',
      PersonalInsuranceLoadingRadio: 'No',
      PersonalInsuranceLoadingDescription1: '',

      PersonalInsurance2PolicyNO1: '1',
      PersonalInsurance2PolicyOwner: '',
      PersonalInsurance2LifeInsured: '',
      PersonalInsurance2InsuranceCompany: '',
      PersonalInsurance2ProductName: '',
      PersonalInsurance2PolicySrNo: '',
      PersonalInsurance2CommencedDate: '',
      PersonalInsurance2RenewalDate: '',
      PersonalInsurance2MonthlyBenefit: '',
      PersonalInsurance2SuperContinuance: '',
      PersonalInsurance2WaitingPeriod: '',
      PersonalInsurance2BenefitPeriod: '',
      PersonalInsurance2IndemnityPeriod: '',
      PersonalInsurance2PremiumPA: '',
      PersonalInsurance2PremiumType: '',
      PersonalInsurance2SuperannuationRadio: 'No',
      PersonalInsurance2AccidentRadio: 'No',
      PersonalInsurance2IncreasingClaimsRadio: 'No',
      PersonalInsurance2TPDRadio: 'No',
      PersonalInsurance2BenefitIndexedRadio: 'No',
      PersonalInsurance2LoadingRadio: 'No',
      PersonalInsurance2LoadingDescription2: ''
    }

    let Client_validationSchema = Yup.object({
      PersonalInsurancePolicyOwner: Yup.string().required("Required"),
      PersonalInsuranceLifeInsured: Yup.string().required("Required"),
      PersonalInsuranceInsuranceCompany: Yup.string().required("Required"),
      PersonalInsuranceProductName: Yup.string().required("Required"),
      PersonalInsurancePolicySrNo: Yup.number().required("Required").test("Is positive?", "Must be a positive number", (value) => value > 0),
      PersonalInsuranceCommencedDate: Yup.string().required("Required"),
      PersonalInsuranceRenewalDate: Yup.string().required("Required"),
      PersonalInsurancePremiumPA: Yup.number().required("Required").test("Is positive?", "Must be a positive number", (value) => value > 0),
      PersonalInsurancePremiumType: Yup.string().required("Required"),
      PersonalInsuranceLoadingDescription1: Yup.string().when('PersonalInsuranceLoadingRadio',{
        is: val => val && val.length === 3,
        then: Yup.string().required("Required"),
        otherwise: Yup.string().notRequired(),
      }),

      PersonalInsurance2PolicyOwner: Yup.string().required("Required"),
      PersonalInsurance2LifeInsured: Yup.string().required("Required"),
      PersonalInsurance2InsuranceCompany: Yup.string().required("Required"),
      PersonalInsurance2ProductName: Yup.string().required("Required"),
      PersonalInsurance2PolicySrNo: Yup.number().required("Required").test("Is positive?", "Must be a positive number", (value) => value > 0),
      PersonalInsurance2CommencedDate: Yup.string().required("Required"),
      PersonalInsurance2RenewalDate: Yup.string().required("Required"),
      PersonalInsurance2MonthlyBenefit: Yup.number().required("Required").test("Is positive?", "Must be a positive number", (value) => value > 0),
      PersonalInsurance2SuperContinuance: Yup.number().required("Required").test("Is positive?", "Must be a positive number", (value) => value > 0),
      PersonalInsurance2WaitingPeriod: Yup.string().required("Required"),
      PersonalInsurance2BenefitPeriod: Yup.string().required("Required"),
      PersonalInsurance2IndemnityPeriod: Yup.string().required("Required"),
      PersonalInsurance2PremiumPA: Yup.number().required("Required").test("Is positive?", "Must be a positive number", (value) => value > 0),
      PersonalInsurance2PremiumType: Yup.string().required("Required"),
      PersonalInsurance2LoadingDescription2: Yup.string().when('PersonalInsurance2LoadingRadio',{
        is: val => val && val.length === 3,
        then: Yup.string().required("Required"),
        otherwise: Yup.string().notRequired(),
      })
    })

    let Client_onSubmit = () => {

    }

  return (
    
    <>
    
        {/* --------------------------Start client Form-------------------- */}
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                    enableReinitialize
                    >
                      {({values, setFieldValue, handleChange, errors, touched})=>
                      <Form>
                        <div className="container-fluid mt-4">
                          <div className="row m-0 p-0 ">
                            <div className="col-md-2 m-0 p-0 "></div>
                            <div className="col-md-12">
                              <h3 className="text-center">Personal Insurance</h3>

                              <div className='row my-3'>
                                <div className="col-md-6">
                                  <div className="mb-5">
                                    <label htmlFor="PersonalInsuranceWeeks" className="form-label">
                                      Number of weeks that you could maintain your standard of living without your primary income?
                                    </label>
                                    <Field name="PersonalInsuranceWeeks" id="PersonalInsuranceWeeks" type='number'
                                    className="form-control shadow inputDesign" placeholder='No. of Weeks' />
                                    <ErrorMessage name="PersonalInsuranceWeeks" component='div' className="text-danger fw-bold"/>
                                  </div>
                                </div>  

                                
                                <div className="col-md-12">
                                  <div className="mb-3">
                                    <label htmlFor="" className="form-label">
                                    Are you claiming or have you ever claimed a benefit from any source?
                                    </label>
                                    {/* health button style */}
                                    <div className="form-check form-switch m-0 p-0 ">
                                      <div className="radiobutton">
                                        <input type="radio" name="PersonalInsuranceBenefitClaimedradio" 
                                        id="PersonalInsuranceBenefitClaimedopt1" value="Yes"
                                          onClick={()=>BenefitHandler("yes")} 
                                          onChange={handleChange}
                                          checked={values.PersonalInsuranceBenefitClaimedradio==="Yes"}
                                          />
                                        <label htmlFor="PersonalInsuranceBenefitClaimedopt1" className="label1">
                                          <span>YES</span>
                                        </label>
                                        <input type="radio" name="PersonalInsuranceBenefitClaimedradio"  
                                        onClick={()=>BenefitHandler("no")}
                                        id="PersonalInsuranceBenefitClaimedopt2" value="No"
                                        onChange={handleChange} 
                                        checked={values.PersonalInsuranceBenefitClaimedradio==="No"}
                                        />
                                        <label htmlFor="PersonalInsuranceBenefitClaimedopt2" className="label2">
                                          <span>NO</span>
                                        </label>
                                      </div>
                                    </div>
                                    {/* health switch button style */}
                                  </div>
                                </div>       
                                {BenefitClaimed && <div className="col-md-6" id="PersonalInsuranceBenefitsDescription">
                                    <div className="mb-5">
                                      <label htmlFor="PersonalInsuranceBenefitsDescription" className="form-label">
                                        Description
                                      </label>
                                      <Field 
                                        as="textarea"                                      
                                        className="form-control shadow inputDesign"
                                        id="PersonalInsuranceBenefitsDescription"
                                        name='PersonalInsuranceBenefitsDescription'
                                        placeholder="Description" />
                                      <ErrorMessage component='div' className="text-danger fw-bold"name="PersonalInsuranceBenefitsDescription"/>
                                    </div>
                                  </div>}

                                  
                                  <div className="col-md-12">
                                  <div className="mb-3">
                                    <label htmlFor="" className="form-label">
                                    Have you had an application for personal insurance rejected for any reason?
                                    </label>
                                    {/* health button style */}
                                    <div className="form-check form-switch m-0 p-0 ">
                                      <div className="radiobutton">
                                        <input type="radio" name="PersonalInsuranceApplicationInsuranceradio" 
                                        id="PersonalInsuranceApplicationInsuranceopt1" value="Yes"
                                          onClick={()=> ApplicationInsuranceHandler("yes")} 
                                          onChange={handleChange}
                                          checked={values.PersonalInsuranceApplicationInsuranceradio==="Yes"}
                                          />
                                        <label htmlFor="PersonalInsuranceApplicationInsuranceopt1" className="label1">
                                          <span>YES</span>
                                        </label>
                                        <input type="radio" name="PersonalInsuranceApplicationInsuranceradio"  
                                        onClick={()=> ApplicationInsuranceHandler("no")}
                                        id="PersonalInsuranceApplicationInsuranceopt2" value="No"
                                        onChange={handleChange} 
                                        checked={values.PersonalInsuranceApplicationInsuranceradio==="No"}
                                        />
                                        <label htmlFor="PersonalInsuranceApplicationInsuranceopt2" className="label2">
                                          <span>NO</span>
                                        </label>
                                      </div>
                                    </div>
                                    {/* health switch button style */}
                                  </div>
                                </div>       
                                {ApplicationInsurance && <div className="col-md-6" id="PersonalInsuranceApplicationDescription">
                                    <div className="mb-5">
                                      <label htmlFor="PersonalInsuranceApplicationDescription" className="form-label">
                                        Description
                                      </label>
                                      <Field 
                                        as="textarea"                                      
                                        className="form-control shadow inputDesign"
                                        id="PersonalInsuranceApplicationDescription"
                                        name='PersonalInsuranceApplicationDescription'
                                        placeholder="Description" />
                                      <ErrorMessage component='div' className="text-danger fw-bold"name="PersonalInsuranceApplicationDescription"/>
                                    </div>
                                  </div>}


                                  <div className="col-md-12">
                                  <div className="mb-3">
                                    <label htmlFor="" className="form-label">
                                    Are you aware of any reason or impediment to you 
                                    obtaining life or disability cover from an insurer?
                                    </label>
                                    {/* health button style */}
                                    <div className="form-check form-switch m-0 p-0 ">
                                      <div className="radiobutton">
                                        <input type="radio" name="PersonalInsuranceImpedimentReasonradio" 
                                        id="PersonalInsuranceImpedimentReasonopt1" value="Yes"
                                          onClick={()=> ImpedimentReasonHandler("yes")} 
                                          onChange={handleChange}
                                          checked={values.PersonalInsuranceImpedimentReasonradio==="Yes"}
                                          />
                                        <label htmlFor="PersonalInsuranceImpedimentReasonopt1" className="label1">
                                          <span>YES</span>
                                        </label>
                                        <input type="radio" name="PersonalInsuranceImpedimentReasonradio"  
                                        onClick={()=> ImpedimentReasonHandler("no")}
                                        id="PersonalInsuranceImpedimentReasonopt2" value="No"
                                        onChange={handleChange} 
                                        checked={values.PersonalInsuranceImpedimentReasonradio==="No"}
                                        />
                                        <label htmlFor="PersonalInsuranceImpedimentReasonopt2" className="label2">
                                          <span>NO</span>
                                        </label>
                                      </div>
                                    </div>
                                    {/* health switch button style */}
                                  </div>
                                </div>       
                                {ImpedimentReason && <div className="col-md-6" id="PersonalInsuranceImpedimentReasonDescription">
                                    <div className="mb-5">
                                      <label htmlFor="PersonalInsuranceImpedimentReasonDescription" className="form-label">
                                        Description
                                      </label>
                                      <Field 
                                        as="textarea"                                      
                                        className="form-control shadow inputDesign"
                                        id="PersonalInsuranceImpedimentReasonDescription"
                                        name='PersonalInsuranceImpedimentReasonDescription'
                                        placeholder="Description" />
                                      <ErrorMessage component='div' className="text-danger fw-bold"
                                      name="PersonalInsuranceImpedimentReasonDescription"/>
                                    </div>
                                  </div>}

                                  <div className='my-3'>
                                    {/* --------------------------------------------- */}     
                                        {/* 1 row */}
                                        <div className="row mb-3">
                                      <div className="col-md-12">
                                            <div className="mb-3">
                                          <label  className="form-label">
                                          Do you have any personal Insurance cover? (Retail Cover Outside and Inside Super)
                                          </label>
                                        {/* switch button style */}
                                          <div className="form-check form-switch m-0 p-0 ">
                                        <div className="radiobutton">
                                          <input type="radio" name="PersonalInsuranceCoverRadio"
                                          id="PersonalInsuranceCoverOpt1" value="Yes"
                                          onClick={()=>PersonalInsuranceCoverHandler("Yes")} 
                                          onChange={handleChange}
                                          checked={values.PersonalInsuranceCoverRadio==="Yes"}
                                          />
                                          <label htmlFor="PersonalInsuranceCoverOpt1" className="label1">
                                            <span>YES</span>
                                          </label>
                                          <input type="radio" name="PersonalInsuranceCoverRadio"
                                          id="PersonalInsuranceCoverOpt2" value="No"
                                          onClick={()=>PersonalInsuranceCoverHandler("No")} 
                                          onChange={handleChange}
                                          checked={values.PersonalInsuranceCoverRadio==="No"}
                                        />
                                          <label htmlFor="PersonalInsuranceCoverOpt2" className="label2">
                                            <span>NO</span>
                                          </label>
                                        </div>



                                            
                                          </div>
                                            </div>    
                                      </div>
                                      {PersonalInsuranceCover && <div className='col-md-3 my-4'>
                                      <label  className="form-label">
                                      Life/TPD/Trauma
                                          </label>
                                          <br />
                                        
                                        <span
                                          className=" btn h-50 w-100
                                          btn-outline-success "
                                          onClick={PersonalInsuranceCoverhandleShow}
                                        >
                                          <div className="iconContainer mx-1">
                                          <img className="img-fluid" src={plus} alt="" />

                                          </div>
                                          Enter Details
                                        </span>
                                      </div>}
                                      {PersonalInsuranceCover && <div className='col-md-3 my-4'>
                                      <label  className="form-label">
                                      Income Protection
                                          </label>
                                          <br />
                                        
                                        <span
                                          className=" btn h-50 w-100
                                          btn-outline-success "
                                          onClick={PersonalInsuranceCover2handleShow}
                                        >
                                          <div className="iconContainer mx-1">
                                          <img className="img-fluid" src={plus} alt="" />

                                          </div>
                                          Enter Details
                                        </span>
                                      </div>}
                                        </div>
                                        {/* 1 row */}
                              
                                        <Modal
                                          show={PersonalInsuranceCovershow}
                                          onHide={PersonalInsuranceCoverhandleClose}
                                          backdrop="static"
                                          className="modal-lg"
                                          keyboard={false}
                                        >
                                          <Modal.Header
                                            className="text-light modalBG "
                                            closeButton
                                          >
                                            <Modal.Title className="fontStyle">
                                          Life / TPD / Trauma
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
                                              {/* Australian Share Market Form */}
                                              
                                              {/* Solicitor */}
                                      <div className=' '>
                                      <div className="row">
                                      
                                      <div className="col-md-12">
                                      <div className="mb-3">
                                        <label htmlFor="PersonalInsurancePolicyNO1" className="form-label">Policy#</   label>
                                        <Field type="number" className="form-control shadow inputDesign w-25" readOnly
                                        id="PersonalInsurancePolicyNO1" name='PersonalInsurancePolicyNO1'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='PersonalInsurancePolicyNO1' />
                                      </div>            
                                      </div>
                                      
                                      <div className="col-md-4">
                                          <div className="mb-3">
                                          <label  className="form-label">
                                          Life
                                          </label>
                                        {/* switch button style */}
                                          <div className="form-check form-switch m-0 p-0 ">
                                        <div className="radiobutton">
                                          <input type="radio" name="PersonalInsuranceLifeRadio"
                                          id="PersonalInsuranceLifeOpt1" value="Yes"
                                          onChange={handleChange}
                                          checked={values.PersonalInsuranceLifeRadio==="Yes"}
                                          />
                                          <label htmlFor="PersonalInsuranceLifeOpt1" className="label1">
                                            <span>YES</span>
                                          </label>
                                          <input type="radio" name="PersonalInsuranceLifeRadio"
                                          id="PersonalInsuranceLifeOpt2" value="No"
                                          onChange={handleChange}
                                          checked={values.PersonalInsuranceLifeRadio==="No"}
                                        />
                                          <label htmlFor="PersonalInsuranceLifeOpt2" className="label2">
                                            <span>NO</span>
                                          </label>
                                        </div>



                                            
                                          </div>
                                            </div>    
                                      </div>

                                      <div className="col-md-4">
                                          <div className="mb-3">
                                          <label  className="form-label">
                                          TPD
                                          </label>
                                        {/* switch button style */}
                                          <div className="form-check form-switch m-0 p-0 ">
                                        <div className="radiobutton">
                                          <input type="radio" name="PersonalInsuranceTPDRadio"
                                          id="PersonalInsuranceTPDOpt1" value="Yes"
                                          onChange={handleChange}
                                          checked={values.PersonalInsuranceTPDRadio==="Yes"}
                                          />
                                          <label htmlFor="PersonalInsuranceTPDOpt1" className="label1">
                                            <span>YES</span>
                                          </label>
                                          <input type="radio" name="PersonalInsuranceTPDRadio"
                                          id="PersonalInsuranceTPDOpt2" value="No"
                                          onChange={handleChange}
                                          checked={values.PersonalInsuranceTPDRadio==="No"}
                                        />
                                          <label htmlFor="PersonalInsuranceTPDOpt2" className="label2">
                                            <span>NO</span>
                                          </label>
                                        </div>



                                            
                                          </div>
                                            </div>    
                                      </div>

                                      <div className="col-md-4">
                                          <div className="mb-3">
                                          <label  className="form-label">
                                          Trauma
                                          </label>
                                        {/* switch button style */}
                                          <div className="form-check form-switch m-0 p-0 ">
                                        <div className="radiobutton">
                                          <input type="radio" name="PersonalInsuranceTraumaRadio"
                                          id="PersonalInsuranceTraumaOpt1" value="Yes"
                                          onChange={handleChange}
                                          checked={values.PersonalInsuranceTraumaRadio==="Yes"}
                                          />
                                          <label htmlFor="PersonalInsuranceTraumaOpt1" className="label1">
                                            <span>YES</span>
                                          </label>
                                          <input type="radio" name="PersonalInsuranceTraumaRadio"
                                          id="PersonalInsuranceTraumaOpt2" value="No"
                                          onChange={handleChange}
                                          checked={values.PersonalInsuranceTraumaRadio==="No"}
                                        />
                                          <label htmlFor="PersonalInsuranceTraumaOpt2" className="label2">
                                            <span>NO</span>
                                          </label>
                                        </div>



                                            
                                          </div>
                                            </div>    
                                      </div>                                          
                                      
                                      <div className="col-md-6">
                                      <div className="mb-3">
                                        <label htmlFor="PersonalInsurancePolicyOwner" className="form-label">Policy Owner</   label>
                                        <Field
                                                as='select'
                                                name="PersonalInsurancePolicyOwner"
                                                id="PersonalInsurancePolicyOwner"
                                                className="form-select shadow  inputDesign"
                                              >
                                                <option value=''>Select</option>
                                                <option value="SMSF">SMSF</option>
                                                <option value="Superannuation Fund">Superannuation Fund</option>
                                                <option value="Super Trustee">Super Trustee</option>
                                                <option value="Client">Client</option>
                                              </Field>
                                              <ErrorMessage name="PersonalInsurancePolicyOwner" component='div' className="text-danger fw-bold"/>
                                      </div>            
                                      </div>                                           
                                      
                                      <div className="col-md-6">
                                      <div className="mb-3">
                                        <label htmlFor="PersonalInsuranceLifeInsured" className="form-label">Life Insured</   label>
                                        <Field type="text" className="form-control shadow inputDesign" placeholder='Life Insured'
                                        id="PersonalInsuranceLifeInsured" name='PersonalInsuranceLifeInsured'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='PersonalInsuranceLifeInsured' />
                                      </div>            
                                      </div>                                               
                                      
                                      <div className="col-md-6">
                                      <div className="mb-3">
                                        <label htmlFor="PersonalInsuranceInsuranceCompany" className="form-label">Insurance Company</   label>
                                        <Field type="text" className="form-control shadow inputDesign" placeholder='Insurance Company'
                                        id="PersonalInsuranceInsuranceCompany" name='PersonalInsuranceInsuranceCompany'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='PersonalInsuranceInsuranceCompany' />
                                      </div>            
                                      </div>                                           
                                      
                                      <div className="col-md-6">
                                      <div className="mb-3">
                                        <label htmlFor="PersonalInsuranceProductName" className="form-label">Name of Product</   label>
                                        <Field type="text" className="form-control shadow inputDesign" placeholder='Product Name'
                                        id="PersonalInsuranceProductName" name='PersonalInsuranceProductName'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='PersonalInsuranceProductName' />
                                      </div>            
                                      </div>                                           
                                      
                                      <div className="col-md-6">
                                      <div className="mb-3">
                                        <label htmlFor="PersonalInsurancePolicySrNo" className="form-label">Policy No.</   label>
                                        <Field type="text" className="form-control shadow inputDesign" placeholder='Policy No'
                                        id="PersonalInsurancePolicySrNo" name='PersonalInsurancePolicySrNo'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='PersonalInsurancePolicySrNo' />
                                      </div>            
                                      </div>                                        
                                      
                                      <div className="col-md-6">
                                      <div className="mb-3">
                                        <label htmlFor="PersonalInsuranceCommencedDate" className="form-label">Date Commenced</   label>
                                        <Field type="date" className="form-control shadow inputDesign" 
                                        id="PersonalInsuranceCommencedDate" name='PersonalInsuranceCommencedDate'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='PersonalInsuranceCommencedDate' />
                                      </div>            
                                      </div>                                        
                                      
                                      <div className="col-md-6">
                                      <div className="mb-3">
                                        <label htmlFor="PersonalInsuranceRenewalDate" className="form-label">Renewal Date</   label>
                                        <Field type="date" className="form-control shadow inputDesign"
                                        id="PersonalInsuranceRenewalDate" name='PersonalInsuranceRenewalDate'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='PersonalInsuranceRenewalDate' />
                                      </div>            
                                      </div> 

                                      <div className="col-md-6">
                                        <div className="mb-3">
                                          <label className="form-label">Smoker</label>
                                          <div className="">
                                            <div  id="YesSmokerID" className=" selectedimage" onClick={()=>smokerHandler("smoker")}>
                                              <img
                                                className="img-fluid imgPerson"
                                                htmlFor="YesSmokerID"
                                                src={smoking}
                                                alt=""
                                              />

                                            </div>
                                          
                                          <div id="notSmokingID"  className="mx-1 notSelectedimage  " onClick={()=>smokerHandler("notSmoker")}>
                                              <img
                                                className=" img-fluid imgPerson"
                                                htmlFor="notSmokingID"
                                                src={notsmoking}
                                                alt=""
                                              />
                                            </div>

                                        
                                          </div>
                                        </div>
                                      </div>                                       
                                      
                                      <div className="col-md-6">
                                      <div className="mb-3">
                                        <label htmlFor="PersonalInsurancePremiumPA" className="form-label">Premium P.A.</   label>
                                        <Field type="text" className="form-control shadow inputDesign" placeholder='Premium P.A.'
                                        id="PersonalInsurancePremiumPA" name='PersonalInsurancePremiumPA'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='PersonalInsurancePremiumPA' />
                                      </div>            
                                      </div>                                             
                                      
                                      <div className="col-md-6">
                                      <div className="mb-3">
                                        <label htmlFor="PersonalInsurancePremiumType" className="form-label">Premium Type</   label>
                                        <Field
                                                as='select'
                                                name="PersonalInsurancePremiumType"
                                                id="PersonalInsurancePremiumType"
                                                className="form-select shadow  inputDesign"
                                              >
                                                <option value=''>Select</option>
                                                <option value="Level">Level</option>
                                                <option value="Stepped">Stepped</option>
                                                <option value="Other">Other</option>
                                              </Field>
                                              <ErrorMessage name="PersonalInsurancePremiumType" component='div' className="text-danger fw-bold"/>
                                      </div>            
                                      </div>  
                                      
                                      <div className="col-md-6">
                                          <div className="mb-3">
                                          <label  className="form-label">
                                          Indexed to CPI?
                                          </label>
                                        {/* switch button style */}
                                          <div className="form-check form-switch m-0 p-0 ">
                                        <div className="radiobutton">
                                          <input type="radio" name="PersonalInsuranceCPIIndexedRadio"
                                          id="PersonalInsuranceCPIIndexedOpt1" value="Yes"
                                          onChange={handleChange}
                                          checked={values.PersonalInsuranceCPIIndexedRadio==="Yes"}
                                          />
                                          <label htmlFor="PersonalInsuranceCPIIndexedOpt1" className="label1">
                                            <span>YES</span>
                                          </label>
                                          <input type="radio" name="PersonalInsuranceCPIIndexedRadio"
                                          id="PersonalInsuranceCPIIndexedOpt2" value="No"
                                          onChange={handleChange}
                                          checked={values.PersonalInsuranceCPIIndexedRadio==="No"}
                                        />
                                          <label htmlFor="PersonalInsuranceCPIIndexedOpt2" className="label2">
                                            <span>NO</span>
                                          </label>
                                        </div>
                                          </div>
                                            </div>    
                                      </div> 
                                      
                                      <div className="col-md-6">
                                          <div className="mb-3">
                                          <label  className="form-label">
                                          Superannuation Policy?
                                          </label>
                                        {/* switch button style */}
                                          <div className="form-check form-switch m-0 p-0 ">
                                        <div className="radiobutton">
                                          <input type="radio" name="PersonalInsuranceSuperannuationRadio"
                                          id="PersonalInsuranceSuperannuationOpt1" value="Yes"
                                          onChange={handleChange}
                                          checked={values.PersonalInsuranceSuperannuationRadio==="Yes"}
                                          />
                                          <label htmlFor="PersonalInsuranceSuperannuationOpt1" className="label1">
                                            <span>YES</span>
                                          </label>
                                          <input type="radio" name="PersonalInsuranceSuperannuationRadio"
                                          id="PersonalInsuranceSuperannuationOpt2" value="No"
                                          onChange={handleChange}
                                          checked={values.PersonalInsuranceSuperannuationRadio==="No"}
                                        />
                                          <label htmlFor="PersonalInsuranceSuperannuationOpt2" className="label2">
                                            <span>NO</span>
                                          </label>
                                        </div>
                                          </div>
                                            </div>    
                                      </div> 
                                      
                                      <div className="col-md-6">
                                          <div className="mb-3">
                                          <label  className="form-label">
                                          Continuation Option?
                                          </label>
                                        {/* switch button style */}
                                          <div className="form-check form-switch m-0 p-0 ">
                                        <div className="radiobutton">
                                          <input type="radio" name="PersonalInsuranceContinuationRadio"
                                          id="PersonalInsuranceContinuationOpt1" value="Yes"
                                          onChange={handleChange}
                                          checked={values.PersonalInsuranceContinuationRadio==="Yes"}
                                          />
                                          <label htmlFor="PersonalInsuranceContinuationOpt1" className="label1">
                                            <span>YES</span>
                                          </label>
                                          <input type="radio" name="PersonalInsuranceContinuationRadio"
                                          id="PersonalInsuranceContinuationOpt2" value="No"
                                          onChange={handleChange}
                                          checked={values.PersonalInsuranceContinuationRadio==="No"}
                                        />
                                          <label htmlFor="PersonalInsuranceContinuationOpt2" className="label2">
                                            <span>NO</span>
                                          </label>
                                        </div>
                                          </div>
                                            </div>    
                                      </div>  
                                      
                                      <div className="col-md-6">
                                          <div className="mb-3">
                                          <label  className="form-label">
                                          Any Loading Or Exclusions
                                          </label>
                                        {/* switch button style */}
                                          <div className="form-check form-switch m-0 p-0 ">
                                        <div className="radiobutton">
                                          <input type="radio" name="PersonalInsuranceLoadingRadio"
                                          id="PersonalInsuranceLoadingOpt1" value="Yes" 
                                          onClick={()=> Description1Handler("yes")} 
                                          onChange={handleChange}
                                          checked={values.PersonalInsuranceLoadingRadio==="Yes"}
                                          />
                                          <label htmlFor="PersonalInsuranceLoadingOpt1" className="label1">
                                            <span>YES</span>
                                          </label>
                                          <input type="radio" name="PersonalInsuranceLoadingRadio"
                                          id="PersonalInsuranceLoadingOpt2" value="No" 
                                          onClick={()=> Description1Handler("no")} 
                                          onChange={handleChange}
                                          checked={values.PersonalInsuranceLoadingRadio==="No"}
                                        />
                                          <label htmlFor="PersonalInsuranceLoadingOpt2" className="label2">
                                            <span>NO</span>
                                          </label>
                                        </div>
                                          </div>
                                            </div>    
                                      </div>     
                                      {Description1 && <div className='row'> <div className='col-md-6'></div>
                                      <div className="col-md-6" id="PersonalInsuranceLoadingDescription1">
                                    <div className="mb-5">
                                      <label htmlFor="PersonalInsuranceLoadingDescription1" className="form-label">
                                        Description
                                      </label>
                                      <Field 
                                        as="textarea"                                      
                                        className="form-control shadow inputDesign"
                                        id="PersonalInsuranceLoadingDescription1"
                                        name='PersonalInsuranceLoadingDescription1'
                                        placeholder="Description" />
                                      <ErrorMessage component='div' className="text-danger fw-bold"
                                      name="PersonalInsuranceLoadingDescription1"/>
                                    </div>
                                      </div>
                                        </div>}             

                                        </div>                                      
                                      </div>
                                      {/* Solicitor */}

                                      {/*Australian Share Detail Form */}
                                        
                                          </Modal.Body>
                                          <Modal.Footer>
                                            <div className="col-md-12">
                                              <button
                                                className="float-end btn w-25  bgColor modalBtn"
                                                // onClick={PersonalInsuranceCoverhandleClose}
                                                type='submit'
                                              >
                                                Save
                                              </button>
                                              <button
                                                className="float-end btn w-25  btn-outline  backBtn mx-3"
                                                onClick={PersonalInsuranceCoverhandleClose}
                                              >
                                                Cancel
                                              </button>
                                            </div>
                                          </Modal.Footer>
                                          </Form>
                                          }
                                        </Formik>
                                        </Modal>

                                        <Modal
                                          show={PersonalInsuranceCovershow2}
                                          onHide={PersonalInsuranceCover2handleClose}
                                          backdrop="static"
                                          className="modal-lg"
                                          keyboard={false}
                                        >
                                          <Modal.Header
                                            className="text-light modalBG "
                                            closeButton
                                          >
                                            <Modal.Title className="fontStyle">
                                          Income Protection
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
                                              {/* Australian Share Market Form */}
                                              
                                              {/* Solicitor */}
                                      <div className=' '>
                                      <div className="row">
                                      
                                      <div className="col-md-12">
                                      <div className="mb-3">
                                        <label htmlFor="PersonalInsurance2PolicyNO1" className="form-label">Policy#</   label>
                                        <Field type="number" className="form-control shadow inputDesign w-25" readOnly
                                        id="PersonalInsurance2PolicyNO1" name='PersonalInsurance2PolicyNO1'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='PersonalInsurance2PolicyNO1' />
                                      </div>            
                                      </div>                                         
                                      
                                      <div className="col-md-6">
                                      <div className="mb-3">
                                        <label htmlFor="PersonalInsurance2PolicyOwner" className="form-label">Policy Owner</   label>
                                        <Field
                                                as='select'
                                                name="PersonalInsurance2PolicyOwner"
                                                id="PersonalInsurance2PolicyOwner"
                                                className="form-select shadow  inputDesign"
                                              >
                                                <option value=''>Select</option>
                                                <option value="SMSF">SMSF</option>
                                                <option value="Superannuation Fund">Superannuation Fund</option>
                                                <option value="Super Trustee">Super Trustee</option>
                                                <option value="Client">Client</option>
                                              </Field>
                                              <ErrorMessage name="PersonalInsurance2PolicyOwner" component='div' className="text-danger fw-bold"/>
                                      </div>            
                                      </div>                                           
                                      
                                      <div className="col-md-6">
                                      <div className="mb-3">
                                        <label htmlFor="PersonalInsurance2LifeInsured" className="form-label">Life Insured</   label>
                                        <Field type="text" className="form-control shadow inputDesign" placeholder='Life Insured'
                                        id="PersonalInsurance2LifeInsured" name='PersonalInsurance2LifeInsured'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='PersonalInsurance2LifeInsured' />
                                      </div>            
                                      </div>                                               
                                      
                                      <div className="col-md-6">
                                      <div className="mb-3">
                                        <label htmlFor="PersonalInsurance2InsuranceCompany" className="form-label">Insurance Company</   label>
                                        <Field type="text" className="form-control shadow inputDesign" placeholder='Insurance Company'
                                        id="PersonalInsurance2InsuranceCompany" name='PersonalInsurance2InsuranceCompany'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='PersonalInsurance2InsuranceCompany' />
                                      </div>            
                                      </div>                                           
                                      
                                      <div className="col-md-6">
                                      <div className="mb-3">
                                        <label htmlFor="PersonalInsurance2ProductName" className="form-label">Name of Product</   label>
                                        <Field type="text" className="form-control shadow inputDesign" placeholder='Product Name'
                                        id="PersonalInsurance2ProductName" name='PersonalInsurance2ProductName'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='PersonalInsurance2ProductName' />
                                      </div>            
                                      </div>                                           
                                      
                                      <div className="col-md-6">
                                      <div className="mb-3">
                                        <label htmlFor="PersonalInsurance2PolicySrNo" className="form-label">Policy No.</   label>
                                        <Field type="text" className="form-control shadow inputDesign" placeholder='Policy No'
                                        id="PersonalInsurance2PolicySrNo" name='PersonalInsurance2PolicySrNo'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='PersonalInsurance2PolicySrNo' />
                                      </div>            
                                      </div>                                        
                                      
                                      <div className="col-md-6">
                                      <div className="mb-3">
                                        <label htmlFor="PersonalInsurance2CommencedDate" className="form-label">Date Commenced</   label>
                                        <Field type="date" className="form-control shadow inputDesign" 
                                        id="PersonalInsurance2CommencedDate" name='PersonalInsurance2CommencedDate'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='PersonalInsurance2CommencedDate' />
                                      </div>            
                                      </div>                                        
                                      
                                      <div className="col-md-6">
                                      <div className="mb-3">
                                        <label htmlFor="PersonalInsurance2RenewalDate" className="form-label">Renewal Date</   label>
                                        <Field type="date" className="form-control shadow inputDesign"
                                        id="PersonalInsurance2RenewalDate" name='PersonalInsurance2RenewalDate'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='PersonalInsurance2RenewalDate' />
                                      </div>            
                                      </div> 

                                      <div className="col-md-6">
                                        <div className="mb-3">
                                          <label className="form-label">Smoker</label>
                                          <div className="">
                                            <div  id="YesSmokerID" className=" selectedimage" onClick={()=>smokerHandler("smoker")}>
                                              <img
                                                className="img-fluid imgPerson"
                                                htmlFor="YesSmokerID"
                                                src={smoking}
                                                alt=""
                                              />

                                            </div>
                                          
                                          <div id="notSmokingID"  className="mx-1 notSelectedimage  " onClick={()=>smokerHandler("notSmoker")}>
                                              <img
                                                className=" img-fluid imgPerson"
                                                htmlFor="notSmokingID"
                                                src={notsmoking}
                                                alt=""
                                              />
                                            </div>

                                        
                                          </div>
                                        </div>
                                      </div>                                                     
                                      
                                      <div className="col-md-6">
                                      <div className="mb-3">
                                        <label htmlFor="PersonalInsurance2MonthlyBenefit" className="form-label">Monthly Benefit</   label>
                                        <Field type="number" className="form-control shadow inputDesign" placeholder='Monthly Benefit'
                                        id="PersonalInsurance2MonthlyBenefit" name='PersonalInsurance2MonthlyBenefit'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='PersonalInsurance2MonthlyBenefit' />
                                      </div>            
                                      </div>                                          
                                      
                                      <div className="col-md-6">
                                      <div className="mb-3">
                                        <label htmlFor="PersonalInsurance2SuperContinuance" className="form-label">Super Continuance Amount (monthly)</label>
                                        <Field type="number" className="form-control shadow inputDesign" placeholder='Super Continuance Amount'
                                        id="PersonalInsurance2SuperContinuance" name='PersonalInsurance2SuperContinuance'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='PersonalInsurance2SuperContinuance' />
                                      </div>            
                                      </div>                                                        
                                      
                                      <div className="col-md-6">
                                      <div className="mb-3">
                                        <label htmlFor="PersonalInsurance2WaitingPeriod" className="form-label">Waiting Period</   label>
                                        <Field
                                                as='select'
                                                name="PersonalInsurance2WaitingPeriod"
                                                id="PersonalInsurance2WaitingPeriod"
                                                className="form-select shadow  inputDesign"
                                              >
                                                <option value=''>Select</option>
                                                <option value="30 Days">30 Days</option>
                                                <option value="60 Days">60 Days</option>
                                                <option value="90 Days">90 Days</option>
                                                <option value="180 Days">180 Days</option>
                                                <option value="1 Year">1 Year</option>
                                                <option value="2 Year">2 Year</option>
                                              </Field>
                                              <ErrorMessage name="PersonalInsurance2WaitingPeriod" component='div' className="text-danger fw-bold"/>
                                      </div>            
                                      </div>                                            
                                      
                                      <div className="col-md-6">
                                      <div className="mb-3">
                                        <label htmlFor="PersonalInsurance2BenefitPeriod" className="form-label">Benefit Period</   label>
                                        <Field
                                                as='select'
                                                name="PersonalInsurance2BenefitPeriod"
                                                id="PersonalInsurance2BenefitPeriod"
                                                className="form-select shadow  inputDesign"
                                              >
                                                <option value=''>Select</option>
                                                <option value="1 Year">1 Year</option>
                                                <option value="2 Year">2 Year</option>
                                                <option value="5 Year">5 Year</option>
                                                <option value="Until Age 60">Until Age 60</option>
                                                <option value="Until Age 65">Until Age 65</option>
                                                <option value="Until Age 67">Until Age 67</option>
                                                <option value="Until Age 70">Until Age 70</option>
                                              </Field>
                                              <ErrorMessage name="PersonalInsurance2BenefitPeriod" component='div' className="text-danger fw-bold"/>
                                      </div>            
                                      </div>                                                            
                                      
                                      <div className="col-md-6">
                                      <div className="mb-3">
                                        <label htmlFor="PersonalInsurance2IndemnityPeriod" className="form-label">Agreed or Indemnity?</   label>
                                        <Field
                                                as='select'
                                                name="PersonalInsurance2IndemnityPeriod"
                                                id="PersonalInsurance2IndemnityPeriod"
                                                className="form-select shadow  inputDesign"
                                              >
                                                <option value=''>Select</option>
                                                <option value="Agreed">Agreed</option>
                                                <option value="Indemnity">Indemnity</option>
                                              </Field>
                                              <ErrorMessage name="PersonalInsurance2IndemnityPeriod" component='div' className="text-danger fw-bold"/>
                                      </div>            
                                      </div>
                                      
                                      <div className="col-md-6">
                                      <div className="mb-3">
                                        <label htmlFor="PersonalInsurance2PremiumPA" className="form-label">Premium P.A.</   label>
                                        <Field type="text" className="form-control shadow inputDesign" placeholder='Premium P.A.'
                                        id="PersonalInsurance2PremiumPA" name='PersonalInsurance2PremiumPA'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='PersonalInsurance2PremiumPA' />
                                      </div>            
                                      </div>                                             
                                      
                                      <div className="col-md-6">
                                      <div className="mb-3">
                                        <label htmlFor="PersonalInsurance2PremiumType" className="form-label">Premium Type</   label>
                                        <Field
                                                as='select'
                                                name="PersonalInsurance2PremiumType"
                                                id="PersonalInsurance2PremiumType"
                                                className="form-select shadow  inputDesign"
                                              >
                                                <option value=''>Select</option>
                                                <option value="Level">Level</option>
                                                <option value="Stepped">Stepped</option>
                                                <option value="Other">Other</option>
                                              </Field>
                                              <ErrorMessage name="PersonalInsurance2PremiumType" component='div' className="text-danger fw-bold"/>
                                      </div>            
                                      </div>   
                                      
                                      <div className="col-md-6">
                                          <div className="mb-3">
                                          <label  className="form-label">
                                          Superannuation Policy?
                                          </label>
                                        {/* switch button style */}
                                          <div className="form-check form-switch m-0 p-0 ">
                                        <div className="radiobutton">
                                          <input type="radio" name="PersonalInsurance2SuperannuationRadio"
                                          id="PersonalInsurance2SuperannuationOpt1" value="Yes"
                                          onChange={handleChange}
                                          checked={values.PersonalInsurance2SuperannuationRadio==="Yes"}
                                          />
                                          <label htmlFor="PersonalInsurance2SuperannuationOpt1" className="label1">
                                            <span>YES</span>
                                          </label>
                                          <input type="radio" name="PersonalInsurance2SuperannuationRadio"
                                          id="PersonalInsurance2SuperannuationOpt2" value="No"
                                          onChange={handleChange}
                                          checked={values.PersonalInsurance2SuperannuationRadio==="No"}
                                        />
                                          <label htmlFor="PersonalInsurance2SuperannuationOpt2" className="label2">
                                            <span>NO</span>
                                          </label>
                                        </div>
                                          </div>
                                            </div>    
                                      </div>    
                                      
                                      <div className="col-md-6">
                                          <div className="mb-3">
                                          <label  className="form-label">
                                          Accident Option?
                                          </label>
                                        {/* switch button style */}
                                          <div className="form-check form-switch m-0 p-0 ">
                                        <div className="radiobutton">
                                          <input type="radio" name="PersonalInsurance2AccidentRadio"
                                          id="PersonalInsurance2AccidentOpt1" value="Yes"
                                          onChange={handleChange}
                                          checked={values.PersonalInsurance2AccidentRadio==="Yes"}
                                          />
                                          <label htmlFor="PersonalInsurance2AccidentOpt1" className="label1">
                                            <span>YES</span>
                                          </label>
                                          <input type="radio" name="PersonalInsurance2AccidentRadio"
                                          id="PersonalInsurance2AccidentOpt2" value="No"
                                          onChange={handleChange}
                                          checked={values.PersonalInsurance2AccidentRadio==="No"}
                                        />
                                          <label htmlFor="PersonalInsurance2AccidentOpt2" className="label2">
                                            <span>NO</span>
                                          </label>
                                        </div>
                                          </div>
                                            </div>    
                                      </div>   
                                      
                                      <div className="col-md-6">
                                          <div className="mb-3">
                                          <label  className="form-label">
                                          Increasing Claims Option?
                                          </label>
                                        {/* switch button style */}
                                          <div className="form-check form-switch m-0 p-0 ">
                                        <div className="radiobutton">
                                          <input type="radio" name="PersonalInsurance2IncreasingClaimsRadio"
                                          id="PersonalInsurance2IncreasingClaimsOpt1" value="Yes"
                                          onChange={handleChange}
                                          checked={values.PersonalInsurance2IncreasingClaimsRadio==="Yes"}
                                          />
                                          <label htmlFor="PersonalInsurance2IncreasingClaimsOpt1" className="label1">
                                            <span>YES</span>
                                          </label>
                                          <input type="radio" name="PersonalInsurance2IncreasingClaimsRadio"
                                          id="PersonalInsurance2IncreasingClaimsOpt2" value="No"
                                          onChange={handleChange}
                                          checked={values.PersonalInsurance2IncreasingClaimsRadio==="No"}
                                        />
                                          <label htmlFor="PersonalInsurance2IncreasingClaimsOpt2" className="label2">
                                            <span>NO</span>
                                          </label>
                                        </div>
                                          </div>
                                            </div>    
                                      </div>   
                                      
                                      <div className="col-md-6">
                                          <div className="mb-3">
                                          <label  className="form-label">
                                          TPD Option?
                                          </label>
                                        {/* switch button style */}
                                          <div className="form-check form-switch m-0 p-0 ">
                                        <div className="radiobutton">
                                          <input type="radio" name="PersonalInsurance2TPDRadio"
                                          id="PersonalInsurance2TPDOpt1" value="Yes"
                                          onChange={handleChange}
                                          checked={values.PersonalInsurance2TPDRadio==="Yes"}
                                          />
                                          <label htmlFor="PersonalInsurance2TPDOpt1" className="label1">
                                            <span>YES</span>
                                          </label>
                                          <input type="radio" name="PersonalInsurance2TPDRadio"
                                          id="PersonalInsurance2TPDOpt2" value="No"
                                          onChange={handleChange}
                                          checked={values.PersonalInsurance2TPDRadio==="No"}
                                        />
                                          <label htmlFor="PersonalInsurance2TPDOpt2" className="label2">
                                            <span>NO</span>
                                          </label>
                                        </div>
                                          </div>
                                            </div>    
                                      </div>  
                                      
                                      <div className="col-md-6">
                                          <div className="mb-3">
                                          <label  className="form-label">
                                          Is the benefit indexed?
                                          </label>
                                        {/* switch button style */}
                                          <div className="form-check form-switch m-0 p-0 ">
                                        <div className="radiobutton">
                                          <input type="radio" name="PersonalInsurance2BenefitIndexedRadio"
                                          id="PersonalInsurance2BenefitIndexedOpt1" value="Yes"
                                          onChange={handleChange}
                                          checked={values.PersonalInsurance2BenefitIndexedRadio==="Yes"}
                                          />
                                          <label htmlFor="PersonalInsurance2BenefitIndexedOpt1" className="label1">
                                            <span>YES</span>
                                          </label>
                                          <input type="radio" name="PersonalInsurance2BenefitIndexedRadio"
                                          id="PersonalInsurance2BenefitIndexedOpt2" value="No"
                                          onChange={handleChange}
                                          checked={values.PersonalInsurance2BenefitIndexedRadio==="No"}
                                        />
                                          <label htmlFor="PersonalInsurance2BenefitIndexedOpt2" className="label2">
                                            <span>NO</span>
                                          </label>
                                        </div>
                                          </div>
                                            </div>    
                                      </div>
                                      
                                      <div className="col-md-6">
                                          <div className="mb-3">
                                          <label  className="form-label">
                                          Any Loading Or Exclusions
                                          </label>
                                        {/* switch button style */}
                                          <div className="form-check form-switch m-0 p-0 ">
                                        <div className="radiobutton">
                                          <input type="radio" name="PersonalInsurance2LoadingRadio"
                                          id="PersonalInsurance2LoadingOpt1" value="Yes"
                                          onClick={()=> Description2Handler("yes")} 
                                          onChange={handleChange}
                                          checked={values.PersonalInsurance2LoadingRadio==="Yes"}
                                          />
                                          <label htmlFor="PersonalInsurance2LoadingOpt1" className="label1">
                                            <span>YES</span>
                                          </label>
                                          <input type="radio" name="PersonalInsurance2LoadingRadio"
                                          id="PersonalInsurance2LoadingOpt2" value="No"
                                          onClick={()=> Description2Handler("no")} 
                                          onChange={handleChange}
                                          checked={values.PersonalInsurance2LoadingRadio==="No"}
                                        />
                                          <label htmlFor="PersonalInsurance2LoadingOpt2" className="label2">
                                            <span>NO</span>
                                          </label>
                                        </div>
                                          </div>
                                            </div>    
                                      </div>                  
                                      {Description2 && <div className="col-md-8" id="PersonalInsurance2LoadingDescription2">
                                    <div className="mb-5">
                                      <label htmlFor="PersonalInsurance2LoadingDescription2" className="form-label">
                                        Description
                                      </label>
                                      <Field 
                                        as="textarea"                                      
                                        className="form-control shadow inputDesign"
                                        id="PersonalInsurance2LoadingDescription2"
                                        name='PersonalInsurance2LoadingDescription2'
                                        placeholder="Description" />
                                      <ErrorMessage component='div' className="text-danger fw-bold"
                                      name="PersonalInsurance2LoadingDescription2"/>
                                    </div>
                                      </div>}

                                        </div>                                      
                                      </div>
                                      {/* Solicitor */}

                                      {/*Australian Share Detail Form */}
                                        
                                          </Modal.Body>
                                          <Modal.Footer>
                                            <div className="col-md-12">
                                              <button
                                                className="float-end btn w-25  bgColor modalBtn"
                                                // onClick={PersonalInsuranceCoverhandleClose}
                                                type='submit'
                                              >
                                                Save
                                              </button>
                                              <button
                                                className="float-end btn w-25  btn-outline  backBtn mx-3"
                                                onClick={PersonalInsuranceCover2handleClose}
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

                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row mb-4 mt-2">
                          <div className="col-md-12">
                            <button  type='submit' className="float-end btn w-25  bgColor modalBtn">Next</button>
                            <button className="float-end btn w-25  btn-outline  backBtn mx-3" onClick={BackFunction}>Back</button>
                          </div>
                        </div>

                      </Form>
                      }
                      </Formik>
                      </>
  )
}

export default PersonalInsurance