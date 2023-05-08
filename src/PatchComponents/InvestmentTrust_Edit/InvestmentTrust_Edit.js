import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import * as Yup from "yup";
import "yup-phone";
import plus from "./images/plus.svg";
import notebook from "./images/notebook.svg";
import { ErrorMessage, Field, Form, Formik } from "formik";
import DatePicker from "react-datepicker";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
const InvestmentTrust_Edit = () => {
  const [updateIndex, setUpdateIndex] = useState();

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



  // Using states to store APIs data 

  const [bankAccountListObj, setBankAccountListObj] = useState([]);

  const [depositListObj, setdepositListObj] = useState([]);
  
  const [investmentInnerModalObj, setInvestmentInnerModalObj] = useState([]);
  
  const [investmentFormObj, setInvestmentFromObj] = useState([]);









  let letters = /^[a-zA-Z ]*$/;
  const [DistributionsTakenState, setDistributionsTakenState] = useState(false);
  const [loansAssociatedState, setloansAssociatedState] = useState(false);

  let loansAssociatedHandler = (elem) => {
    if (elem === "No") {
      setloansAssociatedState(false);
    } else {
      setloansAssociatedState(true);
    }
  };

  let initialValues = {
    NameofFamilyTrust: investmentFormObj.FamilyTrustName,
    TypeofTrust: investmentFormObj.TrustType,
    ABN:investmentFormObj.ABN,
    TrusteeType: investmentFormObj.TrusteeType,
    CorporateTrusteeName: investmentFormObj.CorporateTrusteeName,
    NumberofDirectors: investmentFormObj.TotalDirectors,
    EstablishmentDate:"",
    NameofAccountant: investmentFormObj.AccountantName,
    DistributionCashradio: investmentFormObj.CashDistribution,
    DirectorName1: investmentFormObj.Director1Name,
    DirectorName2: investmentFormObj.Director2Name,
    DirectorName3: investmentFormObj.Director3Name,
    DirectorName4: investmentFormObj.Director4Name,
    loansAssociatedradio: investmentFormObj.AustralianSharePortfolio,
    managedloansAssociatedradio: investmentFormObj.ManagedFunds,
  };
  let validationSchema = Yup.object({
    NameofFamilyTrust: Yup.string().matches(letters, "only letters"),
    TypeofTrust: Yup.string(),
    ABN: Yup.string(),
    TrusteeType: Yup.string(),
    CorporateTrusteeName: Yup.string().when("TrusteeType", {
      is: (val) => val && val.length == 9,
      then: Yup.string(),
      otherwise: Yup.string().notRequired(),
    }),
    EstablishmentDate: Yup.date().nullable(),
    NameofAccountant: Yup.string().matches(letters, "only letters"),
    NumberofDirectors: Yup.string(),
  });

  let Navigate = useNavigate();
  function BackFunction() {
    Navigate("/Edit-SMSF");
  }
  let onSubmit = (values) => {
    Navigate("/Edit-Personal-Insurance");
    let AddData = {
      Email: localStorage.getItem("ClientEmail"),
      FamilyTrustName: values.NameofFamilyTrust,
      TrustType: values.TypeofTrust,

      ABN: values.ABN,
      TrusteeType: values.TrusteeType,

      CorporateTrusteeName: values.CorporateTrusteeName, //miss in backend

      TotalDirectors: values.NumberofDirectors,
      EstablishmentDate: values.EstablishmentDate,
      AccountantName: values.NameofAccountant,
      CashDistribution: values.DistributionCashradio,
      Director1Name: values.DirectorName1,
      Director2Name: values.DirectorName2,
      Director3Name: values.DirectorName3,
      Director4Name: values.DirectorName4,

      AustralianSharePortfolio: values.loansAssociatedradio,
      ManagedFunds: values.managedloansAssociatedradio,
    };
    console.log(AddData);
    // Post Api

    // axios
    //   .post(
    //     "http://localhost:7000/Client-InvestmentTrust-InvestmentForm/Add-Client-InvestmentForm",
    //     AddData
    //   )
    //   .then((res) => {
    //     console.log("Client  Added Successfully!");
    //     Navigate("/Edit-Personal-Insurance");
    //   });
  };

  const [bankAccountList, setBankAccountList] = useState([]);
  const [bankAccountList2, setBankAccountList2] = useState([]);
  const [isEdit_bankAccountList, set_isEdit_BankAccountList] = useState(false);

  let Bank_initialValues = {
    CurrentValue1: bankAccountListObj.CurrentValue1,
    FinancialInstitution1: bankAccountListObj.FinancialInstitution1,
    IncomeYield1: bankAccountListObj.IncomeYield1,
    AnnualIncome1: "",

    CurrentValue2: bankAccountListObj.CurrentValue2,
    FinancialInstitution2: bankAccountListObj.FinancialInstitution2,
    IncomeYield2: bankAccountListObj.IncomeYield2,
    AnnualIncome2: "",

    CurrentValue3: bankAccountListObj.CurrentValue3,
    FinancialInstitution3: bankAccountListObj.FinancialInstitution3,
    IncomeYield3:  bankAccountListObj.IncomeYield3,
    AnnualIncome3: "",
  };
  let Bank_validationSchema = Yup.object({
    CurrentValue1: Yup.number().test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    FinancialInstitution1: Yup.string(),
    IncomeYield1: Yup.number().test(
      "Is positive?",
      "Must be a positive number",

      (value) => value > 0
    ),

    CurrentValue2: Yup.number().test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    FinancialInstitution2: Yup.string(),
    IncomeYield2: Yup.number().test(
      "Is positive?",
      "Must be a positive number",

      (value) => value > 0
    ),

    CurrentValue3: Yup.number().test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    FinancialInstitution3: Yup.string(),
    IncomeYield3: Yup.number().test(
      "Is positive?",
      "Must be a positive number",

      (value) => value > 0
    ),
  });

  const [bankObj, setBankObj] = useState([]);
  let Bank_onSubmit = (values) => {
    set_isEdit_BankAccountList(true);
    let emailasID = localStorage.getItem("ClientEmail");
    let Bank_Data = {
      Email: localStorage.getItem("ClientEmail"),

      CurrentValue1: values.CurrentValue1,
      FinancialInstitution1: values.FinancialInstitution1,
      IncomeYield1: values.IncomeYield1,
      // AnnualIncome1:values.AnnualIncome1,
      AnnualIncome1: 5000,

      CurrentValue2: values.CurrentValue2,
      FinancialInstitution2: values.FinancialInstitution2,
      IncomeYield2: values.IncomeYield2,
      // AnnualIncome2:values.AnnualIncome2,
      AnnualIncome2: 5000,

      CurrentValue3: values.CurrentValue3,
      FinancialInstitution3: values.FinancialInstitution3,
      IncomeYield3: values.IncomeYield3,
      // AnnualIncome3:values.AnnualIncome3,
      AnnualIncome3: 5000,
    };

    setBankAccountList2([Bank_Data]);

    //  console.log(Bank_Data)

    let bankAccount1 = {
      id: 1,
      CurrentValue: values.CurrentValue1,
      FinancialInstitution: values.FinancialInstitution1,
      IncomeYield: values.IncomeYield1,
      // AnnualIncome1:values.AnnualIncome1,
      AnnualIncome: 5000,
    };
    let bankAccount2 = {
      id: 2,
      CurrentValue: values.CurrentValue2,
      FinancialInstitution: values.FinancialInstitution2,
      IncomeYield: values.IncomeYield2,
      // AnnualIncome2:values.AnnualIncome2,
      AnnualIncome: 5000,
    };
    let bankAccount3 = {
      id: 3,
      CurrentValue: values.CurrentValue3,
      FinancialInstitution: values.FinancialInstitution3,
      IncomeYield: values.IncomeYield3,
      // AnnualIncome3:values.AnnualIncome3,
      AnnualIncome: 5000,
    };
    setBankAccountList([bankAccount1, bankAccount2, bankAccount3]);

    console.log(bankAccountList);
    set_isEdit_BankAccountList(true);
    if (isEdit_bankAccountList == false) {
      axios
        .post(
          "http://localhost:7000/Client-InvestmentTrust/Add-Client-BankAccounts",
          Bank_Data
        )
        .then((res) => console.log("data added successfully"));
    } else {
      axios
        .patch(
          ` http://localhost:7000/Client-InvestmentTrust/Update-Client-BankAccounts/${emailasID}`,
          Bank_Data
        )
        .then((res) => console.log("data Updated successfully"))
        .catch((err) => {
          if (err.response) {
            console.log(err.response.status);
            console.log(err.response.statusText);
            console.log(err.message);
            console.log(err.response.headers); // 👉️ {... response headers here}
            console.log("ss", err.response.data); // 👉️ {... response data here}
          }
        });
    }

    handleClose();
  };

  let updateHandler_Bank = (elem) => {
    set_isEdit_BankAccountList(true);
    handleShow();
  };

  let deleteHandler_Bank = (e, index) => {
    let emailasID = localStorage.getItem("ClientEmail");
    console.log(bankAccountList2);

    setBankAccountList(
      bankAccountList.filter((object) => {
        return object.id !== e.id;
      })
    );

    if (e.id == 1) {
      bankAccountList2[0].CurrentValue1 = "";
      bankAccountList2[0].FinancialInstitution1 = "";
      bankAccountList2[0].IncomeYield1 = "";
      bankAccountList2[0].AnnualIncome1 = "";
    } else if (e.id == 2) {
      bankAccountList2[0].CurrentValue2 = "";
      bankAccountList2[0].FinancialInstitution2 = "";
      bankAccountList2[0].IncomeYield2 = "";
      bankAccountList2[0].AnnualIncome2 = "";
    } else if (e.id == 3) {
      bankAccountList2[0].CurrentValue3 = "";
      bankAccountList2[0].FinancialInstitution3 = "";
      bankAccountList2[0].IncomeYield3 = "";
      bankAccountList2[0].AnnualIncome3 = "";
    }

    axios
      .patch(
        `http://localhost:7000/Client-InvestmentTrust/Update-Client-BankAccounts/${emailasID}`,
        bankAccountList2[0]
      )
      .then((res) => console.log("data Updated successfully"));
  };

  const [depositList, setdepositList] = useState([]);
  const [deposit_InitialValue2, setdeposit_InitialValue2] = useState([]);

  const [isEdit_deposit, set_isEdit_deposit] = useState(false);

  let Deposit_initialValues = {
    DepositCurrentValue1: depositListObj.CurrentValue1,
    DepositFinancialInstitution1: depositListObj.FinancialInstitution1,
    DepositIncomeYield1: depositListObj.IncomeYield1,
    DepositAnnualIncome1: depositListObj.AnnualIncome1,

    DepositCurrentValue2: depositListObj.CurrentValue2,
    DepositFinancialInstitution2: depositListObj.FinancialInstitution2,
    DepositIncomeYield2: depositListObj.IncomeYield2,
    DepositAnnualIncome2: depositListObj.AnnualIncome2,

    DepositCurrentValue3: depositListObj.CurrentValue3,
    DepositFinancialInstitution3: depositListObj.FinancialInstitution3,
    DepositIncomeYield3: depositListObj.IncomeYield3,
    DepositAnnualIncome3: depositListObj.AnnualIncome3,
  };
  let Deposit_validationSchema = Yup.object({
    DepositCurrentValue1: Yup.number().test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    DepositFinancialInstitution1: Yup.string(),
    DepositIncomeYield1: Yup.number().test(
      "Is positive?",
      "Must be a positive number",

      (value) => value > 0
    ),

    DepositCurrentValue2: Yup.number().test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    DepositFinancialInstitution2: Yup.string(),
    DepositIncomeYield2: Yup.number().test(
      "Is positive?",
      "Must be a positive number",

      (value) => value > 0
    ),

    DepositCurrentValue3: Yup.number().test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    DepositFinancialInstitution3: Yup.string(),
    DepositIncomeYield3: Yup.number().test(
      "Is positive?",
      "Must be a positive number",

      (value) => value > 0
    ),
  });

  let Deposit_onSubmit = (values) => {
    set_isEdit_deposit(true);

    let depositData = {
      Email: localStorage.getItem("ClientEmail"),

      CurrentValue1: values.DepositCurrentValue1,
      FinancialInstitution1: values.DepositFinancialInstitution1,
      IncomeYield1: values.DepositIncomeYield1,
      // AnnualIncome1:values.DepositAnnualIncome1,
      AnnualIncome1: 5000,

      CurrentValue2: values.DepositCurrentValue2,
      FinancialInstitution2: values.DepositFinancialInstitution2,
      IncomeYield2: values.DepositIncomeYield2,
      // AnnualIncome2:values.DepositAnnualIncome2,
      AnnualIncome2: 5000,

      CurrentValue3: values.DepositCurrentValue3,
      FinancialInstitution3: values.DepositFinancialInstitution3,
      IncomeYield3: values.DepositIncomeYield3,
      // AnnualIncome3:values.DepositAnnualIncome3,
      AnnualIncome3: 5000,
    };

    let depositData2 = {
      DepositCurrentValue1: values.DepositCurrentValue1,
      DepositFinancialInstitution1: values.DepositFinancialInstitution1,
      DepositIncomeYield1: values.DepositIncomeYield1,
      // AnnualIncome1:values.DepositAnnualIncome1,
      DepositAnnualIncome1: 5000,

      DepositCurrentValue2: values.DepositCurrentValue2,
      DepositFinancialInstitution2: values.DepositFinancialInstitution2,
      DepositIncomeYield2: values.DepositIncomeYield2,
      // AnnualIncome2:values.DepositAnnualIncome2,
      DepositAnnualIncome2: 5000,

      DepositCurrentValue3: values.DepositCurrentValue3,
      DepositFinancialInstitution3: values.DepositFinancialInstitution3,
      DepositIncomeYield3: values.DepositIncomeYield3,
      // AnnualIncome3:values.DepositAnnualIncome3,
      DepositAnnualIncome3: 5000,
    };

    let deposit1 = {
      id: 1,
      DepositCurrentValue: values.DepositCurrentValue1,
      DepositFinancialInstituion: values.DepositFinancialInstitution1,
      DepositIncomeYield: values.DepositIncomeYield1,
      // AnnualIncome1:values.DepositAnnualIncome1,
      DepositAnnualIncome: 5000,
    };

    let deposit2 = {
      id: 2,
      DepositCurrentValue: values.DepositCurrentValue2,
      DepositFinancialInstituion: values.DepositFinancialInstitution2,
      DepositIncomeYield: values.DepositIncomeYield2,
      // AnnualIncome2:values.DepositAnnualIncome2,
      DepositAnnualIncome: 5000,
    };

    let deposit3 = {
      id: 3,
      DepositCurrentValue: values.DepositCurrentValue3,
      DepositFinancialInstituion: values.DepositFinancialInstitution3,
      DepositIncomeYield: values.DepositIncomeYield3,
      // AnnualIncome:values.DepositAnnualIncome3,
      DepositAnnualIncome: 5000,
    };

    setdepositList([deposit1, deposit2, deposit3]);

    setdeposit_InitialValue2([depositData2]);

    console.log(depositData);

    axios
      .post(
        "http://localhost:7000/Client-InvestmentTrust/Add-Client-TermDeposit",
        depositData
      )
      .then((res) => console.log("data added successfully"));
    handleClose2();
  };

  let updateHandler_Deposit = (elem) => {
    set_isEdit_deposit(true);
    handleShow2();
  };

  let deleteHandler_Deposit = (e, index) => {
    // console.log(e)
    setdepositList(
      depositList.filter((object) => {
        return object.id !== e.id;
      })
    );

    if (e.id == 1) {
      deposit_InitialValue2[0].DepositCurrentValue1 = "";
      deposit_InitialValue2[0].DepositFinancialInstitution1 = "";
      deposit_InitialValue2[0].DepositIncomeYield1 = "";
    } else if (e.id == 2) {
      deposit_InitialValue2[0].DepositCurrentValue2 = "";
      deposit_InitialValue2[0].DepositFinancialInstitution2 = "";
      deposit_InitialValue2[0].DepositIncomeYield2 = "";
    } else if (e.id == 3) {
      deposit_InitialValue2[0].DepositCurrentValue3 = "";
      deposit_InitialValue2[0].DepositFinancialInstitution3 = "";
      deposit_InitialValue2[0].DepositIncomeYield3 = "";
    }
  };

  const [Share_initialValues2, setShare_initialValues2] = useState([]);
  const [is_Share, setIs_Share] = useState(false);
  const [AustralianShareList, setAustralianShareList] = useState([]);

  // start Australian tab
  let Share_initialValues = {
    ShareInvestmentName: "",
    NoOfShares: "",
    CurrentSharePrice: "",
    TotalShareValue: "", //read only
    CostBase: "",
    PurchaseDate: "",
    Incomepa: "",
    IncomepaType: "",
    TotalIncomePa: "", //read only
    FrankedAmount: "",
    RegInvestmentsPA: "",
    Reinvestincomeradio: "No",
  };
  let Share_validationSchema = Yup.object({
    ShareInvestmentName: Yup.string(),
    NoOfShares: Yup.number().test(
      "Is positive?",
      "Must be positive number",

      (value) => value > 0
    ),
    CurrentSharePrice: Yup.number().test(
      "Is positive?",
      "Must be positive number",
      (value) => value > 0
    ),

    CostBase: Yup.number().test(
      "Is positive?",
      "Must be positive number",

      (value) => value > 0
    ),
    PurchaseDate: Yup.date().nullable(),
    Incomepa: Yup.number().test(
      "Is positive?",
      "Must be positive number",

      (value) => value > 0
    ),
    IncomepaType: Yup.string(),

    FrankedAmount: Yup.number().test(
      "Is positive?",
      "Must be positive number",

      (value) => value > 0
    ),
    RegInvestmentsPA: Yup.number().test(
      "Is positive?",
      "Must be positive number",
      (value) => value > 0
    ),
  });

  let Share_onSubmit = (values) => {
    let myDate = new Date(values.PurchaseDate);

    let day = myDate.getDate();
    let month = myDate.getMonth();
    let year = myDate.getFullYear();

    let PurchaseDate = day + "/" + month + "/" + year;

    // console.log(PurchaseDate)
    let AddData = {
      Email: localStorage.getItem("ClientEmail"),
      InvestmentName: values.ShareInvestmentName,
      NumberOfShares: values.NoOfShares,
      CurrentSharePrice: values.CurrentSharePrice,
      TotalShareValue: 5000, //TotalShareValue:'', read only
      CostBase: values.CostBase,
      PurchaseDate: PurchaseDate,
      IncomePA: values.Incomepa,

      IncomePAType: values.IncomepaType,

      TotalIncomePA: 5000, //TotalIncomePa:'', //read only

      FrankedAmount: values.FrankedAmount,

      ReinvestIncome: values.Reinvestincomeradio,

      RegInvestmentsPA: values.RegInvestmentsPA,
    };

    if (is_Share) {
      setAustralianShareList(
        AustralianShareList.filter(
          (AustralianShareList, index) => index !== updateIndex
        )
      );
      setAustralianShareList((AustralianShareList) => [
        ...AustralianShareList,
        AddData,
      ]);
      console.log(AddData);

      setIs_Share(false);
      handleClose3();
    } else {
      setAustralianShareList([...AustralianShareList, AddData]);
      console.log(AddData);
      axios
        .post(
          "http://localhost:7000/Client-InvestmentTrust/Add-Client-Australian-Market-Share",
          AddData
        )
        .then((res) => console.log("Data Added Successfully"));


      setIs_Share(false);
      handleClose3();
    }
  };

  let updateHandler_AustralianShare = (elem, ind) => {
    setIs_Share(true);
    let AddData2 = {
      ShareInvestmentName: elem.InvestmentName,
      NoOfShares: elem.NumberOfShares,
      CurrentSharePrice: elem.CurrentSharePrice,
      TotalShareValue: elem.TotalShareValue, //TotalShareValue:'', read only
      CostBase: elem.CostBase,
      //  PurchaseDate: elem.PurchaseDate,
      Incomepa: elem.IncomePA,
      IncomepaType: elem.IncomePAType,
      TotalIncomePa: elem.TotalIncomePA, //TotalIncomePa:'', //read only
      FrankedAmount: elem.FrankedAmount,
      Reinvestincomeradio: elem.ReinvestIncome,
      RegInvestmentsPA: elem.RegInvestmentsPA,
    };
    setShare_initialValues2(AddData2);
    setUpdateIndex(ind);
    handleShow3();
  };

  let deleteHandler_AustralianShare = (elem, ind) => {
    // set_isEdit_BankAccountList(true)
    setAustralianShareList(
      AustralianShareList.filter((AustralianShareList, index) => index !== ind)
    );

    // handleShow3();
  };

  const [loan_initialValues2, setLoan_initialValues2] = useState([]);
  const [is_Loan, setIs_Loan] = useState(false);
  const [AustralianLoanList, setAustralianLoanList] = useState([]);

  let Australian_loansAssociated_initialValues = {
    AustralianPortfolioLoanType: "",
    AustralianPortfolioCurrentBalance: "",
    AustralianPortfolioLender: "",
    AustralianInterestRatePA: "",

    AustralianPortfolioRepaymentAmount: "",
    AustralianPortfolioFrequency: "",
    AustralianPortfolioAnnualRepayment: "", //readonly

    AustralianPortfolioLoanTerm: "",
    AustralianPortfolioLoanType2: "",
    AustralianPortfolioDeductibleLoanAmount: "",
    AustralianPortfolioYearRemaining: "",
  };
  let Australian_loansAssociated_validationSchema = Yup.object({
    AustralianPortfolioLoanType: Yup.string(),
    AustralianPortfolioCurrentBalance: Yup.number().test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    AustralianPortfolioLender: Yup.string(),
    AustralianPortfolioRepaymentAmount: Yup.number().test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    AustralianPortfolioFrequency: Yup.string(),
    AustralianInterestRatePA: Yup.number().test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    AustralianPortfolioLoanTerm: Yup.string(),
    AustralianPortfolioLoanType2: Yup.string(),
    AustralianPortfolioDeductibleLoanAmount: Yup.number().test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    AustralianPortfolioYearRemaining: Yup.string(),
  });
  let Australian_loansAssociated_onSubmit = (values) => {
    let myData = {
      // myloan

      Email: localStorage.getItem("ClientEmail"),
      AustralianPortfolioLoanType: values.AustralianPortfolioLoanType,
      AustralianPortfolioCurrentBalance:
        values.AustralianPortfolioCurrentBalance,
      AustralianPortfolioLender: values.AustralianPortfolioLender,
      AustralianInterestRatePA: values.AustralianInterestRatePA,

      AustralianPortfolioRepaymentAmount:
        values.AustralianPortfolioRepaymentAmount,
      AustralianPortfolioFrequency: values.AustralianPortfolioFrequency,
      AustralianPortfolioAnnualRepayment: 5000, //AustralianPortfolioAnnualRepayment:'', //readonly

      AustralianPortfolioLoanTerm: values.AustralianPortfolioLoanTerm,
      AustralianPortfolioLoanType2: values.AustralianPortfolioLoanType2,
      AustralianPortfolioDeductibleLoanAmount:
        values.AustralianPortfolioDeductibleLoanAmount,
      AustralianPortfolioYearRemaining: values.AustralianPortfolioYearRemaining,
    };

    if (is_Loan) {
      setAustralianLoanList(
        AustralianLoanList.filter(
          (AustralianLoanList, index) => index !== updateIndex
        )
      );
      setAustralianLoanList((AustralianLoanList) => [
        ...AustralianLoanList,
        myData,
      ]);
      handleClose4();
      setIs_Loan(false);
    } else {
      setAustralianLoanList([...AustralianLoanList, myData]);
      console.log(myData);

      axios
        .post(
          "http://localhost:7000/Client-InvestmentTrust/Add-Client-Australian-Market-Portfolio",
          myData
        )
        .then((res) => console.log("data Added Successfully"));
      handleClose4();

    }
  };

  let updateHandler_AustralianLoan = (elem, ind) => {
    setIs_Loan(true);

    let myData = {
      Email: localStorage.getItem("ClientEmail"),
      AustralianPortfolioLoanType: elem.AustralianPortfolioLoanType,
      AustralianPortfolioCurrentBalance: elem.AustralianPortfolioCurrentBalance,
      AustralianPortfolioLender: elem.AustralianPortfolioLender,
      AustralianInterestRatePA: elem.AustralianInterestRatePA,

      AustralianPortfolioRepaymentAmount:
        elem.AustralianPortfolioRepaymentAmount,
      AustralianPortfolioFrequency: elem.AustralianPortfolioFrequency,
      AustralianPortfolioAnnualRepayment: 5000, //AustralianPortfolioAnnualRepayment:'', //readonly

      AustralianPortfolioLoanTerm: elem.AustralianPortfolioLoanTerm,
      AustralianPortfolioLoanType2: elem.AustralianPortfolioLoanType2,
      AustralianPortfolioDeductibleLoanAmount:
        elem.AustralianPortfolioDeductibleLoanAmount,
      AustralianPortfolioYearRemaining: elem.AustralianPortfolioYearRemaining,
    };

    setLoan_initialValues2([myData]);
    setUpdateIndex(ind);
    handleShow4();
  };

  let deleteHandler_AustralianLoan = (elem, ind) => {
    setAustralianLoanList(
      AustralianLoanList.filter((AustralianLoanList, index) => index !== ind)
    );
    // handleShow4();
  };

  // end Australian tab
  // managed funds tab start

  // managed fund

  const [manageFund_initialValues2, setManageFund_initialValues2] = useState([]);
  const [is_manageFund, setIs_manageFund] = useState(false);
  const [manageFundList, setManageFundList] = useState([]);
  let manageFund_initialValues = {
    PlatformName: "",
    InvestmentName: "",
    NoOfUnitsShares: "",
    CurrentShareUnitPrice: "",
    managedCurrentValue: "", //readonly
    OriginalInvestment: "",
    managedPurchaseDate: "",
    managedIncomepa: "",
    managedIncomepaType: "",
    managedTotalIncomePA: "", //readonly
    managedRegInvestmentsPA: "",
    managedReinvestincomeradio: "No",
  };

  let manageFund_validationSchema = Yup.object({
    PlatformName: Yup.string(),
    InvestmentName: Yup.string(),
    NoOfUnitsShares: Yup.number().test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),

    CurrentShareUnitPrice: Yup.number().test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),

    OriginalInvestment: Yup.number().test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    managedPurchaseDate: Yup.date().nullable(),

    managedIncomepa: Yup.number().test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    managedIncomepaType: Yup.string().nullable(),
    managedRegInvestmentsPA: Yup.number().test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
  });

  let manageFund_onSubmit = (values) => {
    let myData = {
      Email: localStorage.getItem("ClientEmail"),
      PlatformName: values.PlatformName,
      InvestmentName: values.InvestmentName,
      NoOfShares: values.NoOfUnitsShares,
      CurrentSharePrice: values.CurrentShareUnitPrice,
      CurrentShareValue: 5000, //managedCurrentValue read only
      OriginalInvestment: values.OriginalInvestment,
      PurchaseDate: values.managedPurchaseDate,
      IncomePA: values.managedIncomepa,
      IncomePAType: values.managedIncomepaType,
      TotalIncomePA: 5000, //managedTotalIncomePA read only
      RegInvestmentsPA: values.managedRegInvestmentsPA,
      ReinvestIncome: values.managedReinvestincomeradio,
    };

    if(is_manageFund){

      setManageFundList(manageFundList.filter((manageFundList, index) => index !== updateIndex));
      setManageFundList(manageFundList =>[...manageFundList, myData]);
      handleClose5();
      setIs_manageFund(false);


    }else{


      console.log(myData);
      setManageFundList([...manageFundList, myData]);
      axios
        .post(
          "http://localhost:7000/Client-InvestmentTrust/Add-Client-ManagedFunds",
          myData
        )
        .then((ref) => {
          console.log("Data Added Successfully !");
          setManageFundList([...manageFundList, myData]);
        });
  
      handleClose5();
    }


  };
  let updateHandler_ManageFund = (elem,ind) => {
    // console.log(elem);
    setIs_manageFund(true);
    let myData = {
      Email: localStorage.getItem("ClientEmail"),
      PlatformName: elem.PlatformName,
      InvestmentName: elem.InvestmentName,
      NoOfUnitsShares: elem.NoOfShares,
      CurrentShareUnitPrice: elem.CurrentSharePrice,
      managedCurrentValue: 5000, //managedCurrentValue read only
      OriginalInvestment: elem.OriginalInvestment,
      // managedPurchaseDate: elem.PurchaseDate,
      managedIncomepa: elem.IncomePA,
      managedIncomepaType: elem.IncomePAType,
      managedTotalIncomePA: 5000, //managedTotalIncomePA read only
      managedRegInvestmentsPA: elem.RegInvestmentsPA,
      managedReinvestincomeradio: elem.ReinvestIncome,
    };
    setManageFund_initialValues2([myData])
    
    setUpdateIndex(ind);
    handleShow5();
  };

  let deleteHandler_ManageFund = (elem,ind) => {
    
    setManageFundList(manageFundList.filter((manageFundList, index) => index !== ind));
    // handleShow4();
  };

  // managed fund

  // managed loan

  const [manageloan_initialValues2, setmanageLoan_initialValues2] = useState([]);
  const [is_manageLoan, setIs_manageLoan] = useState(false);
  const [manageLoanList, setManageLoanList] = useState([]);
  let managed_initialValues = {
    Typeofloan: "",
    CurrentBalance: "",
    Lender: "",
    RepaymentsAmount: "",
    Frequency: "",
    managedAnnualRepayments: "", //readonly
    InterestRatePA: "",
    LoanTermInYears: "",
    LoanType: "",
    DeductibleAmountofLoan: "",
    YearRemaning: "",
  };

  let managed_validationSchema = Yup.object({
    Typeofloan: Yup.string(),
    CurrentBalance: Yup.number().test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    Lender: Yup.string(),
    RepaymentsAmount: Yup.number().test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    Frequency: Yup.string(),
    InterestRatePA: Yup.number().test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    LoanTermInYears: Yup.string(),
    LoanType: Yup.string(),
    DeductibleAmountofLoan: Yup.number().test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    YearRemaning: Yup.string(),
  });

  let managed_onSubmit = (values) => {
    let myData = {
      Email: localStorage.getItem("ClientEmail"),
      ManagedFundsPortfolioLoanType: values.Typeofloan,
      ManagedFundsPortfolioCurrentBalance: values.CurrentBalance,
      ManagedFundsPortfolioLender: values.Lender,

      ManagedFundsPortfolioRepaymentAmount: values.RepaymentsAmount,
      ManagedFundsPortfolioFrequency: values.Frequency,

      ManagedFundsPortfolioAnnualRepayments: 5000, //  managedAnnualRepayments, //readonly
      ManagedFundsPortfolioInterestRatePA: values.InterestRatePA,

      ManagedFundsPortfolioLoanTerm: values.LoanTermInYears,
      ManagedFundsPortfolioLoanType2: values.LoanType,
      ManagedFundsPortfolioDeductibleLoanAmount: values.DeductibleAmountofLoan,
      ManagedFundsPortfolioYearRemaining: values.YearRemaning,
    };
    console.log(myData);

    if (is_manageLoan){

      setManageLoanList(manageLoanList.filter((manageLoanList, index) => index !== updateIndex));
      setManageLoanList(manageLoanList =>[...manageLoanList, myData]);
      handleClose6();
      setIs_manageLoan(false);


    }
    else{

      axios
      .post(
        "http://localhost:7000/Client-InvestmentTrust/Add-Client-ManagedFunds-Portfolio",
        myData
      )
      .then((ref) => {
        console.log("Managed Fund Portfolio Added Succeccfully!");
      });
    setManageLoanList([...manageLoanList, myData]);
    handleClose6();
    }


  };

  let updateHandler_ManageLoan = (elem,ind) => {
    setIs_manageLoan(true);

    let myData = {
      Email: localStorage.getItem("ClientEmail"),
      Typeofloan: elem.ManagedFundsPortfolioLoanType,
      CurrentBalance: elem.ManagedFundsPortfolioCurrentBalance,
      Lender: elem.ManagedFundsPortfolioLender,

      RepaymentsAmount: elem.ManagedFundsPortfolioRepaymentAmount,
      Frequency: elem.ManagedFundsPortfolioFrequency,

      managedAnnualRepayments: 5000, //  managedAnnualRepayments, //readonly
      InterestRatePA: elem.ManagedFundsPortfolioInterestRatePA,

      LoanTermInYears: elem.ManagedFundsPortfolioLoanTerm,
      LoanType : elem.ManagedFundsPortfolioLoanType2,
      DeductibleAmountofLoan: elem.ManagedFundsPortfolioDeductibleLoanAmount,
      YearRemaning: elem.ManagedFundsPortfolioYearRemaining,
    };

    setmanageLoan_initialValues2([myData]);
    setUpdateIndex(ind);
    handleShow6();

  };

  let deleteHandler_ManageLoan = (elem,ind) => {
    setManageLoanList(manageLoanList.filter((manageLoanList, index) => index !== ind));
  };
  // managed loan

  // managed funds tab end

  //investment properties

  const [investment_initialValues2, setInvestment_initialValues2] = useState([]);
  const [is_investment, setIs_investment] = useState(false);
  const [investmentList, setInvestmentList] = useState([]);

  let Investment_initialValues = {
    InvestmentCurrentValue: "", // num
    InvestmentCostBasePurchasePrice: "", // num
    InvestmentPropertyAddress: "",
    investmentPostcodeSuburb: "",
    InvestmentRentalIncome: "",
    InvestmentFrequency: "",
    InvestmentTotalAnnualIncome: "", // readonly
    InvestmentExpensesPA: "",

    loanAttachedradio: "No", // radio

    InvestmentCurrentBalance: "",
    InvestmentLender: "",
    InvestmentRepaymentsAmount: "",
    InvestmentFrequencyRadio: "",
    InvestmentAnnualRepayments: "", //readOnly
    InvestmentInterestRatePA: "",
    InvestmentLoanTermInYear: "",
    InvestmentLoanType: "",
    InvestmentDedAmountOfLoan: "", // num
    InvestmentYearsRemainingYear: "", // select
  };
  let Investment_validationSchema = Yup.object({
    InvestmentCurrentValue: Yup.number().test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    InvestmentCostBasePurchasePrice: Yup.number().test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    InvestmentPropertyAddress: Yup.string(),
    investmentPostcodeSuburb: Yup.string(),
    InvestmentRentalIncome: Yup.number().test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    InvestmentFrequency: Yup.string(),
    InvestmentExpensesPA: Yup.number().test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),

    // conditional validation

    InvestmentCurrentBalance: Yup.number().when("loanAttachedradio", {
      is: (val) => val && val.length === 3,
      then: Yup.number().test(
        "Is positive?",
        "Must be a positive number",
        (value) => value > 0
      ),
      otherwise: Yup.number().notRequired(),
    }),

    InvestmentLender: Yup.string().when("loanAttachedradio", {
      is: (val) => val && val.length == 3,
      then: Yup.string(),
      otherwise: Yup.string().notRequired(),
    }),

    InvestmentRepaymentsAmount: Yup.number().when("loanAttachedradio", {
      is: (val) => val && val.length === 3,
      then: Yup.number().test(
        "Is positive?",
        "Must be a positive number",
        (value) => value > 0
      ),
      otherwise: Yup.number().notRequired(),
    }),

    InvestmentFrequencyRadio: Yup.string().when("loanAttachedradio", {
      is: (val) => val && val.length == 3,
      then: Yup.string(),
      otherwise: Yup.string().notRequired(),
    }),

    InvestmentInterestRatePA: Yup.number().when("loanAttachedradio", {
      is: (val) => val && val.length === 3,
      then: Yup.number().test(
        "Is positive?",
        "Must be a positive number",
        (value) => value > 0
      ),
      otherwise: Yup.number().notRequired(),
    }),

    InvestmentLoanTermInYear: Yup.string().when("loanAttachedradio", {
      is: (val) => val && val.length == 3,
      then: Yup.string(),
      otherwise: Yup.string().notRequired(),
    }),

    InvestmentLoanType: Yup.string().when("loanAttachedradio", {
      is: (val) => val && val.length == 3,
      then: Yup.string(),
      otherwise: Yup.string().notRequired(),
    }),

    InvestmentDedAmountOfLoan: Yup.number().when("loanAttachedradio", {
      is: (val) => val && val.length === 3,
      then: Yup.number().test(
        "Is positive?",
        "Must be a positive number",
        (value) => value > 0
      ),
      otherwise: Yup.number().notRequired(),
    }),

    InvestmentYearsRemainingYear: Yup.string().when("loanAttachedradio", {
      is: (val) => val && val.length == 3,
      then: Yup.string(),
      otherwise: Yup.string().notRequired(),
    }),
  });

  let Investment_onSubmit = (values) => {
    let myData = {
      Email: localStorage.getItem("ClientEmail"),
      CurrentValue: values.InvestmentCurrentValue, // num
      CostBase: values.InvestmentCostBasePurchasePrice, // num
      PropertyAddress: values.InvestmentPropertyAddress,
      PostCode: values.investmentPostcodeSuburb,
      RentalIncome: values.InvestmentRentalIncome,
      Frequency: values.InvestmentFrequency,
      TotalAnnualIncome: 5000, //InvestmentTotalAnnualIncome readonly
      ExpensesPA: values.InvestmentExpensesPA,

      LoanAttached: values.loanAttachedradio,

      CurrentBalance: values.InvestmentCurrentBalance,
      Lender: values.InvestmentLender,
      RepaymentAmount: values.InvestmentRepaymentsAmount,
      Frequency2: values.InvestmentFrequencyRadio,
      AnnualRepayments: 5000, // InvestmentAnnualRepayments readOnly
      InterestRatePA: values.InvestmentInterestRatePA,
      LoanTerm: values.InvestmentLoanTermInYear,
      LoanType: values.InvestmentLoanType,
      DebtAmountLoan: values.InvestmentDedAmountOfLoan,
      YearsRemaining: values.InvestmentYearsRemainingYear,
    };

    if (is_investment){

      setInvestmentList(investmentList.filter((investmentList, index) => index !== updateIndex));
      setInvestmentList(investmentList =>[...investmentList, myData]);
      handleClose7();
      setIs_investment(false);


    }
    else{

      console.log(myData);
      axios
        .post(
          "http://localhost:7000/Client-InvestmentTrust/Add-Client-InvestmentProperties",
          myData
        )
        .then((res) => {
          console.log("Data added sussessfully!");
        });
  
      setInvestmentList([...investmentList, myData]);
      handleClose7();
    }

  };

  let updateHandler_Investment = (elem,ind) => {
    setIs_investment(true);

    let myData = {
      Email: localStorage.getItem("ClientEmail"),
      InvestmentCurrentValue: elem.CurrentValue, // num
      InvestmentCostBasePurchasePrice: elem.CostBase, // num
      InvestmentPropertyAddress: elem.PropertyAddress,
      investmentPostcodeSuburb: elem.PostCode,
      InvestmentRentalIncome: elem.RentalIncome,
      InvestmentFrequency: elem.Frequency,
      TotalAnnualIncome: 5000, //InvestmentTotalAnnualIncome readonly
      InvestmentExpensesPA: elem.ExpensesPA,

      loanAttachedradio: elem.LoanAttached,

      InvestmentCurrentBalance: elem.CurrentBalance,
      InvestmentLender: elem.Lender,
      InvestmentRepaymentsAmount: elem.RepaymentAmount,
      InvestmentFrequencyRadio: elem.Frequency2,
      AnnualRepayments: 5000, // InvestmentAnnualRepayments readOnly
      InvestmentInterestRatePA: elem.InterestRatePA,
      InvestmentLoanTermInYear: elem.LoanTerm,
      InvestmentLoanType: elem.LoanType,
      InvestmentDedAmountOfLoan: elem.DebtAmountLoan,
      InvestmentYearsRemainingYear: elem.YearsRemaining,
    };

    setInvestment_initialValues2([myData])
    setUpdateIndex(ind);
    handleShow7();
    // handleShow4()
  };

  let deleteHandler_Investment = (elem,ind) => {
    // alert("delete");
    setInvestmentList(investmentList.filter((investmentList, index) => index !== ind));
  };
  //investment properties

  //investment properties modal within modal

  let Investment_initialValues_Modal = {
    TotalPropertyExpenses2: investmentInnerModalObj.TotalPropertyExpenses, //readonly
    BodyCorporateFees2:  investmentInnerModalObj.BodyCorporateFees,
    CouncilRates2:  investmentInnerModalObj.CouncilRates,
    GardeningAndLawnmowing2:  investmentInnerModalObj.GardeningAndLawnMowing,
    Insurance2:  investmentInnerModalObj.Insurance,
    LandTax2:  investmentInnerModalObj.LandTax,
    RepairsAndMaintenance2:  investmentInnerModalObj.RepairsAndMaintenance,
    WaterCharges2:  investmentInnerModalObj.WaterCharges,
    Other2:  investmentInnerModalObj.Other,
    TelephoneAndInternet2:  investmentInnerModalObj.TelephoneAndInternet,
    ProfessionalFees2:  investmentInnerModalObj.ProfessionalFees,
    AllOther2:  investmentInnerModalObj.AllOther,
  };
  let Investment_validationSchema_Modal = Yup.object({
    BodyCorporateFees2: Yup.number().test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    CouncilRates2: Yup.number().test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    GardeningAndLawnmowing2: Yup.number().test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    Insurance2: Yup.number().test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    LandTax2: Yup.number().test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    RepairsAndMaintenance2: Yup.number().test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    WaterCharges2: Yup.number().test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    Other2: Yup.number().test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    TelephoneAndInternet2: Yup.number().test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    ProfessionalFees2: Yup.number().test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),

    AllOther2: Yup.number().test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
  });
  let Investment_onSubmit_Modal = (values) => {
    let myData = {
      Email: localStorage.getItem("ClientEmail"),

      TotalPropertyExpenses: 5000, //readonly
      BodyCorporateFees: values.BodyCorporateFees2,
      CouncilRates: values.CouncilRates2,
      GardeningAndLawnMowing: values.GardeningAndLawnmowing2,
      Insurance: values.Insurance2,
      LandTax: values.LandTax2,
      RepairsAndMaintenance: values.RepairsAndMaintenance2,
      WaterCharges: values.WaterCharges2,
      Other: values.Other2,
      TelephoneAndInternet: values.TelephoneAndInternet2,
      ProfessionalFees: values.ProfessionalFees2,
      AllOther: values.AllOther,
    };
    console.log(myData);

    axios
      .post(
        "http://localhost:7000/Client-InvestmentTrust/Add-Client-InvestmentPropertiesModal",
        myData
      )
      .then((res) => {
        console.log("Data Added Successfully!");
      });
    handleClose8();
  };



  useEffect(()=>{

    let email=localStorage.getItem("EditClient")

    axios
    .get(`http://localhost:7000/Client-InvestmentTrust-InvestmentForm`)
    .then((res) => {
    let clientObj=(res.data)
    let clientFilterObj=clientObj.filter((item) => item.Email ==email);
    setInvestmentFromObj(clientFilterObj[0])
     console.log(clientFilterObj);
    })




    //BankAccounts is added in get Api 
    axios
    .get(`http://localhost:7000/Client-InvestmentTrust-BankAccounts`)
    .then((res) => {
    let clientObj=(res.data)
    let clientFilterObj=clientObj.filter((item) => item.Email ==email);
    setBankAccountListObj(clientFilterObj[0])
    //  console.log(clientFilterObj);
    })

    axios
    .get(`http://localhost:7000/Client-InvestmentTrust-TermDeposit`)
    .then((res) => {
    let clientObj=(res.data)
    let clientFilterObj=clientObj.filter((item) => item.Email ==email);
    setdepositListObj(clientFilterObj[0])
    //  console.log(clientFilterObj);
    })

    axios
    .get(`http://localhost:7000/Client-InvestmentTrust-AustralianShareMarket/Australian-Market-Share`)
    .then((res) => {
    let clientObj=(res.data)
    let clientFilterObj=clientObj.filter((item) => item.Email ==email);
    // setdepositListObj(clientFilterObj[0])
    setAustralianShareList(clientFilterObj);
    //  console.log(clientFilterObj);
    })


    axios
    .get(`http://localhost:7000/Client-InvestmentTrust-AustralianSharePortfolio/Australian-Market-Portfolio`)
    .then((res) => {
    let clientObj=(res.data)
    let clientFilterObj=clientObj.filter((item) => item.Email ==email);
    // setdepositListObj(clientFilterObj[0])
    setAustralianLoanList(clientFilterObj);
    //  console.log(clientFilterObj);
    })

    axios
    .get(`http://localhost:7000/Client-InvestmentTrust-ManagedFunds/Client-ManagedFunds`)
    .then((res) => {
    let clientObj=(res.data)
    let clientFilterObj=clientObj.filter((item) => item.Email ==email);
    // setdepositListObj(clientFilterObj[0])
    setManageFundList(clientFilterObj);
    //  console.log(clientFilterObj);
    })

    axios
    .get(`http://localhost:7000/Client-InvestmentTrust-ManagedFundsPortfolio`)
    .then((res) => {
    let clientObj=(res.data)
    let clientFilterObj=clientObj.filter((item) => item.Email ==email);
    // setdepositListObj(clientFilterObj[0])
    setManageLoanList(clientFilterObj);
    //  console.log(clientFilterObj);
    })


    axios
    .get(`http://localhost:7000/Client-InvestmentTrust-InvestmentProperties`)
    .then((res) => {
    let clientObj=(res.data)
    let clientFilterObj=clientObj.filter((item) => item.Email ==email);
    // setdepositListObj(clientFilterObj[0])
    setInvestmentList(clientFilterObj);
    //  console.log(clientFilterObj);
    })

    axios
    .get(`http://localhost:7000/Client-InvestmentTrust-InvestmentProperties-Modal`)
    .then((res) => {
    let clientObj=(res.data)
    let clientFilterObj=clientObj.filter((item) => item.Email ==email);
    // setdepositListObj(clientFilterObj[0])
    setInvestmentInnerModalObj(clientFilterObj[0]);
    //  console.log(clientFilterObj);
    })


  },[])





  return (
    <>
      <div className="container-fluid">
        <div className="row px-0 m-0">
          <div className="col-md-12">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
              enableReinitialize
            >
              {({ values, handleChange, setFieldValue, handleBlur }) => (
                <Form>
                  <div className="shadow py-4 px-4 my-5">
                    <div>
                      <h3 className="text-center">Investment Trust</h3>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label
                              htmlFor="NameofFamilyTrust"
                              className="form-label"
                            >
                              Name of Family Trust
                            </label>
                            <Field
                              type="text"
                              className="form-control shadow inputDesign"
                              id="NameofFamilyTrust"
                              name="NameofFamilyTrust"
                              placeholder="Name of Family Trust"
                            />
                            <ErrorMessage
                              name="NameofFamilyTrust"
                              component="div"
                              className="text-danger fw-bold"
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="mb-3">
                            <label htmlFor="TypeofTrust" className="form-label">
                              Type of Trust
                            </label>
                            <Field
                              as="select"
                              id="TypeofTrust"
                              className="form-select shadow  inputDesign"
                              name="TypeofTrust"
                            >
                              <option value="">Select</option>
                              <option value="DiscretionaryFamilyTrust">
                                Discretionary Family Trust
                              </option>
                              <option value="Other">Other</option>
                            </Field>
                            <ErrorMessage
                              className="text-danger fw-bold"
                              component="div"
                              name="TypeofTrust"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label htmlFor="ABN" className="form-label">
                              ABN
                            </label>
                            <Field
                              type="text"
                              className="form-control shadow inputDesign"
                              id="ABN"
                              name="ABN"
                              placeholder="ABN"
                            />
                            <ErrorMessage
                              name="ABN"
                              component="div"
                              className="text-danger fw-bold"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Distribution Taken As Cash?
                            </label>
                            {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input
                                  type="radio"
                                  name="DistributionCashradio"
                                  id="DistributionCashopt1"
                                  value="Yes"
                                  onChange={handleChange}
                                  checked={
                                    values.DistributionCashradio === "Yes"
                                  }
                                />
                                <label
                                  htmlFor="DistributionCashopt1"
                                  className="label1"
                                >
                                  <span>YES</span>
                                </label>
                                <input
                                  type="radio"
                                  name="DistributionCashradio"
                                  id="DistributionCashopt2"
                                  value="No"
                                  onChange={handleChange}
                                  checked={
                                    values.DistributionCashradio === "No"
                                  }
                                />
                                <label
                                  htmlFor="DistributionCashopt2"
                                  className="label2"
                                >
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
                            <label
                              htmlFor="EstablishmentDate"
                              className="form-label"
                            >
                              Establishment Date
                            </label>
                            <div>
                              <DatePicker
                                className="form-control inputDesign shadow"
                                showIcon
                                id="EstablishmentDate"
                                name="EstablishmentDate"
                                selected={values.EstablishmentDate}
                                onChange={(date) =>
                                  setFieldValue("EstablishmentDate", date)
                                }
                                dateFormat="dd/MM/yyyy"
                                placeholderText="dd/mm/yyyy"
                                maxDate={new Date()}
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                                onBlur={handleBlur}
                              />
                            </div>
                            <ErrorMessage
                              className="text-danger fw-bold"
                              component="div"
                              name="EstablishmentDate"
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="mb-3">
                            <label
                              htmlFor="NameofAccountant"
                              className="form-label"
                            >
                              Name of Accountant
                            </label>
                            <Field
                              type="text"
                              className="form-control shadow inputDesign"
                              id="NameofAccountant"
                              name="NameofAccountant"
                              placeholder="Name of Accountant"
                            />
                            <ErrorMessage
                              name="NameofAccountant"
                              component="div"
                              className="text-danger fw-bold"
                            />
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
                              as="select"
                              id="TrusteeType"
                              className="form-select shadow  inputDesign"
                              name="TrusteeType"
                            >
                              <option value="">Select</option>
                              <option value="Individual">Individual</option>
                              <option value="Corporate">Corporate</option>
                            </Field>
                            <ErrorMessage
                              className="text-danger fw-bold"
                              component="div"
                              name="TrusteeType"
                            />
                          </div>
                        </div>

                        {values.TrusteeType === "Corporate" && (
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label
                                htmlFor="CorporateTrusteeName"
                                className="form-label"
                              >
                                Corporate Trustee Name
                              </label>
                              <Field
                                type="text"
                                className="form-control shadow inputDesign"
                                id="CorporateTrusteeName"
                                name="CorporateTrusteeName"
                                placeholder="Corporate Trustee Name"
                              />
                              <ErrorMessage
                                name="CorporateTrusteeName"
                                component="div"
                                className="text-danger fw-bold"
                              />
                            </div>
                          </div>
                        )}

                        <div className="col-md-6">
                          <div className="mb-3">
                            <label htmlFor="TrusteeType" className="form-label">
                              Number of Directors(1 to 4)
                            </label>
                            <Field
                              as="select"
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
                            <ErrorMessage
                              className="text-danger fw-bold"
                              component="div"
                              name="NumberofDirectors"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label
                              htmlFor="DirectorName1"
                              className="form-label"
                            >
                              Director Name 1
                            </label>
                            <Field
                              type="text"
                              className="form-control shadow inputDesign"
                              id="DirectorName1"
                              name="DirectorName1"
                              placeholder="Director Name 1"
                            />
                            <ErrorMessage
                              name="DirectorName1"
                              component="div"
                              className="text-danger fw-bold"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label
                              htmlFor="DirectorName2"
                              className="form-label"
                            >
                              Director Name 2
                            </label>
                            <Field
                              type="text"
                              className="form-control shadow inputDesign"
                              id="DirectorName2"
                              name="DirectorName2"
                              placeholder="Director Name 2"
                            />
                            <ErrorMessage
                              name="DirectorName2"
                              component="div"
                              className="text-danger fw-bold"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label
                              htmlFor="DirectorName3"
                              className="form-label"
                            >
                              Director Name 3
                            </label>
                            <Field
                              type="text"
                              className="form-control shadow inputDesign"
                              id="DirectorName3"
                              name="DirectorName3"
                              placeholder="Director Name 3"
                            />
                            <ErrorMessage
                              name="DirectorName3"
                              component="div"
                              className="text-danger fw-bold"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label
                              htmlFor="DirectorName4"
                              className="form-label"
                            >
                              Director Name 4
                            </label>
                            <Field
                              type="text"
                              className="form-control shadow inputDesign"
                              id="DirectorName4"
                              name="DirectorName4"
                              placeholder="Director Name 4"
                            />
                            <ErrorMessage
                              name="DirectorName4"
                              component="div"
                              className="text-danger fw-bold"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* bank accounts */}
                  <div className="shadow py-4 px-4 my-5">
                    <h3 className="text-center">Bank Accounts</h3>
                    <div className="row">
                      <div className="col-md-6">
                        <label className="form-label">
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
                      <Modal.Header className="text-light modalBG " closeButton>
                        <Modal.Title className="fontStyle">
                          Add Bank Account Details
                          <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />
                          </div>
                        </Modal.Title>
                      </Modal.Header>
                      <Formik
                        initialValues={
                          isEdit_bankAccountList
                            ? bankAccountList2[0]
                            : Bank_initialValues
                        }
                        validationSchema={Bank_validationSchema}
                        onSubmit={Bank_onSubmit}
                      >
                        {({
                          values,
                          setFieldValue,
                          setValues,
                          handleChange,
                          formik,
                        }) => (
                          <Form>
                            <Modal.Body>
                              {/* bank sccounts */}

                              <div className="">
                                {/* Bank 1 */}
                                <div className=" ">
                                  <h3 className=""> Bank #1 </h3>
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="CurrentValue1"
                                          className="form-label"
                                        >
                                          Current Value
                                        </label>
                                        <Field
                                          type="number"
                                          className="form-control shadow inputDesign"
                                          id="CurrentValue1"
                                          name="CurrentValue1"
                                          placeholder="Current Value"
                                        />
                                        <ErrorMessage
                                          component="div"
                                          className="text-danger fw-bold"
                                          name="CurrentValue1"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="FinancialInstitution1"
                                          className="form-label"
                                        >
                                          Financial Instituion
                                        </label>
                                        <Field
                                          type="text"
                                          className="form-control shadow inputDesign"
                                          id="FinancialInstitution1"
                                          name="FinancialInstitution1"
                                          placeholder="Financial Instituion"
                                        />
                                        <ErrorMessage
                                          component="div"
                                          className="text-danger fw-bold"
                                          name="FinancialInstitution1"
                                        />
                                      </div>
                                    </div>

                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="IncomeYield1"
                                          className="form-label"
                                        >
                                          Income Yield (%)
                                        </label>
                                        <Field
                                          type="number"
                                          className="form-control shadow inputDesign"
                                          id="IncomeYield1"
                                          name="IncomeYield1"
                                          placeholder="IncomeYield"
                                        />
                                        <ErrorMessage
                                          component="div"
                                          className="text-danger fw-bold"
                                          name="IncomeYield1"
                                        />
                                      </div>
                                    </div>

                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="AnnualIncome1"
                                          className="form-label"
                                        >
                                          Annual Income
                                        </label>
                                        <Field
                                          type="number"
                                          className="form-control shadow inputDesign"
                                          id="AnnualIncome1"
                                          name="AnnualIncome1"
                                          placeholder="Annual Income"
                                          readOnly={true}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* Bank 1 */}

                                {/* Bank 2 */}
                                <div className="my-2 ">
                                  <h3 className=""> Bank #2 </h3>
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="CurrentValue2"
                                          className="form-label"
                                        >
                                          Current Value
                                        </label>
                                        <Field
                                          type="number"
                                          className="form-control shadow inputDesign"
                                          id="CurrentValue2"
                                          name="CurrentValue2"
                                          placeholder="Current Value"
                                        />
                                        <ErrorMessage
                                          component="div"
                                          className="text-danger fw-bold"
                                          name="CurrentValue2"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="FinancialInstitution2"
                                          className="form-label"
                                        >
                                          Financial Instituion
                                        </label>
                                        <Field
                                          type="text"
                                          className="form-control shadow inputDesign"
                                          id="FinancialInstitution2"
                                          name="FinancialInstitution2"
                                          placeholder="Financial Instituion"
                                        />
                                        <ErrorMessage
                                          component="div"
                                          className="text-danger fw-bold"
                                          name="FinancialInstitution2"
                                        />
                                      </div>
                                    </div>

                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="IncomeYield2"
                                          className="form-label"
                                        >
                                          Income Yield (%)
                                        </label>
                                        <Field
                                          type="number"
                                          className="form-control shadow inputDesign"
                                          id="IncomeYield2"
                                          name="IncomeYield2"
                                          placeholder="IncomeYield"
                                        />
                                        <ErrorMessage
                                          component="div"
                                          className="text-danger fw-bold"
                                          name="IncomeYield2"
                                        />
                                      </div>
                                    </div>

                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="AnnualIncome2"
                                          className="form-label"
                                        >
                                          Annual Income
                                        </label>
                                        <Field
                                          type="number"
                                          className="form-control shadow inputDesign"
                                          id="AnnualIncome2"
                                          name="AnnualIncome2"
                                          placeholder="Annual Income"
                                          readOnly={true}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* Bank 2 */}

                                {/* Bank 3 */}
                                <div className="my-2 ">
                                  <h3 className=""> Bank #3 </h3>
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="CurrentValue3"
                                          className="form-label"
                                        >
                                          Current Value
                                        </label>
                                        <Field
                                          type="number"
                                          className="form-control shadow inputDesign"
                                          id="CurrentValue3"
                                          name="CurrentValue3"
                                          placeholder="Current Value"
                                        />
                                        <ErrorMessage
                                          component="div"
                                          className="text-danger fw-bold"
                                          name="CurrentValue3"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="FinancialInstitution3"
                                          className="form-label"
                                        >
                                          Financial Instituion
                                        </label>
                                        <Field
                                          type="text"
                                          className="form-control shadow inputDesign"
                                          id="FinancialInstitution3"
                                          name="FinancialInstitution3"
                                          placeholder="Financial Instituion"
                                        />
                                        <ErrorMessage
                                          component="div"
                                          className="text-danger fw-bold"
                                          name="FinancialInstitution3"
                                        />
                                      </div>
                                    </div>

                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="IncomeYield3"
                                          className="form-label"
                                        >
                                          Income Yield (%)
                                        </label>
                                        <Field
                                          type="number"
                                          className="form-control shadow inputDesign"
                                          id="IncomeYield3"
                                          name="IncomeYield3"
                                          placeholder="IncomeYield"
                                        />
                                        <ErrorMessage
                                          component="div"
                                          className="text-danger fw-bold"
                                          name="IncomeYield3"
                                        />
                                      </div>
                                    </div>

                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="AnnualIncome3"
                                          className="form-label"
                                        >
                                          Annual Income
                                        </label>
                                        <Field
                                          type="number"
                                          className="form-control shadow inputDesign"
                                          id="AnnualIncome3"
                                          name="AnnualIncome3"
                                          placeholder="Annual Income"
                                          readOnly={true}
                                        />
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
                                  type="submit"
                                >
                                  Save
                                </button>
                                <button 
                                type="button"
                                  className="float-end btn w-25  btn-outline  backBtn mx-3"
                                  onClick={handleClose}
                                >
                                  Cancel
                                </button>
                              </div>
                            </Modal.Footer>
                          </Form>
                        )}
                      </Formik>
                    </Modal>
                    {/* -------------bank accounts modal---------------------------- */}
                    {/* bankTable */}
                    <div className="table-responsive my-3">
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
                          {bankAccountList.map((elem, index) => {
                            // let {ChildName,childDoBID,childRelationship,childAge,childGender}=elem;

                            return (
                              <tr key={index}>
                                <td>{elem.CurrentValue}</td>
                                <td>{elem.FinancialInstitution}</td>
                                <td>{elem.IncomeYield}</td>
                                <td>{elem.AnnualIncome}</td>
                                <td>
                                  <button
                                    type="button"
                                    onClick={(e) =>
                                      deleteHandler_Bank(elem, index)
                                    }
                                    className="btn btn-danger btn-sm"
                                  >
                                    delete
                                  </button>
                                  <button
                                    type="button"
                                    onClick={(e) => updateHandler_Bank(elem)}
                                    className="btn btn-warning btn-sm mx-2"
                                  >
                                    update
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>

                    {/* bankTable */}
                  </div>
                  {/* bank accounts */}

                  {/* term deposit */}
                  <div className="shadow py-4 px-4 my-5">
                    <h3 className="text-center">Term Deposit</h3>
                    <div className="row">
                      <div className="col-md-6">
                        <label className="form-label">
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
                      <Modal.Header className="text-light modalBG " closeButton>
                        <Modal.Title className="fontStyle">
                          Add Term Deposit Details
                          <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />
                          </div>
                        </Modal.Title>
                      </Modal.Header>
                      <Formik
                        initialValues={
                          isEdit_deposit
                            ? deposit_InitialValue2[0]
                            : Deposit_initialValues
                        }
                        validationSchema={Deposit_validationSchema}
                        onSubmit={Deposit_onSubmit}
                      >
                        {({
                          values,
                          setFieldValue,
                          setValues,
                          handleChange,
                          formik,
                        }) => (
                          <Form>
                            <Modal.Body>
                              {/* Deposit accounts */}

                              <div className="">
                                {/* Deposit 1 */}
                                <div className=" ">
                                  <h3 className=""> Deposit #1 </h3>
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="DepositCurrentValue1"
                                          className="form-label"
                                        >
                                          Current Value
                                        </label>
                                        <Field
                                          type="number"
                                          className="form-control shadow inputDesign"
                                          id="DepositCurrentValue1"
                                          name="DepositCurrentValue1"
                                          placeholder="Current Value"
                                        />
                                        <ErrorMessage
                                          component="div"
                                          className="text-danger fw-bold"
                                          name="DepositCurrentValue1"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="DepositFinancialInstitution1"
                                          className="form-label"
                                        >
                                          Financial Instituion
                                        </label>
                                        <Field
                                          type="text"
                                          className="form-control shadow inputDesign"
                                          id="DepositFinancialInstitution1"
                                          name="DepositFinancialInstitution1"
                                          placeholder="Financial Instituion"
                                        />
                                        <ErrorMessage
                                          component="div"
                                          className="text-danger fw-bold"
                                          name="DepositFinancialInstitution1"
                                        />
                                      </div>
                                    </div>

                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="DepositIncomeYield1"
                                          className="form-label"
                                        >
                                          Income Yield (%)
                                        </label>
                                        <Field
                                          type="number"
                                          className="form-control shadow inputDesign"
                                          id="DepositIncomeYield1"
                                          name="DepositIncomeYield1"
                                          placeholder="IncomeYield"
                                        />
                                        <ErrorMessage
                                          component="div"
                                          className="text-danger fw-bold"
                                          name="DepositIncomeYield1"
                                        />
                                      </div>
                                    </div>

                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="DepositAnnualIncome1"
                                          className="form-label"
                                        >
                                          Annual Income
                                        </label>
                                        <Field
                                          type="number"
                                          className="form-control shadow inputDesign"
                                          id="DepositAnnualIncome1"
                                          name="DepositAnnualIncome1"
                                          placeholder="Annual Income"
                                          readOnly={true}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* Deposit 1 */}

                                {/* Deposit 2 */}
                                <div className="my-2 ">
                                  <h3 className=""> Deposit #2 </h3>
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="DepositCurrentValue2"
                                          className="form-label"
                                        >
                                          Current Value
                                        </label>
                                        <Field
                                          type="number"
                                          className="form-control shadow inputDesign"
                                          id="DepositCurrentValue2"
                                          name="DepositCurrentValue2"
                                          placeholder="Current Value"
                                        />
                                        <ErrorMessage
                                          component="div"
                                          className="text-danger fw-bold"
                                          name="DepositCurrentValue2"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="DepositFinancialInstitution2"
                                          className="form-label"
                                        >
                                          Financial Instituion
                                        </label>
                                        <Field
                                          type="text"
                                          className="form-control shadow inputDesign"
                                          id="DepositFinancialInstitution2"
                                          name="DepositFinancialInstitution2"
                                          placeholder="Financial Instituion"
                                        />
                                        <ErrorMessage
                                          component="div"
                                          className="text-danger fw-bold"
                                          name="DepositFinancialInstitution2"
                                        />
                                      </div>
                                    </div>

                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="DepositIncomeYield2"
                                          className="form-label"
                                        >
                                          Income Yield (%)
                                        </label>
                                        <Field
                                          type="number"
                                          className="form-control shadow inputDesign"
                                          id="DepositIncomeYield2"
                                          name="DepositIncomeYield2"
                                          placeholder="IncomeYield"
                                        />
                                        <ErrorMessage
                                          component="div"
                                          className="text-danger fw-bold"
                                          name="DepositIncomeYield2"
                                        />
                                      </div>
                                    </div>

                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="DepositAnnualIncome2"
                                          className="form-label"
                                        >
                                          Annual Income
                                        </label>
                                        <Field
                                          type="number"
                                          className="form-control shadow inputDesign"
                                          id="DepositAnnualIncome2"
                                          name="DepositAnnualIncome2"
                                          placeholder="Annual Income"
                                          readOnly={true}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* Deposit 2 */}

                                {/* Deposit 3 */}
                                <div className="my-2 ">
                                  <h3 className=""> Deposit #3 </h3>
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="DepositCurrentValue3"
                                          className="form-label"
                                        >
                                          Current Value
                                        </label>
                                        <Field
                                          type="number"
                                          className="form-control shadow inputDesign"
                                          id="DepositCurrentValue3"
                                          name="DepositCurrentValue3"
                                          placeholder="Current Value"
                                        />
                                        <ErrorMessage
                                          component="div"
                                          className="text-danger fw-bold"
                                          name="DepositCurrentValue3"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="DepositFinancialInstitution3"
                                          className="form-label"
                                        >
                                          Financial Instituion
                                        </label>
                                        <Field
                                          type="text"
                                          className="form-control shadow inputDesign"
                                          id="DepositFinancialInstitution3"
                                          name="DepositFinancialInstitution3"
                                          placeholder="Financial Instituion"
                                        />
                                        <ErrorMessage
                                          component="div"
                                          className="text-danger fw-bold"
                                          name="DepositFinancialInstitution3"
                                        />
                                      </div>
                                    </div>

                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="DepositIncomeYield3"
                                          className="form-label"
                                        >
                                          Income Yield (%)
                                        </label>
                                        <Field
                                          type="number"
                                          className="form-control shadow inputDesign"
                                          id="DepositIncomeYield3"
                                          name="DepositIncomeYield3"
                                          placeholder="IncomeYield"
                                        />
                                        <ErrorMessage
                                          component="div"
                                          className="text-danger fw-bold"
                                          name="DepositIncomeYield3"
                                        />
                                      </div>
                                    </div>

                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="DepositAnnualIncome3"
                                          className="form-label"
                                        >
                                          Annual Income
                                        </label>
                                        <Field
                                          type="number"
                                          className="form-control shadow inputDesign"
                                          id="DepositAnnualIncome3"
                                          name="DepositAnnualIncome3"
                                          placeholder="DepositAnnual Income"
                                          readOnly={true}
                                        />
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
                                  type="submit"
                                >
                                  Save
                                </button>
                                <button
                                type="button"
                                  className="float-end btn w-25  btn-outline  backBtn mx-3"
                                  onClick={handleClose2}
                                >
                                  Cancel
                                </button>
                              </div>
                            </Modal.Footer>
                          </Form>
                        )}
                      </Formik>
                    </Modal>
                    {/* -------------Deposit modal---------------------------- */}

                    {/* TermTable */}
                    <div className="table-responsive my-3">
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
                          {depositList.map((elem, index) => {
                            // let {ChildName,childDoBID,childRelationship,childAge,childGender}=elem;

                            return (
                              <tr key={index}>
                                <td>{elem.DepositCurrentValue}</td>
                                <td>{elem.DepositFinancialInstituion}</td>
                                <td>{elem.DepositIncomeYield}</td>
                                <td>{elem.DepositAnnualIncome}</td>
                                <td>
                                  <button
                                    type="button"
                                    onClick={(e) =>
                                      deleteHandler_Deposit(elem, index)
                                    }
                                    className="btn btn-danger btn-sm"
                                  >
                                    delete
                                  </button>
                                  <button
                                    type="button"
                                    onClick={(e) => updateHandler_Deposit(elem)}
                                    className="btn btn-warning btn-sm mx-2"
                                  >
                                    update
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>

                    {/* TermTable */}
                  </div>
                  {/* term deposit */}

                  {/* Australian Share Market modal */}

                  <div className="shadow py-4 px-4 my-5">
                    <h3 className="text-center">Australian Share Market</h3>
                    <div className="row">
                      <div className="col-md-6">
                        <label className="form-label">
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
                      <Modal.Header className="text-light modalBG " closeButton>
                        <Modal.Title className="fontStyle">
                          Add Share Details
                          <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />
                          </div>
                        </Modal.Title>
                      </Modal.Header>
                      <Formik
                        initialValues={
                          is_Share ? Share_initialValues2 : Share_initialValues
                        }
                        validationSchema={Share_validationSchema}
                        onSubmit={Share_onSubmit}
                      >
                        {({
                          values,
                          setFieldValue,
                          handleBlur,
                          setValues,
                          handleChange,
                          formik,
                        }) => (
                          <Form>
                            <Modal.Body>
                              {/* Share details 3rd*/}

                              <div className="">
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label
                                        htmlFor="ShareInvestmentName"
                                        className="form-label"
                                      >
                                        Investment Name
                                      </label>
                                      <Field
                                        type="text"
                                        className="form-control shadow inputDesign"
                                        id="ShareInvestmentName"
                                        name="ShareInvestmentName"
                                        placeholder="Investment Name"
                                      />
                                      <ErrorMessage
                                        component="div"
                                        className="text-danger fw-bold"
                                        name="ShareInvestmentName"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label
                                        htmlFor="NoOfShares"
                                        className="form-label"
                                      >
                                        No of Shares
                                      </label>
                                      <Field
                                        type="number"
                                        className="form-control shadow inputDesign"
                                        id="NoOfShares"
                                        name="NoOfShares"
                                        placeholder="No of Shares"
                                      />
                                      <ErrorMessage
                                        component="div"
                                        className="text-danger fw-bold"
                                        name="NoOfShares"
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label
                                        htmlFor="CurrentSharePrice"
                                        className="form-label"
                                      >
                                        Current Share Price
                                      </label>
                                      <Field
                                        type="number"
                                        className="form-control shadow inputDesign"
                                        id="CurrentSharePrice"
                                        name="CurrentSharePrice"
                                        placeholder="Current Share Price"
                                      />
                                      <ErrorMessage
                                        component="div"
                                        className="text-danger fw-bold"
                                        name="CurrentSharePrice"
                                      />
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="" className="form-label">
                                        Total Share Value
                                      </label>
                                      <Field
                                        type="number"
                                        className="form-control shadow inputDesign"
                                        id="TotalShareValue"
                                        name="TotalShareValue"
                                        placeholder="Total Share Value"
                                        readOnly={true}
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label
                                        htmlFor="CostBase"
                                        className="form-label"
                                      >
                                        Cost Base
                                      </label>
                                      <Field
                                        type="number"
                                        className="form-control shadow inputDesign"
                                        id="CostBase"
                                        name="CostBase"
                                        placeholder="Cost Base"
                                      />
                                      <ErrorMessage
                                        name="CostBase"
                                        component="div"
                                        className="text-danger fw-bold"
                                      />
                                    </div>
                                  </div>

                                  {/* datepicker */}
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label
                                        htmlFor="PurchaseDate"
                                        className="form-label"
                                      >
                                        Purchase Date Aus
                                      </label>
                                      <div>
                                        <DatePicker
                                          className="form-control inputDesign shadow"
                                          showIcon
                                          id="PurchaseDate"
                                          name="PurchaseDate"
                                          selected={values.PurchaseDate}
                                          onChange={(date) =>
                                            setFieldValue("PurchaseDate", date)
                                          }
                                          dateFormat="dd/MM/yyyy"
                                          placeholderText="dd/mm/yyyy"
                                          maxDate={new Date()}
                                          showMonthDropdown
                                          showYearDropdown
                                          dropdownMode="select"
                                          onBlur={handleBlur}
                                        />
                                      </div>
                                      <ErrorMessage
                                        className="text-danger fw-bold"
                                        component="div"
                                        name="PurchaseDate"
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="row">
                                      <div className="col-md-7">
                                        <div className="mb-3">
                                          <label
                                            htmlFor="Incomepa"
                                            className="form-label"
                                          >
                                            Income pa
                                          </label>
                                          <Field
                                            type="number"
                                            className="form-control shadow inputDesign"
                                            id="Incomepa"
                                            name="Incomepa"
                                            placeholder="Income pa"
                                          />
                                          <ErrorMessage
                                            name="Incomepa"
                                            component="div"
                                            className="text-danger fw-bold"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-5">
                                        <div className="mb-3">
                                          <label
                                            htmlFor="IncomepaType"
                                            className="form-label"
                                          >
                                            Type
                                          </label>
                                          <Field
                                            as="select"
                                            id="IncomepaType"
                                            className="form-select shadow  inputDesign"
                                            name="IncomepaType"
                                          >
                                            <option value="">Select</option>
                                            <option value="dollar">$</option>
                                            <option value="percentage">
                                              %
                                            </option>
                                          </Field>
                                          <ErrorMessage
                                            className="text-danger fw-bold"
                                            component="div"
                                            name="IncomepaType"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="" className="form-label">
                                        Total Income pa
                                      </label>
                                      <Field
                                        type="number"
                                        className="form-control shadow inputDesign"
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
                                      <label
                                        htmlFor="FrankedAmount"
                                        className="form-label"
                                      >
                                        Franked Amount %
                                      </label>
                                      <Field
                                        type="number"
                                        className="form-control shadow inputDesign"
                                        id="FrankedAmount"
                                        name="FrankedAmount"
                                        placeholder="Franked Amount"
                                      />
                                      <ErrorMessage
                                        component="div"
                                        className="text-danger fw-bold"
                                        name="FrankedAmount"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label
                                        htmlFor="RegInvestmentsPA"
                                        className="form-label"
                                      >
                                        Reg Investments pa
                                      </label>
                                      <Field
                                        type="number"
                                        className="form-control shadow inputDesign"
                                        id="RegInvestmentsPA"
                                        name="RegInvestmentsPA"
                                        placeholder="Reg Investments"
                                      />
                                      <ErrorMessage
                                        component="div"
                                        className="text-danger fw-bold"
                                        name="RegInvestmentsPA"
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Reinvest income
                                      </label>

                                      <div className="form-check form-switch m-0 p-0 ">
                                        <div className="radiobutton">
                                          <input
                                            type="radio"
                                            name="Reinvestincomeradio"
                                            className="form-check-input"
                                            id="Reinvestincomeopt1"
                                            value="Yes"
                                            onChange={handleChange}
                                            checked={
                                              values.Reinvestincomeradio ===
                                              "Yes"
                                            }
                                          />
                                          <label
                                            htmlFor="Reinvestincomeopt1"
                                            className="label1"
                                          >
                                            <span>YES</span>
                                          </label>
                                          <input
                                            type="radio"
                                            name="Reinvestincomeradio"
                                            id="Reinvestincomeopt2"
                                            className="form-check-input"
                                            value="No"
                                            onChange={handleChange}
                                            checked={
                                              values.Reinvestincomeradio ===
                                              "No"
                                            }
                                          />
                                          <label
                                            htmlFor="Reinvestincomeopt2"
                                            className="label2"
                                          >
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
                                  type="submit"
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
                        )}
                      </Formik>
                    </Modal>
                    {/* Australian Share Market modal */}

                    {/* Australian Table */}

                    <div className="table-responsive my-3">
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
                          {AustralianShareList.map((elem, index) => {
                            // let {ChildName,childDoBID,childRelationship,childAge,childGender}=elem;

                            return (
                              <tr key={index}>
                                <td>{elem.InvestmentName}</td>
                                <td>{elem.TotalShareValue}</td>
                                <td>{elem.CostBase}</td>
                                <td>{elem.IncomePA}</td>
                                <td>{elem.ReinvestIncome}</td>
                                <td>
                                  <button
                                    type="button"
                                    onClick={(e) =>
                                      deleteHandler_AustralianShare(elem, index)
                                    }
                                    className="btn btn-danger btn-sm"
                                  >
                                    delete
                                  </button>
                                  <button
                                    type="button"
                                    onClick={(e) =>
                                      updateHandler_AustralianShare(elem, index)
                                    }
                                    className="btn btn-warning btn-sm mx-2"
                                  >
                                    update
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>

                    {/* Australian Table */}

                    {/* Aus loans portfolio associated */}

                    <div className=" my-5">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label className="form-label">
                              Does your share portfolio have any loans
                              associated with them?
                            </label>
                            {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input
                                  type="radio"
                                  name="loansAssociatedradio"
                                  id="loansAssociatedopt1"
                                  onChange={handleChange}
                                  value="Yes"
                                  checked={
                                    values.loansAssociatedradio === "Yes"
                                  }
                                />
                                <label
                                  htmlFor="loansAssociatedopt1"
                                  className="label1"
                                >
                                  <span>YES</span>
                                </label>
                                <input
                                  type="radio"
                                  name="loansAssociatedradio"
                                  id="loansAssociatedopt2"
                                  onChange={handleChange}
                                  value="No"
                                  checked={values.loansAssociatedradio === "No"}
                                />
                                <label
                                  htmlFor="loansAssociatedopt2"
                                  className="label2"
                                >
                                  <span>NO</span>
                                </label>
                              </div>
                            </div>
                            {/* switch button style */}
                          </div>
                        </div>
                        {values.loansAssociatedradio === "Yes" && (
                          <div className="col-md-6 my-2">
                            <label className="form-label">
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
                          </div>
                        )}
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
                              <img
                                className="img-fluid"
                                src={notebook}
                                alt=""
                              />
                            </div>
                          </Modal.Title>
                        </Modal.Header>
                        <Formik
                          initialValues={
                            is_Loan
                              ? loan_initialValues2[0]
                              : Australian_loansAssociated_initialValues
                          }
                          validationSchema={
                            Australian_loansAssociated_validationSchema
                          }
                          onSubmit={Australian_loansAssociated_onSubmit}
                        >
                          {({
                            values,
                            setFieldValue,
                            handleBlur,
                            setValues,
                            handleChange,
                            formik,
                          }) => (
                            <Form>
                              <Modal.Body>
                                {/* Share details 3rd*/}

                                <div className="">
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="AustralianPortfolioLoanType"
                                          className="form-label"
                                        >
                                          Type of loan aus loan
                                        </label>
                                        <Field
                                          as="select"
                                          id="AustralianPortfolioLoanType"
                                          className="form-select shadow  inputDesign"
                                          name="AustralianPortfolioLoanType"
                                        >
                                          <option value="">Select</option>
                                          <option value="InvestmentLoan">
                                            Investment Loan
                                          </option>
                                        </Field>
                                        <ErrorMessage
                                          className="text-danger fw-bold"
                                          component="div"
                                          name="AustralianPortfolioLoanType"
                                        />
                                      </div>
                                    </div>

                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="AustralianPortfolioCurrentBalance"
                                          className="form-label"
                                        >
                                          Current Balance
                                        </label>
                                        <Field
                                          type="number"
                                          className="form-control shadow inputDesign"
                                          id="AustralianPortfolioCurrentBalance"
                                          name="AustralianPortfolioCurrentBalance"
                                          placeholder="Current Balance"
                                        />
                                        <ErrorMessage
                                          className="text-danger fw-bold"
                                          component="div"
                                          name="AustralianPortfolioCurrentBalance"
                                        />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="AustralianPortfolioLender"
                                          className="form-label"
                                        >
                                          Lender
                                        </label>
                                        <Field
                                          type="text"
                                          className="form-control shadow inputDesign"
                                          id="AustralianPortfolioLender"
                                          name="AustralianPortfolioLender"
                                          placeholder="Lender"
                                        />
                                        <ErrorMessage
                                          component="div"
                                          className="text-danger fw-bold"
                                          name="AustralianPortfolioLender"
                                        />
                                      </div>
                                    </div>

                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="AustralianPortfolioRepaymentAmount"
                                          className="form-label"
                                        >
                                          Repayments Amount
                                        </label>
                                        <Field
                                          type="number"
                                          className="form-control shadow inputDesign"
                                          id="AustralianPortfolioRepaymentAmount"
                                          name="AustralianPortfolioRepaymentAmount"
                                          placeholder="Repayments Amount"
                                        />
                                        <ErrorMessage
                                          component="div"
                                          className="text-danger fw-bold"
                                          name="AustralianPortfolioRepaymentAmount"
                                        />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="AustralianPortfolioFrequency"
                                          className="form-label"
                                        >
                                          Frequency
                                        </label>
                                        <Field
                                          as="select"
                                          id="AustralianPortfolioFrequency"
                                          className="form-select shadow  inputDesign"
                                          name="AustralianPortfolioFrequency"
                                        >
                                          <option value="">Select</option>
                                          <option value="Weekly">
                                            {" "}
                                            Weekly
                                          </option>
                                          <option value="Fortnightly">
                                            Fortnightly
                                          </option>
                                          <option value="Monthly">
                                            Monthly
                                          </option>
                                          <option value="Annually">
                                            Annually
                                          </option>
                                        </Field>
                                        <ErrorMessage
                                          className="text-danger fw-bold"
                                          component="div"
                                          name="AustralianPortfolioFrequency"
                                        />
                                      </div>
                                    </div>

                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor=""
                                          className="form-label"
                                        >
                                          Annual Repayments
                                        </label>
                                        <Field
                                          type="number"
                                          className="form-control shadow inputDesign"
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
                                        <label
                                          htmlFor="AustralianInterestRatePA"
                                          className="form-label"
                                        >
                                          Interest Rate (p.a)
                                        </label>
                                        <Field
                                          type="number"
                                          className="form-control shadow inputDesign"
                                          id="AustralianInterestRatePA"
                                          name="AustralianInterestRatePA"
                                          placeholder="Current Balance"
                                        />
                                        <ErrorMessage
                                          className="text-danger fw-bold"
                                          component="div"
                                          name="AustralianInterestRatePA"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="AustralianPortfolioLoanTerm"
                                          className="form-label"
                                        >
                                          Loan Term (1-30 Years)
                                        </label>
                                        <Field
                                          as="select"
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
                                        <ErrorMessage
                                          className="text-danger fw-bold"
                                          component="div"
                                          name="AustralianPortfolioLoanTerm"
                                        />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="AustralianPortfolioLoanType2"
                                          className="form-label"
                                        >
                                          Loan Type
                                        </label>
                                        <Field
                                          as="select"
                                          id="AustralianPortfolioLoanType2"
                                          className="form-select shadow  inputDesign"
                                          name="AustralianPortfolioLoanType2"
                                        >
                                          <option value="">Select</option>
                                          <option value="IByOnly">
                                            I/Only
                                          </option>
                                          <option value="P&I">P&I</option>
                                        </Field>
                                        <ErrorMessage
                                          className="text-danger fw-bold"
                                          component="div"
                                          name="AustralianPortfolioLoanType2"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="AustralianPortfolioDeductibleLoanAmount"
                                          className="form-label"
                                        >
                                          Deductible Amount of Loan (%)
                                        </label>
                                        <Field
                                          type="number"
                                          className="form-control shadow inputDesign"
                                          id="AustralianPortfolioDeductibleLoanAmount"
                                          name="AustralianPortfolioDeductibleLoanAmount"
                                          placeholder="Deductible Amount of Loan"
                                        />
                                        <ErrorMessage
                                          className="text-danger fw-bold"
                                          component="div"
                                          name="AustralianPortfolioDeductibleLoanAmount"
                                        />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="AustralianPortfolioYearRemaining"
                                          className="form-label"
                                        >
                                          Year Remaning (1-30 Years)
                                        </label>
                                        <Field
                                          as="select"
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
                                        <ErrorMessage
                                          className="text-danger fw-bold"
                                          component="div"
                                          name="AustralianPortfolioYearRemaining"
                                        />
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
                                    type="submit"
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
                          )}
                        </Formik>
                      </Modal>
                      {/* loans associated modal */}

                      {/* Australian Table */}

                      <div className="table-responsive my-3">
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
                            {AustralianLoanList.map((elem, index) => {
                              return (
                                <tr key={index}>
                                  <td>{elem.AustralianPortfolioLoanType}</td>
                                  <td>
                                    {elem.AustralianPortfolioCurrentBalance}
                                  </td>
                                  <td>{elem.AustralianPortfolioLender}</td>
                                  <td>
                                    {elem.AustralianPortfolioRepaymentAmount}
                                  </td>
                                  <td>{elem.AustralianInterestRatePA}</td>
                                  <td>
                                    <button
                                      type="button"
                                      onClick={(e) =>
                                        deleteHandler_AustralianLoan(
                                          elem,
                                          index
                                        )
                                      }
                                      className="btn btn-danger btn-sm"
                                    >
                                      delete
                                    </button>
                                    <button
                                      type="button"
                                      onClick={(e) =>
                                        updateHandler_AustralianLoan(
                                          elem,
                                          index
                                        )
                                      }
                                      className="btn btn-warning btn-sm mx-2"
                                    >
                                      update
                                    </button>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>

                      {/* Australian TableLoan */}
                    </div>
                    {/*  Aus loans portfolio associated */}
                  </div>
                  {/* Australian Share Market */}

                  {/*Manage Funds */}
                  <div className="shadow py-4 px-4 my-5">
                    <h3 className="text-center">Managed Funds</h3>
                    <div className="row">
                      <div className="col-md-6">
                        <label className="form-label">
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
                      <Modal.Header className="text-light modalBG " closeButton>
                        <Modal.Title className="fontStyle">
                          Add Managed Fund Details
                          <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />
                          </div>
                        </Modal.Title>
                      </Modal.Header>
                      <Formik
                        initialValues={is_manageFund ? manageFund_initialValues2[0] : manageFund_initialValues}
                        validationSchema={manageFund_validationSchema}
                        onSubmit={manageFund_onSubmit}
                      >
                        {({
                          values,
                          setFieldValue,
                          handleBlur,
                          setValues,
                          handleChange,
                          formik,
                        }) => (
                          <Form>
                            <Modal.Body>
                              {/* Share details 3rd*/}

                              <div className="">
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label
                                        htmlFor="PlatformName"
                                        className="form-label"
                                      >
                                        Platform Name
                                      </label>
                                      <Field
                                        as="select"
                                        id="PlatformName"
                                        className="form-select shadow  inputDesign"
                                        name="PlatformName"
                                      >
                                        <option value="">Platform Name</option>
                                        <option value="NorthInvestmentsChoice">
                                          AMP My North Investments -Choice
                                        </option>
                                        <option value="NorthInvestmentsCore">
                                          AMP My North Investments -Core
                                        </option>
                                        <option value="NorthInvestmentsSelect">
                                          AMP My North Investments -Select
                                        </option>
                                        <option value="FristchoiceWholesaleInvestments">
                                          Colonial First State - Fristchoice
                                          Wholesale Investments
                                        </option>
                                        <option value="DirectManagedFunds">
                                          Direct Managed Funds{" "}
                                        </option>
                                        <option value="ExchangeTradedFundsETF">
                                          Exchange-Traded Funds (ETF’s)
                                        </option>
                                      </Field>
                                      <ErrorMessage
                                        className="text-danger fw-bold"
                                        component="div"
                                        name="PlatformName"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label
                                        htmlFor="InvestmentName"
                                        className="form-label"
                                      >
                                        Investment Name
                                      </label>
                                      <Field
                                        type="text"
                                        className="form-control shadow inputDesign"
                                        id="InvestmentName"
                                        name="InvestmentName"
                                        placeholder="Investment Name"
                                      />
                                      <ErrorMessage
                                        component="div"
                                        className="text-danger fw-bold"
                                        name="InvestmentName"
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label
                                        htmlFor="NoOfUnitsShares"
                                        className="form-label"
                                      >
                                        No of Units/Shares
                                      </label>
                                      <Field
                                        type="number"
                                        className="form-control shadow inputDesign"
                                        id="NoOfUnitsShares"
                                        name="NoOfUnitsShares"
                                        placeholder="No of Units/Shares"
                                      />
                                      <ErrorMessage
                                        component="div"
                                        className="text-danger fw-bold"
                                        name="NoOfUnitsShares"
                                      />
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label
                                        htmlFor="CurrentShareUnitPrice"
                                        className="form-label"
                                      >
                                        Current share/Unit Price
                                      </label>
                                      <Field
                                        type="number"
                                        className="form-control shadow inputDesign"
                                        id="CurrentShareUnitPrice"
                                        name="CurrentShareUnitPrice"
                                        placeholder="Total Share Value"
                                      />
                                      <ErrorMessage
                                        component="div"
                                        className="text-danger fw-bold"
                                        name="CurrentShareUnitPrice"
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="" className="form-label">
                                        Current Value
                                      </label>
                                      <Field
                                        type="number"
                                        className="form-control shadow inputDesign"
                                        id="managedCurrentValue"
                                        name="managedCurrentValue"
                                        placeholder="Current Value"
                                        readOnly={true}
                                      />
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label
                                        htmlFor="OriginalInvestment"
                                        className="form-label"
                                      >
                                        Original Investment
                                      </label>
                                      <Field
                                        type="number"
                                        className="form-control shadow inputDesign"
                                        id="OriginalInvestment"
                                        name="OriginalInvestment"
                                        placeholder="Original Investment"
                                      />
                                      <ErrorMessage
                                        component="div"
                                        className="text-danger fw-bold"
                                        name="OriginalInvestment"
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="row">
                                  {/* datepicker */}
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label
                                        htmlFor="managedPurchaseDate"
                                        className="form-label"
                                      >
                                        Purchase Date 123
                                      </label>
                                      <div>
                                        <DatePicker
                                          className="form-control inputDesign shadow"
                                          showIcon
                                          id="managedPurchaseDate"
                                          name="managedPurchaseDate"
                                          selected={values.managedPurchaseDate}
                                          onChange={(date) =>
                                            setFieldValue(
                                              "managedPurchaseDate",
                                              date
                                            )
                                          }
                                          dateFormat="dd/MM/yyyy"
                                          placeholderText="dd/mm/yyyy"
                                          maxDate={new Date()}
                                          showMonthDropdown
                                          showYearDropdown
                                          dropdownMode="select"
                                          onBlur={handleBlur}
                                        />
                                      </div>
                                      <ErrorMessage
                                        className="text-danger fw-bold"
                                        component="div"
                                        name="managedPurchaseDate"
                                      />
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div className="row">
                                      <div className="col-md-7">
                                        <div className="mb-3">
                                          <label
                                            htmlFor="managedIncomepa"
                                            className="form-label"
                                          >
                                            Income pa
                                          </label>
                                          <Field
                                            type="number"
                                            className="form-control shadow inputDesign"
                                            id="managedIncomepa"
                                            name="managedIncomepa"
                                            placeholder="Income pa"
                                          />
                                          <ErrorMessage
                                            name="managedIncomepa"
                                            component="div"
                                            className="text-danger fw-bold"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-5">
                                        <div className="mb-3">
                                          <label
                                            htmlFor="managedIncomepaType"
                                            className="form-label"
                                          >
                                            Type
                                          </label>
                                          <Field
                                            as="select"
                                            id="managedIncomepaType"
                                            className="form-select shadow  inputDesign"
                                            name="managedIncomepaType"
                                          >
                                            <option value="">Select</option>
                                            <option value="dollar">$</option>
                                            <option value="percentage">
                                              %
                                            </option>
                                          </Field>
                                          <ErrorMessage
                                            className="text-danger fw-bold"
                                            component="div"
                                            name="managedIncomepaType"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="" className="form-label">
                                        Total Income pa
                                      </label>
                                      <Field
                                        type="number"
                                        className="form-control shadow inputDesign"
                                        id="managedTotalIncomePA"
                                        name="managedTotalIncomePA"
                                        placeholder="Total Income pa"
                                        readOnly={true}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label
                                        htmlFor="managedRegInvestmentsPA"
                                        className="form-label"
                                      >
                                        Reg Investments pa
                                      </label>
                                      <Field
                                        type="number"
                                        className="form-control shadow inputDesign"
                                        id="managedRegInvestmentsPA"
                                        name="managedRegInvestmentsPA"
                                        placeholder="Reg Investments"
                                      />
                                      <ErrorMessage
                                        component="div"
                                        className="text-danger fw-bold"
                                        name="managedRegInvestmentsPA"
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Reinvest income
                                      </label>

                                      <div className="form-check form-switch m-0 p-0 ">
                                        <div className="radiobutton">
                                          <input
                                            type="radio"
                                            name="managedReinvestincomeradio"
                                            className="form-check-input"
                                            id="Reinvestincomeopt1"
                                            value="Yes"
                                            onChange={handleChange}
                                            checked={
                                              values.managedReinvestincomeradio ===
                                              "Yes"
                                            }
                                          />
                                          <label
                                            htmlFor="Reinvestincomeopt1"
                                            className="label1"
                                          >
                                            <span>YES</span>
                                          </label>
                                          <input
                                            type="radio"
                                            name="managedReinvestincomeradio"
                                            id="Reinvestincomeopt2"
                                            className="form-check-input"
                                            value="No"
                                            onChange={handleChange}
                                            checked={
                                              values.managedReinvestincomeradio ===
                                              "No"
                                            }
                                          />
                                          <label
                                            htmlFor="Reinvestincomeopt2"
                                            className="label2"
                                          >
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
                                  type="submit"
                                >
                                  Save
                                </button>
                                <button
                                type="button"
                                  className="float-end btn w-25  btn-outline  backBtn mx-3"
                                  onClick={handleClose5}
                                >
                                  Cancel
                                </button>
                              </div>
                            </Modal.Footer>
                          </Form>
                        )}
                      </Formik>
                    </Modal>
                    {/* managed modal */}

                    {/* manageFund Table */}

                    <div className="table-responsive my-3">
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
                          {manageFundList.map((elem, index) => {
                            // let {ChildName,childDoBID,childRelationship,childAge,childGender}=elem;

                            return (
                              <tr key={index}>
                                <td>{elem.PlatformName}</td>
                                <td>{elem.CurrentShareValue}</td>
                                <td>{elem.OriginalInvestment}</td>
                                <td>
                                  <button
                                    type="button"
                                    onClick={(e) =>
                                      deleteHandler_ManageFund(elem, index)
                                    }
                                    className="btn btn-danger btn-sm"
                                  >
                                    delete
                                  </button>
                                  <button
                                    type="button"
                                    onClick={(e) =>
                                      updateHandler_ManageFund(elem, index)
                                    }
                                    className="btn btn-warning btn-sm mx-2"
                                  >
                                    update
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>

                    {/* manageFund table */}

                    {/*managed  loans associated */}

                    <div className=" my-5">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Do you managed funds have any loan associated with
                              them?
                            </label>
                            {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input
                                  type="radio"
                                  name="managedloansAssociatedradio"
                                  id="managedloansAssociatedopt1"
                                  onChange={handleChange}
                                  value="Yes"
                                  checked={
                                    values.managedloansAssociatedradio === "Yes"
                                  }
                                />
                                <label
                                  htmlFor="managedloansAssociatedopt1"
                                  className="label1"
                                >
                                  <span>YES</span>
                                </label>
                                <input
                                  type="radio"
                                  name="managedloansAssociatedradio"
                                  id="managedloansAssociatedopt2"
                                  onChange={handleChange}
                                  value="No"
                                  checked={
                                    values.managedloansAssociatedradio === "No"
                                  }
                                />
                                <label
                                  htmlFor="managedloansAssociatedopt2"
                                  className="label2"
                                >
                                  <span>NO</span>
                                </label>
                              </div>
                            </div>
                            {/* switch button style */}
                          </div>
                        </div>
                        {values.managedloansAssociatedradio === "Yes" && (
                          <div className="col-md-6 my-2">
                            <label className="form-label">
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
                          </div>
                        )}
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
                              <img
                                className="img-fluid"
                                src={notebook}
                                alt=""
                              />
                            </div>
                          </Modal.Title>
                        </Modal.Header>
                        <Formik
                          initialValues={is_manageLoan ? manageloan_initialValues2[0] :managed_initialValues}
                          validationSchema={managed_validationSchema}
                          onSubmit={managed_onSubmit}
                        >
                          {({
                            values,
                            setFieldValue,
                            handleBlur,
                            setValues,
                            handleChange,
                            formik,
                          }) => (
                            <Form>
                              <Modal.Body>
                                {/* Share details 3rd*/}

                                <div className="">
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="Typeofloan"
                                          className="form-label"
                                        >
                                          Type of loan Manage loan
                                        </label>
                                        <Field
                                          as="select"
                                          id="Typeofloan"
                                          className="form-select shadow  inputDesign"
                                          name="Typeofloan"
                                        >
                                          <option value="">Select</option>
                                          <option value="InvestmentLoan">
                                            Investment Loan
                                          </option>
                                        </Field>
                                        <ErrorMessage
                                          className="text-danger fw-bold"
                                          component="div"
                                          name="Typeofloan"
                                        />
                                      </div>
                                    </div>

                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="CurrentBalance"
                                          className="form-label"
                                        >
                                          Current Balance
                                        </label>
                                        <Field
                                          type="number"
                                          className="form-control shadow inputDesign"
                                          id="CurrentBalance"
                                          name="CurrentBalance"
                                          placeholder="Current Balance"
                                        />
                                        <ErrorMessage
                                          className="text-danger fw-bold"
                                          component="div"
                                          name="CurrentBalance"
                                        />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="Lender"
                                          className="form-label"
                                        >
                                          Lender
                                        </label>
                                        <Field
                                          type="text"
                                          className="form-control shadow inputDesign"
                                          id="Lender"
                                          name="Lender"
                                          placeholder="Lender"
                                        />
                                        <ErrorMessage
                                          component="div"
                                          className="text-danger fw-bold"
                                          name="Lender"
                                        />
                                      </div>
                                    </div>

                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="RepaymentsAmount"
                                          className="form-label"
                                        >
                                          Repayments Amount
                                        </label>
                                        <Field
                                          type="number"
                                          className="form-control shadow inputDesign"
                                          id="RepaymentsAmount"
                                          name="RepaymentsAmount"
                                          placeholder="Repayments Amount"
                                        />
                                        <ErrorMessage
                                          component="div"
                                          className="text-danger fw-bold"
                                          name="RepaymentsAmount"
                                        />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="Frequency"
                                          className="form-label"
                                        >
                                          Frequency
                                        </label>
                                        <Field
                                          as="select"
                                          id="Frequency"
                                          className="form-select shadow  inputDesign"
                                          name="Frequency"
                                        >
                                          <option value="">Select</option>
                                          <option value="Weekly">
                                            {" "}
                                            Weekly
                                          </option>
                                          <option value="Fortnightly">
                                            Fortnightly
                                          </option>
                                          <option value="Monthly">
                                            Monthly
                                          </option>
                                          <option value="Annually">
                                            Annually
                                          </option>
                                        </Field>
                                        <ErrorMessage
                                          className="text-danger fw-bold"
                                          component="div"
                                          name="Frequency"
                                        />
                                      </div>
                                    </div>

                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor=""
                                          className="form-label"
                                        >
                                          Annual Repayments
                                        </label>
                                        <Field
                                          type="number"
                                          className="form-control shadow inputDesign"
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
                                        <label
                                          htmlFor="InterestRatePA"
                                          className="form-label"
                                        >
                                          Interest Rate (p.a)
                                        </label>
                                        <Field
                                          type="number"
                                          className="form-control shadow inputDesign"
                                          id="InterestRatePA"
                                          name="InterestRatePA"
                                          placeholder="Current Balance"
                                        />
                                        <ErrorMessage
                                          className="text-danger fw-bold"
                                          component="div"
                                          name="InterestRatePA"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="LoanTermInYears"
                                          className="form-label"
                                        >
                                          Loan Term (1-30 Years)
                                        </label>
                                        <Field
                                          as="select"
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
                                        <ErrorMessage
                                          className="text-danger fw-bold"
                                          component="div"
                                          name="LoanTermInYears"
                                        />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="LoanType"
                                          className="form-label"
                                        >
                                          Loan Type
                                        </label>
                                        <Field
                                          as="select"
                                          id="LoanType"
                                          className="form-select shadow  inputDesign"
                                          name="LoanType"
                                        >
                                          <option value="">Select</option>
                                          <option value="IByOnly">
                                            I/Only
                                          </option>
                                          <option value="P&I">P&I</option>
                                        </Field>
                                        <ErrorMessage
                                          className="text-danger fw-bold"
                                          component="div"
                                          name="LoanType"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="DeductibleAmountofLoan"
                                          className="form-label"
                                        >
                                          Deductible Amount of Loan (%)
                                        </label>
                                        <Field
                                          type="number"
                                          className="form-control shadow inputDesign"
                                          id="DeductibleAmountofLoan"
                                          name="DeductibleAmountofLoan"
                                          placeholder="Deductible Amount of Loan"
                                        />
                                        <ErrorMessage
                                          className="text-danger fw-bold"
                                          component="div"
                                          name="DeductibleAmountofLoan"
                                        />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="YearRemaning"
                                          className="form-label"
                                        >
                                          Year Remaning (1-30 Years)
                                        </label>
                                        <Field
                                          as="select"
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
                                        <ErrorMessage
                                          className="text-danger fw-bold"
                                          component="div"
                                          name="YearRemaning"
                                        />
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
                                    type="submit"
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
                          )}
                        </Formik>
                      </Modal>
                      {/*Manage loans associated modal */}
                    </div>
                    {/* Manage loans associated */}

                    {/* manageLoan Table */}

                    <div className="table-responsive">
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
                          {manageLoanList.map((elem, index) => {
                            // let {ChildName,childDoBID,childRelationship,childAge,childGender}=elem;

                            return (
                              <tr key={index}>
                                <td>{elem.ManagedFundsPortfolioLoanType}</td>
                                <td>{elem.ManagedFundsPortfolioCurrentBalance} </td>
                                <td>{elem.ManagedFundsPortfolioLender}</td>
                                <td> {elem.ManagedFundsPortfolioRepaymentAmount} </td>
                                <td>{elem.ManagedFundsPortfolioInterestRatePA}</td>
                                <td>
                                  <button type="button" onClick={(e) => deleteHandler_ManageLoan(elem, index)} className="btn btn-danger btn-sm mt-1">
                                    delete
                                  </button>
                                  <button type="button" onClick={(e) => updateHandler_ManageLoan(elem, index)} className="btn btn-warning btn-sm mx-2 mt-1">
                                    update
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>

                    {/* manageLoan TableLoan */}
                  </div>
                  {/*Manage Funds */}

                  {/* investment Properties */}

                  <div className="shadow py-4 px-4 my-5">
                    <h3 className="text-center">InvestMent properties</h3>
                    <div className="row">
                      <div className="col-md-6">
                        <label className="form-label">
                          Please Enter Details
                        </label>
                        <br />

                        <button
                          className=" btn
                            btn-outline-success "
                          type="button"
                          onClick={handleShow7}
                        >
                          <div className="iconContainer mx-1">
                            <img className="img-fluid" src={plus} alt="" />
                          </div>
                          Enter Details lastmodal
                        </button>
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
                      <Modal.Header className="text-light modalBG " closeButton>
                        <Modal.Title className="fontStyle">
                          Investments Properties Details
                          <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />
                          </div>
                        </Modal.Title>
                      </Modal.Header>
                      <Formik
                        initialValues={is_investment ? investment_initialValues2[0] : Investment_initialValues}
                        validationSchema={Investment_validationSchema}
                        onSubmit={Investment_onSubmit}
                      >
                        {({
                          values,
                          setFieldValue,
                          setValues,
                          handleChange,
                          formik,
                        }) => (
                          <Form>
                            <Modal.Body>
                              <div className="">
                                <div className=" ">
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="InvestmentCurrentValue"
                                          className="form-label"
                                        >
                                          Current Value
                                        </label>
                                        <Field
                                          type="number"
                                          className="form-control shadow inputDesign"
                                          id="InvestmentCurrentValue"
                                          name="InvestmentCurrentValue"
                                          placeholder="Current Value"
                                        />
                                        <ErrorMessage
                                          component="div"
                                          className="text-danger fw-bold"
                                          name="InvestmentCurrentValue"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="InvestmentCostBasePurchasePrice"
                                          className="form-label"
                                        >
                                          Cost Base/(Purchase Price)
                                        </label>
                                        <Field
                                          type="number"
                                          className="form-control shadow inputDesign"
                                          id="InvestmentCostBasePurchasePrice"
                                          name="InvestmentCostBasePurchasePrice"
                                          placeholder="Cost Base/(Purchase Price)"
                                        />
                                        <ErrorMessage
                                          component="div"
                                          className="text-danger fw-bold"
                                          name="InvestmentCostBasePurchasePrice"
                                        />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="InvestmentPropertyAddress"
                                          className="form-label"
                                        >
                                          Property Address
                                        </label>
                                        <Field
                                          type="text"
                                          className="form-control shadow inputDesign"
                                          id="InvestmentPropertyAddress"
                                          name="InvestmentPropertyAddress"
                                          placeholder="Property Address"
                                        />
                                        <ErrorMessage
                                          component="div"
                                          className="text-danger fw-bold"
                                          name="InvestmentPropertyAddress"
                                        />
                                      </div>
                                    </div>

                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="investmentPostcodeSuburb"
                                          className="form-label"
                                        >
                                          Postcode/Suburb
                                        </label>
                                        <Field
                                          type="number"
                                          className="form-control shadow inputDesign"
                                          id="investmentPostcodeSuburb"
                                          name="investmentPostcodeSuburb"
                                          placeholder="Postcode/Suburb"
                                        />
                                        <ErrorMessage
                                          component="div"
                                          className="text-danger fw-bold"
                                          name="investmentPostcodeSuburb"
                                        />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="InvestmentRentalIncome"
                                          className="form-label"
                                        >
                                          Rental Income
                                        </label>
                                        <Field
                                          type="number"
                                          className="form-control shadow inputDesign"
                                          id="InvestmentRentalIncome"
                                          name="InvestmentRentalIncome"
                                          placeholder="Rental Income"
                                        />
                                        <ErrorMessage
                                          component="div"
                                          className="text-danger fw-bold"
                                          name="InvestmentRentalIncome"
                                        />
                                      </div>
                                    </div>

                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="InvestmentFrequency"
                                          className="form-label"
                                        >
                                          Frequency
                                        </label>
                                        <Field
                                          as="select"
                                          id="InvestmentFrequency"
                                          className="form-select shadow  inputDesign"
                                          name="InvestmentFrequency"
                                        >
                                          <option value="">Select</option>
                                          <option value="Weekly">Weekly</option>
                                        </Field>
                                        <ErrorMessage
                                          className="text-danger fw-bold"
                                          component="div"
                                          name="InvestmentFrequency"
                                        />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="InvestmentTotalAnnualIncome"
                                          className="form-label"
                                        >
                                          Total Annual Income
                                        </label>
                                        <Field
                                          type="number"
                                          className="form-control shadow inputDesign"
                                          id="InvestmentTotalAnnualIncome"
                                          name="InvestmentTotalAnnualIncome"
                                          placeholder="Total Annual Income"
                                          readOnly={true}
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="InvestmentExpensesPA"
                                          className="form-label"
                                        >
                                          Expenses (p.a)
                                        </label>
                                        <Field
                                          type="number"
                                          className="form-control shadow inputDesign"
                                          id="InvestmentExpensesPA"
                                          name="InvestmentExpensesPA"
                                          placeholder="Expenses (p.a)"
                                        />
                                        <ErrorMessage
                                          component="div"
                                          className="text-danger fw-bold"
                                          name="InvestmentExpensesPA"
                                        />
                                      </div>
                                    </div>
                                  </div>

                                  {/*Investment  ModalAdded */}

                                  {/*Investment ModalAdded */}
                                  {/* myradio */}
                                  <div className="row">
                                    <div className="col-md-6">
                                      <label className="form-label">
                                        Please Enter Term Deposit Detail
                                      </label>
                                      <br />

                                      <span
                                        className=" btn h-50 w-50
                            btn-outline-success "
                                        onClick={handleShow8}
                                      >
                                        <div className="iconContainer mx-1">
                                          <img
                                            className="img-fluid"
                                            src={plus}
                                            alt=""
                                          />
                                        </div>
                                        Enter Details
                                      </span>
                                    </div>

                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <label className="form-label">
                                          Does this property have a loan
                                          attached to it?
                                        </label>

                                        <div className="form-check form-switch m-0 p-0 ">
                                          <div className="radiobutton">
                                            <input
                                              type="radio"
                                              name="loanAttachedradio"
                                              className="form-check-input"
                                              id="loanAttachedopt1"
                                              value="Yes"
                                              onChange={handleChange}
                                              checked={
                                                values.loanAttachedradio ===
                                                "Yes"
                                              }
                                            />
                                            <label
                                              htmlFor="loanAttachedopt1"
                                              className="label1"
                                            >
                                              <span>YES</span>
                                            </label>
                                            <input
                                              type="radio"
                                              name="loanAttachedradio"
                                              id="loanAttachedopt2"
                                              className="form-check-input"
                                              value="No"
                                              onChange={handleChange}
                                              checked={
                                                values.loanAttachedradio ===
                                                "No"
                                              }
                                            />
                                            <label
                                              htmlFor="loanAttachedopt2"
                                              className="label2"
                                            >
                                              <span>NO</span>
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {values.loanAttachedradio === "Yes" && (
                                    <div>
                                      <div className="row">
                                        <div className="col-md-6">
                                          <div className="mb-3">
                                            <label
                                              htmlFor="InvestmentCurrentBalance"
                                              className="form-label"
                                            >
                                              Current Balance
                                            </label>
                                            <Field
                                              type="number"
                                              className="form-control shadow inputDesign"
                                              id="InvestmentCurrentBalance"
                                              name="InvestmentCurrentBalance"
                                              placeholder="Current Balance"
                                            />
                                            <ErrorMessage
                                              component="div"
                                              className="text-danger fw-bold"
                                              name="InvestmentCurrentBalance"
                                            />
                                          </div>
                                        </div>
                                        <div className="col-md-6">
                                          <div className="mb-3">
                                            <label
                                              htmlFor="InvestmentLender"
                                              className="form-label"
                                            >
                                              Lender
                                            </label>
                                            <Field
                                              type="text"
                                              className="form-control shadow inputDesign"
                                              id="InvestmentLender"
                                              name="InvestmentLender"
                                              placeholder="Lender"
                                            />
                                            <ErrorMessage
                                              component="div"
                                              className="text-danger fw-bold"
                                              name="InvestmentLender"
                                            />
                                          </div>
                                        </div>
                                      </div>

                                      <div className="row">
                                        <div className="col-md-6">
                                          <div className="mb-3">
                                            <label
                                              htmlFor="InvestmentRepaymentsAmount"
                                              className="form-label"
                                            >
                                              Repayments Amount
                                            </label>
                                            <Field
                                              type="number"
                                              className="form-control shadow inputDesign"
                                              id="InvestmentRepaymentsAmount"
                                              name="InvestmentRepaymentsAmount"
                                              placeholder="Repayments Amount"
                                            />
                                            <ErrorMessage
                                              component="div"
                                              className="text-danger fw-bold"
                                              name="InvestmentRepaymentsAmount"
                                            />
                                          </div>
                                        </div>
                                        <div className="col-md-6">
                                          <div className="mb-3">
                                            <label
                                              htmlFor="InvestmentFrequencyRadio"
                                              className="form-label"
                                            >
                                              Frequency
                                            </label>
                                            <Field
                                              as="select"
                                              id="InvestmentFrequencyRadio"
                                              className="form-select shadow  inputDesign"
                                              name="InvestmentFrequencyRadio"
                                            >
                                              <option value="">Select</option>
                                              <option value="Weekly">
                                                Weekly
                                              </option>
                                              <option value="monthly">
                                                Monthly
                                              </option>
                                            </Field>
                                            <ErrorMessage
                                              className="text-danger fw-bold"
                                              component="div"
                                              name="InvestmentFrequencyRadio"
                                            />
                                          </div>
                                        </div>
                                      </div>

                                      <div className="row">
                                        <div className="col-md-6">
                                          <div className="mb-3">
                                            <label
                                              htmlFor="InvestmentAnnualRepayments"
                                              className="form-label"
                                            >
                                              Annual Repayments
                                            </label>
                                            <Field
                                              type="number"
                                              className="form-control shadow inputDesign"
                                              id="InvestmentAnnualRepayments"
                                              name="InvestmentAnnualRepayments"
                                              placeholder="Annual Repayments"
                                            />
                                            <ErrorMessage
                                              component="div"
                                              className="text-danger fw-bold"
                                              name="InvestmentRepaymentsAmount"
                                            />
                                          </div>
                                        </div>
                                        <div className="col-md-6">
                                          <div className="mb-3">
                                            <label
                                              htmlFor="InvestmentInterestRatePA"
                                              className="form-label"
                                            >
                                              Interest Rate (p.a)
                                            </label>
                                            <Field
                                              type="number"
                                              className="form-control shadow inputDesign"
                                              id="InvestmentInterestRatePA"
                                              name="InvestmentInterestRatePA"
                                              placeholder="Interest Rate (p.a)"
                                            />
                                            <ErrorMessage
                                              component="div"
                                              className="text-danger fw-bold"
                                              name="InvestmentInterestRatePA"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-md-6">
                                          <div className="mb-3">
                                            <label
                                              htmlFor="InvestmentLoanTermInYear"
                                              className="form-label"
                                            >
                                              Loan Term (1-30 Years)
                                            </label>
                                            <Field
                                              as="select"
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
                                            <ErrorMessage
                                              className="text-danger fw-bold"
                                              component="div"
                                              name="InvestmentLoanTermInYear"
                                            />
                                          </div>
                                        </div>

                                        <div className="col-md-6">
                                          <div className="mb-3">
                                            <label
                                              htmlFor="InvestmentLoanType"
                                              className="form-label"
                                            >
                                              Loan Type
                                            </label>
                                            <Field
                                              as="select"
                                              id="InvestmentLoanType"
                                              className="form-select shadow  inputDesign"
                                              name="InvestmentLoanType"
                                            >
                                              <option value="">Select</option>
                                              <option value="I/Only">
                                                I/Only
                                              </option>
                                              <option value="P&I">P & I</option>
                                            </Field>
                                            <ErrorMessage
                                              className="text-danger fw-bold"
                                              component="div"
                                              name="InvestmentLoanType"
                                            />
                                          </div>
                                        </div>
                                      </div>

                                      <div className="row">
                                        <div className="col-md-6">
                                          <div className="mb-3">
                                            <label
                                              htmlFor="InvestmentDedAmountOfLoan"
                                              className="form-label"
                                            >
                                              Ded Amount of Loan
                                            </label>
                                            <Field
                                              type="number"
                                              className="form-control shadow inputDesign"
                                              id="InvestmentDedAmountOfLoan"
                                              name="InvestmentDedAmountOfLoan"
                                              placeholder="Ded Amount of Loan"
                                            />
                                            <ErrorMessage
                                              component="div"
                                              className="text-danger fw-bold"
                                              name="InvestmentDedAmountOfLoan"
                                            />
                                          </div>
                                        </div>

                                        <div className="col-md-6">
                                          <div className="mb-3">
                                            <label
                                              htmlFor="InvestmentYearsRemainingYear"
                                              className="form-label"
                                            >
                                              Years Remaining (1-30 Years)
                                            </label>
                                            <Field
                                              as="select"
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
                                            <ErrorMessage
                                              className="text-danger fw-bold"
                                              component="div"
                                              name="InvestmentYearsRemainingYear"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </Modal.Body>
                            <Modal.Footer>
                              <div className="col-md-12">
                                <button
                                  className="float-end btn w-25  bgColor modalBtn"
                                  // onClick={handleClose}
                                  type="submit"
                                >
                                  Save
                                </button>
                                <button 
                                type="button"
                                  className="float-end btn w-25  btn-outline  backBtn mx-3"
                                  onClick={handleClose7}
                                >
                                  Cancel
                                </button>
                              </div>
                            </Modal.Footer>
                          </Form>
                        )}
                      </Formik>
                    </Modal>
                    {/* -------------investment Properties modal---------------------------- */}

                    {/* InvestMent properties Table Table */}

                    <div className="table-responsive my-3">
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
                          {investmentList.map((elem, index) => {
                            // let {ChildName,childDoBID,childRelationship,childAge,childGender}=elem;

                            return (
                              <tr key={index}>
                                <td>{elem.PropertyAddress}</td>
                                <td>{elem.CurrentValue}</td>
                                <td>{elem.RentalIncome}</td>
                                <td>{elem.AnnualRepayments}</td>
                                <td>{elem.CurrentBalance}</td>
                                <td>{elem.RepaymentAmount}</td>

                                <td>
                                  <button
                                    type="button"
                                    onClick={(e) =>deleteHandler_Investment(elem, index) }
                                    className="btn btn-danger btn-sm mt-1">
                                    delete
                                  </button>
                                  <button type="button"
                                    onClick={(e) =>updateHandler_Investment(elem, index)}
                                    className="btn btn-warning btn-sm mx-2 mt-1"
                                  >
                                    update
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>

                    {/* InvestMent properties Table */}
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
                    <Modal.Header className="text-light modalBG " closeButton>
                      <Modal.Title className="fontStyle">
                        Investments Properties Details modal2
                        <div className="iconContainerLg">
                          <img className="img-fluid" src={notebook} alt="" />
                        </div>
                      </Modal.Title>
                    </Modal.Header>
                    <Formik
                      initialValues={ Investment_initialValues_Modal}
                      validationSchema={Investment_validationSchema_Modal}
                      onSubmit={Investment_onSubmit_Modal}
                    >
                      {({
                        values,
                        setFieldValue,
                        setValues,
                        handleChange,
                        formik,
                      }) => (
                        <Form>
                          <Modal.Body>
                            {/* Deposit accounts */}

                            <div className="">
                              <div className=" ">
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label htmlFor="" className="form-label">
                                        Total Property Expenses
                                      </label>
                                      <Field
                                        type="number"
                                        className="form-control shadow inputDesign"
                                        id="TotalPropertyExpenses2"
                                        name="TotalPropertyExpenses2"
                                        placeholder="Total Property Expenses"
                                        readOnly={true}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label
                                        htmlFor="BodyCorporateFees2"
                                        className="form-label"
                                      >
                                        Body Corporate Fees
                                      </label>
                                      <Field
                                        type="number"
                                        className="form-control shadow inputDesign"
                                        id="BodyCorporateFees2"
                                        name="BodyCorporateFees2"
                                        placeholder="Body Corporate Fees"
                                      />
                                      <ErrorMessage
                                        component="div"
                                        className="text-danger fw-bold"
                                        name="BodyCorporateFees2"
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label
                                        htmlFor="CouncilRates2"
                                        className="form-label"
                                      >
                                        Council Rates
                                      </label>
                                      <Field
                                        type="number"
                                        className="form-control shadow inputDesign"
                                        id="CouncilRates2"
                                        name="CouncilRates2"
                                        placeholder="Council Rates"
                                      />
                                      <ErrorMessage
                                        component="div"
                                        className="text-danger fw-bold"
                                        name="CouncilRates2"
                                      />
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label
                                        htmlFor="GardeningAndLawnmowing2"
                                        className="form-label"
                                      >
                                        Gardening and Lawn mowing
                                      </label>
                                      <Field
                                        type="number"
                                        className="form-control shadow inputDesign"
                                        id="GardeningAndLawnmowing2"
                                        name="GardeningAndLawnmowing2"
                                        placeholder="Gardening and Lawn mowing"
                                      />
                                      <ErrorMessage
                                        component="div"
                                        className="text-danger fw-bold"
                                        name="GardeningAndLawnmowing2"
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label
                                        htmlFor="Insurance2"
                                        className="form-label"
                                      >
                                        Insurance
                                      </label>
                                      <Field
                                        type="number"
                                        className="form-control shadow inputDesign"
                                        id="Insurance2"
                                        name="Insurance2"
                                        placeholder="Insurance"
                                      />
                                      <ErrorMessage
                                        component="div"
                                        className="text-danger fw-bold"
                                        name="Insurance2"
                                      />
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label
                                        htmlFor="LandTax2"
                                        className="form-label"
                                      >
                                        Land Tax
                                      </label>
                                      <Field
                                        type="number"
                                        className="form-control shadow inputDesign"
                                        id="LandTax2"
                                        name="LandTax2"
                                        placeholder="Land Tax"
                                      />
                                      <ErrorMessage
                                        component="div"
                                        className="text-danger fw-bold"
                                        name="LandTax2"
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label
                                        htmlFor="RepairsAndMaintenance2"
                                        className="form-label"
                                      >
                                        Repairs and Maintenance
                                      </label>
                                      <Field
                                        type="number"
                                        className="form-control shadow inputDesign"
                                        id="RepairsAndMaintenance2"
                                        name="RepairsAndMaintenance2"
                                        placeholder="Repairs and Maintenance"
                                      />
                                      <ErrorMessage
                                        component="div"
                                        className="text-danger fw-bold"
                                        name="RepairsAndMaintenance2"
                                      />
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label
                                        htmlFor="WaterCharges2"
                                        className="form-label"
                                      >
                                        Water Charges
                                      </label>
                                      <Field
                                        type="number"
                                        className="form-control shadow inputDesign"
                                        id="WaterCharges2"
                                        name="WaterCharges2"
                                        placeholder="Water Charges"
                                      />
                                      <ErrorMessage
                                        component="div"
                                        className="text-danger fw-bold"
                                        name="WaterCharges2"
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label
                                        htmlFor="Other2"
                                        className="form-label"
                                      >
                                        Other
                                      </label>
                                      <Field
                                        type="number"
                                        className="form-control shadow inputDesign"
                                        id="Other2"
                                        name="Other2"
                                        placeholder="Other"
                                      />
                                      <ErrorMessage
                                        component="div"
                                        className="text-danger fw-bold"
                                        name="Other2"
                                      />
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label
                                        htmlFor="TelephoneAndInternet2"
                                        className="form-label"
                                      >
                                        Telephone and Internet
                                      </label>
                                      <Field
                                        type="number"
                                        className="form-control shadow inputDesign"
                                        id="TelephoneAndInternet2"
                                        name="TelephoneAndInternet2"
                                        placeholder="Telephone and Internet"
                                      />
                                      <ErrorMessage
                                        component="div"
                                        className="text-danger fw-bold"
                                        name="TelephoneAndInternet2"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label
                                        htmlFor="Other2"
                                        className="form-label"
                                      >
                                        Professional Fees (Accounting or Other)
                                      </label>
                                      <Field
                                        type="number"
                                        className="form-control shadow inputDesign"
                                        id="ProfessionalFees2"
                                        name="ProfessionalFees2"
                                        placeholder="Professional Fees (Accounting or Other)"
                                      />
                                      <ErrorMessage
                                        component="div"
                                        className="text-danger fw-bold"
                                        name="ProfessionalFees2"
                                      />
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label
                                        htmlFor="AllOther2"
                                        className="form-label"
                                      >
                                        All Other
                                      </label>
                                      <Field
                                        type="number"
                                        className="form-control shadow inputDesign"
                                        id="AllOther2"
                                        name="AllOther2"
                                        placeholder="All Other"
                                      />
                                      <ErrorMessage
                                        component="div"
                                        className="text-danger fw-bold"
                                        name="AllOther2"
                                      />
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
                                type="submit"
                              >
                                Save
                              </button>
                              <button 
                              type="button"
                                className="float-end btn w-25  btn-outline  backBtn mx-3"
                                onClick={handleClose8}
                              >
                                Cancel
                              </button>
                            </div>
                          </Modal.Footer>
                        </Form>
                      )}
                    </Formik>
                  </Modal>
                  {/* -------------Deposit modal---------------------------- */}

                  {/* ModalInMOdal */}

                  <div className="row mt-5 mb-3">
                    <div className="col-md-12">
                      <button
                        type="submit"
                        className="float-end btn w-25  bgColor modalBtn"
                      >
                        Next
                      </button>
                      <button
                        className="float-end btn w-25  btn-outline  backBtn mx-3"
                        onClick={BackFunction}
                      >
                        Back
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvestmentTrust_Edit;
