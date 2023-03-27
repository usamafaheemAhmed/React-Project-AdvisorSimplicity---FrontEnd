import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import * as Yup from 'yup';
import 'yup-phone';
import plus from "./images/plus.svg"
import notebook from './images/notebook.svg';
import "./assets.css";


import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const AssetsLiabilities = () => {

    let postCodePattern=/^\d{4}$/;
  
    const [ownFamily, setOwnFamily] = useState(false)
    const [propertyLoanState, setPropertyLoanState] = useState(false)
    const [personalAssetsState, setPersonalAssetsState] = useState(false)
    const [personalLoanState, setPersonalLoanState] = useState(false)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    const [ownFamilyList, setOwnFamilyList] = useState([])
    
    const [contentList, setContentList] = useState([])
    const [MotorVehicle1, setMotorVehicle1] = useState([])
    const [MotorVehicle2, setMotorVehicle2] = useState([])
    const [Boat, setBoat] = useState([])
    const [Caravan, setCaravan] = useState([])
    const [personalOther, setPersonalOther] = useState([])

    // table3 state lists
    const [CreditCardList1, setCreditCardList1] = useState([])
    const [CreditCardList2, setCreditCardList2] = useState([])
    const [PersonalLoanList1, setPersonalLoanList1] = useState([])
    const [PersonalLoanList2, setPersonalLoanList2] = useState([])





    let ownFamilyHandler=(elem)=>{
        if (elem==="No"){
            setOwnFamily(false)
        }
        else{
            setOwnFamily(true)
        }
        
        }
    let propertyLoanradioHandler=(elem)=>{
            if (elem==="No"){
                setPropertyLoanState(false)
            }
            else{
                setPropertyLoanState(true)
            }
            
            }

            let personalLoansHandler=(elem)=>{
              if (elem==="No"){
                setPersonalLoanState(false)
              }
              else{
                setPersonalLoanState(true)
              }
              
              }

            let personalAssetsHandler=(elem)=>{
                if (elem==="No"){
                    setPersonalAssetsState(false)
                }
                else{
                    setPersonalAssetsState(true)
                }
                
                }

        let initialValues={
            ownFamilyradio:'No',
            personalAssetsradio:'No',
            personalLoansradio:'No',
        }
        let validationSchema = Yup.object({})
        
        let Navigate = useNavigate();

        function BackFunction(){
          Navigate('/Professional-Advisors')
        }
        let onSubmit = (Values) => {

          let AssetsDetails = {
            Email: localStorage.getItem("ClientEmail"),
            FamilyHome: Values.ownFamilyradio,
            PersonalAssets: Values.personalAssetsradio,
            PersonalDebts: Values.personalLoansradio
          }

          axios
          .post('http://localhost:7000/Client-Assets/Add-Client-Assets', AssetsDetails)
          .then((res) => console.log("Assets Details Added Successfully!"));

        console.log(AssetsDetails)
        Navigate('/Investments');
        
        }

        let own_initialValues={
            home:1,
            currentValue:'',
            clientPercentage:50,
            partnerPercentage:50,
            costBasePurchasePrice:'',
            address:'',
            postcodeSuburb:'',
            AmountAssessedForCentrelink:'',

            propertyLoanradio:'No',
            clientPercentageofBorrowing:'',
            partnerPercentageofBorrowing:'',
            currentBalance:'',
            repaymentsAmount:'',
            frequency:'',
            annualRepayments:'',
            interestRatePA:'',
            loanTerm:'',
            loanType:'',
            yearsRemaining:'',
            
        }
        let own_validationSchema = Yup.object({
            // home:Yup.number().required('Required') ,
            currentValue:Yup.number().required("Required")
           .test(
             "Is positive?",
             "Value must be a positive number",
             (value) => value > 0
           ),
            clientPercentage:Yup.number().required("Required")
           .test(
             "Is positive?",
             "Value must be a positive number",
             (value) => value > 0
           ),
            partnerPercentage:Yup.number().required("Required")
           .test(
             "Is positive?",
             "Value must be a positive number",
             (value) => value > 0
           ),
            costBasePurchasePrice:Yup.number().required("Required")
           .test(
             "Is positive?",
             "Value must be a positive number",
             (value) => value > 0
           ),
            address:Yup.string().required('Required') ,
            postcodeSuburb:Yup.string().matches(postCodePattern,"invalid postcode").required('Required'),

            AmountAssessedForCentrelink:Yup.number().required("Required")
           .test(
             "Is positive?",
             "Value must be a positive number",
             (value) => value > 0
           ),
            

            clientPercentageofBorrowing:Yup.number()
    .when('propertyLoanradio',{
      is: val => val && val.length ===3,
      then:Yup.number().required("Required")
      .test(
        "Is positive?",
        "Must be a positive number",
        (value)=> value >0
      ),
      otherwise: Yup.number().notRequired()
    }),

            partnerPercentageofBorrowing:Yup.number()
    .when('propertyLoanradio',{
      is: val => val && val.length ===3,
      then:Yup.number().required("Required")
      .test(
        "Is positive?",
        "Must be a positive number",
        (value)=> value >0
      ),
      otherwise: Yup.number().notRequired()
    }),

            currentBalance:Yup.number()
    .when('propertyLoanradio',{
      is: val => val && val.length ===3,
      then:Yup.number().required("Required")
      .test(
        "Is positive?",
        "Must be a positive number",
        (value)=> value >0
      ),
      otherwise: Yup.number().notRequired()
    }),

            repaymentsAmount:Yup.number()
    .when('propertyLoanradio',{
      is: val => val && val.length ===3,
      then:Yup.number().required("Required")
      .test(
        "Is positive?",
        "Must be a positive number",
        (value)=> value >0
      ),
      otherwise: Yup.number().notRequired()
    }),

    //         annualRepayments:Yup.number()
    // .when('propertyLoanradio',{
    //   is: val => val && val.length ===3,
    //   then:Yup.number().required("Required")
    //   .test(
    //     "Is positive?",
    //     "Must be a positive number",
    //     (value)=> value >0
    //   ),
    //   otherwise: Yup.number().notRequired()
    // }),

            interestRatePA:Yup.number()
    .when('propertyLoanradio',{
      is: val => val && val.length ===3,
      then:Yup.number().required("Required")
      .test(
        "Is positive?",
        "Must be a positive number",
        (value)=> value >0
      ),
      otherwise: Yup.number().notRequired()
    }),



            frequency:Yup.string()
    .when("propertyLoanradio",{
      is: val => val && val.length===3,
      then:Yup.string().required("Required")
      ,otherwise: Yup.string()
      .notRequired()
    }),

            loanTerm:Yup.string()
    .when("propertyLoanradio",{
      is: val => val && val.length===3,
      then:Yup.string().required("Required")
      ,otherwise: Yup.string()
      .notRequired()
    }),

            loanType:Yup.string()
    .when("propertyLoanradio",{
      is: val => val && val.length===3,
      then:Yup.string().required("Required")
      ,otherwise: Yup.string()
      .notRequired()
    }),

            yearsRemaining:Yup.string()
    .when("propertyLoanradio",{
      is: val => val && val.length===3,
      then:Yup.string().required("Required")
      ,otherwise: Yup.string()
      .notRequired()
    }),

        })
        
        let own_onSubmit = (Values) => {

          let ClientFamilyHomeDetails={
            Email: localStorage.getItem("ClientEmail"),
            HomeNO:  parseFloat(Values.home)||0,
            CurrentValue:  Values.currentValue,
            ClientOwnership: Values.clientPercentage,
            PartnerOwnership: Values.partnerPercentage,
            CostBase:  Values.costBasePurchasePrice,
            Address: Values.address,
            Postcode: Values.postcodeSuburb,
            AmountAssessed: Values.AmountAssessedForCentrelink,

            PropertyLoan: Values.propertyLoanradio,
            ClientBorrowingPercentage: Values.clientPercentageofBorrowing,
            PartnerBorrowingPercentage: Values.partnerPercentageofBorrowing,
            CurrentBalance: Values.currentBalance,
            RepaymentAmounts: Values.repaymentsAmount,
            Frequency: Values.frequency,
            AnnualRepayments: 5000,
            InterestRate: Values.interestRatePA,
            LoanTerm: Values.loanTerm,
            LoanType: Values.loanType,
            YearsRemaining: Values.yearsRemaining,
            
          }


          setOwnFamilyList([ClientFamilyHomeDetails])

          axios
          .post('http://localhost:7000/Client-FamilyHome/Add-Client-FamilyHome', ClientFamilyHomeDetails)
          .then((res) => console.log("Family Home Added Successfully!"))
          
          console.log(ClientFamilyHomeDetails)
        handleClose();
        }

        let personalAssetsInitialValues={
            contentCurrentValue:'',
            contentCentrelinkValue:'',
            contentradio:'No',
            motor1CurrentValue:'',
            motor1CentrelinkValue:'',
            motor1radio:'No',
            motor2CurrentValue:'',
            motor2CentrelinkValue:'',
            motor2radio:'No',
            boatCurrentValue:'',
            boatCentrelinkValue:'',
            boatradio:'No',
            carvanCurrentValue:'',
            carvanCentrelinkValue:'',
            carvanradio:'No',
            otherCurrentValue:'',
            otherCentrelinkValue:'',
            otherradio:'No',
            
        }
        let personalAssetsValidationSchema = Yup.object({
            contentCurrentValue:Yup.number().required("Required")
           .test(
             "Is positive?",
             "Value must be a positive number",
             (value) => value > 0
           ),
            contentCentrelinkValue:Yup.number().required("Required")
           .test(
             "Is positive?",
             "Value must be a positive number",
             (value) => value > 0
           ),
            motor1CurrentValue:Yup.number().required("Required")
           .test(
             "Is positive?",
             "Value must be a positive number",
             (value) => value > 0
           ),
            motor1CentrelinkValue:Yup.number().required("Required")
           .test(
             "Is positive?",
             "Value must be a positive number",
             (value) => value > 0
           ),
            motor2CurrentValue:Yup.number().required("Required")
           .test(
             "Is positive?",
             "Value must be a positive number",
             (value) => value > 0
           ),
            motor2CentrelinkValue:Yup.number().required("Required")
           .test(
             "Is positive?",
             "Value must be a positive number",
             (value) => value > 0
           ),
            boatCurrentValue:Yup.number().required("Required")
           .test(
             "Is positive?",
             "Value must be a positive number",
             (value) => value > 0
           ),
            boatCentrelinkValue:Yup.number().required("Required")
           .test(
             "Is positive?",
             "Value must be a positive number",
             (value) => value > 0
           ),
            carvanCurrentValue:Yup.number().required("Required")
           .test(
             "Is positive?",
             "Value must be a positive number",
             (value) => value > 0
           ),
            carvanCentrelinkValue:Yup.number().required("Required")
           .test(
             "Is positive?",
             "Value must be a positive number",
             (value) => value > 0
           ),
            otherCurrentValue:Yup.number().required("Required")
           .test(
             "Is positive?",
             "Value must be a positive number",
             (value) => value > 0
           ),
            otherCentrelinkValue:Yup.number().required("Required")
           .test(
             "Is positive?",
             "Value must be a positive number",
             (value) => value > 0
           ),
           
        })
        
        let personalAssetsOnSubmit = (Values) => {
        
          let ClientPersonalAssets={
            Email: localStorage.getItem("ClientEmail"),
            Contents_CurrentValue:  Values.contentCurrentValue,
            Contents_CentreLinkValue:  Values.contentCentrelinkValue,
            Contents_Security:  Values.contentradio,

            MotorVehicle1_CurrentValue: Values.motor1CurrentValue,
            MotorVehicle1_CentreLinkValue: Values.motor1CentrelinkValue,
            MotorVehicle1_Security:  Values.motor1radio,

            MotorVehicle2_CurrentValue: Values.motor2CurrentValue,
            MotorVehicle2_CentreLinkValue: Values.motor2CentrelinkValue,
            MotorVehicle2_Security:  Values.motor2radio,

            Boat_CurrentValue: Values.boatCurrentValue,
            Boat_CentreLinkValue: Values.boatCentrelinkValue,
            Boat_Security: Values.boatradio,
            Caravan_CurrentValue:  Values.carvanCurrentValue,
            Caravan_CentreLinkValue:  Values.carvanCentrelinkValue,
            Caravan_Security: Values.carvanradio,
            Other_CurrentValue: Values.otherCurrentValue,
            Other_CentreLinkValue:  Values.otherCentrelinkValue,
            Other_Security: Values.otherradio,
            
        }

        setContentList([ClientPersonalAssets])
        setMotorVehicle1([ClientPersonalAssets])
        setMotorVehicle2([ClientPersonalAssets])
        setBoat([ClientPersonalAssets])
        setCaravan([ClientPersonalAssets])
        setPersonalOther([ClientPersonalAssets])



        console.log(contentList);


        axios
        .post('http://localhost:7000/Client-PersonalAssets/Add-Client-PersonalAssets', ClientPersonalAssets)
        .then((res) => console.log("Personal Assets Added Successfully!"))

          console.log(ClientPersonalAssets)
        handleClose2();

        }


        
let personalLoansInitialValues={
debtCurrentBalance1:'',
debtRepaymentAmount1:'',
debtInterestRate1:'',

DebtFrequency1:'',
debtLoanTerm1:'',
debtloanType1:'',
debtYearRemaining1:'',

debtAnnualRepayment1:'',

// 2
debtCurrentBalance2:'',
debtRepaymentAmount2:'',
debtInterestRate2:'',

DebtFrequency2:'',
debtLoanTerm2:'',
debtloanType2:'',
debtYearRemaining2:'',

debtAnnualRepayment2:'',

// 3
debtCurrentBalance3:'',
debtRepaymentAmount3:'',
debtInterestRate3:'',
DebtFrequency3:'',
debtLoanTerm3:'',
debtloanType3:'',
debtYearRemaining3:'',
debtAnnualRepayment3:'',

// 4
debtCurrentBalance4:'',
debtRepaymentAmount4:'',
debtInterestRate4:'',

DebtFrequency4:'',
debtLoanTerm4:'',
debtloanType4:'',
debtYearRemaining4:'',

debtAnnualRepayment4:'',
  }

  let personalLoansvalidationSchema = Yup.object({
    debtCurrentBalance1:Yup.number().required("Required")
           .test(
             "Is positive?",
             "Value must be a positive number",
             (value) => value > 0
           ),
    debtRepaymentAmount1:Yup.number().required("Required")
           .test(
             "Is positive?",
             "Value must be a positive number",
             (value) => value > 0
           ),
    debtInterestRate1:Yup.number().required("Required")
           .test(
             "Is positive?",
             "Value must be a positive number",
             (value) => value > 0
           ),
    DebtFrequency1:Yup.string().required('Required') ,
    debtLoanTerm1:Yup.string().required('Required') ,
    debtloanType1:Yup.string().required('Required') ,
    debtYearRemaining1:Yup.string().required('Required') ,
    
    // 2
    debtCurrentBalance2:Yup.number().required("Required")
           .test(
             "Is positive?",
             "Value must be a positive number",
             (value) => value > 0
           ),
debtRepaymentAmount2:Yup.number().required("Required")
           .test(
             "Is positive?",
             "Value must be a positive number",
             (value) => value > 0
           ),
debtInterestRate2:Yup.number().required("Required")
           .test(
             "Is positive?",
             "Value must be a positive number",
             (value) => value > 0
           ),

           DebtFrequency2:Yup.string().required('Required') ,
           debtLoanTerm2:Yup.string().required('Required') ,
           debtloanType2:Yup.string().required('Required') ,
           debtYearRemaining2:Yup.string().required('Required') ,

// 3
debtCurrentBalance3:Yup.number().required("Required")
           .test(
             "Is positive?",
             "Value must be a positive number",
             (value) => value > 0
           ),
debtRepaymentAmount3:Yup.number().required("Required")
           .test(
             "Is positive?",
             "Value must be a positive number",
             (value) => value > 0
           ),
debtInterestRate3:Yup.number().required("Required")
           .test(
             "Is positive?",
             "Value must be a positive number",
             (value) => value > 0
           ),

           DebtFrequency3:Yup.string().required('Required') ,
           debtLoanTerm3:Yup.string().required('Required') ,
           debtloanType3:Yup.string().required('Required') ,
           debtYearRemaining3:Yup.string().required('Required') ,
// 4
debtCurrentBalance4:Yup.number().required("Required")
           .test(
             "Is positive?",
             "Value must be a positive number",
             (value) => value > 0
           ),
debtRepaymentAmount4:Yup.number().required("Required")
           .test(
             "Is positive?",
             "Value must be a positive number",
             (value) => value > 0
           ),
debtInterestRate4:Yup.number().required("Required")
           .test(
             "Is positive?",
             "Value must be a positive number",
             (value) => value > 0
           ),
           DebtFrequency4:Yup.string().required('Required') ,
           debtLoanTerm4:Yup.string().required('Required') ,
           debtloanType4:Yup.string().required('Required') ,
           debtYearRemaining4:Yup.string().required('Required') ,
  })


  let personalLoansonSubmit = (Values) => {

    let ClientPersonalDebts={
      Email: localStorage.getItem("ClientEmail"),
      CreditCard1_CurrentBalance:Values. debtCurrentBalance1,
      CreditCard1_RepaymentAmount:Values. debtRepaymentAmount1,
      CreditCard1_Frequency:Values. DebtFrequency1,
      CreditCard1_AnnualRepayment: 5000,
      CreditCard1_InterestRate: Values.debtInterestRate1,
      CreditCard1_LoanTerm: Values.debtLoanTerm1,
      CreditCard1_LoanType: Values.debtloanType1,
      CreditCard1_YearRemaining: Values.debtYearRemaining1,
      
      
      // // 2
      CreditCard2_CurrentBalance: Values.debtCurrentBalance2,
      CreditCard2_RepaymentAmount: Values.debtRepaymentAmount2,
      CreditCard2_Frequency: Values.DebtFrequency2,
      CreditCard2_AnnualRepayment:5000,
      CreditCard2_InterestRate: Values.debtInterestRate2,
      CreditCard2_LoanTerm: Values.debtLoanTerm2,
      CreditCard2_LoanType: Values.debtloanType2,
      CreditCard2_YearRemaining: Values.debtYearRemaining2,
      
      
      // // 3
      PersonalLoan1_CurrentBalance: Values.debtCurrentBalance3,
      PersonalLoan1_RepaymentAmount: Values.debtRepaymentAmount3,
      PersonalLoan1_Frequency: Values.DebtFrequency3,
      PersonalLoan1_AnnualRepayment: 5000,
      PersonalLoan1_InterestRate: Values.debtInterestRate3,
      PersonalLoan1_LoanTerm: Values.debtLoanTerm3,
      PersonalLoan1_LoanType: Values.debtloanType3,
      PersonalLoan1_YearRemaining: Values.debtYearRemaining3,
      
      // // 4
      PersonalLoan2_CurrentBalance: Values.debtCurrentBalance4,
      PersonalLoan2_RepaymentAmount: Values.debtRepaymentAmount4,
      PersonalLoan2_Frequency: Values.DebtFrequency4,
      PersonalLoan2_AnnualRepayment: 5000,
      PersonalLoan2_InterestRate: Values.debtInterestRate4,
      PersonalLoan2_LoanTerm: Values.debtLoanTerm4,
      PersonalLoan2_LoanType: Values.debtloanType4,
      PersonalLoan2_YearRemaining: Values.debtYearRemaining4,
      
        }

        setCreditCardList1([ClientPersonalDebts])
        setCreditCardList2([ClientPersonalDebts])
        setPersonalLoanList1([ClientPersonalDebts])
        setPersonalLoanList2([ClientPersonalDebts])

    axios
    .post('http://localhost:7000/Client-PersonalDebts/Add-Client-PersonalDebts', ClientPersonalDebts)
    .then((res) => console.log("Personal Debts Added Successfully!"))

    console.log(ClientPersonalDebts)
    handleClose3();

  }


  return (
    <>
    <div className="container-fluid">
        <div className="row px-0 m-0">
            <div className="col-md-12">
                <div className='shadow py-4 px-4'>
                 <div>
                     <h3 className="text-center">Assets & Liabilities</h3>
<Formik 
initialValues={initialValues}
validationSchema={validationSchema}
onSubmit={onSubmit}>
{({values,handleChange})=>
    <Form>

 
                        <div className="row">
                         <div className="col-md-6">
                              <div className="mb-3">
                            <label  className="form-label">
                            Do you own a Family Home?
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="ownFamilyradio"
                             id="ownFamilyopt1" value="Yes"
                             onClick={()=>ownFamilyHandler("Yes")} 
                             onChange={handleChange}
                             checked={values.ownFamilyradio==="Yes"}
                             />
                            <label htmlFor="ownFamilyopt1" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="ownFamilyradio"
                             id="ownFamilyopt2" value="No"
                             onClick={()=>ownFamilyHandler("No")} 
                             onChange={handleChange}
                             checked={values.ownFamilyradio==="No"}
                           />
                            <label htmlFor="ownFamilyopt2" className="label2">
                              <span>NO</span>
                            </label>
                          </div>



                              
                            </div>
                              </div>    
                        </div>
                        {ownFamily &&
                        <div className='col-md-6'>
                        <label  className="form-label">
                        Please Enter Detailed Information
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

                          {/* Modal  Family Home Details*/}
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
                              Family Home Details
                                <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />

                            </div>
                              </Modal.Title>
                            </Modal.Header>
                           <Formik
                            initialValues={own_initialValues}
                            validationSchema={own_validationSchema}
                            onSubmit={own_onSubmit}>
                          {({values,handleChange,setFieldValue,formik})=>
                            <Form>
                            <Modal.Body>
                                {/* Personal Assets Details*/}

                         <div className=''>

                        {/* Row 1*/}
                        <div className="row">
                       <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="home" className="form-label">Home</label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="home" name='home' placeholder="Home" readOnly/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='home' />
                        </div>            
                        </div>
                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="currentValue" className="form-label">Current Value</   label>
                          <Field type="number" className="form-control shadow inputDesign"
                           id="currentValue" name='currentValue' placeholder="Current Value"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='currentValue' />
                        </div>            
                        </div>
                        </div>
                        {/* Row 1*/}

                        {/* Row 2*/}
                        <div className="row">

                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="clientPercentage" className="form-label">Client % of Ownership</   label>
                          <Field type="number" className="form-control shadow inputDesign"
                           id="clientPercentage" name='clientPercentage' />
                           <ErrorMessage component='div' className='text-danger fw-bold' name='clientPercentage' />
                        </div>            
                        </div>

                         <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="partnerPercentage" className="form-label">Partner % of Ownership</   label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="partnerPercentage" name='partnerPercentage'/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='partnerPercentage' />
                        </div>            
                         </div>

                        </div>
                        {/* Row 2*/}

                         {/* Row 3*/}
                        <div className="row">

                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="costBasePurchasePrice" className="form-label">Cost base /(Purchase Price)</   label>
                          <Field type="number" className="form-control shadow inputDesign"
                           id="costBasePurchasePrice" name='costBasePurchasePrice' placeholder="Cost base /(Purchase Price)" />
                           <ErrorMessage component='div' className='text-danger fw-bold' name='costBasePurchasePrice' />
                        </div>            
                        </div>

                         <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="address" className="form-label">Address</   label>
                          <Field type="text" className="form-control shadow inputDesign" 
                          id="address" name='address' placeholder="Address"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='address' />
                        </div>            
                         </div>

                        </div>
                        {/* Row 3*/}

                        {/* Row 4*/}
                        <div className="row">

                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="postcodeSuburb" className="form-label">Postcode/Suburb</   label>
                          <Field type="number" className="form-control shadow inputDesign"
                           id="postcodeSuburb" name='postcodeSuburb' placeholder="Postcode/Suburb" />
                           <ErrorMessage component='div' className='text-danger fw-bold' name='postcodeSuburb' />
                        </div>            
                        </div>

                         <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="AmountAssessedForCentrelink" className="form-label">Amount Assessed For Centrelink Assets Test</   label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="AmountAssessedForCentrelink" name='AmountAssessedForCentrelink' placeholder="Amount Assessed"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='AmountAssessedForCentrelink' />
                        </div>            
                         </div>

                        </div>
                        {/* Row 4*/}


                         {/* radio button*/}
                         <div className="row">

                         <div className="col-md-6">
                              <div className="mb-3">
                            <label  className="form-label">
                            Does this property have a loan attached to it?
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="propertyLoanradio"
                             id="propertyLoanopt1" value="Yes"
                             onClick={()=>propertyLoanradioHandler("Yes")} 
                             onChange={handleChange}
                             checked={values.propertyLoanradio==="Yes"}
                             />
                            <label htmlFor="propertyLoanopt1" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="propertyLoanradio"
                             id="propertyLoanopt2" value="No"
                             onClick={()=>propertyLoanradioHandler("No")} 
                             onChange={handleChange}
                             checked={values.propertyLoanradio==="No"}
                           />
                            <label htmlFor="propertyLoanopt2" className="label2">
                              <span>NO</span>
                            </label>
                          </div>
                            </div>
                              </div>    
                        </div>
                        </div>
                        {/* radio button*/}
                        {/* conditional rendering */}
                          {propertyLoanState &&  <div> 
                           {/* Row 1*/}
                           <div className="row">
                       <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="clientPercentageofBorrowing" className="form-label">Client % of Borrowing</label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="clientPercentageofBorrowing" name='clientPercentageofBorrowing'/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='clientPercentageofBorrowing' />
                        </div>            
                        </div>
                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="partnerPercentageofBorrowing" className="form-label">Partner % of Borrowing</   label>
                          <Field type="number" className="form-control shadow inputDesign"
                           id="partnerPercentageofBorrowing" name='partnerPercentageofBorrowing' />
                           <ErrorMessage component='div' className='text-danger fw-bold' name='partnerPercentageofBorrowing' />
                        </div>            
                        </div>
                        </div>
                        {/* Row 1*/}

                        {/* Row 2*/}
                        <div className="row">

                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="currentBalance" className="form-label">Current Balance</   label>
                          <Field type="number" className="form-control shadow inputDesign"
                           id="currentBalance" name='currentBalance' placeholder="Current Balance" />
                           <ErrorMessage component='div' className='text-danger fw-bold' name='currentBalance' />
                        </div>            
                        </div>

                         <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="repaymentsAmount" className="form-label">Repayments Amount</   label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="repaymentsAmount" name='repaymentsAmount' placeholder="Repayments Amount"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='repaymentsAmount' />
                        </div>            
                         </div>

                        </div>
                        {/* Row 2*/}

                        {/* Row 3*/}
                        <div className="row">
                            <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor="frequency" className="form-label">
                            Frequency
                            </label>
                            <Field
                            as='select'
                            id="frequency"
                            name="frequency"
                            className="form-select shadow  inputDesign"
                            onChange={(e) => setFieldValue("frequency", e.target.value)}
                            value={values.frequency}
                            >
                            <option value="">Select</option>
                            <option value="Weekly">Weekly</option>
                            <option value="Fortnightly">Fortnightly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Annually">Annually</option>
                            </Field>
                            <ErrorMessage component='div' className="text-danger fw-bold"name="frequency" />

                        </div>
                            </div>

                            <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="annualRepayments" className="form-label">Annual Repayments</   label>
                          <Field readOnly={true} type="number" className="form-control shadow inputDesign" 
                          id="annualRepayments" name='annualRepayments' placeholder="Annual Repayments"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='annualRepayments'  />
                        </div>            
                            </div>
                        </div>
                        {/* Row 3*/}

                         {/* Row 4*/}
                         <div className="row">
                            
                         <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="interestRatePA" className="form-label">Interest Rate (p.a)</   label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="interestRatePA" name='interestRatePA' placeholder="Interest Rate (p.a)"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='interestRatePA' />
                        </div>            
                            </div>
                            <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor="loanTerm" className="form-label">
                            Loan Term (1 - 30 Years)
                            </label>
                            <Field
                            as='select'
                            id="loanTerm"
                            name="loanTerm"
                            className="form-select shadow  inputDesign"
                            onChange={(e) => setFieldValue("loanTerm", e.target.value)}
                            value={values.loanTerm}
                            >
                            <option value="">Select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                               <option value="10">10</option>
                               <option value="11">11</option>
                               <option value="12">12</option>
                               <option value="13">13</option>
                               <option value="14">14</option>
                               <option value="15">15</option>
                               <option value="16">16</option>
                               <option value="17">17</option>
                               <option value="18">18</option>
                               <option value="19">19</option>
                               <option value="20">20</option>
                               <option value="21">21</option>
                               <option value="22">22</option>
                               <option value="23">23</option>
                               <option value="24">24</option>
                               <option value="25">25</option>
                               <option value="26">26</option>
                               <option value="27">27</option>
                               <option value="28">28</option>
                               <option value="29">29</option>
                               <option value="30">30</option>
                            </Field>
                            <ErrorMessage component='div' className="text-danger fw-bold"name="loanTerm" />

                        </div>
                            </div>
                        </div>
                        {/* Row 4*/}

                                {/* Row 5*/}
                            <div className="row">
                            
                            <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor="loanType" className="form-label">
                            Loan Type
                            </label>
                            <Field
                            as='select'
                            id="loanType"
                            name='loanType'
                            className="form-select shadow  inputDesign"
                            onChange={(e) => setFieldValue("loanType", e.target.value)}
                            value={values.loanType}
                            >
                            <option value="">Select</option>
                            <option value="I/Only">I/Only</option>
                            <option value="P&I">P & I</option>
                            </Field>
                            <ErrorMessage component='div' className="text-danger fw-bold"name="loanType" />

                        </div>
                            </div>
                               <div className="col-md-6">
                           <div className="mb-3">
                               <label htmlFor="yearsRemaining" className="form-label">
                               Years Remaining (1 - 30 Years)
                               </label>
                               
                               <Field
                               as='select'
                               id="yearsRemaining"
                               name='yearsRemaining'
                               className="form-select shadow  inputDesign myselect"
                               onChange={(e) => setFieldValue("yearsRemaining", e.target.value)}
                               value={values.yearsRemaining}
                               >
                               <option value="">Select</option>
                               <option value="1">1</option>
                               <option value="2">2</option>
                               <option value="3">3</option>
                               <option value="4">4</option>
                               <option value="5">5</option>
                               <option value="6">6</option>
                               <option value="7">7</option>
                               <option value="8">8</option>
                               <option value="9">9</option>
                               <option value="10">10</option>
                               <option value="11">11</option>
                               <option value="12">12</option>
                               <option value="13">13</option>
                               <option value="14">14</option>
                               <option value="15">15</option>
                               <option value="16">16</option>
                               <option value="17">17</option>
                               <option value="18">18</option>
                               <option value="19">19</option>
                               <option value="20">20</option>
                               <option value="21">21</option>
                               <option value="22">22</option>
                               <option value="23">23</option>
                               <option value="24">24</option>
                               <option value="25">25</option>
                               <option value="26">26</option>
                               <option value="27">27</option>
                               <option value="28">28</option>
                               <option value="29">29</option>
                               <option value="30">30</option>

                               </Field>
                               <ErrorMessage component='div' className="text-danger fw-bold"name="yearsRemaining" />
   
                           </div>
                               </div>
                           </div>
                           {/* Row 5*/}

                           </div>}
                         </div>
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
                                <span
                                  className="float-end btn w-25  btn-outline  backBtn mx-3"
                                  onClick={handleClose}
                                >
                                  Cancel
                                </span>
                              </div>
                            </Modal.Footer>
                            </Form>
                            }
                           </Formik>
                          </Modal>
                          {/* Modal  Family Home Details*/}


                          {/* Table1  Family Home Details*/}
                          { 
        //  isChildTable && 
         <div   className='table-responsive my-3' id="childTable">
         <table className="table table-bordered table-hover text-center">
  <thead className="text-light" id="tableHead">
  <tr>
        <th>Address</th>
        <th>Current Value</th>
        <th>Ownership</th>
        <th>Home Loan Balance</th>
        <th>Repayments p.a</th>
        <th>Operations</th>
       
    </tr>
  </thead>
  <tbody>
  {  ownFamilyList.map((elem,index)=>{
        let {Address,CurrentValue,ClientOwnership,PartnerOwnership,CurrentBalance,AnnualRepayments}=elem;
       
return(
    
    <tr key={index}>
        <td>{Address}</td>
        <td>{CurrentValue}</td>
        <td>Client {ClientOwnership} Partner{PartnerOwnership}</td>
        <td>{CurrentBalance}</td>
        <td>{AnnualRepayments}</td>
        <td >
         {/* <button  type='btn' onClick={(e)=>deleteHandler(elem)} className='btn btn-danger btn-sm'>delete</button>
         <button  type='btn' onClick={(e)=>updateHandler(elem)} className='btn btn-warning btn-sm mx-2'>update</button> */}

         </td> 
    
    </tr>
    );
        
    }) }
  </tbody>
</table>
         </div>
         }

                          {/* Table1  Family Home Details*/}




{/*main second row */}
                          <div className="row my-3">
                         <div className="col-md-6">
                              <div className="mb-3">
                            <label  className="form-label">
                            Do you have any personal assets?
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="personalAssetsradio"
                             id="personalAssetsopt1" value="Yes"
                             onClick={()=>personalAssetsHandler("Yes")} 
                             onChange={handleChange}
                             checked={values.personalAssetsradio==="Yes"}
                             />
                            <label htmlFor="personalAssetsopt1" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="personalAssetsradio"
                             id="personalAssetsopt2" value="No"
                             onClick={()=>personalAssetsHandler("No")} 
                             onChange={handleChange}
                             checked={values.personalAssetsradio==="No"}
                           />
                            <label htmlFor="personalAssetsopt2" className="label2">
                              <span>NO</span>
                            </label>
                          </div>

                            </div>
                              </div>    
                        </div>
                        {personalAssetsState &&
                        <div className='col-md-6'>
                        <label  className="form-label">
                        Please Enter Detailed Information
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
                     {/* Model 2*/}

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
                              Personal Assets Details
                                <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />

                            </div>
                              </Modal.Title>
                            </Modal.Header>
                           <Formik
                            initialValues={personalAssetsInitialValues}
                            // validationSchema={personalAssetsValidationSchema}
                            onSubmit={personalAssetsOnSubmit}>
                          {({values , setFieldValue ,setValues,handleChange,formik})=>
                            <Form>
                            <Modal.Body>
                               

                        

                        {/* content */}
                      <div>
                        <h3 className=''>
                        {/* <div className="iconContainerLg mx-1">
                            <img className="img-fluid" src={lawyer} alt="" />

                            </div> */}
                            Contents
                            </h3>
                            
                        <div className="row justify-content-around">
                       <div className="col-md-4">
                        <div className="mb-3">
                          <label htmlFor="contentCurrentValue" className="form-label">Current Value</   label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="contentCurrentValue" name='contentCurrentValue' placeholder="Current Value"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='contentCurrentValue' />
                        </div>            
                        </div>
                        <div className="col-md-4">
                        <div className="mb-3">
                          <label htmlFor="contentCentrelinkValue" className="form-label">Centrelink Value</   label>
                          <Field type="number" className="form-control shadow inputDesign"
                           id="contentCentrelinkValue" name='contentCentrelinkValue' placeholder="Centrelink Value"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='contentCentrelinkValue' />
                        </div>            
                        </div>

                        <div className="col-md-3">
                              <div className="mb-3">
                            <label  className="form-label">
                            Security For Loan
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="contentradio"
                             id="contentopt1" value="Yes"
                             onClick={()=>ownFamilyHandler("Yes")} 
                             onChange={handleChange}
                             checked={values.contentradio==="Yes"}
                             />
                            <label htmlFor="contentopt1" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="contentradio"
                             id="contentopt2" value="No"
                             onClick={()=>ownFamilyHandler("No")} 
                             onChange={handleChange}
                             checked={values.contentradio==="No"}
                           />
                            <label htmlFor="contentopt2" className="label2">
                              <span>NO</span>
                            </label>
                          </div>



                              
                            </div>
                              </div>    
                        </div>
                        </div>
                      </div>
                        {/* content */}

                           {/* Motor Vehicle 1 */}
                        <div className='my-2'>
                        <h3 className=''>
                        {/* <div className="iconContainerLg mx-1">
                            <img className="img-fluid" src={lawyer} alt="" />

                            </div> */}
                            Motor Vehicle 1
                            </h3>
                            
                        <div className="row justify-content-around">
                       <div className="col-md-4">
                        <div className="mb-3">
                          <label htmlFor="motor1CurrentValue" className="form-label">Current Value</   label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="motor1CurrentValue" name='motor1CurrentValue' placeholder="Current Value"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='motor1CurrentValue' />
                        </div>            
                        </div>
                        <div className="col-md-4">
                        <div className="mb-3">
                          <label htmlFor="motor1CentrelinkValue" className="form-label">Centrelink Value</   label>
                          <Field type="number" className="form-control shadow inputDesign"
                           id="motor1CentrelinkValue" name='motor1CentrelinkValue' placeholder="Centrelink Value"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='motor1CentrelinkValue' />
                        </div>            
                        </div>

                        <div className="col-md-3">
                              <div className="mb-3">
                            <label  className="form-label">
                            Security For Loan
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="motor1radio"
                             id="motor1opt1" value="Yes"
                             onChange={handleChange}
                             checked={values.motor1radio==="Yes"}
                             />
                            <label htmlFor="motor1opt1" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="motor1radio"
                             id="motor1opt2" value="No"
                             onChange={handleChange}
                             checked={values.motor1radio==="No"}
                           />
                            <label htmlFor="motor1opt2" className="label2">
                              <span>NO</span>
                            </label>
                          </div>



                              
                            </div>
                              </div>    
                        </div>
                        </div>
                        </div>
                        {/* Motor Vehicle 1 */}

                             {/* Motor Vehicle 2 */}
                             <div className='my-2'>
                        <h3 className=''>
                        {/* <div className="iconContainerLg mx-1">
                            <img className="img-fluid" src={lawyer} alt="" />

                            </div> */}
                            Motor Vehicle 2
                            </h3>
                            
                        <div className="row justify-content-around">
                       <div className="col-md-4">
                        <div className="mb-3">
                          <label htmlFor="motor2CurrentValue" className="form-label">Current Value</   label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="motor2CurrentValue" name='motor2CurrentValue' placeholder="Current Value"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='motor2CurrentValue' />
                        </div>            
                        </div>
                        <div className="col-md-4">
                        <div className="mb-3">
                          <label htmlFor="motor2CentrelinkValue" className="form-label">Centrelink Value</   label>
                          <Field type="number" className="form-control shadow inputDesign"
                           id="motor2CentrelinkValue" name='motor2CentrelinkValue' placeholder="Centrelink Value"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='motor2CentrelinkValue' />
                        </div>            
                        </div>

                        <div className="col-md-3">
                              <div className="mb-3">
                            <label  className="form-label">
                            Security For Loan
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="motor2radio"
                             id="motor2opt1" value="Yes"
                             onChange={handleChange}
                             checked={values.motor2radio==="Yes"}
                             />
                            <label htmlFor="motor2opt1" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="motor2radio"
                             id="motor2opt2" value="No"
                             onChange={handleChange}
                             checked={values.motor2radio==="No"}
                           />
                            <label htmlFor="motor2opt2" className="label2">
                              <span>NO</span>
                            </label>
                          </div>



                              
                            </div>
                              </div>    
                        </div>
                        </div>
                            </div>
                            {/* Motor Vehicle 2 */}

                             {/* Boat */}
                             <div className='my-2'>
                        <h3 className=''>
                        {/* <div className="iconContainerLg mx-1">
                            <img className="img-fluid" src={lawyer} alt="" />

                            </div> */}
                            Boat
                            </h3>
                            
                           <div className="row justify-content-around">
                       <div className="col-md-4">
                        <div className="mb-3">
                          <label htmlFor="boatCurrentValue" className="form-label">Current Value</   label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="boatCurrentValue" name='boatCurrentValue' placeholder="Current Value"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='boatCurrentValue' />
                        </div>            
                        </div>
                        <div className="col-md-4">
                        <div className="mb-3">
                          <label htmlFor="boatCentrelinkValue" className="form-label">Centrelink Value</   label>
                          <Field type="number" className="form-control shadow inputDesign"
                           id="boatCentrelinkValue" name='boatCentrelinkValue' placeholder="Centrelink Value"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='boatCentrelinkValue' />
                        </div>            
                        </div>

                        <div className="col-md-3">
                              <div className="mb-3">
                            <label  className="form-label">
                            Security For Loan
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="boatradio"
                             id="boatopt1" value="Yes"
                           
                             onChange={handleChange}
                             checked={values.boatradio==="Yes"}
                             />
                            <label htmlFor="boatopt1" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="boatradio"
                             id="boatopt2" value="No"
                             onChange={handleChange}
                             checked={values.boatradio==="No"}
                           />
                            <label htmlFor="boatopt2" className="label2">
                              <span>NO</span>
                            </label>
                          </div>



                              
                            </div>
                              </div>    
                        </div>
                        </div>
                            </div>
                            {/* Boat */}

                             {/* Caravan */}
                             <div className='my-2'>
                        <h3 className=''>
                        {/* <div className="iconContainerLg mx-1">
                            <img className="img-fluid" src={lawyer} alt="" />

                            </div> */}
                            Caravan
                            </h3>
                            
                            <div className="row justify-content-around">
                       <div className="col-md-4">
                        <div className="mb-3">
                          <label htmlFor="carvanCurrentValue" className="form-label">Current Value</   label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="carvanCurrentValue" name='carvanCurrentValue' placeholder="Current Value"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='carvanCurrentValue' />
                        </div>            
                        </div>
                        <div className="col-md-4">
                        <div className="mb-3">
                          <label htmlFor="carvanCentrelinkValue" className="form-label">Centrelink Value</   label>
                          <Field type="number" className="form-control shadow inputDesign"
                           id="carvanCentrelinkValue" name='carvanCentrelinkValue' placeholder="Centrelink Value"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='carvanCentrelinkValue' />
                        </div>            
                        </div>

                        <div className="col-md-3">
                              <div className="mb-3">
                            <label  className="form-label">
                            Security For Loan
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="carvanradio"
                             id="carvanopt1" value="Yes"
                           
                             onChange={handleChange}
                             checked={values.carvanradio==="Yes"}
                             />
                            <label htmlFor="carvanopt1" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="carvanradio"
                             id="carvanopt2" value="No"
                             onChange={handleChange}
                             checked={values.carvanradio==="No"}
                           />
                            <label htmlFor="carvanopt2" className="label2">
                              <span>NO</span>
                            </label>
                          </div>



                              
                            </div>
                              </div>    
                        </div>
                           </div>
                            </div>
                            {/* Caravan */}

                             {/* Other */}
                             <div className='my-2'>
                        <h3 className=''>
                        {/* <div className="iconContainerLg mx-1">
                            <img className="img-fluid" src={lawyer} alt="" />

                            </div> */}
                            Other
                            </h3>
                            
                            <div className="row justify-content-around">
                       <div className="col-md-4">
                        <div className="mb-3">
                          <label htmlFor="otherCurrentValue" className="form-label">Current Value</   label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="otherCurrentValue" name='otherCurrentValue' placeholder="Current Value"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='otherCurrentValue' />
                        </div>            
                        </div>
                        <div className="col-md-4">
                        <div className="mb-3">
                          <label htmlFor="otherCentrelinkValue" className="form-label">Centrelink Value</   label>
                          <Field type="number" className="form-control shadow inputDesign"
                           id="otherCentrelinkValue" name='otherCentrelinkValue' placeholder="Centrelink Value"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='otherCentrelinkValue' />
                        </div>            
                        </div>

                        <div className="col-md-3">
                              <div className="mb-3">
                            <label  className="form-label">
                            Security For Loan
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="otherradio"
                             id="otheropt1" value="Yes"
                           
                             onChange={handleChange}
                             checked={values.otherradio==="Yes"}
                             />
                            <label htmlFor="otheropt1" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="otherradio"
                             id="otheropt2" value="No"
                             onChange={handleChange}
                             checked={values.otherradio==="No"}
                           />
                            <label htmlFor="otheropt2" className="label2">
                              <span>NO</span>
                            </label>
                          </div>



                              
                            </div>
                              </div>    
                        </div>
                           </div>
                            </div>
                            {/* Other */}
                     
                           
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
                                  onClick={handleClose2}
                                >
                                  Cancel
                                </button>
                              </div>
                            </Modal.Footer>
                            </Form>
                            }
                           </Formik>
                          </Modal>
                      {/* Model 2*/}
                        
                        {/*main second row */}

                        {/*Table2 main second row */}

                        <div   className='table-responsive my-3'>
         <table className="table table-bordered table-hover text-center">
  <thead className="text-light" id="tableHead">
  <tr>
    <th>Description</th>
        <th>Current Value</th>
        <th>Centrelink Value</th>
        <th>Security for Loan</th>
        <th>Operations</th>

       
    </tr>
  </thead>
  <tbody>
  
    {/* content  */}
   {  contentList.map((elem,index)=>{
      let {Contents_CurrentValue,Contents_CentreLinkValue,Contents_Security}=elem;
      if(contentList[0].Contents_CurrentValue =='' || 
      contentList[0].Contents_CentreLinkValue =='' ){
       
      }

      else{
     return(
    
          <tr key={index}>
            <td className='fw-bold'>Contents</td>
              <td>{Contents_CurrentValue}</td>
              <td>{Contents_CentreLinkValue}</td>
              <td>{Contents_Security}</td>
    
              <td >
               {/* <button  type='btn' onClick={(e)=>deleteHandler(elem)} className='btn btn-danger btn-sm'>delete</button>
               <button  type='btn' onClick={(e)=>updateHandler(elem)} className='btn btn-warning btn-sm mx-2'>update</button> */}
      
               </td> 
          
          </tr>
          );
      }

    }) }
    {/* content  */}

     {/* motor 1  */}
   {  MotorVehicle1.map((elem,index)=>{
      let {MotorVehicle1_CurrentValue,MotorVehicle1_CentreLinkValue,MotorVehicle1_Security}=elem;
      if(MotorVehicle1[0].MotorVehicle1_CurrentValue =='' || 
      MotorVehicle1[0].MotorVehicle1_CentreLinkValue =='' ){
       
      }

      else{
     return(
    
          <tr key={index}>
            <td className='fw-bold'>Motor Vehicle 1</td>
              <td>{MotorVehicle1_CurrentValue}</td>
              <td>{MotorVehicle1_CentreLinkValue}</td>
              <td>{MotorVehicle1_Security}</td>
    
              <td >
               {/* <button  type='btn' onClick={(e)=>deleteHandler(elem)} className='btn btn-danger btn-sm'>delete</button>
               <button  type='btn' onClick={(e)=>updateHandler(elem)} className='btn btn-warning btn-sm mx-2'>update</button> */}
      
               </td> 
          
          </tr>
          );
      }

    }) }
    {/* motor 1  */}

     {/* motor 2  */}
   {  MotorVehicle2.map((elem,index)=>{
      let {MotorVehicle2_CurrentValue,MotorVehicle2_CentreLinkValue,MotorVehicle2_Security}=elem;
      if(MotorVehicle2[0].MotorVehicle2_CurrentValue =='' || 
      MotorVehicle2[0].MotorVehicle2_CentreLinkValue =='' ){
       
      }

      else{
     return(
    
          <tr key={index}>
            <td className='fw-bold'>Motor Vehicle 2</td>
              <td>{MotorVehicle2_CurrentValue}</td>
              <td>{MotorVehicle2_CentreLinkValue}</td>
              <td>{MotorVehicle2_Security}</td>
    
              <td >
               {/* <button  type='btn' onClick={(e)=>deleteHandler(elem)} className='btn btn-danger btn-sm'>delete</button>
               <button  type='btn' onClick={(e)=>updateHandler(elem)} className='btn btn-warning btn-sm mx-2'>update</button> */}
      
               </td> 
          
          </tr>
          );
      }

    }) }
    {/* motor 2  */}


      {/* Boat */}
   {  Boat.map((elem,index)=>{
      let {Boat_CurrentValue,Boat_CentreLinkValue,Boat_Security}=elem;
      if(Boat[0].Boat_CurrentValue =='' || 
      Boat[0].Boat_CentreLinkValue =='' ){
       
      }

      else{
     return(
    
          <tr key={index}>
            <td className='fw-bold'>Boat</td>
              <td>{Boat_CurrentValue}</td>
              <td>{Boat_CentreLinkValue}</td>
              <td>{Boat_Security}</td>
    
              <td >
               {/* <button  type='btn' onClick={(e)=>deleteHandler(elem)} className='btn btn-danger btn-sm'>delete</button>
               <button  type='btn' onClick={(e)=>updateHandler(elem)} className='btn btn-warning btn-sm mx-2'>update</button> */}
      
               </td> 
          
          </tr>
          );
      }

    }) }
    {/* Boat  */}

     {/* Carvan */}
   {  Caravan.map((elem,index)=>{
      let {Caravan_CurrentValue,Caravan_CentreLinkValue,Caravan_Security}=elem;
      if(Caravan[0].Caravan_CurrentValue =='' || 
      Caravan[0].Caravan_CentreLinkValue =='' ){
       
      }

      else{
     return(
    
          <tr key={index}>
            <td className='fw-bold'>Caravan</td>
              <td>{Caravan_CurrentValue}</td>
              <td>{Caravan_CentreLinkValue}</td>
              <td>{Caravan_Security}</td>
    
              <td >
               {/* <button  type='btn' onClick={(e)=>deleteHandler(elem)} className='btn btn-danger btn-sm'>delete</button>
               <button  type='btn' onClick={(e)=>updateHandler(elem)} className='btn btn-warning btn-sm mx-2'>update</button> */}
      
               </td> 
          
          </tr>
          );
      }

    }) }
    {/* Carvan */}

     {/* Other */}
   {  personalOther.map((elem,index)=>{
      let {Other_CurrentValue,Other_CentreLinkValue,Other_Security}=elem;
      if(personalOther[0].Other_CurrentValue =='' || 
      personalOther[0].Other_CentreLinkValue =='' ){
       
      }

      else{
     return(
    
          <tr key={index}>
            <td className='fw-bold'>Other</td>
              <td>{Other_CurrentValue}</td>
              <td>{Other_CentreLinkValue}</td>
              <td>{Other_Security}</td>
    
              <td >
               {/* <button  type='btn' onClick={(e)=>deleteHandler(elem)} className='btn btn-danger btn-sm'>delete</button>
               <button  type='btn' onClick={(e)=>updateHandler(elem)} className='btn btn-warning btn-sm mx-2'>update</button> */}
      
               </td> 
          
          </tr>
          );
      }

    }) }
    {/* Carvan */}


  </tbody>
</table>
                        </div>

                        {/*Table2 main second row */}





                          {/*main Third row */}

               
                           {/* 3 row */}
                           <div className="row">
                        <div className="col-md-6">
                              <div className="mb-3">
                            <label  className="form-label">
                            Do you have Personal Loans or Credit cards?
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="personalLoansradio"
                             id="personalLoansopt1" value="Yes"
                             onClick={()=>personalLoansHandler("Yes")} 
                             onChange={handleChange}
                             checked={values.personalLoansradio==="Yes"}
                             />
                            <label htmlFor="personalLoansopt1" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="personalLoansradio"
                             id="personalLoansopt2" value="No"
                             onClick={()=>personalLoansHandler("No")} 
                             onChange={handleChange}
                             checked={values.personalLoansradio==="No"}
                           />
                            <label htmlFor="personalLoansopt2" className="label2">
                              <span>NO</span>
                            </label>
                          </div>



                              
                            </div>
                              </div>    
                        </div>
                        {
                        personalLoanState && 
                        <div className='col-md-6'>
                        <label  className="form-label">
                        Please Enter Detailed Information
                            </label>
                            <br />
                          
                          <span
                            className=" btn h-50 w-50
                            btn-outline-success "
                            onClick={handleShow3}
                          >
                            <div className="iconContainer mx-1">
                            <img className="img-fluid" src={plus} alt="" />

                            </div>
                            Enter Details
                          </span>
                        </div>}
                           </div>
                           {/* 3 row */}
                           
                           {/* --------------------------------------------- */}

                           <Modal
                            show={show3}
                            onHide={handleClose3}
                            backdrop="static"
                            className="modal-xl"
                            keyboard={false}
                          >
                            <Modal.Header
                              className="text-light modalBG "
                              closeButton
                            >
                              <Modal.Title className="fontStyle">
                              Personal Debts Details
                                <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />

                            </div>
                              </Modal.Title>
                            </Modal.Header>
                           <Formik
                            initialValues={personalLoansInitialValues}
                            // validationSchema={personalLoansvalidationSchema}
                            onSubmit={personalLoansonSubmit}>
                          {({values , setFieldValue ,setValues,handleChange,formik})=>
                            <Form>
                            <Modal.Body>
                                {/* Personal Loans Detail Form */}

                         <div className=''>

                        {/* Credit Card 1 */}
                        <div className=' '>
                        <h3 className=''>
                        {/* <div className="iconContainerLg mx-1">
                            <img className="img-fluid" src={lawyer} alt="" />

                            </div> */}
                            Credit Card 1
                            </h3>
                        <div className="row">
                       <div className="col-md-3">
                        <div className="mb-3">
                          <label htmlFor="debtCurrentBalance1" className="form-label">Current Balance</   label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="debtCurrentBalance1" name='debtCurrentBalance1' placeholder="Current Balance"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='debtCurrentBalance1' />
                        </div>            
                        </div>
                        <div className="col-md-3">
                        <div className="mb-3">
                          <label htmlFor="debtRepaymentAmount1" className="form-label">Repayment Amount</   label>
                          <Field type="number" className="form-control shadow inputDesign"
                           id="debtRepaymentAmount1" name='debtRepaymentAmount1' placeholder="Repayment Amount"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='debtRepaymentAmount1' />
                        </div>            
                        </div>

                        <div className="col-md-3">
                        <div className="mb-3">
                            <label htmlFor="DebtFrequency1" className="form-label">
                            Frequency
                            </label>
                            <Field
                            as='select'
                            id="DebtFrequency1"
                            name="DebtFrequency1"
                            className="form-select shadow  inputDesign"
                            onChange={(e) => setFieldValue("DebtFrequency1", e.target.value)}
                            value={values.DebtFrequency1}
                            >
                            <option value="">Select</option>
                            <option value="Weekly">Weekly</option>
                            <option value="Fortnightly">Fortnightly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Annually">Annually</option>
                            </Field>
                            <ErrorMessage component='div' className="text-danger fw-bold"name="DebtFrequency1" />

                        </div>
                        </div>

                         <div className="col-md-3">
                        <div className="mb-3">
                          <label htmlFor="debtAnnualRepayment1" className="form-label">Annual Repayment</   label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="debtAnnualRepayment1" name='debtAnnualRepayment1' readOnly={true} />
                          {/* <ErrorMessage component='div' className='text-danger fw-bold' name='debtAnnualRepayment1' /> */}
                        </div>            
                        </div>
                        </div>
                        <div className="row">
                       <div className="col-md-3">
                        <div className="mb-3">
                          <label htmlFor="debtInterestRate1" className="form-label">Interest Rate</   label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="debtInterestRate1" name='debtInterestRate1' placeholder="Interest Rate"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='debtInterestRate1' />
                        </div>            
                      </div>
                        

                        <div className="col-md-3">
                        <div className="mb-3">
                               <label htmlFor="debtLoanTerm1" className="form-label">
                                Loan Terms (1 - 30 Years)
                               </label>
                               
                               <Field
                               as='select'
                               id="debtLoanTerm1"
                               name='debtLoanTerm1'
                               className="form-select shadow  inputDesign myselect"
                               onChange={(e) => setFieldValue("debtLoanTerm1", e.target.value)}
                               value={values.debtLoanTerm1}
                               >
                               <option value="">Select</option>
                               <option value="1">1</option>
                               <option value="2">2</option>
                               <option value="3">3</option>
                               <option value="4">4</option>
                               <option value="5">5</option>
                               <option value="6">6</option>
                               <option value="7">7</option>
                               <option value="8">8</option>
                               <option value="9">9</option>
                               <option value="10">10</option>
                               <option value="11">11</option>
                               <option value="12">12</option>
                               <option value="13">13</option>
                               <option value="14">14</option>
                               <option value="15">15</option>
                               <option value="16">16</option>
                               <option value="17">17</option>
                               <option value="18">18</option>
                               <option value="19">19</option>
                               <option value="20">20</option>
                               <option value="21">21</option>
                               <option value="22">22</option>
                               <option value="23">23</option>
                               <option value="24">24</option>
                               <option value="25">25</option>
                               <option value="26">26</option>
                               <option value="27">27</option>
                               <option value="28">28</option>
                               <option value="29">29</option>
                               <option value="30">30</option>

                               </Field>
                               <ErrorMessage component='div' className="text-danger fw-bold"name="debtLoanTerm1" />
   
                           </div>           
                        </div>

                        <div className="col-md-3">
                        <div className="mb-3">
                            <label htmlFor="debtloanType1" className="form-label">
                            Loan Type
                            </label>
                            <Field
                            as='select'
                            id="debtloanType1"
                            name='debtloanType1'
                            className="form-select shadow  inputDesign"
                            onChange={(e) => setFieldValue("debtloanType1", e.target.value)}
                            value={values.debtloanType1}
                            >
                            <option value="">Select</option>
                            <option value="I/Only">I/Only</option>
                            <option value="P&I">P & I</option>
                            </Field>
                            <ErrorMessage component='div' className="text-danger fw-bold"name="debtloanType1" />

                        </div>           
                        </div>

                         <div className="col-md-3">
                         <div className="mb-3">
                               <label htmlFor="debtYearRemaining1" className="form-label">
                                Year Remaining (1 - 30 Years)
                               </label>
                               
                               <Field
                               as='select'
                               id="debtYearRemaining1"
                               name='debtYearRemaining1'
                               className="form-select shadow  inputDesign myselect"
                               onChange={(e) => setFieldValue("debtYearRemaining1", e.target.value)}
                               value={values.debtYearRemaining1}
                               >
                               <option value="">Select</option>
                               <option value="1">1</option>
                               <option value="2">2</option>
                               <option value="3">3</option>
                               <option value="4">4</option>
                               <option value="5">5</option>
                               <option value="6">6</option>
                               <option value="7">7</option>
                               <option value="8">8</option>
                               <option value="9">9</option>
                               <option value="10">10</option>
                               <option value="11">11</option>
                               <option value="12">12</option>
                               <option value="13">13</option>
                               <option value="14">14</option>
                               <option value="15">15</option>
                               <option value="16">16</option>
                               <option value="17">17</option>
                               <option value="18">18</option>
                               <option value="19">19</option>
                               <option value="20">20</option>
                               <option value="21">21</option>
                               <option value="22">22</option>
                               <option value="23">23</option>
                               <option value="24">24</option>
                               <option value="25">25</option>
                               <option value="26">26</option>
                               <option value="27">27</option>
                               <option value="28">28</option>
                               <option value="29">29</option>
                               <option value="30">30</option>

                               </Field>
                               <ErrorMessage component='div' className="text-danger fw-bold"name="debtYearRemaining1" />
   
                           </div>             
                        </div>
                        </div>
                        
                        </div>
                        {/* Credit Card 1 */}

                        {/* Credit Card 2 */}
                        <div className='mt-3 '>
                        <h3 className=''>
                        {/* <div className="iconContainerLg mx-1">
                            <img className="img-fluid" src={lawyer} alt="" />

                            </div> */}
                            Credit Card 2
                            </h3>
                        <div className="row">
                       <div className="col-md-3">
                        <div className="mb-3">
                          <label htmlFor="debtCurrentBalance2" className="form-label">Current Balance</   label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="debtCurrentBalance2" name='debtCurrentBalance2' placeholder="Current Balance"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='debtCurrentBalance2' />
                        </div>            
                        </div>
                        <div className="col-md-3">
                        <div className="mb-3">
                          <label htmlFor="debtRepaymentAmount2" className="form-label">Repayment Amount</   label>
                          <Field type="number" className="form-control shadow inputDesign"
                           id="debtRepaymentAmount2" name='debtRepaymentAmount2' placeholder="Repayment Amount"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='debtRepaymentAmount2' />
                        </div>            
                        </div>

                        <div className="col-md-3">
                        <div className="mb-3">
                            <label htmlFor="DebtFrequency2" className="form-label">
                            Frequency
                            </label>
                            <Field
                            as='select'
                            id="DebtFrequency2"
                            name="DebtFrequency2"
                            className="form-select shadow  inputDesign"
                            onChange={(e) => setFieldValue("DebtFrequency2", e.target.value)}
                            value={values.DebtFrequency2}
                            >
                            <option value="">Select</option>
                            <option value="Weekly">Weekly</option>
                            <option value="Fortnightly">Fortnightly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Annually">Annually</option>
                            </Field>
                            <ErrorMessage component='div' className="text-danger fw-bold"name="DebtFrequency2" />

                        </div>
                        </div>

                         <div className="col-md-3">
                        <div className="mb-3">
                          <label htmlFor="debtAnnualRepayment2" className="form-label">Annual Repayment</   label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="debtAnnualRepayment2" name='debtAnnualRepayment2' readOnly={true} />
                          {/* <ErrorMessage component='div' className='text-danger fw-bold' name='debtAnnualRepayment1' /> */}
                        </div>            
                        </div>
                        </div>
                        <div className="row">
                       <div className="col-md-3">
                        <div className="mb-3">
                          <label htmlFor="debtInterestRate2" className="form-label">Interest Rate</   label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="debtInterestRate2" name='debtInterestRate2' placeholder="Interest Rate"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='debtInterestRate2' />
                        </div>            
                      </div>
                        

                        <div className="col-md-3">
                        <div className="mb-3">
                               <label htmlFor="debtLoanTerm2" className="form-label">
                                Loan Terms (1 - 30 Years)
                               </label>
                               
                               <Field
                               as='select'
                               id="debtLoanTerm2"
                               name='debtLoanTerm2'
                               className="form-select shadow  inputDesign myselect"
                               onChange={(e) => setFieldValue("debtLoanTerm2", e.target.value)}
                               value={values.debtLoanTerm2}
                               >
                               <option value="">Select</option>
                               <option value="1">1</option>
                               <option value="2">2</option>
                               <option value="3">3</option>
                               <option value="4">4</option>
                               <option value="5">5</option>
                               <option value="6">6</option>
                               <option value="7">7</option>
                               <option value="8">8</option>
                               <option value="9">9</option>
                               <option value="10">10</option>
                               <option value="11">11</option>
                               <option value="12">12</option>
                               <option value="13">13</option>
                               <option value="14">14</option>
                               <option value="15">15</option>
                               <option value="16">16</option>
                               <option value="17">17</option>
                               <option value="18">18</option>
                               <option value="19">19</option>
                               <option value="20">20</option>
                               <option value="21">21</option>
                               <option value="22">22</option>
                               <option value="23">23</option>
                               <option value="24">24</option>
                               <option value="25">25</option>
                               <option value="26">26</option>
                               <option value="27">27</option>
                               <option value="28">28</option>
                               <option value="29">29</option>
                               <option value="30">30</option>

                               </Field>
                               <ErrorMessage component='div' className="text-danger fw-bold"name="debtLoanTerm2" />
   
                           </div>           
                        </div>

                        <div className="col-md-3">
                        <div className="mb-3">
                            <label htmlFor="debtloanType2" className="form-label">
                            Loan Type
                            </label>
                            <Field
                            as='select'
                            id="debtloanType2"
                            name='debtloanType2'
                            className="form-select shadow  inputDesign"
                            onChange={(e) => setFieldValue("debtloanType2", e.target.value)}
                            value={values.debtloanType2}
                            >
                            <option value="">Select</option>
                            <option value="I/Only">I/Only</option>
                            <option value="P&I">P & I</option>
                            </Field>
                            <ErrorMessage component='div' className="text-danger fw-bold"name="debtloanType2" />

                        </div>           
                        </div>

                         <div className="col-md-3">
                         <div className="mb-3">
                               <label htmlFor="debtYearRemaining2" className="form-label">
                                Year Remaining (1 - 30 Years)
                               </label>
                               
                               <Field
                               as='select'
                               id="debtYearRemaining2"
                               name='debtYearRemaining2'
                               className="form-select shadow  inputDesign myselect"
                               onChange={(e) => setFieldValue("debtYearRemaining2", e.target.value)}
                               value={values.debtYearRemaining2}
                               >
                               <option value="">Select</option>
                               <option value="1">1</option>
                               <option value="2">2</option>
                               <option value="3">3</option>
                               <option value="4">4</option>
                               <option value="5">5</option>
                               <option value="6">6</option>
                               <option value="7">7</option>
                               <option value="8">8</option>
                               <option value="9">9</option>
                               <option value="10">10</option>
                               <option value="11">11</option>
                               <option value="12">12</option>
                               <option value="13">13</option>
                               <option value="14">14</option>
                               <option value="15">15</option>
                               <option value="16">16</option>
                               <option value="17">17</option>
                               <option value="18">18</option>
                               <option value="19">19</option>
                               <option value="20">20</option>
                               <option value="21">21</option>
                               <option value="22">22</option>
                               <option value="23">23</option>
                               <option value="24">24</option>
                               <option value="25">25</option>
                               <option value="26">26</option>
                               <option value="27">27</option>
                               <option value="28">28</option>
                               <option value="29">29</option>
                               <option value="30">30</option>

                               </Field>
                               <ErrorMessage component='div' className="text-danger fw-bold"name="debtYearRemaining2" />
   
                           </div>             
                        </div>
                        </div>
                        
                        </div>
                        {/* Credit Card 2 */}

                         {/* Personal Loan 1 */}
                         <div className='mt-3 '>
                        <h3 className=''>
                        {/* <div className="iconContainerLg mx-1">
                            <img className="img-fluid" src={lawyer} alt="" />

                            </div> */}
                            Personal Loan 1
                            </h3>
                        <div className="row">
                       <div className="col-md-3">
                        <div className="mb-3">
                          <label htmlFor="debtCurrentBalance3" className="form-label">Current Balance</   label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="debtCurrentBalance3" name='debtCurrentBalance3' placeholder="Current Balance"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='debtCurrentBalance3' />
                        </div>            
                        </div>
                        <div className="col-md-3">
                        <div className="mb-3">
                          <label htmlFor="debtRepaymentAmount3" className="form-label">Repayment Amount</   label>
                          <Field type="number" className="form-control shadow inputDesign"
                           id="debtRepaymentAmount3" name='debtRepaymentAmount3' placeholder="Repayment Amount"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='debtRepaymentAmount3' />
                        </div>            
                        </div>

                        <div className="col-md-3">
                        <div className="mb-3">
                            <label htmlFor="DebtFrequency3" className="form-label">
                            Frequency
                            </label>
                            <Field
                            as='select'
                            id="DebtFrequency3"
                            name="DebtFrequency3"
                            className="form-select shadow  inputDesign"
                            onChange={(e) => setFieldValue("DebtFrequency3", e.target.value)}
                            value={values.DebtFrequency3}
                            >
                            <option value="">Select</option>
                            <option value="Weekly">Weekly</option>
                            <option value="Fortnightly">Fortnightly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Annually">Annually</option>
                            </Field>
                            <ErrorMessage component='div' className="text-danger fw-bold"name="DebtFrequency3" />

                        </div>
                        </div>

                         <div className="col-md-3">
                        <div className="mb-3">
                          <label htmlFor="debtAnnualRepayment3" className="form-label">Annual Repayment</   label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="debtAnnualRepayment3" name='debtAnnualRepayment3' readOnly={true} />
                          {/* <ErrorMessage component='div' className='text-danger fw-bold' name='debtAnnualRepayment1' /> */}
                        </div>            
                        </div>
                        </div>
                        <div className="row">
                       <div className="col-md-3">
                        <div className="mb-3">
                          <label htmlFor="debtInterestRate3" className="form-label">Interest Rate</   label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="debtInterestRate3" name='debtInterestRate3' placeholder="Interest Rate"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='debtInterestRate3' />
                        </div>            
                      </div>
                        

                        <div className="col-md-3">
                        <div className="mb-3">
                               <label htmlFor="debtLoanTerm3" className="form-label">
                                Loan Terms (1 - 30 Years)
                               </label>
                               
                               <Field
                               as='select'
                               id="debtLoanTerm3"
                               name='debtLoanTerm3'
                               className="form-select shadow  inputDesign myselect"
                               onChange={(e) => setFieldValue("debtLoanTerm3", e.target.value)}
                               value={values.debtLoanTerm3}
                               >
                               <option value="">Select</option>
                               <option value="1">1</option>
                               <option value="2">2</option>
                               <option value="3">3</option>
                               <option value="4">4</option>
                               <option value="5">5</option>
                               <option value="6">6</option>
                               <option value="7">7</option>
                               <option value="8">8</option>
                               <option value="9">9</option>
                               <option value="10">10</option>
                               <option value="11">11</option>
                               <option value="12">12</option>
                               <option value="13">13</option>
                               <option value="14">14</option>
                               <option value="15">15</option>
                               <option value="16">16</option>
                               <option value="17">17</option>
                               <option value="18">18</option>
                               <option value="19">19</option>
                               <option value="20">20</option>
                               <option value="21">21</option>
                               <option value="22">22</option>
                               <option value="23">23</option>
                               <option value="24">24</option>
                               <option value="25">25</option>
                               <option value="26">26</option>
                               <option value="27">27</option>
                               <option value="28">28</option>
                               <option value="29">29</option>
                               <option value="30">30</option>

                               </Field>
                               <ErrorMessage component='div' className="text-danger fw-bold"name="debtLoanTerm3" />
   
                           </div>           
                        </div>

                        <div className="col-md-3">
                        <div className="mb-3">
                            <label htmlFor="debtloanType3" className="form-label">
                            Loan Type
                            </label>
                            <Field
                            as='select'
                            id="debtloanType3"
                            name='debtloanType3'
                            className="form-select shadow  inputDesign"
                            onChange={(e) => setFieldValue("debtloanType3", e.target.value)}
                            value={values.debtloanType3}
                            >
                            <option value="">Select</option>
                            <option value="I/Only">I/Only</option>
                            <option value="P&I">P & I</option>
                            </Field>
                            <ErrorMessage component='div' className="text-danger fw-bold"name="debtloanType3" />

                        </div>           
                        </div>

                         <div className="col-md-3">
                         <div className="mb-3">
                               <label htmlFor="debtYearRemaining3" className="form-label">
                                Year Remaining (1 - 30 Years)
                               </label>
                               
                               <Field
                               as='select'
                               id="debtYearRemaining3"
                               name='debtYearRemaining3'
                               className="form-select shadow  inputDesign myselect"
                               onChange={(e) => setFieldValue("debtYearRemaining3", e.target.value)}
                               value={values.debtYearRemaining3}
                               >
                               <option value="">Select</option>
                               <option value="1">1</option>
                               <option value="2">2</option>
                               <option value="3">3</option>
                               <option value="4">4</option>
                               <option value="5">5</option>
                               <option value="6">6</option>
                               <option value="7">7</option>
                               <option value="8">8</option>
                               <option value="9">9</option>
                               <option value="10">10</option>
                               <option value="11">11</option>
                               <option value="12">12</option>
                               <option value="13">13</option>
                               <option value="14">14</option>
                               <option value="15">15</option>
                               <option value="16">16</option>
                               <option value="17">17</option>
                               <option value="18">18</option>
                               <option value="19">19</option>
                               <option value="20">20</option>
                               <option value="21">21</option>
                               <option value="22">22</option>
                               <option value="23">23</option>
                               <option value="24">24</option>
                               <option value="25">25</option>
                               <option value="26">26</option>
                               <option value="27">27</option>
                               <option value="28">28</option>
                               <option value="29">29</option>
                               <option value="30">30</option>

                               </Field>
                               <ErrorMessage component='div' className="text-danger fw-bold"name="debtYearRemaining3" />
   
                           </div>             
                        </div>
                        </div>
                        
                        </div>
                        {/* Personal Loan 1 */}

                          {/* Personal Loan 2 */}
                          <div className='mt-3'>
                        <h3 className=''>
                        {/* <div className="iconContainerLg mx-1">
                            <img className="img-fluid" src={lawyer} alt="" />

                            </div> */}
                            Personal Loan 2
                            </h3>
                        <div className="row">
                       <div className="col-md-3">
                        <div className="mb-3">
                          <label htmlFor="debtCurrentBalance4" className="form-label">Current Balance</   label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="debtCurrentBalance4" name='debtCurrentBalance4' placeholder="Current Balance"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='debtCurrentBalance4' />
                        </div>            
                        </div>
                        <div className="col-md-3">
                        <div className="mb-3">
                          <label htmlFor="debtRepaymentAmount4" className="form-label">Repayment Amount</   label>
                          <Field type="number" className="form-control shadow inputDesign"
                           id="debtRepaymentAmount4" name='debtRepaymentAmount4' placeholder="Repayment Amount"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='debtRepaymentAmount4' />
                        </div>            
                        </div>

                        <div className="col-md-3">
                        <div className="mb-3">
                            <label htmlFor="DebtFrequency4" className="form-label">
                            Frequency
                            </label>
                            <Field
                            as='select'
                            id="DebtFrequency4"
                            name="DebtFrequency4"
                            className="form-select shadow  inputDesign"
                            onChange={(e) => setFieldValue("DebtFrequency4", e.target.value)}
                            value={values.DebtFrequency4}
                            >
                            <option value="">Select</option>
                            <option value="Weekly">Weekly</option>
                            <option value="Fortnightly">Fortnightly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Annually">Annually</option>
                            </Field>
                            <ErrorMessage component='div' className="text-danger fw-bold"name="DebtFrequency4" />

                        </div>
                        </div>

                         <div className="col-md-3">
                        <div className="mb-3">
                          <label htmlFor="debtAnnualRepayment4" className="form-label">Annual Repayment</   label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="debtAnnualRepayment4" name='debtAnnualRepayment4' readOnly={true} />
                          {/* <ErrorMessage component='div' className='text-danger fw-bold' name='debtAnnualRepayment1' /> */}
                        </div>            
                        </div>
                        </div>
                        <div className="row">
                       <div className="col-md-3">
                        <div className="mb-3">
                          <label htmlFor="debtInterestRate4" className="form-label">Interest Rate</   label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="debtInterestRate4" name='debtInterestRate4' placeholder="Interest Rate"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='debtInterestRate4' />
                        </div>            
                      </div>
                        

                        <div className="col-md-3">
                        <div className="mb-3">
                               <label htmlFor="debtLoanTerm4" className="form-label">
                                Loan Terms (1 - 30 Years)
                               </label>
                               
                               <Field
                               as='select'
                               id="debtLoanTerm4"
                               name='debtLoanTerm4'
                               className="form-select shadow  inputDesign myselect"
                               onChange={(e) => setFieldValue("debtLoanTerm4", e.target.value)}
                               value={values.debtLoanTerm4}
                               >
                               <option value="">Select</option>
                               <option value="1">1</option>
                               <option value="2">2</option>
                               <option value="3">3</option>
                               <option value="4">4</option>
                               <option value="5">5</option>
                               <option value="6">6</option>
                               <option value="7">7</option>
                               <option value="8">8</option>
                               <option value="9">9</option>
                               <option value="10">10</option>
                               <option value="11">11</option>
                               <option value="12">12</option>
                               <option value="13">13</option>
                               <option value="14">14</option>
                               <option value="15">15</option>
                               <option value="16">16</option>
                               <option value="17">17</option>
                               <option value="18">18</option>
                               <option value="19">19</option>
                               <option value="20">20</option>
                               <option value="21">21</option>
                               <option value="22">22</option>
                               <option value="23">23</option>
                               <option value="24">24</option>
                               <option value="25">25</option>
                               <option value="26">26</option>
                               <option value="27">27</option>
                               <option value="28">28</option>
                               <option value="29">29</option>
                               <option value="30">30</option>

                               </Field>
                               <ErrorMessage component='div' className="text-danger fw-bold"name="debtLoanTerm4" />
   
                           </div>           
                        </div>

                        <div className="col-md-3">
                        <div className="mb-3">
                            <label htmlFor="debtloanType4" className="form-label">
                            Loan Type
                            </label>
                            <Field
                            as='select'
                            id="debtloanType4"
                            name='debtloanType4'
                            className="form-select shadow  inputDesign"
                            onChange={(e) => setFieldValue("debtloanType4", e.target.value)}
                            value={values.debtloanType4}
                            >
                            <option value="">Select</option>
                            <option value="I/Only">I/Only</option>
                            <option value="P&I">P & I</option>
                            </Field>
                            <ErrorMessage component='div' className="text-danger fw-bold"name="debtloanType4" />

                        </div>           
                        </div>

                         <div className="col-md-3">
                         <div className="mb-3">
                               <label htmlFor="debtYearRemaining4" className="form-label">
                                Year Remaining (1 - 30 Years)
                               </label>
                               
                               <Field
                               as='select'
                               id="debtYearRemaining4"
                               name='debtYearRemaining4'
                               className="form-select shadow  inputDesign myselect"
                               onChange={(e) => setFieldValue("debtYearRemaining4", e.target.value)}
                               value={values.debtYearRemaining4}
                               >
                               <option value="">Select</option>
                               <option value="1">1</option>
                               <option value="2">2</option>
                               <option value="3">3</option>
                               <option value="4">4</option>
                               <option value="5">5</option>
                               <option value="6">6</option>
                               <option value="7">7</option>
                               <option value="8">8</option>
                               <option value="9">9</option>
                               <option value="10">10</option>
                               <option value="11">11</option>
                               <option value="12">12</option>
                               <option value="13">13</option>
                               <option value="14">14</option>
                               <option value="15">15</option>
                               <option value="16">16</option>
                               <option value="17">17</option>
                               <option value="18">18</option>
                               <option value="19">19</option>
                               <option value="20">20</option>
                               <option value="21">21</option>
                               <option value="22">22</option>
                               <option value="23">23</option>
                               <option value="24">24</option>
                               <option value="25">25</option>
                               <option value="26">26</option>
                               <option value="27">27</option>
                               <option value="28">28</option>
                               <option value="29">29</option>
                               <option value="30">30</option>

                               </Field>
                               <ErrorMessage component='div' className="text-danger fw-bold"name="debtYearRemaining4" />
   
                           </div>             
                        </div>
                        </div>
                        
                        </div>
                        {/* Personal Loan 2 */}

                         </div>
                         {/* Personal Loans Detail Form */}
                           
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
                                  onClick={handleClose3}
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
               
                      {/* Client Professional Advisors */}

                       {/*Table3  */}

                       <div   className='table-responsive my-3'>
         <table className="table table-bordered table-hover text-center">
        <thead className="text-light" id="tableHead">
              <tr>
                <th>Description</th>
                    <th>Current Belance</th>
                    <th>Annual Repayments</th>
                    <th>Interest Rate</th>
               </tr>
       </thead>

        <tbody>
        
          {/* CreditCardList1  */}
        {  CreditCardList1.map((elem,index)=>{
            let {CreditCard1_CurrentBalance,CreditCard1_AnnualRepayment
              ,CreditCard1_InterestRate}=elem;
            if(CreditCardList1[0].CreditCard1_CurrentBalance !=='' ){
              return(
                <tr key={index}>
                  <td className='fw-bold'>Credit Card 1</td>
                    <td>{CreditCard1_CurrentBalance}</td>
                    <td>{CreditCard1_AnnualRepayment}</td>
                    <td>{CreditCard1_InterestRate}</td>
              
                
                </tr>
                );
            }
            else{
         
            }

          }) }
          {/* CreditCardList1  */}

           {/* CreditCardList2  */}
           {  CreditCardList2.map((elem,index)=>{
            let {CreditCard2_CurrentBalance,CreditCard2_AnnualRepayment
              ,CreditCard2_InterestRate}=elem;
            if(CreditCardList2[0].CreditCard2_CurrentBalance !=='' ){
              return(
                <tr key={index}>
                  <td className='fw-bold'>Credit Card 2</td>
                    <td>{CreditCard2_CurrentBalance}</td>
                    <td>{CreditCard2_AnnualRepayment}</td>
                    <td>{CreditCard2_InterestRate}</td>
                  </tr>
                );
            }
            else{
         
            }

          }) }
          {/* CreditCardList2  */}


            {/* PersonalLoan1  */}
            {  CreditCardList1.map((elem,index)=>{
            let {PersonalLoan1_CurrentBalance,PersonalLoan1_AnnualRepayment
              ,PersonalLoan1_InterestRate}=elem;
            if(CreditCardList1[0].PersonalLoan1_CurrentBalance !=='' ){
              return(
                <tr key={index}>
                  <td className='fw-bold'>Personal Loan 1</td>
                    <td>{PersonalLoan1_CurrentBalance}</td>
                    <td>{PersonalLoan1_AnnualRepayment}</td>
                    <td>{PersonalLoan1_InterestRate}</td>
                  </tr>
                );
            }
            else{
         
            }

          }) }
          {/* PersonalLoan1  */}

          {/* PersonalLoan2  */}
          {  PersonalLoanList2.map((elem,index)=>{
            let {PersonalLoan2_CurrentBalance,PersonalLoan2_AnnualRepayment
              ,PersonalLoan2_InterestRate}=elem;
            if(PersonalLoanList2[0].PersonalLoan2_CurrentBalance !=='' ){
              return(
                <tr key={index}>
                  <td className='fw-bold'>Personal Loan 2</td>
                    <td>{PersonalLoan2_CurrentBalance}</td>
                    <td>{PersonalLoan2_AnnualRepayment}</td>
                    <td>{PersonalLoan2_InterestRate}</td>
                  </tr>
                );
            }
            else{
         
            }

          }) }
          {/* PersonalLoan2  */}

        </tbody>
</table>
                        </div>

                        {/*Table3 */}

     
                          <div className="row mt-5 mb-3">
                        <div className="col-md-12">
                          <button  type='submit' className="float-end btn w-25  bgColor modalBtn">Next</button>
                          <button className="float-end btn w-25  btn-outline  backBtn mx-3" onClick={BackFunction}>Back</button>
                        </div>
                      </div>
                        </Form>
                        }</Formik> 
                      </div>
                     
            </div>

            </div>
        </div>
    </div>
    
    </>
  ) 
}

export default AssetsLiabilities