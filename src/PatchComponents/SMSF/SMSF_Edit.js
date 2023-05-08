import { React, useState , useEffect } from 'react';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Modal } from 'react-bootstrap';
import axios from 'axios';
import plus from './images/plus.svg'
import lawyer from './images/lawyer.svg'
import notebook from './images/notebook.svg'
import { NavLink, useNavigate } from 'react-router-dom';

function SMSF_Edit() {

const [accumulationData, setAccumulationData] = useState([])
const [beneficiariesData, setBeneficiariesData] = useState([])
const [contributionData, setContributionData] = useState([])
const [pensionAccountData, setPensionAccountData] = useState([])
const [bankAccountsData, setBankAccountsData] = useState([])
const [termDepositData, setTermDepositData] = useState([])
const [AustralianShareData, setAustralianShareData] = useState([])

const [AustralianPortfolioData, setAustralianPortfolioData] = useState([])
const [managedFundData, setManagedFundData] = useState([])
const [managedLoanData, setManagedLoanData] = useState([])
const [investmentData, setInvestmentData] = useState([])
const [investmentInnerData, setInvestmentInnerData] = useState([])
const [SMSFData, setSMSFData] = useState([])

const [SMSF_FormData, setSMSF_FormData] = useState([])





let email=localStorage.getItem("EditClient")
  useEffect(() => {

       // SMSFData
       axios
       .get(`http://localhost:7000/Client-SMSF-Client`)
       .then((res) => {
       let clientObj=(res.data)
       let clientFilterObj=clientObj.filter((item) => item.Email ==email);
       setSMSFData(clientFilterObj[0])
          // console.log("SMSFData",clientFilterObj[0])
         
       })

          // SMSF_FormData
     axios
     .get(`http://localhost:7000/Client-SMSFForm`)
     .then((res) => {
     let clientObj=(res.data)
     let clientFilterObj=clientObj.filter((item) => item.Email ==email);
     setSMSF_FormData(clientFilterObj[0])
        // console.log("SMSF_FormData",clientFilterObj[0])
       
     })
   
     // accumulation
     axios
     .get(`http://localhost:7000/Client-SMSF-Accumulation`)
     .then((res) => {
     let clientObj=(res.data)
     let clientFilterObj=clientObj.filter((item) => item.Email ==email);
     setAccumulationData(clientFilterObj[0])
        // console.log("accumulation",clientFilterObj[0])
       
     })

    //  Beneficiaries 
     axios
     .get(`http://localhost:7000/Client-SMSF-Beneficiary`)
     .then((res) => {
     let clientObj=(res.data)
     let clientFilterObj=clientObj.filter((item) => item.Email ==email);
     setBeneficiariesData(clientFilterObj[0])
        // console.log("Beneficiaries",clientFilterObj[0])
       
     })

    //  Contribution
      axios
     .get(`http://localhost:7000/Client-SMSF-Contribution`)
     .then((res) => {
     let clientObj=(res.data)
     let clientFilterObj=clientObj.filter((item) => item.Email ==email);
     setContributionData(clientFilterObj[0])
      // console.log("contribution",clientFilterObj[0])
       
     })

      //  Pension Account
      axios
     .get(`http://localhost:7000/Client-SMSF-PensionAccount`)
     .then((res) => {
     let clientObj=(res.data)
     let clientFilterObj=clientObj.filter((item) => item.Email ==email);
     setPensionAccountData(clientFilterObj[0])
      // console.log("PensionAccount",clientFilterObj[0])
       
     })

      //  Bank Accounts
      axios
     .get(`http://localhost:7000/Client-SMSF-BankAccounts`)
     .then((res) => {
     let clientObj=(res.data)
     let clientFilterObj=clientObj.filter((item) => item.Email ==email);
     setBankAccountsData(clientFilterObj[0])
      // console.log("BankAccounts",clientFilterObj[0])
       
     })

      //  Term Deposit Accounts
      axios
     .get(`http://localhost:7000/Client-SMSF-TermDeposit`)
     .then((res) => {
     let clientObj=(res.data)
     let clientFilterObj=clientObj.filter((item) => item.Email ==email);
     setTermDepositData(clientFilterObj[0])
      // console.log("TermDepositAccounts",clientFilterObj[0])
       
     })

      //  Australian Share Market
      axios
     .get(`http://localhost:7000/Client-SMSF-AustralianShareMarket`)
     .then((res) => {
     let clientObj=(res.data)
     let clientFilterObj=clientObj.filter((item) => item.Email ==email);
     setAustralianShareData(clientFilterObj[0])
      // console.log("AustralianShareMarket",clientFilterObj[0])
       
     })


       //  Australian portfolio 
      axios
     .get(`http://localhost:7000/Client-SMSF-AustralianSharePortfolio/Australian-Market-Portfolio`)
     .then((res) => {
     let clientObj=(res.data)
     let clientFilterObj=clientObj.filter((item) => item.Email ==email);
     setAustralianPortfolioData(clientFilterObj[0])
      // console.log("AustralianPortfolio ",clientFilterObj[0])
       
     })

         //  Managed Funds 
      axios
     .get(`http://localhost:7000/Client-SMSF-ManagedFunds`)
     .then((res) => {
     let clientObj=(res.data)
     let clientFilterObj=clientObj.filter((item) => item.Email ==email);
     setManagedFundData(clientFilterObj[0])
      // console.log("ManagedFunds ",clientFilterObj[0])
       
     })

        //  Managed loan  
      axios
     .get(`http://localhost:7000/Client-SMSF-ManagedFundsPortfolio`)
     .then((res) => {
     let clientObj=(res.data)
     let clientFilterObj=clientObj.filter((item) => item.Email ==email);
     setManagedLoanData(clientFilterObj[0])
      // console.log("Managedloan  ",clientFilterObj[0])
     })

     //  Investment Properties
      axios
     .get(`http://localhost:7000/Client-SMSF-InvestmentProperties`)
     .then((res) => {
     let clientObj=(res.data)
     let clientFilterObj=clientObj.filter((item) => item.Email ==email);
     setInvestmentData(clientFilterObj[0])
      // console.log("InvestmentProperties  ",clientFilterObj[0])
     })

     //  Investment Properties Inner Modal
      axios
     .get(`http://localhost:7000/Client-SMSF-InvestmentModal`)
     .then((res) => {
     let clientObj=(res.data)
     let clientFilterObj=clientObj.filter((item) => item.Email ==email);
     setInvestmentInnerData(clientFilterObj[0])
      // console.log("InvestmentPropertiesInnerModal  ",clientFilterObj[0])
     })



  }, [])
  


    const [Accumulation, setAccumulation] = useState(false);
    const [Accumulationshow, setAccumulationShow] = useState(false);
    const AccumulationhandleClose = () => setAccumulationShow(false);
    const AccumulationhandleShow = () => setAccumulationShow(true);
    let AccumulationHandler=(elem)=>{
        if (elem==="No"){
        setAccumulation(false)
        }
        else{
        setAccumulation(true)
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
    
    const [BankAccounts, setBankAccounts] = useState(false);
    const [BankAccountsshow, setBankAccountsShow] = useState(false);
    const BankAccountshandleClose = () => setBankAccountsShow(false);
    const BankAccountshandleShow = () => setBankAccountsShow(true);
    let BankAccountsHandler=(elem)=>{
        if (elem==="No"){
        setBankAccounts(false)
        }
        else{
        setBankAccounts(true)
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
    
    const [AustralianShare, setAustralianShare] = useState(false);
    const [AustralianShareshow, setAustralianShareShow] = useState(false);
    const AustralianSharehandleClose = () => setAustralianShareShow(false);
    const AustralianSharehandleShow = () => setAustralianShareShow(true);
    let AustralianShareHandler=(elem)=>{
        if (elem==="No"){
        setAustralianShare(false)
        }
        else{
        setAustralianShare(true)
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

    let initialValues = {
     PensionRadio :SMSFData.PensionAccount,
     AccumulationRadio:SMSFData. Accumulation,
     BankAccountsRadio :SMSFData.BankAccount,
     TermDepositRadio :SMSFData.TermDepositAccount,
     AustralianShareRadio :SMSFData.AustralianShareMarket,
     ManagedFundsRadio :SMSFData.ManagedFunds,
     InvestmentPropertiesRadio :SMSFData.InvestmentProperties,
     loansAssociatedradio :SMSFData.AustralianSharePortfolio,
     managedloansAssociatedradio :SMSFData.ManagedFundsPortfolio,
      
      SMSFFundName:SMSF_FormData.FundName,
      SMSFFundType:SMSF_FormData.FundType,
      SMSFABN:SMSF_FormData.ABN,
      SMSFTrusteeType:SMSF_FormData.TrusteeType,
      SMSFEstablishmentDate:SMSF_FormData.EstablishmentDate,
      SMSFAssetsSegregated:SMSF_FormData.AssetsSegregated,
      SMSFBorrowingInvestment:SMSF_FormData.InvestmentBorrowing,
      SMSFAcquiringInsurances:SMSF_FormData.AcquireInsurances,
      SMSFAccountant:SMSF_FormData.AccountantName,
      SMSFAuditor:SMSF_FormData.AuditorName,
      SMSFAccountingAuditing:SMSF_FormData.AccountingAuditing,
      SMSFATOLevy:SMSF_FormData.ATOLevy,
    }

    

    let validationSchema = Yup.object({
      
      SMSFFundName: Yup.string().required("Required"),
      SMSFFundType: Yup.string().required("Required"),
      SMSFABN: Yup.string().required("Required"),
      SMSFTrusteeType: Yup.string().required("Required"),
      SMSFEstablishmentDate: Yup.string().required("Required"),
      SMSFAccountant: Yup.string().required("Required"),
      SMSFAuditor: Yup.string().required("Required"),
      SMSFAccountingAuditing: Yup.string().required("Required"),
      SMSFATOLevy: Yup.string().required("Required"),

    })

    let Navigate = useNavigate();
    function BackFunction(){
        Navigate('/Edit-Super-And-Retirment');
    }
    let onSubmit = (Values) => {

     
      let SMSF_Form={
        Email:localStorage.getItem("ClientEmail"),
        FundName:Values.SMSFFundName,
        FundType:Values.SMSFFundType,
        ABN:Values.SMSFABN,
        TrusteeType:Values.SMSFTrusteeType,
        EstablishmentDate:Values.SMSFEstablishmentDate,
        AssetsSegregated:Values.SMSFAssetsSegregated,
        InvestmentBorrowing:Values.SMSFBorrowingInvestment,
        AcquireInsurances:Values.SMSFAcquiringInsurances,
        AccountantName:Values.SMSFAccountant,
        AuditorName:Values.SMSFAuditor,
        AccountingAuditing:Values.SMSFAccountingAuditing,
        ATOLevy:Values.SMSFATOLevy,
      }
      let myData={
        Email: localStorage.getItem("ClientEmail"),
        PensionAccount:Values.PensionRadio,
        Accumulation:Values. AccumulationRadio,
        BankAccount:Values.BankAccountsRadio,
        TermDepositAccount:Values.TermDepositRadio,
        AustralianShareMarket:Values.AustralianShareRadio,
        ManagedFunds:Values.ManagedFundsRadio,
        InvestmentProperties:Values.InvestmentPropertiesRadio,
        AustralianSharePortfolio:Values.loansAssociatedradio,
        ManagedFundsPortfolio:Values.managedloansAssociatedradio,
      }
      // Post Api
      console.log(myData)
      axios
      .post('http://localhost:7000/Client-SMSF/Add-Client-SMSF', myData)
      .then((res) => console.log('Client  Added Successfully!')) 
      

      console.log(SMSF_Form)
      axios
      .post('http://localhost:7000/Client-SMSFForm/Add-Client-SMSFForm', SMSF_Form)
      .then((res) => {
      Navigate('/Edit-Investment-Trust');
        console.log('Client Form  Added Successfully!');
      })
      

      }

      

    let Client_initialValues = {

      // Bank123
    CurrentValue1:bankAccountsData.CurrentValue1,
    FinancialInstitution1:bankAccountsData.FinancialInstitution1,
    IncomeYield1:bankAccountsData.IncomeYield1,
    AnnualIncome1:bankAccountsData.AnnualIncome1,
    CurrentValue2:bankAccountsData.CurrentValue2,
    FinancialInstitution2:bankAccountsData.FinancialInstitution2,
    IncomeYield2:bankAccountsData.IncomeYield2,
    AnnualIncome2:bankAccountsData.AnnualIncome2,
    CurrentValue3:bankAccountsData.CurrentValue3,
    FinancialInstitution3:bankAccountsData.FinancialInstitution3,
    IncomeYield3:bankAccountsData.IncomeYield3,
    AnnualIncome3:bankAccountsData.AnnualIncome3,
        
     
    // Accumulation123
      AccumulationMemberName:accumulationData.MemberName,
      AccumulationEligibleDate:accumulationData.EligibleDate,

       AccumulationCurrentBalance:accumulationData.CurrentBalance ,
       AccumulationTaxFree:accumulationData.TaxFree ,
       AccumulationTaxed:accumulationData.Taxed ,
       AccumulationNonPreservedRestriction:accumulationData.NonPreservedRestriction ,
       AccumulationNonPreservedUnRestriction:accumulationData.NonPreservedUnRestriction ,
       AccumulationPreservedAmount:accumulationData.PreservedAmount ,

      //  pension123
    PensionMemberName:pensionAccountData.MemberName,
    PensionType:pensionAccountData.PensionType,
    PensionCommencementDate:pensionAccountData.CommencementDateDate,
    PensionCurrentBalance:pensionAccountData.CurrentBalance,
    PensionTaxFree:pensionAccountData.TaxFree,
    PensionTaxed:pensionAccountData.Taxed,
    PensionPurchasePrice:pensionAccountData.OriginalPurchasePrice,
    PensionFrequency:pensionAccountData.Frequency,
    PensionRegularIncomeDrawn:pensionAccountData.RegularIncomeDrawn,
    PensionMinimumRequired:pensionAccountData.MinimumRequired,
    PensionRelevantNumber:pensionAccountData.RelevantNumber,
    PensionLumpsumTaken:pensionAccountData.LumpsumTaken,
    PensionDeductibleAmount:pensionAccountData.DeductibleAmount,
      // pensionAccountData

      // Australian123

      AustralianShareInvestmentName:AustralianShareData.InvestmentName,
      AustralianShareNoOfShares:AustralianShareData.NoOfShares,
      AustralianShareCurrentPrice:AustralianShareData.CurrentSharePrice,
      AustralianShareTotalValue:AustralianShareData.TotalShareValue,
      AustralianShareCostBase:AustralianShareData.CostBase,
      AustralianSharePurchaseDate:AustralianShareData.PurchaseDate,
      AustralianShareIncomePA:AustralianShareData.IncomePA,
      AustralianShareIncomePA2:AustralianShareData.IncomePAType,
      AustralianShareTotalIncomePA:AustralianShareData.TotalIncomePA,
      AustralianShareReinvestIncome:AustralianShareData.ReinvestIncome,
      AustralianShareFrankedAmount:AustralianShareData.FrankedAmount,
      AustralianShareRegInvestmentsPA:AustralianShareData.RegInvestmentsPA,

      // Australian 

      // ManagedFunds123

    ManagedFundsPlatformName:managedFundData.PlatformName,
    ManagedFundsInvestmentName:managedFundData.InvestmentName,
    ManagedFundsNoOfShares:managedFundData.NoOfShares,
    ManagedFundsCurrentPrice:managedFundData.CurrentSharePrice,
    ManagedFundsCurrentValue:managedFundData.CurrentShareValue,
    ManagedFundsOriginalInvestment:managedFundData.OriginalInvestment,
    ManagedFundsPurchaseDate:managedFundData.PurchaseDate,
    ManagedFundsIncomePA:managedFundData.IncomePA,
    ManagedFundsIncomePA2:managedFundData.IncomePAType,
    ManagedFundsTotalIncomePA:managedFundData.TotalIncomePA,
    ManagedFundsReinvestIncome:managedFundData.ReinvestIncome,
    ManagedFundsRegInvestmentsPA:managedFundData.RegInvestmentsPA,

    
    // investment123


    InvestmentPropertiesCurrentValue:investmentData.CurrentValue,
    InvestmentPropertiesCostBase:investmentData.CostBase,
    InvestmentPropertiesAddress:investmentData.PropertyAddress,
    InvestmentPropertiesPostcode:investmentData.PostCode,
    InvestmentPropertiesRentalIncome:investmentData.RentalIncome,
    InvestmentPropertiesFrequency:investmentData.Frequency,
    InvestmentPropertiesTotalAnnualIncome:investmentData.TotalAnnualIncome,
    InvestmentPropertiesExpensesPA:investmentData.ExpensesPA,
    InvestmentPropertiesLoanAttached:investmentData.LoanAttached,
    InvestmentPropertiesCurrentBalance:investmentData.CurrentBalance,
    InvestmentPropertiesLender:investmentData.Lender,
    InvestmentPropertiesRepaymentAmount:investmentData.RepaymentAmount,
    InvestmentPropertiesFrequency2:investmentData.Frequency2,
    InvestmentPropertiesAnnualRepayment:investmentData.AnnualRepayments,
    InvestmentPropertiesInterestRatePA:investmentData.InterestRatePA,
    InvestmentPropertiesLoanTerm:investmentData.LoanTerm,
    InvestmentPropertiesLoanType:investmentData.LoanType,
    InvestmentPropertiesDebtLoanAmount:investmentData.DebtAmountLoan,
    InvestmentPropertiesYearsRemaining:investmentData.YearsRemaining,
    
    }
    

    let Client_validationSchema = Yup.object({   

      // AnnualIncome1: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      // IncomeYield1: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      // FinancialInstitution1: Yup.string().required("Required"),
      // CurrentValue1: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      // AnnualIncome2: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      // IncomeYield2: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      // FinancialInstitution2: Yup.string().required("Required"),
      // CurrentValue2: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),

        
      // AnnualIncome1: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      // TermDepositIncomeYield: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      // TermDepositFinancialInstitution: Yup.string().required("Required"),
      // CurrentValue1: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      // TermDeposit2AnnualIncome: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      // TermDeposit2IncomeYield: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      // TermDeposit2FinancialInstitution: Yup.string().required("Required"),
      // TermDeposit2CurrentValue: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      // TermDeposit3AnnualIncome: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      // TermDeposit3IncomeYield: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      // TermDeposit3FinancialInstitution: Yup.string().required("Required"),
      // TermDeposit3CurrentValue: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
        
      // AccumulationMemberName: Yup.string().required("Required"),
      // AccumulationEligibleDate: Yup.string().required("Required"),
      // AccumulationCurrentBalance: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      // AccumulationTaxFree: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      // AccumulationTaxed: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      // AccumulationNonPreservedRestriction: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      // AccumulationNonPreservedUnRestriction: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      // AccumulationPreservedAmount: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
        
      // PensionMemberName: Yup.string().required("Required"),
      // PensionType: Yup.string().required("Required"),
      // PensionCommencementDate: Yup.string().required("Required"),
      // PensionCurrentBalance: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      // PensionTaxFree: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      // PensionTaxed: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      // PensionPurchasePrice: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      // PensionFrequency: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      // PensionRegularIncomeDrawn: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      // PensionMinimumRequired: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      // PensionRelevantNumber: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      // PensionPurchasePrice: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      // PensionLumpsumTaken: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      // PensionDeductibleAmount: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),

      // AustralianShareInvestmentName: Yup.string().required("Required"),
      // AustralianShareNoOfShares: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      // AustralianShareCurrentPrice: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      // AustralianShareTotalValue: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      // AustralianShareCostBase: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      // AustralianSharePurchaseDate: Yup.string().required("Required"),
      // AustralianShareIncomePA: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      // AustralianShareIncomePA2: Yup.string().required("Required"),
      // AustralianShareTotalIncomePA: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      // AustralianShareFrankedAmount: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      // AustralianShareRegInvestmentsPA: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),

      // ManagedFundsPlatformName: Yup.string().required("Required"),
      // ManagedFundsInvestmentName: Yup.string().required("Required"),
      // ManagedFundsNoOfShares: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      // ManagedFundsCurrentPrice: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      // ManagedFundsCurrentValue: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      // ManagedFundsOriginalInvestment: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      // ManagedFundsPurchaseDate: Yup.string().required("Required"),
      // ManagedFundsIncomePA: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      // ManagedFundsIncomePA2: Yup.string().required("Required"),
      // ManagedFundsTotalIncomePA: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      // ManagedFundsRegInvestmentsPA: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
    
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

   
  let InvestmentModal_initialValues = {
    InvestmentModalTotalExpense: investmentInnerData.TotalExpense, // ReadOnly
    InvestmentModalCorporateFees: investmentInnerData.CorporateFees,
    InvestmentModalCouncilRates: investmentInnerData.CouncilRates,
    InvestmentModalLawnMoving: investmentInnerData.LawnMoving,
    InvestmentModalInsurance: investmentInnerData.Insurance,
    InvestmentModalLandTax: investmentInnerData.LandTax,
    InvestmentModalRepairs: investmentInnerData.Repairs,
    InvestmentModalWaterCharges: investmentInnerData.WaterCharges,
    InvestmentModalOthers: investmentInnerData.Others,
    InvestmentModalTelephone: investmentInnerData.Telephone,
    InvestmentModalProfessionalFees: investmentInnerData.ProfessionalFees,
    InvestmentModalAllOthers: investmentInnerData.AllOthers,
  }
  

  let InvestmentModal_validationSchema = Yup.object({
   
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

  let InvestmentModal_onSubmit = (Values) => {
       
  let myObj = {
    Email: localStorage.getItem("ClientEmail"),
    
    TotalExpense: 5000, //InvestmentModalTotalExpense ReadOnly
    CorporateFees: Values.InvestmentModalCorporateFees,
    CouncilRates: Values.InvestmentModalCouncilRates,
    LawnMoving: Values.InvestmentModalLawnMoving,
    Insurance: Values.InvestmentModalInsurance,
    LandTax: Values.InvestmentModalLandTax,
    Repairs: Values.InvestmentModalRepairs,
    WaterCharges: Values.InvestmentModalWaterCharges,
    Others: Values.InvestmentModalOthers,
    Telephone: Values.InvestmentModalTelephone,
    ProfessionalFees: Values.InvestmentModalProfessionalFees,
    AllOthers: Values.InvestmentModalAllOthers
  }
    console.log(myObj)
    // alert("gogo");
        // Post Api
        axios
        .post('http://localhost:7000/Client-SMSF-InvestmentModal/Add-Client-InvestmentModal', myObj)
        .then((res) => console.log('Client  Added Successfully!'))
        InvestmentProperties2handleClose();
}


const [accumulationList, setAccumulationList] = useState([])
let Accumulation_validationSchema = Yup.object({   
  AccumulationMemberName: Yup.string().required("Required"),
  AccumulationEligibleDate: Yup.string().required("Required"),
  AccumulationCurrentBalance: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
  AccumulationTaxFree: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
  AccumulationTaxed: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
  AccumulationNonPreservedRestriction: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
  AccumulationNonPreservedUnRestriction: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
  AccumulationPreservedAmount: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0)
})
let AccumulationModal_onSubmit = (Values) => {

  let myData= {
   Email: localStorage.getItem("ClientEmail"),
   MemberName:Values. AccumulationMemberName,
   EligibleDate:Values. AccumulationEligibleDate ,
   CurrentBalance:Values. AccumulationCurrentBalance,
   TaxFree:Values. AccumulationTaxFree,
   Taxed:Values. AccumulationTaxed,
   NonPreservedRestriction:Values. AccumulationNonPreservedRestriction,
   NonPreservedUnRestriction:Values. AccumulationNonPreservedUnRestriction,
   PreservedAmount:Values.AccumulationPreservedAmount

 }

 setAccumulationList([...accumulationList,myData])

 console.log(myData)

    // Post Api
     axios
     .post('http://localhost:7000/Client-SMSF-Accumulation/Add-Client-Accumulation', myData)
     .then((res) => console.log('Client  Added Successfully!'))
    
     AccumulationhandleClose();

 }

 const [PensionAccountList, setPensionAccountList] = useState([])
 const [PensionAccount_Initilal2, setPensionAccount_Initilal2] = useState([])
 const [isEdit_PensionAccount, set_isEdit_PensionAccount] = useState(false)

 let PensionAccount_validationSchema = Yup.object({   
  PensionMemberName: Yup.string().required("Required"),
  PensionType: Yup.string().required("Required"),
  PensionCommencementDate: Yup.string().required("Required"),
  PensionCurrentBalance: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
  PensionTaxFree: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
  PensionTaxed: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
  PensionPurchasePrice: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
  PensionFrequency: Yup.string().required("Required"),
  PensionRegularIncomeDrawn: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
  PensionMinimumRequired: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
  PensionRelevantNumber: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
  PensionPurchasePrice: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
  PensionLumpsumTaken: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
  PensionDeductibleAmount: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),


})

let PensionAccount_onSubmit = (Values) => {

  let myData= {
    Email: localStorage.getItem("ClientEmail"),
    MemberName:Values.PensionMemberName,
    PensionType:Values.PensionType,
    CommencementDateDate:Values.PensionCommencementDate,
    CurrentBalance:Values.PensionCurrentBalance,
    TaxFree:Values.PensionTaxFree,
    Taxed:Values.PensionTaxed,
    OriginalPurchasePrice:Values.PensionPurchasePrice,
    Frequency:Values.PensionFrequency,
    RegularIncomeDrawn:Values.PensionRegularIncomeDrawn,
    MinimumRequired:Values.PensionMinimumRequired,
    RelevantNumber:Values.PensionRelevantNumber,
    LumpsumTaken:Values.PensionLumpsumTaken,
    DeductibleAmount:Values.PensionDeductibleAmount,
 
 }

 setPensionAccountList([...PensionAccountList,myData])

 console.log(myData)
    // Post Api
     axios
     .post('http://localhost:7000/Client-SMSF-PensionAccount/Add-Client-PensionAccounts', myData)
     .then((res) => console.log('Client  Added Successfully!'))
     
     PensionhandleClose();
 }

 let updateHandler_PensionAccount=(elem)=>{
  // alert("updateHandler_PensionAccount")
 }

 let deleteHandler_PensionAccount=(elem)=>{
// alert("deleteHandler_PensionAccount")
 }

   const [bankAccountList, setBankAccountList] = useState([])
   const [bankAccountList2, setBankAccountList2] = useState([])
   const [isEdit_bankAccountList, set_isEdit_BankAccountList] = useState(false)

 let Bank_validationSchema = Yup.object({   

  AnnualIncome1: Yup.number().required("Required")
  .test("Is positive?", "Must be a positive value", (value) => value > 0),
  IncomeYield1: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
  FinancialInstitution1: Yup.string().required("Required"),
  CurrentValue1: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
  AnnualIncome2: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
  IncomeYield2: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
  FinancialInstitution2: Yup.string().required("Required"),
  CurrentValue2: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),

  AnnualIncome3: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
  IncomeYield3: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
  FinancialInstitution3: Yup.string().required("Required"),
  CurrentValue3: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),



})
let BankAccount_onSubmit = (Values) => {
    
  let myData= {
    Email: localStorage.getItem("ClientEmail"),
    CurrentValue1:Values.CurrentValue1,
    FinancialInstitution1:Values.FinancialInstitution1,
    IncomeYield1:Values.IncomeYield1,
    AnnualIncome1:Values.AnnualIncome1,
    CurrentValue2:Values.CurrentValue2,
    FinancialInstitution2:Values.FinancialInstitution2,
    IncomeYield2:Values.IncomeYield2,
    AnnualIncome2:Values.AnnualIncome2,
    CurrentValue3:Values.CurrentValue3,
    FinancialInstitution3:Values.FinancialInstitution3,
    IncomeYield3:Values.IncomeYield3,
    AnnualIncome3:Values.AnnualIncome3,
 
 }

 let bankAccount1={
  id:1,
  CurrentValue:Values.CurrentValue1,
  FinancialInstitution:Values.FinancialInstitution1,
  IncomeYield:Values.IncomeYield1,
  // AnnualIncome1:values.AnnualIncome1,
  AnnualIncome:5000,
}
let bankAccount2={
  id:2,
  CurrentValue:Values.CurrentValue2,
  FinancialInstitution:Values.FinancialInstitution2,
  IncomeYield:Values.IncomeYield2,
  // AnnualIncome2:values.AnnualIncome2,
  AnnualIncome:5000,
}
let bankAccount3={
  id:3,
  CurrentValue:Values.CurrentValue3,
  FinancialInstitution:Values.FinancialInstitution3,
  IncomeYield:Values.IncomeYield3,
  // AnnualIncome3:values.AnnualIncome3,
  AnnualIncome:5000,
}

setBankAccountList([bankAccount1,bankAccount2,bankAccount3]);
 console.log(myData)

    // Post Api
     axios
     .post('http://localhost:7000/Client-SMSF-BankAccounts/Add-Client-BankAccounts', myData)
     .then((res) => console.log('Client  Added Successfully!'))
     

     BankAccountshandleClose();

 }

 let updateHandler_Bank=(elem)=>{
  // set_isEdit_BankAccountList(true)
  
}

let deleteHandler_Bank=(e, index)=>{
let emailasID=localStorage.getItem("ClientEmail");
console.log(bankAccountList2)
  
  setBankAccountList(bankAccountList.filter(object => {
    return object.id !== e.id;
  }));
  
 if(e.id==1){
  bankAccountList2[0].CurrentValue1="";
  bankAccountList2[0].FinancialInstitution1='';
  bankAccountList2[0].IncomeYield1="";
  bankAccountList2[0].AnnualIncome1="";
 }

 else if(e.id==2){
  bankAccountList2[0].CurrentValue2='';
  bankAccountList2[0].FinancialInstitution2='';
  bankAccountList2[0].IncomeYield2='';
  bankAccountList2[0].AnnualIncome2='';

 }
 else if(e.id==3){
  bankAccountList2[0].CurrentValue3='';
  bankAccountList2[0].FinancialInstitution3='';
  bankAccountList2[0].IncomeYield3='';
  bankAccountList2[0].AnnualIncome3='';

 }

 axios
 .patch(`http://localhost:7000/Client-InvestmentTrust/Update-Client-BankAccounts/${emailasID}`,bankAccountList2[0])
 .then((res)=> console.log("data Updated successfully"))
}

let updateHandler_Beneficiaries=(elem)=>{
  // alert("delete handler")
  
}

let deleteHandler_Beneficiaries=(e, index)=>{
let emailasID=localStorage.getItem("ClientEmail");
// alert("update handler")

}



let deleteHandler_accumulation=(elem)=>{
  // alert("delete handler")
  
}

let updateHandler_accumulation=(e, index)=>{
let emailasID=localStorage.getItem("ClientEmail");
// alert("update handler")

}

   const [termAccountList, setTermAccountList] = useState([])
   const [termAccountList2, setTermAccountList2] = useState([])
   const [isEdit_TermList, set_isEdit_TermList] = useState(false)

  let term_InitialValues={
    CurrentValue1:termDepositData.CurrentValue1,
    TermDepositFinancialInstitution:termDepositData.FinancialInstitution1,
    TermDepositIncomeYield:termDepositData.IncomeYield1,
    AnnualIncome1:termDepositData.AnnualIncome1,
    TermDeposit2CurrentValue:termDepositData.CurrentValue2,
    TermDeposit2FinancialInstitution:termDepositData.FinancialInstitution2,
    TermDeposit2IncomeYield:termDepositData.IncomeYield2,
    TermDeposit2AnnualIncome:termDepositData.AnnualIncome2,
    TermDeposit3CurrentValue:termDepositData.CurrentValue3,
    TermDeposit3FinancialInstitution:termDepositData.FinancialInstitution3,
    TermDeposit3IncomeYield:termDepositData.IncomeYield3,
    TermDeposit3AnnualIncome:termDepositData.AnnualIncome3,
  }
  
 let Term_validationSchema = Yup.object({   
  AnnualIncome1: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
  TermDepositIncomeYield: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
  TermDepositFinancialInstitution: Yup.string().required("Required"),
  CurrentValue1: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
  TermDeposit2AnnualIncome: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
  TermDeposit2IncomeYield: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
  TermDeposit2FinancialInstitution: Yup.string().required("Required"),
  TermDeposit2CurrentValue: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
  TermDeposit3AnnualIncome: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
  TermDeposit3IncomeYield: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
  TermDeposit3FinancialInstitution: Yup.string().required("Required"),
  TermDeposit3CurrentValue: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
  

})


 let Term_onSubmit = (Values) => {

  let myData= {
    Email: localStorage.getItem("ClientEmail"),
    CurrentValue1:Values.CurrentValue1,
    FinancialInstitution1:Values.TermDepositFinancialInstitution,
    IncomeYield1:Values.TermDepositIncomeYield,
    AnnualIncome1:Values.AnnualIncome1,

    CurrentValue2:Values.TermDeposit2CurrentValue,
    FinancialInstitution2:Values.TermDeposit2FinancialInstitution,
    IncomeYield2:Values.TermDeposit2IncomeYield,
    AnnualIncome2:Values.TermDeposit2AnnualIncome,

    CurrentValue3:Values.TermDeposit3CurrentValue,
    FinancialInstitution3:Values.TermDeposit3FinancialInstitution,
    IncomeYield3:Values.TermDeposit3IncomeYield,
    AnnualIncome3:Values.TermDeposit3AnnualIncome,
 
 }

 let term1={
  id:1,
  CurrentValue:Values.CurrentValue1,
  FinancialInstitution:Values.TermDepositFinancialInstitution,
  IncomeYield:Values.TermDepositIncomeYield,
  // AnnualIncome1:values.AnnualIncome1,
  AnnualIncome:5000,
}
let term2={
  id:2,
  CurrentValue:Values.TermDeposit2CurrentValue,
  FinancialInstitution:Values.TermDeposit2FinancialInstitution,
  IncomeYield:Values.TermDeposit2IncomeYield,
  // AnnualIncome2:values.TermDeposit2AnnualIncome,
  AnnualIncome:5000,
}

let term3={
  id:3,
  CurrentValue:Values.TermDeposit3CurrentValue,
  FinancialInstitution:Values.TermDeposit3FinancialInstitution,
  IncomeYield:Values.TermDeposit3IncomeYield,
  // AnnualIncome2:values.TermDeposit3AnnualIncome,
  AnnualIncome:5000,
}

setTermAccountList([term1,term2,term3]);
 console.log(myData)

    // Post Api
     axios
     .post('http://localhost:7000/Client-SMSF-TermDeposit/Add-Client-TermDeposit', myData)
     .then((res) => console.log("Data Added Successfully !"))
    
     TermDeposithandleClose();
    
 }

 let updateHandler_Term=(elem)=>{
  // set_isEdit_BankAccountList(true)
  
}

let deleteHandler_Term=(e, index)=>{
let emailasID=localStorage.getItem("ClientEmail");
console.log(bankAccountList2)
  
  setBankAccountList(bankAccountList.filter(object => {
    return object.id !== e.id;
  }));
  
 if(e.id==1){
  bankAccountList2[0].CurrentValue1="";
  bankAccountList2[0].FinancialInstitution1='';
  bankAccountList2[0].IncomeYield1="";
  bankAccountList2[0].AnnualIncome1="";
 }

 else if(e.id==2){
  bankAccountList2[0].CurrentValue2='';
  bankAccountList2[0].FinancialInstitution2='';
  bankAccountList2[0].IncomeYield2='';
  bankAccountList2[0].AnnualIncome2='';

 }
 else if(e.id==3){
  bankAccountList2[0].CurrentValue3='';
  bankAccountList2[0].FinancialInstitution3='';
  bankAccountList2[0].IncomeYield3='';
  bankAccountList2[0].AnnualIncome3='';

 }

 axios
 .patch(`http://localhost:7000/Client-InvestmentTrust/Update-Client-BankAccounts/${emailasID}`,bankAccountList2[0])
 .then((res)=> console.log("data Updated successfully"))
}

const [Share_initialValues2, setShare_initialValues2] = useState([])
const [is_Share, setIs_Share] = useState(false)
const [AustralianShareList, setAustralianShareList] = useState([])

 let Australian_validationSchema = Yup.object({   
  AustralianShareInvestmentName: Yup.string().required("Required"),
  AustralianShareNoOfShares: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
  AustralianShareCurrentPrice: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
  AustralianShareTotalValue: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
  AustralianShareCostBase: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
  AustralianSharePurchaseDate: Yup.string().required("Required"),
  AustralianShareIncomePA: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
  AustralianShareIncomePA2: Yup.string().required("Required"),
  AustralianShareTotalIncomePA: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
  AustralianShareFrankedAmount: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
  AustralianShareRegInvestmentsPA: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),


  
})

 let Australian_onSubmit = (Values) => {

  let myData= {
    Email: localStorage.getItem("ClientEmail"),
    InvestmentName :Values.AustralianShareInvestmentName,
    NoOfShares:Values.AustralianShareNoOfShares,
    CurrentSharePrice:Values.AustralianShareCurrentPrice,
    TotalShareValue:Values.AustralianShareTotalValue,
    CostBase:Values.AustralianShareCostBase,
    PurchaseDate:Values.AustralianSharePurchaseDate,
    IncomePA:Values.AustralianShareIncomePA,
    IncomePAType:Values.AustralianShareIncomePA2,
    TotalIncomePA:Values.AustralianShareTotalIncomePA,
    ReinvestIncome:Values.AustralianShareReinvestIncome,
    FrankedAmount:Values.AustralianShareFrankedAmount,
    RegInvestmentsPA:Values.AustralianShareRegInvestmentsPA,
 
 }

 setAustralianShareList([...AustralianShareList,myData])
 console.log(myData)

    // Post Api
     axios
     .post('http://localhost:7000/Client-SMSF-AustralianShareMarket/Add-Client-AustralianShareMarket', myData)
     .then((res) => console.log("data added successfully"))
   
     AustralianSharehandleClose();

 }

 let updateHandler_AustralianShare=(elem)=>{
  setIs_Share(true);
  let AddData2 ={
   
     ShareInvestmentName :elem.InvestmentName,
     NoOfShares: elem. NumberOfShares,
    CurrentSharePrice:elem.CurrentSharePrice,
     TotalShareValue:elem.TotalShareValue, //TotalShareValue:'', read only
     CostBase:elem.CostBase,
    //  PurchaseDate: elem.PurchaseDate,
     Incomepa: elem.IncomePA,
     IncomepaType:elem.IncomePAType,
     TotalIncomePa:elem.TotalIncomePA, //TotalIncomePa:'', //read only
     FrankedAmount: elem.FrankedAmount,
     Reinvestincomeradio:elem.ReinvestIncome,
     RegInvestmentsPA: elem.RegInvestmentsPA,

  }
  setShare_initialValues2(AddData2)

  
}

let deleteHandler_AustralianShare=(elem)=>{
  // set_isEdit_BankAccountList(true)

}


        const [manageFund_initialValues2, setManageFund_initialValues2] = useState([])
        const [is_manageFund, setIs_manageFund] = useState(false)
        const [manageFundList, setManageFundList] = useState([])



 let Manage_validationSchema = Yup.object({   

  ManagedFundsPlatformName: Yup.string().required("Required"),
  ManagedFundsInvestmentName: Yup.string().required("Required"),
  ManagedFundsNoOfShares: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
  ManagedFundsCurrentPrice: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
  ManagedFundsCurrentValue: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
  ManagedFundsOriginalInvestment: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
  ManagedFundsPurchaseDate: Yup.string().required("Required"),
  ManagedFundsIncomePA: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
  ManagedFundsIncomePA2: Yup.string().required("Required"),
  ManagedFundsTotalIncomePA: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
  ManagedFundsRegInvestmentsPA: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),


})

 let Manage_onSubmit = (Values) => {

  let myData= {
    Email: localStorage.getItem("ClientEmail"),
    PlatformName :Values.ManagedFundsPlatformName,
    InvestmentName:Values.ManagedFundsInvestmentName,
    NoOfShares:Values.ManagedFundsNoOfShares,
    CurrentSharePrice:Values.ManagedFundsCurrentPrice,
    CurrentShareValue:Values.ManagedFundsCurrentValue,
    OriginalInvestment:Values.ManagedFundsOriginalInvestment,
    PurchaseDate:Values.ManagedFundsPurchaseDate,
    IncomePA:Values.ManagedFundsIncomePA,
    IncomePAType:Values.ManagedFundsIncomePA2,
    TotalIncomePA:Values.ManagedFundsTotalIncomePA,
    ReinvestIncome:Values.ManagedFundsReinvestIncome,
    RegInvestmentsPA:Values.ManagedFundsRegInvestmentsPA,
    
 
 }

 setManageFundList([...manageFundList,myData])
 console.log(myData)

    // Post Api
     axios
     .post('http://localhost:7000/Client-SMSF-ManagedFunds/Add-Client-ManagedFunds', myData)
     .then((res) => console.log("data added successfully"))
  
     ManagedFundshandleClose();

 }

 let updateHandler_ManageFund=(elem)=>{
  // alert("update handler ")

 }
 
 let deleteHandler_ManageFund=(elem)=>{
 
   // alert("delete handler ")
 }


 const [investment_initialValues2, setInvestment_initialValues2] = useState([])
 const [is_investment, setIs_investment] = useState(false)
 const [investmentList , setInvestmentList] = useState([])

 let Investment_validationSchema = Yup.object({   

  InvestmentPropertiesCurrentValue: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
  // InvestmentPropertiesClientOwnership: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
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

  // InvestmentPropertiesClientBorrowing: Yup.number().when('InvestmentPropertiesLoanAttached',{
  //   is: val => val && val.length === 3,
  //   then: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
  //   otherwise: Yup.number().notRequired()
  // }),
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

 let Investment_onSubmit = (Values) => {

  let myData= {
    Email: localStorage.getItem("ClientEmail"),
    CurrentValue:Values.InvestmentPropertiesCurrentValue,
    CostBase:Values.InvestmentPropertiesCostBase,
    PropertyAddress:Values.InvestmentPropertiesAddress,
    PostCode:Values.InvestmentPropertiesPostcode,
    RentalIncome:Values.InvestmentPropertiesRentalIncome,
    Frequency:Values.InvestmentPropertiesFrequency,
    TotalAnnualIncome:Values.InvestmentPropertiesTotalAnnualIncome,
    ExpensesPA:Values.InvestmentPropertiesExpensesPA,
    LoanAttached:Values.InvestmentPropertiesLoanAttached,
    CurrentBalance:Values.InvestmentPropertiesCurrentBalance,
    Lender:Values.InvestmentPropertiesLender,
    RepaymentAmount:Values.InvestmentPropertiesRepaymentAmount,
    Frequency2:Values.InvestmentPropertiesFrequency2,
    AnnualRepayments:Values.InvestmentPropertiesAnnualRepayment,
    InterestRatePA:Values.InvestmentPropertiesInterestRatePA,
    LoanTerm:Values.InvestmentPropertiesLoanTerm,
    LoanType:Values.InvestmentPropertiesLoanType,
    DebtAmountLoan:Values.InvestmentPropertiesDebtLoanAmount,
    YearsRemaining:Values.InvestmentPropertiesYearsRemaining
    
 
 }

 setInvestmentList([...investmentList,myData])
 console.log(myData)

    // Post Api
     axios
     .post('http://localhost:7000/Client-SMSF-InvestmentProperties/Add-Client-InvestmentProperties', myData)
     .then((res) => console.log("Data added successfully"))
   

InvestmentPropertieshandleClose();
 }

 let updateHandler_Investment=(elem)=>{
  setIs_investment(true);

  // handleShow4()
}

let deleteHandler_Investment=(elem)=>{

// alert("delete")
}



const [show4, setShow4] = useState(false);
const handleClose4 = () => setShow4(false);
const handleShow4 = () => setShow4(true);

const [loan_initialValues2, setLoan_initialValues2] = useState([])
const [is_Loan, setIs_Loan] = useState(false)
const [AustralianLoanList, setAustralianLoanList] = useState([])

let Australian_loansAssociated_initialValues ={

AustralianPortfolioLoanType:AustralianPortfolioData.AustralianPortfolioLoanType,
AustralianPortfolioCurrentBalance:AustralianPortfolioData.AustralianPortfolioCurrentBalance,
AustralianPortfolioLender:AustralianPortfolioData.AustralianPortfolioLender,
AustralianInterestRatePA:AustralianPortfolioData.AustralianInterestRatePA,

AustralianPortfolioRepaymentAmount:AustralianPortfolioData.AustralianPortfolioRepaymentAmount,
AustralianPortfolioFrequency:AustralianPortfolioData.AustralianPortfolioFrequency,
AustralianPortfolioAnnualRepayment:AustralianPortfolioData.AustralianPortfolioAnnualRepayment,//readonly

AustralianPortfolioLoanTerm:AustralianPortfolioData.AustralianPortfolioLoanTerm,
AustralianPortfolioLoanType2:AustralianPortfolioData.AustralianPortfolioLoanType2,
AustralianPortfolioDeductibleLoanAmount:AustralianPortfolioData.AustralianPortfolioDeductibleLoanAmount,
AustralianPortfolioYearRemaining:AustralianPortfolioData.AustralianPortfolioYearRemaining,

}
let Australian_loansAssociated_validationSchema = Yup.object({
  AustralianPortfolioLoanType:Yup.string() ,
  AustralianPortfolioCurrentBalance:Yup.number() 
  .test(
    "Is positive?",
    "Must be a positive number",
    (value) => value > 0
  ),
  AustralianPortfolioLender:Yup.string() ,
  AustralianPortfolioRepaymentAmount:Yup.number() 
  .test(
    "Is positive?",
    "Must be a positive number",
    (value) => value > 0
  ),
  AustralianPortfolioFrequency:Yup.string() ,
  AustralianInterestRatePA:Yup.number() 
  .test(
    "Is positive?",
    "Must be a positive number",
    (value) => value > 0
  ),
  AustralianPortfolioLoanTerm:Yup.string() ,
  AustralianPortfolioLoanType2:Yup.string() ,
  AustralianPortfolioDeductibleLoanAmount:Yup.number() 
  .test(
    "Is positive?",
    "Must be a positive number",
    (value) => value > 0
  ),
  AustralianPortfolioYearRemaining:Yup.string() ,

})
let Australian_loansAssociated_onSubmit = (values) => {

let myData ={
// myloan

Email: localStorage.getItem("ClientEmail"),
AustralianPortfolioLoanType:values.AustralianPortfolioLoanType,
AustralianPortfolioCurrentBalance:values.AustralianPortfolioCurrentBalance,
AustralianPortfolioLender:values.AustralianPortfolioLender,
AustralianInterestRatePA:values.AustralianInterestRatePA,

AustralianPortfolioRepaymentAmount:values.AustralianPortfolioRepaymentAmount,
AustralianPortfolioFrequency:values.AustralianPortfolioFrequency,
AustralianPortfolioAnnualRepayment:5000, //AustralianPortfolioAnnualRepayment:'', //readonly

AustralianPortfolioLoanTerm:values.AustralianPortfolioLoanTerm,
AustralianPortfolioLoanType2:values.AustralianPortfolioLoanType2,
AustralianPortfolioDeductibleLoanAmount:values.AustralianPortfolioDeductibleLoanAmount,
AustralianPortfolioYearRemaining:values.AustralianPortfolioYearRemaining,
}
console.log(myData);

axios
.post("http://localhost:7000/Client-SMSF-AustralianSharePortfolio/Add-Client-Australian-Market-Portfolio",myData)
.then((res)=>{
  console.log("Australian Share Portfolio Added Successfully ...!")
})
setAustralianLoanList([...AustralianLoanList,myData])
handleClose4();
}

let updateHandler_AustralianLoan=(elem)=>{
  setIs_Loan(true);

  // alert("deleteHandler_AustralianLoan")
  
}

let deleteHandler_AustralianLoan=(elem)=>{

  // alert("deleteHandler_AustralianLoan")
}

const [show6, setShow6] = useState(false);
const handleClose6 = () => setShow6(false);
const handleShow6 = () => setShow6(true);

const [manageloan_initialValues2, setmanageLoan_initialValues2] = useState([])
                  const [is_manageLoan, setIs_manageLoan] = useState(false)
                  const [  manageLoanList , setManageLoanList] = useState([])
                        let managed_initialValues ={
                          Typeofloan:managedLoanData.ManagedFundsPortfolioLoanType,
                          CurrentBalance:managedLoanData.ManagedFundsPortfolioCurrentBalance,
                          Lender:managedLoanData.ManagedFundsPortfolioLender,
                          RepaymentsAmount:managedLoanData.ManagedFundsPortfolioRepaymentAmount,
                          Frequency:managedLoanData.ManagedFundsPortfolioFrequency,
                          managedAnnualRepayments:managedLoanData.ManagedFundsPortfolioAnnualRepayments, //readonly
                          InterestRatePA:managedLoanData.ManagedFundsPortfolioInterestRatePA,
                          LoanTermInYears:managedLoanData.ManagedFundsPortfolioLoanTerm,
                          LoanType:managedLoanData.ManagedFundsPortfolioLoanType2,
                          DeductibleAmountofLoan:managedLoanData.ManagedFundsPortfolioDeductibleLoanAmount,
                          YearRemaning:managedLoanData.ManagedFundsPortfolioYearRemaining,
                        }
                        

                        let managed_validationSchema = Yup.object({
                          Typeofloan:Yup.string() ,
                          CurrentBalance:Yup.number() 
                          .test(
                            "Is positive?",
                            "Must be a positive number",
                            (value) => value > 0
                          ),
                          Lender:Yup.string() ,
                          RepaymentsAmount:Yup.number() 
                          .test(
                            "Is positive?",
                            "Must be a positive number",
                            (value) => value > 0
                          ),
                          Frequency:Yup.string() ,
                          InterestRatePA:Yup.number() 
                          .test(
                            "Is positive?",
                            "Must be a positive number",
                            (value) => value > 0
                          ),
                          LoanTermInYears:Yup.string() ,
                          LoanType:Yup.string() ,
                          DeductibleAmountofLoan:Yup.number() 
                          .test(
                            "Is positive?",
                            "Must be a positive number",
                            (value) => value > 0
                          ),
                          YearRemaning:Yup.string() ,

                        })

                        let managed_onSubmit = (values) => {
                          let myData ={
                            Email: localStorage.getItem("ClientEmail"),
                            ManagedFundsPortfolioLoanType:values.Typeofloan,
                            ManagedFundsPortfolioCurrentBalance :values.CurrentBalance,
                            ManagedFundsPortfolioLender:values.Lender,
                            ManagedFundsPortfolioRepaymentAmount:values.RepaymentsAmount,
                            ManagedFundsPortfolioFrequency:values.Frequency,
                            ManagedFundsPortfolioAnnualRepayments:5000,//  managedAnnualRepayments, //readonly
                            ManagedFundsPortfolioInterestRatePA:values.InterestRatePA,
                            ManagedFundsPortfolioLoanTerm:values.LoanTermInYears,
                            ManagedFundsPortfolioLoanType2:values.LoanType,
                            ManagedFundsPortfolioDeductibleLoanAmount:values.DeductibleAmountofLoan,
                            ManagedFundsPortfolioYearRemaining:values.YearRemaning,
                          }

                          axios
.post("http://localhost:7000/Client-SMSF-ManagedFundsPortfolio/Add-Client-ManagedFunds-Portfolio",myData)
.then((res)=>{
  console.log("ManagedFunds Portfolio Added Successfully ...!")
})
                        console.log(myData)

                      
                        setManageLoanList([...manageLoanList,myData])
                        
                        handleClose6();
                        }

let updateHandler_ManageLoan=(elem)=>{
  setIs_manageLoan(true);

  // handleShow4()
}

let deleteHandler_ManageLoan=(elem)=>{

// alert("delete")
}


 // NESTED BENFICIARIES MODAL STATES
 const [show3, setShow3] = useState(false);
 const handleClose3 = () => setShow3(false);
 const handleShow3 = () => setShow3(true);
 const [BeneficiaryDataList, setBeneficiaryDataList] = useState([])


   // CLIENT SUPER ACCOUNT --> BENEFICIARIES
   let initialValues_Beneficiaries = {

   beneficiariesAttached: beneficiariesData. NominatedBeneficiary,
      NomiationTypeBeneficiary: beneficiariesData.NominationType,
     BeneficiariesOptionDetailsBeneficiaries :beneficiariesData.No_ofBeneficiaries,

      Beneficiary1: beneficiariesData.Beneficiary1,
      ShareofBenefit1: beneficiariesData.BenefitShare1,
      RelationshipOptionDetailsRelationship1: beneficiariesData.Relationship1,
      
      Beneficiary2: beneficiariesData.Beneficiary2,
      ShareofBenefit2: beneficiariesData.BenefitShare2,
      RelationshipOptionDetailsRelationship2: beneficiariesData.Relationship2,

      Beneficiary3: beneficiariesData.Beneficiary3,
      ShareofBenefit3: beneficiariesData.BenefitShare3,
      RelationshipOptionDetailsRelationship3: beneficiariesData.Relationship3,

      Beneficiary4: beneficiariesData.Beneficiary4,
      ShareofBenefit4: beneficiariesData.BenefitShare4,
      RelationshipOptionDetailsRelationship4: beneficiariesData.Relationship4,

      Beneficiary5: beneficiariesData.Beneficiary5,
      ShareofBenefit5: beneficiariesData.BenefitShare5,
      RelationshipOptionDetailsRelationship5: beneficiariesData.Relationship5,

  }
  let validateSchema_Beneficiaries = Yup.object({
    NomiationTypeBeneficiary:Yup.string()
    .when("beneficiariesAttached",{
      is: val => val && val.length==3,
      then:Yup.string().required("Required")
      ,otherwise: Yup.string()
      .notRequired()
    }),
    BeneficiariesOptionDetailsBeneficiaries:Yup.string()
    .when("beneficiariesAttached",{
      is: val => val && val.length==3,
      then:Yup.string().required("Required")
      ,otherwise: Yup.string()
      .notRequired()
    }),
    Beneficiary1:Yup.string()
    .when("beneficiariesAttached",{
      is: val => val && val.length==3,
      then:Yup.string().required("Required")
      ,otherwise: Yup.string()
      .notRequired()
    }),
    ShareofBenefit1: Yup.number()
    .when("beneficiariesAttached",{
      is: val => val && val.length==3,
      then:Yup.number().required("Required")
      .test(
        "Is positive?",
        "Amount must be a positive number",
        (value) => value > 0
      )
      ,otherwise: Yup.number()
      .notRequired()
    }),
    RelationshipOptionDetailsRelationship1: Yup.string()
    .when("beneficiariesAttached",{
      is: val => val && val.length==3,
      then:Yup.string().required("Required")
      ,otherwise: Yup.string()
      .notRequired()
    }),

    Beneficiary2: Yup.string()
    .when("beneficiariesAttached",{
      is: val => val && val.length==3,
      then:Yup.string().required("Required")
      ,otherwise: Yup.string()
      .notRequired()
    }),
    ShareofBenefit2: Yup.number()
    .when("beneficiariesAttached",{
      is: val => val && val.length==3,
      then:Yup.number().required("Required")
      .test(
        "Is positive?",
        "Amount must be a positive number",
        (value) => value > 0
      )
      ,otherwise: Yup.number()
      .notRequired()
    }),
    RelationshipOptionDetailsRelationship2: Yup.string()
    .when("beneficiariesAttached",{
      is: val => val && val.length==3,
      then:Yup.string().required("Required")
      ,otherwise: Yup.string()
      .notRequired()
    }),


    Beneficiary3: Yup.string()
    .when("beneficiariesAttached",{
      is: val => val && val.length==3,
      then:Yup.string().required("Required")
      ,otherwise: Yup.string()
      .notRequired()
    }),
    ShareofBenefit3: Yup.number()
    .when("beneficiariesAttached",{
      is: val => val && val.length==3,
      then:Yup.number().required("Required")
      .test(
        "Is positive?",
        "Amount must be a positive number",
        (value) => value > 0
      )
      ,otherwise: Yup.number()
      .notRequired()
    }),
    RelationshipOptionDetailsRelationship3: Yup.string()
    .when("beneficiariesAttached",{
      is: val => val && val.length==3,
      then:Yup.string().required("Required")
      ,otherwise: Yup.string()
      .notRequired()
    }),

    Beneficiary4: Yup.string()
    .when("beneficiariesAttached",{
      is: val => val && val.length==3,
      then:Yup.string().required("Required")
      ,otherwise: Yup.string()
      .notRequired()
    }),
    ShareofBenefit4: Yup.number()
    .when("beneficiariesAttached",{
      is: val => val && val.length==3,
      then:Yup.number().required("Required")
      .test(
        "Is positive?",
        "Amount must be a positive number",
        (value) => value > 0
      )
      ,otherwise: Yup.number()
      .notRequired()
    }),
    RelationshipOptionDetailsRelationship4:Yup.string()
    .when("beneficiariesAttached",{
      is: val => val && val.length==3,
      then:Yup.string().required("Required")
      ,otherwise: Yup.string()
      .notRequired()
    }),

    Beneficiary5: Yup.string()
    .when("beneficiariesAttached",{
      is: val => val && val.length==3,
      then:Yup.string().required("Required")
      ,otherwise: Yup.string()
      .notRequired()
    }),
    ShareofBenefit5: Yup.number()
    .when("beneficiariesAttached",{
      is: val => val && val.length==3,
      then:Yup.number().required("Required")
      .test(
        "Is positive?",
        "Amount must be a positive number",
        (value) => value > 0
      )
      ,otherwise: Yup.number()
      .notRequired()
    }),

    RelationshipOptionDetailsRelationship5: Yup.string()
    .when("beneficiariesAttached",{
      is: val => val && val.length==3,
      then:Yup.string().required("Required")
      ,otherwise: Yup.string()
      .notRequired()
    }),

  })
  let onSubmit_Beneficiaries = (values) => {
    handleClose3();
    let BeneficiaryData = {

      Email:localStorage.getItem("ClientEmail"),

      NominatedBeneficiary: values.beneficiariesAttached,
      NominationType: values.NomiationTypeBeneficiary,
      No_ofBeneficiaries:values.BeneficiariesOptionDetailsBeneficiaries,

      Beneficiary1: values.Beneficiary1,
      BenefitShare1: values.ShareofBenefit1,
      Relationship1: values.RelationshipOptionDetailsRelationship1,
      
      Beneficiary2: values.Beneficiary2,
      BenefitShare2: values.ShareofBenefit2,
      Relationship2: values.RelationshipOptionDetailsRelationship2,

      Beneficiary3: values.Beneficiary3,
      BenefitShare3: values.ShareofBenefit3,
      Relationship3: values.RelationshipOptionDetailsRelationship3,

      Beneficiary4: values.Beneficiary4,
      BenefitShare4: values.ShareofBenefit4,
      Relationship4: values.RelationshipOptionDetailsRelationship4,

      Beneficiary5: values.Beneficiary5,
      BenefitShare5: values.ShareofBenefit5,
      Relationship5: values.RelationshipOptionDetailsRelationship5

    }

    axios
    .post("http://localhost:7000/Client-SMSF-Beneficiary/Add-Client-Beneficiary",BeneficiaryData)
    .then((res)=>{
      console.log("BeneficiaryData added successfully")
    })

    console.log(BeneficiaryData)
    setBeneficiaryDataList([...BeneficiaryDataList,BeneficiaryData])
  }

  // NESTED CONTRIBUTIONS MODAL STATES
  const [contributionShow, setcontributionShow] = useState(false);
  const contributionHandleClose = () => setcontributionShow(false);
  const handlecontributionShow = () => setcontributionShow(true);
  const [contributionModal, setcontributionModal] = useState([]);

// CLIENT SUPER ACCOUNT --> CONTRIBUTIONS
let initialValues_Contribution = {

  
 contributeFundRadio :contributionData.ContributeFund,
  Non_Concessional1: contributionData.NonConcessional1,
  Other1: contributionData.Other1,
  EmployerContributions1: contributionData.EmployerContributions1,
  SalarySacAndPersonalDed1: contributionData.SalaryPersonalDed1,

  Non_Concessional2: contributionData.NonConcessional2,
  Other2: contributionData.Other2,
  EmployerContributions2: contributionData.EmployerContributions2,
  SalarySacAndPersonalDed2: contributionData.SalaryPersonalDed2,

  Non_Concessional3: contributionData.NonConcessional3,
  Other3: contributionData.Other3,
  EmployerContributions3: contributionData.EmployerContributions3,
  SalarySacAndPersonalDed3: contributionData.SalaryPersonalDed3,
}
let validateSchema_Contribution = Yup.object({

  Non_Concessional1: Yup.number()
  .when("contributeFundRadio",{
    is: val => val && val.length==3,
    then:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Amount must be a positive number",
      (value) => value > 0
    )
    ,otherwise: Yup.number()
    .notRequired()
  }),

  Other1: Yup.number()
  .when("contributeFundRadio",{
    is: val => val && val.length==3,
    then:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Amount must be a positive number",
      (value) => value > 0
    )
    ,otherwise: Yup.number()
    .notRequired()
  }),
  EmployerContributions1: Yup.number()
  .when("contributeFundRadio",{
    is: val => val && val.length==3,
    then:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Amount must be a positive number",
      (value) => value > 0
    )
    ,otherwise: Yup.number()
    .notRequired()
  }),
  SalarySacAndPersonalDed1: Yup.number()
  .when("contributeFundRadio",{
    is: val => val && val.length==3,
    then:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Amount must be a positive number",
      (value) => value > 0
    )
    ,otherwise: Yup.number()
    .notRequired()
  }),

  Non_Concessional2: Yup.number()
  .when("contributeFundRadio",{
    is: val => val && val.length==3,
    then:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Amount must be a positive number",
      (value) => value > 0
    )
    ,otherwise: Yup.number()
    .notRequired()
  }),
  Other2: Yup.number()
  .when("contributeFundRadio",{
    is: val => val && val.length==3,
    then:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Amount must be a positive number",
      (value) => value > 0
    )
    ,otherwise: Yup.number()
    .notRequired()
  }),
  EmployerContributions2: Yup.number()
  .when("contributeFundRadio",{
    is: val => val && val.length==3,
    then:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Amount must be a positive number",
      (value) => value > 0
    )
    ,otherwise: Yup.number()
    .notRequired()
  }),
  SalarySacAndPersonalDed2: Yup.number()
  .when("contributeFundRadio",{
    is: val => val && val.length==3,
    then:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Amount must be a positive number",
      (value) => value > 0
    )
    ,otherwise: Yup.number()
    .notRequired()
  }),

  Non_Concessional3: Yup.number()
  .when("contributeFundRadio",{
    is: val => val && val.length==3,
    then:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Amount must be a positive number",
      (value) => value > 0
    )
    ,otherwise: Yup.number()
    .notRequired()
  }),
  Other3: Yup.number()
  .when("contributeFundRadio",{
    is: val => val && val.length==3,
    then:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Amount must be a positive number",
      (value) => value > 0
    )
    ,otherwise: Yup.number()
    .notRequired()
  }),
  EmployerContributions3: Yup.number()
  .when("contributeFundRadio",{
    is: val => val && val.length==3,
    then:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Amount must be a positive number",
      (value) => value > 0
    )
    ,otherwise: Yup.number()
    .notRequired()
  }),
  SalarySacAndPersonalDed3: Yup.number()
  .when("contributeFundRadio",{
    is: val => val && val.length==3,
    then:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Amount must be a positive number",
      (value) => value > 0
    )
    ,otherwise: Yup.number()
    .notRequired()
  }),
});

let on_Submit_Contribution = (values) => {

  contributionHandleClose();
  // console.log(values)

  let ContributionData = {
    Email:localStorage.getItem("ClientEmail"),
    ContributeFund:values.contributeFundRadio,
    NonConcessional1: values.Non_Concessional1,
    Other1: values.Other1,
    EmployerContributions1: values.EmployerContributions1,
    SalaryPersonalDed1: values.SalarySacAndPersonalDed1,

    NonConcessional2: values.Non_Concessional2,
    Other2: values.Other2,
    EmployerContributions2: values.EmployerContributions2,
    SalaryPersonalDed2: values.SalarySacAndPersonalDed2,

    NonConcessional3: values.Non_Concessional3,
    Other3: values.Other3,
    EmployerContributions3: values.EmployerContributions3,
    SalaryPersonalDed3: values.SalarySacAndPersonalDed3

  }

  axios
  .post("http://localhost:7000/Client-SMSF-Contribution/Add-Client-Contribution",ContributionData)
  .then((res)=>{
    console.log("Contribution Data Added Successfully...!")
  } )

  setcontributionModal([...contributionModal,ContributionData]);
  console.log(ContributionData);
}

let updateHandler_Contribution=(elem)=>{
  // alert("delete handler")
  
}

let deleteHandler_Contribution=(e, index)=>{
let emailasID=localStorage.getItem("ClientEmail");
// alert("update handler")

}


  return (
    <div className='container-fluid'>
      <div className='shadow px-4 mx-4'>
        <div className='row my-5'>
          <div className='col-md-12 text-center'>
            <h3 className='mt-3'>SMSF</h3>
          </div>
        </div>
      
        <div className='row my-3'>
          <div className='col-md-12'>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} enableReinitialize>
              {({ values, handleChange })=>
                <Form>

                  {/* SMSF Details */}
                    <div className='mb-5'>
                          <h3 className="">SMSF</h3>
                                    {/* Solicitor */}
                                    <div className=' '>
                                    <div className="row">
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="SMSFFundName" className="form-label">Fund Name</   label>
                                    <Field name="SMSFFundName" id="SMSFFundName" 
                                    className="form-control shadow inputDesign" placeholder='Fund Name' />
                                            <ErrorMessage name="SMSFFundName" component='div' className="text-danger fw-bold"/>
                                    </div>
                                    </div>  
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="SMSFFundType" className="form-label">Fund Type</   label>
                                    <Field
                                            as='select'
                                            name="SMSFFundType"
                                            id="SMSFFundType"
                                            className="form-select shadow  inputDesign"
                                            >
                                            <option value=''>Select</option>
                                            <option value="SMSF">SMSF</option>
                                            <option value="Small APRA Fund (ASF)">Small APRA Fund (ASF)</option>
                                            </Field>
                                            <ErrorMessage name="SMSFFundType" component='div' className="text-danger fw-bold"/>
                                    </div>
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="SMSFABN" className="form-label">ABN</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="SMSFABN" name='SMSFABN' placeholder="ABN"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='SMSFABN' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="SMSFTrusteeType" className="form-label">Trustee Type</   label>
                                    <Field
                                            as='select'
                                            name="SMSFTrusteeType"
                                            id="SMSFTrusteeType"
                                            className="form-select shadow  inputDesign"
                                            >
                                            <option value=''>Select</option>
                                            <option value="Individual">Individual</option>
                                            <option value="Corporate">Corporate</option>
                                            </Field>
                                            <ErrorMessage name="SMSFTrusteeType" component='div' className="text-danger fw-bold"/>
                                    </div>
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="SMSFEstablishmentDate" className="form-label">Establishment Date</   label>
                                    <Field type="date" className="form-control shadow inputDesign" 
                                    id="SMSFEstablishmentDate" name='SMSFEstablishmentDate'/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='SMSFEstablishmentDate' />
                                    </div>            
                                    </div>                                    
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                        <label  className="form-label">
                                        Are assets segregated?
                                        </label>
                                    {/* switch button style */}
                                        <div className="form-check form-switch m-0 p-0 ">
                                    <div className="radiobutton">
                                        <input type="radio" name="SMSFAssetsSegregated"
                                        id="SMSFAssetsSegregatedOpt1" value="Yes"
                                        onChange={handleChange}
                                        checked={values.SMSFAssetsSegregated==="Yes"}
                                        />
                                        <label htmlFor="SMSFAssetsSegregatedOpt1" className="label1">
                                        <span>YES</span>
                                        </label>
                                        <input type="radio" name="SMSFAssetsSegregated"
                                        id="SMSFAssetsSegregatedOpt2" value="No"
                                        onChange={handleChange}
                                        checked={values.SMSFAssetsSegregated==="No"}
                                    />
                                        <label htmlFor="SMSFAssetsSegregatedOpt2" className="label2">
                                        <span>NO</span>
                                        </label>
                                    </div>                                        
                                        </div>
                                        </div>    
                                    </div>
                                                                      
                                                                      
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                        <label  className="form-label">
                                        Does the trust deed allow for borrowing to invest?
                                        </label>
                                    {/* switch button style */}
                                        <div className="form-check form-switch m-0 p-0 ">
                                    <div className="radiobutton">
                                        <input type="radio" name="SMSFBorrowingInvestment"
                                        id="SMSFBorrowingInvestmentOpt1" value="Yes"
                                        onChange={handleChange}
                                        checked={values.SMSFBorrowingInvestment==="Yes"}
                                        />
                                        <label htmlFor="SMSFBorrowingInvestmentOpt1" className="label1">
                                        <span>YES</span>
                                        </label>
                                        <input type="radio" name="SMSFBorrowingInvestment"
                                        id="SMSFBorrowingInvestmentOpt2" value="No"
                                        onChange={handleChange}
                                        checked={values.SMSFBorrowingInvestment==="No"}
                                    />
                                        <label htmlFor="SMSFBorrowingInvestmentOpt2" className="label2">
                                        <span>NO</span>
                                        </label>
                                    </div>                                        
                                        </div>
                                        </div>    
                                    </div>
                                    
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                        <label  className="form-label">
                                        Does the trust deed allow for trustee to acquire insurances and pay premiums?
                                        </label>
                                    {/* switch button style */}
                                        <div className="form-check form-switch m-0 p-0 ">
                                    <div className="radiobutton">
                                        <input type="radio" name="SMSFAcquiringInsurances"
                                        id="SMSFAcquiringInsurancesOpt1" value="Yes"
                                        onChange={handleChange}
                                        checked={values.SMSFAcquiringInsurances==="Yes"}
                                        />
                                        <label htmlFor="SMSFAcquiringInsurancesOpt1" className="label1">
                                        <span>YES</span>
                                        </label>
                                        <input type="radio" name="SMSFAcquiringInsurances"
                                        id="SMSFAcquiringInsurancesOpt2" value="No"
                                        onChange={handleChange}
                                        checked={values.SMSFAcquiringInsurances==="No"}
                                    />
                                        <label htmlFor="SMSFAcquiringInsurancesOpt2" className="label2">
                                        <span>NO</span>
                                        </label>
                                    </div>                                        
                                        </div>
                                        </div>    
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="SMSFAccountant" className="form-label">Name of Accountant</   label>
                                    <Field type="text" className="form-control shadow inputDesign" 
                                    id="SMSFAccountant" name='SMSFAccountant' placeholder="Accountant Name"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='SMSFAccountant' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="SMSFAuditor" className="form-label">Name of Auditor</   label>
                                    <Field type="text" className="form-control shadow inputDesign" 
                                    id="SMSFAuditor" name='SMSFAuditor' placeholder="Auditor Name"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='SMSFAuditor' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="SMSFAccountingAuditing" className="form-label">Accounting & Auditing</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="SMSFAccountingAuditing" name='SMSFAccountingAuditing' placeholder="Accounting & Auditing"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='SMSFAccountingAuditing' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="SMSFATOLevy" className="form-label">ATO Levy</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="SMSFATOLevy" name='SMSFATOLevy' placeholder="ATO Levy"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='SMSFATOLevy' />
                                    </div>            
                                    </div>

                                    </div>
                                    
                                    </div>
                                    {/* Solicitor */}

                            {/* Bank Account Detail Form */}
                              
                                  
                                
                              {/* ---------------------------------------------------- */}
                    </div>
                  {/* SMSF Details */}

                  {/* Accumulation Details */}
                    <div className='mb-5'>
                          <h3 className="">Accumulation</h3>

                              {/* 1 row */}
                              <div className="row">
                            <div className="col-md-6">
                                  <div className="mb-3">
                                <label  className="form-label">
                                Do you have any Accumulation?
                                </label>
                              {/* switch button style */}
                                <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="AccumulationRadio"
                                id="AccumulationRadioopt1" value="Yes"
                                onClick={()=>AccumulationHandler("Yes")} 
                                onChange={handleChange}
                                checked={values.AccumulationRadio==="Yes"}
                                />
                                <label htmlFor="AccumulationRadioopt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="AccumulationRadio"
                                id="AccumulationRadioopt2" value="No"
                                onClick={()=>AccumulationHandler("No")} 
                                onChange={handleChange}
                                checked={values.AccumulationRadio==="No"}
                              />
                                <label htmlFor="AccumulationRadioopt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>



                                  
                                </div>
                                  </div>    
                            </div>
                            {Accumulation && <div className='col-md-6'>
                            <label  className="form-label">
                            Please enter the details of your Accumulation Accounts
                                </label>
                                <br />
                              
                              <span
                                className=" btn h-50 w-50
                                btn-outline-success "
                                onClick={AccumulationhandleShow}
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
                                show={Accumulationshow}
                                onHide={AccumulationhandleClose}
                                backdrop="static"
                                className="modal-lg"
                                keyboard={false}
                              >
                                <Modal.Header
                                  className="text-light modalBG "
                                  closeButton
                                >
                                  <Modal.Title className="fontStyle">
                                Accumulation Account Details
                                    <div className="iconContainerLg">
                                <img className="img-fluid" src={notebook} alt="" />

                                </div>
                                  </Modal.Title>
                                </Modal.Header>
                              <Formik
                                initialValues={Client_initialValues}
                                validationSchema={Accumulation_validationSchema}
                                onSubmit={AccumulationModal_onSubmit}>
                              {({values , setFieldValue ,setValues,handleChange,formik})=>
                                <Form>
                                <Modal.Body>
                                    {/* Professional Advisor Detail Form */}
                                    
                                    
                                    <div className=' '>
                                    <h3 className=''>
                                    <div className="iconContainerLg mx-1">
                                        <img className="img-fluid" src={lawyer} alt="" />

                                        </div>
                                      Accumulation Accounts
                                    
                                        </h3>
                                    <div className="row">
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="AccumulationMemberName" className="form-label">Member Name</   label>
                                    <Field
                                            as='select'
                                            name="AccumulationMemberName"
                                            id="AccumulationMemberName"
                                            className="form-select shadow  inputDesign"
                                            >
                                            <option value=''>Select</option>
                                            <option value="Client">Client</option>
                                            <option value="Partner">Partner</option>

                                            </Field>
                                            <ErrorMessage name="AccumulationMemberName" component='div' className="text-danger fw-bold"/>
                                    </div>
                                    </div>  
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="AccumulationEligibleDate" className="form-label">Eligible Date</   label>
                                    <Field type="date" className="form-control shadow inputDesign" 
                                    id="AccumulationEligibleDate" name='AccumulationEligibleDate'/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='AccumulationEligibleDate' />
                                    </div>            
                                    </div>                                    
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="AccumulationCurrentBalance" className="form-label">Current Balance</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="AccumulationCurrentBalance" name='AccumulationCurrentBalance' placeholder="Current Balance"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='AccumulationCurrentBalance' />
                                    </div>            
                                    </div>                               
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="AccumulationTaxFree" className="form-label">Tax Free</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="AccumulationTaxFree" name='AccumulationTaxFree' placeholder="Tax Free"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='AccumulationTaxFree' />
                                    </div>            
                                    </div>                               
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="AccumulationTaxed" className="form-label">Taxed</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="AccumulationTaxed" name='AccumulationTaxed' placeholder="Taxed"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='AccumulationTaxed' />
                                    </div>            
                                    </div>                               
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="AccumulationNonPreservedRestriction" className="form-label">Restriction Non Preserved</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="AccumulationNonPreservedRestriction" name='AccumulationNonPreservedRestriction' placeholder="Restriction Non Preserved"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='AccumulationNonPreservedRestriction' />
                                    </div>            
                                    </div>                             
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="AccumulationNonPreservedUnRestriction" className="form-label">Un-Restriction Non Preserved</   label>
                                    <Field type="number" className="form-control shadow inputDesign" id="AccumulationNonPreservedUnRestriction"
                                    name='AccumulationNonPreservedUnRestriction' placeholder="Un-restriction Non Preserved"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='AccumulationNonPreservedUnRestriction' />
                                    </div>            
                                    </div>                                   
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="AccumulationPreservedAmount" className="form-label">Preserved Amount</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="AccumulationPreservedAmount" name='AccumulationPreservedAmount' placeholder="Member No"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='AccumulationPreservedAmount' />
                                    </div>            
                                    </div>

                                    </div>

                                    {/* nested modal */}
                                    <button type='button' onClick={handleShow3} className='btn bgColor modalBtn'>Beneficiaries</button>
                              {/* NESTED BENFICIARIES MODAL */}
                              <Modal
                                show={show3}
                                onHide={handleClose3}
                                backdrop="static"
                                className="modal-lg"
                                keyboard={false}
                              >
                                <Modal.Header
                                  className="text-light modalBG "
                                  closeButton
                                >
                                  <Modal.Title className="fontStyle">
                                    Beneficiaries Details
                                  </Modal.Title>
                                </Modal.Header>
                                <Formik
                                  initialValues={initialValues_Beneficiaries}
                                  validationSchema={validateSchema_Beneficiaries}
                                  onSubmit={onSubmit_Beneficiaries}
                                  enableReinitialize
                                >
                                  {({ values, handleChange, setFieldValue, formik }) =>
                                    <Form>
                                      <Modal.Body>
                                        {/* Family Assets Details*/}

                                        <div className=''>

                                          <label className="form-label">
                                            Do you have any Nominated Beneficiaries on the Account?
                                          </label>
                                          {/* switch button style */}
                                          <div className="form-check form-switch m-0 p-0 ">
                                            <div className="radiobutton">
                                              <input type="radio" name="beneficiariesAttached"
                                                id="beneficiariesAttached1" value="Yes"
                                              //  onClick={() => beneficiariesRadioHandler("Yes")}
                                              onChange={handleChange}
                                              checked={values.beneficiariesAttached === "Yes"}
                                              />
                                              <label htmlFor="beneficiariesAttached1" className="label1">
                                                <span>YES</span>
                                              </label>
                                              <input type="radio" name="beneficiariesAttached"
                                                id="beneficiariesAttached2" value="No"
                                              //onClick={() => beneficiariesRadioHandler("No")}
                                              onChange={handleChange}
                                              checked={values.beneficiariesAttached === "No"}
                                              />
                                              <label htmlFor="beneficiariesAttached2" className="label2">
                                                <span>NO</span>
                                              </label>
                                            </div>
                                          </div>
                              { values.beneficiariesAttached==="Yes" &&  <div>
                                          <div className="row">
                                            <div className="col-md-6">
                                              <div className="mb-3 mt-5">
                                                <label htmlFor="NomiationTypeBeneficiary" className="form-label">
                                                  Nomination Type
                                                </label>
                                                <Field
                                                  as='select'
                                                  id="NomiationTypeBeneficiary"
                                                  name="NomiationTypeBeneficiary"
                                                  className="form-select shadow  inputDesign"
                                                  //onChange={(e) => setFieldValue("NomiationTypeBeneficiary", e.target.value)}
                                                  value={values.NomiationTypeBeneficiary}
                                                >
                                                  <option value="">Select</option>
                                                  <option value="Non-Lapsing Binding Death Nominations">Non-Lapsing Binding Death Nominations</option>
                                                  <option value="Binding Death Nominations">Binding Death Nominations</option>
                                                  <option value="Non-Binding Death Nominations">Non-Binding Death Nominations</option>
                                                  <option value="Legal Representative(Your Estate)">Legal Representative(Your Estate)</option>
                                                  <option value="Reversionary Beneficiary">Reversionary Beneficiary</option>
                                                </Field>
                                                <ErrorMessage component='div' className="text-danger fw-bold" name="NomiationTypeBeneficiary" />

                                              </div>
                                            </div>

                                            <div className="col-md-6">
                                              <div className="mb-3 mt-5">
                                                <label htmlFor="BeneficiariesOptionDetailsBeneficiaries" className="form-label">
                                                  How many beneficiaries do you have?
                                                </label>
                                                <Field
                                                  as='select'
                                                  id="BeneficiariesOptionDetailsBeneficiaries"
                                                  name="BeneficiariesOptionDetailsBeneficiaries"
                                                  className="form-select shadow  inputDesign"
                                                  //onChange={(e) => setFieldValue("BeneficiariesOptionDetailsBeneficiaries", e.target.value)}
                                                  value={values.BeneficiariesOptionDetailsBeneficiaries}
                                                >
                                                  <option value="">Select</option>
                                                  <option value="1">1</option>
                                                  <option value="2">2</option>
                                                  <option value="3">3</option>
                                                  <option value="4">4</option>
                                                  <option value="5">5</option>
                                                </Field>
                                                <ErrorMessage component='div' className="text-danger fw-bold" name="BeneficiariesOptionDetailsBeneficiaries" />

                                              </div>
                                            </div>
                                          </div>

                                          {/* Row 1*/}
                                          <div className="row justify-content-around mt-4 mb-3">

                                            <div className="col-md-4">
                                              <div className="mb-3">
                                                <label htmlFor="Beneficiary1" className="form-label">Beneficiary 1</   label>
                                                <Field type="text" className="form-control shadow inputDesign"
                                                  id="Beneficiary1" name='Beneficiary1' placeholder="Beneficiary 1" />
                                                <ErrorMessage component='div' className='text-danger fw-bold' name='Beneficiary1' />
                                              </div>
                                            </div>
                                            <div className="col-md-4">
                                              <div className="mb-3">
                                                <label htmlFor="ShareofBenefit1" className="form-label">Share of Benefits % </   label>
                                                <Field type="number" className="form-control shadow inputDesign"
                                                  id="ShareofBenefit1" name='ShareofBenefit1' placeholder="Share of Benefits 1" />
                                                <ErrorMessage component='div' className='text-danger fw-bold' name='ShareofBenefit1' />
                                              </div>
                                            </div>

                                            <div className="col-md-4">
                                              <div className="mb-3">
                                                <label htmlFor="RelationshipOptionDetailsRelationship1" className="form-label">
                                                  Relationship
                                                </label>
                                                <Field
                                                  as='select'
                                                  id="RelationshipOptionDetailsRelationship1"
                                                  name="RelationshipOptionDetailsRelationship1"
                                                  className="form-select shadow  inputDesign"
                                                //onChange={(e) => setFieldValue("RelationshipOptionDetailsRelationship1", e.target.value)}
                                                value={values.RelationshipOptionDetailsRelationship1}
                                                >
                                                  <option value="">Select</option>
                                                  <option value="Spouse">Spouse</option>
                                                  <option value="Child">Child</option>
                                                  <option value="Other">Other</option>
                                                  <option value="Interdependency">Interdependency</option>
                                                </Field>
                                                <ErrorMessage component='div' className="text-danger fw-bold" name="RelationshipOptionDetailsRelationship1" />

                                              </div>
                                            </div>

                                          </div>

                                          {/* Row 2*/}
                                          <div className="row justify-content-around mt-4 mb-3">

                                            <div className="col-md-4">
                                              <div className="mb-3">
                                                <label htmlFor="Beneficiary2" className="form-label">Beneficiary 2</   label>
                                                <Field type="text" className="form-control shadow inputDesign"
                                                  id="Beneficiary2" name='Beneficiary2' placeholder="Beneficiary 2" />
                                                <ErrorMessage component='div' className='text-danger fw-bold' name='Beneficiary4' />
                                              </div>
                                            </div>
                                            <div className="col-md-4">
                                              <div className="mb-3">
                                                <label htmlFor="ShareofBenefit2" className="form-label">Share of Benefits % </   label>
                                                <Field type="number" className="form-control shadow inputDesign"
                                                  id="ShareofBenefit2" name='ShareofBenefit2' placeholder="Share of Benefits 2" />
                                                <ErrorMessage component='div' className='text-danger fw-bold' name='ShareofBenefit2' />
                                              </div>
                                            </div>

                                            <div className="col-md-4">
                                              <div className="mb-3">
                                                <label htmlFor="RelationshipOptionDetailsRelationship2" className="form-label">
                                                  Relationship
                                                </label>
                                                <Field
                                                  as='select'
                                                  id="RelationshipOptionDetailsRelationship2"
                                                  name="RelationshipOptionDetailsRelationship2"
                                                  className="form-select shadow  inputDesign"
                                                //onChange={(e) => setFieldValue("RelationshipOptionDetailsRelationship2", e.target.value)}
                                                value={values.RelationshipOptionDetailsRelationship2}
                                                >
                                                  <option value="">Select</option>
                                                  <option value="Spouse">Spouse</option>
                                                  <option value="Child">Child</option>
                                                  <option value="Other">Other</option>
                                                  <option value="Interdependency">Interdependency</option>
                                                </Field>
                                                <ErrorMessage component='div' className="text-danger fw-bold" name="RelationshipOptionDetailsRelationship2" />

                                              </div>
                                            </div>

                                          </div>
                                          {/* Row 2*/}


                                          {/* Row 3*/}
                                          <div className="row justify-content-around mt-4 mb-3">

                                            <div className="col-md-4">
                                              <div className="mb-3">
                                                <label htmlFor="Beneficiary3" className="form-label">Beneficiary 3</   label>
                                                <Field type="text" className="form-control shadow inputDesign"
                                                  id="Beneficiary3" name='Beneficiary3' placeholder="Beneficiary 3" />
                                                <ErrorMessage component='div' className='text-danger fw-bold' name='Beneficiary 3' />
                                              </div>
                                            </div>
                                            <div className="col-md-4">
                                              <div className="mb-3">
                                                <label htmlFor="ShareofBenefit3" className="form-label">Share of Benefits % </   label>
                                                <Field type="number" className="form-control shadow inputDesign"
                                                  id="ShareofBenefit3" name='ShareofBenefit3' placeholder="Share of Benefits 3" />
                                                <ErrorMessage component='div' className='text-danger fw-bold' name='ShareofBenefit3' />
                                              </div>
                                            </div>

                                            <div className="col-md-4">
                                              <div className="mb-3">
                                                <label htmlFor="RelationshipOptionDetailsRelationship3" className="form-label">
                                                  Relationship
                                                </label>
                                                <Field
                                                  as='select'
                                                  id="RelationshipOptionDetailsRelationship3"
                                                  name="RelationshipOptionDetailsRelationship3"
                                                  className="form-select shadow  inputDesign"
                                                //onChange={(e) => setFieldValue("RelationshipOptionDetailsRelationship3", e.target.value)}
                                                value={values.RelationshipOptionDetailsRelationship3}
                                                >
                                                  <option value="">Select</option>
                                                  <option value="Spouse">Spouse</option>
                                                  <option value="Child">Child</option>
                                                  <option value="Other">Other</option>
                                                  <option value="Interdependency">Interdependency</option>
                                                </Field>
                                                <ErrorMessage component='div' className="text-danger fw-bold" name="RelationshipOptionDetailsRelationship3" />

                                              </div>
                                            </div>

                                          </div>
                                          {/* Row 3*/}


                                          {/* Row 4*/}
                                          <div className="row justify-content-around mt-4 mb-3">

                                            <div className="col-md-4">
                                              <div className="mb-3">
                                                <label htmlFor="Beneficiary4" className="form-label">Beneficiary 4</   label>
                                                <Field type="text" className="form-control shadow inputDesign"
                                                  id="Beneficiary4" name='Beneficiary4' placeholder="Beneficiary 4" />
                                                <ErrorMessage component='div' className='text-danger fw-bold' name='Beneficiary4' />
                                              </div>
                                            </div>
                                            <div className="col-md-4">
                                              <div className="mb-3">
                                                <label htmlFor="ShareofBenefit4" className="form-label">Share of Benefits % </   label>
                                                <Field type="number" className="form-control shadow inputDesign"
                                                  id="ShareofBenefit4" name='ShareofBenefit4' placeholder="Share of Benefits 4" />
                                                <ErrorMessage component='div' className='text-danger fw-bold' name='ShareofBenefit4' />
                                              </div>
                                            </div>

                                            <div className="col-md-4">
                                              <div className="mb-3">
                                                <label htmlFor="RelationshipOptionDetailsRelationship4" className="form-label">
                                                  Relationship
                                                </label>
                                                <Field
                                                  as='select'
                                                  id="RelationshipOptionDetailsRelationship4"
                                                  name="RelationshipOptionDetailsRelationship4"
                                                  className="form-select shadow  inputDesign"
                                                //onChange={(e) => setFieldValue("RelationshipOptionDetailsRelationship4", e.target.value)}
                                                value={values.RelationshipOptionDetailsRelationship4}
                                                >
                                                  <option value="">Select</option>
                                                  <option value="Spouse">Spouse</option>
                                                  <option value="Child">Child</option>
                                                  <option value="Other">Other</option>
                                                  <option value="Interdependency">Interdependency</option>
                                                </Field>
                                                <ErrorMessage component='div' className="text-danger fw-bold" name="RelationshipOptionDetailsRelationship4" />

                                              </div>
                                            </div>

                                          </div>
                                          {/* Row 4*/}


                                          {/* Row 5*/}
                                          <div className="row justify-content-around mt-4 mb-3">

                                            <div className="col-md-4">
                                              <div className="mb-3">
                                                <label htmlFor="Beneficiary5" className="form-label">Beneficiary 5</   label>
                                                <Field type="text" className="form-control shadow inputDesign"
                                                  id="Beneficiary5" name='Beneficiary5' placeholder="Beneficiary 5" />
                                                <ErrorMessage component='div' className='text-danger fw-bold' name='Beneficiary5' />
                                              </div>
                                            </div>
                                            <div className="col-md-4">
                                              <div className="mb-3">
                                                <label htmlFor="ShareofBenefit5" className="form-label">Share of Benefits % </   label>
                                                <Field type="number" className="form-control shadow inputDesign"
                                                  id="ShareofBenefit5" name='ShareofBenefit5' placeholder="Share of Benefits 5" />
                                                <ErrorMessage component='div' className='text-danger fw-bold' name='ShareofBenefit5' />
                                              </div>
                                            </div>

                                            <div className="col-md-4">
                                              <div className="mb-3">
                                                <label htmlFor="RelationshipOptionDetailsRelationship5" className="form-label">
                                                  Relationship
                                                </label>
                                                <Field
                                                  as='select'
                                                  id="RelationshipOptionDetailsRelationship5"
                                                  name="RelationshipOptionDetailsRelationship5"
                                                  className="form-select shadow  inputDesign"
                                                //onChange={(e) => setFieldValue("RelationshipOptionDetailsRelationship5", e.target.value)}
                                                value={values.RelationshipOptionDetailsRelationship5}
                                                >
                                                  <option value="">Select</option>
                                                  <option value="Spouse">Spouse</option>
                                                  <option value="Child">Child</option>
                                                  <option value="Other">Other</option>
                                                  <option value="Interdependency">Interdependency</option>
                                                </Field>
                                                <ErrorMessage component='div' className="text-danger fw-bold" name="RelationshipOptionDetailsRelationship5" />

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
                                            
                                            type='submit'
                                          >
                                            Save
                                          </button>
                                          <button
                                          type="button"
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
                              {/* NESTED BENFICIARIES MODAL */}

                                    {/* nested modal */}

                                    <button type='button'
                                     onClick={handlecontributionShow}
                               className='btn bgColor modalBtn mx-2'>Contributions</button>


                                {/* NESTED CONTRIBUTION MODAL */}
                              <Modal
                                show={contributionShow}
                                onHide={contributionHandleClose}
                                backdrop="static"
                                className="modal-lg"
                                keyboard={false}
                              >
                                <Modal.Header
                                  className="text-light modalBG "
                                  closeButton
                                >
                                  <Modal.Title className="fontStyle">
                                    Contribution Details
                                  </Modal.Title>
                                </Modal.Header>
                                <Formik
                                  initialValues={initialValues_Contribution}
                                  validationSchema={validateSchema_Contribution}
                                  onSubmit={on_Submit_Contribution}
                                  enableReinitialize
                                >
                                  {({ values, handleChange, setFieldValue, formik }) =>
                                    <Form>
                                      <Modal.Body>
                                        <div className=''>


                                          <label className="form-label">
                                            Do you contribute to this fund?
                                          </label>
                                          {/* switch button style */}
                                          <div className="form-check form-switch m-0 p-0 ">
                                            <div className="radiobutton">
                                              <input type="radio" name="contributeFundRadio"
                                                id="contributeFund1" value="Yes"
                                              
                                              onChange={handleChange}
                                              checked={values.contributeFundRadio === "Yes"}
                                              />
                                              <label htmlFor="contributeFund1" className="label1">
                                                <span>YES</span>
                                              </label>
                                              <input type="radio" name="contributeFundRadio"
                                                id="contributeFund2" value="No"
                                              
                                              onChange={handleChange}
                                              checked={values.contributeFundRadio === "No"}
                                              />
                                              <label htmlFor="contributeFund2" className="label2">
                                                <span>NO</span>
                                              </label>
                                            </div>

                                          </div>
                                       {values.contributeFundRadio==="Yes" &&
                                        <div> 
                                          {/* Row 1*/}
                                          <div>
                                            <h3 className='mt-5'>
                                              FY2023
                                            </h3>

                                            <div className="row justify-content-around mt-3 mb-3">
                                              <div className="col-md-3">
                                                <div className="mb-3">
                                                  <label htmlFor="Non_Concessional1" className="form-label">Non Concessional</   label>
                                                  <Field type="number" className="form-control shadow inputDesign"
                                                    id="Non_Concessional1" name='Non_Concessional1' placeholder="Non Concessional" />
                                                  <ErrorMessage component='div' className='text-danger fw-bold' name='Non_Concessional1' />
                                                </div>
                                              </div>
                                              <div className="col-md-3">
                                                <div className="mb-3">
                                                  <label htmlFor="Other1" className="form-label">Other</   label>
                                                  <Field type="number" className="form-control shadow inputDesign"
                                                    id="Other1" name='Other1' placeholder="Other" />
                                                  <ErrorMessage component='div' className='text-danger fw-bold' name='Other1' />
                                                </div>
                                              </div>

                                              <div className="col-md-3">
                                                <div className="mb-3">
                                                  <label htmlFor="EmployerContributions1" className="form-label">Contributions</   label>
                                                  <Field type="number" className="form-control shadow inputDesign"
                                                    id="EmployerContributions1" name='EmployerContributions1' placeholder="Employer Contributions" />
                                                  <ErrorMessage component='div' className='text-danger fw-bold' name='EmployerContributions1' />
                                                </div>
                                              </div>

                                              <div className="col-md-3">
                                                <div className="mb-3">
                                                  <label htmlFor="SalarySacAndPersonalDed1" className="form-label">Salary Sac & Ded</   label>
                                                  <Field type="number" className="form-control shadow inputDesign"
                                                    id="SalarySacAndPersonalDed1" name='SalarySacAndPersonalDed1' placeholder="Salary Sac & Personal Ded" />
                                                  <ErrorMessage component='div' className='text-danger fw-bold' name='SalarySacAndPersonalDed1' />
                                                </div>
                                              </div>

                                            </div>
                                          </div>
                                          {/* Row # 2 */}
                                          <div>
                                            <h3 className='mt-2'>
                                              FY2022
                                            </h3>

                                            <div className="row justify-content-around mt-3 mb-3">
                                              <div className="col-md-3">
                                                <div className="mb-3">
                                                  <label htmlFor="Non_Concessional2" className="form-label">Non Concessional</   label>
                                                  <Field type="number" className="form-control shadow inputDesign"
                                                    id="Non_Concessional2" name='Non_Concessional2' placeholder="Non Concessional" />
                                                  <ErrorMessage component='div' className='text-danger fw-bold' name='Non_Concessional2' />
                                                </div>
                                              </div>
                                              <div className="col-md-3">
                                                <div className="mb-3">
                                                  <label htmlFor="Other2" className="form-label">Other</   label>
                                                  <Field type="number" className="form-control shadow inputDesign"
                                                    id="Other2" name='Other2' placeholder="Other" />
                                                  <ErrorMessage component='div' className='text-danger fw-bold' name='Other2' />
                                                </div>
                                              </div>

                                              <div className="col-md-3">
                                                <div className="mb-3">
                                                  <label htmlFor="EmployerContributions2" className="form-label">Contributions</   label>
                                                  <Field type="number" className="form-control shadow inputDesign"
                                                    id="EmployerContributions2" name='EmployerContributions2' placeholder="Employer Contributions" />
                                                  <ErrorMessage component='div' className='text-danger fw-bold' name='EmployerContributions2' />
                                                </div>
                                              </div>

                                              <div className="col-md-3">
                                                <div className="mb-3">
                                                  <label htmlFor="SalarySacAndPersonalDed2" className="form-label">Salary Sac & Ded</   label>
                                                  <Field type="number" className="form-control shadow inputDesign"
                                                    id="SalarySacAndPersonalDed2" name='SalarySacAndPersonalDed2' placeholder="Salary Sac & Personal Ded" />
                                                  <ErrorMessage component='div' className='text-danger fw-bold' name='SalarySacAndPersonalDed2' />
                                                </div>
                                              </div>

                                            </div>
                                          </div>
                                          {/* Row # 2 */}

                                          {/* Row # 3 */}
                                          <div>
                                            <h3 className='mt-2'>
                                              FY2021
                                            </h3>

                                            <div className="row justify-content-around mt-3 mb-3">
                                              <div className="col-md-3">
                                                <div className="mb-3">
                                                  <label htmlFor="Non_Concessional3" className="form-label">Non Concessional</   label>
                                                  <Field type="number" className="form-control shadow inputDesign"
                                                    id="Non_Concessional3" name='Non_Concessional3' placeholder="Non Concessional" />
                                                  <ErrorMessage component='div' className='text-danger fw-bold' name='Non_Concessional3' />
                                                </div>
                                              </div>
                                              <div className="col-md-3">
                                                <div className="mb-3">
                                                  <label htmlFor="Other3" className="form-label">Other</   label>
                                                  <Field type="number" className="form-control shadow inputDesign"
                                                    id="Other3" name='Other3' placeholder="Other" />
                                                  <ErrorMessage component='div' className='text-danger fw-bold' name='Other3' />
                                                </div>
                                              </div>

                                              <div className="col-md-3">
                                                <div className="mb-3">
                                                  <label htmlFor="EmployerContributions3" className="form-label">Contributions</   label>
                                                  <Field type="number" className="form-control shadow inputDesign"
                                                    id="EmployerContributions3" name='EmployerContributions3' placeholder="Employer Contributions" />
                                                  <ErrorMessage component='div' className='text-danger fw-bold' name='EmployerContributions3' />
                                                </div>
                                              </div>

                                              <div className="col-md-3">
                                                <div className="mb-3">
                                                  <label htmlFor="SalarySacAndPersonalDed3" className="form-label">Salary Sac & Ded</   label>
                                                  <Field type="number" className="form-control shadow inputDesign"
                                                    id="SalarySacAndPersonalDed3" name='SalarySacAndPersonalDed3' placeholder="Salary Sac & Personal Ded" />
                                                  <ErrorMessage component='div' className='text-danger fw-bold' name='SalarySacAndPersonalDed3' />
                                                </div>
                                              </div>

                                            </div>
                                          </div>
                                          {/* Row # 3 */}

                                        </div>}

                                        </div>
                                      </Modal.Body>
                                      <Modal.Footer>
                                        <div className="col-md-12">
                                          <button
                                            className="float-end btn w-25  bgColor modalBtn"
                                            // onClick={contributionHandleClose}
                                            type='submit'
                                          >
                                            Save
                                          </button>
                                          <button
                                          type="button"
                                            className="float-end btn w-25  btn-outline  backBtn mx-3"
                                            onClick={contributionHandleClose}
                                          >
                                            Cancel
                                          </button>
                                        </div>
                                      </Modal.Footer>
                                    </Form>
                                  }
                                </Formik>
                              </Modal>
                              {/* NESTED CONTRIBUTION MODAL */}
                                    
                                    </div>
                                    

                          
                              
                                </Modal.Body>
                                <Modal.Footer>
                                  <div className="col-md-12">
                                    <button
                                      className="float-end btn w-25  bgColor modalBtn"
                                      type='submit'
                                    >
                                      Save
                                    </button>
                                    <button
                                    type="button"
                                      className="float-end btn w-25  btn-outline  backBtn mx-3"
                                      onClick={AccumulationhandleClose}
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
                      {/* AccumulationTable */}

                      <div   className='table-responsive my-3'>
                         <table className="table table-bordered table-hover text-center">
                            <thead className="text-light" id="tableHead">
                            <tr>
                            <th>No</th>

                                  <th>MemberName</th>
                                  <th>Current Value</th>
                                <th>Operations</th>
                              </tr>
                            </thead>
                              <tbody>
                                  {  accumulationList.map((elem,index)=>{
                                      
                                  return(
                                    
                                    <tr key={index}>
                                    <td>{index+1}</td>
                                      
                                        <td>{elem.MemberName}</td>
                                        <td>{elem.CurrentBalance}</td>
                                        <td >
                                        <button  type='button' onClick={(e)=>deleteHandler_accumulation(elem,index)} className='btn btn-danger btn-sm'>delete</button>
                                        <button  type='button' onClick={(e)=>updateHandler_accumulation(elem)} className='btn btn-warning btn-sm mx-2'>update</button>

                                        </td> 
                                    
                                    </tr>
                                    );
                                        
                                    }) }
                            </tbody>
                          </table>
                      </div>

                      {/* AccumulationTable */}

                       {/* BeneficiariesTable */}
                      <h3>Beneficiaries</h3>
                       <div   className='table-responsive my-3'>
                         <table className="table table-bordered table-hover text-center">
                            <thead className="text-light" id="tableHead">
                            <tr>
                                  <th>No</th>
                                  <th>Beneficiaries</th>
                                  
                                <th>Operations</th>
                              </tr>
                            </thead>
                              <tbody>
                                  {  BeneficiaryDataList.map((elem,index)=>{
                                      
                                  return(
                                    
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{elem.beneficiariesAttached}</td>
                                        
                                        <td >
                                        <button  type='button' onClick={(e)=>deleteHandler_Beneficiaries(elem,index)} className='btn btn-danger btn-sm'>delete</button>
                                        <button  type='button' onClick={(e)=>updateHandler_Beneficiaries(elem)} className='btn btn-warning btn-sm mx-2'>update</button>

                                        </td> 
                                    
                                    </tr>
                                    );
                                        
                                    }) }
                            </tbody>
                          </table>
                      </div>

                      {/* BeneficiariesTable */}

                      
                       {/* ContributionTable */}
                       <h3>Contribution</h3>
                       <div   className='table-responsive my-3'>
                         <table className="table table-bordered table-hover text-center">
                            <thead className="text-light" id="tableHead">
                            <tr>
                                  <th>No</th>
                                  <th>Contribution</th>
                                  
                                <th>Operations</th>
                              </tr>
                            </thead>
                              <tbody>
                                  {  contributionModal.map((elem,index)=>{
                                      
                                  return(
                                    
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{elem.ContributeFund}</td>
                                        
                                        <td >
                                        <button  type='button' onClick={(e)=>deleteHandler_Contribution(elem,index)} className='btn btn-danger btn-sm'>delete</button>
                                        <button  type='button' onClick={(e)=>updateHandler_Contribution(elem)} className='btn btn-warning btn-sm mx-2'>update</button>

                                        </td> 
                                    
                                    </tr>
                                    );
                                        
                                    }) }
                            </tbody>
                          </table>
                      </div>

                      {/* ContributionTable */}


                   
                    </div>
                  {/* Accumulation Details */}

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
                                validationSchema={PensionAccount_validationSchema}
                                onSubmit={PensionAccount_onSubmit}>
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
                                    <label htmlFor="PensionMemberName" className="form-label">Member Name</   label>
                                    <Field
                                            as='select'
                                            name="PensionMemberName"
                                            id="PensionMemberName"
                                            className="form-select shadow  inputDesign"
                                            >
                                            <option value=''>Select</option>
                                            <option value="Client">Client</option>
                                            </Field>
                                            <ErrorMessage name="PensionMemberName" component='div' className="text-danger fw-bold"/>
                                    </div>
                                    </div>  
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="PensionType" className="form-label">Pension Type</   label>
                                    <Field
                                            as='select'
                                            name="PensionType"
                                            id="PensionType"
                                            className="form-select shadow  inputDesign"
                                            >
                                            <option value=''>Select</option>
                                            <option value="TTR">TTR</option>
                                            <option value="Account Based">Account Based</option>
                                            </Field>
                                            <ErrorMessage name="PensionType" component='div' className="text-danger fw-bold"/>
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
                                    type="button"
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
                     {/* Pension Account Table */}
                      
                     <div   className='table-responsive my-3'>
                         <table className="table table-bordered table-hover text-center">
                            <thead className="text-light" id="tableHead">
                            <tr>
                                  <th>Member Name</th>
                                  <th>Current Value</th>
                                  <th>Original Purchase Price</th>
                                  <th>Pension Payment Frequency</th>
                                  <th>Beneficiaries</th>
                                <th>Operations</th>
                              </tr>
                            </thead>
                              <tbody>
                                  {  PensionAccountList.map((elem,index)=>{
                                      
                                  return(
                                    
                                    <tr key={index}>
                                        <td>{elem.MemberName}</td>
                                        <td>{elem.CurrentBalance}</td>
                                        <td>{elem.OriginalPurchasePrice}</td>
                                        <td>{elem.Frequency}</td>
                                        <td>{}</td>
                                     
                                        <td >
                                        <button  type='button' onClick={(e)=>deleteHandler_PensionAccount(elem,index)} className='btn btn-danger btn-sm mt-1'>delete</button>
                                        <button  type='button' onClick={(e)=>updateHandler_PensionAccount(elem)} className='btn btn-warning btn-sm mx-2 mt-1'>update</button>

                                        </td> 
                                    
                                    </tr>
                                    );
                                        
                                    }) }
                            </tbody>
                          </table>
                    </div>

                         
                    {/* Pension AccountTable */}
                  
                    </div>
                  {/* Pension Account Details */}

                  {/* Bank Accounts Details */}
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
                                <input type="radio" name="BankAccountsRadio"
                                id="BankAccountsopt1" value="Yes"
                                onClick={()=>BankAccountsHandler("Yes")} 
                                onChange={handleChange}
                                checked={values.BankAccountsRadio==="Yes"}
                                />
                                <label htmlFor="BankAccountsopt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="BankAccountsRadio"
                                id="BankAccountsopt2" value="No"
                                onClick={()=>BankAccountsHandler("No")} 
                                onChange={handleChange}
                                checked={values.BankAccountsRadio==="No"}
                              />
                                <label htmlFor="BankAccountsopt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>



                                  
                                </div>
                                  </div>    
                            </div>
                            {BankAccounts && <div className='col-md-6'>
                            <label  className="form-label">
                            Please enter the details of your Bank Accounts
                                </label>
                                <br />
                              
                              <span
                                className=" btn h-50 w-50
                                btn-outline-success "
                                onClick={BankAccountshandleShow}
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
                                show={BankAccountsshow}
                                onHide={BankAccountshandleClose}
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
                                validationSchema={Bank_validationSchema}
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
                                        <label htmlFor="CurrentValue1" className="form-label">Current Value</   label>
                                        <Field type="number" className="form-control shadow inputDesign" 
                                        id="CurrentValue1" name='CurrentValue1' placeholder='Current Value'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='CurrentValue1' />
                                        </div>            
                                        </div>
                                        <div className="col-md-6">
                                        <div className="mb-3">
                                        <label htmlFor="FinancialInstitution1" className="form-label">Financial Institution</   label>
                                        <Field type="text" className="form-control shadow inputDesign" 
                                        id="FinancialInstitution1" name='FinancialInstitution1' placeholder='Financial Institution'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='FinancialInstitution1' />
                                        </div>            
                                        </div>
                                        <div className="col-md-6">
                                        <div className="mb-3">
                                        <label htmlFor="IncomeYield1" className="form-label">Income Yield %</   label>
                                        <Field type="number" className="form-control shadow inputDesign" 
                                        id="IncomeYield1" name='IncomeYield1' placeholder='Income Yield %'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='IncomeYield1' />
                                        </div>            
                                        </div>
                                        <div className="col-md-6">
                                        <div className="mb-3">
                                        <label htmlFor="AnnualIncome1" className="form-label">Annual Income</   label>
                                        <Field type="number" className="form-control shadow inputDesign" 
                                        id="AnnualIncome1" name='AnnualIncome1' placeholder='Annual Income'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='AnnualIncome1' />
                                        </div>            
                                        </div>  
                                    </div>
                                    
                                    </div>
                                    {/* Solicitor */}

                                    {/* Bank #2 */}
                                    <div className=' '>
                                    <h3 className=''>
                                    <div className="iconContainerLg mx-1">
                                        <img className="img-fluid" src={lawyer} alt="" />

                                        </div>
                                      Bank #2
                                    
                                        </h3>
                                    <div className="row">
                                        <div className="col-md-6">
                                        <div className="mb-3">
                                        <label htmlFor="CurrentValue2" className="form-label">Current Value</   label>
                                        <Field type="number" className="form-control shadow inputDesign" 
                                        id="CurrentValue2" name='CurrentValue2' placeholder='Current Value'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='CurrentValue2' />
                                        </div>            
                                        </div>
                                        <div className="col-md-6">
                                        <div className="mb-3">
                                        <label htmlFor="FinancialInstitution2" className="form-label">Financial Institution</   label>
                                        <Field type="text" className="form-control shadow inputDesign" 
                                        id="FinancialInstitution2" name='FinancialInstitution2' placeholder='Financial Institution'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='FinancialInstitution2' />
                                        </div>            
                                        </div>
                                        <div className="col-md-6">
                                        <div className="mb-3">
                                        <label htmlFor="IncomeYield2" className="form-label">Income Yield %</   label>
                                        <Field type="number" className="form-control shadow inputDesign" 
                                        id="IncomeYield2" name='IncomeYield2' placeholder='Income Yield %'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='IncomeYield2' />
                                        </div>            
                                        </div>
                                        <div className="col-md-6">
                                        <div className="mb-3">
                                        <label htmlFor="AnnualIncome2" className="form-label">Annual Income</   label>
                                        <Field type="number" className="form-control shadow inputDesign" 
                                        id="AnnualIncome2" name='AnnualIncome2' placeholder='Annual Income'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='AnnualIncome2' />
                                        </div>            
                                        </div>  
                                    </div>
                                    
                                    </div>
                                    {/* Bank #2 */}

                                     {/* Bank #3 */}
                                     <div className=' '>
                                    <h3 className=''>
                                    <div className="iconContainerLg mx-1">
                                        <img className="img-fluid" src={lawyer} alt="" />

                                        </div>
                                      Bank #3
                                    
                                        </h3>
                                    <div className="row">
                                        <div className="col-md-6">
                                        <div className="mb-3">
                                        <label htmlFor="CurrentValue3" className="form-label">Current Value</   label>
                                        <Field type="number" className="form-control shadow inputDesign" 
                                        id="CurrentValue3" name='CurrentValue3' placeholder='Current Value'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='CurrentValue3' />
                                        </div>            
                                        </div>
                                        <div className="col-md-6">
                                        <div className="mb-3">
                                        <label htmlFor="FinancialInstitution3" className="form-label">Financial Institution</   label>
                                        <Field type="text" className="form-control shadow inputDesign" 
                                        id="FinancialInstitution3" name='FinancialInstitution3' placeholder='Financial Institution'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='FinancialInstitution3' />
                                        </div>            
                                        </div>
                                        <div className="col-md-6">
                                        <div className="mb-3">
                                        <label htmlFor="IncomeYield3" className="form-label">Income Yield %</   label>
                                        <Field type="number" className="form-control shadow inputDesign" 
                                        id="IncomeYield3" name='IncomeYield3' placeholder='Income Yield %'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='IncomeYield3' />
                                        </div>            
                                        </div>
                                        <div className="col-md-6">
                                        <div className="mb-3">
                                        <label htmlFor="AnnualIncome3" className="form-label">Annual Income</   label>
                                        <Field type="number" className="form-control shadow inputDesign" 
                                        id="AnnualIncome3" name='AnnualIncome3' placeholder='Annual Income'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='AnnualIncome3' />
                                        </div>            
                                        </div>  
                                    </div>
                                    
                                    </div>
                                    {/* Bank #3 */}

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
                                    type="button"
                                      className="float-end btn w-25  btn-outline  backBtn mx-3"
                                      onClick={BankAccountshandleClose}
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
                      {/* bankTable */}
                      <div   className='table-responsive my-3'>
                         <table className="table table-bordered table-hover text-center">
                            <thead className="text-light" id="tableHead">
                            <tr>
                                  <th>Current Value</th>
                                  <th>Financial Institution</th>
                                  <th>Income Yield</th>
                                  <th>Annual Income</th>
                                <th>Operations</th>
                              </tr>
                            </thead>
                              <tbody>
                                  {  bankAccountList.map((elem,index)=>{
                                        // let {ChildName,childDoBID,childRelationship,childAge,childGender}=elem;
                                      
                                  return(
                                    
                                    <tr key={index}>
                                        <td>{elem.CurrentValue}</td>
                                        <td>{elem.FinancialInstitution}</td>
                                        <td>{elem.IncomeYield}</td>
                                        <td>{elem.AnnualIncome}</td>
                                        <td >
                                        <button  type='button' onClick={(e)=>deleteHandler_Bank(elem,index)} className='btn btn-danger btn-sm'>delete</button>
                                        <button  type='button' onClick={(e)=>updateHandler_Bank(elem)} className='btn btn-warning btn-sm mx-2'>update</button>

                                        </td> 
                                    
                                    </tr>
                                    );
                                        
                                    }) }
                            </tbody>
                          </table>
                      </div>

                      {/* bankTable */}
                   
                    </div>
                  {/* Bank Accounts Details */}

                  {/* TermDeposit Accounts Details */}
                  <div className='mb-5'>
                          <h3 className="">Term Deposit Accounts</h3>

                              {/* 1 row */}
                              <div className="row">
                            <div className="col-md-6">
                                  <div className="mb-3">
                                <label  className="form-label">
                                Do you have any Term Deposit Accounts?
                                </label>
                              {/* switch button style */}
                                <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="TermDepositRadio"
                                id="TermDepositopt1" value="Yes"
                                onClick={()=>TermDepositHandler("Yes")} 
                                onChange={handleChange}
                                checked={values.TermDepositRadio==="Yes"}
                                />
                                <label htmlFor="TermDepositopt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="TermDepositRadio"
                                id="TermDepositopt2" value="No"
                                onClick={()=>TermDepositHandler("No")} 
                                onChange={handleChange}
                                checked={values.TermDepositRadio==="No"}
                              />
                                <label htmlFor="TermDepositopt2" className="label2">
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
                                Term Deposit Account Details
                                    <div className="iconContainerLg">
                                <img className="img-fluid" src={notebook} alt="" />

                                </div>
                                  </Modal.Title>
                                </Modal.Header>
                              <Formik
                                initialValues={term_InitialValues}
                                validationSchema={Term_validationSchema}
                                onSubmit={Term_onSubmit}>
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
                                        <label htmlFor="CurrentValue1" className="form-label">Current Value</   label>
                                        <Field type="number" className="form-control shadow inputDesign" 
                                        id="CurrentValue1" name='CurrentValue1' placeholder='Current Value'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='CurrentValue1' />
                                        </div>            
                                        </div>
                                        <div className="col-md-6">
                                        <div className="mb-3">
                                        <label htmlFor="TermDepositFinancialInstitution" className="form-label">Financial Institution</   label>
                                        <Field type="text" className="form-control shadow inputDesign" 
                                        id="TermDepositFinancialInstitution" name='TermDepositFinancialInstitution' placeholder='Financial Institution'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='TermDepositFinancialInstitution' />
                                        </div>            
                                        </div>
                                        <div className="col-md-6">
                                        <div className="mb-3">
                                        <label htmlFor="TermDepositIncomeYield" className="form-label">Income Yield %</   label>
                                        <Field type="number" className="form-control shadow inputDesign" 
                                        id="TermDepositIncomeYield" name='TermDepositIncomeYield' placeholder='Income Yield %'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='TermDepositIncomeYield' />
                                        </div>            
                                        </div>
                                        <div className="col-md-6">
                                        <div className="mb-3">
                                        <label htmlFor="AnnualIncome1" className="form-label">Annual Income</   label>
                                        <Field type="number" className="form-control shadow inputDesign" 
                                        id="AnnualIncome1" name='AnnualIncome1' placeholder='Annual Income'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='AnnualIncome1' />
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
                                      TermDeposit #2
                                    
                                        </h3>
                                    <div className="row">
                                        <div className="col-md-6">
                                        <div className="mb-3">
                                        <label htmlFor="TermDeposit2CurrentValue" className="form-label">Current Value</   label>
                                        <Field type="number" className="form-control shadow inputDesign" 
                                        id="TermDeposit2CurrentValue" name='TermDeposit2CurrentValue' placeholder='Current Value'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='TermDeposit2CurrentValue' />
                                        </div>            
                                        </div>
                                        <div className="col-md-6">
                                        <div className="mb-3">
                                        <label htmlFor="TermDeposit2FinancialInstitution" className="form-label">Financial Institution</   label>
                                        <Field type="text" className="form-control shadow inputDesign" 
                                        id="TermDeposit2FinancialInstitution" name='TermDeposit2FinancialInstitution' placeholder='Financial Institution'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='TermDeposit2FinancialInstitution' />
                                        </div>            
                                        </div>
                                        <div className="col-md-6">
                                        <div className="mb-3">
                                        <label htmlFor="TermDeposit2IncomeYield" className="form-label">Income Yield %</   label>
                                        <Field type="number" className="form-control shadow inputDesign" 
                                        id="TermDeposit2IncomeYield" name='TermDeposit2IncomeYield' placeholder='Income Yield %'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='TermDeposit2IncomeYield' />
                                        </div>            
                                        </div>
                                        <div className="col-md-6">
                                        <div className="mb-3">
                                        <label htmlFor="TermDeposit2AnnualIncome" className="form-label">Annual Income</   label>
                                        <Field type="number" className="form-control shadow inputDesign" 
                                        id="TermDeposit2AnnualIncome" name='TermDeposit2AnnualIncome' placeholder='Annual Income'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='TermDeposit2AnnualIncome' />
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
                                      TermDeposit #3
                                    
                                        </h3>
                                    <div className="row">
                                        <div className="col-md-6">
                                        <div className="mb-3">
                                        <label htmlFor="TermDeposit3CurrentValue" className="form-label">Current Value</   label>
                                        <Field type="number" className="form-control shadow inputDesign" 
                                        id="TermDeposit3CurrentValue" name='TermDeposit3CurrentValue' placeholder='Current Value'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='TermDeposit3CurrentValue' />
                                        </div>            
                                        </div>
                                        <div className="col-md-6">
                                        <div className="mb-3">
                                        <label htmlFor="TermDeposit3FinancialInstitution" className="form-label">Financial Institution</   label>
                                        <Field type="text" className="form-control shadow inputDesign" 
                                        id="TermDeposit3FinancialInstitution" name='TermDeposit3FinancialInstitution' placeholder='Financial Institution'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='TermDeposit3FinancialInstitution' />
                                        </div>            
                                        </div>
                                        <div className="col-md-6">
                                        <div className="mb-3">
                                        <label htmlFor="TermDeposit3IncomeYield" className="form-label">Income Yield %</   label>
                                        <Field type="number" className="form-control shadow inputDesign" 
                                        id="TermDeposit3IncomeYield" name='TermDeposit3IncomeYield' placeholder='Income Yield %'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='TermDeposit3IncomeYield' />
                                        </div>            
                                        </div>
                                        <div className="col-md-6">
                                        <div className="mb-3">
                                        <label htmlFor="TermDeposit3AnnualIncome" className="form-label">Annual Income</   label>
                                        <Field type="number" className="form-control shadow inputDesign" 
                                        id="TermDeposit3AnnualIncome" name='TermDeposit3AnnualIncome' placeholder='Annual Income'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='TermDeposit3AnnualIncome' />
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
                                    type="button"
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
                                {/* TermTable */}
                      <div className='table-responsive my-3'>
                         <table className="table table-bordered table-hover text-center">
                            <thead className="text-light" id="tableHead">
                            <tr>
                                  <th>Current Value</th>
                                  <th>Financial Institution</th>
                                  <th>Income Yield</th>
                                  <th>Annual Income</th>
                                <th>Operations</th>
                              </tr>
                            </thead>
                              <tbody>
                                  {  termAccountList.map((elem,index)=>{
                                        // let {ChildName,childDoBID,childRelationship,childAge,childGender}=elem;
                                      
                                  return(
                                    
                                    <tr key={index}>
                                        <td>{elem.CurrentValue}</td>
                                        <td>{elem.FinancialInstitution}</td>
                                        <td>{elem.IncomeYield}</td>
                                        <td>{elem.AnnualIncome}</td>
                                        <td >
                                        <button  type='button' onClick={(e)=>deleteHandler_Term(elem,index)} className='btn btn-danger btn-sm'>delete</button>
                                        <button  type='button' onClick={(e)=>updateHandler_Term(elem)} className='btn btn-warning btn-sm mx-2'>update</button>

                                        </td> 
                                    
                                    </tr>
                                    );
                                        
                                    }) }
                            </tbody>
                          </table>
                      </div>

                          {/* TermTable */}
                  
                    </div>
                  {/* TermDeposit Accounts Details */}

                  {/* Australian Share Market Details */}
                  <div className='mb-5'>
                          <h3 className="">Australian Share Market</h3>

                              {/* 1 row */}
                              <div className="row">
                            <div className="col-md-6">
                                  <div className="mb-3">
                                <label  className="form-label">
                                Do you have any Australian Market Shares?
                                </label>
                              {/* switch button style */}
                                <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="AustralianShareRadio"
                                id="AustralianShareopt1" value="Yes"
                                onClick={()=>AustralianShareHandler("Yes")} 
                                onChange={handleChange}
                                checked={values.AustralianShareRadio==="Yes"}
                                />
                                <label htmlFor="AustralianShareopt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="AustralianShareRadio"
                                id="AustralianShareopt2" value="No"
                                onClick={()=>AustralianShareHandler("No")} 
                                onChange={handleChange}
                                checked={values.AustralianShareRadio==="No"}
                              />
                                <label htmlFor="AustralianShareopt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>



                                  
                                </div>
                                  </div>    
                            </div>
                            {AustralianShare && <div className='col-md-6'>
                            <label  className="form-label">
                            Please enter the details of your Australian Market Shares</label>
                                <br />
                              
                              <span
                                className=" btn h-50 w-50
                                btn-outline-success "
                                onClick={AustralianSharehandleShow}
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
                                show={AustralianShareshow}
                                onHide={AustralianSharehandleClose}
                                backdrop="static"
                                className="modal-lg"
                                keyboard={false}
                              >
                                <Modal.Header
                                  className="text-light modalBG "
                                  closeButton
                                >
                                  <Modal.Title className="fontStyle">
                                  Australian Share Market Details
                                    <div className="iconContainerLg">
                                <img className="img-fluid" src={notebook} alt="" />

                                </div>
                                  </Modal.Title>
                                </Modal.Header>
                              <Formik
                                initialValues={Client_initialValues}
                                validationSchema={Australian_validationSchema}
                                onSubmit={Australian_onSubmit}>
                              {({values , setFieldValue ,setValues,handleChange,formik})=>
                                <Form>
                                <Modal.Body>
                                    {/* Professional Advisor Detail Form */}
                                    
                                    {/* Solicitor */}
                                    <div className=' '>
                                    <div className="row">                                        
                                        <div className="col-md-6">
                                        <div className="mb-3">
                                        <label htmlFor="AustralianShareInvestmentName" className="form-label">Investment Name</   label>
                                        <Field
                                                as='select'
                                                name="AustralianShareInvestmentName"
                                                id="AustralianShareInvestmentName"
                                                className="form-select shadow  inputDesign"
                                                >
                                                <option value=''>Select</option>
                                                <option value="1AL">1AL</option>
                                                <option value="3PL">3PL</option>
                                                <option value="88E">88E</option>
                                                <option value="A2M">A2M</option>
                                                </Field>
                                                <ErrorMessage name="AustralianShareInvestmentName" component='div' className="text-danger fw-bold"/>
                                        </div>
                                        </div>
                                        <div className="col-md-6">
                                        <div className="mb-3">
                                        <label htmlFor="AustralianShareNoOfShares" className="form-label">No. of Shares</   label>
                                        <Field type="number" className="form-control shadow inputDesign" 
                                        id="AustralianShareNoOfShares" name='AustralianShareNoOfShares' placeholder='No. of Shares'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='AustralianShareNoOfShares' />
                                        </div>            
                                        </div> 
                                        <div className="col-md-6">
                                        <div className="mb-3">
                                        <label htmlFor="AustralianShareCurrentPrice" className="form-label">Current Share Price</   label>
                                        <Field type="number" className="form-control shadow inputDesign" 
                                        id="AustralianShareCurrentPrice" name='AustralianShareCurrentPrice' placeholder='Current Share Price'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='AustralianShareCurrentPrice' />
                                        </div>            
                                        </div> 
                                        <div className="col-md-6">
                                        <div className="mb-3">
                                        <label htmlFor="AustralianShareTotalValue" className="form-label">Total Share Value</   label>
                                        <Field type="number" className="form-control shadow inputDesign" 
                                        id="AustralianShareTotalValue" name='AustralianShareTotalValue' placeholder='Total Share Value'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='AustralianShareTotalValue' />
                                        </div>            
                                        </div> 
                                        <div className="col-md-6">
                                        <div className="mb-3">
                                        <label htmlFor="AustralianShareCostBase" className="form-label">Cost Base</   label>
                                        <Field type="number" className="form-control shadow inputDesign" 
                                        id="AustralianShareCostBase" name='AustralianShareCostBase' placeholder='Cost Base'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='AustralianShareCostBase' />
                                        </div>            
                                        </div> 
                                        <div className="col-md-6">
                                        <div className="mb-3">
                                        <label htmlFor="AustralianSharePurchaseDate" className="form-label">Purchase Date</   label>
                                        <Field type="date" className="form-control shadow inputDesign" 
                                        id="AustralianSharePurchaseDate" name='AustralianSharePurchaseDate' />
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='AustralianSharePurchaseDate' />
                                        </div>            
                                        </div>
                                        <div className="col-md-6">
                                        <div className="mb-3">
                                        <label htmlFor="AustralianShareIncomePA" className="form-label">Income P.A.</   label>
                                        <div className='row'>
                                        <div className='col-md-8'>
                                        <Field type="number" className="form-control shadow inputDesign"
                                        id="AustralianShareIncomePA" name='AustralianShareIncomePA' placeholder="Income P.A."/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='AustralianShareIncomePA' />
                                        </div>
                                        <div className='col-md-4'>
                                        <Field
                                                as='select'
                                                name="AustralianShareIncomePA2"
                                                id="AustralianShareIncomePA2"
                                                className="form-select shadow  inputDesign"
                                                >
                                                <option value=''>Select</option>
                                                <option value="dollor">$</option>
                                                <option value="percentage">%</option>
                                                </Field>
                                                <ErrorMessage name="AustralianShareIncomePA2" component='div' className="text-danger fw-bold"/>
                                        </div>
                                        </div>  
                                        </div>            
                                        </div>
                                        <div className="col-md-6">
                                        <div className="mb-3">
                                        <label htmlFor="AustralianShareTotalIncomePA" className="form-label">Total Income P.A.</   label>
                                        <Field type="number" className="form-control shadow inputDesign" 
                                        id="AustralianShareTotalIncomePA" name='AustralianShareTotalIncomePA' placeholder='Total Income P.A.'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='AustralianShareTotalIncomePA' />
                                        </div>            
                                        </div> 
                                        <div className="col-md-6">
                                        <div className="mb-3">
                                        <label  className="form-label">
                                        Reinvest Income
                                        </label>
                                    {/* switch button style */}
                                        <div className="form-check form-switch m-0 p-0 ">
                                        <div className="radiobutton">
                                        <input type="radio" name="AustralianShareReinvestIncome"
                                        id="AustralianShareReinvestIncomeOpt1" value="Yes"
                                        onChange={handleChange}
                                        checked={values.AustralianShareReinvestIncome==="Yes"}
                                        />
                                        <label htmlFor="AustralianShareReinvestIncomeOpt1" className="label1">
                                        <span>YES</span>
                                        </label>
                                        <input type="radio" name="AustralianShareReinvestIncome"
                                        id="AustralianShareReinvestIncomeOpt2" value="No"
                                        onChange={handleChange}
                                        checked={values.AustralianShareReinvestIncome==="No"}
                                    />
                                        <label htmlFor="AustralianShareReinvestIncomeOpt2" className="label2">
                                        <span>NO</span>
                                        </label>
                                    </div>



                                        
                                        </div>
                                        </div>    
                                    </div>
                                        <div className="col-md-6">
                                        <div className="mb-3">
                                        <label htmlFor="AustralianShareFrankedAmount" className="form-label">Franked Amount %</   label>
                                        <Field type="number" className="form-control shadow inputDesign" 
                                        id="AustralianShareFrankedAmount" name='AustralianShareFrankedAmount' placeholder='Franked Amount %'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='AustralianShareFrankedAmount' />
                                        </div>            
                                        </div>
                                        <div className="col-md-6">
                                        <div className="mb-3">
                                        <label htmlFor="AustralianShareRegInvestmentsPA" className="form-label">Reg Investments P.A.</   label>
                                        <Field type="number" className="form-control shadow inputDesign" 
                                        id="AustralianShareRegInvestmentsPA" name='AustralianShareRegInvestmentsPA' placeholder='Reg Investments P.A.'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='AustralianShareRegInvestmentsPA' />
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
                                    type="button"
                                      className="float-end btn w-25  btn-outline  backBtn mx-3"
                                      onClick={AustralianSharehandleClose}
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
                                 {/* Australian Table */}
                      
                        <div   className='table-responsive my-3'>
                         <table className="table table-bordered table-hover text-center">
                            <thead className="text-light" id="tableHead">
                            <tr>
                                  <th>Company Name</th>
                                  <th>Total Share Value</th>
                                  <th>Cost Base</th>
                                  <th>Income pa</th>
                                  <th>Reinvest Income</th>
                                <th>Operations</th>
                              </tr>
                            </thead>
                              <tbody>
                                  {  AustralianShareList.map((elem,index)=>{
                                        // let {ChildName,childDoBID,childRelationship,childAge,childGender}=elem;
                                      
                                  return(
                                    
                                    <tr key={index}>
                                        <td>{elem.InvestmentName}</td>
                                        <td>{elem.TotalShareValue}</td>
                                        <td>{elem.CostBase}</td>
                                        <td>{elem.IncomePA}</td>
                                        <td>{elem.ReinvestIncome}</td>
                                        <td >
                                        <button  type='button' onClick={(e)=>deleteHandler_AustralianShare(elem,index)} className='btn btn-danger btn-sm'>delete</button>
                                        <button  type='button' onClick={(e)=>updateHandler_AustralianShare(elem)} className='btn btn-warning btn-sm mx-2'>update</button>

                                        </td> 
                                    
                                    </tr>
                                    );
                                        
                                    }) }
                            </tbody>
                          </table>
                       </div>

                    {/* Australian Table */}

                    
                    {/* Aus loans portfolio associated */}

                    <div className=' mt-5'>
                        <div className="row">
                        <div className="col-md-12">
                    <div className="mb-3">
                      <label  className="form-label">
                      Does your share portfolio have any loans associated with them?
                      </label>
                        {/* switch button style */}
                        <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="loansAssociatedradio" id="loansAssociatedopt1" 
                                onChange={handleChange} value="Yes"
                                checked={values.loansAssociatedradio==="Yes"} />
                                <label htmlFor="loansAssociatedopt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="loansAssociatedradio" id="loansAssociatedopt2"  
                                onChange={handleChange} value="No"
                                checked={values.loansAssociatedradio==="No"}/>
                                <label htmlFor="loansAssociatedopt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>
                                </div>
                              {/* switch button style */}
                      

                    </div>
                       </div>
                       {
                       
                       values.loansAssociatedradio==="Yes" &&
                        <div className='col-md-6 my-2'>
                        <label  className="form-label">
                        Please enter the details
                            </label>
                            <br />
                          
                          <span
                            className=" btn h-50 w-50
                            btn-outline-success "
                            onClick={handleShow4}
                          >
                            <div className="iconContainer mx-1">
                            <img className="img-fluid" src={plus} alt="" />

                            </div>
                            Enter Details
                          </span>
                        </div>}

                        </div>
                    {/* loans associated modal */}
                         

                          <Modal
                            show={show4}
                            onHide={handleClose4}
                            backdrop="static"
                            className="modal-lg"
                            keyboard={false}
                          >
                            <Modal.Header
                              className="text-light modalBG "
                              closeButton
                            >
                              <Modal.Title className="fontStyle">
                              Add Loan Details
                                <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />

                            </div>
                              </Modal.Title>
                            </Modal.Header>
                           <Formik
                            initialValues={Australian_loansAssociated_initialValues}
                            validationSchema={Australian_loansAssociated_validationSchema}
                            onSubmit={Australian_loansAssociated_onSubmit}
                            >
                          {({values , setFieldValue ,handleBlur,setValues,handleChange,formik})=>
                            <Form>
                            <Modal.Body>
                                  {/* Share details 3rd*/}

                         <div className=''>
                       

  
                        <div className="row">
                                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="AustralianPortfolioLoanType" className="form-label">
                        Type of loan
                        </label>
                        <Field
                        as='select'
                          id="AustralianPortfolioLoanType"
                          className="form-select shadow  inputDesign"
                          name="AustralianPortfolioLoanType"
                        >
                          <option value="">Select</option>
                          <option value="InvestmentLoan">Investment Loan</option>
                        </Field>
                        <ErrorMessage className="text-danger fw-bold" component="div"   name="AustralianPortfolioLoanType" />

                      </div>
                                   </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="AustralianPortfolioCurrentBalance" className="form-label">Current Balance</   label>
                                    <Field type="number" className="form-control shadow inputDesign"
                                        id="AustralianPortfolioCurrentBalance"
                                        name="AustralianPortfolioCurrentBalance"
                                     placeholder="Current Balance"
                                        />
                              <ErrorMessage className="text-danger fw-bold" component="div"   name="AustralianPortfolioCurrentBalance" />

                                    </div>
                                </div>
                        </div>

                         <div className="row">
                       <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="AustralianPortfolioLender" className="form-label">Lender</   label>
                          <Field type="text" className="form-control shadow inputDesign" 
                          id="AustralianPortfolioLender" name='AustralianPortfolioLender' placeholder="Lender"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='AustralianPortfolioLender' />
                        </div>            
                       </div>

                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="AustralianPortfolioRepaymentAmount" className="form-label">Repayments Amount</   label>
                          <Field type="number" className="form-control shadow inputDesign"
                           id="AustralianPortfolioRepaymentAmount" name='AustralianPortfolioRepaymentAmount' placeholder="Repayments Amount"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='AustralianPortfolioRepaymentAmount' />
                        </div>            
                        </div>



                        </div>

                        <div className="row">
                                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="AustralianPortfolioFrequency" className="form-label">
                        Frequency
                        </label>
                        <Field
                        as='select'
                          id="AustralianPortfolioFrequency"
                          className="form-select shadow  inputDesign"
                          name="AustralianPortfolioFrequency"
                        >
                          <option value="">Select</option>
                          <option value="Weekly"> Weekly</option>
                          <option value="Fortnightly">Fortnightly</option>
                          <option value="Monthly">Monthly</option>
                          <option value="Annually">Annually</option>
                        </Field>
                        <ErrorMessage className="text-danger fw-bold" component="div"   name="AustralianPortfolioFrequency" />

                      </div>
                                   </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="" className="form-label">Annual Repayments</   label>
                                    <Field type="number" className="form-control shadow inputDesign"
                                        id="AustralianPortfolioAnnualRepayment"
                                        name="AustralianPortfolioAnnualRepayment"
                                        placeholder="Annual Repayments"
                                        readOnly={true}
                                        />

                                    </div>
                                </div>
                        </div>

                        
                        <div className="row">
                          <div className="col-md-6">
                                      <div className="mb-3">
                                      <label htmlFor="AustralianInterestRatePA" className="form-label">Interest Rate (p.a)</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                          id="AustralianInterestRatePA"
                                          name="AustralianInterestRatePA"
                                      placeholder="Current Balance"
                                          />
                                <ErrorMessage className="text-danger fw-bold" component="div"   name="AustralianInterestRatePA" />

                                      </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="AustralianPortfolioLoanTerm" className="form-label">
                              Loan Term (1-30 Years)
                              </label>
                              <Field
                              as='select'
                                id="AustralianPortfolioLoanTerm"
                                className="form-select shadow  inputDesign"
                                name="AustralianPortfolioLoanTerm"
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
                              <ErrorMessage className="text-danger fw-bold" component="div"   name="AustralianPortfolioLoanTerm" />

                            </div>
                          </div>      
                        </div>

                        <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="AustralianPortfolioLoanType2" className="form-label">
                        Loan Type
                        </label>
                        <Field
                        as='select'
                          id="AustralianPortfolioLoanType2"
                          className="form-select shadow  inputDesign"
                          name="AustralianPortfolioLoanType2"
                        >
                          <option value="">Select</option>
                          <option value="IByOnly">I/Only</option>
                          <option value="P&I">P&I</option>

                        </Field>
                        <ErrorMessage className="text-danger fw-bold" component="div"   name="AustralianPortfolioLoanType2" />

                      </div>
                    </div>
                        <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="AustralianPortfolioDeductibleLoanAmount" className="form-label">Deductible Amount of Loan (%)</   label>
                                    <Field type="number" className="form-control shadow inputDesign"
                                        id="AustralianPortfolioDeductibleLoanAmount"
                                        name="AustralianPortfolioDeductibleLoanAmount"
                                     placeholder="Deductible Amount of Loan"
                                        />
                              <ErrorMessage className="text-danger fw-bold" component="div"   name="AustralianPortfolioDeductibleLoanAmount" />

                                    </div>
                    

                              
                        </div>
                        </div>

                        <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="AustralianPortfolioYearRemaining" className="form-label">
                              Year Remaning (1-30 Years)
                              </label>
                              <Field
                              as='select'
                                id="AustralianPortfolioYearRemaining"
                                className="form-select shadow  inputDesign"
                                name="AustralianPortfolioYearRemaining"
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
                              <ErrorMessage className="text-danger fw-bold" component="div"   name="AustralianPortfolioYearRemaining" />

                            </div>
                        </div>
                        </div>
                       


                       </div>
                         {/* Share details */}
                           
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
                                type="button"
                                  className="float-end btn w-25  btn-outline  backBtn mx-3"
                                  onClick={handleClose4}
                                >
                                  Cancel
                                </button>
                              </div>
                            </Modal.Footer>
                            </Form>
                            }
                           </Formik>
                          </Modal>
                   {/* loans associated modal */}

                     {/* Australian Table */}
                      
                     <div   className='table-responsive my-3'>
                         <table className="table table-bordered table-hover text-center">
                            <thead className="text-light" id="tableHead">
                            <tr>
                                  <th>Type of Loan</th>
                                  <th>Current Balance</th>
                                  <th>Lender</th>
                                  <th>Annual Repayments</th>
                                  <th>Interest Rate (p.a)</th>
                                <th>Operations</th>
                              </tr>
                            </thead>
                              <tbody>
                                  {  AustralianLoanList.map((elem,index)=>{
                                      
                                  return(
                                    
                                    <tr key={index}>
                                        <td>{elem.AustralianPortfolioLoanType}</td>
                                        <td>{elem.AustralianPortfolioCurrentBalance}</td>
                                        <td>{elem.AustralianPortfolioLender}</td>
                                        <td>{elem.AustralianPortfolioRepaymentAmount}</td>
                                        <td>{elem.AustralianInterestRatePA}</td>
                                        <td >
                                        <button  type='button' onClick={(e)=>deleteHandler_AustralianLoan(elem,index)} className='btn btn-danger btn-sm'>delete</button>
                                        <button  type='button' onClick={(e)=>updateHandler_AustralianLoan(elem)} className='btn btn-warning btn-sm mx-2'>update</button>

                                        </td> 
                                    
                                    </tr>
                                    );
                                        
                                    }) }
                            </tbody>
                          </table>
                      </div>

                         
                    {/* Australian TableLoan */}

                    </div>
                     {/*  Aus loans portfolio associated */}
                   
                    </div>
                    
                  {/* Australian Share Market Details */}

                  {/* Managed Funds Details */}
                  <div className='mb-5'>
                          <h3 className="">Managed Funds</h3>

                              {/* 1 row */}
                              <div className="row">
                            <div className="col-md-6">
                                  <div className="mb-3">
                                <label  className="form-label">
                                Do you have any Managed Funds?
                                </label>
                              {/* switch button style */}
                                <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="ManagedFundsRadio"
                                id="ManagedFundsopt1" value="Yes"
                                onClick={()=>ManagedFundsHandler("Yes")} 
                                onChange={handleChange}
                                checked={values.ManagedFundsRadio==="Yes"}
                                />
                                <label htmlFor="ManagedFundsopt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="ManagedFundsRadio"
                                id="ManagedFundsopt2" value="No"
                                onClick={()=>ManagedFundsHandler("No")} 
                                onChange={handleChange}
                                checked={values.ManagedFundsRadio==="No"}
                              />
                                <label htmlFor="ManagedFundsopt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>



                                  
                                </div>
                                  </div>    
                            </div>
                            {ManagedFunds && <div className='col-md-6'>
                            <label  className="form-label">
                            Please enter the details of your Managed Funds</label>
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
                              
                              {/* --------------------------------------------- */}

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
                                validationSchema={Manage_validationSchema}
                                onSubmit={Manage_onSubmit}>
                              {({values , setFieldValue ,setValues,handleChange,formik})=>
                                <Form>
                                <Modal.Body>
                                    {/* Professional Advisor Detail Form */}
                                    
                                    {/* Solicitor */}
                                    <div className=' '>
                                    <div className="row">                                        
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                        <label htmlFor="ManagedFundsPlatformName" className="form-label">Platform Name</   label>
                                        <Field
                                                as='select'
                                                name="ManagedFundsPlatformName"
                                                id="ManagedFundsPlatformName"
                                                className="form-select shadow  inputDesign"
                                                >
                                                <option value=''>Select</option>
                                                <option value="AMP - Choice">AMP - Choice</option>
                                                <option value="AMP - Core">AMP - Core</option>
                                                <option value="AMP - Select">AMP - Select</option>
                                                </Field>
                                                <ErrorMessage name="ManagedFundsPlatformName" component='div' className="text-danger fw-bold"/>
                                        </div>
                                        </div>                                       
                                        <div className="col-md-6">
                                        <div className="mb-3">
                                        <label htmlFor="ManagedFundsInvestmentName" className="form-label">Investment Name</   label>
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
                                        <label htmlFor="ManagedFundsNoOfShares" className="form-label">No. of Units/Shares</   label>
                                        <Field type="number" className="form-control shadow inputDesign" 
                                        id="ManagedFundsNoOfShares" name='ManagedFundsNoOfShares' placeholder='No. of Shares'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='ManagedFundsNoOfShares' />
                                        </div>            
                                        </div> 
                                        <div className="col-md-6">
                                        <div className="mb-3">
                                        <label htmlFor="ManagedFundsCurrentPrice" className="form-label">Current Unit/Share Price</   label>
                                        <Field type="number" className="form-control shadow inputDesign" 
                                        id="ManagedFundsCurrentPrice" name='ManagedFundsCurrentPrice' placeholder='Current Share Price'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='ManagedFundsCurrentPrice' />
                                        </div>            
                                        </div> 
                                        <div className="col-md-6">
                                        <div className="mb-3">
                                        <label htmlFor="ManagedFundsCurrentValue" className="form-label">Current Value</   label>
                                        <Field type="number" className="form-control shadow inputDesign" 
                                        id="ManagedFundsCurrentValue" name='ManagedFundsCurrentValue' placeholder='Current Value'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='ManagedFundsCurrentValue' />
                                        </div>            
                                        </div>
                                        <div className="col-md-6">
                                        <div className="mb-3">
                                        <label htmlFor="ManagedFundsOriginalInvestment" className="form-label">Original Investment</   label>
                                        <Field type="number" className="form-control shadow inputDesign" 
                                        id="ManagedFundsOriginalInvestment" name='ManagedFundsOriginalInvestment' placeholder='Original Investment'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='ManagedFundsOriginalInvestment' />
                                        </div>            
                                        </div>  
                                        <div className="col-md-6">
                                        <div className="mb-3">
                                        <label htmlFor="ManagedFundsPurchaseDate" className="form-label">Purchase Date</   label>
                                        <Field type="date" className="form-control shadow inputDesign" 
                                        id="ManagedFundsPurchaseDate" name='ManagedFundsPurchaseDate' />
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
                                                name="ManagedFundsIncomePA2"
                                                id="ManagedFundsIncomePA2"
                                                className="form-select shadow  inputDesign"
                                                >
                                                <option value=''>Select</option>
                                                <option value="dollor">$</option>
                                                <option value="percentage">%</option>
                                                </Field>
                                                <ErrorMessage name="ManagedFundsIncomePA2" component='div' className="text-danger fw-bold"/>
                                        </div>
                                        </div>  
                                        </div>            
                                        </div>
                                        <div className="col-md-6">
                                        <div className="mb-3">
                                        <label htmlFor="ManagedFundsTotalIncomePA" className="form-label">Total Income P.A.</   label>
                                        <Field type="number" className="form-control shadow inputDesign" 
                                        id="ManagedFundsTotalIncomePA" name='ManagedFundsTotalIncomePA' placeholder='Total Income P.A.'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='ManagedFundsTotalIncomePA' />
                                        </div>            
                                        </div> 
                                        <div className="col-md-6">
                                        <div className="mb-3">
                                        <label  className="form-label">
                                        Reinvest Income
                                        </label>
                                    {/* switch button style */}
                                        <div className="form-check form-switch m-0 p-0 ">
                                        <div className="radiobutton">
                                        <input type="radio" name="ManagedFundsReinvestIncome"
                                        id="ManagedFundsReinvestIncomeOpt1" value="Yes"
                                        onChange={handleChange}
                                        checked={values.ManagedFundsReinvestIncome==="Yes"}
                                        />
                                        <label htmlFor="ManagedFundsReinvestIncomeOpt1" className="label1">
                                        <span>YES</span>
                                        </label>
                                        <input type="radio" name="ManagedFundsReinvestIncome"
                                        id="ManagedFundsReinvestIncomeOpt2" value="No"
                                        onChange={handleChange}
                                        checked={values.ManagedFundsReinvestIncome==="No"}
                                    />
                                        <label htmlFor="ManagedFundsReinvestIncomeOpt2" className="label2">
                                        <span>NO</span>
                                        </label>
                                    </div>



                                        
                                        </div>
                                        </div>    
                                    </div>
                                        <div className="col-md-6">
                                        <div className="mb-3">
                                        <label htmlFor="ManagedFundsRegInvestmentsPA" className="form-label">Reg Investments P.A.</   label>
                                        <Field type="number" className="form-control shadow inputDesign" 
                                        id="ManagedFundsRegInvestmentsPA" name='ManagedFundsRegInvestmentsPA' placeholder='Reg Investments P.A.'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='ManagedFundsRegInvestmentsPA' />
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
                                    type='button'
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
                 
                                {/* manageFund Table */}
                      
                       <div   className='table-responsive my-3'>
                         <table className="table table-bordered table-hover text-center">
                            <thead className="text-light" id="tableHead">
                            <tr>
                                  <th>Platform Name</th>
                                  <th>Total Portfolio Value</th>
                                  <th>Total Cost Base</th>
                                  
                                <th>Operations</th>
                              </tr>
                            </thead>
                              <tbody>
                                  {  manageFundList.map((elem,index)=>{
                                        // let {ChildName,childDoBID,childRelationship,childAge,childGender}=elem;
                                      
                                  return(
                                    
                                    <tr key={index}>
                                        <td>{elem.PlatformName}</td>
                                        <td>{elem.CurrentShareValue}</td>
                                        <td>{elem.OriginalInvestment}</td>
                                        <td >
                                        <button  type='button' onClick={(e)=>deleteHandler_ManageFund(elem,index)} className='btn btn-danger btn-sm'>delete</button>
                                        <button  type='button' onClick={(e)=>updateHandler_ManageFund(elem)} className='btn btn-warning btn-sm mx-2'>update</button>

                                        </td> 
                                    
                                    </tr>
                                    );
                                        
                                    }) }
                            </tbody>
                          </table>
                      </div>

                         
                    {/* manageFund table */}
                 
                  </div>
                  {/* Managed Funds Details */}

                   {/*managed  loans associated */}

                   <div className=' mt-5'>
                        <div className="row">
                        <div className="col-md-6">
                    <div className="mb-3">
                      <label  className="form-label">
                      Do you managed funds have any loan associated with them?
                      </label>
                        {/* switch button style */}
                        <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="managedloansAssociatedradio" id="managedloansAssociatedopt1" 
                                onChange={handleChange} value="Yes"
                                checked={values.managedloansAssociatedradio==="Yes"} />
                                <label htmlFor="managedloansAssociatedopt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="managedloansAssociatedradio" id="managedloansAssociatedopt2"  
                                onChange={handleChange} value="No"
                                checked={values.managedloansAssociatedradio==="No"}/>
                                <label htmlFor="managedloansAssociatedopt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>
                          </div>
                              {/* switch button style */}
                      

                    </div>
                       </div>
                       {
                       
                       values.managedloansAssociatedradio==="Yes" &&
                        <div className='col-md-6 my-2'>
                        <label  className="form-label">
                        Please enter the details
                            </label>
                            <br />
                          
                          <span
                            className=" btn h-50 w-50
                            btn-outline-success "
                            onClick={handleShow6}
                          >
                            <div className="iconContainer mx-1">
                            <img className="img-fluid" src={plus} alt="" />

                            </div>
                            Enter Details
                          </span>
                        </div>}

                        </div>
                    {/*Manage loans associated modal */}
                         

                          <Modal
                            show={show6}
                            onHide={handleClose6}
                            backdrop="static"
                            className="modal-lg"
                            keyboard={false}
                          >
                            <Modal.Header
                              className="text-light modalBG "
                              closeButton
                            >
                              <Modal.Title className="fontStyle">
                              Add Loan Details
                                <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />

                            </div>
                              </Modal.Title>
                            </Modal.Header>
                           <Formik
                            initialValues={managed_initialValues}
                            validationSchema={managed_validationSchema}
                            onSubmit={managed_onSubmit}
                            >
                          {({values , setFieldValue ,handleBlur,setValues,handleChange,formik})=>
                            <Form>
                            <Modal.Body>
                                  {/* Share details 3rd*/}

                         <div className=''>
                       

  
                        <div className="row">
                                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="Typeofloan" className="form-label">
                        Type of loan
                        </label>
                        <Field
                        as='select'
                          id="Typeofloan"
                          className="form-select shadow  inputDesign"
                          name="Typeofloan"
                        >
                          <option value="">Select</option>
                          <option value="InvestmentLoan">Investment Loan</option>
                        </Field>
                        <ErrorMessage className="text-danger fw-bold" component="div"   name="Typeofloan" />

                      </div>
                                   </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="CurrentBalance" className="form-label">Current Balance</   label>
                                    <Field type="number" className="form-control shadow inputDesign"
                                        id="CurrentBalance"
                                        name="CurrentBalance"
                                     placeholder="Current Balance"
                                        />
                              <ErrorMessage className="text-danger fw-bold" component="div"   name="CurrentBalance" />

                                    </div>
                                </div>
                        </div>

                         <div className="row">
                       <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="Lender" className="form-label">Lender</   label>
                          <Field type="text" className="form-control shadow inputDesign" 
                          id="Lender" name='Lender' placeholder="Lender"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='Lender' />
                        </div>            
                       </div>

                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="RepaymentsAmount" className="form-label">Repayments Amount</   label>
                          <Field type="number" className="form-control shadow inputDesign"
                           id="RepaymentsAmount" name='RepaymentsAmount' placeholder="Repayments Amount"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='RepaymentsAmount' />
                        </div>            
                        </div>



                        </div>

                        <div className="row">
                                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="Frequency" className="form-label">
                        Frequency
                        </label>
                        <Field
                        as='select'
                          id="Frequency"
                          className="form-select shadow  inputDesign"
                          name="Frequency"
                        >
                          <option value="">Select</option>
                          <option value="Weekly"> Weekly</option>
                          <option value="Fortnightly">Fortnightly</option>
                          <option value="Monthly">Monthly</option>
                          <option value="Annually">Annually</option>
                        </Field>
                        <ErrorMessage className="text-danger fw-bold" component="div"   name="Frequency" />

                      </div>
                                   </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="" className="form-label">Annual Repayments</   label>
                                    <Field type="number" className="form-control shadow inputDesign"
                                        id="managedAnnualRepayments"
                                        name="managedAnnualRepayments"
                                        placeholder="Annual Repayments"
                                        readOnly={true}
                                        />

                                    </div>
                                </div>
                        </div>

                        
                        <div className="row">
                          <div className="col-md-6">
                                      <div className="mb-3">
                                      <label htmlFor="InterestRatePA" className="form-label">Interest Rate (p.a)</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                          id="InterestRatePA"
                                          name="InterestRatePA"
                                      placeholder="Current Balance"
                                          />
                                <ErrorMessage className="text-danger fw-bold" component="div"   name="InterestRatePA" />

                                      </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="LoanTermInYears" className="form-label">
                              Loan Term (1-30 Years)
                              </label>
                              <Field
                              as='select'
                                id="LoanTermInYears"
                                className="form-select shadow  inputDesign"
                                name="LoanTermInYears"
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
                              <ErrorMessage className="text-danger fw-bold" component="div"   name="LoanTermInYears" />

                            </div>
                          </div>      
                        </div>

                        <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="LoanType" className="form-label">
                        Loan Type
                        </label>
                        <Field
                        as='select'
                          id="LoanType"
                          className="form-select shadow  inputDesign"
                          name="LoanType"
                        >
                          <option value="">Select</option>
                          <option value="IByOnly">I/Only</option>
                          <option value="P&I">P&I</option>

                        </Field>
                        <ErrorMessage className="text-danger fw-bold" component="div"   name="LoanType" />

                      </div>
                    </div>
                        <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="DeductibleAmountofLoan" className="form-label">Deductible Amount of Loan (%)</   label>
                                    <Field type="number" className="form-control shadow inputDesign"
                                        id="DeductibleAmountofLoan"
                                        name="DeductibleAmountofLoan"
                                     placeholder="Deductible Amount of Loan"
                                        />
                              <ErrorMessage className="text-danger fw-bold" component="div"   name="DeductibleAmountofLoan" />

                                    </div>
                    

                              
                        </div>
                        </div>

                        <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="YearRemaning" className="form-label">
                              Year Remaning (1-30 Years)
                              </label>
                              <Field
                              as='select'
                                id="YearRemaning"
                                className="form-select shadow  inputDesign"
                                name="YearRemaning"
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
                              <ErrorMessage className="text-danger fw-bold" component="div"   name="YearRemaning" />

                            </div>
                          </div>
                        </div>
                       


                       </div>
                         {/* Share details */}
                           
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
                                type="button"
                                  className="float-end btn w-25  btn-outline  backBtn mx-3"
                                  onClick={handleClose6}
                                >
                                  Cancel
                                </button>
                              </div>
                            </Modal.Footer>
                            </Form>
                            }
                           </Formik>
                          </Modal>
                   {/*Manage loans associated modal */}

                    </div>
                     {/* Manage loans associated */}

                       {/* manageLoan Table */}
                      
                       <div className='table-responsive'>
                         <table className="table table-bordered table-hover text-center">
                            <thead className="text-light" id="tableHead">
                            <tr>
                                  <th>Type of Loan</th>
                                  <th>Current Balance</th>
                                  <th>Lender</th>
                                  <th>Annual Repayments</th>
                                  <th>Interest Rate (p.a)</th>
                                <th>Operations</th>
                              </tr>
                            </thead>
                              <tbody>
                                  {  manageLoanList.map((elem,index)=>{
                                        // let {ChildName,childDoBID,childRelationship,childAge,childGender}=elem;
                                      
                                  return(
                                    
                                    <tr key={index}>
                                        <td>{elem.ManagedFundsPortfolioLoanType}</td>
                                        <td>{elem.ManagedFundsPortfolioCurrentBalance}</td>
                                        <td>{elem.ManagedFundsPortfolioLender}</td>
                                        <td>{elem.ManagedFundsPortfolioRepaymentAmount}</td>
                                        <td>{elem.ManagedFundsPortfolioInterestRatePA}</td>
                                        <td >
                                        <button  type='button' onClick={(e)=>deleteHandler_ManageLoan(elem,index)} className='btn btn-danger btn-sm mt-1'>delete</button>
                                        <button  type='button' onClick={(e)=>updateHandler_ManageLoan(elem)} className='btn btn-warning btn-sm mx-2 mt-1'>update</button>

                                        </td> 
                                    
                                    </tr>
                                    );
                                        
                                    }) }
                            </tbody>
                          </table>
                      </div>

                         
                    {/* manageLoan TableLoan */}

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
                                validationSchema={Investment_validationSchema}
                                onSubmit={Investment_onSubmit}>
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
                                {/* <ErrorMessage component='div' className='text-danger fw-bold' name='InvestmentModalTotalExpense' /> */}
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
                                    type="button"
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
                                    type="button"
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
                          
                              {/* InvestMent properties Table Table */}
                      
                    <div   className='table-responsive my-3'>
                         <table className="table table-bordered table-hover text-center">
                            <thead className="text-light" id="tableHead">
                            <tr>
                                  <th>Property Address</th>
                                  <th>Value</th>
                                  <th>Rent p.a</th>
                                  <th>Annual Expenses</th>
                                  <th>Current Loan Balance</th>
                                  <th>Repayments p.a</th>

                                <th>Operations</th>
                              </tr>
                            </thead>
                              <tbody>
                                  {  investmentList.map((elem,index)=>{
                                        // let {ChildName,childDoBID,childRelationship,childAge,childGender}=elem;
                                      
                                  return(
                                    
                                    <tr key={index}>
                                        <td>{elem.PropertyAddress}</td>
                                        <td>{elem.CurrentValue}</td>
                                        <td>{elem.RentalIncome}</td>
                                        <td>{elem.AnnualRepayments}</td>
                                        <td>{elem.CurrentBalance}</td>
                                       <td>{elem.RepaymentAmount}</td>
                                       
                                        <td >
                                        <button  type='button' onClick={(e)=>deleteHandler_Investment(elem,index)} className='btn btn-danger btn-sm mt-1'>delete</button>
                                        <button  type='button' onClick={(e)=>updateHandler_Investment(elem)} className='btn btn-warning btn-sm mx-2 mt-1'>update</button>

                                        </td> 
                                    
                                    </tr>
                                    );
                                        
                                    }) }
                            </tbody>
                          </table>
                    </div>

                         
                    {/* InvestMent properties Table */}
                          
                          </div>
                          {/* Investment Properties Details */}

                      <div className="row mt-5 mb-3">
                        <div className="col-md-12">
                          <button  type='submit' className="float-end btn w-25  bgColor modalBtn">Next</button>
                          <button className="float-end btn w-25  btn-outline backBtn mx-3" onClick={BackFunction}>Back</button>
                        </div>
                      </div>

                </Form>}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SMSF_Edit