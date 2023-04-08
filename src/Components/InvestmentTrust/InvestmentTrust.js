import React, { useState, useEffect } from 'react';
import Modal from "react-bootstrap/Modal";
import * as Yup from 'yup';
import 'yup-phone';
import plus from "./images/plus.svg"
import notebook from './images/notebook.svg';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import DatePicker from "react-datepicker";
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from 'react-router-dom';
const InvestmentTrust = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    const [show4, setShow4] = useState(false);
    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);
// manage funds
// 1st modal
    const [show5, setShow5] = useState(false);
    const handleClose5 = () => setShow5(false);
    const handleShow5 = () => setShow5(true);


// 2nd modal
    const [show6, setShow6] = useState(false);
    const handleClose6 = () => setShow6(false);
    const handleShow6 = () => setShow6(true);

// manage funds

//investment properties
const [show7, setShow7] = useState(false);
const handleClose7 = () => setShow7(false);
const handleShow7 = () => setShow7(true);

//  ModalinModal
const [show8, setShow8] = useState(false);
const handleClose8 = () => setShow8(false);
const handleShow8 = () => setShow8(true);
//investment properties




    let letters = /^[a-zA-Z ]*$/;
    const [DistributionsTakenState, setDistributionsTakenState] = useState(false);
    const [loansAssociatedState, setloansAssociatedState] = useState(false)

    let loansAssociatedHandler=(elem)=>{
      if (elem==="No"){
        setloansAssociatedState(false)
      }
      else{
        setloansAssociatedState(true)
      }
      
      }

    let initialValues={
        NameofFamilyTrust:'',
        TypeofTrust:'',
        ABN:'',
        TrusteeType:'',
        CorporateTrusteeName:'',
        NumberofDirectors:'',
        EstablishmentDate:'',
        NameofAccountant:'',
        DistributionCashradio:'No',
        DirectorName1:'',
        DirectorName2:'',
        DirectorName3:'',
        DirectorName4:'',
        loansAssociatedradio:'No',
        managedloansAssociatedradio:'No',

    }
    let validationSchema = Yup.object({
      NameofFamilyTrust:Yup.string().matches(letters, "only letters").required('Required') ,
      TypeofTrust:Yup.string().required("Required"),
      ABN:Yup.string().required("required"),
      TrusteeType:Yup.string().required("required"),
      CorporateTrusteeName:Yup.string()
      .when('TrusteeType',{
        is: val => val && val.length ==9,
        then:Yup.string().required("Required"),
        otherwise: Yup.string().notRequired()
      }),
      EstablishmentDate:Yup.date().required("Required").nullable(),
      NameofAccountant:Yup.string().matches(letters, "only letters").required('Required') ,
      NumberofDirectors:Yup.string().required("Required"),
    })

    let Navigate = useNavigate();
    function  BackFunction(){
      Navigate('/SMSF')
    }
    let onSubmit = (values) => {
      // Navigate('/Personal-Insurance')

      let AddData={
        Email: localStorage.getItem("ClientEmail"),
        FamilyTrustName:values.NameofFamilyTrust,
        TrustType:values.TypeofTrust,

        ABN:values.ABN,
        TrusteeType:values.TrusteeType,

        // xyz:values.CorporateTrusteeName, miss in backend

        TotalDirectors:values.NumberofDirectors,
        EstablishmentDate:values.EstablishmentDate,
        AccountantName:values.NameofAccountant,
        CashDistribution:values.DistributionCashradio,
        Director1Name:values.DirectorName1,
        Director2Name:values.DirectorName2,
        Director3Name:values.DirectorName3,
        Director4Name:values.DirectorName4,

        // xyz:values.loansAssociatedradio, miss in backend
        // xyz:values.managedloansAssociatedradio, miss in backend

      }
      console.log(AddData)
        // Post Api
        
        axios
        .post('http://localhost:7000/Client-InvestmentTrust/Add-Client-InvestmentForm', AddData)
        .then((res) => console.log('Client  Added Successfully!')) 
   }

   let Bank_initialValues={
    CurrentValue1:'',
    FinancialInstituion1:'',
    IncomeYield1:'',
    AnnualIncome1:'',

    CurrentValue2:'',
    FinancialInstituion2:'',
    IncomeYield2:'',
    AnnualIncome2:'',

    CurrentValue3:'',
    FinancialInstituion3:'',
    IncomeYield3:'',
    AnnualIncome3:'',
   }
   let Bank_validationSchema = Yup.object({
    CurrentValue1:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    FinancialInstituion1: Yup.string().required('Required') ,
    IncomeYield1:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Must be a positive number",

      (value) => value > 0
    ),

    CurrentValue2:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    FinancialInstituion2: Yup.string().required('Required') ,
    IncomeYield2:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Must be a positive number",

      (value) => value > 0
    ),

    CurrentValue3:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    FinancialInstituion3: Yup.string().required('Required') ,
    IncomeYield3:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Must be a positive number",

      (value) => value > 0
    ),
   })


   let Bank_onSubmit = (values) => {

    let Bank_Data={
      xyz:values.CurrentValue1,
      xyz:values.FinancialInstituion1,
      xyz:values.IncomeYield1,
      xyz:values.AnnualIncome1,
  
      xyz:values.CurrentValue2,
      xyz:values.FinancialInstituion2,
      xyz:values.IncomeYield2,
      xyz:values.AnnualIncome2,
  
      xyz:values.CurrentValue3,
      xyz:values.FinancialInstituion3,
      xyz:values.IncomeYield3,
      xyz:values.AnnualIncome3,
     }
    console.log(values)

    // handleClose();
        }

        let Deposit_initialValues={
            DepositCurrentValue1:'',
            DepositFinancialInstituion1:'',
            DepositIncomeYield1:'',
            DepositAnnualIncome1:'',
        
            DepositCurrentValue2:'',
            DepositFinancialInstituion2:'',
            DepositIncomeYield2:'',
            DepositAnnualIncome2:'',
        
            DepositCurrentValue3:'',
            DepositFinancialInstituion3:'',
            DepositIncomeYield3:'',
            DepositAnnualIncome3:'',
           }    
        let Deposit_validationSchema = Yup.object({
            DepositCurrentValue1:Yup.number().required("Required")
            .test(
              "Is positive?",
              "Must be a positive number",
              (value) => value > 0
            ),
            DepositFinancialInstituion1: Yup.string().required('Required') ,
            DepositIncomeYield1:Yup.number().required("Required")
            .test(
              "Is positive?",
              "Must be a positive number",
        
              (value) => value > 0
            ),
        
            DepositCurrentValue2:Yup.number().required("Required")
            .test(
              "Is positive?",
              "Must be a positive number",
              (value) => value > 0
            ),
            DepositFinancialInstituion2: Yup.string().required('Required') ,
            DepositIncomeYield2:Yup.number().required("Required")
            .test(
              "Is positive?",
              "Must be a positive number",
        
              (value) => value > 0
            ),
        
            DepositCurrentValue3:Yup.number().required("Required")
            .test(
              "Is positive?",
              "Must be a positive number",
              (value) => value > 0
            ),
            DepositFinancialInstituion3: Yup.string().required('Required') ,
            DepositIncomeYield3:Yup.number().required("Required")
            .test(
              "Is positive?",
              "Must be a positive number",
        
              (value) => value > 0
            ),
           })

        let Deposit_onSubmit = (values) => {
          let Deposit_initialValues={
            xyz:values.DepositCurrentValue1,
            xyz:values.DepositFinancialInstituion1,
            xyz:values.DepositIncomeYield1,
            xyz:values.DepositAnnualIncome1,
        
            xyz:values.DepositCurrentValue2,
            xyz:values.DepositFinancialInstituion2,
            xyz:values.DepositIncomeYield2,
            xyz:values.DepositAnnualIncome2,
        
            xyz:values.DepositCurrentValue3,
            xyz:values.DepositFinancialInstituion3,
            xyz:values.DepositIncomeYield3,
            xyz:values.DepositAnnualIncome3,
           } 
            console.log(values)
            // handleShow2()
                }

                // start Australian tab
                let Share_initialValues ={
                  ShareInvestmentName:'',
                  NoOfShares:'',
                  CurrentSharePrice:'',
                  TotalShareValue:'', //read only
                  CostBase:'',
                  PurchaseDate:'',
                  Incomepa:'',
                  IncomepaType:'',
                  TotalIncomePa:'', //read only
                  FrankedAmount:'',
                  RegInvestmentsPA:'',
                  Reinvestincomeradio:'No',
                }
                let Share_validationSchema = Yup.object({
                  ShareInvestmentName:Yup.string().required("Required"),
                  NoOfShares:Yup.number().required("Required")
                  .test(
                    "Is positive?",
                    "Must be positive number",

                    (value) => value > 0
                  ),
                  CurrentSharePrice:Yup.number().required("Required")
                  .test(
                    "Is positive?",
                    "Must be positive number",
                    (value) => value > 0
                  ),
                  
                  CostBase:Yup.number().required("Required")
                  .test(
                    "Is positive?",
                    "Must be positive number",

                    (value) => value > 0
                  ),
                  PurchaseDate:Yup.date().required("Required").nullable(),
                  Incomepa:Yup.number().required("Required")
                  .test(
                    "Is positive?",
                    "Must be positive number",

                    (value) => value > 0
                  ),
                  IncomepaType:Yup.string().required("Required"),
                 
                  FrankedAmount:Yup.number().required("Required")
                  .test(
                    "Is positive?",
                    "Must be positive number",

                    (value) => value > 0
                  ),
                  RegInvestmentsPA:Yup.number().required("Required")
                  .test(
                    "Is positive?",
                    "Must be positive number",
                    (value) => value > 0
                  ),
                }) 

                let Share_onSubmit = (values) => {
                  let AddData ={
                    AustralianMarketInvestmentName:  values.ShareInvestmentName,
                    AustralianMarketNumberOfShares: values.NoOfShares,
                    AustralianMarketSharePrice:values.CurrentSharePrice,
                    AustralianMarketTotalShareValue:'5000', //TotalShareValue:'', //read only
                    AustralianMarketCostBase:values.CostBase,
                    AustralianMarketPurchaseDate: values.PurchaseDate,
                    AustralianMarketIncomePA: values.Incomepa,
                    AustralianMarketIncomePAType:values.IncomepaType,
                    AustralianMarketTotalIncomePA:'5000', //TotalIncomePa:'', //read only
                    AustralianMarketFrankedAmount: values.FrankedAmount,
                    AustralianMarketReinvestedIncome:values.Reinvestincomeradio,
                    AustralianMarketRegInvestments: values.RegInvestmentsPA,

                  }
                    console.log(AddData)
                    handleClose3();
                  }

                        let Australian_loansAssociated_initialValues ={

                          Typeofloan:'',
                          CurrentBalance:'',
                          Lender:'',
                          RepaymentsAmount:'',
                          Frequency:'',
                          AnnualRepayments:'', //readonly
                          InterestRatePA:'',
                          LoanTermInYears:'',
                          LoanType:'',
                          DeductibleAmountofLoan:'',
                          YearRemaning:'',
                        }
                        let Australian_loansAssociated_validationSchema = Yup.object({
                          Typeofloan:Yup.string().required("Required"),
                          CurrentBalance:Yup.number().required("Required")
                          .test(
                            "Is positive?",
                            "Must be a positive number",
                            (value) => value > 0
                          ),
                          Lender:Yup.string().required("Required"),
                          RepaymentsAmount:Yup.number().required("Required")
                          .test(
                            "Is positive?",
                            "Must be a positive number",
                            (value) => value > 0
                          ),
                          Frequency:Yup.string().required("Required"),
                          InterestRatePA:Yup.number().required("Required")
                          .test(
                            "Is positive?",
                            "Must be a positive number",
                            (value) => value > 0
                          ),
                          LoanTermInYears:Yup.string().required("Required"),
                          LoanType:Yup.string().required("Required"),
                          DeductibleAmountofLoan:Yup.number().required("Required")
                          .test(
                            "Is positive?",
                            "Must be a positive number",
                            (value) => value > 0
                          ),
                          YearRemaning:Yup.string().required("Required"),

                        })
                    let Australian_loansAssociated_onSubmit = (values) => {

                      let myData ={

                        AustralianPortfolioLoanType:values.Typeofloan,
                        AustralianPortfolioCurrentBalance:values.CurrentBalance,
                        AustralianPortfolioLender:values.Lender,
                        AustralianInterestRatePA:values.InterestRatePA,

                        // :values.RepaymentsAmount,
                        // :values.Frequency,
                        //AnnualRepayments:'', //readonly

                        AustralianPortfolioLoanTerm:values.LoanTermInYears,
                        AustralianPortfolioLoanType2:values.LoanType,
                        AustralianPortfolioDeductibleLoanAmount:values.DeductibleAmountofLoan,
                        AustralianPortfolioYearRemaining:values.YearRemaning,
                      }
                    console.log(myData);
                    handleClose4();

                        }
// end Australian tab
                        // managed funds tab start

                        // managed fund

                        let manageFund_initialValues ={
                          PlatformName:'', 
                          InvestmentName:'', 
                          NoOfUnitsShares:'', 
                          CurrentShareUnitPrice:'', 
                          managedCurrentValue:'', //readonly
                          OriginalInvestment:'', 
                          managedPurchaseDate:'', 
                          managedIncomepa:'',
                          managedIncomepaType:'', 
                          managedTotalIncomePA:'', //readonly
                          managedRegInvestmentsPA:'',  
                          managedReinvestincomeradio:'No'

                        }

                        let manageFund_validationSchema= Yup.object({
                          PlatformName:Yup.string().required("Required"),
                          InvestmentName:Yup.string().required("Required"),
                          NoOfUnitsShares:Yup.number().required("Required")
                          .test(
                            "Is positive?",
                            "Must be a positive number",
                            (value) => value > 0
                          ),
                          
                          CurrentShareUnitPrice:Yup.number().required("Required")
                          .test(
                            "Is positive?",
                            "Must be a positive number",
                            (value) => value > 0
                          ),

                          OriginalInvestment:Yup.number().required("Required")
                          .test(
                            "Is positive?",
                            "Must be a positive number",
                            (value) => value > 0
                          ),
                          managedPurchaseDate:Yup.date().required("Required").nullable(),

                          managedIncomepa:Yup.number().required("Required")
                          .test(
                            "Is positive?",
                            "Must be a positive number",
                            (value) => value > 0
                          ),
                          managedIncomepaType:Yup.string().required("Required").nullable(),
                          managedRegInvestmentsPA:Yup.number().required("Required")
                          .test(
                            "Is positive?",
                            "Must be a positive number",
                            (value) => value > 0
                          ),


                        })
                        
                        let manageFund_onSubmit = (values) => {
                          let myData ={


                    ManagedFundsPlatformName:values.PlatformName, 
                    ManagedFundsInvestmentName:values.InvestmentName, 
                    ManagedFundsNumberOfShares:values.NoOfUnitsShares, 
                    ManagedFundsSharePrice:values.CurrentShareUnitPrice, 
                    ManagedFundsCurrentValue:'5000',//managedCurrentValue read only
                    ManagedFundsOriginalInvestment:values.OriginalInvestment, 
                    ManagedFundsPurchaseDate:values.managedPurchaseDate, 
                    ManagedFundsIncomePA:values.managedIncomepa,
                    ManagedFundsIncomePAType:values.managedIncomepaType, 
                    ManagedFundsTotalIncomePA:'5000', //managedTotalIncomePA read only
                    ManagedFundsReinvestedIncome:values.managedRegInvestmentsPA, 
                    ManagedFundsRegInvestments:values.managedReinvestincomeradio,
  
                          }

                          console.log(myData)
                          handleClose5();
                          }

                        // managed fund



                        // managed loan
                        let managed_initialValues ={
                          Typeofloan:'',
                          CurrentBalance:'',
                          Lender:'',
                          RepaymentsAmount:'',
                          Frequency:'',
                          managedAnnualRepayments:'', //readonly
                          InterestRatePA:'',
                          LoanTermInYears:'',
                          LoanType:'',
                          DeductibleAmountofLoan:'',
                          YearRemaning:'',
                        }

                        let managed_validationSchema = Yup.object({
                          Typeofloan:Yup.string().required("Required"),
                          CurrentBalance:Yup.number().required("Required")
                          .test(
                            "Is positive?",
                            "Must be a positive number",
                            (value) => value > 0
                          ),
                          Lender:Yup.string().required("Required"),
                          RepaymentsAmount:Yup.number().required("Required")
                          .test(
                            "Is positive?",
                            "Must be a positive number",
                            (value) => value > 0
                          ),
                          Frequency:Yup.string().required("Required"),
                          InterestRatePA:Yup.number().required("Required")
                          .test(
                            "Is positive?",
                            "Must be a positive number",
                            (value) => value > 0
                          ),
                          LoanTermInYears:Yup.string().required("Required"),
                          LoanType:Yup.string().required("Required"),
                          DeductibleAmountofLoan:Yup.number().required("Required")
                          .test(
                            "Is positive?",
                            "Must be a positive number",
                            (value) => value > 0
                          ),
                          YearRemaning:Yup.string().required("Required"),

                        })

                        let managed_onSubmit = (values) => {
                          let MyData ={
                            ManagedFundsPortfolioLoanType:values.Typeofloan,
                            ManagedFundsPortfolioCurrentBalance :values.CurrentBalance,
                            ManagedFundsPortfolioLender:values.Lender,
                            ManagedFundsPortfolioInterestRatePA:values.InterestRatePA,

                            A:values.RepaymentsAmount,
                            B:values.Frequency,
                            C:'5000',//  managedAnnualRepayments, //readonly

                            ManagedFundsPortfolioLoanTerm:values.LoanTermInYears,
                            ManagedFundsPortfolioLoanType2:values.LoanType,
                            ManagedFundsPortfolioDeductibleLoanAmount:values.DeductibleAmountofLoan,
                            ManagedFundsPortfolioYearRemaining:values.YearRemaning,
                          }
                        console.log(MyData)
                        handleShow6();
                        }
                        // managed loan

                        // managed funds tab end



                        //investment properties

                        let Investment_initialValues={
InvestmentCurrentValue:'', // num
InvestmentCostBasePurchasePrice:'', // num
InvestmentPropertyAddress:'',
investmentPostcodeSuburb:'',
InvestmentRentalIncome:'',
InvestmentFrequency:'',
InvestmentTotalAnnualIncome:'', // readonly
InvestmentExpensesPA:'',

loanAttachedradio:'No', // radio

InvestmentCurrentBalance:'',
InvestmentLender:'',
InvestmentRepaymentsAmount:'',
InvestmentFrequencyRadio:'',
InvestmentAnnualRepayments:'', //readOnly
InvestmentInterestRatePA:'',
InvestmentLoanTermInYear:'',
InvestmentLoanType:'',
InvestmentDedAmountOfLoan:'', // num
InvestmentYearsRemainingYear:'',  // select

                        }
                        let Investment_validationSchema = Yup.object({
                        
                          InvestmentCurrentValue:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
InvestmentCostBasePurchasePrice:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
InvestmentPropertyAddress:Yup.string().required("Required"),
investmentPostcodeSuburb:Yup.string().required("Required"),
InvestmentRentalIncome:Yup.number().required("Required")
.test(
  "Is positive?",
  "Must be a positive number",
  (value) => value > 0
),
InvestmentFrequency:Yup.string().required("Required"),
InvestmentExpensesPA:Yup.number().required("Required")
.test(
  "Is positive?",
  "Must be a positive number",
  (value) => value > 0
),

// conditional validation

InvestmentCurrentBalance:Yup.number()
.when('loanAttachedradio',{
  is: val => val && val.length ===3,
  then:Yup.number().required("Required")
  .test(
    "Is positive?",
    "Must be a positive number",
    (value)=> value >0
  ),
  otherwise: Yup.number().notRequired()
}),


InvestmentLender:Yup.string()
.when("loanAttachedradio",{
  is: val => val && val.length==3,
  then:Yup.string().required("Required")
  ,otherwise: Yup.string()
  .notRequired()
}),

InvestmentRepaymentsAmount:Yup.number()
.when('loanAttachedradio',{
  is: val => val && val.length ===3,
  then:Yup.number().required("Required")
  .test(
    "Is positive?",
    "Must be a positive number",
    (value)=> value >0
  ),
  otherwise: Yup.number().notRequired()
}),

InvestmentFrequencyRadio:Yup.string()
.when("loanAttachedradio",{
  is: val => val && val.length==3,
  then:Yup.string().required("Required")
  ,otherwise: Yup.string()
  .notRequired()
}),

InvestmentInterestRatePA:Yup.number()
.when('loanAttachedradio',{
  is: val => val && val.length ===3,
  then:Yup.number().required("Required")
  .test(
    "Is positive?",
    "Must be a positive number",
    (value)=> value >0
  ),
  otherwise: Yup.number().notRequired()
}),

InvestmentLoanTermInYear:Yup.string()
.when("loanAttachedradio",{
  is: val => val && val.length==3,
  then:Yup.string().required("Required")
  ,otherwise: Yup.string()
  .notRequired()
}),

InvestmentLoanType:Yup.string()
.when("loanAttachedradio",{
  is: val => val && val.length==3,
  then:Yup.string().required("Required")
  ,otherwise: Yup.string()
  .notRequired()
}),

InvestmentDedAmountOfLoan:Yup.number()
.when('loanAttachedradio',{
  is: val => val && val.length ===3,
  then:Yup.number().required("Required")
  .test(
    "Is positive?",
    "Must be a positive number",
    (value)=> value >0
  ),
  otherwise: Yup.number().notRequired()
}),

InvestmentYearsRemainingYear:Yup.string()
.when("loanAttachedradio",{
  is: val => val && val.length==3,
  then:Yup.string().required("Required")
  ,otherwise: Yup.string()
  .notRequired()
}),

                        })

                        let Investment_onSubmit = (values) => {

                          let myData={
                            InvestmentPropertiesCurrentValue:values.InvestmentCurrentValue, // num
                            InvestmentPropertiesCostBase:values.InvestmentCostBasePurchasePrice, // num
                            InvestmentPropertiesAddress:values.InvestmentPropertyAddress,
                            InvestmentPropertiesPostcode:values.investmentPostcodeSuburb,
                            InvestmentPropertiesRentalIncome:values.InvestmentRentalIncome,
                            InvestmentPropertiesFrequency:values.InvestmentFrequency,
                            InvestmentPropertiesTotalAnnualIncome:'5000', //InvestmentTotalAnnualIncome readonly
                            InvestmentPropertiesExpensesPA:values.InvestmentExpensesPA,

                            InvestmentPropertiesLoanAttached:values.loanAttachedradio,

                            InvestmentPropertiesCurrentBalance:values.InvestmentCurrentBalance,
                            InvestmentPropertiesLender:values.InvestmentLender,
                            InvestmentPropertiesRepaymentAmount:values.InvestmentRepaymentsAmount,
                            InvestmentPropertiesFrequency2:values.InvestmentFrequencyRadio,
                            InvestmentPropertiesAnnualRepayment:'5000',   // InvestmentAnnualRepayments readOnly
                            InvestmentPropertiesInterestRatePA:values.InvestmentInterestRatePA,
                            InvestmentPropertiesLoanTerm:values.InvestmentLoanTermInYear,
                            InvestmentPropertiesLoanType:values.InvestmentLoanType,
                            InvestmentPropertiesDebtLoanAmount:values.InvestmentDedAmountOfLoan,
                            InvestmentPropertiesYearsRemaining:values.InvestmentYearsRemainingYear,


                          }
                          console.log(myData)
                          // handleClose7();
                          }
                        //investment properties

                        //investment properties modal within modal


                        let Investment_initialValues_Modal={
                          TotalPropertyExpenses2:'',   //readonly
                          BodyCorporateFees2:'',
                          CouncilRates2:'',
                          GardeningAndLawnmowing2:'',
                          Insurance2:'',
                          LandTax2:'',
                          RepairsAndMaintenance2:'',
                          WaterCharges2:'',
                          Other2:'',
                          TelephoneAndInternet2:'',
                          ProfessionalFees2:'',
                          AllOther2:''
                        }
                        let Investment_validationSchema_Modal = Yup.object({
                          
                          BodyCorporateFees2:Yup.number().required("Required")
                          .test(
                            "Is positive?",
                            "Must be a positive number",
                            (value) => value > 0
                          ),
                          CouncilRates2:Yup.number().required("Required")
                            .test(
                              "Is positive?",
                              "Must be a positive number",
                              (value) => value > 0
                            ),
                          GardeningAndLawnmowing2:Yup.number().required("Required")
                              .test(
                                "Is positive?",
                                "Must be a positive number",
                                (value) => value > 0
                              ),
                          Insurance2:Yup.number().required("Required")
                              .test(
                                "Is positive?",
                                "Must be a positive number",
                                (value) => value > 0
                              ),
                          LandTax2:Yup.number().required("Required")
                            .test(
                              "Is positive?",
                              "Must be a positive number",
                              (value) => value > 0
                            ),
                          RepairsAndMaintenance2:Yup.number().required("Required")
                            .test(
                              "Is positive?",
                              "Must be a positive number",
                              (value) => value > 0
                            ),
                          WaterCharges2:Yup.number().required("Required")
                          .test(
                            "Is positive?",
                            "Must be a positive number",
                            (value) => value > 0
                          ),
                          Other2:Yup.number().required("Required")
                            .test(
                              "Is positive?",
                              "Must be a positive number",
                              (value) => value > 0
                            ),
                            TelephoneAndInternet2:Yup.number().required("Required")
                              .test(
                                "Is positive?",
                                "Must be a positive number",
                                (value) => value > 0
                              ),
                                ProfessionalFees2:Yup.number().required("Required")
                                .test(
                                  "Is positive?",
                                  "Must be a positive number",
                                  (value) => value > 0
                                ),

                                AllOther2:Yup.number().required("Required")
                                .test(
                                  "Is positive?",
                                  "Must be a positive number",
                                  (value) => value > 0
                                ),

                        })
                        let Investment_onSubmit_Modal = (values) => {

                          // let myData={
                          //     Abc:values.TotalPropertyExpenses2,   //readonly
                          //     Abc:values.BodyCorporateFees2,
                          //     Abc:values.CouncilRates2,
                          //     Abc:values.GardeningAndLawnmowing2,
                          //     Abc:values.Insurance2,
                          //     Abc:values.LandTax2,
                          //     Abc:values.RepairsAndMaintenance2,
                          //     Abc:values.WaterCharges2,
                          //     Abc:values.Other2,
                          //     Abc:values.TelephoneAndInternet2,
                          //     Abc:values.ProfessionalFees2,
                          //     Abc:values.AllOther,
                          //   }
                          console.log(values)
                          handleClose8();
                          }


  return (
    <>
    <div className="container-fluid">
             <div className="row px-0 m-0">
                 <div className="col-md-12">
                   
                    <Formik 
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                        >
                        {({values,handleChange,setFieldValue, handleBlur})=>
                            <Form>
                     <div className='shadow py-4 px-4 my-5'>
                         <div>
                              <h3 className="text-center">Investment Trust</h3>
                       
                                <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="NameofFamilyTrust" className="form-label">Name of Family Trust</   label>
                                    <Field type="text" className="form-control shadow inputDesign"
                                        id="NameofFamilyTrust"
                                        name="NameofFamilyTrust"
                                        placeholder="Name of Family Trust"/>
                                        <ErrorMessage name="NameofFamilyTrust" component="div" className="text-danger fw-bold"/>
                                    </div>           
                                </div>

                                <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="TypeofTrust" className="form-label">
                        Type of Trust
                        </label>
                        <Field
                        as='select'
                          id="TypeofTrust"
                          className="form-select shadow  inputDesign"
                          name="TypeofTrust"
                        >
                          <option value="">Select</option>
                          <option value="DiscretionaryFamilyTrust">Discretionary Family Trust</option>
                          <option value="Other">Other</option>
                        </Field>
                        <ErrorMessage className="text-danger fw-bold" component="div"   name="TypeofTrust" />

                      </div>
                                </div>

                                </div>

                                <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="ABN" className="form-label">ABN</   label>
                                    <Field type="text" className="form-control shadow inputDesign"
                                        id="ABN"
                                        name="ABN"
                                        placeholder="ABN"/>
                                        <ErrorMessage name="ABN" component="div" className="text-danger fw-bold"/>
                                    </div>           
                                </div>
                                <div className="col-md-6">
                              <div className="mb-3">
                            <label  className="form-label">
                            Distribution Taken As Cash?
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="DistributionCashradio"
                             id="DistributionCashopt1" value="Yes"
                             onChange={handleChange}
                             checked={values.DistributionCashradio==="Yes"}
                             />
                            <label htmlFor="DistributionCashopt1" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="DistributionCashradio"
                             id="DistributionCashopt2" value="No"
                             onChange={handleChange}
                             checked={values.DistributionCashradio==="No"}
                           />
                            <label htmlFor="DistributionCashopt2" className="label2">
                              <span>NO</span>
                            </label>
                          </div>



                              
                            </div>
                              </div>    
                                </div>

                               

                                </div>

                              

                                <div className="row">
                                <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="EstablishmentDate" className="form-label">
                        Establishment Date
                        </label>
                        <div>
                            
                            <DatePicker

                            className="form-control inputDesign shadow"
                            showIcon
                            id="EstablishmentDate"
                            name="EstablishmentDate"
                            selected={values.EstablishmentDate}
                            onChange={date => setFieldValue('EstablishmentDate', date)}
                            dateFormat="dd/MM/yyyy"
                            placeholderText="dd/mm/yyyy"
                            maxDate={new Date()}
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                            onBlur={handleBlur}

                            />
                           
                             </div>
                          <ErrorMessage className="text-danger fw-bold" component="div"   name="EstablishmentDate" />

                      </div>
                               </div>
                               
                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="NameofAccountant" className="form-label">Name of Accountant</   label>
                                    <Field type="text" className="form-control shadow inputDesign"
                                        id="NameofAccountant"
                                        name="NameofAccountant"
                                        placeholder="Name of Accountant"/>
                                        <ErrorMessage name="NameofAccountant" component="div" className="text-danger fw-bold"/>
                                    </div>           
                                </div>
                                </div>
                                <div className="row">
                               
                               <div className="col-md-6">
                     <div className="mb-3">
                       <label htmlFor="TrusteeType" className="form-label">
                       Trustee Type
                       </label>
                       <Field
                       as='select'
                         id="TrusteeType"
                         className="form-select shadow  inputDesign"
                         name="TrusteeType"
                       >
                         <option value="">Select</option>
                         <option value="Individual">Individual</option>
                         <option value="Corporate">Corporate</option>
                       </Field>
                       <ErrorMessage className="text-danger fw-bold" component="div"   name="TrusteeType" />

                     </div>
                               </div>

                               {
                               values.TrusteeType ==="Corporate" && 
                               <div className="col-md-6">
                                   <div className="mb-3">
                                   <label htmlFor="CorporateTrusteeName" className="form-label">Corporate Trustee Name</   label>
                                   <Field type="text" className="form-control shadow inputDesign"
                                       id="CorporateTrusteeName"
                                       name="CorporateTrusteeName"
                                       placeholder="Corporate Trustee Name"/>
                                       <ErrorMessage name="CorporateTrusteeName" component="div" className="text-danger fw-bold"/>
                                   </div>           
                               </div>}

                               <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="TrusteeType" className="form-label">
                        Number of Directors(1 to 4)
                        </label>
                        <Field
                        as='select'
                          id="NumberofDirectors"
                          className="form-select shadow  inputDesign"
                          name="NumberofDirectors"
                        >
                          <option value="">Select</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        </Field>
                        <ErrorMessage className="text-danger fw-bold" component="div"   name="NumberofDirectors" />

                      </div>
                              </div>

                               </div>
                              
                             

                               

                                <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="DirectorName1" className="form-label">Director Name 1</   label>
                                    <Field type="text" className="form-control shadow inputDesign"
                                        id="DirectorName1"
                                        name="DirectorName1"
                                        placeholder="Director Name 1"/>
                                        <ErrorMessage name="DirectorName1" component="div" className="text-danger fw-bold"/>
                                    </div>           
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="DirectorName2" className="form-label">Director Name 2</   label>
                                    <Field type="text" className="form-control shadow inputDesign"
                                        id="DirectorName2"
                                        name="DirectorName2"
                                        placeholder="Director Name 2"/>
                                        <ErrorMessage name="DirectorName2" component="div" className="text-danger fw-bold"/>
                                    </div>           
                                </div>
                                </div>

                                <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="DirectorName3" className="form-label">Director Name 3</   label>
                                    <Field type="text" className="form-control shadow inputDesign"
                                        id="DirectorName3"
                                        name="DirectorName3"
                                        placeholder="Director Name 3"/>
                                        <ErrorMessage name="DirectorName3" component="div" className="text-danger fw-bold"/>
                                    </div>           
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="DirectorName4" className="form-label">Director Name 4</   label>
                                    <Field type="text" className="form-control shadow inputDesign"
                                        id="DirectorName4"
                                        name="DirectorName4"
                                        placeholder="Director Name 4"/>
                                        <ErrorMessage name="DirectorName4" component="div" className="text-danger fw-bold"/>
                                    </div>           
                                </div>
                                </div>

                         
                            
                        </div> 
                    </div>

                    {/* bank accounts */}
                    <div className='shadow py-4 px-4 my-5'>
                        <h3 className="text-center">Bank Accounts</h3>
                        <div className="row">
                        <div className='col-md-6'>
                        <label  className="form-label">
                        Please enter the bank account details
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
                        </div>

                        </div>
                          {/* -------------bank accounts modal---------------------------- */}

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
                              Add Bank Account Details
                                <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />

                            </div>
                              </Modal.Title>
                            </Modal.Header>
                           <Formik
                            initialValues={Bank_initialValues}
                            validationSchema={Bank_validationSchema}
                            onSubmit={Bank_onSubmit}
                            >
                          {({values , setFieldValue ,setValues,handleChange,formik})=>
                            <Form>
                            <Modal.Body>
                                {/* bank sccounts */}

                         <div className=''>

                        {/* Bank 1 */}
                        <div className=' '>
                        <h3 className=''> Bank #1 </h3>
                        <div className="row">
                       <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="CurrentValue1" className="form-label">Current Value</   label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="CurrentValue1" name='CurrentValue1' placeholder="Current Value"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='CurrentValue1' />
                        </div>            
                        </div>
                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="FinancialInstituion1" className="form-label">Financial Instituion</   label>
                          <Field type="text" className="form-control shadow inputDesign"
                           id="FinancialInstituion1" name='FinancialInstituion1' placeholder="Financial Instituion"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='FinancialInstituion1' />
                        </div>            
                        </div>

                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="IncomeYield1" className="form-label">Income Yield (%)</label>
                          <Field type="number" className="form-control shadow inputDesign"
                           id="IncomeYield1" name='IncomeYield1' placeholder="IncomeYield"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='IncomeYield1' />
                        </div>            
                        </div>

                         <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="AnnualIncome1" className="form-label">Annual Income</label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="AnnualIncome1" name='AnnualIncome1' placeholder="Annual Income"
                          readOnly={true}/>
                        </div>            
                        </div>
                        </div>
                        </div>
                        {/* Bank 1 */}

                          {/* Bank 2 */}
                          <div className='my-2 '>
                        <h3 className=''> Bank #2 </h3>
                        <div className="row">
                       <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="CurrentValue2" className="form-label">Current Value</   label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="CurrentValue2" name='CurrentValue2' placeholder="Current Value"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='CurrentValue2' />
                        </div>            
                        </div>
                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="FinancialInstituion2" className="form-label">Financial Instituion</   label>
                          <Field type="text" className="form-control shadow inputDesign"
                           id="FinancialInstituion2" name='FinancialInstituion2' placeholder="Financial Instituion"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='FinancialInstituion2' />
                        </div>            
                        </div>

                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="IncomeYield2" className="form-label">Income Yield (%)</label>
                          <Field type="number" className="form-control shadow inputDesign"
                           id="IncomeYield2" name='IncomeYield2' placeholder="IncomeYield"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='IncomeYield2' />
                        </div>            
                        </div>

                         <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="AnnualIncome2" className="form-label">Annual Income</label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="AnnualIncome2" name='AnnualIncome2' placeholder="Annual Income"
                          readOnly={true}/>
                        </div>            
                        </div>
                        </div>
                         </div>
                        {/* Bank 2 */}


                        {/* Bank 3 */}
                        <div className='my-2 '>
                        <h3 className=''> Bank #3 </h3>
                        <div className="row">
                       <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="CurrentValue3" className="form-label">Current Value</   label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="CurrentValue3" name='CurrentValue3' placeholder="Current Value"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='CurrentValue3' />
                        </div>            
                        </div>
                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="FinancialInstituion3" className="form-label">Financial Instituion</   label>
                          <Field type="text" className="form-control shadow inputDesign"
                           id="FinancialInstituion3" name='FinancialInstituion3' placeholder="Financial Instituion"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='FinancialInstituion3' />
                        </div>            
                        </div>

                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="IncomeYield3" className="form-label">Income Yield (%)</label>
                          <Field type="number" className="form-control shadow inputDesign"
                           id="IncomeYield3" name='IncomeYield3' placeholder="IncomeYield"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='IncomeYield3' />
                        </div>            
                        </div>

                         <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="AnnualIncome3" className="form-label">Annual Income</label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="AnnualIncome3" name='AnnualIncome3' placeholder="Annual Income"
                          readOnly={true}/>
                        </div>            
                        </div>
                        </div>
                         </div>
                        {/* Bank 3 */}

                       
                       

                
                         </div>
                         {/* bank accounts */}
                           
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
                           {/* -------------bank accounts modal---------------------------- */}
                          

                    </div>
                    {/* bank accounts */}

                    {/* term deposit */}
                     <div className='shadow py-4 px-4 my-5'>
                        <h3 className="text-center">Term Deposit</h3>
                        <div className="row">
                        <div className='col-md-6'>
                        <label  className="form-label">
                        Please Enter Term Deposit Detail
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
                        </div>

                        </div>
                          {/* -------------Deposit modal---------------------------- */}

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
                              Add Term Deposit Details
                                <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />

                            </div>
                              </Modal.Title>
                            </Modal.Header>
                           <Formik
                            initialValues={Deposit_initialValues}
                            validationSchema={Deposit_validationSchema}
                            onSubmit={Deposit_onSubmit}
                            >
                          {({values , setFieldValue ,setValues,handleChange,formik})=>
                            <Form>
                            <Modal.Body>
                                {/* Deposit accounts */}

                         <div className=''>

                        {/* Deposit 1 */}
                        <div className=' '>
                        <h3 className=''> Deposit #1 </h3>
                        <div className="row">
                       <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="DepositCurrentValue1" className="form-label">Current Value</   label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="DepositCurrentValue1" name='DepositCurrentValue1' placeholder="Current Value"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='DepositCurrentValue1' />
                        </div>            
                        </div>
                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="DepositFinancialInstituion1" className="form-label">Financial Instituion</   label>
                          <Field type="text" className="form-control shadow inputDesign"
                           id="DepositFinancialInstituion1" name='DepositFinancialInstituion1' placeholder="Financial Instituion"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='DepositFinancialInstituion1' />
                        </div>            
                        </div>

                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="DepositIncomeYield1" className="form-label">Income Yield (%)</label>
                          <Field type="number" className="form-control shadow inputDesign"
                           id="DepositIncomeYield1" name='DepositIncomeYield1' placeholder="IncomeYield"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='DepositIncomeYield1' />
                        </div>            
                        </div>

                         <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="DepositAnnualIncome1" className="form-label">Annual Income</label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="DepositAnnualIncome1" name='DepositAnnualIncome1' placeholder="Annual Income"
                          readOnly={true}/>
                        </div>            
                        </div>
                        </div>
                        </div>
                        {/* Deposit 1 */}

                          {/* Deposit 2 */}
                          <div className='my-2 '>
                        <h3 className=''> Deposit #2 </h3>
                        <div className="row">
                       <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="DepositCurrentValue2" className="form-label">Current Value</   label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="DepositCurrentValue2" name='DepositCurrentValue2' placeholder="Current Value"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='DepositCurrentValue2' />
                        </div>            
                        </div>
                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="DepositFinancialInstituion2" className="form-label">Financial Instituion</   label>
                          <Field type="text" className="form-control shadow inputDesign"
                           id="DepositFinancialInstituion2" name='DepositFinancialInstituion2' placeholder="Financial Instituion"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='DepositFinancialInstituion2' />
                        </div>            
                        </div>

                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="DepositIncomeYield2" className="form-label">Income Yield (%)</label>
                          <Field type="number" className="form-control shadow inputDesign"
                           id="DepositIncomeYield2" name='DepositIncomeYield2' placeholder="IncomeYield"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='DepositIncomeYield2' />
                        </div>            
                        </div>

                         <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="DepositAnnualIncome2" className="form-label">Annual Income</label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="DepositAnnualIncome2" name='DepositAnnualIncome2' placeholder="Annual Income"
                          readOnly={true}/>
                        </div>            
                        </div>
                        </div>
                         </div>
                        {/* Deposit 2 */}


                        {/* Deposit 3 */}
                        <div className='my-2 '>
                        <h3 className=''> Deposit #3 </h3>
                        <div className="row">
                       <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="DepositCurrentValue3" className="form-label">Current Value</   label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="DepositCurrentValue3" name='DepositCurrentValue3' placeholder="Current Value"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='DepositCurrentValue3' />
                        </div>            
                        </div>
                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="DepositFinancialInstituion3" className="form-label">Financial Instituion</   label>
                          <Field type="text" className="form-control shadow inputDesign"
                           id="DepositFinancialInstituion3" name='DepositFinancialInstituion3' placeholder="Financial Instituion"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='DepositFinancialInstituion3' />
                        </div>            
                        </div>

                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="DepositIncomeYield3" className="form-label">Income Yield (%)</label>
                          <Field type="number" className="form-control shadow inputDesign"
                           id="DepositIncomeYield3" name='DepositIncomeYield3' placeholder="IncomeYield"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='DepositIncomeYield3' />
                        </div>            
                        </div>

                         <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="DepositAnnualIncome3" className="form-label">Annual Income</label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="DepositAnnualIncome3" name='DepositAnnualIncome3' placeholder="DepositAnnual Income"
                          readOnly={true}/>
                        </div>            
                        </div>
                        </div>
                         </div>
                        {/* Deposit 3 */}

                       
                       

                
                         </div>
                         {/* Deposit */}
                           
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
                                  onClick={handleClose2}
                                >
                                  Cancel
                                </span>
                              </div>
                            </Modal.Footer>
                            </Form>
                            }
                           </Formik>
                          </Modal>
                           {/* -------------Deposit modal---------------------------- */}
                          

                    </div>
                    {/* term deposit */}

                {/* Australian Share Market modal */}

                     <div className='shadow py-4 px-4 my-5'>
                        <h3 className="text-center">Australian Share Market</h3>
                        <div className="row">
                        <div className='col-md-6'>
                        <label  className="form-label">
                        Please enter the details
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
                        </div>

                        </div>
                    {/* Australian Share Market modal */}
                         

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
                              Add Share Details
                                <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />

                            </div>
                              </Modal.Title>
                            </Modal.Header>
                           <Formik
                            initialValues={Share_initialValues}
                            validationSchema={Share_validationSchema}
                            onSubmit={Share_onSubmit}
                            >
                          {({values , setFieldValue ,handleBlur,setValues,handleChange,formik})=>
                            <Form>
                            <Modal.Body>
                                  {/* Share details 3rd*/}

                         <div className=''>
                        <div className="row">
                       <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="ShareInvestmentName" className="form-label">Investment Name</   label>
                          <Field type="text" className="form-control shadow inputDesign" 
                          id="ShareInvestmentName" name='ShareInvestmentName' placeholder="Investment Name"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='ShareInvestmentName' />
                        </div>            
                        </div>
                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="NoOfShares" className="form-label">No of Shares</   label>
                          <Field type="number" className="form-control shadow inputDesign"
                           id="NoOfShares" name='NoOfShares' placeholder="No of Shares"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='NoOfShares' />
                        </div>            
                        </div>
                        </div>

                        <div className="row">
                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="CurrentSharePrice" className="form-label">Current Share Price</label>
                          <Field type="number" className="form-control shadow inputDesign"
                           id="CurrentSharePrice" name='CurrentSharePrice' placeholder="Current Share Price"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='CurrentSharePrice' />
                        </div>            
                        </div>

                         <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="" className="form-label">Total Share Value</label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="TotalShareValue" name='TotalShareValue' placeholder="Total Share Value"
                          readOnly={true}/>
                        </div>            
                        </div>
                        </div>

                        <div className="row">
                              
                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="CostBase" className="form-label">Cost Base</   label>
                                    <Field type="number" className="form-control shadow inputDesign"
                                        id="CostBase"
                                        name="CostBase"
                                        placeholder="Cost Base"/>
                                        <ErrorMessage name="CostBase" component="div" className="text-danger fw-bold"/>
                                    </div>           
                                </div>


                                {/* datepicker */}
                                <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="PurchaseDate" className="form-label">
                        Purchase Date
                        </label>
                        <div>
                            
                            <DatePicker

                            className="form-control inputDesign shadow"
                            showIcon
                            id="PurchaseDate"
                            name="PurchaseDate"
                            selected={values.PurchaseDate}
                            onChange={date => setFieldValue('PurchaseDate', date)}
                            dateFormat="dd/MM/yyyy"
                            placeholderText="dd/mm/yyyy"
                            maxDate={new Date()}
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                            onBlur={handleBlur}

                            />
                           
                        </div>
                          <ErrorMessage className="text-danger fw-bold" component="div"   name="PurchaseDate" />

                      </div>
                               </div>

                        </div>

                       

                        <div className="row">
                                <div className="col-md-6">
                                    <div className="row">
                                    <div className="col-md-7">
                                    <div className="mb-3">
                                    <label htmlFor="Incomepa" className="form-label">Income pa</   label>
                                    <Field type="number" className="form-control shadow inputDesign"
                                        id="Incomepa"
                                        name="Incomepa"
                                        placeholder="Income pa"/>
                                        <ErrorMessage name="Incomepa" component="div" className="text-danger fw-bold"/>
                                    </div>
                                    </div>
                                    <div className="col-md-5">
                      <div className="mb-3">
                        <label htmlFor="IncomepaType" className="form-label">
                        Type
                        </label>
                        <Field
                        as='select'
                          id="IncomepaType"
                          className="form-select shadow  inputDesign"
                          name="IncomepaType"
                        >
                          <option value="">Select</option>
                          <option value="dollar">$</option>
                          <option value="percentage">%</option>
                        </Field>
                        <ErrorMessage className="text-danger fw-bold" component="div"   name="IncomepaType" />

                      </div>
                                   </div>

                                </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="" className="form-label">Total Income pa</   label>
                                    <Field type="number" className="form-control shadow inputDesign"
                                        id="TotalIncomePa"
                                        name="TotalIncomePa"
                                        
                                      readOnly={true}
                                        />
                                    </div>
                                    </div>

                               

                        </div>

                         <div className="row">
                       <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="FrankedAmount" className="form-label">Franked Amount %</   label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="FrankedAmount" name='FrankedAmount' placeholder="Franked Amount"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='FrankedAmount' />
                        </div>            
                        </div>
                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="RegInvestmentsPA" className="form-label">Reg Investments pa</   label>
                          <Field type="number" className="form-control shadow inputDesign"
                           id="RegInvestmentsPA" name='RegInvestmentsPA' placeholder="Reg Investments"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='RegInvestmentsPA' />
                        </div>            
                        </div>
                        </div>
                        
                         <div className='row'>
                         
                         <div className="col-md-6">
                    <div className="mb-3">
                      <label  className="form-label">
                      Reinvest income
                      </label>

                         
                         <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="Reinvestincomeradio" 
                                className="form-check-input" id="Reinvestincomeopt1"
                                 value="Yes"
                                 onChange={handleChange} checked={values.Reinvestincomeradio==="Yes"}/>
                                <label htmlFor="Reinvestincomeopt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="Reinvestincomeradio" id="Reinvestincomeopt2"
                                className="form-check-input" value="No"
                                onChange={handleChange}
                                checked={values.Reinvestincomeradio==="No"}   />
                                <label htmlFor="Reinvestincomeopt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>
                         </div>
                         
                     
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
                                <span
                                  className="float-end btn w-25  btn-outline  backBtn mx-3"
                                  onClick={handleClose3}
                                >
                                  Cancel
                                </span>
                              </div>
                            </Modal.Footer>
                            </Form>
                            }
                           </Formik>
                          </Modal>
                    {/* Australian Share Market modal */}
                    
                          

                   
                    

                    {/*  loans associated */}

                    <div className=' my-5'>
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
                                        id="AnnualRepayments"
                                        name="AnnualRepayments"
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
                                <span
                                  className="float-end btn w-25  btn-outline  backBtn mx-3"
                                  onClick={handleClose4}
                                >
                                  Cancel
                                </span>
                              </div>
                            </Modal.Footer>
                            </Form>
                            }
                           </Formik>
                          </Modal>
                   {/* loans associated modal */}

                    </div>
                     {/*  loans associated */}
                    </div>
                   {/* Australian Share Market */}

                   {/*Manage Funds */}
                   <div className='shadow py-4 px-4 my-5'>
                        <h3 className="text-center">Managed Funds</h3>
                        <div className="row">
                        <div className='col-md-6'>
                        <label  className="form-label">
                        Please enter the details
                            </label>
                            <br />
                          
                          <span
                            className=" btn h-50 w-50
                            btn-outline-success "
                            onClick={handleShow5}
                          >
                            <div className="iconContainer mx-1">
                            <img className="img-fluid" src={plus} alt="" />

                            </div>
                            Enter Details
                          </span>
                        </div>

                        </div>
                    {/* manage Funds modal */}
                         

                          <Modal
                            show={show5}
                            onHide={handleClose5}
                            backdrop="static"
                            className="modal-lg"
                            keyboard={false}
                          >
                            <Modal.Header
                              className="text-light modalBG "
                              closeButton
                            >
                              <Modal.Title className="fontStyle">
                              Add Managed Fund Details
                                <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />

                            </div>
                              </Modal.Title>
                            </Modal.Header>
                           <Formik
                            initialValues={manageFund_initialValues}
                            validationSchema={manageFund_validationSchema}
                            onSubmit={manageFund_onSubmit}
                            >
                          {({values , setFieldValue ,handleBlur,setValues,handleChange,formik})=>
                            <Form>
                            <Modal.Body>
                                  {/* Share details 3rd*/}

                         <div className=''>
                        <div className="row">
                        <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="PlatformName" className="form-label">
                        Platform Name
                        </label>
                        <Field
                        as='select'
                          id="PlatformName"
                          className="form-select shadow  inputDesign"
                          name="PlatformName"
                        >
                          <option value="">Platform Name</option>
                          <option value="NorthInvestmentsChoice">AMP My North Investments -Choice</option>
                          <option value="NorthInvestmentsCore">AMP My North Investments -Core</option>
                          <option value="NorthInvestmentsSelect">AMP My North Investments -Select</option>
                          <option value="FristchoiceWholesaleInvestments">Colonial First State - Fristchoice Wholesale Investments</option>
                          <option value="DirectManagedFunds">Direct Managed Funds </option>
                          <option value="ExchangeTradedFundsETF">Exchange-Traded Funds (ETF’s)</option>

                        </Field>
                        <ErrorMessage className="text-danger fw-bold" component="div"   name="PlatformName" />

                      </div>
                        </div>
                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="InvestmentName" className="form-label">Investment Name</   label>
                          <Field type="text" className="form-control shadow inputDesign"
                           id="InvestmentName" name='InvestmentName' placeholder="Investment Name"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='InvestmentName' />
                        </div>            
                        </div>
                        </div>

                        <div className="row">
                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="NoOfUnitsShares" className="form-label">No of Units/Shares</label>
                          <Field type="number" className="form-control shadow inputDesign"
                           id="NoOfUnitsShares" name='NoOfUnitsShares' placeholder="No of Units/Shares"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='NoOfUnitsShares' />
                        </div>            
                        </div>

                         <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="CurrentShareUnitPrice" className="form-label">Current share/Unit Price</label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="CurrentShareUnitPrice" name='CurrentShareUnitPrice'
                           placeholder="Total Share Value"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='CurrentShareUnitPrice' />

                        </div>            
                        </div>
                        </div>

                        <div className="row">
                              
                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="" className="form-label">Current Value</   label>
                                    <Field type="number" className="form-control shadow inputDesign"
                                        id="managedCurrentValue"
                                        name="managedCurrentValue"
                                        placeholder="Current Value"
                                        readOnly={true}/>
                                    </div>           
                                </div>

                                <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="OriginalInvestment" className="form-label">Original Investment</label>
                          <Field type="number" className="form-control shadow inputDesign"
                           id="OriginalInvestment" name='OriginalInvestment' placeholder="Original Investment"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='OriginalInvestment' />
                        </div>            
                        </div>


                                

                        </div>

                        <div className="row">

                          {/* datepicker */}
                                <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="managedPurchaseDate" className="form-label">
                        Purchase Date
                        </label>
                        <div>
                            
                            <DatePicker

                            className="form-control inputDesign shadow"
                            showIcon
                            id="managedPurchaseDate"
                            name="managedPurchaseDate"
                            selected={values.managedPurchaseDate}
                            onChange={date => setFieldValue('managedPurchaseDate', date)}
                            dateFormat="dd/MM/yyyy"
                            placeholderText="dd/mm/yyyy"
                            maxDate={new Date()}
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                            onBlur={handleBlur}

                            />
                           
                        </div>
                          <ErrorMessage className="text-danger fw-bold" component="div"   name="managedPurchaseDate" />

                      </div>
                               </div>

                                <div className="col-md-6">
                                    <div className="row">
                                    <div className="col-md-7">
                                    <div className="mb-3">
                                    <label htmlFor="managedIncomepa" className="form-label">Income pa</   label>
                                    <Field type="number" className="form-control shadow inputDesign"
                                        id="managedIncomepa"
                                        name="managedIncomepa"
                                        placeholder="Income pa"/>
                                        <ErrorMessage name="managedIncomepa" component="div" className="text-danger fw-bold"/>
                                    </div>
                                    </div>
                                    <div className="col-md-5">
                      <div className="mb-3">
                        <label htmlFor="managedIncomepaType" className="form-label">
                        Type
                        </label>
                        <Field
                        as='select'
                          id="managedIncomepaType"
                          className="form-select shadow  inputDesign"
                          name="managedIncomepaType"
                        >
                          <option value="">Select</option>
                          <option value="dollar">$</option>
                          <option value="percentage">%</option>
                        </Field>
                        <ErrorMessage className="text-danger fw-bold" component="div"   name="managedIncomepaType" />

                      </div>
                                   </div>

                                   </div>
                                </div>
                                 </div>

                         <div className="row">
                       <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="" className="form-label">Total Income pa</   label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="managedTotalIncomePA" name='managedTotalIncomePA' placeholder="Total Income pa"
                          readOnly={true}/>
                          
                        </div>            
                       </div>
                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="managedRegInvestmentsPA" className="form-label">Reg Investments pa</   label>
                          <Field type="number" className="form-control shadow inputDesign"
                           id="managedRegInvestmentsPA" name='managedRegInvestmentsPA' placeholder="Reg Investments"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='managedRegInvestmentsPA' />
                        </div>            
                        </div>
                        </div>
                        
                         <div className='row'>
                         
                         <div className="col-md-6">
                    <div className="mb-3">
                      <label  className="form-label">
                      Reinvest income
                      </label>

                         
                         <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="managedReinvestincomeradio" 
                                className="form-check-input" id="Reinvestincomeopt1"
                                 value="Yes"
                                 onChange={handleChange} checked={values.managedReinvestincomeradio==="Yes"}/>
                                <label htmlFor="Reinvestincomeopt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="managedReinvestincomeradio" id="Reinvestincomeopt2"
                                className="form-check-input" value="No"
                                onChange={handleChange}
                                checked={values.managedReinvestincomeradio==="No"}   />
                                <label htmlFor="Reinvestincomeopt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>
                         </div>
                         
                     
                       </div>
                        </div>
                        </div>


                       </div>
                         {/* managed details */}
                           
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
                                  onClick={handleClose5}
                                >
                                  Cancel
                                </span>
                              </div>
                            </Modal.Footer>
                            </Form>
                            }
                           </Formik>
                          </Modal>
                    {/* managed modal */}
                    
                          

                   
                    

                    {/*managed  loans associated */}

                    <div className=' my-5'>
                        <div className="row">
                        <div className="col-md-12">
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
                                <span
                                  className="float-end btn w-25  btn-outline  backBtn mx-3"
                                  onClick={handleClose6}
                                >
                                  Cancel
                                </span>
                              </div>
                            </Modal.Footer>
                            </Form>
                            }
                           </Formik>
                          </Modal>
                   {/*Manage loans associated modal */}

                    </div>
                     {/* Manage loans associated */}
                    </div>
                   {/*Manage Funds */}


                   {/* investment Properties */}

                   <div className='shadow py-4 px-4 my-5'>
                        <h3 className="text-center">InvestMent properties</h3>
                        <div className="row">
                        <div className='col-md-6'>
                        <label  className="form-label">
                        Please Enter Details lastModal
                            </label>
                            <br />
                          
                          <span
                            className=" btn h-50 w-50
                            btn-outline-success "
                            onClick={handleShow7}
                          >
                            <div className="iconContainer mx-1">
                            <img className="img-fluid" src={plus} alt="" />

                            </div>
                            Enter Details
                          </span>
                        </div>

                        </div>
                          {/* -------------investment Properties modal---------------------------- */}

                          <Modal
                            show={show7}
                            onHide={handleClose7}
                            backdrop="static"
                            className="modal-lg"
                            keyboard={false}
                          >
                            <Modal.Header
                              className="text-light modalBG "
                              closeButton
                            >
                              <Modal.Title className="fontStyle">
                              Investments Properties Details
                                <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />

                            </div>
                              </Modal.Title>
                            </Modal.Header>
                           <Formik
                            initialValues={Investment_initialValues}
                            validationSchema={Investment_validationSchema}
                            onSubmit={Investment_onSubmit}
                            >
                          {({values , setFieldValue ,setValues,handleChange,formik})=>
                            <Form>
                            <Modal.Body>
                                

                         <div className=''>

                        
                        <div className=' '>
                        <div className="row">
                       <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="InvestmentCurrentValue" className="form-label">Current Value</   label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="InvestmentCurrentValue" name='InvestmentCurrentValue' placeholder="Current Value"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='InvestmentCurrentValue' />
                        </div>            
                        </div>
                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="InvestmentCostBasePurchasePrice" className="form-label">Cost Base/(Purchase Price)</   label>
                          <Field type="number" className="form-control shadow inputDesign"
                           id="InvestmentCostBasePurchasePrice" name='InvestmentCostBasePurchasePrice' placeholder="Cost Base/(Purchase Price)"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='InvestmentCostBasePurchasePrice' />
                        </div>            
                        </div>
                        </div>

                        <div className="row">
                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="InvestmentPropertyAddress" className="form-label">Property Address</label>
                          <Field type="text" className="form-control shadow inputDesign"
                           id="InvestmentPropertyAddress" name='InvestmentPropertyAddress' placeholder="Property Address"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='InvestmentPropertyAddress' />
                        </div>            
                        </div>

                         <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="investmentPostcodeSuburb" className="form-label">Postcode/Suburb</label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="investmentPostcodeSuburb" name='investmentPostcodeSuburb' 
                         placeholder="Postcode/Suburb"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='investmentPostcodeSuburb' />

                        </div>            
                        </div>

                        </div>

                        

                        <div className="row">
                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="InvestmentRentalIncome" className="form-label">Rental Income</label>
                          <Field type="number" className="form-control shadow inputDesign"
                           id="InvestmentRentalIncome" name='InvestmentRentalIncome' placeholder="Rental Income"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='InvestmentRentalIncome' />
                        </div>            
                        </div>

                     
                        <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="InvestmentFrequency" className="form-label">
                        Frequency
                        </label>
                        <Field
                        as='select'
                          id="InvestmentFrequency"
                          className="form-select shadow  inputDesign"
                          name="InvestmentFrequency"
                        >
                          <option value="">Select</option>
                          <option value="Weekly">Weekly</option>
                        </Field>
                        <ErrorMessage className="text-danger fw-bold" component="div"   name="InvestmentFrequency" />

                      </div>
                        </div>

                        </div>


                        <div className="row">
                       <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="InvestmentTotalAnnualIncome" className="form-label">Total Annual Income</   label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="InvestmentTotalAnnualIncome" name='InvestmentTotalAnnualIncome' placeholder="Total Annual Income"
                          readOnly={true}/>
                        </div>            
                        </div>
                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="InvestmentExpensesPA" className="form-label">Expenses (p.a)</   label>
                          <Field type="number" className="form-control shadow inputDesign"
                           id="InvestmentExpensesPA" name='InvestmentExpensesPA' placeholder="Expenses (p.a)"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='InvestmentExpensesPA' />
                        </div>            
                        </div>
                        </div>

                        {/*Investment  ModalAdded */}

                        {/*Investment ModalAdded */}
                        {/* myradio */}
                        <div className="row">
                          <div className='col-md-6'>
                        <label  className="form-label">
                        Please Enter Term Deposit Detail
                            </label>
                            <br />
                          
                          <span
                            className=" btn h-50 w-50
                            btn-outline-success "
                            onClick={handleShow8}
                          >
                            <div className="iconContainer mx-1">
                            <img className="img-fluid" src={plus} alt="" />

                            </div>
                            Enter Details
                          </span>
                        </div>

                        <div className="col-md-6">
                    <div className="mb-3">
                      <label  className="form-label">
                      Does this property have a loan attached to it?
                      </label>

                         
                         <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="loanAttachedradio" 
                                className="form-check-input" id="loanAttachedopt1"
                                 value="Yes"
                                 onChange={handleChange} checked={values.loanAttachedradio==="Yes"}/>
                                <label htmlFor="loanAttachedopt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="loanAttachedradio" id="loanAttachedopt2"
                                className="form-check-input" value="No"
                                onChange={handleChange}
                                checked={values.loanAttachedradio==="No"}   />
                                <label htmlFor="loanAttachedopt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>
                         </div>
                         
                     
                       </div>
                        </div>
                        </div>
{
  
  values.loanAttachedradio==="Yes" &&
                    <div>
                        <div className="row">
                       <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="InvestmentCurrentBalance" className="form-label">Current Balance</   label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="InvestmentCurrentBalance" name='InvestmentCurrentBalance' placeholder="Current Balance"
                          />
                           <ErrorMessage component='div' className='text-danger fw-bold' name='InvestmentCurrentBalance' />

                        </div>            
                        </div>
                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="InvestmentLender" className="form-label">Lender</   label>
                          <Field type="text" className="form-control shadow inputDesign"
                           id="InvestmentLender" name='InvestmentLender' placeholder="Lender"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='InvestmentLender' />
                        </div>            
                        </div>
                        </div>

                        <div className="row">
                       <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="InvestmentRepaymentsAmount" className="form-label">Repayments Amount</   label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="InvestmentRepaymentsAmount" name='InvestmentRepaymentsAmount' placeholder="Repayments Amount"
                          />
                           <ErrorMessage component='div' className='text-danger fw-bold' name='InvestmentRepaymentsAmount' />

                        </div>            
                        </div>
                        <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="InvestmentFrequencyRadio" className="form-label">
                        Frequency
                        </label>
                        <Field
                        as='select'
                          id="InvestmentFrequencyRadio"
                          className="form-select shadow  inputDesign"
                          name="InvestmentFrequencyRadio"
                        >
                          <option value="">Select</option>
                          <option value="Weekly">Weekly</option>
                          <option value="monthly">Monthly</option>

                        </Field>
                        <ErrorMessage className="text-danger fw-bold" component="div"   name="InvestmentFrequencyRadio" />

                      </div>
                        </div>
                        </div>

                        <div className="row">
                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="InvestmentAnnualRepayments" className="form-label">Annual Repayments</   label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="InvestmentAnnualRepayments" name='InvestmentAnnualRepayments' placeholder="Annual Repayments"
                          />
                           <ErrorMessage component='div' className='text-danger fw-bold' name='InvestmentRepaymentsAmount' />

                        </div>            
                        </div>
                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="InvestmentInterestRatePA" className="form-label">Interest Rate (p.a)</   label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="InvestmentInterestRatePA" name='InvestmentInterestRatePA' placeholder="Interest Rate (p.a)"
                          />
                           <ErrorMessage component='div' className='text-danger fw-bold' name='InvestmentInterestRatePA' />

                        </div>            
                        </div>
                        </div>
                        <div className="row">

                          
                        <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="InvestmentLoanTermInYear" className="form-label">
                        Loan Term (1-30 Years)
                        </label>
                        <Field
                        as='select'
                          id="InvestmentLoanTermInYear"
                          className="form-select shadow  inputDesign"
                          name="InvestmentLoanTermInYear"
                        >
                          <option value="">Select</option>
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
                        <ErrorMessage className="text-danger fw-bold" component="div"   name="InvestmentLoanTermInYear" />

                      </div>
                        </div>

                        
                        <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="InvestmentLoanType" className="form-label">
                        Loan Type
                        </label>
                        <Field
                        as='select'
                          id="InvestmentLoanType"
                          className="form-select shadow  inputDesign"
                          name="InvestmentLoanType"
                        >
                          <option value="">Select</option>
                          <option value="I/Only">I/Only</option>
                          <option value="P&I">P & I</option>
                        </Field>
                        <ErrorMessage className="text-danger fw-bold" component="div"   name="InvestmentLoanType" />

                      </div>
                        </div>

                        </div>


                        <div className="row">
                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="InvestmentDedAmountOfLoan" className="form-label">Ded Amount of Loan</   label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="InvestmentDedAmountOfLoan" name='InvestmentDedAmountOfLoan' placeholder="Ded Amount of Loan"
                          />
                           <ErrorMessage component='div' className='text-danger fw-bold' name='InvestmentDedAmountOfLoan' />

                        </div>            
                        </div>
                          
                        <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="InvestmentYearsRemainingYear" className="form-label">
                        Years Remaining (1-30 Years)
                        </label>
                        <Field
                        as='select'
                          id="InvestmentYearsRemainingYear"
                          className="form-select shadow  inputDesign"
                          name="InvestmentYearsRemainingYear"
                        >
                          <option value="">Select</option>
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
                        <ErrorMessage className="text-danger fw-bold" component="div"   name="InvestmentYearsRemainingYear" />

                      </div>
                        </div>

                        
                        

                        </div>
                      </div>}
                        

                        </div>
                        

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
                                  onClick={handleClose7}
                                >
                                  Cancel
                                </span>
                              </div>
                            </Modal.Footer>
                            </Form>
                            }
                           </Formik>
                          </Modal>
                           {/* -------------investment Properties modal---------------------------- */}
                          

                    </div>
                   {/* investment Properties */}

                   {/* ModalInMOdal */}
                    {/* -------------Deposit modal---------------------------- */}

                    <Modal
                            show={show8}
                            onHide={handleClose8}
                            backdrop="static"
                            className="modal-lg"
                            keyboard={false}
                          >
                            <Modal.Header
                              className="text-light modalBG "
                              closeButton
                            >
                              <Modal.Title className="fontStyle">
                              Investments Properties Details modal2
                                <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />

                            </div>
                              </Modal.Title>
                            </Modal.Header>
                           <Formik
                            initialValues={Investment_initialValues_Modal}
                            validationSchema={Investment_validationSchema_Modal}
                            onSubmit={Investment_onSubmit_Modal}
                            >
                          {({values , setFieldValue ,setValues,handleChange,formik})=>
                            <Form>
                            <Modal.Body>
                                {/* Deposit accounts */}

                         <div className=''>

                        <div className=' '>
                        
                        <div className="row">
                       <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="" className="form-label">Total Property Expenses</   label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="TotalPropertyExpenses2" name='TotalPropertyExpenses2' placeholder="Total Property Expenses"
                          readOnly={true}/>
                        </div>            
                        </div>
                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="BodyCorporateFees2" className="form-label">Body Corporate Fees</   label>
                          <Field type="number" className="form-control shadow inputDesign"
                           id="BodyCorporateFees2" name='BodyCorporateFees2' placeholder="Body Corporate Fees"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='BodyCorporateFees2' />
                        </div>            
                        </div>
                        </div>
                        
                    <div className="row">
                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="CouncilRates2" className="form-label">Council Rates</label>
                          <Field type="number" className="form-control shadow inputDesign"
                           id="CouncilRates2" name='CouncilRates2' placeholder="Council Rates"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='CouncilRates2' />
                        </div>            
                        </div>

                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="GardeningAndLawnmowing2" className="form-label">Gardening and Lawn mowing</label>
                          <Field type="number" className="form-control shadow inputDesign"
                           id="GardeningAndLawnmowing2" name='GardeningAndLawnmowing2' placeholder="Gardening and Lawn mowing"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='GardeningAndLawnmowing2' />
                        </div>            
                        </div>
                      </div>


                      <div className="row">
                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="Insurance2" className="form-label">Insurance</label>
                          <Field type="number" className="form-control shadow inputDesign"
                           id="Insurance2" name='Insurance2' placeholder="Insurance"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='Insurance2' />
                        </div>            
                        </div>

                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="LandTax2" className="form-label">Land Tax</label>
                          <Field type="number" className="form-control shadow inputDesign"
                           id="LandTax2" name='LandTax2' placeholder="Land Tax"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='LandTax2' />
                        </div>            
                        </div>
                      </div>


                      <div className="row">
                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="RepairsAndMaintenance2" className="form-label">Repairs and Maintenance</label>
                          <Field type="number" className="form-control shadow inputDesign"
                           id="RepairsAndMaintenance2" name='RepairsAndMaintenance2' placeholder="Repairs and Maintenance"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='RepairsAndMaintenance2' />
                        </div>            
                        </div>

                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="WaterCharges2" className="form-label">Water Charges</label>
                          <Field type="number" className="form-control shadow inputDesign"
                           id="WaterCharges2" name='WaterCharges2' placeholder="Water Charges"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='WaterCharges2' />
                        </div>            
                        </div>
                      </div>


                      <div className="row">
                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="Other2" className="form-label">Other</label>
                          <Field type="number" className="form-control shadow inputDesign"
                           id="Other2" name='Other2' placeholder="Other"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='Other2' />
                        </div>            
                        </div>

                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="TelephoneAndInternet2" className="form-label">Telephone and Internet</label>
                          <Field type="number" className="form-control shadow inputDesign"
                           id="TelephoneAndInternet2" name='TelephoneAndInternet2' placeholder="Telephone and Internet"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='TelephoneAndInternet2' />
                        </div>            
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="Other2" className="form-label">Professional Fees (Accounting or Other)</label>
                          <Field type="number" className="form-control shadow inputDesign"
                           id="ProfessionalFees2" name='ProfessionalFees2' placeholder="Professional Fees (Accounting or Other)"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='ProfessionalFees2' />
                        </div>            
                        </div>

                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="AllOther2" className="form-label">All Other</label>
                          <Field type="number" className="form-control shadow inputDesign"
                           id="AllOther2" name='AllOther2' placeholder="All Other"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name='AllOther2' />
                        </div>            
                        </div>
                      </div>




                        </div>
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
                                  onClick={handleClose8}
                                >
                                  Cancel
                                </span>
                              </div>
                            </Modal.Footer>
                            </Form>
                            }
                           </Formik>
                          </Modal>
                           {/* -------------Deposit modal---------------------------- */}

                   {/* ModalInMOdal */}











                    <div className="row mt-5 mb-3">
                        <div className="col-md-12">
                          <button  type='submit' className="float-end btn w-25  bgColor modalBtn">Next</button>
                          <button className="float-end btn w-25  btn-outline  backBtn mx-3">Back</button>
                        </div>
                    </div></Form>}
                     </Formik>
                  
                </div>
            </div>
     </div>
    </>
  )
}

export default InvestmentTrust