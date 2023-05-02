import { React, useState, useEffect } from 'react';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage, validateYupSchema } from 'formik';
import { Modal } from 'react-bootstrap';

import plus from './images/plus.svg'
import accounting from './images/accounting.svg'
import businessman from './images/businessman.svg'
import doctor from './images/doctor.svg'
import lawyer from './images/lawyer.svg'
import notebook from './images/notebook.svg'
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';


function SuperRetriement() {

  //NESTED INVESTMENT MODAL STATES
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [InvestmentModal, setInvestmentModal] = useState([]);

  //PARTNER
  const [showPartner, setShowPartner] = useState(false);
  const handleClosePartner = () => setShowPartner(false);
  const handleShowPartner = () => setShowPartner(true);

  const [InvestmentModalPartner, setInvestmentModalPartner] = useState([]);
  //NESTED INVESTMENT MODAL STATES

  // NESTED INSURANCE MODAL STATES
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  // CONDITIONAL RENDERING
  let investmentRadioHandler = (data) => {

    if (data === 'Yes') {
      alert('yess')
    }
    else {
      alert('No')
    }
  }
  const [InsuranceDataList,setInsuranceDataList]=useState([])

  //PARTNER NESTED INSURANCE
  const [showPartner2, setShowPartner2] = useState(false);
  const handleClosePartner2 = () => setShowPartner2(false);
  const handleShowPartner2 = () => setShowPartner2(true);
  
  const [InsuranceDataPartnerList,setInsuranceDataPartnerList]=useState([])
  
  //PARTNER NESTED INSURANCE
  // NESTED INSURANCE MODAL STATES

  // NESTED BENFICIARIES MODAL STATES
  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const [BeneficiaryDataList, setBeneficiaryDataList] = useState([])

  //PARTNER NESTED MODAL
  const [showPartner3, setShowPartner3] = useState(false);
  const handleClosePartner3 = () => setShowPartner3(false);
  const handleShowPartner3 = () => setShowPartner3(true);

  const [BeneficiaryDataPartnerList, setBeneficiaryDataPartnerList] = useState([])
  //PARTNER NESTED MODAL
  // NESTED BENFICIARIES MODAL STATES

  // NESTED CONTRIBUTIONS MODAL STATES
  const [show4, setShow4] = useState(false);
  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  const [contributionModal, setcontributionModal] = useState([]);

  //PARTNER NESTED CONTRIBUTION MODAL
  
  const [showPartner4, setShowPartner4] = useState(false);
  const handleClosePartner4 = () => setShowPartner4(false);
  const handleShowPartner4 = () => setShowPartner4(true);

  const [contributionPartnerModal, setcontributionPartnerModal] = useState([]);
  //PARTNER NESTED CONTRIBUTION MODAL
  // NESTED CONTRIBUTIONS MODAL STATES

  let partner = window.localStorage.getItem("partner");
  const [isPartnered, setIsPartnered] = useState()

  useEffect(() => {
    if (partner == "true") {
      setIsPartnered(true)
    }
    else {
      setIsPartnered(false)

    }

  }, [])

  const [Super, setSuper] = useState(false);
  const [Supershow, setSuperShow] = useState(false);
  const SuperhandleClose = () => setSuperShow(false);
  const SuperhandleShow = () => setSuperShow(true);


  let SuperHandler = (elem) => {
    if (elem === "No") {
      setSuper(false)
    }
    else {
      setSuper(true)
    }
  }

  const [Super2, setSuper2] = useState(false);
  const [Super2show, setSuper2Show] = useState(false);
  const Super2handleClose = () => setSuper2Show(false);
  const Super2handleShow = () => setSuper2Show(true);
  let Super2Handler = (elem) => {
    if (elem === "No") {
      setSuper2(false)
    }
    else {
      setSuper2(true)
    }
  }

  const [Pension, setPension] = useState(false);
  const [Pensionshow, setPensionShow] = useState(false);
  const PensionhandleClose = () => setPensionShow(false);
  const PensionhandleShow = () => setPensionShow(true);
  let PensionHandler = (elem) => {
    if (elem === "No") {
      setPension(false)
    }
    else {
      setPension(true)
    }
  }

  const [Pension2, setPension2] = useState(false);
  const [Pension2show, setPension2Show] = useState(false);
  const Pension2handleClose = () => setPension2Show(false);
  const Pension2handleShow = () => setPension2Show(true);
  let Pension2Handler = (elem) => {
    if (elem === "No") {
      setPension2(false)
    }
    else {
      setPension2(true)
    }
  }

  const [Annuities, setAnnuities] = useState(false);
  const [Annuitiesshow, setAnnuitiesShow] = useState(false);
  const AnnuitieshandleClose = () => setAnnuitiesShow(false);
  const AnnuitieshandleShow = () => setAnnuitiesShow(true);
  let AnnuitiesHandler = (elem) => {
    if (elem === "No") {
      setAnnuities(false)
    }
    else {
      setAnnuities(true)
    }
  }

  const [Annuities2, setAnnuities2] = useState(false);
  const [Annuities2show, setAnnuities2Show] = useState(false);
  const Annuities2handleClose = () => setAnnuities2Show(false);
  const Annuities2handleShow = () => setAnnuities2Show(true);
  let Annuities2Handler = (elem) => {
    if (elem === "No") {
      setAnnuities2(false)
    }
    else {
      setAnnuities2(true)
    }
  }

  const [LifetimePension, setLifetimePension] = useState(false);
  const [LifetimePensionshow, setLifetimePensionShow] = useState(false);
  const LifetimePensionhandleClose = () => setLifetimePensionShow(false);
  const LifetimePensionhandleShow = () => setLifetimePensionShow(true);
  let LifetimePensionHandler = (elem) => {
    if (elem === "No") {
      setLifetimePension(false)
    }
    else {
      setLifetimePension(true)
    }
  }

  const [LifetimePension2, setLifetimePension2] = useState(false);
  const [LifetimePension2show, setLifetimePension2Show] = useState(false);
  const LifetimePension2handleClose = () => setLifetimePension2Show(false);
  const LifetimePension2handleShow = () => setLifetimePension2Show(true);
  let LifetimePension2Handler = (elem) => {
    if (elem === "No") {
      setLifetimePension2(false)
    }
    else {
      setLifetimePension2(true)
    }
  }


  let Navigate = useNavigate();
  function BackFunction() {
    Navigate('/Estate-Planning')
  }
  let Client_initialValues = {
    SuperFundName: '',
    SuperMemberNo: '',
    SuperFundType: '',
    SuperContactNO: '',
    SuperFaxNO: '',
    SuperPostalAddress: '',
    SuperABN: '',
    SuperSPIN: '',
    SuperWebsite: '',
    SuperEmail: '',
    SuperFundType2: '',
    SuperCommencementDate: '',
    SuperEligibleDate: '',
    SuperTFNQuoted: 'No',
    SuperCurrentBalance: '',
    SuperTaxFree: '',
    SuperTaxed: '',
    SuperRestrictionNonPreserved: '',
    SuperUnRestrictionNonPreserved: '',
    SuperPreservedAmount: '',

    PensionFundName: '',
    PensionMemberNo: '',
    PensionFundType: '',
    PensionContactNO: '',
    PensionFaxNO: '',
    PensionPostalAddress: '',
    PensionABN: '',
    PensionSPIN: '',
    PensionWebsite: '',
    PensionEmail: '',
    PensionFundType2: '',
    PensionCommencementDate: '',
    PensionEligibleDate: '',
    PensionCurrentBalance: '',
    PensionTaxFree: '',
    PensionTaxed: '',
    PensionPurchasePrice: '',
    PensionFrequency: '',
    PensionRegularIncomeDrawn: '',
    PensionMinimumRequired: '',
    PensionRelevantNumber: '',
    PensionPurchasePrice: '',
    PensionLumpsumTaken: '',
    PensionDeductibleAmount: '',

    AnnuitiesProductProvider: '',
    AnnuitiesOriginalInvestment: '',
    AnnuitiesCurrentValue: '',
    AnnuitiesAnnuityType: '',
    AnnuitiesRCV: '',
    AnnuitiesTerm: '',
    AnnuitiesMaturityYears: '',
    AnnuitiesRegularIncomeDrawn: '',
    AnnuitiesFrequency: '',
    AnnuitiesInflationRate: '',

    LifetimePensionFundName: '',
    LifetimePensionIncomeDrawn: '',
    LifetimePensionFrequency: '',
    LifetimePensionDeductibleAmount: '',
    LifetimePensionTaxFree: 'No',
    LifetimePensionTaxableAmount: ''
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

    Super2FundName: '',
    Super2MemberNo: '',
    Super2FundType: '',
    Super2ContactNO: '',
    Super2FaxNO: '',
    Super2PostalAddress: '',
    Super2ABN: '',
    Super2SPIN: '',
    Super2Website: '',
    Super2Email: '',
    Super2FundType2: '',
    Super2CommencementDate: '',
    Super2EligibleDate: '',
    Super2TFNQuoted: 'No',
    Super2CurrentBalance: '',
    Super2TaxFree: '',
    Super2Taxed: '',
    Super2RestrictionNonPreserved: '',
    Super2UnRestrictionNonPreserved: '',
    Super2PreservedAmount: '',

    Pension2FundName: '',
    Pension2MemberNo: '',
    Pension2FundType: '',
    Pension2ContactNO: '',
    Pension2FaxNO: '',
    Pension2PostalAddress: '',
    Pension2ABN: '',
    Pension2SPIN: '',
    Pension2Website: '',
    Pension2Email: '',
    Pension2FundType2: '',
    Pension2CommencementDate: '',
    Pension2EligibleDate: '',
    Pension2CurrentBalance: '',
    Pension2TaxFree: '',
    Pension2Taxed: '',
    Pension2PurchasePrice: '',
    Pension2Frequency: '',
    Pension2RegularIncomeDrawn: '',
    Pension2MinimumRequired: '',
    Pension2RelevantNumber: '',
    Pension2PurchasePrice: '',
    Pension2LumpsumTaken: '',
    Pension2DeductibleAmount: '',

    Annuities2ProductProvider: '',
    Annuities2OriginalInvestment: '',
    Annuities2CurrentValue: '',
    Annuities2AnnuityType: '',
    Annuities2RCV: '',
    Annuities2Term: '',
    Annuities2MaturityYears: '',
    Annuities2RegularIncomeDrawn: '',
    Annuities2Frequency: '',
    Annuities2InflationRate: '',

    LifetimePension2FundName: '',
    LifetimePension2IncomeDrawn: '',
    LifetimePension2Frequency: '',
    LifetimePension2DeductibleAmount: '',
    LifetimePension2TaxFree: 'No',
    LifetimePension2TaxableAmount: ''
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
      .post('http://localhost:7000/Client-Retirement/Add-Client-SuperAccount', SuperAccountDetails)
      .then((res) => console.log('Client Super Account Added Successfully!'))
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
      .post('http://localhost:7000/Partner-Retirement/Add-Partner-SuperAccount', SuperAccountDetails)
      .then((res) => console.log('Partner Super Account Added Successfully!'))
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
      .post('http://localhost:7000/Client-Retirement/Add-Client-PensionAccount', PensionAccountDetails)
      .then((res) => console.log('Client Pension Account Added Successfully!'))
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
      .post('http://localhost:7000/Partner-Retirement/Add-Partner-PensionAccount', PensionAccountDetails)
      .then((res) => console.log('Partner Pension Account Added Successfully!'))
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
      .post('http://localhost:7000/Client-Retirement/Add-Client-AnnuitiesAccount', ClientAnnuitiesDetails)
      .then((res) => console.log('Client Annuities Added Successfully!'))
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
      .post('http://localhost:7000/Partner-Retirement/Add-Partner-AnnuitiesAccount', PartnerAnnuitiesDetails)
      .then((res) => console.log('Partner Annuities Added Successfully!'))
    console.log(PartnerAnnuitiesDetails)

  }

  let ClientLifetimePension_onSubmit = (values) => {

    LifetimePensionhandleClose();
    let ClientLifetimePensionDetails = {
      Email: localStorage.getItem("ClientEmail"),
      LifePension_FundName: values.LifetimePensionFundName,
      LifePension_RegularIncome: values.LifetimePensionIncomeDrawn,
      LifePension_Frequency: values.LifetimePensionFrequency,
      LifePension_DeductibleAmount: values.LifetimePensionDeductibleAmount,
      LifePension_TaxFree_Pension: values.LifetimePensionTaxFree,
      LifePension_TaxablePensionAmount: values.LifetimePensionTaxableAmount
    }

    axios
      .post('http://localhost:7000/Client-Retirement/Add-Client-LifetimePension', ClientLifetimePensionDetails)
      .then((res) => console.log('Client Annuities Added Successfully!'))
    console.log(ClientLifetimePensionDetails)
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
      .post('http://localhost:7000/Partner-Retirement/Add-Partner-LifetimePension', PartnerLifetimePensionDetails)
      .then((res) => console.log('Partner Annuities Added Successfully!'))
    console.log(PartnerLifetimePensionDetails)
  }

  let initialValues = {
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
    // Navigate('/SMSF')
    let clientData = {
      Email: localStorage.getItem("ClientEmail"),
      Super: Values.SuperRadio,
      AccountPension: Values.PensionRadio,
      Annuities: Values.AnnuitiesRadio,
      LifetimePension: Values.LifetimePensionRadio,
    }

    let partnerData = {
      Email: localStorage.getItem("ClientEmail"),
      Super: Values.Super2Radio,
      AccountPension: Values.Pension2Radio,
      Annuities: Values.Annuities2Radio,
      LifetimePension: Values.LifetimePension2Radio
    }
    console.log(clientData)
    console.log(partnerData)

    if (isPartnered == true) {

      axios
        .post('http://localhost:7000/Client-Retirement/Add-Client-Retirement', clientData)
        .then((ref) => {
          console.log("Client Data Added Successfully")
        })

      axios
        .post('http://localhost:7000/Partner-Retirement/Add-Partner', partnerData)
        .then((res) => {
          console.log("Partner Data Added Successfully")
        })

    }
    else {

      axios
        .post('http://localhost:7000/Client-Retirement/Add-Client-Retirement', clientData)
        .then((ref) => {
          console.log("Client Data Added Successfully")
        })

    }


  }
  // InvestmentOptionDetails Client FORMIK DATA
  let initialValuesInvestmentOptionDetails = {
    InvestmentOptionDetailsInvestment: "",
    InvestmentOptionDetailsCurrentValue: ""

  }
  let validateYupSchemaInvestmentOptionDetails = Yup.object({
    InvestmentOptionDetailsInvestment: Yup.string().required("*Required"),
    InvestmentOptionDetailsCurrentValue: Yup.number().required("*Required")
  })
  let On_submit_validateYupSchemaInvestmentOptionDetails = (values) => {
    handleClose();
    let InvestmentOptionDetailsData = {
      InvestmentOptionDetailsInvestment: values.InvestmentOptionDetailsInvestment,
      InvestmentOptionDetailsCurrentValue: values.InvestmentOptionDetailsCurrentValue
    }
    setInvestmentModal([InvestmentOptionDetailsData]);
    console.log(InvestmentOptionDetailsData);
  }
//PARTNER INVESTMENT 
  let initialValuesInvestmentPartnerOptionDetails = {
    InvestmentOptionDetailsInvestmentPartner: "",
    InvestmentOptionDetailsCurrentValuePartner: ""

  }
  let validateYupSchemaInvestmentPartnerOptionDetails = Yup.object({
    InvestmentOptionDetailsInvestmentPartner: Yup.string().required("*Required"),
    InvestmentOptionDetailsCurrentValuePartner: Yup.number().required("*Required")
  })
  let On_submit_validateYupSchemaInvestmentPartnerOptionDetails = (values) => {
    handleClosePartner();
    let InvestmentOptionDetailsData = {
      InvestmentOptionDetailsInvestmentPartner: values.InvestmentOptionDetailsInvestmentPartner,
      InvestmentOptionDetailsCurrentValuePartner: values.InvestmentOptionDetailsCurrentValuePartner
    }
    setInvestmentModalPartner([InvestmentOptionDetailsData]);
    console.log(InvestmentOptionDetailsData);
  }
  //PARTNER INVESTMENT
  // InvestmentOptionDetails FORMIK DATA

  // CLIENT SUPER ACCOUNT --> CONTRIBUTIONS
  let initialValuesContributionOptionDetails = {
    Non_Concessional1: "",
    Other1: "",
    EmployerContributions1: "",
    SalarySacAndPersonalDed1: "",

    Non_Concessional2: "",
    Other2: "",
    EmployerContributions2: "",
    SalarySacAndPersonalDed2: "",

    Non_Concessional3: "",
    Other3: "",
    EmployerContributions3: "",
    SalarySacAndPersonalDed3: "",
  }
  let validateYupSchemaContributionOptionDetails = Yup.object({

    Non_Concessional1: Yup.number().required("*Required"),
    Other1: Yup.number().required("*Required"),
    EmployerContributions1: Yup.number().required("*Required"),
    SalarySacAndPersonalDed1: Yup.number().required("*Required"),

    Non_Concessional2: Yup.number().required("*Required"),
    Other2: Yup.number().required("*Required"),
    EmployerContributions2: Yup.number().required("*Required"),
    SalarySacAndPersonalDed2: Yup.number().required("*Required"),

    Non_Concessional3: Yup.number().required("*Required"),
    Other3: Yup.number().required("*Required"),
    EmployerContributions3: Yup.number().required("*Required"),
    SalarySacAndPersonalDed3: Yup.number().required("*Required")
  });

  let On_submit_validateYupSchemaContributionOptionDetails = (values) => {

    handleClose4();
    // console.log(values)

    let ContributionOptionDetailsData = {

      Non_Concessional1: values.Non_Concessional1,
      Other1: values.Other1,
      EmployerContributions1: values.EmployerContributions1,
      SalarySacAndPersonalDed1: values.SalarySacAndPersonalDed1,

      Non_Concessional2: values.Non_Concessional2,
      Other2: values.Other2,
      EmployerContributions2: values.EmployerContributions2,
      SalarySacAndPersonalDed2: values.SalarySacAndPersonalDed2,

      Non_Concessional3: values.Non_Concessional3,
      Other3: values.Other3,
      EmployerContributions3: values.EmployerContributions3,
      SalarySacAndPersonalDed3: values.SalarySacAndPersonalDed3

    }
    setcontributionModal([ContributionOptionDetailsData]);
    console.log(ContributionOptionDetailsData);
  }
//PARTNER SUPER ACCOUNT --> CONTRIBUTION
let initialValuesContributionPartnerOptionDetails = {
  Non_ConcessionalPartner1: "",
  OtherPartner1: "",
  EmployerContributionsPartner1: "",
  SalarySacAndPersonalDedPartner1: "",

  Non_ConcessionalPartner2: "",
  OtherPartner2: "",
  EmployerContributionsPartner2: "",
  SalarySacAndPersonalDedPartner2: "",

  Non_ConcessionalPartner3: "",
  OtherPartner3: "",
  EmployerContributionsPartner3: "",
  SalarySacAndPersonalDedPartner3: "",
}
let validateYupSchemaContributionPartnerOptionDetails = Yup.object({

  Non_ConcessionalPartner1: Yup.number().required("*Required"),
  OtherPartner1: Yup.number().required("*Required"),
  EmployerContributionsPartner1: Yup.number().required("*Required"),
  SalarySacAndPersonalDedPartner1: Yup.number().required("*Required"),

  Non_ConcessionalPartner2: Yup.number().required("*Required"),
  OtherPartner2: Yup.number().required("*Required"),
  EmployerContributionsPartner2: Yup.number().required("*Required"),
  SalarySacAndPersonalDedPartner2: Yup.number().required("*Required"),

  Non_ConcessionalPartner3: Yup.number().required("*Required"),
  OtherPartner3: Yup.number().required("*Required"),
  EmployerContributionsPartner3: Yup.number().required("*Required"),
  SalarySacAndPersonalDedPartner3: Yup.number().required("*Required")
});

let On_submit_validateYupSchemaContributionPartnerOptionDetails = (values) => {

  handleClosePartner4();
  // console.log(values)

  let ContributionOptionDetailsData = {

    Non_ConcessionalPartner1: values.Non_ConcessionalPartner1,
    OtherPartner1: values.OtherPartner1,
    EmployerContributionsPartner1: values.EmployerContributionsPartner1,
    SalarySacAndPersonalDedPartner1: values.SalarySacAndPersonalDedPartner1,

    Non_ConcessionalPartner2: values.Non_ConcessionalPartner2,
    OtherPartner2: values.OtherPartner2,
    EmployerContributionsPartner2: values.EmployerContributionsPartner2,
    SalarySacAndPersonalDedPartner2: values.SalarySacAndPersonalDedPartner2,

    Non_ConcessionalPartner3: values.Non_ConcessionalPartner3,
    OtherPartner3: values.OtherPartner3,
    EmployerContributionsPartner3: values.EmployerContributionsPartner3,
    SalarySacAndPersonalDedPartner3: values.SalarySacAndPersonalDedPartner3

  }
  setcontributionPartnerModal([ContributionOptionDetailsData]);
  console.log(ContributionOptionDetailsData);
}

//PARTNER SUPER ACCOUNT --> CONTRIBUTION
  // CLIENT SUPER ACCOUNT --> BENEFICIARIES
  let initialValuesBeneficiariesOptionDetails = {

    beneficiariesAttached1: "",
    NomiationTypeBeneficiary: "",

    Beneficiary1: "",
    ShareofBenefit1: "",
    RelationshipOptionDetailsRelationship1: "",

    Beneficiary2: "",
    ShareofBenefit2: "",
    RelationshipOptionDetailsRelationship2: "",

    Beneficiary3: "",
    ShareofBenefit3: "",
    RelationshipOptionDetailsRelationship3: "",

    Beneficiary4: "",
    ShareofBenefit4: "",
    RelationshipOptionDetailsRelationship4: "",

    Beneficiary5: "",
    ShareofBenefit5: "",
    RelationshipOptionDetailsRelationship5: ""

  }
  let validateYupSchemaBeneficiariesOptionDetails = Yup.object({

    Beneficiary1: Yup.string().required("*Required"),
    ShareofBenefit1: Yup.number("only Numbers allowed").required("*Required"),
    RelationshipOptionDetailsRelationship1: Yup.string().required("*Required"),

    Beneficiary2: Yup.string().required("*Required"),
    ShareofBenefit2: Yup.number("only Numbers allowed").required("*Required"),
    RelationshipOptionDetailsRelationship2: Yup.string().required("*Required"),


    Beneficiary3: Yup.string().required("*Required"),
    ShareofBenefit3: Yup.number("only Numbers allowed").required("*Required"),
    RelationshipOptionDetailsRelationship3: Yup.string().required("*Required"),

    Beneficiary4: Yup.string().required("*Required"),
    ShareofBenefit4: Yup.number("only Numbers allowed").required("*Required"),
    RelationshipOptionDetailsRelationship4: Yup.string().required("*Required"),

    Beneficiary5: Yup.string().required("*Required"),
    ShareofBenefit5: Yup.number("only Numbers allowed").required("*Required"),
    RelationshipOptionDetailsRelationship5: Yup.string().required("*Required")

  })
  let On_submit_validateYupSchemaBeneficiariesOptionDetails = (values) => {
    handleClose3();
    let BeneficiaryData = {

      beneficiariesAttached1: values.beneficiariesAttached1,
      NomiationTypeBeneficiary: values.NomiationTypeBeneficiary,

      Beneficiary1: values.Beneficiary1,
      ShareofBenefit1: values.ShareofBenefit1,
      RelationshipOptionDetailsRelationship1: values.RelationshipOptionDetailsRelationship1,

      Beneficiary2: values.Beneficiary2,
      ShareofBenefit2: values.ShareofBenefit2,
      RelationshipOptionDetailsRelationship2: values.RelationshipOptionDetailsRelationship2,

      Beneficiary3: values.Beneficiary3,
      ShareofBenefit3: values.ShareofBenefit3,
      RelationshipOptionDetailsRelationship3: values.RelationshipOptionDetailsRelationship3,

      Beneficiary4: values.Beneficiary4,
      ShareofBenefit4: values.ShareofBenefit4,
      RelationshipOptionDetailsRelationship4: values.RelationshipOptionDetailsRelationship4,

      Beneficiary5: values.Beneficiary5,
      ShareofBenefit5: values.ShareofBenefit5,
      RelationshipOptionDetailsRelationship5: values.RelationshipOptionDetailsRelationship5

    }

    console.log(BeneficiaryData)
    setBeneficiaryDataList([BeneficiaryDataList])
  }
  // PARTNER SUPER ACCOUNT->BENEFICIARIES
  let initialValuesBeneficiariesPartnerOptionDetails = {

    // beneficiariesPartnerAttached1: "",
    // NomiationTypePartnerBeneficiary: "",

    BeneficiaryPartner1: "",
    ShareofBenefitPartner1: "",
    RelationshipOptionDetailsRelationshipPartner1: "",

    BeneficiaryPartner2: "",
    ShareofBenefitPartner2: "",
    RelationshipOptionDetailsRelationshipPartner2: "",

    BeneficiaryPartner3: "",
    ShareofBenefitPartner3: "",
    RelationshipOptionDetailsRelationshipPartner3: "",

    BeneficiaryPartner4: "",
    ShareofBenefitPartner4: "",
    RelationshipOptionDetailsRelationshipPartner4: "",

    BeneficiaryPartner5: "",
    ShareofBenefitPartner5: "",
    RelationshipOptionDetailsRelationshipPartner5: ""

  }
  let validateYupSchemaBeneficiariesOptionPartnerDetails = Yup.object({

    BeneficiaryPartner1: Yup.string().required("*Required"),
    ShareofBenefitPartner1: Yup.number("only Numbers allowed").required("*Required"),
    RelationshipOptionDetailsRelationshipPartner1: Yup.string().required("*Required"),

    BeneficiaryPartner2: Yup.string().required("*Required"),
    ShareofBenefitPartner2: Yup.number("only Numbers allowed").required("*Required"),
    RelationshipOptionDetailsRelationshipPartner2: Yup.string().required("*Required"),


    BeneficiaryPartner3: Yup.string().required("*Required"),
    ShareofBenefitPartner3: Yup.number("only Numbers allowed").required("*Required"),
    RelationshipOptionDetailsRelationshipPartner3: Yup.string().required("*Required"),

    BeneficiaryPartner4: Yup.string().required("*Required"),
    ShareofBenefitPartner4: Yup.number("only Numbers allowed").required("*Required"),
    RelationshipOptionDetailsRelationshipPartner4: Yup.string().required("*Required"),

    BeneficiaryPartner5: Yup.string().required("*Required"),
    ShareofBenefitPartner5: Yup.number("only Numbers allowed").required("*Required"),
    RelationshipOptionDetailsRelationshipPartner5: Yup.string().required("*Required")

  })
  let On_submit_validateYupSchemaPartnerBeneficiariesOptionDetails = (values) => {
    handleClosePartner3();
    let BeneficiaryData = {

      // beneficiariesPartnerAttached1: values.beneficiariesPartnerAttached1,
      // NomiationTypePartnerBeneficiary: values.NomiationTypePartnerBeneficiary,

      BeneficiaryPartner1: values.BeneficiaryPartner1,
      ShareofBenefitPartner1: values.ShareofBenefitPartner1,
      RelationshipOptionDetailsRelationshipPartner1: values.RelationshipOptionDetailsRelationshipPartner1,

      BeneficiaryPartner2: values.BeneficiaryPartner2,
      ShareofBenefitPartner2: values.ShareofBenefitPartner2,
      RelationshipOptionDetailsRelationshipPartner2: values.RelationshipOptionDetailsRelationshipPartner2,

      BeneficiaryPartner3: values.BeneficiaryPartner3,
      ShareofBenefitPartner3: values.ShareofBenefitPartner3,
      RelationshipOptionDetailsRelationshipPartner3: values.RelationshipOptionDetailsRelationshipPartner3,

      BeneficiaryPartner4: values.BeneficiaryPartner4,
      ShareofBenefitPartner4: values.ShareofBenefitPartner4,
      RelationshipOptionDetailsRelationshipPartner4: values.RelationshipOptionDetailsRelationshipPartner4,

      BeneficiaryPartner5: values.BeneficiaryPartner5,
      ShareofBenefitPartner5: values.ShareofBenefitPartner5,
      RelationshipOptionDetailsRelationshipPartner5: values.RelationshipOptionDetailsRelationshipPartner5

    }

    console.log(BeneficiaryData)
    setBeneficiaryDataList([BeneficiaryDataList])
  }

  // PARTNER SUPER ACCOUNT->BENEFICIARIES

// CLIENT SUPER ACCOUNT->INSURANCE
let initialValuesInsuranceOptionDetails={
  // insuranceAttachedOption:"",
  // insuranceLifeTPDAttached:"",

  // Row 1
  CoverType:"",
  LifeCover:"",
  TPDCover:"",

  //Row 2
  CostPA:"",
  PremiumType:"",
  anyLoadingOrExclusionsAttached:"",

  //Row 3
  Pleaseprovidedetails:"",
  incomeProtectionAttached:"",
  MonthlyBenefit:"",

  //Row 4
  waitingPeriod:"",
  benefitPeriod:"",
  agreedOrIndemnity:"",

  //Row 5
  CostPASecond:"",
  PremiumTypeSecond:"",
  IncludesSuperContinuance:"",

  //Row 6
  Isthebenefitindexed:"",
  AnyLoadingOrExclusions:"",
  PleaseprovidedetailsSecond:""
}
let validateYupSchemaInsuranceOptionDetails= Yup.object({
  
  // insuranceAttachedOption:Yup.string("*Required"),
  // insuranceLifeTPDAttached:Yup.string("*Required"),

  // Row 1
  CoverType:Yup.string("*Required"),
  LifeCover:Yup.number("*Required"),
  TPDCover:Yup.number("*Required"),

  //Row 2
  CostPA:Yup.number("*Required"),
  PremiumType:Yup.string("*Required"),
  // anyLoadingOrExclusionsAttached:Yup.string("*Required"),

  //Row 3
  Pleaseprovidedetails:Yup.string("*Required"),
  // incomeProtectionAttached:Yup.string("*Required"),
  MonthlyBenefit:Yup.number("*Required"),

  //Row 4
  waitingPeriod:Yup.string("*Required"),
  benefitPeriod:Yup.string("*Required"),
  agreedOrIndemnity:Yup.string("*Required"),

  //Row 5
  CostPASecond:Yup.number("*Required"),
  PremiumTypeSecond:Yup.string("*Required"),
  // IncludesSuperContinuance:Yup.string("*Required"),

  //Row 6
  // Isthebenefitindexed:Yup.string("*Required"),
  // AnyLoadingOrExclusions:Yup.string("*Required"),
  PleaseprovidedetailsSecond:Yup.string("*Required")
})
let On_submit_validateYupSchemaInsuranceOptionDetails = (values) => {
  handleClose2();
  let InsuranceData={

  // insuranceAttachedOption:"",
  // insuranceLifeTPDAttached:"",

  // Row 1
  CoverType:values.CoverType,
  LifeCover:values.LifeCover,
  TPDCover:values.TPDCover,

  //Row 2
  CostPA:values.CostPA,
  PremiumType:values.PremiumType,
  // anyLoadingOrExclusionsAttached:values.anyLoadingOrExclusionsAttached,

  //Row 3
  Pleaseprovidedetails:values.Pleaseprovidedetails,
  // incomeProtectionAttached:values.incomeProtectionAttached,
  MonthlyBenefit:values.MonthlyBenefit,

  //Row 4
  waitingPeriod:values.waitingPeriod,
  benefitPeriod:values.benefitPeriod,
  agreedOrIndemnity:values.agreedOrIndemnity,

  //Row 5
  CostPASecond:values.CostPASecond,
  PremiumTypeSecond:values.PremiumTypeSecond,
  // IncludesSuperContinuance:values.IncludesSuperContinuance,

  //Row 6
  // Isthebenefitindexed:values.Isthebenefitindexed,
  // AnyLoadingOrExclusions:values.AnyLoadingOrExclusions,
  PleaseprovidedetailsSecond:values.PleaseprovidedetailsSecond

  }
  setInsuranceDataList([InsuranceData]);
  console.log(InsuranceData);
 }
//  SUPER ACCOUNT -> PARTNER INSURANCE
let initialValuesInsurancePartnerOptionDetails={
  // insurancePartnerAttachedOption:"",
  // insuranceLifeTPDPartnerAttached:"",

  // Row 1
  CoverTypePartner:"",
  LifeCoverPartner:"",
  TPDCoverPartner:"",

  //Row 2
  CostPAPartner:"",
  PremiumTypePartner:"",
  anyLoadingOrExclusionsPartnerAttached:"",

  //Row 3
  PleaseprovidePartnerdetails:"",
  incomeProtectionPartnerAttached:"",
  MonthlyBenefitPartner:"",

  //Row 4
  waitingPeriodPartner:"",
  benefitPeriodPartner:"",
  agreedOrIndemnityPartner:"",

  //Row 5
  CostPASecondPartner:"",
  PremiumTypeSecondPartner:"",
  IncludesSuperContinuancePartner:"",

  //Row 6
  IsthebenefitindexedPartner:"",
  AnyLoadingOrExclusionsPartner:"",
  PleaseprovidedetailsSecondPartner:""
}
let validateYupSchemaInsurancePartnerOptionDetails= Yup.object({
  
  // insurancePartnerAttachedOption:Yup.string("*Required"),
  // insuranceLifeTPDPartnerAttached:Yup.string("*Required"),

  // Row 1
  CoverTypePartner:Yup.string("*Required"),
  LifeCoverPartner:Yup.number("*Required"),
  TPDCoverPartner:Yup.number("*Required"),

  //Row 2
  CostPAPartner:Yup.number("*Required"),
  PremiumTypePartner:Yup.string("*Required"),
  // anyLoadingOrExclusionsPartnerAttached:Yup.string("*Required"),

  //Row 3
  PleaseprovidePartnerdetails:Yup.string("*Required"),
  // incomeProtectionPartnerAttached:Yup.string("*Required"),
  MonthlyBenefitPartner:Yup.number("*Required"),

  //Row 4
  waitingPeriodPartner:Yup.string("*Required"),
  benefitPeriodPartner:Yup.string("*Required"),
  agreedOrIndemnityPartner:Yup.string("*Required"),

  //Row 5
  CostPASecondPartner:Yup.number("*Required"),
  PremiumTypeSecondPartner:Yup.string("*Required"),
  // IncludesSuperContinuancePartner:Yup.string("*Required"),

  //Row 6
  // IsthebenefitindexedPartner:Yup.string("*Required"),
  // AnyLoadingOrExclusionsPartner:Yup.string("*Required"),
  PleaseprovidedetailsSecondPartner:Yup.string("*Required")
})
let On_submit_validateYupSchemaInsurancePartnerOptionDetails = (values) => {
  handleClosePartner2();
  let InsuranceData={

  // insurancePartnerAttachedOption:"",
  // insuranceLifeTPDPartnerAttached:"",

  // Row 1
  CoverTypePartner:values.CoverTypePartner,
  LifeCoverPartner:values.LifeCoverPartner,
  TPDCoverPartner:values.TPDCoverPartner,

  //Row 2
  CostPAPartner:values.CostPAPartner,
  PremiumTypePartner:values.PremiumTypePartner,
  // anyLoadingOrExclusionsPartnerAttached:values.anyLoadingOrExclusionsPartnerAttached,

  //Row 3
  PleaseprovidePartnerdetails:values.PleaseprovidePartnerdetails,
  // incomeProtectionPartnerAttached:values.incomeProtectionPartnerAttached,
  MonthlyBenefitPartner:values.MonthlyBenefitPartner,

  //Row 4
  waitingPeriodPartner:values.waitingPeriodPartner,
  benefitPeriodPartner:values.benefitPeriodPartner,
  agreedOrIndemnityPartner:values.agreedOrIndemnityPartner,

  //Row 5
  CostPASecondPartner:values.CostPASecondPartner,
  PremiumTypeSecondPartner:values.PremiumTypeSecondPartner,
  // IncludesSuperContinuancePartner:values.IncludesSuperContinuancePartner,

  //Row 6
  // IsthebenefitindexedPartner:values.IsthebenefitindexedPartner,
  // AnyLoadingOrExclusionsPartner:values.AnyLoadingOrExclusionsPartner,
  PleaseprovidedetailsSecondPartner:values.PleaseprovidedetailsSecondPartner

  }
  setInsuranceDataPartnerList([InsuranceData]);
  console.log(InsuranceData);
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
            <Formik initialValues={initialValues} onSubmit={onSubmit} enableReinitialize>
              {({ values, handleChange }) =>
                <Form>

                  {/* Super Details */}
                  <div className='mb-5'>
                    <h3 className="">Client Super Accounts</h3>

                    {/* 1 row */}
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Do you have any Super Accounts?
                          </label>
                          {/* switch button style */}
                          <div className="form-check form-switch m-0 p-0 ">
                            <div className="radiobutton">
                              <input type="radio" name="SuperRadio"
                                id="SuperRadioopt1" value="Yes"
                                onClick={() => SuperHandler("Yes")}
                                onChange={handleChange}
                                checked={values.SuperRadio === "Yes"}
                              />
                              <label htmlFor="SuperRadioopt1" className="label1">
                                <span>YES</span>
                              </label>
                              <input type="radio" name="SuperRadio"
                                id="SuperRadioopt2" value="No"
                                onClick={() => SuperHandler("No")}
                                onChange={handleChange}
                                checked={values.SuperRadio === "No"}
                              />
                              <label htmlFor="SuperRadioopt2" className="label2">
                                <span>NO</span>
                              </label>
                            </div>




                          </div>
                        </div>
                      </div>
                      {Super && <div className='col-md-6'>
                        <label className="form-label">
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
                        {({ values, setFieldValue, setValues, handleChange, formik }) =>
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
                                      <ErrorMessage name="SuperFundName" component='div' className="text-danger fw-bold" />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="SuperMemberNo" className="form-label">Member No</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="SuperMemberNo" name='SuperMemberNo' placeholder="Member No" />
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
                                      <ErrorMessage name="SuperFundType" component='div' className="text-danger fw-bold" />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="SuperContactNO" className="form-label">Contact No</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="SuperContactNO" name='SuperContactNO' placeholder="Contact No" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='SuperContactNO' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="SuperFaxNO" className="form-label">Fax No</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="SuperFaxNO" name='SuperFaxNO' placeholder="Fax No" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='SuperFaxNO' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="SuperPostalAddress" className="form-label">Postal Address</   label>
                                      <Field type="text" className="form-control shadow inputDesign"
                                        id="SuperPostalAddress" name='SuperPostalAddress' placeholder="Postal Address" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='SuperPostalAddress' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="SuperABN" className="form-label">ABN</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="SuperABN" name='SuperABN' placeholder="ABN" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='SuperABN' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="SuperSPIN" className="form-label">SPIN</   label>
                                      <Field type="text" className="form-control shadow inputDesign"
                                        id="SuperSPIN" name='SuperSPIN' placeholder="SPIN" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='SuperSPIN' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="SuperWebsite" className="form-label">Website</   label>
                                      <Field type="text" className="form-control shadow inputDesign"
                                        id="SuperWebsite" name='SuperWebsite' placeholder="Website" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='SuperWebsite' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="SuperEmail" className="form-label">Email</   label>
                                      <Field type="text" className="form-control shadow inputDesign"
                                        id="SuperEmail" name='SuperEmail' placeholder="Email" />
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
                                      <ErrorMessage name="SuperFundType2" component='div' className="text-danger fw-bold" />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="SuperCommencementDate" className="form-label">Commencment Date</   label>
                                      <Field type="date" className="form-control shadow inputDesign"
                                        id="SuperCommencementDate" name='SuperCommencementDate' />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='SuperCommencementDate' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="SuperEligibleDate" className="form-label">Eligible Service Date</   label>
                                      <Field type="date" className="form-control shadow inputDesign"
                                        id="SuperEligibleDate" name='SuperEligibleDate' />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='SuperEligibleDate' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        TFN Quoted
                                      </label>
                                      {/* switch button style */}
                                      <div className="form-check form-switch m-0 p-0 ">
                                        <div className="radiobutton">
                                          <input type="radio" name="SuperTFNQuoted"
                                            id="SuperTFNQuoted1opt1" value="Yes"
                                            onChange={handleChange}
                                            checked={values.SuperTFNQuoted === "Yes"}
                                          />
                                          <label htmlFor="SuperTFNQuoted1opt1" className="label1">
                                            <span>YES</span>
                                          </label>
                                          <input type="radio" name="SuperTFNQuoted"
                                            id="SuperTFNQuotedopt2" value="No"
                                            onChange={handleChange}
                                            checked={values.SuperTFNQuoted === "No"}
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
                                        id="SuperCurrentBalance" name='SuperCurrentBalance' placeholder="Current Balance" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='SuperCurrentBalance' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="SuperTaxFree" className="form-label">Tax Free</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="SuperTaxFree" name='SuperTaxFree' placeholder="Tax Free" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='SuperTaxFree' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="SuperTaxed" className="form-label">Taxed</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="SuperTaxed" name='SuperTaxed' placeholder="Taxed" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='SuperTaxed' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="SuperRestrictionNonPreserved" className="form-label">Restriction Non Preserved</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="SuperRestrictionNonPreserved" name='SuperRestrictionNonPreserved' placeholder="Restriction Non Preserved" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='SuperRestrictionNonPreserved' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="SuperUnRestrictionNonPreserved" className="form-label">Un-Restriction Non Preserved</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="SuperUnRestrictionNonPreserved" name='SuperUnRestrictionNonPreserved' placeholder="UnRestriction Non Preserved" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='SuperUnRestrictionNonPreserved' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="SuperPreservedAmount" className="form-label">Preserved Amount</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="SuperPreservedAmount" name='SuperPreservedAmount' placeholder="Preserved Amount" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='SuperPreservedAmount' />
                                    </div>
                                  </div>

                                </div>

                              </div>
                              {/* Solicitor */}

                              {/* <------------------------------------------------------------> */}

                              {/* INVESTMENT MODEL TRIGGER BUTTON */}
                              <button type='button' onClick={handleShow} className='btn bgColor modalBtn'>Investments</button>

                              {/* NESTED INVESTMENT MODAL */}
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
                                    Investment Option Details
                                  </Modal.Title>
                                </Modal.Header>
                                <Formik
                                  initialValues={initialValuesInvestmentOptionDetails}
                                  validationSchema={validateYupSchemaInvestmentOptionDetails}
                                  onSubmit={On_submit_validateYupSchemaInvestmentOptionDetails}
                                  enableReinitialize
                                >
                                  {({ values, handleChange, setFieldValue, formik }) =>
                                    <Form>
                                      <Modal.Body>

                                        <div className=''>

                                          {/* Row 1*/}
                                          <div className="row">
                                            <div className="col-md-6">
                                              <div className="mb-3">
                                                <label htmlFor="InvestmentOptionDetailsInvestment" className="form-label">
                                                  Investment
                                                </label>
                                                <Field
                                                  as='select'
                                                  id="InvestmentOptionDetailsInvestment"
                                                  name="InvestmentOptionDetailsInvestment"
                                                  className="form-select shadow  inputDesign"
                                                  //onChange={(e) => setFieldValue("Frequency", e.target.value)}
                                                  value={values.InvestmentOptionDetailsInvestment}
                                                >
                                                  <option value="Select">Select Investment Options</option>
                                                  <option value="AMI001SUP - AMIST Super-Secure">AMI001SUP - AMIST Super-Secure</option>
                                                  <option value="AMI002SUP - AMIST Super-Capital Stable">AMI002SUP - AMIST Super-Capital Stable</option>
                                                  <option value="AMI003SUP - AMIST Super-Balanced">AMI003SUP - AMIST Super-Balanced</option>
                                                  <option value="AMI004SUP - AMIST Super-Growth">AMI004SUP - AMIST Super-Growth</option>
                                                  <option value="AMI005SUP - AMIST Super-High Growth">AMI005SUP - AMIST Super-High Growth</option>
                                                </Field>
                                                {/* <ErrorMessage component='div' className="text-danger fw-bold" name="Frequency" /> */}

                                              </div>
                                            </div>
                                            <div className="col-md-6">
                                              <div className="mb-3">
                                                <label htmlFor="InvestmentOptionDetailsCurrentValue" className="form-label">Current Value</   label>
                                                <Field type="number" className="form-control shadow inputDesign"
                                                  id="InvestmentOptionDetailsCurrentValue" name='InvestmentOptionDetailsCurrentValue' placeholder="Current Value" />
                                                <ErrorMessage component='div' className='text-danger fw-bold' name='InvestmentOptionDetailsCurrentValue' />
                                              </div>
                                            </div>
                                          </div>
                                          {/* Row 1*/}
                                          {/* DISPLAY TABLE */}
                                          <div className='table-responsive my-3' id="InvestmentOptionDetailsTable">
                                            <table className="table table-bordered table-hover text-center">
                                              <thead className="text-light" id="tableHead">
                                                <tr>
                                                  <th>Code</th>
                                                  <th>Option</th>
                                                  <th>Current Value</th>
                                                  <th>Operations</th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                {
                                                  InvestmentModal.map((elem, index) => {
                                                    let { InvestmentOptionDetailsInvestment, InvestmentOptionDetailsCurrentValue } = elem;
                                                    return (
                                                      <tr>
                                                        <td>2r5rs</td>
                                                        <td>{InvestmentOptionDetailsInvestment}</td>
                                                        <td> {InvestmentOptionDetailsCurrentValue}</td>
                                                        <td>Uncomment Buttons</td>

                                                        {/* <td >
                                      <button type='button' onClick={() => deleteHandler(elem)} className='btn btn-danger btn-sm'>delete</button>
                                      <button type='button' onClick={() => updateHandler()} className='btn btn-warning btn-sm mx-2'>update</button>

                                    </td> */}

                                                      </tr>
                                                    );
                                                  })}
                                              </tbody>
                                            </table>
                                          </div>
                                          {/* DISPLAY TABLE */}

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
                              {/* NESTED INVESTMENT MODAL */}

                              <button type='button' onClick={handleShow2} className='btn bgColor modalBtn mx-2'>Insurance</button>
                              {/* NESTED INSURANCE MODAL */}
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
                                    Insurance Details
                                  </Modal.Title>
                                </Modal.Header>
                                <Formik
                                   initialValues={initialValuesInsuranceOptionDetails}
                                   validationSchema={validateYupSchemaInsuranceOptionDetails}
                                   onSubmit={On_submit_validateYupSchemaInsuranceOptionDetails}
                                  enableReinitialize
                                >
                                  {({ values, handleChange, setFieldValue, formik }) =>
                                    <Form>
                                      <Modal.Body>

                                        <div className='row mx-auto'>
                                          <div className='col md-6'>

                                            {/* Toggle 1*/}
                                            <label className="form-label">
                                              Do you have any insurance attached?
                                            </label>

                                            {/* switch button style */}
                                            <div className="form-check form-switch m-0 p-0 ">
                                              <div className="radiobutton">
                                                <input type="radio" name="insuranceAttachedOption"
                                                  id="insuranceAttachedOption" value="Yes"
                                                //  onClick={() => investmentRadioHandler("Yes")}
                                                //onChange={handleChange}
                                                // checked={values.insuranceAttachedOption === "Yes"}
                                                />
                                                <label htmlFor="insuranceAttachedOption" className="label1">
                                                  <span>YES</span>
                                                </label>
                                                <input type="radio" name="insuranceAttachedOption"
                                                  id="insuranceAttachedOption1" value="No"
                                                onClick={() => investmentRadioHandler("No")}
                                                onChange={handleChange}
                                                checked={values.insuranceAttachedOption2 === "No"}
                                                />
                                                <label htmlFor="insuranceAttachedOption2" className="label2">
                                                  <span>NO</span>
                                                </label>
                                              </div>

                                            </div>

                                          </div>
                                          {/* Toggle # 1*/}

                                          <div className='col md-6'>

                                            {/* Toggle 2*/}
                                            <label className="form-label">
                                              Do you have any Life/TPD insurance?
                                            </label>
                                            {/* switch button style */}
                                            <div className="form-check form-switch m-0 p-0 ">
                                              <div className="radiobutton">
                                                <input type="radio" name="insuranceLifeTPDAttached"
                                                  id="insuranceLifeTPDAttached" value="Yes"
                                                //  onClick={() => investmentRadioHandler("Yes")}
                                                //onChange={handleChange}
                                                // checked={values.insuranceLifeTPDAttached === "Yes"}
                                                />
                                                <label htmlFor="insuranceLifeTPDAttached" className="label1">
                                                  <span>YES</span>
                                                </label>
                                                <input type="radio" name="insuranceLifeTPDAttached"
                                                  id="insuranceLifeTPDAttached1" value="No"
                                                //onClick={() => investmentRadioHandler("No")}
                                                //onChange={handleChange}
                                                //checked={values.insuranceLifeTPDAttached2 === "No"}
                                                />
                                                <label htmlFor="insuranceLifeTPDAttached2" className="label2">
                                                  <span>NO</span>
                                                </label>
                                              </div>

                                            </div>
                                            {/* Toggle # 2*/}
                                          </div>
                                        </div>
                                    {/* Row # 1 */}
                                        <div className='row'>
                                        <div className="col-md-4">
                                              <div className="mb-3 mt-5">
                                                <label htmlFor="CoverType" className="form-label">
                                                Cover Type
                                                </label>
                                                <Field
                                                  as='select'
                                                  id="CoverType"
                                                  name="CoverType"
                                                  className="form-select shadow  inputDesign"
                                                  //onChange={(e) => setFieldValue("CoverType", e.target.value)}
                                                 value={values.CoverType}
                                                >
                                                  <option value="Select">Select</option>
                                                  <option value="Fixed Level">Fixed Level</option>
                                                  <option value="Unitised">Unitised</option>
                                                </Field>
                                                <ErrorMessage component='div' className="text-danger fw-bold" name="CoverType" />

                                              </div>
                                            </div>
                                            <div className="col-md-4">
                                          <div className="mb-3 mt-5">
                                      <label htmlFor="LifeCover" className="form-label">Life Cover</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="LifeCover" name='LifeCover' placeholder="Life Cover" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='LifeCover' />
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                          <div className="mb-3 mt-5">
                                      <label htmlFor="TPDCover" className="form-label">TPD Cover</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="TPDCover" name='TPDCover' placeholder="TPD Cover" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='TPDCover' />
                                    </div>
                                         </div>
                                        </div>
                                    {/* Row # 1 */}
                                    {/* Row # 2 */}
                                    <div className='row'>
                                            <div className="col-md-4">
                                          <div className="mb-3 mt-2">
                                      <label htmlFor="CostPA" className="form-label">Cost p.a.</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="CostPA" name='CostPA' placeholder="Cost p.a." />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='CostPA' />
                                    </div>
                                         </div>

                                         <div className="col-md-4">
                                              <div className="mb-3 mt-2">
                                                <label htmlFor="PremiumType" className="form-label">
                                                Premium Type
                                                </label>
                                                <Field
                                                  as='select'
                                                  id="PremiumType"
                                                  name="PremiumType" placeholder='Premium Type'
                                                  className="form-select shadow  inputDesign"
                                                  //onChange={(e) => setFieldValue("PremiumType", e.target.value)}
                                                 value={values.PremiumType}
                                                >
                                                  <option value="Level">Level</option>
                                                  <option value="Stepped">Stepped</option>
                                                  <option value="Other">Other</option>
                                                </Field>
                                                <ErrorMessage component='div' className="text-danger fw-bold" name="PremiumType" />

                                              </div>
                                            </div>

                                    <div className='col-md-4 mt-2 mb-3'>
                                            <label className="form-label">
                                            Any Loading Or Exclusions?
                                            </label>
                                            {/* switch button style */}
                                            <div className="form-check form-switch m-0 p-0 ">
                                              <div className="radiobutton">
                                                <input type="radio" name="anyLoadingOrExclusionsAttached"
                                                  id="anyLoadingOrExclusionsAttached" value="Yes"
                                                //  onClick={() => investmentRadioHandler("Yes")}
                                                //onChange={handleChange}
                                                // checked={values.anyLoadingOrExclusionsAttached === "Yes"}
                                                />
                                                <label htmlFor="anyLoadingOrExclusionsAttached" className="label1">
                                                  <span>YES</span>
                                                </label>
                                                <input type="radio" name="anyLoadingOrExclusionsAttached"
                                                  id="anyLoadingOrExclusionsAttached1" value="No"
                                                //onClick={() => investmentRadioHandler("No")}
                                                //onChange={handleChange}
                                                //checked={values.anyLoadingOrExclusionsAttached2 === "No"}
                                                />
                                                <label htmlFor="anyLoadingOrExclusionsAttached2" className="label2">
                                                  <span>NO</span>
                                                </label>
                                              </div>

                                            </div>
                                            </div>

                                        </div>
                                    {/* Row # 2 */}

                                        {/* Row # 3 */}
                                        <div className='row'>
                                            <div className="col-md-4">
                                          <div className="mb-3 mt-2">
                                      <label htmlFor="Pleaseprovidedetails" className="form-label">Please provide details</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="Pleaseprovidedetails" name='Pleaseprovidedetails' placeholder="Please provide details" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='Pleaseprovidedetails' />
                                    </div>
                                         </div>

                                    <div className='col-md-4 mt-2 mb-3'>
                                            <label className="form-label">
                                            Have any Income Protection?
                                            </label>
                                            {/* switch button style */}
                                            <div className="form-check form-switch m-0 p-0 ">
                                              <div className="radiobutton">
                                                <input type="radio" name="incomeProtectionAttached"
                                                  id="incomeProtectionAttached" value="Yes"
                                                //  onClick={() => investmentRadioHandler("Yes")}
                                                //onChange={handleChange}
                                                // checked={values.incomeProtectionAttached === "Yes"}
                                                />
                                                <label htmlFor="incomeProtectionAttached" className="label1">
                                                  <span>YES</span>
                                                </label>
                                                <input type="radio" name="incomeProtectionAttached"
                                                  id="incomeProtectionAttached1" value="No"
                                                //onClick={() => investmentRadioHandler("No")}
                                                //onChange={handleChange}
                                                //checked={values.incomeProtectionAttached2 === "No"}
                                                />
                                                <label htmlFor="incomeProtectionAttached2" className="label2">
                                                  <span>NO</span>
                                                </label>
                                              </div>

                                            </div>
                                            </div>

                                            <div className="col-md-4">
                                          <div className="mb-3 mt-2">
                                      <label htmlFor="MonthlyBenefit" className="form-label">Monthly Benefit</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="MonthlyBenefit" name='MonthlyBenefit' placeholder="Monthly Benefit" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='MonthlyBenefit' />
                                    </div>
                                         </div>

                                        </div>
                                    {/* Row # 3 */}

                                      {/* Row # 4 */}
                                      <div className='row'>
                                      
                                      <div className="col-md-4">
                                              <div className="mb-3 mt-2">
                                                <label htmlFor="waitingPeriod" className="form-label">
                                                Waiting Period
                                                </label>
                                                <Field
                                                  as='select'
                                                  id="waitingPeriod"
                                                  name="waitingPeriod" placeholder='Waiting Period'
                                                  className="form-select shadow  inputDesign"
                                                  //onChange={(e) => setFieldValue("waitingPeriod", e.target.value)}
                                                 value={values.waitingPeriod}
                                                >
                                                  <option value="Select">Select</option>
                                                  <option value="30 Days">30 Days</option>
                                                  <option value="60 Days">60 Days</option>
                                                  <option value="90 Days">90 Days</option>
                                                  <option value="180 Days">180 Days</option>
                                                  <option value="1 Year">1 Year</option>
                                                  <option value="2 Year">2 Year</option>
                                                </Field>
                                                <ErrorMessage component='div' className="text-danger fw-bold" name="waitingPeriodPartner" />

                                              </div>
                                            </div>

                                            <div className="col-md-4">
                                              <div className="mb-3 mt-2">
                                                <label htmlFor="benefitPeriod" className="form-label">
                                                Benefit Period
                                                </label>
                                                <Field
                                                  as='select'
                                                  id="benefitPeriod"
                                                  name="benefitPeriod" placeholder='Benefit Period'
                                                  className="form-select shadow  inputDesign"
                                                  //onChange={(e) => setFieldValue("benefitPeriod", e.target.value)}
                                                 value={values.benefitPeriod}
                                                >
                                                  <option value="Select">Select</option>
                                                  <option value="1 Year">1 Year</option>
                                                  <option value="2 Years">2 Years</option>
                                                  <option value="5 Years">5 Years</option>
                                                  <option value="Age Until 60">Age Until 60</option>
                                                  <option value="Age Until 65">Age Until 65</option>
                                                  <option value="Age Until 67">Age Until 67</option>
                                                  <option value="Age Until 70">Age Until 70</option>
                                                </Field>
                                                <ErrorMessage component='div' className="text-danger fw-bold" name="benefitPeriod" />

                                              </div>
                                            </div>

                                            <div className="col-md-4">
                                              <div className="mb-3 mt-2">
                                                <label htmlFor="agreedOrIndemnity" className="form-label">
                                                Agreed or indemnity?
                                                </label>
                                                <Field
                                                  as='select'
                                                  id="agreedOrIndemnity"
                                                  name="agreedOrIndemnity" placeholder='Agreed or indemnity?'
                                                  className="form-select shadow  inputDesign"
                                                  //onChange={(e) => setFieldValue("agreedOrIndemnity", e.target.value)}
                                                 value={values.agreedOrIndemnity}
                                                >
                                                  <option value="Select">Select</option>
                                                  <option value="Agreed">Agreed</option>
                                                  <option value="Indemnity">Indemnitys</option>
                                                
                                                </Field>
                                                <ErrorMessage component='div' className="text-danger fw-bold" name="agreedOrIndemnity" />

                                              </div>
                                            </div>

                                        </div>
                                    {/* Row # 4 */}
                                    {/* Row # 5 */}
                                    <div className='row'>
                                            <div className="col-md-4">
                                          <div className="mb-3 mt-2">
                                      <label htmlFor="CostPASecond" className="form-label">Cost p.a.</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="CostPASecond" name='CostPASecond' placeholder="Cost p.a." />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='CostPASecond' />
                                    </div>
                                         </div>

                                         <div className="col-md-4">
                                              <div className="mb-3 mt-2">
                                                <label htmlFor="PremiumTypeSecond" className="form-label">
                                                Premium Type
                                                </label>
                                                <Field
                                                  as='select'
                                                  id="PremiumTypeSecond"
                                                  name="PremiumTypeSecond" placeholder='Premium Type'
                                                  className="form-select shadow  inputDesign"
                                                  //onChange={(e) => setFieldValue("PremiumTypeSecond", e.target.value)}
                                                 value={values.PremiumTypeSecond}
                                                >
                                                  <option value="Level">Level</option>
                                                  <option value="Stepped">Stepped</option>
                                                  <option value="Other">Other</option>
                                                </Field>
                                                <ErrorMessage component='div' className="text-danger fw-bold" name="PremiumTypeSecond" />

                                              </div>
                                            </div>

                                    <div className='col-md-4 mt-2 mb-3'>
                                            <label className="form-label">
                                            Includes Super Continuance?
                                            </label>
                                            {/* switch button style */}
                                            <div className="form-check form-switch m-0 p-0 ">
                                              <div className="radiobutton">
                                                <input type="radio" name="IncludesSuperContinuance"
                                                  id="IncludesSuperContinuance" value="Yes"
                                                //  onClick={() => investmentRadioHandler("Yes")}
                                                //onChange={handleChange}
                                                // checked={values.IncludesSuperContinuance === "Yes"}
                                                />
                                                <label htmlFor="IncludesSuperContinuance" className="label1">
                                                  <span>YES</span>
                                                </label>
                                                <input type="radio" name="IncludesSuperContinuance"
                                                  id="IncludesSuperContinuance1" value="No"
                                                //onClick={() => investmentRadioHandler("No")}
                                                //onChange={handleChange}
                                                //checked={values.IncludesSuperContinuance2 === "No"}
                                                />
                                                <label htmlFor="IncludesSuperContinuance2" className="label2">
                                                  <span>NO</span>
                                                </label>
                                              </div>

                                            </div>
                                            </div>

                                        </div>
                                    {/* Row # 5 */}

                                     {/* Row # 6 */}
                                     <div className='row'>

                                    <div className='col-md-4 mt-2 mb-3'>
                                            <label className="form-label">
                                            Is the benefit indexed?
                                            </label>
                                            {/* switch button style */}
                                            <div className="form-check form-switch m-0 p-0 ">
                                              <div className="radiobutton">
                                                <input type="radio" name="Isthebenefitindexed"
                                                  id="Isthebenefitindexed" value="Yes"
                                                //  onClick={() => investmentRadioHandler("Yes")}
                                                //onChange={handleChange}
                                                // checked={values.Isthebenefitindexed === "Yes"}
                                                />
                                                <label htmlFor="Isthebenefitindexed" className="label1">
                                                  <span>YES</span>
                                                </label>
                                                <input type="radio" name="Isthebenefitindexed"
                                                  id="Isthebenefitindexed1" value="No"
                                                //onClick={() => investmentRadioHandler("No")}
                                                //onChange={handleChange}
                                                //checked={values.Isthebenefitindexed2 === "No"}
                                                />
                                                <label htmlFor="Isthebenefitindexed2" className="label2">
                                                  <span>NO</span>
                                                </label>
                                              </div>

                                            </div>
                                            </div>

                                            <div className='col-md-4 mt-2 mb-3'>
                                            <label className="form-label">
                                            Any Loading Or Exclusions?
                                            </label>
                                            {/* switch button style */}
                                            <div className="form-check form-switch m-0 p-0 ">
                                              <div className="radiobutton">
                                                <input type="radio" name="AnyLoadingOrExclusions"
                                                  id="AnyLoadingOrExclusions" value="Yes"
                                                //  onClick={() => investmentRadioHandler("Yes")}
                                                //onChange={handleChange}
                                                // checked={values.AnyLoadingOrExclusions === "Yes"}
                                                />
                                                <label htmlFor="AnyLoadingOrExclusions" className="label1">
                                                  <span>YES</span>
                                                </label>
                                                <input type="radio" name="AnyLoadingOrExclusions"
                                                  id="AnyLoadingOrExclusions1" value="No"
                                                //onClick={() => investmentRadioHandler("No")}
                                                //onChange={handleChange}
                                                //checked={values.AnyLoadingOrExclusionsPartner2 === "No"}
                                                />
                                                <label htmlFor="AnyLoadingOrExclusions2" className="label2">
                                                  <span>NO</span>
                                                </label>
                                              </div>

                                            </div>
                                            </div>

                                            <div className="col-md-4">
                                          <div className="mb-3 mt-2">
                                      <label htmlFor="PleaseprovidedetailsSecond" className="form-label">Please provide details</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="PleaseprovidedetailsSecond" name='PleaseprovidedetailsSecond' placeholder="Please provide details" />
                                      {/* <ErrorMessage component='div' className='text-danger fw-bold' name='PleaseprovidedetailsSecond' /> */}
                                    </div>
                                         </div>

                                        </div>
                                    {/* Row # 6 */}
                                      </Modal.Body>
                                      <Modal.Footer>
                                        <div className="col-md-12">
                                          <button
                                            className="float-end btn w-25  bgColor modalBtn"
                                            onClick={handleClose2}
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
                              {/* NESTED INSURANCE MODAL */}

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
                                  initialValues={initialValuesBeneficiariesOptionDetails}
                                  validationSchema={validateYupSchemaBeneficiariesOptionDetails}
                                  onSubmit={On_submit_validateYupSchemaBeneficiariesOptionDetails}
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
                                              <input type="radio" name="beneficiariesAttached1"
                                                id="beneficiariesAttached1" value="Yes"
                                              //  onClick={() => beneficiariesRadioHandler("Yes")}
                                              //onChange={handleChange}
                                              // checked={values.beneficiariesAttached === "Yes"}
                                              />
                                              <label htmlFor="beneficiariesAttached" className="label1">
                                                <span>YES</span>
                                              </label>
                                              <input type="radio" name="beneficiariesAttached1"
                                                id="beneficiariesAttached2" value="No"
                                              //onClick={() => beneficiariesRadioHandler("No")}
                                              //onChange={handleChange}
                                              //checked={values.beneficiariesAttached === "No"}
                                              />
                                              <label htmlFor="beneficiariesAttached2" className="label2">
                                                <span>NO</span>
                                              </label>
                                            </div>
                                          </div>

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
                                                  <option value="Select">Select</option>
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
                                                  <option value="Select">Select</option>
                                                  <option value="1">1</option>
                                                  <option value="2">2</option>
                                                  <option value="3">3</option>
                                                  <option value="4">4</option>
                                                  <option value="5">5</option>
                                                </Field>
                                                <ErrorMessage component='div' className="text-danger fw-bold" name="Frequency" />

                                              </div>
                                            </div>
                                          </div>

                                          {/* Row 1*/}
                                          <div className="row justify-content-around mt-4 mb-3">

                                            <div className="col-md-4">
                                              <div className="mb-3">
                                                <label htmlFor="Beneficiary1" className="form-label">Beneficiary 1</   label>
                                                <Field type="number" className="form-control shadow inputDesign"
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
                                                // value={values.RelationshipOptionDetailsRelationship1}
                                                >
                                                  <option value="Select">Select</option>
                                                  <option value="Spouse">Spouse</option>
                                                  <option value="Child">Child</option>
                                                  <option value="Other">Other</option>
                                                  <option value="Interdependency">Interdependency</option>
                                                </Field>
                                                {/* <ErrorMessage component='div' className="text-danger fw-bold" name="RelationshipOptionDetailsRelationship" /> */}

                                              </div>
                                            </div>

                                          </div>

                                          {/* Row 2*/}
                                          <div className="row justify-content-around mt-4 mb-3">

                                            <div className="col-md-4">
                                              <div className="mb-3">
                                                <label htmlFor="Beneficiary2" className="form-label">Beneficiary 2</   label>
                                                <Field type="number" className="form-control shadow inputDesign"
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
                                                // value={values.RelationshipOptionDetailsRelationship2}
                                                >
                                                  <option value="Select">Select</option>
                                                  <option value="Spouse">Spouse</option>
                                                  <option value="Child">Child</option>
                                                  <option value="Other">Other</option>
                                                  <option value="Interdependency">Interdependency</option>
                                                </Field>
                                                {/* <ErrorMessage component='div' className="text-danger fw-bold" name="RelationshipOptionDetailsRelationship" /> */}

                                              </div>
                                            </div>

                                          </div>
                                          {/* Row 2*/}


                                          {/* Row 3*/}
                                          <div className="row justify-content-around mt-4 mb-3">

                                            <div className="col-md-4">
                                              <div className="mb-3">
                                                <label htmlFor="Beneficiary3" className="form-label">Beneficiary 3</   label>
                                                <Field type="number" className="form-control shadow inputDesign"
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
                                                // value={values.RelationshipOptionDetailsRelationship3}
                                                >
                                                  <option value="Select">Select</option>
                                                  <option value="Spouse">Spouse</option>
                                                  <option value="Child">Child</option>
                                                  <option value="Other">Other</option>
                                                  <option value="Interdependency">Interdependency</option>
                                                </Field>
                                                {/* <ErrorMessage component='div' className="text-danger fw-bold" name="RelationshipOptionDetailsRelationship3" /> */}

                                              </div>
                                            </div>

                                          </div>
                                          {/* Row 3*/}


                                          {/* Row 4*/}
                                          <div className="row justify-content-around mt-4 mb-3">

                                            <div className="col-md-4">
                                              <div className="mb-3">
                                                <label htmlFor="Beneficiary4" className="form-label">Beneficiary 4</   label>
                                                <Field type="number" className="form-control shadow inputDesign"
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
                                                // value={values.RelationshipOptionDetailsRelationship4}
                                                >
                                                  <option value="Select">Select</option>
                                                  <option value="Spouse">Spouse</option>
                                                  <option value="Child">Child</option>
                                                  <option value="Other">Other</option>
                                                  <option value="Interdependency">Interdependency</option>
                                                </Field>
                                                {/* <ErrorMessage component='div' className="text-danger fw-bold" name="RelationshipOptionDetailsRelationship" /> */}

                                              </div>
                                            </div>

                                          </div>
                                          {/* Row 4*/}


                                          {/* Row 5*/}
                                          <div className="row justify-content-around mt-4 mb-3">

                                            <div className="col-md-4">
                                              <div className="mb-3">
                                                <label htmlFor="Beneficiary5" className="form-label">Beneficiary 5</   label>
                                                <Field type="number" className="form-control shadow inputDesign"
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
                                                // value={values.RelationshipOptionDetailsRelationship5}
                                                >
                                                  <option value="Select">Select</option>
                                                  <option value="Spouse">Spouse</option>
                                                  <option value="Child">Child</option>
                                                  <option value="Other">Other</option>
                                                  <option value="Interdependency">Interdependency</option>
                                                </Field>
                                                {/* <ErrorMessage component='div' className="text-danger fw-bold" name="RelationshipOptionDetailsRelationship" /> */}

                                              </div>
                                            </div>

                                          </div>
                                          {/* Row 5*/}

                                        </div>
                                      </Modal.Body>
                                      <Modal.Footer>
                                        <div className="col-md-12">
                                          <button
                                            className="float-end btn w-25  bgColor modalBtn"
                                            onClick={handleClose3}
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
                              {/* NESTED BENFICIARIES MODAL */}

                              <button type='button' onClick={handleShow4} className='btn bgColor modalBtn mx-2'>Contributions</button>
                              {/* NESTED CONTRIBUTION MODAL */}
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
                                    Contribution Details
                                  </Modal.Title>
                                </Modal.Header>
                                <Formik
                                  initialValues={initialValuesContributionOptionDetails}
                                  validationSchema={validateYupSchemaContributionOptionDetails}
                                  onSubmit={On_submit_validateYupSchemaContributionOptionDetails}
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
                                              <input type="radio" name="investmentAttached1"
                                                id="investmentAttached1" value="Yes"
                                              //  onClick={() => investmentRadioHandler("Yes")}
                                              //onChange={handleChange}
                                              // checked={values.investmentAttached === "Yes"}
                                              />
                                              <label htmlFor="investmentAttached" className="label1">
                                                <span>YES</span>
                                              </label>
                                              <input type="radio" name="investmentAttached1"
                                                id="investmentAttached2" value="No"
                                              //onClick={() => investmentRadioHandler("No")}
                                              //onChange={handleChange}
                                              //checked={values.investmentAttached === "No"}
                                              />
                                              <label htmlFor="investmentAttached2" className="label2">
                                                <span>NO</span>
                                              </label>
                                            </div>

                                          </div>

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

                                        </div>
                                      </Modal.Body>
                                      <Modal.Footer>
                                        <div className="col-md-12">
                                          <button
                                            className="float-end btn w-25  bgColor modalBtn"
                                            // onClick={handleClose4}
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
                              {/* NESTED CONTRIBUTION MODAL */}
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
                          <label className="form-label">
                            Do you have any Super Accounts?
                          </label>
                          {/* switch button style */}
                          <div className="form-check form-switch m-0 p-0 ">
                            <div className="radiobutton">
                              <input type="radio" name="Super2Radio"
                                id="Super2Radioopt1" value="Yes"
                                onClick={() => Super2Handler("Yes")}
                                onChange={handleChange}
                                checked={values.Super2Radio === "Yes"}
                              />
                              <label htmlFor="Super2Radioopt1" className="label1">
                                <span>YES</span>
                              </label>
                              <input type="radio" name="Super2Radio"
                                id="Super2Radioopt2" value="No"
                                onClick={() => Super2Handler("No")}
                                onChange={handleChange}
                                checked={values.Super2Radio === "No"}
                              />
                              <label htmlFor="Super2Radioopt2" className="label2">
                                <span>NO</span>
                              </label>
                            </div>




                          </div>
                        </div>
                      </div>
                      {Super2 && <div className='col-md-6'>
                        <label className="form-label">
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
                        {({ values, setFieldValue, setValues, handleChange, formik }) =>
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
                                      <ErrorMessage name="Super2FundName" component='div' className="text-danger fw-bold" />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="Super2MemberNo" className="form-label">Member No</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="Super2MemberNo" name='Super2MemberNo' placeholder="Member No" />
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
                                      <ErrorMessage name="Super2FundType" component='div' className="text-danger fw-bold" />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="Super2ContactNO" className="form-label">Contact No</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="Super2ContactNO" name='Super2ContactNO' placeholder="Contact No" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='Super2ContactNO' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="Super2FaxNO" className="form-label">Fax No</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="Super2FaxNO" name='Super2FaxNO' placeholder="Fax No" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='Super2FaxNO' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="Super2PostalAddress" className="form-label">Postal Address</   label>
                                      <Field type="text" className="form-control shadow inputDesign"
                                        id="Super2PostalAddress" name='Super2PostalAddress' placeholder="Postal Address" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='Super2PostalAddress' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="Super2ABN" className="form-label">ABN</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="Super2ABN" name='Super2ABN' placeholder="ABN" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='Super2ABN' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="Super2SPIN" className="form-label">SPIN</   label>
                                      <Field type="text" className="form-control shadow inputDesign"
                                        id="Super2SPIN" name='Super2SPIN' placeholder="SPIN" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='Super2SPIN' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="Super2Website" className="form-label">Website</   label>
                                      <Field type="text" className="form-control shadow inputDesign"
                                        id="Super2Website" name='Super2Website' placeholder="Website" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='Super2Website' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="Super2Email" className="form-label">Email</   label>
                                      <Field type="text" className="form-control shadow inputDesign"
                                        id="Super2Email" name='Super2Email' placeholder="Email" />
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
                                      <ErrorMessage name="Super2FundType2" component='div' className="text-danger fw-bold" />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="Super2CommencementDate" className="form-label">Commencment Date</   label>
                                      <Field type="date" className="form-control shadow inputDesign"
                                        id="Super2CommencementDate" name='Super2CommencementDate' />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='Super2CommencementDate' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="Super2EligibleDate" className="form-label">Eligible Service Date</   label>
                                      <Field type="date" className="form-control shadow inputDesign"
                                        id="Super2EligibleDate" name='Super2EligibleDate' />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='Super2EligibleDate' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        TFN Quoted
                                      </label>
                                      {/* switch button style */}
                                      <div className="form-check form-switch m-0 p-0 ">
                                        <div className="radiobutton">
                                          <input type="radio" name="Super2TFNQuoted"
                                            id="Super2TFNQuoted1opt1" value="Yes"
                                            onChange={handleChange}
                                            checked={values.Super2TFNQuoted === "Yes"}
                                          />
                                          <label htmlFor="Super2TFNQuoted1opt1" className="label1">
                                            <span>YES</span>
                                          </label>
                                          <input type="radio" name="Super2TFNQuoted"
                                            id="Super2TFNQuotedopt2" value="No"
                                            onChange={handleChange}
                                            checked={values.Super2TFNQuoted === "No"}
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
                                        id="Super2CurrentBalance" name='Super2CurrentBalance' placeholder="Current Balance" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='Super2CurrentBalance' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="Super2TaxFree" className="form-label">Tax Free</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="Super2TaxFree" name='Super2TaxFree' placeholder="Tax Free" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='Super2TaxFree' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="Super2Taxed" className="form-label">Taxed</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="Super2Taxed" name='Super2Taxed' placeholder="Taxed" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='Super2Taxed' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="Super2RestrictionNonPreserved" className="form-label">Restriction Non Preserved</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="Super2RestrictionNonPreserved" name='Super2RestrictionNonPreserved' placeholder="Restriction Non Preserved" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='Super2RestrictionNonPreserved' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="Super2UnRestrictionNonPreserved" className="form-label">Un-Restriction Non Preserved</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="Super2UnRestrictionNonPreserved" name='Super2UnRestrictionNonPreserved' placeholder="UnRestriction Non Preserved" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='Super2UnRestrictionNonPreserved' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="Super2PreservedAmount" className="form-label">Preserved Amount</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="Super2PreservedAmount" name='Super2PreservedAmount' placeholder="Preserved Amount" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='Super2PreservedAmount' />
                                    </div>
                                  </div>

                                </div>

                              </div>
                              {/* Solicitor */}

                              {/* Bank Account Detail Form */}

                              {/* INVESTMENT MODEL PARTNER TRIGGER BUTTON */}
                              <button type='button' onClick={handleShowPartner} className='btn bgColor modalBtn'>Investments</button>

{/* NESTED MODAL PARTNER -> INVESTMENT */}
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
                                    Investment Option Details
                                  </Modal.Title>
                                </Modal.Header>
                                <Formik
                                  initialValues={initialValuesInvestmentPartnerOptionDetails}
                                  validationSchema={validateYupSchemaInvestmentPartnerOptionDetails}
                                  onSubmit={On_submit_validateYupSchemaInvestmentPartnerOptionDetails}
                                  enableReinitialize
                                >
                                  {({ values, handleChange, setFieldValue, formik }) =>
                                    <Form>
                                      <Modal.Body>

                                        <div className=''>

                                          {/* Row 1*/}
                                          <div className="row">
                                            <div className="col-md-6">
                                              <div className="mb-3">
                                                <label htmlFor="InvestmentOptionDetailsInvestmentPartner" className="form-label">
                                                  Investment
                                                </label>
                                                <Field
                                                  as='select'
                                                  id="InvestmentOptionDetailsInvestmentPartner"
                                                  name="InvestmentOptionDetailsInvestmentPartner"
                                                  className="form-select shadow  inputDesign"
                                                  //onChange={(e) => setFieldValue("Frequency", e.target.value)}
                                                  value={values.InvestmentOptionDetailsInvestmentPartner}
                                                >
                                                  <option value="Select">Select Investment Options</option>
                                                  <option value="AMI001SUP - AMIST Super-Secure">AMI001SUP - AMIST Super-Secure</option>
                                                  <option value="AMI002SUP - AMIST Super-Capital Stable">AMI002SUP - AMIST Super-Capital Stable</option>
                                                  <option value="AMI003SUP - AMIST Super-Balanced">AMI003SUP - AMIST Super-Balanced</option>
                                                  <option value="AMI004SUP - AMIST Super-Growth">AMI004SUP - AMIST Super-Growth</option>
                                                  <option value="AMI005SUP - AMIST Super-High Growth">AMI005SUP - AMIST Super-High Growth</option>
                                                </Field>
                                                {/* <ErrorMessage component='div' className="text-danger fw-bold" name="InvestmentOptionDetailsInvestmentPartner" /> */}

                                              </div>
                                            </div>
                                            <div className="col-md-6">
                                              <div className="mb-3">
                                                <label htmlFor="InvestmentOptionDetailsCurrentValuePartner" className="form-label">Current Value</   label>
                                                <Field type="number" className="form-control shadow inputDesign"
                                                  id="InvestmentOptionDetailsCurrentValuePartner" name='InvestmentOptionDetailsCurrentValuePartner' placeholder="Current Value" />
                                                <ErrorMessage component='div' className='text-danger fw-bold' name='InvestmentOptionDetailsCurrentValuePartner' />
                                              </div>
                                            </div>
                                          </div>
                                          {/* Row 1*/}
                                          {/* DISPLAY TABLE */}
                                          <div className='table-responsive my-3' id="InvestmentOptionDetailsTable">
                                            <table className="table table-bordered table-hover text-center">
                                              <thead className="text-light" id="tableHead">
                                                <tr>
                                                  <th>Code</th>
                                                  <th>Option</th>
                                                  <th>Current Value</th>
                                                  <th>Operations</th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                {
                                                  InvestmentModalPartner.map((elem, index) => {
                                                    let { InvestmentOptionDetailsInvestmentPartner, InvestmentOptionDetailsCurrentValuePartner } = elem;
                                                    return (
                                                      <tr>
                                                        <td>2r5rs</td>
                                                        <td>{InvestmentOptionDetailsInvestmentPartner}</td>
                                                        <td> {InvestmentOptionDetailsCurrentValuePartner}</td>
                                                        <td>Uncomment Buttons</td>

                                                        {/* <td >
                                      <button type='button' onClick={() => deleteHandler(elem)} className='btn btn-danger btn-sm'>delete</button>
                                      <button type='button' onClick={() => updateHandler()} className='btn btn-warning btn-sm mx-2'>update</button>

                                    </td> */}

                                                      </tr>
                                                    );
                                                  })}
                                              </tbody>
                                            </table>
                                          </div>
                                          {/* DISPLAY TABLE */}

                                        </div>
                                      </Modal.Body>
                                      <Modal.Footer>
                                        <div className="col-md-12">
                                          <button
                                            className="float-end btn w-25  bgColor modalBtn"
                                            // onClick={handleClosePartner}
                                            type='submit'
                                          >
                                            Save
                                          </button>
                                          <span
                                            className="float-end btn w-25  btn-outline  backBtn mx-3"
                                            onClick={handleClosePartner}
                                          >
                                            Cancel
                                          </span>
                                        </div>
                                      </Modal.Footer>
                                    </Form>
                                  }
                                </Formik>
                              </Modal>
{/* NESTED MODAL PARTNER -> INVESTMENT */}

                              {/* INSURANCE MODEL PARTNER TRIGGER BUTTON */}
                              <button type='button' onClick={handleShowPartner2} className='btn bgColor modalBtn mx-2'>Insurance</button>
{/* NESTED MODAL PARTNER -> INSURANCE */}
                              {/* NESTED INSURANCE MODAL */}
                              <Modal
                                show={showPartner2}
                                onHide={handleClosePartner2}
                                backdrop="static"
                                className="modal-lg"
                                keyboard={false}
                              >
                                <Modal.Header
                                  className="text-light modalBG "
                                  closeButton
                                >
                                  <Modal.Title className="fontStyle">
                                    Insurance Details
                                  </Modal.Title>
                                </Modal.Header>
                                <Formik
                                   initialValues={initialValuesInsurancePartnerOptionDetails}
                                   validationSchema={validateYupSchemaInsurancePartnerOptionDetails}
                                  onSubmit={On_submit_validateYupSchemaInsurancePartnerOptionDetails}
                                  enableReinitialize
                                >
                                  {({ values, handleChange, setFieldValue, formik }) =>
                                    <Form>
                                      <Modal.Body>

                                        <div className='row mx-auto'>
                                          <div className='col md-6'>

                                            {/* Toggle 1*/}
                                            <label className="form-label">
                                              Do you have any insurance attached?
                                            </label>

                                            {/* switch button style */}
                                            <div className="form-check form-switch m-0 p-0 ">
                                              <div className="radiobutton">
                                                <input type="radio" name="insurancePartnerAttachedOption"
                                                  id="insurancePartnerAttachedOption" value="Yes"
                                                //  onClick={() => investmentRadioHandler("Yes")}
                                                //onChange={handleChange}
                                                // checked={values.insurancePartnerAttachedOption === "Yes"}
                                                />
                                                <label htmlFor="insurancePartnerAttachedOption" className="label1">
                                                  <span>YES</span>
                                                </label>
                                                <input type="radio" name="insurancePartnerAttachedOption"
                                                  id="insurancePartnerAttachedOption1" value="No"
                                                //onClick={() => investmentRadioHandler("No")}
                                                //onChange={handleChange}
                                                //checked={values.insurancePartnerAttachedOption2 === "No"}
                                                />
                                                <label htmlFor="insurancePartnerAttachedOption2" className="label2">
                                                  <span>NO</span>
                                                </label>
                                              </div>

                                            </div>

                                          </div>
                                          {/* Toggle # 1*/}

                                          <div className='col md-6'>

                                            {/* Toggle 2*/}
                                            <label className="form-label">
                                              Do you have any Life/TPD insurance?
                                            </label>
                                            {/* switch button style */}
                                            <div className="form-check form-switch m-0 p-0 ">
                                              <div className="radiobutton">
                                                <input type="radio" name="insuranceLifeTPDPartnerAttached"
                                                  id="insuranceLifeTPDPartnerAttached" value="Yes"
                                                //  onClick={() => investmentRadioHandler("Yes")}
                                                //onChange={handleChange}
                                                // checked={values.insuranceLifeTPDPartnerAttached === "Yes"}
                                                />
                                                <label htmlFor="insuranceLifeTPDPartnerAttached" className="label1">
                                                  <span>YES</span>
                                                </label>
                                                <input type="radio" name="insuranceLifeTPDPartnerAttached"
                                                  id="insuranceLifeTPDPartnerAttached1" value="No"
                                                //onClick={() => investmentRadioHandler("No")}
                                                //onChange={handleChange}
                                                //checked={values.insuranceLifeTPDPartnerAttached2 === "No"}
                                                />
                                                <label htmlFor="insuranceLifeTPDPartnerAttached2" className="label2">
                                                  <span>NO</span>
                                                </label>
                                              </div>

                                            </div>
                                            {/* Toggle # 2*/}
                                          </div>
                                        </div>
                                    {/* Row # 1 */}
                                        <div className='row'>
                                        <div className="col-md-4">
                                              <div className="mb-3 mt-5">
                                                <label htmlFor="CoverType" className="form-label">
                                                Cover Type
                                                </label>
                                                <Field
                                                  as='select'
                                                  id="CoverTypePartner"
                                                  name="CoverTypePartner"
                                                  className="form-select shadow  inputDesign"
                                                  //onChange={(e) => setFieldValue("CoverTypePartner", e.target.value)}
                                                 value={values.CoverTypePartner}
                                                >
                                                  <option value="Select">Select</option>
                                                  <option value="Fixed Level">Fixed Level</option>
                                                  <option value="Unitised">Unitised</option>
                                                </Field>
                                                <ErrorMessage component='div' className="text-danger fw-bold" name="CoverTypePartner" />

                                              </div>
                                            </div>
                                            <div className="col-md-4">
                                          <div className="mb-3 mt-5">
                                      <label htmlFor="LifeCoverPartner" className="form-label">Life Cover</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="LifeCoverPartner" name='LifeCoverPartner' placeholder="Life Cover" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='LifeCoverPartner' />
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                          <div className="mb-3 mt-5">
                                      <label htmlFor="TPDCoverPartner" className="form-label">TPD Cover</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="TPDCoverPartner" name='TPDCoverPartner' placeholder="TPD Cover" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='TPDCoverPartner' />
                                    </div>
                                         </div>
                                        </div>
                                    {/* Row # 1 */}
                                    {/* Row # 2 */}
                                    <div className='row'>
                                            <div className="col-md-4">
                                          <div className="mb-3 mt-2">
                                      <label htmlFor="CostPAPartner" className="form-label">Cost p.a.</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="CostPAPartner" name='CostPAPartner' placeholder="Cost p.a." />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='CostPAPartner' />
                                    </div>
                                         </div>

                                         <div className="col-md-4">
                                              <div className="mb-3 mt-2">
                                                <label htmlFor="PremiumType" className="form-label">
                                                Premium Type
                                                </label>
                                                <Field
                                                  as='select'
                                                  id="PremiumTypePartner"
                                                  name="PremiumTypePartner" placeholder='Premium Type'
                                                  className="form-select shadow  inputDesign"
                                                  //onChange={(e) => setFieldValue("PremiumTypePartner", e.target.value)}
                                                 value={values.PremiumTypePartner}
                                                >
                                                  <option value="Level">Level</option>
                                                  <option value="Stepped">Stepped</option>
                                                  <option value="Other">Other</option>
                                                </Field>
                                                <ErrorMessage component='div' className="text-danger fw-bold" name="PremiumTypePartner" />

                                              </div>
                                            </div>

                                    <div className='col-md-4 mt-2 mb-3'>
                                            <label className="form-label">
                                            Any Loading Or Exclusions?
                                            </label>
                                            {/* switch button style */}
                                            <div className="form-check form-switch m-0 p-0 ">
                                              <div className="radiobutton">
                                                <input type="radio" name="anyLoadingOrExclusionsPartnerAttached"
                                                  id="anyLoadingOrExclusionsPartnerAttached" value="Yes"
                                                //  onClick={() => investmentRadioHandler("Yes")}
                                                //onChange={handleChange}
                                                // checked={values.anyLoadingOrExclusionsPartnerAttached === "Yes"}
                                                />
                                                <label htmlFor="anyLoadingOrExclusionsPartnerAttached" className="label1">
                                                  <span>YES</span>
                                                </label>
                                                <input type="radio" name="anyLoadingOrExclusionsPartnerAttached"
                                                  id="anyLoadingOrExclusionsPartnerAttached1" value="No"
                                                //onClick={() => investmentRadioHandler("No")}
                                                //onChange={handleChange}
                                                //checked={values.anyLoadingOrExclusionsPartnerAttached2 === "No"}
                                                />
                                                <label htmlFor="anyLoadingOrExclusionsPartnerAttached2" className="label2">
                                                  <span>NO</span>
                                                </label>
                                              </div>

                                            </div>
                                            </div>

                                        </div>
                                    {/* Row # 2 */}

                                        {/* Row # 3 */}
                                        <div className='row'>
                                            <div className="col-md-4">
                                          <div className="mb-3 mt-2">
                                      <label htmlFor="PleaseprovidePartnerdetails" className="form-label">Please provide details</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="PleaseprovidePartnerdetails" name='PleaseprovidePartnerdetails' placeholder="Please provide details" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='PleaseprovidePartnerdetails' />
                                    </div>
                                         </div>

                                    <div className='col-md-4 mt-2 mb-3'>
                                            <label className="form-label">
                                            Have any Income Protection?
                                            </label>
                                            {/* switch button style */}
                                            <div className="form-check form-switch m-0 p-0 ">
                                              <div className="radiobutton">
                                                <input type="radio" name="incomeProtectionPartnerAttached"
                                                  id="incomeProtectionPartnerAttached" value="Yes"
                                                //  onClick={() => investmentRadioHandler("Yes")}
                                                //onChange={handleChange}
                                                // checked={values.incomeProtectionPartnerAttached === "Yes"}
                                                />
                                                <label htmlFor="incomeProtectionPartnerAttached" className="label1">
                                                  <span>YES</span>
                                                </label>
                                                <input type="radio" name="incomeProtectionPartnerAttached"
                                                  id="incomeProtectionPartnerAttached1" value="No"
                                                //onClick={() => investmentRadioHandler("No")}
                                                //onChange={handleChange}
                                                //checked={values.incomeProtectionPartnerAttached2 === "No"}
                                                />
                                                <label htmlFor="incomeProtectionPartnerAttached2" className="label2">
                                                  <span>NO</span>
                                                </label>
                                              </div>

                                            </div>
                                            </div>

                                            <div className="col-md-4">
                                          <div className="mb-3 mt-2">
                                      <label htmlFor="MonthlyBenefitPartner" className="form-label">Monthly Benefit</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="MonthlyBenefitPartner" name='MonthlyBenefitPartner' placeholder="Monthly Benefit" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='MonthlyBenefitPartner' />
                                    </div>
                                         </div>

                                        </div>
                                    {/* Row # 3 */}

                                      {/* Row # 4 */}
                                      <div className='row'>
                                      
                                      <div className="col-md-4">
                                              <div className="mb-3 mt-2">
                                                <label htmlFor="waitingPeriodPartner" className="form-label">
                                                Waiting Period
                                                </label>
                                                <Field
                                                  as='select'
                                                  id="waitingPeriodPartner"
                                                  name="waitingPeriodPartner" placeholder='Waiting Period'
                                                  className="form-select shadow  inputDesign"
                                                  //onChange={(e) => setFieldValue("waitingPeriodPartner", e.target.value)}
                                                 //value={values.waitingPeriodPartner}
                                                >
                                                  <option value="Select">Select</option>
                                                  <option value="30 Days">30 Days</option>
                                                  <option value="60 Days">60 Days</option>
                                                  <option value="90 Days">90 Days</option>
                                                  <option value="180 Days">180 Days</option>
                                                  <option value="1 Year">1 Year</option>
                                                  <option value="2 Year">2 Year</option>
                                                </Field>
                                                <ErrorMessage component='div' className="text-danger fw-bold" name="waitingPeriodPartner" />

                                              </div>
                                            </div>

                                            <div className="col-md-4">
                                              <div className="mb-3 mt-2">
                                                <label htmlFor="benefitPeriodPartner" className="form-label">
                                                Benefit Period
                                                </label>
                                                <Field
                                                  as='select'
                                                  id="benefitPeriodPartner"
                                                  name="benefitPeriodPartner" placeholder='Benefit Period'
                                                  className="form-select shadow  inputDesign"
                                                  //onChange={(e) => setFieldValue("benefitPeriodPartner", e.target.value)}
                                                 //value={values.benefitPeriodPartner}
                                                >
                                                  <option value="Select">Select</option>
                                                  <option value="1 Year">1 Year</option>
                                                  <option value="2 Years">2 Years</option>
                                                  <option value="5 Years">5 Years</option>
                                                  <option value="Age Until 60">Age Until 60</option>
                                                  <option value="Age Until 65">Age Until 65</option>
                                                  <option value="Age Until 67">Age Until 67</option>
                                                  <option value="Age Until 70">Age Until 70</option>
                                                </Field>
                                                <ErrorMessage component='div' className="text-danger fw-bold" name="benefitPeriodPartner" />

                                              </div>
                                            </div>

                                            <div className="col-md-4">
                                              <div className="mb-3 mt-2">
                                                <label htmlFor="agreedOrIndemnityPartner" className="form-label">
                                                Agreed or indemnity?
                                                </label>
                                                <Field
                                                  as='select'
                                                  id="agreedOrIndemnityPartner"
                                                  name="agreedOrIndemnityPartner" placeholder='Agreed or indemnity?'
                                                  className="form-select shadow  inputDesign"
                                                  //onChange={(e) => setFieldValue("agreedOrIndemnityPartner", e.target.value)}
                                                 //value={values.agreedOrIndemnityPartner}
                                                >
                                                  <option value="Select">Select</option>
                                                  <option value="Agreed">Agreed</option>
                                                  <option value="Indemnity">Indemnitys</option>
                                                
                                                </Field>
                                                <ErrorMessage component='div' className="text-danger fw-bold" name="agreedOrIndemnityPartner" />

                                              </div>
                                            </div>

                                        </div>
                                    {/* Row # 4 */}
                                    {/* Row # 5 */}
                                    <div className='row'>
                                            <div className="col-md-4">
                                          <div className="mb-3 mt-2">
                                      <label htmlFor="CostPASecondPartner" className="form-label">Cost p.a.</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="CostPASecondPartner" name='CostPASecondPartner' placeholder="Cost p.a." />
                                      {/* <ErrorMessage component='div' className='text-danger fw-bold' name='CostPASecondPartner' /> */}
                                    </div>
                                         </div>

                                         <div className="col-md-4">
                                              <div className="mb-3 mt-2">
                                                <label htmlFor="PremiumTypeSecondPartner" className="form-label">
                                                Premium Type
                                                </label>
                                                <Field
                                                  as='select'
                                                  id="PremiumTypeSecondPartner"
                                                  name="PremiumTypeSecondPartner" placeholder='Premium Type'
                                                  className="form-select shadow  inputDesign"
                                                  //onChange={(e) => setFieldValue("PremiumTypeSecondPartner", e.target.value)}
                                                 //value={values.PremiumTypeSecondPartner}
                                                >
                                                  <option value="Level">Level</option>
                                                  <option value="Stepped">Stepped</option>
                                                  <option value="Other">Other</option>
                                                </Field>
                                                <ErrorMessage component='div' className="text-danger fw-bold" name="PremiumTypeSecondPartner" />

                                              </div>
                                            </div>

                                    <div className='col-md-4 mt-2 mb-3'>
                                            <label className="form-label">
                                            Includes Super Continuance?
                                            </label>
                                            {/* switch button style */}
                                            <div className="form-check form-switch m-0 p-0 ">
                                              <div className="radiobutton">
                                                <input type="radio" name="IncludesSuperContinuancePartner"
                                                  id="IncludesSuperContinuancePartner" value="Yes"
                                                //  onClick={() => investmentRadioHandler("Yes")}
                                                //onChange={handleChange}
                                                // checked={values.IncludesSuperContinuancePartner === "Yes"}
                                                />
                                                <label htmlFor="IncludesSuperContinuancePartner" className="label1">
                                                  <span>YES</span>
                                                </label>
                                                <input type="radio" name="IncludesSuperContinuancePartner"
                                                  id="IncludesSuperContinuancePartner1" value="No"
                                                //onClick={() => investmentRadioHandler("No")}
                                                //onChange={handleChange}
                                                //checked={values.IncludesSuperContinuancePartner2 === "No"}
                                                />
                                                <label htmlFor="IncludesSuperContinuancePartner2" className="label2">
                                                  <span>NO</span>
                                                </label>
                                              </div>

                                            </div>
                                            </div>

                                        </div>
                                    {/* Row # 5 */}

                                     {/* Row # 6 */}
                                     <div className='row'>

                                    <div className='col-md-4 mt-2 mb-3'>
                                            <label className="form-label">
                                            Is the benefit indexed?
                                            </label>
                                            {/* switch button style */}
                                            <div className="form-check form-switch m-0 p-0 ">
                                              <div className="radiobutton">
                                                <input type="radio" name="IsthebenefitindexedPartner"
                                                  id="IsthebenefitindexedPartner" value="Yes"
                                                //  onClick={() => investmentRadioHandler("Yes")}
                                                //onChange={handleChange}
                                                // checked={values.IsthebenefitindexedPartner === "Yes"}
                                                />
                                                <label htmlFor="IsthebenefitindexedPartner" className="label1">
                                                  <span>YES</span>
                                                </label>
                                                <input type="radio" name="IsthebenefitindexedPartner"
                                                  id="IsthebenefitindexedPartner1" value="No"
                                                //onClick={() => investmentRadioHandler("No")}
                                                //onChange={handleChange}
                                                //checked={values.IsthebenefitindexedPartner2 === "No"}
                                                />
                                                <label htmlFor="IsthebenefitindexedPartner2" className="label2">
                                                  <span>NO</span>
                                                </label>
                                              </div>

                                            </div>
                                            </div>

                                            <div className='col-md-4 mt-2 mb-3'>
                                            <label className="form-label">
                                            Any Loading Or Exclusions?
                                            </label>
                                            {/* switch button style */}
                                            <div className="form-check form-switch m-0 p-0 ">
                                              <div className="radiobutton">
                                                <input type="radio" name="AnyLoadingOrExclusionsPartner"
                                                  id="AnyLoadingOrExclusionsPartner" value="Yes"
                                                //  onClick={() => investmentRadioHandler("Yes")}
                                                //onChange={handleChange}
                                                // checked={values.AnyLoadingOrExclusionsPartner === "Yes"}
                                                />
                                                <label htmlFor="AnyLoadingOrExclusionsPartner" className="label1">
                                                  <span>YES</span>
                                                </label>
                                                <input type="radio" name="AnyLoadingOrExclusionsPartner"
                                                  id="AnyLoadingOrExclusionsPartner1" value="No"
                                                //onClick={() => investmentRadioHandler("No")}
                                                //onChange={handleChange}
                                                //checked={values.AnyLoadingOrExclusionsPartner2 === "No"}
                                                />
                                                <label htmlFor="AnyLoadingOrExclusionsPartner2" className="label2">
                                                  <span>NO</span>
                                                </label>
                                              </div>

                                            </div>
                                            </div>

                                            <div className="col-md-4">
                                          <div className="mb-3 mt-2">
                                      <label htmlFor="PleaseprovidedetailsSecondPartner" className="form-label">Please provide details</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="PleaseprovidedetailsSecondPartner" name='PleaseprovidedetailsSecondPartner' placeholder="Please provide details" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='PleaseprovidedetailsSecondPartner' />
                                    </div>
                                         </div>

                                        </div>
                                    {/* Row # 6 */}
                                      </Modal.Body>
                                      <Modal.Footer>
                                        <div className="col-md-12">
                                          <button
                                            className="float-end btn w-25  bgColor modalBtn"
                                            onClick={handleClose2}
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
                              {/* NESTED INSURANCE MODAL */}
{/* NESTED MODAL PARTNER -> INSURANCE */}

                              {/* BENEFICIARIES MODEL PARTNER TRIGGER BUTTON */}

{/* NESTED MODAL PARTNER -> BENEFICIARIES  */}
                              <button type='button' onClick={handleShowPartner3} className='btn bgColor modalBtn'>Beneficiaries</button>
                              {/* NESTED BENFICIARIES MODAL */}
                              <Modal
                                show={showPartner3}
                                onHide={handleClosePartner3}
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
                                  initialValues={initialValuesBeneficiariesPartnerOptionDetails}
                                  validationSchema={validateYupSchemaBeneficiariesOptionPartnerDetails}
                                  onSubmit={On_submit_validateYupSchemaPartnerBeneficiariesOptionDetails}
                                  enableReinitialize
                                >
                                  {({ values, handleChange, setFieldValue, formik }) =>
                                    <Form>
                                      <Modal.Body>
                                      

                                        <div className=''>

                                          <label className="form-label">
                                            Do you have any Nominated Beneficiaries on the Account?
                                          </label>
                                          {/* switch button style */}
                                          <div className="form-check form-switch m-0 p-0 ">
                                            <div className="radiobutton">
                                              <input type="radio" name="beneficiariesPartnerAttached1"
                                                id="beneficiariesPartnerAttached1" value="Yes"
                                              //  onClick={() => beneficiariesRadioHandler("Yes")}
                                              //onChange={handleChange}
                                              // checked={values.beneficiariesAttached === "Yes"}
                                              />
                                              <label htmlFor="beneficiariesPartnerAttached1" className="label1">
                                                <span>YES</span>
                                              </label>
                                              <input type="radio" name="beneficiariesPartnerAttached1"
                                                id="beneficiariesPartnerAttached1" value="No"
                                              //onClick={() => beneficiariesRadioHandler("No")}
                                              //onChange={handleChange}
                                              //checked={values.beneficiariesAttached === "No"}
                                              />
                                              <label htmlFor="beneficiariesAttached2" className="label2">
                                                <span>NO</span>
                                              </label>
                                            </div>
                                          </div>

                                          <div className="row">
                                            <div className="col-md-6">
                                              <div className="mb-3 mt-5">
                                                <label htmlFor="beneficiariesPartnerAttached1" className="form-label">
                                                  Nomination Type
                                                </label>
                                                <Field
                                                  as='select'
                                                  id="beneficiariesPartnerAttached1"
                                                  name="beneficiariesPartnerAttached1"
                                                  className="form-select shadow  inputDesign"
                                                  //onChange={(e) => setFieldValue("beneficiariesPartnerAttached1", e.target.value)}
                                                  value={values.beneficiariesPartnerAttached1}
                                                >
                                                  <option value="Select">Select</option>
                                                  <option value="Non-Lapsing Binding Death Nominations">Non-Lapsing Binding Death Nominations</option>
                                                  <option value="Binding Death Nominations">Binding Death Nominations</option>
                                                  <option value="Non-Binding Death Nominations">Non-Binding Death Nominations</option>
                                                  <option value="Legal Representative(Your Estate)">Legal Representative(Your Estate)</option>
                                                  <option value="Reversionary Beneficiary">Reversionary Beneficiary</option>
                                                </Field>
                                                <ErrorMessage component='div' className="text-danger fw-bold" name="beneficiariesPartnerAttached1" />

                                              </div>
                                            </div>

                                            <div className="col-md-6">
                                              <div className="mb-3 mt-5">
                                                <label htmlFor="NomiationTypePartnerBeneficiary" className="form-label">
                                                  How many beneficiaries do you have?
                                                </label>
                                                <Field
                                                  as='select'
                                                  id="NomiationTypePartnerBeneficiary"
                                                  name="NomiationTypePartnerBeneficiary"
                                                  className="form-select shadow  inputDesign"
                                                  //onChange={(e) => setFieldValue("NomiationTypePartnerBeneficiary", e.target.value)}
                                                  value={values.NomiationTypePartnerBeneficiary}
                                                >
                                                  <option value="Select">Select</option>
                                                  <option value="1">1</option>
                                                  <option value="2">2</option>
                                                  <option value="3">3</option>
                                                  <option value="4">4</option>
                                                  <option value="5">5</option>
                                                </Field>
                                                <ErrorMessage component='div' className="text-danger fw-bold" name="NomiationTypePartnerBeneficiary" />

                                              </div>
                                            </div>
                                          </div>

                                          {/* Row 1*/}
                                          <div className="row justify-content-around mt-4 mb-3">

                                            <div className="col-md-4">
                                              <div className="mb-3">
                                                <label htmlFor="BeneficiaryPartner1" className="form-label">Beneficiary 1</   label>
                                                <Field type="number" className="form-control shadow inputDesign"
                                                  id="BeneficiaryPartner1" name='BeneficiaryPartner1' placeholder="Beneficiary 1" />
                                                <ErrorMessage component='div' className='text-danger fw-bold' name='BeneficiaryPartner1' />
                                              </div>
                                            </div>
                                            <div className="col-md-4">
                                              <div className="mb-3">
                                                <label htmlFor="ShareofBenefitPartner1" className="form-label">Share of Benefits % </   label>
                                                <Field type="number" className="form-control shadow inputDesign"
                                                  id="ShareofBenefitPartner1" name='ShareofBenefitPartner1' placeholder="Share of Benefits 1" />
                                                <ErrorMessage component='div' className='text-danger fw-bold' name='ShareofBenefitPartner1' />
                                              </div>
                                            </div>

                                            <div className="col-md-4">
                                              <div className="mb-3">
                                                <label htmlFor="RelationshipOptionDetailsRelationshipPartner1" className="form-label">
                                                  Relationship
                                                </label>
                                                <Field
                                                  as='select'
                                                  id="RelationshipOptionDetailsRelationshipPartner1"
                                                  name="RelationshipOptionDetailsRelationshipPartner1"
                                                  className="form-select shadow  inputDesign"
                                                //onChange={(e) => setFieldValue("RelationshipOptionDetailsRelationshipPartner1", e.target.value)}
                                                value={values.RelationshipOptionDetailsRelationshipPartner1}
                                                >
                                                  <option value="Select">Select</option>
                                                  <option value="Spouse">Spouse</option>
                                                  <option value="Child">Child</option>
                                                  <option value="Other">Other</option>
                                                  <option value="Interdependency">Interdependency</option>
                                                </Field>
                                                <ErrorMessage component='div' className="text-danger fw-bold" name="RelationshipOptionDetailsRelationshipPartner1" />

                                              </div>
                                            </div>

                                          </div>

                                          {/* Row 2*/}
                                          <div className="row justify-content-around mt-4 mb-3">

                                            <div className="col-md-4">
                                              <div className="mb-3">
                                                <label htmlFor="BeneficiaryPartner2" className="form-label">Beneficiary 2</   label>
                                                <Field type="number" className="form-control shadow inputDesign"
                                                  id="BeneficiaryPartner2" name='BeneficiaryPartner2' placeholder="Beneficiary 2" />
                                                <ErrorMessage component='div' className='text-danger fw-bold' name='BeneficiaryPartner2' />
                                              </div>
                                            </div>
                                            <div className="col-md-4">
                                              <div className="mb-3">
                                                <label htmlFor="ShareofBenefitPartner2" className="form-label">Share of Benefits % </   label>
                                                <Field type="number" className="form-control shadow inputDesign"
                                                  id="ShareofBenefitPartner2" name='ShareofBenefitPartner2' placeholder="Share of Benefits 2" />
                                                <ErrorMessage component='div' className='text-danger fw-bold' name='ShareofBenefitPartner2' />
                                              </div>
                                            </div>

                                            <div className="col-md-4">
                                              <div className="mb-3">
                                                <label htmlFor="RelationshipOptionDetailsRelationshipPartner2" className="form-label">
                                                  Relationship
                                                </label>
                                                <Field
                                                  as='select'
                                                  id="RelationshipOptionDetailsRelationshipPartner2"
                                                  name="RelationshipOptionDetailsRelationshipPartner2"
                                                  className="form-select shadow  inputDesign"
                                                //onChange={(e) => setFieldValue("RelationshipOptionDetailsRelationshipPartner2", e.target.value)}
                                                value={values.RelationshipOptionDetailsRelationshipPartner2}
                                                >
                                                  <option value="Select">Select</option>
                                                  <option value="Spouse">Spouse</option>
                                                  <option value="Child">Child</option>
                                                  <option value="Other">Other</option>
                                                  <option value="Interdependency">Interdependency</option>
                                                </Field>
                                                <ErrorMessage component='div' className="text-danger fw-bold" name="RelationshipOptionDetailsRelationshipPartner2" />

                                              </div>
                                            </div>

                                          </div>
                                          {/* Row 2*/}


                                          {/* Row 3*/}
                                          <div className="row justify-content-around mt-4 mb-3">

                                            <div className="col-md-4">
                                              <div className="mb-3">
                                                <label htmlFor="BeneficiaryPartner3" className="form-label">Beneficiary 3</   label>
                                                <Field type="number" className="form-control shadow inputDesign"
                                                  id="BeneficiaryPartner3" name='BeneficiaryPartner3' placeholder="Beneficiary 3" />
                                                <ErrorMessage component='div' className='text-danger fw-bold' name='BeneficiaryPartner3' />
                                              </div>
                                            </div>
                                            <div className="col-md-4">
                                              <div className="mb-3">
                                                <label htmlFor="ShareofBenefitPartner3" className="form-label">Share of Benefits % </   label>
                                                <Field type="number" className="form-control shadow inputDesign"
                                                  id="ShareofBenefitPartner3" name='ShareofBenefitPartner3' placeholder="Share of Benefits 3" />
                                                <ErrorMessage component='div' className='text-danger fw-bold' name='ShareofBenefitPartner3' />
                                              </div>
                                            </div>

                                            <div className="col-md-4">
                                              <div className="mb-3">
                                                <label htmlFor="RelationshipOptionDetailsRelationshipPartner3" className="form-label">
                                                  Relationship
                                                </label>
                                                <Field
                                                  as='select'
                                                  id="RelationshipOptionDetailsRelationshipPartner3"
                                                  name="RelationshipOptionDetailsRelationshipPartner3"
                                                  className="form-select shadow  inputDesign"
                                                //onChange={(e) => setFieldValue("RelationshipOptionDetailsRelationshipPartner3", e.target.value)}
                                                value={values.RelationshipOptionDetailsRelationshipPartner3}
                                                >
                                                  <option value="Select">Select</option>
                                                  <option value="Spouse">Spouse</option>
                                                  <option value="Child">Child</option>
                                                  <option value="Other">Other</option>
                                                  <option value="Interdependency">Interdependency</option>
                                                </Field>
                                                <ErrorMessage component='div' className="text-danger fw-bold" name="RelationshipOptionDetailsRelationshipPartner3" />

                                              </div>
                                            </div>

                                          </div>
                                          {/* Row 3*/}


                                          {/* Row 4*/}
                                          <div className="row justify-content-around mt-4 mb-3">

                                            <div className="col-md-4">
                                              <div className="mb-3">
                                                <label htmlFor="BeneficiaryPartner4" className="form-label">Beneficiary 4</   label>
                                                <Field type="number" className="form-control shadow inputDesign"
                                                  id="BeneficiaryPartner4" name='BeneficiaryPartner4' placeholder="Beneficiary 4" />
                                                <ErrorMessage component='div' className='text-danger fw-bold' name='BeneficiaryPartner4' />
                                              </div>
                                            </div>
                                            <div className="col-md-4">
                                              <div className="mb-3">
                                                <label htmlFor="ShareofBenefitPartner4" className="form-label">Share of Benefits % </   label>
                                                <Field type="number" className="form-control shadow inputDesign"
                                                  id="ShareofBenefitPartner4" name='ShareofBenefitPartner4' placeholder="Share of Benefits 4" />
                                                <ErrorMessage component='div' className='text-danger fw-bold' name='ShareofBenefitPartner4' />
                                              </div>
                                            </div>

                                            <div className="col-md-4">
                                              <div className="mb-3">
                                                <label htmlFor="RelationshipOptionDetailsRelationshipPartner4" className="form-label">
                                                  Relationship
                                                </label>
                                                <Field
                                                  as='select'
                                                  id="RelationshipOptionDetailsRelationshipPartner4"
                                                  name="RelationshipOptionDetailsRelationshipPartner4"
                                                  className="form-select shadow  inputDesign"
                                                //onChange={(e) => setFieldValue("RelationshipOptionDetailsRelationshipPartner4", e.target.value)}
                                                value={values.RelationshipOptionDetailsRelationshipPartner4}
                                                >
                                                  <option value="Select">Select</option>
                                                  <option value="Spouse">Spouse</option>
                                                  <option value="Child">Child</option>
                                                  <option value="Other">Other</option>
                                                  <option value="Interdependency">Interdependency</option>
                                                </Field>
                                                <ErrorMessage component='div' className="text-danger fw-bold" name="RelationshipOptionDetailsRelationshipPartner4" />

                                              </div>
                                            </div>

                                          </div>
                                          {/* Row 4*/}


                                          {/* Row 5*/}
                                          <div className="row justify-content-around mt-4 mb-3">

                                            <div className="col-md-4">
                                              <div className="mb-3">
                                                <label htmlFor="BeneficiaryPartner5" className="form-label">Beneficiary 5</   label>
                                                <Field type="number" className="form-control shadow inputDesign"
                                                  id="BeneficiaryPartner5" name='BeneficiaryPartner5' placeholder="Beneficiary 5" />
                                                <ErrorMessage component='div' className='text-danger fw-bold' name='BeneficiaryPartner5' />
                                              </div>
                                            </div>
                                            <div className="col-md-4">
                                              <div className="mb-3">
                                                <label htmlFor="ShareofBenefitPartner5" className="form-label">Share of Benefits % </   label>
                                                <Field type="number" className="form-control shadow inputDesign"
                                                  id="ShareofBenefitPartner5" name='ShareofBenefitPartner5' placeholder="Share of Benefits 5" />
                                                <ErrorMessage component='div' className='text-danger fw-bold' name='ShareofBenefitPartner5' />
                                              </div>
                                            </div>

                                            <div className="col-md-4">
                                              <div className="mb-3">
                                                <label htmlFor="RelationshipOptionDetailsRelationshipPartner5" className="form-label">
                                                  Relationship
                                                </label>
                                                <Field
                                                  as='select'
                                                  id="RelationshipOptionDetailsRelationshipPartner5"
                                                  name="RelationshipOptionDetailsRelationshipPartner5"
                                                  className="form-select shadow  inputDesign"
                                                //onChange={(e) => setFieldValue("RelationshipOptionDetailsRelationshipPartner5", e.target.value)}
                                                value={values.RelationshipOptionDetailsRelationshipPartner5}
                                                >
                                                  <option value="Select">Select</option>
                                                  <option value="Spouse">Spouse</option>
                                                  <option value="Child">Child</option>
                                                  <option value="Other">Other</option>
                                                  <option value="Interdependency">Interdependency</option>
                                                </Field>
                                                <ErrorMessage component='div' className="text-danger fw-bold" name="RelationshipOptionDetailsRelationshipPartner5" />

                                              </div>
                                            </div>

                                          </div>
                                          {/* Row 5*/}

                                        </div>
                                      </Modal.Body>
                                      <Modal.Footer>
                                        <div className="col-md-12">
                                          <button
                                            className="float-end btn w-25  bgColor modalBtn"
                                            onClick={handleClosePartner3}
                                            type='submit'
                                          >
                                            Save
                                          </button>
                                          <span
                                            className="float-end btn w-25  btn-outline  backBtn mx-3"
                                            onClick={handleClosePartner3}
                                          >
                                            Cancel
                                          </span>
                                        </div>
                                      </Modal.Footer>
                                    </Form>
                                  }
                                </Formik>
                              </Modal>
                              {/* NESTED BENFICIARIES MODAL */}
{/* NESTED MODAL PARTNER -> BENEFICIARIES  */}


<button type='button' onClick={handleShowPartner4} className='btn bgColor modalBtn mx-2'>Contributions</button>
                                                            {/* NESTED PARTNER -> CONTRIBUTION MODAL */}

                              <Modal
                                show={showPartner4}
                                onHide={handleClosePartner4}
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
                                  initialValues={initialValuesContributionPartnerOptionDetails}
                                  validationSchema={validateYupSchemaContributionPartnerOptionDetails}
                                  onSubmit={On_submit_validateYupSchemaContributionPartnerOptionDetails}
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
                                              <input type="radio" name="investmentAttached1"
                                                id="investmentAttached1" value="Yes"
                                              //  onClick={() => investmentRadioHandler("Yes")}
                                              //onChange={handleChange}
                                              // checked={values.investmentAttached === "Yes"}
                                              />
                                              <label htmlFor="investmentAttached" className="label1">
                                                <span>YES</span>
                                              </label>
                                              <input type="radio" name="investmentAttached1"
                                                id="investmentAttached2" value="No"
                                              //onClick={() => investmentRadioHandler("No")}
                                              //onChange={handleChange}
                                              //checked={values.investmentAttached === "No"}
                                              />
                                              <label htmlFor="investmentAttached2" className="label2">
                                                <span>NO</span>
                                              </label>
                                            </div>

                                          </div>

                                          {/* Row 1*/}
                                          <div>
                                            <h3 className='mt-5'>
                                              FY2023
                                            </h3>

                                            <div className="row justify-content-around mt-3 mb-3">
                                              <div className="col-md-3">
                                                <div className="mb-3">
                                                  <label htmlFor="Non_ConcessionalPartner1" className="form-label">Non Concessional</   label>
                                                  <Field type="number" className="form-control shadow inputDesign"
                                                    id="Non_ConcessionalPartner1" name='Non_ConcessionalPartner1' placeholder="Non Concessional" />
                                                  <ErrorMessage component='div' className='text-danger fw-bold' name='Non_ConcessionalPartner1' />
                                                </div>
                                              </div>
                                              <div className="col-md-3">
                                                <div className="mb-3">
                                                  <label htmlFor="OtherPartner1" className="form-label">Other</   label>
                                                  <Field type="number" className="form-control shadow inputDesign"
                                                    id="OtherPartner1" name='OtherPartner1' placeholder="Other" />
                                                  <ErrorMessage component='div' className='text-danger fw-bold' name='OtherPartner1' />
                                                </div>
                                              </div>

                                              <div className="col-md-3">
                                                <div className="mb-3">
                                                  <label htmlFor="EmployerContributionsPartner1" className="form-label">Contributions</   label>
                                                  <Field type="number" className="form-control shadow inputDesign"
                                                    id="EmployerContributionsPartner1" name='EmployerContributionsPartner1' placeholder="Employer Contributions" />
                                                  <ErrorMessage component='div' className='text-danger fw-bold' name='EmployerContributionsPartner1' />
                                                </div>
                                              </div>

                                              <div className="col-md-3">
                                                <div className="mb-3">
                                                  <label htmlFor="SalarySacAndPersonalDedPartner1" className="form-label">Salary Sac & Ded</   label>
                                                  <Field type="number" className="form-control shadow inputDesign"
                                                    id="SalarySacAndPersonalDedPartner1" name='SalarySacAndPersonalDedPartner1' placeholder="Salary Sac & Personal Ded" />
                                                  <ErrorMessage component='div' className='text-danger fw-bold' name='SalarySacAndPersonalDedPartner1' />
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
                                                  <label htmlFor="Non_ConcessionalPartner2" className="form-label">Non Concessional</   label>
                                                  <Field type="number" className="form-control shadow inputDesign"
                                                    id="Non_ConcessionalPartner2" name='Non_ConcessionalPartner2' placeholder="Non Concessional" />
                                                  <ErrorMessage component='div' className='text-danger fw-bold' name='Non_ConcessionalPartner2' />
                                                </div>
                                              </div>
                                              <div className="col-md-3">
                                                <div className="mb-3">
                                                  <label htmlFor="OtherPartner2" className="form-label">Other</   label>
                                                  <Field type="number" className="form-control shadow inputDesign"
                                                    id="OtherPartner2" name='OtherPartner2' placeholder="Other" />
                                                  <ErrorMessage component='div' className='text-danger fw-bold' name='OtherPartner2' />
                                                </div>
                                              </div>

                                              <div className="col-md-3">
                                                <div className="mb-3">
                                                  <label htmlFor="EmployerContributionsPartner2" className="form-label">Contributions</   label>
                                                  <Field type="number" className="form-control shadow inputDesign"
                                                    id="EmployerContributionsPartner2" name='EmployerContributionsPartner2' placeholder="Employer Contributions" />
                                                  <ErrorMessage component='div' className='text-danger fw-bold' name='EmployerContributionsPartner2' />
                                                </div>
                                              </div>

                                              <div className="col-md-3">
                                                <div className="mb-3">
                                                  <label htmlFor="SalarySacAndPersonalDedPartner2" className="form-label">Salary Sac & Ded</   label>
                                                  <Field type="number" className="form-control shadow inputDesign"
                                                    id="SalarySacAndPersonalDedPartner2" name='SalarySacAndPersonalDedPartner2' placeholder="Salary Sac & Personal Ded" />
                                                  <ErrorMessage component='div' className='text-danger fw-bold' name='SalarySacAndPersonalDedPartner2' />
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
                                                  <label htmlFor="Non_ConcessionalPartner3" className="form-label">Non Concessional</   label>
                                                  <Field type="number" className="form-control shadow inputDesign"
                                                    id="Non_ConcessionalPartner3" name='Non_ConcessionalPartner3' placeholder="Non Concessional" />
                                                  <ErrorMessage component='div' className='text-danger fw-bold' name='Non_ConcessionalPartner3' />
                                                </div>
                                              </div>
                                              <div className="col-md-3">
                                                <div className="mb-3">
                                                  <label htmlFor="OtherPartner3" className="form-label">Other</   label>
                                                  <Field type="number" className="form-control shadow inputDesign"
                                                    id="OtherPartner3" name='OtherPartner3' placeholder="Other" />
                                                  <ErrorMessage component='div' className='text-danger fw-bold' name='OtherPartner3' />
                                                </div>
                                              </div>

                                              <div className="col-md-3">
                                                <div className="mb-3">
                                                  <label htmlFor="EmployerContributionsPartner3" className="form-label">Contributions</   label>
                                                  <Field type="number" className="form-control shadow inputDesign"
                                                    id="EmployerContributionsPartner3" name='EmployerContributionsPartner3' placeholder="Employer Contributions" />
                                                  <ErrorMessage component='div' className='text-danger fw-bold' name='EmployerContributionsPartner3' />
                                                </div>
                                              </div>

                                              <div className="col-md-3">
                                                <div className="mb-3">
                                                  <label htmlFor="SalarySacAndPersonalDedPartner3" className="form-label">Salary Sac & Ded</   label>
                                                  <Field type="number" className="form-control shadow inputDesign"
                                                    id="SalarySacAndPersonalDedPartner3" name='SalarySacAndPersonalDedPartner3' placeholder="Salary Sac & Personal Ded" />
                                                  <ErrorMessage component='div' className='text-danger fw-bold' name='SalarySacAndPersonalDedPartner3' />
                                                </div>
                                              </div>

                                            </div>
                                          </div>
                                          {/* Row # 3 */}

                                        </div>
                                      </Modal.Body>
                                      <Modal.Footer>
                                        <div className="col-md-12">
                                          <button
                                            className="float-end btn w-25  bgColor modalBtn"
                                            // onClick={handleClose4}
                                            type='submit'
                                          >
                                            Save
                                          </button>
                                          <span
                                            className="float-end btn w-25  btn-outline  backBtn mx-3"
                                            onClick={handleClosePartner4}
                                          >
                                            Cancel
                                          </span>
                                        </div>
                                      </Modal.Footer>
                                    </Form>
                                  }
                                </Formik>
                              </Modal>
                              {/* NESTED PARTNER -> CONTRIBUTION MODAL */}

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
                          <label className="form-label">
                            Do you have any Pension Accounts?
                          </label>
                          {/* switch button style */}
                          <div className="form-check form-switch m-0 p-0 ">
                            <div className="radiobutton">
                              <input type="radio" name="PensionRadio"
                                id="PensionRadioopt1" value="Yes"
                                onClick={() => PensionHandler("Yes")}
                                onChange={handleChange}
                                checked={values.PensionRadio === "Yes"}
                              />
                              <label htmlFor="PensionRadioopt1" className="label1">
                                <span>YES</span>
                              </label>
                              <input type="radio" name="PensionRadio"
                                id="PensionRadioopt2" value="No"
                                onClick={() => PensionHandler("No")}
                                onChange={handleChange}
                                checked={values.PensionRadio === "No"}
                              />
                              <label htmlFor="PensionRadioopt2" className="label2">
                                <span>NO</span>
                              </label>
                            </div>




                          </div>
                        </div>
                      </div>
                      {Pension && <div className='col-md-6'>
                        <label className="form-label">
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
                        {({ values, setFieldValue, setValues, handleChange, formik }) =>
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
                                      <ErrorMessage name="PensionFundName" component='div' className="text-danger fw-bold" />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="PensionMemberNo" className="form-label">Member No</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="PensionMemberNo" name='PensionMemberNo' placeholder="Member No" />
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
                                      <ErrorMessage name="PensionFundType" component='div' className="text-danger fw-bold" />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="PensionContactNO" className="form-label">Contact No</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="PensionContactNO" name='PensionContactNO' placeholder="Contact No" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='PensionContactNO' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="PensionFaxNO" className="form-label">Fax No</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="PensionFaxNO" name='PensionFaxNO' placeholder="Fax No" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='PensionFaxNO' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="PensionPostalAddress" className="form-label">Postal Address</   label>
                                      <Field type="text" className="form-control shadow inputDesign"
                                        id="PensionPostalAddress" name='PensionPostalAddress' placeholder="Postal Address" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='PensionPostalAddress' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="PensionABN" className="form-label">ABN</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="PensionABN" name='PensionABN' placeholder="ABN" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='PensionABN' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="PensionSPIN" className="form-label">SPIN</   label>
                                      <Field type="text" className="form-control shadow inputDesign"
                                        id="PensionSPIN" name='PensionSPIN' placeholder="SPIN" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='PensionSPIN' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="PensionWebsite" className="form-label">Website</   label>
                                      <Field type="text" className="form-control shadow inputDesign"
                                        id="PensionWebsite" name='PensionWebsite' placeholder="Website" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='PensionWebsite' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="PensionEmail" className="form-label">Email</   label>
                                      <Field type="text" className="form-control shadow inputDesign"
                                        id="PensionEmail" name='PensionEmail' placeholder="Email" />
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
                                      <ErrorMessage name="PensionFundType2" component='div' className="text-danger fw-bold" />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="PensionCommencementDate" className="form-label">Commencment Date</   label>
                                      <Field type="date" className="form-control shadow inputDesign"
                                        id="PensionCommencementDate" name='PensionCommencementDate' />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='PensionCommencementDate' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="PensionEligibleDate" className="form-label">Eligible Service Date</   label>
                                      <Field type="date" className="form-control shadow inputDesign"
                                        id="PensionEligibleDate" name='PensionEligibleDate' />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='PensionEligibleDate' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="PensionCurrentBalance" className="form-label">Current Balance</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="PensionCurrentBalance" name='PensionCurrentBalance' placeholder="Current Balance" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='PensionCurrentBalance' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="PensionTaxFree" className="form-label">Tax Free</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="PensionTaxFree" name='PensionTaxFree' placeholder="Tax Free" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='PensionTaxFree' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="PensionTaxed" className="form-label">Taxed</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="PensionTaxed" name='PensionTaxed' placeholder="Taxed" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='PensionTaxed' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="PensionPurchasePrice" className="form-label">Original Purchase Price</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="PensionPurchasePrice" name='PensionPurchasePrice' placeholder="Original Purchase Price" />
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
                                      <ErrorMessage name="PensionFrequency" component='div' className="text-danger fw-bold" />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="PensionRegularIncomeDrawn" className="form-label">Regular Income Drawn</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="PensionRegularIncomeDrawn" name='PensionRegularIncomeDrawn' placeholder="Regular Income Drawn" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='PensionRegularIncomeDrawn' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="PensionMinimumRequired" className="form-label">Minimum Required</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="PensionMinimumRequired" name='PensionMinimumRequired' placeholder="Minimum Required" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='PensionMinimumRequired' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="PensionRelevantNumber" className="form-label">Relevant Number</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="PensionRelevantNumber" name='PensionRelevantNumber' placeholder="Relevant Number" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='PensionRelevantNumber' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="PensionLumpsumTaken" className="form-label">Lumpsum Withdrawl Taken</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="PensionLumpsumTaken" name='PensionLumpsumTaken' placeholder="Lumpsum Withdrawl Taken" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='PensionLumpsumTaken' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="PensionDeductibleAmount" className="form-label">Deductible Amount</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="PensionDeductibleAmount" name='PensionDeductibleAmount' placeholder="Deductible Amount" />
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
                          <label className="form-label">
                            Do you have any Pension Accounts?
                          </label>
                          {/* switch button style */}
                          <div className="form-check form-switch m-0 p-0 ">
                            <div className="radiobutton">
                              <input type="radio" name="Pension2Radio"
                                id="Pension2Radioopt1" value="Yes"
                                onClick={() => Pension2Handler("Yes")}
                                onChange={handleChange}
                                checked={values.Pension2Radio === "Yes"}
                              />
                              <label htmlFor="Pension2Radioopt1" className="label1">
                                <span>YES</span>
                              </label>
                              <input type="radio" name="Pension2Radio"
                                id="Pension2Radioopt2" value="No"
                                onClick={() => Pension2Handler("No")}
                                onChange={handleChange}
                                checked={values.Pension2Radio === "No"}
                              />
                              <label htmlFor="Pension2Radioopt2" className="label2">
                                <span>NO</span>
                              </label>
                            </div>




                          </div>
                        </div>
                      </div>
                      {Pension2 && <div className='col-md-6'>
                        <label className="form-label">
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
                        {({ values, setFieldValue, setValues, handleChange, formik }) =>
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
                                      <ErrorMessage name="Pension2FundName" component='div' className="text-danger fw-bold" />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="Pension2MemberNo" className="form-label">Member No</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="Pension2MemberNo" name='Pension2MemberNo' placeholder="Member No" />
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
                                      <ErrorMessage name="Pension2FundType" component='div' className="text-danger fw-bold" />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="Pension2ContactNO" className="form-label">Contact No</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="Pension2ContactNO" name='Pension2ContactNO' placeholder="Contact No" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='Pension2ContactNO' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="Pension2FaxNO" className="form-label">Fax No</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="Pension2FaxNO" name='Pension2FaxNO' placeholder="Fax No" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='Pension2FaxNO' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="Pension2PostalAddress" className="form-label">Postal Address</   label>
                                      <Field type="text" className="form-control shadow inputDesign"
                                        id="Pension2PostalAddress" name='Pension2PostalAddress' placeholder="Postal Address" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='Pension2PostalAddress' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="Pension2ABN" className="form-label">ABN</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="Pension2ABN" name='Pension2ABN' placeholder="ABN" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='Pension2ABN' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="Pension2SPIN" className="form-label">SPIN</   label>
                                      <Field type="text" className="form-control shadow inputDesign"
                                        id="Pension2SPIN" name='Pension2SPIN' placeholder="SPIN" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='Pension2SPIN' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="Pension2Website" className="form-label">Website</   label>
                                      <Field type="text" className="form-control shadow inputDesign"
                                        id="Pension2Website" name='Pension2Website' placeholder="Website" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='Pension2Website' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="Pension2Email" className="form-label">Email</   label>
                                      <Field type="text" className="form-control shadow inputDesign"
                                        id="Pension2Email" name='Pension2Email' placeholder="Email" />
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
                                      <ErrorMessage name="Pension2FundType2" component='div' className="text-danger fw-bold" />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="Pension2CommencementDate" className="form-label">Commencment Date</   label>
                                      <Field type="date" className="form-control shadow inputDesign"
                                        id="Pension2CommencementDate" name='Pension2CommencementDate' />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='Pension2CommencementDate' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="Pension2EligibleDate" className="form-label">Eligible Service Date</   label>
                                      <Field type="date" className="form-control shadow inputDesign"
                                        id="Pension2EligibleDate" name='Pension2EligibleDate' />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='Pension2EligibleDate' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="Pension2CurrentBalance" className="form-label">Current Balance</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="Pension2CurrentBalance" name='Pension2CurrentBalance' placeholder="Current Balance" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='Pension2CurrentBalance' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="Pension2TaxFree" className="form-label">Tax Free</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="Pension2TaxFree" name='Pension2TaxFree' placeholder="Tax Free" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='Pension2TaxFree' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="Pension2Taxed" className="form-label">Taxed</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="Pension2Taxed" name='Pension2Taxed' placeholder="Taxed" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='Pension2Taxed' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="Pension2PurchasePrice" className="form-label">Original Purchase Price</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="Pension2PurchasePrice" name='Pension2PurchasePrice' placeholder="Original Purchase Price" />
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
                                      <ErrorMessage name="Pension2Frequency" component='div' className="text-danger fw-bold" />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="Pension2RegularIncomeDrawn" className="form-label">Regular Income Drawn</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="Pension2RegularIncomeDrawn" name='Pension2RegularIncomeDrawn' placeholder="Regular Income Drawn" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='Pension2RegularIncomeDrawn' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="Pension2MinimumRequired" className="form-label">Minimum Required</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="Pension2MinimumRequired" name='Pension2MinimumRequired' placeholder="Minimum Required" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='Pension2MinimumRequired' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="Pension2RelevantNumber" className="form-label">Relevant Number</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="Pension2RelevantNumber" name='Pension2RelevantNumber' placeholder="Relevant Number" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='Pension2RelevantNumber' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="Pension2LumpsumTaken" className="form-label">Lumpsum Withdrawl Taken</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="Pension2LumpsumTaken" name='Pension2LumpsumTaken' placeholder="Lumpsum Withdrawl Taken" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='Pension2LumpsumTaken' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="Pension2DeductibleAmount" className="form-label">Deductible Amount</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="Pension2DeductibleAmount" name='Pension2DeductibleAmount' placeholder="Deductible Amount" />
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
                          <label className="form-label">
                            Do you have any Annuities?
                          </label>
                          {/* switch button style */}
                          <div className="form-check form-switch m-0 p-0 ">
                            <div className="radiobutton">
                              <input type="radio" name="AnnuitiesRadio"
                                id="AnnuitiesRadioopt1" value="Yes"
                                onClick={() => AnnuitiesHandler("Yes")}
                                onChange={handleChange}
                                checked={values.AnnuitiesRadio === "Yes"}
                              />
                              <label htmlFor="AnnuitiesRadioopt1" className="label1">
                                <span>YES</span>
                              </label>
                              <input type="radio" name="AnnuitiesRadio"
                                id="AnnuitiesRadioopt2" value="No"
                                onClick={() => AnnuitiesHandler("No")}
                                onChange={handleChange}
                                checked={values.AnnuitiesRadio === "No"}
                              />
                              <label htmlFor="AnnuitiesRadioopt2" className="label2">
                                <span>NO</span>
                              </label>
                            </div>




                          </div>
                        </div>
                      </div>
                      {Annuities && <div className='col-md-6'>
                        <label className="form-label">
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
                        {({ values, setFieldValue, setValues, handleChange, formik }) =>
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
                                      <ErrorMessage name="AnnuitiesProductProvider" component='div' className="text-danger fw-bold" />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="AnnuitiesOriginalInvestment" className="form-label">Original Investment Amount</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="AnnuitiesOriginalInvestment" name='AnnuitiesOriginalInvestment' placeholder="Original Investment Amount" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='AnnuitiesOriginalInvestment' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="AnnuitiesCurrentValue" className="form-label">Current Value</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="AnnuitiesCurrentValue" name='AnnuitiesCurrentValue' placeholder="Current Value" />
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
                                      <ErrorMessage name="AnnuitiesAnnuityType" component='div' className="text-danger fw-bold" />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="AnnuitiesRCV" className="form-label">RCV</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="AnnuitiesRCV" name='AnnuitiesRCV' placeholder="RCV" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='AnnuitiesRCV' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="AnnuitiesTerm" className="form-label">Term</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="AnnuitiesTerm" name='AnnuitiesTerm' placeholder="Term" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='AnnuitiesTerm' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="AnnuitiesMaturityYears" className="form-label">Years Until Maturity</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="AnnuitiesMaturityYears" name='AnnuitiesMaturityYears' placeholder="Years Until Maturity" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='AnnuitiesMaturityYears' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="AnnuitiesRegularIncomeDrawn" className="form-label">Regular Income Drawn</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="AnnuitiesRegularIncomeDrawn" name='AnnuitiesRegularIncomeDrawn' placeholder="Regular Income Drawn" />
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
                                      <ErrorMessage name="AnnuitiesFrequency" component='div' className="text-danger fw-bold" />
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
                                      <ErrorMessage name="AnnuitiesInflationRate" component='div' className="text-danger fw-bold" />
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
                          <label className="form-label">
                            Do you have any Annuities?
                          </label>
                          {/* switch button style */}
                          <div className="form-check form-switch m-0 p-0 ">
                            <div className="radiobutton">
                              <input type="radio" name="Annuities2Radio"
                                id="Annuities2Radioopt1" value="Yes"
                                onClick={() => Annuities2Handler("Yes")}
                                onChange={handleChange}
                                checked={values.Annuities2Radio === "Yes"}
                              />
                              <label htmlFor="Annuities2Radioopt1" className="label1">
                                <span>YES</span>
                              </label>
                              <input type="radio" name="Annuities2Radio"
                                id="Annuities2Radioopt2" value="No"
                                onClick={() => Annuities2Handler("No")}
                                onChange={handleChange}
                                checked={values.Annuities2Radio === "No"}
                              />
                              <label htmlFor="Annuities2Radioopt2" className="label2">
                                <span>NO</span>
                              </label>
                            </div>




                          </div>
                        </div>
                      </div>
                      {Annuities2 && <div className='col-md-6'>
                        <label className="form-label">
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
                        {({ values, setFieldValue, setValues, handleChange, formik }) =>
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
                                      <ErrorMessage name="Annuities2ProductProvider" component='div' className="text-danger fw-bold" />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="Annuities2OriginalInvestment" className="form-label">Original Investment Amount</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="Annuities2OriginalInvestment" name='Annuities2OriginalInvestment' placeholder="Original Investment Amount" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='Annuities2OriginalInvestment' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="Annuities2CurrentValue" className="form-label">Current Value</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="Annuities2CurrentValue" name='Annuities2CurrentValue' placeholder="Current Value" />
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
                                      <ErrorMessage name="Annuities2AnnuityType" component='div' className="text-danger fw-bold" />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="Annuities2RCV" className="form-label">RCV</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="Annuities2RCV" name='Annuities2RCV' placeholder="RCV" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='Annuities2RCV' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="Annuities2Term" className="form-label">Term</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="Annuities2Term" name='Annuities2Term' placeholder="Term" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='Annuities2Term' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="Annuities2MaturityYears" className="form-label">Years Until Maturity</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="Annuities2MaturityYears" name='Annuities2MaturityYears' placeholder="Years Until Maturity" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='Annuities2MaturityYears' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="Annuities2RegularIncomeDrawn" className="form-label">Regular Income Drawn</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="Annuities2RegularIncomeDrawn" name='Annuities2RegularIncomeDrawn' placeholder="Regular Income Drawn" />
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
                                      <ErrorMessage name="Annuities2Frequency" component='div' className="text-danger fw-bold" />
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
                                      <ErrorMessage name="Annuities2InflationRate" component='div' className="text-danger fw-bold" />
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
                          <label className="form-label">
                            Do you have any Lifetime Pension?
                          </label>
                          {/* switch button style */}
                          <div className="form-check form-switch m-0 p-0 ">
                            <div className="radiobutton">
                              <input type="radio" name="LifetimePensionRadio"
                                id="LifetimePensionRadioopt1" value="Yes"
                                onClick={() => LifetimePensionHandler("Yes")}
                                onChange={handleChange}
                                checked={values.LifetimePensionRadio === "Yes"}
                              />
                              <label htmlFor="LifetimePensionRadioopt1" className="label1">
                                <span>YES</span>
                              </label>
                              <input type="radio" name="LifetimePensionRadio"
                                id="LifetimePensionRadioopt2" value="No"
                                onClick={() => LifetimePensionHandler("No")}
                                onChange={handleChange}
                                checked={values.LifetimePensionRadio === "No"}
                              />
                              <label htmlFor="LifetimePensionRadioopt2" className="label2">
                                <span>NO</span>
                              </label>
                            </div>




                          </div>
                        </div>
                      </div>
                      {LifetimePension && <div className='col-md-6'>
                        <label className="form-label">
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
                        onSubmit={ClientLifetimePension_onSubmit}>
                        {({ values, setFieldValue, setValues, handleChange, formik }) =>
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
                                        id="LifetimePensionFundName" name='LifetimePensionFundName' placeholder="Fund Name" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='LifetimePensionFundName' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="LifetimePensionIncomeDrawn" className="form-label">Regular Income Drawn</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="LifetimePensionIncomeDrawn" name='LifetimePensionIncomeDrawn' placeholder="Regular Income Drawn" />
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
                                      <ErrorMessage name="LifetimePensionFrequency" component='div' className="text-danger fw-bold" />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="LifetimePensionDeductibleAmount" className="form-label">Deductible Amount</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="LifetimePensionDeductibleAmount" name='LifetimePensionDeductibleAmount' placeholder="Deductible Amount" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='LifetimePensionDeductibleAmount' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Is this Pension Tax-Free?
                                      </label>
                                      {/* switch button style */}
                                      <div className="form-check form-switch m-0 p-0 ">
                                        <div className="radiobutton">
                                          <input type="radio" name="LifetimePensionTaxFree"
                                            id="LifetimePensionopt1" value="Yes"
                                            onChange={handleChange}
                                            checked={values.LifetimePensionTaxFree === "Yes"}
                                          />
                                          <label htmlFor="LifetimePensionopt1" className="label1">
                                            <span>YES</span>
                                          </label>
                                          <input type="radio" name="LifetimePensionTaxFree"
                                            id="LifetimePensionopt2" value="No"
                                            onChange={handleChange}
                                            checked={values.LifetimePensionTaxFree === "No"}
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
                                        id="LifetimePensionTaxableAmount" name='LifetimePensionTaxableAmount' placeholder="Taxable Pension Amount" />
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
                          <label className="form-label">
                            Do you have any Lifetime Pension?
                          </label>
                          {/* switch button style */}
                          <div className="form-check form-switch m-0 p-0 ">
                            <div className="radiobutton">
                              <input type="radio" name="LifetimePension2Radio"
                                id="LifetimePension2Radioopt1" value="Yes"
                                onClick={() => LifetimePension2Handler("Yes")}
                                onChange={handleChange}
                                checked={values.LifetimePension2Radio === "Yes"}
                              />
                              <label htmlFor="LifetimePension2Radioopt1" className="label1">
                                <span>YES</span>
                              </label>
                              <input type="radio" name="LifetimePension2Radio"
                                id="LifetimePension2Radioopt2" value="No"
                                onClick={() => LifetimePension2Handler("No")}
                                onChange={handleChange}
                                checked={values.LifetimePension2Radio === "No"}
                              />
                              <label htmlFor="LifetimePension2Radioopt2" className="label2">
                                <span>NO</span>
                              </label>
                            </div>




                          </div>
                        </div>
                      </div>
                      {LifetimePension2 && <div className='col-md-6'>
                        <label className="form-label">
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
                        {({ values, setFieldValue, setValues, handleChange, formik }) =>
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
                                        id="LifetimePension2FundName" name='LifetimePension2FundName' placeholder="Fund Name" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='LifetimePension2FundName' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="LifetimePension2IncomeDrawn" className="form-label">Regular Income Drawn</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="LifetimePension2IncomeDrawn" name='LifetimePension2IncomeDrawn' placeholder="Regular Income Drawn" />
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
                                      <ErrorMessage name="LifetimePension2Frequency" component='div' className="text-danger fw-bold" />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="LifetimePension2DeductibleAmount" className="form-label">Deductible Amount</   label>
                                      <Field type="number" className="form-control shadow inputDesign"
                                        id="LifetimePension2DeductibleAmount" name='LifetimePension2DeductibleAmount' placeholder="Deductible Amount" />
                                      <ErrorMessage component='div' className='text-danger fw-bold' name='LifetimePension2DeductibleAmount' />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Is this Pension Tax-Free?
                                      </label>
                                      {/* switch button style */}
                                      <div className="form-check form-switch m-0 p-0 ">
                                        <div className="radiobutton">
                                          <input type="radio" name="LifetimePension2TaxFree"
                                            id="LifetimePension2opt1" value="Yes"
                                            onChange={handleChange}
                                            checked={values.LifetimePension2TaxFree === "Yes"}
                                          />
                                          <label htmlFor="LifetimePension2opt1" className="label1">
                                            <span>YES</span>
                                          </label>
                                          <input type="radio" name="LifetimePension2TaxFree"
                                            id="LifetimePension2opt2" value="No"
                                            onChange={handleChange}
                                            checked={values.LifetimePension2TaxFree === "No"}
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
                                        id="LifetimePension2TaxableAmount" name='LifetimePension2TaxableAmount' placeholder="Taxable Pension Amount" />
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
                      <button type='submit' className="float-end btn w-25  bgColor modalBtn">Next</button>
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

export default SuperRetriement