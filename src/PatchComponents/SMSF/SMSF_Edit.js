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

  // Apis States
  const [clientData, setclientData] = useState([])
  const [accumulationData, setAccumulationData] = useState([])
  const [pensionData, setPensionData] = useState([])
  const [bankData, setBankData] = useState([])
  const [termDepositData, setTermDepositData] = useState([])
  const [AustralianData, setAustralianData] = useState([])
  const [managedFundData, setManagedFundData] = useState([])
  const [investmentData, setInvestmentData] = useState([])

  useEffect(() => {
    let email=localStorage.getItem("EditClient")

    // Client Data
    axios
      .get(`http://localhost:7000/Client-SMSF`)
      .then((res) => {
      let clientObj=(res.data)
      let clientFilterObj=clientObj.filter((item) => item.Email ==email);
      // setclientData(clientFilterObj[0])  
      })

      //  Accumulation 
    axios
    .get(`http://localhost:7000/Client-SMSF`)
    .then((res) => {
    let clientObj=(res.data)
    let clientFilterObj=clientObj.filter((item) => item.Email ==email);
    // setAccumulationData(clientFilterObj[0])  
    })

      //  Pension Account
      axios
      .get(`http://localhost:7000/Client-SMSF`)
      .then((res) => {
      let clientObj=(res.data)
      let clientFilterObj=clientObj.filter((item) => item.Email ==email);
      // setPensionData(clientFilterObj[0])  
      })

          //  Bank Account
          axios
          .get(`http://localhost:7000/Client-SMSF`)
          .then((res) => {
          let clientObj=(res.data)
          let clientFilterObj=clientObj.filter((item) => item.Email ==email);
          // setBankData(clientFilterObj[0])  
          })

            //  Term Deposit Accounts
            axios
            .get(`http://localhost:7000/Client-SMSF`)
            .then((res) => {
            let clientObj=(res.data)
            let clientFilterObj=clientObj.filter((item) => item.Email ==email);
            // setTermDepositData(clientFilterObj[0])  
            })

              //  Australian Share Market
              axios
              .get(`http://localhost:7000/Client-SMSF`)
              .then((res) => {
              let clientObj=(res.data)
              let clientFilterObj=clientObj.filter((item) => item.Email ==email);
              // setAustralianData(clientFilterObj[0])  
              })

              
              //  Managed Funds
              axios
              .get(`http://localhost:7000/Client-SMSF`)
              .then((res) => {
              let clientObj=(res.data)
              let clientFilterObj=clientObj.filter((item) => item.Email ==email);
              // setManagedFundData(clientFilterObj[0])  
              })

                //  Investment Properties
                axios
                .get(`http://localhost:7000/Client-SMSF`)
                .then((res) => {
                let clientObj=(res.data)
                let clientFilterObj=clientObj.filter((item) => item.Email ==email);
                // setInvestmentData(clientFilterObj[0])  
                })
      

  }, [])
  

    let initialValues = {
      

         PensionRadio:clientData.PensionAccount,
         AccumulationRadio:clientData.Accumulation ,
         BankAccountsRadio:clientData.BankAccount,
         TermDepositRadio:clientData.TermDepositAccount,
         AustralianShareRadio:clientData.AustralianShareMarket,
         ManagedFundsRadio:clientData.ManagedFunds,
         InvestmentPropertiesRadio:clientData.InvestmentProperties,

     
      
      SMSFFundName: '',
      SMSFFundType: '',
      SMSFABN: '',
      SMSFTrusteeType: '',
      SMSFEstablishmentDate: '',
      SMSFAssetsSegregated: 'No',
      SMSFBorrowingInvestment: 'No',
      SMSFAcquiringInsurances: 'No',
      SMSFAccountant: '',
      SMSFAuditor: '',
      SMSFAccountingAuditing: '',
      SMSFATOLevy: '',
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

    // let Navigate = useNavigate();
    function BackFunction(){
        // Navigate('/Accumulation-And-Retirment');
    }
    let onSubmit = (Values) => {
      // Navigate('/Investment-Trust')

      let myData={
        
        PensionAccount:Values.PensionRadio,
        Accumulation:Values. AccumulationRadio,
        BankAccount:Values.BankAccountsRadio,
        TermDepositAccount:Values.TermDepositRadio,
        AustralianShareMarket:Values.AustralianShareRadio,
        ManagedFunds:Values.ManagedFundsRadio,
        InvestmentProperties:Values.InvestmentPropertiesRadio,
      }
      // Post Api

      axios
      .post('http://localhost:7000/Client-SMSF/Add-Client-SMSF', myData)
      .then((res) => console.log('Client  Added Successfully!'))
      console.log(clientData)


      // patch
      // axios
      // .patch(`http://localhost:7000/Client-SMSF/Add-Client-SMSF/${localStorage.getItem("EditClient")}`, myData)
      // .then((res) => {
      // console.log("Client  Updated Successfully!");
        
      // })

      }

    let Client_initialValues = {

       BankCurrentValue:bankData.CurrentValue1,
       BankFinancialInstitution:bankData.FinancialInstitution1,
       BankIncomeYield:bankData.IncomeYield1,
       BankAnnualIncome:bankData.AnnualIncome1,
       Bank2CurrentValue:bankData.CurrentValue2,
       Bank2FinancialInstitution:bankData.FinancialInstitution2,
       Bank2IncomeYield:bankData.IncomeYield2,
       Bank2AnnualIncome:bankData.AnnualIncome2,
        

        TermDepositCurrentValue:termDepositData.CurrentValue1,
        TermDepositFinancialInstitution:termDepositData.FinancialInstitution1,
        TermDepositIncomeYield:termDepositData.IncomeYield1,
        TermDepositAnnualIncome:termDepositData.AnnualIncome1,

        TermDeposit2CurrentValue:termDepositData.CurrentValue2,
        TermDeposit2FinancialInstitution:termDepositData.FinancialInstitution2,
        TermDeposit2IncomeYield:termDepositData.IncomeYield2,
        TermDeposit2AnnualIncome:termDepositData.AnnualIncome2,

        TermDeposit3CurrentValue:termDepositData.CurrentValue3,
        TermDeposit3FinancialInstitution:termDepositData.FinancialInstitution3,
        TermDeposit3IncomeYield:termDepositData.IncomeYield3,
        TermDeposit3AnnualIncome:termDepositData.AnnualIncome3,

     AccumulationMemberName:accumulationData.MemberName ,
     AccumulationEligibleDate:accumulationData.EligibleDate  ,
     AccumulationCurrentBalance:accumulationData.CurrentBalance ,
     AccumulationTaxFree:accumulationData.TaxFree ,
     AccumulationTaxed:accumulationData.Taxed ,
     AccumulationNonPreservedRestriction:accumulationData.NonPreservedRestriction ,
     AccumulationNonPreservedUnRestriction:accumulationData.NonPreservedUnRestriction ,
     AccumulationPreservedAmount:accumulationData.PreservedAmount,

      PensionMemberName:pensionData.MemberName,
      PensionType:pensionData.PensionType,
      PensionCommencementDate:pensionData.CommencementDateDate,
      PensionCurrentBalance:pensionData.CurrentBalance,
      PensionTaxFree:pensionData.TaxFree,
      PensionTaxed:pensionData.Taxed,
      PensionPurchasePrice:pensionData.OriginalPurchasePrice,
      PensionFrequency:pensionData.Frequency,
      PensionRegularIncomeDrawn:pensionData.RegularIncomeDrawn,
      PensionMinimumRequired:pensionData.MinimumRequired,
      PensionRelevantNumber:pensionData.RelevantNumber,
      PensionLumpsumTaken:pensionData.LumpsumTaken,
      PensionDeductibleAmount:pensionData.DeductibleAmount,


       AustralianShareInvestmentName:AustralianData.InvestmentName,
           AustralianShareNoOfShares:AustralianData.NoOfShares,
           AustralianShareCurrentPrice:AustralianData.CurrentSharePrice,
           AustralianShareTotalValue:AustralianData.TotalShareValue,
           AustralianShareCostBase:AustralianData.CostBase,
           AustralianSharePurchaseDate:AustralianData.PurchaseDate,
           AustralianShareIncomePA:AustralianData.IncomePA,
           AustralianShareIncomePA2:AustralianData.IncomePAType,
           AustralianShareTotalIncomePA:AustralianData.TotalIncomePA,
           AustralianShareReinvestIncome:AustralianData.ReinvestIncome,
           AustralianShareFrankedAmount:AustralianData.FrankedAmount,
           AustralianShareRegInvestmentsPA:AustralianData.RegInvestmentsPA,

            ManagedFundsPlatformName:managedFundData.PlatformName,
            ManagedFundsInvestmentName:managedFundData.InvestmentName,
            ManagedFundsNoOfShares:managedFundData.NoOfShares,
            ManagedFundsCurrentPrice:managedFundData.CurrentSharePrice,
            ManagedFundsCurrentValue:managedFundData.CurrentShareValue,
            ManagedFundsOriginalInvestment:managedFundData.ManagedFundsOriginalInvestment,
            ManagedFundsPurchaseDate:managedFundData.PurchaseDate,
            ManagedFundsIncomePA:managedFundData.IncomePA,
            ManagedFundsIncomePA2:managedFundData.IncomePAType,
            ManagedFundsTotalIncomePA:managedFundData.TotalIncomePA,
            ManagedFundsReinvestIncome:managedFundData.ReinvestIncome,
            ManagedFundsRegInvestmentsPA:managedFundData.RegInvestmentsPA,
      
      InvestmentPropertiesCurrentValue: '',
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

    let Bank_validationSchema = Yup.object({   

      BankAnnualIncome: Yup.number().required("Required")
      .test("Is positive?", "Must be a positive value", (value) => value > 0),
      BankIncomeYield: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      BankFinancialInstitution: Yup.string().required("Required"),
      BankCurrentValue: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      Bank2AnnualIncome: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      Bank2IncomeYield: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      Bank2FinancialInstitution: Yup.string().required("Required"),
      Bank2CurrentValue: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
    })

    let Client_validationSchema = Yup.object({   

      BankAnnualIncome: Yup.number().required("Required")
      .test("Is positive?", "Must be a positive value", (value) => value > 0),
      BankIncomeYield: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      BankFinancialInstitution: Yup.string().required("Required"),
      BankCurrentValue: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      Bank2AnnualIncome: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      Bank2IncomeYield: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      Bank2FinancialInstitution: Yup.string().required("Required"),
      Bank2CurrentValue: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),

        
      TermDepositAnnualIncome: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      TermDepositIncomeYield: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      TermDepositFinancialInstitution: Yup.string().required("Required"),
      TermDepositCurrentValue: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      TermDeposit2AnnualIncome: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      TermDeposit2IncomeYield: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      TermDeposit2FinancialInstitution: Yup.string().required("Required"),
      TermDeposit2CurrentValue: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      TermDeposit3AnnualIncome: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      TermDeposit3IncomeYield: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      TermDeposit3FinancialInstitution: Yup.string().required("Required"),
      TermDeposit3CurrentValue: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
        
      AccumulationMemberName: Yup.string().required("Required"),
      AccumulationEligibleDate: Yup.string().required("Required"),
      AccumulationCurrentBalance: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      AccumulationTaxFree: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      AccumulationTaxed: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      AccumulationNonPreservedRestriction: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      AccumulationNonPreservedUnRestriction: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      AccumulationPreservedAmount: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
        
      PensionMemberName: Yup.string().required("Required"),
      PensionType: Yup.string().required("Required"),
      PensionCommencementDate: Yup.string().required("Required"),
      PensionCurrentBalance: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      PensionTaxFree: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      PensionTaxed: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      PensionPurchasePrice: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      PensionFrequency: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      PensionRegularIncomeDrawn: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      PensionMinimumRequired: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      PensionRelevantNumber: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      PensionPurchasePrice: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      PensionLumpsumTaken: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      PensionDeductibleAmount: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),

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

  let AccumulationModal_onSubmit = (Values) => {

   let myData= {
    MemberName:Values. AccumulationMemberName,
    EligibleDate:Values. AccumulationEligibleDate ,
    CurrentBalance:Values. AccumulationCurrentBalance,
    TaxFree:Values. AccumulationTaxFree,
    Taxed:Values. AccumulationTaxed,
    NonPreservedRestriction:Values. AccumulationNonPreservedRestriction,
    NonPreservedUnRestriction:Values. AccumulationNonPreservedUnRestriction,
    PreservedAmount:Values.AccumulationPreservedAmount
  }

     // Post Api
      // axios
      // .post('http://localhost:7000/Client-SMSF//Add-Client-Accumulation', myData)
      // .then((res) => console.log('Client  Added Successfully!'))
      // console.log(clientData)


      // patch
       axios
      .patch(`http://localhost:7000/Client-SMSF/Update-Client-Accumulation/${localStorage.getItem("EditClient")}`, myData)
      .then((res) => {
       console.log("Client  Updated Successfully!");
        
      })

  }

  let PensionAccount_onSubmit = (Values) => {

    let myData= {
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
 
      // Post Api
       // axios
       // .post('http:/localhost:7000/Client-SMSF/Add-Client-PensionAccounts', myData)
       // .then((res) => console.log('Client  Added Successfully!'))
       // console.log(clientData)
 
 
       // patch
        axios
       .patch(`http://localhost:7000/Client-SMSF/Update-Client-PensionAccounts/${localStorage.getItem("EditClient")}`, myData)
       .then((res) => {
        console.log("Client  Updated Successfully!");
         
       })
 
   }

   let BankAccount_onSubmit = (Values) => {
    
        let myData= {
          CurrentValue1:Values.BankCurrentValue,
          FinancialInstitution1:Values.BankFinancialInstitution,
          IncomeYield1:Values.BankIncomeYield,
          AnnualIncome1:Values.BankAnnualIncome,
          CurrentValue2:Values.Bank2CurrentValue,
          FinancialInstitution2:Values.Bank2FinancialInstitution,
          IncomeYield2:Values.Bank2IncomeYield,
          AnnualIncome2:Values.Bank2AnnualIncome,
       
       }
       console.log(myData)
     
          // Post Api
           // axios
           // .post('http:/localhost:7000/Client-SMSF/Add-Client-BankAccounts', myData)
           // .then((res) => console.log('Client  Added Successfully!'))
           // console.log(clientData)
     
     
           // patch
            axios
           .patch(`http://localhost:7000/Client-SMSF/Update-Client-BankAccounts/${localStorage.getItem("EditClient")}`, myData)
           .then((res) => {
            console.log("Client  Updated Successfully!");
             
           })


           BankAccountshandleClose();

       }


       let Term_onSubmit = (Values) => {
    
        let myData= {

          CurrentValue1:Values.TermDepositCurrentValue,
          FinancialInstitution1:Values.TermDepositFinancialInstitution,
          IncomeYield1:Values.TermDepositIncomeYield,
          AnnualIncome1:Values.TermDepositAnnualIncome,

          CurrentValue2:Values.TermDeposit2CurrentValue,
          FinancialInstitution2:Values.TermDeposit2FinancialInstitution,
          IncomeYield2:Values.TermDeposit2IncomeYield,
          AnnualIncome2:Values.TermDeposit2AnnualIncome,

          CurrentValue3:Values.TermDeposit3CurrentValue,
          FinancialInstitution3:Values.TermDeposit3FinancialInstitution,
          IncomeYield3:Values.TermDeposit3IncomeYield,
          AnnualIncome3:Values.TermDeposit3AnnualIncome,
       
       }
       console.log(myData)
     
          // Post Api
           axios
           .post('http:/localhost:7000/Client-SMSF/Add-Client-TermDeposit', myData)
           .then((res) => console.log(res.data))
           
     
     
           // patch
          //   axios
          //  .patch(`http://localhost:7000/Client-SMSF/Update-Client-TermDeposit/${localStorage.getItem("EditClient")}`, myData)
          //  .then((res) => {
          //   console.log("Client  Updated Successfully!");
             
          //  })


           BankAccountshandleClose();

       }

       let Australian_onSubmit = (Values) => {
    
        let myData= {

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
       console.log(myData)
     
          // Post Api
          //  axios
          //  .post('http:/localhost:7000/Client-SMSF/Add-Client-AustralianShareMarket', myData)
          //  .then((res) => console.log(res.data))
           
     
     
          //  patch
            axios
           .patch(`http://localhost:7000/Client-SMSF/Update-Client-AustralianShareMarket/${localStorage.getItem("EditClient")}`, myData)
           .then((res) => {
            console.log("Client  Updated Successfully!");
             
           })


           BankAccountshandleClose();

       }

       let Manage_onSubmit = (Values) => {
    
        let myData= {

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
       console.log(myData)
     
          // Post Api
          //  axios
          //  .post('http:/localhost:7000/Client-SMSF/Add-Client-ManagedFunds', myData)
          //  .then((res) => console.log(res.data))
           
     
     
          //  patch
            axios
           .patch(`http://localhost:7000/Client-SMSF/Update-Client-ManagedFunds/${localStorage.getItem("EditClient")}`, myData)
           .then((res) => {
            console.log("Client  Updated Successfully!");
             
           })


           BankAccountshandleClose();

       }

  let InvestmentModal_onSubmit = (Values) => {}

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
            <Formik initialValues={initialValues}
             validationSchema={validationSchema}
              onSubmit={onSubmit} enableReinitialize>
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
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="SMSFAccountant" name='SMSFAccountant' placeholder="Accountant Name"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='SMSFAccountant' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="SMSFAuditor" className="form-label">Name of Accountant</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
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
                                validationSchema={Client_validationSchema}
                                onSubmit={AccumulationModal_onSubmit}>
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
                                validationSchema={Client_validationSchema}
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
                                        <label htmlFor="BankCurrentValue" className="form-label">Current Value</   label>
                                        <Field type="number" className="form-control shadow inputDesign" 
                                        id="BankCurrentValue" name='BankCurrentValue' placeholder='Current Value'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='BankCurrentValue' />
                                        </div>            
                                        </div>
                                        <div className="col-md-6">
                                        <div className="mb-3">
                                        <label htmlFor="BankFinancialInstitution" className="form-label">Financial Institution</   label>
                                        <Field type="text" className="form-control shadow inputDesign" 
                                        id="BankFinancialInstitution" name='BankFinancialInstitution' placeholder='Financial Institution'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='BankFinancialInstitution' />
                                        </div>            
                                        </div>
                                        <div className="col-md-6">
                                        <div className="mb-3">
                                        <label htmlFor="BankIncomeYield" className="form-label">Income Yield %</   label>
                                        <Field type="number" className="form-control shadow inputDesign" 
                                        id="BankIncomeYield" name='BankIncomeYield' placeholder='Income Yield %'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='BankIncomeYield' />
                                        </div>            
                                        </div>
                                        <div className="col-md-6">
                                        <div className="mb-3">
                                        <label htmlFor="BankAnnualIncome" className="form-label">Annual Income</   label>
                                        <Field type="number" className="form-control shadow inputDesign" 
                                        id="BankAnnualIncome" name='BankAnnualIncome' placeholder='Annual Income'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='BankAnnualIncome' />
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
                                      Bank #2
                                    
                                        </h3>
                                    <div className="row">
                                        <div className="col-md-6">
                                        <div className="mb-3">
                                        <label htmlFor="Bank2CurrentValue" className="form-label">Current Value</   label>
                                        <Field type="number" className="form-control shadow inputDesign" 
                                        id="Bank2CurrentValue" name='Bank2CurrentValue' placeholder='Current Value'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='Bank2CurrentValue' />
                                        </div>            
                                        </div>
                                        <div className="col-md-6">
                                        <div className="mb-3">
                                        <label htmlFor="Bank2FinancialInstitution" className="form-label">Financial Institution</   label>
                                        <Field type="text" className="form-control shadow inputDesign" 
                                        id="Bank2FinancialInstitution" name='Bank2FinancialInstitution' placeholder='Financial Institution'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='Bank2FinancialInstitution' />
                                        </div>            
                                        </div>
                                        <div className="col-md-6">
                                        <div className="mb-3">
                                        <label htmlFor="Bank2IncomeYield" className="form-label">Income Yield %</   label>
                                        <Field type="number" className="form-control shadow inputDesign" 
                                        id="Bank2IncomeYield" name='Bank2IncomeYield' placeholder='Income Yield %'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='Bank2IncomeYield' />
                                        </div>            
                                        </div>
                                        <div className="col-md-6">
                                        <div className="mb-3">
                                        <label htmlFor="Bank2AnnualIncome" className="form-label">Annual Income</   label>
                                        <Field type="number" className="form-control shadow inputDesign" 
                                        id="Bank2AnnualIncome" name='Bank2AnnualIncome' placeholder='Annual Income'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='Bank2AnnualIncome' />
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
                                      // onClick={BankAccountshandleClose}
                                      type='submit'
                                    >
                                      Save
                                    </button>
                                    <span
                                      className="float-end btn w-25  btn-outline  backBtn mx-3"
                                      onClick={BankAccountshandleClose}
                                    >
                                      Cancel
                                    </span>
                                  </div>
                                </Modal.Footer>
                                </Form>
                                }
                              </Formik>
                              </Modal>
                              {/* ---------------------------------------------------- */}
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
                                initialValues={Client_initialValues}
                                // validationSchema={Client_validationSchema}
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
                                        <label htmlFor="TermDepositCurrentValue" className="form-label">Current Value</   label>
                                        <Field type="number" className="form-control shadow inputDesign" 
                                        id="TermDepositCurrentValue" name='TermDepositCurrentValue' placeholder='Current Value'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='TermDepositCurrentValue' />
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
                                        <label htmlFor="TermDepositAnnualIncome" className="form-label">Annual Income</   label>
                                        <Field type="number" className="form-control shadow inputDesign" 
                                        id="TermDepositAnnualIncome" name='TermDepositAnnualIncome' placeholder='Annual Income'/>
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='TermDepositAnnualIncome' />
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
                                validationSchema={Client_validationSchema}
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
                                validationSchema={Client_validationSchema}
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
                    </div>
                  {/* Managed Funds Details */}

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