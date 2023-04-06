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
import axios from 'axios';



function Investments() {

  const [BankAccountList, setBankAccountList] = useState([]);
  const [TermDepositList, setTermDepositList] = useState([]);
  const [AustralianShareMarketList, setAustralianShareMarketList] = useState([]);
  const [AustralianSharePortfolioList, setAustralianSharePortfolioList] = useState([]);
  const [ManagedFundsList, setManagedFundsList] = useState([]);
  const [ManagedFundsPortfolioList, setManagedFundsPortfolioList] = useState([]);
  const [InvestmentBondsList, setInvestmentBondsList] = useState([]);
  const [InvestmentPropertiesList, setInvestmentPropertiesList] = useState([]);
  const [OthersList, setOthersList] = useState([]);
    
  const [BankAccount, setBankAccount] = useState(false);
  const [Bankshow, setBankShow] = useState(false);
  const BankhandleClose = () => setBankShow(false);
  const BankhandleShow = () => setBankShow(true);
  let BankAccountHandler=(elem)=>{
    if (elem==="No"){
      setBankAccount(false)
    }
    else{
      setBankAccount(true)
    }
  }


  const [TermDeposit, setTermDeposit] = useState(false);
  const [TermDepositshow, setTermDepositShow] = useState(false);
  const TermDeposithandleClose = () => setTermDepositShow(false);
  const TermDeposithandleShow = () => setTermDepositShow(true);
  let TermDepositHandler=(elem)=>{
    if (elem==="No"){
      setTermDeposit(false)
    }
    else{
      setTermDeposit(true)
    }
  }


  const [AustralianShareMarket, setAustralianShareMarket] = useState(false);
  const [AustralianShareMarketshow, setAustralianShareMarketShow] = useState(false);
  const AustralianShareMarkethandleClose = () => setAustralianShareMarketShow(false);
  const AustralianShareMarkethandleShow = () => setAustralianShareMarketShow(true);
  let AustralianShareMarketHandler=(elem)=>{
    if (elem==="No"){
      setAustralianShareMarket(false)
    }
    else{
      setAustralianShareMarket(true)
    }
  }

  const [AustralianSharePortfolio, setAustralianSharePortfolio] = useState(false);
  const [AustralianSharePortfolioshow, setAustralianSharePortfolioShow] = useState(false);
  const AustralianSharePortfoliohandleClose = () => setAustralianSharePortfolioShow(false);
  const AustralianSharePortfoliohandleShow = () => setAustralianSharePortfolioShow(true);
  let AustralianSharePortfolioHandler=(elem)=>{
    if (elem==="No"){
      setAustralianSharePortfolio(false)
    }
    else{
      setAustralianSharePortfolio(true)
    }
  }



  const [ManagedFunds, setManagedFunds] = useState(false);
  const [ManagedFundsshow, setManagedFundsShow] = useState(false);
  const ManagedFundshandleClose = () => setManagedFundsShow(false);
  const ManagedFundshandleShow = () => setManagedFundsShow(true);
  let ManagedFundsHandler=(elem)=>{
    if (elem==="No"){
      setManagedFunds(false)
    }
    else{
      setManagedFunds(true)
    }
  }

  const [ManagedFundsPortfolio, setManagedFundsPortfolio] = useState(false);
  const [ManagedFundsPortfolioshow, setManagedFundsPortfolioShow] = useState(false);
  const ManagedFundsPortfoliohandleClose = () => setManagedFundsPortfolioShow(false);
  const ManagedFundsPortfoliohandleShow = () => setManagedFundsPortfolioShow(true);
  let ManagedFundsPortfolioHandler=(elem)=>{
    if (elem==="No"){
      setManagedFundsPortfolio(false)
    }
    else{
      setManagedFundsPortfolio(true)
    }
  }

  const [InvestmentBonds, setInvestmentBonds] = useState(false);
  const [InvestmentBondsshow, setInvestmentBondsShow] = useState(false);
  const InvestmentBondshandleClose = () => setInvestmentBondsShow(false);
  const InvestmentBondshandleShow = () => setInvestmentBondsShow(true);
  let InvestmentBondsHandler=(elem)=>{
    if (elem==="No"){
      setInvestmentBonds(false)
    }
    else{
      setInvestmentBonds(true)
    }
  }

  const [Others, setOthers] = useState(false);
  const [Othersshow, setOthersShow] = useState(false);
  const OthershandleClose = () => setOthersShow(false);
  const OthershandleShow = () => setOthersShow(true);
  let OthersHandler=(elem)=>{
    if (elem==="No"){
      setOthers(false)
    }
    else{
      setOthers(true)
    }
  }

  const [InvestmentProperties, setInvestmentProperties] = useState(false);
  const [InvestmentPropertiesshow, setInvestmentPropertiesShow] = useState(false);
  const InvestmentPropertieshandleClose = () => setInvestmentPropertiesShow(false);
  const InvestmentPropertieshandleShow = () => setInvestmentPropertiesShow(true);
  let InvestmentPropertiesHandler=(elem)=>{
    if (elem==="No"){
      setInvestmentProperties(false)
    }
    else{
      setInvestmentProperties(true)
    }
  }

  const [InvestmentProperties2, setInvestmentProperties2] = useState(false);
  const [InvestmentProperties2show, setInvestmentProperties2Show] = useState(false);
  const InvestmentProperties2handleClose = () => setInvestmentProperties2Show(false);
  const InvestmentProperties2handleShow = () => setInvestmentProperties2Show(true);
  let InvestmentProperties2Handler=(elem)=>{
    if (elem==="No"){
      setInvestmentProperties2(false)
    }
    else{
      setInvestmentProperties2(true)
    }
  }

  let phonePattern=/^[1-9][0-9]{9}$/;
  let letters = /^[a-zA-Z ]*$/;


  let Client_initialValues={
    BankCurrentValue: '',
    BankFinancialInstitution: '',
    BankIncomePA: '',
    BankIncomePAType: '',
    BankIncomeinDollars: '',
    BankRegularSavings: '',
    BankReinvestedIncome: 'No',
    
    Bank2CurrentValue: '',
    Bank2FinancialInstitution: '',
    Bank2IncomePA: '',
    Bank2IncomePAType: '',
    Bank2IncomeinDollars: '',
    Bank2RegularSavings: '',
    Bank2ReinvestedIncome: 'No',


    TermDepositCurrentValue: '',
    TermDepositFinancialInstitution: '',
    TermDepositIncomePA: '',
    TermDepositIncomePAType: '',
    TermDepositIncomeinDollars: '',
    TermDepositRegularSavings: '',
    TermDepositReinvestedIncome: 'No',
    
    TermDeposit2CurrentValue: '',
    TermDeposit2FinancialInstitution: '',
    TermDeposit2IncomePA: '',
    TermDeposit2IncomePAType: '',
    TermDeposit2IncomeinDollars: '',
    TermDeposit2RegularSavings: '',
    TermDeposit2ReinvestedIncome: 'No',

    AustralianMarketInvestmentName: '',
    AustralianMarketNumberOfShares: '',
    AustralianMarketSharePrice: '',
    AustralianMarketTotalShareValue: '',
    AustralianMarketCostBase: '',
    AustralianMarketPurchaseDate: '',
    AustralianMarketIncomePA: '',
    AustralianMarketIncomePAType: '',
    AustralianMarketTotalIncomePA: '',
    AustralianMarketFrankedAmount: '',
    AustralianMarketReinvestedIncome: 'No',
    AustralianMarketRegInvestments: '',

    AustralianPortfolioLoanType: '',
    AustralianPortfolioCurrentBalance: '',
    AustralianPortfolioLender: '',
    AustralianInterestRatePA: '',
    AustralianPortfolioLoanTerm: '',
    AustralianPortfolioLoanType2: '',
    AustralianPortfolioDeductibleLoanAmount: '',
    AustralianPortfolioYearRemaining: '',

    ManagedFundsPlatformName: '',
    ManagedFundsInvestmentName: '',
    ManagedFundsNumberOfShares: '',
    ManagedFundsSharePrice: '',
    ManagedFundsCurrentValue: '',
    ManagedFundsOriginalInvestment: '',
    ManagedFundsPurchaseDate: '',
    ManagedFundsIncomePA: '',
    ManagedFundsIncomePAType: '',
    ManagedFundsTotalIncomePA: '',
    ManagedFundsReinvestedIncome: 'No',
    ManagedFundsRegInvestments: '',

    ManagedFundsPortfolioLoanType: '',
    ManagedFundsPortfolioCurrentBalance: '',
    ManagedFundsPortfolioLender: '',
    ManagedFundsPortfolioInterestRatePA: '',
    ManagedFundsPortfolioLoanTerm: '',
    ManagedFundsPortfolioLoanType2: '',
    ManagedFundsPortfolioDeductibleLoanAmount: '',
    ManagedFundsPortfolioYearRemaining: '',

    InvestmentBondsPlatformName: '',
    InvestmentBondsInvestmentName: '',
    InvestmentBondsNumberOfShares: '',
    InvestmentBondsSharePrice: '',
    InvestmentBondsCurrentValue: '',
    InvestmentBondsOriginalInvestment: '',
    InvestmentBondsPurchaseDate: '',
    InvestmentBondsIncomePA: '',
    InvestmentBondsIncomePAType: '',
    InvestmentBondsTotalIncomePA: '',
    InvestmentBondsReinvestedIncome: 'No',
    InvestmentBondsRegInvestments: '',

    OtherInvestmentName: '',
    OtherCurrentValue: '',
    OtherCostBase: '',
    OtherPurchaseDate: '',
    OtherIncomePA: '',
    OtherIncomePAType: '',
    OtherTotalIncomePA: '',
    OtherIncomePAType: '',
    OtherReinvestedIncome: 'No',
    OtherRegularInvestmentsPA: '',

    OtherInvestmentName2: '',
    OtherCurrentValue2: '',
    OtherCostBase2: '',
    OtherPurchaseDate2: '',
    OtherIncomePA2: '',
    OtherIncomePAType2: '',
    OtherTotalIncomePA2: '',
    OtherIncomePAType2: '',
    OtherReinvestedIncome2: 'No',
    OtherRegularInvestmentsPA2: '',

    InvestmentPropertiesCurrentValue: '',
    InvestmentPropertiesClientOwnership: '',
    InvestmentPropertiesCostBase: '',
    InvestmentPropertiesAddress: '',
    InvestmentPropertiesPostcode: '',
    InvestmentPropertiesRentalIncome: '',
    InvestmentPropertiesFrequency: '',
    InvestmentPropertiesTotalAnnualIncome: '',
    InvestmentPropertiesExpensesPA: '',
    InvestmentPropertiesLoanAttached: 'No',
    InvestmentPropertiesCurrentBalance: '',
    InvestmentPropertiesClientBorrowing: '',
    InvestmentPropertiesLender: '',
    InvestmentPropertiesRepaymentAmount: '',
    InvestmentPropertiesFrequency2: '',
    InvestmentPropertiesAnnualRepayment: '',
    InvestmentPropertiesInterestRatePA: '',
    InvestmentPropertiesLoanTerm: '',
    InvestmentPropertiesLoanType: '',
    InvestmentPropertiesDebtLoanAmount: '',
    InvestmentPropertiesYearsRemaining: ''
  }

  let Client_validationSchema = Yup.object({
    BankCurrentValue: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0) ,
    BankFinancialInstitution: Yup.string() ,
    BankIncomePA: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0),
    BankIncomePAType: Yup.string(),
    BankIncomeinDollars: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0) ,
    BankRegularSavings: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0) ,

    Bank2CurrentValue: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0) ,
    Bank2FinancialInstitution: Yup.string() ,
    Bank2IncomePA: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0),
    Bank2IncomePAType: Yup.string(),
    Bank2IncomeinDollars: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0) ,
    Bank2RegularSavings: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0) ,



    TermDepositCurrentValue: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0) ,
    TermDepositFinancialInstitution: Yup.string() ,
    TermDepositIncomePA: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0),
    TermDepositIncomePAType: Yup.string(),
    TermDepositIncomeinDollars: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0) ,
    TermDepositRegularSavings: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0) ,

    TermDeposit2CurrentValue: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0) ,
    TermDeposit2FinancialInstitution: Yup.string() ,
    TermDeposit2IncomePA: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0),
    TermDeposit2IncomePAType: Yup.string(),
    TermDeposit2IncomeinDollars: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0) ,
    TermDeposit2RegularSavings: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0) ,



    AustralianMarketInvestmentName: Yup.string(),
    AustralianMarketNumberOfShares: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0),
    AustralianMarketSharePrice: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0),
    AustralianMarketTotalShareValue: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0),
    AustralianMarketCostBase: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0),
    AustralianMarketPurchaseDate: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0),
    AustralianMarketIncomePA: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0),
    AustralianMarketIncomePAType: Yup.string(),
    AustralianMarketTotalIncomePA: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0),
    AustralianMarketFrankedAmount: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0),
    AustralianMarketRegInvestments: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0),

    AustralianPortfolioLoanType: Yup.string(),
    AustralianPortfolioCurrentBalance: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0),
    AustralianPortfolioLender: Yup.string(),
    AustralianInterestRatePA: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0),
    AustralianPortfolioLoanTerm: Yup.string(),
    AustralianPortfolioLoanType2: Yup.string(),
    AustralianPortfolioDeductibleLoanAmount: Yup.string(),
    AustralianPortfolioYearRemaining: Yup.string(),

    ManagedFundsPlatformName: Yup.string(),
    ManagedFundsInvestmentName: Yup.string(),
    ManagedFundsNumberOfShares: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0),
    ManagedFundsSharePrice: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0),
    ManagedFundsCurrentValue: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0),
    ManagedFundsOriginalInvestment: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0),
    ManagedFundsPurchaseDate: Yup.string(),
    ManagedFundsIncomePA: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0),
    ManagedFundsIncomePAType: Yup.string(),
    ManagedFundsTotalIncomePA: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0),
    ManagedFundsRegInvestments: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0),

    ManagedFundsPortfolioLoanType: Yup.string(),
    ManagedFundsPortfolioCurrentBalance: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0),
    ManagedFundsPortfolioLender: Yup.string(),
    ManagedFundsPortfolioInterestRatePA: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0),
    ManagedFundsPortfolioLoanTerm: Yup.string(),
    ManagedFundsPortfolioLoanType2: Yup.string(),
    ManagedFundsPortfolioDeductibleLoanAmount: Yup.string(),
    ManagedFundsPortfolioYearRemaining: Yup.string(),

    InvestmentBondsPlatformName: Yup.string(),
    InvestmentBondsInvestmentName: Yup.string(),
    InvestmentBondsNumberOfShares: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0),
    InvestmentBondsSharePrice: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0),
    InvestmentBondsCurrentValue: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0),
    InvestmentBondsOriginalInvestment: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0),
    InvestmentBondsPurchaseDate: Yup.string(),
    InvestmentBondsIncomePA: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0),
    InvestmentBondsIncomePAType: Yup.string(),
    InvestmentBondsTotalIncomePA: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0),
    InvestmentBondsRegInvestments: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0),

    OtherInvestmentName: Yup.string(),
    OtherCurrentValue: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0),
    OtherCostBase: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0),
    OtherPurchaseDate: Yup.string(),
    OtherIncomePA: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0),
    OtherIncomePAType: Yup.string(),
    // OtherTotalIncomePA: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0),
    OtherIncomePAType: Yup.string(),
    OtherRegularInvestmentsPA: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0),

    OtherInvestmentName2: Yup.string(),
    OtherCurrentValue2: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0),
    OtherCostBase2: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0)
    .test(
      "Is positive?",
      "Cost Base must be a positive value",

      (value) => value > 0
    ),
    OtherPurchaseDate2: Yup.string(),
    OtherIncomePA2: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0),
    OtherIncomePAType2: Yup.string(),
    // OtherTotalIncomePA2: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0),
    OtherIncomePAType2: Yup.string(),
    OtherRegularInvestmentsPA2: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0),

    InvestmentPropertiesCurrentValue: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0),
    InvestmentPropertiesClientOwnership: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0),
    InvestmentPropertiesCostBase: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0),
    InvestmentPropertiesAddress: Yup.string(),
    InvestmentPropertiesPostcode: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0),
    InvestmentPropertiesRentalIncome: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0),
    InvestmentPropertiesFrequency: Yup.string(),
    InvestmentPropertiesTotalAnnualIncome: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0),
    InvestmentPropertiesExpensesPA: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0),
    InvestmentPropertiesCurrentBalance: Yup.number().when('InvestmentPropertiesLoanAttached',{
      is: val => val && val.length === 3,
      then: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0),
      otherwise: Yup.number().notRequired()
    }),
    InvestmentPropertiesClientBorrowing: Yup.number().when('InvestmentPropertiesLoanAttached',{
      is: val => val && val.length === 3,
      then: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0),
      otherwise: Yup.number().notRequired()
    }),
    InvestmentPropertiesLender: Yup.string().when('InvestmentPropertiesLoanAttached',{
      is: val => val && val.length === 3,
      then: Yup.string(),
      otherwise: Yup.string().notRequired()
    }),
    InvestmentPropertiesRepaymentAmount: Yup.number().when('InvestmentPropertiesLoanAttached',{
      is: val => val && val.length === 3,
      then: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0),
      otherwise: Yup.number().notRequired()
    }),
    InvestmentPropertiesFrequency2: Yup.string().when('InvestmentPropertiesLoanAttached',{
      is: val => val && val.length === 3,
      then: Yup.string(),
      otherwise: Yup.string().notRequired()
    }),
    InvestmentPropertiesAnnualRepayment: Yup.number().when('InvestmentPropertiesLoanAttached',{
      is: val => val && val.length === 3,
      then: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0),
      otherwise: Yup.number().notRequired()
    }),
    InvestmentPropertiesInterestRatePA: Yup.number().when('InvestmentPropertiesLoanAttached',{
      is: val => val && val.length === 3,
      then: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0),
      otherwise: Yup.number().notRequired()
    }),
    InvestmentPropertiesLoanTerm: Yup.string().when('InvestmentPropertiesLoanAttached',{
      is: val => val && val.length === 3,
      then: Yup.string(),
      otherwise: Yup.string().notRequired()
    }),
    InvestmentPropertiesLoanType: Yup.string().when('InvestmentPropertiesLoanAttached',{
      is: val => val && val.length === 3,
      then: Yup.string(),
      otherwise: Yup.string().notRequired()
    }),
    InvestmentPropertiesDebtLoanAmount: Yup.number().when('InvestmentPropertiesLoanAttached',{
      is: val => val && val.length === 3,
      then: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0),
      otherwise: Yup.number().notRequired()
    }),
    InvestmentPropertiesYearsRemaining: Yup.string().when('InvestmentPropertiesLoanAttached',{
      is: val => val && val.length === 3,
      then: Yup.string(),
      otherwise: Yup.string().notRequired()
    })
  })

  let BankAccount_onSubmit = (values) => {
    
    let BankDetails = {
      Email: localStorage.getItem("ClientEmail"),
      BankCurrentValue: values.BankCurrentValue,
      BankFinancialInstitution: values.BankFinancialInstitution,
      BankIncomePA: values.BankIncomePA,
      BankIncomePAType: values.BankIncomePAType,
      BankIncomeinDollars: values.BankIncomeinDollars,
      BankRegularSavings: values.BankRegularSavings,
      BankReinvestedIncome: values.BankReinvestedIncome,
      
      Bank2CurrentValue: values.Bank2CurrentValue,
      Bank2FinancialInstitution: values.Bank2FinancialInstitution,
      Bank2IncomePA: values.Bank2IncomePA,
      Bank2IncomePAType: values.Bank2IncomePAType,
      Bank2IncomeinDollars: values.Bank2IncomeinDollars,
      Bank2RegularSavings: values.Bank2RegularSavings,
      Bank2ReinvestedIncome: values.Bank2ReinvestedIncome
    }

    setBankAccountList([BankDetails])
    // BankhandleClose();

    axios
    .post('http://localhost:7000/Client-BankAccounts/Add-Client-BankAccounts', BankDetails)
    .then((res) => console.log("Bank Accounts Added Successfully!"))
    console.log(BankDetails)

  }

  let TermDeposit_onSubmit = (values) => {
    
    let TermDepositDetails = {
      Email: localStorage.getItem("ClientEmail"),
      TermDepositCurrentValue: values.TermDepositCurrentValue,
      TermDepositFinancialInstitution: values.TermDepositFinancialInstitution,
      TermDepositIncomePA: values.TermDepositIncomePA,
      TermDepositIncomePAType: values.TermDepositIncomePAType,
      TermDepositIncomeinDollars: values.TermDepositIncomeinDollars,
      TermDepositRegularSavings: values.TermDepositRegularSavings,
      TermDepositReinvestedIncome: values.TermDepositReinvestedIncome,
      
      TermDeposit2CurrentValue: values.TermDeposit2CurrentValue,
      TermDeposit2FinancialInstitution: values.TermDeposit2FinancialInstitution,
      TermDeposit2IncomePA: values.TermDeposit2IncomePA,
      TermDeposit2IncomePAType: values.TermDeposit2IncomePAType,
      TermDeposit2IncomeinDollars: values.TermDeposit2IncomeinDollars,
      TermDeposit2RegularSavings: values.TermDeposit2RegularSavings,
      TermDeposit2ReinvestedIncome: values.TermDeposit2ReinvestedIncome
    }

    setTermDepositList([TermDepositDetails])
    TermDeposithandleClose();

    axios
    .post('http://localhost:7000/Client-TermDeposit/Add-Client-TermDeposit', TermDepositDetails)
    .then((res) => console.log("Term Deposit Added Successfully!"))
    console.log(TermDepositDetails)

  }

  let AustralianShareMarket_onSubmit = (values) => {

    let AustralianShareMarketDetails = {
      Email: localStorage.getItem("ClientEmail"),
      AustralianMarketInvestmentName: values.AustralianMarketInvestmentName,
      AustralianMarketNumberOfShares: values.AustralianMarketNumberOfShares,
      AustralianMarketSharePrice: values.AustralianMarketSharePrice,
      AustralianMarketTotalShareValue: values.AustralianMarketTotalShareValue,
      AustralianMarketCostBase: values.AustralianMarketCostBase,
      AustralianMarketPurchaseDate: values.AustralianMarketPurchaseDate,
      AustralianMarketIncomePA: values.AustralianMarketIncomePA,
      AustralianMarketIncomePAType: values.AustralianMarketIncomePAType,
      AustralianMarketTotalIncomePA: values.AustralianMarketTotalIncomePA,
      AustralianMarketFrankedAmount: values.AustralianMarketFrankedAmount,
      AustralianMarketReinvestedIncome: values.AustralianMarketReinvestedIncome,
      AustralianMarketRegInvestments: values.AustralianMarketRegInvestments,
    }

    setAustralianShareMarketList([AustralianShareMarketDetails])
    AustralianShareMarkethandleClose();

    axios
    .post('http://localhost:7000/Client-Australian-Market-Share/Add-Client-Australian-Market-Share', AustralianShareMarketDetails)
    .then((res) => console.log("Australian Share Market Added Successfully!"))
    console.log(AustralianShareMarketDetails)
  }

  let AustralianSharePortfolio_onSubmit = (values) => {

    let AustralianSharePortfolioDetails = {    
      Email: localStorage.getItem("ClientEmail"),
      AustralianPortfolioLoanType: values.AustralianPortfolioLoanType,
      AustralianPortfolioCurrentBalance: values.AustralianPortfolioCurrentBalance,
      AustralianPortfolioLender: values.AustralianPortfolioLender,
      AustralianInterestRatePA: values.AustralianInterestRatePA,
      AustralianPortfolioLoanTerm: values.AustralianPortfolioLoanTerm,
      AustralianPortfolioLoanType2: values.AustralianPortfolioLoanType2,
      AustralianPortfolioDeductibleLoanAmount: values.AustralianPortfolioDeductibleLoanAmount,
      AustralianPortfolioYearRemaining: values.AustralianPortfolioYearRemaining,
    }

    setAustralianSharePortfolioList([AustralianSharePortfolioDetails])
    AustralianSharePortfoliohandleClose();

    axios
    .post('http://localhost:7000/Client-Australian-Share-Portfolio/Add-Client-Australian-Share-Portfolio', AustralianSharePortfolioDetails)
    .then((res) => console.log("Australian Share Portfolio Added Successfully!"))
    console.log(AustralianSharePortfolioDetails)
  }

  let ManagedFunds_onSubmit = (values) => {
    ManagedFundshandleClose();

    let ManagedFundsDetails = {
      Email: localStorage.getItem("ClientEmail"),
      ManagedFundsPlatformName: values.ManagedFundsPlatformName,
      ManagedFundsInvestmentName: values.ManagedFundsInvestmentName,
      ManagedFundsNumberOfShares: values.ManagedFundsNumberOfShares,
      ManagedFundsSharePrice: values.ManagedFundsSharePrice,
      ManagedFundsCurrentValue: values.ManagedFundsCurrentValue,
      ManagedFundsOriginalInvestment: values.ManagedFundsOriginalInvestment,
      ManagedFundsPurchaseDate: values.ManagedFundsPurchaseDate,
      ManagedFundsIncomePA: values.ManagedFundsIncomePA,
      ManagedFundsIncomePAType: values.ManagedFundsIncomePAType,
      ManagedFundsTotalIncomePA: values.ManagedFundsTotalIncomePA,
      ManagedFundsReinvestedIncome: values.ManagedFundsReinvestedIncome,
      ManagedFundsRegInvestments: values.ManagedFundsRegInvestments
    }

    setManagedFundsList([ManagedFundsDetails]);

    axios
    .post('http://localhost:7000/Client-ManagedFunds/Add-Client-ManagedFunds', ManagedFundsDetails)
    .then((res) => console.log("Managed Funds Added Successfully!"))
    console.log(ManagedFundsDetails)
  }

  let ManagedFundsPortfolio_onSubmit = (values) => {
    ManagedFundsPortfoliohandleClose();
    let ManagedFundsPortfolioDetails = {
      Email: localStorage.getItem("ClientEmail"),
      ManagedFundsPortfolioLoanType: values.ManagedFundsPortfolioLoanType,
      ManagedFundsPortfolioCurrentBalance: values.ManagedFundsPortfolioCurrentBalance,
      ManagedFundsPortfolioLender: values.ManagedFundsPortfolioLender,
      ManagedFundsPortfolioInterestRatePA: values.ManagedFundsPortfolioInterestRatePA,
      ManagedFundsPortfolioLoanTerm: values.ManagedFundsPortfolioLoanTerm,
      ManagedFundsPortfolioLoanType2: values.ManagedFundsPortfolioLoanType2,
      ManagedFundsPortfolioDeductibleLoanAmount: values.ManagedFundsPortfolioDeductibleLoanAmount,
      ManagedFundsPortfolioYearRemaining: values.ManagedFundsPortfolioYearRemaining
    }

    setManagedFundsPortfolioList([ManagedFundsPortfolioDetails])

    axios
    .post('http://localhost:7000/Client-ManagedFunds-Portfolio/Add-Client-ManagedFunds-Portfolio', ManagedFundsPortfolioDetails)
    .then((res) => console.log("Managed Funds Portfolio Added Successfully!"))
    console.log(ManagedFundsPortfolioDetails)
  }

  let InvestmentBonds_onSubmit = (values) => {

    InvestmentBondshandleClose();
    let InvestmentBondsDetails = {
      Email: localStorage.getItem("ClientEmail"),
      InvestmentBondsPlatformName: values.InvestmentBondsPlatformName,
      InvestmentBondsInvestmentName: values.InvestmentBondsInvestmentName,
      InvestmentBondsNumberOfShares: values.InvestmentBondsNumberOfShares,
      InvestmentBondsSharePrice: values.InvestmentBondsSharePrice,
      InvestmentBondsCurrentValue: values.InvestmentBondsCurrentValue,
      InvestmentBondsOriginalInvestment: values.InvestmentBondsOriginalInvestment,
      InvestmentBondsPurchaseDate: values.InvestmentBondsPurchaseDate,
      InvestmentBondsIncomePA: values.InvestmentBondsIncomePA,
      InvestmentBondsIncomePAType: values.InvestmentBondsIncomePAType,
      InvestmentBondsTotalIncomePA: values.InvestmentBondsTotalIncomePA,
      InvestmentBondsReinvestedIncome: values.InvestmentBondsReinvestedIncome,
      InvestmentBondsRegInvestments: values.InvestmentBondsRegInvestments,
    }
    setInvestmentBondsList([InvestmentBondsDetails])

    axios
    .post('http://localhost:7000/Client-InvestmentBonds/Add-Client-Investment-Bonds', InvestmentBondsDetails)
    .then((res) => console.log("Investment Bonds Added Successfully!"))
    console.log(InvestmentBondsDetails)

  }

  let InvestmentProperties_onSubmit = (values) => {
// usama
    // InvestmentPropertieshandleClose();
    let InvestmentPropertiesDetails = {
      Email: localStorage.getItem("ClientEmail"),
      InvestmentPropertiesCurrentValue: values.InvestmentPropertiesCurrentValue,
      InvestmentPropertiesClientOwnership: values.InvestmentPropertiesClientOwnership,
      InvestmentPropertiesCostBase: values.InvestmentPropertiesCostBase,
      InvestmentPropertiesAddress: values.InvestmentPropertiesAddress,
      InvestmentPropertiesPostcode: values.InvestmentPropertiesPostcode,
      InvestmentPropertiesRentalIncome: values.InvestmentPropertiesRentalIncome,
      InvestmentPropertiesFrequency: values.InvestmentPropertiesFrequency,
      InvestmentPropertiesTotalAnnualIncome: values.InvestmentPropertiesTotalAnnualIncome,
      InvestmentPropertiesExpensesPA: values.InvestmentPropertiesExpensesPA,
      InvestmentPropertiesLoanAttached: values.InvestmentPropertiesLoanAttached,
      InvestmentPropertiesCurrentBalance: values.InvestmentPropertiesCurrentBalance,
      InvestmentPropertiesClientBorrowing: values.InvestmentPropertiesClientBorrowing,
      InvestmentPropertiesLender: values.InvestmentPropertiesLender,
      InvestmentPropertiesRepaymentAmount: values.InvestmentPropertiesRepaymentAmount,
      InvestmentPropertiesFrequency2: values.InvestmentPropertiesFrequency2,
      InvestmentPropertiesAnnualRepayment: values.InvestmentPropertiesAnnualRepayment,
      InvestmentPropertiesInterestRatePA: values.InvestmentPropertiesInterestRatePA,
      InvestmentPropertiesLoanTerm: values.InvestmentPropertiesLoanTerm,
      InvestmentPropertiesLoanType: values.InvestmentPropertiesLoanType,
      InvestmentPropertiesDebtLoanAmount: values.InvestmentPropertiesDebtLoanAmount,
      InvestmentPropertiesYearsRemaining: values.InvestmentPropertiesYearsRemaining,

     
    }
    setInvestmentPropertiesList([InvestmentPropertiesDetails])

    axios
    .post('http://localhost:7000/Client-InvestmentProperties/Add-Client-Investment-Properties', InvestmentPropertiesDetails)
    .then((res) => console.log("Investment Properties Added Successfully!"))
    console.log(InvestmentPropertiesDetails)
  }

  let Others_onSubmit = (values) => {

    OthershandleClose();
    let OthersDetails = {
      Email: localStorage.getItem("ClientEmail"),
      OtherInvestmentName: values.OtherInvestmentName,
      OtherCurrentValue: values.OtherCurrentValue,
      OtherCostBase: values.OtherCostBase,
      OtherPurchaseDate: values.OtherPurchaseDate,
      OtherIncomePA: values.OtherIncomePA,
      OtherIncomePAType: values.OtherIncomePAType,
      OtherTotalIncomePA: 5000,
      OtherReinvestedIncome: values.OtherReinvestedIncome,
      OtherRegularInvestmentsPA: values.OtherRegularInvestmentsPA,
  
      OtherInvestmentName2: values.OtherInvestmentName2,
      OtherCurrentValue2: values.OtherCurrentValue2,
      OtherCostBase2: values.OtherCostBase2,
      OtherPurchaseDate2: values.OtherPurchaseDate2,
      OtherIncomePA2: values.OtherIncomePA2,
      OtherIncomePAType2: values.OtherIncomePAType2,
      OtherTotalIncomePA2: 5000,
      OtherReinvestedIncome2: values.OtherReinvestedIncome2,
      OtherRegularInvestmentsPA2: values.OtherRegularInvestmentsPA2,
    }
    setOthersList([OthersDetails])

    axios
    .post('http://localhost:7000/Client-Others/Add-Client-Others', OthersDetails)
    .then((res) => console.log("Other Investments Added Successfully!"))
    console.log(OthersDetails)
  }

  let InvestmentModal_initialValues = {
    // InvestmentModalTotalExpense: '',
    InvestmentModalCorporateFees: '',
    InvestmentModalCouncilRates: '',
    InvestmentModalLawnMoving: '',
    InvestmentModalInsurance: '',
    InvestmentModalLandTax: '',
    InvestmentModalRepairs: '',
    InvestmentModalWaterCharges: '',
    InvestmentModalOthers: '',
    InvestmentModalTelephone: '',
    InvestmentModalProfessionalFees: '',
    InvestmentModalAllOthers: ''
  }

  let InvestmentModal_validationSchema = Yup.object({
    // InvestmentModalTotalExpense: '',
    InvestmentModalCorporateFees: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0) ,
    InvestmentModalCouncilRates: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0) ,
    InvestmentModalLawnMoving: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0) ,
    InvestmentModalInsurance: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0) ,
    InvestmentModalLandTax: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0) ,
    InvestmentModalRepairs: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0) ,
    InvestmentModalWaterCharges: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0) ,
    InvestmentModalOthers: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0) ,
    InvestmentModalTelephone: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0) ,
    InvestmentModalProfessionalFees: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0) ,
    InvestmentModalAllOthers: Yup.number().test("Is positive?", "Must be a positive value", (value) => value > 0)
  })

  let InvestmentModal_onSubmit = (values) => {

    // InvestmentPropertieshandleClose();
    let InvestmentPropertiesDetails = {
      Email: localStorage.getItem("ClientEmail"),
    
      InvestmentModalTotalExpense:5000, // Read Only InvestmentModalTotalExpense
      InvestmentModalCorporateFees:values.InvestmentModalCorporateFees,
      InvestmentModalCouncilRates:values.InvestmentModalCouncilRates,
      InvestmentModalLawnMoving:values.InvestmentModalLawnMoving,
      InvestmentModalInsurance:values.InvestmentModalInsurance,
      InvestmentModalLandTax:values.InvestmentModalLandTax,
      InvestmentModalRepairs:values.InvestmentModalRepairs,
      InvestmentModalWaterCharges:values.InvestmentModalWaterCharges,
      InvestmentModalOthers:values.InvestmentModalOthers,
      InvestmentModalTelephone:values.InvestmentModalTelephone,
      InvestmentModalProfessionalFees:values.InvestmentModalProfessionalFees,
      InvestmentModalAllOthers:values.InvestmentModalAllOthers,

    }
    

    axios
    .post('http://localhost:7000/Client-InvestmentProperties/Add-Client-Investment-Properties', InvestmentPropertiesDetails)
    .then((res) => console.log("Investment Properties Added Successfully!"))
    console.log(InvestmentPropertiesDetails)

  }

  


  let initialValues={
    BankAccountRadio:'No',
    TermDepositRadio:'No',
    AustralianShareMarketRadio: 'No',
    AustralianSharePortfolioRadio: 'No',
    ManagedFundsRadio: 'No',
    ManagedFundsPortfolioRadio: 'No',
    InvestmentBondsRadio: 'No',
    InvestmentPropertiesRadio: 'No',
    OthersRadio: 'No'
  }
  let Navigate = useNavigate();
  function BackFunction(){
  Navigate('/Assets-And-Liabilities')
  }
  let onSubmit=(values)=>{
  

  let InvestmentDetails = {
    Email: localStorage.getItem("ClientEmail"),
    BankAccounts: values.BankAccountRadio,
    TermDeposits: values.TermDepositRadio,
    AustralianShareMarket: values.AustralianShareMarketRadio,
    AustralianSharePortfolio: values.AustralianSharePortfolioRadio,
    ManagedFunds: values.ManagedFundsRadio,
    ManagedFundsPortfolio: values.ManagedFundsPortfolioRadio,
    InvestmentBonds: values.InvestmentBondsRadio,
    InvestmentProperties: values.InvestmentPropertiesRadio,
    Others: values.OthersRadio,
  } 
  console.log(InvestmentDetails)

  axios
  .post('http://localhost:7000/Client-Investment/Add-Client-Investment', InvestmentDetails)
  .then((res) => console.log("Investment Added Successfully!"))

  Navigate('/Estate-Planning');
  }

  return (
    <div className='container-fluid'>
      <div className='shadow px-4 mx-4'>
        <div className='row my-5'>
      <div className='col-md-12 text-center'>
      <h3 className='mt-3'>Investments</h3>
      </div>
        </div>
      
        <div className='row my-3'>
        <div className='col-md-12'>
        <Formik initialValues={initialValues}
         onSubmit={onSubmit} enableReinitialize>
          {({ values, handleChange })=>
          <Form>
                          {/* Bank Account Details */}
                          <div className='mb-5'>
                          <h3 className="">Bank Accounts</h3>

                              {/* 1 row */}
                              <div className="row">
                            <div className="col-md-6">
                                  <div className="mb-3">
                                <label  className="form-label">
                                Do you have any Bank Accounts?
                                </label>
                              {/* switch button style */}
                                <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="BankAccountRadio"
                                id="ProfessionalAdvisors1opt1" value="Yes"
                                onClick={()=>BankAccountHandler("Yes")} 
                                onChange={handleChange}
                                checked={values.BankAccountRadio==="Yes"}
                                />
                                <label htmlFor="ProfessionalAdvisors1opt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="BankAccountRadio"
                                id="ProfessionalAdvisors1opt2" value="No"
                                onClick={()=>BankAccountHandler("No")} 
                                onChange={handleChange}
                                checked={values.BankAccountRadio==="No"}
                              />
                                <label htmlFor="ProfessionalAdvisors1opt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>



                                  
                                </div>
                                  </div>    
                            </div>
                            {BankAccount && <div className='col-md-6'>
                            <label  className="form-label">
                            Please enter the details of your Bank Accounts
                                </label>
                                <br />
                              
                              <span
                                className=" btn h-50 w-50
                                btn-outline-success "
                                onClick={BankhandleShow}
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
                                show={Bankshow}
                                onHide={BankhandleClose}
                                backdrop="static"
                                className="modal-lg"
                                keyboard={false}
                              >
                                <Modal.Header
                                  className="text-light modalBG "
                                  closeButton
                                >
                                  <Modal.Title className="fontStyle">
                                  Bank Account Details
                                    <div className="iconContainerLg">
                                <img className="img-fluid" src={notebook} alt="" />

                                </div>
                                  </Modal.Title>
                                </Modal.Header>
                              <Formik
                                initialValues={Client_initialValues}
                                // validationSchema={Client_validationSchema}
                                onSubmit={BankAccount_onSubmit}>
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
                                Bank #1
                            
                                </h3>
                            <div className="row">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="BankCurrentValue" className="form-label">Current Value</   label>
                              <Field type="number" className="form-control shadow inputDesign" 
                              id="BankCurrentValue" name='BankCurrentValue' placeholder="Current Value"/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='BankCurrentValue' />
                            </div>            
                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="BankFinancialInstitution" className="form-label">Financial Institution</   label>
                              <Field type="text" className="form-control shadow inputDesign"
                              id="BankFinancialInstitution" name='BankFinancialInstitution' placeholder="Financial Institution"/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='BankFinancialInstitution' />
                            </div>            
                            </div>

                            <div className="col-md-6">
                            <div className="mb-3">
                            <label htmlFor="BankIncomePA" className="form-label">Income P.A.</   label>
                            <div className='row'>
                            <div className='col-md-8'>
                              <Field type="number" className="form-control shadow inputDesign"
                              id="BankIncomePA" name='BankIncomePA' placeholder="Income P.A."/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='BankIncomePA' />
                            </div>
                            <div className='col-md-4'>
                            <Field
                                      as='select'
                                      name="BankIncomePAType"
                                      id="BankIncomePAType"
                                      className="form-select shadow  inputDesign"
                                    >
                                      <option value=''>Select</option>
                                      <option value="dollor">$</option>
                                      <option value="percentage">%</option>
                                    </Field>
                                    <ErrorMessage name="BankIncomePAType" component='div' className="text-danger fw-bold"/>
                            </div>
                            </div>  
                            </div>            
                            </div>

                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="BankIncomePAType" className="form-label">Income in $</   label>
                              <Field type="number" className="form-control shadow inputDesign" 
                              id="BankIncomeinDollars" name='BankIncomeinDollars' placeholder="Income in $"/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='BankIncomeinDollars' />
                            </div>            
                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="BankFinancialInstitution" className="form-label">Regular Savings</   label>
                              <Field type="number" className="form-control shadow inputDesign"
                              id="BankRegularSavings" name='BankRegularSavings' placeholder="Regular Savings"/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='BankRegularSavings' />
                            </div>            
                            </div>
                            <div className="col-md-6">
                                  <div className="mb-3">
                                <label  className="form-label">
                                Reinvestment Income
                                </label>
                              {/* switch button style */}
                                <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="BankReinvestedIncome"
                                id="BankReinvestedOpt1" value="Yes"
                                onChange={handleChange}
                                checked={values.BankReinvestedIncome==="Yes"}
                                />
                                <label htmlFor="BankReinvestedOpt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="BankReinvestedIncome"
                                id="BankReinvestedOpt2" value="No"
                                onChange={handleChange}
                                checked={values.BankReinvestedIncome==="No"}
                              />
                                <label htmlFor="BankReinvestedOpt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>



                                  
                                </div>
                                  </div>    
                            </div>

                            </div>
                            
                            </div>
                            {/* Solicitor */}

                            {/* Solicitor */}
                            <div className='my-4'>
                            <h3 className=''>
                            <div className="iconContainerLg mx-1">
                                <img className="img-fluid" src={lawyer} alt="" />

                                </div>
                                Bank #2
                            
                                </h3>
                            <div className="row">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="Bank2CurrentValue" className="form-label">Current Value</   label>
                              <Field type="number" className="form-control shadow inputDesign" 
                              id="Bank2CurrentValue" name='Bank2CurrentValue' placeholder="Current Value"/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='Bank2CurrentValue' />
                            </div>            
                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="Bank2FinancialInstitution" className="form-label">Financial Institution</   label>
                              <Field type="text" className="form-control shadow inputDesign"
                              id="Bank2FinancialInstitution" name='Bank2FinancialInstitution' placeholder="Financial Institution"/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='Bank2FinancialInstitution' />
                            </div>            
                            </div>

                            <div className="col-md-6">
                            <div className="mb-3">
                            <label htmlFor="Bank2IncomePA" className="form-label">Income P.A.</   label>
                            <div className='row'>
                            <div className='col-md-8'>
                              <Field type="number" className="form-control shadow inputDesign"
                              id="Bank2IncomePA" name='Bank2IncomePA' placeholder="Income P.A."/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='Bank2IncomePA' />
                            </div>
                            <div className='col-md-4'>
                            <Field
                                      as='select'
                                      name="Bank2IncomePAType"
                                      id="Bank2IncomePAType"
                                      className="form-select shadow  inputDesign"
                                    >
                                      <option value=''>Select</option>
                                      <option value="dollor">$</option>
                                      <option value="percentage">%</option>
                                    </Field>
                                    <ErrorMessage name="Bank2IncomePAType" component='div' className="text-danger fw-bold"/>
                            </div>
                            </div>  
                            </div>            
                            </div>

                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="Bank2IncomePAType" className="form-label">Income in $</   label>
                              <Field type="number" className="form-control shadow inputDesign" 
                              id="Bank2IncomeinDollars" name='Bank2IncomeinDollars' placeholder="Income in $"/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='Bank2IncomeinDollars' />
                            </div>            
                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="Bank2FinancialInstitution" className="form-label">Regular Savings</   label>
                              <Field type="number" className="form-control shadow inputDesign"
                              id="Bank2RegularSavings" name='Bank2RegularSavings' placeholder="Regular Savings"/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='Bank2RegularSavings' />
                            </div>            
                            </div>
                            <div className="col-md-6">
                                  <div className="mb-3">
                                <label  className="form-label">
                                Reinvestment Income
                                </label>
                              {/* switch button style */}
                              <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="Bank2ReinvestedIncome"
                                id="Bank2ReinvestedOpt1" value="Yes"
                                onChange={handleChange}
                                checked={values.Bank2ReinvestedIncome==="Yes"}
                                />
                                <label htmlFor="Bank2ReinvestedOpt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="Bank2ReinvestedIncome"
                                id="Bank2ReinvestedOpt2" value="No"
                                onChange={handleChange}
                                checked={values.Bank2ReinvestedIncome==="No"}
                              />
                                <label htmlFor="Bank2ReinvestedOpt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>



                                  
                                </div>
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
                                      onClick={BankhandleClose}
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

                              <div   className='table-responsive my-3'>
                                <table className="table table-bordered table-hover text-center">
                                    <thead className="text-light" id="tableHead">
                                      <tr>
                                        <th>Current Values</th>
                                        <th>Financial Institution</th>
                                        <th>Income</th>
                                        <th>Reinvest Income</th>  
                                      </tr>
                                    </thead>

                                <tbody>
                                
                                  {/* Bank #1  */}
                                {  BankAccountList.map((elem,index)=>{
                                    let {BankCurrentValue, BankFinancialInstitution, BankIncomePA, BankReinvestedIncome}=elem;
                                    if(BankAccountList[0].BankCurrentValue !=='' || 
                                    BankAccountList[0].BankFinancialInstitution !=='' ){
                                      return(
                                        <tr key={index}>
                                          {/* <td className='fw-bold'>Bank #1</td> */}
                                            <td>{BankCurrentValue}</td>
                                            <td>{BankFinancialInstitution}</td>
                                            <td>{BankIncomePA}</td>
                                            <td>{BankReinvestedIncome}</td>
                                            {/* <td >
                                            <button  type='btn' onClick={(e)=>deleteHandler(elem)} className='btn btn-danger btn-sm'>delete</button>
                                            <button  type='btn' onClick={(e)=>updateHandler(elem)} className='btn btn-warning btn-sm mx-2'>update</button>
                                    
                                            </td>  */}
                                        
                                        </tr>
                                        );
                                    }
                                    else{
                                
                                    }

                                  }) }
                                  {/* Bank #1  */}
                                
                                  {/* Bank #2  */}
                                {  BankAccountList.map((elem,index)=>{
                                    let {Bank2CurrentValue, Bank2FinancialInstitution, Bank2IncomePA, Bank2ReinvestedIncome}=elem;
                                    if(BankAccountList[0].Bank2CurrentValue !=='' || 
                                    BankAccountList[0].Bank2FinancialInstitution !=='' ){
                                      return(
                                        <tr key={index}>
                                          {/* <td className='fw-bold'>Bank #1</td> */}
                                            <td>{Bank2CurrentValue}</td>
                                            <td>{Bank2FinancialInstitution}</td>
                                            <td>{Bank2IncomePA}</td>
                                            <td>{Bank2ReinvestedIncome}</td>
                                            {/* <td >
                                            <button  type='btn' onClick={(e)=>deleteHandler(elem)} className='btn btn-danger btn-sm'>delete</button>
                                            <button  type='btn' onClick={(e)=>updateHandler(elem)} className='btn btn-warning btn-sm mx-2'>update</button>
                                    
                                            </td>  */}
                                        
                                        </tr>
                                        );
                                    }
                                    else{
                                
                                    }

                                  }) }
                                  {/* Bank #2  */}

                                </tbody>
                                </table>
                               </div>
                          </div>
                          {/* Bank Account Details */}



                          {/* Term Deposit Details */}
                          <div className='mb-5'>
                          <h3 className="">Term Deposit</h3>

                              {/* 1 row */}
                              <div className="row">
                            <div className="col-md-6">
                                  <div className="mb-3">
                                <label  className="form-label">
                                Do you have any Term Deposit?
                                </label>
                              {/* switch button style */}
                                <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="TermDepositRadio"
                                id="TermDepositOpt1" value="Yes"
                                onClick={()=>TermDepositHandler("Yes")} 
                                onChange={handleChange}
                                checked={values.TermDepositRadio==="Yes"}
                                />
                                <label htmlFor="TermDepositOpt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="TermDepositRadio"
                                id="TermDepositOpt2" value="No"
                                onClick={()=>TermDepositHandler("No")} 
                                onChange={handleChange}
                                checked={values.TermDepositRadio==="No"}
                              />
                                <label htmlFor="TermDepositOpt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>



                                  
                                </div>
                                  </div>    
                            </div>
                            {TermDeposit && <div className='col-md-6'>
                            <label  className="form-label">
                            Please enter the details of your TermDeposit Accounts
                                </label>
                                <br />
                              
                              <span
                                className=" btn h-50 w-50
                                btn-outline-success "
                                onClick={TermDeposithandleShow}
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
                                show={TermDepositshow}
                                onHide={TermDeposithandleClose}
                                backdrop="static"
                                className="modal-lg"
                                keyboard={false}
                              >
                                <Modal.Header
                                  className="text-light modalBG "
                                  closeButton
                                >
                                  <Modal.Title className="fontStyle">
                                  TermDeposit Account Details
                                    <div className="iconContainerLg">
                                <img className="img-fluid" src={notebook} alt="" />

                                </div>
                                  </Modal.Title>
                                </Modal.Header>
                              <Formik
                                initialValues={Client_initialValues}
                                // validationSchema={Client_validationSchema}
                                onSubmit={TermDeposit_onSubmit}>
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
                                TermDeposit #1
                            
                                </h3>
                            <div className="row">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="TermDepositCurrentValue" className="form-label">Current Value</   label>
                              <Field type="number" className="form-control shadow inputDesign" 
                              id="TermDepositCurrentValue" name='TermDepositCurrentValue' placeholder="Current Value"/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='TermDepositCurrentValue' />
                            </div>            
                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="TermDepositFinancialInstitution" className="form-label">Financial Institution</   label>
                              <Field type="text" className="form-control shadow inputDesign"
                              id="TermDepositFinancialInstitution" name='TermDepositFinancialInstitution' placeholder="Financial Institution"/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='TermDepositFinancialInstitution' />
                            </div>            
                            </div>

                            <div className="col-md-6">
                            <div className="mb-3">
                            <label htmlFor="TermDepositIncomePA" className="form-label">Income P.A.</   label>
                            <div className='row'>
                            <div className='col-md-8'>
                              <Field type="number" className="form-control shadow inputDesign"
                              id="TermDepositIncomePA" name='TermDepositIncomePA' placeholder="Income P.A."/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='TermDepositIncomePA' />
                            </div>
                            <div className='col-md-4'>
                            <Field
                                      as='select'
                                      name="TermDepositIncomePAType"
                                      id="TermDepositIncomePAType"
                                      className="form-select shadow  inputDesign"
                                    >
                                      <option value=''>Select</option>
                                      <option value="dollor">$</option>
                                      <option value="percentage">%</option>
                                    </Field>
                                    <ErrorMessage name="TermDepositIncomePAType" component='div' className="text-danger fw-bold"/>
                            </div>
                            </div>  
                            </div>            
                            </div>

                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="TermDepositIncomePAType" className="form-label">Income in $</   label>
                              <Field type="text" className="form-control shadow inputDesign" 
                              id="TermDepositIncomeinDollars" name='TermDepositIncomeinDollars' placeholder="Income in $"/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='TermDepositIncomeinDollars' />
                            </div>            
                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="TermDepositFinancialInstitution" className="form-label">Regular Savings</   label>
                              <Field type="number" className="form-control shadow inputDesign"
                              id="TermDepositRegularSavings" name='TermDepositRegularSavings' placeholder="Regular Savings"/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='TermDepositRegularSavings' />
                            </div>            
                            </div>
                            <div className="col-md-6">
                                  <div className="mb-3">
                                <label  className="form-label">
                                Reinvestment Income
                                </label>
                              {/* switch button style */}
                                <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="TermDepositReinvestedIncome"
                                id="TermDepositReinvestedOpt1" value="Yes"
                                onChange={handleChange}
                                checked={values.TermDepositReinvestedIncome==="Yes"}
                                />
                                <label htmlFor="TermDepositReinvestedOpt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="TermDepositReinvestedIncome"
                                id="TermDepositReinvestedOpt2" value="No"
                                onChange={handleChange}
                                checked={values.TermDepositReinvestedIncome==="No"}
                              />
                                <label htmlFor="TermDepositReinvestedOpt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>



                                  
                                </div>
                                  </div>    
                            </div>

                            </div>
                            
                            </div>
                            {/* Solicitor */}

                            {/* Solicitor */}
                            <div className='my-4'>
                            <h3 className=''>
                            <div className="iconContainerLg mx-1">
                                <img className="img-fluid" src={lawyer} alt="" />

                                </div>
                                TermDeposit #2
                            
                                </h3>
                            <div className="row">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="TermDeposit2CurrentValue" className="form-label">Current Value</   label>
                              <Field type="number" className="form-control shadow inputDesign" 
                              id="TermDeposit2CurrentValue" name='TermDeposit2CurrentValue' placeholder="Current Value"/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='TermDeposit2CurrentValue' />
                            </div>            
                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="TermDeposit2FinancialInstitution" className="form-label">Financial Institution</   label>
                              <Field type="text" className="form-control shadow inputDesign"
                              id="TermDeposit2FinancialInstitution" name='TermDeposit2FinancialInstitution' placeholder="Financial Institution"/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='TermDeposit2FinancialInstitution' />
                            </div>            
                            </div>

                            <div className="col-md-6">
                            <div className="mb-3">
                            <label htmlFor="TermDeposit2IncomePA" className="form-label">Income P.A.</   label>
                            <div className='row'>
                            <div className='col-md-8'>
                              <Field type="number" className="form-control shadow inputDesign"
                              id="TermDeposit2IncomePA" name='TermDeposit2IncomePA' placeholder="Income P.A."/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='TermDeposit2IncomePA' />
                            </div>
                            <div className='col-md-4'>
                            <Field
                                      as='select'
                                      name="TermDeposit2IncomePAType"
                                      id="TermDeposit2IncomePAType"
                                      className="form-select shadow  inputDesign"
                                    >
                                      <option value=''>Select</option>
                                      <option value="dollor">$</option>
                                      <option value="percentage">%</option>
                                    </Field>
                                    <ErrorMessage name="TermDeposit2IncomePAType" component='div' className="text-danger fw-bold"/>
                            </div>
                            </div>  
                            </div>            
                            </div>

                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="TermDeposit2IncomePAType" className="form-label">Income in $</   label>
                              <Field type="number" className="form-control shadow inputDesign" 
                              id="TermDeposit2IncomeinDollars" name='TermDeposit2IncomeinDollars' placeholder="Income in $"/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='TermDeposit2IncomeinDollars' />
                            </div>            
                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="TermDeposit2FinancialInstitution" className="form-label">Regular Savings</   label>
                              <Field type="number" className="form-control shadow inputDesign"
                              id="TermDeposit2RegularSavings" name='TermDeposit2RegularSavings' placeholder="Regular Savings"/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='TermDeposit2RegularSavings' />
                            </div>            
                            </div>
                            <div className="col-md-6">
                                  <div className="mb-3">
                                <label  className="form-label">
                                Reinvestment Income
                                </label>
                              {/* switch button style */}
                              <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="TermDeposit2ReinvestedIncome"
                                id="TermDeposit2ReinvestedOpt1" value="Yes"
                                onChange={handleChange}
                                checked={values.TermDeposit2ReinvestedIncome==="Yes"}
                                />
                                <label htmlFor="TermDeposit2ReinvestedOpt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="TermDeposit2ReinvestedIncome"
                                id="TermDeposit2ReinvestedOpt2" value="No"
                                onChange={handleChange}
                                checked={values.TermDeposit2ReinvestedIncome==="No"}
                              />
                                <label htmlFor="TermDeposit2ReinvestedOpt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>



                                  
                                </div>
                                  </div>    
                            </div>

                            </div>
                            
                            </div>
                            {/* Solicitor */}

                            {/* TermDeposit Account Detail Form */}
                              
                                </Modal.Body>
                                <Modal.Footer>
                                  <div className="col-md-12">
                                    <button
                                      className="float-end btn w-25  bgColor modalBtn"
                                      // onClick={TermDeposithandleClose}
                                      type='submit'
                                    >
                                      Save
                                    </button>
                                    <button
                                      className="float-end btn w-25  btn-outline  backBtn mx-3"
                                      onClick={TermDeposithandleClose}
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

                              <div   className='table-responsive my-3'>
                                <table className="table table-bordered table-hover text-center">
                                    <thead className="text-light" id="tableHead">
                                      <tr>
                                        <th>Current Values</th>
                                        <th>Financial Institution</th>
                                        <th>Income</th>
                                        <th>Reinvest Income</th>  
                                      </tr>
                                    </thead>

                                <tbody>
                                
                                  {/* Term Deposit #1  */}
                                {  TermDepositList.map((elem,index)=>{
                                    let {TermDepositCurrentValue, TermDepositFinancialInstitution, TermDepositIncomePA, TermDepositReinvestedIncome}=elem;
                                    if(TermDepositList[0].TermDepositCurrentValue !=='' || 
                                    TermDepositList[0].TermDepositFinancialInstitution !=='' ){
                                      return(
                                        <tr key={index}>
                                          {/* <td className='fw-bold'>Bank #1</td> */}
                                            <td>{TermDepositCurrentValue}</td>
                                            <td>{TermDepositFinancialInstitution}</td>
                                            <td>{TermDepositIncomePA}</td>
                                            <td>{TermDepositReinvestedIncome}</td>
                                            {/* <td >
                                            <button  type='btn' onClick={(e)=>deleteHandler(elem)} className='btn btn-danger btn-sm'>delete</button>
                                            <button  type='btn' onClick={(e)=>updateHandler(elem)} className='btn btn-warning btn-sm mx-2'>update</button>
                                    
                                            </td>  */}
                                        
                                        </tr>
                                        );
                                    }
                                    else{
                                
                                    }

                                  }) }
                                  {/* Term Deposit #1  */}
                                
                                  {/* Term Deposit #2  */}
                                {  TermDepositList.map((elem,index)=>{
                                    let {TermDeposit2CurrentValue, TermDeposit2FinancialInstitution, TermDeposit2IncomePA, TermDeposit2ReinvestedIncome}=elem;
                                    if(TermDepositList[0].TermDeposit2CurrentValue !=='' || 
                                    TermDepositList[0].TermDeposit2FinancialInstitution !=='' ){
                                      return(
                                        <tr key={index}>
                                          {/* <td className='fw-bold'>Bank #1</td> */}
                                            <td>{TermDeposit2CurrentValue}</td>
                                            <td>{TermDeposit2FinancialInstitution}</td>
                                            <td>{TermDeposit2IncomePA}</td>
                                            <td>{TermDeposit2ReinvestedIncome}</td>
                                            {/* <td >
                                            <button  type='btn' onClick={(e)=>deleteHandler(elem)} className='btn btn-danger btn-sm'>delete</button>
                                            <button  type='btn' onClick={(e)=>updateHandler(elem)} className='btn btn-warning btn-sm mx-2'>update</button>
                                    
                                            </td>  */}
                                        
                                        </tr>
                                        );
                                    }
                                    else{
                                
                                    }

                                  }) }
                                  {/* Term Deposit #2  */}

                                </tbody>
                                </table>
                               </div>
                          </div>
                          {/* Term Deposit Details */}



                          {/* Australian Share Market Details */}
                          <div className='mb-5'>
                          <h3 className="">Australian Share Market</h3>

                          {/* --------------------------------------------- */}     
                              {/* 1 row */}
                              <div className="row mb-3">
                            <div className="col-md-6">
                                  <div className="mb-3">
                                <label  className="form-label">
                                Do you have any Australian Share?
                                </label>
                              {/* switch button style */}
                                <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="AustralianShareMarketRadio"
                                id="AustralianShareMarketOpt1" value="Yes"
                                onClick={()=>AustralianShareMarketHandler("Yes")} 
                                onChange={handleChange}
                                checked={values.AustralianShareMarketRadio==="Yes"}
                                />
                                <label htmlFor="AustralianShareMarketOpt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="AustralianShareMarketRadio"
                                id="AustralianShareMarketOpt2" value="No"
                                onClick={()=>AustralianShareMarketHandler("No")} 
                                onChange={handleChange}
                                checked={values.AustralianShareMarketRadio==="No"}
                              />
                                <label htmlFor="AustralianShareMarketOpt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>



                                  
                                </div>
                                  </div>    
                            </div>
                            {AustralianShareMarket && <div className='col-md-6'>
                            <label  className="form-label">
                            Please enter the details of your Australian Market Share
                                </label>
                                <br />
                              
                              <span
                                className=" btn h-50 w-50
                                btn-outline-success "
                                onClick={AustralianShareMarkethandleShow}
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
                                show={AustralianShareMarketshow}
                                onHide={AustralianShareMarkethandleClose}
                                backdrop="static"
                                className="modal-lg"
                                keyboard={false}
                              >
                                <Modal.Header
                                  className="text-light modalBG "
                                  closeButton
                                >
                                  <Modal.Title className="fontStyle">
                                Australian Market Share Details
                                    <div className="iconContainerLg">
                                <img className="img-fluid" src={notebook} alt="" />

                                </div>
                                  </Modal.Title>
                                </Modal.Header>
                              <Formik
                                initialValues={Client_initialValues}
                                // validationSchema={Client_validationSchema}
                                onSubmit={AustralianShareMarket_onSubmit}>
                              {({values , setFieldValue ,setValues,handleChange,formik})=>
                                <Form>
                                <Modal.Body>
                                    {/* Australian Share Market Form */}
                                    
                                    {/* Solicitor */}
                            <div className=' '>
                            <h3 className=''>
                            <div className="iconContainerLg mx-1">
                                <img className="img-fluid" src={lawyer} alt="" />

                                </div>
                                Australian Market Share                        
                                </h3>
                            <div className="row">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="TermDepositCurrentValue" className="form-label">Investment Name</   label>
                              <Field
                                      as='select'
                                      name="AustralianMarketInvestmentName"
                                      id="AustralianMarketInvestmentName"
                                      className="form-select shadow  inputDesign"
                                    >
                                      <option value=''>Select</option>
                                      <option value="1AL">1AL</option>
                                      <option value="3PL">3PL</option>
                                      <option value="88E">88E</option>
                                      <option value="A2M">A2M</option>
                                    </Field>
                                    <ErrorMessage name="AustralianMarketInvestmentName" component='div' className="text-danger fw-bold"/>
                            </div>            
                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="AustralianMarketNumberOfShares" className="form-label">No. of Shares</   label>
                              <Field type="number" className="form-control shadow inputDesign"
                              id="AustralianMarketNumberOfShares" name='AustralianMarketNumberOfShares' placeholder="No. of shares"/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='AustralianMarketNumberOfShares' />
                            </div>            
                            </div>

                            <div className="col-md-6">
                            <div className="mb-3">
                            <label htmlFor="TermDepositIncomePA" className="form-label">Current Share Price</   label>
                              <Field type="number" className="form-control shadow inputDesign"
                              id="AustralianMarketSharePrice" name='AustralianMarketSharePrice' placeholder="Share Price"/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='AustralianMarketSharePrice' />
                            </div>            
                            </div>

                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="TermDepositIncomePAType" className="form-label">Total Share Value</   label>
                              <Field type="number" className="form-control shadow inputDesign" 
                              id="AustralianMarketTotalShareValue" name='AustralianMarketTotalShareValue' placeholder="Income in $"/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='AustralianMarketTotalShareValue' />
                            </div>            
                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="TermDepositFinancialInstitution" className="form-label">Cost Base</   label>
                              <Field type="number" className="form-control shadow inputDesign"
                              id="AustralianMarketCostBase" name='AustralianMarketCostBase' placeholder="Cost Base"/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='AustralianMarketCostBase' />
                            </div>            
                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="TermDepositFinancialInstitution" className="form-label">Purchase Date</   label>
                              <Field type="date" className="form-control shadow inputDesign"
                              id="AustralianMarketPurchaseDate" name='AustralianMarketPurchaseDate'/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='AustralianMarketPurchaseDate' />
                            </div>            
                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                            <label htmlFor="AustralianMarketIncomePA" className="form-label">Income P.A.</   label>
                            <div className='row'>
                            <div className='col-md-8'>
                              <Field type="number" className="form-control shadow inputDesign"
                              id="AustralianMarketIncomePA" name='AustralianMarketIncomePA' placeholder="Income P.A."/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='AustralianMarketIncomePA' />
                            </div>
                            <div className='col-md-4'>
                            <Field
                                      as='select'
                                      name="AustralianMarketIncomePAType"
                                      id="AustralianMarketIncomePAType"
                                      className="form-select shadow  inputDesign"
                                    >
                                      <option value=''>Select</option>
                                      <option value="dollor">$</option>
                                      <option value="percentage">%</option>
                                    </Field>
                                    <ErrorMessage name="AustralianMarketIncomePAType" component='div' className="text-danger fw-bold"/>
                            </div>
                            </div>  
                            </div>            
                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="TermDepositFinancialInstitution" className="form-label">Total Income P.A.</   label>
                              <Field type="number" className="form-control shadow inputDesign"
                              id="AustralianMarketTotalIncomePA" name='AustralianMarketTotalIncomePA' placeholder="Total Income P.A."/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='AustralianMarketTotalIncomePA' />
                            </div>            
                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="TermDepositFinancialInstitution" className="form-label">Franked Amount %</   label>
                              <Field type="number" className="form-control shadow inputDesign"
                              id="AustralianMarketFrankedAmount" name='AustralianMarketFrankedAmount' placeholder="Total Income P.A."/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='AustralianMarketFrankedAmount' />
                            </div>            
                            </div>
                            <div className="col-md-6">
                                  <div className="mb-3">
                                <label  className="form-label">
                                Reinvestment Income
                                </label>
                              {/* switch button style */}
                                <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="AustralianMarketReinvestedIncome"
                                id="AustralianMarketReinvestedOpt1" value="Yes"
                                onChange={handleChange}
                                checked={values.AustralianMarketReinvestedIncome==="Yes"}
                                />
                                <label htmlFor="AustralianMarketReinvestedOpt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="AustralianMarketReinvestedIncome"
                                id="AustralianMarketReinvestedOpt2" value="No"
                                onChange={handleChange}
                                checked={values.AustralianMarketReinvestedIncome==="No"}
                              />
                                <label htmlFor="AustralianMarketReinvestedOpt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>



                                  
                                </div>
                                  </div>    
                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="TermDepositFinancialInstitution" className="form-label">Reg Investments P.A.</   label>
                              <Field type="number" className="form-control shadow inputDesign"
                              id="AustralianMarketRegInvestments" name='AustralianMarketRegInvestments' placeholder="Reg Investments P.A."/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='AustralianMarketRegInvestments' />
                            </div>            
                            </div>

                            </div>
                            
                            </div>
                            {/* Solicitor */}

                            {/*Australian Share Detail Form */}
                              
                                </Modal.Body>
                                <Modal.Footer>
                                  <div className="col-md-12">
                                    <button
                                      className="float-end btn w-25  bgColor modalBtn"
                                      // onClick={AustralianShareMarkethandleClose}
                                      type='submit'
                                    >
                                      Save
                                    </button>
                                    <button
                                      className="float-end btn w-25  btn-outline  backBtn mx-3"
                                      onClick={AustralianShareMarkethandleClose}
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

                              <div   className='table-responsive my-3'>
                                <table className="table table-bordered table-hover text-center">
                                    <thead className="text-light" id="tableHead">
                                      <tr>
                                        <th>Company Name</th>
                                        <th>Total Share Value</th>
                                        <th>Cost Base</th>
                                        <th>Income P.A.</th>
                                        <th>Reinvest Income</th>  
                                      </tr>
                                    </thead>

                                <tbody>
                                
                                  {/* Australian Share Market  */}
                                {  AustralianShareMarketList.map((elem,index)=>{
                                    let {AustralianMarketInvestmentName, AustralianMarketTotalShareValue, AustralianMarketCostBase, 
                                      AustralianMarketIncomePA, AustralianMarketReinvestedIncome}=elem;
                                    if(AustralianShareMarketList[0].AustralianMarketInvestmentName !=='' || 
                                    AustralianShareMarketList[0].AustralianMarketTotalShareValue !=='' ){
                                      return(
                                        <tr key={index}>
                                          {/* <td className='fw-bold'>Bank #1</td> */}
                                            <td>{AustralianMarketInvestmentName}</td>
                                            <td>{AustralianMarketTotalShareValue}</td>
                                            <td>{AustralianMarketCostBase}</td>
                                            <td>{AustralianMarketIncomePA}</td>
                                            <td>{AustralianMarketReinvestedIncome}</td>
                                            {/* <td >
                                            <button  type='btn' onClick={(e)=>deleteHandler(elem)} className='btn btn-danger btn-sm'>delete</button>
                                            <button  type='btn' onClick={(e)=>updateHandler(elem)} className='btn btn-warning btn-sm mx-2'>update</button>
                                    
                                            </td>  */}
                                        
                                        </tr>
                                        );
                                    }
                                    else{
                                
                                    }

                                  }) }
                                  {/* Australian Share Market  */}

                                </tbody>
                                </table>
                               </div>
                          
                          
                          {/* --------------------------------------------- */}
                              {/* 2 row */}
                              <div className="row mb-3">
                            <div className="col-md-6">
                                  <div className="mb-3">
                                <label  className="form-label">
                                Does your share portfolio have any loans associated with them?
                                </label>
                              {/* switch button style */}
                                <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="AustralianSharePortfolioRadio"
                                id="AustralianSharePortfolioOpt1" value="Yes"
                                onClick={()=>AustralianSharePortfolioHandler("Yes")} 
                                onChange={handleChange}
                                checked={values.AustralianSharePortfolioRadio==="Yes"}
                                />
                                <label htmlFor="AustralianSharePortfolioOpt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="AustralianSharePortfolioRadio"
                                id="AustralianSharePortfolioOpt2" value="No"
                                onClick={()=>AustralianSharePortfolioHandler("No")} 
                                onChange={handleChange}
                                checked={values.AustralianSharePortfolioRadio==="No"}
                              />
                                <label htmlFor="AustralianSharePortfolioOpt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>



                                  
                                </div>
                                  </div>    
                            </div>
                            {AustralianSharePortfolio && <div className='col-md-6'>
                            <label  className="form-label">
                            Please enter the details of your Portfolio
                                </label>
                                <br />
                              
                              <span
                                className=" btn h-50 w-50
                                btn-outline-success "
                                onClick={AustralianSharePortfoliohandleShow}
                              >
                                <div className="iconContainer mx-1">
                                <img className="img-fluid" src={plus} alt="" />

                                </div>
                                Enter Details
                              </span>
                            </div>}
                              </div>
                              {/* 2 row */}

                              <Modal
                                show={AustralianSharePortfolioshow}
                                onHide={AustralianSharePortfoliohandleClose}
                                backdrop="static"
                                className="modal-lg"
                                keyboard={false}
                              >
                                <Modal.Header
                                  className="text-light modalBG "
                                  closeButton
                                >
                                  <Modal.Title className="fontStyle">
                                  Associated Loan Details
                                    <div className="iconContainerLg">
                                <img className="img-fluid" src={notebook} alt="" />

                                </div>
                                  </Modal.Title>
                                </Modal.Header>
                              <Formik
                                initialValues={Client_initialValues}
                                // validationSchema={Client_validationSchema}
                                onSubmit={AustralianSharePortfolio_onSubmit}>
                              {({values , setFieldValue ,setValues,handleChange,formik})=>
                                <Form>
                                <Modal.Body>
                                    {/* Australian Share Market Form */}
                                    
                                    {/* Solicitor */}
                                    <div className=' '>
                                    <h3 className=''>
                                    <div className="iconContainerLg mx-1">
                                        <img className="img-fluid" src={lawyer} alt="" />

                                        </div>
                                        Portfolio Details                       
                                        </h3>
                                    <div className="row">
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="TermDepositCurrentValue" className="form-label">Type of Loan</   label>
                                      <Field
                                              as='select'
                                              name="AustralianPortfolioLoanType"
                                              id="AustralianPortfolioLoanType"
                                              className="form-select shadow  inputDesign"
                                            >
                                              <option value=''>Select</option>
                                              <option value="Investment Loan">Investment Loan</option>
                                              <option value="Margin Loan">Margin Loan</option>
                                            </Field>
                                            <ErrorMessage name="AustralianPortfolioLoanType" component='div' className="text-danger fw-bold"/>
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="AustralianPortfolioCurrentBalance" className="form-label">Current Balance</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                      id="AustralianPortfolioCurrentBalance" name='AustralianPortfolioCurrentBalance' placeholder="Current Balance"/>
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='AustralianPortfolioCurrentBalance' />
                                    </div>            
                                    </div>

                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="TermDepositIncomePA" className="form-label">Lender</   label>
                                      <Field type="text" className="form-control shadow inputDesign"
                                      id="AustralianPortfolioLender" name='AustralianPortfolioLender' placeholder="Lender"/>
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='AustralianPortfolioLender' />
                                    </div>            
                                    </div>

                                    <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="TermDepositIncomePAType" className="form-label">Interest Rate P.A.</   label>
                                      <Field type="number" className="form-control shadow inputDesign" 
                                      id="AustralianInterestRatePA" name='AustralianInterestRatePA' placeholder="Interest Rate P.A."/>
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='AustralianInterestRatePA' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="TermDepositCurrentValue" className="form-label">Loan Term (1-30 Years)</   label>
                                      <Field
                                              as='select'
                                              name="AustralianPortfolioLoanTerm"
                                              id="AustralianPortfolioLoanTerm"
                                              className="form-select shadow  inputDesign"
                                            >
                                              <option value=''>Select</option>
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
                                            <ErrorMessage name="AustralianPortfolioLoanTerm" component='div' className="text-danger fw-bold"/>
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label htmlFor="TermDepositCurrentValue" className="form-label">Loan Type</   label>
                                        <Field
                                                as='select'
                                                name="AustralianPortfolioLoanType2"
                                                id="AustralianPortfolioLoanType2"
                                                className="form-select shadow  inputDesign"
                                              >
                                                <option value=''>Select</option>
                                                <option value="I/Only">I/Only</option>
                                                <option value="P & I">P & I</option>
                                              </Field>
                                              <ErrorMessage name="AustralianPortfolioLoanType2" component='div' className="text-danger fw-bold"/>
                                      </div>            
                                      </div>
                                      <div className="col-md-6">
                                      <div className="mb-3">
                                        <label htmlFor="TermDepositCurrentValue" className="form-label">Deductible Amount of Loan %</   label>
                                        <Field name="AustralianPortfolioDeductibleLoanAmount" 
                                        placeholder='Deductible Loan Amount'
                                        id="AustralianPortfolioDeductibleLoanAmount"
                                        className="form-control shadow  inputDesign">
                                        </Field>
                                              <ErrorMessage name="AustralianPortfolioDeductibleLoanAmount" component='div' className="text-danger fw-bold"/>
                                      </div>            
                                      </div>
                                      <div className="col-md-6">
                                        <div className="mb-3">
                                          <label htmlFor="TermDepositCurrentValue" className="form-label">Year Remaining (1-30 Years)</   label>
                                          <Field
                                                  as='select'
                                                  name="AustralianPortfolioYearRemaining"
                                                  id="AustralianPortfolioYearRemaining"
                                                  className="form-select shadow  inputDesign"
                                                >
                                                <option value=''>Select</option>
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
                                                <ErrorMessage name="AustralianPortfolioYearRemaining" component='div' className="text-danger fw-bold"/>
                                        </div>            
                                        </div>

                                    </div>
                                    
                                    </div>
                                    {/* Solicitor */}

                            {/*Australian Share Detail Form */}
                              
                                </Modal.Body>
                                <Modal.Footer>
                                  <div className="col-md-12">
                                    <button
                                      className="float-end btn w-25  bgColor modalBtn"
                                      // onClick={AustralianSharePortfoliohandleClose}
                                      type='submit'
                                    >
                                      Save
                                    </button>
                                    <button
                                      className="float-end btn w-25  btn-outline  backBtn mx-3"
                                      onClick={AustralianSharePortfoliohandleClose}
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

                              <div   className='table-responsive my-3'>
                                <table className="table table-bordered table-hover text-center">
                                    <thead className="text-light" id="tableHead">
                                      <tr>
                                        <th>Type of Loan</th>
                                        <th>Current Balance</th>
                                        <th>Lender</th>
                                        <th>Interest Rate P.A.</th>  
                                      </tr>
                                    </thead>

                                <tbody>
                                
                                  {/* AustralianSharePortfolio #1  */}
                                {  AustralianSharePortfolioList.map((elem,index)=>{
                                    let {AustralianPortfolioLoanType, AustralianPortfolioCurrentBalance, 
                                      AustralianPortfolioLender, AustralianInterestRatePA}=elem;
                                    if(AustralianSharePortfolioList[0].AustralianPortfolioLoanType !=='' || 
                                    AustralianSharePortfolioList[0].AustralianPortfolioCurrentBalance !=='' ){
                                      return(
                                        <tr key={index}>
                                          {/* <td className='fw-bold'>Bank #1</td> */}
                                            <td>{AustralianPortfolioLoanType}</td>
                                            <td>{AustralianPortfolioCurrentBalance}</td>
                                            <td>{AustralianPortfolioLender}</td>
                                            <td>{AustralianInterestRatePA}</td>
                                            {/* <td >
                                            <button  type='btn' onClick={(e)=>deleteHandler(elem)} className='btn btn-danger btn-sm'>delete</button>
                                            <button  type='btn' onClick={(e)=>updateHandler(elem)} className='btn btn-warning btn-sm mx-2'>update</button>
                                    
                                            </td>  */}
                                        
                                        </tr>
                                        );
                                    }
                                    else{
                                
                                    }

                                  }) }
                                  {/* AustralianSharePortfolio #1  */}

                                </tbody>
                                </table>
                               </div>

                          </div>
                          {/* Australian Share Details */} 



                          {/* Managed Funds Details */}
                          <div className='mb-5'>
                          <h3 className="">Managed Funds</h3>

                          {/* --------------------------------------------- */}     
                              {/* 1 row */}
                              <div className="row mb-3">
                            <div className="col-md-6">
                                  <div className="mb-3">
                                <label  className="form-label">
                                Do you have any Funds?
                                </label>
                              {/* switch button style */}
                                <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="ManagedFundsRadio"
                                id="ManagedFundsOpt1" value="Yes"
                                onClick={()=>ManagedFundsHandler("Yes")} 
                                onChange={handleChange}
                                checked={values.ManagedFundsRadio==="Yes"}
                                />
                                <label htmlFor="ManagedFundsOpt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="ManagedFundsRadio"
                                id="ManagedFundsOpt2" value="No"
                                onClick={()=>ManagedFundsHandler("No")} 
                                onChange={handleChange}
                                checked={values.ManagedFundsRadio==="No"}
                              />
                                <label htmlFor="ManagedFundsOpt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>



                                  
                                </div>
                                  </div>    
                            </div>
                            {ManagedFunds && <div className='col-md-6'>
                            <label  className="form-label">
                            Please enter the details of your Managed Funds
                                </label>
                                <br />
                              
                              <span
                                className=" btn h-50 w-50
                                btn-outline-success "
                                onClick={ManagedFundshandleShow}
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
                                show={ManagedFundsshow}
                                onHide={ManagedFundshandleClose}
                                backdrop="static"
                                className="modal-lg"
                                keyboard={false}
                              >
                                <Modal.Header
                                  className="text-light modalBG "
                                  closeButton
                                >
                                  <Modal.Title className="fontStyle">
                                Managed Funds Details
                                    <div className="iconContainerLg">
                                <img className="img-fluid" src={notebook} alt="" />

                                </div>
                                  </Modal.Title>
                                </Modal.Header>
                              <Formik
                                initialValues={Client_initialValues}
                                // validationSchema={Client_validationSchema}
                                onSubmit={ManagedFunds_onSubmit}>
                              {({values , setFieldValue ,setValues,handleChange,formik})=>
                                <Form>
                                <Modal.Body>
                                    {/* Australian Share Market Form */}
                                    
                                    {/* Solicitor */}
                            <div className=' '>
                            <h3 className=''>
                            <div className="iconContainerLg mx-1">
                                <img className="img-fluid" src={lawyer} alt="" />

                                </div>
                                Managed Funds                       
                                </h3>
                            <div className="row">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="TermDepositCurrentValue" className="form-label">Platform Name</   label>
                              <Field
                                      as='select'
                                      name="ManagedFundsPlatformName"
                                      id="ManagedFundsPlatformName"
                                      className="form-select shadow  inputDesign"
                                    >
                                      <option value=''>Select</option>
                                      <option value="1AL">1AL</option>
                                      <option value="3PL">3PL</option>
                                      <option value="88E">88E</option>
                                      <option value="A2M">A2M</option>
                                    </Field>
                                    <ErrorMessage name="ManagedFundsPlatformName" component='div' className="text-danger fw-bold"/>
                            </div>            
                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="TermDepositCurrentValue" className="form-label">Investment Name</   label>
                              <Field
                                      as='select'
                                      name="ManagedFundsInvestmentName"
                                      id="ManagedFundsInvestmentName"
                                      className="form-select shadow  inputDesign"
                                    >
                                      <option value=''>Select</option>
                                      <option value="1AL">1AL</option>
                                      <option value="3PL">3PL</option>
                                      <option value="88E">88E</option>
                                      <option value="A2M">A2M</option>
                                    </Field>
                                    <ErrorMessage name="ManagedFundsInvestmentName" component='div' className="text-danger fw-bold"/>
                            </div>            
                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="ManagedFundsNumberOfShares" className="form-label">No. of Unit/Shares</   label>
                              <Field type="number" className="form-control shadow inputDesign"
                              id="ManagedFundsNumberOfShares" name='ManagedFundsNumberOfShares' placeholder="No. of shares"/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='ManagedFundsNumberOfShares' />
                            </div>            
                            </div>

                            <div className="col-md-6">
                            <div className="mb-3">
                            <label htmlFor="TermDepositIncomePA" className="form-label">Current Share/Unit Price</   label>
                              <Field type="number" className="form-control shadow inputDesign"
                              id="ManagedFundsSharePrice" name='ManagedFundsSharePrice' placeholder="Share Price"/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='ManagedFundsSharePrice' />
                            </div>            
                            </div>

                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="TermDepositIncomePAType" className="form-label">Current Value</   label>
                              <Field type="number" className="form-control shadow inputDesign" 
                              id="ManagedFundsCurrentValue" name='ManagedFundsCurrentValue' placeholder="Current Value"/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='ManagedFundsCurrentValue' />
                            </div>            
                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="TermDepositFinancialInstitution" className="form-label">Original Investment</   label>
                              <Field type="number" className="form-control shadow inputDesign"
                              id="ManagedFundsOriginalInvestment" name='ManagedFundsOriginalInvestment' placeholder="Original Investments"/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='ManagedFundsOriginalInvestment' />
                            </div>            
                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="TermDepositFinancialInstitution" className="form-label">Purchase Date</   label>
                              <Field type="date" className="form-control shadow inputDesign"
                              id="ManagedFundsPurchaseDate" name='ManagedFundsPurchaseDate'/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='ManagedFundsPurchaseDate' />
                            </div>            
                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                            <label htmlFor="ManagedFundsIncomePA" className="form-label">Income P.A.</   label>
                            <div className='row'>
                            <div className='col-md-8'>
                              <Field type="number" className="form-control shadow inputDesign"
                              id="ManagedFundsIncomePA" name='ManagedFundsIncomePA' placeholder="Income P.A."/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='ManagedFundsIncomePA' />
                            </div>
                            <div className='col-md-4'>
                            <Field
                                      as='select'
                                      name="ManagedFundsIncomePAType"
                                      id="ManagedFundsIncomePAType"
                                      className="form-select shadow  inputDesign"
                                    >
                                      <option value=''>Select</option>
                                      <option value="dollor">$</option>
                                      <option value="percentage">%</option>
                                    </Field>
                                    <ErrorMessage name="ManagedFundsIncomePAType" component='div' className="text-danger fw-bold"/>
                            </div>
                            </div>  
                            </div>            
                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="TermDepositFinancialInstitution" className="form-label">Total Income P.A.</   label>
                              <Field type="number" className="form-control shadow inputDesign"
                              id="ManagedFundsTotalIncomePA" name='ManagedFundsTotalIncomePA' placeholder="Total Income P.A."/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='ManagedFundsTotalIncomePA' />
                            </div>            
                            </div>
                            <div className="col-md-6">
                                  <div className="mb-3">
                                <label  className="form-label">
                                Reinvestment Income
                                </label>
                              {/* switch button style */}
                                <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="ManagedFundsReinvestedIncome"
                                id="ManagedFundsReinvestedOpt1" value="Yes"
                                onChange={handleChange}
                                checked={values.ManagedFundsReinvestedIncome==="Yes"}
                                />
                                <label htmlFor="ManagedFundsReinvestedOpt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="ManagedFundsReinvestedIncome"
                                id="ManagedFundsReinvestedOpt2" value="No"
                                onChange={handleChange}
                                checked={values.ManagedFundsReinvestedIncome==="No"}
                              />
                                <label htmlFor="ManagedFundsReinvestedOpt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>



                                  
                                </div>
                                  </div>    
                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="TermDepositFinancialInstitution" className="form-label">Reg Investments P.A.</   label>
                              <Field type="number" className="form-control shadow inputDesign"
                              id="ManagedFundsRegInvestments" name='ManagedFundsRegInvestments' placeholder="Reg Investments P.A."/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='ManagedFundsRegInvestments' />
                            </div>            
                            </div>

                            </div>
                            
                            </div>
                            {/* Solicitor */}

                            {/*Australian Share Detail Form */}
                              
                                </Modal.Body>
                                <Modal.Footer>
                                  <div className="col-md-12">
                                    <button
                                      className="float-end btn w-25  bgColor modalBtn"
                                      // onClick={ManagedFundshandleClose}
                                      type='submit'
                                    >
                                      Save
                                    </button>
                                    <button
                                      className="float-end btn w-25  btn-outline  backBtn mx-3"
                                      onClick={ManagedFundshandleClose}
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

                              <div   className='table-responsive my-3'>
                                <table className="table table-bordered table-hover text-center">
                                    <thead className="text-light" id="tableHead">
                                      <tr>
                                        <th>Platform Name</th>
                                        <th>Current Value</th>
                                      </tr>
                                    </thead>

                                <tbody>
                                
                                  {/* Australian Share Market  */}
                                {  ManagedFundsList.map((elem,index)=>{
                                    let {ManagedFundsPlatformName, ManagedFundsCurrentValue}=elem;
                                    if(ManagedFundsList[0].ManagedFundsPlatformName !=='' ||
                                    ManagedFundsList[0].ManagedFundsCurrentValue !=='' ){
                                      return(
                                        <tr key={index}>
                                          {/* <td className='fw-bold'>Bank #1</td> */}
                                            <td>{ManagedFundsPlatformName}</td>
                                            <td>{ManagedFundsCurrentValue}</td>
                                            {/* <td >
                                            <button  type='btn' onClick={(e)=>deleteHandler(elem)} className='btn btn-danger btn-sm'>delete</button>
                                            <button  type='btn' onClick={(e)=>updateHandler(elem)} className='btn btn-warning btn-sm mx-2'>update</button>
                                    
                                            </td>  */}
                                        
                                        </tr>
                                        );
                                    }
                                    else{
                                
                                    }

                                  }) }
                                  {/* Australian Share Market  */}

                                </tbody>
                                </table>
                               </div>
                          
                          
                          {/* --------------------------------------------- */}
                              {/* 2 row */}
                              <div className="row mb-3">
                            <div className="col-md-6">
                                  <div className="mb-3">
                                <label  className="form-label">
                                Does your share portfolio have any loans associated with them?
                                </label>
                              {/* switch button style */}
                                <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="ManagedFundsPortfolioRadio"
                                id="ManagedFundsPortfolioOpt1" value="Yes"
                                onClick={()=>ManagedFundsPortfolioHandler("Yes")} 
                                onChange={handleChange}
                                checked={values.ManagedFundsPortfolioRadio==="Yes"}
                                />
                                <label htmlFor="ManagedFundsPortfolioOpt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="ManagedFundsPortfolioRadio"
                                id="ManagedFundsPortfolioOpt2" value="No"
                                onClick={()=>ManagedFundsPortfolioHandler("No")} 
                                onChange={handleChange}
                                checked={values.ManagedFundsPortfolioRadio==="No"}
                              />
                                <label htmlFor="ManagedFundsPortfolioOpt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>



                                  
                                </div>
                                  </div>    
                            </div>
                            {ManagedFundsPortfolio && <div className='col-md-6'>
                            <label  className="form-label">
                            Please enter the details of your Portfolio
                                </label>
                                <br />
                              
                              <span
                                className=" btn h-50 w-50
                                btn-outline-success "
                                onClick={ManagedFundsPortfoliohandleShow}
                              >
                                <div className="iconContainer mx-1">
                                <img className="img-fluid" src={plus} alt="" />

                                </div>
                                Enter Details
                              </span>
                            </div>}
                              </div>
                              {/* 2 row */}

                              <Modal
                                show={ManagedFundsPortfolioshow}
                                onHide={ManagedFundsPortfoliohandleClose}
                                backdrop="static"
                                className="modal-lg"
                                keyboard={false}
                              >
                                <Modal.Header
                                  className="text-light modalBG "
                                  closeButton
                                >
                                  <Modal.Title className="fontStyle">
                                  Associated Loan Details
                                    <div className="iconContainerLg">
                                <img className="img-fluid" src={notebook} alt="" />

                                </div>
                                  </Modal.Title>
                                </Modal.Header>
                              <Formik
                                initialValues={Client_initialValues}
                                // validationSchema={Client_validationSchema}
                                onSubmit={ManagedFundsPortfolio_onSubmit}>
                              {({values , setFieldValue ,setValues,handleChange,formik})=>
                                <Form>
                                <Modal.Body>
                                    {/* Australian Share Market Form */}
                                    
                                    {/* Solicitor */}
                                    <div className=' '>
                                    <h3 className=''>
                                    <div className="iconContainerLg mx-1">
                                        <img className="img-fluid" src={lawyer} alt="" />

                                        </div>
                                        Portfolio Details                       
                                        </h3>
                                    <div className="row">
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="TermDepositCurrentValue" className="form-label">Type of Loan</   label>
                                      <Field
                                              as='select'
                                              name="ManagedFundsPortfolioLoanType"
                                              id="ManagedFundsPortfolioLoanType"
                                              className="form-select shadow  inputDesign"
                                            >
                                              <option value=''>Select</option>
                                              <option value="Investment Loan">Investment Loan</option>
                                              <option value="Margin Loan">Margin Loan</option>
                                            </Field>
                                            <ErrorMessage name="ManagedFundsPortfolioLoanType" component='div' className="text-danger fw-bold"/>
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="ManagedFundsPortfolioCurrentBalance" className="form-label">Current Balance</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                      id="ManagedFundsPortfolioCurrentBalance" name='ManagedFundsPortfolioCurrentBalance' placeholder="Current Balance"/>
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='ManagedFundsPortfolioCurrentBalance' />
                                    </div>            
                                    </div>

                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="TermDepositIncomePA" className="form-label">Lender</   label>
                                      <Field type="text" className="form-control shadow inputDesign"
                                      id="ManagedFundsPortfolioLender" name='ManagedFundsPortfolioLender' placeholder="Lender"/>
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='ManagedFundsPortfolioLender' />
                                    </div>            
                                    </div>

                                    <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="TermDepositIncomePAType" className="form-label">Interest Rate P.A.</   label>
                                      <Field type="number" className="form-control shadow inputDesign" 
                                      id="ManagedFundsPortfolioInterestRatePA" name='ManagedFundsPortfolioInterestRatePA' placeholder="Interest Rate P.A."/>
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='ManagedFundsPortfolioInterestRatePA' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="TermDepositCurrentValue" className="form-label">Loan Term (1-30 Years)</   label>
                                      <Field
                                              as='select'
                                              name="ManagedFundsPortfolioLoanTerm"
                                              id="ManagedFundsPortfolioLoanTerm"
                                              className="form-select shadow  inputDesign"
                                            >
                                              <option value=''>Select</option>
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
                                            <ErrorMessage name="ManagedFundsPortfolioLoanTerm" component='div' className="text-danger fw-bold"/>
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label htmlFor="TermDepositCurrentValue" className="form-label">Loan Type</   label>
                                        <Field
                                                as='select'
                                                name="ManagedFundsPortfolioLoanType2"
                                                id="ManagedFundsPortfolioLoanType2"
                                                className="form-select shadow  inputDesign"
                                              >
                                                <option value=''>Select</option>
                                                <option value="I/Only">I/Only</option>
                                                <option value="P & I">P & I</option>
                                              </Field>
                                              <ErrorMessage name="ManagedFundsPortfolioLoanType2" component='div' className="text-danger fw-bold"/>
                                      </div>            
                                      </div>
                                      <div className="col-md-6">
                                      <div className="mb-3">
                                        <label htmlFor="TermDepositCurrentValue" className="form-label">Deductible Amount of Loan %</   label>
                                        <Field name="ManagedFundsPortfolioDeductibleLoanAmount" 
                                        placeholder='Deductible Loan Amount'
                                        id="ManagedFundsPortfolioDeductibleLoanAmount"
                                        className="form-control shadow  inputDesign">
                                        </Field>
                                              <ErrorMessage name="ManagedFundsPortfolioDeductibleLoanAmount" component='div' className="text-danger fw-bold"/>
                                      </div>            
                                      </div>
                                      <div className="col-md-6">
                                        <div className="mb-3">
                                          <label htmlFor="TermDepositCurrentValue" className="form-label">Year Remaining (1-30 Years)</   label>
                                          <Field
                                                  as='select'
                                                  name="ManagedFundsPortfolioYearRemaining"
                                                  id="ManagedFundsPortfolioYearRemaining"
                                                  className="form-select shadow  inputDesign"
                                                >
                                                <option value=''>Select</option>
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
                                                <ErrorMessage name="ManagedFundsPortfolioYearRemaining" component='div' className="text-danger fw-bold"/>
                                        </div>            
                                        </div>

                                    </div>
                                    
                                    </div>
                                    {/* Solicitor */}

                            {/*Australian Share Detail Form */}
                              
                                </Modal.Body>
                                <Modal.Footer>
                                  <div className="col-md-12">
                                    <button
                                      className="float-end btn w-25  bgColor modalBtn"
                                      // onClick={ManagedFundsPortfoliohandleClose}
                                      type='submit'
                                    >
                                      Save
                                    </button>
                                    <button
                                      className="float-end btn w-25  btn-outline  backBtn mx-3"
                                      onClick={ManagedFundsPortfoliohandleClose}
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

                              <div   className='table-responsive my-3'>
                                <table className="table table-bordered table-hover text-center">
                                    <thead className="text-light" id="tableHead">
                                      <tr>
                                        <th>Type of Loan</th>
                                        <th>Current Value</th>
                                        <th>Lender</th>
                                        <th>Interest Rate P.A.</th>
                                      </tr>
                                    </thead>

                                <tbody>
                                
                                  {/* ManagedFundsPortfolio #1  */}
                                {  ManagedFundsPortfolioList.map((elem,index)=>{
                                    let {ManagedFundsPortfolioLoanType, ManagedFundsPortfolioCurrentBalance, 
                                      ManagedFundsPortfolioLender, ManagedFundsPortfolioInterestRatePA}=elem;
                                    if(ManagedFundsPortfolioList[0].ManagedFundsPortfolioLoanType !=='' || 
                                    ManagedFundsPortfolioList[0].ManagedFundsPortfolioLender !=='' ){
                                      return(
                                        <tr key={index}>
                                          {/* <td className='fw-bold'>Bank #1</td> */}
                                            <td>{ManagedFundsPortfolioLoanType}</td>
                                            <td>{ManagedFundsPortfolioCurrentBalance}</td>
                                            <td>{ManagedFundsPortfolioLender}</td>
                                            <td>{ManagedFundsPortfolioInterestRatePA}</td>
                                            {/* <td >
                                            <button  type='btn' onClick={(e)=>deleteHandler(elem)} className='btn btn-danger btn-sm'>delete</button>
                                            <button  type='btn' onClick={(e)=>updateHandler(elem)} className='btn btn-warning btn-sm mx-2'>update</button>
                                    
                                            </td>  */}
                                        
                                        </tr>
                                        );
                                    }
                                    else{
                                
                                    }

                                  }) }
                                  {/* ManagedFundsPortfolio #1  */}

                                </tbody>
                                </table>
                               </div>

                          </div>
                          {/* Managed Funds Details */}                          
                          

                        
                          {/* Investment Bonds Details */}
                          <div className='mb-5'>
                          <h3 className="">Investment Bonds</h3>

                          {/* --------------------------------------------- */}     
                              {/* 1 row */}
                              <div className="row mb-3">
                            <div className="col-md-6">
                                  <div className="mb-3">
                                <label  className="form-label">
                                Do you have any Bonds?
                                </label>
                              {/* switch button style */}
                                <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="InvestmentBondsRadio"
                                id="InvestmentBondsOpt1" value="Yes"
                                onClick={()=>InvestmentBondsHandler("Yes")} 
                                onChange={handleChange}
                                checked={values.InvestmentBondsRadio==="Yes"}
                                />
                                <label htmlFor="InvestmentBondsOpt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="InvestmentBondsRadio"
                                id="InvestmentBondsOpt2" value="No"
                                onClick={()=>InvestmentBondsHandler("No")} 
                                onChange={handleChange}
                                checked={values.InvestmentBondsRadio==="No"}
                              />
                                <label htmlFor="InvestmentBondsOpt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>



                                  
                                </div>
                                  </div>    
                            </div>
                            {InvestmentBonds && <div className='col-md-6'>
                            <label  className="form-label">
                            Please enter the details of your Investment Bonds
                                </label>
                                <br />
                              
                              <span
                                className=" btn h-50 w-50
                                btn-outline-success "
                                onClick={InvestmentBondshandleShow}
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
                                show={InvestmentBondsshow}
                                onHide={InvestmentBondshandleClose}
                                backdrop="static"
                                className="modal-lg"
                                keyboard={false}
                              >
                                <Modal.Header
                                  className="text-light modalBG "
                                  closeButton
                                >
                                  <Modal.Title className="fontStyle">
                                Investment Bonds Details
                                    <div className="iconContainerLg">
                                <img className="img-fluid" src={notebook} alt="" />

                                </div>
                                  </Modal.Title>
                                </Modal.Header>
                              <Formik
                                initialValues={Client_initialValues}
                                // validationSchema={Client_validationSchema}
                                onSubmit={InvestmentBonds_onSubmit}>
                              {({values , setFieldValue ,setValues,handleChange,formik})=>
                                <Form>
                                <Modal.Body>
                                    {/* Australian Share Market Form */}
                                    
                                    {/* Solicitor */}
                            <div className=' '>
                            <h3 className=''>
                            <div className="iconContainerLg mx-1">
                                <img className="img-fluid" src={lawyer} alt="" />

                                </div>
                                Investment Bonds                       
                                </h3>
                            <div className="row">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="TermDepositCurrentValue" className="form-label">Platform Name</   label>
                              <Field
                                      as='select'
                                      name="InvestmentBondsPlatformName"
                                      id="InvestmentBondsPlatformName"
                                      className="form-select shadow  inputDesign"
                                    >
                                      <option value=''>Select</option>
                                      <option value="1AL">1AL</option>
                                      <option value="3PL">3PL</option>
                                      <option value="88E">88E</option>
                                      <option value="A2M">A2M</option>
                                    </Field>
                                    <ErrorMessage name="InvestmentBondsPlatformName" component='div' className="text-danger fw-bold"/>
                            </div>            
                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="TermDepositCurrentValue" className="form-label">Investment Name</   label>
                              <Field
                                      as='select'
                                      name="InvestmentBondsInvestmentName"
                                      id="InvestmentBondsInvestmentName"
                                      className="form-select shadow  inputDesign"
                                    >
                                      <option value=''>Select</option>
                                      <option value="1AL">1AL</option>
                                      <option value="3PL">3PL</option>
                                      <option value="88E">88E</option>
                                      <option value="A2M">A2M</option>
                                    </Field>
                                    <ErrorMessage name="InvestmentBondsInvestmentName" component='div' className="text-danger fw-bold"/>
                            </div>            
                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="InvestmentBondsNumberOfShares" className="form-label">No. of Unit/Shares</   label>
                              <Field type="number" className="form-control shadow inputDesign"
                              id="InvestmentBondsNumberOfShares" name='InvestmentBondsNumberOfShares' placeholder="No. of shares"/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='InvestmentBondsNumberOfShares' />
                            </div>            
                            </div>

                            <div className="col-md-6">
                            <div className="mb-3">
                            <label htmlFor="TermDepositIncomePA" className="form-label">Current Share/Unit Price</   label>
                              <Field type="number" className="form-control shadow inputDesign"
                              id="InvestmentBondsSharePrice" name='InvestmentBondsSharePrice' placeholder="Share Price"/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='InvestmentBondsSharePrice' />
                            </div>            
                            </div>

                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="TermDepositIncomePAType" className="form-label">Current Value</   label>
                              <Field type="number" className="form-control shadow inputDesign" 
                              id="InvestmentBondsCurrentValue" name='InvestmentBondsCurrentValue' placeholder="Current Value"/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='InvestmentBondsCurrentValue' />
                            </div>            
                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="TermDepositFinancialInstitution" className="form-label">Original Investment</   label>
                              <Field type="number" className="form-control shadow inputDesign"
                              id="InvestmentBondsOriginalInvestment" name='InvestmentBondsOriginalInvestment' placeholder="Original Investments"/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='InvestmentBondsOriginalInvestment' />
                            </div>            
                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="TermDepositFinancialInstitution" className="form-label">Purchase Date</   label>
                              <Field type="date" className="form-control shadow inputDesign"
                              id="InvestmentBondsPurchaseDate" name='InvestmentBondsPurchaseDate'/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='InvestmentBondsPurchaseDate' />
                            </div>            
                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                            <label htmlFor="InvestmentBondsIncomePA" className="form-label">Income P.A.</   label>
                            <div className='row'>
                            <div className='col-md-8'>
                              <Field type="number" className="form-control shadow inputDesign"
                              id="InvestmentBondsIncomePA" name='InvestmentBondsIncomePA' placeholder="Income P.A."/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='InvestmentBondsIncomePA' />
                            </div>
                            <div className='col-md-4'>
                            <Field
                                      as='select'
                                      name="InvestmentBondsIncomePAType"
                                      id="InvestmentBondsIncomePAType"
                                      className="form-select shadow  inputDesign"
                                    >
                                      <option value=''>Select</option>
                                      <option value="dollor">$</option>
                                      <option value="percentage">%</option>
                                    </Field>
                                    <ErrorMessage name="InvestmentBondsIncomePAType" component='div' className="text-danger fw-bold"/>
                            </div>
                            </div>  
                            </div>            
                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="TermDepositFinancialInstitution" className="form-label">Total Income P.A.</   label>
                              <Field type="number" className="form-control shadow inputDesign"
                              id="InvestmentBondsTotalIncomePA" name='InvestmentBondsTotalIncomePA' placeholder="Total Income P.A."/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='InvestmentBondsTotalIncomePA' />
                            </div>            
                            </div>
                            <div className="col-md-6">
                                  <div className="mb-3">
                                <label  className="form-label">
                                Reinvestment Income
                                </label>
                              {/* switch button style */}
                                <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="InvestmentBondsReinvestedIncome"
                                id="InvestmentBondsReinvestedOpt1" value="Yes"
                                onChange={handleChange}
                                checked={values.InvestmentBondsReinvestedIncome==="Yes"}
                                />
                                <label htmlFor="InvestmentBondsReinvestedOpt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="InvestmentBondsReinvestedIncome"
                                id="InvestmentBondsReinvestedOpt2" value="No"
                                onChange={handleChange}
                                checked={values.InvestmentBondsReinvestedIncome==="No"}
                              />
                                <label htmlFor="InvestmentBondsReinvestedOpt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>



                                  
                                </div>
                                  </div>    
                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="TermDepositFinancialInstitution" className="form-label">Reg Investments P.A.</   label>
                              <Field type="number" className="form-control shadow inputDesign"
                              id="InvestmentBondsRegInvestments" name='InvestmentBondsRegInvestments' placeholder="Reg Investments P.A."/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='InvestmentBondsRegInvestments' />
                            </div>            
                            </div>

                            </div>
                            
                            </div>
                            {/* Solicitor */}

                            {/*Australian Share Detail Form */}
                              
                                </Modal.Body>
                                <Modal.Footer>
                                  <div className="col-md-12">
                                    <button
                                      className="float-end btn w-25  bgColor modalBtn"
                                      // onClick={InvestmentBondshandleClose}
                                      type='submit'
                                    >
                                      Save
                                    </button>
                                    <button
                                      className="float-end btn w-25  btn-outline  backBtn mx-3"
                                      onClick={InvestmentBondshandleClose}
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

                          <div   className='table-responsive my-3'>
                                <table className="table table-bordered table-hover text-center">
                                    <thead className="text-light" id="tableHead">
                                      <tr>
                                        <th>Platform Name</th>
                                        <th>Current Value</th>
                                      </tr>
                                    </thead>

                                <tbody>
                                
                                  {/* Australian Share Market  */}
                                {  InvestmentBondsList.map((elem,index)=>{
                                    let { InvestmentBondsPlatformName, InvestmentBondsCurrentValue }=elem;
                                    if(InvestmentBondsList[0].InvestmentBondsPlatformName !=='' ||
                                    InvestmentBondsList[0].InvestmentBondsCurrentValue !=='' ){
                                      return(
                                        <tr key={index}>
                                          {/* <td className='fw-bold'>Bank #1</td> */}
                                            <td>{InvestmentBondsPlatformName}</td>
                                            <td>{InvestmentBondsCurrentValue}</td>
                                            {/* <td >
                                            <button  type='btn' onClick={(e)=>deleteHandler(elem)} className='btn btn-danger btn-sm'>delete</button>
                                            <button  type='btn' onClick={(e)=>updateHandler(elem)} className='btn btn-warning btn-sm mx-2'>update</button>
                                    
                                            </td>  */}
                                        
                                        </tr>
                                        );
                                    }
                                    else{
                                
                                    }

                                  }) }
                                  {/* Australian Share Market  */}

                                </tbody>
                                </table>
                               </div>

                          </div>
                          {/* Investment Bonds Details */}



                          {/* Investment Properties Details */}
                          <div className='mb-5'>
                          <h3 className="">Investment Properties</h3>

                          {/* --------------------------------------------- */}     
                              {/* 1 row */}
                              <div className="row mb-3">
                            <div className="col-md-6">
                                  <div className="mb-3">
                                <label  className="form-label">
                                Do you have any Investment Properties?
                                </label>
                              {/* switch button style */}
                                <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="InvestmentPropertiesRadio"
                                id="InvestmentPropertiesOpt1" value="Yes"
                                onClick={()=>InvestmentPropertiesHandler("Yes")} 
                                onChange={handleChange}
                                checked={values.InvestmentPropertiesRadio==="Yes"}
                                />
                                <label htmlFor="InvestmentPropertiesOpt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="InvestmentPropertiesRadio"
                                id="InvestmentPropertiesOpt2" value="No"
                                onClick={()=>InvestmentPropertiesHandler("No")} 
                                onChange={handleChange}
                                checked={values.InvestmentPropertiesRadio==="No"}
                              />
                                <label htmlFor="InvestmentPropertiesOpt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>



                                  
                                </div>
                                  </div>    
                            </div>
                            {InvestmentProperties && <div className='col-md-6'>
                            <label  className="form-label">
                            Please enter the details of your Investment Properties
                                </label>
                                <br />
                              
                              <span
                                className=" btn h-50 w-50
                                btn-outline-success "
                                onClick={InvestmentPropertieshandleShow}
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
                                show={InvestmentPropertiesshow}
                                onHide={InvestmentPropertieshandleClose}
                                backdrop="static"
                                className="modal-lg"
                                keyboard={false}
                              >
                                <Modal.Header
                                  className="text-light modalBG "
                                  closeButton
                                >
                                  <Modal.Title className="fontStyle">
                                Investment Properties Details
                                    <div className="iconContainerLg">
                                <img className="img-fluid" src={notebook} alt="" />

                                </div>
                                  </Modal.Title>
                                </Modal.Header>
                              <Formik
                                initialValues={Client_initialValues}
                                // validationSchema={Client_validationSchema}
                                onSubmit={InvestmentProperties_onSubmit}>
                              {({values , setFieldValue ,setValues,handleChange,formik})=>
                                <Form>
                                <Modal.Body>
                                    {/* Australian Share Market Form */}
                                    
                                    {/* Solicitor */}
                            <div className=' '>
                            <h3 className=''>
                            <div className="iconContainerLg mx-1">
                                <img className="img-fluid" src={lawyer} alt="" />

                                </div>
                                Investment Properties                       
                                </h3>
                            <div className="row">
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="InvestmentPropertiesCurrentValue" className="form-label">Current Value</   label>
                              <Field type="number" className="form-control shadow inputDesign"
                              id="InvestmentPropertiesCurrentValue" name='InvestmentPropertiesCurrentValue' placeholder="Current Value"/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='InvestmentPropertiesCurrentValue' />
                            </div>            
                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="InvestmentPropertiesClientOwnership" className="form-label">Client % of Ownership</   label>
                              <Field type="number" className="form-control shadow inputDesign"
                              id="InvestmentPropertiesClientOwnership" name='InvestmentPropertiesClientOwnership' placeholder="Client Ownership Percentage"/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='InvestmentPropertiesClientOwnership' />
                            </div>            
                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="InvestmentPropertiesCostBase" className="form-label">Cost Base</   label>
                              <Field type="number" className="form-control shadow inputDesign"
                              id="InvestmentPropertiesCostBase" name='InvestmentPropertiesCostBase' placeholder="Cost Base"/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='InvestmentPropertiesCostBase' />
                            </div>            
                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="InvestmentPropertiesAddress" className="form-label">Property Address</   label>
                              <Field type="text" className="form-control shadow inputDesign"
                              id="InvestmentPropertiesAddress" name='InvestmentPropertiesAddress' placeholder="Property Address"/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='InvestmentPropertiesAddress' />
                            </div>            
                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="InvestmentPropertiesPostcode" className="form-label">Postcode</   label>
                              <Field type="number" className="form-control shadow inputDesign"
                              id="InvestmentPropertiesPostcode" name='InvestmentPropertiesPostcode' placeholder="No. of shares"/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='InvestmentPropertiesPostcode' />
                            </div>            
                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="InvestmentPropertiesRentalIncome" className="form-label">Rental Income</   label>
                              <Field type="number" className="form-control shadow inputDesign"
                              id="InvestmentPropertiesRentalIncome" name='InvestmentPropertiesRentalIncome' placeholder="No. of shares"/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='InvestmentPropertiesRentalIncome' />
                            </div>            
                            </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="InvestmentPropertiesFrequency" className="form-label">Frequency</   label>
                              <Field
                                      as='select'
                                      name="InvestmentPropertiesFrequency"
                                      id="InvestmentPropertiesFrequency"
                                      className="form-select shadow  inputDesign"
                                    >
                                      <option value=''>Select</option>
                                      <option value="Weekly">Weekly</option>
                                    </Field>
                                    <ErrorMessage name="InvestmentPropertiesFrequency" component='div' className="text-danger fw-bold"/>
                            </div>            
                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="InvestmentPropertiesTotalAnnualIncome" className="form-label">Total Annual Income</   label>
                              <Field type="number" className="form-control shadow inputDesign"
                              id="InvestmentPropertiesTotalAnnualIncome" name='InvestmentPropertiesTotalAnnualIncome' placeholder="No. of shares"/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='InvestmentPropertiesTotalAnnualIncome' />
                            </div>            
                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="InvestmentPropertiesExpensesPA" className="form-label">Expenses P.A.</   label>
                              <Field type="number" className="form-control shadow inputDesign"
                              id="InvestmentPropertiesExpensesPA" name='InvestmentPropertiesExpensesPA' placeholder="No. of shares"/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='InvestmentPropertiesExpensesPA' />
                            </div>            
                            </div>
                            <div className="col-md-6">
                                  <div className="mb-3">
                                <label  className="form-label">
                                Is there any loan attached?
                                </label>
                              {/* switch button style */}
                                <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="InvestmentPropertiesLoanAttached"
                                id="InvestmentPropertiesLoanAttachedOpt1" value="Yes"
                                onClick={() => InvestmentProperties2Handler("Yes")}
                                onChange={handleChange}
                                checked={values.InvestmentPropertiesLoanAttached==="Yes"}
                                />
                                <label htmlFor="InvestmentPropertiesLoanAttachedOpt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="InvestmentPropertiesLoanAttached"
                                id="InvestmentPropertiesLoanAttachedOpt2" value="No"
                                onClick={() => InvestmentProperties2Handler("No")}
                                onChange={handleChange}
                                checked={values.InvestmentPropertiesLoanAttached==="No"}
                              />
                                <label htmlFor="InvestmentPropertiesLoanAttachedOpt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>



                                  
                                </div>
                                  </div>    
                            </div>
                            <div className='col-md-6'>
                              <div className='mb-3'><div>
                            <label  className="form-label">
                            Expense Schedule
                                </label>
                                <br />
                              
                              <span
                                className=" btn h-50 w-50
                                btn-outline-success "
                                onClick={InvestmentProperties2handleShow}
                              >
                                <div className="iconContainer mx-1">
                                <img className="img-fluid" src={plus} alt="" />

                                </div>
                                Enter Details
                              </span>
                            </div>
                            <Modal
                                show={InvestmentProperties2show}
                                onHide={InvestmentProperties2handleClose}
                                backdrop="static"
                                className="modal-lg"
                                keyboard={false}
                              >
                                <Modal.Header
                                  className="text-light modalBG "
                                  closeButton
                                >
                                  <Modal.Title className="fontStyle">
                                Investment Properties Details
                                    <div className="iconContainerLg">
                                <img className="img-fluid" src={notebook} alt="" />

                                </div>
                                  </Modal.Title>
                                </Modal.Header>
                              <Formik
                                initialValues={InvestmentModal_initialValues}
                                validationSchema={InvestmentModal_validationSchema}
                                onSubmit={InvestmentModal_onSubmit}>
                              {({values , setFieldValue ,setValues,handleChange,formik})=>
                                <Form>
                                <Modal.Body>
                                    {/* Australian Share Market Form */}
                                    
                                    {/* Solicitor */}
                            <div className=' '>
                            <h3 className=''>
                            <div className="iconContainerLg mx-1">
                                <img className="img-fluid" src={lawyer} alt="" />

                                </div>
                                Expense Schedule                       
                                </h3>
                            <div className="row">
                              <div className="col-md-6">
                              <div className="mb-3">
                                <label htmlFor="InvestmentModalTotalExpense" className="form-label">Total Property Expenses</   label>
                                <Field type="number" className="form-control shadow inputDesign"
                                id="InvestmentModalTotalExpense" name='InvestmentModalTotalExpense' readOnly/>
                                <ErrorMessage component='div' className='text-danger fw-bold' name='InvestmentModalTotalExpense' />
                              </div>            
                              </div>
                              <div className="col-md-6">
                              <div className="mb-3">
                                <label htmlFor="InvestmentModalCorporateFees" className="form-label">Body Corporate Fees</   label>
                                <Field type="number" className="form-control shadow inputDesign"
                                id="InvestmentModalCorporateFees" name='InvestmentModalCorporateFees' placeholder='Body Corporate Fees'/>
                                <ErrorMessage component='div' className='text-danger fw-bold' name='InvestmentModalCorporateFees' />
                              </div>            
                              </div>
                              <div className="col-md-6">
                              <div className="mb-3">
                                <label htmlFor="InvestmentModalCouncilRates" className="form-label">Council Rates</   label>
                                <Field type="number" className="form-control shadow inputDesign"
                                id="InvestmentModalCouncilRates" name='InvestmentModalCouncilRates' placeholder='Council Rates'/>
                                <ErrorMessage component='div' className='text-danger fw-bold' name='InvestmentModalCouncilRates' />
                              </div>            
                              </div>
                              <div className="col-md-6">
                              <div className="mb-3">
                                <label htmlFor="InvestmentModalLawnMoving" className="form-label">Gardening and Lawn Moving</   label>
                                <Field type="number" className="form-control shadow inputDesign"
                                id="InvestmentModalLawnMoving" name='InvestmentModalLawnMoving' placeholder='Gardening and Lawn Moving'/>
                                <ErrorMessage component='div' className='text-danger fw-bold' name='InvestmentModalLawnMoving' />
                              </div>            
                              </div>
                              <div className="col-md-6">
                              <div className="mb-3">
                                <label htmlFor="InvestmentModalInsurance" className="form-label">Insurance</   label>
                                <Field type="number" className="form-control shadow inputDesign"
                                id="InvestmentModalInsurance" name='InvestmentModalInsurance' placeholder='Insurance'/>
                                <ErrorMessage component='div' className='text-danger fw-bold' name='InvestmentModalInsurance' />
                              </div>            
                              </div>
                              <div className="col-md-6">
                              <div className="mb-3">
                                <label htmlFor="InvestmentModalLandTax" className="form-label">Land Tax</   label>
                                <Field type="number" className="form-control shadow inputDesign"
                                id="InvestmentModalLandTax" name='InvestmentModalLandTax' placeholder='Land Tax'/>
                                <ErrorMessage component='div' className='text-danger fw-bold' name='InvestmentModalLandTax' />
                              </div>            
                              </div>
                              <div className="col-md-6">
                              <div className="mb-3">
                                <label htmlFor="InvestmentModalRepairs" className="form-label">Repairs and Maintenance</   label>
                                <Field type="number" className="form-control shadow inputDesign"
                                id="InvestmentModalRepairs" name='InvestmentModalRepairs' placeholder='Repairs and Maintenance'/>
                                <ErrorMessage component='div' className='text-danger fw-bold' name='InvestmentModalRepairs' />
                              </div>            
                              </div>
                              <div className="col-md-6">
                              <div className="mb-3">
                                <label htmlFor="InvestmentModalWaterCharges" className="form-label">Water Charges</   label>
                                <Field type="number" className="form-control shadow inputDesign"
                                id="InvestmentModalWaterCharges" name='InvestmentModalWaterCharges' placeholder='Water Charges'/>
                                <ErrorMessage component='div' className='text-danger fw-bold' name='InvestmentModalWaterCharges' />
                              </div>            
                              </div>
                              <div className="col-md-6">
                              <div className="mb-3">
                                <label htmlFor="InvestmentModalOthers" className="form-label">Other</   label>
                                <Field type="number" className="form-control shadow inputDesign"
                                id="InvestmentModalOthers" name='InvestmentModalOthers' placeholder='Other'/>
                                <ErrorMessage component='div' className='text-danger fw-bold' name='InvestmentModalOthers' />
                              </div>            
                              </div>
                              <div className="col-md-6">
                              <div className="mb-3">
                                <label htmlFor="InvestmentModalTelephone" className="form-label">Telephone & Internet</   label>
                                <Field type="number" className="form-control shadow inputDesign"
                                id="InvestmentModalTelephone" name='InvestmentModalTelephone' placeholder='Telephone & Internet'/>
                                <ErrorMessage component='div' className='text-danger fw-bold' name='InvestmentModalTelephone' />
                              </div>            
                              </div>
                              <div className="col-md-6">
                              <div className="mb-3">
                                <label htmlFor="InvestmentModalProfessionalFees" className="form-label">Professional Fees</   label>
                                <Field type="number" className="form-control shadow inputDesign"
                                id="InvestmentModalProfessionalFees" name='InvestmentModalProfessionalFees' placeholder='Professional Fees'/>
                                <ErrorMessage component='div' className='text-danger fw-bold' name='InvestmentModalProfessionalFees' />
                              </div>            
                              </div>
                              <div className="col-md-6">
                              <div className="mb-3">
                                <label htmlFor="InvestmentModalAllOthers" className="form-label">All Other</   label>
                                <Field type="number" className="form-control shadow inputDesign"
                                id="InvestmentModalAllOthers" name='InvestmentModalAllOthers' placeholder='All Others'/>
                                <ErrorMessage component='div' className='text-danger fw-bold' name='InvestmentModalAllOthers' />
                              </div>            
                              </div>
                            </div>
                            
                            </div>
                            {/* Solicitor */}

                            {/*Australian Share Detail Form */}
                              
                                </Modal.Body>
                                <Modal.Footer>
                                  <div className="col-md-12">
                                    <button
                                      className="float-end btn w-25  bgColor modalBtn"
                                      // onClick={ManagedFundshandleClose}
                                      type='submit'
                                    >
                                      Save
                                    </button>
                                    <button
                                      className="float-end btn w-25  btn-outline  backBtn mx-3"
                                      onClick={ManagedFundshandleClose}
                                    >
                                      Cancel
                                    </button>
                                  </div>
                                </Modal.Footer>
                                </Form>
                                }
                              </Formik>
                              </Modal>
                              </div>
                            </div>

                            {InvestmentProperties2 && <div className='row'>
                                
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="InvestmentPropertiesCurrentBalance" className="form-label">Current Balance</   label>
                              <Field type="number" className="form-control shadow inputDesign"
                              id="InvestmentPropertiesCurrentBalance" name='InvestmentPropertiesCurrentBalance' placeholder="Current Balance"/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='InvestmentPropertiesCurrentBalance' />
                            </div>            
                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="InvestmentPropertiesClientBorrowing" className="form-label">Client % Borrowing</   label>
                              <Field type="number" className="form-control shadow inputDesign" id="InvestmentPropertiesClientBorrowing" 
                              name='InvestmentPropertiesClientBorrowing' placeholder="Client Borrowing Percentage"/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='InvestmentPropertiesClientBorrowing' />
                            </div>            
                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="InvestmentPropertiesLender" className="form-label">Lender</   label>
                              <Field type="text" className="form-control shadow inputDesign"
                              id="InvestmentPropertiesLender" name='InvestmentPropertiesLender' placeholder="Lender"/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='InvestmentPropertiesLender' />
                            </div>            
                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="InvestmentPropertiesRepaymentAmount" className="form-label">Repayment Amount</   label>
                              <Field type="number" className="form-control shadow inputDesign" id="InvestmentPropertiesRepaymentAmount" 
                              name='InvestmentPropertiesRepaymentAmount' placeholder="Repayment Amount"/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='InvestmentPropertiesRepaymentAmount' />
                            </div>            
                            </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="InvestmentPropertiesFrequency2" className="form-label">Frequency</   label>
                              <Field
                                      as='select'
                                      name="InvestmentPropertiesFrequency2"
                                      id="InvestmentPropertiesFrequency2"
                                      className="form-select shadow  inputDesign"
                                    >
                                      <option value=''>Select</option>
                                      <option value="Weekly">Weekly</option>
                                      <option value="Monthly">Monthly</option>
                                    </Field>
                                    <ErrorMessage name="InvestmentPropertiesFrequency2" component='div' className="text-danger fw-bold"/>
                            </div>            
                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="InvestmentPropertiesAnnualRepayment" className="form-label">Annual Repayments</   label>
                              <Field type="number" className="form-control shadow inputDesign" id="InvestmentPropertiesAnnualRepayment" 
                              name='InvestmentPropertiesAnnualRepayment' placeholder="Annual Repayment"/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='InvestmentPropertiesAnnualRepayment' />
                            </div>            
                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="InvestmentPropertiesInterestRatePA" className="form-label">Interest Rate P.A.</   label>
                              <Field type="number" className="form-control shadow inputDesign" id="InvestmentPropertiesInterestRatePA" 
                              name='InvestmentPropertiesInterestRatePA' placeholder="Repayment Amount"/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='InvestmentPropertiesInterestRatePA' />
                            </div>            
                            </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="InvestmentPropertiesLoanTerm" className="form-label">Loan Term (1-30 Years)</   label>
                              <Field
                                      as='select'
                                      name="InvestmentPropertiesLoanTerm"
                                      id="InvestmentPropertiesLoanTerm"
                                      className="form-select shadow  inputDesign"
                                    >
                                      <option value=''>Select</option>
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
                                    <ErrorMessage name="InvestmentPropertiesLoanTerm" component='div' className="text-danger fw-bold"/>
                            </div>            
                            </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="InvestmentPropertiesLoanType" className="form-label">Loan Type</   label>
                              <Field
                                      as='select'
                                      name="InvestmentPropertiesLoanType"
                                      id="InvestmentPropertiesLoanType"
                                      className="form-select shadow  inputDesign"
                                    >
                                      <option value=''>Select</option>
                                      <option value="I/Only">I/Only</option>
                                      <option value="P & I">P & I</option>
                                    </Field>
                                    <ErrorMessage name="InvestmentPropertiesLoanType" component='div' className="text-danger fw-bold"/>
                            </div>            
                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="InvestmentPropertiesDebtLoanAmount" className="form-label">Debt Amount of Loan</   label>
                              <Field type="number" className="form-control shadow inputDesign" id="InvestmentPropertiesDebtLoanAmount" 
                              name='InvestmentPropertiesDebtLoanAmount' placeholder="Debt Loan Amount"/>
                              <ErrorMessage component='div' className='text-danger fw-bold' name='InvestmentPropertiesDebtLoanAmount' />
                            </div>            
                            </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="InvestmentPropertiesYearsRemaining" className="form-label">Years Remaining (1-30 Years)</   label>
                              <Field
                                      as='select'
                                      name="InvestmentPropertiesYearsRemaining"
                                      id="InvestmentPropertiesYearsRemaining"
                                      className="form-select shadow  inputDesign"
                                    >
                                      <option value=''>Select</option>
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
                                    <ErrorMessage name="InvestmentPropertiesYearsRemaining" component='div' className="text-danger fw-bold"/>
                            </div>            
                            </div>
                            </div>       }                     

                            </div>
                            
                            </div>
                            {/* Solicitor */}

                            {/*Australian Share Detail Form */}
                              
                                </Modal.Body>
                                <Modal.Footer>
                                  <div className="col-md-12">
                                    <button
                                      className="float-end btn w-25  bgColor modalBtn"
                                      // onClick={ManagedFundshandleClose}
                                      type='submit'
                                    >
                                      Save
                                    </button>
                                    <button
                                      className="float-end btn w-25  btn-outline  backBtn mx-3"
                                      onClick={InvestmentPropertieshandleClose}
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
                        
                          <div   className='table-responsive my-3'>
                                <table className="table table-bordered table-hover text-center">
                                    <thead className="text-light" id="tableHead">
                                      <tr>
                                        <th>Proper Address</th>
                                        <th>Value</th>
                                        <th>Ownership</th>
                                        <th>Rent P.A.</th>
                                        <th>Annual Expenses</th>
                                        <th>Repayments P.A.</th>
                                      </tr>
                                    </thead>

                                <tbody>
                                
                                  {/* Australian Share Market  */}
                                {  InvestmentPropertiesList.map((elem,index)=>{
                                    let { InvestmentPropertiesCurrentValue, InvestmentPropertiesAddress, 
                                      InvestmentPropertiesClientOwnership, InvestmentPropertiesRentalIncome,
                                      InvestmentPropertiesExpensesPA, InvestmentPropertiesRepaymentAmount }=elem;
                                    if(InvestmentPropertiesList[0].InvestmentPropertiesAddress !=='' ||
                                    InvestmentPropertiesList[0].InvestmentPropertiesClientOwnership !=='' ){
                                      return(
                                        <tr key={index}>
                                          {/* <td className='fw-bold'>Bank #1</td> */}
                                            <td>{InvestmentPropertiesAddress}</td>
                                            <td>{InvestmentPropertiesCurrentValue}</td>
                                            <td>{InvestmentPropertiesClientOwnership}</td>
                                            <td>{InvestmentPropertiesRentalIncome}</td>
                                            <td>{InvestmentPropertiesExpensesPA}</td>
                                            <td>{InvestmentPropertiesRepaymentAmount}</td>
                                            {/* <td >
                                            <button  type='btn' onClick={(e)=>deleteHandler(elem)} className='btn btn-danger btn-sm'>delete</button>
                                            <button  type='btn' onClick={(e)=>updateHandler(elem)} className='btn btn-warning btn-sm mx-2'>update</button>
                                    
                                            </td>  */}
                                        
                                        </tr>
                                        );
                                    }
                                    else{
                                
                                    }

                                  }) }
                                  {/* Australian Share Market  */}

                                </tbody>
                                </table>
                               </div>

                          </div>
                          {/* Investment Properties Details */}



                          {/* Others Details */}
                          <div className='mb-5'>
                          <h3 className="">Other Funds</h3>

                          {/* --------------------------------------------- */}     
                              {/* 1 row */}
                              <div className="row mb-3">
                            <div className="col-md-6">
                                  <div className="mb-3">
                                <label  className="form-label">
                                Do you have any Funds?
                                </label>
                              {/* switch button style */}
                                <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="OthersRadio"
                                id="OthersOpt1" value="Yes"
                                onClick={()=>OthersHandler("Yes")} 
                                onChange={handleChange}
                                checked={values.OthersRadio==="Yes"}
                                />
                                <label htmlFor="OthersOpt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="OthersRadio"
                                id="OthersOpt2" value="No"
                                onClick={()=>OthersHandler("No")} 
                                onChange={handleChange}
                                checked={values.OthersRadio==="No"}
                              />
                                <label htmlFor="OthersOpt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>



                                  
                                </div>
                                  </div>    
                            </div>
                            {Others && <div className='col-md-6'>
                            <label  className="form-label">
                            Please enter the details of your Other Funds
                                </label>
                                <br />
                              
                              <span
                                className=" btn h-50 w-50
                                btn-outline-success "
                                onClick={OthershandleShow}
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
                                show={Othersshow}
                                onHide={OthershandleClose}
                                backdrop="static"
                                className="modal-lg"
                                keyboard={false}
                              >
                                <Modal.Header
                                  className="text-light modalBG "
                                  closeButton
                                >
                                  <Modal.Title className="fontStyle">
                                  Other Funds
                                    <div className="iconContainerLg">
                                <img className="img-fluid" src={notebook} alt="" />

                                </div>
                                  </Modal.Title>
                                </Modal.Header>
                              <Formik
                                initialValues={Client_initialValues}
                                // validationSchema={Client_validationSchema}
                                onSubmit={Others_onSubmit}>
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
                                        Other #1
                                    
                                        </h3>
                                    <div className="row">
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="OtherInvestmentName" className="form-label">Name of Investment</   label>
                                      <Field type="text" className="form-control shadow inputDesign" 
                                      id="OtherInvestmentName" name='OtherInvestmentName' placeholder="Name of Investment"/>
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='OtherInvestmentName' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="OtherCurrentValue" className="form-label">Current Value</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                      id="OtherCurrentValue" name='OtherCurrentValue' placeholder="Current Value"/>
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='OtherCurrentValue' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="OtherCostBase" className="form-label">Cost Base</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                      id="OtherCostBase" name='OtherCostBase' placeholder="Cost Base"/>
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='OtherCostBase' />
                                    </div>            
                                    </div>                            
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="OtherPurchaseDate" className="form-label">Purchase Date</   label>
                                      <Field type="date" className="form-control shadow inputDesign"
                                      id="OtherPurchaseDate" name='OtherPurchaseDate' />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='OtherPurchaseDate' />
                                    </div>            
                                    </div>

                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="OtherIncomePA" className="form-label">Income P.A.</   label>
                                    <div className='row'>
                                    <div className='col-md-8'>
                                      <Field type="number" className="form-control shadow inputDesign"
                                      id="OtherIncomePA" name='OtherIncomePA' placeholder="Income P.A."/>
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='OtherIncomePA' />
                                    </div>
                                    <div className='col-md-4'>
                                    <Field
                                              as='select'
                                              name="OtherIncomePAType"
                                              id="OtherIncomePAType"
                                              className="form-select shadow  inputDesign"
                                            >
                                              <option value=''>Select</option>
                                              <option value="dollor">$</option>
                                              <option value="percentage">%</option>
                                            </Field>
                                            <ErrorMessage name="OtherIncomePAType" component='div' className="text-danger fw-bold"/>
                                    </div>
                                    </div>  
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="OtherTotalIncomePA" className="form-label">Total Income P.A.</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                      id="OtherTotalIncomePA" name='OtherTotalIncomePA' readOnly/>
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='OtherTotalIncomePA' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                          <div className="mb-3">
                                        <label  className="form-label">
                                        Reinvestment Income
                                        </label>
                                      {/* switch button style */}
                                        <div className="form-check form-switch m-0 p-0 ">
                                      <div className="radiobutton">
                                        <input type="radio" name="OtherReinvestedIncome"
                                        id="OtherReinvestedOpt1" value="Yes"
                                        onChange={handleChange}
                                        checked={values.OtherReinvestedIncome==="Yes"}
                                        />
                                        <label htmlFor="OtherReinvestedOpt1" className="label1">
                                          <span>YES</span>
                                        </label>
                                        <input type="radio" name="OtherReinvestedIncome"
                                        id="OtherReinvestedOpt2" value="No"
                                        onChange={handleChange}
                                        checked={values.OtherReinvestedIncome==="No"}
                                      />
                                        <label htmlFor="OtherReinvestedOpt2" className="label2">
                                          <span>NO</span>
                                        </label>
                                      </div>                                  
                                        </div>
                                          </div>    
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="OtherRegularInvestmentsPA" className="form-label">Regular Investments P.A.</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                      id="OtherRegularInvestmentsPA" name='OtherRegularInvestmentsPA' placeholder="Regular Investments P.A."/>
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='OtherRegularInvestmentsPA' />
                                    </div>            
                                    </div>

                                    </div>
                                    
                                    </div>
                                    {/* Solicitor */}

                                    {/* Solicitor */}
                                    <div className=' '>
                                    <h3 className=''>
                                    <div className="iconContainerLg mx-1">
                                        <img className="img-fluid" src={lawyer} alt="" />

                                        </div>
                                        Other #2
                                    
                                        </h3>
                                    <div className="row">
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="OtherInvestmentName2" className="form-label">Name of Investment</   label>
                                      <Field type="text" className="form-control shadow inputDesign" 
                                      id="OtherInvestmentName2" name='OtherInvestmentName2' placeholder="Name of Investment"/>
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='OtherInvestmentName2' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="OtherCurrentValue2" className="form-label">Current Value</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                      id="OtherCurrentValue2" name='OtherCurrentValue2' placeholder="Current Value"/>
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='OtherCurrentValue2' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="OtherCostBase2" className="form-label">Cost Base</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                      id="OtherCostBase2" name='OtherCostBase2' placeholder="Cost Base"/>
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='OtherCostBase2' />
                                    </div>            
                                    </div>                            
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="OtherPurchaseDate2" className="form-label">Purchase Date</   label>
                                      <Field type="date" className="form-control shadow inputDesign"
                                      id="OtherPurchaseDate2" name='OtherPurchaseDate2' />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='OtherPurchaseDate2' />
                                    </div>            
                                    </div>

                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="OtherIncomePA2" className="form-label">Income P.A.</   label>
                                    <div className='row'>
                                    <div className='col-md-8'>
                                      <Field type="number" className="form-control shadow inputDesign"
                                      id="OtherIncomePA2" name='OtherIncomePA2' placeholder="Income P.A."/>
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='OtherIncomePA2' />
                                    </div>
                                    <div className='col-md-4'>
                                    <Field
                                              as='select'
                                              name="OtherIncomePAType2"
                                              id="OtherIncomePAType2"
                                              className="form-select shadow  inputDesign"
                                            >
                                              <option value=''>Select</option>
                                              <option value="dollor">$</option>
                                              <option value="percentage">%</option>
                                            </Field>
                                            <ErrorMessage name="OtherIncomePAType2" component='div' className="text-danger fw-bold"/>
                                    </div>
                                    </div>  
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="OtherTotalIncomePA2" className="form-label">Total Income P.A.</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                      id="OtherTotalIncomePA2" name='OtherTotalIncomePA2' readOnly/>
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='OtherTotalIncomePA22' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                          <div className="mb-3">
                                        <label  className="form-label">
                                        Reinvestment Income
                                        </label>
                                      {/* switch button style */}
                                        <div className="form-check form-switch m-0 p-0 ">
                                      <div className="radiobutton">
                                        <input type="radio" name="OtherReinvestedIncome2"
                                        id="OtherReinvested2Opt1" value="Yes"
                                        onChange={handleChange}
                                        checked={values.OtherReinvestedIncome2==="Yes"}
                                        />
                                        <label htmlFor="OtherReinvested2Opt1" className="label1">
                                          <span>YES</span>
                                        </label>
                                        <input type="radio" name="OtherReinvestedIncome2"
                                        id="OtherReinvested2Opt2" value="No"
                                        onChange={handleChange}
                                        checked={values.OtherReinvestedIncome2==="No"}
                                      />
                                        <label htmlFor="OtherReinvested2Opt2" className="label2">
                                          <span>NO</span>
                                        </label>
                                      </div>                                  
                                        </div>
                                          </div>    
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="OtherRegularInvestmentsPA2" className="form-label">Regular Investments P.A.</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                      id="OtherRegularInvestmentsPA2" name='OtherRegularInvestmentsPA2' placeholder="Regular Investments P.A."/>
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='OtherRegularInvestmentsPA2' />
                                    </div>            
                                    </div>

                                    </div>
                                    
                                    </div>
                                    {/* Solicitor */}

                                    {/* TermDeposit Account Detail Form */}
                              
                                </Modal.Body>
                                <Modal.Footer>
                                  <div className="col-md-12">
                                    <button
                                      className="float-end btn w-25  bgColor modalBtn"
                                      // onClick={TermDeposithandleClose}
                                      type='submit'
                                    >
                                      Save
                                    </button>
                                    <button
                                      className="float-end btn w-25  btn-outline  backBtn mx-3"
                                      onClick={OthershandleClose}
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
                        
                          <div   className='table-responsive my-3'>
                                <table className="table table-bordered table-hover text-center">
                                    <thead className="text-light" id="tableHead">
                                      <tr>
                                        <th>Name of Investments</th>
                                        <th>Current Value</th>
                                        <th>Income P.A.</th>
                                        <th>Reinvest Income</th>
                                      </tr>
                                    </thead>

                                <tbody>
                                
                                  {/* Australian Share Market 1  */}
                                {  OthersList.map((elem,index)=>{
                                    let { OtherInvestmentName, OtherCurrentValue, OtherIncomePA, OtherReinvestedIncome }=elem;
                                    if(OthersList[0].OtherInvestmentName !=='' ||
                                    OthersList[0].OtherCurrentValue !=='' ){
                                      return(
                                        <tr key={index}>
                                          {/* <td className='fw-bold'>Bank #1</td> */}
                                            <td>{OtherInvestmentName}</td>
                                            <td>{OtherCurrentValue}</td>
                                            <td>{OtherIncomePA}</td>
                                            <td>{OtherReinvestedIncome}</td>
                                            {/* <td >
                                            <button  type='btn' onClick={(e)=>deleteHandler(elem)} className='btn btn-danger btn-sm'>delete</button>
                                            <button  type='btn' onClick={(e)=>updateHandler(elem)} className='btn btn-warning btn-sm mx-2'>update</button>
                                    
                                            </td>  */}
                                        
                                        </tr>
                                        );
                                    }
                                    else{
                                
                                    }

                                  }) }
                                  {/* Australian Share Market 1 */}
                                
                                  {/* Australian Share Market 2 */}
                                {  OthersList.map((elem,index)=>{
                                    let { OtherInvestmentName2, OtherCurrentValue2, OtherIncomePA2, OtherReinvestedIncome2 }=elem;
                                    if(OthersList[0].OtherInvestmentName2 !=='' ||
                                    OthersList[0].OtherCurrentValue2 !=='' ){
                                      return(
                                        <tr key={index}>
                                          {/* <td className='fw-bold'>Bank #1</td> */}
                                            <td>{OtherInvestmentName2}</td>
                                            <td>{OtherCurrentValue2}</td>
                                            <td>{OtherIncomePA2}</td>
                                            <td>{OtherReinvestedIncome2}</td>
                                            {/* <td >
                                            <button  type='btn' onClick={(e)=>deleteHandler(elem)} className='btn btn-danger btn-sm'>delete</button>
                                            <button  type='btn' onClick={(e)=>updateHandler(elem)} className='btn btn-warning btn-sm mx-2'>update</button>
                                    
                                            </td>  */}
                                        
                                        </tr>
                                        );
                                    }
                                    else{
                                
                                    }

                                  }) }
                                  {/* Australian Share Market 2 */}

                                </tbody>
                                </table>
                               </div>
                          </div>
                          {/* Others Details */} 
                          

                          <div className="row mt-5 mb-3">
                            <div className="col-md-12">
                              <button  type='submit' className="float-end btn w-25  bgColor modalBtn">Next</button>
                              <button className="float-end btn w-25  btn-outline  backBtn mx-3" onClick={BackFunction}>Back</button>
                            </div>
                          </div>
                          </Form>
    }
    </Formik>    
        </div>
        </div>
      </div>
    </div>
  )
}

export default Investments
