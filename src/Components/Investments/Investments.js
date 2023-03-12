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



function Investments() {
    
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
    TermDepositIncomePA: '',
    TermDepositIncomePAType: '',
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
    BankCurrentValue: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0).test("Is positive?", "Must be a positive value", (value) => value > 0) ,
    BankFinancialInstitution: Yup.string().required('Required') ,
    BankIncomePA: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0).test("Is positive?", "Must be a positive value", (value) => value > 0),
    BankIncomePAType: Yup.string().required("Required"),
    BankIncomeinDollars: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0).test("Is positive?", "Must be a positive value", (value) => value > 0) ,
    BankRegularSavings: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0).test("Is positive?", "Must be a positive value", (value) => value > 0) ,

    Bank2CurrentValue: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0).test("Is positive?", "Must be a positive value", (value) => value > 0) ,
    Bank2FinancialInstitution: Yup.string().required('Required') ,
    Bank2IncomePA: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0).test("Is positive?", "Must be a positive value", (value) => value > 0),
    Bank2IncomePAType: Yup.string().required("Required"),
    Bank2IncomeinDollars: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0).test("Is positive?", "Must be a positive value", (value) => value > 0) ,
    Bank2RegularSavings: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0).test("Is positive?", "Must be a positive value", (value) => value > 0) ,



    TermDepositCurrentValue: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0).test("Is positive?", "Must be a positive value", (value) => value > 0) ,
    TermDepositFinancialInstitution: Yup.string().required('Required') ,
    TermDepositIncomePA: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0).test("Is positive?", "Must be a positive value", (value) => value > 0),
    TermDepositIncomePAType: Yup.string().required("Required"),
    TermDepositIncomeinDollars: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0).test("Is positive?", "Must be a positive value", (value) => value > 0) ,
    TermDepositRegularSavings: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0).test("Is positive?", "Must be a positive value", (value) => value > 0) ,

    TermDeposit2CurrentValue: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0).test("Is positive?", "Must be a positive value", (value) => value > 0) ,
    TermDeposit2FinancialInstitution: Yup.string().required('Required') ,
    TermDeposit2IncomePA: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0).test("Is positive?", "Must be a positive value", (value) => value > 0),
    TermDeposit2IncomePAType: Yup.string().required("Required"),
    TermDeposit2IncomeinDollars: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0).test("Is positive?", "Must be a positive value", (value) => value > 0) ,
    TermDeposit2RegularSavings: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0).test("Is positive?", "Must be a positive value", (value) => value > 0) ,



    AustralianMarketInvestmentName: Yup.string().required('Required'),
    AustralianMarketNumberOfShares: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0).test("Is positive?", "Must be a positive value", (value) => value > 0),
    AustralianMarketSharePrice: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0).test("Is positive?", "Must be a positive value", (value) => value > 0),
    AustralianMarketTotalShareValue: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0).test("Is positive?", "Must be a positive value", (value) => value > 0),
    AustralianMarketCostBase: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0).test("Is positive?", "Must be a positive value", (value) => value > 0),
    AustralianMarketPurchaseDate: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0).test("Is positive?", "Must be a positive value", (value) => value > 0),
    AustralianMarketIncomePA: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0).test("Is positive?", "Must be a positive value", (value) => value > 0),
    AustralianMarketIncomePAType: Yup.string().required('Required'),
    AustralianMarketTotalIncomePA: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0).test("Is positive?", "Must be a positive value", (value) => value > 0),
    AustralianMarketFrankedAmount: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0).test("Is positive?", "Must be a positive value", (value) => value > 0),
    AustralianMarketRegInvestments: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0).test("Is positive?", "Must be a positive value", (value) => value > 0),

    AustralianPortfolioLoanType: Yup.string().required("Required"),
    AustralianPortfolioCurrentBalance: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
    AustralianPortfolioLender: Yup.string().required("Required"),
    AustralianInterestRatePA: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
    AustralianPortfolioLoanTerm: Yup.string().required("Required"),
    AustralianPortfolioLoanType2: Yup.string().required("Required"),
    AustralianPortfolioDeductibleLoanAmount: Yup.string().required("Required"),
    AustralianPortfolioYearRemaining: Yup.string().required("Required"),

    ManagedFundsPlatformName: Yup.string().required("Required"),
    ManagedFundsInvestmentName: Yup.string().required("Required"),
    ManagedFundsNumberOfShares: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
    ManagedFundsSharePrice: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
    ManagedFundsCurrentValue: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
    ManagedFundsOriginalInvestment: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
    ManagedFundsPurchaseDate: Yup.string().required("Required"),
    ManagedFundsIncomePA: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
    ManagedFundsIncomePAType: Yup.string().required("Required"),
    ManagedFundsTotalIncomePA: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
    ManagedFundsRegInvestments: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),

    ManagedFundsPortfolioLoanType: Yup.string().required("Required"),
    ManagedFundsPortfolioCurrentBalance: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
    ManagedFundsPortfolioLender: Yup.string().required("Required"),
    ManagedFundsPortfolioInterestRatePA: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
    ManagedFundsPortfolioLoanTerm: Yup.string().required("Required"),
    ManagedFundsPortfolioLoanType2: Yup.string().required("Required"),
    ManagedFundsPortfolioDeductibleLoanAmount: Yup.string().required("Required"),
    ManagedFundsPortfolioYearRemaining: Yup.string().required("Required"),

    InvestmentBondsPlatformName: Yup.string().required("Required"),
    InvestmentBondsInvestmentName: Yup.string().required("Required"),
    InvestmentBondsNumberOfShares: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
    InvestmentBondsSharePrice: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
    InvestmentBondsCurrentValue: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
    InvestmentBondsOriginalInvestment: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
    InvestmentBondsPurchaseDate: Yup.string().required("Required"),
    InvestmentBondsIncomePA: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
    InvestmentBondsIncomePAType: Yup.string().required("Required"),
    InvestmentBondsTotalIncomePA: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
    InvestmentBondsRegInvestments: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),

    OtherInvestmentName: Yup.string().required("Required"),
    OtherCurrentValue: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
    OtherCostBase: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
    OtherPurchaseDate: Yup.string().required("Required"),
    OtherIncomePA: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
    OtherIncomePAType: Yup.string().required("Required"),
    // OtherTotalIncomePA: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
    OtherIncomePAType: Yup.string().required("Required"),
    OtherRegularInvestmentsPA: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),

    OtherInvestmentName2: Yup.string().required("Required"),
    OtherCurrentValue2: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
    OtherCostBase2: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0)
    .test(
      "Is positive?",
      "Cost Base must be a positive value",

      (value) => value > 0
    ),
    OtherPurchaseDate2: Yup.string().required("Required"),
    OtherIncomePA2: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
    OtherIncomePAType2: Yup.string().required("Required"),
    // OtherTotalIncomePA2: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
    OtherIncomePAType2: Yup.string().required("Required"),
    OtherRegularInvestmentsPA2: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),

    InvestmentPropertiesCurrentValue: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
    InvestmentPropertiesClientOwnership: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
    InvestmentPropertiesCostBase: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
    InvestmentPropertiesAddress: Yup.string().required("Required"),
    InvestmentPropertiesPostcode: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
    InvestmentPropertiesRentalIncome: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
    InvestmentPropertiesFrequency: Yup.string().required("Required"),
    InvestmentPropertiesTotalAnnualIncome: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
    InvestmentPropertiesExpensesPA: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
    InvestmentPropertiesCurrentBalance: Yup.number().when('InvestmentPropertiesLoanAttached',{
      is: val => val && val.length === 3,
      then: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      otherwise: Yup.number().notRequired()
    }),
    InvestmentPropertiesClientBorrowing: Yup.number().when('InvestmentPropertiesLoanAttached',{
      is: val => val && val.length === 3,
      then: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      otherwise: Yup.number().notRequired()
    }),
    InvestmentPropertiesLender: Yup.string().when('InvestmentPropertiesLoanAttached',{
      is: val => val && val.length === 3,
      then: Yup.string().required("Required"),
      otherwise: Yup.string().notRequired()
    }),
    InvestmentPropertiesRepaymentAmount: Yup.number().when('InvestmentPropertiesLoanAttached',{
      is: val => val && val.length === 3,
      then: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      otherwise: Yup.number().notRequired()
    }),
    InvestmentPropertiesFrequency2: Yup.string().when('InvestmentPropertiesLoanAttached',{
      is: val => val && val.length === 3,
      then: Yup.string().required("Required"),
      otherwise: Yup.string().notRequired()
    }),
    InvestmentPropertiesAnnualRepayment: Yup.number().when('InvestmentPropertiesLoanAttached',{
      is: val => val && val.length === 3,
      then: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      otherwise: Yup.number().notRequired()
    }),
    InvestmentPropertiesInterestRatePA: Yup.number().when('InvestmentPropertiesLoanAttached',{
      is: val => val && val.length === 3,
      then: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      otherwise: Yup.number().notRequired()
    }),
    InvestmentPropertiesLoanTerm: Yup.string().when('InvestmentPropertiesLoanAttached',{
      is: val => val && val.length === 3,
      then: Yup.string().required("Required"),
      otherwise: Yup.string().notRequired()
    }),
    InvestmentPropertiesLoanType: Yup.string().when('InvestmentPropertiesLoanAttached',{
      is: val => val && val.length === 3,
      then: Yup.string().required("Required"),
      otherwise: Yup.string().notRequired()
    }),
    InvestmentPropertiesDebtLoanAmount: Yup.number().when('InvestmentPropertiesLoanAttached',{
      is: val => val && val.length === 3,
      then: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      otherwise: Yup.number().notRequired()
    }),
    InvestmentPropertiesYearsRemaining: Yup.string().when('InvestmentPropertiesLoanAttached',{
      is: val => val && val.length === 3,
      then: Yup.string().required("Required"),
      otherwise: Yup.string().notRequired()
    })
  })

  let Client_onSubmit = (Values) => {
    console.log(Values)
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
    InvestmentModalCorporateFees: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0).test("Is positive?", "Must be a positive value", (value) => value > 0) ,
    InvestmentModalCouncilRates: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0).test("Is positive?", "Must be a positive value", (value) => value > 0) ,
    InvestmentModalLawnMoving: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0).test("Is positive?", "Must be a positive value", (value) => value > 0) ,
    InvestmentModalInsurance: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0).test("Is positive?", "Must be a positive value", (value) => value > 0) ,
    InvestmentModalLandTax: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0).test("Is positive?", "Must be a positive value", (value) => value > 0) ,
    InvestmentModalRepairs: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0).test("Is positive?", "Must be a positive value", (value) => value > 0) ,
    InvestmentModalWaterCharges: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0).test("Is positive?", "Must be a positive value", (value) => value > 0) ,
    InvestmentModalOthers: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0).test("Is positive?", "Must be a positive value", (value) => value > 0) ,
    InvestmentModalTelephone: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0).test("Is positive?", "Must be a positive value", (value) => value > 0) ,
    InvestmentModalProfessionalFees: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0).test("Is positive?", "Must be a positive value", (value) => value > 0) ,
    InvestmentModalAllOthers: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0).test("Is positive?", "Must be a positive value", (value) => value > 0)
  })

  let InvestmentModal_onSubmit = (Values) => [

  ]


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
  console.log(values)
  Navigate('/Estate-Planning')
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
        <Formik initialValues={initialValues} onSubmit={onSubmit} enableReinitialize>
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
                              <Field type="text" className="form-control shadow inputDesign" 
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
                                validationSchema={Client_validationSchema}
                                onSubmit={Client_onSubmit}>
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
                                checked={values.TermDepositReinvestedIncome==="Yes"}
                                />
                                <label htmlFor="AustralianMarketReinvestedOpt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="AustralianMarketReinvestedIncome"
                                id="AustralianMarketReinvestedOpt2" value="No"
                                onChange={handleChange}
                                checked={values.TermDepositReinvestedIncome==="No"}
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
                                validationSchema={Client_validationSchema}
                                onSubmit={Client_onSubmit}>
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
                                validationSchema={Client_validationSchema}
                                onSubmit={Client_onSubmit}>
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
                                validationSchema={Client_validationSchema}
                                onSubmit={Client_onSubmit}>
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
                                validationSchema={Client_validationSchema}
                                onSubmit={Client_onSubmit}>
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
                                validationSchema={Client_validationSchema}
                                onSubmit={Client_onSubmit}>
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
