import React, { useState } from "react";
import "./personalDetail.css";

import {Formik , Field,Form, ErrorMessage} from 'formik';

import * as Yup from 'yup';
import 'yup-phone';
import smoking from "./images/smoking.svg";
import notsmoking from "./images/no-smoking.svg";
import notebook from "./images/notebook.svg";
import phonebook from "./images/phonebook.svg";

import child from "./images/child.svg";

import male from "./images/male.svg";
import female from "./images/female.svg";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { NavLink, useNavigate } from "react-router-dom";

const PersonalDetail = () => {
  let letters = /^[a-zA-Z ]*$/;
  let phonePattern=/^[1-9][0-9]{9}$/;
  let postCodePattern=/^\d{4}$/;
  const [show, setShow] = useState(false);
  const [clientSmoker, setClientSmoker] = useState(true);
  const [clientSmoker2, setClientSmoker2] = useState(true);

  const [clientGender, setClientGender] = useState("female");
  const [clientGender2, setClientGender2] = useState("female");

  const [childGender, setChildGender] = useState("female");

  const [clientDec, setClientDec] = useState(true);

  const [numOfChild, setNumOfChild] = useState(1);
  const [checkNumber, setcheckNumber] = useState();
  const [listOfChild, setListOfChild] = useState([])

  const [isChildTable, setIsChildTable] = useState(false)


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let smokerHandler=(elem)=>{
    if(elem=="smoker"){
      // notSmokingID
      document.getElementById("YesSmokerID").classList.add('selectedimage');
      document.getElementById("notSmokingID").classList.add('notSelectedimage');
      document.getElementById("notSmokingID").classList.remove('selectedimage');
      setClientSmoker("True")
    }
      else{
        document.getElementById("notSmokingID").classList.add('selectedimage');
        document.getElementById("YesSmokerID").classList.remove('selectedimage');
        document.getElementById("YesSmokerID").classList.add('notSelectedimage');
        setClientSmoker("False")

      }
  }
  let smokerHandler2=(elem)=>{
    if(elem=="smoker"){
      // notSmokingID
      document.getElementById("YesSmokerID2").classList.add('selectedimage');
      document.getElementById("notSmokingID2").classList.add('notSelectedimage');
      document.getElementById("notSmokingID2").classList.remove('selectedimage');
      setClientSmoker2("True")


    }
      else{
        document.getElementById("notSmokingID2").classList.add('selectedimage');
        document.getElementById("YesSmokerID2").classList.remove('selectedimage');
        document.getElementById("YesSmokerID2").classList.add('notSelectedimage');
        setClientSmoker2("False")

      }
    
    
  }

  let genderHandler=(elem)=>{

    
    if(elem=="female"){
      // window.localStorage.setItem("gender",elem)
    
      document.getElementById("female1").classList.add('selectedimage');
      document.getElementById("male1").classList.add('notSelectedimage');
      document.getElementById("male1").classList.remove('selectedimage');
      setClientGender("female")
    }
      else{
        window.localStorage.setItem("gender",elem)
        document.getElementById("male1").classList.add('selectedimage');
        document.getElementById("female1").classList.remove('selectedimage');
        document.getElementById("female1").classList.add('notSelectedimage');
      setClientGender("male")


      }
    
    
  }
  let genderHandler2=(elem)=>{

    if(elem=="female"){
      // window.localStorage.setItem("gender",elem)
    
      document.getElementById("female12").classList.add('selectedimage');
      document.getElementById("male12").classList.add('notSelectedimage');
      document.getElementById("male12").classList.remove('selectedimage');
      setClientGender2("female")
    }
      else{
        window.localStorage.setItem("gender",elem)
        document.getElementById("male12").classList.add('selectedimage');
        document.getElementById("female12").classList.remove('selectedimage');
        document.getElementById("female12").classList.add('notSelectedimage');
      setClientGender2("male")


      }
    
    
  }

  let clientHealthIssueHandler=(e)=>{
  

   if(e==="no"){
   
    setClientDec(false)

   }
   else{
  
    setClientDec(true)
   
   }
  }
  
  let childrenHandler=(elem,num)=>{
    setcheckNumber(num)
    let noChildren=document.getElementById("noChildren").classList;
    let oneChildren=document.getElementById("oneChildren").classList;
    let twoChildren=document.getElementById("twoChildren").classList;
    let threeChildren3=document.getElementById("threeChildren").classList;
    let fourChildren4=document.getElementById("fourChildren").classList;
    let fiveChildren5=document.getElementById("fiveChildren").classList;

     
    
    noChildren.remove("selectedchildBtn");
    noChildren.add("childBtn");
    oneChildren.remove("selectedchildBtn");
    oneChildren.add("childBtn");
    twoChildren.remove("selectedchildBtn");
    twoChildren.add("childBtn");
    threeChildren3.remove("selectedchildBtn");
    threeChildren3.add("childBtn");
    fourChildren4.remove("selectedchildBtn");
    fourChildren4.add("childBtn");
    fiveChildren5.remove("selectedchildBtn");
    fiveChildren5.add("childBtn");

    document.getElementById(elem).classList.add("selectedchildBtn");
   let abc= document.getElementById(elem).value;
   

   setShow(true)

    
}

let childrenHandlerzero=(elem)=>{
  let noChildren=document.getElementById("noChildren").classList;
  let oneChildren=document.getElementById("oneChildren").classList;
  let twoChildren=document.getElementById("twoChildren").classList;
  let threeChildren3=document.getElementById("threeChildren").classList;
  let fourChildren4=document.getElementById("fourChildren").classList;
  let fiveChildren5=document.getElementById("fiveChildren").classList;
  
  noChildren.remove("selectedchildBtn");
  noChildren.add("childBtn");
  oneChildren.remove("selectedchildBtn");
  oneChildren.add("childBtn");
  twoChildren.remove("selectedchildBtn");
  twoChildren.add("childBtn");
  threeChildren3.remove("selectedchildBtn");
  threeChildren3.add("childBtn");
  fourChildren4.remove("selectedchildBtn");
  fourChildren4.add("childBtn");
  fiveChildren5.remove("selectedchildBtn");
  fiveChildren5.add("childBtn");

  document.getElementById(elem).classList.add("selectedchildBtn");
  
}


let ageHandler=(Dob,Age)=>{
  let DOB=document.getElementById(Dob).value;
  let dateinYear=DOB.split("/");
  let  DOBDate=dateinYear[0];
  let  DOBMonth=dateinYear[1];
  let  DOBYear=dateinYear[2];


  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();


  if(DOBMonth > month){
  let  age=(parseFloat(year)-parseFloat(DOBYear));
  document.getElementById(Age).value=age-1 ||0;
  }
  else{
  let  age=(parseFloat(year)-parseFloat(DOBYear));
  document.getElementById(Age).value=age ||0;
  }


  if(DOBMonth==month){
    if (DOBDate >= day){
      let  age=(parseFloat(year)-parseFloat(DOBYear));
      document.getElementById(Age).value=age-1 ||0;
    }
    else{
      let  age=(parseFloat(year)-parseFloat(DOBYear));
      document.getElementById(Age).value=age ||0;
      }
  }

}

function ChangeDateFormat(CDoB,HDate){
  let CurrentDate = new Date(document.getElementById(HDate).value);
  let dd = CurrentDate.getDate();
  let mm = CurrentDate.getMonth();
  let yyyy = CurrentDate.getFullYear();
  let setDate =  dd + '/' + (mm+1) + '/' + yyyy;
  document.getElementById(CDoB).value = setDate;


}
let partnerAgeHandler=(Dob,Age)=>{

  let DOB=document.getElementById(Dob).value;
  let dateinYear=DOB.split("/");
  let  DOBDate=dateinYear[0];
  let  DOBMonth=dateinYear[1];
  let  DOBYear=dateinYear[2];


  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();


  if(DOBMonth > month){
  let  age=(parseFloat(year)-parseFloat(DOBYear));
  document.getElementById(Age).value=age-1 ||0;
  }
  else{
  let  age=(parseFloat(year)-parseFloat(DOBYear));
  document.getElementById(Age).value=age ||0;
  }


  if(DOBMonth==month){
    if (DOBDate >= day){
      let  age=(parseFloat(year)-parseFloat(DOBYear));
      document.getElementById(Age).value=age-1 ||0;
    }
    else{
      let  age=(parseFloat(year)-parseFloat(DOBYear));
      document.getElementById(Age).value=age ||0;
      }
  }

  
}




const initialValues={
  titleID:'',
  maritalStatus:'',
  givenNameID:'',
  employmentStatusID:'',
  surnameID:'',
  HealthID:'',
  preferedNameID:'',
  plannedRetirementAgeID:'',
  ClientDoBID:null,
  clientPostalAddressCheckBoxID:false,
  expandFamilyradio:'No',
  healthIssuesradio:'Yes',
  homeAddressID:'',
  homePhoneID:'',
  PostcodeID:'',
  workPhoneID:'',
  emailID:'',
  mobileID:'',

  postalAddressID:'',
  postalPostcodeIDSame:'',
  DescriptionID:'',
 
  // partner
  maritalStatus2:'',
  givenNameID2:'',
  employmentStatusID2:'',
  surnameID2:'',
  HealthID2:'',
  preferedNameID2:'',
  Smoker:'',
  Gender:'',
  plannedRetirementAgeID2:'',
  ClientDoBID2:'',
  // employeeAgeID2:'',
  
  workPhoneID2:'',
  mobileID2:'',
  emailID2:'',

}
let Navigate = useNavigate();

const onSubmit= (values,action) => {

  // Navigate('/Business-Tax-Structure');

let ClientDetails={
    Title:values.titleID,
    GivenName:values.givenNameID,
    Surname:values.surnameID,
    PreferredName:values.preferedNameID,
    Gender:clientGender,
    DOB: values.ClientDoBID,
    Age:parseFloat(document.getElementById("employeeAgeID").value),
    MaritalStatus:values.maritalStatus,
    EmploymentStatus:values.employmentStatusID,
    Health:values.HealthID,
    Smoker:clientSmoker,
    PlannedRetirementAge:values.plannedRetirementAgeID,
    HomeAddress:values.homeAddressID,
    Postcode:values.PostcodeID,
    HomePhone:parseFloat(values.homePhoneID),
    WorkPhone:parseFloat(values.workPhoneID),
    Mobile:parseFloat(values.mobileID),
    Email:values.emailID,
    PostalAddress:values.postalAddressID,
    PostalPostCode:values.postalPostcodeIDSame,
    ExpandFamily:values.expandFamilyradio,
    HealthIssues:values.healthIssuesradio,
    Description:values.DescriptionID,
  }
 let PartnerDetails={
    Title:values.titleID2,
    GivenName:values.givenNameID2,
    Surname:values.surnameID2,
    PreferredName:values.preferedNameID2,
    Gender:clientGender2,
    DOB:values.ClientDoBID2,
    Age:parseFloat(document.getElementById("employeeAgeID2").value),
    MaritalStatus:values.maritalStatus2,
    EmploymentStatus:values.employmentStatusID2,
    Health:values.HealthID2,
    Smoker:clientSmoker2,
    PlannedRetirementAge:values.plannedRetirementAgeID2,
    WorkPhone:parseFloat(values.workPhoneID2),
    Mobile:parseFloat(values.mobileID2),
    Email:values.emailID2,
    
  }
  axios
  .post('http://localhost:7000/Client/Add-Client',ClientDetails)
  .then((res) => {
    console.log("Client Successfully Added!");
    
  })

  axios
  .post('http://localhost:7000/Partner/Add-Partner',PartnerDetails)
  .then((res) => console.log("Partner Successfully Added!"))

console.log(PartnerDetails)
console.log(ClientDetails)


}
        const validationSchema = Yup.object({
           givenNameID: Yup.string().matches(letters, "only letters").required('Required') ,
           maritalStatus: Yup.string().required('Required'),
           preferedNameID: Yup.string().matches(letters, "only letters").required('Required') ,
           employmentStatusID: Yup.string().required('Required'),
           titleID: Yup.string().required('Required'),
           surnameID: Yup.string().matches(letters, "only letters").required('Required') ,
           HealthID: Yup.string().required('Required'),
           plannedRetirementAgeID:Yup.number().required("Required")
           .test(
             "Is positive?",
             "Age must be a positive number",
             (value) => value > 0
           ),
           ClientDoBID: Yup.string().required('Required'),

           homeAddressID:Yup.string().required('Required'),
           homePhoneID:Yup.string().matches(phonePattern, "invalid phone number")
           .required('Required'),
           PostcodeID:Yup.string().matches(postCodePattern,"invalid postcode").required('Required'),

           workPhoneID:Yup.string().matches(phonePattern, "invalid phone number")
           .required('Required'),
           emailID: Yup.string().email("Invalid email format").required("Required"),
           mobileID:Yup.string().matches(phonePattern, "invalid phone number").required("Required"),
           postalAddressID:Yup.string().when("clientPostalAddressCheckBoxID",{
            is:false,
            then:Yup.string().required("Required")
           }),
            postalPostcodeIDSame:Yup.string().when("clientPostalAddressCheckBoxID",{
            is:false,
            then:Yup.string().matches(postCodePattern,"invalid postcode").required("Required")
           }),

            DescriptionID:Yup.string()
            .when("healthIssuesradio",{
            is:(val)=> val && val.length ==3,
            then:Yup.string().required("Required")
             }),


        
          titleID2:Yup.string().required("Required"),
          maritalStatus2:Yup.string().required("Required"),
          givenNameID2: Yup.string().matches(letters, "only letters").required('Required') ,
          employmentStatusID2:Yup.string().required("Required"),
          surnameID2: Yup.string().matches(letters, "only letters").required('Required') ,
          HealthID2:Yup.string().required("Required"),
          preferedNameID2: Yup.string().matches(letters, "only letters").required('Required') ,
          plannedRetirementAgeID2:Yup.number().required("Required")
          .test(
            "Is positive?",
            "Age must be a positive number",
            (value) => value > 0
          ),
          ClientDoBID2: Yup.string().required('Required'),
          workPhoneID2:Yup.string().matches(phonePattern, "invalid phone number")
          .required('Required'),

          mobileID2:Yup.string().matches(phonePattern, "invalid phone number")
          .required('Required'),

          emailID2: Yup.string().email("Invalid email format").required("Required"),

        })

// ----------------------------------------------------------------------
let ageHandler2=()=>{
  let DOB=document.getElementById("childDoBID").value;
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${year}-${month}-${day}`;
  let  age=(parseFloat(currentDate)-parseFloat(DOB));
  document.getElementById("childAge").value=age ||0;
  

}
 let modalGenderHandler=(elem)=>{
    if(elem=="female"){
      // window.localStorage.setItem("gender",elem)
      document.getElementById("female").classList.add('selectedimage');
      document.getElementById("male").classList.add('notSelectedimage');
      document.getElementById("male").classList.remove('selectedimage');
      setChildGender("female")

    }
      else{
        window.localStorage.setItem("gender",elem)
        document.getElementById("male").classList.add('selectedimage');
        document.getElementById("female").classList.remove('selectedimage');
        document.getElementById("female").classList.add('notSelectedimage');
        setChildGender("male")
      }
    
    
  }
  
const initialValues2={
  childNameID:"",
  childDoBID:'',
  childRelationship:'',
  childSupportReceived:'',
  childDependentradio:'No',
  significantEducationRadio:'No',
  DependantUntilAge:'',
  CostofPrimaryEducation:'',
  CostofSecondaryEducation:'',
  CostofUniEducation:'',
  courseYears:'',
  AmountPaidReceivedID:'',
  childAge:'',
  }
  const onSubmit2= (values,action) => {
  
    let age=document.getElementById("childAge").value;
    
    let ChildDetails={
      ChildNO: parseFloat(checkNumber),
      ChildName:values.childNameID,
      ChildDOB:values.childDoBID,
      ChildAge:parseFloat(age),
      ChildGender:childGender,
      ChildRelation:values.childRelationship,
      ChildFinancialyDependent:values.childDependentradio,
      ChildDependentAge:parseFloat(values.DependantUntilAge),
      ChildSupportRecieved:values.childSupportReceived,
      ChildAmountRecieved:parseFloat(values.AmountPaidReceivedID),
      ChildSignificantEducationCost:values.significantEducationRadio,
      ChildPrimaryEducationCost:parseFloat(values.CostofPrimaryEducation),
      ChildSecondaryEducationCost:parseFloat(values.CostofSecondaryEducation),
      ChildUniversityEducationCost:parseFloat(values.CostofUniEducation),
      ChildCourseYear:parseFloat(values.courseYears)      
    }
    console.log(ChildDetails)

    axios
  .post('http://localhost:7000/Child/Add-Child', ChildDetails)
  .then((res) => console.log("Child Successfully Added!"))
     setListOfChild([...listOfChild, ChildDetails])
   
    setChildGender("female")
    //  handleClose ();
    if(numOfChild==checkNumber){
      handleClose ();
      setNumOfChild(1)
      setIsChildTable(true)
    }
    else{
      setNumOfChild(numOfChild+1)
      handleClose ();
      setIsChildTable(true)

      // setShow(true)
      setTimeout(() => {
        handleShow();
      }, 600);
    }

   
  
  }
  
    const validationSchema2=Yup.object({
    childNameID: Yup.string().matches(letters, "only letters").required('Required') ,
    childDoBID: Yup.string().required('Required'),
    childRelationship:Yup.string().required('Required'),
    CostofPrimaryEducation:Yup.number()
    .when("significantEducationRadio",{
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
    CostofSecondaryEducation:Yup.number()
    .when("significantEducationRadio",{
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
    CostofUniEducation:Yup.number()
    .when("significantEducationRadio",{
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
    courseYears:Yup.string()
    .when("significantEducationRadio",{
      is: val => val && val.length==3,
      then:Yup.string().required("Required")
      ,otherwise: Yup.string()
      .notRequired()
    }),

    DependantUntilAge:Yup.number()
    .when("childDependentradio",{
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

    childSupportReceived:Yup.string()
    .when("childDependentradio",{
      is: val => val && val.length==3,
      then:Yup.string().required("Required")
      ,otherwise: Yup.string()
      .notRequired()
    }),
  
 
  AmountPaidReceivedID:Yup.number()
  .when('childSupportReceived',{
    is: val => val && val.length ==4,
    then:Yup.number().required("Required")
    .test(
      "Is positive?",
      "Amount must be a positive number",
      (value)=> value >0
    ),
    otherwise: Yup.number().notRequired()
  })
  
  
  
    
    })

  let DependantHandler=(e)=>{
    
    let decRow=document.getElementById("dependantRow").classList;
    if(e==="no"){
   
     decRow.add("d-none")
    }
    else{
     decRow.remove("d-none")
     
 
    }
   }

   let significantCostsHandler=(e)=>{
    
    let decRow=document.getElementById("significantCostsofEducationRow").classList;
    if(e==="no"){
   
     decRow.add("d-none")
    }
    else{
     decRow.remove("d-none")
     
 
    }
   }

   let deleteHandler=(e)=>{
    console.log("delete",e)
   }

   let updateHandler=(e)=>{
    console.log("update",e)
   }

  return (
    <>
    
        {/* --------------------------Start client Form-------------------- */}
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                    enableReinitialize
                    >
                      {({values, setFieldValue, handleChange, errors, touched})=>
                      <Form>
      <div className="container-fluid mt-4">
        <div className="row m-0 p-0 ">
          <div className="col-md-2 m-0 p-0 ">
          
          </div>

          <div className="col-md-12">
           

              {/* Client Personal Information */}
              <div className="">
                <div className=" shadow px-4 py-4">
                <h3 className="heading ">Client Personal Information
                  <div className="iconContainerLg">
                    <img className="img-fluid" src={notebook} alt="" />
                    </div>
                    </h3>

                  
                        
                   <div>
                  {/*first row*/}
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="titleID" className="form-label">
                          Title
                        </label>
                        <Field
                          id="titleID"
                          className="form-select shadow  inputDesign"
                          as="select"
                          onChange={(e) => setFieldValue("titleID", e.target.value)}
                          value={values.titleID}
                        >
                          <option value="">Select</option>
                          <option value="Dr">Dr</option>
                          <option value="Mr">Mr</option>
                          <option value="Mrs">Mrs</option>
                          <option value="Miss">Miss</option>
                          <option value="MS">MS</option>
                          <option value="Prof">Prof</option>
                          <option value="Other">Other</option>
                        </Field>
                        <ErrorMessage component='div' className="text-danger fw-bold" name="titleID"  />
                        {/* <ErrorMessage component='div' className="text-danger fw-bold"name="titleID" className="text-danger" 
                        component="span" /> */}

                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="maritalStatus" className="form-label">
                          Marital Status
                        </label>
                        <Field
                        as="select"
                          id="maritalStatus"
                          className="form-select shadow  inputDesign"
                          onChange={(e) => setFieldValue("maritalStatus", e.target.value)}
                          value={values.maritalStatus}
                        >
                          <option value="">Select</option>
                          <option value="Married">Married</option>
                          <option value="Partnered">Partnered</option>
                          <option value="Single">Single</option>
                          <option value="De-Facto">De-facto</option>
                          <option value="Widowed">Widowed</option>
                        </Field>
                        <ErrorMessage component='div' className="text-danger fw-bold"name="maritalStatus" />

                      </div>
                    </div>
                  </div>
                  {/*first row*/}

                  {/* second row */}
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="givenNameID" className="form-label">
                          Given Name
                        </label>
                        <Field
                          type="text"
                          className="form-control inputDesign shadow inputDesign"
                          id="givenNameID"
                          placeholder="Given Name"
                          value={values.clientName} onChange={(e)=>setFieldValue("givenNameID",e.target.value)}
                        />
                        <ErrorMessage component='div' className="text-danger fw-bold" name='givenNameID'/>

                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="employmentStatusID"
                          className="form-label"
                        >
                          Employment Status
                        </label>
                        <Field
                        as="select"
                          id="employmentStatusID"
                          className="form-select shadow  inputDesign"
                          value={values.employmentStatusID}
                  onChange={(e) => setFieldValue("employmentStatusID", e.target.value)}

                        >
                          <option value="">Select</option>
                          <option value="Employee">Employee</option>
                          <option value="Homemaker">Homemaker</option>
                          <option value="Not Working">Not Working</option>

                          <option value="Self-funded Retiree">
                            Self-funded Retiree
                          </option>
                          <option value="Centrelink Retiree">
                            Centrelink Retiree
                          </option>
                          <option value="Centrelink Recipient">
                            Centrelink Recipient
                          </option>

                          <option value="Self-employed">Self-employed</option>
                          <option value="Student">Student</option>
                          <option value="Unemployed">Unemployed</option>
                        </Field>
                <ErrorMessage component='div' className="text-danger fw-bold"name="employmentStatusID" />

                      </div>
                    </div>
                  </div>
                  {/*second row*/}

                  {/* Third row */}
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="surnameID" className="form-label">
                          Surname
                        </label>
                        <Field
                          type="text"
                          className="form-control inputDesign shadow"
                          id="surnameID"
                          placeholder="Surname"
                          onChange={(e) => setFieldValue("surnameID",e.target.value)}
                          value={values.surnameID}
                        />
                          <ErrorMessage component='div' className="text-danger fw-bold"name="surnameID" />

                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="HealthID" className="form-label">
                          Health
                        </label>
                        <Field
                        as='select'
                          id="HealthID"
                          className="form-select shadow  inputDesign"
                          onChange={(e) => setFieldValue("HealthID", e.target.value)}
                          value={values.HealthID}
                        >
                          <option value="">Select</option>
                          <option value="excellent">Excellent</option>
                          <option value="good">Good</option>
                          <option value="average">Average</option>
                          <option value="poor">Poor</option>
                        </Field>
                        <ErrorMessage component='div' className="text-danger fw-bold"name="HealthID" />

                      </div>
                    </div>
                  </div>
                  {/*Third row*/}

                  {/* Four row */}
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="preferedNameID" className="form-label">
                        Prefered Name
                        </label>
                        <Field
                          type="text"
                          className="form-control inputDesign shadow"
                          id="preferedNameID"
                          placeholder="Prefered Name"
                          onChange={(e) => setFieldValue("preferedNameID",e.target.value)}
                          value={values.preferedNameID}
                        />
                          <ErrorMessage component='div' className="text-danger fw-bold"name="preferedNameID" />

                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Smoker</label>
                        <div className="">
                          <div  id="YesSmokerID" className=" selectedimage" onClick={()=>smokerHandler("smoker")}>
                            <img
                              className="img-fluid imgPerson"
                              htmlFor="YesSmokerID"
                              src={smoking}
                              alt=""
                            />

                          </div>
                         
                         <div id="notSmokingID"  className="mx-1 notSelectedimage  " onClick={()=>smokerHandler("notSmoker")}>
                            <img
                              className=" img-fluid imgPerson"
                              htmlFor="notSmokingID"
                              src={notsmoking}
                              alt=""
                            />
                          </div>

                      
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Four row*/}

                  {/* Five row */}
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="" className="form-label">
                          Gender
                        </label>
                        <div className="">
                        
                          <div id="female1" className=" selectedimage"
                          onClick={()=>genderHandler("female")}>
                            
                            <img
                              className="img-fluid imgPerson"
                              htmlFor="female"
                              src={female}
                              alt=""

                            />
                          </div>
                        

                       
                          <div id="male1" className=" mx-1 notSelectedimage"
                          onClick={()=>genderHandler("male")}>
                            <img
                              className=" img-fluid imgPerson"
                              htmlFor="male"
                              src={male}
                              alt=""
                            />
                          </div>
                       
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="plannedRetirementAgeID"
                          className="form-label"
                        >
                          Planned Retirement Age
                        </label>
                        <Field
                          type="number"
                          className="form-control inputDesign shadow"
                          id="plannedRetirementAgeID"
                          placeholder="Planned Retirement Age"
                          onWheel={ event => event.currentTarget.blur() }
                          onChange={(e) => setFieldValue("plannedRetirementAgeID", e.target.value)}
                          value={values.plannedRetirementAgeID}
                        />
                                        <ErrorMessage component='div' className="text-danger fw-bold"name="plannedRetirementAgeID" />

                      </div>
                    </div>
                  </div>
                  {/*Five row*/}

                  {/* six row */}
                  <div className="row">
                  <div className="col-md-6">
                        <label htmlFor="ClientDoBID" className="form-label">
                        Date of Birth
                        </label>
                      <div className="input-group ">
                        <Field
                          className="form-control inputDesign shadow"
                          id="ClientDoBID"
                          name='ClientDoBID'
                          onBlur={(e)=>ageHandler("ClientDoBID","employeeAgeID")}
                          // value={values.DoBID}
                          // max="2023-1-31"
                        />
                        <div className="input-group-append">
                          <span className="input-group-text" id="CalenderIcon">
                            <input className="HiddenDate" name='ClientDoBID' type='date' id="HiddenDate"
                             onChange={()=>ChangeDateFormat("ClientDoBID","HiddenDate")}/>
                          </span>
                        </div>
                      </div>
                      <ErrorMessage component='div' className="text-danger fw-bold"name="ClientDoBID2" />
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="employeeAgeID" className="form-label">
                         Age
                        </label>
                        <Field
                          type="text"
                          className="form-control inputDesign shadow"
                          id="employeeAgeID"
                          name="employeeAgeID"
                          placeholder="Age"
                          readOnly
                          // onChange={(e) => setFieldValue("employeeAgeID", e.target.value)}
                          // value={values.employeeAgeID}
                        />
                        <ErrorMessage component='div' className="text-danger fw-bold"name="employeeAgeID" />

                      </div>
                    </div>
                  </div>
                  {/*six row*/}
                  </div>
                    
               
                    

                </div>
              </div>
              {/* Client Personal Information */}

              {/* Partner Personal Information */}
              <div className="mt-4">
                <div className=" shadow px-4 py-4">
                <h3 className="heading ">Partner Personal Information
                  <div className="iconContainerLg">
                    <img className="img-fluid" src={notebook} alt="" />
                    </div>
                    </h3>
    
                   <div>
                  {/*first row*/}
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="titleID2" className="form-label">
                          Title
                        </label>
                        <Field
                        as="select"
                          id="titleID2"
                          className="form-select shadow  inputDesign"
                         
                          name="titleID2"
                          onChange={(e) => setFieldValue("titleID2", e.target.value)}
                          value={values.titleID2}
                        >
                          <option value="">Select</option>
                          <option value="Dr">Dr</option>
                          <option value="Mr">Mr</option>
                          <option value="Mrs">Mrs</option>
                          <option value="Miss">Miss</option>
                          <option value="MS">MS</option>
                          <option value="Prof">Prof</option>
                          <option value="Other">Other</option>
                        </Field>
                        <ErrorMessage className="text-danger fw-bold" component="div"   name="titleID2"  />
                       

                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="maritalStatus2" className="form-label">
                          Marital Status
                        </label>
                        <Field
                        as="select"
                          id="maritalStatus2"
                          className="form-select shadow  inputDesign"
                          name="maritalStatus2"
                        >
                          <option value="">Select</option>
                          <option value="Married">Married</option>
                          <option value="Partnered">Partnered</option>
                          <option value="De-Facto">De-facto</option>
                        </Field>
                        <ErrorMessage className="text-danger fw-bold" component="div"   name="maritalStatus2" />

                      </div>
                    </div>
                  </div>
                  {/*first row*/}

                  {/* second row */}
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="givenNameID2" className="form-label">
                          Given Name
                        </label>
                        <Field
                          type="text"
                          className="form-control inputDesign shadow inputDesign"
                          placeholder="Given Name"
                          id="givenNameID"
                          name="givenNameID2"
                        />
                        <ErrorMessage className="text-danger fw-bold" component="div"    name='givenNameID2'/>

                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="employmentStatusID2"
                          className="form-label"
                        >
                          Employment Status
                        </label>
                        <Field
                        as="select"
                          id="employmentStatusID2"
                          className="form-select shadow  inputDesign"
                        name="employmentStatusID2"
                        >
                          <option value="">Select</option>
                          <option value="Employee">Employee</option>
                          <option value="Homemaker">Homemaker</option>
                          <option value="Not Working">Not Working</option>

                          <option value="Self-funded Retiree">
                            Self-funded Retiree
                          </option>
                          <option value="Centrelink Retiree">
                            Centrelink Retiree
                          </option>
                          <option value="Centrelink Recipient">
                            Centrelink Recipient
                          </option>

                          <option value="Self-employed">Self-employed</option>
                          <option value="Student">Student</option>
                          <option value="Unemployed">Unemployed</option>
                        </Field>
                       <ErrorMessage className="text-danger fw-bold" component="div"   name="employmentStatusID2" />

                      </div>
                    </div>
                  </div>
                  {/*second row*/}

                  {/* Third row */}
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="surnameID2" className="form-label">
                          Surname
                        </label>
                        <Field
                          type="text"
                          className="form-control inputDesign shadow"
                          id="surnameID2"
                          placeholder="Surname"
                          name="surnameID2"
                        />
                          <ErrorMessage className="text-danger fw-bold" component="div"   name="surnameID2" />

                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="HealthID2" className="form-label">
                          Health
                        </label>
                        <Field
                        as='select'
                          id="HealthID2"
                          className="form-select shadow  inputDesign"
                          name="HealthID2"
                        >
                          <option value="">Select</option>
                          <option value="excellent">Excellent</option>
                          <option value="good">Good</option>
                          <option value="average">Average</option>
                          <option value="poor">Poor</option>
                        </Field>
                        <ErrorMessage className="text-danger fw-bold" component="div"   name="HealthID2" />

                      </div>
                    </div>
                  </div>
                  {/*Third row*/}

                  {/* Four row */}
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="preferedNameID2" className="form-label">
                        Prefered Name
                        </label>
                        <Field
                          type="text"
                          className="form-control inputDesign shadow"
                          id="preferedNameID2"
                          placeholder="Prefered Name"
                          name="preferedNameID2"
                        />
                          <ErrorMessage className="text-danger fw-bold" component="div"   name="preferedNameID2" />

                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Smoker</label>
                        <div className="">
                          <div  id="YesSmokerID2" className=" selectedimage" onClick={()=>smokerHandler2("smoker")}>
                            <img
                              className="img-fluid imgPerson"
                              htmlFor="YesSmokerID2"
                              src={smoking}
                              alt=""
                            />

                          </div>
                         
                         <div id="notSmokingID2"  className="mx-1 notSelectedimage  " onClick={()=>smokerHandler2("notSmoker")}>
                            <img
                              className=" img-fluid imgPerson"
                              htmlFor="notSmokingID2"
                              src={notsmoking}
                              alt=""
                            />
                          </div>

                      
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Four---------------------------------------------------- row*/}

                  {/* Five row */}
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="" className="form-label">
                          Gender
                        </label>
                        <div className="">
                        
                          <div id="female12" className=" selectedimage"
                          onClick={()=>genderHandler2("female")}>
                            
                            <img
                              className="img-fluid imgPerson"
                              htmlFor="female12"
                              src={female}
                              alt=""

                            />
                          </div>
                        

                       
                          <div id="male12" className=" mx-1 notSelectedimage"
                          onClick={()=>genderHandler2("male")}>
                            <img
                              className=" img-fluid imgPerson"
                              htmlFor="male12"
                              src={male}
                              alt=""
                            />
                          </div>
                       
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="plannedRetirementAgeID2"
                          className="form-label"
                        >
                          Planned Retirement Age
                        </label>
                        <Field
                          type="number"
                          className="form-control inputDesign shadow"
                          id="plannedRetirementAgeID2"
                          placeholder="Planned Retirement Age"
                          onWheel={ event => event.currentTarget.blur() }
                          name="plannedRetirementAgeID2"
                        />
                                        <ErrorMessage className="text-danger fw-bold" component="div"   name="plannedRetirementAgeID2" />

                      </div>
                    </div>
                  </div>
                  {/*Five row*/}

                  {/* six row */}
                  <div className="row">

                     <div className="col-md-6">
                        <label htmlFor="ClientDoBID2" className="form-label">
                        Date of Birth
                        </label>
                      <div className="input-group ">
                        <Field
                          className="form-control inputDesign shadow"
                          id="ClientDoBID2"
                          name='ClientDoBID2'
                          onBlur={(e)=>partnerAgeHandler("ClientDoBID2","employeeAgeID2")}
                          // value={values.DoBID}
                          // max="2023-1-31"
                        />
                        <div className="input-group-append">
                          <span className="input-group-text" id="CalenderIcon">
                            <input className="HiddenDate" name='ClientDoBID2' type='date' id="HiddenDate2"
                             onChange={()=>ChangeDateFormat("ClientDoBID2","HiddenDate2")}/>
                          </span>
                        </div>
                      </div>
                      <ErrorMessage component='div' className="text-danger fw-bold"name="ClientDoBID2" />
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="employeeAgeID2" className="form-label">
                         Age
                        </label>
                        <Field
                          type="text"
                          className="form-control inputDesign shadow"
                          id="employeeAgeID2"
                          name="employeeAgeID2"
                          placeholder="Age"
                          readOnly
                         
                        />
                        {/* <ErrorMessage className="text-danger fw-bold" component="div"   name="employeeAgeID2" /> */}

                      </div>
                    </div>
                  </div>
                  {/*six row*/}
                  </div>
                    
               
                    

                </div>
              </div>
              {/* Partner Personal Information */}
            

          </div>
          
        </div>

      </div>
        {/* --------------------------End client Form-------------------- */}


      {/* ------------- start contact details form----------------------------- */}
      <div className="container-fluid mt-4 ">
        <div className="row m-0 px-0  ">
          <div className="col-md-2"></div>
          <div className="col-md-12">


      {/*  start Client contact details form */}
           
              <div className=" shadow px-4 py-4">
              <h3 className="heading">
              Client Contact Details 
                   <div className="iconContainerLg">
                      <img className="img-fluid" src={phonebook} alt="" />
                       </div>
                            </h3>
                {/*first row*/}
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="homeAddressID" className="form-label">
                        Home Address
                      </label>
                      <Field
                        type="text"
                        className="form-control inputDesign shadow inputDesign"
                        id="homeAddressID"
                        placeholder="Home Address"
                        name="homeAddressID"

                          // onChange={(e) => setFieldValue("homeAddressID", e.target.value)}
                          // value={values.homeAddressID}
                      />
                        <ErrorMessage component='div' className="text-danger fw-bold"name="homeAddressID" />

                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="homePhoneID" className="form-label">
                        Home Phone
                      </label>
                      <Field
                        type="text"
                        className="form-control inputDesign shadow"
                        id="homePhoneID"
                        placeholder="Home Phone"
                         onChange={(e) => setFieldValue("homePhoneID", e.target.value)}
                          value={values.homePhoneID}
                      />
                                              <ErrorMessage component='div' className="text-danger fw-bold"name="homePhoneID" />

                    </div>
                  </div>
                </div>
                {/*first row*/}

                {/* second row */}
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="PostcodeID" className="form-label">
                        Postcode/Suburb
                      </label>

                      <Field
                        type="text"
                        className="form-control inputDesign shadow"
                        id="PostcodeID"
                        placeholder="Postcode/Suburb"

                      onChange={(e) => setFieldValue("PostcodeID", e.target.value)}
                          value={values.PostcodeID}
                      />
                                              <ErrorMessage component='div' className="text-danger fw-bold"name="PostcodeID" />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="workPhoneID" className="form-label">
                        Work Phone
                      </label>
                      <Field
                        type="text"
                        className="form-control inputDesign shadow"
                        id="workPhoneID"
                        name="workPhoneID"
                        placeholder="Work Phone"
                        // onChange={(e) => setFieldValue("workPhoneID", e.target.value)}
                        //   value={values.workPhoneID}
                      />
                                              <ErrorMessage component='div' className="text-danger fw-bold"name="workPhoneID" />
                    </div>
                  </div>
                </div>
                {/*second row*/}

                {/* Third row */}
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="emailID" className="form-label">
                        Email
                      </label>
                      <Field
                        type="email"
                        className="form-control inputDesign shadow"
                        id="emailID"
                        placeholder="abc@gmail.com"
                     onChange={(e) => setFieldValue("emailID", e.target.value)}
                          value={values.emailID}
                      />
                                              <ErrorMessage component='div' className="text-danger fw-bold"name="emailID" />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="mobileID" className="form-label">
                        Mobile
                      </label>
                      <Field
                        type="number"
                        className="form-control inputDesign shadow"
                        id="mobileID"
                        placeholder="Mobile"
                        onChange={(e) => setFieldValue("mobileID", e.target.value)}
                          value={values.mobileID}
                      />
                                              <ErrorMessage component='div' className="text-danger fw-bold"name="mobileID" />
                    </div>
                  </div>
                </div>
                
                {/*Third row*/}

                {/* Four row */}
                <div className="row">
                  <div className="col-md-6">
                    <label className="form-label">Postal Address</label>

                    <div className="form-check">
                      <Field
                        className="form-check-input"
                        type="checkbox"
                        id="clientPostalAddressCheckBoxID"
                        name="clientPostalAddressCheckBoxID"
                        checked={values.clientPostalAddressCheckBoxID}
                        onChange={() => {
                          if (!values.clientPostalAddressCheckBoxID) {
                            // copy values from homeAddress to otherAddress
                            setFieldValue('postalAddressID', values.homeAddressID);
                            setFieldValue('postalPostcodeIDSame', values.PostcodeID);

                          }

                          if(values.clientPostalAddressCheckBoxID){
                            setFieldValue('postalAddressID',"");
                          setFieldValue('postalPostcodeIDSame',"");
                          }
                         
                          // toggle sameAsHomeAddress checkbox
                          setFieldValue('clientPostalAddressCheckBoxID', !values.clientPostalAddressCheckBoxID);
                          
                          
                          
                        }}
                      />
                     
                     
                      <label
                        className="form-check-label " id="labelID"
                        htmlFor="clientPostalAddressCheckBoxID"
                      >
                        Same as home address
                      </label>
                    </div>
                  </div>
                </div>
                
                  <div className="row" id="sameAboveRow">

                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="postalAddressID" className="form-label">
                        Postal Address
                      </label>
                      <Field
                        type="text"
                        className="form-control inputDesign shadow"
                        id="postalAddressID"
                        placeholder="Postal Address"
                        name="postalAddressID"
                        disabled={values.clientPostalAddressCheckBoxID}
                        
                    />
                      <ErrorMessage component='div' className="text-danger fw-bold"name="postalAddressID" />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="postalPostcodeIDSame" className="form-label">
                        Postcode/Suburb
                      </label>
                      <Field
                        type="text"
                        className="form-control inputDesign shadow"
                        id="postalPostcodeIDSame"
                        placeholder="Postcode/Suburb"
                        disabled={values.clientPostalAddressCheckBoxID}
                        name="postalPostcodeIDSame"
                    />
                    <ErrorMessage component='div' className="text-danger fw-bold"name="postalPostcodeIDSame" />
                    </div>
                  </div>

                </div> 

                
                {/*Five row*/}

              </div>
      {/*  end Client contact details form */}

         {/*  start partner contact details form */}
           
         <div className=" shadow px-4 py-4 mt-4">
              <h3 className="heading">
                Partner Contact Details 
                <div className="iconContainerLg">
                      <img className="img-fluid" src={phonebook} alt="" />
                </div>
              </h3>
              

                {/* 1st row */}
              <div className="row">

                <div className="col-md-6">
                  <div className="mb-3">
                      <label htmlFor="workPhoneID2" className="form-label">
                        Work Phone
                      </label>
                      <Field
                        type="number"
                        className="form-control inputDesign shadow"
                        id="workPhoneID2"
                        name="workPhoneID2"
                        placeholder="Work Phone"
                      />
                      <ErrorMessage component='div' className="text-danger fw-bold"name="workPhoneID2" />
                  </div>
                </div>

                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="mobileID2" className="form-label">
                        Mobile
                      </label>
                      <Field
                        type="number"
                        className="form-control inputDesign shadow"
                        name="mobileID2"
                        placeholder="Mobile"
                      />
                      <ErrorMessage component='div' className="text-danger fw-bold"name="mobileID2" />
                    </div>
                  </div>
              </div>
                {/*1st row*/}

                {/* 2nd row */}
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="emailID2" className="form-label">
                        Email
                      </label>
                      <Field
                        type="email"
                        className="form-control inputDesign shadow"
                        name="emailID2"
                        placeholder="abc@gmail.com"
                      />
                      <ErrorMessage component='div' className="text-danger fw-bold"name="emailID2" />
                    </div>
                  </div>

                 
                </div>
                
                {/* 2nd row*/}
                
         </div>
      {/*  end partner contact details form */}

          
          </div>
         
        </div>
      </div>

                      {/* </Form>
                      }
                  </Formik> */}
      {/* -------------End contact details form----------------------------- */}

      {/* -------------start children details form----------------------------- */}
      <div className="container-fluid my-4">
        <div className="row m-0">
          <div className="col-md-2"></div>

          <div className="col-md-12">
              <div className=" shadow px-4 py-4">
              <h3 className=" heading">
                Children Details
                <div className="iconContainerLg">
                  <img className="img-fluid" src={child} alt="" />
                  </div>
                  </h3>
                {/*first row*/}
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label htmlFor="numberOfChildren" className="form-label">
                        How many children do you have?
                      </label>
                      <div>
                      <span value="0" id="noChildren" className=" selectedchildBtn childBtn  mx-4" onClick={()=>childrenHandlerzero("noChildren")}>0</span>
                      <span  id="oneChildren" className="childBtn text-center  mx-4" onClick={()=>childrenHandler("oneChildren",1)}>1</span>
                      <span  id="twoChildren" className="childBtn  mx-4" onClick={()=>childrenHandler("twoChildren",2)}>2</span>
                      <span  id="threeChildren" className="childBtn   mx-4" onClick={()=>childrenHandler("threeChildren",3)}>3</span>
                      <span  id="fourChildren" className="childBtn  mx-4" onClick={()=>childrenHandler("fourChildren",4)}>4</span>
                      <span  id="fiveChildren" className="childBtn  mx-4" onClick={()=>childrenHandler("fiveChildren",5)}>5</span>


                      </div>
                    
                     
                    </div>
                  </div>
                </div>
                {/*first row*/}

                {/*   Add children/Dependants */}
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      
                    <div>
                        {/* child modal */}
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
                              Children/Dependant Details
                            </Modal.Title>
                          </Modal.Header>

                          <Formik 
                           initialValues={initialValues2}
                           validationSchema={validationSchema2}
                           onSubmit={onSubmit2}
                           
                           >
                             {({values , setFieldValue ,setValues})=>

                          <Form>
                            <Modal.Body>
                            {/*  first row*/}
                            <div className="row">
                            {/*  child id */}
                              <div className="col-md-6">
                                <div className="mb-3">
                                  <label
                                    htmlFor="plannedRetirementAgeID"
                                    className="form-label"
                                  >
                                    Child
                                  </label>
                                  <input readOnly className="form-control inputDesign shadow" type="text" value={numOfChild} />
                                  
                                </div>
                              </div>
                            {/*  child id */}

                            {/* child Name */}
                              <div className="col-md-6">
                                <div className="mb-3">
                                  <label
                                    htmlFor="childNameID"
                                    className="form-label"
                                  >
                                    Name
                                  </label>
                                  <Field
                                    type="text"
                                    className="form-control inputDesign  shadow"
                                    id="childNameID"
                                    placeholder="Name"
                                    onChange={(e) => setFieldValue("childNameID", e.target.value)}
                                    value={values.childNameID}
                                />
                                  <ErrorMessage className="text-danger fw-bold" component="div"   name="childNameID" />
                                </div>
                              </div>
                            {/* child Name */}

                            </div>

                            {/* row 2 */}
                            <div className="row">
                              {/* DOB */}
                              <div className="col-md-6">
                                <div className="mb-3">
                                  <label
                                    htmlFor="childDoBID"
                                    className="form-label"
                                  >
                                    Date of Birth
                                  </label>

                                  {/* <Field
                                    type="date"
                                    className="form-control inputDesign shadow"
                                    id="childDoBID"
                                    onBlur={(e)=>ageHandler2(e)}
                                    onChange={(e) => setFieldValue("childDoBID", e.target.value)}
                                    value={values.childDoBID}
                      /> */}
                       <div className="input-group ">
                        <Field
                          className="form-control inputDesign shadow"
                          id="childDoBID"
                          name='childDoBID'
                          onBlur={(e)=>ageHandler("childDoBID","childAge")}
                          value={values.DoBID}
                          max="2023-1-31"
                        />
                        <div className="input-group-append">
                          <span className="input-group-text" id="CalenderIcon">
                            <input className="HiddenDate" name='childDoBID' type='date'
                             id="HiddenDate3" onChange={()=>ChangeDateFormat("childDoBID","HiddenDate3")}/>
                          </span>
                        </div>
                         </div>


                        <ErrorMessage className="text-danger fw-bold" component="div"   name="childDoBID" />
                                </div>
                              </div>
                              {/* DOB */}

                            {/* age */}
                              <div className="col-md-6">
                                <div className="mb-3">
                                  <label
                                    htmlFor="childAge"
                                    className="form-label"
                                  >
                                    Age
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control inputDesign shadow"
                                    id="childAge"
                                    placeholder="Age"
                                    readOnly
                                  />
                                </div>
                              </div>
                            {/* age */}
                            </div>
                            {/* row 2 */}

                            {/*row 3*/}
                            <div className="row">
                           
                                    {/* Relationship */}
                            <div className="col-md-6">
                                <div className="mb-3">
                                  <label
                                    htmlFor="childRelationship"
                                    className="form-label"
                                  >
                                    Relationship
                                  </label>
                                  <Field
                                  as='select'
                                    id="childRelationship"
                                    className="form-select shadow  inputDesign"
                                    onChange={(e) => setFieldValue("childRelationship", e.target.value)}
                                    value={values.childRelationship}
                                  >
                                    <option value="">Select</option>
                                    <option value="son">Son</option>
                                    <option value="daughter">Daughter</option>
                                    <option value="grandChild">
                                      Grand Child
                                    </option>
                                    <option value="nephew">Nephew</option>
                                    <option value="niece">Niece</option>
                                    <option value="stepChild">
                                      Step Child
                                    </option>
                                    <option value="other">Other</option>
                                  </Field>
                        <ErrorMessage className="text-danger fw-bold" component="div"   name="childRelationship" />

                                </div>
                              </div>
                                  {/* Relationship */}
                                      {/*Gender*/}
                              <div className="col-md-6 ">
                                

                                <div className="mb-3">
                                  <label htmlFor="" className="form-label">
                                    Gender
                                  </label>
                                  <div className="">
                                  
                                    <div id="female" className=" selectedimage"
                                    onClick={()=>modalGenderHandler("female")}>
                                      
                                      <img
                                        className="img-fluid imgPerson"
                                        htmlFor="female"
                                        src={female}
                                        alt=""
          
                                      />
                                    </div>
                                   
                                    <div id="male" className=" mx-1 notSelectedimage"
                                    onClick={()=>modalGenderHandler("male")}>
                                      <img
                                        className=" img-fluid imgPerson"
                                        htmlFor="male"
                                        src={male}
                                        alt=""
                                      />
                                    </div>
                                   
                                  </div>
                                </div>
                                        </div>
                                      {/*Gender*/}

                            </div>
                            {/*row 3*/}

                            {/* row 4*/}
                            <div className="row">

                               {/* dependant */}

                               <div className="col-md-6  ">
                                <div className="mb-3">
                                  <label
                                    htmlFor="emailID"
                                    className="form-label"
                                  >
                                    Is your child dependant?
                                  </label>
                                     {/* switch button style */}
                                <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <Field type="radio" name="childDependentradio" value="Yes"
                                 id="childDependentopt1"
                                //  checked={values.childDependentradio==="Yes"}
                                checked={values.childDependentradio=="Yes"}
                                onClick={()=>DependantHandler("yes")} />
                                <label htmlFor="childDependentopt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <Field type="radio" name="childDependentradio" value="No"
                                //  checked={values.childDependentradio==="No"}
                                checked={values.childDependentradio=="No"}

                                onClick={()=>DependantHandler("no")} id="childDependentopt2" />
                                <label htmlFor="childDependentopt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>
                                </div>
                              {/* switch button style */}
                                  
                                </div>
                              </div>
                            {/* dependant */}
                            </div>
                            {/* row 4*/}

                            {/* row 42*/}
                            <div className="row d-none" id="dependantRow">
                               {/* Dependant Until Age */}
                              <div className="col-md-6">
                                <div className="mb-3">
                                  <label htmlFor="DependantUntilAge" className="form-label">
                                  Dependant Until Age
                                  </label>
                                  <Field
                                    type="number"
                                    className="form-control inputDesign shadow"
                                    id="DependantUntilAge"
                                    placeholder="Dependant Until Age"
                                    onChange={(e) => setFieldValue("DependantUntilAge", e.target.value)}
                                    value={values.DependantUntilAge}
                                  />
                                  <ErrorMessage className="text-danger fw-bold" component="div"   name="DependantUntilAge" />

                                </div>
                              </div>
                               {/*Dependant Until Age */}
                           
                              
                                {/* Child Support Received */}
                                <div className="col-md-6">
                                <div className="mb-3">
                                  <label
                                    htmlFor="childSupportReceived"
                                    className="form-label"
                                  >
                                    Child Support Received
                                  </label>
                                  <Field
                                    as='select'
                                    id="childSupportReceived"
                                    name="childSupportReceived"
                                    className="form-select shadow  inputDesign"
                                    // onChange={(e) => setFieldValue("childSupportReceived", e.target.value)}
                                    // value={values.childSupportReceived}
                                  >
                                    <option value="">Select</option>
                                    <option value="No">No</option>
                                    <option value="Paid">Paid</option>
                                    <option value="Received">Received</option>
                                  </Field>
                                  <ErrorMessage className="text-danger fw-bold" component="div"   name="childSupportReceived" />

                                </div>
                                </div>
                                {/* Child Support Received */}

                                  {/* row 42 Paid option*/}
                           
                               {/* Amount Paid/Received*/}
                             {  values.childSupportReceived ==="Paid" &&(
                              <div className="col-md-6" id="AmountPaidReceivedRowID">
                                <div className="mb-3">
                                  <label htmlFor="AmountPaidReceivedID" className="form-label">
                                  Amount Paid/Received
                                  </label>
                                  <Field
                                    type="number"
                                    className="form-control inputDesign shadow"
                                    id="AmountPaidReceivedID"
                                    placeholder="Amount Paid/Receieved"
                                    onChange={(e) => setFieldValue("AmountPaidReceivedID", e.target.value)}
                                    value={values.AmountPaidReceivedID}
                                  />
                                  <ErrorMessage className="text-danger fw-bold" component="div"   name="AmountPaidReceivedID" />

                                </div>
                              </div> )}
                              {/* Amount Paid/Received*/}
                            

                            </div>
                            {/* row 42*/}

                          

                           

                            {/* row 5 */}
                            <div className="row">
                              <div className="col-md-12">
                                <div className="mb-3">
                                  <label
                                    htmlFor="significantCosts"
                                    className="form-label"
                                  >
                                    Will child have significant Costs of
                                    Education?
                                  </label>
                                    {/* switch button style */}
                                <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <Field type="radio" name="significantEducationRadio" id="significantEducationOpt1"
                                onClick={()=>significantCostsHandler("yes")} value="Yes"
                                checked={values.significantEducationRadio==="Yes"} />
                                <label htmlFor="significantEducationOpt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <Field type="radio" name="significantEducationRadio" id="significantEducationOpt2"
                                onClick={()=>significantCostsHandler("no")} value="No"
                                // checked={values.childDependentradio==="No"}
                                checked={values.significantEducationRadio==="No"}
                                />
                                <label htmlFor="significantEducationOpt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>
                                </div>
                              {/* switch button style */}
                                </div>
                              </div>
                            </div>
                            {/* row 5 */}

                           <div className="d-none" id="significantCostsofEducationRow">
                            {/* row 6 */}
                            <div className="row">

                            {/* Cost of Primary education */}
                              <div className="col-md-6">
                                <div className="mb-3">
                                  <label htmlFor="CostofPrimaryEducation" className="form-label">
                                    Cost of Primary Education
                                  </label>
                                  <Field
                                    type="number"
                                    className="form-control inputDesign shadow"
                                    id="CostofPrimaryEducation"
                                    placeholder="Cost of primary education"
                                    onChange={(e) => setFieldValue("CostofPrimaryEducation", e.target.value)}
                                    value={values.CostofPrimaryEducation}
                                  />
                                  <ErrorMessage className="text-danger fw-bold" component="div"   name="CostofPrimaryEducation" />

                                </div>
                              </div>
                            {/* Cost of Primary education */}

                           {/* Cost of Secondary education*/}
                              <div className="col-md-6">
                                <div className="mb-3">
                                  <label htmlFor="CostofSecondaryEducation" className="form-label">
                                    Cost of Secondary Education
                                  </label>
                                  <Field
                                    type="number"
                                    className="form-control inputDesign shadow"
                                    id="CostofSecondaryEducation"
                                    placeholder="Cost of Secondary Education"
                                    onChange={(e) => setFieldValue("CostofSecondaryEducation", e.target.value)}
                                    value={values.CostofSecondaryEducation}
                                  />
                                  <ErrorMessage className="text-danger fw-bold" component="div"   name="CostofSecondaryEducation" />

                                </div>
                              </div>

                            {/* Cost of Secondary education */}

                            </div>
                            {/* row 6 */}

                              {/* row 7 */}
                            <div className="row">
                              {/* Cost of Uni Education*/}
                              <div className="col-md-6">
                                <div className="mb-3">
                                  <label htmlFor="CostofUniEducation" className="form-label">
                                    Cost of Uni Education
                                  </label>
                                  <Field
                                    type="number"
                                    className="form-control inputDesign shadow"
                                    id="CostofUniEducation"
                                    placeholder="Cost of Uni Education"
                                    onChange={(e) => setFieldValue("CostofUniEducation", e.target.value)}
                                    value={values.CostofUniEducation}
                                  />
                                  <ErrorMessage className="text-danger fw-bold" component="div"   name="CostofUniEducation" />
                                </div>
                              </div>
                            {/* Cost of Uni Education */}
                            
                            {/* Course Years*/}
                             <div className="col-md-6">
                                <div className="mb-3">
                                  <label
                                    htmlFor="courseYears"
                                    className="form-label"
                                  >
                                    Course Years
                                  </label>
                                  <Field
                                    as='select'
                                    id="courseYears"
                                    className="form-select shadow  inputDesign"
                                    onChange={(e) => setFieldValue("courseYears", e.target.value)}
                                    value={values.courseYears}
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
                                  </Field>
                        <ErrorMessage className="text-danger fw-bold" component="div"   name="courseYears" />


                                </div>
                              </div>
                            {/* Course Years */}

                            </div>
                              {/* row 7 */}
                              </div>

                          </Modal.Body>
                          <Modal.Footer>
                         

                            <div className="col-md-12">
<button className="float-end btn w-25  bgColor modalBtn" type="submit" >Save</button>
<button className="float-end btn w-25  btn-outline  backBtn mx-3" onClick={handleClose} >Cancel</button>

</div>
                          </Modal.Footer>
                          </Form>}
                          </Formik>
                        </Modal>
                        {/* child modal */}
                      </div>
                    </div>
                  </div>
                </div>
                {/*  Add children/Dependants*/}

                {/*  start Are you planning to expand your family? */}
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label  className="form-label">
                        Are you planning to expand your family?{" "}
                      </label>

                         {/* switch button style */}
                         <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="expandFamilyradio" 
                                className="form-check-input" id="expandFamilyopt1"
                                 value="Yes"
                                 onChange={handleChange} checked={values.expandFamilyradio==="Yes"}/>
                                <label htmlFor="expandFamilyopt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="expandFamilyradio" id="expandFamilyopt2"
                                className="form-check-input" value="No"
                                onChange={handleChange}
                                checked={values.expandFamilyradio==="No"}   />
                                <label htmlFor="expandFamilyopt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>
                         </div>
                          {/* switch button style */}
                     
                       </div>
                  </div>

                 
                </div>
                {/*  end Are you planning to expand your family?*/}

                {/* start What health or other issues */}
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label htmlFor="" className="form-label">
                        What health or other issues (if any) need to be
                        considered for dependants?{" "}
                      </label>

                      

                         {/* health button style */}
                               <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="healthIssuesradio" id="healthIssuesopt1" value="Yes"
                                  onClick={()=>clientHealthIssueHandler("yes")} 
                                  onChange={handleChange}
                                   checked={values.healthIssuesradio==="Yes"}
                                   />
                                <label htmlFor="healthIssuesopt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="healthIssuesradio"  
                                onClick={()=>clientHealthIssueHandler("no")}
                                 id="healthIssuesopt2" value="No"
                                onChange={handleChange} 
                                checked={values.healthIssuesradio==="No"}
                                />
                                <label htmlFor="healthIssuesopt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>
                                </div>
                         {/* health switch button style */}


                         


                     
                      
                    </div>
                  </div>
                </div>

                {/*  end What health or other issues */}

                {/* start Description */}
              {clientDec &&
                <div className="row" id="clientDescriptionRow">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label htmlFor="DescriptionID" className="form-label">
                        Description
                      </label>
                      <Field 
                        as="textarea"
                       
                        className="form-control shadow inputDesign  w-75"
                        id="DescriptionID"
                        name='DescriptionID'
                        rows="3"
                        placeholder="Description"
                        


                 
                      />
                      {/* <p className="" id="errorDes">error</p> */}
                      <ErrorMessage component='div' className="text-danger fw-bold"name="DescriptionID"/>
                    </div>
                  </div>
                </div>
                //  : <span></span>
                 }
                {/*end Description*/}
                <div className="row mt-2">
                  <div className="col-md-12">
<button  type='submit' className="float-end btn w-25  bgColor modalBtn">Next</button>
<button className="float-end btn w-25  btn-outline  backBtn mx-3">Back</button>

</div>
        </div>
              </div>
            {/*end children details form */}
          </div>
          </div>
      </div>
      {/* -------------end children details form----------------------------- */}
      

      </Form>
                      }
                  </Formik>

                  <div className="row mx-3">
                  <div className="col-md-12 mt-1">
            
          {/*  table  */}
          { isChildTable &&
         <div   className='table-responsive my-3 d-none' id="childTable">
         <table className="table table-bordered table-hover text-center">
  <thead className="text-light" id="tableHead">
  <tr>
        <th>Child Name</th>
        <th>Date of Birth</th>
        <th>Age</th>
        <th>Gender</th>
        <th>Relationship</th>
       <th>Operations</th>
    </tr>
  </thead>
  <tbody>
  {  listOfChild. map((elem,index)=>{
        let {childNameID,childDoBID,childRelationship,childAge,childGender}=elem;
return(
    
    <tr key={index}>
        <td>{childNameID}</td>
        <td>{childDoBID}</td>
        <td>{childAge}</td>
        <td>{childGender}</td>
        <td>{childRelationship}</td>
        <td >
         {/* <button  type='btn' onClick={(e)=>deleteHandler(elem)} className='btn btn-danger btn-sm'>delete</button>
         <button  type='btn' onClick={(e)=>updateHandler(elem)} className='btn btn-warning btn-sm mx-2'>update</button> */}

         </td> 
    
    </tr>
    );
        
    })}
  </tbody>
</table>
         </div>
}
          {/*  table  */}
          </div>
                  </div>
    </>
  );
};

export default PersonalDetail;
