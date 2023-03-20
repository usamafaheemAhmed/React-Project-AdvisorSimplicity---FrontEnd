import React, { useState, useEffect } from 'react';
import Modal from "react-bootstrap/Modal";
import './GoalsObjectives.css'
import plus from "./images/plus.svg"
import * as Yup from 'yup';
import 'yup-phone';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const GoalsObjective = () => {

    // Setup Modal Opt1
    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    // Holiday Modal Opt2
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    // Buy a Car Modal Opt3
    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    // Pay off Credit Card/Debt Modal Opt4  
    const [show4, setShow4] = useState(false);
    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);

    //Accumulate an Emergency Fund Modal5
    const [show5, setShow5] = useState(false);
    const handleClose5 = () => setShow5(false);
    const handleShow5 = () => setShow5(true);

    //Regular Savings Plan Modal6
    const [show6, setShow6] = useState(false);
    const handleClose6 = () => setShow6(false);
    const handleShow6 = () => setShow6(true);

    //Regular Savings Plan Modal7
    const [show7, setShow7] = useState(false);
    const handleClose7 = () => setShow7(false);
    const handleShow7 = () => setShow7(true);

    //House Plan Modal8
    const [show8, setShow8] = useState(false);
    const handleClose8 = () => setShow8(false);
    const handleShow8 = () => setShow8(true);

    //Retirement Plan Modal9
    const [show9, setShow9] = useState(false);
    const handleClose9 = () => setShow9(false);
    const handleShow9 = () => setShow9(true);

    //Children Education Plan Modal10
    const [show10, setShow10] = useState(false);
    const handleClose10 = () => setShow10(false);
    const handleShow10 = () => setShow10(true);

    // Boat Carvan Modal Opt11
    const [show11, setShow11] = useState(false);
    const handleClose11 = () => setShow11(false);
    const handleShow11 = () => setShow11(true);

    // Business Modal Opt12
    const [show12, setShow12] = useState(false);
    const handleClose12 = () => setShow12(false);
    const handleShow12 = () => setShow12(true);

    // Home Loan Modal Opt13
    const [show13, setShow13] = useState(false);
    const handleClose13 = () => setShow13(false);
    const handleShow13 = () => setShow13(true);

    // Upgrade of Family Home Modal Opt14  
    const [show14, setShow14] = useState(false);
    const handleClose14 = () => setShow14(false);
    const handleShow14 = () => setShow14(true);

    // Downsize of Family Home Modal15
    const [show15, setShow15] = useState(false);
    const handleClose15 = () => setShow15(false);
    const handleShow15 = () => setShow15(true);

    // Buy an Investment Property Modal16
    const [show16, setShow16] = useState(false);
    const handleClose16 = () => setShow16(false);
    const handleShow16 = () => setShow16(true);

    //Regular Savings Plan Modal17
    const [show17, setShow17] = useState(false);
    const handleClose17 = () => setShow17(false);
    const handleShow17 = () => setShow17(true);

    //House Plan Modal18
    const [show18, setShow18] = useState(false);
    const handleClose18 = () => setShow18(false);
    const handleShow18 = () => setShow18(true);

    //Retirement Plan Modal19
    const [show19, setShow19] = useState(false);
    const handleClose19 = () => setShow19(false);
    const handleShow19 = () => setShow19(true);

    //Retirement Plan Modal20
    const [show20, setShow20] = useState(false);
    const handleClose20 = () => setShow20(false);
    const handleShow20 = () => setShow20(true);

    //Retirement Plan Modal21
    const [show21, setShow21] = useState(false);
    const handleClose21 = () => setShow21(false);
    const handleShow21 = () => setShow21(true);

    //Retirement Plan Modal22
    const [show22, setShow22] = useState(false);
    const handleClose22 = () => setShow22(false);
    const handleShow22 = () => setShow22(true);

    // Home Loan Modal Opt23
    const [show23, setShow23] = useState(false);
    const handleClose23 = () => setShow23(false);
    const handleShow23 = () => setShow23(true);

    // Upgrade of Family Home Modal Opt24  
    const [show24, setShow24] = useState(false);
    const handleClose24 = () => setShow24(false);
    const handleShow24 = () => setShow24(true);

    // Downsize of Family Home Modal25
    const [show25, setShow25] = useState(false);
    const handleClose25 = () => setShow25(false);
    const handleShow25 = () => setShow25(true);
    
    // Buy an Investment Property Modal26
    const [show26, setShow26] = useState(false);
    const handleClose26 = () => setShow26(false);
    const handleShow26 = () => setShow26(true);

    //Regular Savings Plan Modal27
    const [show27, setShow27] = useState(false);
    const handleClose27 = () => setShow27(false);
    const handleShow27 = () => setShow27(true);

    //House Plan Modal28
    const [show28, setShow28] = useState(false);
    const handleClose28 = () => setShow28(false);
    const handleShow28 = () => setShow28(true);

    //Retirement Plan Modal29
    const [show29, setShow29] = useState(false);
    const handleClose29 = () => setShow29(false);
    const handleShow29 = () => setShow29(true);

    //Retirement Plan Modal30
    const [show30, setShow30] = useState(false);
    const handleClose30 = () => setShow30(false);
    const handleShow30 = () => setShow30(true);

    //Retirement Plan Modal31
    const [show31, setShow31] = useState(false);
    const handleClose31 = () => setShow31(false);
    const handleShow31 = () => setShow31(true);

    //Retirement Plan Modal32
    const [show32, setShow32] = useState(false);
    const handleClose32 = () => setShow32(false);
    const handleShow32 = () => setShow32(true);

    //Retirement Plan Modal33
    const [show33, setShow33] = useState(false);
    const handleClose33 = () => setShow33(false);
    const handleShow33 = () => setShow33(true);


// Formik Props setup Opt1
    let setup_initialValues={
      AreaOfAdvice:'',
      When:'',
      EstimatedAmount:'',
      Description:'',
    }
    const setup_validationSchema = Yup.object({
        AreaOfAdvice:Yup.string().required("Required"),
        When:Yup.string().required("Required"),
        EstimatedAmount:Yup.number().required("Required")
        .test(
          "Is positive?",
          "Must be a positive number",
          (value) => value > 0
        ),
        Description:Yup.string().required("Required"),
    })
    let setup_onSubmit=(values)=>{
        console.log(values)
    }
// setup Opt1

// Holiday Opt2
    let Holiday_initialValues={
      AreaOfAdvice:'',
      When:'',
      EstimatedAmount:'',
      Description:'',
    }
    const Holiday_validationSchema = Yup.object({
        AreaOfAdvice:Yup.string().required("Required"),
        When:Yup.string().required("Required"),
        EstimatedAmount:Yup.number().required("Required")
        .test(
          "Is positive?",
          "Must be a positive number",
          (value) => value > 0
        ),
        Description:Yup.string().required("Required"),


    })
    let Holiday_onSubmit=(values)=>{
        console.log(values)
    }
// Holiday Opt2

// Buy a Car Opt3
    let Car_initialValues={
      AreaOfAdvice:'',
      When:'',
      EstimatedAmount:'',
      Description:'',
    }
    const Car_validationSchema = Yup.object({
        AreaOfAdvice:Yup.string().required("Required"),
        When:Yup.string().required("Required"),
        EstimatedAmount:Yup.number().required("Required")
        .test(
          "Is positive?",
          "Must be a positive number",
          (value) => value > 0
        ),
        Description:Yup.string().required("Required"),


    })
    let Car_onSubmit=(values)=>{
        console.log(values)
    }
// Buy a Car Opt3

// Pay off Credit Card/Debt Modal Opt4   
    let CredidCard_initialValues={
      AreaOfAdvice:'',
      When:'',
      EstimatedAmount:'',
      Description:'',
    }
    const CredidCard_validationSchema = Yup.object({
        AreaOfAdvice:Yup.string().required("Required"),
        When:Yup.string().required("Required"),
        EstimatedAmount:Yup.number().required("Required")
        .test(
          "Is positive?",
          "Must be a positive number",
          (value) => value > 0
        ),
        Description:Yup.string().required("Required"),


    })
    let CredidCard_onSubmit=(values)=>{
        console.log(values)
    }
// Pay off Credit Card/Debt Modal Opt4  

// Accumulate an Emergency Fund Modal5
    let Accumulate_initialValues={
      AreaOfAdvice:'',
      When:'',
      EstimatedAmount:'',
      Description:'',
    }
    const Accumulate_validationSchema = Yup.object({
        AreaOfAdvice:Yup.string().required("Required"),
        When:Yup.string().required("Required"),
        EstimatedAmount:Yup.number().required("Required")
        .test(
          "Is positive?",
          "Must be a positive number",
          (value) => value > 0
        ),
        Description:Yup.string().required("Required"),


    })
    let Accumulate_onSubmit=(values)=>{
        console.log(values)
    }
// Accumulate an Emergency Fund Modal5

// Commence Regular Savings Plan
    let Regular_initialValues={
      AreaOfAdvice:'',
      When:'',
      EstimatedAmount:'',
      Description:'',
    }
    const Regular_validationSchema = Yup.object({
        AreaOfAdvice:Yup.string().required("Required"),
        When:Yup.string().required("Required"),
        EstimatedAmount:Yup.number().required("Required")
        .test(
          "Is positive?",
          "Must be a positive number",
          (value) => value > 0
        ),
        Description:Yup.string().required("Required"),


    })
    let Regular_onSubmit=(values)=>{
        console.log(values)
    }
//Commence Regular Savings Plan

// protect my lifestyle
let Protect_initialValues={
  AreaOfAdvice:'',
  When:'',
  EstimatedAmount:'',
  Description:'',
}
const Protect_validationSchema = Yup.object({
    AreaOfAdvice:Yup.string().required("Required"),
    When:Yup.string().required("Required"),
    EstimatedAmount:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Must be a positive number",
      (value) => value > 0
    ),
    Description:Yup.string().required("Required"),


})
let Protect_onSubmit=(values)=>{
    console.log(values)
}

// House Opt8
    let House_initialValues={
      AreaOfAdvice:'',
      When:'',
      EstimatedAmount:'',
      Description:'',
    }
    const House_validationSchema = Yup.object({
        AreaOfAdvice:Yup.string().required("Required"),
        When:Yup.string().required("Required"),
        EstimatedAmount:Yup.number().required("Required")
        .test(
          "Is positive?",
          "Must be a positive number",
          (value) => value > 0
        ),
        Description:Yup.string().required("Required"),


    })
    let House_onSubmit=(values)=>{
        console.log(values)
    }
// House Opt8

// Retirement Opt9
    let Retirement_initialValues={
      AreaOfAdvice:'',
      When:'',
      EstimatedAmount:'',
      Description:'',
    }
    const Retirement_validationSchema = Yup.object({
        AreaOfAdvice:Yup.string().required("Required"),
        When:Yup.string().required("Required"),
        EstimatedAmount:Yup.number().required("Required")
        .test(
          "Is positive?",
          "Must be a positive number",
          (value) => value > 0
        ),
        Description:Yup.string().required("Required"),


    })
    let Retirement_onSubmit=(values)=>{
        console.log(values)
    }
// Retirement Opt9

// ChildrenEducation Opt10
    let ChildrenEducation_initialValues={
      AreaOfAdvice:'',
      When:'',
      EstimatedAmount:'',
      Description:'',
    }
    const ChildrenEducation_validationSchema = Yup.object({
        AreaOfAdvice:Yup.string().required("Required"),
        When:Yup.string().required("Required"),
        EstimatedAmount:Yup.number().required("Required")
        .test(
          "Is positive?",
          "Must be a positive number",
          (value) => value > 0
        ),
        Description:Yup.string().required("Required"),


    })
    let ChildrenEducation_onSubmit=(values)=>{
        console.log(values)
    }
// ChildrenEducation Opt10

// BoatCarvan Opt11
    let BoatCarvan_initialValues={
      AreaOfAdvice:'',
      When:'',
      EstimatedAmount:'',
      Description:'',
    }
    const BoatCarvan_validationSchema = Yup.object({
        AreaOfAdvice:Yup.string().required("Required"),
        When:Yup.string().required("Required"),
        EstimatedAmount:Yup.number().required("Required")
        .test(
          "Is positive?",
          "Must be a positive number",
          (value) => value > 0
        ),
        Description:Yup.string().required("Required"),


    })
    let BoatCarvan_onSubmit=(values)=>{
        console.log(values)
    }
// BoatCarvan Opt11

// Business Opt12
    let Business_initialValues={
      AreaOfAdvice:'',
      When:'',
      EstimatedAmount:'',
      Description:'',
    }
    const Business_validationSchema = Yup.object({
        AreaOfAdvice:Yup.string().required("Required"),
        When:Yup.string().required("Required"),
        EstimatedAmount:Yup.number().required("Required")
        .test(
          "Is positive?",
          "Must be a positive number",
          (value) => value > 0
        ),
        Description:Yup.string().required("Required"),


    })
    let Business_onSubmit=(values)=>{
        console.log(values)
    }
// Business Opt12

// HomeLoan Opt13
    let HomeLoan_initialValues={
      AreaOfAdvice:'',
      When:'',
      EstimatedAmount:'',
      Description:'',
    }
    const HomeLoan_validationSchema = Yup.object({
        AreaOfAdvice:Yup.string().required("Required"),
        When:Yup.string().required("Required"),
        EstimatedAmount:Yup.number().required("Required")
        .test(
          "Is positive?",
          "Must be a positive number",
          (value) => value > 0
        ),
        Description:Yup.string().required("Required"),


    })
    let HomeLoan_onSubmit=(values)=>{
        console.log(values)
    }
// HomeLoan Opt13

// UpgradeFamilyHome Opt14
    let UpgradeFamilyHome_initialValues={
      AreaOfAdvice:'',
      When:'',
      EstimatedAmount:'',
      Description:'',
    }
    const UpgradeFamilyHome_validationSchema = Yup.object({
        AreaOfAdvice:Yup.string().required("Required"),
        When:Yup.string().required("Required"),
        EstimatedAmount:Yup.number().required("Required")
        .test(
          "Is positive?",
          "Must be a positive number",
          (value) => value > 0
        ),
        Description:Yup.string().required("Required"),


    })
    let UpgradeFamilyHome_onSubmit=(values)=>{
        console.log(values)
    }
// UpgradeFamilyHome Opt14

// DownsizeHome Opt15
    let DownsizeHome_initialValues={
      AreaOfAdvice:'',
      When:'',
      EstimatedAmount:'',
      Description:'',
    }
    const DownsizeHome_validationSchema = Yup.object({
        AreaOfAdvice:Yup.string().required("Required"),
        When:Yup.string().required("Required"),
        EstimatedAmount:Yup.number().required("Required")
        .test(
          "Is positive?",
          "Must be a positive number",
          (value) => value > 0
        ),
        Description:Yup.string().required("Required"),


    })
    let DownsizeHome_onSubmit=(values)=>{
        console.log(values)
    }
// DownsizeHome Opt15

// InvestmentProperty Opt16
    let InvestmentProperty_initialValues={
      AreaOfAdvice:'',
      When:'',
      EstimatedAmount:'',
      Description:'',
    }
    const InvestmentProperty_validationSchema = Yup.object({
        AreaOfAdvice:Yup.string().required("Required"),
        When:Yup.string().required("Required"),
        EstimatedAmount:Yup.number().required("Required")
        .test(
          "Is positive?",
          "Must be a positive number",
          (value) => value > 0
        ),
        Description:Yup.string().required("Required"),


    })
    let InvestmentProperty_onSubmit=(values)=>{
        console.log(values)
    }
// InvestmentProperty Opt16

// RenovateHome Opt17
    let RenovateHome_initialValues={
      AreaOfAdvice:'',
      When:'',
      EstimatedAmount:'',
      Description:'',
    }
    const RenovateHome_validationSchema = Yup.object({
        AreaOfAdvice:Yup.string().required("Required"),
        When:Yup.string().required("Required"),
        EstimatedAmount:Yup.number().required("Required")
        .test(
          "Is positive?",
          "Must be a positive number",
          (value) => value > 0
        ),
        Description:Yup.string().required("Required"),


    })
    let RenovateHome_onSubmit=(values)=>{
        console.log(values)
    }
// RenovateHome Opt17

// InvestmentPortfolio Opt18
    let InvestmentPortfolio_initialValues={
      AreaOfAdvice:'',
      When:'',
      EstimatedAmount:'',
      Description:'',
    }
    const InvestmentPortfolio_validationSchema = Yup.object({
        AreaOfAdvice:Yup.string().required("Required"),
        When:Yup.string().required("Required"),
        EstimatedAmount:Yup.number().required("Required")
        .test(
          "Is positive?",
          "Must be a positive number",
          (value) => value > 0
        ),
        Description:Yup.string().required("Required"),


    })
    let InvestmentPortfolio_onSubmit=(values)=>{
        console.log(values)
    }
// InvestmentPortfolio Opt18

// StartFamily Opt19
    let StartFamily_initialValues={
      AreaOfAdvice:'',
      When:'',
      EstimatedAmount:'',
      Description:'',
    }
    const StartFamily_validationSchema = Yup.object({
        AreaOfAdvice:Yup.string().required("Required"),
        When:Yup.string().required("Required"),
        EstimatedAmount:Yup.number().required("Required")
        .test(
          "Is positive?",
          "Must be a positive number",
          (value) => value > 0
        ),
        Description:Yup.string().required("Required"),


    })
    let StartFamily_onSubmit=(values)=>{
        console.log(values)
    }
// StartFamily Opt19

// Inheritance Opt20
    let Inheritance_initialValues={
      AreaOfAdvice:'',
      When:'',
      EstimatedAmount:'',
      Description:'',
    }
    const Inheritance_validationSchema = Yup.object({
        AreaOfAdvice:Yup.string().required("Required"),
        When:Yup.string().required("Required"),
        EstimatedAmount:Yup.number().required("Required")
        .test(
          "Is positive?",
          "Must be a positive number",
          (value) => value > 0
        ),
        Description:Yup.string().required("Required"),


    })
    let Inheritance_onSubmit=(values)=>{
        console.log(values)
    }
// Inheritance Opt20

// Care Opt21
    let Care_initialValues={
      AreaOfAdvice:'',
      When:'',
      EstimatedAmount:'',
      Description:'',
    }
    const Care_validationSchema = Yup.object({
        AreaOfAdvice:Yup.string().required("Required"),
        When:Yup.string().required("Required"),
        EstimatedAmount:Yup.number().required("Required")
        .test(
          "Is positive?",
          "Must be a positive number",
          (value) => value > 0
        ),
        Description:Yup.string().required("Required"),


    })
    let Care_onSubmit=(values)=>{
        console.log(values)
    }
// Care Opt21

// CentreLinkEligibillity Opt22
    let CentreLinkEligibillity_initialValues={
      AreaOfAdvice:'',
      When:'',
      EstimatedAmount:'',
      Description:'',
    }
    const CentreLinkEligibillity_validationSchema = Yup.object({
        AreaOfAdvice:Yup.string().required("Required"),
        When:Yup.string().required("Required"),
        EstimatedAmount:Yup.number().required("Required")
        .test(
          "Is positive?",
          "Must be a positive number",
          (value) => value > 0
        ),
        Description:Yup.string().required("Required"),


    })
    let CentreLinkEligibillity_onSubmit=(values)=>{
        console.log(values)
    }
// CentreLinkEligibillity Opt22

// FamilyTrust Opt23
    let FamilyTrust_initialValues={
      AreaOfAdvice:'',
      When:'',
      EstimatedAmount:'',
      Description:'',
    }
    const FamilyTrust_validationSchema = Yup.object({
        AreaOfAdvice:Yup.string().required("Required"),
        When:Yup.string().required("Required"),
        EstimatedAmount:Yup.number().required("Required")
        .test(
          "Is positive?",
          "Must be a positive number",
          (value) => value > 0
        ),
        Description:Yup.string().required("Required"),


    })
    let FamilyTrust_onSubmit=(values)=>{
        console.log(values)
    }
// FamilyTrust Opt23

// SMSF Opt24
    let SMSF_initialValues={
      AreaOfAdvice:'',
      When:'',
      EstimatedAmount:'',
      Description:'',
    }
    const SMSF_validationSchema = Yup.object({
        AreaOfAdvice:Yup.string().required("Required"),
        When:Yup.string().required("Required"),
        EstimatedAmount:Yup.number().required("Required")
        .test(
          "Is positive?",
          "Must be a positive number",
          (value) => value > 0
        ),
        Description:Yup.string().required("Required"),


    })
    let SMSF_onSubmit=(values)=>{
        console.log(values)
    }
// SMSF Opt24

// Wedding Opt25
    let Wedding_initialValues={
      AreaOfAdvice:'',
      When:'',
      EstimatedAmount:'',
      Description:'',
    }
    const Wedding_validationSchema = Yup.object({
        AreaOfAdvice:Yup.string().required("Required"),
        When:Yup.string().required("Required"),
        EstimatedAmount:Yup.number().required("Required")
        .test(
          "Is positive?",
          "Must be a positive number",
          (value) => value > 0
        ),
        Description:Yup.string().required("Required"),


    })
    let Wedding_onSubmit=(values)=>{
        console.log(values)
    }
// Wedding Opt25

// EstatePlanning Opt26
    let EstatePlanning_initialValues={
      AreaOfAdvice:'',
      When:'',
      EstimatedAmount:'',
      Description:'',
    }
    const EstatePlanning_validationSchema = Yup.object({
        AreaOfAdvice:Yup.string().required("Required"),
        When:Yup.string().required("Required"),
        EstimatedAmount:Yup.number().required("Required")
        .test(
          "Is positive?",
          "Must be a positive number",
          (value) => value > 0
        ),
        Description:Yup.string().required("Required"),


    })
    let EstatePlanning_onSubmit=(values)=>{
        console.log(values)
    }
// EstatePlanning Opt26

// SuperAnnuationInvestment Opt27
    let SuperAnnuationInvestment_initialValues={
      AreaOfAdvice:'',
      When:'',
      EstimatedAmount:'',
      Description:'',
    }
    const SuperAnnuationInvestment_validationSchema = Yup.object({
        AreaOfAdvice:Yup.string().required("Required"),
        When:Yup.string().required("Required"),
        EstimatedAmount:Yup.number().required("Required")
        .test(
          "Is positive?",
          "Must be a positive number",
          (value) => value > 0
        ),
        Description:Yup.string().required("Required"),


    })
    let SuperAnnuationInvestment_onSubmit=(values)=>{
        console.log(values)
    }
// SuperAnnuationInvestment Opt27

// PayLessTax Opt28
    let PayLessTax_initialValues={
      AreaOfAdvice:'',
      When:'',
      EstimatedAmount:'',
      Description:'',
    }
    const PayLessTax_validationSchema = Yup.object({
        AreaOfAdvice:Yup.string().required("Required"),
        When:Yup.string().required("Required"),
        EstimatedAmount:Yup.number().required("Required")
        .test(
          "Is positive?",
          "Must be a positive number",
          (value) => value > 0
        ),
        Description:Yup.string().required("Required"),


    })
    let PayLessTax_onSubmit=(values)=>{
        console.log(values)
    }
// PayLessTax Opt28

// IncomeStream Opt29
    let IncomeStream_initialValues={
      AreaOfAdvice:'',
      When:'',
      EstimatedAmount:'',
      Description:'',
    }
    const IncomeStream_validationSchema = Yup.object({
        AreaOfAdvice:Yup.string().required("Required"),
        When:Yup.string().required("Required"),
        EstimatedAmount:Yup.number().required("Required")
        .test(
          "Is positive?",
          "Must be a positive number",
          (value) => value > 0
        ),
        Description:Yup.string().required("Required"),


    })
    let IncomeStream_onSubmit=(values)=>{
        console.log(values)
    }
// IncomeStream Opt29

// SuperAnnuationAccounts Opt30
    let SuperAnnuationAccounts_initialValues={
      AreaOfAdvice:'',
      When:'',
      EstimatedAmount:'',
      Description:'',
    }
    const SuperAnnuationAccounts_validationSchema = Yup.object({
        AreaOfAdvice:Yup.string().required("Required"),
        When:Yup.string().required("Required"),
        EstimatedAmount:Yup.number().required("Required")
        .test(
          "Is positive?",
          "Must be a positive number",
          (value) => value > 0
        ),
        Description:Yup.string().required("Required"),


    })
    let SuperAnnuationAccounts_onSubmit=(values)=>{
        console.log(values)
    }
// SuperAnnuationAccounts Opt30

// ContributeSuperAnnuation Opt31
    let ContributeSuperAnnuation_initialValues={
      AreaOfAdvice:'',
      When:'',
      EstimatedAmount:'',
      Description:'',
    }
    const ContributeSuperAnnuation_validationSchema = Yup.object({
        AreaOfAdvice:Yup.string().required("Required"),
        When:Yup.string().required("Required"),
        EstimatedAmount:Yup.number().required("Required")
        .test(
          "Is positive?",
          "Must be a positive number",
          (value) => value > 0
        ),
        Description:Yup.string().required("Required"),


    })
    let ContributeSuperAnnuation_onSubmit=(values)=>{
        console.log(values)
    }
// ContributeSuperAnnuation Opt31

// InvestmentPortfolio Opt32
    let ReviewInvestmentPortfolio_initialValues={
      AreaOfAdvice:'',
      When:'',
      EstimatedAmount:'',
      Description:'',
    }
    const ReviewInvestmentPortfolio_validationSchema = Yup.object({
        AreaOfAdvice:Yup.string().required("Required"),
        When:Yup.string().required("Required"),
        EstimatedAmount:Yup.number().required("Required")
        .test(
          "Is positive?",
          "Must be a positive number",
          (value) => value > 0
        ),
        Description:Yup.string().required("Required"),


    })
    let ReviewInvestmentPortfolio_onSubmit=(values)=>{
        console.log(values)
    }
// InvestmentPortfolio Opt32

// FinancialAdvice Opt33
    let FinancialAdvice_initialValues={
      AreaOfAdvice:'',
      When:'',
      EstimatedAmount:'',
      Description:'',
    }
    const FinancialAdvice_validationSchema = Yup.object({
        AreaOfAdvice:Yup.string().required("Required"),
        When:Yup.string().required("Required"),
        EstimatedAmount:Yup.number().required("Required")
        .test(
          "Is positive?",
          "Must be a positive number",
          (value) => value > 0
        ),
        Description:Yup.string().required("Required"),


    })
    let FinancialAdvice_onSubmit=(values)=>{
        console.log(values)
    }
// FinancialAdvice Opt33

  return (
    <div className="container-fluid">
            <div className="row px-0 m-0">
                 <div className="col-md-12">
                    <div className='shadow py-4 px-4 my-5'>
                       <h3 className="text-center GreenColor">
                        <b>Goals & Objectives</b>
                        </h3>

                       {/* Modal Button Row 1 */}
                        <div className='row my-3 '>

                          {/* setup Modal Opt1 button   */}
                            <div className='col-md-4 my-2 '>
                              <label  className="form-label LabelSize">
                              Set up a Budget
                                  </label>
                                  <br />
                                
                                <button
                                  className=" btn
                                  btn-outline-success "
                                  onClick={handleShow1}
                                >
                                  <div className="iconContainer mx-1">
                                  <img className="img-fluid" src={plus} alt="" />

                                  </div>
                                  Enter Details
                                </button>
                            </div>

                          {/* Holiday Modal Opt2 button   */}
                            <div className='col-md-4 my-2'>
                              <label  className="form-label LabelSize">
                              Take a Holiday
                                  </label>
                                  <br />
                                
                                <button
                                  className=" btn
                                  btn-outline-success "
                                  onClick={handleShow2}
                                >
                                  <div className="iconContainer mx-1">
                                  <img className="img-fluid" src={plus} alt="" />

                                  </div>
                                  Enter Details
                                </button>
                            </div>

                          {/* Buy a Car Modal Opt3 button   */}
                            <div className='col-md-4 my-2'>
                              <label  className="form-label LabelSize">
                              Buy a Car
                                  </label>
                                  <br />
                                
                                <button
                                  className=" btn
                                  btn-outline-success "
                                  onClick={handleShow3}
                                >
                                  <div className="iconContainer mx-1">
                                  <img className="img-fluid" src={plus} alt="" />

                                  </div>
                                  Enter Details
                                </button>
                            </div>

                        </div>
                       {/* Modal Button Row 1 */}



                       {/* Modal Button Row 2 */}
                        <div className='row my-3 '>

                          {/* Pay off Credit Card/Debt Modal Opt4 button   */}
                            <div className='col-md-4 my-2 '>
                              <label  className="form-label LabelSize">
                              Pay off Credit Card/Debt
                                  </label>
                                  <br />
                                
                                <button
                                  className=" btn
                                  btn-outline-success "
                                  onClick={handleShow4}
                                >
                                  <div className="iconContainer mx-1">
                                  <img className="img-fluid" src={plus} alt="" />

                                  </div>
                                  Enter Details
                                </button>
                            </div>

                          {/* Accumulate an Emergency Fund Modal Opt5 Btn   */}
                            <div className='col-md-4 my-2'>
                              <label  className="form-label LabelSize">
                              Accumulate Emergency Fund
                                  </label>
                                  <br />
                                
                                <button
                                  className=" btn
                                  btn-outline-success "
                                  onClick={handleShow5}
                                >
                                  <div className="iconContainer mx-1">
                                  <img className="img-fluid" src={plus} alt="" />

                                  </div>
                                  Enter Details
                                </button>
                            </div>

                          {/* Regular Savings Plan Modal Opt6 button   */}
                            <div className='col-md-4 my-2'>
                              <label  className="form-label LabelSize">
                              Regular Savings Plan
                                  </label>
                                  <br />
                                
                                <button
                                  className=" btn
                                  btn-outline-success "
                                  onClick={handleShow6}
                                >
                                  <div className="iconContainer mx-1">
                                  <img className="img-fluid" src={plus} alt="" />

                                  </div>
                                  Enter Details
                                </button>
                            </div>

                        </div>
                       {/* Modal Button Row 2 */}



                       {/* Modal Button Row 3 */}
                        <div className='row my-3 '>

                       {/* Protect my Lifestyle & Family Opt7 button   */}
                            <div className='col-md-6 my-2 '>
                              <label  className="form-label LabelSize">
                              Protect my Lifestyle & Family 
                                  </label>
                                  <br />
                                
                                <button
                                  className=" btn
                                  btn-outline-success "
                                  onClick={handleShow7}
                                >
                                  <div className="iconContainer mx-1">
                                  <img className="img-fluid" src={plus} alt="" />

                                  </div>
                                  Enter Details
                                </button>
                            </div>

                        </div>
                       {/* Modal Button Row 3 */}

                       <h3 className="GreenColor mt-5">
                        <b>Other Goals</b>
                        </h3>

                       {/* Modal Button Row 4 */}
                        <div className='row my-3 '>

                          {/* House Modal Opt8 button   */}
                            <div className='col-md-4 my-2 '>
                              <label  className="form-label LabelSize">
                              Buy a House
                                  </label>
                                  <br />
                                
                                <button
                                  className=" btn
                                  btn-outline-success "
                                  onClick={handleShow8}
                                >
                                  <div className="iconContainer mx-1">
                                  <img className="img-fluid" src={plus} alt="" />

                                  </div>
                                  Enter Details
                                </button>
                            </div>

                          {/* Retirement Modal Opt9 Btn   */}
                            <div className='col-md-4 my-2'>
                              <label  className="form-label LabelSize">
                              Plan for Retirment
                                  </label>
                                  <br />
                                
                                <button
                                  className=" btn
                                  btn-outline-success "
                                  onClick={handleShow9}
                                >
                                  <div className="iconContainer mx-1">
                                  <img className="img-fluid" src={plus} alt="" />

                                  </div>
                                  Enter Details
                                </button>
                            </div>

                          {/* Children Education Modal Opt10 button   */}
                            <div className='col-md-4 my-2'>
                              <label  className="form-label LabelSize">
                              Save for Children's Education
                                  </label>
                                  <br />
                                
                                <button
                                  className=" btn
                                  btn-outline-success "
                                  onClick={handleShow10}
                                >
                                  <div className="iconContainer mx-1">
                                  <img className="img-fluid" src={plus} alt="" />

                                  </div>
                                  Enter Details
                                </button>
                            </div>

                        </div>
                       {/* Modal Button Row 4 */}



                       {/* Modal Button Row 5 */}
                        <div className='row my-3 '>

                        {/* House Modal Opt11 button   */}
                          <div className='col-md-4 my-2 '>
                            <label  className="form-label LabelSize">
                            Boat or Carvan
                                </label>
                                <br />
                              
                              <button
                                className=" btn
                                btn-outline-success "
                                onClick={handleShow11}
                              >
                                <div className="iconContainer mx-1">
                                <img className="img-fluid" src={plus} alt="" />

                                </div>
                                Enter Details
                              </button>
                          </div>

                        {/* Retirement Modal Opt12 Btn   */}
                          <div className='col-md-4 my-2'>
                            <label  className="form-label LabelSize">
                            Start a Business
                                </label>
                                <br />
                              
                              <button
                                className=" btn
                                btn-outline-success "
                                onClick={handleShow12}
                              >
                                <div className="iconContainer mx-1">
                                <img className="img-fluid" src={plus} alt="" />

                                </div>
                                Enter Details
                              </button>
                          </div>

                        {/* Children Education Modal Opt10 button   */}
                          <div className='col-md-4 my-2'>
                            <label  className="form-label LabelSize">
                            Pay off Home Loan
                                </label>
                                <br />
                              
                              <button
                                className=" btn
                                btn-outline-success "
                                onClick={handleShow13}
                              >
                                <div className="iconContainer mx-1">
                                <img className="img-fluid" src={plus} alt="" />

                                </div>
                                Enter Details
                              </button>
                          </div>

                        </div>
                       {/* Modal Button Row 5 */}



                       {/* Modal Button Row 6 */}
                        <div className='row my-3 '>

                        {/* Upgrade FamilyHome Modal Opt14 button   */}
                          <div className='col-md-4 my-2 '>
                            <label  className="form-label LabelSize">
                            Upgrade Family Home
                                </label>
                                <br />
                              
                              <button
                                className=" btn
                                btn-outline-success "
                                onClick={handleShow14}
                              >
                                <div className="iconContainer mx-1">
                                <img className="img-fluid" src={plus} alt="" />

                                </div>
                                Enter Details
                              </button>
                          </div>

                        {/* Downsize FamilyHome Modal Opt15 Btn   */}
                          <div className='col-md-4 my-2'>
                            <label  className="form-label LabelSize">
                            Down Size Family Home
                                </label>
                                <br />
                              
                              <button
                                className=" btn
                                btn-outline-success "
                                onClick={handleShow15}
                              >
                                <div className="iconContainer mx-1">
                                <img className="img-fluid" src={plus} alt="" />

                                </div>
                                Enter Details
                              </button>
                          </div>

                        {/* Investment Property Modal Opt10 button   */}
                          <div className='col-md-4 my-2'>
                            <label  className="form-label LabelSize">
                            Buy an Investment Property
                                </label>
                                <br />
                              
                              <button
                                className=" btn
                                btn-outline-success "
                                onClick={handleShow16}
                              >
                                <div className="iconContainer mx-1">
                                <img className="img-fluid" src={plus} alt="" />

                                </div>
                                Enter Details
                              </button>
                          </div>

                        </div>
                       {/* Modal Button Row 6 */}



                       {/* Modal Button Row 7 */}
                        <div className='row my-3 '>

                          {/* Renovate FamilyHome Modal Opt17 button   */}
                            <div className='col-md-4 my-2 '>
                              <label  className="form-label LabelSize">
                              Renovate Family Home
                                  </label>
                                  <br />
                                
                                <button
                                  className=" btn
                                  btn-outline-success "
                                  onClick={handleShow17}
                                >
                                  <div className="iconContainer mx-1">
                                  <img className="img-fluid" src={plus} alt="" />

                                  </div>
                                  Enter Details
                                </button>
                            </div>

                          {/* Investment Portfolio Modal Opt18 Btn   */}
                            <div className='col-md-4 my-2'>
                              <label  className="form-label LabelSize">
                              Investment Portfolio
                                  </label>
                                  <br />
                                
                                <button
                                  className=" btn
                                  btn-outline-success "
                                  onClick={handleShow18}
                                >
                                  <div className="iconContainer mx-1">
                                  <img className="img-fluid" src={plus} alt="" />

                                  </div>
                                  Enter Details
                                </button>
                            </div>

                          {/* Start a Family Modal Opt19 button   */}
                            <div className='col-md-4 my-2'>
                              <label  className="form-label LabelSize">
                              Start a Family
                                  </label>
                                  <br />
                                
                                <button
                                  className=" btn
                                  btn-outline-success "
                                  onClick={handleShow19}
                                >
                                  <div className="iconContainer mx-1">
                                  <img className="img-fluid" src={plus} alt="" />

                                  </div>
                                  Enter Details
                                </button>
                            </div>

                        </div>
                       {/* Modal Button Row 7 */}



                       {/* Modal Button Row 8 */}
                        <div className='row my-3 '>

                        {/* Inheritance Modal Opt20 button   */}
                          <div className='col-md-4 my-2 '>
                            <label  className="form-label LabelSize">
                            Leave an Inheritance
                                </label>
                                <br />
                              
                              <button
                                className=" btn
                                btn-outline-success "
                                onClick={handleShow20}
                              >
                                <div className="iconContainer mx-1">
                                <img className="img-fluid" src={plus} alt="" />

                                </div>
                                Enter Details
                              </button>
                          </div>

                        {/* Care Modal Opt21 Btn   */}
                          <div className='col-md-4 my-2'>
                            <label  className="form-label LabelSize">
                            Care Aging Family Member
                                </label>
                                <br />
                              
                              <button
                                className=" btn
                                btn-outline-success "
                                onClick={handleShow21}
                              >
                                <div className="iconContainer mx-1">
                                <img className="img-fluid" src={plus} alt="" />

                                </div>
                                Enter Details
                              </button>
                          </div>

                        {/* Centre Link Eligibillity Modal Opt22 button   */}
                          <div className='col-md-4 my-2'>
                            <label  className="form-label LabelSize">
                            Centre Link Eligibillity
                                </label>
                                <br />
                              
                              <button
                                className=" btn
                                btn-outline-success "
                                onClick={handleShow22}
                              >
                                <div className="iconContainer mx-1">
                                <img className="img-fluid" src={plus} alt="" />

                                </div>
                                Enter Details
                              </button>
                          </div>

                        </div>
                       {/* Modal Button Row 8 */}



                       {/* Modal Button Row 9 */}
                        <div className='row my-3 '>

                        {/* Family Trust Modal Opt23 button   */}
                          <div className='col-md-4 my-2 '>
                            <label  className="form-label LabelSize">
                            Family Trust
                                </label>
                                <br />
                              
                              <button
                                className=" btn
                                btn-outline-success "
                                onClick={handleShow23}
                              >
                                <div className="iconContainer mx-1">
                                <img className="img-fluid" src={plus} alt="" />

                                </div>
                                Enter Details
                              </button>
                          </div>

                        {/* SMSF Modal Opt24 Btn   */}
                          <div className='col-md-4 my-2'>
                            <label  className="form-label LabelSize">
                            Set up SMSF
                                </label>
                                <br />
                              
                              <button
                                className=" btn
                                btn-outline-success "
                                onClick={handleShow24}
                              >
                                <div className="iconContainer mx-1">
                                <img className="img-fluid" src={plus} alt="" />

                                </div>
                                Enter Details
                              </button>
                          </div>

                        {/* Wedding Modal Opt25 button   */}
                          <div className='col-md-4 my-2'>
                            <label  className="form-label LabelSize">
                            Save for Wedding
                                </label>
                                <br />
                              
                              <button
                                className=" btn
                                btn-outline-success "
                                onClick={handleShow25}
                              >
                                <div className="iconContainer mx-1">
                                <img className="img-fluid" src={plus} alt="" />

                                </div>
                                Enter Details
                              </button>
                          </div>

                        </div>
                       {/* Modal Button Row 9 */}



                       {/* Modal Button Row 10 */}
                        <div className='row my-3 '>

                        {/* Estate Planning Modal Opt26 button   */}
                          <div className='col-md-4 my-2 '>
                            <label  className="form-label LabelSize">
                            Estate Planning
                                </label>
                                <br />
                              
                              <button
                                className=" btn
                                btn-outline-success "
                                onClick={handleShow26}
                              >
                                <div className="iconContainer mx-1">
                                <img className="img-fluid" src={plus} alt="" />

                                </div>
                                Enter Details
                              </button>
                          </div>

                        {/* Super Annuation Investment Modal Opt27 Btn   */}
                          <div className='col-md-4 my-2'>
                            <label  className="form-label LabelSize">
                            Increase Superannuation Investment
                                </label>
                                <br />
                              
                              <button
                                className=" btn
                                btn-outline-success "
                                onClick={handleShow27}
                              >
                                <div className="iconContainer mx-1">
                                <img className="img-fluid" src={plus} alt="" />

                                </div>
                                Enter Details
                              </button>
                          </div>

                        {/* Pay Less Tax Modal Opt28 button   */}
                          <div className='col-md-4 my-2'>
                            <label  className="form-label LabelSize">
                              Pay Less Tax
                                </label>
                                <br />
                              
                              <button
                                className=" btn
                                btn-outline-success "
                                onClick={handleShow28}
                              >
                                <div className="iconContainer mx-1">
                                <img className="img-fluid" src={plus} alt="" />

                                </div>
                                Enter Details
                              </button>
                          </div>

                        </div>
                       {/* Modal Button Row 10 */}



                       {/* Modal Button Row 11 */}
                        <div className='row my-3 '>

                        {/* Income Stream Modal Opt29 button   */}
                          <div className='col-md-4 my-2 '>
                            <label  className="form-label LabelSize">
                            Commence Income Stream
                                </label>
                                <br />
                              
                              <button
                                className=" btn
                                btn-outline-success "
                                onClick={handleShow29}
                              >
                                <div className="iconContainer mx-1">
                                <img className="img-fluid" src={plus} alt="" />

                                </div>
                                Enter Details
                              </button>
                          </div>

                        {/* Superannuation Accounts Modal Opt30 Btn   */}
                          <div className='col-md-4 my-2'>
                            <label  className="form-label LabelSize">
                            Combine Superannuation Accounts
                                </label>
                                <br />
                              
                              <button
                                className=" btn
                                btn-outline-success "
                                onClick={handleShow30}
                              >
                                <div className="iconContainer mx-1">
                                <img className="img-fluid" src={plus} alt="" />

                                </div>
                                Enter Details
                              </button>
                          </div>

                        {/* Contribute Superannuation Modal Opt31 button   */}
                          <div className='col-md-4 my-2'>
                            <label  className="form-label LabelSize">
                            Contribute Money to Superannuation
                                </label>
                                <br />
                              
                              <button
                                className=" btn
                                btn-outline-success "
                                onClick={handleShow31}
                              >
                                <div className="iconContainer mx-1">
                                <img className="img-fluid" src={plus} alt="" />

                                </div>
                                Enter Details
                              </button>
                          </div>

                        </div>
                       {/* Modal Button Row 11 */}



                       {/* Modal Button Row 12 */}
                        <div className='row my-3 '>

                        {/* Investment Portfolio Modal Opt32 button   */}
                          <div className='col-md-4 my-2 '>
                            <label  className="form-label LabelSize">
                            Review Investment Portfolio
                                </label>
                                <br />
                              
                              <button
                                className=" btn
                                btn-outline-success "
                                onClick={handleShow32}
                              >
                                <div className="iconContainer mx-1">
                                <img className="img-fluid" src={plus} alt="" />

                                </div>
                                Enter Details
                              </button>
                          </div>

                        {/* Financial Advice Modal Opt33 Btn   */}
                          <div className='col-md-4 my-2'>
                            <label  className="form-label LabelSize">
                            Ongoing Financial Advice
                                </label>
                                <br />
                              
                              <button
                                className=" btn
                                btn-outline-success "
                                onClick={handleShow33}
                              >
                                <div className="iconContainer mx-1">
                                <img className="img-fluid" src={plus} alt="" />

                                </div>
                                Enter Details
                              </button>
                          </div>

                        </div>
                       {/* Modal Button Row 12 */}



{/* ------------------------------------------------------------------------------------------------------------------------- */}
{/* ------------------------------------------------------------------------------------------------------------------------- */}
{/* ------------------------------------------------------------------------------------------------------------------------- */}
{/* ------------------------------------------------------------------------------------------------------------------------- */}
{/* ------------------------------------------------------------------------------------------------------------------------- */}



                       {/* Set up a Budget */}
                          <Modal
                            show={show1}
                            onHide={handleClose1}
                            backdrop="static"
                            className="modal-lg"
                            keyboard={false}
                          >
                            <Modal.Header
                              className="text-light modalBG "
                              closeButton
                            >
                          <Modal.Title className="fontStyle">
                              Set up a Budget
                          </Modal.Title>
                            </Modal.Header>
                           <Formik
                            initialValues={setup_initialValues}
                            validationSchema={setup_validationSchema}
                             onSubmit={setup_onSubmit}
                            >
                          
                            <Form>
                            <Modal.Body>
                               

                        <div className=' '>
                     
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="AreaOfAdvice" className="form-label">
                                    Area Of Advice
                                    </label>
                                    <Field
                                    id="AreaOfAdvice"
                                    name='AreaOfAdvice'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="AgedCare">Aged Care</option>
                                    <option value="Budgeting">Budgeting</option>
                                    <option value="BusinessStructure">Business Structure</option>
                                    <option value="Debt">Debt</option>
                                    <option value="EstatePlanning">Estate Planning</option>
                                    <option value="InsuranceAdvice">Insurance Advice</option>
                                    <option value="Investment">Investment</option>
                                    <option value="RetirementPlanning">Retirement Planning</option>
                                    <option value="Superannuation">Superannuation</option>
                                    <option value="Other">Other</option>
                                                            
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="AreaOfAdvice" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="When" className="form-label">
                                    When
                                    </label>
                                    <Field
                                    id="When"
                                    name='When'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="Other">Other</option>
                                    <option value="MeetGoalNow&Ongoing">Meet Goal Now & Ongoing</option>
                                    <option value="MeetGoalNow">Meet Goal Now</option>
                                    <option value="Ongoing">Ongoing</option>
                                    <option value="MeetinYear1">Meet in Year 1</option>
                                    <option value="MeetinYear2">Meet in Year 2</option>
                                    <option value="MeetinYear4">Meet in Year 3</option>
                                    <option value="MeetinYear4">Meet in Year 4</option>
                                    <option value="MeetinYear5">Meet in Year 5</option>
                                    
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="When" />
                                </div>
                            </div>
                        </div>
                            
                            <div className='row'>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="EstimatedAmount" className="form-label">Estimated Amount</   label>
                                    <Field type="number" className="form-control shadow inputDesign"
                                    id="EstimatedAmount" name='EstimatedAmount' placeholder="Estimated Amount"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='EstimatedAmount' />
                                    </div>            
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Description" className="form-label">
                                        Description
                                    </label>
                                    <Field 
                                        as="textarea"
                                        className="form-control shadow inputDesign"
                                        id="Description"
                                        name='Description'
                                        placeholder="Description"
                                    />

                                    <ErrorMessage component='div' className="text-danger fw-bold"name="Description"/>
                                    </div>
                                </div>

                           </div>
                        </div>
                        </Modal.Body>
                            <Modal.Footer>
                              <div className="col-md-12">
                                <button
                                  className="float-end btn   bgColor modalBtn"
                                  // onClick={handleClose1}
                                  type='submit'
                                >
                                  Save
                                </button>
                                <button
                                  className="float-end btn  btn-outline  backBtn mx-3"
                                  onClick={handleClose1}
                                >
                                  Cancel
                                </button>
                              </div>
                            </Modal.Footer>
                            </Form>
                          
                           </Formik>
                          </Modal>
                       {/* Set up a Budget */}

                       
                          
                       {/* Holiday */}
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
                              Take a Holiday
                           {/* <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />

                            </div> */}
                          </Modal.Title>
                            </Modal.Header>
                           <Formik
                            initialValues={Holiday_initialValues}
                            validationSchema={Holiday_validationSchema}
                             onSubmit={Holiday_onSubmit}
                            >
                          
                            <Form>
                            <Modal.Body>
                               

                        <div className=' '>
                     
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="AreaOfAdvice" className="form-label">
                                    Area Of Advice
                                    </label>
                                    <Field
                                    id="AreaOfAdvice"
                                    name='AreaOfAdvice'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="AgedCare">Aged Care</option>
                                    <option value="Budgeting">Budgeting</option>
                                    <option value="BusinessStructure">Business Structure</option>
                                    <option value="Debt">Debt</option>
                                    <option value="EstatePlanning">Estate Planning</option>
                                    <option value="InsuranceAdvice">Insurance Advice</option>
                                    <option value="Investment">Investment</option>
                                    <option value="RetirementPlanning">Retirement Planning</option>
                                    <option value="Superannuation">Superannuation</option>
                                    <option value="Other">Other</option>
                                                            
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="AreaOfAdvice" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="When" className="form-label">
                                    When
                                    </label>
                                    <Field
                                    id="When"
                                    name='When'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="Other">Other</option>
                                    <option value="MeetGoalNow&Ongoing">Meet Goal Now & Ongoing</option>
                                    <option value="MeetGoalNow">Meet Goal Now</option>
                                    <option value="Ongoing">Ongoing</option>
                                    <option value="MeetinYear1">Meet in Year 1</option>
                                    <option value="MeetinYear2">Meet in Year 2</option>
                                    <option value="MeetinYear4">Meet in Year 3</option>
                                    <option value="MeetinYear4">Meet in Year 4</option>
                                    <option value="MeetinYear5">Meet in Year 5</option>
                                    
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="When" />
                                </div>
                            </div>
                        </div>
                            
                            <div className='row'>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="EstimatedAmount" className="form-label">Estimated Amount</   label>
                                    <Field type="number" className="form-control shadow inputDesign"
                                    id="EstimatedAmount" name='EstimatedAmount' placeholder="Estimated Amount"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='EstimatedAmount' />
                                    </div>            
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Description" className="form-label">
                                        Description
                                    </label>
                                    <Field 
                                        as="textarea"
                                        className="form-control shadow inputDesign"
                                        id="Description"
                                        name='Description'
                                        placeholder="Description"
                                    />

                                    <ErrorMessage component='div' className="text-danger fw-bold"name="Description"/>
                                    </div>
                                </div>

                           </div>
                        </div>
                        </Modal.Body>
                            <Modal.Footer>
                              <div className="col-md-12">
                                <button
                                  className="float-end btn   bgColor modalBtn"
                                  // onClick={handleClose2}
                                  type='submit'
                                >
                                  Save
                                </button>
                                <button
                                  className="float-end btn  btn-outline  backBtn mx-3"
                                  onClick={handleClose2}
                                >
                                  Cancel
                                </button>
                              </div>
                            </Modal.Footer>
                            </Form>
                          
                           </Formik>
                          </Modal>
                       {/* Holiday */}

                       
                       
                       {/* Buy a Car */}
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
                             Buy a Car
                           {/* <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />

                            </div> */}
                          </Modal.Title>
                            </Modal.Header>
                           <Formik
                            initialValues={Car_initialValues}
                            validationSchema={Car_validationSchema}
                             onSubmit={Car_onSubmit}
                            >
                          
                            <Form>
                            <Modal.Body>
                               
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="AreaOfAdvice" className="form-label">
                                    Area Of Advice
                                    </label>
                                    <Field
                                    id="AreaOfAdvice"
                                    name='AreaOfAdvice'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="AgedCare">Aged Care</option>
                                    <option value="Budgeting">Budgeting</option>
                                    <option value="BusinessStructure">Business Structure</option>
                                    <option value="Debt">Debt</option>
                                    <option value="EstatePlanning">Estate Planning</option>
                                    <option value="InsuranceAdvice">Insurance Advice</option>
                                    <option value="Investment">Investment</option>
                                    <option value="RetirementPlanning">Retirement Planning</option>
                                    <option value="Superannuation">Superannuation</option>
                                    <option value="Other">Other</option>
                                                            
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="AreaOfAdvice" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="When" className="form-label">
                                    When
                                    </label>
                                    <Field
                                    id="When"
                                    name='When'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="Other">Other</option>
                                    <option value="MeetGoalNow&Ongoing">Meet Goal Now & Ongoing</option>
                                    <option value="MeetGoalNow">Meet Goal Now</option>
                                    <option value="Ongoing">Ongoing</option>
                                    <option value="MeetinYear1">Meet in Year 1</option>
                                    <option value="MeetinYear2">Meet in Year 2</option>
                                    <option value="MeetinYear4">Meet in Year 3</option>
                                    <option value="MeetinYear4">Meet in Year 4</option>
                                    <option value="MeetinYear5">Meet in Year 5</option>
                                    
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="When" />
                                </div>
                            </div>
                        </div>
                            
                            <div className='row'>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="EstimatedAmount" className="form-label">Estimated Amount</   label>
                                    <Field type="number" className="form-control shadow inputDesign"
                                    id="EstimatedAmount" name='EstimatedAmount' placeholder="Estimated Amount"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='EstimatedAmount' />
                                    </div>            
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Description" className="form-label">
                                        Description
                                    </label>
                                    <Field 
                                        as="textarea"
                                        className="form-control shadow inputDesign"
                                        id="Description"
                                        name='Description'
                                        placeholder="Description"
                                    />

                                    <ErrorMessage component='div' className="text-danger fw-bold"name="Description"/>
                                    </div>
                                </div>

                           </div>
                        
                        </Modal.Body>
                            <Modal.Footer>
                              <div className="col-md-12">
                                <button
                                  className="float-end btn   bgColor modalBtn"
                                  type='submit'
                                >
                                  Save
                                </button>
                                <button
                                  className="float-end btn  btn-outline  backBtn mx-3"
                                  onClick={handleClose3}
                                >
                                  Cancel
                                </button>
                              </div>
                            </Modal.Footer>
                            </Form>
                          
                           </Formik>
                          </Modal>
                       {/* Buy a Car */}
                          
                          

                       {/* Credid Card */}
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
                              Pay off Credit Card/Debt
                           {/* <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />

                            </div> */}
                          </Modal.Title>
                            </Modal.Header>
                           <Formik
                            initialValues={CredidCard_initialValues}
                            validationSchema={CredidCard_validationSchema}
                             onSubmit={CredidCard_onSubmit}
                            >
                          
                            <Form>
                            <Modal.Body>
                               
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="AreaOfAdvice" className="form-label">
                                    Area Of Advice
                                    </label>
                                    <Field
                                    id="AreaOfAdvice"
                                    name='AreaOfAdvice'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="AgedCare">Aged Care</option>
                                    <option value="Budgeting">Budgeting</option>
                                    <option value="BusinessStructure">Business Structure</option>
                                    <option value="Debt">Debt</option>
                                    <option value="EstatePlanning">Estate Planning</option>
                                    <option value="InsuranceAdvice">Insurance Advice</option>
                                    <option value="Investment">Investment</option>
                                    <option value="RetirementPlanning">Retirement Planning</option>
                                    <option value="Superannuation">Superannuation</option>
                                    <option value="Other">Other</option>
                                                            
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="AreaOfAdvice" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="When" className="form-label">
                                    When
                                    </label>
                                    <Field
                                    id="When"
                                    name='When'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="Other">Other</option>
                                    <option value="MeetGoalNow&Ongoing">Meet Goal Now & Ongoing</option>
                                    <option value="MeetGoalNow">Meet Goal Now</option>
                                    <option value="Ongoing">Ongoing</option>
                                    <option value="MeetinYear1">Meet in Year 1</option>
                                    <option value="MeetinYear2">Meet in Year 2</option>
                                    <option value="MeetinYear4">Meet in Year 3</option>
                                    <option value="MeetinYear4">Meet in Year 4</option>
                                    <option value="MeetinYear5">Meet in Year 5</option>
                                    
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="When" />
                                </div>
                            </div>
                        </div>
                            
                            <div className='row'>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="EstimatedAmount" className="form-label">Estimated Amount</   label>
                                    <Field type="number" className="form-control shadow inputDesign"
                                    id="EstimatedAmount" name='EstimatedAmount' placeholder="Estimated Amount"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='EstimatedAmount' />
                                    </div>            
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Description" className="form-label">
                                        Description
                                    </label>
                                    <Field 
                                        as="textarea"
                                        className="form-control shadow inputDesign"
                                        id="Description"
                                        name='Description'
                                        placeholder="Description"
                                    />

                                    <ErrorMessage component='div' className="text-danger fw-bold"name="Description"/>
                                    </div>
                                </div>

                           </div>
                        
                        </Modal.Body>
                            <Modal.Footer>
                              <div className="col-md-12">
                                <button
                                  className="float-end btn   bgColor modalBtn"
                                  type='submit'
                                >
                                  Save
                                </button>
                                <button
                                  className="float-end btn  btn-outline  backBtn mx-3"
                                  onClick={handleClose4}
                                >
                                  Cancel
                                </button>
                              </div>
                            </Modal.Footer>
                            </Form>
                          
                           </Formik>
                          </Modal>
                       {/* Credit Card */}



                       {/* Accumulate an Emergency Fund */}
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
                              Accumulate an Emergency Fund
                           {/* <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />

                            </div> */}
                          </Modal.Title>
                            </Modal.Header>
                           <Formik
                            initialValues={Accumulate_initialValues}
                            validationSchema={Accumulate_validationSchema}
                             onSubmit={Accumulate_onSubmit}
                            >
                          
                            <Form>
                            <Modal.Body>
                               
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="AreaOfAdvice" className="form-label">
                                    Area Of Advice
                                    </label>
                                    <Field
                                    id="AreaOfAdvice"
                                    name='AreaOfAdvice'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="AgedCare">Aged Care</option>
                                    <option value="Budgeting">Budgeting</option>
                                    <option value="BusinessStructure">Business Structure</option>
                                    <option value="Debt">Debt</option>
                                    <option value="EstatePlanning">Estate Planning</option>
                                    <option value="InsuranceAdvice">Insurance Advice</option>
                                    <option value="Investment">Investment</option>
                                    <option value="RetirementPlanning">Retirement Planning</option>
                                    <option value="Superannuation">Superannuation</option>
                                    <option value="Other">Other</option>
                                                            
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="AreaOfAdvice" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="When" className="form-label">
                                    When
                                    </label>
                                    <Field
                                    id="When"
                                    name='When'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="Other">Other</option>
                                    <option value="MeetGoalNow&Ongoing">Meet Goal Now & Ongoing</option>
                                    <option value="MeetGoalNow">Meet Goal Now</option>
                                    <option value="Ongoing">Ongoing</option>
                                    <option value="MeetinYear1">Meet in Year 1</option>
                                    <option value="MeetinYear2">Meet in Year 2</option>
                                    <option value="MeetinYear4">Meet in Year 3</option>
                                    <option value="MeetinYear4">Meet in Year 4</option>
                                    <option value="MeetinYear5">Meet in Year 5</option>
                                    
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="When" />
                                </div>
                            </div>
                        </div>
                            
                            <div className='row'>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="EstimatedAmount" className="form-label">Estimated Amount</   label>
                                    <Field type="number" className="form-control shadow inputDesign"
                                    id="EstimatedAmount" name='EstimatedAmount' placeholder="Estimated Amount"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='EstimatedAmount' />
                                    </div>            
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Description" className="form-label">
                                        Description
                                    </label>
                                    <Field 
                                        as="textarea"
                                        className="form-control shadow inputDesign"
                                        id="Description"
                                        name='Description'
                                        placeholder="Description"
                                    />

                                    <ErrorMessage component='div' className="text-danger fw-bold"name="Description"/>
                                    </div>
                                </div>

                           </div>
                        
                        </Modal.Body>
                            <Modal.Footer>
                              <div className="col-md-12">
                                <button
                                  className="float-end btn   bgColor modalBtn"
                                  type='submit'
                                >
                                  Save
                                </button>
                                <button
                                  className="float-end btn  btn-outline  backBtn mx-3"
                                  onClick={handleClose5}
                                >
                                  Cancel
                                </button>
                              </div>
                            </Modal.Footer>
                            </Form>
                          
                           </Formik>
                          </Modal>
                       {/* Accumulate an Emergency Fund */}



                       {/* Regular Savings Plan */}
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
                             Commence a Regular Savings Plan
                           {/* <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />

                            </div> */}
                          </Modal.Title>
                            </Modal.Header>
                           <Formik
                            initialValues={Regular_initialValues}
                            validationSchema={Regular_validationSchema}
                             onSubmit={Regular_onSubmit}
                            >
                          
                            <Form>
                            <Modal.Body>
                               
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="AreaOfAdvice" className="form-label">
                                    Area Of Advice
                                    </label>
                                    <Field
                                    id="AreaOfAdvice"
                                    name='AreaOfAdvice'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="AgedCare">Aged Care</option>
                                    <option value="Budgeting">Budgeting</option>
                                    <option value="BusinessStructure">Business Structure</option>
                                    <option value="Debt">Debt</option>
                                    <option value="EstatePlanning">Estate Planning</option>
                                    <option value="InsuranceAdvice">Insurance Advice</option>
                                    <option value="Investment">Investment</option>
                                    <option value="RetirementPlanning">Retirement Planning</option>
                                    <option value="Superannuation">Superannuation</option>
                                    <option value="Other">Other</option>
                                                            
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="AreaOfAdvice" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="When" className="form-label">
                                    When
                                    </label>
                                    <Field
                                    id="When"
                                    name='When'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="Other">Other</option>
                                    <option value="MeetGoalNow&Ongoing">Meet Goal Now & Ongoing</option>
                                    <option value="MeetGoalNow">Meet Goal Now</option>
                                    <option value="Ongoing">Ongoing</option>
                                    <option value="MeetinYear1">Meet in Year 1</option>
                                    <option value="MeetinYear2">Meet in Year 2</option>
                                    <option value="MeetinYear4">Meet in Year 3</option>
                                    <option value="MeetinYear4">Meet in Year 4</option>
                                    <option value="MeetinYear5">Meet in Year 5</option>
                                    
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="When" />
                                </div>
                            </div>
                        </div>
                            
                            <div className='row'>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="EstimatedAmount" className="form-label">Estimated Amount</   label>
                                    <Field type="number" className="form-control shadow inputDesign"
                                    id="EstimatedAmount" name='EstimatedAmount' placeholder="Estimated Amount"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='EstimatedAmount' />
                                    </div>            
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Description" className="form-label">
                                        Description
                                    </label>
                                    <Field 
                                        as="textarea"
                                        className="form-control shadow inputDesign"
                                        id="Description"
                                        name='Description'
                                        placeholder="Description"
                                    />

                                    <ErrorMessage component='div' className="text-danger fw-bold"name="Description"/>
                                    </div>
                                </div>

                           </div>
                        
                        </Modal.Body>
                            <Modal.Footer>
                              <div className="col-md-12">
                                <button
                                  className="float-end btn   bgColor modalBtn"
                                  type='submit'
                                >
                                  Save
                                </button>
                                <button
                                  className="float-end btn  btn-outline  backBtn mx-3"
                                  onClick={handleClose6}
                                >
                                  Cancel
                                </button>
                              </div>
                            </Modal.Footer>
                            </Form>
                          
                           </Formik>
                          </Modal>
                       {/* Regular Savings Plan */}

                             
                                           
                       {/* Protect my lifeStyle & Family */}
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
                              Protect my LifeStyle & Family
                           {/* <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />

                            </div> */}
                          </Modal.Title>
                            </Modal.Header>
                           <Formik
                            initialValues={Protect_initialValues}
                            validationSchema={Protect_validationSchema}
                             onSubmit={Protect_onSubmit}
                            >
                          
                            <Form>
                            <Modal.Body>
                               
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="AreaOfAdvice" className="form-label">
                                    Area Of Advice
                                    </label>
                                    <Field
                                    id="AreaOfAdvice"
                                    name='AreaOfAdvice'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="AgedCare">Aged Care</option>
                                    <option value="Budgeting">Budgeting</option>
                                    <option value="BusinessStructure">Business Structure</option>
                                    <option value="Debt">Debt</option>
                                    <option value="EstatePlanning">Estate Planning</option>
                                    <option value="InsuranceAdvice">Insurance Advice</option>
                                    <option value="Investment">Investment</option>
                                    <option value="RetirementPlanning">Retirement Planning</option>
                                    <option value="Superannuation">Superannuation</option>
                                    <option value="Other">Other</option>
                                                            
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="AreaOfAdvice" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="When" className="form-label">
                                    When
                                    </label>
                                    <Field
                                    id="When"
                                    name='When'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="Other">Other</option>
                                    <option value="MeetGoalNow&Ongoing">Meet Goal Now & Ongoing</option>
                                    <option value="MeetGoalNow">Meet Goal Now</option>
                                    <option value="Ongoing">Ongoing</option>
                                    <option value="MeetinYear1">Meet in Year 1</option>
                                    <option value="MeetinYear2">Meet in Year 2</option>
                                    <option value="MeetinYear4">Meet in Year 3</option>
                                    <option value="MeetinYear4">Meet in Year 4</option>
                                    <option value="MeetinYear5">Meet in Year 5</option>
                                    
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="When" />
                                </div>
                            </div>
                        </div>
                            
                            <div className='row'>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="EstimatedAmount" className="form-label">Estimated Amount</   label>
                                    <Field type="number" className="form-control shadow inputDesign"
                                    id="EstimatedAmount" name='EstimatedAmount' placeholder="Estimated Amount"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='EstimatedAmount' />
                                    </div>            
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Description" className="form-label">
                                        Description
                                    </label>
                                    <Field 
                                        as="textarea"
                                        className="form-control shadow inputDesign"
                                        id="Description"
                                        name='Description'
                                        placeholder="Description"
                                    />

                                    <ErrorMessage component='div' className="text-danger fw-bold"name="Description"/>
                                    </div>
                                </div>

                           </div>
                        
                        </Modal.Body>
                            <Modal.Footer>
                              <div className="col-md-12">
                                <button
                                  className="float-end btn   bgColor modalBtn"
                                  type='submit'
                                >
                                  Save
                                </button>
                                <button
                                  className="float-end btn  btn-outline  backBtn mx-3"
                                  onClick={handleClose7}
                                >
                                  Cancel
                                </button>
                              </div>
                            </Modal.Footer>
                            </Form>
                          
                           </Formik>
                          </Modal>
                       {/* Protect my lifeStyle & Family */} 

                             
                                           
                       {/* Buy a House */}
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
                              Buy a House
                           {/* <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />

                            </div> */}
                          </Modal.Title>
                            </Modal.Header>
                           <Formik
                            initialValues={House_initialValues}
                            validationSchema={House_validationSchema}
                             onSubmit={House_onSubmit}
                            >
                          
                            <Form>
                            <Modal.Body>
                               
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="AreaOfAdvice" className="form-label">
                                    Area Of Advice
                                    </label>
                                    <Field
                                    id="AreaOfAdvice"
                                    name='AreaOfAdvice'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="AgedCare">Aged Care</option>
                                    <option value="Budgeting">Budgeting</option>
                                    <option value="BusinessStructure">Business Structure</option>
                                    <option value="Debt">Debt</option>
                                    <option value="EstatePlanning">Estate Planning</option>
                                    <option value="InsuranceAdvice">Insurance Advice</option>
                                    <option value="Investment">Investment</option>
                                    <option value="RetirementPlanning">Retirement Planning</option>
                                    <option value="Superannuation">Superannuation</option>
                                    <option value="Other">Other</option>
                                                            
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="AreaOfAdvice" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="When" className="form-label">
                                    When
                                    </label>
                                    <Field
                                    id="When"
                                    name='When'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="Other">Other</option>
                                    <option value="MeetGoalNow&Ongoing">Meet Goal Now & Ongoing</option>
                                    <option value="MeetGoalNow">Meet Goal Now</option>
                                    <option value="Ongoing">Ongoing</option>
                                    <option value="MeetinYear1">Meet in Year 1</option>
                                    <option value="MeetinYear2">Meet in Year 2</option>
                                    <option value="MeetinYear4">Meet in Year 3</option>
                                    <option value="MeetinYear4">Meet in Year 4</option>
                                    <option value="MeetinYear5">Meet in Year 5</option>
                                    
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="When" />
                                </div>
                            </div>
                        </div>
                            
                            <div className='row'>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="EstimatedAmount" className="form-label">Estimated Amount</   label>
                                    <Field type="number" className="form-control shadow inputDesign"
                                    id="EstimatedAmount" name='EstimatedAmount' placeholder="Estimated Amount"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='EstimatedAmount' />
                                    </div>            
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Description" className="form-label">
                                        Description
                                    </label>
                                    <Field 
                                        as="textarea"
                                        className="form-control shadow inputDesign"
                                        id="Description"
                                        name='Description'
                                        placeholder="Description"
                                    />

                                    <ErrorMessage component='div' className="text-danger fw-bold"name="Description"/>
                                    </div>
                                </div>

                           </div>
                        
                        </Modal.Body>
                            <Modal.Footer>
                              <div className="col-md-12">
                                <button
                                  className="float-end btn   bgColor modalBtn"
                                  type='submit'
                                >
                                  Save
                                </button>
                                <button
                                  className="float-end btn  btn-outline  backBtn mx-3"
                                  onClick={handleClose8}
                                >
                                  Cancel
                                </button>
                              </div>
                            </Modal.Footer>
                            </Form>
                          
                           </Formik>
                          </Modal>
                       {/* Buy a House */} 

                             
                                           
                       {/* Retirement Plan */}
                          <Modal
                            show={show9}
                            onHide={handleClose9}
                            backdrop="static"
                            className="modal-lg"
                            keyboard={false}
                          >
                            <Modal.Header
                              className="text-light modalBG "
                              closeButton
                            >
                          <Modal.Title className="fontStyle">
                              Retirement Plan
                           {/* <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />

                            </div> */}
                          </Modal.Title>
                            </Modal.Header>
                           <Formik
                            initialValues={Retirement_initialValues}
                            validationSchema={Retirement_validationSchema}
                             onSubmit={Retirement_onSubmit}
                            >
                          
                            <Form>
                            <Modal.Body>
                               
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="AreaOfAdvice" className="form-label">
                                    Area Of Advice
                                    </label>
                                    <Field
                                    id="AreaOfAdvice"
                                    name='AreaOfAdvice'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="AgedCare">Aged Care</option>
                                    <option value="Budgeting">Budgeting</option>
                                    <option value="BusinessStructure">Business Structure</option>
                                    <option value="Debt">Debt</option>
                                    <option value="EstatePlanning">Estate Planning</option>
                                    <option value="InsuranceAdvice">Insurance Advice</option>
                                    <option value="Investment">Investment</option>
                                    <option value="RetirementPlanning">Retirement Planning</option>
                                    <option value="Superannuation">Superannuation</option>
                                    <option value="Other">Other</option>
                                                            
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="AreaOfAdvice" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="When" className="form-label">
                                    When
                                    </label>
                                    <Field
                                    id="When"
                                    name='When'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="Other">Other</option>
                                    <option value="MeetGoalNow&Ongoing">Meet Goal Now & Ongoing</option>
                                    <option value="MeetGoalNow">Meet Goal Now</option>
                                    <option value="Ongoing">Ongoing</option>
                                    <option value="MeetinYear1">Meet in Year 1</option>
                                    <option value="MeetinYear2">Meet in Year 2</option>
                                    <option value="MeetinYear4">Meet in Year 3</option>
                                    <option value="MeetinYear4">Meet in Year 4</option>
                                    <option value="MeetinYear5">Meet in Year 5</option>
                                    
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="When" />
                                </div>
                            </div>
                        </div>
                            
                            <div className='row'>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="EstimatedAmount" className="form-label">Estimated Amount</   label>
                                    <Field type="number" className="form-control shadow inputDesign"
                                    id="EstimatedAmount" name='EstimatedAmount' placeholder="Estimated Amount"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='EstimatedAmount' />
                                    </div>            
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Description" className="form-label">
                                        Description
                                    </label>
                                    <Field 
                                        as="textarea"
                                        className="form-control shadow inputDesign"
                                        id="Description"
                                        name='Description'
                                        placeholder="Description"
                                    />

                                    <ErrorMessage component='div' className="text-danger fw-bold"name="Description"/>
                                    </div>
                                </div>

                           </div>
                        
                        </Modal.Body>
                            <Modal.Footer>
                              <div className="col-md-12">
                                <button
                                  className="float-end btn   bgColor modalBtn"
                                  type='submit'
                                >
                                  Save
                                </button>
                                <button
                                  className="float-end btn  btn-outline  backBtn mx-3"
                                  onClick={handleClose9}
                                >
                                  Cancel
                                </button>
                              </div>
                            </Modal.Footer>
                            </Form>
                          
                           </Formik>
                          </Modal>
                       {/* Retirement Plan */} 

                             
                                           
                       {/* Save for Children's Education */}
                          <Modal
                            show={show10}
                            onHide={handleClose10}
                            backdrop="static"
                            className="modal-lg"
                            keyboard={false}
                          >
                            <Modal.Header
                              className="text-light modalBG "
                              closeButton
                            >
                          <Modal.Title className="fontStyle">
                          Children's Education
                           {/* <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />

                            </div> */}
                          </Modal.Title>
                            </Modal.Header>
                           <Formik
                            initialValues={ChildrenEducation_initialValues}
                            validationSchema={ChildrenEducation_validationSchema}
                             onSubmit={ChildrenEducation_onSubmit}
                            >
                          
                            <Form>
                            <Modal.Body>
                               
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="AreaOfAdvice" className="form-label">
                                    Area Of Advice
                                    </label>
                                    <Field
                                    id="AreaOfAdvice"
                                    name='AreaOfAdvice'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="AgedCare">Aged Care</option>
                                    <option value="Budgeting">Budgeting</option>
                                    <option value="BusinessStructure">Business Structure</option>
                                    <option value="Debt">Debt</option>
                                    <option value="EstatePlanning">Estate Planning</option>
                                    <option value="InsuranceAdvice">Insurance Advice</option>
                                    <option value="Investment">Investment</option>
                                    <option value="RetirementPlanning">Retirement Planning</option>
                                    <option value="Superannuation">Superannuation</option>
                                    <option value="Other">Other</option>
                                                            
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="AreaOfAdvice" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="When" className="form-label">
                                    When
                                    </label>
                                    <Field
                                    id="When"
                                    name='When'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="Other">Other</option>
                                    <option value="MeetGoalNow&Ongoing">Meet Goal Now & Ongoing</option>
                                    <option value="MeetGoalNow">Meet Goal Now</option>
                                    <option value="Ongoing">Ongoing</option>
                                    <option value="MeetinYear1">Meet in Year 1</option>
                                    <option value="MeetinYear2">Meet in Year 2</option>
                                    <option value="MeetinYear4">Meet in Year 3</option>
                                    <option value="MeetinYear4">Meet in Year 4</option>
                                    <option value="MeetinYear5">Meet in Year 5</option>
                                    
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="When" />
                                </div>
                            </div>
                        </div>
                            
                            <div className='row'>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="EstimatedAmount" className="form-label">Estimated Amount</   label>
                                    <Field type="number" className="form-control shadow inputDesign"
                                    id="EstimatedAmount" name='EstimatedAmount' placeholder="Estimated Amount"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='EstimatedAmount' />
                                    </div>            
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Description" className="form-label">
                                        Description
                                    </label>
                                    <Field 
                                        as="textarea"
                                        className="form-control shadow inputDesign"
                                        id="Description"
                                        name='Description'
                                        placeholder="Description"
                                    />

                                    <ErrorMessage component='div' className="text-danger fw-bold"name="Description"/>
                                    </div>
                                </div>

                           </div>
                        
                        </Modal.Body>
                            <Modal.Footer>
                              <div className="col-md-12">
                                <button
                                  className="float-end btn   bgColor modalBtn"
                                  type='submit'
                                >
                                  Save
                                </button>
                                <button
                                  className="float-end btn  btn-outline  backBtn mx-3"
                                  onClick={handleClose10}
                                >
                                  Cancel
                                </button>
                              </div>
                            </Modal.Footer>
                            </Form>
                          
                           </Formik>
                          </Modal>
                       {/* Save for Children's Education */}   

                             
                                           
                       {/* Boat or Carvan */}
                          <Modal
                            show={show11}
                            onHide={handleClose11}
                            backdrop="static"
                            className="modal-lg"
                            keyboard={false}
                          >
                            <Modal.Header
                              className="text-light modalBG "
                              closeButton
                            >
                          <Modal.Title className="fontStyle">
                              Boat or Carvan
                           {/* <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />

                            </div> */}
                          </Modal.Title>
                            </Modal.Header>
                           <Formik
                            initialValues={BoatCarvan_initialValues}
                            validationSchema={BoatCarvan_validationSchema}
                             onSubmit={BoatCarvan_onSubmit}
                            >
                          
                            <Form>
                            <Modal.Body>
                               
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="AreaOfAdvice" className="form-label">
                                    Area Of Advice
                                    </label>
                                    <Field
                                    id="AreaOfAdvice"
                                    name='AreaOfAdvice'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="AgedCare">Aged Care</option>
                                    <option value="Budgeting">Budgeting</option>
                                    <option value="BusinessStructure">Business Structure</option>
                                    <option value="Debt">Debt</option>
                                    <option value="EstatePlanning">Estate Planning</option>
                                    <option value="InsuranceAdvice">Insurance Advice</option>
                                    <option value="Investment">Investment</option>
                                    <option value="RetirementPlanning">Retirement Planning</option>
                                    <option value="Superannuation">Superannuation</option>
                                    <option value="Other">Other</option>
                                                            
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="AreaOfAdvice" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="When" className="form-label">
                                    When
                                    </label>
                                    <Field
                                    id="When"
                                    name='When'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="Other">Other</option>
                                    <option value="MeetGoalNow&Ongoing">Meet Goal Now & Ongoing</option>
                                    <option value="MeetGoalNow">Meet Goal Now</option>
                                    <option value="Ongoing">Ongoing</option>
                                    <option value="MeetinYear1">Meet in Year 1</option>
                                    <option value="MeetinYear2">Meet in Year 2</option>
                                    <option value="MeetinYear4">Meet in Year 3</option>
                                    <option value="MeetinYear4">Meet in Year 4</option>
                                    <option value="MeetinYear5">Meet in Year 5</option>
                                    
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="When" />
                                </div>
                            </div>
                        </div>
                            
                            <div className='row'>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="EstimatedAmount" className="form-label">Estimated Amount</   label>
                                    <Field type="number" className="form-control shadow inputDesign"
                                    id="EstimatedAmount" name='EstimatedAmount' placeholder="Estimated Amount"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='EstimatedAmount' />
                                    </div>            
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Description" className="form-label">
                                        Description
                                    </label>
                                    <Field 
                                        as="textarea"
                                        className="form-control shadow inputDesign"
                                        id="Description"
                                        name='Description'
                                        placeholder="Description"
                                    />

                                    <ErrorMessage component='div' className="text-danger fw-bold"name="Description"/>
                                    </div>
                                </div>

                           </div>
                        
                        </Modal.Body>
                            <Modal.Footer>
                              <div className="col-md-12">
                                <button
                                  className="float-end btn   bgColor modalBtn"
                                  type='submit'
                                >
                                  Save
                                </button>
                                <button
                                  className="float-end btn  btn-outline  backBtn mx-3"
                                  onClick={handleClose11}
                                >
                                  Cancel
                                </button>
                              </div>
                            </Modal.Footer>
                            </Form>
                          
                           </Formik>
                          </Modal>
                       {/* Boat or Carvan */}   

                             
                                           
                       {/* Start a Business */}
                          <Modal
                            show={show12}
                            onHide={handleClose12}
                            backdrop="static"
                            className="modal-lg"
                            keyboard={false}
                          >
                            <Modal.Header
                              className="text-light modalBG "
                              closeButton
                            >
                          <Modal.Title className="fontStyle">
                              Business
                           {/* <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />

                            </div> */}
                          </Modal.Title>
                            </Modal.Header>
                           <Formik
                            initialValues={Business_initialValues}
                            validationSchema={Business_validationSchema}
                             onSubmit={Business_onSubmit}
                            >
                          
                            <Form>
                            <Modal.Body>
                               
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="AreaOfAdvice" className="form-label">
                                    Area Of Advice
                                    </label>
                                    <Field
                                    id="AreaOfAdvice"
                                    name='AreaOfAdvice'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="AgedCare">Aged Care</option>
                                    <option value="Budgeting">Budgeting</option>
                                    <option value="BusinessStructure">Business Structure</option>
                                    <option value="Debt">Debt</option>
                                    <option value="EstatePlanning">Estate Planning</option>
                                    <option value="InsuranceAdvice">Insurance Advice</option>
                                    <option value="Investment">Investment</option>
                                    <option value="RetirementPlanning">Retirement Planning</option>
                                    <option value="Superannuation">Superannuation</option>
                                    <option value="Other">Other</option>
                                                            
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="AreaOfAdvice" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="When" className="form-label">
                                    When
                                    </label>
                                    <Field
                                    id="When"
                                    name='When'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="Other">Other</option>
                                    <option value="MeetGoalNow&Ongoing">Meet Goal Now & Ongoing</option>
                                    <option value="MeetGoalNow">Meet Goal Now</option>
                                    <option value="Ongoing">Ongoing</option>
                                    <option value="MeetinYear1">Meet in Year 1</option>
                                    <option value="MeetinYear2">Meet in Year 2</option>
                                    <option value="MeetinYear4">Meet in Year 3</option>
                                    <option value="MeetinYear4">Meet in Year 4</option>
                                    <option value="MeetinYear5">Meet in Year 5</option>
                                    
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="When" />
                                </div>
                            </div>
                        </div>
                            
                            <div className='row'>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="EstimatedAmount" className="form-label">Estimated Amount</   label>
                                    <Field type="number" className="form-control shadow inputDesign"
                                    id="EstimatedAmount" name='EstimatedAmount' placeholder="Estimated Amount"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='EstimatedAmount' />
                                    </div>            
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Description" className="form-label">
                                        Description
                                    </label>
                                    <Field 
                                        as="textarea"
                                        className="form-control shadow inputDesign"
                                        id="Description"
                                        name='Description'
                                        placeholder="Description"
                                    />

                                    <ErrorMessage component='div' className="text-danger fw-bold"name="Description"/>
                                    </div>
                                </div>

                           </div>
                        
                        </Modal.Body>
                            <Modal.Footer>
                              <div className="col-md-12">
                                <button
                                  className="float-end btn   bgColor modalBtn"
                                  type='submit'
                                >
                                  Save
                                </button>
                                <button
                                  className="float-end btn  btn-outline  backBtn mx-3"
                                  onClick={handleClose12}
                                >
                                  Cancel
                                </button>
                              </div>
                            </Modal.Footer>
                            </Form>
                          
                           </Formik>
                          </Modal>
                       {/* Start a Business */}   

                             
                                           
                       {/* Pay off Home Loan */}
                          <Modal
                            show={show13}
                            onHide={handleClose13}
                            backdrop="static"
                            className="modal-lg"
                            keyboard={false}
                          >
                            <Modal.Header
                              className="text-light modalBG "
                              closeButton
                            >
                          <Modal.Title className="fontStyle">
                              Home Loan
                           {/* <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />

                            </div> */}
                          </Modal.Title>
                            </Modal.Header>
                           <Formik
                            initialValues={HomeLoan_initialValues}
                            validationSchema={HomeLoan_validationSchema}
                             onSubmit={HomeLoan_onSubmit}
                            >
                          
                            <Form>
                            <Modal.Body>
                               
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="AreaOfAdvice" className="form-label">
                                    Area Of Advice
                                    </label>
                                    <Field
                                    id="AreaOfAdvice"
                                    name='AreaOfAdvice'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="AgedCare">Aged Care</option>
                                    <option value="Budgeting">Budgeting</option>
                                    <option value="BusinessStructure">Business Structure</option>
                                    <option value="Debt">Debt</option>
                                    <option value="EstatePlanning">Estate Planning</option>
                                    <option value="InsuranceAdvice">Insurance Advice</option>
                                    <option value="Investment">Investment</option>
                                    <option value="RetirementPlanning">Retirement Planning</option>
                                    <option value="Superannuation">Superannuation</option>
                                    <option value="Other">Other</option>
                                                            
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="AreaOfAdvice" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="When" className="form-label">
                                    When
                                    </label>
                                    <Field
                                    id="When"
                                    name='When'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="Other">Other</option>
                                    <option value="MeetGoalNow&Ongoing">Meet Goal Now & Ongoing</option>
                                    <option value="MeetGoalNow">Meet Goal Now</option>
                                    <option value="Ongoing">Ongoing</option>
                                    <option value="MeetinYear1">Meet in Year 1</option>
                                    <option value="MeetinYear2">Meet in Year 2</option>
                                    <option value="MeetinYear4">Meet in Year 3</option>
                                    <option value="MeetinYear4">Meet in Year 4</option>
                                    <option value="MeetinYear5">Meet in Year 5</option>
                                    
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="When" />
                                </div>
                            </div>
                        </div>
                            
                            <div className='row'>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="EstimatedAmount" className="form-label">Estimated Amount</   label>
                                    <Field type="number" className="form-control shadow inputDesign"
                                    id="EstimatedAmount" name='EstimatedAmount' placeholder="Estimated Amount"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='EstimatedAmount' />
                                    </div>            
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Description" className="form-label">
                                        Description
                                    </label>
                                    <Field 
                                        as="textarea"
                                        className="form-control shadow inputDesign"
                                        id="Description"
                                        name='Description'
                                        placeholder="Description"
                                    />

                                    <ErrorMessage component='div' className="text-danger fw-bold"name="Description"/>
                                    </div>
                                </div>

                           </div>
                        
                        </Modal.Body>
                            <Modal.Footer>
                              <div className="col-md-12">
                                <button
                                  className="float-end btn   bgColor modalBtn"
                                  type='submit'
                                >
                                  Save
                                </button>
                                <button
                                  className="float-end btn  btn-outline  backBtn mx-3"
                                  onClick={handleClose13}
                                >
                                  Cancel
                                </button>
                              </div>
                            </Modal.Footer>
                            </Form>
                          
                           </Formik>
                          </Modal>
                       {/* Pay off Home Loan */} 

                             
                                           
                       {/* Upgrade Family Home */}
                          <Modal
                            show={show14}
                            onHide={handleClose14}
                            backdrop="static"
                            className="modal-lg"
                            keyboard={false}
                          >
                            <Modal.Header
                              className="text-light modalBG "
                              closeButton
                            >
                          <Modal.Title className="fontStyle">
                              Upgrade Family Home
                           {/* <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />

                            </div> */}
                          </Modal.Title>
                            </Modal.Header>
                           <Formik
                            initialValues={UpgradeFamilyHome_initialValues}
                            validationSchema={UpgradeFamilyHome_validationSchema}
                             onSubmit={UpgradeFamilyHome_onSubmit}
                            >
                          
                            <Form>
                            <Modal.Body>
                               
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="AreaOfAdvice" className="form-label">
                                    Area Of Advice
                                    </label>
                                    <Field
                                    id="AreaOfAdvice"
                                    name='AreaOfAdvice'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="AgedCare">Aged Care</option>
                                    <option value="Budgeting">Budgeting</option>
                                    <option value="BusinessStructure">Business Structure</option>
                                    <option value="Debt">Debt</option>
                                    <option value="EstatePlanning">Estate Planning</option>
                                    <option value="InsuranceAdvice">Insurance Advice</option>
                                    <option value="Investment">Investment</option>
                                    <option value="RetirementPlanning">Retirement Planning</option>
                                    <option value="Superannuation">Superannuation</option>
                                    <option value="Other">Other</option>
                                                            
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="AreaOfAdvice" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="When" className="form-label">
                                    When
                                    </label>
                                    <Field
                                    id="When"
                                    name='When'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="Other">Other</option>
                                    <option value="MeetGoalNow&Ongoing">Meet Goal Now & Ongoing</option>
                                    <option value="MeetGoalNow">Meet Goal Now</option>
                                    <option value="Ongoing">Ongoing</option>
                                    <option value="MeetinYear1">Meet in Year 1</option>
                                    <option value="MeetinYear2">Meet in Year 2</option>
                                    <option value="MeetinYear4">Meet in Year 3</option>
                                    <option value="MeetinYear4">Meet in Year 4</option>
                                    <option value="MeetinYear5">Meet in Year 5</option>
                                    
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="When" />
                                </div>
                            </div>
                        </div>
                            
                            <div className='row'>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="EstimatedAmount" className="form-label">Estimated Amount</   label>
                                    <Field type="number" className="form-control shadow inputDesign"
                                    id="EstimatedAmount" name='EstimatedAmount' placeholder="Estimated Amount"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='EstimatedAmount' />
                                    </div>            
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Description" className="form-label">
                                        Description
                                    </label>
                                    <Field 
                                        as="textarea"
                                        className="form-control shadow inputDesign"
                                        id="Description"
                                        name='Description'
                                        placeholder="Description"
                                    />

                                    <ErrorMessage component='div' className="text-danger fw-bold"name="Description"/>
                                    </div>
                                </div>

                           </div>
                        
                        </Modal.Body>
                            <Modal.Footer>
                              <div className="col-md-12">
                                <button
                                  className="float-end btn   bgColor modalBtn"
                                  type='submit'
                                >
                                  Save
                                </button>
                                <button
                                  className="float-end btn  btn-outline  backBtn mx-3"
                                  onClick={handleClose14}
                                >
                                  Cancel
                                </button>
                              </div>
                            </Modal.Footer>
                            </Form>
                          
                           </Formik>
                          </Modal>
                       {/* Upgrade Family Home */} 

                             
                                           
                       {/* Down Size Family Home */}
                          <Modal
                            show={show15}
                            onHide={handleClose15}
                            backdrop="static"
                            className="modal-lg"
                            keyboard={false}
                          >
                            <Modal.Header
                              className="text-light modalBG "
                              closeButton
                            >
                          <Modal.Title className="fontStyle">
                              Down Size Family Home
                           {/* <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />

                            </div> */}
                          </Modal.Title>
                            </Modal.Header>
                           <Formik
                            initialValues={DownsizeHome_initialValues}
                            validationSchema={DownsizeHome_validationSchema}
                             onSubmit={DownsizeHome_onSubmit}
                            >
                          
                            <Form>
                            <Modal.Body>
                               
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="AreaOfAdvice" className="form-label">
                                    Area Of Advice
                                    </label>
                                    <Field
                                    id="AreaOfAdvice"
                                    name='AreaOfAdvice'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="AgedCare">Aged Care</option>
                                    <option value="Budgeting">Budgeting</option>
                                    <option value="BusinessStructure">Business Structure</option>
                                    <option value="Debt">Debt</option>
                                    <option value="EstatePlanning">Estate Planning</option>
                                    <option value="InsuranceAdvice">Insurance Advice</option>
                                    <option value="Investment">Investment</option>
                                    <option value="RetirementPlanning">Retirement Planning</option>
                                    <option value="Superannuation">Superannuation</option>
                                    <option value="Other">Other</option>
                                                            
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="AreaOfAdvice" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="When" className="form-label">
                                    When
                                    </label>
                                    <Field
                                    id="When"
                                    name='When'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="Other">Other</option>
                                    <option value="MeetGoalNow&Ongoing">Meet Goal Now & Ongoing</option>
                                    <option value="MeetGoalNow">Meet Goal Now</option>
                                    <option value="Ongoing">Ongoing</option>
                                    <option value="MeetinYear1">Meet in Year 1</option>
                                    <option value="MeetinYear2">Meet in Year 2</option>
                                    <option value="MeetinYear4">Meet in Year 3</option>
                                    <option value="MeetinYear4">Meet in Year 4</option>
                                    <option value="MeetinYear5">Meet in Year 5</option>
                                    
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="When" />
                                </div>
                            </div>
                        </div>
                            
                            <div className='row'>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="EstimatedAmount" className="form-label">Estimated Amount</   label>
                                    <Field type="number" className="form-control shadow inputDesign"
                                    id="EstimatedAmount" name='EstimatedAmount' placeholder="Estimated Amount"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='EstimatedAmount' />
                                    </div>            
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Description" className="form-label">
                                        Description
                                    </label>
                                    <Field 
                                        as="textarea"
                                        className="form-control shadow inputDesign"
                                        id="Description"
                                        name='Description'
                                        placeholder="Description"
                                    />

                                    <ErrorMessage component='div' className="text-danger fw-bold"name="Description"/>
                                    </div>
                                </div>

                           </div>
                        
                        </Modal.Body>
                            <Modal.Footer>
                              <div className="col-md-12">
                                <button
                                  className="float-end btn   bgColor modalBtn"
                                  type='submit'
                                >
                                  Save
                                </button>
                                <button
                                  className="float-end btn  btn-outline  backBtn mx-3"
                                  onClick={handleClose15}
                                >
                                  Cancel
                                </button>
                              </div>
                            </Modal.Footer>
                            </Form>
                          
                           </Formik>
                          </Modal>
                       {/* Down Size Family Home */} 

                             
                                           
                       {/* Buy an Investment Property */}
                          <Modal
                            show={show16}
                            onHide={handleClose16}
                            backdrop="static"
                            className="modal-lg"
                            keyboard={false}
                          >
                            <Modal.Header
                              className="text-light modalBG "
                              closeButton
                            >
                          <Modal.Title className="fontStyle">
                              Investment Property
                           {/* <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />

                            </div> */}
                          </Modal.Title>
                            </Modal.Header>
                           <Formik
                            initialValues={InvestmentProperty_initialValues}
                            validationSchema={InvestmentProperty_validationSchema}
                             onSubmit={InvestmentProperty_onSubmit}
                            >
                          
                            <Form>
                            <Modal.Body>
                               
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="AreaOfAdvice" className="form-label">
                                    Area Of Advice
                                    </label>
                                    <Field
                                    id="AreaOfAdvice"
                                    name='AreaOfAdvice'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="AgedCare">Aged Care</option>
                                    <option value="Budgeting">Budgeting</option>
                                    <option value="BusinessStructure">Business Structure</option>
                                    <option value="Debt">Debt</option>
                                    <option value="EstatePlanning">Estate Planning</option>
                                    <option value="InsuranceAdvice">Insurance Advice</option>
                                    <option value="Investment">Investment</option>
                                    <option value="RetirementPlanning">Retirement Planning</option>
                                    <option value="Superannuation">Superannuation</option>
                                    <option value="Other">Other</option>
                                                            
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="AreaOfAdvice" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="When" className="form-label">
                                    When
                                    </label>
                                    <Field
                                    id="When"
                                    name='When'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="Other">Other</option>
                                    <option value="MeetGoalNow&Ongoing">Meet Goal Now & Ongoing</option>
                                    <option value="MeetGoalNow">Meet Goal Now</option>
                                    <option value="Ongoing">Ongoing</option>
                                    <option value="MeetinYear1">Meet in Year 1</option>
                                    <option value="MeetinYear2">Meet in Year 2</option>
                                    <option value="MeetinYear4">Meet in Year 3</option>
                                    <option value="MeetinYear4">Meet in Year 4</option>
                                    <option value="MeetinYear5">Meet in Year 5</option>
                                    
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="When" />
                                </div>
                            </div>
                        </div>
                            
                            <div className='row'>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="EstimatedAmount" className="form-label">Estimated Amount</   label>
                                    <Field type="number" className="form-control shadow inputDesign"
                                    id="EstimatedAmount" name='EstimatedAmount' placeholder="Estimated Amount"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='EstimatedAmount' />
                                    </div>            
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Description" className="form-label">
                                        Description
                                    </label>
                                    <Field 
                                        as="textarea"
                                        className="form-control shadow inputDesign"
                                        id="Description"
                                        name='Description'
                                        placeholder="Description"
                                    />

                                    <ErrorMessage component='div' className="text-danger fw-bold"name="Description"/>
                                    </div>
                                </div>

                           </div>
                        
                        </Modal.Body>
                            <Modal.Footer>
                              <div className="col-md-12">
                                <button
                                  className="float-end btn   bgColor modalBtn"
                                  type='submit'
                                >
                                  Save
                                </button>
                                <button
                                  className="float-end btn  btn-outline  backBtn mx-3"
                                  onClick={handleClose16}
                                >
                                  Cancel
                                </button>
                              </div>
                            </Modal.Footer>
                            </Form>
                          
                           </Formik>
                          </Modal>
                       {/* Buy an Investment Property */}  

                             
                                           
                       {/* Renovate Family Home */}
                          <Modal
                            show={show17}
                            onHide={handleClose17}
                            backdrop="static"
                            className="modal-lg"
                            keyboard={false}
                          >
                            <Modal.Header
                              className="text-light modalBG "
                              closeButton
                            >
                          <Modal.Title className="fontStyle">
                              Renovation
                           {/* <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />

                            </div> */}
                          </Modal.Title>
                            </Modal.Header>
                           <Formik
                            initialValues={RenovateHome_initialValues}
                            validationSchema={RenovateHome_validationSchema}
                             onSubmit={RenovateHome_onSubmit}
                            >
                          
                            <Form>
                            <Modal.Body>
                               
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="AreaOfAdvice" className="form-label">
                                    Area Of Advice
                                    </label>
                                    <Field
                                    id="AreaOfAdvice"
                                    name='AreaOfAdvice'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="AgedCare">Aged Care</option>
                                    <option value="Budgeting">Budgeting</option>
                                    <option value="BusinessStructure">Business Structure</option>
                                    <option value="Debt">Debt</option>
                                    <option value="EstatePlanning">Estate Planning</option>
                                    <option value="InsuranceAdvice">Insurance Advice</option>
                                    <option value="Investment">Investment</option>
                                    <option value="RetirementPlanning">Retirement Planning</option>
                                    <option value="Superannuation">Superannuation</option>
                                    <option value="Other">Other</option>
                                                            
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="AreaOfAdvice" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="When" className="form-label">
                                    When
                                    </label>
                                    <Field
                                    id="When"
                                    name='When'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="Other">Other</option>
                                    <option value="MeetGoalNow&Ongoing">Meet Goal Now & Ongoing</option>
                                    <option value="MeetGoalNow">Meet Goal Now</option>
                                    <option value="Ongoing">Ongoing</option>
                                    <option value="MeetinYear1">Meet in Year 1</option>
                                    <option value="MeetinYear2">Meet in Year 2</option>
                                    <option value="MeetinYear4">Meet in Year 3</option>
                                    <option value="MeetinYear4">Meet in Year 4</option>
                                    <option value="MeetinYear5">Meet in Year 5</option>
                                    
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="When" />
                                </div>
                            </div>
                        </div>
                            
                            <div className='row'>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="EstimatedAmount" className="form-label">Estimated Amount</   label>
                                    <Field type="number" className="form-control shadow inputDesign"
                                    id="EstimatedAmount" name='EstimatedAmount' placeholder="Estimated Amount"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='EstimatedAmount' />
                                    </div>            
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Description" className="form-label">
                                        Description
                                    </label>
                                    <Field 
                                        as="textarea"
                                        className="form-control shadow inputDesign"
                                        id="Description"
                                        name='Description'
                                        placeholder="Description"
                                    />

                                    <ErrorMessage component='div' className="text-danger fw-bold"name="Description"/>
                                    </div>
                                </div>

                           </div>
                        
                        </Modal.Body>
                            <Modal.Footer>
                              <div className="col-md-12">
                                <button
                                  className="float-end btn   bgColor modalBtn"
                                  type='submit'
                                >
                                  Save
                                </button>
                                <button
                                  className="float-end btn  btn-outline  backBtn mx-3"
                                  onClick={handleClose17}
                                >
                                  Cancel
                                </button>
                              </div>
                            </Modal.Footer>
                            </Form>
                          
                           </Formik>
                          </Modal>
                       {/* Renovate Family Home */}  

                             
                                           
                       {/* Investment Portfolio */}
                          <Modal
                            show={show18}
                            onHide={handleClose18}
                            backdrop="static"
                            className="modal-lg"
                            keyboard={false}
                          >
                            <Modal.Header
                              className="text-light modalBG "
                              closeButton
                            >
                          <Modal.Title className="fontStyle">
                              Investment Portfolio
                           {/* <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />

                            </div> */}
                          </Modal.Title>
                            </Modal.Header>
                           <Formik
                            initialValues={InvestmentPortfolio_initialValues}
                            validationSchema={InvestmentPortfolio_validationSchema}
                             onSubmit={InvestmentPortfolio_onSubmit}
                            >
                          
                            <Form>
                            <Modal.Body>
                               
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="AreaOfAdvice" className="form-label">
                                    Area Of Advice
                                    </label>
                                    <Field
                                    id="AreaOfAdvice"
                                    name='AreaOfAdvice'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="AgedCare">Aged Care</option>
                                    <option value="Budgeting">Budgeting</option>
                                    <option value="BusinessStructure">Business Structure</option>
                                    <option value="Debt">Debt</option>
                                    <option value="EstatePlanning">Estate Planning</option>
                                    <option value="InsuranceAdvice">Insurance Advice</option>
                                    <option value="Investment">Investment</option>
                                    <option value="RetirementPlanning">Retirement Planning</option>
                                    <option value="Superannuation">Superannuation</option>
                                    <option value="Other">Other</option>
                                                            
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="AreaOfAdvice" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="When" className="form-label">
                                    When
                                    </label>
                                    <Field
                                    id="When"
                                    name='When'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="Other">Other</option>
                                    <option value="MeetGoalNow&Ongoing">Meet Goal Now & Ongoing</option>
                                    <option value="MeetGoalNow">Meet Goal Now</option>
                                    <option value="Ongoing">Ongoing</option>
                                    <option value="MeetinYear1">Meet in Year 1</option>
                                    <option value="MeetinYear2">Meet in Year 2</option>
                                    <option value="MeetinYear4">Meet in Year 3</option>
                                    <option value="MeetinYear4">Meet in Year 4</option>
                                    <option value="MeetinYear5">Meet in Year 5</option>
                                    
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="When" />
                                </div>
                            </div>
                        </div>
                            
                            <div className='row'>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="EstimatedAmount" className="form-label">Estimated Amount</   label>
                                    <Field type="number" className="form-control shadow inputDesign"
                                    id="EstimatedAmount" name='EstimatedAmount' placeholder="Estimated Amount"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='EstimatedAmount' />
                                    </div>            
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Description" className="form-label">
                                        Description
                                    </label>
                                    <Field 
                                        as="textarea"
                                        className="form-control shadow inputDesign"
                                        id="Description"
                                        name='Description'
                                        placeholder="Description"
                                    />

                                    <ErrorMessage component='div' className="text-danger fw-bold"name="Description"/>
                                    </div>
                                </div>

                           </div>
                        
                        </Modal.Body>
                            <Modal.Footer>
                              <div className="col-md-12">
                                <button
                                  className="float-end btn   bgColor modalBtn"
                                  type='submit'
                                >
                                  Save
                                </button>
                                <button
                                  className="float-end btn  btn-outline  backBtn mx-3"
                                  onClick={handleClose18}
                                >
                                  Cancel
                                </button>
                              </div>
                            </Modal.Footer>
                            </Form>
                          
                           </Formik>
                          </Modal>
                       {/* Investment Portfolio */}  

                             
                                           
                       {/* Start a Family */}
                          <Modal
                            show={show19}
                            onHide={handleClose19}
                            backdrop="static"
                            className="modal-lg"
                            keyboard={false}
                          >
                            <Modal.Header
                              className="text-light modalBG "
                              closeButton
                            >
                          <Modal.Title className="fontStyle">
                              Family
                           {/* <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />

                            </div> */}
                          </Modal.Title>
                            </Modal.Header>
                           <Formik
                            initialValues={StartFamily_initialValues}
                            validationSchema={StartFamily_validationSchema}
                             onSubmit={StartFamily_onSubmit}
                            >
                          
                            <Form>
                            <Modal.Body>
                               
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="AreaOfAdvice" className="form-label">
                                    Area Of Advice
                                    </label>
                                    <Field
                                    id="AreaOfAdvice"
                                    name='AreaOfAdvice'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="AgedCare">Aged Care</option>
                                    <option value="Budgeting">Budgeting</option>
                                    <option value="BusinessStructure">Business Structure</option>
                                    <option value="Debt">Debt</option>
                                    <option value="EstatePlanning">Estate Planning</option>
                                    <option value="InsuranceAdvice">Insurance Advice</option>
                                    <option value="Investment">Investment</option>
                                    <option value="RetirementPlanning">Retirement Planning</option>
                                    <option value="Superannuation">Superannuation</option>
                                    <option value="Other">Other</option>
                                                            
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="AreaOfAdvice" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="When" className="form-label">
                                    When
                                    </label>
                                    <Field
                                    id="When"
                                    name='When'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="Other">Other</option>
                                    <option value="MeetGoalNow&Ongoing">Meet Goal Now & Ongoing</option>
                                    <option value="MeetGoalNow">Meet Goal Now</option>
                                    <option value="Ongoing">Ongoing</option>
                                    <option value="MeetinYear1">Meet in Year 1</option>
                                    <option value="MeetinYear2">Meet in Year 2</option>
                                    <option value="MeetinYear4">Meet in Year 3</option>
                                    <option value="MeetinYear4">Meet in Year 4</option>
                                    <option value="MeetinYear5">Meet in Year 5</option>
                                    
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="When" />
                                </div>
                            </div>
                        </div>
                            
                            <div className='row'>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="EstimatedAmount" className="form-label">Estimated Amount</   label>
                                    <Field type="number" className="form-control shadow inputDesign"
                                    id="EstimatedAmount" name='EstimatedAmount' placeholder="Estimated Amount"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='EstimatedAmount' />
                                    </div>            
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Description" className="form-label">
                                        Description
                                    </label>
                                    <Field 
                                        as="textarea"
                                        className="form-control shadow inputDesign"
                                        id="Description"
                                        name='Description'
                                        placeholder="Description"
                                    />

                                    <ErrorMessage component='div' className="text-danger fw-bold"name="Description"/>
                                    </div>
                                </div>

                           </div>
                        
                        </Modal.Body>
                            <Modal.Footer>
                              <div className="col-md-12">
                                <button
                                  className="float-end btn   bgColor modalBtn"
                                  type='submit'
                                >
                                  Save
                                </button>
                                <button
                                  className="float-end btn  btn-outline  backBtn mx-3"
                                  onClick={handleClose19}
                                >
                                  Cancel
                                </button>
                              </div>
                            </Modal.Footer>
                            </Form>
                          
                           </Formik>
                          </Modal>
                       {/* Start a Family */} 

                             
                                           
                       {/* Inheritance */}
                          <Modal
                            show={show20}
                            onHide={handleClose20}
                            backdrop="static"
                            className="modal-lg"
                            keyboard={false}
                          >
                            <Modal.Header
                              className="text-light modalBG "
                              closeButton
                            >
                          <Modal.Title className="fontStyle">
                              Inheritance
                           {/* <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />

                            </div> */}
                          </Modal.Title>
                            </Modal.Header>
                           <Formik
                            initialValues={Inheritance_initialValues}
                            validationSchema={Inheritance_validationSchema}
                             onSubmit={Inheritance_onSubmit}
                            >
                          
                            <Form>
                            <Modal.Body>
                               
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="AreaOfAdvice" className="form-label">
                                    Area Of Advice
                                    </label>
                                    <Field
                                    id="AreaOfAdvice"
                                    name='AreaOfAdvice'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="AgedCare">Aged Care</option>
                                    <option value="Budgeting">Budgeting</option>
                                    <option value="BusinessStructure">Business Structure</option>
                                    <option value="Debt">Debt</option>
                                    <option value="EstatePlanning">Estate Planning</option>
                                    <option value="InsuranceAdvice">Insurance Advice</option>
                                    <option value="Investment">Investment</option>
                                    <option value="RetirementPlanning">Retirement Planning</option>
                                    <option value="Superannuation">Superannuation</option>
                                    <option value="Other">Other</option>
                                                            
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="AreaOfAdvice" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="When" className="form-label">
                                    When
                                    </label>
                                    <Field
                                    id="When"
                                    name='When'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="Other">Other</option>
                                    <option value="MeetGoalNow&Ongoing">Meet Goal Now & Ongoing</option>
                                    <option value="MeetGoalNow">Meet Goal Now</option>
                                    <option value="Ongoing">Ongoing</option>
                                    <option value="MeetinYear1">Meet in Year 1</option>
                                    <option value="MeetinYear2">Meet in Year 2</option>
                                    <option value="MeetinYear4">Meet in Year 3</option>
                                    <option value="MeetinYear4">Meet in Year 4</option>
                                    <option value="MeetinYear5">Meet in Year 5</option>
                                    
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="When" />
                                </div>
                            </div>
                        </div>
                            
                            <div className='row'>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="EstimatedAmount" className="form-label">Estimated Amount</   label>
                                    <Field type="number" className="form-control shadow inputDesign"
                                    id="EstimatedAmount" name='EstimatedAmount' placeholder="Estimated Amount"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='EstimatedAmount' />
                                    </div>            
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Description" className="form-label">
                                        Description
                                    </label>
                                    <Field 
                                        as="textarea"
                                        className="form-control shadow inputDesign"
                                        id="Description"
                                        name='Description'
                                        placeholder="Description"
                                    />

                                    <ErrorMessage component='div' className="text-danger fw-bold"name="Description"/>
                                    </div>
                                </div>

                           </div>
                        
                        </Modal.Body>
                            <Modal.Footer>
                              <div className="col-md-12">
                                <button
                                  className="float-end btn   bgColor modalBtn"
                                  type='submit'
                                >
                                  Save
                                </button>
                                <button
                                  className="float-end btn  btn-outline  backBtn mx-3"
                                  onClick={handleClose20}
                                >
                                  Cancel
                                </button>
                              </div>
                            </Modal.Footer>
                            </Form>
                          
                           </Formik>
                          </Modal>
                       {/* Inheritance */} 

                             
                                           
                       {/* Care for Aging Family Member */}
                          <Modal
                            show={show21}
                            onHide={handleClose21}
                            backdrop="static"
                            className="modal-lg"
                            keyboard={false}
                          >
                            <Modal.Header
                              className="text-light modalBG "
                              closeButton
                            >
                          <Modal.Title className="fontStyle">
                              Care
                           {/* <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />

                            </div> */}
                          </Modal.Title>
                            </Modal.Header>
                           <Formik
                            initialValues={Care_initialValues}
                            validationSchema={Care_validationSchema}
                             onSubmit={Care_onSubmit}
                            >
                          
                            <Form>
                            <Modal.Body>
                               
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="AreaOfAdvice" className="form-label">
                                    Area Of Advice
                                    </label>
                                    <Field
                                    id="AreaOfAdvice"
                                    name='AreaOfAdvice'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="AgedCare">Aged Care</option>
                                    <option value="Budgeting">Budgeting</option>
                                    <option value="BusinessStructure">Business Structure</option>
                                    <option value="Debt">Debt</option>
                                    <option value="EstatePlanning">Estate Planning</option>
                                    <option value="InsuranceAdvice">Insurance Advice</option>
                                    <option value="Investment">Investment</option>
                                    <option value="RetirementPlanning">Retirement Planning</option>
                                    <option value="Superannuation">Superannuation</option>
                                    <option value="Other">Other</option>
                                                            
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="AreaOfAdvice" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="When" className="form-label">
                                    When
                                    </label>
                                    <Field
                                    id="When"
                                    name='When'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="Other">Other</option>
                                    <option value="MeetGoalNow&Ongoing">Meet Goal Now & Ongoing</option>
                                    <option value="MeetGoalNow">Meet Goal Now</option>
                                    <option value="Ongoing">Ongoing</option>
                                    <option value="MeetinYear1">Meet in Year 1</option>
                                    <option value="MeetinYear2">Meet in Year 2</option>
                                    <option value="MeetinYear4">Meet in Year 3</option>
                                    <option value="MeetinYear4">Meet in Year 4</option>
                                    <option value="MeetinYear5">Meet in Year 5</option>
                                    
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="When" />
                                </div>
                            </div>
                        </div>
                            
                            <div className='row'>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="EstimatedAmount" className="form-label">Estimated Amount</   label>
                                    <Field type="number" className="form-control shadow inputDesign"
                                    id="EstimatedAmount" name='EstimatedAmount' placeholder="Estimated Amount"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='EstimatedAmount' />
                                    </div>            
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Description" className="form-label">
                                        Description
                                    </label>
                                    <Field 
                                        as="textarea"
                                        className="form-control shadow inputDesign"
                                        id="Description"
                                        name='Description'
                                        placeholder="Description"
                                    />

                                    <ErrorMessage component='div' className="text-danger fw-bold"name="Description"/>
                                    </div>
                                </div>

                           </div>
                        
                        </Modal.Body>
                            <Modal.Footer>
                              <div className="col-md-12">
                                <button
                                  className="float-end btn   bgColor modalBtn"
                                  type='submit'
                                >
                                  Save
                                </button>
                                <button
                                  className="float-end btn  btn-outline  backBtn mx-3"
                                  onClick={handleClose21}
                                >
                                  Cancel
                                </button>
                              </div>
                            </Modal.Footer>
                            </Form>
                          
                           </Formik>
                          </Modal>
                       {/* Care for Aging Family Member */} 

                             
                                           
                       {/* Centre Link Eligibillity */}
                          <Modal
                            show={show22}
                            onHide={handleClose22}
                            backdrop="static"
                            className="modal-lg"
                            keyboard={false}
                          >
                            <Modal.Header
                              className="text-light modalBG "
                              closeButton
                            >
                          <Modal.Title className="fontStyle">
                              Eligibillity
                           {/* <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />

                            </div> */}
                          </Modal.Title>
                            </Modal.Header>
                           <Formik
                            initialValues={CentreLinkEligibillity_initialValues}
                            validationSchema={CentreLinkEligibillity_validationSchema}
                             onSubmit={CentreLinkEligibillity_onSubmit}
                            >
                          
                            <Form>
                            <Modal.Body>
                               
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="AreaOfAdvice" className="form-label">
                                    Area Of Advice
                                    </label>
                                    <Field
                                    id="AreaOfAdvice"
                                    name='AreaOfAdvice'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="AgedCare">Aged Care</option>
                                    <option value="Budgeting">Budgeting</option>
                                    <option value="BusinessStructure">Business Structure</option>
                                    <option value="Debt">Debt</option>
                                    <option value="EstatePlanning">Estate Planning</option>
                                    <option value="InsuranceAdvice">Insurance Advice</option>
                                    <option value="Investment">Investment</option>
                                    <option value="RetirementPlanning">Retirement Planning</option>
                                    <option value="Superannuation">Superannuation</option>
                                    <option value="Other">Other</option>
                                                            
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="AreaOfAdvice" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="When" className="form-label">
                                    When
                                    </label>
                                    <Field
                                    id="When"
                                    name='When'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="Other">Other</option>
                                    <option value="MeetGoalNow&Ongoing">Meet Goal Now & Ongoing</option>
                                    <option value="MeetGoalNow">Meet Goal Now</option>
                                    <option value="Ongoing">Ongoing</option>
                                    <option value="MeetinYear1">Meet in Year 1</option>
                                    <option value="MeetinYear2">Meet in Year 2</option>
                                    <option value="MeetinYear4">Meet in Year 3</option>
                                    <option value="MeetinYear4">Meet in Year 4</option>
                                    <option value="MeetinYear5">Meet in Year 5</option>
                                    
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="When" />
                                </div>
                            </div>
                        </div>
                            
                            <div className='row'>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="EstimatedAmount" className="form-label">Estimated Amount</   label>
                                    <Field type="number" className="form-control shadow inputDesign"
                                    id="EstimatedAmount" name='EstimatedAmount' placeholder="Estimated Amount"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='EstimatedAmount' />
                                    </div>            
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Description" className="form-label">
                                        Description
                                    </label>
                                    <Field 
                                        as="textarea"
                                        className="form-control shadow inputDesign"
                                        id="Description"
                                        name='Description'
                                        placeholder="Description"
                                    />

                                    <ErrorMessage component='div' className="text-danger fw-bold"name="Description"/>
                                    </div>
                                </div>

                           </div>
                        
                        </Modal.Body>
                            <Modal.Footer>
                              <div className="col-md-12">
                                <button
                                  className="float-end btn   bgColor modalBtn"
                                  type='submit'
                                >
                                  Save
                                </button>
                                <button
                                  className="float-end btn  btn-outline  backBtn mx-3"
                                  onClick={handleClose22}
                                >
                                  Cancel
                                </button>
                              </div>
                            </Modal.Footer>
                            </Form>
                          
                           </Formik>
                          </Modal>
                       {/* Centre Link Eligibillity */} 

                             
                                           
                       {/* Family Trust */}
                          <Modal
                            show={show23}
                            onHide={handleClose23}
                            backdrop="static"
                            className="modal-lg"
                            keyboard={false}
                          >
                            <Modal.Header
                              className="text-light modalBG "
                              closeButton
                            >
                          <Modal.Title className="fontStyle">
                              Family Trust
                           {/* <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />

                            </div> */}
                          </Modal.Title>
                            </Modal.Header>
                           <Formik
                            initialValues={FamilyTrust_initialValues}
                            validationSchema={FamilyTrust_validationSchema}
                             onSubmit={FamilyTrust_onSubmit}
                            >
                          
                            <Form>
                            <Modal.Body>
                               
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="AreaOfAdvice" className="form-label">
                                    Area Of Advice
                                    </label>
                                    <Field
                                    id="AreaOfAdvice"
                                    name='AreaOfAdvice'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="AgedCare">Aged Care</option>
                                    <option value="Budgeting">Budgeting</option>
                                    <option value="BusinessStructure">Business Structure</option>
                                    <option value="Debt">Debt</option>
                                    <option value="EstatePlanning">Estate Planning</option>
                                    <option value="InsuranceAdvice">Insurance Advice</option>
                                    <option value="Investment">Investment</option>
                                    <option value="RetirementPlanning">Retirement Planning</option>
                                    <option value="Superannuation">Superannuation</option>
                                    <option value="Other">Other</option>
                                                            
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="AreaOfAdvice" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="When" className="form-label">
                                    When
                                    </label>
                                    <Field
                                    id="When"
                                    name='When'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="Other">Other</option>
                                    <option value="MeetGoalNow&Ongoing">Meet Goal Now & Ongoing</option>
                                    <option value="MeetGoalNow">Meet Goal Now</option>
                                    <option value="Ongoing">Ongoing</option>
                                    <option value="MeetinYear1">Meet in Year 1</option>
                                    <option value="MeetinYear2">Meet in Year 2</option>
                                    <option value="MeetinYear4">Meet in Year 3</option>
                                    <option value="MeetinYear4">Meet in Year 4</option>
                                    <option value="MeetinYear5">Meet in Year 5</option>
                                    
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="When" />
                                </div>
                            </div>
                        </div>
                            
                            <div className='row'>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="EstimatedAmount" className="form-label">Estimated Amount</   label>
                                    <Field type="number" className="form-control shadow inputDesign"
                                    id="EstimatedAmount" name='EstimatedAmount' placeholder="Estimated Amount"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='EstimatedAmount' />
                                    </div>            
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Description" className="form-label">
                                        Description
                                    </label>
                                    <Field 
                                        as="textarea"
                                        className="form-control shadow inputDesign"
                                        id="Description"
                                        name='Description'
                                        placeholder="Description"
                                    />

                                    <ErrorMessage component='div' className="text-danger fw-bold"name="Description"/>
                                    </div>
                                </div>

                           </div>
                        
                        </Modal.Body>
                            <Modal.Footer>
                              <div className="col-md-12">
                                <button
                                  className="float-end btn   bgColor modalBtn"
                                  type='submit'
                                >
                                  Save
                                </button>
                                <button
                                  className="float-end btn  btn-outline  backBtn mx-3"
                                  onClick={handleClose23}
                                >
                                  Cancel
                                </button>
                              </div>
                            </Modal.Footer>
                            </Form>
                          
                           </Formik>
                          </Modal>
                       {/* Family Trust */} 

                             
                                           
                       {/* SMSF */}
                          <Modal
                            show={show24}
                            onHide={handleClose24}
                            backdrop="static"
                            className="modal-lg"
                            keyboard={false}
                          >
                            <Modal.Header
                              className="text-light modalBG "
                              closeButton
                            >
                          <Modal.Title className="fontStyle">
                              SMSF
                           {/* <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />

                            </div> */}
                          </Modal.Title>
                            </Modal.Header>
                           <Formik
                            initialValues={SMSF_initialValues}
                            validationSchema={SMSF_validationSchema}
                             onSubmit={SMSF_onSubmit}
                            >
                          
                            <Form>
                            <Modal.Body>
                               
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="AreaOfAdvice" className="form-label">
                                    Area Of Advice
                                    </label>
                                    <Field
                                    id="AreaOfAdvice"
                                    name='AreaOfAdvice'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="AgedCare">Aged Care</option>
                                    <option value="Budgeting">Budgeting</option>
                                    <option value="BusinessStructure">Business Structure</option>
                                    <option value="Debt">Debt</option>
                                    <option value="EstatePlanning">Estate Planning</option>
                                    <option value="InsuranceAdvice">Insurance Advice</option>
                                    <option value="Investment">Investment</option>
                                    <option value="RetirementPlanning">Retirement Planning</option>
                                    <option value="Superannuation">Superannuation</option>
                                    <option value="Other">Other</option>
                                                            
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="AreaOfAdvice" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="When" className="form-label">
                                    When
                                    </label>
                                    <Field
                                    id="When"
                                    name='When'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="Other">Other</option>
                                    <option value="MeetGoalNow&Ongoing">Meet Goal Now & Ongoing</option>
                                    <option value="MeetGoalNow">Meet Goal Now</option>
                                    <option value="Ongoing">Ongoing</option>
                                    <option value="MeetinYear1">Meet in Year 1</option>
                                    <option value="MeetinYear2">Meet in Year 2</option>
                                    <option value="MeetinYear4">Meet in Year 3</option>
                                    <option value="MeetinYear4">Meet in Year 4</option>
                                    <option value="MeetinYear5">Meet in Year 5</option>
                                    
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="When" />
                                </div>
                            </div>
                        </div>
                            
                            <div className='row'>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="EstimatedAmount" className="form-label">Estimated Amount</   label>
                                    <Field type="number" className="form-control shadow inputDesign"
                                    id="EstimatedAmount" name='EstimatedAmount' placeholder="Estimated Amount"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='EstimatedAmount' />
                                    </div>            
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Description" className="form-label">
                                        Description
                                    </label>
                                    <Field 
                                        as="textarea"
                                        className="form-control shadow inputDesign"
                                        id="Description"
                                        name='Description'
                                        placeholder="Description"
                                    />

                                    <ErrorMessage component='div' className="text-danger fw-bold"name="Description"/>
                                    </div>
                                </div>

                           </div>
                        
                        </Modal.Body>
                            <Modal.Footer>
                              <div className="col-md-12">
                                <button
                                  className="float-end btn   bgColor modalBtn"
                                  type='submit'
                                >
                                  Save
                                </button>
                                <button
                                  className="float-end btn  btn-outline  backBtn mx-3"
                                  onClick={handleClose24}
                                >
                                  Cancel
                                </button>
                              </div>
                            </Modal.Footer>
                            </Form>
                          
                           </Formik>
                          </Modal>
                       {/* SMSF */} 

                             
                                           
                       {/* Wedding */}
                          <Modal
                            show={show25}
                            onHide={handleClose25}
                            backdrop="static"
                            className="modal-lg"
                            keyboard={false}
                          >
                            <Modal.Header
                              className="text-light modalBG "
                              closeButton
                            >
                          <Modal.Title className="fontStyle">
                              Wedding
                           {/* <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />

                            </div> */}
                          </Modal.Title>
                            </Modal.Header>
                           <Formik
                            initialValues={Wedding_initialValues}
                            validationSchema={Wedding_validationSchema}
                             onSubmit={Wedding_onSubmit}
                            >
                          
                            <Form>
                            <Modal.Body>
                               
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="AreaOfAdvice" className="form-label">
                                    Area Of Advice
                                    </label>
                                    <Field
                                    id="AreaOfAdvice"
                                    name='AreaOfAdvice'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="AgedCare">Aged Care</option>
                                    <option value="Budgeting">Budgeting</option>
                                    <option value="BusinessStructure">Business Structure</option>
                                    <option value="Debt">Debt</option>
                                    <option value="EstatePlanning">Estate Planning</option>
                                    <option value="InsuranceAdvice">Insurance Advice</option>
                                    <option value="Investment">Investment</option>
                                    <option value="RetirementPlanning">Retirement Planning</option>
                                    <option value="Superannuation">Superannuation</option>
                                    <option value="Other">Other</option>
                                                            
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="AreaOfAdvice" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="When" className="form-label">
                                    When
                                    </label>
                                    <Field
                                    id="When"
                                    name='When'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="Other">Other</option>
                                    <option value="MeetGoalNow&Ongoing">Meet Goal Now & Ongoing</option>
                                    <option value="MeetGoalNow">Meet Goal Now</option>
                                    <option value="Ongoing">Ongoing</option>
                                    <option value="MeetinYear1">Meet in Year 1</option>
                                    <option value="MeetinYear2">Meet in Year 2</option>
                                    <option value="MeetinYear4">Meet in Year 3</option>
                                    <option value="MeetinYear4">Meet in Year 4</option>
                                    <option value="MeetinYear5">Meet in Year 5</option>
                                    
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="When" />
                                </div>
                            </div>
                        </div>
                            
                            <div className='row'>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="EstimatedAmount" className="form-label">Estimated Amount</   label>
                                    <Field type="number" className="form-control shadow inputDesign"
                                    id="EstimatedAmount" name='EstimatedAmount' placeholder="Estimated Amount"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='EstimatedAmount' />
                                    </div>            
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Description" className="form-label">
                                        Description
                                    </label>
                                    <Field 
                                        as="textarea"
                                        className="form-control shadow inputDesign"
                                        id="Description"
                                        name='Description'
                                        placeholder="Description"
                                    />

                                    <ErrorMessage component='div' className="text-danger fw-bold"name="Description"/>
                                    </div>
                                </div>

                           </div>
                        
                        </Modal.Body>
                            <Modal.Footer>
                              <div className="col-md-12">
                                <button
                                  className="float-end btn   bgColor modalBtn"
                                  type='submit'
                                >
                                  Save
                                </button>
                                <button
                                  className="float-end btn  btn-outline  backBtn mx-3"
                                  onClick={handleClose25}
                                >
                                  Cancel
                                </button>
                              </div>
                            </Modal.Footer>
                            </Form>
                          
                           </Formik>
                          </Modal>
                       {/* Wedding */}  

                             
                                           
                       {/* Estate Planning */}
                          <Modal
                            show={show26}
                            onHide={handleClose26}
                            backdrop="static"
                            className="modal-lg"
                            keyboard={false}
                          >
                            <Modal.Header
                              className="text-light modalBG "
                              closeButton
                            >
                          <Modal.Title className="fontStyle">
                              Estate Planning
                           {/* <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />

                            </div> */}
                          </Modal.Title>
                            </Modal.Header>
                           <Formik
                            initialValues={EstatePlanning_initialValues}
                            validationSchema={EstatePlanning_validationSchema}
                             onSubmit={EstatePlanning_onSubmit}
                            >
                          
                            <Form>
                            <Modal.Body>
                               
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="AreaOfAdvice" className="form-label">
                                    Area Of Advice
                                    </label>
                                    <Field
                                    id="AreaOfAdvice"
                                    name='AreaOfAdvice'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="AgedCare">Aged Care</option>
                                    <option value="Budgeting">Budgeting</option>
                                    <option value="BusinessStructure">Business Structure</option>
                                    <option value="Debt">Debt</option>
                                    <option value="EstatePlanning">Estate Planning</option>
                                    <option value="InsuranceAdvice">Insurance Advice</option>
                                    <option value="Investment">Investment</option>
                                    <option value="RetirementPlanning">Retirement Planning</option>
                                    <option value="Superannuation">Superannuation</option>
                                    <option value="Other">Other</option>
                                                            
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="AreaOfAdvice" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="When" className="form-label">
                                    When
                                    </label>
                                    <Field
                                    id="When"
                                    name='When'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="Other">Other</option>
                                    <option value="MeetGoalNow&Ongoing">Meet Goal Now & Ongoing</option>
                                    <option value="MeetGoalNow">Meet Goal Now</option>
                                    <option value="Ongoing">Ongoing</option>
                                    <option value="MeetinYear1">Meet in Year 1</option>
                                    <option value="MeetinYear2">Meet in Year 2</option>
                                    <option value="MeetinYear4">Meet in Year 3</option>
                                    <option value="MeetinYear4">Meet in Year 4</option>
                                    <option value="MeetinYear5">Meet in Year 5</option>
                                    
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="When" />
                                </div>
                            </div>
                        </div>
                            
                            <div className='row'>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="EstimatedAmount" className="form-label">Estimated Amount</   label>
                                    <Field type="number" className="form-control shadow inputDesign"
                                    id="EstimatedAmount" name='EstimatedAmount' placeholder="Estimated Amount"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='EstimatedAmount' />
                                    </div>            
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Description" className="form-label">
                                        Description
                                    </label>
                                    <Field 
                                        as="textarea"
                                        className="form-control shadow inputDesign"
                                        id="Description"
                                        name='Description'
                                        placeholder="Description"
                                    />

                                    <ErrorMessage component='div' className="text-danger fw-bold"name="Description"/>
                                    </div>
                                </div>

                           </div>
                        
                        </Modal.Body>
                            <Modal.Footer>
                              <div className="col-md-12">
                                <button
                                  className="float-end btn   bgColor modalBtn"
                                  type='submit'
                                >
                                  Save
                                </button>
                                <button
                                  className="float-end btn  btn-outline  backBtn mx-3"
                                  onClick={handleClose26}
                                >
                                  Cancel
                                </button>
                              </div>
                            </Modal.Footer>
                            </Form>
                          
                           </Formik>
                          </Modal>
                       {/* Estate Planning */}  

                             
                                           
                       {/* Super Annuation Invesments */}
                          <Modal
                            show={show27}
                            onHide={handleClose27}
                            backdrop="static"
                            className="modal-lg"
                            keyboard={false}
                          >
                            <Modal.Header
                              className="text-light modalBG "
                              closeButton
                            >
                          <Modal.Title className="fontStyle">
                              Super Annuation Investment
                           {/* <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />

                            </div> */}
                          </Modal.Title>
                            </Modal.Header>
                           <Formik
                            initialValues={SuperAnnuationInvestment_initialValues}
                            validationSchema={SuperAnnuationInvestment_validationSchema}
                             onSubmit={SuperAnnuationInvestment_onSubmit}
                            >
                          
                            <Form>
                            <Modal.Body>
                               
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="AreaOfAdvice" className="form-label">
                                    Area Of Advice
                                    </label>
                                    <Field
                                    id="AreaOfAdvice"
                                    name='AreaOfAdvice'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="AgedCare">Aged Care</option>
                                    <option value="Budgeting">Budgeting</option>
                                    <option value="BusinessStructure">Business Structure</option>
                                    <option value="Debt">Debt</option>
                                    <option value="EstatePlanning">Estate Planning</option>
                                    <option value="InsuranceAdvice">Insurance Advice</option>
                                    <option value="Investment">Investment</option>
                                    <option value="RetirementPlanning">Retirement Planning</option>
                                    <option value="Superannuation">Superannuation</option>
                                    <option value="Other">Other</option>
                                                            
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="AreaOfAdvice" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="When" className="form-label">
                                    When
                                    </label>
                                    <Field
                                    id="When"
                                    name='When'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="Other">Other</option>
                                    <option value="MeetGoalNow&Ongoing">Meet Goal Now & Ongoing</option>
                                    <option value="MeetGoalNow">Meet Goal Now</option>
                                    <option value="Ongoing">Ongoing</option>
                                    <option value="MeetinYear1">Meet in Year 1</option>
                                    <option value="MeetinYear2">Meet in Year 2</option>
                                    <option value="MeetinYear4">Meet in Year 3</option>
                                    <option value="MeetinYear4">Meet in Year 4</option>
                                    <option value="MeetinYear5">Meet in Year 5</option>
                                    
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="When" />
                                </div>
                            </div>
                        </div>
                            
                            <div className='row'>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="EstimatedAmount" className="form-label">Estimated Amount</   label>
                                    <Field type="number" className="form-control shadow inputDesign"
                                    id="EstimatedAmount" name='EstimatedAmount' placeholder="Estimated Amount"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='EstimatedAmount' />
                                    </div>            
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Description" className="form-label">
                                        Description
                                    </label>
                                    <Field 
                                        as="textarea"
                                        className="form-control shadow inputDesign"
                                        id="Description"
                                        name='Description'
                                        placeholder="Description"
                                    />

                                    <ErrorMessage component='div' className="text-danger fw-bold"name="Description"/>
                                    </div>
                                </div>

                           </div>
                        
                        </Modal.Body>
                            <Modal.Footer>
                              <div className="col-md-12">
                                <button
                                  className="float-end btn   bgColor modalBtn"
                                  type='submit'
                                >
                                  Save
                                </button>
                                <button
                                  className="float-end btn  btn-outline  backBtn mx-3"
                                  onClick={handleClose27}
                                >
                                  Cancel
                                </button>
                              </div>
                            </Modal.Footer>
                            </Form>
                          
                           </Formik>
                          </Modal>
                       {/* Super Annuation Invesments */}  

                             
                                           
                       {/* Pay Less Tax */}
                          <Modal
                            show={show28}
                            onHide={handleClose28}
                            backdrop="static"
                            className="modal-lg"
                            keyboard={false}
                          >
                            <Modal.Header
                              className="text-light modalBG "
                              closeButton
                            >
                          <Modal.Title className="fontStyle">
                              Pay Less Tax
                           {/* <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />

                            </div> */}
                          </Modal.Title>
                            </Modal.Header>
                           <Formik
                            initialValues={PayLessTax_initialValues}
                            validationSchema={PayLessTax_validationSchema}
                             onSubmit={PayLessTax_onSubmit}
                            >
                          
                            <Form>
                            <Modal.Body>
                               
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="AreaOfAdvice" className="form-label">
                                    Area Of Advice
                                    </label>
                                    <Field
                                    id="AreaOfAdvice"
                                    name='AreaOfAdvice'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="AgedCare">Aged Care</option>
                                    <option value="Budgeting">Budgeting</option>
                                    <option value="BusinessStructure">Business Structure</option>
                                    <option value="Debt">Debt</option>
                                    <option value="EstatePlanning">Estate Planning</option>
                                    <option value="InsuranceAdvice">Insurance Advice</option>
                                    <option value="Investment">Investment</option>
                                    <option value="RetirementPlanning">Retirement Planning</option>
                                    <option value="Superannuation">Superannuation</option>
                                    <option value="Other">Other</option>
                                                            
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="AreaOfAdvice" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="When" className="form-label">
                                    When
                                    </label>
                                    <Field
                                    id="When"
                                    name='When'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="Other">Other</option>
                                    <option value="MeetGoalNow&Ongoing">Meet Goal Now & Ongoing</option>
                                    <option value="MeetGoalNow">Meet Goal Now</option>
                                    <option value="Ongoing">Ongoing</option>
                                    <option value="MeetinYear1">Meet in Year 1</option>
                                    <option value="MeetinYear2">Meet in Year 2</option>
                                    <option value="MeetinYear4">Meet in Year 3</option>
                                    <option value="MeetinYear4">Meet in Year 4</option>
                                    <option value="MeetinYear5">Meet in Year 5</option>
                                    
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="When" />
                                </div>
                            </div>
                        </div>
                            
                            <div className='row'>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="EstimatedAmount" className="form-label">Estimated Amount</   label>
                                    <Field type="number" className="form-control shadow inputDesign"
                                    id="EstimatedAmount" name='EstimatedAmount' placeholder="Estimated Amount"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='EstimatedAmount' />
                                    </div>            
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Description" className="form-label">
                                        Description
                                    </label>
                                    <Field 
                                        as="textarea"
                                        className="form-control shadow inputDesign"
                                        id="Description"
                                        name='Description'
                                        placeholder="Description"
                                    />

                                    <ErrorMessage component='div' className="text-danger fw-bold"name="Description"/>
                                    </div>
                                </div>

                           </div>
                        
                        </Modal.Body>
                            <Modal.Footer>
                              <div className="col-md-12">
                                <button
                                  className="float-end btn   bgColor modalBtn"
                                  type='submit'
                                >
                                  Save
                                </button>
                                <button
                                  className="float-end btn  btn-outline  backBtn mx-3"
                                  onClick={handleClose28}
                                >
                                  Cancel
                                </button>
                              </div>
                            </Modal.Footer>
                            </Form>
                          
                           </Formik>
                          </Modal>
                       {/* Pay Less Tax */}  

                             
                                           
                       {/* Income Stream */}
                          <Modal
                            show={show29}
                            onHide={handleClose29}
                            backdrop="static"
                            className="modal-lg"
                            keyboard={false}
                          >
                            <Modal.Header
                              className="text-light modalBG "
                              closeButton
                            >
                          <Modal.Title className="fontStyle">
                              Income Stream
                           {/* <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />

                            </div> */}
                          </Modal.Title>
                            </Modal.Header>
                           <Formik
                            initialValues={IncomeStream_initialValues}
                            validationSchema={IncomeStream_validationSchema}
                             onSubmit={IncomeStream_onSubmit}
                            >
                          
                            <Form>
                            <Modal.Body>
                               
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="AreaOfAdvice" className="form-label">
                                    Area Of Advice
                                    </label>
                                    <Field
                                    id="AreaOfAdvice"
                                    name='AreaOfAdvice'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="AgedCare">Aged Care</option>
                                    <option value="Budgeting">Budgeting</option>
                                    <option value="BusinessStructure">Business Structure</option>
                                    <option value="Debt">Debt</option>
                                    <option value="EstatePlanning">Estate Planning</option>
                                    <option value="InsuranceAdvice">Insurance Advice</option>
                                    <option value="Investment">Investment</option>
                                    <option value="RetirementPlanning">Retirement Planning</option>
                                    <option value="Superannuation">Superannuation</option>
                                    <option value="Other">Other</option>
                                                            
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="AreaOfAdvice" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="When" className="form-label">
                                    When
                                    </label>
                                    <Field
                                    id="When"
                                    name='When'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="Other">Other</option>
                                    <option value="MeetGoalNow&Ongoing">Meet Goal Now & Ongoing</option>
                                    <option value="MeetGoalNow">Meet Goal Now</option>
                                    <option value="Ongoing">Ongoing</option>
                                    <option value="MeetinYear1">Meet in Year 1</option>
                                    <option value="MeetinYear2">Meet in Year 2</option>
                                    <option value="MeetinYear4">Meet in Year 3</option>
                                    <option value="MeetinYear4">Meet in Year 4</option>
                                    <option value="MeetinYear5">Meet in Year 5</option>
                                    
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="When" />
                                </div>
                            </div>
                        </div>
                            
                            <div className='row'>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="EstimatedAmount" className="form-label">Estimated Amount</   label>
                                    <Field type="number" className="form-control shadow inputDesign"
                                    id="EstimatedAmount" name='EstimatedAmount' placeholder="Estimated Amount"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='EstimatedAmount' />
                                    </div>            
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Description" className="form-label">
                                        Description
                                    </label>
                                    <Field 
                                        as="textarea"
                                        className="form-control shadow inputDesign"
                                        id="Description"
                                        name='Description'
                                        placeholder="Description"
                                    />

                                    <ErrorMessage component='div' className="text-danger fw-bold"name="Description"/>
                                    </div>
                                </div>

                           </div>
                        
                        </Modal.Body>
                            <Modal.Footer>
                              <div className="col-md-12">
                                <button
                                  className="float-end btn   bgColor modalBtn"
                                  type='submit'
                                >
                                  Save
                                </button>
                                <button
                                  className="float-end btn  btn-outline  backBtn mx-3"
                                  onClick={handleClose29}
                                >
                                  Cancel
                                </button>
                              </div>
                            </Modal.Footer>
                            </Form>
                          
                           </Formik>
                          </Modal>
                       {/* Income Stream */}  

                             
                                           
                       {/* Superannuation Accounts */}
                          <Modal
                            show={show30}
                            onHide={handleClose30}
                            backdrop="static"
                            className="modal-lg"
                            keyboard={false}
                          >
                            <Modal.Header
                              className="text-light modalBG "
                              closeButton
                            >
                          <Modal.Title className="fontStyle">
                              Combine Accounts
                           {/* <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />

                            </div> */}
                          </Modal.Title>
                            </Modal.Header>
                           <Formik
                            initialValues={SuperAnnuationAccounts_initialValues}
                            validationSchema={SuperAnnuationAccounts_validationSchema}
                             onSubmit={SuperAnnuationAccounts_onSubmit}
                            >
                          
                            <Form>
                            <Modal.Body>
                               
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="AreaOfAdvice" className="form-label">
                                    Area Of Advice
                                    </label>
                                    <Field
                                    id="AreaOfAdvice"
                                    name='AreaOfAdvice'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="AgedCare">Aged Care</option>
                                    <option value="Budgeting">Budgeting</option>
                                    <option value="BusinessStructure">Business Structure</option>
                                    <option value="Debt">Debt</option>
                                    <option value="EstatePlanning">Estate Planning</option>
                                    <option value="InsuranceAdvice">Insurance Advice</option>
                                    <option value="Investment">Investment</option>
                                    <option value="RetirementPlanning">Retirement Planning</option>
                                    <option value="Superannuation">Superannuation</option>
                                    <option value="Other">Other</option>
                                                            
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="AreaOfAdvice" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="When" className="form-label">
                                    When
                                    </label>
                                    <Field
                                    id="When"
                                    name='When'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="Other">Other</option>
                                    <option value="MeetGoalNow&Ongoing">Meet Goal Now & Ongoing</option>
                                    <option value="MeetGoalNow">Meet Goal Now</option>
                                    <option value="Ongoing">Ongoing</option>
                                    <option value="MeetinYear1">Meet in Year 1</option>
                                    <option value="MeetinYear2">Meet in Year 2</option>
                                    <option value="MeetinYear4">Meet in Year 3</option>
                                    <option value="MeetinYear4">Meet in Year 4</option>
                                    <option value="MeetinYear5">Meet in Year 5</option>
                                    
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="When" />
                                </div>
                            </div>
                        </div>
                            
                            <div className='row'>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="EstimatedAmount" className="form-label">Estimated Amount</   label>
                                    <Field type="number" className="form-control shadow inputDesign"
                                    id="EstimatedAmount" name='EstimatedAmount' placeholder="Estimated Amount"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='EstimatedAmount' />
                                    </div>            
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Description" className="form-label">
                                        Description
                                    </label>
                                    <Field 
                                        as="textarea"
                                        className="form-control shadow inputDesign"
                                        id="Description"
                                        name='Description'
                                        placeholder="Description"
                                    />

                                    <ErrorMessage component='div' className="text-danger fw-bold"name="Description"/>
                                    </div>
                                </div>

                           </div>
                        
                        </Modal.Body>
                            <Modal.Footer>
                              <div className="col-md-12">
                                <button
                                  className="float-end btn   bgColor modalBtn"
                                  type='submit'
                                >
                                  Save
                                </button>
                                <button
                                  className="float-end btn  btn-outline  backBtn mx-3"
                                  onClick={handleClose30}
                                >
                                  Cancel
                                </button>
                              </div>
                            </Modal.Footer>
                            </Form>
                          
                           </Formik>
                          </Modal>
                       {/* Superannuation Accounts */}  

                             
                                           
                       {/* Contribute Superannuation */}
                          <Modal
                            show={show31}
                            onHide={handleClose31}
                            backdrop="static"
                            className="modal-lg"
                            keyboard={false}
                          >
                            <Modal.Header
                              className="text-light modalBG "
                              closeButton
                            >
                          <Modal.Title className="fontStyle">
                              Contribute Superannuation
                           {/* <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />

                            </div> */}
                          </Modal.Title>
                            </Modal.Header>
                           <Formik
                            initialValues={ContributeSuperAnnuation_initialValues}
                            validationSchema={ContributeSuperAnnuation_validationSchema}
                             onSubmit={ContributeSuperAnnuation_onSubmit}
                            >
                          
                            <Form>
                            <Modal.Body>
                               
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="AreaOfAdvice" className="form-label">
                                    Area Of Advice
                                    </label>
                                    <Field
                                    id="AreaOfAdvice"
                                    name='AreaOfAdvice'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="AgedCare">Aged Care</option>
                                    <option value="Budgeting">Budgeting</option>
                                    <option value="BusinessStructure">Business Structure</option>
                                    <option value="Debt">Debt</option>
                                    <option value="EstatePlanning">Estate Planning</option>
                                    <option value="InsuranceAdvice">Insurance Advice</option>
                                    <option value="Investment">Investment</option>
                                    <option value="RetirementPlanning">Retirement Planning</option>
                                    <option value="Superannuation">Superannuation</option>
                                    <option value="Other">Other</option>
                                                            
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="AreaOfAdvice" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="When" className="form-label">
                                    When
                                    </label>
                                    <Field
                                    id="When"
                                    name='When'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="Other">Other</option>
                                    <option value="MeetGoalNow&Ongoing">Meet Goal Now & Ongoing</option>
                                    <option value="MeetGoalNow">Meet Goal Now</option>
                                    <option value="Ongoing">Ongoing</option>
                                    <option value="MeetinYear1">Meet in Year 1</option>
                                    <option value="MeetinYear2">Meet in Year 2</option>
                                    <option value="MeetinYear4">Meet in Year 3</option>
                                    <option value="MeetinYear4">Meet in Year 4</option>
                                    <option value="MeetinYear5">Meet in Year 5</option>
                                    
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="When" />
                                </div>
                            </div>
                        </div>
                            
                            <div className='row'>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="EstimatedAmount" className="form-label">Estimated Amount</   label>
                                    <Field type="number" className="form-control shadow inputDesign"
                                    id="EstimatedAmount" name='EstimatedAmount' placeholder="Estimated Amount"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='EstimatedAmount' />
                                    </div>            
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Description" className="form-label">
                                        Description
                                    </label>
                                    <Field 
                                        as="textarea"
                                        className="form-control shadow inputDesign"
                                        id="Description"
                                        name='Description'
                                        placeholder="Description"
                                    />

                                    <ErrorMessage component='div' className="text-danger fw-bold"name="Description"/>
                                    </div>
                                </div>

                           </div>
                        
                        </Modal.Body>
                            <Modal.Footer>
                              <div className="col-md-12">
                                <button
                                  className="float-end btn   bgColor modalBtn"
                                  type='submit'
                                >
                                  Save
                                </button>
                                <button
                                  className="float-end btn  btn-outline  backBtn mx-3"
                                  onClick={handleClose31}
                                >
                                  Cancel
                                </button>
                              </div>
                            </Modal.Footer>
                            </Form>
                          
                           </Formik>
                          </Modal>
                       {/* Contribute Superannuation */} 

                             
                                           
                       {/* Investment Portfolio Stream */}
                          <Modal
                            show={show32}
                            onHide={handleClose32}
                            backdrop="static"
                            className="modal-lg"
                            keyboard={false}
                          >
                            <Modal.Header
                              className="text-light modalBG "
                              closeButton
                            >
                          <Modal.Title className="fontStyle">
                              Investment Portfolio
                           {/* <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />

                            </div> */}
                          </Modal.Title>
                            </Modal.Header>
                           <Formik
                            initialValues={ReviewInvestmentPortfolio_initialValues}
                            validationSchema={ReviewInvestmentPortfolio_validationSchema}
                             onSubmit={ReviewInvestmentPortfolio_onSubmit}
                            >
                          
                            <Form>
                            <Modal.Body>
                               
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="AreaOfAdvice" className="form-label">
                                    Area Of Advice
                                    </label>
                                    <Field
                                    id="AreaOfAdvice"
                                    name='AreaOfAdvice'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="AgedCare">Aged Care</option>
                                    <option value="Budgeting">Budgeting</option>
                                    <option value="BusinessStructure">Business Structure</option>
                                    <option value="Debt">Debt</option>
                                    <option value="EstatePlanning">Estate Planning</option>
                                    <option value="InsuranceAdvice">Insurance Advice</option>
                                    <option value="Investment">Investment</option>
                                    <option value="RetirementPlanning">Retirement Planning</option>
                                    <option value="Superannuation">Superannuation</option>
                                    <option value="Other">Other</option>
                                                            
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="AreaOfAdvice" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="When" className="form-label">
                                    When
                                    </label>
                                    <Field
                                    id="When"
                                    name='When'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="Other">Other</option>
                                    <option value="MeetGoalNow&Ongoing">Meet Goal Now & Ongoing</option>
                                    <option value="MeetGoalNow">Meet Goal Now</option>
                                    <option value="Ongoing">Ongoing</option>
                                    <option value="MeetinYear1">Meet in Year 1</option>
                                    <option value="MeetinYear2">Meet in Year 2</option>
                                    <option value="MeetinYear4">Meet in Year 3</option>
                                    <option value="MeetinYear4">Meet in Year 4</option>
                                    <option value="MeetinYear5">Meet in Year 5</option>
                                    
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="When" />
                                </div>
                            </div>
                        </div>
                            
                            <div className='row'>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="EstimatedAmount" className="form-label">Estimated Amount</   label>
                                    <Field type="number" className="form-control shadow inputDesign"
                                    id="EstimatedAmount" name='EstimatedAmount' placeholder="Estimated Amount"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='EstimatedAmount' />
                                    </div>            
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Description" className="form-label">
                                        Description
                                    </label>
                                    <Field 
                                        as="textarea"
                                        className="form-control shadow inputDesign"
                                        id="Description"
                                        name='Description'
                                        placeholder="Description"
                                    />

                                    <ErrorMessage component='div' className="text-danger fw-bold"name="Description"/>
                                    </div>
                                </div>

                           </div>
                        
                        </Modal.Body>
                            <Modal.Footer>
                              <div className="col-md-12">
                                <button
                                  className="float-end btn   bgColor modalBtn"
                                  type='submit'
                                >
                                  Save
                                </button>
                                <button
                                  className="float-end btn  btn-outline  backBtn mx-3"
                                  onClick={handleClose32}
                                >
                                  Cancel
                                </button>
                              </div>
                            </Modal.Footer>
                            </Form>
                          
                           </Formik>
                          </Modal>
                       {/* Investment Portfolio */} 

                             
                                           
                       {/* Financial Advice */}
                          <Modal
                            show={show33}
                            onHide={handleClose33}
                            backdrop="static"
                            className="modal-lg"
                            keyboard={false}
                          >
                            <Modal.Header
                              className="text-light modalBG "
                              closeButton
                            >
                          <Modal.Title className="fontStyle">
                              Financial Advice
                           {/* <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />

                            </div> */}
                          </Modal.Title>
                            </Modal.Header>
                           <Formik
                            initialValues={FinancialAdvice_initialValues}
                            validationSchema={FinancialAdvice_validationSchema}
                             onSubmit={FinancialAdvice_onSubmit}
                            >
                          
                            <Form>
                            <Modal.Body>
                               
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="AreaOfAdvice" className="form-label">
                                    Area Of Advice
                                    </label>
                                    <Field
                                    id="AreaOfAdvice"
                                    name='AreaOfAdvice'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="AgedCare">Aged Care</option>
                                    <option value="Budgeting">Budgeting</option>
                                    <option value="BusinessStructure">Business Structure</option>
                                    <option value="Debt">Debt</option>
                                    <option value="EstatePlanning">Estate Planning</option>
                                    <option value="InsuranceAdvice">Insurance Advice</option>
                                    <option value="Investment">Investment</option>
                                    <option value="RetirementPlanning">Retirement Planning</option>
                                    <option value="Superannuation">Superannuation</option>
                                    <option value="Other">Other</option>
                                                            
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="AreaOfAdvice" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="When" className="form-label">
                                    When
                                    </label>
                                    <Field
                                    id="When"
                                    name='When'
                                    className="form-select shadow  inputDesign"
                                    as='select'
                                    >
                                    <option value=''>Select</option>
                                    <option value="Other">Other</option>
                                    <option value="MeetGoalNow&Ongoing">Meet Goal Now & Ongoing</option>
                                    <option value="MeetGoalNow">Meet Goal Now</option>
                                    <option value="Ongoing">Ongoing</option>
                                    <option value="MeetinYear1">Meet in Year 1</option>
                                    <option value="MeetinYear2">Meet in Year 2</option>
                                    <option value="MeetinYear4">Meet in Year 3</option>
                                    <option value="MeetinYear4">Meet in Year 4</option>
                                    <option value="MeetinYear5">Meet in Year 5</option>
                                    
                                    </Field>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name="When" />
                                </div>
                            </div>
                        </div>
                            
                            <div className='row'>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="EstimatedAmount" className="form-label">Estimated Amount</   label>
                                    <Field type="number" className="form-control shadow inputDesign"
                                    id="EstimatedAmount" name='EstimatedAmount' placeholder="Estimated Amount"/>
                                    <ErrorMessage component='div' className='text-danger fw-bold' name='EstimatedAmount' />
                                    </div>            
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                    <label htmlFor="Description" className="form-label">
                                        Description
                                    </label>
                                    <Field 
                                        as="textarea"
                                        className="form-control shadow inputDesign"
                                        id="Description"
                                        name='Description'
                                        placeholder="Description"
                                    />

                                    <ErrorMessage component='div' className="text-danger fw-bold"name="Description"/>
                                    </div>
                                </div>

                           </div>
                        
                        </Modal.Body>
                            <Modal.Footer>
                              <div className="col-md-12">
                                <button
                                  className="float-end btn   bgColor modalBtn"
                                  type='submit'
                                >
                                  Save
                                </button>
                                <button
                                  className="float-end btn  btn-outline  backBtn mx-3"
                                  onClick={handleClose33}
                                >
                                  Cancel
                                </button>
                              </div>
                            </Modal.Footer>
                            </Form>
                          
                           </Formik>
                          </Modal>
                       {/* Financial Advice */}                                            
                         </div>
                </div>

            </div>
            
    </div>

  )
}

export default GoalsObjective