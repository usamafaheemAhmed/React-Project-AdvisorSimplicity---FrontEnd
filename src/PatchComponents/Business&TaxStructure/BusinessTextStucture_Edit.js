import React, { useState,useEffect } from "react";
import Modal from "react-bootstrap/Modal";


import "./businessTextStructure.css"
import building from"./images/building.svg"
import plus from "./images/plus.svg"
import dealdone from "./images/deal-done.svg"
import businessman from "./images/businessman.svg"
import businessmen from "./images/businessmen.svg"
import trustbuilding from "./images/trustbuilding.svg"
import notebook from "./images/notebook.svg"

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BusinessTextStucture = () => {

  const [MyClient, setMyClient] = useState([]);
  const [ClientSoleTrader, setClientSoleTrader] = useState([]);
  const [PartnerSoleTrader, setPartnerSoleTrader] = useState([]);
  const [ClientPartnership, setClientPartnership] = useState([]);
  const [ClientPrivateCompany, setClientPrivateCompany] = useState([]);
  const [ClientBusinessTrust, setClientBusinessTrust] = useState([]);

 let partner= window.localStorage.getItem("partner");
 const [isPartnered, setIsPartnered] = useState()

 useEffect(() => {
    if(partner=="true"){
      setIsPartnered(true)
    }
    else{
      setIsPartnered(false)
    }

    // Client Business
    axios
    .get('http://localhost:7000/Client-Business')
    .then((res) => {
      let DataLength = res.data.length;

      for (let i = 0; i < DataLength; i++){
        if(res.data[i].Email === localStorage.getItem("EditClient")){
          setMyClient(res.data[i])
        }
        else{
          console.log('Not Matched!')
        }
      }
    })
    
    // Client Sole Trader Modal
    axios
    .get('http://localhost:7000/Client-SoleTrader-Business')
    .then((res) => {
      let Client_SoleDataLength = res.data.length;

      for (let i = 0; i < Client_SoleDataLength; i++){
        if(res.data[i].Email === localStorage.getItem("EditClient")){
          setClientSoleTrader(res.data[i])
        }
        else{
          console.log('Not Matched!')
        }
      }
    })
    
    // Partner Sole Trader Modal
    axios
    .get('http://localhost:7000/Partner-SoleTrader-Business')
    .then((res) => {
      let Partner_SoleDataLength = res.data.length;

      for (let i = 0; i < Partner_SoleDataLength; i++){
        if(res.data[i].Email === localStorage.getItem("EditClient")){
          setPartnerSoleTrader(res.data[i])
        }
        else{
          console.log('Not Matched!')
        }
      }
    })
    
    // Partnership Trader Modal
    axios
    .get('http://localhost:7000/Client-Partnership-Business')
    .then((res) => {
      let Client_PartnershipDataLength = res.data.length;

      for (let i = 0; i < Client_PartnershipDataLength; i++){
        if(res.data[i].Email === localStorage.getItem("EditClient")){
          setClientPartnership(res.data[i])
        }
        else{
          console.log('Not Matched!')
        }
      }
    })
    
    // Private Company Trader Modal
    axios
    .get('http://localhost:7000/Client-PrivateCompany-Business')
    .then((res) => {
      let Client_PrivateCompanyDataLength = res.data.length;

      for (let i = 0; i < Client_PrivateCompanyDataLength; i++){
        if(res.data[i].Email === localStorage.getItem("EditClient")){
          setClientPrivateCompany(res.data[i])
        }
        else{
          console.log('Not Matched!')
        }
      }
    })
    
    // Business Trust Trader Modal
    axios
    .get('http://localhost:7000/Client-BusinessTrust-Business')
    .then((res) => {
      let Client_BusinessTrustDataLength = res.data.length;

      for (let i = 0; i < Client_BusinessTrustDataLength; i++){
        if(res.data[i].Email === localStorage.getItem("EditClient")){
          setClientBusinessTrust(res.data[i])
        }
        else{
          console.log('Not Matched!')
        }
      }
    })


 }, [])
 
  let letters = /^[a-zA-Z ]*$/;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [showPartnership, setShowPartnership] = useState(false);
  const handleClosePartnership = () => setShowPartnership(false);
  const handleShowPartnership = () => setShowPartnership(true);

  const [showPartner, setShowPartner] = useState(false);
  const handleClosePartner = () => setShowPartner(false);
  const handleShowPartner = () => setShowPartner(true);

  const [showPrivate, setShowPrivate] = useState(false);
  const handleClosePrivate = () => setShowPrivate(false);
  const handleShowPrivate = () => setShowPrivate(true);

  const [showTrust, setShowTrust] = useState(false);
  const handleCloseTrust = () => setShowTrust(false);
  const handleShowTrust = () => setShowTrust(true);

  const [DistributionsTakenState, setDistributionsTakenState] = useState(false);
  const [dividendsTakenAsCash, setDividendsTakenAsCash] = useState(false)


  let DistributionsTakenHandler=(elem)=>{
    if (elem==="No"){
      setDistributionsTakenState(false)
    }
    else{
      setDistributionsTakenState(true)
    }
    
    }
  let dividendsTakenAsCashHandler=(elem)=>{
      if (elem==="No"){
        setDividendsTakenAsCash(false)
      }
      else{
        setDividendsTakenAsCash(true)
      }
      
    }

  let initialValues =  {
    soleBusinessName: MyClient.Sole_BusinessName,
    soleBusinessType: MyClient.Sole_BusinessType,
    soleIncomeGenerated: MyClient.Sole_IncomeGenerated,
    soleBusinessExpenses: MyClient.Sole_BusinessExpenses,
    soleNetBusinessIncome: MyClient.Sole_NetBusinessIncome,
    
    solePartnerBusinessName:  MyClient.Sole_BusinessName,
    solePartnerBusinessType: MyClient.Sole_BusinessType,
    solePartnerIncomeGenerated: MyClient.Sole_IncomeGenerated,
    solePartnerBusinessExpenses: MyClient.Sole_BusinessExpenses,
    solePartnerNetBusinessIncome: MyClient.Sole_NetBusinessIncome,

    clientsShareofPartnership: MyClient.Partnership_OwnPercentage,
    partnersShareofPartnership: MyClient.Partnership_PartnerPercentage,
    partnershipName: MyClient.Partnership_BusinessName,
    businessType: MyClient.Partnership_BusinessType,
    incomeGenerated: MyClient.Partnership_IncomeGenerated,
    businessExpenses: MyClient.Partnership_BusinessExpenses,
    NetbusinessincomePartnership: MyClient.Partnership_NetBusinessIncome,

    privateNameOfCompany: MyClient.PrivateCompany_Name,
    privateNetAssetValueofCompany: MyClient.PrivateCompany_NetAssetValue,
    privateTradingName: MyClient.PrivateCompany_TradingName,
    privateTotalRevenue: MyClient.PrivateCompany_TotalRevenue,
    privateBusinessType: MyClient.PrivateCompany_BusinessType,
    PrivatebusinessExpenses: MyClient.PrivateCompany_Expense,
    privateDirectorsDetail: MyClient.PrivateCompany_DirectorDetails,
    privateClientsshareholding: MyClient.PrivateCompany_ClientShare,
    privatePartnersShareholding: MyClient.PrivateCompany_PartnerShare,
    dividendsTakenradio: MyClient.PrivateCompany_DividendCash,
    privateClient: MyClient.PrivateCompany_ClientPercentage,
    privatePartner: MyClient.PrivateCompany_PartnerPercentage,
    privateTotalNetProfitAfterTax: MyClient.PrivateCompany_NetProfit_AfterTax,

    NameofTrust: MyClient.BusinessTrust_Name,
    netAssetValueofBusinessTrust: MyClient.BusinessTrust_NetAssetValue,
    trustTradingName: MyClient.BusinessTrust_TradingName,
    trustTotalRevenue: MyClient.BusinessTrust_TotalRevenue,
    trustBusinessType: MyClient.BusinessTrust_BusinessType,
    trustBusinessExpenses: MyClient.BusinessTrust_Expense,
    trustClientShareofDistribution: MyClient.BusinessTrust_ClientShare,
    trustPartnerShareofDistribution: MyClient.BusinessTrust_PartnerShare,
    DistributionsTakenradio: MyClient.BusinessTrust_DistributionCash,
    trustClient: MyClient.BusinessTrust_ClientPercentage,
    trustPartner: MyClient.BusinessTrust_PartnerPercentage,
    trustTotalNetProfitToDistribute: MyClient.BusinessTrust_NetProfit_AfterTax
  }
  let validationSchema = Yup.object({
    soleBusinessName: Yup.string().matches(letters, "Only letters").required('Required') ,
    soleBusinessType: Yup.string().matches(letters, "Only letters").required('Required') ,
    soleIncomeGenerated:Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    soleBusinessExpenses:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    // soleNetBusinessIncome: Yup.number(),
    
    solePartnerBusinessName:Yup.string().matches(letters, "Only letters").required('Required'),
    solePartnerBusinessType: Yup.string().matches(letters, "Only letters").required('Required'),
    solePartnerIncomeGenerated:Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    solePartnerBusinessExpenses: Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    

    clientsShareofPartnership:Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    partnersShareofPartnership:Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    partnershipName: Yup.string().matches(letters, "Only letters").required('Required'),
    businessType: Yup.string().matches(letters, "Only letters").required('Required'),
    incomeGenerated: Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    businessExpenses:Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),

    privateNameOfCompany: Yup.string().matches(letters, "Only letters").required('Required'),
    privateNetAssetValueofCompany: Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    privateTradingName: Yup.string().matches(letters, "Only letters").required('Required'),
    privateTotalRevenue: Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    privateBusinessType: Yup.string().matches(letters, "Only letters").required('Required'),
    PrivatebusinessExpenses: Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    privateDirectorsDetail: Yup.string().required('Required'),
    privateClientsshareholding: Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    privatePartnersShareholding: Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    privateClient:Yup.number()
    .when('dividendsTakenradio',{
      is: val => val && val.length ===3,
      then:Yup.number().required("Required")
      .test(
        "Is positive?",
        "Must be a positive number",
        (value)=> value >0
      ),
      otherwise: Yup.number().notRequired()
    }),
    privatePartner:Yup.number()
    .when('dividendsTakenradio',{
      is: val => val && val.length ===3,
      then:Yup.number().required("Required")
      .test(
        "Is positive?",
        "Must be a positive number",
        (value)=> value >0
      ),
      otherwise: Yup.number().notRequired()
    }),

    NameofTrust:Yup.string().matches(letters, "Only letters").required('Required'),
    netAssetValueofBusinessTrust: Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    trustTradingName: Yup.string().matches(letters, "Only letters").required('Required'),
    trustTotalRevenue: Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    trustBusinessType: Yup.string().matches(letters, "Only letters").required('Required'),
    trustBusinessExpenses: Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    trustClientShareofDistribution: Yup.number().required("Required")
    .test(
      "Is positive?",
      "Age must be a positive number",
      (value) => value > 0
    ),
    trustPartnerShareofDistribution:Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    trustClient:Yup.number()
    .when('DistributionsTakenradio',{
      is: val => val && val.length ===3,
      then:Yup.number().required("Required")
      .test(
        "Is positive?",
        "Must be a positive number",
        (value)=> value >0
      ),
      otherwise: Yup.number().notRequired()
    }),
    trustPartner: Yup.number()
    .when('DistributionsTakenradio',{
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
  let singlevalidationSchema = Yup.object({
    soleBusinessName: Yup.string().matches(letters, "Only letters").required('Required') ,
    soleBusinessType: Yup.string().matches(letters, "Only letters").required('Required') ,
    soleIncomeGenerated:Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    soleBusinessExpenses:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    // soleNetBusinessIncome: Yup.number(),
    
    
    clientsShareofPartnership:Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    partnersShareofPartnership:Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    partnershipName: Yup.string().matches(letters, "Only letters").required('Required'),
    businessType: Yup.string().matches(letters, "Only letters").required('Required'),
    incomeGenerated: Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    businessExpenses:Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),

    privateNameOfCompany: Yup.string().matches(letters, "Only letters").required('Required'),
    privateNetAssetValueofCompany: Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    privateTradingName: Yup.string().matches(letters, "Only letters").required('Required'),
    privateTotalRevenue: Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    privateBusinessType: Yup.string().matches(letters, "Only letters").required('Required'),
    PrivatebusinessExpenses: Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    privateDirectorsDetail: Yup.string().required('Required'),
    privateClientsshareholding: Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    privatePartnersShareholding: Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    privateClient:Yup.number()
    .when('dividendsTakenradio',{
      is: val => val && val.length ===3,
      then:Yup.number().required("Required")
      .test(
        "Is positive?",
        "Must be a positive number",
        (value)=> value >0
      ),
      otherwise: Yup.number().notRequired()
    }),
    privatePartner:Yup.number()
    .when('dividendsTakenradio',{
      is: val => val && val.length ===3,
      then:Yup.number().required("Required")
      .test(
        "Is positive?",
        "Must be a positive number",
        (value)=> value >0
      ),
      otherwise: Yup.number().notRequired()
    }),

    NameofTrust:Yup.string().matches(letters, "Only letters").required('Required'),
    netAssetValueofBusinessTrust: Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    trustTradingName: Yup.string().matches(letters, "Only letters").required('Required'),
    trustTotalRevenue: Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    trustBusinessType: Yup.string().matches(letters, "Only letters").required('Required'),
    trustBusinessExpenses: Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    trustClientShareofDistribution: Yup.number().required("Required")
    .test(
      "Is positive?",
      "Age must be a positive number",
      (value) => value > 0
    ),
    trustPartnerShareofDistribution:Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    trustClient:Yup.number()
    .when('DistributionsTakenradio',{
      is: val => val && val.length ===3,
      then:Yup.number().required("Required")
      .test(
        "Is positive?",
        "Must be a positive number",
        (value)=> value >0
      ),
      otherwise: Yup.number().notRequired()
    }),
    trustPartner: Yup.number()
    .when('DistributionsTakenradio',{
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

  let Navigate = useNavigate();

  function BackFunction(){
    Navigate('/Edit-Client')
  }
  let onSubmit = (values) => {
    let ClientBusinessDetails={

      Email: localStorage.getItem("EditClient"),

      Sole_BusinessName:values.soleBusinessName,
      Sole_BusinessType:values.soleBusinessType,
      Sole_IncomeGenerated:values.soleIncomeGenerated,
      Sole_BusinessExpenses:values.soleBusinessExpenses,
      Sole_NetBusinessIncome:5000,
      
      // **** PARTNERSHIP ****
  
      Partnership_OwnPercentage:values.clientsShareofPartnership,
      Partnership_PartnerPercentage:values.partnersShareofPartnership,
      Partnership_BusinessName:values.partnershipName,
      Partnership_BusinessType:values.businessType,
      Partnership_IncomeGenerated:values.incomeGenerated,
      Partnership_BusinessExpenses:values.businessExpenses,
      Partnership_NetBusinessIncome:5000,
  
      // ** PRIVATE COMPANY ***
  
      PrivateCompany_Name:values.privateNameOfCompany,
      PrivateCompany_TradingName:values.privateTradingName,
      PrivateCompany_BusinessType: values.privateBusinessType,
      PrivateCompany_DirectorDetails: values.privateDirectorsDetail,
      PrivateCompany_ClientShare: values.privateClientsshareholding,
      PrivateCompany_PartnerShare:values.privatePartnersShareholding,
      PrivateCompany_DividendCash: values.dividendsTakenradio,
      PrivateCompany_ClientPercentage: values.privateClient,
      PrivateCompany_PartnerPercentage: values.privatePartner,
      PrivateCompany_NetAssetValue: values.privateNetAssetValueofCompany,
      PrivateCompany_TotalRevenue: values.privateTotalRevenue,
      PrivateCompany_Expense: values.PrivatebusinessExpenses,
      PrivateCompany_NetProfit_AfterTax: 5000, //will get value after calculation
     
      // **** BUSINESS TRUST ***
  
      BusinessTrust_Name: values.NameofTrust,
      BusinessTrust_TradingName:values.trustTradingName,
      BusinessTrust_BusinessType: values.trustBusinessType,
      BusinessTrust_ClientShare:values.trustClientShareofDistribution,
      BusinessTrust_PartnerShare:values.trustPartnerShareofDistribution,
      BusinessTrust_DistributionCash:values.DistributionsTakenradio, // radio
      BusinessTrust_NetAssetValue:values.netAssetValueofBusinessTrust,
      BusinessTrust_TotalRevenue:values.trustTotalRevenue,
      BusinessTrust_Expense: values.trustBusinessExpenses,
      BusinessTrust_NetProfit_AfterTax:5000, // to be added
      BusinessTrust_ClientPercentage:values.trustClient,
      BusinessTrust_PartnerPercentage:values.trustPartner,
  
      }
      let PartnerBusinessDetails={
        
        Email: localStorage.getItem("EditClient"),
        Sole_BusinessName:values.solePartnerBusinessName,
        Sole_BusinessType:values.solePartnerBusinessType,
        Sole_IncomeGenerated:values.solePartnerIncomeGenerated,
        Sole_BusinessExpenses:values.solePartnerBusinessExpenses,
        Sole_NetBusinessIncome:5000, //to be added
      }


        if(isPartnered===true){
        axios
        .patch(`http://localhost:7000/Client-Business/Update-Client-Business/${localStorage.getItem("EditClient")}`, ClientBusinessDetails)
        .then((res) => console.log("Client Business Updated Successfully!"))
        
        Navigate('/Edit-Income-And-Expenses')    

        axios
        .patch(`http://localhost:7000/Partner-Business/Update-Partner-Business/${localStorage.getItem("EditClient")}`, PartnerBusinessDetails)
        .then((res) => console.log("Partner Business Updated Successfully!"))

        console.log(ClientBusinessDetails)
        console.log(PartnerBusinessDetails)
      }
      else{
       axios
        .patch(`http://localhost:7000/Client-Business/Update-Client-Business/${localStorage.getItem("EditClient")}`, ClientBusinessDetails)
        .then((res) => console.log("Client Business Updated Successfully!"))
       Navigate('/Edit-Income-And-Expenses')
        
      console.log(ClientBusinessDetails)

      }    
  }

  let ClientModal_initialValues = {
    soleBusinessExpenses: ClientSoleTrader.Sole_ExpenseNumber,
    soleRent: ClientSoleTrader.Sole_Rent,
    soleLeaseCosts: ClientSoleTrader.Sole_LeaseCost,
    soleInsurances: ClientSoleTrader.Sole_Insurance,
    soleStaffCosts: ClientSoleTrader.Sole_StaffCost,
    soleRunningCosts: ClientSoleTrader.Sole_RunningCost,
    soleTelephoneAndInternet: ClientSoleTrader.Sole_TelephoneInternet,
    soleProfessionalFees: ClientSoleTrader.Sole_ProfessionalFees,
    soleAllOther: ClientSoleTrader.Sole_AllOther
  }
  let ClientModal_validationSchema = Yup.object({
    soleBusinessExpenses: Yup.number(),
    soleRent: Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    soleLeaseCosts: Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    soleInsurances: Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    soleStaffCosts: Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    soleRunningCosts: Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    soleTelephoneAndInternet: Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    soleProfessionalFees: Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    soleAllOther:Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
  })
  let ClientModal_onSubmit = (Values) => {
     let Client_SoleTraderDetails={
      Email: localStorage.getItem("ClientEmail"),
      Sole_ExpenseNumber:Values.soleBusinessExpenses,
      Sole_Rent:Values.soleRent,
      Sole_LeaseCost:Values.soleLeaseCosts,
      Sole_Insurance: Values.soleInsurances,
      Sole_StaffCost:Values.soleStaffCosts,
      Sole_RunningCost: Values.soleRunningCosts,
      Sole_TelephoneInternet: Values.soleTelephoneAndInternet,
      Sole_ProfessionalFees:Values.soleProfessionalFees,
      Sole_AllOther: Values.soleAllOther
    }
    console.log(Client_SoleTraderDetails);

    axios
    .patch(`http://localhost:7000/Client-SoleTrader-Business/Update-Client-SoleTrader/${localStorage.getItem("EditClient")}`, Client_SoleTraderDetails)
    .then((res) => console.log("Client SoleTrader Updated Successfully!"))
    handleClose();
  }


  let PartnerModal_initialValues = {
    solePartnerBusinessExpenses2: PartnerSoleTrader.Sole_ExpenseNumber,
    solePartnerRent: PartnerSoleTrader.Sole_Rent,
    soleLeaseCosts: PartnerSoleTrader.Sole_LeaseCost,
    solePartnerInsurances: PartnerSoleTrader.Sole_Insurance,
    solePartnerStaffCosts: PartnerSoleTrader.Sole_StaffCost,
    solePartnerRunningCosts: PartnerSoleTrader.Sole_RunningCost,
    solePartnerTelephoneAndInternet: PartnerSoleTrader.Sole_TelephoneInternet,
    solePartnerProfessionalFees: PartnerSoleTrader.Sole_ProfessionalFees,
    solePartnerAllOther: PartnerSoleTrader.Sole_AllOther
  }
  let PartnerModal_validationSchema = Yup.object({
    solePartnerRent:Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    soleLeaseCosts: Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    solePartnerInsurances: Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    solePartnerStaffCosts: Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    solePartnerRunningCosts: Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    solePartnerTelephoneAndInternet: Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    solePartnerProfessionalFees: Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    solePartnerAllOther: Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
  })
  let PartnerModal_onSubmit = (Values) => {
    let Partner_SoleTraderDetails={
      
      Email: localStorage.getItem("EditClient"),
      Sole_ExpenseNumber:Values.solePartnerBusinessExpenses2,
      Sole_Rent:Values.solePartnerRent,
      Sole_LeaseCost:Values.soleLeaseCosts,
      Sole_Insurance: Values.solePartnerInsurances,
      Sole_StaffCost:Values.solePartnerStaffCosts,
      Sole_RunningCost: Values.solePartnerRunningCosts,
      Sole_TelephoneInternet: Values.solePartnerTelephoneAndInternet,
      Sole_ProfessionalFees:Values.solePartnerProfessionalFees,
      Sole_AllOther: Values.solePartnerAllOther
    }
    console.log(Partner_SoleTraderDetails);

    axios
    .patch(`http://localhost:7000/Partner-SoleTrader-Business/Update-Partner-SoleTrader/${localStorage.getItem("EditClient")}`, Partner_SoleTraderDetails)
    .then((res) => console.log("Partner SoleTrader Updated Successfully!"))
handleClosePartner();
  }


  let Partnership_initialValues = {
    partnershipBusinessExpenses: ClientPartnership.Partnership_ExpenseNumber,
    partnershipRent: ClientPartnership.Partnership_Rent,
    partnershipLeaseCosts: ClientPartnership.Partnership_LeaseCost,
    partnershipInsurances: ClientPartnership.Partnership_Insurance,
    partnershipStaffCostWages: ClientPartnership.Partnership_StaffCost,
    partnershipWageTakingByClient: ClientPartnership.Partnership_ClientWage,
    partnerWageTakenByPartner: ClientPartnership.Partnership_PartnerWage,
    partnershipRunningCosts: ClientPartnership.Partnership_RunningCost,
    partnershipTelephoneAndInternet: ClientPartnership.Partnership_TelephoneInternet,
    partnershipProfessionalFees: ClientPartnership.Partnership_ProfessionalFees,
    partnershipAllOther: ClientPartnership.Partnership_AllOther
  }
  let Partnership_validationSchema = Yup.object({
    partnershipRent: Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    partnershipLeaseCosts: Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    partnershipInsurances: Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    partnershipStaffCostWages: Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    partnershipWageTakingByClient:Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    partnerWageTakenByPartner: Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    partnershipRunningCosts: Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    partnershipTelephoneAndInternet: Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    partnershipProfessionalFees: Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    partnershipAllOther: Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
  })
  let Partnership_onSubmit = (Values) => {
    let Client_PartnershipDetails = {
      Email: localStorage.getItem("EditClient"),
    Partnership_ExpenseNumber:Values.partnershipBusinessExpenses,
    Partnership_Rent: Values.partnershipRent,
    Partnership_LeaseCost: Values.partnershipLeaseCosts,
    Partnership_Insurance:Values.partnershipInsurances,
    Partnership_StaffCost:Values. partnershipStaffCostWages,
    Partnership_ClientWage:Values.partnershipWageTakingByClient,
    Partnership_PartnerWage:  Values.partnerWageTakenByPartner,
    Partnership_RunningCost: Values.partnershipRunningCosts,
    Partnership_TelephoneInternet: Values.partnershipTelephoneAndInternet,
    Partnership_ProfessionalFees:Values.partnershipProfessionalFees ,
    Partnership_AllOther:Values.partnershipAllOther,
  }
  console.log(Client_PartnershipDetails)
  axios
  .patch(`http://localhost:7000/Client-Partnership-Business/Update-Client-Partnership/${localStorage.getItem("EditClient")}`, Client_PartnershipDetails)
  .then((res) => console.log("Partnership Updated Successfully!"))
    handleClosePartnership();
  }


  let BusinessExpense_initialValues = {
    trustBusinessExpenses5: ClientBusinessTrust.BusinessTrust_ExpenseNumber,
    trustRent: ClientBusinessTrust.BusinessTrust_Rent,
    trustLeaseCosts: ClientBusinessTrust.BusinessTrust_LeaseCost,
    trustInsurances: ClientBusinessTrust.BusinessTrust_Insurance,
    trustRunningCosts: ClientBusinessTrust.BusinessTrust_RunningCost,
    trustStaffCostWages: ClientBusinessTrust.BusinessTrust_StaffCost,
    trustWageTakingByClient: ClientBusinessTrust.BusinessTrust_ClientWage,
    trustSuperForClient: ClientBusinessTrust.BusinessTrust_ClientSuper,
    trustWageTakenByPartner: ClientBusinessTrust.BusinessTrust_PartnerWage,
    trustSuperForPartner: ClientBusinessTrust.BusinessTrust_PartnerSuper,
    trustTelephoneAndInternet: ClientBusinessTrust.BusinessTrust_TelephoneInternet,
    trustProfessionalFees: ClientBusinessTrust.BusinessTrust_ProfessionalFees,
    trustAllOther: ClientBusinessTrust.BusinessTrust_AllOther,
    trustLoanRepayments: ClientBusinessTrust.BusinessTrust_LoanRepayments
  }
  let BusinessExpense_validationSchema = Yup.object({
    trustRent: Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    trustLeaseCosts: Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    trustInsurances: Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    trustRunningCosts: Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    trustStaffCostWages: Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    trustWageTakingByClient: Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    trustSuperForClient: Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    trustWageTakenByPartner: Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    trustSuperForPartner: Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    trustTelephoneAndInternet: Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    trustProfessionalFees: Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    trustAllOther: Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    trustLoanRepayments:Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
  })
  let BusinessExpense_onSubmit = (Values) => {
    let BusinessTrustDetails={
      
      Email: localStorage.getItem("EditClient"),
      BusinessTrust_ExpenseNumber: Values.trustBusinessExpenses5,
      BusinessTrust_Rent:Values.trustRent,
      BusinessTrust_LeaseCost:Values.trustLeaseCosts,
      BusinessTrust_Insurance:Values.trustInsurances,
      BusinessTrust_StaffCost:Values.trustStaffCostWages,
      BusinessTrust_ClientWage:Values.trustWageTakingByClient,
      BusinessTrust_ClientSuper:Values.trustSuperForClient,
      BusinessTrust_PartnerWage:Values.trustWageTakenByPartner,
      BusinessTrust_PartnerSuper:Values.trustSuperForPartner,
      BusinessTrust_RunningCost:Values.trustRunningCosts,
      BusinessTrust_TelephoneInternet:Values.trustTelephoneAndInternet,
      BusinessTrust_ProfessionalFees: Values.trustProfessionalFees,
      BusinessTrust_AllOther:Values.trustAllOther,
      BusinessTrust_LoanRepayments:Values.trustLoanRepayments,}
  
     console.log(BusinessTrustDetails)

     axios
     .patch(`http://localhost:7000/Client-BusinessTrust-Business/Update-Client-BusinessTrust/${localStorage.getItem("EditClient")}`, BusinessTrustDetails)
     .then((res) => console.log("Business Trust Updated Successfully!"))
   handleCloseTrust();
  }


  let initialValuesPrivate={
    privateBusinessExpensesNumber: ClientPrivateCompany.PrivateCompany_ExpenseNumber,
    privateRent: ClientPrivateCompany.PrivateCompany_Rent,
    privateLeaseCosts: ClientPrivateCompany.PrivateCompany_LeaseCost,
    privateInsurances: ClientPrivateCompany.PrivateCompany_Insurance,
    privateRunningCosts: ClientPrivateCompany.PrivateCompany_RunningCost,
    privateStaffCostWages: ClientPrivateCompany.PrivateCompany_StaffCost,
    privateWageTakingByClient: ClientPrivateCompany.PrivateCompany_ClientWage,
    privateSuperForClient: ClientPrivateCompany.PrivateCompany_ClientSuper,
    privateWageTakenByPartner: ClientPrivateCompany.PrivateCompany_PartnerWage,
    privateSuperForPartner: ClientPrivateCompany.PrivateCompany_PartnerSuper,
    privateTelephoneAndInternet: ClientPrivateCompany.PrivateCompany_TelephoneInternet,
    privateProfessionalFees: ClientPrivateCompany.PrivateCompany_ProfessionalFees,
    privateAllOther: ClientPrivateCompany.PrivateCompany_AllOther,
    privateLoanRepayments: ClientPrivateCompany.PrivateCompany_LoanRepayments    
  }
  let validationSchemaPrivate=Yup.object({
    privateRent:Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    privateLeaseCosts:Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    privateInsurances:Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    privateRunningCosts:Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    privateStaffCostWages:Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    privateWageTakingByClient:Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    privateSuperForClient:Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    privateWageTakenByPartner:Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    privateSuperForPartner:Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    privateTelephoneAndInternet:Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    privateProfessionalFees:Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    privateAllOther:Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
    privateLoanRepayments:Yup.number().required("Required").test(
      "Is positive?",
      "Must be a positive number",
      (value)=> value >0
    ),
  })
  let onSubmitPrivate=(values)=>{
    let PrivateCompanyDetails={
      Email: localStorage.getItem("EditClient"),
      PrivateCompany_ExpenseNumber: values.privateBusinessExpensesNumber, //  we will get value later of id  "privateBusinessExpenses"
      PrivateCompany_Rent:values.privateRent,
      PrivateCompany_LeaseCost:values.privateLeaseCosts,
      PrivateCompany_Insurance:values.privateInsurances,
      PrivateCompany_StaffCost:values.privateStaffCostWages,
      PrivateCompany_ClientWage:values.privateWageTakingByClient,
      PrivateCompany_ClientSuper:values.privateSuperForClient,
      PrivateCompany_PartnerWage:values.privateWageTakenByPartner,
      PrivateCompany_PartnerSuper: values.privateSuperForPartner,
      PrivateCompany_RunningCost:values.privateRunningCosts,
      PrivateCompany_TelephoneInternet:values.privateTelephoneAndInternet,
      PrivateCompany_ProfessionalFees:values.privateProfessionalFees,
      PrivateCompany_AllOther:values.privateAllOther,
      PrivateCompany_LoanRepayments:values.privateLoanRepayments,
    }

    console.log(PrivateCompanyDetails);

    axios
    .patch(`http://localhost:7000/Client-PrivateCompany-Business/Update-Client-PrivateCompany/${localStorage.getItem("EditClient")}`, PrivateCompanyDetails)
    .then((res) => console.log("Private Company Updated Successfully!"))
    handleClosePrivate();
  }


  return (
    <>
      <div className="container-fluid mt-4 ">
        <div className="row m-0 px-0">
          <div className="col-md-2"></div>
          <div className="col-md-12">
            
            <Formik initialValues={initialValues} 
            validationSchema={isPartnered ? validationSchema : singlevalidationSchema} 
            onSubmit={onSubmit} enableReinitialize>
            {({values , setFieldValue ,setValues,handleChange,formik})=>
              <Form>
            {/*------------------------------------Sole Trader - Client------------------------------------*/}
                  <div className="row">
                  <div className="col-md-12">
                    <div className=" shadow px-4 py-4">
                      <h3 className="heading">Sole Trader - Client
                      
                      <div className="iconContainerLg">
                                <img className="img-fluid" src={businessman} alt="" />

                                </div>
                      </h3>

                      {/*first row*/}
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label
                              htmlFor="soleBusinessName"
                              className="form-label"
                            >
                              Business Name
                            </label>
                            <Field
                              type="text"
                              className="form-control shadow inputDesign"
                              id="soleBusinessName"
                              name='soleBusinessName'
                              placeholder="Business Name"
                            />
                            <ErrorMessage component='div' className="text-danger fw-bold" name="soleBusinessName"/>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="mb-3">
                            <label
                              htmlFor="soleBusinessType"
                              className="form-label"
                            >
                              Business Type
                            </label>
                            <Field
                              type="text"
                              className="form-control inputDesign shadow"
                              id="soleBusinessType"
                              name="soleBusinessType"
                              placeholder="Business Type"
                            />
                            <ErrorMessage component='div' className="text-danger fw-bold" name='soleBusinessType'/>
                          </div>
                        </div>
                      </div>
                      {/*first row*/}

                      {/* second row */}
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label
                              htmlFor="soleIncomeGenerated"
                              className="form-label"
                            >
                              Income Generated
                            </label>
                            <Field
                              type="number"
                              className="form-control inputDesign shadow"
                              id="soleIncomeGenerated"
                              name='soleIncomeGenerated'
                              placeholder="Income Generated"
                            />
                            <ErrorMessage component='div' className="text-danger fw-bold" name="soleIncomeGenerated" />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="mb-3">
                            <label
                              htmlFor="soleBusinessExpenses"
                              className="form-label"
                            >
                              Business Expenses
                            </label>
                            <Field
                              type="number"
                              className="form-control inputDesign shadow"
                              id="soleBusinessExpenses"
                              name='soleBusinessExpenses'
                              placeholder="Business Expenses"
                            />
                            <ErrorMessage component='div' className="text-danger fw-bold" name="soleBusinessExpenses"/>
                          </div>
                        </div>
                      </div>
                      {/*second row*/}

                      {/* Third row */}
                      <div className="row ">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label htmlFor="" className="form-label">
                              Use Business Expense Schedule
                            </label>
                            <div>
                              <span
                                className=" btn w-50 h-50
                                btn-outline-success "
                                
                                onClick={handleShow}
                              >
                                <div className="iconContainer mx-1">
                                <img className="img-fluid" src={plus} alt="" />

                                </div>
                                Use Business Schedule
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
                                    Business Expense Schedule
                                    <div className="iconContainerLg">
                                <img className="img-fluid" src={notebook} alt="" />

                                </div>
                                  </Modal.Title>
                                </Modal.Header>
                                
                                  <Formik initialValues={ClientModal_initialValues} 
                                  validationSchema={ClientModal_validationSchema} 
                                  onSubmit={ClientModal_onSubmit} 
                                  enableReinitialize>
                                  <Form>
                                  <Modal.Body>
                                  {/*  first row*/}
                                  <div className="row">
                                    {/*  Business Expenses */}
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="soleBusinessExpenses"
                                          className="form-label"
                                        >
                                          Business Expenses
                                        </label>
                                        <Field
                                          id="soleBusinessExpenses"
                                          name='soleBusinessExpenses'
                                          readOnly
                                          className="form-control inputDesign shadow"
                                          type="number"
                                        />
                                        <ErrorMessage component='div' className="text-danger fw-bold" name="soleBusinessExpenses"/>
                                      </div>
                                    </div>
                                    {/*  Business Expenses*/}

                                    {/* Rent*/}
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="soleRent"
                                          className="form-label"
                                        >
                                          Rent
                                        </label>
                                        <Field
                                          type="number"
                                          className="form-control inputDesign  shadow"
                                          id="soleRent"
                                          name='soleRent'
                                          placeholder="Rent"
                                        />
                                        <ErrorMessage component='div' className="text-danger fw-bold" name='soleRent'/>
                                      </div>
                                    </div>
                                    {/* soleRent*/}
                                  </div>

                                  {/* row 2 */}
                                  <div className="row">
                                    {/* Lease Costs */}
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="soleLeaseCosts"
                                          className="form-label"
                                        >
                                          Lease Costs
                                        </label>
                                        <Field
                                          type="number"
                                          className="form-control inputDesign shadow"
                                          id="soleLeaseCosts"
                                          name='soleLeaseCosts'
                                          placeholder="Lease Costs"
                                        />
                                        <ErrorMessage component='div' className="text-danger fw-bold" name='soleLeaseCosts'/>
                                      </div>
                                    </div>
                                    {/* Lease Costs */}

                                    {/* Insurances */}
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="soleInsurances"
                                          className="form-label"
                                        >
                                          Insurances
                                        </label>
                                        <Field
                                          type="number"
                                          className="form-control inputDesign shadow"
                                          id="soleInsurances"
                                          name='soleInsurances'
                                          placeholder="Insurances"
                                        />
                                        <ErrorMessage component='div' className="text-danger fw-bold" name='soleInsurances' />
                                      </div>
                                    </div>
                                    {/* Insurances */}
                                  </div>
                                  {/* row 2 */}

                                  {/* row 3 */}
                                  <div className="row">
                                    {/* Staff Costs */}
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="soleStaffCosts"
                                          className="form-label"
                                        >
                                          Staff Costs
                                        </label>
                                        <Field
                                          type="number"
                                          className="form-control inputDesign shadow"
                                          id="soleStaffCosts"
                                          name='soleStaffCosts'
                                          placeholder="Staff Costs "
                                        />
                                        <ErrorMessage component='div' className="text-danger fw-bold" name="soleStaffCosts" />
                                      </div>
                                    </div>
                                    {/* Staff Costs  */}

                                    {/* Running Costs */}
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="soleRunningCosts"
                                          className="form-label"
                                        >
                                          Running Costs
                                        </label>
                                        <Field
                                          type="number"
                                          className="form-control inputDesign shadow"
                                          id="soleRunningCosts"
                                          name='soleRunningCosts'
                                          placeholder="Running Costs"
                                        />
                                        <ErrorMessage component='div' className="text-danger fw-bold" name="soleRunningCosts" />
                                      </div>
                                    </div>
                                    {/* Running Costs */}
                                  </div>
                                  {/* row 3 */}

                                  {/* row 4 */}
                                  <div className="row">
                                    {/* Telephone and Internet*/}
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="soleTelephoneAndInternet"
                                          className="form-label"
                                        >
                                          Telephone and Internet
                                        </label>
                                        <Field
                                          type="number"
                                          className="form-control inputDesign shadow"
                                          id="soleTelephoneAndInternet"
                                          name='soleTelephoneAndInternet'
                                          placeholder="Telephone and Internet "
                                        />
                                        <ErrorMessage component='div' className="text-danger fw-bold" name="soleTelephoneAndInternet" />
                                      </div>
                                    </div>
                                    {/* Telephone and Internet */}

                                    {/* Professional fees (Accounting or Other)*/}
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="soleProfessionalFees"
                                          className="form-label"
                                        >
                                          Professional fees (Accounting or Other)
                                        </label>
                                        <Field
                                          type="number"
                                          className="form-control inputDesign shadow"
                                          id="soleProfessionalFees"
                                          name="soleProfessionalFees"
                                          placeholder="Professional Fees"
                                        />
                                        <ErrorMessage component='div' className="text-danger fw-bold" name="soleProfessionalFees" />
                                      </div>
                                    </div>
                                    {/* Professional fees (Accounting or Other) */}
                                  </div>
                                  {/* row 4 */}

                                  {/* row 5 */}
                                  <div className="row">
                                    {/* All Other*/}
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="soleAllOther"
                                          className="form-label"
                                        >
                                          All Other
                                        </label>
                                        <Field
                                          type="number"
                                          className="form-control inputDesign shadow"
                                          id="soleAllOther"
                                          name="soleAllOther"
                                          placeholder="All Other"
                                        />
                                        <ErrorMessage component='div' className="text-danger fw-bold" name="soleAllOther" />
                                      </div>
                                    </div>
                                    {/* All Other */}
                                  </div>
                                  {/* row 5*/}
                                  </Modal.Body>
                                  
                                
                                <Modal.Footer>
                                  <div className="col-md-12">
                                    <button
                                    type="submit"
                                      className="float-end btn w-25  bgColor modalBtn"
                                      // onClick={handleClose}
                                    >
                                      Save
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
                            <label
                              htmlFor="soleNetBusinessIncome"
                              className="form-label"
                            >
                              Net Business Income
                            </label>
                            <Field
                              type="number"
                              className="form-control inputDesign shadow"
                              id="soleNetBusinessIncome"
                              name='soleNetBusinessIncome'
                              readOnly
                            />
                            <ErrorMessage component='div' className="text-danger fw-bold" name="soleNetBusinessIncome" />
                          </div>
                        </div>
                      </div>
                      {/*Third row*/}
                     
                    </div>
                  </div>
                </div>            
            {/*------------------------------------Sole Trader - Client------------------------------------*/}



            {/*------------------------------------Sole Trader - Partner------------------------------------*/}
           {
           isPartnered &&
           <div className="row my-5" id="soleTraderPartner">
              <div className="col-md-12">
                <div className=" shadow px-4 py-4">
                  <h3 className="heading">Sole Trader - Partner
                  
                  <div className="iconContainerLg">
                            <img className="img-fluid" src={businessmen} alt="" />

                            </div>
                  </h3>
                      
                  {/*first row*/}
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="solePartnerBusinessName"
                          className="form-label"
                        >
                          Business Name
                        </label>
                        <Field
                          type="text"
                          className="form-control inputDesign shadow inputDesign"
                          id="solePartnerBusinessName"
                          name='solePartnerBusinessName'
                          placeholder="Business Name"
                        />
                        <ErrorMessage component='div' className='text-danger fw-bold' name='solePartnerBusinessName' />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="solePartnerBusinessType"
                          className="form-label"
                        >
                          Business Type
                        </label>
                        <Field
                          type="text"
                          className="form-control inputDesign shadow"
                          id="solePartnerBusinessType"
                          name='solePartnerBusinessType'
                          placeholder="Business Type"
                        />
                        <ErrorMessage component='div' className='text-danger fw-bold' name='solePartnerBusinessType' />
                      </div>
                    </div>
                  </div>
                  {/*first row*/}

                  {/* second row */}
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="solePartnerIncomeGenerated"
                          className="form-label"
                        >
                          Income Generated
                        </label>
                        <Field
                          type="number"
                          className="form-control inputDesign shadow"
                          id="solePartnerIncomeGenerated"
                          name="solePartnerIncomeGenerated"
                          placeholder="Income Generated"
                        />
                        <ErrorMessage component='div' className='text-danger fw-bold' name="solePartnerIncomeGenerated" />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="solePartnerBusinessExpenses"
                          className="form-label"
                        >
                          Business Expenses
                        </label>
                        <Field
                          type="number"
                          className="form-control inputDesign shadow"
                          id="solePartnerBusinessExpenses"
                          name="solePartnerBusinessExpenses"
                          placeholder="Business Expenses"
                        />
                        <ErrorMessage component='div' className='text-danger fw-bold' name="solePartnerBusinessExpenses" />
                      </div>
                    </div>
                  </div>
                  {/*second row*/}

                  {/* Third row */}
                  <div className="row ">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="" className="form-label">
                          Use Business Expense Schedule
                        
                        </label>
                        <div>
                          <span
                            className=" btn w-50 h-50
                            btn-outline-success "
                            onClick={handleShowPartner}
                          >
                             <div className="iconContainer mx-1">
                            <img className="img-fluid" src={plus} alt="" />

                            </div>
                            Use Business Schedule
                          </span>
                        </div>

                        {/* --------------------------------------------------------------- */}
                        <div>
                          {/* Business Expense Schedule */}
                          <Modal
                            show={showPartner}
                            onHide={handleClosePartner}
                            backdrop="static"
                            className="modal-lg"
                            keyboard={false}
                          >
                            <Modal.Header
                              className="text-light modalBG "
                              closeButton
                            >
                              <Modal.Title className="fontStyle">
                                Partner Business Expense Schedule
                                <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />

                            </div>
                              </Modal.Title>
                            </Modal.Header>
                            <Formik initialValues={PartnerModal_initialValues} validationSchema={PartnerModal_validationSchema} onSubmit={PartnerModal_onSubmit}>
                              <Form>
                              <Modal.Body>
                              {/*  first row*/}
                              <div className="row">
                                {/*  Business Expenses */}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="solePartnerBusinessExpenses2"
                                      className="form-label"
                                    >
                                      Business Expenses
                                    </label>
                                    <Field
                                      id="solePartnerBusinessExpenses2"
                                      name='solePartnerBusinessExpenses2'
                                      readOnly
                                      className="form-control inputDesign shadow"
                                      type="number"
                                    />
                                  </div>
                                </div>
                                {/*  Business Expenses*/}

                                {/* Rent*/}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="solePartnerRent"
                                      className="form-label"
                                    >
                                      Rent
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign  shadow"
                                      id="solePartnerRent"
                                      name='solePartnerRent'
                                      placeholder="Rent"
                                    />
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="solePartnerRent" />
                                  </div>
                                </div>
                                {/* soleRent*/}
                              </div>

                              {/* row 2 */}
                              <div className="row">
                                {/* Lease Costs */}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="soleLeaseCosts"
                                      className="form-label"
                                    >
                                      Lease Costs
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="soleLeaseCosts"
                                      name='soleLeaseCosts'
                                      placeholder="Lease Costs"
                                    />
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="soleLeaseCosts" />
                                  </div>
                                </div>
                                {/* Lease Costs */}

                                {/* Insurances */}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="solePartnerInsurances"
                                      className="form-label"
                                    >
                                      Insurances
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="solePartnerInsurances"
                                      name='solePartnerInsurances'
                                      placeholder="Insurances"
                                    />
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="solePartnerInsurances" />
                                  </div>
                                </div>
                                {/* Insurances */}
                              </div>
                              {/* row 2 */}

                              {/* row 3 */}
                              <div className="row">
                                {/* Staff Costs */}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="solePartnerStaffCosts"
                                      className="form-label"
                                    >
                                      Staff Costs
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="solePartnerStaffCosts"
                                      name='solePartnerStaffCosts'
                                      placeholder="Staff Costs "
                                    />
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="solePartnerStaffCosts" />
                                  </div>
                                </div>
                                {/* Staff Costs  */}

                                {/* Running Costs */}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="solePartnerRunningCosts"
                                      className="form-label"
                                    >
                                      Running Costs
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="solePartnerRunningCosts"
                                      name='solePartnerRunningCosts'
                                      placeholder="Running Costs"
                                    />
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="solePartnerRunningCosts" />
                                  </div>
                                </div>
                                {/* Running Costs */}
                              </div>
                              {/* row 3 */}

                              {/* row 4 */}
                              <div className="row">
                                {/* Telephone and Internet*/}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="solePartnerTelephoneAndInternet"
                                      className="form-label"
                                    >
                                      Telephone and Internet
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="solePartnerTelephoneAndInternet"
                                      name='solePartnerTelephoneAndInternet'
                                      placeholder="Telephone and Internet "
                                    />
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="solePartnerTelephoneAndInternet" />
                                  </div>
                                </div>
                                {/* Telephone and Internet */}

                                {/* Professional fees (Accounting or Other)*/}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="solePartnerProfessionalFees"
                                      className="form-label"
                                    >
                                      Professional fees (Accounting or Other)
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="solePartnerProfessionalFees"
                                      name='solePartnerProfessionalFees'
                                      placeholder="Professional Fees"
                                    />
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="solePartnerProfessionalFees" />
                                  </div>
                                </div>
                                {/* Professional fees (Accounting or Other) */}
                              </div>
                              {/* row 4 */}

                              {/* row 5 */}
                              <div className="row">
                                {/* All Other*/}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="solePartnerAllOther"
                                      className="form-label"
                                    >
                                      All Other
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="solePartnerAllOther"
                                      name="solePartnerAllOther"
                                      placeholder="All Other"
                                    />
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="solePartnerAllOther" />
                                  </div>
                                </div>
                                {/* All Other */}
                              </div>
                              {/* row 5*/}
                            </Modal.Body>
                            <Modal.Footer>
                              <div className="col-md-12">
                                <button
                                type="submit"
                                  className="float-end btn w-25  bgColor modalBtn"
                                  // onClick={handleClosePartner}
                                >
                                  Save
                                </button>
                                <button
                                  className="float-end btn w-25  btn-outline  backBtn mx-3"
                                  onClick={handleClosePartner}
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
                        <label
                          htmlFor="solePartnerNetBusinessIncome"
                          className="form-label"
                        >
                          Net Business Income
                        </label>
                        <Field
                          type="number"
                          className="form-control inputDesign shadow"
                          id="solePartnerNetBusinessIncome"
                          name="solePartnerNetBusinessIncome"
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                  {/*Third row*/}
                </div>
              </div>
            </div>}
            {/*------------------------------------Sole Trader - Partner------------------------------------*/}



            {/*------------------------------------Partnership------------------------------------*/}
            <div className="row my-5">
              <div className="col-md-12">
                <div className=" shadow px-4 py-4">
                  <h3 className="heading">Partnership
                  <div className="iconContainerLg">
                    <img className="img-fluid" src={dealdone} alt="" />
                  </div>
                  </h3>
                  {/*first row*/}
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="clientsShareofPartnership"
                          className="form-label"
                        >
                          Client’s Share of Partnership
                        </label>
                        <Field
                          type="number"
                          className="form-control inputDesign shadow inputDesign"
                          id="clientsShareofPartnership"
                          name='clientsShareofPartnership'
                          placeholder="Client’s Share of Partnership"
                        />
                        <ErrorMessage component='div' className='text-danger fw-bold' name="clientsShareofPartnership" />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="partnersShareofPartnership"
                          className="form-label"
                        >
                          Partner’s Share of Partnership
                        </label>
                        <Field
                          type="number"
                          className="form-control inputDesign shadow"
                          id="partnersShareofPartnership"
                          name='partnersShareofPartnership'
                          placeholder="Partner’s Share of Partnership"
                        />
                        <ErrorMessage component='div' className='text-danger fw-bold' name="partnersShareofPartnership" />
                      </div>
                    </div>
                  </div>
                  {/*first row*/}

                  {/* second row */}
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="partnershipName" className="form-label">
                          Partnership Name
                        </label>
                        <Field
                          type="text"
                          className="form-control inputDesign shadow"
                          id="partnershipName"
                          name='partnershipName'
                          placeholder="Partnership Name"
                        />
                        <ErrorMessage component='div' className='text-danger fw-bold' name="partnershipName" />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="businessType" className="form-label">
                          Business Type
                        </label>
                        <Field
                          type="text"
                          className="form-control inputDesign shadow"
                          id="businessType"
                          name='businessType'
                          placeholder="Business Type"
                        />
                        <ErrorMessage component='div' className='text-danger fw-bold' name="businessType" />
                      </div>
                    </div>
                  </div>
                  {/*second row*/}

                  {/* Three row */}
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="incomeGenerated" className="form-label">
                          Income Generated
                        </label>
                        <Field
                          type="number"
                          className="form-control inputDesign shadow"
                          id="incomeGenerated"
                          name='incomeGenerated'
                          placeholder="Income Generated"
                        />
                        <ErrorMessage component='div' className='text-danger fw-bold' name="incomeGenerated" />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="businessExpenses"
                          className="form-label"
                        >
                          Business Expenses
                        </label>
                        <Field
                          type="number"
                          className="form-control inputDesign shadow"
                          id="businessExpenses"
                          name='businessExpenses'
                          placeholder="Business Expenses"
                        />
                        <ErrorMessage component='div' className='text-danger fw-bold' name="businessExpenses"/>
                      </div>
                    </div>
                  </div>
                  {/*Third row*/}

                  {/* four row */}
                  <div className="row ">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="" className="form-label">
                          Use Business Expense Schedule
                        </label>
                        <div>
                          <span
                            className=" btn btn-outline-success w-50 h-50"
                            onClick={handleShowPartnership}
                          >
                            <div className="iconContainer mx-1">
                            <img className="img-fluid" src={plus} alt="" />

                            </div>
                            Use Business Schedule
                          </span>
                        </div>

                        {/* -----------------------------Model------------------------------ */}
                        <div>
                          {/* Business Expense Schedule */}
                          <Modal
                            show={showPartnership}
                            onHide={handleClosePartnership}
                            backdrop="static"
                            className="modal-lg"
                            keyboard={false}
                          >
                            <Modal.Header
                              className="text-light modalBG "
                              closeButton
                            >
                              <Modal.Title className="fontStyle">
                                Business Expense Schedule
                                <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />

                            </div>
                              </Modal.Title>
                            </Modal.Header>
                            <Formik initialValues={Partnership_initialValues} validationSchema={Partnership_validationSchema} onSubmit={Partnership_onSubmit}>
                              <Form>
                              <Modal.Body>
                              {/*  first row*/}
                              <div className="row">
                                {/*  Business Expenses */}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="partnershipBusinessExpenses"
                                      className="form-label"
                                    >
                                      Business Expenses
                                    </label>
                                    <Field
                                      id="partnershipBusinessExpenses"
                                      name='partnershipBusinessExpenses'
                                      readOnly
                                      className="form-control inputDesign shadow"
                                      type="number"
                                    />
                                  </div>
                                </div>
                                {/*  Business Expenses*/}

                                {/* Rent*/}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="partnershipRent"
                                      className="form-label"
                                    >
                                      Rent
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign  shadow"
                                      id="partnershipRent"
                                      name='partnershipRent'
                                      placeholder="Rent"
                                    />
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="partnershipRent" />
                                  </div>
                                </div>
                                {/* soleRent*/}
                              </div>

                              {/* row 2 */}
                              <div className="row">
                                {/* Lease Costs */}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="partnershipLeaseCosts"
                                      className="form-label"
                                    >
                                      Lease Costs
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="partnershipLeaseCosts"
                                      name='partnershipLeaseCosts'
                                      placeholder="Lease Costs"
                                    />
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="partnershipLeaseCosts" />
                                  </div>
                                </div>
                                {/* Lease Costs */}

                                {/* Insurances */}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="partnershipInsurances"
                                      className="form-label"
                                    >
                                      Insurances
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="partnershipInsurances"
                                      name='partnershipInsurances'
                                      placeholder="Insurances"
                                    />
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="partnershipInsurances" />
                                  </div>
                                </div>
                                {/* Insurances */}
                              </div>
                              {/* row 2 */}

                              {/* row 3 */}
                              <div className="row">
                                {/* Staff Costs(Wages and Super) */}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="partnershipStaffCostWages"
                                      className="form-label"
                                    >
                                      Staff Costs(Wages and Super)
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="partnershipStaffCostWages"
                                      name='partnershipStaffCostWages'
                                      placeholder="Staff Costs "
                                    />
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="partnershipStaffCostWages" />
                                  </div>
                                </div>
                                {/* Staff Costs(Wages and Super)  */}

                                {/* Wage taking by Client*/}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="partnershipWageTakingByClient"
                                      className="form-label"
                                    >
                                      Wage taking by Client
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="partnershipWageTakingByClient"
                                      name='partnershipWageTakingByClient'
                                      placeholder="Wage taking by Client"
                                    />
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="partnershipWageTakingByClient" />
                                  </div>
                                </div>
                                {/*Wage taking by Client*/}
                              </div>
                              {/* row 3 */}

                              {/* row 4 */}
                              <div className="row">
                                {/* Wage taken by Partner*/}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="partnerWageTakenByPartner"
                                      className="form-label"
                                    >
                                      Wage taken by Partner
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="partnerWageTakenByPartner"
                                      name='partnerWageTakenByPartner'
                                      placeholder="Wage taken by Partner"
                                    />
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="partnerWageTakenByPartner" />
                                  </div>
                                </div>
                                {/* Wage taken by Partner*/}

                                {/* Running Costs(Utilities) */}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="partnershipRunningCosts"
                                      className="form-label"
                                    >
                                      Running Costs(Utilities)
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="partnershipRunningCosts"
                                      name='partnershipRunningCosts'
                                      placeholder="Running Costs(Utilities)"
                                    />
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="partnershipRunningCosts" />
                                  </div>
                                </div>
                                {/* Running Costs(Utilities) */}
                              </div>
                              {/* row 4 */}

                              {/* row 5 */}
                              <div className="row">
                                {/* Telephone and Internet*/}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="partnershipTelephoneAndInternet"
                                      className="form-label"
                                    >
                                      Telephone and Internet
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="partnershipTelephoneAndInternet"
                                      name='partnershipTelephoneAndInternet'
                                      placeholder="Telephone and Internet "
                                    />
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="partnershipTelephoneAndInternet" />
                                  </div>
                                </div>
                                {/* Telephone and Internet */}

                                {/* Professional fees*/}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="partnershipProfessionalFees"
                                      className="form-label"
                                    >
                                      Professional fees
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="partnershipProfessionalFees"
                                      name='partnershipProfessionalFees'
                                      placeholder="Professional Fees"
                                    />
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="partnershipProfessionalFees" />
                                  </div>
                                </div>
                                {/* Professional fees (Accounting or Other) */}
                              </div>
                              {/* row 5 */}

                              {/* row 6 */}
                              <div className="row">
                                {/* All Other*/}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="partnershipAllOther"
                                      className="form-label"
                                    >
                                      All Other
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="partnershipAllOther"
                                      name='partnershipAllOther'
                                      placeholder="All Other"
                                    />
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="partnershipAllOther" />
                                  </div>
                                </div>
                                {/* All Other */}
                              </div>
                              {/* row 6*/}
                            </Modal.Body>
                            <Modal.Footer>
                              <div className="col-md-12">
                                <button
                                type='submit'
                                  className="float-end btn w-25  bgColor modalBtn"
                                  // onClick={handleClosePartnership}
                                >
                                  Save
                                </button>
                                <button
                                  className="float-end btn w-25  btn-outline  backBtn mx-3"
                                  onClick={handleClosePartnership}
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
                        {/* ---------------------Model---------------------------- */}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="soleNetBusinessIncome"
                          className="form-label"
                        >
                          Net Business Income
                        </label>
                        <Field
                          type="number"
                          className="form-control inputDesign shadow"
                          id="soleNetBusinessIncome"
                          name='NetbusinessincomePartnership'
                          readOnly
                        />

                      </div>
                    </div>
                  </div>
                  {/*four row*/}
                </div>
              </div>
            </div>
            {/*------------------------------------Partnership------------------------------------*/}



            {/*------------------------------------Private Company------------------------------------*/}
            <div className="row my-5">
              <div className="col-md-12">
                <div className=" shadow px-4 py-4">
                  <h3 className="heading">
                    Private Company
                    
                    <div className="iconContainerLg">
                            <img className="img-fluid" src={building} alt="" />

                            </div>
                    </h3>
                  {/*first row*/}
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="privateNameOfCompany"
                          className="form-label"
                        >
                          Name of Company
                        </label>
                        <Field
                          type="text"
                          className="form-control inputDesign shadow inputDesign"
                          id="privateNameOfCompany"
                          name='privateNameOfCompany'
                          placeholder="Name of Company"
                        />
                        <ErrorMessage component='div' className='text-danger fw-bold' name="privateNameOfCompany" />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="privateNetAssetValueofCompany"
                          className="form-label"
                        >
                          Net Asset Value of Company
                        </label>
                        <Field
                          type="number"
                          className="form-control inputDesign shadow"
                          id="privateNetAssetValueofCompany"
                          name='privateNetAssetValueofCompany'
                          placeholder="Net Asset Value of Company"
                        />
                        <ErrorMessage component='div' className='text-danger fw-bold' name="privateNetAssetValueofCompany" />
                      </div>
                    </div>
                  </div>
                  {/*first row*/}

                  {/* second row */}
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="privateTradingName"
                          className="form-label"
                        >
                          Trading Name
                        </label>
                        <Field
                          type="Text"
                          className="form-control inputDesign shadow"
                          id="privateTradingName"
                          name='privateTradingName'
                          placeholder="Trading Name"
                        />
                        <ErrorMessage component='div' className='text-danger fw-bold' name="privateTradingName" />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="privateTotalRevenue"
                          className="form-label"
                        >
                          Total Revenue
                        </label>
                        <Field
                          type="number"
                          className="form-control inputDesign shadow"
                          id="privateTotalRevenue"
                          name='privateTotalRevenue'
                          placeholder="Total Revenue"
                        />
                        <ErrorMessage component='div' className='text-danger fw-bold' name="privateTotalRevenue" />
                      </div>
                    </div>
                  </div>
                  {/*second row*/}

                  {/* Three row */}
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="privateBusinessType"
                          className="form-label"
                        >
                          Business Type
                        </label>
                        <Field
                          type="text"
                          className="form-control inputDesign shadow"
                          id="privateBusinessType"
                          name='privateBusinessType'
                          placeholder="Business Type"
                        />
                        <ErrorMessage component='div' className='text-danger fw-bold' name="privateBusinessType" />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="PrivatebusinessExpenses"
                          className="form-label"
                        >
                          Business Expenses
                        </label>
                        <Field
                          type="number"
                          className="form-control inputDesign shadow"
                          id="PrivatebusinessExpenses"
                          name='PrivatebusinessExpenses'
                          placeholder="Business Expenses"
                        />
                        <ErrorMessage component='div' className='text-danger fw-bold' name="PrivatebusinessExpenses" />
                      </div>
                    </div>
                  </div>
                  {/*Third row*/}

                  {/* four row */}
                  <div className="row ">
                  <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="privateDirectorsDetail" className="form-label">
                        Directors Detail
                        </label>
                        <Field
                          id="privateDirectorsDetail"
                          name='privateDirectorsDetail'
                          className="form-select shadow  inputDesign"
                          as='select'
                        >
                          <option value=''>Select</option>
                          <option value="Client">Client</option>
                          <option value="Partner">Partner</option>
                          <option value="Client & Partner">Client & Partner</option>
                          
                        </Field>
                        <ErrorMessage component='div' className='text-danger fw-bold' name="privateDirectorsDetail" />
                      </div>
                  </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="" className="form-label">
                          Use Business Expense Schedule
                        </label>
                        <div>
                          <span
                            className=" btn w-50 h-50
                            btn-outline-success "
                            onClick={handleShowPrivate}
                          >
                             <div className="iconContainer mx-1">
                            <img className="img-fluid" src={plus} alt="" />

                            </div>
                            Use Business Schedule
                          </span>
                        </div>

                        {/* -----------------------------Model------------------------------ */}
                        <div>
                          {/* Business Expense Schedule */}
                          <Modal
                            show={showPrivate}
                            onHide={handleClosePrivate}
                            backdrop="static"
                            className="modal-lg"
                            keyboard={false}
                          >
                            <Modal.Header
                              className="text-light modalBG "
                              closeButton
                            >
                              <Modal.Title className="fontStyle">
                                Business Expense Schedule
                                <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />

                            </div>
                              </Modal.Title>
                            </Modal.Header>
                            <Formik 
                            initialValues={initialValuesPrivate}
                            validationSchema={validationSchemaPrivate}
                            onSubmit={onSubmitPrivate}
                            >
                                <Form>
                            <Modal.Body>
                              {/*  first row*/}
                              <div className="row">
                                {/*  Business Expenses */}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="privateBusinessExpensesNumber"
                                      className="form-label"
                                    >
                                      Business Expenses
                                    </label>
                                    <Field
                                      id="privateBusinessExpensesNumber"
                                      name='privateBusinessExpensesNumber'
                                      readOnly
                                      className="form-control inputDesign shadow"
                                      type="number"
                                    />
                                  </div>
                                </div>
                                {/*  Business Expenses*/}

                                {/* Rent*/}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="privateRent"
                                      className="form-label"
                                    >
                                      Rent
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign  shadow"
                                      id="privateRent"
                                      name="privateRent"
                                      placeholder="Rent"
                                    />
                                      < ErrorMessage name="privateRent" component="div"
                               className="text-danger fw-bold" />

                                  </div>
                                </div>
                                {/* soleRent*/}
                              </div>

                              {/* row 2 */}
                              <div className="row">
                                {/* Lease Costs */}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="privateLeaseCosts"
                                      className="form-label"
                                    >
                                      Lease Costs
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="privateLeaseCosts"
                                      name="privateLeaseCosts"
                                      placeholder="Lease Costs"
                                    />
                                    < ErrorMessage name="privateLeaseCosts" component="div"
                                    className="text-danger fw-bold" />

                                  </div>
                                </div>
                                {/* Lease Costs */}

                                {/* Insurances */}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="privateInsurances"
                                      className="form-label"
                                    >
                                      Insurances
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="privateInsurances"
                                      name="privateInsurances"
                                      placeholder="Insurances"
                                    />
                                    < ErrorMessage name="privateInsurances" component="div"
                               className="text-danger fw-bold" />
                                  </div>
                                </div>
                                {/* Insurances */}
                              </div>
                              {/* row 2 */}

                              {/* row 3 */}
                              <div className="row">

                                
                                 {/* Running Costs(Utilities) */}
                                 <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="privateRunningCosts"
                                      className="form-label"
                                    >
                                      Running Costs(Utilities)
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="privateRunningCosts"
                                      name="privateRunningCosts"
                                      placeholder="Running Costs(Utilities) "
                                    />
                                    < ErrorMessage name="privateRunningCosts" component="div"
                               className="text-danger fw-bold" />
                                  </div>
                                </div>
                                {/* Running Costs(Utilities) */}
                                {/* Staff Costs(Wages and Super) */}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="privateStaffCostWages"
                                      className="form-label"
                                    >
                                      Staff Costs(Wages and Super)
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="privateStaffCostWages"
                                      name="privateStaffCostWages"
                                      placeholder="Staff Costs "
                                    />
                                    < ErrorMessage name="privateStaffCostWages" component="div"
                               className="text-danger fw-bold" />
                                  </div>
                                </div>
                                {/* Staff Costs(Wages and Super)  */}


                               
                              </div>
                              {/* row 3 */}

                               {/* row 4 */}
                               <div className="row">
                              
                                {/* Wage taking by Client*/}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="privateWageTakingByClient"
                                      className="form-label"
                                    >
                                      Wage taking by Client
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="privateWageTakingByClient"
                                      name="privateWageTakingByClient"
                                      placeholder="Wage taking by Client"
                                    />
                                    < ErrorMessage name="privateWageTakingByClient" component="div"
                               className="text-danger fw-bold" />
                                  </div>
                                </div>
                                {/*Wage taking by Client*/}

                                 {/* Super For Client*/}
                                 <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="privateSuperForClient"
                                      className="form-label"
                                    >
                                      Super For Client
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="privateSuperForClient"
                                      name="privateSuperForClient"
                                      placeholder="Super For Client"
                                    />
                                    < ErrorMessage name="privateSuperForClient" component="div"
                               className="text-danger fw-bold" />
                                  </div>
                                </div>
                                {/* Super For Client*/}
                              </div>
                              {/* row 4 */}

                              {/* row 5 */}
                              <div className="row">
                                {/* Wage taken by Partner*/}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="privateWageTakenByPartner"
                                      className="form-label"
                                    >
                                      Wage taken by Partner
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="privateWageTakenByPartner"
                                      name="privateWageTakenByPartner"
                                      placeholder="Wage taken by Partner"
                                    />
                                    < ErrorMessage name="privateWageTakenByPartner" component="div"
                               className="text-danger fw-bold" />
                                  </div>
                                </div>
                                {/* Wage taken by Partner*/}

                                   {/* Super For Partner*/}
                                   <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="privateSuperForPartner"
                                      className="form-label"
                                    >
                                      Super For Partner
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="privateSuperForPartner"
                                      name="privateSuperForPartner"
                                      placeholder="Super For Partner"
                                    />
                                    < ErrorMessage name="privateSuperForPartner" component="div"
                               className="text-danger fw-bold" />
                                  </div>
                                </div>
                                {/* Super For Partner*/}
                              </div>
                              {/* row 5 */}

                              {/* row 6 */}
                              <div className="row">
                                {/* Telephone and Internet*/}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="privateTelephoneAndInternet"
                                      className="form-label"
                                    >
                                      Telephone and Internet
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="privateTelephoneAndInternet"
                                      name="privateTelephoneAndInternet"
                                      placeholder="Telephone and Internet "
                                    />
                                    < ErrorMessage name="privateTelephoneAndInternet" component="div"
                               className="text-danger fw-bold" />
                                  </div>
                                </div>
                                {/* Telephone and Internet */}

                                {/* Professional fees*/}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="privateProfessionalFees"
                                      className="form-label"
                                    >
                                      Professional fees
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="privateProfessionalFees"
                                      name="privateProfessionalFees"
                                      placeholder="Professional Fees"
                                    />
                                    < ErrorMessage name="privateProfessionalFees" component="div"
                               className="text-danger fw-bold" />
                                  </div>
                                </div>
                                {/* Professional fees (Accounting or Other) */}
                              </div>
                              {/* row 6 */}

                              {/* row 7 */}
                              <div className="row">
                                {/* All Other*/}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="privateAllOther"
                                      className="form-label"
                                    >
                                      All Other
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="privateAllOther"
                                      name="privateAllOther"
                                      placeholder="All Other"
                                    />
                                    < ErrorMessage name="privateAllOther" component="div"
                               className="text-danger fw-bold" />
                                  </div>
                                </div>
                                {/* All Other */}

                                  {/* Loan Repayments*/}
                                  <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="privateLoanRepayments"
                                      className="form-label"
                                    >
                                      Loan Repayments
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="privateLoanRepayments"
                                      name="privateLoanRepayments"
                                      placeholder="Loan Repayments"
                                    />
                                    < ErrorMessage name="privateLoanRepayments" component="div"
                               className="text-danger fw-bold" />

                                  </div>
                                </div>
                                {/* Loan Repayments*/}
                              </div>
                              {/* row 7*/}


                            </Modal.Body>
                            <Modal.Footer>
                              <div className="col-md-12">
                                <button
                                type='submit'
                                  className="float-end btn w-25  bgColor modalBtn"
                                  // onClick={handleClosePrivate}
                                >
                                  Save
                                </button>
                                <button
                                  className="float-end btn w-25  btn-outline  backBtn mx-3"
                                  onClick={handleClosePrivate}
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
                        {/* ---------------------Model---------------------------- */}
                      
                      </div>
                    </div>                  
                  </div>
                  {/*four row*/}

                   {/* Five row */}
                   <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="privateClientsshareholding"
                          className="form-label"
                        >
                          Client’s shareholding %
                        </label>
                        <Field
                          type="number"
                          className="form-control inputDesign shadow"
                          id="privateClientsshareholding"
                          name='privateClientsshareholding'
                          placeholder="Client’s shareholding %"
                        />
                        <ErrorMessage component='div' className='text-danger fw-bold' name="privateClientsshareholding" />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="privatePartnersShareholding"
                          className="form-label"
                        >
                          Partner’s shareholding %
                        </label>
                        <Field
                          type="number"
                          className="form-control inputDesign shadow"
                          id="privatePartnersShareholding"
                          name='privatePartnersShareholding'
                          placeholder="Partner’s shareholding %"
                        />
                        <ErrorMessage component='div' className='text-danger fw-bold' name="privatePartnersShareholding" />
                      </div>
                    </div>
                  </div>
                  {/*Five row*/}

                   {/*  row 6*/}
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label  className="form-label">
                      Dividends Taken As Cash?
                      </label>
                     
                             {/* switch button style */}
                              <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="dividendsTakenradio" id="dividendsTakenopt1" 
                                
                                onChange={handleChange} value="Yes"
                                onClick={()=>dividendsTakenAsCashHandler("Yes")}
                                checked={values.dividendsTakenradio==="Yes"} />
                                <label htmlFor="dividendsTakenopt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="dividendsTakenradio" id="dividendsTakenopt2" 
                                onChange={handleChange} value="No"
                                onClick={()=>dividendsTakenAsCashHandler("No")}
                                checked={values.dividendsTakenradio==="No"} />
                                <label htmlFor="dividendsTakenopt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>
                              </div>
                              {/* switch button style */}
                      

                    </div>
                  </div>

                  <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="privateTotalNetProfitAfterTax"
                          className="form-label"
                        >
                         Total Net Profit After Tax
                        </label>
                        <Field
                          type="number"
                          name='privateTotalNetProfitAfterTax'
                          className="form-control inputDesign shadow"
                          id="privateTotalNetProfitAfterTax"
                          placeholder=" Total Net Profit After Tax"
                          readOnly
                        />
                      </div>
                    </div>
                </div>
                {/*  row 6*/}

                 {/* 7 row */}
                {dividendsTakenAsCash &&
                 <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="privateClient"
                          className="form-label"
                        >
                          Client %
                        </label>
                        <Field
                          type="number"
                          className="form-control inputDesign shadow"
                          id="privateClient"
                          name='privateClient'
                          placeholder="Client %"
                        />
                        <ErrorMessage component='div' className='text-danger fw-bold' name="privateClient" />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="privatePartner"
                          className="form-label"
                        >
                          Partner %
                        </label>
                        <Field
                          type="number"
                          className="form-control inputDesign shadow"
                          id="privatePartner"
                          name="privatePartner"
                          placeholder="Partner %"
                        />
                        <ErrorMessage component='div' className='text-danger fw-bold' name="privatePartner" />
                      </div>
                    </div>
                  </div>}
                  {/*7 row*/}
                </div>
              </div>
            </div>
            {/*------------------------------------Private Company------------------------------------*/}



            {/*------------------------------------Business Trust------------------------------------*/}
            <div className="row my-5">
              <div className="col-md-12">
                <div className=" shadow px-4 py-4">
                  <h3 className="heading">Business Trust
                  <div className="iconContainerLg">
                            <img className="img-fluid" src={trustbuilding} alt="" />

                            </div>
                  </h3>
                  {/*first row*/}
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="NameofTrust"
                          className="form-label"
                        >
                          Name of Trust
                        </label>
                        <Field
                          type="text"
                          className="form-control inputDesign shadow inputDesign"
                          id="NameofTrust"
                          name='NameofTrust'
                          placeholder="Name of Trust"
                        />
                        <ErrorMessage component='div' className="text-danger fw-bold" name="NameofTrust" />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="netAssetValueofBusinessTrust"
                          className="form-label"
                        >
                          Net Asset Value of Business Trust
                        </label>
                        <Field
                          type="number"
                          className="form-control inputDesign shadow"
                          id="netAssetValueofBusinessTrust"
                          name='netAssetValueofBusinessTrust'
                          placeholder="Net Asset Value of Business Trust"
                        />
                        <ErrorMessage component='div' className="text-danger fw-bold" name="netAssetValueofBusinessTrust" />
                      </div>
                    </div>
                  </div>
                  {/*first row*/}

                  {/* second row */}
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="trustTradingName"
                          className="form-label"
                        >
                          Trading Name
                        </label>
                        <Field
                          type="Text"
                          className="form-control inputDesign shadow"
                          id="trustTradingName"
                          name='trustTradingName'
                          placeholder="Trading Name"
                        />
                        <ErrorMessage component='div' className="text-danger fw-bold" name="trustTradingName" />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="trustTotalRevenue"
                          className="form-label"
                        >
                          Total Revenue
                        </label>
                        <Field
                          type="number"
                          className="form-control inputDesign shadow"
                          id="trustTotalRevenue"
                          name='trustTotalRevenue'
                          placeholder="Total Revenue"
                        />
                        <ErrorMessage component='div' className="text-danger fw-bold" name="trustTotalRevenue" />
                      </div>
                    </div>
                  </div>
                  {/*second row*/}

                  {/* Three row */}
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="trustBusinessType"
                          className="form-label"
                        >
                          Business Type
                        </label>
                        <Field
                          type="text"
                          className="form-control inputDesign shadow"
                          id="trustBusinessType"
                          name='trustBusinessType'
                          placeholder="Business Type"
                        />
                        <ErrorMessage component='div' className="text-danger fw-bold" name="trustBusinessType" />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="trustBusinessExpenses"
                          className="form-label"
                        >
                          Business Expenses
                        </label>
                        <Field
                          type="number"
                          className="form-control inputDesign shadow"
                          id="trustBusinessExpenses"
                          name='trustBusinessExpenses'
                          placeholder="Business Expenses"
                        />
                        <ErrorMessage component='div' className="text-danger fw-bold" name="trustBusinessExpenses" />
                      </div>
                    </div>
                  </div>
                  {/*Third row*/}

                  {/* four row */}
                  <div className="row ">
                  <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="trustClientShareofDistribution"
                          className="form-label"
                        >
                          Client’s share of Distribution %
                        </label>
                        <Field
                          type="number"
                          className="form-control inputDesign shadow"
                          id="trustClientShareofDistribution"
                          name='trustClientShareofDistribution'
                          placeholder="Client’s share of Distribution %"
                        />
                        <ErrorMessage component='div' className="text-danger fw-bold" name="trustClientShareofDistribution" />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="" className="form-label">
                          Use Business Expense Schedule
                        </label>
                        <div>
                          <span
                            className=" btn h-50 w-50 
                            btn-outline-success"
                            onClick={handleShowTrust}
                          >
                             <div className="iconContainer mx-1">
                            <img className="img-fluid" src={plus} alt="" />

                            </div>
                            Use Business Schedule
                          </span>
                        </div>

                        {/* -----------------------------Model------------------------------ */}
                        <div>
                          {/* Business Expense Schedule */}
                          <Modal
                            show={showTrust}
                            onHide={handleCloseTrust}
                            backdrop="static"
                            className="modal-lg"
                            keyboard={false}
                          >
                            <Modal.Header
                              className="text-light modalBG "
                              closeButton
                            >
                              <Modal.Title className="fontStyle">
                                Business Expense Schedule
                                <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />

                            </div>
                              </Modal.Title>
                            </Modal.Header>
                           <Formik initialValues={BusinessExpense_initialValues} 
                           validationSchema={BusinessExpense_validationSchema} onSubmit={BusinessExpense_onSubmit}>
                            <Form>
                            <Modal.Body>
                              {/*  first row*/}
                              <div className="row">
                                {/*  Business Expenses */}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="trustBusinessExpenses5"
                                      className="form-label"
                                    >
                                      Business Expenses
                                    </label>
                                    <Field
                                      id="trustBusinessExpenses5"
                                      name="trustBusinessExpenses5"
                                      readOnly
                                      className="form-control inputDesign shadow"
                                      type="number"
                                    />
                                  </div>
                                </div>
                                {/*  Business Expenses*/}

                                {/* Rent*/}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="trustRent"
                                      className="form-label"
                                    >
                                      Rent
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign  shadow"
                                      id="trustRent"
                                      name='trustRent'
                                      placeholder="Rent"
                                    />
                                    <ErrorMessage component='div' className="text-danger fw-bold" name="trustRent" />
                                  </div>
                                </div>
                                {/* soleRent*/}
                              </div>

                              {/* row 2 */}
                              <div className="row">
                                {/* Lease Costs */}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="trustLeaseCosts"
                                      className="form-label"
                                    >
                                      Lease Costs
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="trustLeaseCosts"
                                      name='trustLeaseCosts'
                                      placeholder="Lease Costs"
                                    />
                                    <ErrorMessage component='div' className="text-danger fw-bold" name="trustLeaseCosts" />
                                  </div>
                                </div>
                                {/* Lease Costs */}

                                {/* Insurances */}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="trustInsurances"
                                      className="form-label"
                                    >
                                      Insurances
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="trustInsurances"
                                      name='trustInsurances'
                                      placeholder="Insurances"
                                    />
                                    <ErrorMessage component='div' className="text-danger fw-bold" name="trustInsurances" />
                                  </div>
                                </div>
                                {/* Insurances */}
                              </div>
                              {/* row 2 */}

                              {/* row 3 */}
                              <div className="row">

                                 {/* Running Costs(Utilities) */}
                                 <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="trustRunningCosts"
                                      className="form-label"
                                    >
                                      Running Costs(Utilities)
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="trustRunningCosts"
                                      name='trustRunningCosts'
                                      placeholder="Running Costs(Utilities)"
                                    />
                                    <ErrorMessage component='div' className="text-danger fw-bold" name="trustRunningCosts" />
                                  </div>
                                </div>
                                {/* Running Costs(Utilities) */}
                                {/* Staff Costs(Wages and Super) */}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="trustStaffCostWages"
                                      className="form-label"
                                    >
                                      Staff Costs(Wages and Super)
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="trustStaffCostWages"
                                      name='trustStaffCostWages'
                                      placeholder="Staff Costs "
                                    />
                                    <ErrorMessage component='div' className="text-danger fw-bold" name="trustStaffCostWages" />
                                  </div>
                                </div>
                                {/* Staff Costs(Wages and Super)  */}

                              </div>
                              {/* row 3 */}

                               {/* row 4 */}
                               <div className="row">
                              
                                {/* Wage taking by Client*/}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="trustWageTakingByClient"
                                      className="form-label"
                                    >
                                      Wage taking by Client
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="trustWageTakingByClient"
                                      name='trustWageTakingByClient'
                                      placeholder="Wage taking by Client"
                                    />
                                    <ErrorMessage component='div' className="text-danger fw-bold" name="trustWageTakingByClient" />
                                  </div>
                                </div>
                                {/*Wage taking by Client*/}

                                 {/* Super For Client*/}
                                 <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="trustSuperForClient"
                                      className="form-label"
                                    >
                                      Super For Client
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="trustSuperForClient"
                                      name="trustSuperForClient"
                                      placeholder="Super For Client"
                                    />
                                    <ErrorMessage component='div' className="text-danger fw-bold" name="trustSuperForClient" />
                                  </div>
                                </div>
                                {/* Super For Client*/}
                              </div>
                              {/* row 4 */}

                              {/* row 5 */}
                              <div className="row">
                                {/* Wage taken by Partner*/}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="trustWageTakenByPartner"
                                      className="form-label"
                                    >
                                      Wage taken by Partner
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="trustWageTakenByPartner"
                                      name='trustWageTakenByPartner'
                                      placeholder="Wage taken by Partner"
                                    />
                                    <ErrorMessage component='div' className="text-danger fw-bold" name="trustWageTakenByPartner" />
                                  </div>
                                </div>
                                {/* Wage taken by Partner*/}

                                   {/* Super For Partner*/}
                                   <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="trustSuperForPartner"
                                      className="form-label"
                                    >
                                      Super For Partner
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="trustSuperForPartner"
                                      name='trustSuperForPartner'
                                      placeholder="Super For Partner"
                                    />
                                    <ErrorMessage component='div' className="text-danger fw-bold" name="trustSuperForPartner" />
                                  </div>
                                </div>
                                {/* Super For Partner*/}
                              </div>
                              {/* row 5 */}

                              {/* row 6 */}
                              <div className="row">
                                {/* Telephone and Internet*/}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="trustTelephoneAndInternet"
                                      className="form-label"
                                    >
                                      Telephone and Internet
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="trustTelephoneAndInternet"
                                      name='trustTelephoneAndInternet'
                                      placeholder="Telephone and Internet "
                                    />
                                    <ErrorMessage component='div' className="text-danger fw-bold" name="trustTelephoneAndInternet" />
                                  </div>
                                </div>
                                {/* Telephone and Internet */}

                                {/* Professional fees*/}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="trustProfessionalFees"
                                      className="form-label"
                                    >
                                      Professional fees (Accounting or Other)
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="trustProfessionalFees"
                                      name='trustProfessionalFees'
                                      placeholder="Professional Fees"
                                    />
                                    <ErrorMessage component='div' className="text-danger fw-bold" name="trustProfessionalFees" />
                                  </div>
                                </div>
                                {/* Professional fees (Accounting or Other) */}
                              </div>
                              {/* row 6 */}

                              {/* row 7 */}
                              <div className="row">
                                {/* All Other*/}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="trustAllOther"
                                      className="form-label"
                                    >
                                      All Other
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="trustAllOther"
                                      name='trustAllOther'
                                      placeholder="All Other"
                                    />
                                    <ErrorMessage component='div' className="text-danger fw-bold" name="trustAllOther" />
                                  </div>
                                </div>
                                {/* All Other */}

                                  {/* Loan Repayments*/}
                                  <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="trustLoanRepayments"
                                      className="form-label"
                                    >
                                      Loan Repayments
                                    </label>
                                    <Field
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="trustLoanRepayments"
                                      name='trustLoanRepayments'
                                      placeholder="Loan Repayments"
                                    />
                                    <ErrorMessage component='div' className="text-danger fw-bold" name="trustLoanRepayments" />
                                  </div>
                                </div>
                                {/* Loan Repayments*/}
                              </div>
                              {/* row 7*/}
                            </Modal.Body>
                            <Modal.Footer>
                              <div className="col-md-12">
                                <button
                                type="submit"
                                  className="float-end btn w-25  bgColor modalBtn"
                                  // onClick={handleCloseTrust}
                                >
                                  Save
                                </button>
                                <button
                                  className="float-end btn w-25  btn-outline  backBtn mx-3"
                                  onClick={handleCloseTrust}
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
                        {/* ---------------------Model---------------------------- */}
                      </div>
                    </div>

                  
                  </div>
                  {/*four row*/}

                   {/* Five row */}
                   <div className="row">
                    

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="trustPartnerShareofDistribution"
                          className="form-label"
                        >
                          Partner's share of Distribution %
                        </label>
                        <Field
                          type="number"
                          className="form-control inputDesign shadow"
                          id="trustPartnerShareofDistribution"
                          name='trustPartnerShareofDistribution'
                          placeholder="Partner's share of Distribution %"
                        />
                        <ErrorMessage component='div' className="text-danger fw-bold" name="trustPartnerShareofDistribution" />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="trustTotalNetProfitToDistribute"
                          className="form-label"
                        >
                         Total Net Profit To Distribute
                        </label>
                        <Field
                          type="number"
                          name='trustTotalNetProfitToDistribute'
                          className="form-control inputDesign shadow"
                          id="trustTotalNetProfitToDistribute"
                          placeholder="Total Net Profit To Distribute"
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                  {/*Five row*/}

                   {/*  row 6*/}
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label  className="form-label">
                      Distributions taken as cash?
                      </label>
                        {/* switch button style */}
                        <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="DistributionsTakenradio" id="DistributionsTakenopt1" 
                                onChange={handleChange} value="Yes"
                                onClick={()=>DistributionsTakenHandler("Yes")} 
                                checked={values.DistributionsTakenradio==="Yes"} />
                                <label htmlFor="DistributionsTakenopt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="DistributionsTakenradio" id="DistributionsTakenopt2"  
                                onChange={handleChange} value="No"
                                onClick={()=>DistributionsTakenHandler("No")} 
                                checked={values.DistributionsTakenradio==="No"}/>
                                <label htmlFor="DistributionsTakenopt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>
                                </div>
                              {/* switch button style */}
                      

                    </div>
                  </div>

                
                </div>
                {/*  row 6*/}

                 {/* 7 row */}
                {DistributionsTakenState &&
                 <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="trustClient"
                          className="form-label"
                        >
                          Client %
                        </label>
                        <Field
                          type="number"
                          className="form-control inputDesign shadow"
                          id="trustClient"
                          name='trustClient'
                          placeholder="Client %"
                        />
                        <ErrorMessage component='div' className="text-danger fw-bold" name="trustClient" />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="trustPartner"
                          className="form-label"
                        >
                          Partner %
                        </label>
                        <Field
                          type="number"
                          className="form-control inputDesign shadow"
                          id="trustPartner"
                          name='trustPartner'
                          placeholder="Partner %"
                        />
                        <ErrorMessage component='div' className="text-danger fw-bold" name="trustPartner" />
                      </div>
                    </div>
                  </div>}
                  {/*7 row*/}

                  <div className="row my-3">
                    <div className="col-md-12">
                      <button  type='submit' className="float-end btn w-25  bgColor modalBtn">Next</button>
                      <button className="float-end btn w-25  btn-outline  backBtn mx-3" onClick={BackFunction}>Back</button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            {/*------------------------------------Business Trust------------------------------------*/}


            </Form>
            }
            </Formik>


          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessTextStucture;
