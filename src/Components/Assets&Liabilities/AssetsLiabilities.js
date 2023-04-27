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
  let postCodePattern = /^\d{4}$/;
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
  const [ownFamilyEdit, setOwnFamilyEdit] = useState(false)/////added

  const [personalAssetDetailsEdit, setpersonalAssetDetailsEdit] = useState(false)

  const [contentList, setContentList] = useState([])
  const [MotorVehicle1, setMotorVehicle1] = useState([])
  const [MotorVehicle2, setMotorVehicle2] = useState([])
  const [Boat, setBoat] = useState([])
  const [Caravan, setCaravan] = useState([])
  const [personalOther, setPersonalOther] = useState([])

  const [contentEdit, setContentEdit] = useState(false)
  const [MotorVehicle1Edit, setMotorVehicle1Edit] = useState(false)
  const [MotorVehicle2Edit, setMotorVehicle2Edit] = useState(false)
  const [BoatEdit, setBoatEdit] = useState(false)
  const [CaravanEdit, setCaravanEdit] = useState(false)
  const [personalOtherEdit, setPersonalOtherEdit] = useState(false)


  // table3 state lists
  const [CreditCardList1, setCreditCardList1] = useState([])
  const [CreditCardList2, setCreditCardList2] = useState([])
  const [PersonalLoanList1, setPersonalLoanList1] = useState([])
  const [PersonalLoanList2, setPersonalLoanList2] = useState([])


  const [CreditCardList1Edit, setCreditCardList1Edit] = useState(false)
  const [CreditCardList2Edit, setCreditCardList2Edit] = useState(false)
  const [PersonalLoanList1Edit, setPersonalLoanList1Edit] = useState(false)
  const [PersonalLoanList2Edit, setPersonalLoanList2Edit] = useState(false)


  let ownFamilyHandler = (elem) => {
    if (elem === "No") {
      setOwnFamily(false)
    }
    else {
      setOwnFamily(true)
    }

  }
  let propertyLoanradioHandler = (elem) => {
    if (elem === "No") {
      setPropertyLoanState(false)
    }
    else {
      setPropertyLoanState(true)
    }

  }

  let personalLoansHandler = (elem) => {
    if (elem === "No") {
      setPersonalLoanState(false)
    }
    else {
      setPersonalLoanState(true)
    }

  }

  let personalAssetsHandler = (elem) => {
    if (elem === "No") {
      setPersonalAssetsState(false)
    }
    else {
      setPersonalAssetsState(true)
    }

  }

  let initialValues = {
    ownFamilyradio: 'No',
    personalAssetsradio: 'No',
    personalLoansradio: 'No',
  }
  let validationSchema = Yup.object({})

  let Navigate = useNavigate();

  function BackFunction() {
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

  let own_initialValues = {
    home: 1,
    CurrentValue: '',
    ClientOwnership: 50,
    PartnerOwnership: 50,
    CostBase: '',
    Address: '',
    Postcode: '',
    AmountAssessed: '',

    propertyLoanradio: 'No',
    ClientBorrowingPercentage: '',
    PartnerBorrowingPercentage: '',
    CurrentBalance: '',
    RepaymentAmounts: '',
    Frequency: '',
    annualRepayments: '',
    InterestRate: '',
    LoanTerm: '',
    LoanType: '',
    YearsRemaining: '',

  }
  let own_validationSchema = Yup.object({
    // home:Yup.number().required('Required') ,
    CurrentValue: Yup.number().required("Required")
      .test(
        "Is positive?",
        "Value must be a positive number",
        (value) => value > 0
      ),
    ClientOwnership: Yup.number().required("Required")
      .test(
        "Is positive?",
        "Value must be a positive number",
        (value) => value > 0
      ),
    PartnerOwnership: Yup.number().required("Required")
      .test(
        "Is positive?",
        "Value must be a positive number",
        (value) => value > 0
      ),
    CostBase: Yup.number().required("Required")
      .test(
        "Is positive?",
        "Value must be a positive number",
        (value) => value > 0
      ),
    Address: Yup.string().required('Required'),
    Postcode: Yup.string().matches(postCodePattern, "invalid postcode").required('Required'),

    AmountAssessed: Yup.number().required("Required")
      .test(
        "Is positive?",
        "Value must be a positive number",
        (value) => value > 0
      ),


    ClientBorrowingPercentage: Yup.number()
      .when('propertyLoanradio', {
        is: val => val && val.length === 3,
        then: Yup.number().required("Required")
          .test(
            "Is positive?",
            "Must be a positive number",
            (value) => value > 0
          ),
        otherwise: Yup.number().notRequired()
      }),

    PartnerBorrowingPercentage: Yup.number()
      .when('propertyLoanradio', {
        is: val => val && val.length === 3,
        then: Yup.number().required("Required")
          .test(
            "Is positive?",
            "Must be a positive number",
            (value) => value > 0
          ),
        otherwise: Yup.number().notRequired()
      }),

    CurrentBalance: Yup.number()
      .when('propertyLoanradio', {
        is: val => val && val.length === 3,
        then: Yup.number().required("Required")
          .test(
            "Is positive?",
            "Must be a positive number",
            (value) => value > 0
          ),
        otherwise: Yup.number().notRequired()
      }),

    RepaymentAmounts: Yup.number()
      .when('propertyLoanradio', {
        is: val => val && val.length === 3,
        then: Yup.number().required("Required")
          .test(
            "Is positive?",
            "Must be a positive number",
            (value) => value > 0
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

    InterestRate: Yup.number()
      .when('propertyLoanradio', {
        is: val => val && val.length === 3,
        then: Yup.number().required("Required")
          .test(
            "Is positive?",
            "Must be a positive number",
            (value) => value > 0
          ),
        otherwise: Yup.number().notRequired()
      }),



    Frequency: Yup.string()
      .when("propertyLoanradio", {
        is: val => val && val.length === 3,
        then: Yup.string().required("Required")
        , otherwise: Yup.string()
          .notRequired()
      }),

    LoanTerm: Yup.string()
      .when("propertyLoanradio", {
        is: val => val && val.length === 3,
        then: Yup.string().required("Required")
        , otherwise: Yup.string()
          .notRequired()
      }),

    LoanType: Yup.string()
      .when("propertyLoanradio", {
        is: val => val && val.length === 3,
        then: Yup.string().required("Required")
        , otherwise: Yup.string()
          .notRequired()
      }),

    YearsRemaining: Yup.string()
      .when("propertyLoanradio", {
        is: val => val && val.length === 3,
        then: Yup.string().required("Required")
        , otherwise: Yup.string()
          .notRequired()
      }),

  })

  let own_onSubmit = (Values) => {

    let ClientFamilyHomeDetails = {
      Email: localStorage.getItem("ClientEmail"),
      HomeNO: parseFloat(Values.home) || 0,
      CurrentValue: Values.CurrentValue,
      ClientOwnership: Values.ClientOwnership,
      PartnerOwnership: Values.PartnerOwnership,
      CostBase: Values.CostBase,
      Address: Values.Address,
      Postcode: Values.Postcode,
      AmountAssessed: Values.AmountAssessed,

      PropertyLoan: Values.propertyLoanradio,
      ClientBorrowingPercentage: Values.ClientBorrowingPercentage,
      PartnerBorrowingPercentage: Values.PartnerBorrowingPercentage,
      CurrentBalance: Values.CurrentBalance,
      RepaymentAmounts: Values.RepaymentAmounts,
      Frequency: Values.Frequency,
      AnnualRepayments: 5000,
      InterestRate: Values.InterestRate,
      LoanTerm: Values.LoanTerm,
      LoanType: Values.LoanType,
      YearsRemaining: Values.YearsRemaining,

    }


    setOwnFamilyList([ClientFamilyHomeDetails])
    handleClose();
    setOwnFamilyEdit(true);

    axios
      .post('http://localhost:7000/Client-FamilyHome/Add-Client-FamilyHome', ClientFamilyHomeDetails)
      .then((res) => console.log("Family Home Added Successfully!"))

    console.log(ClientFamilyHomeDetails)
    // handleClose();
  }

  let personalAssetsInitialValues = {
    Contents_CurrentValue: '',
    Contents_CentreLinkValue: '',
    Contents_Security: 'No',
    MotorVehicle1_CurrentValue: '',
    MotorVehicle1_CentreLinkValue: '',
    MotorVehicle1_Security: 'No',
    MotorVehicle2_CurrentValue: '',
    MotorVehicle2_CentreLinkValue: '',
    MotorVehicle2_Security: 'No',
    Boat_CurrentValue: '',
    Boat_CentreLinkValue: '',
    Boat_Security: 'No',
    Caravan_CurrentValue: '',
    Caravan_CentreLinkValue: '',
    Caravan_Security: 'No',
    Other_CurrentValue: '',
    Other_CentreLinkValue: '',
    Other_Security: 'No',

  }
  let personalAssetsValidationSchema = Yup.object({
    Contents_CurrentValue: Yup.number().required("Required")
      .test(
        "Is positive?",
        "Value must be a positive number",
        (value) => value > 0
      ),
    Contents_CentreLinkValue: Yup.number().required("Required")
      .test(
        "Is positive?",
        "Value must be a positive number",
        (value) => value > 0
      ),
    MotorVehicle1_CurrentValue: Yup.number().required("Required")
      .test(
        "Is positive?",
        "Value must be a positive number",
        (value) => value > 0
      ),
    MotorVehicle1_CentreLinkValue: Yup.number().required("Required")
      .test(
        "Is positive?",
        "Value must be a positive number",
        (value) => value > 0
      ),
    MotorVehicle2_CurrentValue: Yup.number().required("Required")
      .test(
        "Is positive?",
        "Value must be a positive number",
        (value) => value > 0
      ),
    MotorVehicle2_CentreLinkValue: Yup.number().required("Required")
      .test(
        "Is positive?",
        "Value must be a positive number",
        (value) => value > 0
      ),
    Boat_CurrentValue: Yup.number().required("Required")
      .test(
        "Is positive?",
        "Value must be a positive number",
        (value) => value > 0
      ),
    Boat_CentreLinkValue: Yup.number().required("Required")
      .test(
        "Is positive?",
        "Value must be a positive number",
        (value) => value > 0
      ),
    Caravan_CurrentValue: Yup.number().required("Required")
      .test(
        "Is positive?",
        "Value must be a positive number",
        (value) => value > 0
      ),
    Caravan_CentreLinkValue: Yup.number().required("Required")
      .test(
        "Is positive?",
        "Value must be a positive number",
        (value) => value > 0
      ),
    Other_CurrentValue: Yup.number().required("Required")
      .test(
        "Is positive?",
        "Value must be a positive number",
        (value) => value > 0
      ),
    Other_CentreLinkValue: Yup.number().required("Required")
      .test(
        "Is positive?",
        "Value must be a positive number",
        (value) => value > 0
      ),

  })

  let personalAssetsOnSubmit = (Values) => {

    let ClientPersonalAssets = {
      Email: localStorage.getItem("ClientEmail"),
      Contents_CurrentValue: Values.Contents_CurrentValue,
      Contents_CentreLinkValue: Values.Contents_CentreLinkValue,
      Contents_Security: Values.Contents_Security,

      MotorVehicle1_CurrentValue: Values.MotorVehicle1_CurrentValue,
      MotorVehicle1_CentreLinkValue: Values.MotorVehicle1_CentreLinkValue,
      MotorVehicle1_Security: Values.MotorVehicle1_Security,

      MotorVehicle2_CurrentValue: Values.MotorVehicle2_CurrentValue,
      MotorVehicle2_CentreLinkValue: Values.MotorVehicle2_CentreLinkValue,
      MotorVehicle2_Security: Values.MotorVehicle2_Security,

      Boat_CurrentValue: Values.Boat_CurrentValue,
      Boat_CentreLinkValue: Values.Boat_CentreLinkValue,
      Boat_Security: Values.Boat_Security,

      Caravan_CurrentValue: Values.Caravan_CurrentValue,
      Caravan_CentreLinkValue: Values.Caravan_CentreLinkValue,
      Caravan_Security: Values.Caravan_Security,

      Other_CurrentValue: Values.Other_CurrentValue,
      Other_CentreLinkValue: Values.Other_CentreLinkValue,
      Other_Security: Values.Other_Security,

    }

    setContentList([ClientPersonalAssets]);
    setMotorVehicle1([ClientPersonalAssets]);
    setMotorVehicle2([ClientPersonalAssets]);
    setBoat([ClientPersonalAssets]);
    setCaravan([ClientPersonalAssets]);
    setPersonalOther([ClientPersonalAssets]);

    handleClose2();

    setContentEdit(true);
    setMotorVehicle1Edit(true);
    setMotorVehicle2Edit(true);
    setBoatEdit(true);
    setCaravanEdit(true);
    setPersonalOtherEdit(true);



    console.log(contentList);


    axios
      .post('http://localhost:7000/Client-PersonalAssets/Add-Client-PersonalAssets', ClientPersonalAssets)
      .then((res) => console.log("Personal Assets Added Successfully!"))

    console.log(ClientPersonalAssets)
    handleClose2();

  }



  let personalLoansInitialValues = {
    CreditCard1_CurrentBalance: '',
    CreditCard1_RepaymentAmount: '',
    CreditCard1_InterestRate: '',

    CreditCard1_Frequency: '',
    CreditCard1_LoanTerm: '',
    CreditCard1_LoanType: '',
    CreditCard1_YearRemaining: '',

    CreditCard1_AnnualRepayment: '',

    // 2
    CreditCard2_CurrentBalance: '',
    CreditCard2_RepaymentAmount: '',
    CreditCard2_InterestRate: '',

    CreditCard2_Frequency: '',
    CreditCard2_LoanTerm: '',
    CreditCard2_LoanType: '',
    CreditCard2_YearRemaining: '',

    debtAnnualRepayment2: '',

    // 3
    PersonalLoan1_CurrentBalance: '',
    PersonalLoan1_RepaymentAmount: '',
    PersonalLoan1_InterestRate: '',
    PersonalLoan1_Frequency: '',
    PersonalLoan1_LoanTerm: '',
    PersonalLoan1_LoanType: '',
    PersonalLoan1_YearRemaining: '',
    PersonalLoan1_AnnualRepayment: '',

    // 4
    PersonalLoan2_CurrentBalance: '',
    PersonalLoan2_RepaymentAmount: '',
    PersonalLoan2_InterestRate: '',

    PersonalLoan2_Frequency: '',
    PersonalLoan2_LoanTerm: '',
    PersonalLoan2_LoanType: '',
    PersonalLoan2_YearRemaining: '',

    PersonalLoan2_AnnualRepayment: '',
  }

  let personalLoansvalidationSchema = Yup.object({
    CreditCard1_CurrentBalance: Yup.number().required("Required")
      .test(
        "Is positive?",
        "Value must be a positive number",
        (value) => value > 0
      ),
    CreditCard1_RepaymentAmount: Yup.number().required("Required")
      .test(
        "Is positive?",
        "Value must be a positive number",
        (value) => value > 0
      ),
    CreditCard1_InterestRate: Yup.number().required("Required")
      .test(
        "Is positive?",
        "Value must be a positive number",
        (value) => value > 0
      ),
    CreditCard1_Frequency: Yup.string().required('Required'),
    CreditCard1_LoanTerm: Yup.string().required('Required'),
    CreditCard1_LoanType: Yup.string().required('Required'),
    CreditCard1_YearRemaining: Yup.string().required('Required'),

    // 2
    CreditCard2_CurrentBalance: Yup.number().required("Required")
      .test(
        "Is positive?",
        "Value must be a positive number",
        (value) => value > 0
      ),
    CreditCard2_RepaymentAmount: Yup.number().required("Required")
      .test(
        "Is positive?",
        "Value must be a positive number",
        (value) => value > 0
      ),
    CreditCard2_InterestRate: Yup.number().required("Required")
      .test(
        "Is positive?",
        "Value must be a positive number",
        (value) => value > 0
      ),

    CreditCard2_Frequency: Yup.string().required('Required'),
    CreditCard2_LoanTerm: Yup.string().required('Required'),
    CreditCard2_LoanType: Yup.string().required('Required'),
    CreditCard2_YearRemaining: Yup.string().required('Required'),

    // 3
    PersonalLoan1_CurrentBalance: Yup.number().required("Required")
      .test(
        "Is positive?",
        "Value must be a positive number",
        (value) => value > 0
      ),
    PersonalLoan1_RepaymentAmount: Yup.number().required("Required")
      .test(
        "Is positive?",
        "Value must be a positive number",
        (value) => value > 0
      ),
    PersonalLoan1_InterestRate: Yup.number().required("Required")
      .test(
        "Is positive?",
        "Value must be a positive number",
        (value) => value > 0
      ),

    PersonalLoan1_Frequency: Yup.string().required('Required'),
    PersonalLoan1_LoanTerm: Yup.string().required('Required'),
    PersonalLoan1_LoanType: Yup.string().required('Required'),
    PersonalLoan1_YearRemaining: Yup.string().required('Required'),
    // 4
    PersonalLoan2_CurrentBalance: Yup.number().required("Required")
      .test(
        "Is positive?",
        "Value must be a positive number",
        (value) => value > 0
      ),
    PersonalLoan2_RepaymentAmount: Yup.number().required("Required")
      .test(
        "Is positive?",
        "Value must be a positive number",
        (value) => value > 0
      ),
    PersonalLoan2_InterestRate: Yup.number().required("Required")
      .test(
        "Is positive?",
        "Value must be a positive number",
        (value) => value > 0
      ),
    PersonalLoan2_Frequency: Yup.string().required('Required'),
    PersonalLoan2_LoanTerm: Yup.string().required('Required'),
    PersonalLoan2_LoanType: Yup.string().required('Required'),
    PersonalLoan2_YearRemaining: Yup.string().required('Required'),
  })


  let personalLoansonSubmit = (Values) => {

    let ClientPersonalDebts = {
      Email: localStorage.getItem("ClientEmail"),
      CreditCard1_CurrentBalance: Values.CreditCard1_CurrentBalance,
      CreditCard1_RepaymentAmount: Values.CreditCard1_RepaymentAmount,
      CreditCard1_Frequency: Values.CreditCard1_Frequency,
      CreditCard1_AnnualRepayment: 5000,
      CreditCard1_InterestRate: Values.CreditCard1_InterestRate,
      CreditCard1_LoanTerm: Values.CreditCard1_LoanTerm,
      CreditCard1_LoanType: Values.CreditCard1_LoanType,
      CreditCard1_YearRemaining: Values.CreditCard1_YearRemaining,


      // // 2
      CreditCard2_CurrentBalance: Values.CreditCard2_CurrentBalance,
      CreditCard2_RepaymentAmount: Values.CreditCard2_RepaymentAmount,
      CreditCard2_Frequency: Values.CreditCard2_Frequency,
      debtAnnualRepayment2: 5000,
      CreditCard2_InterestRate: Values.CreditCard2_InterestRate,
      CreditCard2_LoanTerm: Values.CreditCard2_LoanTerm,
      CreditCard2_LoanType: Values.CreditCard2_LoanType,
      CreditCard2_YearRemaining: Values.CreditCard2_YearRemaining,


      // // 3
      PersonalLoan1_CurrentBalance: Values.PersonalLoan1_CurrentBalance,
      PersonalLoan1_RepaymentAmount: Values.PersonalLoan1_RepaymentAmount,
      PersonalLoan1_Frequency: Values.PersonalLoan1_Frequency,
      PersonalLoan1_AnnualRepayment: 5000,
      PersonalLoan1_InterestRate: Values.PersonalLoan1_InterestRate,
      PersonalLoan1_LoanTerm: Values.PersonalLoan1_LoanTerm,
      PersonalLoan1_LoanType: Values.PersonalLoan1_LoanType,
      PersonalLoan1_YearRemaining: Values.PersonalLoan1_YearRemaining,

      // // 4
      PersonalLoan2_CurrentBalance: Values.PersonalLoan2_CurrentBalance,
      PersonalLoan2_RepaymentAmount: Values.PersonalLoan2_RepaymentAmount,
      PersonalLoan2_Frequency: Values.PersonalLoan2_Frequency,
      PersonalLoan2_AnnualRepayment: 5000,
      PersonalLoan2_InterestRate: Values.PersonalLoan2_InterestRate,
      PersonalLoan2_LoanTerm: Values.PersonalLoan2_LoanTerm,
      PersonalLoan2_LoanType: Values.PersonalLoan2_LoanType,
      PersonalLoan2_YearRemaining: Values.PersonalLoan2_YearRemaining,

    }

    setCreditCardList1([ClientPersonalDebts]);
    setCreditCardList2([ClientPersonalDebts]);
    setPersonalLoanList1([ClientPersonalDebts]);
    setPersonalLoanList2([ClientPersonalDebts]);

    handleClose3();

    setCreditCardList1Edit(true);
    setCreditCardList2Edit(true);
    setPersonalLoanList1Edit(true);
    setPersonalLoanList2Edit(true);


    axios
      .post('http://localhost:7000/Client-PersonalDebts/Add-Client-PersonalDebts', ClientPersonalDebts)
      .then((res) => console.log("Personal Debts Added Successfully!"))

    console.log(ClientPersonalDebts)
    handleClose3();

  }

  let FamilyHomedeleteHandler = (e) => {

    let data = e;

    //data.home= 1;
    setOwnFamilyList((current) =>
      current.filter((ownFamilyList) => ownFamilyList.home !== data.home))

    // setOwnFamilyList([data])
    //  console.log([data])

  }

  let FamilyHomeupdateHandler = (e) => {

    setOwnFamilyEdit(true);

    console.log(ownFamilyList)
    setTimeout(() => {

      handleShow();

    }, 500);

  }

  let personalAssetsContentupdateHandler = (e) => {

    setContentEdit(true);

    setTimeout(() => {
      handleShow2();
    }, 500)
  }
  let personalAssetsContentdeleteHandler = (e) => {
    let data = e;

    setContentList((current) =>
      current.filter((ownFamilyList) => ownFamilyList !== data))

  }
  let personalAssetsVehicle1updateHandler = (e) => {
    setMotorVehicle1Edit(true);

    setTimeout(() => {
      handleShow2();
    }, 500)
  }
  let personalAssetsVehicle1deleteHandler = (e) => {
    let data = e;
    setMotorVehicle1((current) =>
      current.filter((MotorVehicle1) => MotorVehicle1 !== e))
  }
  let personalAssetsVehicle2updateHandler = (e) => {
    setMotorVehicle2Edit(true);

    setTimeout(() => {
      handleShow2();
    }, 500)
  }
  let personalAssetsVehicle2deleteHandler = (e) => {
    let data = e;
    setMotorVehicle2((current) =>
      current.filter((MotorVehicle2) => MotorVehicle2 !== data))
  }
  let personalAssetsBoatupdateHandler = (e) => {
    setBoatEdit(true);

    setTimeout(() => {
      handleShow2();
    }, 500)
  }
  let personalAssetsBoatdeleteHandler = (e) => {
    let data = e;
    setBoat((current) =>
      current.filter((Boat) => Boat !== data))
  }

  let personalAssetsCaravanupdateHandler = (e) => {
    setCaravanEdit(true);

    setTimeout(() => {
      handleShow2();
    }, 500)
  }
  let personalAssetsCaravandeleteHandler = (e) => {
    let data = e;
    setCaravan((current) =>
      current.filter((Caravan) => Caravan !== data))
  }

  let personalAssetsPersonalOtherupdateHandler = (e) => {
    setPersonalOtherEdit(true)

    setTimeout(() => {
      handleShow2();
    }, 500)
  }
  let personalAssetsPersonalOtherdeleteHandler = (e) => {
    let data = e;
    setPersonalOther((current) =>
      current.filter((personalOther) => personalOther !== data))
  }

  // PERSONAL LOANS OR CREDIT CARD
  let personalLoansCreditCard1UpdateHandler = (e) => {

    setCreditCardList1Edit(true);

    setTimeout(() => {
      handleShow3();
    }, 500)
  }
  let personalLoansCreditCard1DeleteHandler = (e) => {

    let data = e;
    data.CreditCard1_CurrentBalance = "";
    data.CreditCard1_RepaymentAmount = "";
    data.CreditCard1_Frequency = "";
    data.CreditCard1_InterestRate = "";
    data.CreditCard1_LoanTerm = "";
    data.CreditCard1_LoanType = 'Select';
    data.CreditCard1_YearRemaining = "";

    data.CreditCard1_AnnualRepayment = "";

    setCreditCardList1([data])
  }
  let personalLoansCreditCard2UpdateHandler = (e) => {

    setCreditCardList2Edit(true);

    setTimeout(() => {
      handleShow3();
    }, 500)
  }
  let personalLoansCreditCard2DeleteHandler = (e) => {

    let userData = e;
    userData.CreditCard2_CurrentBalance = "";
    userData.CreditCard2_RepaymentAmount = "";
    userData.CreditCard2_Frequency = "";
    userData.debtAnnualRepayment2 = "";
    userData.CreditCard2_InterestRate = "";
    userData.CreditCard2_LoanTerm = "";
    userData.CreditCard2_LoanType = "Select";
    userData.CreditCard2_YearRemaining = "";

    setCreditCardList2([userData])
  }
  let personalLoans1UpdateHandler = (e) => {
    setPersonalLoanList1Edit(true)

    setTimeout(() => {
      handleShow3();
    }, 500)
  }

  let personalLoans1DeleteHandler = (e) => {

    let userData = e;
    userData.PersonalLoan1_CurrentBalance = "";
    userData.PersonalLoan1_RepaymentAmount = "";
    userData.PersonalLoan1_Frequency = "";
    userData.PersonalLoan1_AnnualRepayment = "";
    userData.PersonalLoan1_InterestRate = "";
    userData.PersonalLoan1_LoanTerm = "";
    userData.PersonalLoan1_LoanType = "Select";
    userData.PersonalLoan1_YearRemaining = ""

    setPersonalLoanList1([userData]);
  }
  let personalLoans2UpdateHandler = (e) => {
    setPersonalLoanList1Edit(true)

    setTimeout(() => {
      handleShow3();
    }, 500)
  }
  let personalLoans2DeleteHandler = (e) => {

    let userData = e;
    userData.PersonalLoan2_CurrentBalance = "";
    userData.PersonalLoan2_RepaymentAmount = "";
    userData.PersonalLoan2_Frequency = "";
    userData.PersonalLoan2_AnnualRepayment = "";
    userData.PersonalLoan2_InterestRate = "";
    userData.PersonalLoan2_LoanTerm = "";
    userData.PersonalLoan2_LoanType = "Select";
    userData.PersonalLoan2_YearRemaining = "";

    setPersonalLoanList2([userData]);
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
                  {({ values, handleChange }) =>
                    <Form>


                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Do you own a Family Home?
                            </label>
                            {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="ownFamilyradio"
                                  id="ownFamilyopt1" value="Yes"
                                  onClick={() => ownFamilyHandler("Yes")}
                                  onChange={handleChange}
                                  checked={values.ownFamilyradio === "Yes"}
                                />
                                <label htmlFor="ownFamilyopt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="ownFamilyradio"
                                  id="ownFamilyopt2" value="No"
                                  onClick={() => ownFamilyHandler("No")}
                                  onChange={handleChange}
                                  checked={values.ownFamilyradio === "No"}
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
                            <label className="form-label">
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
                          initialValues={ownFamilyEdit ? ownFamilyList[0] : own_initialValues}
                          validationSchema={own_validationSchema}
                          onSubmit={own_onSubmit}
                          enableReinitialize
                        >
                          {({ values, handleChange, setFieldValue, formik }) =>
                            <Form>
                              <Modal.Body>
                                {/* Family Assets Details*/}

                                <div className=''>

                                  {/* Row 1*/}
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label htmlFor="home" className="form-label">Home</label>
                                        <Field type="number" className="form-control shadow inputDesign"
                                          id="home" name='home' placeholder="Home" readOnly />
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='home' />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label htmlFor="CurrentValue" className="form-label">Current Value</   label>
                                        <Field type="number" className="form-control shadow inputDesign"
                                          id="CurrentValue" name='CurrentValue' placeholder="Current Value" />
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='CurrentValue' />
                                      </div>
                                    </div>
                                  </div>
                                  {/* Row 1*/}

                                  {/* Row 2*/}
                                  <div className="row">

                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label htmlFor="ClientOwnership" className="form-label">Client % of Ownership</   label>
                                        <Field type="number" className="form-control shadow inputDesign"
                                          id="ClientOwnership" name='ClientOwnership' />
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='ClientOwnership' />
                                      </div>
                                    </div>

                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label htmlFor="PartnerOwnership" className="form-label">Partner % of Ownership</   label>
                                        <Field type="number" className="form-control shadow inputDesign"
                                          id="PartnerOwnership" name='PartnerOwnership' />
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='PartnerOwnership' />
                                      </div>
                                    </div>

                                  </div>
                                  {/* Row 2*/}

                                  {/* Row 3*/}
                                  <div className="row">

                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label htmlFor="CostBase" className="form-label">Cost base /(Purchase Price)</   label>
                                        <Field type="number" className="form-control shadow inputDesign"
                                          id="CostBase" name='CostBase' placeholder="Cost base /(Purchase Price)" />
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='CostBase' />
                                      </div>
                                    </div>

                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label htmlFor="Address" className="form-label">Address</   label>
                                        <Field type="text" className="form-control shadow inputDesign"
                                          id="Address" name='Address' placeholder="Address" />
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='Address' />
                                      </div>
                                    </div>

                                  </div>
                                  {/* Row 3*/}

                                  {/* Row 4*/}
                                  <div className="row">

                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label htmlFor="Postcode" className="form-label">Postcode/Suburb</   label>
                                        <Field type="number" className="form-control shadow inputDesign"
                                          id="Postcode" name='Postcode' placeholder="Postcode/Suburb" />
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='Postcode' />
                                      </div>
                                    </div>

                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label htmlFor="AmountAssessed" className="form-label">Amount Assessed For Centrelink Assets Test</   label>
                                        <Field type="number" className="form-control shadow inputDesign"
                                          id="AmountAssessed" name='AmountAssessed' placeholder="Amount Assessed" />
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='AmountAssessed' />
                                      </div>
                                    </div>

                                  </div>
                                  {/* Row 4*/}


                                  {/* radio button*/}
                                  <div className="row">

                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label className="form-label">
                                          Does this property have a loan attached to it?
                                        </label>
                                        {/* switch button style */}
                                        <div className="form-check form-switch m-0 p-0 ">
                                          <div className="radiobutton">
                                            <input type="radio" name="propertyLoanradio"
                                              id="propertyLoanopt1" value="Yes"
                                              onClick={() => propertyLoanradioHandler("Yes")}
                                              onChange={handleChange}
                                              checked={values.propertyLoanradio === "Yes"}
                                            />
                                            <label htmlFor="propertyLoanopt1" className="label1">
                                              <span>YES</span>
                                            </label>
                                            <input type="radio" name="propertyLoanradio"
                                              id="propertyLoanopt2" value="No"
                                              onClick={() => propertyLoanradioHandler("No")}
                                              onChange={handleChange}
                                              checked={values.propertyLoanradio === "No"}
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
                                  {propertyLoanState && <div>
                                    {/* Row 1*/}
                                    <div className="row">
                                      <div className="col-md-6">
                                        <div className="mb-3">
                                          <label htmlFor="ClientBorrowingPercentage" className="form-label">Client % of Borrowing</label>
                                          <Field type="number" className="form-control shadow inputDesign"
                                            id="ClientBorrowingPercentage" name='ClientBorrowingPercentage' />
                                          <ErrorMessage component='div' className='text-danger fw-bold' name='ClientBorrowingPercentage' />
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="mb-3">
                                          <label htmlFor="PartnerBorrowingPercentage" className="form-label">Partner % of Borrowing</   label>
                                          <Field type="number" className="form-control shadow inputDesign"
                                            id="PartnerBorrowingPercentage" name='PartnerBorrowingPercentage' />
                                          <ErrorMessage component='div' className='text-danger fw-bold' name='PartnerBorrowingPercentage' />
                                        </div>
                                      </div>
                                    </div>
                                    {/* Row 1*/}

                                    {/* Row 2*/}
                                    <div className="row">

                                      <div className="col-md-6">
                                        <div className="mb-3">
                                          <label htmlFor="CurrentBalance" className="form-label">Current Balance</   label>
                                          <Field type="number" className="form-control shadow inputDesign"
                                            id="CurrentBalance" name='CurrentBalance' placeholder="Current Balance" />
                                          <ErrorMessage component='div' className='text-danger fw-bold' name='CurrentBalance' />
                                        </div>
                                      </div>

                                      <div className="col-md-6">
                                        <div className="mb-3">
                                          <label htmlFor="RepaymentAmounts" className="form-label">Repayments Amount</   label>
                                          <Field type="number" className="form-control shadow inputDesign"
                                            id="RepaymentAmounts" name='RepaymentAmounts' placeholder="Repayments Amount" />
                                          <ErrorMessage component='div' className='text-danger fw-bold' name='RepaymentAmounts' />
                                        </div>
                                      </div>

                                    </div>
                                    {/* Row 2*/}

                                    {/* Row 3*/}
                                    <div className="row">
                                      <div className="col-md-6">
                                        <div className="mb-3">
                                          <label htmlFor="Frequency" className="form-label">
                                            Frequency
                                          </label>
                                          <Field
                                            as='select'
                                            id="Frequency"
                                            name="Frequency"
                                            className="form-select shadow  inputDesign"
                                            onChange={(e) => setFieldValue("Frequency", e.target.value)}
                                            value={values.Frequency}
                                          >
                                            <option value="">Select</option>
                                            <option value="Weekly">Weekly</option>
                                            <option value="Fortnightly">Fortnightly</option>
                                            <option value="Monthly">Monthly</option>
                                            <option value="Annually">Annually</option>
                                          </Field>
                                          <ErrorMessage component='div' className="text-danger fw-bold" name="Frequency" />

                                        </div>
                                      </div>

                                      <div className="col-md-6">
                                        <div className="mb-3">
                                          <label htmlFor="annualRepayments" className="form-label">Annual Repayments</   label>
                                          <Field readOnly={true} type="number" className="form-control shadow inputDesign"
                                            id="annualRepayments" name='annualRepayments' placeholder="Annual Repayments" />
                                          <ErrorMessage component='div' className='text-danger fw-bold' name='annualRepayments' />
                                        </div>
                                      </div>
                                    </div>
                                    {/* Row 3*/}

                                    {/* Row 4*/}
                                    <div className="row">

                                      <div className="col-md-6">
                                        <div className="mb-3">
                                          <label htmlFor="InterestRate" className="form-label">Interest Rate (p.a)</   label>
                                          <Field type="number" className="form-control shadow inputDesign"
                                            id="InterestRate" name='InterestRate' placeholder="Interest Rate (p.a)" />
                                          <ErrorMessage component='div' className='text-danger fw-bold' name='InterestRate' />
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="mb-3">
                                          <label htmlFor="LoanTerm" className="form-label">
                                            Loan Term (1 - 30 Years)
                                          </label>
                                          <Field
                                            as='select'
                                            id="LoanTerm"
                                            name="LoanTerm"
                                            className="form-select shadow  inputDesign"
                                            onChange={(e) => setFieldValue("LoanTerm", e.target.value)}
                                            value={values.LoanTerm}
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
                                          <ErrorMessage component='div' className="text-danger fw-bold" name="LoanTerm" />

                                        </div>
                                      </div>
                                    </div>
                                    {/* Row 4*/}

                                    {/* Row 5*/}
                                    <div className="row">

                                      <div className="col-md-6">
                                        <div className="mb-3">
                                          <label htmlFor="LoanType" className="form-label">
                                            Loan Type
                                          </label>
                                          <Field
                                            as='select'
                                            id="LoanType"
                                            name='LoanType'
                                            className="form-select shadow  inputDesign"
                                            onChange={(e) => setFieldValue("LoanType", e.target.value)}
                                            value={values.LoanType}
                                          >
                                            <option value="">Select</option>
                                            <option value="I/Only">I/Only</option>
                                            <option value="P&I">P & I</option>
                                          </Field>
                                          <ErrorMessage component='div' className="text-danger fw-bold" name="LoanType" />

                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="mb-3">
                                          <label htmlFor="YearsRemaining" className="form-label">
                                            Years Remaining (1 - 30 Years)
                                          </label>

                                          <Field
                                            as='select'
                                            id="YearsRemaining"
                                            name='YearsRemaining'
                                            className="form-select shadow  inputDesign myselect"
                                            onChange={(e) => setFieldValue("YearsRemaining", e.target.value)}
                                            value={values.YearsRemaining}
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
                                          <ErrorMessage component='div' className="text-danger fw-bold" name="YearsRemaining" />

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
                        <div className='table-responsive my-3' id="childTable">
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
                              {ownFamilyList.map((elem, index) => {
                                let { Address, CurrentValue, ClientOwnership, PartnerOwnership, CurrentBalance, AnnualRepayments } = elem;

                                return (

                                  <tr key={index}>
                                    <td>{Address}</td>
                                    <td>{CurrentValue}</td>
                                    <td>Client {ClientOwnership} Partner{PartnerOwnership}</td>
                                    <td>{CurrentBalance}</td>
                                    <td>{AnnualRepayments}</td>
                                    <td >
                                      <button type='button' onClick={() => FamilyHomedeleteHandler(elem)} className='btn btn-danger btn-sm'>delete</button>
                                      <button type='button' onClick={() => FamilyHomeupdateHandler()} className='btn btn-warning btn-sm mx-2'>update</button>

                                    </td>

                                  </tr>
                                );

                              })}
                            </tbody>
                          </table>
                        </div>
                      }

                      {/* Table1  Family Home Details*/}




                      {/*main second row */}
                      <div className="row my-3">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Do you have any personal assets?
                            </label>
                            {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="personalAssetsradio"
                                  id="personalAssetsopt1" value="Yes"
                                  onClick={() => personalAssetsHandler("Yes")}
                                  onChange={handleChange}
                                  checked={values.personalAssetsradio === "Yes"}
                                />
                                <label htmlFor="personalAssetsopt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="personalAssetsradio"
                                  id="personalAssetsopt2" value="No"
                                  onClick={() => personalAssetsHandler("No")}
                                  onChange={handleChange}
                                  checked={values.personalAssetsradio === "No"}
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
                            <label className="form-label">
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
                          initialValues={contentEdit || MotorVehicle1Edit || MotorVehicle2Edit || BoatEdit || CaravanEdit || personalOtherEdit ? contentList[0] || MotorVehicle1[0] || MotorVehicle2[0] || Boat[0] || Caravan[0] || personalOtherEdit[0] : personalAssetsInitialValues}
                          validationSchema={personalAssetsValidationSchema}
                          onSubmit={personalAssetsOnSubmit}
                          enableReinitialize
                        >
                          {({ values, setFieldValue, setValues, handleChange, formik }) =>
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
                                        <label htmlFor="Contents_CurrentValue" className="form-label">Current Value</   label>
                                        <Field type="number" className="form-control shadow inputDesign"
                                          id="Contents_CurrentValue" name='Contents_CurrentValue' placeholder="Current Value" />
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='Contents_CurrentValue' />
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div className="mb-3">
                                        <label htmlFor="Contents_CentreLinkValue" className="form-label">Centrelink Value</   label>
                                        <Field type="number" className="form-control shadow inputDesign"
                                          id="Contents_CentreLinkValue" name='Contents_CentreLinkValue' placeholder="Centrelink Value" />
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='Contents_CentreLinkValue' />
                                      </div>
                                    </div>

                                    <div className="col-md-3">
                                      <div className="mb-3">
                                        <label className="form-label">
                                          Security For Loan
                                        </label>
                                        {/* switch button style */}
                                        <div className="form-check form-switch m-0 p-0 ">
                                          <div className="radiobutton">
                                            <input type="radio" name="Contents_Security"
                                              id="contentopt1" value="Yes"
                                              onClick={() => ownFamilyHandler("Yes")}
                                              onChange={handleChange}
                                              checked={values.Contents_Security === "Yes"}
                                            />
                                            <label htmlFor="contentopt1" className="label1">
                                              <span>YES</span>
                                            </label>
                                            <input type="radio" name="Contents_Security"
                                              id="contentopt2" value="No"
                                              onClick={() => ownFamilyHandler("No")}
                                              onChange={handleChange}
                                              checked={values.Contents_Security === "No"}
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
                                        <label htmlFor="MotorVehicle1_CurrentValue" className="form-label">Current Value</   label>
                                        <Field type="number" className="form-control shadow inputDesign"
                                          id="MotorVehicle1_CurrentValue" name='MotorVehicle1_CurrentValue' placeholder="Current Value" />
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='MotorVehicle1_CurrentValue' />
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div className="mb-3">
                                        <label htmlFor="MotorVehicle1_CentreLinkValue" className="form-label">Centrelink Value</   label>
                                        <Field type="number" className="form-control shadow inputDesign"
                                          id="MotorVehicle1_CentreLinkValue" name='MotorVehicle1_CentreLinkValue' placeholder="Centrelink Value" />
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='MotorVehicle1_CentreLinkValue' />
                                      </div>
                                    </div>

                                    <div className="col-md-3">
                                      <div className="mb-3">
                                        <label className="form-label">
                                          Security For Loan
                                        </label>
                                        {/* switch button style */}
                                        <div className="form-check form-switch m-0 p-0 ">
                                          <div className="radiobutton">
                                            <input type="radio" name="MotorVehicle1_Security"
                                              id="motor1opt1" value="Yes"
                                              onChange={handleChange}
                                              checked={values.MotorVehicle1_Security === "Yes"}
                                            />
                                            <label htmlFor="motor1opt1" className="label1">
                                              <span>YES</span>
                                            </label>
                                            <input type="radio" name="MotorVehicle1_Security"
                                              id="motor1opt2" value="No"
                                              onChange={handleChange}
                                              checked={values.MotorVehicle1_Security === "No"}
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
                                        <label htmlFor="MotorVehicle2_CurrentValue" className="form-label">Current Value</   label>
                                        <Field type="number" className="form-control shadow inputDesign"
                                          id="MotorVehicle2_CurrentValue" name='MotorVehicle2_CurrentValue' placeholder="Current Value" />
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='MotorVehicle2_CurrentValue' />
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div className="mb-3">
                                        <label htmlFor="MotorVehicle2_CentreLinkValue" className="form-label">Centrelink Value</   label>
                                        <Field type="number" className="form-control shadow inputDesign"
                                          id="MotorVehicle2_CentreLinkValue" name='MotorVehicle2_CentreLinkValue' placeholder="Centrelink Value" />
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='MotorVehicle2_CentreLinkValue' />
                                      </div>
                                    </div>

                                    <div className="col-md-3">
                                      <div className="mb-3">
                                        <label className="form-label">
                                          Security For Loan
                                        </label>
                                        {/* switch button style */}
                                        <div className="form-check form-switch m-0 p-0 ">
                                          <div className="radiobutton">
                                            <input type="radio" name="MotorVehicle2_Security"
                                              id="motor2opt1" value="Yes"
                                              onChange={handleChange}
                                              checked={values.MotorVehicle2_Security === "Yes"}
                                            />
                                            <label htmlFor="motor2opt1" className="label1">
                                              <span>YES</span>
                                            </label>
                                            <input type="radio" name="MotorVehicle2_Security"
                                              id="motor2opt2" value="No"
                                              onChange={handleChange}
                                              checked={values.MotorVehicle2_Security === "No"}
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
                                        <label htmlFor="Boat_CurrentValue" className="form-label">Current Value</   label>
                                        <Field type="number" className="form-control shadow inputDesign"
                                          id="Boat_CurrentValue" name='Boat_CurrentValue' placeholder="Current Value" />
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='Boat_CurrentValue' />
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div className="mb-3">
                                        <label htmlFor="Boat_CentreLinkValue" className="form-label">Centrelink Value</   label>
                                        <Field type="number" className="form-control shadow inputDesign"
                                          id="Boat_CentreLinkValue" name='Boat_CentreLinkValue' placeholder="Centrelink Value" />
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='Boat_CentreLinkValue' />
                                      </div>
                                    </div>

                                    <div className="col-md-3">
                                      <div className="mb-3">
                                        <label className="form-label">
                                          Security For Loan
                                        </label>
                                        {/* switch button style */}
                                        <div className="form-check form-switch m-0 p-0 ">
                                          <div className="radiobutton">
                                            <input type="radio" name="Boat_Security"
                                              id="boatopt1" value="Yes"

                                              onChange={handleChange}
                                              checked={values.Boat_Security === "Yes"}
                                            />
                                            <label htmlFor="boatopt1" className="label1">
                                              <span>YES</span>
                                            </label>
                                            <input type="radio" name="Boat_Security"
                                              id="boatopt2" value="No"
                                              onChange={handleChange}
                                              checked={values.Boat_Security === "No"}
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
                                        <label htmlFor="Caravan_CurrentValue" className="form-label">Current Value</   label>
                                        <Field type="number" className="form-control shadow inputDesign"
                                          id="Caravan_CurrentValue" name='Caravan_CurrentValue' placeholder="Current Value" />
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='Caravan_CurrentValue' />
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div className="mb-3">
                                        <label htmlFor="Caravan_CentreLinkValue" className="form-label">Centrelink Value</   label>
                                        <Field type="number" className="form-control shadow inputDesign"
                                          id="Caravan_CentreLinkValue" name='Caravan_CentreLinkValue' placeholder="Centrelink Value" />
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='Caravan_CentreLinkValue' />
                                      </div>
                                    </div>

                                    <div className="col-md-3">
                                      <div className="mb-3">
                                        <label className="form-label">
                                          Security For Loan
                                        </label>
                                        {/* switch button style */}
                                        <div className="form-check form-switch m-0 p-0 ">
                                          <div className="radiobutton">
                                            <input type="radio" name="Caravan_Security"
                                              id="carvanopt1" value="Yes"

                                              onChange={handleChange}
                                              checked={values.Caravan_Security === "Yes"}
                                            />
                                            <label htmlFor="carvanopt1" className="label1">
                                              <span>YES</span>
                                            </label>
                                            <input type="radio" name="Caravan_Security"
                                              id="carvanopt2" value="No"
                                              onChange={handleChange}
                                              checked={values.Caravan_Security === "No"}
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
                                        <label htmlFor="Other_CurrentValue" className="form-label">Current Value</   label>
                                        <Field type="number" className="form-control shadow inputDesign"
                                          id="Other_CurrentValue" name='Other_CurrentValue' placeholder="Current Value" />
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='Other_CurrentValue' />
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div className="mb-3">
                                        <label htmlFor="Other_CentreLinkValue" className="form-label">Centrelink Value</   label>
                                        <Field type="number" className="form-control shadow inputDesign"
                                          id="Other_CentreLinkValue" name='Other_CentreLinkValue' placeholder="Centrelink Value" />
                                        <ErrorMessage component='div' className='text-danger fw-bold' name='Other_CentreLinkValue' />
                                      </div>
                                    </div>

                                    <div className="col-md-3">
                                      <div className="mb-3">
                                        <label className="form-label">
                                          Security For Loan
                                        </label>
                                        {/* switch button style */}
                                        <div className="form-check form-switch m-0 p-0 ">
                                          <div className="radiobutton">
                                            <input type="radio" name="Other_Security"
                                              id="otheropt1" value="Yes"

                                              onChange={handleChange}
                                              checked={values.Other_Security === "Yes"}
                                            />
                                            <label htmlFor="otheropt1" className="label1">
                                              <span>YES</span>
                                            </label>
                                            <input type="radio" name="Other_Security"
                                              id="otheropt2" value="No"
                                              onChange={handleChange}
                                              checked={values.Other_Security === "No"}
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

                      <div className='table-responsive my-3'>
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
                            {contentList.map((elem, index) => {
                              let { Contents_CurrentValue, Contents_CentreLinkValue, Contents_Security } = elem;
                              if (contentList[0].Contents_CurrentValue == '' ||
                                contentList[0].Contents_CentreLinkValue == '') {

                              }

                              else {
                                return (

                                  <tr key={index}>
                                    <td className='fw-bold'>Contents</td>
                                    <td>{Contents_CurrentValue}</td>
                                    <td>{Contents_CentreLinkValue}</td>
                                    <td>{Contents_Security}</td>

                                    <td >
                                      <button type='button' onClick={() => personalAssetsContentdeleteHandler(elem)} className='btn btn-danger btn-sm'>delete</button>
                                      <button type='button' onClick={personalAssetsContentupdateHandler} className='btn btn-warning btn-sm mx-2'>update</button>

                                    </td>

                                  </tr>
                                );
                              }

                            })}
                            {/* content  */}

                            {/* motor 1  */}
                            {MotorVehicle1.map((elem, index) => {
                              let { MotorVehicle1_CurrentValue, MotorVehicle1_CentreLinkValue, MotorVehicle1_Security } = elem;
                              if (MotorVehicle1[0].MotorVehicle1_CurrentValue == '' ||
                                MotorVehicle1[0].MotorVehicle1_CentreLinkValue == '') {

                              }

                              else {
                                return (

                                  <tr key={index}>
                                    <td className='fw-bold'>Motor Vehicle 1</td>
                                    <td>{MotorVehicle1_CurrentValue}</td>
                                    <td>{MotorVehicle1_CentreLinkValue}</td>
                                    <td>{MotorVehicle1_Security}</td>
                                    <td >
                                      <button type='button' onClick={() => personalAssetsVehicle1deleteHandler(elem)} className='btn btn-danger btn-sm'>delete</button>
                                      <button type='button' onClick={() => personalAssetsVehicle1updateHandler()} className='btn btn-warning btn-sm mx-2'>update</button>

                                    </td>

                                  </tr>
                                );
                              }

                            })}
                            {/* motor 1  */}

                            {/* motor 2  */}
                            {MotorVehicle2.map((elem, index) => {
                              let { MotorVehicle2_CurrentValue, MotorVehicle2_CentreLinkValue, MotorVehicle2_Security } = elem;
                              if (MotorVehicle2[0].MotorVehicle2_CurrentValue == '' ||
                                MotorVehicle2[0].MotorVehicle2_CentreLinkValue == '') {

                              }

                              else {
                                return (

                                  <tr key={index}>
                                    <td className='fw-bold'>Motor Vehicle 2</td>
                                    <td>{MotorVehicle2_CurrentValue}</td>
                                    <td>{MotorVehicle2_CentreLinkValue}</td>
                                    <td>{MotorVehicle2_Security}</td>

                                    <td >
                                      <button type='button' onClick={(e) => personalAssetsVehicle2deleteHandler(elem)} className='btn btn-danger btn-sm'>delete</button>
                                      <button type='button' onClick={personalAssetsVehicle2updateHandler} className='btn btn-warning btn-sm mx-2'>update</button>

                                    </td>

                                  </tr>
                                );
                              }

                            })}
                            {/* motor 2  */}


                            {/* Boat */}
                            {Boat.map((elem, index) => {
                              let { Boat_CurrentValue, Boat_CentreLinkValue, Boat_Security } = elem;
                              if (Boat[0].Boat_CurrentValue == '' ||
                                Boat[0].Boat_CentreLinkValue == '') {

                              }

                              else {
                                return (

                                  <tr key={index}>
                                    <td className='fw-bold'>Boat</td>
                                    <td>{Boat_CurrentValue}</td>
                                    <td>{Boat_CentreLinkValue}</td>
                                    <td>{Boat_Security}</td>

                                    <td >
                                      <button type='button' onClick={(e) => personalAssetsBoatdeleteHandler(elem)} className='btn btn-danger btn-sm'>delete</button>
                                      <button type='button' onClick={personalAssetsBoatupdateHandler} className='btn btn-warning btn-sm mx-2'>update</button>

                                    </td>

                                  </tr>
                                );
                              }

                            })}
                            {/* Boat  */}

                            {/* Carvan */}
                            {Caravan.map((elem, index) => {
                              let { Caravan_CurrentValue, Caravan_CentreLinkValue, Caravan_Security } = elem;
                              if (Caravan[0].Caravan_CurrentValue == '' ||
                                Caravan[0].Caravan_CentreLinkValue == '') {

                              }

                              else {
                                return (

                                  <tr key={index}>
                                    <td className='fw-bold'>Caravan</td>
                                    <td>{Caravan_CurrentValue}</td>
                                    <td>{Caravan_CentreLinkValue}</td>
                                    <td>{Caravan_Security}</td>

                                    <td >
                                      <button type='button' onClick={() => personalAssetsCaravandeleteHandler(elem)} className='btn btn-danger btn-sm'>delete</button>
                                      <button type='button' onClick={personalAssetsCaravanupdateHandler} className='btn btn-warning btn-sm mx-2'>update</button>

                                    </td>

                                  </tr>
                                );
                              }

                            })}
                            {/* Carvan */}

                            {/* Other */}
                            {personalOther.map((elem, index) => {
                              let { Other_CurrentValue, Other_CentreLinkValue, Other_Security } = elem;
                              if (personalOther[0].Other_CurrentValue == '' ||
                                personalOther[0].Other_CentreLinkValue == '') {

                              }

                              else {
                                return (

                                  <tr key={index}>
                                    <td className='fw-bold'>Other</td>
                                    <td>{Other_CurrentValue}</td>
                                    <td>{Other_CentreLinkValue}</td>
                                    <td>{Other_Security}</td>

                                    <td >
                                      <button type='button' onClick={(e) => personalAssetsPersonalOtherdeleteHandler(elem)} className='btn btn-danger btn-sm'>delete</button>
                                      <button type='button' onClick={personalAssetsPersonalOtherupdateHandler} className='btn btn-warning btn-sm mx-2'>update</button>

                                    </td>

                                  </tr>
                                );
                              }

                            })}
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
                            <label className="form-label">
                              Do you have Personal Loans or Credit cards?
                            </label>
                            {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="personalLoansradio"
                                  id="personalLoansopt1" value="Yes"
                                  onClick={() => personalLoansHandler("Yes")}
                                  onChange={handleChange}
                                  checked={values.personalLoansradio === "Yes"}
                                />
                                <label htmlFor="personalLoansopt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="personalLoansradio"
                                  id="personalLoansopt2" value="No"
                                  onClick={() => personalLoansHandler("No")}
                                  onChange={handleChange}
                                  checked={values.personalLoansradio === "No"}
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
                            <label className="form-label">
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
                          initialValues={CreditCardList1Edit || CreditCardList2Edit || PersonalLoanList1Edit || PersonalLoanList2Edit ? CreditCardList1[0] || CreditCardList2[0] || PersonalLoanList1[0] || PersonalLoanList2[0] : personalLoansInitialValues}
                          //validationSchema={personalLoansvalidationSchema}
                          onSubmit={personalLoansonSubmit}
                          enableReinitialize
                        >
                          {({ values, setFieldValue, setValues, handleChange, formik }) =>
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
                                          <label htmlFor="CreditCard1_CurrentBalance" className="form-label">Current Balance</   label>
                                          <Field type="number" className="form-control shadow inputDesign"
                                            id="CreditCard1_CurrentBalance" name='CreditCard1_CurrentBalance' placeholder="Current Balance" />
                                          <ErrorMessage component='div' className='text-danger fw-bold' name='CreditCard1_CurrentBalance' />
                                        </div>
                                      </div>
                                      <div className="col-md-3">
                                        <div className="mb-3">
                                          <label htmlFor="CreditCard1_RepaymentAmount" className="form-label">Repayment Amount</   label>
                                          <Field type="number" className="form-control shadow inputDesign"
                                            id="CreditCard1_RepaymentAmount" name='CreditCard1_RepaymentAmount' placeholder="Repayment Amount" />
                                          <ErrorMessage component='div' className='text-danger fw-bold' name='CreditCard1_RepaymentAmount' />
                                        </div>
                                      </div>

                                      <div className="col-md-3">
                                        <div className="mb-3">
                                          <label htmlFor="CreditCard1_Frequency" className="form-label">
                                            Frequency
                                          </label>
                                          <Field
                                            as='select'
                                            id="CreditCard1_Frequency"
                                            name="CreditCard1_Frequency"
                                            className="form-select shadow  inputDesign"
                                            onChange={(e) => setFieldValue("CreditCard1_Frequency", e.target.value)}
                                            value={values.CreditCard1_Frequency}
                                          >
                                            <option value="">Select</option>
                                            <option value="Weekly">Weekly</option>
                                            <option value="Fortnightly">Fortnightly</option>
                                            <option value="Monthly">Monthly</option>
                                            <option value="Annually">Annually</option>
                                          </Field>
                                          <ErrorMessage component='div' className="text-danger fw-bold" name="CreditCard1_Frequency" />

                                        </div>
                                      </div>

                                      <div className="col-md-3">
                                        <div className="mb-3">
                                          <label htmlFor="CreditCard1_AnnualRepayment" className="form-label">Annual Repayment</   label>
                                          <Field type="number" className="form-control shadow inputDesign"
                                            id="CreditCard1_AnnualRepayment" name='CreditCard1_AnnualRepayment' readOnly={true} />
                                          {/* <ErrorMessage component='div' className='text-danger fw-bold' name='CreditCard1_AnnualRepayment' /> */}
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-3">
                                        <div className="mb-3">
                                          <label htmlFor="CreditCard1_InterestRate" className="form-label">Interest Rate</   label>
                                          <Field type="number" className="form-control shadow inputDesign"
                                            id="CreditCard1_InterestRate" name='CreditCard1_InterestRate' placeholder="Interest Rate" />
                                          <ErrorMessage component='div' className='text-danger fw-bold' name='CreditCard1_InterestRate' />
                                        </div>
                                      </div>


                                      <div className="col-md-3">
                                        <div className="mb-3">
                                          <label htmlFor="CreditCard1_LoanTerm" className="form-label">
                                            Loan Terms (1 - 30 Years)
                                          </label>

                                          <Field
                                            as='select'
                                            id="CreditCard1_LoanTerm"
                                            name='CreditCard1_LoanTerm'
                                            className="form-select shadow  inputDesign myselect"
                                            onChange={(e) => setFieldValue("CreditCard1_LoanTerm", e.target.value)}
                                            value={values.CreditCard1_LoanTerm}
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
                                          <ErrorMessage component='div' className="text-danger fw-bold" name="CreditCard1_LoanTerm" />

                                        </div>
                                      </div>

                                      <div className="col-md-3">
                                        <div className="mb-3">
                                          <label htmlFor="CreditCard1_LoanType" className="form-label">
                                            Loan Type
                                          </label>
                                          <Field
                                            as='select'
                                            id="CreditCard1_LoanType"
                                            name='CreditCard1_LoanType'
                                            className="form-select shadow  inputDesign"
                                            onChange={(e) => setFieldValue("CreditCard1_LoanType", e.target.value)}
                                            value={values.CreditCard1_LoanType}
                                          >
                                            <option value="">Select</option>
                                            <option value="I/Only">I/Only</option>
                                            <option value="P&I">P & I</option>
                                          </Field>
                                          <ErrorMessage component='div' className="text-danger fw-bold" name="CreditCard1_LoanType" />

                                        </div>
                                      </div>

                                      <div className="col-md-3">
                                        <div className="mb-3">
                                          <label htmlFor="CreditCard1_YearRemaining" className="form-label">
                                            Year Remaining (1 - 30 Years)
                                          </label>

                                          <Field
                                            as='select'
                                            id="CreditCard1_YearRemaining"
                                            name='CreditCard1_YearRemaining'
                                            className="form-select shadow  inputDesign myselect"
                                            onChange={(e) => setFieldValue("CreditCard1_YearRemaining", e.target.value)}
                                            value={values.CreditCard1_YearRemaining}
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
                                          <ErrorMessage component='div' className="text-danger fw-bold" name="CreditCard1_YearRemaining" />

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
                                          <label htmlFor="CreditCard2_CurrentBalance" className="form-label">Current Balance</   label>
                                          <Field type="number" className="form-control shadow inputDesign"
                                            id="CreditCard2_CurrentBalance" name='CreditCard2_CurrentBalance' placeholder="Current Balance" />
                                          <ErrorMessage component='div' className='text-danger fw-bold' name='CreditCard2_CurrentBalance' />
                                        </div>
                                      </div>
                                      <div className="col-md-3">
                                        <div className="mb-3">
                                          <label htmlFor="CreditCard2_RepaymentAmount" className="form-label">Repayment Amount</   label>
                                          <Field type="number" className="form-control shadow inputDesign"
                                            id="CreditCard2_RepaymentAmount" name='CreditCard2_RepaymentAmount' placeholder="Repayment Amount" />
                                          <ErrorMessage component='div' className='text-danger fw-bold' name='CreditCard2_RepaymentAmount' />
                                        </div>
                                      </div>

                                      <div className="col-md-3">
                                        <div className="mb-3">
                                          <label htmlFor="CreditCard2_Frequency" className="form-label">
                                            Frequency
                                          </label>
                                          <Field
                                            as='select'
                                            id="CreditCard2_Frequency"
                                            name="CreditCard2_Frequency"
                                            className="form-select shadow  inputDesign"
                                            onChange={(e) => setFieldValue("CreditCard2_Frequency", e.target.value)}
                                            value={values.CreditCard2_Frequency}
                                          >
                                            <option value="">Select</option>
                                            <option value="Weekly">Weekly</option>
                                            <option value="Fortnightly">Fortnightly</option>
                                            <option value="Monthly">Monthly</option>
                                            <option value="Annually">Annually</option>
                                          </Field>
                                          <ErrorMessage component='div' className="text-danger fw-bold" name="CreditCard2_Frequency" />

                                        </div>
                                      </div>

                                      <div className="col-md-3">
                                        <div className="mb-3">
                                          <label htmlFor="debtAnnualRepayment2" className="form-label">Annual Repayment</   label>
                                          <Field type="number" className="form-control shadow inputDesign"
                                            id="debtAnnualRepayment2" name='debtAnnualRepayment2' readOnly={true} />
                                          {/* <ErrorMessage component='div' className='text-danger fw-bold' name='CreditCard1_AnnualRepayment' /> */}
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-3">
                                        <div className="mb-3">
                                          <label htmlFor="CreditCard2_InterestRate" className="form-label">Interest Rate</   label>
                                          <Field type="number" className="form-control shadow inputDesign"
                                            id="CreditCard2_InterestRate" name='CreditCard2_InterestRate' placeholder="Interest Rate" />
                                          <ErrorMessage component='div' className='text-danger fw-bold' name='CreditCard2_InterestRate' />
                                        </div>
                                      </div>


                                      <div className="col-md-3">
                                        <div className="mb-3">
                                          <label htmlFor="CreditCard2_LoanTerm" className="form-label">
                                            Loan Terms (1 - 30 Years)
                                          </label>

                                          <Field
                                            as='select'
                                            id="CreditCard2_LoanTerm"
                                            name='CreditCard2_LoanTerm'
                                            className="form-select shadow  inputDesign myselect"
                                            onChange={(e) => setFieldValue("CreditCard2_LoanTerm", e.target.value)}
                                            value={values.CreditCard2_LoanTerm}
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
                                          <ErrorMessage component='div' className="text-danger fw-bold" name="CreditCard2_LoanTerm" />

                                        </div>
                                      </div>

                                      <div className="col-md-3">
                                        <div className="mb-3">
                                          <label htmlFor="CreditCard2_LoanType" className="form-label">
                                            Loan Type
                                          </label>
                                          <Field
                                            as='select'
                                            id="CreditCard2_LoanType"
                                            name='CreditCard2_LoanType'
                                            className="form-select shadow  inputDesign"
                                            onChange={(e) => setFieldValue("CreditCard2_LoanType", e.target.value)}
                                            value={values.CreditCard2_LoanType}
                                          >
                                            <option value="">Select</option>
                                            <option value="I/Only">I/Only</option>
                                            <option value="P&I">P & I</option>
                                          </Field>
                                          <ErrorMessage component='div' className="text-danger fw-bold" name="CreditCard2_LoanType" />

                                        </div>
                                      </div>

                                      <div className="col-md-3">
                                        <div className="mb-3">
                                          <label htmlFor="CreditCard2_YearRemaining" className="form-label">
                                            Year Remaining (1 - 30 Years)
                                          </label>

                                          <Field
                                            as='select'
                                            id="CreditCard2_YearRemaining"
                                            name='CreditCard2_YearRemaining'
                                            className="form-select shadow  inputDesign myselect"
                                            onChange={(e) => setFieldValue("CreditCard2_YearRemaining", e.target.value)}
                                            value={values.CreditCard2_YearRemaining}
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
                                          <ErrorMessage component='div' className="text-danger fw-bold" name="CreditCard2_YearRemaining" />

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
                                          <label htmlFor="PersonalLoan1_CurrentBalance" className="form-label">Current Balance</   label>
                                          <Field type="number" className="form-control shadow inputDesign"
                                            id="PersonalLoan1_CurrentBalance" name='PersonalLoan1_CurrentBalance' placeholder="Current Balance" />
                                          <ErrorMessage component='div' className='text-danger fw-bold' name='PersonalLoan1_CurrentBalance' />
                                        </div>
                                      </div>
                                      <div className="col-md-3">
                                        <div className="mb-3">
                                          <label htmlFor="PersonalLoan1_RepaymentAmount" className="form-label">Repayment Amount</   label>
                                          <Field type="number" className="form-control shadow inputDesign"
                                            id="PersonalLoan1_RepaymentAmount" name='PersonalLoan1_RepaymentAmount' placeholder="Repayment Amount" />
                                          <ErrorMessage component='div' className='text-danger fw-bold' name='PersonalLoan1_RepaymentAmount' />
                                        </div>
                                      </div>

                                      <div className="col-md-3">
                                        <div className="mb-3">
                                          <label htmlFor="PersonalLoan1_Frequency" className="form-label">
                                            Frequency
                                          </label>
                                          <Field
                                            as='select'
                                            id="PersonalLoan1_Frequency"
                                            name="PersonalLoan1_Frequency"
                                            className="form-select shadow  inputDesign"
                                            onChange={(e) => setFieldValue("PersonalLoan1_Frequency", e.target.value)}
                                            value={values.PersonalLoan1_Frequency}
                                          >
                                            <option value="">Select</option>
                                            <option value="Weekly">Weekly</option>
                                            <option value="Fortnightly">Fortnightly</option>
                                            <option value="Monthly">Monthly</option>
                                            <option value="Annually">Annually</option>
                                          </Field>
                                          <ErrorMessage component='div' className="text-danger fw-bold" name="PersonalLoan1_Frequency" />

                                        </div>
                                      </div>

                                      <div className="col-md-3">
                                        <div className="mb-3">
                                          <label htmlFor="PersonalLoan1_AnnualRepayment" className="form-label">Annual Repayment</   label>
                                          <Field type="number" className="form-control shadow inputDesign"
                                            id="PersonalLoan1_AnnualRepayment" name='PersonalLoan1_AnnualRepayment' readOnly={true} />
                                          {/* <ErrorMessage component='div' className='text-danger fw-bold' name='CreditCard1_AnnualRepayment' /> */}
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-3">
                                        <div className="mb-3">
                                          <label htmlFor="PersonalLoan1_InterestRate" className="form-label">Interest Rate</   label>
                                          <Field type="number" className="form-control shadow inputDesign"
                                            id="PersonalLoan1_InterestRate" name='PersonalLoan1_InterestRate' placeholder="Interest Rate" />
                                          <ErrorMessage component='div' className='text-danger fw-bold' name='PersonalLoan1_InterestRate' />
                                        </div>
                                      </div>


                                      <div className="col-md-3">
                                        <div className="mb-3">
                                          <label htmlFor="PersonalLoan1_LoanTerm" className="form-label">
                                            Loan Terms (1 - 30 Years)
                                          </label>

                                          <Field
                                            as='select'
                                            id="PersonalLoan1_LoanTerm"
                                            name='PersonalLoan1_LoanTerm'
                                            className="form-select shadow  inputDesign myselect"
                                            onChange={(e) => setFieldValue("PersonalLoan1_LoanTerm", e.target.value)}
                                            value={values.PersonalLoan1_LoanTerm}
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
                                          <ErrorMessage component='div' className="text-danger fw-bold" name="PersonalLoan1_LoanTerm" />

                                        </div>
                                      </div>

                                      <div className="col-md-3">
                                        <div className="mb-3">
                                          <label htmlFor="PersonalLoan1_LoanType" className="form-label">
                                            Loan Type
                                          </label>
                                          <Field
                                            as='select'
                                            id="PersonalLoan1_LoanType"
                                            name='PersonalLoan1_LoanType'
                                            className="form-select shadow  inputDesign"
                                            onChange={(e) => setFieldValue("PersonalLoan1_LoanType", e.target.value)}
                                            value={values.PersonalLoan1_LoanType}
                                          >
                                            <option value="">Select</option>
                                            <option value="I/Only">I/Only</option>
                                            <option value="P&I">P & I</option>
                                          </Field>
                                          <ErrorMessage component='div' className="text-danger fw-bold" name="PersonalLoan1_LoanType" />

                                        </div>
                                      </div>

                                      <div className="col-md-3">
                                        <div className="mb-3">
                                          <label htmlFor="PersonalLoan1_YearRemaining" className="form-label">
                                            Year Remaining (1 - 30 Years)
                                          </label>

                                          <Field
                                            as='select'
                                            id="PersonalLoan1_YearRemaining"
                                            name='PersonalLoan1_YearRemaining'
                                            className="form-select shadow  inputDesign myselect"
                                            onChange={(e) => setFieldValue("PersonalLoan1_YearRemaining", e.target.value)}
                                            value={values.PersonalLoan1_YearRemaining}
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
                                          <ErrorMessage component='div' className="text-danger fw-bold" name="PersonalLoan1_YearRemaining" />

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
                                          <label htmlFor="PersonalLoan2_CurrentBalance" className="form-label">Current Balance</   label>
                                          <Field type="number" className="form-control shadow inputDesign"
                                            id="PersonalLoan2_CurrentBalance" name='PersonalLoan2_CurrentBalance' placeholder="Current Balance" />
                                          <ErrorMessage component='div' className='text-danger fw-bold' name='PersonalLoan2_CurrentBalance' />
                                        </div>
                                      </div>
                                      <div className="col-md-3">
                                        <div className="mb-3">
                                          <label htmlFor="PersonalLoan2_RepaymentAmount" className="form-label">Repayment Amount</   label>
                                          <Field type="number" className="form-control shadow inputDesign"
                                            id="PersonalLoan2_RepaymentAmount" name='PersonalLoan2_RepaymentAmount' placeholder="Repayment Amount" />
                                          <ErrorMessage component='div' className='text-danger fw-bold' name='PersonalLoan2_RepaymentAmount' />
                                        </div>
                                      </div>

                                      <div className="col-md-3">
                                        <div className="mb-3">
                                          <label htmlFor="PersonalLoan2_Frequency" className="form-label">
                                            Frequency
                                          </label>
                                          <Field
                                            as='select'
                                            id="PersonalLoan2_Frequency"
                                            name="PersonalLoan2_Frequency"
                                            className="form-select shadow  inputDesign"
                                            onChange={(e) => setFieldValue("PersonalLoan2_Frequency", e.target.value)}
                                            value={values.PersonalLoan2_Frequency}
                                          >
                                            <option value="">Select</option>
                                            <option value="Weekly">Weekly</option>
                                            <option value="Fortnightly">Fortnightly</option>
                                            <option value="Monthly">Monthly</option>
                                            <option value="Annually">Annually</option>
                                          </Field>
                                          <ErrorMessage component='div' className="text-danger fw-bold" name="PersonalLoan2_Frequency" />

                                        </div>
                                      </div>

                                      <div className="col-md-3">
                                        <div className="mb-3">
                                          <label htmlFor="PersonalLoan2_AnnualRepayment" className="form-label">Annual Repayment</   label>
                                          <Field type="number" className="form-control shadow inputDesign"
                                            id="PersonalLoan2_AnnualRepayment" name='PersonalLoan2_AnnualRepayment' readOnly={true} />
                                          {/* <ErrorMessage component='div' className='text-danger fw-bold' name='CreditCard1_AnnualRepayment' /> */}
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-3">
                                        <div className="mb-3">
                                          <label htmlFor="PersonalLoan2_InterestRate" className="form-label">Interest Rate</   label>
                                          <Field type="number" className="form-control shadow inputDesign"
                                            id="PersonalLoan2_InterestRate" name='PersonalLoan2_InterestRate' placeholder="Interest Rate" />
                                          <ErrorMessage component='div' className='text-danger fw-bold' name='PersonalLoan2_InterestRate' />
                                        </div>
                                      </div>


                                      <div className="col-md-3">
                                        <div className="mb-3">
                                          <label htmlFor="PersonalLoan2_LoanTerm" className="form-label">
                                            Loan Terms (1 - 30 Years)
                                          </label>

                                          <Field
                                            as='select'
                                            id="PersonalLoan2_LoanTerm"
                                            name='PersonalLoan2_LoanTerm'
                                            className="form-select shadow  inputDesign myselect"
                                            onChange={(e) => setFieldValue("PersonalLoan2_LoanTerm", e.target.value)}
                                            value={values.PersonalLoan2_LoanTerm}
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
                                          <ErrorMessage component='div' className="text-danger fw-bold" name="PersonalLoan2_LoanTerm" />

                                        </div>
                                      </div>

                                      <div className="col-md-3">
                                        <div className="mb-3">
                                          <label htmlFor="PersonalLoan2_LoanType" className="form-label">
                                            Loan Type
                                          </label>
                                          <Field
                                            as='select'
                                            id="PersonalLoan2_LoanType"
                                            name='PersonalLoan2_LoanType'
                                            className="form-select shadow  inputDesign"
                                            onChange={(e) => setFieldValue("PersonalLoan2_LoanType", e.target.value)}
                                            value={values.PersonalLoan2_LoanType}
                                          >
                                            <option value="">Select</option>
                                            <option value="I/Only">I/Only</option>
                                            <option value="P&I">P & I</option>
                                          </Field>
                                          <ErrorMessage component='div' className="text-danger fw-bold" name="PersonalLoan2_LoanType" />

                                        </div>
                                      </div>

                                      <div className="col-md-3">
                                        <div className="mb-3">
                                          <label htmlFor="PersonalLoan2_YearRemaining" className="form-label">
                                            Year Remaining (1 - 30 Years)
                                          </label>

                                          <Field
                                            as='select'
                                            id="PersonalLoan2_YearRemaining"
                                            name='PersonalLoan2_YearRemaining'
                                            className="form-select shadow  inputDesign myselect"
                                            onChange={(e) => setFieldValue("PersonalLoan2_YearRemaining", e.target.value)}
                                            value={values.PersonalLoan2_YearRemaining}
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
                                          <ErrorMessage component='div' className="text-danger fw-bold" name="PersonalLoan2_YearRemaining" />

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

                      <div className='table-responsive my-3'>
                        <table className="table table-bordered table-hover text-center">
                          <thead className="text-light" id="tableHead">
                            <tr>
                              <th>Description</th>
                              <th>Current Belance</th>
                              <th>Annual Repayments</th>
                              <th>Interest Rate</th>
                              <th>Operations</th>
                            </tr>
                          </thead>

                          <tbody>

                            {/* CreditCardList1  */}
                            {CreditCardList1.map((elem, index) => {
                              let { CreditCard1_CurrentBalance, CreditCard1_AnnualRepayment
                                , CreditCard1_InterestRate } = elem;
                              if (CreditCardList1[0].CreditCard1_CurrentBalance !== '') {
                                return (
                                  <tr key={index}>
                                    <td className='fw-bold'>Credit Card 1</td>
                                    <td>{CreditCard1_CurrentBalance}</td>
                                    <td>{CreditCard1_AnnualRepayment}</td>
                                    <td>{CreditCard1_InterestRate}</td>

                                    <td >
                                      <button type='button' onClick={() => personalLoansCreditCard1DeleteHandler(elem)} className='btn btn-danger btn-sm'>delete</button>
                                      <button type='button' onClick={personalLoansCreditCard1UpdateHandler} className='btn btn-warning btn-sm mx-2'>update</button>
                                    </td>

                                  </tr>
                                );
                              }
                              else {

                              }

                            })}
                            {/* CreditCardList1  */}

                            {/* CreditCardList2  */}
                            {CreditCardList2.map((elem, index) => {
                              let { CreditCard2_CurrentBalance, debtAnnualRepayment2
                                , CreditCard2_InterestRate } = elem;
                              if (CreditCardList2[0].CreditCard2_CurrentBalance !== '') {
                                return (
                                  <tr key={index}>
                                    <td className='fw-bold'>Credit Card 2</td>
                                    <td>{CreditCard2_CurrentBalance}</td>
                                    <td>{debtAnnualRepayment2}</td>
                                    <td>{CreditCard2_InterestRate}</td>

                                    <td >
                                      <button type='button' onClick={() => personalLoansCreditCard2DeleteHandler(elem)} className='btn btn-danger btn-sm'>delete</button>
                                      <button type='button' onClick={personalLoansCreditCard2UpdateHandler} className='btn btn-warning btn-sm mx-2'>update</button>
                                    </td>
                                  </tr>
                                );
                              }
                              else {

                              }

                            })}
                            {/* CreditCardList2  */}


                            {/* PersonalLoan1  */}
                            {CreditCardList1.map((elem, index) => {
                              let { PersonalLoan1_CurrentBalance, PersonalLoan1_AnnualRepayment
                                , PersonalLoan1_InterestRate } = elem;
                              if (CreditCardList1[0].PersonalLoan1_CurrentBalance !== '') {
                                return (
                                  <tr key={index}>
                                    <td className='fw-bold'>Personal Loan 1</td>
                                    <td>{PersonalLoan1_CurrentBalance}</td>
                                    <td>{PersonalLoan1_AnnualRepayment}</td>
                                    <td>{PersonalLoan1_InterestRate}</td>

                                    <td >
                                      <button type='button' onClick={() => personalLoans1DeleteHandler(elem)} className='btn btn-danger btn-sm'>delete</button>
                                      <button type='button' onClick={personalLoans1UpdateHandler} className='btn btn-warning btn-sm mx-2'>update</button>
                                    </td>
                                  </tr>
                                );
                              }
                              else {

                              }

                            })}
                            {/* PersonalLoan1  */}

                            {/* PersonalLoan2  */}
                            {PersonalLoanList2.map((elem, index) => {
                              let { PersonalLoan2_CurrentBalance, PersonalLoan2_AnnualRepayment
                                , PersonalLoan2_InterestRate } = elem;
                              if (PersonalLoanList2[0].PersonalLoan2_CurrentBalance !== '') {
                                return (
                                  <tr key={index}>
                                    <td className='fw-bold'>Personal Loan 2</td>
                                    <td>{PersonalLoan2_CurrentBalance}</td>
                                    <td>{PersonalLoan2_AnnualRepayment}</td>
                                    <td>{PersonalLoan2_InterestRate}</td>

                                    <td >
                                      <button type='button' onClick={() => personalLoans2DeleteHandler(elem)} className='btn btn-danger btn-sm'>delete</button>
                                      <button type='button' onClick={personalLoans2UpdateHandler} className='btn btn-warning btn-sm mx-2'>update</button>
                                    </td>
                                  </tr>
                                );
                              }
                              else {

                              }

                            })}
                            {/* PersonalLoan2  */}

                          </tbody>
                        </table>
                      </div>

                      {/*Table3 */}


                      <div className="row mt-5 mb-3">
                        <div className="col-md-12">
                          <button type='submit' className="float-end btn w-25  bgColor modalBtn">Next</button>
                          <button type='button' className="float-end btn w-25  btn-outline  backBtn mx-3" onClick={BackFunction}>Back</button>
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