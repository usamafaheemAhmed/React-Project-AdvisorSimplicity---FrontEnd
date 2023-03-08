import React,{ useState } from "react";
import "./incomeExpenses.css"
import Modal from "react-bootstrap/Modal";
import Collapse from 'react-bootstrap/Collapse';

import plus from "./images/plus.svg"
import down from "./images/down.svg"
import noteBook from "./images/notebook.svg"
import moneyBag from "./images/moneyBag.svg"
import dollarBag from "./images/dollarBag.svg"

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from'yup';
import { useNavigate } from "react-router-dom";


const IncomeExpenses = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  const [currentSaleryState, setCurrentSaleryState] = useState(false);
  const [carState, setCarState] = useState(false);
  const [creditCardState, seTcreditCardState] = useState(false)
  const [sacrificState, setSacrificState] = useState(false);
  const [contributionState, setContributionState] = useState(false);
  const [otherTaxableIncomeState, setotherTaxableIncomeState] = useState(false)
  const [otherTaxableIncomeState2, setotherTaxableIncomeState2] = useState(false)

  const [currentSaleryState2, setCurrentSaleryState2] = useState(false);
  const [carState2, setCarState2] = useState(false);
  const [creditCardState2, seTcreditCardState2] = useState(false)
  const [sacrificState2, setSacrificState2] = useState(false);
  const [contributionState2, setContributionState2] = useState(false);
  let letters = /^[a-zA-Z ]*$/;
  
const [centerlinkPaymentState, setCenterlinkPaymentState] = useState(false)
const [centerlinkPaymentState2, setCenterlinkPaymentState2] = useState(false)

const [giftedAssetState, setGiftedAssetState] = useState(false)
const [lumpsumExpensesState, setlumpsumExpensesState] = useState(false)
const [expectingState, setExpectingState] = useState(false)


let expectingInheritancesHandler=(elem)=>{
  if (elem==="No"){
    setExpectingState(false)
  
  }
  else{
    setExpectingState(true)
  }
  }

let lumpsumExpensesHandler=(elem)=>{
  if (elem==="No"){
    setlumpsumExpensesState(false)
  
  }
  else{
    setlumpsumExpensesState(true)
  }
  }

let giftedAssetHandler=(elem)=>{
  if (elem==="No"){
    setGiftedAssetState(false)
  
  }
  else{
    setGiftedAssetState(true)
  }
  }



  let centerlinkPaymentsHandler=(elem)=>{
  if (elem==="No"){
    setCenterlinkPaymentState(false)
  
  }
  else{
    setCenterlinkPaymentState(true)
  }
  }
  let centerlinkPaymentsHandler2=(elem)=>{
  if (elem==="No"){
    setCenterlinkPaymentState2(false)
  
  }
  else{
    setCenterlinkPaymentState2(true)
  }
  }
   
let currentlySalaryPackageHandler2=(elem)=>{
  if (elem==="No"){
    setCurrentSaleryState2(false)
  
  }
  else{
    setCurrentSaleryState2(true)
  
  }
  
  }
  
  let sacrificeradioHandler2=(elem)=>{
    if (elem==="No"){
      setSacrificState2(false)
    
    }
    else{
      setSacrificState2(true)
    
    }
    
    }
  
    let contributionradioHandler2=(elem)=>{
      if (elem==="No"){
        setContributionState2(false)
      
      }
      else{
        setContributionState2(true)
      
      }
      
      }
  
  let carStateHandler2=(elem)=>{
    let myCar=document.getElementById("car2");
    if(myCar.checked){
      setCarState2(true)
    }
    else{
      setCarState2(false)
    }
    
    
  }
  
  let creditCardStateHandler2=(elem)=>{
    
    let creditCard=document.getElementById("CreditCard2");
    let Mortgage=document.getElementById("Mortgage2");
    let Other=document.getElementById("Other2");
  
  
    if(creditCard.checked){
      seTcreditCardState2(true)
    }
    else if(Mortgage.checked){
      seTcreditCardState2(true)
    }
    
    else if(Other.checked){
      seTcreditCardState2(true)
    }
  
    else{
      seTcreditCardState2(false)
    }
    
  }
    
  let currentlySalaryPackageHandler=(elem)=>{
  if (elem==="No"){
    setCurrentSaleryState(false)
  
  }
  else{
    setCurrentSaleryState(true)
  
  }
  
  }
  
  let sacrificeradioHandler=(elem)=>{
    if (elem==="No"){
      setSacrificState(false)
    
    }
    else{
      setSacrificState(true)
    
    }
    
    }
  
    let contributionradioHandler=(elem)=>{
      if (elem==="No"){
        setContributionState(false)
      
      }
      else{
        setContributionState(true)
      
      }
      
      }
  
  let carStateHandler=(elem)=>{
    let myCar=document.getElementById("car1");
    if(myCar.checked){
      setCarState(true)
    }
    else{
      setCarState(false)
    }
    
    
  }
  
  let creditCardStateHandler=(elem)=>{
    
    let creditCard=document.getElementById("CreditCard1");
    let Mortgage=document.getElementById("Mortgage1");
    let Other=document.getElementById("Other1");
  
  
    if(creditCard.checked){
      seTcreditCardState(true)
    }
    else if(Mortgage.checked){
      seTcreditCardState(true)
    }
    
    else if(Other.checked){
      seTcreditCardState(true)
    }
  
    else{
      seTcreditCardState(false)
    }
    
    
  }
  
  function ChangeDateFormat(CDoB,HDate){
    let CurrentDate = new Date(document.getElementById(HDate).value);
    let dd = CurrentDate.getDate();
    let mm = CurrentDate.getMonth();
    let yyyy = CurrentDate.getFullYear();
    let setDate =  dd + '/' + (mm+1) + '/' + yyyy;
    document.getElementById(CDoB).value = setDate;
  }
  
  let otherTaxableIncomeHandler=(elem)=>{
    if (elem==="No"){
      setotherTaxableIncomeState(false)
    
    }
    else{
      setotherTaxableIncomeState(true)
    
    }
    
    }

    let otherTaxableIncomeHandler2=(elem)=>{
      if (elem==="No"){
        setotherTaxableIncomeState2(false)
      
      }
      else{
        setotherTaxableIncomeState2(true)
      
      }
      
      }

  const initialValues={

    //Client employment details
    clientPrimaryOccupation:'',
    currentlySalaryPackageRadio:'No',
    clientEmployerFBTStatus:'',
    clientCostBaseofCar:'',
    FBTradio:'No',
    clientCreditCardMortgageorOther:'',
    clientRunningCostsofCarPackaged:'',
    clientEmploymentStatus:'',
    clientNameofCompany:'',
    clientCommencementDate:'',
    clientNumberofhoursperweek:'',
    clientSalaryExcludingSuper:'',
    clientSuperAnnuationGuaranteeNumber:'',
    clientSuperAnnuationGuaranteeType:'',
    UnusedSickLeaveEntitlementsNumber:'',
    UnusedSickLeaveEntitlementsType:'',

    clientUnusedAnnualleaveentitlementsNumber:'',
    clientUnusedAnnualleaveentitlementsType:'',
    clientUnusedlongserviceleaveNumber:'',
    clientUnusedlongserviceleaveType:'',
    sacrificeradio:'No',
    clientAbilitytoSalarySacrificeHM:'',
    contributionradio:'No',
    clientTaxContributiontoSuperHM:'',
    significantlyradio:"No",
    ChoiceofFundradio:'No',
    whatDoYouHave:[],

    // partner employeement Detaails
    clientPrimaryOccupation2:'',
    currentlySalaryPackageRadio2:'No',
    clientEmployerFBTStatus2:'',
    clientCostBaseofCar2:'',
    FBTradio2:'No',
    clientCreditCardMortgageorOther2:'',
    clientRunningCostsofCarPackaged2:'',
    clientEmploymentStatus2:'',
    clientNameofCompany2:'',
    clientCommencementDate2:'',
    clientNumberofhoursperweek2:'',
    clientSalaryExcludingSuper2:'',
    clientSuperAnnuationGuaranteeNumber2:'',
    clientSuperAnnuationGuaranteeType2:'',
    UnusedSickLeaveEntitlementsNumber2:'',
    UnusedSickLeaveEntitlementsType2:'',

    clientUnusedAnnualleaveentitlementsNumber2:'',
    clientUnusedAnnualleaveentitlementsType2:'',
    clientUnusedlongserviceleaveNumber2:'',
    clientUnusedlongserviceleaveType2:'',
    sacrificeradio2:'No',
    clientAbilitytoSalarySacrificeHM2:'',
    contributionradio2:'No',
    clientTaxContributiontoSuperHM2:'',
    significantlyradio2:"No",
    ChoiceofFundradio2:'No',
    whatDoYouHave2:[],
    // partner employeement Detaails

    //Client Centre Link
    centrelinkPayments1: '',
    centerlink1radio: 'No',
    PaymentAmountFortnightly1: '',
    AnnualPaymentAmount1: '',
    CarerAllowance1radio: 'No',
    FamilyTaxBenefit1: '',
    currentlyrenting1radio: 'No',
    AssetGifted1radio: 'No',
    AssetBeenGiftedHM1: '',
    AssetBeenGiftedYears1: '',
    ActualDateofyear1: '',

    //Partner Centre Link
    centerlink2radio: 'No',
    centrelinkPayments2: '',
    PaymentAmountFortnightly2:'',
    AnnualPaymentAmount2: '',
    CarerAllowance2radio: 'No',
    FamilyTaxBenefit2: '',

    //Client Other Taxable Income
    AustralianResident1radio:'No',
    PrivateHospital1radio:'No',
    HECSdebt1radio:'No',
    claimingRebate1radio:'No',
    applicationPAYG1radio:'No',
    TaxPaymentsOutstanding1:'',
    otherTaxableIncome1radio:'No',
    AmountofOtherTaxableIncome1:'',
    TaxLossesCarriedForward1:'',

    //Partner Other Taxable Income
    AustralianResident2radio: 'No',
    PrivateHospital2radio: 'No',
    HECSdebt2radio: "No",
    claimingRebate2radio: 'No',
    applicationPAYG2radio: 'No',
    TaxPaymentsOutstanding2: '',
    otherTaxableIncome2radio: 'No',
    TaxLossesCarriedForward2: '',
    AmountofOtherTaxableIncome2: '',

    // Expenses
    totalGeneralLivingCosts: '',
    incomeInRetirement: '',
    lumpsumExpensesopt1: '',
    lumpsumExpensesradio: "No",
    lumpSumExpenseDescription: '',
    lumpSumExpenseYear: '',
    lumpSumExpenseAmount: '',
    expectingInheritancesradio: 'No',
    expectingInheritancesDescription: '',
    expectingInheritancesYear: '',
    expectingInheritancesAmount: '',
  }

  let Navigate = useNavigate();
  function BackFunction(){
    Navigate('/Business-Tax-Structure')
  }
  const onSubmit= (values,action) => {
    Navigate('/Professional-Advisors')
  console.log(values)
  }
  
  const validationSchema = Yup.object({
    clientPrimaryOccupation: Yup.string().matches(letters, "Only letters").required('Required') ,
    clientEmployerFBTStatus:Yup.string().required( "Required"),
    clientCostBaseofCar:Yup.number()
    .when('whatDoYouHave',{
      is: val => val && val.length <=4,
      then:Yup.number().required("Required")
      .test(
        "Is positive?",
        "Must be a positive number",
        (value)=> value >0
      ),
      otherwise: Yup.number().notRequired()
    }),
    clientRunningCostsofCarPackaged:Yup.number()
    .when('whatDoYouHave',{
      is: val => val && val.length ===3,
      then:Yup.number().required("Required")
      .test(
        "Is positive?",
        "Must be a positive number",
        (value)=> value >0
      ),
      otherwise: Yup.number().notRequired()
    }),
    clientCreditCardMortgageorOther:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    clientEmploymentStatus:Yup.string().required( "Required"),
    clientNameofCompany: Yup.string().matches(letters, "Only letters").required('Required') ,
    clientCommencementDate:Yup.string().required( "Required"),
    clientNumberofhoursperweek:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    clientSalaryExcludingSuper:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    clientSuperAnnuationGuaranteeNumber:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    clientSuperAnnuationGuaranteeType:Yup.string().required( "Required"),
    UnusedSickLeaveEntitlementsNumber:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    UnusedSickLeaveEntitlementsType:Yup.string().required( "Required"),
    clientUnusedAnnualleaveentitlementsNumber:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    clientUnusedAnnualleaveentitlementsType:Yup.string().required( "Required"),
    clientUnusedlongserviceleaveNumber:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    clientUnusedlongserviceleaveType:Yup.string().required( "Required"),
    clientAbilitytoSalarySacrificeHM:Yup.number()
    .when('sacrificeradio',{
      is: val => val && val.length ===3,
      then:Yup.number().required("Required")
      .test(
        "Is positive?",
        "Must be a positive number",
        (value)=> value >0
      ),
      otherwise: Yup.number().notRequired()
    }),
    clientTaxContributiontoSuperHM:Yup.number()
    .when('contributionradio',{
      is: val => val && val.length ===3,
      then:Yup.number().required("Required")
      .test(
        "Is positive?",
        "Must be a positive number",
        (value)=> value >0
      ),
      otherwise: Yup.number().notRequired()
    }),
    

        // partner employeement Details
        clientPrimaryOccupation2: Yup.string().matches(letters, "Only letters").required('Required') ,
        clientEmployerFBTStatus2:Yup.string().required( "Required"),
        clientCostBaseofCar2:Yup.number()
        .when('whatDoYouHave2',{
          is: val => val && val.length <=4,
          then:Yup.number().required("Required")
          .test(
            "Is positive?",
            "Must be a positive number",
            (value)=> value >0
          ),
          otherwise: Yup.number().notRequired()
        }),
        clientRunningCostsofCarPackaged2:Yup.number().required("Required")
          .test(
            "Is positive?",
            "Must be a positive number",
            (value)=> value >0
          ),
    
        clientCreditCardMortgageorOther2:Yup.number().required("Required")
        .test(
          "Is positive?",
          "Must be a positive number",
          (value) => value > 0
        ),
        clientEmploymentStatus2:Yup.string().required( "Required"),
        clientNameofCompany2: Yup.string().matches(letters, "Only letters").required('Required') ,
        clientCommencementDate2:Yup.string().required( "Required"),
        clientNumberofhoursperweek2:Yup.number().required("Required")
        .test(
          "Is positive?",
          "Must be a positive number",
          (value) => value > 0
        ),
        clientSalaryExcludingSuper2:Yup.number().required("Required")
        .test(
          "Is positive?",
          "Must be a positive number",
          (value) => value > 0
        ),
        clientSuperAnnuationGuaranteeNumber2:Yup.number().required("Required")
        .test(
          "Is positive?",
          "Must be a positive number",
          (value) => value > 0
        ),
        clientSuperAnnuationGuaranteeType2:Yup.string().required( "Required"),
        UnusedSickLeaveEntitlementsNumber2:Yup.number().required("Required")
        .test(
          "Is positive?",
          "Must be a positive number",
          (value) => value > 0
        ),
        UnusedSickLeaveEntitlementsType2:Yup.string().required( "Required"),
        clientUnusedAnnualleaveentitlementsNumber2:Yup.number().required("Required")
        .test(
          "Is positive?",
          "Must be a positive number",
          (value) => value > 0
        ),
        clientUnusedAnnualleaveentitlementsType2:Yup.string().required( "Required"),
        clientUnusedlongserviceleaveNumber2:Yup.number().required("Required")
        .test(
          "Is positive?",
          "Must be a positive number",
          (value) => value > 0
        ),
        clientUnusedlongserviceleaveType2:Yup.string().required( "Required"),
        clientAbilitytoSalarySacrificeHM2:Yup.number()
        .when('sacrificeradio2',{
          is: val => val && val.length ===3,
          then:Yup.number().required("Required")
          .test(
            "Is positive?",
            "Must be a positive number",
            (value)=> value >0
          ),
          otherwise: Yup.number().notRequired()
        }),
        clientTaxContributiontoSuperHM2:Yup.number()
        .when('contributionradio2',{
          is: val => val && val.length ===3,
          then:Yup.number().required("Required")
          .test(
            "Is positive?",
            "Must be a positive number",
            (value)=> value >0
          ),
          otherwise: Yup.number().notRequired()
        }),
    
    
        AmountPaidReceivedID:Yup.number()
        .when('childSupportReceived',{
          is: val => val && val.length ===4,
          then:Yup.number().required("Required")
          .test(
            "Is positive?",
            "Amount must be a positive number",
            (value)=> value >0
          ),
          otherwise: Yup.number().notRequired()
        }),

    // partner employeement Details

    //Client Centre Link
    centrelinkPayments1: Yup.string()
    .when("centerlink1radio",{
      is: val => val && val.length==3,
      then:Yup.string().required("Required")
      ,otherwise: Yup.string()
      .notRequired()
    }),

    PaymentAmountFortnightly1: Yup.number()
    .when('centerlink1radio',{
      is: val => val && val.length ===3,
      then:Yup.number().required("Required")
      .test(
        "Is positive?",
        "Must be a positive number",
        (value)=> value >0
      ),
      otherwise: Yup.number().notRequired()
    }),

    AnnualPaymentAmount1: Yup.number()
    .when('centerlink1radio',{
      is: val => val && val.length ===3,
      then:Yup.number().required("Required")
      .test(
        "Is positive?",
        "Must be a positive number",
        (value)=> value >0
      ),
      otherwise: Yup.number().notRequired()
    }),
    FamilyTaxBenefit1:  Yup.string()
    .when("centerlink1radio",{
      is: val => val && val.length==3,
      then:Yup.string().required("Required")
      ,otherwise: Yup.string()
      .notRequired()
    }),
    AssetBeenGiftedHM1: Yup.number()
    .when('AssetGifted1radio',{
      is: val => val && val.length ===3,
      then:Yup.number().required("Required")
      .test(
        "Is positive?",
        "Must be a positive number",
        (value)=> value >0
      ),
      otherwise: Yup.number().notRequired()
    }),
    AssetBeenGiftedYears1: Yup.string()
    .when("AssetGifted1radio",{
      is: val => val && val.length==3,
      then:Yup.string().required("Required")
      ,otherwise: Yup.string()
      .notRequired()
    }),
    ActualDateofyear1: Yup.string()
    .when("AssetGifted1radio",{
      is: val => val && val.length==3,
      then:Yup.string().required("Required")
      ,otherwise: Yup.string()
      .notRequired()
    }),

    //Partner Centre Link
    centrelinkPayments2:  Yup.string()
    .when("centerlink2radio",{
      is: val => val && val.length==3,
      then:Yup.string().required("Required")
      ,otherwise: Yup.string()
      .notRequired()
    }),
    PaymentAmountFortnightly2: Yup.number()
    .when('centerlink2radio',{
      is: val => val && val.length ===3,
      then:Yup.number().required("Required")
      .test(
        "Is positive?",
        "Must be a positive number",
        (value)=> value >0
      ),
      otherwise: Yup.number().notRequired()
    }),

    AnnualPaymentAmount2: Yup.number()
    .when('centerlink2radio',{
      is: val => val && val.length ===3,
      then:Yup.number().required("Required")
      .test(
        "Is positive?",
        "Must be a positive number",
        (value)=> value >0
      ),
      otherwise: Yup.number().notRequired()
    }),
    FamilyTaxBenefit2: Yup.string()
    .when("centerlink2radio",{
      is: val => val && val.length==3,
      then:Yup.string().required("Required")
      ,otherwise: Yup.string()
      .notRequired()
    }),

    // //Client other taxable income
    TaxPaymentsOutstanding1:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Amount must be a positive number",
      (value)=> value >0
    ),
    TaxLossesCarriedForward1:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Amount must be a positive number",
      (value)=> value >0
    ),
    AmountofOtherTaxableIncome1:Yup.number()
    .when('otherTaxableIncome1radio',{
      is: val => val && val.length ===3,
      then:Yup.number().required("Required")
      .test(
        "Is positive?",
        "Must be a positive number",
        (value)=> value >0
      ),
      otherwise: Yup.number().notRequired()
    }),

    // //Partner Other Taxable Income
    TaxPaymentsOutstanding2: Yup.number().required("Required")
    .test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    TaxLossesCarriedForward2: Yup.number().required("Required")
    .test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    AmountofOtherTaxableIncome2: Yup.number()
    .when('otherTaxableIncome2radio',{
      is: val => val && val.length ===3,
      then:Yup.number().required("Required")
      .test(
        "Is positive?",
        "Must be a positive number",
        (value)=> value >0
      ),
      otherwise: Yup.number().notRequired()
    }),

    //Expenses
    totalGeneralLivingCosts: Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    incomeInRetirement: Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    
    lumpSumExpenseDescription: Yup.string()
    .when("lumpsumExpensesradio",{
      is: val => val && val.length==3,
      then:Yup.string().required("Required")
      ,otherwise: Yup.string()
      .notRequired()
    }),
    lumpSumExpenseYear: Yup.string()
    .when("lumpsumExpensesradio",{
      is: val => val && val.length==3,
      then:Yup.string().required("Required")
      ,otherwise: Yup.string()
      .notRequired()
    }),
    lumpSumExpenseAmount:Yup.number()
    .when('lumpsumExpensesradio',{
      is: val => val && val.length ===3,
      then:Yup.number().required("Required")
      .test(
        "Is positive?",
        "Must be a positive number",
        (value)=> value >0
      ),
      otherwise: Yup.number().notRequired()
    }),


    expectingInheritancesDescription:Yup.string()
    .when("expectingInheritancesradio",{
      is: val => val && val.length==3,
      then:Yup.string().matches(letters, "Only letters").required('Required')
      ,otherwise: Yup.string()
      .notRequired()
    }),

    expectingInheritancesYear: Yup.string()
    .when("expectingInheritancesradio",{
      is: val => val && val.length==3,
      then:Yup.string().required("Required")
      ,otherwise: Yup.string()
      .notRequired()
    }),
    expectingInheritancesAmount:Yup.number()
    .when('expectingInheritancesradio',{
      is: val => val && val.length ===3,
      then:Yup.number().required("Required")
      .test(
        "Is positive?",
        "Must be a positive number",
        (value)=> value >0
      ),
      otherwise: Yup.number().notRequired()
    }),
  })

  const initialValues2={
    houseHoldrent:'',
    houseHoldElectricity:'',
    houseHoldrentType:'',
    houseHoldElectricityType:'',
    houseHoldWaterRates:'',
    houseHoldWaterRateType:'',

    houseHoldGas:'',
    houseHoldGasType:'',
    houseHoldPhone:'',
    houseHoldPhoneType:'',
    houseHoldCouncilRates:'',
    houseHoldCouncilRatesType:'',
    houseHoldInternet:'',
houseHoldInternetType:'',
houseHoldOther:'',
houseHoldOtherType:'',

PersonalFood:'',
PersonalFoodType:'',
PersonalClothing:'',
PersonalClothingValueType:'',

PersonalCigarettes:'',
PersonalCigarettesType:'',
PersonalAlcohol:'',
PersonalAlcoholType:'',

PersonalSubscriptionFees:'',
PersonalSubscriptionFeesType:'',
PersonalMembershipsClubs:'',
PersonalMembershipsClubsType:'',

PersonalOther:'',
PersonalOtherType:'',
PersonalHolidays:'',
PersonalHolidaysType:'',

PersonalDiningOut:'',
PersonalDiningOutType:'',
PersonalMobilePhone:'',
PersonalMobilePhoneType:'',

PersonalMedicalExpenses:'',
PersonalMedicalExpensesType:'',

TransportPetrol:'',
TransportPetrolType:'',
TransportCarRepairs:'',
TransportCarRepairsType:'',

TransportCarRegistration:'',
TransportCarRegistrationType:'',
PublicTransport:'',
PublicTransportType:'',
TransportOther:'',
TransportOtherType:'',

PrivateHealth:'',
PrivateHealthType:'',
LifeTPDTrauma:'',
LifeTPDTraumaType:'',


InsuranceIncomeProtection:'',
InsuranceIncomeProtectionType:'',
InsuranceCar:'',
InsuranceCarType:'',

InsuranceHomeContents:'',
InsuranceHomeContentsType:'',
InsuranceOther:'',
TransInsuranceType:'',

  }

  const onSubmit2=(values)=>{
    console.log(values)
    handleClose();
    
  }

  const validationSchema2=Yup.object({
    houseHoldrent:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    houseHoldElectricity:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    houseHoldrentType:Yup.string().required("Required"),
    houseHoldElectricityType:Yup.string().required("Required"),
    houseHoldWaterRateType:Yup.string().required("Required"),
    houseHoldWaterRates:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    houseHoldGas:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    houseHoldGasType:Yup.string().required("Required"),
    houseHoldPhone:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    houseHoldPhoneType:Yup.string().required("Required"),
    houseHoldCouncilRates:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    houseHoldCouncilRatesType:Yup.string().required("Required"),

    houseHoldInternet:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    houseHoldInternetType:Yup.string().required("Required"),
    houseHoldOther:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    houseHoldOtherType:Yup.string().required("Required"),

    PersonalFood:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    PersonalFoodType:Yup.string().required("Required"),
    PersonalClothing:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    PersonalClothingValueType:Yup.string().required("Required"),

    PersonalCigarettes:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    PersonalCigarettesType:Yup.string().required("Required"),
    PersonalAlcohol:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    PersonalAlcoholType:Yup.string().required("Required"),

    PersonalSubscriptionFees:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    PersonalSubscriptionFeesType:Yup.string().required("Required"),
    PersonalMembershipsClubs:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    PersonalMembershipsClubsType:Yup.string().required("Required"),

    PersonalOther:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    PersonalOtherType:Yup.string().required("Required"),
    PersonalHolidays:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    PersonalHolidaysType:Yup.string().required("Required"),

    PersonalDiningOut:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    PersonalDiningOutType:Yup.string().required("Required"),
    PersonalMobilePhone:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    PersonalMobilePhoneType:Yup.string().required("Required"),
    PersonalMedicalExpenses:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    PersonalMedicalExpensesType:Yup.string().required("Required"),

    TransportPetrol:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    TransportPetrolType:Yup.string().required("Required"),
    TransportCarRepairs:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    TransportCarRepairsType:Yup.string().required("Required"),

    TransportCarRegistration:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    TransportCarRegistrationType:Yup.string().required("Required"),
    PublicTransport:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    PublicTransportType:Yup.string().required("Required"),
    TransportOther:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    TransportOtherType:Yup.string().required("Required"),

    PrivateHealth:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    PrivateHealthType:Yup.string().required("Required"),
    LifeTPDTrauma:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    LifeTPDTraumaType:Yup.string().required("Required"),

    InsuranceIncomeProtection:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    InsuranceIncomeProtectionType:Yup.string().required("Required"),
    InsuranceCar:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    InsuranceCarType:Yup.string().required("Required"),
    InsuranceHomeContents:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    InsuranceHomeContentsType:Yup.string().required("Required"),
    InsuranceOther:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    TransInsuranceType:Yup.string().required("Required"),
  })
  
  return (
    <>
      <div className="container-fluid mt-4">
        <div className="row m-0 px-0">
          <div className="col-md-2"></div>
          <div className="col-md-12">

          <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
              enableReinitialize>
                  {({values , setFieldValue ,setValues,handleChange,formik})=>
                  <Form>

                  {/* Client Employment Details */}
                  <div className="row">
                      <div className="col-md-12">
                        <div className="shadow px-4 py-4">
                          <h3 className="text-center">Income & Expense</h3>
                          <h3 className="">Client Employment Details
                          <div className="iconContainerLg">
                             <img className="img-fluid" src={noteBook} alt="" />

                              </div>
                          </h3>

                          {/* 1 row */}
                            <div className="row">
                              <div className="col-md-6">
                              <div className="mb-3">
                                <label htmlFor="clientPrimaryOccupation" className="form-label">Primary Occupation</   label>
                                <Field type="text" className="form-control shadow inputDesign"
                                 id="clientPrimaryOccupation" name="clientPrimaryOccupation" placeholder="Primary Occupation"/>
                                 <ErrorMessage name="clientPrimaryOccupation" component='div' className="text-danger fw-bold"/>
                              </div>            
                              </div>
                                <div className="col-md-6">
                                  <div className="mb-3">
                                <label  className="form-label">
                                Do you currently Salary Package?
                                </label>
                              {/* switch button style */}
                               

                                <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="currentlySalaryPackageRadio"
                                 id="currentlySalaryPackage1" value="Yes"
                                  onClick={()=>currentlySalaryPackageHandler("yes")} 
                                   onChange={handleChange}
                                   checked={values.currentlySalaryPackageRadio==="Yes"}
                                   />
                                <label htmlFor="currentlySalaryPackage1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="currentlySalaryPackageRadio"  
                                onClick={()=>currentlySalaryPackageHandler("No")}
                                 id="currentlySalaryPackage2" value="No"
                                onChange={handleChange} 
                                checked={values.currentlySalaryPackageRadio==="No"}
                                />
                                <label htmlFor="currentlySalaryPackage2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>
                                </div>
                              {/* switch button style */}
                              </div>
                                </div>
                            </div>
                          {/* 1 row */}

                          {/* 2 row */}
                          { currentSaleryState &&
                            <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                <label htmlFor="clientEmployerFBTStatus" className="form-label">
                                Employer FBT Status
                                </label>
                                <Field
                                as="select"
                                name="clientEmployerFBTStatus"
                                  id="clientEmployerFBTStatus"
                                  className="form-select shadow  inputDesign"
                                >
                                  <option value=''>Select</option>
                                  <option value="Fll FBT">Fll FBT</option>
                                  <option value="Rebatable">Rebatable</option>
                                  <option value="Exempt ($17K Cap)">Exempt ($17K Cap)</option>
                                  <option value="Exempt ($30K Cap)">Exempt ($30K Cap)</option>
                          
                                </Field>
                               <ErrorMessage  name="clientEmployerFBTStatus" component='div' className="text-danger fw-bold"  />
                                </div>
                            </div>
                            <div className="col-md-6">
                              
                              <div>
                            <label htmlFor="clientEmployerFBTStatus" className="form-label">
                                What do you have?
                                </label>
                                </div>
                           
                                <div className="btn-group " role="group" aria-label="Basic checkbox toggle button group">
                            
  <Field type="checkbox" className="btn-check" id="car1"
  name="whatDoYouHave" value="car"
  onClick={()=>carStateHandler()}

   />
  <label className="btn btn-outline-success"htmlFor="car1">Car</label>

  <Field type="checkbox" className="btn-check" id="CreditCard1"
  name="whatDoYouHave" value="CreditCard" 
  onClick={()=>creditCardStateHandler()} />
  <label className="btn btn-outline-success"htmlFor="CreditCard1">Credit Card</label>

  <Field type="checkbox" className="btn-check" id="Mortgage1"
  name="whatDoYouHave" value="Mortgage"
  onClick={()=>creditCardStateHandler()}  />
  <label className="btn btn-outline-success"htmlFor="Mortgage1">Mortgage</label>
  
 <Field type="checkbox" className="btn-check" id="Other1"
 name="whatDoYouHave" value="Other"
 onClick={()=>creditCardStateHandler()} />
  <label className="btn btn-outline-success"htmlFor="Other1">Other</label>
</div>

                           
                          
                            </div>
                            </div>
                            }
                          {/* 2 row */}

                          {/* 3 row */}
                           {carState && <div className="row">
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="clientCostBaseofCar" className="form-label">Cost Base of Car</   label>
                              <Field type="number" className="form-control shadow inputDesign"
                               id="clientCostBaseofCar" name='clientCostBaseofCar' placeholder="Cost Base of Car"/>
                        <ErrorMessage component='div' className="text-danger fw-bold" name="clientCostBaseofCar"  />

                            </div>            
                            </div>
                                <div className="col-md-6">
                                <div className="mb-3">
                              <label  className="form-label">
                              FBT Paid By Employer
                              </label>
                                {/* switch button style */}
                                <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="FBTradio" id="FBTopt1"
                                onChange={handleChange} value='Yes'
                                checked={values.FBTradio==="Yes"}  />
                                <label htmlFor="FBTopt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="FBTradio" id="FBTopt2"
                                onChange={handleChange} value='No'
                                checked={values.FBTradio==="No"} />
                                <label htmlFor="FBTopt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>
                                </div>
                              {/* switch button style */}

                              {/* <div className="form-check form-switch p-0">
                              <label htmlFor="clientFBTPaidByEmployer" className="float-start">No</label>

                                <input
                                  className="form-check-input boxShadow  mx-1"
                                  type="checkbox"
                                  id="clientFBTPaidByEmployer"
                                />
                                <label htmlFor="clientFBTPaidByEmployer">Yes</label>

                              </div> */}
                              

                                </div>
                                
                                    
                                      
                            
                                    
                                </div>
                            </div>}
                          {/* 3 row */}

                          {/* 4 row */}
                            <div className="row">
                          
                            <div className="col-md-6">
                            {carState &&   <div className="mb-3">
                              <label htmlFor="clientRunningCostsofCarPackaged" className="form-label ">Running Costs of Car Packaged?</   label>
                              <Field type="number" className="form-control inputDesign shadow"
                              name='clientRunningCostsofCarPackaged'
                              id="clientRunningCostsofCarPackaged" placeholder="Running Costs of Car Packaged"/>
                         <ErrorMessage component='div' className="text-danger fw-bold" name="clientRunningCostsofCarPackaged"  />

                            </div>    }        
                            </div>

                            <div className="col-md-6">
                            {creditCardState &&    
                            <div className="mb-3">
                              <label htmlFor="clientCreditCardMortgageorOther" className="form-label">Credit Card, Mortgage or Other?</   label>
                              <Field type="number" className="form-control inputDesign shadow" 
                              name='clientCreditCardMortgageorOther' id="clientCreditCardMortgageorOther" placeholder="Credit Card, Mortgage or Other"/>
                         <ErrorMessage component='div' className="text-danger fw-bold" name="clientCreditCardMortgageorOther"  />
                           
                            </div> 
                            }           
                            </div>
                              
                          </div>
                          {/* 4 row */}

                          {/* end child of 1st row--------------- */}

                          {/* 5 row */}
                            <div className="row">
                            <div className="col-md-6">
                                    <div className="mb-3">
                                <label htmlFor="clientEmploymentStatus" className="form-label">
                                Employment Status
                                </label>
                                <Field
                                as='select'
                                  id="clientEmploymentStatus"
                                  className="form-select shadow  inputDesign"
                                  name="clientEmploymentStatus"
                                >
                                  <option value=''>Select</option>
                                  <option value="Full Time">Full Time</option>
                                  <option value="Part Time">Part Time</option>
                                  <option value="Casual">Casual</option>
                                  <option value="Conratct">Conratct</option>
                                  <option value="OnLeave">On Leave</option>
                                </Field>
                                <ErrorMessage component='div' className="text-danger fw-bold" name="clientEmploymentStatus"  />

                                    </div>
        
                            </div>
                            <div className="col-md-6">
                              <div className="mb-3">
                                <label htmlFor="clientNameofCompany" className="form-label">Name of Company</   label>
                                <Field type="text" className="form-control inputDesign shadow"
                                name="clientNameofCompany"
                                id="clientNameofCompany" placeholder="Name of Company"/>
                              <ErrorMessage component='div' className="text-danger fw-bold" name="clientNameofCompany"  />

                              </div>            
                            </div>
                            
                            </div>
                          {/* 5 row */}


                            {/* 6 row */}
                            <div className="row">
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="clientCommencementDate" className="form-label">Commencement Date</   label>
                              <div className="input-group ">
                        <Field
                          className="form-control inputDesign shadow"
                          id="clientCommencementDate"
                          name='clientCommencementDate'
                          // onBlur={(e)=>ageHandler("ClientDoBID","employeeAgeID")}
                          value={values.DoBID}
                          max="2023-1-31"
                        />
                        <div className="input-group-append">
                          <span className="input-group-text" id="CalenderIcon">
                            <input className="HiddenDate" name='clientCommencementDate'
                             type='date' id="HiddenDate" onChange={()=>ChangeDateFormat("clientCommencementDate","HiddenDate")}/>
                          </span>
                        </div>
                              </div>
                      <ErrorMessage component='div' className="text-danger fw-bold"name="clientCommencementDate" />

                            </div> 


                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="clientNumberofhoursperweek" className="form-label">Number of hours per week</   label>
                              <Field type="number" className="form-control inputDesign shadow" id="clientNumberofhoursperweek"
                              name="clientNumberofhoursperweek" placeholder="Number of hours per week"/>
                              <ErrorMessage name="clientNumberofhoursperweek" component='div' className="text-danger fw-bold"/>
                            </div>            
                            </div>
                              
                          </div>
                          {/* 6 row */}

                          {/* 7 row */}
                          <div className="row">
                              <div className="col-md-6">
                              <div className="mb-3">
                                <label htmlFor="clientSalaryExcludingSuper" className="form-label">Salary (Excluding Super)</   label>
                                <Field type="number" name="clientSalaryExcludingSuper" className="form-control inputDesign shadow" id="clientSalaryExcludingSuper" placeholder="Salary (Excluding Super)"/>
                                <ErrorMessage name="clientSalaryExcludingSuper" component='div' className="text-danger fw-bold"/>
                             
                              </div>            
                              </div>
                            <div className="col-md-6">
                                    <div className="mb-3">
                                <label htmlFor="clientSuperAnnuationGuaranteeNumber" className="form-label">
                                Superannuation Guarantee
                                </label>
                                <div className="row">
                                  <div className="col-8">
                                <Field type="number" className="form-control inputDesign shadow" id="clientSuperAnnuationGuaranteeNumber"
                                placeholder="Superannuation Guarantee"
                                name="clientSuperAnnuationGuaranteeNumber"/>
                              <ErrorMessage name="clientSuperAnnuationGuaranteeNumber" component='div' className="text-danger fw-bold"/>


                                  </div>
                                  <div className="col-4">
                                  <Field
                                  as='select'
                                  name="clientSuperAnnuationGuaranteeType"
                                  id="clientSuperAnnuationGuaranteeType"
                                  className="form-select shadow  inputDesign"
                                >
                                  <option value=''>Select</option>
                                  <option value="dollor">$</option>
                                  <option value="percentage">%</option>
                                </Field>
                                <ErrorMessage name="clientSuperAnnuationGuaranteeType" component='div' className="text-danger fw-bold"/>

                                  </div>
                                </div>
                                    </div>
                            </div>
                            </div>
                          {/* 7 row */}

                          {/* 8 row */}
                          <div className="row">
                            <div className="col-md-6">
                                  <div className="mb-3">
                                <label  className="form-label">
                                Does your Employer Offer Choice of Fund?
                                </label>

                                  {/* switch button style */}
                                  <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="ChoiceofFundradio" id="ChoiceofFundopt1"
                               
                                onChange={handleChange} value="Yes"
                                checked={values.ChoiceofFundradio==="Yes"} />
                                <label htmlFor="ChoiceofFundopt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="ChoiceofFundradio" id="ChoiceofFundopt2"
                                
                                onChange={handleChange} value="No"
                                checked={values.ChoiceofFundradio==="No"} />
                                <label htmlFor="ChoiceofFundopt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>
                                </div>
                              {/* switch button style */}
                              
                                  </div>
                            </div>
                            <div className="col-md-6">
                                    <div className="mb-3">
                                <label htmlFor="UnusedSickLeaveEntitlementsNumber" className="form-label">
                                Unused sick leave entitlements
                                </label>
                                <div className="row">
                                  <div className="col-8">
                                <Field type="number" className="form-control inputDesign shadow"
                                id="UnusedSickLeaveEntitlementsNumber" 
                                name="UnusedSickLeaveEntitlementsNumber"
                                placeholder="Unused sick leave entitlements"/>

                            <ErrorMessage name="UnusedSickLeaveEntitlementsNumber"
                             component='div' className="text-danger fw-bold"/>


                                  </div>
                                  <div className="col-4">
                                  <Field
                                  as='select'
                                  id="UnusedSickLeaveEntitlementsType"
                                  name="UnusedSickLeaveEntitlementsType"
                                  className="form-select shadow  inputDesign"
                                >
                                  <option value=''>Select</option>
                                  <option value="days">Days</option>
                                  <option value="hours">Hours</option>
                                  <option value="weeks">Weeks</option>
                                  <option value="months">Months</option>
                                </Field>
                                <ErrorMessage name="UnusedSickLeaveEntitlementsType" 
                                component='div' className="text-danger fw-bold"/>
                                  </div>
                                </div>
                            
                              
                                
                                    </div>
        
                            </div>
                          
                            </div>
                          {/* 8 row */}

                        
                          

                          {/* 9 row */}
                            <div className="row">
                            
                            <div className="col-md-6">
                                    <div className="mb-3">
                                <label htmlFor="clientUnusedAnnualleaveentitlementsNumber" className="form-label">
                                Unused annual leave entitlements
                                </label>
                                <div className="row">
                                  <div className="col-8">
                                <Field type="number" className="form-control inputDesign shadow"
                                 id="clientUnusedAnnualleaveentitlementsNumber"
                                 name="clientUnusedAnnualleaveentitlementsNumber"
                                placeholder="Unused annual leave entitlements"/>
                                <ErrorMessage name="clientUnusedAnnualleaveentitlementsNumber"
                                component="div" className="text-danger fw-bold" />
                                  </div>
                                  <div className="col-4">
                                  <Field
                                  as='select'
                                  id="clientUnusedAnnualleaveentitlementsType"
                                  name='clientUnusedAnnualleaveentitlementsType'
                                  className="form-select shadow  inputDesign"
                                >
                                  <option value="">Select</option>
                                  <option value="days">Days</option>
                                  <option value="hours">Hours</option>
                                  <option value="weeks">Weeks</option>
                                  <option value="months">Months</option>
                                </Field>
                                <ErrorMessage name="clientUnusedAnnualleaveentitlementsType"
                                component="div" className="text-danger fw-bold" />
                                  </div>
                                </div>
                                    </div>
        
                            </div>

                            <div className="col-md-6">
                                    <div className="mb-3">
                                <label htmlFor="clientUnusedlongserviceleaveNumber" className="form-label">
                                Unused long service leave entitlements
                                </label>
                                <div className="row">
                                  <div className="col-8">
                                <Field type="number" className="form-control inputDesign shadow"
                                id="clientUnusedlongserviceleaveNumber"
                                name="clientUnusedlongserviceleaveNumber"
                                 placeholder="Unused long service leave entitlements"/>
                                
                                <ErrorMessage name="clientUnusedlongserviceleaveNumber"
                                component="div" className="text-danger fw-bold" />
                                  </div>
                                  <div className="col-4">
                                  <Field
                                  as="select"
                                  id="clientUnusedlongserviceleaveType"
                                  name="clientUnusedlongserviceleaveType"
                                  className="form-select shadow  inputDesign"
                                >
                                  <option value="">Select</option>
                                  <option value="days">Days</option>
                                  <option value="hours">Hours</option>
                                  <option value="weeks">Weeks</option>
                                  <option value="months">Months</option>
                                </Field>
                                <ErrorMessage name="clientUnusedlongserviceleaveType"
                                component="div" className="text-danger fw-bold" />
                                  </div>
                                </div>
                            
                              
                                
                                    </div>
        
                            </div>
                            
                            </div>
                          {/* 9 row */}

                      

                        

                          {/* 10 row */}
                            <div className="row">
                            <div className="col-md-6">
                                  <div className="mb-3">
                                <label  className="form-label">
                                Do you have the ability to salary sacrifice?
                                </label>

                                  {/* switch button style */}
                                  <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="sacrificeradio" value="Yes" id="sacrificeopt1"
                                onClick={()=>sacrificeradioHandler("Yes")} 
                                onChange={handleChange}
                                checked={values.sacrificeradio==="Yes"} />
                                <label htmlFor="sacrificeopt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="sacrificeradio"
                                value="No" id="sacrificeopt2"
                                   onClick={()=>sacrificeradioHandler("No")} 
                                   onChange={handleChange}
                                   checked={values.sacrificeradio==="No"}/>
                                <label htmlFor="sacrificeopt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>
                                </div>
                              {/* switch button style */}
                              
                                  </div>
                            </div>
                              <div className="col-md-6">
                                  <div className="mb-3">
                                <label  className="form-label">
                                Do you make any after tax-contribution to super?
                                </label>
                              
                           {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="contributionradio" id="contributionopt1" 
                                onClick={()=>contributionradioHandler("yes")} 
                                onChange={handleChange} value="Yes"
                                checked={values.contributionradio==="Yes"}/>
                                <label htmlFor="contributionopt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="contributionradio" id="contributionopt2"
                                value="No"
                                onClick={()=>contributionradioHandler("No")} 
                                onChange={handleChange} 
                                checked={values.contributionradio==="No"} />
                                <label htmlFor="contributionopt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>
                                </div>
                              {/* switch button style */}
                          </div>
                                   </div>
                            </div>
                          {/* 10 row */}

                          {/* 11 row */}
                            <div className="row">
                            <div className="col-md-6">
                           {sacrificState && 
                            <div className="mb-3">
                              <label htmlFor="clientAbilitytoSalarySacrificeHM" className="form-label">How Much</   label>
                              <Field type="number" className="form-control
                               inputDesign shadow" id="clientAbilitytoSalarySacrificeHM"
                               name="clientAbilitytoSalarySacrificeHM"
                              placeholder="How much you have the ability to salary sacrifice?"/>
                               <ErrorMessage name="clientAbilitytoSalarySacrificeHM"
                                component="div" className="text-danger fw-bold" />
                            </div>  }
                                      
                            </div>
                            <div className="col-md-6">
                          { contributionState &&
                           <div className="mb-3">
                              <label htmlFor="clientTaxContributiontoSuperHM" className="form-label">How Much</   label>
                              <Field type="number" className="form-control inputDesign
                               shadow" id="clientTaxContributiontoSuperHM"
                               name="clientTaxContributiontoSuperHM"
                               placeholder="How much you make any after tax-contribution to super?"/>
                              <ErrorMessage name="clientTaxContributiontoSuperHM"
                                component="div" className="text-danger fw-bold" />
                            </div>  
                            }        
                            </div>
                              
                            </div>
                          {/* 11 row */}

                          {/* 12 row */}
                          <div className="row">
                            <div className="col-md-6">
                                  <div className="mb-3">
                                <label  className="form-label">
                                Can your income vary significantly?
                                </label>

                                  {/* switch button style */}
                                  <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="significantlyradio" id="significantlyopt1"
                                onChange={handleChange} value="Yes"
                                checked={values.significantlyradio==="Yes"} />
                                <label htmlFor="significantlyopt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="significantlyradio" id="significantlyopt2"
                               
                                onChange={handleChange} value="No"
                                checked={values.significantlyradio==="No"} />
                                <label htmlFor="significantlyopt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>
                                </div>
                              {/* switch button style */}
                       
                                  </div>
                            </div>
                            <div className="col-md-6">

                            </div>
                                
                          </div>

                          {/* 12 row */}
                          </div>
                      </div>


                   
                    </div>
                  {/* Client Employment Details */}

                    {/* Partner Employment Details */}
                   <div className="row">
                      <div className="col-md-12">
                        <div className="shadow px-4 py-4">
                          <h3 className="text-center">Income & Expense</h3>
                          <h3 className="">Partner Employment Details
                          <div className="iconContainerLg">
                             <img className="img-fluid" src={noteBook} alt="" />

                              </div>
                          </h3>

                          {/* 1 row */}
                            <div className="row">
                              <div className="col-md-6">
                              <div className="mb-3">
                                <label htmlFor="clientPrimaryOccupation2" className="form-label">Primary Occupation</   label>
                                <Field type="text" className="form-control shadow inputDesign"
                                 id="clientPrimaryOccupation2" name="clientPrimaryOccupation2" placeholder="Primary Occupation"/>
                                 <ErrorMessage name="clientPrimaryOccupation2" component='div' className="text-danger fw-bold"/>
                              </div>            
                              </div>
                                <div className="col-md-6">
                                  <div className="mb-3">
                                <label  className="form-label">
                                Do you currently Salary Package?
                                </label>
                              {/* switch button style */}
                               

                                <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="currentlySalaryPackageRadio2"
                                 id="currentlySalaryPackage12" value="Yes"
                                  onClick={()=>currentlySalaryPackageHandler2("yes")} 
                                   onChange={handleChange}
                                   checked={values.currentlySalaryPackageRadio2==="Yes"}
                                   />
                                <label htmlFor="currentlySalaryPackage12" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="currentlySalaryPackageRadio2"  
                                onClick={()=>currentlySalaryPackageHandler2("No")}
                                 id="currentlySalaryPackage22" value="No"
                                onChange={handleChange} 
                                checked={values.currentlySalaryPackageRadio2==="No"}
                                />
                                <label htmlFor="currentlySalaryPackage22" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>
                                </div>
                              {/* switch button style */}
                              </div>
                                </div>
                            </div>
                          {/* 1 row */}

                          {/* 2 row */}
                          { currentSaleryState2 &&
                            <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                <label htmlFor="clientEmployerFBTStatus2" className="form-label">
                                Employer FBT Status
                                </label>
                                <Field
                                as="select"
                                name="clientEmployerFBTStatus2"
                                  id="clientEmployerFBTStatus2"
                                  className="form-select shadow  inputDesign"
                                >
                                  <option value=''>Select</option>
                                  <option value="Fll FBT">Fll FBT</option>
                                  <option value="Rebatable">Rebatable</option>
                                  <option value="Exempt ($17K Cap)">Exempt ($17K Cap)</option>
                                  <option value="Exempt ($30K Cap)">Exempt ($30K Cap)</option>
                          
                                </Field>
                               <ErrorMessage  name="clientEmployerFBTStatus2" component='div' className="text-danger fw-bold"  />
                                </div>
                            </div>
                            <div className="col-md-6">
                              
                              <div>
                            <label htmlFor="clientEmployerFBTStatus2" className="form-label">
                                What do you have?
                                </label>
                                </div>
                           
                                <div className="btn-group " role="group" aria-label="Basic checkbox toggle button group">
                            
  <Field type="checkbox" className="btn-check" id="car2"
  name="whatDoYouHave2" value="car"
  onClick={()=>carStateHandler2()}

   />
  <label className="btn btn-outline-success"htmlFor="car2">Car</label>

  <Field type="checkbox" className="btn-check" id="CreditCard2"
  name="whatDoYouHave2" value="CreditCard" 
  onClick={()=>creditCardStateHandler2()} />
  <label className="btn btn-outline-success"htmlFor="CreditCard2">Credit Card</label>

  <Field type="checkbox" className="btn-check" id="Mortgage2"
  name="whatDoYouHave2" value="Mortgage"
  onClick={()=>creditCardStateHandler2()}  />
  <label className="btn btn-outline-success"htmlFor="Mortgage2">Mortgage</label>
  
 <Field type="checkbox" className="btn-check" id="Other2"
 name="whatDoYouHave2" value="Other"
 onClick={()=>creditCardStateHandler2()} />
  <label className="btn btn-outline-success"htmlFor="Other2">Other</label>
</div>
</div>
                            </div>
                            }
                          {/* 2 row */}

                          {/* 3 row */}
                           {carState2 && <div className="row">
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="clientCostBaseofCar2" className="form-label">Cost Base of Car</   label>
                              <Field type="number" className="form-control shadow inputDesign"
                               id="clientCostBaseofCar2" name='clientCostBaseofCar2' placeholder="Cost Base of Car"/>
                        <ErrorMessage component='div' className="text-danger fw-bold" name="clientCostBaseofCar2"  />

                            </div>            
                            </div>
                                <div className="col-md-6">
                                <div className="mb-3">
                              <label  className="form-label">
                              FBT Paid By Employer
                              </label>
                                {/* switch button style */}
                                <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="FBTradio2" id="FBTopt12"
                                onChange={handleChange} value='Yes'
                                checked={values.FBTradio2==="Yes"}  />
                                <label htmlFor="FBTopt12" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="FBTradio2" id="FBTopt22"
                                onChange={handleChange} value='No'
                                checked={values.FBTradio2==="No"} />
                                <label htmlFor="FBTopt22" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>
                                </div>
                              {/* switch button style */}

                              {/* <div className="form-check form-switch p-0">
                              <label htmlFor="clientFBTPaidByEmployer" className="float-start">No</label>

                                <input
                                  className="form-check-input boxShadow  mx-1"
                                  type="checkbox"
                                  id="clientFBTPaidByEmployer"
                                />
                                <label htmlFor="clientFBTPaidByEmployer">Yes</label>

                              </div> */}
                              

                                </div>
                                
                                    
                                      
                            
                                    
                                </div>
                            </div>}
                          {/* 3 row */}

                          {/* 4 row */}
                            <div className="row">
                          
                            <div className="col-md-6">
                            {carState2 &&   <div className="mb-3">
                              <label htmlFor="clientRunningCostsofCarPackaged2" className="form-label ">Running Costs of Car Packaged?</   label>
                              <Field type="number" className="form-control inputDesign shadow"
                              name='clientRunningCostsofCarPackaged2'
                              id="clientRunningCostsofCarPackaged2" placeholder="Running Costs of Car Packaged"/>
                         <ErrorMessage component='div' className="text-danger fw-bold" name="clientRunningCostsofCarPackaged2"  />

                            </div>    }        
                            </div>

                            <div className="col-md-6">
                            { creditCardState2&&    
                            <div className="mb-3">
                              <label htmlFor="clientCreditCardMortgageorOther2" className="form-label">Credit Card, Mortgage or Other?</   label>
                              <Field type="number" className="form-control inputDesign shadow" 
                              name='clientCreditCardMortgageorOther2' id="clientCreditCardMortgageorOther2" placeholder="Credit Card, Mortgage or Other"/>
                         <ErrorMessage component='div' className="text-danger fw-bold" name="clientCreditCardMortgageorOther2"  />
                           
                            </div> 
                            }           
                            </div>
                              
                          </div>
                          {/* 4 row */}

                          {/* end child of 1st row--------------- */}

                          {/* 5 row */}
                            <div className="row">
                            <div className="col-md-6">
                                    <div className="mb-3">
                                <label htmlFor="clientEmploymentStatus2" className="form-label">
                                Employment Status
                                </label>
                                <Field
                                as='select'
                                  id="clientEmploymentStatus2"
                                  className="form-select shadow  inputDesign"
                                  name="clientEmploymentStatus2"
                                >
                                  <option value=''>Select</option>
                                  <option value="Full Time">Full Time</option>
                                  <option value="Part Time">Part Time</option>
                                  <option value="Casual">Casual</option>
                                  <option value="Conratct">Conratct</option>
                                  <option value="OnLeave">On Leave</option>
                                </Field>
                                <ErrorMessage component='div' className="text-danger fw-bold" name="clientEmploymentStatus2"  />

                                    </div>
        
                            </div>
                            <div className="col-md-6">
                              <div className="mb-3">
                                <label htmlFor="clientNameofCompany2" className="form-label">Name of Company</   label>
                                <Field type="text" className="form-control inputDesign shadow"
                                name="clientNameofCompany2"
                                id="clientNameofCompany2" placeholder="Name of Company"/>
                              <ErrorMessage component='div' className="text-danger fw-bold" name="clientNameofCompany2"  />

                              </div>            
                            </div>
                            
                            </div>
                          {/* 5 row */}


                            {/* 6 row */}
                            <div className="row">
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="clientCommencementDate2" className="form-label">Commencement Date</   label>
                              <div className="input-group ">
                        <Field
                          className="form-control inputDesign shadow"
                          id="clientCommencementDate2"
                          name='clientCommencementDate2'
                          // onBlur={(e)=>ageHandler("ClientDoBID","employeeAgeID")}
                          value={values.DoBID}
                          max="2023-1-31"
                        />
                        <div className="input-group-append">
                          <span className="input-group-text" id="CalenderIcon">
                            <input className="HiddenDate" name='clientCommencementDate2'
                             type='date' id="HiddenDate" onChange={()=>ChangeDateFormat("clientCommencementDate2","HiddenDate")}/>
                          </span>
                        </div>
                              </div>
                      <ErrorMessage component='div' className="text-danger fw-bold"name="clientCommencementDate2" />

                            </div> 


                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="clientNumberofhoursperweek2" className="form-label">Number of hours per week</   label>
                              <Field type="number" className="form-control inputDesign shadow" id="clientNumberofhoursperweek2"
                              name="clientNumberofhoursperweek2" placeholder="Number of hours per week"/>
                              <ErrorMessage name="clientNumberofhoursperweek2" component='div' className="text-danger fw-bold"/>
                            </div>            
                            </div>
                              
                          </div>
                          {/* 6 row */}

                          {/* 7 row */}
                          <div className="row">
                              <div className="col-md-6">
                              <div className="mb-3">
                                <label htmlFor="clientSalaryExcludingSuper2" className="form-label">Salary (Excluding Super)</   label>
                                <Field type="number" name="clientSalaryExcludingSuper2" className="form-control inputDesign shadow" id="clientSalaryExcludingSuper2" placeholder="Salary (Excluding Super)"/>
                                <ErrorMessage name="clientSalaryExcludingSuper2" component='div' className="text-danger fw-bold"/>
                             
                              </div>            
                              </div>
                            <div className="col-md-6">
                                    <div className="mb-3">
                                <label htmlFor="clientSuperAnnuationGuaranteeNumber2" className="form-label">
                                Superannuation Guarantee
                                </label>
                                <div className="row">
                                  <div className="col-8">
                                <Field type="number" className="form-control inputDesign shadow" id="clientSuperAnnuationGuaranteeNumber2"
                                placeholder="Superannuation Guarantee"
                                name="clientSuperAnnuationGuaranteeNumber2"/>
                              <ErrorMessage name="clientSuperAnnuationGuaranteeNumber2" component='div' className="text-danger fw-bold"/>


                                  </div>
                                  <div className="col-4">
                                  <Field
                                  as='select'
                                  name="clientSuperAnnuationGuaranteeType2"
                                  id="clientSuperAnnuationGuaranteeType2"
                                  className="form-select shadow  inputDesign"
                                >
                                  <option value=''>Select</option>
                                  <option value="dollor">$</option>
                                  <option value="percentage">%</option>
                                </Field>
                                <ErrorMessage name="clientSuperAnnuationGuaranteeType2" component='div' className="text-danger fw-bold"/>

                                  </div>
                                </div>
                                    </div>
                            </div>
                            </div>
                          {/* 7 row */}

                          {/* 8 row */}
                          <div className="row">
                            <div className="col-md-6">
                                  <div className="mb-3">
                                <label  className="form-label">
                                Does your Employer Offer Choice of Fund?
                                </label>

                                  {/* switch button style */}
                                  <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="ChoiceofFundradio2" id="ChoiceofFundopt12"
                               
                                onChange={handleChange} value="Yes"
                                checked={values.ChoiceofFundradio2==="Yes"} />
                                <label htmlFor="ChoiceofFundopt12" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="ChoiceofFundradio2" id="ChoiceofFundopt22"
                                
                                onChange={handleChange} value="No"
                                checked={values.ChoiceofFundradio2==="No"} />
                                <label htmlFor="ChoiceofFundopt22" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>
                                </div>
                              {/* switch button style */}
                              
                                  </div>
                            </div>
                            <div className="col-md-6">
                                    <div className="mb-3">
                                <label htmlFor="UnusedSickLeaveEntitlementsNumber2" className="form-label">
                                Unused sick leave entitlements
                                </label>
                                <div className="row">
                                  <div className="col-8">
                                <Field type="number" className="form-control inputDesign shadow"
                                id="UnusedSickLeaveEntitlementsNumber2" 
                                name="UnusedSickLeaveEntitlementsNumber2"
                                placeholder="Unused sick leave entitlements"/>

                            <ErrorMessage name="UnusedSickLeaveEntitlementsNumber2"
                             component='div' className="text-danger fw-bold"/>


                                  </div>
                                  <div className="col-4">
                                  <Field
                                  as='select'
                                  id="UnusedSickLeaveEntitlementsType2"
                                  name="UnusedSickLeaveEntitlementsType2"
                                  className="form-select shadow  inputDesign"
                                >
                                  <option value=''>Select</option>
                                  <option value="days">Days</option>
                                  <option value="hours">Hours</option>
                                  <option value="weeks">Weeks</option>
                                  <option value="months">Months</option>
                                </Field>
                                <ErrorMessage name="UnusedSickLeaveEntitlementsType2" 
                                component='div' className="text-danger fw-bold"/>
                                  </div>
                                </div>
                            
                              
                                
                                    </div>
        
                            </div>
                          
                            </div>
                          {/* 8 row */}

                        
                          

                          {/* 9 row */}
                            <div className="row">
                            
                            <div className="col-md-6">
                                    <div className="mb-3">
                                <label htmlFor="clientUnusedAnnualleaveentitlementsNumber2" className="form-label">
                                Unused annual leave entitlements
                                </label>
                                <div className="row">
                                  <div className="col-8">
                                <Field type="number" className="form-control inputDesign shadow"
                                 id="clientUnusedAnnualleaveentitlementsNumber2"
                                 name="clientUnusedAnnualleaveentitlementsNumber2"
                                placeholder="Unused annual leave entitlements"/>
                                <ErrorMessage name="clientUnusedAnnualleaveentitlementsNumber2"
                                component="div" className="text-danger fw-bold" />
                                  </div>
                                  <div className="col-4">
                                  <Field
                                  as='select'
                                  id="clientUnusedAnnualleaveentitlementsType2"
                                  className="form-select shadow  inputDesign"
                                  name="clientUnusedAnnualleaveentitlementsType2"
                                >
                                  <option value="">Select</option>
                                  <option value="days">Days</option>
                                  <option value="hours">Hours</option>
                                  <option value="weeks">Weeks</option>
                                  <option value="months">Months</option>
                                </Field>
                                <ErrorMessage name="clientUnusedAnnualleaveentitlementsType2"
                                component="div" className="text-danger fw-bold" />
                                  </div>
                                </div>
                                    </div>
        
                            </div>

                            <div className="col-md-6">
                                    <div className="mb-3">
                                <label htmlFor="clientUnusedlongserviceleaveNumber2" className="form-label">
                                Unused long service leave entitlements
                                </label>
                                <div className="row">
                                  <div className="col-8">
                                <Field type="number" className="form-control inputDesign shadow"
                                id="clientUnusedlongserviceleaveNumber2"
                                name="clientUnusedlongserviceleaveNumber2"
                                 placeholder="Unused long service leave entitlements"/>
                                
                                <ErrorMessage name="clientUnusedlongserviceleaveNumber2"
                                component="div" className="text-danger fw-bold" />
                                  </div>
                                  <div className="col-4">
                                  <Field
                                  as="select"
                                  id="clientUnusedlongserviceleaveType2"
                                  name="clientUnusedlongserviceleaveType2"
                                  className="form-select shadow  inputDesign"
                                >
                                  <option value="">Select</option>
                                  <option value="days">Days</option>
                                  <option value="hours">Hours</option>
                                  <option value="weeks">Weeks</option>
                                  <option value="months">Months</option>
                                </Field>
                                <ErrorMessage name="clientUnusedlongserviceleaveType2"
                                component="div" className="text-danger fw-bold" />
                                  </div>
                                </div>
                            
                              
                                
                                    </div>
        
                            </div>
                            
                            </div>
                          {/* 9 row */}

                      

                        

                          {/* 10 row */}
                            <div className="row">
                            <div className="col-md-6">
                                  <div className="mb-3">
                                <label  className="form-label">
                                Do you have the ability to salary sacrifice?
                                </label>

                                  {/* switch button style */}
                                  <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="sacrificeradio2" value="Yes" id="sacrificeopt12"
                                onClick={()=>sacrificeradioHandler2("Yes")} 
                                onChange={handleChange}
                                checked={values.sacrificeradio2==="Yes"} />
                                <label htmlFor="sacrificeopt12" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="sacrificeradio2"
                                value="No" id="sacrificeopt22"
                                   onClick={()=>sacrificeradioHandler2("No")} 
                                   onChange={handleChange}
                                   checked={values.sacrificeradio2==="No"}/>
                                <label htmlFor="sacrificeopt22" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>
                                </div>
                              {/* switch button style */}
                              
                                  </div>
                            </div>
                              <div className="col-md-6">
                                  <div className="mb-3">
                                <label  className="form-label">
                                Do you make any after tax-contribution to super?
                                </label>
                              
                           {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="contributionradio2" id="contributionopt12" 
                                onClick={()=>contributionradioHandler2("yes")} 
                                onChange={handleChange} value="Yes"
                                checked={values.contributionradio2==="Yes"}/>
                                <label htmlFor="contributionopt12" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="contributionradio2" id="contributionopt22"
                                value="No"
                                onClick={()=>contributionradioHandler2("No")} 
                                onChange={handleChange} 
                                checked={values.contributionradio2==="No"} />
                                <label htmlFor="contributionopt22" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>
                                </div>
                              {/* switch button style */}
                          </div>
                                   </div>
                            </div>
                          {/* 10 row */}

                          {/* 11 row */}
                            <div className="row">
                            <div className="col-md-6">
                           {sacrificState2 && 
                            <div className="mb-3">
                              <label htmlFor="clientAbilitytoSalarySacrificeHM2" className="form-label">How Much</   label>
                              <Field type="number" className="form-control
                               inputDesign shadow" id="clientAbilitytoSalarySacrificeHM2"
                               name="clientAbilitytoSalarySacrificeHM2"
                              placeholder="How much you have the ability to salary sacrifice?"/>
                               <ErrorMessage name="clientAbilitytoSalarySacrificeHM2"
                                component="div" className="text-danger fw-bold" />
                            </div>  }
                                      
                            </div>
                            <div className="col-md-6">
                          { contributionState2 &&
                           <div className="mb-3">
                              <label htmlFor="clientTaxContributiontoSuperHM2" className="form-label">How Much</   label>
                              <Field type="number" className="form-control inputDesign
                               shadow" id="clientTaxContributiontoSuperHM2"
                               name="clientTaxContributiontoSuperHM2"
                               placeholder="How much you make any after tax-contribution to super?"/>
                              <ErrorMessage name="clientTaxContributiontoSuperHM2"
                                component="div" className="text-danger fw-bold" />
                            </div>  
                            }        
                            </div>
                              
                            </div>
                          {/* 11 row */}

                          {/* 12 row */}
                          <div className="row">
                            <div className="col-md-6">
                                  <div className="mb-3">
                                <label  className="form-label">
                                Can your income vary significantly?
                                </label>

                                  {/* switch button style */}
                                  <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="significantlyradio2" id="significantlyopt12"
                                onChange={handleChange} value="Yes"
                                checked={values.significantlyradio2==="Yes"} />
                                <label htmlFor="significantlyopt12" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="significantlyradio2" id="significantlyopt22"
                               
                                onChange={handleChange} value="No"
                                checked={values.significantlyradio2==="No"} />
                                <label htmlFor="significantlyopt22" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>
                                </div>
                              {/* switch button style */}
                       
                                  </div>
                            </div>
                            <div className="col-md-6">

                            </div>
                                
                          </div>

                          {/* 12 row */}
                          </div>
                      </div>


                   
                    </div>
                  {/* Partner Employment Details */}

                 {/* Client Centre Link  */}
                <div className="row my-5">
                  <div className="col-md-12">
                    <div className="shadow px-4 py-4">
                      <h3 className="text-center">Centre Link</h3>
                      <h3 className="">Client Centre Link
                      <div className="iconContainerLg">
                             <img className="img-fluid" src={dollarBag} alt="" />

                              </div>
                      </h3>

                      {/* 1 row */}
                        <div className="row">
                          <div className="col-md-12">
                              <div className="mb-3">
                            <label  className="form-label">
                            Are you receiving any centerlink payments (including FTBA & B)?
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="centerlink1radio" id="centerlink1opt1" 
                            onChange={handleChange} value="Yes"
                            onClick={()=>centerlinkPaymentsHandler("Yes")} 

                            checked={values.centerlink1radio==="Yes"}/>
                            <label htmlFor="centerlink1opt1" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="centerlink1radio" id="centerlink1opt2" 
                            onChange={handleChange} value="No"
                            onClick={()=>centerlinkPaymentsHandler("No")} 
                            checked={values.centerlink1radio==="No"}/>
                            <label htmlFor="centerlink1opt2" className="label2">
                              <span>NO</span>
                            </label>
                          </div>
                            </div>
                          {/* switch button style */}

                       </div>
                           </div>
                        </div>
                      {/* 1 row */}
                    {centerlinkPaymentState &&  
                      <div>
                          {/* 2 row */}
                        <div className="row">
                        <div className="col-md-6">
                                <div className="mb-3">
                            <label htmlFor="centrelinkPayments1" className="form-label">
                            Centrelink Payments
                            </label>
                            <Field
                              id="centrelinkPayments1"
                              name='centrelinkPayments1'
                              className="form-select shadow  inputDesign"
                              as='select'
                            >
                              <option value=''>Select</option>
                              <option value="NotEligible">Not Eligible</option>
                              <option value="AgePension">Age Pension</option>
                              <option value="Newstart Allowance">Newstart Allowance</option>
                              <option value="Disability Pension">Disability Pension</option>
                              <option value="CarersPayment">Carers Payment</option>
                              <option value="Other">Other</option>
                              </Field>
                              <ErrorMessage component='div' className='text-danger fw-bold' name="centrelinkPayments1" />
                                </div>
    
                        </div>

                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="PaymentAmountFortnightly1" className="form-label">Payment Amount (Fortnightly)</   label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="PaymentAmountFortnightly1" name="PaymentAmountFortnightly1" placeholder="Payment Amount (Fortnightly)"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name="PaymentAmountFortnightly1" />
                        </div>            
                        </div>
                      
                        </div>
                      {/* 2 row */}
                      {/* 3 row */}
                      <div className="row">
                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="AnnualPaymentAmount1" className="form-label">Annual Payment Amount</   label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="AnnualPaymentAmount1" name="AnnualPaymentAmount1" placeholder="Annual Payment Amount"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name="AnnualPaymentAmount1" />
                        </div>            
                        </div>

                        <div className="col-md-6">
                              <div className="mb-3">
                            <label  className="form-label">
                            Are you receiving the Carer Allowance?
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="CarerAllowance1radio" id="CarerAllowance1opt1" 
                            onChange={handleChange} value="Yes"
                            checked={values.CarerAllowance1radio==="Yes"}/>
                            <label htmlFor="CarerAllowance1opt1" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="CarerAllowance1radio" id="CarerAllowance1opt2"  
                            onChange={handleChange} value="No"
                            checked={values.CarerAllowance1radio==="No"}/>
                            <label htmlFor="CarerAllowance1opt2" className="label2">
                              <span>NO</span>
                            </label>
                          </div>
                            </div>
                              </div>    
                        </div>
                      
                        </div>
                      {/* 3 row */}
                        {/* 4 row */}
                        <div className="row">
                        <div className="col-md-6">
                                <div className="mb-3">
                            <label htmlFor="FamilyTaxBenefit1" className="form-label">
                            Are you claiming the Family Tax Benefit?
                            </label>
                            <Field
                              id="FamilyTaxBenefit1"
                              name='FamilyTaxBenefit1'
                              className="form-select shadow  inputDesign"
                              as='select'
                            >
                              <option value=''>Select</option>
                              <option value="Part A">Part A</option>
                              <option value="Part B">Part B</option>
                              <option value="Part A & B">Part A & B</option>
                              <option value="No">No</option>
                            </Field>
                            <ErrorMessage component='div' className='text-danger fw-bold' name="FamilyTaxBenefit1" />
                                </div>
    
                        </div>

                        <div className="col-md-6">
                              <div className="mb-3">
                            <label  className="form-label">
                            Are you currently renting?
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="currentlyrenting1radio" id="currentlyrenting1opt1"  
                            onChange={handleChange} value="Yes"
                            checked={values.currentlyrenting1radio==="Yes"}/>
                            <label htmlFor="currentlyrenting1opt1" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="currentlyrenting1radio" id="currentlyrenting1opt2"  
                            onChange={handleChange} value="No"
                            checked={values.currentlyrenting1radio==="No"}/>
                            <label htmlFor="currentlyrenting1opt2" className="label2">
                              <span>NO</span>
                            </label>
                          </div>
                            </div>
                              </div>    
                        </div>
                      
                        </div>
                      {/* 4 row */}


                          {/* 5 row */}
                          <div className="row">
                          <div className="col-md-12">
                              <div className="mb-3">
                            <label  className="form-label">
                            Have Asset Been Gifted in the last 5 years?
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="AssetGifted1radio" id="AssetGifted1opt1"  
                            onChange={handleChange} value="Yes"
                            onClick={()=>giftedAssetHandler("Yes")} 
                            checked={values.AssetGifted1radio==="Yes"}/>
                            <label htmlFor="AssetGifted1opt1" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="AssetGifted1radio" id="AssetGifted1opt2"   
                            onChange={handleChange} value="No"
                            onClick={()=>giftedAssetHandler("No")} 
                            checked={values.AssetGifted1radio==="No"}/>
                            <label htmlFor="AssetGifted1opt2" className="label2">
                              <span>NO</span>
                            </label>
                          </div>
                            </div>
                          {/* switch button style */}

                              </div>
                            
                          </div>
                          </div>
                          {/* 5 row */}

                        {/* 6 row */}
                    {giftedAssetState &&
                        <div className="row">

                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="AssetBeenGiftedHM1" className="form-label">How Much?</   label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="AssetBeenGiftedHM1" name="AssetBeenGiftedHM1" placeholder="How Much?"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name="AssetBeenGiftedHM1" />
                        </div>            
                        </div>

                        <div className="col-md-6">
                                <div className="mb-3">
                            <label htmlFor="" className="form-label">
                            How many years back?
                            </label>
                            <Field
                              id="AssetBeenGiftedYears1"
                              name='AssetBeenGiftedYears1'
                              className="form-select shadow  inputDesign"
                              as='select'>
                              <option value=''>Select</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                              <option value="7">7</option>
                              <option value="8">8</option>


                            </Field>
                            <ErrorMessage component='div' className='text-danger fw-bold' name="AssetBeenGiftedYears1" />
                                </div>
    
                        </div>

                        </div>
}
                      {/* 7 row */}

                      {giftedAssetState &&
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="ActualDateofyear1" className="form-label">Commencement Date</   label>
                              <div className="input-group ">
                        <Field
                          className="form-control inputDesign shadow"
                          id="ActualDateofyear1"
                          name='ActualDateofyear1'
                          // onBlur={(e)=>ageHandler("ClientDoBID","employeeAgeID")}
                          value={values.DoBID}
                          max="2023-1-31"
                        />
                        <div className="input-group-append">
                          <span className="input-group-text" id="CalenderIcon">
                            <input className="HiddenDate" name='ActualDateofyear1'
                             type='date' id="HiddenDate" onChange={()=>ChangeDateFormat("ActualDateofyear1","HiddenDate")}/>
                          </span>
                        </div>
                              </div>
                      <ErrorMessage component='div' className="text-danger fw-bold"name="ActualDateofyear1" />

                            </div> 


                            </div>

                        </div>
                      }
                      {/* 7 row */}

                      </div>
                      }
                      </div>
                  </div>
                </div>
                {/* Client Centre Link */}

                 {/* Partner Centre Link  */}
                 <div className="row my-5">
                <div className="col-md-12">
                  <div className="shadow px-4 py-4">
                    <h3 className="text-center">Centre Link</h3>
                    <h3 className="">Partner Centre Link
                    <div className="iconContainerLg">
                             <img className="img-fluid" src={dollarBag} alt="" />

                              </div>
                    </h3>

                    {/* 1 row */}
                      <div className="row">
                        <div className="col-md-12">
                            <div className="mb-3">
                          <label  className="form-label">
                          Are you receiving any centerlink payments (including FTBA & B)?
                          </label>
                        {/* switch button style */}
                          <div className="form-check form-switch m-0 p-0 ">
                        <div className="radiobutton">
                          <input type="radio" name="centerlink2radio" id="centerlink2opt1"   
                            onChange={handleChange} value="Yes"
                            onClick={()=>centerlinkPaymentsHandler2("Yes")} 
                            checked={values.centerlink2radio==="Yes"}/>
                          <label htmlFor="centerlink2opt1" className="label1">
                            <span>YES</span>
                          </label>
                          <input type="radio" name="centerlink2radio" id="centerlink2opt2"   
                            onChange={handleChange} value="No"
                            onClick={()=>centerlinkPaymentsHandler2("No")} 
                            checked={values.centerlink2radio==="No"}/>
                          <label htmlFor="centerlink2opt2" className="label2">
                            <span>NO</span>
                          </label>
                        </div>
                          </div>
                        {/* switch button style */}

                            </div>
                    
                        </div>
                      </div>
                    {/* 1 row */}
{centerlinkPaymentState2 && <div>
                        {/* 2 row */}
                      <div className="row">
                      <div className="col-md-6">
                              <div className="mb-3">
                          <label htmlFor="centrelinkPayments2" className="form-label">
                          Centrelink Payments
                          </label>
                          <Field
                            id="centrelinkPayments2"
                            name='centrelinkPayments2'
                            className="form-select shadow  inputDesign"
                            as='select'
                          >
                            <option value=''>Select</option>
                            <option value="NotEligible">Not Eligible</option>
                            <option value="AgePension">Age Pension</option>
                            <option value="Newstart Allowance">Newstart Allowance</option>
                            <option value="Disability Pension">Disability Pension</option>
                            <option value="CarersPayment">Carers Payment</option>
                            <option value="Other">Other</option>                    
                          </Field>
                          <ErrorMessage component='div' className='text-danger fw-bold' name="centrelinkPayments2" />
                              </div>
  
                      </div>

                      <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="PaymentAmountFortnightly2" className="form-label">Payment Amount (Fortnightly)</   label>
                        <Field type="number" className="form-control shadow inputDesign" 
                        id="PaymentAmountFortnightly2" name="PaymentAmountFortnightly2" placeholder="Payment Amount (Fortnightly)"/>
                        <ErrorMessage component='div' className='text-danger fw-bold' name="PaymentAmountFortnightly2" />
                      </div>            
                      </div>
                    
                      </div>
                    {/* 2 row */}

                      {/* 3 row */}
                      <div className="row">
                      <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="AnnualPaymentAmount2" className="form-label">Annual Payment Amount</   label>
                        <Field type="number" className="form-control shadow inputDesign" 
                        id="AnnualPaymentAmount2" name="AnnualPaymentAmount2" placeholder="Annual Payment Amount"/>
                        <ErrorMessage component='div' className='text-danger fw-bold' name="AnnualPaymentAmount2" />
                      </div>            
                      </div>

                      <div className="col-md-6">
                            <div className="mb-3">
                          <label  className="form-label">
                          Are you receiving the Carer Allowance?
                          </label>
                        {/* switch button style */}
                          <div className="form-check form-switch m-0 p-0 ">
                        <div className="radiobutton">
                          <input type="radio" name="CarerAllowance2radio" id="CarerAllowance2opt1"   
                            onChange={handleChange} value="Yes"
                            checked={values.CarerAllowance2radio==="Yes"}/>
                          <label htmlFor="CarerAllowance2opt1" className="label1">
                            <span>YES</span>
                          </label>
                          <input type="radio" name="CarerAllowance2radio" id="CarerAllowance2opt2"   
                            onChange={handleChange} value="No"
                            checked={values.CarerAllowance2radio==="No"}/>
                          <label htmlFor="CarerAllowance2opt2" className="label2">
                            <span>NO</span>
                          </label>
                        </div>
                          </div>
                            </div>    
                      </div>
                    
                      </div>
                    {/* 3 row */}
                      {/* 4 row */}
                      <div className="row">
                      <div className="col-md-6">
                              <div className="mb-3">
                          <label htmlFor="FamilyTaxBenefit2" className="form-label">
                          Are you claiming the Family Tax Benefit?
                          </label>
                          <Field
                            id="FamilyTaxBenefit2"
                            name='FamilyTaxBenefit2'
                            className="form-select shadow  inputDesign"
                            as='select'
                          >
                            <option value=''>Select</option>
                            <option value="Part A">Part A</option>
                            <option value="Part B">Part B</option>
                            <option value="Part A & B">Part A & B</option>
                            <option value="No">No</option>
                          </Field>
                          <ErrorMessage component='div' className='text-danger fw-bold' name="FamilyTaxBenefit2" />
                              </div>
                            </div>
                          </div>
                    {/* 4 row */}
                    </div>}
                  </div>
                </div>
                </div>
                {/* Partner Centre Link */}

                {/*Client other taxable income  */}
                <div className="row my-5">
                  <div className="col-md-12">
                    <div className="shadow px-4 py-4">
                      <h3 className="text-center">Other Taxable Income</h3>
                      <h3 className="">Client Other Taxable Income
                      <div className="iconContainerLg">
                             <img className="img-fluid" src={dollarBag} alt="" />

                              </div></h3>

                      {/* 1 row */}
                        <div className="row">
                        <div className="col-md-6">
                              <div className="mb-3">
                            <label  className="form-label">
                            Australian resident for tax purposes client
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="AustralianResident1radio" id="AustralianResident1opt1"
                            onChange={handleChange} value="Yes"
                            checked={values.AustralianResident1radio==="Yes"} />
                            <label htmlFor="AustralianResident1opt1" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="AustralianResident1radio" id="AustralianResident1opt2"
                            onChange={handleChange} value="No"
                            checked={values.AustralianResident1radio==="No"}  />
                            <label htmlFor="AustralianResident1opt2" className="label2">
                              <span>NO</span>
                            </label>
                          </div>
                            </div>
                              </div>    
                        </div>

                          <div className="col-md-6">
                              <div className="mb-3">
                            <label  className="form-label">
                            Private hospital cover in place
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="PrivateHospital1radio" id="PrivateHospital1opt1"
                            onChange={handleChange} value="Yes"
                            checked={values.PrivateHospital1radio==="Yes"} />
                            <label htmlFor="PrivateHospital1opt1" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="PrivateHospital1radio" id="PrivateHospital1opt2"
                            onChange={handleChange} value="No"
                            checked={values.PrivateHospital1radio==="No"}  />
                            <label htmlFor="PrivateHospital1opt2" className="label2">
                              <span>NO</span>
                            </label>
                          </div>
                            </div>
                          {/* switch button style */}
                          </div>
                            </div>
                        </div>
                      {/* 1 row */}

                            {/* 2 row */}
                          <div className="row">
                          <div className="col-md-6">
                              <div className="mb-3">
                            <label  className="form-label">
                            Do you have a HECS debt?
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="HECSdebt1radio" id="HECSdebt1opt1" 
                            onChange={handleChange} value="Yes"
                            checked={values.HECSdebt1radio==="Yes"} />
                            <label htmlFor="HECSdebt1opt1" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="HECSdebt1radio" id="HECSdebt1opt2"
                             onChange={handleChange} value="No"
                             checked={values.HECSdebt1radio==="No"}  />
                            <label htmlFor="HECSdebt1opt2" className="label2">
                              <span>NO</span>
                            </label>
                          </div>
                            </div>
                              </div>    
                          </div>

                          <div className="col-md-6">
                              <div className="mb-3">
                            <label  className="form-label">
                            Are you claiming the rebate?
                            </label> 
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="claimingRebate1radio" id="claimingRebate1opt1"
                             onChange={handleChange} value="Yes"
                             checked={values.claimingRebate1radio==="Yes"}  />
                            <label htmlFor="claimingRebate1opt1" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="claimingRebate1radio" id="claimingRebate1opt2"
                             onChange={handleChange} value="No"
                             checked={values.claimingRebate1radio==="No"}  />
                            <label htmlFor="claimingRebate1opt2" className="label2">
                              <span>NO</span>
                            </label>
                          </div>
                            </div>
                          {/* switch button style */}

                              </div>
                                
                          </div>
                          </div>
                      {/* 2 row */}

                    

                        {/* 3 row */}
                        <div className="row">
                        <div className="col-md-6">
                              <div className="mb-3">
                            <label  className="form-label">
                            Do you have an application to vary a PAYG?
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="applicationPAYG1radio" id="applicationPAYG1opt1"
                             onChange={handleChange} value="Yes"
                             checked={values.applicationPAYG1radio==="Yes"}  />
                            <label htmlFor="applicationPAYG1opt1" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="applicationPAYG1radio" id="applicationPAYG1opt2"
                             onChange={handleChange} value="No"
                             checked={values.applicationPAYG1radio==="No"}  />
                            <label htmlFor="applicationPAYG1opt2" className="label2">
                              <span>NO</span>
                            </label>
                          </div>
                            </div>
                              </div>    
                        </div>

                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="TaxPaymentsOutstanding1" className="form-label">Tax Payments Outstanding</   label>
                          <Field type="number" className="form-control shadow inputDesign"
                           id="TaxPaymentsOutstanding1"
                           name="TaxPaymentsOutstanding1"
                            placeholder="Tax Payments Outstanding"/>
                            <ErrorMessage name="TaxPaymentsOutstanding1" component="div" className="text-danger fw-bold"/>
                        </div>            
                        </div>
                      
                        </div>
                      {/* 3 row */}

                      
                        {/* 4 row */}
                        <div className="row">
                        <div className="col-md-6">
                              <div className="mb-3">
                            <label  className="form-label">
                            Do you have any other taxable income (including overseas pensions)?
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="otherTaxableIncome1radio" id="otherTaxableIncome1opt1"
                             onClick={()=>otherTaxableIncomeHandler("Yes")} 
                             onChange={handleChange} value="Yes"
                             checked={values.otherTaxableIncome1radio==="Yes"}  />
                            <label htmlFor="otherTaxableIncome1opt1" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="otherTaxableIncome1radio" id="otherTaxableIncome1opt2"
                            onClick={()=>otherTaxableIncomeHandler("No")} 
                            onChange={handleChange} value="No"
                            checked={values.otherTaxableIncome1radio==="No"}   />
                            <label htmlFor="otherTaxableIncome1opt2" className="label2">
                              <span>NO</span>
                            </label>
                          </div>
                            </div>
                              </div>    
                        </div>

                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="TaxLossesCarriedForward1" className="form-label">Tax losses carried forward</   label>
                          <Field type="number" className="form-control shadow inputDesign" id="TaxLossesCarriedForward1"
                          name="TaxLossesCarriedForward1"
                          placeholder="Annual Payment Amount"/>
                          <ErrorMessage name="TaxLossesCarriedForward1" component="div"
                          className="text-danger fw-bold"/>
                        </div>            
                        </div>
                      
                        </div>
                      {/* 4 row */}

                      
                        {/* 5 row */}
                        <div className="row">

                       {otherTaxableIncomeState &&
                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="AmountofOtherTaxableIncome1" className="form-label">Amount of Other Taxable Income</   label>
                          <Field type="number" className="form-control shadow inputDesign"
                           id="AmountofOtherTaxableIncome1" name="AmountofOtherTaxableIncome1"
                            placeholder="Annual Payment Amount"/>
                            <ErrorMessage component="div"
                            name="AmountofOtherTaxableIncome1"
                            className="text-danger fw-bold"/>
                        </div>            
                        </div>}
                        </div>
                      {/* 5 row */}
                    </div>
                  </div>
                </div>
                {/*Client Other taxable income */}

                {/*Partner other taxable income  */}
                <div className="row my-5">
                  <div className="col-md-12">
                    <div className="shadow px-4 py-4">
                      <h3 className="text-center">Partner Taxable Income</h3>
                      <h3 className="">Partner Other Taxable Income
                      <div className="iconContainerLg">
                             <img className="img-fluid" src={dollarBag} alt="" />

                              </div></h3>

                      {/* 1 row */}
                        <div className="row">
                        <div className="col-md-6">
                              <div className="mb-3">
                            <label  className="form-label">
                            Australian resident for tax purposes
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="AustralianResident2radio" id="AustralianResident2opt1" 
                             onChange={handleChange} value="Yes"
                             checked={values.AustralianResident2radio==="Yes"}/>
                            <label htmlFor="AustralianResident2opt1" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="AustralianResident2radio" id="AustralianResident2opt2" 
                             onChange={handleChange} value="No"
                             checked={values.AustralianResident2radio==="No"}/>
                            <label htmlFor="AustralianResident2opt2" className="label2">
                              <span>NO</span>
                            </label>
                          </div>
                            </div>
                              </div>    
                        </div>

                          <div className="col-md-6">
                              <div className="mb-3">
                            <label  className="form-label">
                            Private hospital cover in place
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="PrivateHospital2radio" id="PrivateHospital2opt1" 
                             onChange={handleChange} value="Yes"
                             checked={values.PrivateHospital2radio==="Yes"}/>
                            <label htmlFor="PrivateHospital2opt1" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="PrivateHospital2radio" id="PrivateHospital2opt2" 
                             onChange={handleChange} value="No"
                             checked={values.PrivateHospital2radio==="No"}/>
                            <label htmlFor="PrivateHospital2opt2" className="label2">
                              <span>NO</span>
                            </label>
                          </div>
                            </div>
                          {/* switch button style */}
                          </div>
                            </div>
                        </div>
                      {/* 1 row */}

                          {/* 2 row */}
                          <div className="row">
                          <div className="col-md-6">
                              <div className="mb-3">
                            <label  className="form-label">
                            Do you have a HECS debt?
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="HECSdebt2radio" id="HECSdebt2opt1" 
                             onChange={handleChange} value="Yes"
                             checked={values.HECSdebt2radio==="Yes"}/>
                            <label htmlFor="HECSdebt2opt1" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="HECSdebt2radio" id="HECSdebt2opt2" 
                             onChange={handleChange} value="No"
                             checked={values.HECSdebt2radio==="No"}/>
                            <label htmlFor="HECSdebt2opt2" className="label2">
                              <span>NO</span>
                            </label>
                          </div>
                            </div>
                              </div>    
                          </div>

                          <div className="col-md-6">
                              <div className="mb-3">
                            <label  className="form-label">
                            Are you claiming the rebate?
                            </label> 
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="claimingRebate2radio" id="claimingRebate2opt1"
                             onChange={handleChange} value="Yes"
                             checked={values.claimingRebate2radio==="Yes"}/>
                            <label htmlFor="claimingRebate2opt1" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="claimingRebate2radio" id="claimingRebate2opt2"
                             onChange={handleChange} value="No"
                             checked={values.claimingRebate2radio==="No"}/>
                            <label htmlFor="claimingRebate2opt2" className="label2">
                              <span>NO</span>
                            </label>
                          </div>
                            </div>
                          {/* switch button style */}

                              </div>
                                
                          </div>
                          </div>
                      {/* 2 row */}

                        {/* 3 row */}
                        <div className="row">
                        <div className="col-md-6">
                              <div className="mb-3">
                            <label  className="form-label">
                            Do you have an application to vary a PAYG?
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="applicationPAYG2radio" id="applicationPAYG2opt1" 
                             onChange={handleChange} value="Yes"
                             checked={values.applicationPAYG2radio==="Yes"}/>
                            <label htmlFor="applicationPAYG2opt1" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="applicationPAYG2radio" id="applicationPAYG2opt2" 
                             onChange={handleChange} value="No"
                             checked={values.applicationPAYG2radio==="No"}/>
                            <label htmlFor="applicationPAYG2opt2" className="label2">
                              <span>NO</span>
                            </label>
                          </div>
                            </div>
                              </div>    
                        </div>

                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="TaxPaymentsOutstanding2" className="form-label">Tax Payments Outstanding</   label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="TaxPaymentsOutstanding2" name="TaxPaymentsOutstanding2" placeholder="Tax Payments Outstanding"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name="TaxPaymentsOutstanding2" />
                        </div>            
                        </div>
                      
                        </div>
                      {/* 3 row */}
                      
                        {/* 4 row */}
                        <div className="row">
                        <div className="col-md-6">
                              <div className="mb-3">
                            <label  className="form-label">
                            Do you have any other taxable income (including overseas pensions)?
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="otherTaxableIncome2radio" id="otherTaxableIncome2opt1" 
                             onClick={()=>otherTaxableIncomeHandler2("Yes")} 
                             onChange={handleChange} value="Yes"
                             checked={values.otherTaxableIncome2radio==="Yes"}/>
                            <label htmlFor="otherTaxableIncome2opt1" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="otherTaxableIncome2radio" id="otherTaxableIncome2opt2" 
                             onClick={()=>otherTaxableIncomeHandler2("No")} 
                             
                             onChange={handleChange} value="No"
                             checked={values.otherTaxableIncome2radio==="No"}/>
                            <label htmlFor="otherTaxableIncome2opt2" className="label2">
                              <span>NO</span>
                            </label>
                          </div>
                            </div>
                              </div>    
                        </div>

                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="TaxLossesCarriedForward2" className="form-label">Tax losses carried forward</   label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="TaxLossesCarriedForward2" name="TaxLossesCarriedForward2" placeholder="Annual Payment Amount"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name="TaxLossesCarriedForward2" />
                        </div>            
                        </div>
                      
                        </div>
                      {/* 4 row */}
                      
                        {/* 5 row */}
                        <div className="row">
                      {otherTaxableIncomeState2 &&
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="AmountofOtherTaxableIncome2" className="form-label">Amount of Other Taxable Income</   label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="AmountofOtherTaxableIncome2" name="AmountofOtherTaxableIncome2" placeholder="Annual Payment Amount"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name="AmountofOtherTaxableIncome2" />
                        </div>            
                        </div>}
                        </div>
                      {/* 5 row */}

                            
                     </div>
                  </div>


                </div>
                {/*Partner Other taxable income */}

                {/*Expenses */}
                <div className="row my-5">
                  <div className="col-md-12">
                    <div className="shadow px-4 py-4">
                      <h3 className="">Expenses
                      <div className="iconContainerLg">
                             <img className="img-fluid" src={dollarBag} alt="" />

                              </div></h3>
                                  
                       {/* 1 row */}
                        <div className="row">
                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="totalGeneralLivingCosts" className="form-label">Total General Living Costs</   label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="totalGeneralLivingCosts" name="totalGeneralLivingCosts" placeholder="Total General Living Costs"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name="totalGeneralLivingCosts" />
                        </div>            
                        </div>

                         <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="incomeInRetirement" className="form-label">How much Income do you want to have in retirement?</   label>
                          <Field type="number" className="form-control shadow inputDesign" id="incomeInRetirement"
                           name='incomeInRetirement' placeholder="How much Income do you want to have in retirement"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name="incomeInRetirement" />
                        </div>            
                        </div>
                        </div>
                      {/* 1 row */}

                      {/* 2 row */}
                        <div className="row">
                        <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="" className="form-label">
                          Use Business Expense Schedule
                        </label>
                        <div>
                          <span
                            className=" btn w-50
                            btn-outline-success "
                            onClick={handleShow}
                          >
                            <div className="iconContainer mx-1">
                            <img className="img-fluid" src={plus} alt="" />

                            </div>
                            Use Budget Planner
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
                              Budget Planner 
                              <div className="iconContainerLg">
                             <img className="img-fluid" src={noteBook} alt="" />
                              </div>
                              
                             </Modal.Title>
                            </Modal.Header>
                            <Formik 
                              initialValues={initialValues2}
                              validationSchema={validationSchema2}
                              onSubmit={onSubmit2} >
                                
                              <Form>  
                                <Modal.Body>
                                <div className="row text-light bgColorIncome py-2 my-1">
                                  <div className="col-md-6">
                                    <label className="form-label mb-0">Total Expense</label>
                                  </div>
                                  <div className="col-md-6">
                                  <label id="HouseholdTotalValue" 
                                  className="float-end form-label mb-0">
                                    $ 2500
                                    <div className="iconContainer mx-1">
                                <img className="img-fluid" src={moneyBag} alt="" />

                                  </div>
                                    </label>
                                  </div>
                                  </div>

                                  {/* houseHold */}
                                  <div className="row ">
                                <div 
                                onClick={() => setOpen(!open)}
                                aria-controls=""
                                aria-expanded={open}
                                className="bgColorIncome   py-2 text-light"
                                >
                                  <div className="row">
                                  <div className="col-md-6">
                                    <label className="form-label mb-0">Household</label>
                                  </div>
                                  <div className="col-md-6">
                                  <label id="HouseholdTotalValue" className="float-end form-label mb-0">$0
                                  <div className="iconContainer mx-1">
                                <img className="img-fluid" src={down} alt="" />

                                  </div>
                                  </label>
                                  </div>
                                  </div>
                                  

                                </div>
                                <div>
                                  
                                </div>
                                <Collapse in={open}>

                                  <div className="row">
                                    <div className="col-md-12">

                                      {/* houseHold row 1 */}
                                      <div className="row  my-3">
                                    
                                    {/* Rent */}
                                      <div className="col-md-6">
                                      
                                    <div className="row">
                                      <div className="col-7">
                                      <label htmlFor="houseHoldrent" className="form-label">
                                      Rent
                                    </label>
                                    <Field type="number" className="form-control inputDesign shadow"
                                    id="houseHoldrent" placeholder="Rent" name="houseHoldrent"/>
                                  
                                    < ErrorMessage name="houseHoldrent" component="div"
                                  className="text-danger fw-bold" />
        
                                      </div>
                                      <div className="col-5">
                                      <label htmlFor="" className="form-label float-end">
                                    $0 
                                    </label>
                                      <Field
                                      as="select"
                                      id="houseHoldrentType"
                                      className="form-select shadow  inputDesign"
                                    name="houseHoldrentType"
                                    >
                                      <option value="">Select</option>
                                      <option value="Weekly">Weekly</option>
                                      <option value="Fortnightly">Fortnightly</option>
                                      <option value="Monthly">Monthly</option>
                                      <option value="Quarterly">Quarterly</option>
                                      <option value="Six-Monthly">Six-Monthly</option>
                                      <option value="Annually">Annually</option>
                                    </Field>
                                    
                                    < ErrorMessage name="houseHoldrentType" component="div"
                                  className="text-danger fw-bold" />
                                      </div>
                                    </div>
                                      </div>
                                    {/* Rent */}
        
                                    {/* Electricity */}
                                    <div className="col-md-6">
                                    <div className="row">
                                      <div className="col-7">
                                      <label htmlFor="houseHoldElectricity" className="form-label">
                                      Electricity
                                    </label>
                                    <Field type="number" className="form-control inputDesign shadow"
                                    id="houseHoldElectricity" placeholder="Electricity"
                                    name="houseHoldElectricity"/>
                                  < ErrorMessage name="houseHoldElectricity" component="div"
                                  className="text-danger fw-bold" />
        
                                      </div>
                                      <div className="col-5">
                                      <label htmlFor="" className="form-label float-end">
                                    $0 
                                    </label>
                                    <Field
                                    as="select"
                                      id="houseHoldElectricityType"
                                      className="form-select shadow  inputDesign"
                                      name="houseHoldElectricityType"
                                    >
                                      <option value="">Select</option>
                                      <option value="Weekly">Weekly</option>
                                      <option value="Fortnightly">Fortnightly</option>
                                      <option value="Monthly">Monthly</option>
                                      <option value="Quarterly">Quarterly</option>
                                      <option value="Six-Monthly">Six-Monthly</option>
                                      <option value="Annually">Annually</option>
                                      </Field>
                                      < ErrorMessage name="houseHoldElectricityType" component="div"
                                  className="text-danger fw-bold" />
                                      </div>
                                    </div>
                                    </div>
                                    {/* Electricity */}
        
                                      </div>
                                      {/* houseHold row 1 */}

                                      {/* houseHold row 2 */}
                                      <div className="row  my-3">
                                    
                                    {/* Water Rates*/}
                                    <div className="col-md-6">
                                      <div className="row">
                                      <div className="col-7">
                                      <label htmlFor="houseHoldWaterRates" className="form-label">
                                      Water Rates
                                    </label>
                                    <Field type="number" className="form-control inputDesign shadow"
                                    id="houseHoldWaterRates" placeholder="Water Rates"
                                    name="houseHoldWaterRates"/>
                                    < ErrorMessage name="houseHoldWaterRates" component="div"
                                  className="text-danger fw-bold" />
                                      </div>
                                      <div className="col-5">
                                      <label id="houseHoldWaterRateValue" className="form-label float-end">
                                    $0 
                                    </label>
                                      <Field
                                      as="select"
                                      id="houseHoldWaterRateType"
                                      className="form-select shadow  inputDesign"
                                      name="houseHoldWaterRateType"
                                    >
                                      <option value="">Select</option>
                                      <option value="Weekly">Weekly</option>
                                      <option value="Fortnightly">Fortnightly</option>
                                      <option value="Monthly">Monthly</option>
                                      <option value="Quarterly">Quarterly</option>
                                      <option value="Six-Monthly">Six-Monthly</option>
                                      <option value="Annually">Annually</option>
                                      
                                      </Field>
                                      < ErrorMessage name="houseHoldWaterRateType" component="div"
                                  className="text-danger fw-bold" />
                                      </div>
                                      </div>
                                    </div>
                                    {/* Water Rates */}
        
                                    {/* Gas */}
                                    <div className="col-md-6">
                                    
                                    <div className="row">
                                      <div className="col-7">
                                      <label htmlFor="houseHoldGas" className="form-label">
                                      Gas
                                    </label>
                                    <Field type="number" className="form-control inputDesign shadow"
                                    id="houseHoldGas" name="houseHoldGas" placeholder="Gas"/>
                                    < ErrorMessage name="houseHoldGas" component="div"
                                    className="text-danger fw-bold" />
                                      </div>
                                      <div className="col-5">
                                      <label   id="houseHoldGasValue" className="form-label float-end ">
                                      $0
                                    </label>
                                    <Field
                                    as="select"
                                      id="houseHoldGasType"
                                      className="form-select shadow  inputDesign"
                                      name="houseHoldGasType"
                                    >
                                      <option value=''>Select</option>
                                      <option value="Weekly">Weekly</option>
                                      <option value="Fortnightly">Fortnightly</option>
                                      <option value="Monthly">Monthly</option>
                                      <option value="Quarterly">Quarterly</option>
                                      <option value="Six-Monthly">Six-Monthly</option>
                                      <option value="Annually">Annually</option>
                                      </Field>
                                      < ErrorMessage name="houseHoldGasType" component="div"
                                  className="text-danger fw-bold" />
                                        </div>
                                    </div>
                                    
                                    </div>
                                    {/* Gas */}
                                    </div>
                                      {/* houseHold row 2 */}

                                        {/* houseHold row 3 */}
                                        <div className="row  my-3">
                                    
                                    {/* Phone*/}
                                      <div className="col-md-6">
                                      <div className="row">
                                      <div className="col-7">
                                      <label htmlFor="houseHoldPhone" className="form-label">
                                      Phone
                                    </label>
                                    <Field type="number" className="form-control inputDesign shadow"
                                    id="houseHoldPhone" placeholder="Phone"
                                    name="houseHoldPhone"/>
                                    < ErrorMessage name="houseHoldPhone" component="div"
                                  className="text-danger fw-bold" />
                                      </div>
                                      <div className="col-5">
                                      <label id="houseHoldPhoneValue" className="form-label float-end">
                                    $0 
                                    </label>
                                      <Field
                                      as="select"
                                      id="houseHoldPhoneType"
                                      name="houseHoldPhoneType"

                                      className="form-select shadow  inputDesign"
                                    >
                                      <option value="">Select</option>
                                      <option value="Weekly">Weekly</option>
                                      <option value="Fortnightly">Fortnightly</option>
                                      <option value="Monthly">Monthly</option>
                                      <option value="Quarterly">Quarterly</option>
                                      <option value="Six-Monthly">Six-Monthly</option>
                                      <option value="Annually">Annually</option>
                                      
                                      </Field>
                                      < ErrorMessage name="houseHoldPhoneType" component="div"
                                  className="text-danger fw-bold" />
                                      </div>
                                      </div>
                                    </div>
                                    {/* Phone */}
        
                                    {/* Council Rates */}
                                    <div className="col-md-6">
                                    
                                    <div className="row">
                                      <div className="col-7">
                                      <label htmlFor="houseHoldCouncilRates" className="form-label">
                                      Council Rates
                                    </label>
                                    <Field type="number" className="form-control inputDesign shadow"
                                    id="houseHoldCouncilRates"
                                    name="houseHoldCouncilRates"
                                    placeholder="Council Rates"/>
                                    < ErrorMessage name="houseHoldCouncilRates" component="div"
                                  className="text-danger fw-bold" />
                                      </div>
                                      <div className="col-5">
                                      <label   id="houseHoldCouncilRatesValue" className="form-label float-end ">
                                      $0
                                    </label>
                                    <Field
                                    as="select"
                                      id="houseHoldCouncilRatesType"
                                      className="form-select shadow  inputDesign"
                                    >
                                      <option value="">Select</option>
                                      <option value="Weekly">Weekly</option>
                                      <option value="Fortnightly">Fortnightly</option>
                                      <option value="Monthly">Monthly</option>
                                      <option value="Quarterly">Quarterly</option>
                                      <option value="Six-Monthly">Six-Monthly</option>
                                      <option value="Annually">Annually</option>
                                      </Field>
                                      < ErrorMessage name="houseHoldCouncilRatesType" component="div"
                                      className="text-danger fw-bold" />
                                        </div>
                                    </div>
                                    
                                    </div>
                                    {/* Council Rates */}
                                        </div>
                                        {/* houseHold row 3 */}


                                          {/* houseHold row 4 */}
                                          <div className="row  my-3">
                                    
                                    {/* Internet */}
                                    <div className="col-md-6">
                                    
                                    <div className="row">
                                      <div className="col-7">
                                      <label htmlFor="houseHoldInternet" className="form-label">
                                      Internet
                                    </label>
                                    <Field type="number" className="form-control inputDesign shadow"
                                    id="houseHoldInternet"
                                    name="houseHoldInternet"
                                    placeholder="Internet"/>
                                    
                                    < ErrorMessage name="houseHoldInternet" component="div"
                                  className="text-danger fw-bold" />
                                      </div>
                                      <div className="col-5">
                                      <label   id="houseHoldInternetValue" className="form-label float-end ">
                                      $0
                                    </label>
                                    <Field
                                    as="select"
                                      id="houseHoldInternetType"
                                      name="houseHoldInternetType"

                                      className="form-select shadow  inputDesign"
                                    >
                                      <option value=''>Select</option>
                                      <option value="Weekly">Weekly</option>
                                      <option value="Fortnightly">Fortnightly</option>
                                      <option value="Monthly">Monthly</option>
                                      <option value="Quarterly">Quarterly</option>
                                      <option value="Six-Monthly">Six-Monthly</option>
                                      <option value="Annually">Annually</option>
                                      </Field>
                                      < ErrorMessage name="houseHoldInternetType" component="div"
                                  className="text-danger fw-bold" />
                                        </div>
                                    </div>
                                    
                                    </div>
                                    {/* Internet*/}
                                      {/* Other */}
                                      <div className="col-md-6">
                                    
                                    <div className="row">
                                      <div className="col-7">
                                      <label htmlFor="houseHoldOther" className="form-label">
                                      Other
                                    </label>
                                    <Field name="houseHoldOther"
                                    type="number" className="form-control inputDesign shadow"
                                    id="houseHoldOther" placeholder="Other"/>
                                    < ErrorMessage name="houseHoldOther" component="div"
                                  className="text-danger fw-bold" />
        
                                      </div>
                                      <div className="col-5">
                                      <label   id="houseHoldOtherValue" className="form-label float-end ">
                                      $0
                                    </label>
                                    <Field
                                    as="select"
                                      id="houseHoldOtherType"
                                      name="houseHoldOtherType"

                                      className="form-select shadow  inputDesign"
                                    >
                                      <option value=''>Select</option>
                                      <option value="Weekly">Weekly</option>
                                      <option value="Fortnightly">Fortnightly</option>
                                      <option value="Monthly">Monthly</option>
                                      <option value="Quarterly">Quarterly</option>
                                      <option value="Six-Monthly">Six-Monthly</option>
                                      <option value="Annually">Annually</option>
                                      </Field>
                                      < ErrorMessage name="houseHoldOtherType" component="div"
                                      className="text-danger fw-bold" />
                                        </div>
                                    </div>
                                    
                                    </div>
                                    {/* Internet*/}

                                    
                                        </div>
                                        {/* houseHold row 4 */}
                                      
                                      
                                      </div>
                                  </div>
                                
                                
                              
                                </Collapse>
                                  </div>
                                  {/* houseHold*/}

                                    {/* Personal   */}
                                  <div className="row my-1">
                                <div 
                                onClick={() => setOpen2(!open2)}
                                aria-controls=""
                                aria-expanded={open2}
                                className="bgColorIncome   py-2 text-light"
                                >
                                  <div className="row ">
                                  <div className="col-md-6">
                                    <label className="form-label mb-0">Personal</label>
                                  </div>
                                  <div className="col-md-6">
                                  <label className="float-end mb-0">$0
                                  <div className="iconContainer mx-1">
                                <img className="img-fluid" src={down} alt="" />

                                  </div></label>
                                  </div>
                                  </div>
                                  

                                </div>
                                <div>
                                  
                                </div>
                                <Collapse in={open2}>

                                  <div className="row">
                                    <div className="col-md-12">

                                      {/* Personal    row 1 */}
                                      <div className="row  my-3">
                                    
                                    {/* Food */}
                                      <div className="col-md-6">
                                      
                                    <div className="row">
                                      <div className="col-7">
                                      <label htmlFor="PersonalFood" className="form-label">
                                      Food
                                    </label>
                                    <Field type="number" className="form-control inputDesign shadow"
                                    name="PersonalFood" id="PersonalFood" placeholder="Food" />
                                    < ErrorMessage name="PersonalFood" component="div"
                                  className="text-danger fw-bold" />

                                      </div>
                                      <div className="col-5">
                                      <label htmlFor="PersonalFoodValue" className="form-label float-end">
                                    $0 
                                    </label>
                                      <Field
                                      as='select'
                                      id="PersonalFoodType"
                                      name="PersonalFoodType"

                                      className="form-select shadow  inputDesign"
                                    >
                                      <option value=''>Select</option>
                                      <option value="Weekly">Weekly</option>
                                      <option value="Fortnightly">Fortnightly</option>
                                      <option value="Monthly">Monthly</option>
                                      <option value="Quarterly">Quarterly</option>
                                      <option value="Six-Monthly">Six-Monthly</option>
                                      <option value="Annually">Annually</option>
                                      </Field>
                                      < ErrorMessage name="PersonalFoodType" component="div"
                                  className="text-danger fw-bold" />
                                      </div>
                                    </div>
                                      </div>
                                    {/* Food */}
        
                                    {/* Clothing */}
                                    <div className="col-md-6">
                                    <div className="row">
                                      <div className="col-7">
                                      <label htmlFor="PersonalClothing" className="form-label">
                                      Clothing
                                    </label>
                                    <Field type="number" className="form-control inputDesign shadow"
                                    id="PersonalClothing" name="PersonalClothing" placeholder="Clothing"/>
                                    < ErrorMessage name="PersonalClothing" component="div"
                                  className="text-danger fw-bold" />
                                      </div>
                                      <div className="col-5">
                                      <label id="PersonalClothingValue" className="form-label float-end">
                                    $0 
                                    </label>
                                    <Field
                                    as='select'
                                      name="PersonalClothingValueType"
                                      id="PersonalClothingValueType"
                                      className="form-select shadow  inputDesign"
                                    >
                                      <option value=''>Select</option>
                                      <option value="Weekly">Weekly</option>
                                      <option value="Fortnightly">Fortnightly</option>
                                      <option value="Monthly">Monthly</option>
                                      <option value="Quarterly">Quarterly</option>
                                      <option value="Six-Monthly">Six-Monthly</option>
                                      <option value="Annually">Annually</option>
                                      </Field>
                                      < ErrorMessage name="PersonalClothingValueType" component="div"
                                  className="text-danger fw-bold" />
                                      </div>
                                    </div>
                                    </div>
                                    {/* Clothing */}
        
                                      </div>
                                      {/* Personal    row 1 */}

                                      {/* Personal row 2 */}
                                      <div className="row  my-3">
                                    
                                    {/* Cigarettes*/}
                                      <div className="col-md-6">
                                      <div className="row">
                                      <div className="col-7">
                                      <label htmlFor="PersonalCigarettes" className="form-label">
                                      Cigarettes
                                    </label>
                                    <Field type="number" className="form-control inputDesign shadow"
                                    name="PersonalCigarettes" id="PersonalCigarettes" placeholder="Cigarettes"/>
                                    < ErrorMessage name="PersonalCigarettes" component="div"
                                  className="text-danger fw-bold" />
                                      </div>
                                      <div className="col-5">
                                      <label id="PersonalCigarettesValue" className="form-label float-end">
                                    $0 
                                    </label>
                                      <Field
                                      as='select'
                                      id="PersonalCigarettesType"
                                      name="PersonalCigarettesType"

                                      className="form-select shadow  inputDesign"
                                    >
                                      <option value=''>Select</option>
                                      <option value="Weekly">Weekly</option>
                                      <option value="Fortnightly">Fortnightly</option>
                                      <option value="Monthly">Monthly</option>
                                      <option value="Quarterly">Quarterly</option>
                                      <option value="Six-Monthly">Six-Monthly</option>
                                      <option value="Annually">Annually</option>
                                      
                                      </Field>
                                      < ErrorMessage name="PersonalCigarettesType" component="div"
                                  className="text-danger fw-bold" />
                                      </div>
                                      </div>
                                    </div>
                                    {/* Cigarettes */}
        
                                    {/* Alcohol */}
                                    <div className="col-md-6">
                                    
                                    <div className="row">
                                      <div className="col-7">
                                      <label htmlFor="PersonalAlcohol" className="form-label">
                                      Alcohol
                                    </label>
                                    <Field type="number" className="form-control inputDesign shadow"
                                    name="PersonalAlcohol" id="PersonalAlcohol" placeholder="Alcohol"/>
                                    < ErrorMessage name="PersonalAlcohol" component="div" className="text-danger fw-bold" />

                                      </div>
                                      <div className="col-5">
                                      <label   id="PersonalAlcoholValue" className="form-label float-end ">
                                      $0
                                    </label>
                                    <Field
                                    as='select'
                                      id="PersonalAlcoholType"
                                      name="PersonalAlcoholType"
                                      className="form-select shadow  inputDesign"
                                    >
                                      <option value=''>Select</option>
                                      <option value="Weekly">Weekly</option>
                                      <option value="Fortnightly">Fortnightly</option>
                                      <option value="Monthly">Monthly</option>
                                      <option value="Quarterly">Quarterly</option>
                                      <option value="Six-Monthly">Six-Monthly</option>
                                      <option value="Annually">Annually</option>
                                      </Field>
                                      < ErrorMessage name="PersonalAlcoholType" component="div"
                                  className="text-danger fw-bold" />
                                        </div>
                                    </div>
                                    
                                    </div>
                                    {/* Alcohol */}
                                      </div>
                                      {/* Personal row 2 */}

                                        {/* Personal row 3 */}
                                        <div className="row  my-3">
                                    
                                    {/* Subscription Fees*/}
                                      <div className="col-md-6">
                                      <div className="row">
                                      <div className="col-7">
                                      <label htmlFor="PersonalSubscriptionFees" className="form-label">
                                      Subscription Fees
                                    </label>
                                    <Field
                                    name="PersonalSubscriptionFees" type="number" className="form-control inputDesign shadow"
                                    id="PersonalSubscriptionFees" placeholder="Subscription Fees"/>
        < ErrorMessage name="PersonalSubscriptionFees" component="div"
                                  className="text-danger fw-bold" />
                                      </div>
                                      <div className="col-5">
                                      <label id="PersonalSubscriptionFeesValue" className="form-label float-end">
                                    $0 
                                    </label>
                                      <Field 
                                      as='select'
                                      id="PersonalSubscriptionFeesType"
                                      name="PersonalSubscriptionFeesType"

                                      className="form-select shadow  inputDesign"
                                    >
                                      <option value=''>Select</option>
                                      <option value="Weekly">Weekly</option>
                                      <option value="Fortnightly">Fortnightly</option>
                                      <option value="Monthly">Monthly</option>
                                      <option value="Quarterly">Quarterly</option>
                                      <option value="Six-Monthly">Six-Monthly</option>
                                      <option value="Annually">Annually</option>
                                      
                                      </Field>
                                      < ErrorMessage name="PersonalSubscriptionFeesType" component="div"
                                  className="text-danger fw-bold" />

                                      </div>
                                      </div>
                                      </div>
                                    {/* Subscription Fees */}
        
                                    {/* Memberships & Clubs */}
                                    <div className="col-md-6">
                                    
                                    <div className="row">
                                      <div className="col-7">
                                      <label htmlFor="PersonalMembershipsClubs" className="form-label">
                                      Memberships & Clubs
                                    </label>
                                    <Field type="number" className="form-control inputDesign shadow"
                                    id="PersonalMembershipsClubs"
                                    name="PersonalMembershipsClubs" placeholder="Memberships & Clubs"/>
        < ErrorMessage name="PersonalMembershipsClubs" component="div"
                                  className="text-danger fw-bold" />

                                      </div>
                                      <div className="col-5">
                                      <label   id="PersonalMembershipsClubsValue" className="form-label float-end ">
                                      $0
                                    </label>
                                    <Field
                                    as='select'
                                      id="PersonalMembershipsClubsType"
                                      name="PersonalMembershipsClubsType"
                                      className="form-select shadow  inputDesign"
                                    >
                                      <option value=''>Select</option>
                                      <option value="Weekly">Weekly</option>
                                      <option value="Fortnightly">Fortnightly</option>
                                      <option value="Monthly">Monthly</option>
                                      <option value="Quarterly">Quarterly</option>
                                      <option value="Six-Monthly">Six-Monthly</option>
                                      <option value="Annually">Annually</option>
                                      </Field>
                                      < ErrorMessage name="PersonalMembershipsClubsType" component="div"
                                  className="text-danger fw-bold" />

                                        </div>
                                    </div>
                                    
                                    </div>
                                    {/* Memberships & Clubs */}
                                      </div>
                                        {/* Personal row 3 */}

                                        {/* Personal row 4 */}
                                      <div className="row  my-3">
                                    
                                    {/* Other*/}
                                      <div className="col-md-6">
                                      <div className="row">
                                      <div className="col-7">
                                      <label htmlFor="PersonalOther" className="form-label">
                                      Other
                                    </label>
                                    <Field name="PersonalOther" type="number" className="form-control inputDesign shadow"
                                    id="PersonalOther" placeholder="Other"/>
        < ErrorMessage name="PersonalOther" component="div"
                                  className="text-danger fw-bold" />

                                      </div>
                                      <div className="col-5">
                                      <label id="PersonalOtherValue" className="form-label float-end">
                                    $0 
                                    </label>
                                      <Field
                                      as='select'
                                      id="PersonalOtherType"
                                      name="PersonalOtherType"

                                      className="form-select shadow  inputDesign"
                                    >
                                      <option value=''>Select</option>
                                      <option value="Weekly">Weekly</option>
                                      <option value="Fortnightly">Fortnightly</option>
                                      <option value="Monthly">Monthly</option>
                                      <option value="Quarterly">Quarterly</option>
                                      <option value="Six-Monthly">Six-Monthly</option>
                                      <option value="Annually">Annually</option>
                                      
                                      </Field>
                                      < ErrorMessage name="PersonalOtherType" component="div"
                                  className="text-danger fw-bold" />

                                      </div>
                                      </div>
                                    </div>
                                    {/* Other */}
        
                                    {/* Holidays */}
                                    <div className="col-md-6">
                                    
                                    <div className="row">
                                      <div className="col-7">
                                      <label htmlFor="PersonalHolidays" className="form-label">
                                      Holidays
                                    </label>
                                    <Field type="number" className="form-control inputDesign shadow"
                                    name="PersonalHolidays" id="PersonalHolidays" placeholder="Holidays"/>
        < ErrorMessage name="PersonalHolidays" component="div"
                                  className="text-danger fw-bold" />

                                      </div>
                                      <div className="col-5">
                                      <label   id="PersonalHolidaysValue" className="form-label float-end ">
                                      $0
                                    </label>
                                    <Field as='select'
                                      id="PersonalHolidaysType"
                                      name="PersonalHolidaysType"
                                      className="form-select shadow  inputDesign"
                                    >
                                      <option value=''>Select</option>
                                      <option value="Weekly">Weekly</option>
                                      <option value="Fortnightly">Fortnightly</option>
                                      <option value="Monthly">Monthly</option>
                                      <option value="Quarterly">Quarterly</option>
                                      <option value="Six-Monthly">Six-Monthly</option>
                                      <option value="Annually">Annually</option>
                                      </Field>
                                      < ErrorMessage name="PersonalHolidaysType" component="div"
                                  className="text-danger fw-bold" />

                                        </div>
                                    </div>
                                    
                                    </div>
                                    {/* Alcohol */}
                                      </div>
                                      {/* Personal row 4 */}

                                      
                                        {/* Personal row 5 */}
                                        <div className="row  my-3">
                                    
                                    {/* Dining Out*/}
                                      <div className="col-md-6">
                                      <div className="row">
                                      <div className="col-7">
                                      <label htmlFor="PersonalDiningOut" className="form-label">
                                      Dining Out
                                    </label>
                                    <Field type="number" className="form-control inputDesign shadow"
                                    id="PersonalDiningOut" name="PersonalDiningOut" placeholder="Dining Out"/>
        < ErrorMessage name="PersonalDiningOut" component="div"
                                  className="text-danger fw-bold" />

                                      </div>
                                      <div className="col-5">
                                      <label id="PersonalDiningOutValue" className="form-label float-end">
                                    $0 
                                    </label>
                                      <Field
                                      as='select'
                                      id="PersonalDiningOutType"
                                      name="PersonalDiningOutType"
                                      className="form-select shadow  inputDesign"
                                    >
                                      <option value=''>Select</option>
                                      <option value="Weekly">Weekly</option>
                                      <option value="Fortnightly">Fortnightly</option>
                                      <option value="Monthly">Monthly</option>
                                      <option value="Quarterly">Quarterly</option>
                                      <option value="Six-Monthly">Six-Monthly</option>
                                      <option value="Annually">Annually</option>
                                      
                                      </Field>
                                      < ErrorMessage name="PersonalDiningOutType" component="div"
                                  className="text-danger fw-bold" />

                                      </div>
                                      </div>
                                    </div>
                                    {/* Dining Out */}
        
                                    {/* Mobile Phone */}
                                    <div className="col-md-6">
                                    
                                    <div className="row">
                                      <div className="col-7">
                                      <label htmlFor="PersonalMobilePhone" className="form-label">
                                      Mobile Phone
                                    </label>
                                    <Field type="number" className="form-control inputDesign shadow"
                                    id="PersonalMobilePhone" name="PersonalMobilePhone" placeholder="Mobile Phone"/>
        < ErrorMessage name="PersonalMobilePhone" component="div"
                                  className="text-danger fw-bold" />

                                      </div>
                                      <div className="col-5">
                                      <label   id="PersonalMobilePhoneValue" className="form-label float-end ">
                                      $0
                                    </label>
                                    <Field
                                    as='select'
                                      id="PersonalMobilePhoneType"
                                      name="PersonalMobilePhoneType"

                                      className="form-select shadow  inputDesign"
                                    >
                                      <option value=''>Select</option>
                                      <option value="Weekly">Weekly</option>
                                      <option value="Fortnightly">Fortnightly</option>
                                      <option value="Monthly">Monthly</option>
                                      <option value="Quarterly">Quarterly</option>
                                      <option value="Six-Monthly">Six-Monthly</option>
                                      <option value="Annually">Annually</option>
                                      </Field>
                                      < ErrorMessage name="PersonalMobilePhoneType" component="div"
                                  className="text-danger fw-bold" />

                                        </div>
                                    </div>
                                    
                                    </div>
                                    {/* Mobile Phone */}
                                        </div>
                                        {/* Personal row 5 */}


                                        {/* Personal row 5 */}
                                        <div className="row  my-3">
                                    
                                    {/* Dining Out*/}
                                      <div className="col-md-6">
                                      <div className="row">
                                      <div className="col-7">
                                      <label htmlFor="PersonalMedicalExpenses" className="form-label">
                                      Medical Expenses
                                    </label>
                                    <Field type="number" className="form-control inputDesign shadow"
                                    id="PersonalMedicalExpenses"
                                    name="PersonalMedicalExpenses" placeholder="Medical Expenses"/>
        < ErrorMessage name="PersonalMedicalExpenses" component="div"
                                  className="text-danger fw-bold" />

                                      </div>
                                      <div className="col-5">
                                      <label id="PersonalMedicalExpensesValue" className="form-label float-end">
                                    $0 
                                    </label>
                                      <Field
                                      as='select'
                                      id="PersonalMedicalExpensesType"
                                      name="PersonalMedicalExpensesType"
                                      className="form-select shadow  inputDesign"
                                    >
                                      <option value=''>Select</option>
                                      <option value="Weekly">Weekly</option>
                                      <option value="Fortnightly">Fortnightly</option>
                                      <option value="Monthly">Monthly</option>
                                      <option value="Quarterly">Quarterly</option>
                                      <option value="Six-Monthly">Six-Monthly</option>
                                      <option value="Annually">Annually</option>
                                      
                                      </Field>
                                      < ErrorMessage name="PersonalMedicalExpensesType" component="div"
                                  className="text-danger fw-bold" />

                                      </div>
                                      </div>
                                    </div>
                                    {/* Medical Expenses */}
        
                                  
                                        </div>
                                        {/* Personal row 6 */}
                                        
                                        
                                        </div>
                                  </div>
                                </Collapse>
                                  </div>
                                  {/* Personal*/}

                                    {/* Transport */}
                                  <div className="row my-1 ">
                                <div 
                                onClick={() => setOpen3(!open3)}
                                aria-controls=""
                                aria-expanded={open3}
                                className="bgColorIncome   py-2 text-light"
                                >
                                  <div className="row">
                                  <div className="col-md-6">
                                    <label className="form-label mb-0">Transport</label>
                                  </div>
                                  <div className="col-md-6">
                                  <label id="TransportTotalValue" className="float-end form-label mb-0">$0
                                  <div className="iconContainer mx-1">
                                <img className="img-fluid" src={down} alt="" />

                                  </div></label>
                                  </div>
                                  </div>
                                  

                                </div>
                                <div>
                                  
                                </div>
                                <Collapse in={open3}>

                                  <div className="row">
                                    <div className="col-md-12">

                                      {/* TransportPetrol   row 1 */}
                                      <div className="row  my-3">
                                    {/* Petrol */}

                                      <div className="col-md-6">
                                      
                                    <div className="row">
                                      
                                      <div className="col-7">
                                        <br />
                                      <label htmlFor="TransportPetrol" className="form-label">
                                      Petrol
                                    </label>
                                    <Field type="number" className="form-control inputDesign shadow"
                                    name="TransportPetrol"
                                    id="TransportPetrol" placeholder="Petrol"/>
        < ErrorMessage name="TransportPetrol" component="div"
                                  className="text-danger fw-bold" />

                                      </div>
                                      <div className="col-5">
                                      <br />
                                      <label id="TransportPetrolValue" className="form-label float-end">
                                    $0 
                                    </label>
                                      <Field
                                      as='select'
                                      id="TransportPetrolType"
                                      name="TransportPetrolType"

                                      className="form-select shadow  inputDesign"
                                    >
                                      <option value=''>Select</option>
                                      <option value="Weekly">Weekly</option>
                                      <option value="Fortnightly">Fortnightly</option>
                                      <option value="Monthly">Monthly</option>
                                      <option value="Quarterly">Quarterly</option>
                                      <option value="Six-Monthly">Six-Monthly</option>
                                      <option value="Annually">Annually</option>
                                    </Field>
                                    < ErrorMessage name="TransportPetrolType" component="div"
                                  className="text-danger fw-bold" />

                                      </div>
                                    </div>
                                      </div>
                                    {/* Petrol */}
        
                                    {/* Car Repairs & Maintenance */}
                                    <div className="col-md-6">

                                    <div className="row">
                                        <div className="col-7">
                                        <label htmlFor="TransportCarRepairs" className="form-label">
                                        Car Repairs & Maintenance
                                      </label>
                                      <Field type="number" className="form-control inputDesign shadow"
                                      id="TransportCarRepairs"
                                      name="TransportCarRepairs" placeholder="Car Repairs & Maintenance"/>
            < ErrorMessage name="TransportCarRepairs" component="div"
                                  className="text-danger fw-bold" />

                                        </div>
                                        <div className="col-5">
                                        <br />

                                        <label id="TransportCarRepairsValue" className="form-label float-end">
                                      $0 
                                      </label>
                                        <Field
                                        as='select'
                                        id="TransportCarRepairsType"
                                        name="TransportCarRepairsType"
                                        className="form-select shadow  inputDesign"
                                      >
                                        <option value=''>Select</option>
                                        <option value="Weekly">Weekly</option>
                                        <option value="Fortnightly">Fortnightly</option>
                                        <option value="Monthly">Monthly</option>
                                        <option value="Quarterly">Quarterly</option>
                                        <option value="Six-Monthly">Six-Monthly</option>
                                        <option value="Annually">Annually</option>
                                          </Field>
                                          < ErrorMessage name="TransportCarRepairsType" component="div"
                                  className="text-danger fw-bold" />
                                        </div>
                                      </div>
                                        </div>
                                    {/* Electricity */}
        
                                      </div>
                                      {/* Transport   row 1 */}

                                        {/* Transport  row 2 */}
                                        <div className="row  my-3">
                                    {/* Car Registration */}
                                      <div className="col-md-6">
                                      
                                    <div className="row">
                                      <div className="col-7">
                                      <label htmlFor="TransportCarRegistration" className="form-label">
                                      Car Registration
                                    </label>
                                    <Field type="number" className="form-control inputDesign shadow"
                                    id="TransportCarRegistration"
                                    name="TransportCarRegistration" placeholder="Car Registration"/>
        < ErrorMessage name="TransportCarRegistration" component="div"
                                  className="text-danger fw-bold" />

                                      </div>
                                      <div className="col-5">
                                      <label id="TransportCarRegistrationValue" className="form-label float-end">
                                    $0 
                                    </label>
                                      <Field
                                      as='select'
                                      id="TransportCarRegistrationType"
                                      name="TransportCarRegistrationType"
                                      className="form-select shadow  inputDesign"
                                    >
                                      <option value=''>Select</option>
                                      <option value="Weekly">Weekly</option>
                                      <option value="Fortnightly">Fortnightly</option>
                                      <option value="Monthly">Monthly</option>
                                      <option value="Quarterly">Quarterly</option>
                                      <option value="Six-Monthly">Six-Monthly</option>
                                      <option value="Annually">Annually</option>
                                    </Field>
                                    < ErrorMessage name="TransportCarRegistrationType" component="div"
                                  className="text-danger fw-bold" />
                                      </div>
                                    </div>
                                      </div>
                                    {/* Car Registration */}
        
                                    {/* Public Transport */}
                                    <div className="col-md-6">
                                      <div className="row">
                                        <div className="col-7">
                                        <label htmlFor="PublicTransport" className="form-label">
                                        Public Transport
                                      </label>
                                      <Field type="number" className="form-control inputDesign shadow"
                                      id="PublicTransport" name="PublicTransport" placeholder="Public Transport"/>
          < ErrorMessage name="PublicTransport" component="div"
                                  className="text-danger fw-bold" />
                                        </div>
                                        <div className="col-5">
                                        <label id="PublicTransportValue" className="form-label float-end">
                                      $0 
                                      </label>
                                        <Field
                                        as='select'
                                        id="PublicTransportType"
                                        name="PublicTransportType"
                                        className="form-select shadow  inputDesign"
                                      >
                                        <option value=''>Select</option>
                                        <option value="Weekly">Weekly</option>
                                        <option value="Fortnightly">Fortnightly</option>
                                        <option value="Monthly">Monthly</option>
                                        <option value="Quarterly">Quarterly</option>
                                        <option value="Six-Monthly">Six-Monthly</option>
                                        <option value="Annually">Annually</option>
                                        </Field>
                                        < ErrorMessage name="PublicTransportType" component="div"
                                  className="text-danger fw-bold" />
                                        </div>
                                      </div>
                                    </div>
                                    {/* Public Transport */}
        
                                        </div>
                                        {/* Transport   row 2 */}

                                          {/* Transport  row 3 */}
                                          <div className="row  my-3">
                                      {/* Other*/}
                                      <div className="col-md-6">
                                      
                                    <div className="row">
                                      <div className="col-7">
                                      <label htmlFor="TransportOther" className="form-label">
                                      Other
                                    </label>
                                    <Field type="number" className="form-control inputDesign shadow"
                                    id="TransportOther" name="TransportOther" placeholder="Other"/>
        < ErrorMessage name="TransportOther" component="div"
                                  className="text-danger fw-bold" />
                                      </div>
                                      <div className="col-5">
                                      <label id="TransportOtherValue" className="form-label float-end">
                                    $0 
                                    </label>
                                      <Field
                                      as='select'
                                      name="TransportOtherType"
                                      id="TransportOtherType"
                                      className="form-select shadow  inputDesign"
                                    >
                                      <option value=''>Select</option>
                                      <option value="Weekly">Weekly</option>
                                      <option value="Fortnightly">Fortnightly</option>
                                      <option value="Monthly">Monthly</option>
                                      <option value="Quarterly">Quarterly</option>
                                      <option value="Six-Monthly">Six-Monthly</option>
                                      <option value="Annually">Annually</option>
                                      </Field>
                                      < ErrorMessage name="TransportOtherType" component="div"
                                  className="text-danger fw-bold" />
                                      </div>
                                    </div>
                                      </div>
                                    {/* Car Registration */}
        
                                  </div>
                                        {/* Transport   row 3 */}

                                  </div>
                                  </div>
                                
                                
                              
                                </Collapse>
                                  </div>
                                  {/* Transport   */}

                                      {/* Insurance */}
                                  <div className="row my-1">
                                <div 
                                onClick={() => setOpen4(!open4)}
                                aria-controls=""
                                aria-expanded={open4}
                                className="bgColorIncome   py-2 text-light"
                                >
                                  <div className="row">
                                  <div className="col-md-6">
                                    <label className="form-label mb-0">Insurance</label>
                                  </div>
                                  <div className="col-md-6">
                                  <label id="InsuranceTotalValue" className="float-end form-label mb-0">$0
                                  <div className="iconContainer mx-1">
                                <img className="img-fluid" src={down} alt="" />

                                  </div></label>
                                  </div>
                                  </div>
                                  

                                </div>
                                <div>
                                  
                                </div>
                                <Collapse in={open4}>

                                  <div className="row">
                                    <div className="col-md-12">

                                      {/* Insurance   row 1 */}
                                      <div className="row  my-3">
                                    {/* Private Health */}

                                      <div className="col-md-6">
                                      
                                    <div className="row">
                                      
                                      <div className="col-7">
                                      <label htmlFor="PrivateHealth" className="form-label">
                                      Private Health
                                    </label>
                                    <Field type="number" className="form-control inputDesign shadow"
                                    id="PrivateHealth"
                                    name="PrivateHealth" placeholder="Private Health"/>
        < ErrorMessage name="PrivateHealth" component="div"
                                  className="text-danger fw-bold" />
                                      </div>
                                      <div className="col-5">
                                      <label id="PrivateHealthValue" className="form-label float-end">
                                    $0 
                                    </label>
                                      <Field
                                      as='select'
                                      id="PrivateHealthType"
                                      name="PrivateHealthType"
                                      className="form-select shadow  inputDesign"
                                    >
                                      <option value=''>Select</option>
                                      <option value="Weekly">Weekly</option>
                                      <option value="Fortnightly">Fortnightly</option>
                                      <option value="Monthly">Monthly</option>
                                      <option value="Quarterly">Quarterly</option>
                                      <option value="Six-Monthly">Six-Monthly</option>
                                      <option value="Annually">Annually</option>
                                      </Field>
                                      < ErrorMessage name="PrivateHealthType" component="div"
                                  className="text-danger fw-bold" />

                                      </div>
                                    </div>
                                      </div>
                                    {/* Private Health */}
        
                                    {/* Life/TPD/Trauma */}
                                    <div className="col-md-6">

                                    <div className="row">
                                        <div className="col-7">
                                        <label htmlFor="LifeTPDTrauma" className="form-label">
                                        Life/TPD/Trauma
                                      </label>
                                      <Field type="number" className="form-control inputDesign shadow"
                                      id="LifeTPDTrauma" name="LifeTPDTrauma" placeholder="Life/TPD/Trauma"/>
            < ErrorMessage name="LifeTPDTrauma" component="div"
                                  className="text-danger fw-bold" />

                                        </div>
                                        <div className="col-5">
                                    <label id="LifeTPDTraumaValue" className="form-label float-end">
                                      $0 
                                      </label>
                                        <Field
                                        as="select"
                                        id="LifeTPDTraumaType"
                                        name="LifeTPDTraumaType"
                                        className="form-select shadow  inputDesign"
                                      >
                                        <option value="">Select</option>
                                        <option value="Weekly">Weekly</option>
                                        <option value="Fortnightly">Fortnightly</option>
                                        <option value="Monthly">Monthly</option>
                                        <option value="Quarterly">Quarterly</option>
                                        <option value="Six-Monthly">Six-Monthly</option>
                                        <option value="Annually">Annually</option>
                                        </Field>

                                        < ErrorMessage name="LifeTPDTraumaType" component="div"
                                  className="text-danger fw-bold" />

                                        </div>
                                      </div>
                                        </div>
                                    {/* Life/TPD/Trauma */}
        
                                      </div>
                                      {/* Insurance   row 1 */}

                                        {/* Transport  row 2 */}
                                        <div className="row  my-3">
                                    {/* Income Protection */}
                                      <div className="col-md-6">
                                      
                                    <div className="row">
                                      <div className="col-7">
                                      <label htmlFor="InsuranceIncomeProtection" className="form-label">
                                      Income Protection
                                    </label>
                                    <Field name="InsuranceIncomeProtection"  type="number" className="form-control inputDesign shadow"
                                    id="InsuranceIncomeProtection" placeholder="Income Protection"/>
        < ErrorMessage name="InsuranceIncomeProtection" component="div"
                                  className="text-danger fw-bold" />

                                      </div>
                                      <div className="col-5">
                                      <label id="InsuranceIncomeProtectionValue" className="form-label float-end">
                                    $0 
                                    </label>
                                      <Field
                                      as="select"
                                      id="InsuranceIncomeProtectionType"
                                      name="InsuranceIncomeProtectionType"
                                      className="form-select shadow  inputDesign"
                                    >
                                      <option value=''>Select</option>
                                      <option value="Weekly">Weekly</option>
                                      <option value="Fortnightly">Fortnightly</option>
                                      <option value="Monthly">Monthly</option>
                                      <option value="Quarterly">Quarterly</option>
                                      <option value="Six-Monthly">Six-Monthly</option>
                                      <option value="Annually">Annually</option>
                                      </Field>
                                      < ErrorMessage name="InsuranceIncomeProtectionType" component="div"
                                  className="text-danger fw-bold" />

                                      </div>
                                    </div>
                                      </div>
                                    {/* Income Protection */}
        
                                    {/* Car*/}
                                    <div className="col-md-6">
                                      <div className="row">
                                        <div className="col-7">
                                        <label htmlFor="InsuranceCar" className="form-label">
                                        Car
                                      </label>
                                      <Field type="number" className="form-control inputDesign shadow"
                                      id="InsuranceCar" name="InsuranceCar" placeholder="Car"/>
            < ErrorMessage name="InsuranceCar" component="div"
                                  className="text-danger fw-bold" />

                                        </div>
                                        <div className="col-5">
                                        <label id="InsuranceCarValue" className="form-label float-end">
                                      $0 
                                      </label>
                                        <Field
                                        as="select"
                                        id="InsuranceCarType"
                                        name="InsuranceCarType"
                                        className="form-select shadow  inputDesign"
                                      >
                                        <option value=''>Select</option>
                                        <option value="Weekly">Weekly</option>
                                        <option value="Fortnightly">Fortnightly</option>
                                        <option value="Monthly">Monthly</option>
                                        <option value="Quarterly">Quarterly</option>
                                        <option value="Six-Monthly">Six-Monthly</option>
                                        <option value="Annually">Annually</option>
                                        </Field>
                                        < ErrorMessage name="InsuranceCarType" component="div"
                                  className="text-danger fw-bold" />

                                        </div>
                                      </div>
                                    </div>
                                    {/* Car */}
        
                                        </div>
                                        {/* Insurance row 2 */}

                                          {/* Insurance row 3 */}
                                          <div className="row  my-3">
                                            {/* Other*/}
                                      <div className="col-md-6">
                                        <div className="row">
                                          <div className="col-7">
                                          <label htmlFor="InsuranceHomeContents" className="form-label">
                                          Home And Contents
                                        </label>
                                        <Field  type="number" className="form-control inputDesign shadow"
                                        id="InsuranceHomeContents"
                                        name="InsuranceHomeContents" placeholder="Home And Contents"/>
            < ErrorMessage name="InsuranceHomeContents" component="div"
                                  className="text-danger fw-bold" />

                                          </div>
                                          <div className="col-5">
                                          <label id="InsuranceHomeContentsValue" className="form-label float-end">
                                        $0 
                                        </label>
                                          <Field
                                          as="select"
                                          id="InsuranceHomeContentsType"
                                          name="InsuranceHomeContentsType"
                                          className="form-select shadow  inputDesign"
                                        >
                                          <option value=''>Select</option>
                                          <option value="Weekly">Weekly</option>
                                          <option value="Fortnightly">Fortnightly</option>
                                          <option value="Monthly">Monthly</option>
                                          <option value="Quarterly">Quarterly</option>
                                          <option value="Six-Monthly">Six-Monthly</option>
                                          <option value="Annually">Annually</option>
                                          </Field>
                                          < ErrorMessage name="InsuranceHomeContentsType" component="div"
                                  className="text-danger fw-bold" />

                                          </div>
                                        </div>
                                      </div>
                                    {/* Home And Contents */}
                                      {/* Other*/}
                                      <div className="col-md-6">
                                        <div className="row">
                                          <div className="col-7">
                                          <label htmlFor="InsuranceOther" className="form-label">
                                          Other
                                        </label>
                                        <Field type="number" className="form-control inputDesign shadow"
                                        id="InsuranceOther" name="InsuranceOther" placeholder="Other"/>
                                  < ErrorMessage name="InsuranceOther" component="div"
                                  className="text-danger fw-bold" />

                                          </div>
                                          <div className="col-5">
                                          <label id="TransInsuranceValue" className="form-label float-end">
                                        $0 
                                        </label>
                                          <Field
                                          as="select"
                                          id="TransInsuranceType"
                                          name="TransInsuranceType"
                                          className="form-select shadow  inputDesign"
                                        >
                                          <option value=''>Select</option>
                                          <option value="Weekly">Weekly</option>
                                          <option value="Fortnightly">Fortnightly</option>
                                          <option value="Monthly">Monthly</option>
                                          <option value="Quarterly">Quarterly</option>
                                          <option value="Six-Monthly">Six-Monthly</option>
                                          <option value="Annually">Annually</option>
                                          </Field>
                                          < ErrorMessage name="TransInsuranceType" component="div"
                                  className="text-danger fw-bold" />

                                          </div>
                                        </div>
                                      </div>
                                    {/* Other */}
        
                                  </div>
                                        {/* Insurance  row 3 */}

                                  </div>
                                  </div>
                                
                                
                              
                                </Collapse>
                                  </div>
                                  {/* Insurance    */}
                                
                                </Modal.Body>
                                <Modal.Footer>
                                  <div className="col-md-12">
                                    <button
                                    type="submit"
                                      className="float-end btn w-25  bgColor modalBtn"
                                      // onClick={handleClose}
                                    >
                                      Savee
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
                            <label  className="form-label">
                           Do you have any one off lumpsum expenses?
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="lumpsumExpensesradio" id="lumpsumExpensesopt1" 
                             onChange={handleChange} value="Yes"
                             onClick={()=>lumpsumExpensesHandler("Yes")} 
                             checked={values.lumpsumExpensesradio==="Yes"}/>
                            <label htmlFor="lumpsumExpensesopt1" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="lumpsumExpensesradio" id="lumpsumExpensesopt2" 
                             onChange={handleChange} value="No"
                             onClick={()=>lumpsumExpensesHandler("No")} 
                             checked={values.lumpsumExpensesradio==="No"}/>
                            <label htmlFor="lumpsumExpensesopt2" className="label2">
                              <span>NO</span>
                            </label>
                          </div>
                            </div>
                              </div>    
                        </div>
                        </div>
                      {/* 2 row */}

                       {/* 2 2nd part  row */}
                       {lumpsumExpensesState && <div> 
                       <div className="row">

                       <div className="col-md-4">
                                <div className="mb-3">
                                <label htmlFor="" className="form-label">
                                Description
                                </label>
                                <Field
                                  id="lumpSumExpenseDescription"
                                  name='lumpSumExpenseDescription'
                                  className="form-select shadow inputDesign"
                                  as='select'
                                >
                                  <option value=''>Select</option>
                                  <option value="Content">Content</option>
                                  <option value="Motor Vehicle">Motor Vehicle</option>
                                  <option value="Boat">Boat</option>

                                  <option value="Caravan">Caravan</option>
                                  <option value="Other Lifestyle Assets">Other Lifestyle Assets</option>
                                  <option value="Home Renovation">Home Renovation</option>
                                  <option value="Holiday">Holiday</option>
                                  <option value="Other">Other</option>
                          
                                </Field>
                                <ErrorMessage component='div' className='text-danger fw-bold' name="lumpSumExpenseDescription" />
                                </div>
                       </div>
                        <div className="col-md-4">
                                <div className="mb-3">
                                <label htmlFor="" className="form-label">
                                Year
                                </label>
                                <Field
                                  id="lumpSumExpenseYear"
                                  name='lumpSumExpenseYear'
                                  className="form-select shadow  inputDesign"
                                  as='select'
                                >
                                  <option value=''>Select</option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                  <option value="5">5</option>
                                </Field>
                                <ErrorMessage component='div' className='text-danger fw-bold' name="lumpSumExpenseYear" />
                                </div>
                        </div>
                        <div className="col-md-4">
                        <div className="mb-3">
                          <label htmlFor="lumpSumExpenseAmount" className="form-label">Amount</   label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="lumpSumExpenseAmount" name="lumpSumExpenseAmount" placeholder="Amount"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name="lumpSumExpenseAmount" />
                        </div>            
                        </div>
                       
                       </div>
                       </div>}
                       {/* 2 2nd part  row */}



                         {/* 3 row */}
                        <div className="row">
                        <div className="col-md-6">
                              <div className="mb-3">
                            <label  className="form-label">
                            Are you expecting any inheritances?
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="expectingInheritancesradio" id="expectingInheritancesopt1" 
                             onChange={handleChange} value="Yes"
                             onClick={()=>expectingInheritancesHandler("Yes")} 
                             checked={values.expectingInheritancesradio==="Yes"}/>
                            <label htmlFor="expectingInheritancesopt1" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="expectingInheritancesradio" id="expectingInheritancesopt2" 
                             onChange={handleChange} value="No"
                             onClick={()=>expectingInheritancesHandler("No")} 
                             checked={values.expectingInheritancesradio==="No"}/>
                            <label htmlFor="expectingInheritancesopt2" className="label2">
                              <span>NO</span>
                            </label>
                          </div>
                            </div>
                              </div>    
                        </div>
                        </div>
                         {/* 3 row */}

                        {/*3 2nd part  row*/}
                        {expectingState && <div> 
                        <div className="row">

                        <div className="col-md-4">
                        <div className="mb-3">
                          <label htmlFor="expectingInheritancesDescription" className="form-label">Description</   label>
                          <Field type="text" className="form-control shadow inputDesign" 
                          id="expectingInheritancesDescription" name='expectingInheritancesDescription' placeholder="Description"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name="expectingInheritancesDescription" />
                        </div>            
                        </div>
                        <div className="col-md-4">
                                <div className="mb-3">
                                <label htmlFor="" className="form-label">
                                Year
                                </label>
                                <Field
                                  id="expectingInheritancesYear"
                                  name='expectingInheritancesYear'
                                  className="form-select shadow  inputDesign"
                                  as='select'
                                >
                                  <option value=''>Select</option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                  <option value="5">5</option>
                                </Field>
                                <ErrorMessage component='div' className='text-danger fw-bold' name="expectingInheritancesYear" />
                                </div>
                        </div>
                        <div className="col-md-4">
                        <div className="mb-3">
                          <label htmlFor="expectingInheritancesAmount" className="form-label">Amount</   label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="expectingInheritancesAmount" name="expectingInheritancesAmount" placeholder="Amount"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name="expectingInheritancesAmount" />
                        </div>            
                        </div>

                        </div>
                        </div>}
                    {/* 3 2nd part  row*/}
                    <div className="row mt-5 mb-3">
                        <div className="col-md-12">
                          <button  type='submit' className="float-end btn w-25  bgColor modalBtn">Next</button>
                          <button className="float-end btn w-25  btn-outline  backBtn mx-3" onClick={BackFunction}>Back</button>
                        </div>
                      </div>
                
                
                    </div>
                  </div>
                </div>
                {/*Expenses */}


                     
                      
                      
                        </Form>
                  }
                  </Formik>
                  
      </div>
      </div>
      </div>
    </>
  );
};

export default IncomeExpenses;
