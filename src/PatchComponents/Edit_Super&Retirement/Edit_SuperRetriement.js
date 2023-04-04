import { React, useState,useEffect } from 'react';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Modal } from 'react-bootstrap';

import plus from './images/plus.svg'
import accounting from './images/accounting.svg'
import businessman from './images/businessman.svg'
import doctor from './images/doctor.svg'
import lawyer from './images/lawyer.svg'
import notebook from './images/notebook.svg'
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';


function Edit_SuperRetriement() {

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

    const [Super2, setSuper2] = useState(false);
    const [Super2show, setSuper2Show] = useState(false);
    const Super2handleClose = () => setSuper2Show(false);
    const Super2handleShow = () => setSuper2Show(true);
    let Super2Handler=(elem)=>{
        if (elem==="No"){
        setSuper2(false)
        }
        else{
        setSuper2(true)
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
    
    const [Pension2, setPension2] = useState(false);
    const [Pension2show, setPension2Show] = useState(false);
    const Pension2handleClose = () => setPension2Show(false);
    const Pension2handleShow = () => setPension2Show(true);
    let Pension2Handler=(elem)=>{
        if (elem==="No"){
        setPension2(false)
        }
        else{
        setPension2(true)
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

    const [Annuities2, setAnnuities2] = useState(false);
    const [Annuities2show, setAnnuities2Show] = useState(false);
    const Annuities2handleClose = () => setAnnuities2Show(false);
    const Annuities2handleShow = () => setAnnuities2Show(true);
    let Annuities2Handler=(elem)=>{
        if (elem==="No"){
        setAnnuities2(false)
        }
        else{
        setAnnuities2(true)
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

    const [LifetimePension2, setLifetimePension2] = useState(false);
    const [LifetimePension2show, setLifetimePension2Show] = useState(false);
    const LifetimePension2handleClose = () => setLifetimePension2Show(false);
    const LifetimePension2handleShow = () => setLifetimePension2Show(true);
    let LifetimePension2Handler=(elem)=>{
        if (elem==="No"){
        setLifetimePension2(false)
        }
        else{
        setLifetimePension2(true)
        }
    }
    let email=localStorage.getItem("EditClient")
// APIs Data States
const [clientSuperAccountData, setClientSuperAccountData] = useState([])
const [partnerSuperAccountData, setPartnerSuperAccountData] = useState([])
const [clientPensionAccountData, setClientPensionAccountData] = useState([])
const [partnerPensionAccountData, setPartnerPensionAccountData] = useState([])

const [clientAnnuitiesData, setClientAnnuitiesData] = useState([])
const [partnerAnnuitiesData, setPartnerAnnuitiesData] = useState([])

const [clientLifetimePensionData, setclientLifetimePensionData] = useState([])
const [partnerLifetimePensionData, setPartnerLifetimePensionData] = useState([])




    useEffect(() => {

      //  ClientSuperAccount
      axios
      .get('http://localhost:7000/Client-Retirement')
      .then((res) =>{ 
        let clientObj=(res.data)
        let clientFilterObj=clientObj.filter((item) => item.Email ==email);
         setClientSuperAccountData(clientFilterObj[0])
        // console.log(clientFilterObj)
        // console.log(res.data)
      })

            //  PartnerSuperAccount
            axios
            .get('http://localhost:7000/Partner-Retirement')
            .then((res) =>{ 
              let clientObj=(res.data)
              let clientFilterObj=clientObj.filter((item) => item.Email ==email);
               setPartnerSuperAccountData(clientFilterObj[0])
              // console.log(clientFilterObj)
              // console.log(res.data)
            })

            // Client Pension Account
      axios
      .get('http://localhost:7000/Client-Retirement')
      .then((res) =>{ 
        let clientObj=(res.data)
        let clientFilterObj=clientObj.filter((item) => item.Email ==email);
         setClientPensionAccountData(clientFilterObj[0])
        // console.log(clientFilterObj)
        // console.log(res.data)
      })

                // Partner Pension Account
                axios
                .get('http://localhost:7000/Partner-Retirement')
                .then((res) =>{ 
                  let clientObj=(res.data)
                  let clientFilterObj=clientObj.filter((item) => item.Email ==email);
                   setPartnerPensionAccountData(clientFilterObj[0])
                  // console.log(clientFilterObj)
                  // console.log(res.data)
                })

      // Client Annuities
      axios
      .get('http://localhost:7000/Client-Retirement')
      .then((res) =>{ 
        let clientObj=(res.data)
        let clientFilterObj=clientObj.filter((item) => item.Email ==email);
         setClientAnnuitiesData(clientFilterObj[0])
        // console.log(clientFilterObj)
        // console.log(res.data)
      })

      // Partner Annuities
      axios
      .get('http://localhost:7000/Partner-Retirement')
      .then((res) =>{ 
        let clientObj=(res.data)
        let clientFilterObj=clientObj.filter((item) => item.Email ==email);
         setPartnerAnnuitiesData(clientFilterObj[0])
        // console.log(clientFilterObj)
        // console.log(res.data)
      })

      // Client Lifetime Pension
      axios
      .get('http://localhost:7000/Client-Retirement')
      .then((res) =>{ 
        let clientObj=(res.data)
        let clientFilterObj=clientObj.filter((item) => item.Email ==email);
         setclientLifetimePensionData(clientFilterObj[0])
        // console.log(clientFilterObj)
        // console.log(res.data)
      })

        // partner Lifetime Pension
        axios
        .get('http://localhost:7000/Partner-Retirement')
        .then((res) =>{ 
          let clientObj=(res.data)
          let clientFilterObj=clientObj.filter((item) => item.Email ==email);
           setPartnerLifetimePensionData(clientFilterObj[0])
          // console.log(clientFilterObj)
          // console.log(res.data)
        })

      
    }, [])
    


    let Navigate = useNavigate();
    function BackFunction(){
      Navigate('/Edit-Estate-Planning')
    }
    let Client_initialValues={
       SuperFundName: clientSuperAccountData.Super_FundName,
       SuperMemberNo: clientSuperAccountData.Super_MemberNO,
    

       Super_FundType: clientSuperAccountData.SuperFundType,
       SuperContactNO: clientSuperAccountData.Super_ContactNO,
       SuperFaxNO: clientSuperAccountData.Super_FaxNO,
       SuperPostalAddress: clientSuperAccountData.Super_PostalAddress,
       SuperABN: clientSuperAccountData.Super_ABN,
       SuperSPIN: clientSuperAccountData.Super_SPIN,
       SuperWebsite: clientSuperAccountData.Super_Website,
       SuperEmail: clientSuperAccountData.Super_Email,
       SuperFundType2: clientSuperAccountData.Super_FundType_2,
       SuperCommencementDate: clientSuperAccountData.Super_CommencementDate,
       SuperEligibleDate: clientSuperAccountData.Super_EligibleServiceDate,
       SuperTFNQuoted: clientSuperAccountData.Super_TFN,
       SuperCurrentBalance: clientSuperAccountData.Super_CurrentBalance,
       SuperTaxFree: clientSuperAccountData.Super_TaxFree,
       SuperTaxed: clientSuperAccountData.Super_Taxed,
       SuperRestrictionNonPreserved: clientSuperAccountData.Super_Restricted,
       SuperUnRestrictionNonPreserved: clientSuperAccountData.Super_Unrestricted,
       SuperPreservedAmount: clientSuperAccountData.Super_PreservedAmount,

         PensionFundName: clientPensionAccountData.AccountPension_FundName,
         PensionMemberNo: clientPensionAccountData.AccountPension_MemberNO,
         PensionFundType: clientPensionAccountData.AccountPension_FundType,
         PensionContactNO: clientPensionAccountData.AccountPension_ContactNO,
         PensionFaxNO: clientPensionAccountData.AccountPension_FaxNO,
         PensionPostalAddress: clientPensionAccountData.AccountPension_PostalAddress,
         PensionABN: clientPensionAccountData.AccountPension_ABN,
         PensionSPIN: clientPensionAccountData.AccountPension_SPIN,
         PensionWebsite: clientPensionAccountData.AccountPension_Website,
         PensionEmail: clientPensionAccountData.AccountPension_Email,
         PensionFundType2: clientPensionAccountData.AccountPension_PensionType,
         PensionCurrentBalance: clientPensionAccountData.AccountPension_CurrentBalance,
         PensionTaxFree: clientPensionAccountData.AccountPension_TaxFree,
         PensionTaxed: clientPensionAccountData.AccountPension_Taxed,
         PensionEligibleDate: clientPensionAccountData.AccountPension_EligibleService,
         PensionCommencementDate: clientPensionAccountData.AccountPension_CommencementDate,
         PensionPurchasePrice: clientPensionAccountData.AccountPension_OriginalPrice,
         PensionRegularIncomeDrawn: clientPensionAccountData.AccountPension_IncomeDrawn,
         PensionFrequency: clientPensionAccountData.AccountPension_Frequency,
         PensionMinimumRequired: clientPensionAccountData.AccountPension_MinimumRequired,
         PensionRelevantNumber: clientPensionAccountData.AccountPension_RelevantNumber,
         PensionLumpsumTaken: clientPensionAccountData.AccountPension_LumpsumTaken,
         PensionDeductibleAmount: clientPensionAccountData.AccountPension_DeductibleAmount,

         AnnuitiesProductProvider: clientAnnuitiesData.Annuities_ProductProvider,
         AnnuitiesOriginalInvestment: clientAnnuitiesData.Annuities_InvestmentAmount,
         AnnuitiesCurrentValue: clientAnnuitiesData.Annuities_CurrentValue,
         AnnuitiesAnnuityType: clientAnnuitiesData.Annuities_AnnuityType,
         AnnuitiesRCV: clientAnnuitiesData.Annuities_RCV,
         AnnuitiesTerm: clientAnnuitiesData.Annuities_Term,
         AnnuitiesMaturityYears: clientAnnuitiesData.Annuities_YearsUntilMaturity,
         AnnuitiesRegularIncomeDrawn: clientAnnuitiesData.Annuities_RegularIncome,
         AnnuitiesFrequency: clientAnnuitiesData.Annuities_Frequency,
         AnnuitiesInflationRate: clientAnnuitiesData.Annuities_AnnualInflation,

         LifetimePensionFundName: clientLifetimePensionData.LifePension_FundName,
         LifetimePensionIncomeDrawn: clientLifetimePensionData.LifePension_RegularIncome,
         LifetimePensionFrequency: clientLifetimePensionData.LifePension_Frequency,
         LifetimePensionDeductibleAmount: clientLifetimePensionData.LifePension_DeductibleAmount,
         LifetimePensionTaxFree: clientLifetimePensionData.LifePension_TaxFree_Pension,
         LifetimePensionTaxableAmount: clientLifetimePensionData.LifePension_TaxablePensionAmount
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
        AnnuitiesRCV: Yup.number().required("Required"),
        AnnuitiesTerm: Yup.number().required("Required"),
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

    let Partner_initialValues = {
      
       Super2FundName: partnerSuperAccountData.Super_FundName,
       Super2MemberNo: partnerSuperAccountData.Super_MemberNO,
       Super2FundType: partnerSuperAccountData.Super_FundType,
       Super2ContactNO: partnerSuperAccountData.Super_ContactNO,
       Super2FaxNO: partnerSuperAccountData.Super_FaxNO,
       Super2PostalAddress: partnerSuperAccountData.Super_PostalAddress,
       Super2ABN: partnerSuperAccountData.Super_ABN,
       Super2SPIN: partnerSuperAccountData.Super_SPIN,
       Super2Website: partnerSuperAccountData.Super_Website,
       Super2Email: partnerSuperAccountData.Super_Email,
       Super2FundType2: partnerSuperAccountData.Super_FundType_2,
       Super2CommencementDate: partnerSuperAccountData.Super_CommencementDate,
       Super2EligibleDate: partnerSuperAccountData.Super_EligibleServiceDate,
       Super2TFNQuoted: partnerSuperAccountData.Super_TFN,
       Super2CurrentBalance: partnerSuperAccountData.Super_CurrentBalance,
       Super2TaxFree: partnerSuperAccountData.Super_TaxFree,
       Super2Taxed: partnerSuperAccountData.Super_Taxed,
       Super2RestrictionNonPreserved: partnerSuperAccountData.Super_Restricted,
       Super2UnRestrictionNonPreserved: partnerSuperAccountData.Super_Unrestricted,
       Super2PreservedAmount: partnerSuperAccountData.Super_PreservedAmount,

       Pension2FundName: partnerPensionAccountData.AccountPension_FundName,
         Pension2MemberNo: partnerPensionAccountData.AccountPension_MemberNO,
         Pension2FundType: partnerPensionAccountData.AccountPension_FundType,
         Pension2ContactNO: partnerPensionAccountData.AccountPension_ContactNO,
         Pension2FaxNO: partnerPensionAccountData.AccountPension_FaxNO,
         Pension2PostalAddress: partnerPensionAccountData.AccountPension_PostalAddress,
         Pension2ABN: partnerPensionAccountData.AccountPension_ABN,
         Pension2SPIN: partnerPensionAccountData.AccountPension_SPIN,
         Pension2Website: partnerPensionAccountData.AccountPension_Website,
         Pension2Email: partnerPensionAccountData.AccountPension_Email,
         Pension2FundType2: partnerPensionAccountData.AccountPension_PensionType,
         Pension2CurrentBalance: partnerPensionAccountData.AccountPension_CurrentBalance,
         Pension2TaxFree: partnerPensionAccountData.AccountPension_TaxFree,
         Pension2Taxed: partnerPensionAccountData.AccountPension_Taxed,
         Pension2EligibleDate: partnerPensionAccountData.AccountPension_EligibleService,
         Pension2CommencementDate: partnerPensionAccountData.AccountPension_CommencementDate,
         Pension2PurchasePrice: partnerPensionAccountData.AccountPension_OriginalPrice,
         Pension2RegularIncomeDrawn: partnerPensionAccountData.AccountPension_IncomeDrawn,
         Pension2Frequency: partnerPensionAccountData.AccountPension_Frequency,
         Pension2MinimumRequired: partnerPensionAccountData.AccountPension_MinimumRequired,
         Pension2RelevantNumber: partnerPensionAccountData.AccountPension_RelevantNumber,
         Pension2LumpsumTaken: partnerPensionAccountData.AccountPension_LumpsumTaken,
         Pension2DeductibleAmount: partnerPensionAccountData.AccountPension_DeductibleAmount,

         Annuities2ProductProvider: partnerAnnuitiesData.Annuities_ProductProvider,
         Annuities2OriginalInvestment: partnerAnnuitiesData.Annuities_InvestmentAmount,
         Annuities2CurrentValue: partnerAnnuitiesData.Annuities_CurrentValue,
         Annuities2AnnuityType: partnerAnnuitiesData.Annuities_AnnuityType,
         Annuities2RCV: partnerAnnuitiesData.Annuities_RCV,
         Annuities2Term: partnerAnnuitiesData.Annuities_Term,
         Annuities2MaturityYears: partnerAnnuitiesData.Annuities_YearsUntilMaturity,
         Annuities2RegularIncomeDrawn: partnerAnnuitiesData.Annuities_RegularIncome,
         Annuities2Frequency: partnerAnnuitiesData.Annuities_Frequency,
         Annuities2InflationRate: partnerAnnuitiesData.Annuities_AnnualInflation,

         LifetimePension2FundName: partnerLifetimePensionData.LifePension_FundName,
         LifetimePension2IncomeDrawn: partnerLifetimePensionData.LifePension_RegularIncome,
         LifetimePension2Frequency: partnerLifetimePensionData.LifePension_Frequency,
         LifetimePension2DeductibleAmount: partnerLifetimePensionData.LifePension_DeductibleAmount,
         Lifetime2PensionTaxFree: partnerLifetimePensionData.LifePension_TaxFree_Pension,
         LifetimePension2TaxableAmount: partnerLifetimePensionData.LifePension_TaxablePensionAmount
    }

    let Partner_validationSchema = Yup.object({
      Super2FundName: Yup.string().required("Required"),
      Super2MemberNo: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      Super2FundType: Yup.string().required("Required"),
      Super2ContactNO: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      Super2FaxNO: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      Super2PostalAddress: Yup.string().required("Required"),
      Super2ABN: Yup.string().required("Required"),
      Super2SPIN: Yup.string().required("Required"),
      Super2Website: Yup.string().required("Required"),
      Super2Email: Yup.string().required("Required"),
      Super2FundType2: Yup.string().required("Required"),
      Super2CommencementDate: Yup.string().required("Required"),
      Super2EligibleDate: Yup.string().required("Required"),
      Super2CurrentBalance: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      Super2TaxFree: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      Super2Taxed: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      Super2RestrictionNonPreserved: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      Super2UnRestrictionNonPreserved: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
      Super2PreservedAmount: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),

      Pension2FundName: Yup.string().required("Required"),
        Pension2MemberNo: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
        Pension2FundType: Yup.string().required("Required"),
        Pension2ContactNO: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
        Pension2FaxNO: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
        Pension2PostalAddress: Yup.string().required("Required"),
        Pension2ABN: Yup.string().required("Required"),
        Pension2SPIN: Yup.string().required("Required"),
        Pension2Website: Yup.string().required("Required"),
        Pension2Email: Yup.string().required("Required"),
        Pension2FundType2: Yup.string().required("Required"),
        Pension2CommencementDate: Yup.string().required("Required"),
        Pension2EligibleDate: Yup.string().required("Required"),
        Pension2CurrentBalance: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
        Pension2TaxFree: Yup.string().required("Required"),
        Pension2Taxed: Yup.string().required("Required"),
        Pension2PurchasePrice: Yup.string().required("Required"),
        Pension2Frequency: Yup.string().required("Required"),
        Pension2RegularIncomeDrawn: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
        Pension2MinimumRequired: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
        Pension2RelevantNumber: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
        Pension2PurchasePrice: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
        Pension2LumpsumTaken: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
        Pension2DeductibleAmount: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),

        Annuities2ProductProvider: Yup.string().required("Required"),
        Annuities2OriginalInvestment: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
        Annuities2CurrentValue: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
        Annuities2AnnuityType: Yup.string().required("Required"),
        Annuities2RCV: Yup.number().required("Required"),
        Annuities2Term: Yup.number().required("Required"),
        Annuities2MaturityYears: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
        Annuities2RegularIncomeDrawn: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
        Annuities2Frequency: Yup.string().required("Required"),
        Annuities2InflationRate: Yup.string().required("Required"),

        LifetimePension2FundName: Yup.string().required("Required"),
        LifetimePension2IncomeDrawn: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
        LifetimePension2Frequency: Yup.string().required("Required"),
        LifetimePension2DeductibleAmount: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
        LifetimePension2TaxableAmount: Yup.number().required("Required").test("Is positive?", "Must be a positive value", (value) => value > 0),
    })

    let ClientSuperAccount_onSubmit = (values) => {
      SuperhandleClose();
      let SuperAccountDetails = {
        Email: localStorage.getItem("ClientEmail"),
        Super_FundName: values.SuperFundName,
        Super_MemberNO: values.SuperMemberNo,
        Super_FundType: values.SuperFundType,
        Super_ContactNO: values.SuperContactNO,
        Super_FaxNO: values.SuperFaxNO,
        Super_PostalAddress: values.SuperPostalAddress,
        Super_ABN: values.SuperABN,
        Super_SPIN: values.SuperSPIN,
        Super_Website: values.SuperWebsite,
        Super_Email: values.SuperEmail,
        Super_FundType_2: values.SuperFundType2,
        Super_CommencementDate: values.SuperCommencementDate,
        Super_EligibleServiceDate: values.SuperEligibleDate,
        Super_TFN: values.SuperTFNQuoted,
        Super_CurrentBalance: values.SuperCurrentBalance,
        Super_TaxFree: values.SuperTaxFree,
        Super_Taxed: values.SuperTaxed,
        Super_Restricted: values.SuperRestrictionNonPreserved,
        Super_Unrestricted: values.SuperUnRestrictionNonPreserved,
        Super_PreservedAmount: values.SuperPreservedAmount
      }
      
      axios
      .patch(`http://localhost:7000/Client-Retirement/Update-Client-SuperAccount/${localStorage.getItem("EditClient")}`, SuperAccountDetails)
      .then((res) => console.log('Client Super Account Updated Successfully!'))
      console.log(SuperAccountDetails)
    }

    let PartnerSuperAccount_onSubmit = (values) => {
      
      Super2handleClose();
      let SuperAccountDetails = {
        Email: localStorage.getItem("ClientEmail"),
        Super_FundName: values.Super2FundName,
        Super_MemberNO: values.Super2MemberNo,
        Super_FundType: values.Super2FundType,
        Super_ContactNO: values.Super2ContactNO,
        Super_FaxNO: values.Super2FaxNO,
        Super_PostalAddress: values.Super2PostalAddress,
        Super_ABN: values.Super2ABN,
        Super_SPIN: values.Super2SPIN,
        Super_Website: values.Super2Website,
        Super_Email: values.Super2Email,
        Super_FundType_2: values.Super2FundType2,
        Super_CommencementDate: values.Super2CommencementDate,
        Super_EligibleServiceDate: values.Super2EligibleDate,
        Super_TFN: values.Super2TFNQuoted,
        Super_CurrentBalance: values.Super2CurrentBalance,
        Super_TaxFree: values.Super2TaxFree,
        Super_Taxed: values.Super2Taxed,
        Super_Restricted: values.Super2RestrictionNonPreserved,
        Super_Unrestricted: values.Super2UnRestrictionNonPreserved,
        Super_PreservedAmount: values.Super2PreservedAmount
      }
      
      axios
      .patch(`http://localhost:7000/Partner-Retirement/Update-Partner-SuperAccount/${localStorage.getItem("EditClient")}`, SuperAccountDetails)
      .then((res) => console.log('Partner Super Account Updated Successfully!'))
      console.log(SuperAccountDetails)
    }

    let ClientPensionAccount_onSubmit = (values) => {
      
      PensionhandleClose();
      let PensionAccountDetails = {
        Email: localStorage.getItem("ClientEmail"),
        AccountPension_FundName: values.PensionFundName,
        AccountPension_MemberNO: values.PensionMemberNo,
        AccountPension_FundType: values.PensionFundType,
        AccountPension_ContactNO: values.PensionContactNO,
        AccountPension_FaxNO: values.PensionFaxNO,
        AccountPension_PostalAddress: values.PensionPostalAddress,
        AccountPension_ABN: values.PensionABN,
        AccountPension_SPIN: values.PensionSPIN,
        AccountPension_Website: values.PensionWebsite,
        AccountPension_Email: values.PensionEmail,
        AccountPension_PensionType: values.PensionFundType2,
        AccountPension_CurrentBalance: values.PensionCurrentBalance,
        AccountPension_TaxFree: values.PensionTaxFree,
        AccountPension_Taxed: values.PensionTaxed,
        AccountPension_EligibleService: values.PensionEligibleDate,
        AccountPension_CommencementDate: values.PensionCommencementDate,
        AccountPension_OriginalPrice: values.PensionPurchasePrice,
        AccountPension_IncomeDrawn: values.PensionRegularIncomeDrawn,
        AccountPension_Frequency: values.PensionFrequency,
        AccountPension_MinimumRequired: values.PensionMinimumRequired,
        AccountPension_RelevantNumber: values.PensionRelevantNumber,
        AccountPension_LumpsumTaken: values.PensionLumpsumTaken,
        AccountPension_DeductibleAmount: values.PensionDeductibleAmount
      }
      
      axios
      .patch(`http://localhost:7000/Client-Retirement/Update-Client-PensionAccount/${localStorage.getItem("EditClient")}`, PensionAccountDetails)
      .then((res) => console.log('Client Pension Account Updated Successfully!'))
      console.log(PensionAccountDetails)
    }

    let PartnerPensionAccount_onSubmit = (values) => {
      
      PensionhandleClose();
      let PensionAccountDetails = {
        Email: localStorage.getItem("ClientEmail"),
        AccountPension_FundName: values.Pension2FundName,
        AccountPension_MemberNO: values.Pension2MemberNo,
        AccountPension_FundType: values.Pension2FundType,
        AccountPension_ContactNO: values.Pension2ContactNO,
        AccountPension_FaxNO: values.Pension2FaxNO,
        AccountPension_PostalAddress: values.Pension2PostalAddress,
        AccountPension_ABN: values.Pension2ABN,
        AccountPension_SPIN: values.Pension2SPIN,
        AccountPension_Website: values.Pension2Website,
        AccountPension_Email: values.Pension2Email,
        AccountPension_PensionType: values.Pension2FundType2,
        AccountPension_CurrentBalance: values.Pension2CurrentBalance,
        AccountPension_TaxFree: values.Pension2TaxFree,
        AccountPension_Taxed: values.Pension2Taxed,
        AccountPension_EligibleService: values.Pension2EligibleDate,
        AccountPension_CommencementDate: values.Pension2CommencementDate,
        AccountPension_OriginalPrice: values.Pension2PurchasePrice,
        AccountPension_IncomeDrawn: values.Pension2RegularIncomeDrawn,
        AccountPension_Frequency: values.Pension2Frequency,
        AccountPension_MinimumRequired: values.Pension2MinimumRequired,
        AccountPension_RelevantNumber: values.Pension2RelevantNumber,
        AccountPension_LumpsumTaken: values.Pension2LumpsumTaken,
        AccountPension_DeductibleAmount: values.Pension2DeductibleAmount
      }
      
      axios
      .patch(`http://localhost:7000/Partner-Retirement/Update-Partner-PensionAccount/${localStorage.getItem("EditClient")}`, PensionAccountDetails)
      .then((res) => console.log('Partner Pension Account Updated Successfully!'))
      console.log(PensionAccountDetails)
    }

    let ClientAnnuities_onSubmit = (values) => {

      AnnuitieshandleClose();
      let ClientAnnuitiesDetails = {
        Email: localStorage.getItem("ClientEmail"),
        Annuities_ProductProvider: values.AnnuitiesProductProvider,
        Annuities_InvestmentAmount: values.AnnuitiesOriginalInvestment,
        Annuities_CurrentValue: values.AnnuitiesCurrentValue,
        Annuities_AnnuityType: values.AnnuitiesAnnuityType,
        Annuities_RCV: values.AnnuitiesRCV,
        Annuities_Term: values.AnnuitiesTerm,
        Annuities_YearsUntilMaturity: values.AnnuitiesMaturityYears,
        Annuities_RegularIncome: values.AnnuitiesRegularIncomeDrawn,
        Annuities_Frequency: values.AnnuitiesFrequency,
        Annuities_AnnualInflation: values.AnnuitiesInflationRate
      }
      
      axios
      .patch(`http://localhost:7000/Client-Retirement/Update-Client-AnnuitiesAccount/${localStorage.getItem("EditClient")}`, ClientAnnuitiesDetails)
      .then((res) => console.log('Client Annuities Updated Successfully!'))
      console.log(ClientAnnuitiesDetails)
    }

    let PartnerAnnuities_onSubmit = (values) => {
      Annuities2handleClose();
      let PartnerAnnuitiesDetails = {
        Email: localStorage.getItem("ClientEmail"),
        Annuities_ProductProvider: values.Annuities2ProductProvider,
        Annuities_InvestmentAmount: values.Annuities2OriginalInvestment,
        Annuities_CurrentValue: values.Annuities2CurrentValue,
        Annuities_AnnuityType: values.Annuities2AnnuityType,
        Annuities_RCV: values.Annuities2RCV,
        Annuities_Term: values.Annuities2Term,
        Annuities_YearsUntilMaturity: values.Annuities2MaturityYears,
        Annuities_RegularIncome: values.Annuities2RegularIncomeDrawn,
        Annuities_Frequency: values.Annuities2Frequency,
        Annuities_AnnualInflation: values.Annuities2InflationRate
      }
      
      axios
      .patch(`http://localhost:7000/Partner-Retirement/Update-Partner-AnnuitiesAccount/${localStorage.getItem("EditClient")}`, PartnerAnnuitiesDetails)
      .then((res) => console.log('Partner Annuities Updated Successfully!'))
       console.log(PartnerAnnuitiesDetails)

    }

    let clientLifetimePensionData_onSubmit = (values) => {

      LifetimePensionhandleClose();
      let clientLifetimePensionDataDetails = {
        Email: localStorage.getItem("ClientEmail"),
        LifePension_FundName: values.LifetimePensionFundName,
        LifePension_RegularIncome: values.LifetimePensionIncomeDrawn,
        LifePension_Frequency: values.LifetimePensionFrequency,
        LifePension_DeductibleAmount: values.LifetimePensionDeductibleAmount,
        LifePension_TaxFree_Pension: values.LifetimePensionTaxFree,
        LifePension_TaxablePensionAmount: values.LifetimePensionTaxableAmount
      }
      
      axios
      .patch(`http://localhost:7000/Client-Retirement/Update-Client-Lifetime-PensionAccount/${localStorage.getItem("EditClient")}`, clientLifetimePensionDataDetails)
      .then((res) => console.log('Client Annuities Updated Successfully!'))
      console.log(clientLifetimePensionDataDetails)
    }

    let PartnerLifetimePension_onSubmit = (values) => {
      LifetimePension2handleClose();
      let PartnerLifetimePensionDetails = {
        Email: localStorage.getItem("ClientEmail"),
        LifePension_FundName: values.LifetimePension2FundName,
        LifePension_RegularIncome: values.LifetimePension2IncomeDrawn,
        LifePension_Frequency: values.LifetimePension2Frequency,
        LifePension_DeductibleAmount: values.LifetimePension2DeductibleAmount,
        LifePension_TaxFree_Pension: values.Lifetime2PensionTaxFree,
        LifePension_TaxablePensionAmount: values.LifetimePension2TaxableAmount
      }
      
      axios
      .patch(`http://localhost:7000/Partner-Retirement/Update-Partner-Lifetime-PensionAccount/${localStorage.getItem("EditClient")}`, PartnerLifetimePensionDetails)
      .then((res) => console.log('Partner Annuities Updated Successfully!'))
      console.log(PartnerLifetimePensionDetails)
    }

    let initialValues={
        SuperRadio: 'No',
        Super2Radio: 'No',

        PensionRadio: 'No',
        Pension2Radio: 'No',

        AnnuitiesRadio: 'No',
        Annuities2Radio: 'No',

        LifetimePensionRadio: 'No',
        LifetimePension2Radio: 'No'
    }

    let onSubmit = (Values) => {
      // Navigate('/Edit-SMSF')
      let myData={
        SuperRadio: Values.SuperRadio,
        Super2Radio: Values.Super2Radio,

        PensionRadio: Values.PensionRadio,
        Pension2Radio: Values.Pension2Radio,

        AnnuitiesRadio: Values.AnnuitiesRadio,
        Annuities2Radio: Values.Annuities2Radio,

        LifetimePensionRadio: Values.LifetimePensionRadio,
        LifetimePension2Radio: Values.LifetimePension2Radio

      }
        console.log(myData)

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
            <Formik 
            initialValues={initialValues}
             onSubmit={onSubmit}
              enableReinitialize>
              {({ values, handleChange })=>
                <Form>

                  {/* Super Details */}
                    <div className='mb-5'>
                          <h3 className="">Client Super Accounts</h3>

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
                                // validationSchema={Client_validationSchema}
                                onSubmit={ClientSuperAccount_onSubmit}>
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

                          <h3 className="">Partner Super Accounts</h3>

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
                                <input type="radio" name="Super2Radio"
                                id="Super2Radioopt1" value="Yes"
                                onClick={()=>Super2Handler("Yes")} 
                                onChange={handleChange}
                                checked={values.Super2Radio==="Yes"}
                                />
                                <label htmlFor="Super2Radioopt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="Super2Radio"
                                id="Super2Radioopt2" value="No"
                                onClick={()=>Super2Handler("No")} 
                                onChange={handleChange}
                                checked={values.Super2Radio==="No"}
                              />
                                <label htmlFor="Super2Radioopt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>



                                  
                                </div>
                                  </div>    
                              </div>
                              {Super2 && <div className='col-md-6'>
                              <label  className="form-label">
                              Please enter the details of your Super Accounts
                                </label>
                                <br />

                              <span
                                className=" btn h-50 w-50
                                btn-outline-success "
                                onClick={Super2handleShow}
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
                                show={Super2show}
                                onHide={Super2handleClose}
                                backdrop="static"
                                className="modal-lg"
                                keyboard={false}
                              >
                                <Modal.Header
                                  className="text-light modalBG "
                                  closeButton
                                >
                                  <Modal.Title className="fontStyle">
                                  Partner Super Account Details
                                    <div className="iconContainerLg">
                                <img className="img-fluid" src={notebook} alt="" />

                                </div>
                                  </Modal.Title>
                                </Modal.Header>
                              <Formik
                                initialValues={Partner_initialValues}
                                // validationSchema={Partner_validationSchema}
                                onSubmit={PartnerSuperAccount_onSubmit}>
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
                                    <label htmlFor="Super2FundName" className="form-label">Fund Name</   label>
                                    <Field
                                            as='select'
                                            name="Super2FundName"
                                            id="Super2FundName"
                                            className="form-select shadow  inputDesign"
                                            >
                                            <option value=''>Select</option>
                                            <option value="AMIST Super2">AMIST Super2</option>
                                            <option value="AMP Choice">AMP Choice</option>
                                            <option value="AMP North">AMP North</option>
                                            <option value="AMP South">AMP South</option>
                                            </Field>
                                            <ErrorMessage name="Super2FundName" component='div' className="text-danger fw-bold"/>
                                    </div>
                                    </div>  
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Super2MemberNo" className="form-label">Member No</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="Super2MemberNo" name='Super2MemberNo' placeholder="Member No"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='Super2MemberNo' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Super2FundType" className="form-label">Fund Type</   label>
                                    <Field
                                            as='select'
                                            name="Super2FundType"
                                            id="Super2FundType"
                                            className="form-select shadow  inputDesign"
                                            >
                                            <option value=''>Select</option>
                                            <option value="Personal Industry">Personal Industry</option>
                                            <option value="Personal Retail">Personal Retail</option>
                                            <option value="Personal Master">Personal Master</option>
                                            <option value="Personal WRAP">Personal WRAP</option>
                                            <option value="Personal Public Sector">Personal Public Sector</option>
                                            </Field>
                                            <ErrorMessage name="Super2FundType" component='div' className="text-danger fw-bold"/>
                                    </div>
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Super2ContactNO" className="form-label">Contact No</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="Super2ContactNO" name='Super2ContactNO' placeholder="Contact No"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='Super2ContactNO' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Super2FaxNO" className="form-label">Fax No</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="Super2FaxNO" name='Super2FaxNO' placeholder="Fax No"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='Super2FaxNO' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Super2PostalAddress" className="form-label">Postal Address</   label>
                                    <Field type="text" className="form-control shadow inputDesign" 
                                    id="Super2PostalAddress" name='Super2PostalAddress' placeholder="Postal Address"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='Super2PostalAddress' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Super2ABN" className="form-label">ABN</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="Super2ABN" name='Super2ABN' placeholder="ABN"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='Super2ABN' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Super2SPIN" className="form-label">SPIN</   label>
                                    <Field type="text" className="form-control shadow inputDesign" 
                                    id="Super2SPIN" name='Super2SPIN' placeholder="SPIN"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='Super2SPIN' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Super2Website" className="form-label">Website</   label>
                                    <Field type="text" className="form-control shadow inputDesign" 
                                    id="Super2Website" name='Super2Website' placeholder="Website"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='Super2Website' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Super2Email" className="form-label">Email</   label>
                                    <Field type="text" className="form-control shadow inputDesign" 
                                    id="Super2Email" name='Super2Email' placeholder="Email"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='Super2Email' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Super2FundType2" className="form-label">Fund Type</   label>
                                    <Field
                                            as='select'
                                            name="Super2FundType2"
                                            id="Super2FundType2"
                                            className="form-select shadow  inputDesign"
                                            >
                                            <option value=''>Select</option>
                                            <option value="Accumulation">Accumulation</option>
                                            <option value="Defined Benefit">Defined Benefit</option>
                                            </Field>
                                            <ErrorMessage name="Super2FundType2" component='div' className="text-danger fw-bold"/>
                                    </div>
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Super2CommencementDate" className="form-label">Commencment Date</   label>
                                    <Field type="date" className="form-control shadow inputDesign" 
                                    id="Super2CommencementDate" name='Super2CommencementDate'/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='Super2CommencementDate' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Super2EligibleDate" className="form-label">Eligible Service Date</   label>
                                    <Field type="date" className="form-control shadow inputDesign" 
                                    id="Super2EligibleDate" name='Super2EligibleDate'/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='Super2EligibleDate' />
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
                                <input type="radio" name="Super2TFNQuoted"
                                id="Super2TFNQuoted1opt1" value="Yes"
                                onChange={handleChange}
                                checked={values.Super2TFNQuoted==="Yes"}
                                />
                                <label htmlFor="Super2TFNQuoted1opt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="Super2TFNQuoted"
                                id="Super2TFNQuotedopt2" value="No"
                                onChange={handleChange}
                                checked={values.Super2TFNQuoted==="No"}
                              />
                                <label htmlFor="Super2TFNQuotedopt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>



                                  
                                </div>
                                  </div>    
                              </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Super2CurrentBalance" className="form-label">Current Balance</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="Super2CurrentBalance" name='Super2CurrentBalance' placeholder="Current Balance"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='Super2CurrentBalance' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Super2TaxFree" className="form-label">Tax Free</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="Super2TaxFree" name='Super2TaxFree' placeholder="Tax Free"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='Super2TaxFree' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Super2Taxed" className="form-label">Taxed</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="Super2Taxed" name='Super2Taxed' placeholder="Taxed"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='Super2Taxed' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Super2RestrictionNonPreserved" className="form-label">Restriction Non Preserved</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="Super2RestrictionNonPreserved" name='Super2RestrictionNonPreserved' placeholder="Restriction Non Preserved"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='Super2RestrictionNonPreserved' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Super2UnRestrictionNonPreserved" className="form-label">Un-Restriction Non Preserved</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="Super2UnRestrictionNonPreserved" name='Super2UnRestrictionNonPreserved' placeholder="UnRestriction Non Preserved"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='Super2UnRestrictionNonPreserved' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Super2PreservedAmount" className="form-label">Preserved Amount</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="Super2PreservedAmount" name='Super2PreservedAmount' placeholder="Preserved Amount"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='Super2PreservedAmount' />
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
                                      onClick={Super2handleClose}
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
                  <div className='my-5'>
                          <h3 className="">Client Pension Account</h3>

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
                                // validationSchema={Client_validationSchema}
                                onSubmit={ClientPensionAccount_onSubmit}>
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
                              <h3 className="">Partner Pension Account</h3>

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
                                <input type="radio" name="Pension2Radio"
                                id="Pension2Radioopt1" value="Yes"
                                onClick={()=>Pension2Handler("Yes")} 
                                onChange={handleChange}
                                checked={values.Pension2Radio==="Yes"}
                                />
                                <label htmlFor="Pension2Radioopt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="Pension2Radio"
                                id="Pension2Radioopt2" value="No"
                                onClick={()=>Pension2Handler("No")} 
                                onChange={handleChange}
                                checked={values.Pension2Radio==="No"}
                              />
                                <label htmlFor="Pension2Radioopt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>



                                  
                                </div>
                                  </div>    
                            </div>
                            {Pension2 && <div className='col-md-6'>
                            <label  className="form-label">
                            Please enter the details of your Pension Accounts
                                </label>
                                <br />
                              
                              <span
                                className=" btn h-50 w-50
                                btn-outline-success "
                                onClick={Pension2handleShow}
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
                                show={Pension2show}
                                onHide={Pension2handleClose}
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
                                initialValues={Partner_initialValues}
                                // validationSchema={Partner_validationSchema}
                                onSubmit={PartnerPensionAccount_onSubmit}>
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
                                    <label htmlFor="Pension2FundName" className="form-label">Fund Name</   label>
                                    <Field
                                            as='select'
                                            name="Pension2FundName"
                                            id="Pension2FundName"
                                            className="form-select shadow  inputDesign"
                                            >
                                            <option value=''>Select</option>
                                            <option value="AMIST Pension2">AMIST Pension2</option>
                                            <option value="AMP Choice">AMP Choice</option>
                                            <option value="AMP North">AMP North</option>
                                            <option value="AMP South">AMP South</option>
                                            </Field>
                                            <ErrorMessage name="Pension2FundName" component='div' className="text-danger fw-bold"/>
                                    </div>
                                    </div>  
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Pension2MemberNo" className="form-label">Member No</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="Pension2MemberNo" name='Pension2MemberNo' placeholder="Member No"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='Pension2MemberNo' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Pension2FundType" className="form-label">Fund Type</   label>
                                    <Field
                                            as='select'
                                            name="Pension2FundType"
                                            id="Pension2FundType"
                                            className="form-select shadow  inputDesign"
                                            >
                                            <option value=''>Select</option>
                                            <option value="Personal Industry">Personal Industry</option>
                                            <option value="Personal Retail">Personal Retail</option>
                                            <option value="Personal Master">Personal Master</option>
                                            <option value="Personal WRAP">Personal WRAP</option>
                                            <option value="Personal Public Sector">Personal Public Sector</option>
                                            </Field>
                                            <ErrorMessage name="Pension2FundType" component='div' className="text-danger fw-bold"/>
                                    </div>
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Pension2ContactNO" className="form-label">Contact No</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="Pension2ContactNO" name='Pension2ContactNO' placeholder="Contact No"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='Pension2ContactNO' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Pension2FaxNO" className="form-label">Fax No</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="Pension2FaxNO" name='Pension2FaxNO' placeholder="Fax No"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='Pension2FaxNO' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Pension2PostalAddress" className="form-label">Postal Address</   label>
                                    <Field type="text" className="form-control shadow inputDesign" 
                                    id="Pension2PostalAddress" name='Pension2PostalAddress' placeholder="Postal Address"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='Pension2PostalAddress' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Pension2ABN" className="form-label">ABN</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="Pension2ABN" name='Pension2ABN' placeholder="ABN"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='Pension2ABN' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Pension2SPIN" className="form-label">SPIN</   label>
                                    <Field type="text" className="form-control shadow inputDesign" 
                                    id="Pension2SPIN" name='Pension2SPIN' placeholder="SPIN"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='Pension2SPIN' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Pension2Website" className="form-label">Website</   label>
                                    <Field type="text" className="form-control shadow inputDesign" 
                                    id="Pension2Website" name='Pension2Website' placeholder="Website"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='Pension2Website' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Pension2Email" className="form-label">Email</   label>
                                    <Field type="text" className="form-control shadow inputDesign" 
                                    id="Pension2Email" name='Pension2Email' placeholder="Email"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='Pension2Email' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Pension2FundType2" className="form-label">Pension2 Type</   label>
                                    <Field
                                            as='select'
                                            name="Pension2FundType2"
                                            id="Pension2FundType2"
                                            className="form-select shadow  inputDesign"
                                            >
                                            <option value=''>Select</option>
                                            <option value="TTR">TTR</option>
                                            <option value="Account Based">Account Based</option>
                                            </Field>
                                            <ErrorMessage name="Pension2FundType2" component='div' className="text-danger fw-bold"/>
                                    </div>
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Pension2CommencementDate" className="form-label">Commencment Date</   label>
                                    <Field type="date" className="form-control shadow inputDesign" 
                                    id="Pension2CommencementDate" name='Pension2CommencementDate'/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='Pension2CommencementDate' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Pension2EligibleDate" className="form-label">Eligible Service Date</   label>
                                    <Field type="date" className="form-control shadow inputDesign" 
                                    id="Pension2EligibleDate" name='Pension2EligibleDate'/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='Pension2EligibleDate' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Pension2CurrentBalance" className="form-label">Current Balance</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="Pension2CurrentBalance" name='Pension2CurrentBalance' placeholder="Current Balance"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='Pension2CurrentBalance' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Pension2TaxFree" className="form-label">Tax Free</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="Pension2TaxFree" name='Pension2TaxFree' placeholder="Tax Free"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='Pension2TaxFree' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Pension2Taxed" className="form-label">Taxed</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="Pension2Taxed" name='Pension2Taxed' placeholder="Taxed"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='Pension2Taxed' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Pension2PurchasePrice" className="form-label">Original Purchase Price</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="Pension2PurchasePrice" name='Pension2PurchasePrice' placeholder="Original Purchase Price"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='Pension2PurchasePrice' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Pension2Frequency" className="form-label">Frequency</   label>
                                    <Field
                                            as='select'
                                            name="Pension2Frequency"
                                            id="Pension2Frequency"
                                            className="form-select shadow  inputDesign"
                                            >
                                            <option value=''>Select</option>
                                            <option value="Fortnightly">Fortnightly</option>
                                            <option value="Monthly">Monthly</option>
                                            <option value="Quarterly">Quarterly</option>
                                            <option value="Six Monthly">Six Monthly</option>
                                            <option value="Anually">Anually</option>
                                            </Field>
                                            <ErrorMessage name="Pension2Frequency" component='div' className="text-danger fw-bold"/>
                                    </div>
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Pension2RegularIncomeDrawn" className="form-label">Regular Income Drawn</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="Pension2RegularIncomeDrawn" name='Pension2RegularIncomeDrawn' placeholder="Regular Income Drawn"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='Pension2RegularIncomeDrawn' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Pension2MinimumRequired" className="form-label">Minimum Required</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="Pension2MinimumRequired" name='Pension2MinimumRequired' placeholder="Minimum Required"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='Pension2MinimumRequired' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Pension2RelevantNumber" className="form-label">Relevant Number</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="Pension2RelevantNumber" name='Pension2RelevantNumber' placeholder="Relevant Number"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='Pension2RelevantNumber' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Pension2LumpsumTaken" className="form-label">Lumpsum Withdrawl Taken</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="Pension2LumpsumTaken" name='Pension2LumpsumTaken' placeholder="Lumpsum Withdrawl Taken"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='Pension2LumpsumTaken' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Pension2DeductibleAmount" className="form-label">Deductible Amount</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="Pension2DeductibleAmount" name='Pension2DeductibleAmount' placeholder="Deductible Amount"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='Pension2DeductibleAmount' />
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
                                      onClick={Pension2handleClose}
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
                  <div className='my-5'>
                          <h3 className="">Client Annuities</h3>

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
                                // validationSchema={Client_validationSchema}
                                onSubmit={ClientAnnuities_onSubmit}>
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
                                    <Field type="number" className="form-control shadow inputDesign" 
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
                              
                              <h3 className="">Partner Annuities</h3>

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
                                <input type="radio" name="Annuities2Radio"
                                id="Annuities2Radioopt1" value="Yes"
                                onClick={()=>Annuities2Handler("Yes")} 
                                onChange={handleChange}
                                checked={values.Annuities2Radio==="Yes"}
                                />
                                <label htmlFor="Annuities2Radioopt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="Annuities2Radio"
                                id="Annuities2Radioopt2" value="No"
                                onClick={()=>Annuities2Handler("No")} 
                                onChange={handleChange}
                                checked={values.Annuities2Radio==="No"}
                              />
                                <label htmlFor="Annuities2Radioopt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>



                                  
                                </div>
                                  </div>    
                            </div>
                            {Annuities2 && <div className='col-md-6'>
                            <label  className="form-label">
                            Please enter the details of your Annuities Accounts
                                </label>
                                <br />
                              
                              <span
                                className=" btn h-50 w-50
                                btn-outline-success "
                                onClick={Annuities2handleShow}
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
                                show={Annuities2show}
                                onHide={Annuities2handleClose}
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
                                initialValues={Partner_initialValues}
                                // validationSchema={Partner_validationSchema}
                                onSubmit={PartnerAnnuities_onSubmit}>
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
                                    <label htmlFor="Annuities2ProductProvider" className="form-label">Product Provider</   label>
                                    <Field
                                            as='select'
                                            name="Annuities2ProductProvider"
                                            id="Annuities2ProductProvider"
                                            className="form-select shadow  inputDesign"
                                            >
                                            <option value=''>Select</option>
                                            <option value="Challenger">Challenger</option>
                                            <option value="CommInsure">CommInsure</option>
                                            <option value="Other">Other</option>
                                            </Field>
                                            <ErrorMessage name="Annuities2ProductProvider" component='div' className="text-danger fw-bold"/>
                                    </div>
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Annuities2OriginalInvestment" className="form-label">Original Investment Amount</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="Annuities2OriginalInvestment" name='Annuities2OriginalInvestment' placeholder="Original Investment Amount"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='Annuities2OriginalInvestment' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Annuities2CurrentValue" className="form-label">Current Value</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="Annuities2CurrentValue" name='Annuities2CurrentValue' placeholder="Current Value"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='Annuities2CurrentValue' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Annuities2AnnuityType" className="form-label">Annuity Type</   label>
                                    <Field
                                            as='select'
                                            name="Annuities2AnnuityType"
                                            id="Annuities2AnnuityType"
                                            className="form-select shadow  inputDesign"
                                            >
                                            <option value=''>Select</option>
                                            <option value="Short Term">Short Term</option>
                                            <option value="Long Term">Long Term</option>
                                            </Field>
                                            <ErrorMessage name="Annuities2AnnuityType" component='div' className="text-danger fw-bold"/>
                                    </div>
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Annuities2RCV" className="form-label">RCV</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="Annuities2RCV" name='Annuities2RCV' placeholder="RCV"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='Annuities2RCV' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Annuities2Term" className="form-label">Term</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="Annuities2Term" name='Annuities2Term' placeholder="Term"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='Annuities2Term' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Annuities2MaturityYears" className="form-label">Years Until Maturity</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="Annuities2MaturityYears" name='Annuities2MaturityYears' placeholder="Years Until Maturity"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='Annuities2MaturityYears' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Annuities2RegularIncomeDrawn" className="form-label">Regular Income Drawn</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="Annuities2RegularIncomeDrawn" name='Annuities2RegularIncomeDrawn' placeholder="Regular Income Drawn"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='Annuities2RegularIncomeDrawn' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Annuities2Frequency" className="form-label">Frequency</   label>
                                    <Field
                                            as='select'
                                            name="Annuities2Frequency"
                                            id="Annuities2Frequency"
                                            className="form-select shadow  inputDesign"
                                            >
                                            <option value=''>Select</option>
                                            <option value="Fortnightly">Fortnightly</option>
                                            <option value="Monthky">Monthky</option>
                                            <option value="Quarterly">Quarterly</option>
                                            <option value="Six Monthly">Six Monthly</option>
                                            <option value="Annually">Annually</option>
                                            </Field>
                                            <ErrorMessage name="Annuities2Frequency" component='div' className="text-danger fw-bold"/>
                                    </div>
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Annuities2InflationRate" className="form-label">Annual Inflation Rate</   label>
                                    <Field
                                            as='select'
                                            name="Annuities2InflationRate"
                                            id="Annuities2InflationRate"
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
                                            <ErrorMessage name="Annuities2InflationRate" component='div' className="text-danger fw-bold"/>
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
                                      onClick={Annuities2handleClose}
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
                  <div className='my-5'>
                          <h3 className="">Client Lifetime Pension</h3>

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
                                // validationSchema={Client_validationSchema}
                                onSubmit={clientLifetimePensionData_onSubmit}>
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
                              <h3 className="">Partner Lifetime Pension</h3>

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
                                <input type="radio" name="LifetimePension2Radio"
                                id="LifetimePension2Radioopt1" value="Yes"
                                onClick={()=>LifetimePension2Handler("Yes")} 
                                onChange={handleChange}
                                checked={values.LifetimePension2Radio==="Yes"}
                                />
                                <label htmlFor="LifetimePension2Radioopt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="LifetimePension2Radio"
                                id="LifetimePension2Radioopt2" value="No"
                                onClick={()=>LifetimePension2Handler("No")} 
                                onChange={handleChange}
                                checked={values.LifetimePension2Radio==="No"}
                              />
                                <label htmlFor="LifetimePension2Radioopt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>



                                  
                                </div>
                                  </div>    
                            </div>
                            {LifetimePension2 && <div className='col-md-6'>
                            <label  className="form-label">
                            Please enter the details of your Lifetime Pension Accounts
                                </label>
                                <br />
                              
                              <span
                                className=" btn h-50 w-50
                                btn-outline-success "
                                onClick={LifetimePension2handleShow}
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
                                show={LifetimePension2show}
                                onHide={LifetimePension2handleClose}
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
                                initialValues={Partner_initialValues}
                                // validationSchema={Partner_validationSchema}
                                onSubmit={PartnerLifetimePension_onSubmit}>
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
                                    <label htmlFor="LifetimePension2FundName" className="form-label">Fund Name</   label>
                                    <Field type="text" className="form-control shadow inputDesign" 
                                    id="LifetimePension2FundName" name='LifetimePension2FundName' placeholder="Fund Name"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='LifetimePension2FundName' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="LifetimePension2IncomeDrawn" className="form-label">Regular Income Drawn</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="LifetimePension2IncomeDrawn" name='LifetimePension2IncomeDrawn' placeholder="Regular Income Drawn"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='LifetimePension2IncomeDrawn' />
                                    </div>            
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="LifetimePension2Frequency" className="form-label">Frequency</   label>
                                    <Field
                                            as='select'
                                            name="LifetimePension2Frequency"
                                            id="LifetimePension2Frequency"
                                            className="form-select shadow  inputDesign"
                                            >
                                            <option value=''>Select</option>
                                            <option value="Fortnightly">Fortnightly</option>
                                            <option value="Monthky">Monthky</option>
                                            <option value="Quarterly">Quarterly</option>
                                            <option value="Six Monthly">Six Monthly</option>
                                            <option value="Annually">Annually</option>
                                            </Field>
                                            <ErrorMessage name="LifetimePension2Frequency" component='div' className="text-danger fw-bold"/>
                                    </div>
                                    </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="LifetimePension2DeductibleAmount" className="form-label">Deductible Amount</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="LifetimePension2DeductibleAmount" name='LifetimePension2DeductibleAmount' placeholder="Deductible Amount"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='LifetimePension2DeductibleAmount' />
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
                                <input type="radio" name="LifetimePension2TaxFree"
                                id="LifetimePension2opt1" value="Yes"
                                onChange={handleChange}
                                checked={values.LifetimePension2TaxFree==="Yes"}
                                />
                                <label htmlFor="LifetimePension2opt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="LifetimePension2TaxFree"
                                id="LifetimePension2opt2" value="No"
                                onChange={handleChange}
                                checked={values.LifetimePension2TaxFree==="No"}
                              />
                                <label htmlFor="LifetimePension2opt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>



                                  
                                </div>
                                  </div>    
                            </div>
                                    <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="LifetimePension2TaxableAmount" className="form-label">Taxable Pension Amount</   label>
                                    <Field type="number" className="form-control shadow inputDesign" 
                                    id="LifetimePension2TaxableAmount" name='LifetimePension2TaxableAmount' placeholder="Taxable Pension Amount"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='LifetimePension2TaxableAmount' />
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
                                      onClick={LifetimePension2handleClose}
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

export default Edit_SuperRetriement