import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";

import plus from "./images/plus.svg";
import doctor from "./images/doctor.svg";
import lawyer from "./images/lawyer.svg";
import accounting from "./images/accounting.svg";
import businessman from "./images/businessman.svg";
import notebook from "./images/notebook.svg";

import * as Yup from "yup";
import "yup-phone";

import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProfessionalAdvisors = () => {

  const [ClientData, setClientData] = useState([]);
  const [PartnerData, setPartnerData] = useState([]);


  const [isClientTable, setIsClientTable] = useState(false);
  const [isPartnerTable, setIsPartnerTable] = useState(false);


  let partner = window.localStorage.getItem("partner");
  const [isPartnered, setIsPartnered] = useState();

  const [MyClient, setMyClient] = useState([]);
  const [MyPartner, setMyPartner] = useState([]);

  useEffect(() => {
    // console.log("Entered in UseEffect")
    if(partner=="true"){
      setIsPartnered(true)
    }
    else{
      setIsPartnered(false) 
    }

      // Client Professional Advisors
    axios
    .get('http://localhost:7000/Client-ProfessionalAdvisor')
    .then((res) => {
      let DataLength = res.data.length;

      for (let i = 0; i < DataLength; i++){

        if(res.data[i].Email === localStorage.getItem("EditClient")){
          setMyClient(res.data[i])
          console.log(res.data[i])
        }
        else{

          console.log('Not Matched!')
        }
      }
    })

      // Partner Professional Advisors
    axios
    .get('http://localhost:7000/Partner-ProfessionalAdvisor')
    .then((res) => {
      let DataLength = res.data.length;

      for (let i = 0; i < DataLength; i++){

        if(res.data[i].Email === localStorage.getItem("EditClient")){
          setMyPartner(res.data[i])
          console.log(res.data[i])
        }
        else{

          console.log('Not Matched!')
        }
      }
    })

      // Client Modal Professional Advisors
    axios
    .get('http://localhost:7000/Client-ProfessionalAdvisor-Modal')
    .then((res) => {
      let DataLength = res.data.length;

      for (let i = 0; i < DataLength; i++){

        if(res.data[i].Email === localStorage.getItem("EditClient")){
          setClientData([res.data[i]])
          console.log(res.data[i])
          setIsClientTable(true);  
        }
        else{

          console.log('Not Matched!')
        }
      }
    })

      // Partner Modal Professional Advisors
    axios
    .get('http://localhost:7000/Partner-ProfessionalAdvisor-Modal')
    .then((res) => {
      let DataLength = res.data.length;

      for (let i = 0; i < DataLength; i++){

        if(res.data[i].Email === localStorage.getItem("EditClient")){
          setPartnerData([res.data[i]])
          console.log(res.data[i])
          setIsPartnerTable(true);
        }
        else{

          console.log('Not Matched!')
        }
      }
    })
  
   }, [])

  let letters = /^[a-zA-Z ]*$/;
  let phonePattern = /^[1-9][0-9]{9}$/;

  const [ClientEdit, setClientEdit] = useState(false);
  const [PartnerEdit, setPartnerEdit] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [advisorState, setAdvisorState] = useState(false);
  const [advisorState2, setAdvisorState2] = useState(false);

  let advisorHandler = (elem) => {
    if (elem === "No") {
      setAdvisorState(false);
    } else {
      setAdvisorState(true);
    }
  };

  let advisorHandler2 = (elem) => {
    if (elem === "No") {
      setAdvisorState2(false);
    } else {
      setAdvisorState2(true);
    }
  };

  let Client_initialValues = {
    Solicitor_Name: "",
    Solicitor_Company: "",
    Solicitor_Phone: "",
    Solicitor_Email: "",

    Accountant_Name: "",
    Accountant_Company: "",
    Accountant_Phone: "",
    Accountant_Email: "",

    InsuranceAdvisor_Name: "",
    InsuranceAdvisor_Company: "",
    InsuranceAdvisor_Phone: "",
    InsuranceAdvisor_Email: "",

    Doctor_Name: "",
    Doctor_Company: "",
    Doctor_Phone: "",
    Doctor_Email: "",

    Other_Name: "",
    Other_Company: "",
    Other_Phone: "",
    Other_Email: "",
  };

  let Client_validationSchema = Yup.object({
    
    Solicitor_Name: Yup.string()
      .matches(letters, "Only letters")
     ,
    Solicitor_Company: Yup.string()
      .matches(letters, "Only letters")
     ,
    Solicitor_Phone: Yup.string()
      .matches(phonePattern, "invalid phone number")
     ,
    Solicitor_Email: Yup.string()
      .email("Invalid email format")
     ,

    Accountant_Name: Yup.string()
      .matches(letters, "Only letters")
     ,
    Accountant_Company: Yup.string()
      .matches(letters, "Only letters")
     ,
    Accountant_Phone: Yup.string()
      .matches(phonePattern, "invalid phone number")
     ,
    Accountant_Email: Yup.string()
      .email("Invalid email format")
     ,

    InsuranceAdvisor_Name: Yup.string()
      .matches(letters, "Only letters")
     ,
    InsuranceAdvisor_Company: Yup.string()
      .matches(letters, "Only letters")
     ,
    InsuranceAdvisor_Phone: Yup.string()
      .matches(phonePattern, "invalid phone number")
     ,
    InsuranceAdvisor_Email: Yup.string()
      .email("Invalid email format")
     ,

    Doctor_Name: Yup.string()
      .matches(letters, "Only letters")
     ,
    Doctor_Company: Yup.string()
      .matches(letters, "Only letters")
     ,
    Doctor_Phone: Yup.string()
      .matches(phonePattern, "invalid phone number")
     ,
    Doctor_Email: Yup.string()
      .email("Invalid email format")
     ,

    Other_Name: Yup.string()
      .matches(letters, "Only letters")
     ,
    Other_Company: Yup.string()
      .matches(letters, "Only letters")
     ,
    Other_Phone: Yup.string()
      .matches(phonePattern, "invalid phone number")
     ,
    Other_Email: Yup.string().email("Invalid email format").required("Required"),
  });

  let Client_onSubmit = (values) => {
    let ClientModalDetails = {
      Email: localStorage.getItem("ClientEmail"),
      Solicitor_Name: values.Solicitor_Name,
      Solicitor_Company: values.Solicitor_Company,
      Solicitor_Phone: values.Solicitor_Phone,
      Solicitor_Email: values.Solicitor_Email,

      Accountant_Name: values.Accountant_Name,
      Accountant_Company: values.Accountant_Company,
      Accountant_Phone: values.Accountant_Phone,
      Accountant_Email: values.Accountant_Email,

      InsuranceAdvisor_Name: values.InsuranceAdvisor_Name,
      InsuranceAdvisor_Company: values.InsuranceAdvisor_Company,
      InsuranceAdvisor_Phone: values.InsuranceAdvisor_Phone,
      InsuranceAdvisor_Email: values.InsuranceAdvisor_Email,

      Doctor_Name: values.Doctor_Name,
      Doctor_Company: values.Doctor_Company,
      Doctor_Phone: values.Doctor_Phone,
      Doctor_Email: values.Doctor_Email,

      Other_Name: values.Other_Name,
      Other_Company: values.Other_Company,
      Other_Phone: values.Other_Phone,
      Other_Email: values.Other_Email,
    };

    let email=localStorage.getItem("EditClient");

    // setClientData([ClientModalDetails])

    setClientEdit(true);
    
    if(ClientEdit){

      axios
      .patch(`http://localhost:7000/Client-ProfessionalAdvisor-Modal/Update-Client-AdvisorModal/${email}`, values)
      .then((res) => {
        //Popper Massage
        console.log("Updated Complete");
      })
  
      setTimeout(() => {
  
      axios
      .get(`http://localhost:7000/Client-ProfessionalAdvisor-Modal`)
      .then((res) => {
        console.log("got it");
      let clientObj=(res.data)
      let clientFilterObj=clientObj.filter((item) => item.Email ==email);
      setClientData(clientFilterObj);
      //  console.log(clientFilterObj);
      })
  
      }, 500);



    }
    else{

      console.log(ClientEdit);
      setIsClientTable(true);      
      axios
        .post(
          "http://localhost:7000/Client-ProfessionalAdvisor-Modal/Add-Client-AdvisorModal",
          ClientModalDetails
        )
        .then((res) => console.log("Client Advisor Modal Added Successfully!"));
      
        setTimeout(() => {
          
          axios
          .get(`http://localhost:7000/Client-ProfessionalAdvisor-Modal`)
          .then((res) => {
            console.log("got it");
          let clientObj=(res.data)
          let clientFilterObj=clientObj.filter((item) => item.Email ==email);
          setClientData(clientFilterObj);
           console.log(clientFilterObj);
          })
  
  
        }, 500);
        
  
    }

    handleClose();



    console.log( "ClientModalDetails",ClientModalDetails);
  
  };

  let Partner_initialValues = {
    Solicitor_Name: "",
    Solicitor_Company: "",
    Solicitor_Phone: "",
    Solicitor_Email: "",

    Accountant_Name: "",
    Accountant_Company: "",
    Accountant_Phone: "",
    Accountant_Email: "",

    InsuranceAdvisor_Name: "",
    InsuranceAdvisor_Company: "",
    InsuranceAdvisor_Phone: "",
    InsuranceAdvisor_Email: "",

    Doctor_Name: "",
    Doctor_Company: "",
    Doctor_Phone: "",
    Doctor_Email: "",

    Other_Name: "",
    Other_Company: "",
    Other_Phone: "",
    Other_Email: "",
  };

  let Partner_validationSchema = Yup.object({
    Solicitor_Name: Yup.string()
      .matches(letters, "Only letters")
     ,
    Solicitor_Company: Yup.string()
      .matches(letters, "Only letters")
     ,
    Solicitor_Phone: Yup.string()
      .matches(phonePattern, "invalid phone number")
     ,
    Solicitor_Email: Yup.string()
      .email("Invalid email format")
     ,

    Accountant_Name: Yup.string()
      .matches(letters, "Only letters")
     ,
    Accountant_Company: Yup.string()
      .matches(letters, "Only letters")
     ,
    Accountant_Phone: Yup.string()
      .matches(phonePattern, "invalid phone number")
     ,
    Accountant_Email: Yup.string()
      .email("Invalid email format")
     ,

    InsuranceAdvisor_Name: Yup.string()
      .matches(letters, "Only letters")
     ,
    InsuranceAdvisor_Company: Yup.string()
      .matches(letters, "Only letters")
     ,
    InsuranceAdvisor_Phone: Yup.string()
      .matches(phonePattern, "invalid phone number")
     ,
    InsuranceAdvisor_Email: Yup.string()
      .email("Invalid email format")
     ,

    Doctor_Name: Yup.string()
      .matches(letters, "Only letters")
     ,
    Doctor_Company: Yup.string()
      .matches(letters, "Only letters")
     ,
    Doctor_Phone: Yup.string()
      .matches(phonePattern, "invalid phone number")
     ,
    Doctor_Email: Yup.string()
      .email("Invalid email format")
     ,

    Other_Name: Yup.string()
      .matches(letters, "Only letters")
     ,
    Other_Company: Yup.string()
      .matches(letters, "Only letters")
     ,
    Other_Phone: Yup.string()
      .matches(phonePattern, "invalid phone number")
     ,
    Other_Email: Yup.string()
      .email("Invalid email format")
     ,
  });

  let Partner_onSubmit = (values) => {
    let PartnerModalDetails = {
      Email: localStorage.getItem("ClientEmail"),
      Solicitor_Name: values.Solicitor_Name,
      Solicitor_Company: values.Solicitor_Company,
      Solicitor_Phone: values.Solicitor_Phone,
      Solicitor_Email: values.Solicitor_Email,

      Accountant_Name: values.Accountant_Name,
      Accountant_Company: values.Accountant_Company,
      Accountant_Phone: values.Accountant_Phone,
      Accountant_Email: values.Accountant_Email,

      InsuranceAdvisor_Name: values.InsuranceAdvisor_Name,
      InsuranceAdvisor_Company: values.InsuranceAdvisor_Company,
      InsuranceAdvisor_Phone: values.InsuranceAdvisor_Phone,
      InsuranceAdvisor_Email: values.InsuranceAdvisor_Email,

      Doctor_Name: values.Doctor_Name,
      Doctor_Company: values.Doctor_Company,
      Doctor_Phone: values.Doctor_Phone,
      Doctor_Email: values.Doctor_Email,

      Other_Name: values.Other_Name,
      Other_Company: values.Other_Company,
      Other_Phone: values.Other_Phone,
      Other_Email: values.Other_Email,
    };


    // setPartnerData([PartnerModalDetails]);

    // console.log("Partnet",PartnerData);
    let email=localStorage.getItem("EditClient");

    if(PartnerEdit){

    axios
    .patch(`http://localhost:7000/Partner-ProfessionalAdvisor-Modal/Update-Partner-AdvisorModal/${email}`, PartnerModalDetails)
    .then((res) => {
      //Popper Massage
      console.log("Updated Complete");
    })

    setTimeout(() => {

    axios
    .get(`http://localhost:7000/Partner-ProfessionalAdvisor-Modal`)
    .then((res) => {
      console.log("got it");
    let clientObj=(res.data)
    let clientFilterObj=clientObj.filter((item) => item.Email ==email);
    setPartnerData(clientFilterObj);
    //  console.log(clientFilterObj);
    })

    }, 500);


    }
    else{
      setIsPartnerTable(true);

      setPartnerEdit(true);
  
  
      axios
        .post(
          "http://localhost:7000/Partner-ProfessionalAdvisor-Modal/Add-Partner-AdvisorModal",
          PartnerModalDetails
        )
        .then((res) => console.log("Partner Advisor Modal Added Successfully!"));

        setTimeout(() => {

          axios
          .get(`http://localhost:7000/Partner-ProfessionalAdvisor-Modal`)
          .then((res) => {
            console.log("got it");
          let clientObj=(res.data)
          let clientFilterObj=clientObj.filter((item) => item.Email ==email);
          setPartnerData(clientFilterObj);
          //  console.log(clientFilterObj);
          })
      
          }, 500);
      
  
    }


    // console.log(PartnerModalDetails);
    handleClose2();
  };

  let initialValues={
    ProfessionalAdvisors1radio: MyClient.ProfessionalAdvisor,
    ProfessionalAdvisors2radio: MyPartner.ProfessionalAdvisor
  }

  let Navigate = useNavigate();

  function BackFunction() {
    Navigate("/Edit-Income-And-Expenses");
  }

  let onSubmit = (values) => {
    Navigate("/Edit-Assets-And-Liabilities");
    let ProfessionalAdvisor1 = {
      Email: localStorage.getItem("ClientEmail"),
      ProfessionalAdvisor: values.ProfessionalAdvisors1radio,
    };
    let ProfessionalAdvisor2 = {
      Email: localStorage.getItem("ClientEmail"),
      ProfessionalAdvisor: values.ProfessionalAdvisors2radio,
    };
    if (isPartnered === true) {
      // console.log(ProfessionalAdvisor1);
      // console.log(ProfessionalAdvisor2);
      axios
        .patch(
          `http://localhost:7000/Client-ProfessionalAdvisor/Update-ClientAdvisor/${ProfessionalAdvisor1.Email}`,
          ProfessionalAdvisor1
        )
        .then((res) => console.log("Client Advisor Updated Successfully!"));

      axios
        .patch(
          `http://localhost:7000/Partner-ProfessionalAdvisor/Update-PartnerAdvisor/${ProfessionalAdvisor2.Email}`,
          ProfessionalAdvisor2
        )
        .then((res) => console.log("Partner Advisor Updated Successfully!"));
    } else {
      console.log(ProfessionalAdvisor1);

      axios
      .patch(
        `http://localhost:7000/Client-ProfessionalAdvisor/Update-ClientAdvisor/${ProfessionalAdvisor1.Email}`,
        ProfessionalAdvisor1
      )
        .then((res) => console.log("Client Advisor Updated Successfully!"));
    }
  };


 let ClientSolicitorDeleteHandler=(e)=>{
      // console.warn(e);

      let data = e;
      data.Solicitor_Name="";
      data.Solicitor_Company="";
      data.Solicitor_Phone="";
      data.Solicitor_Email="";
      // setClientData([data]);
      
      // console.warn(data);


      let email=localStorage.getItem("EditClient");

      
      axios
      .patch(`http://localhost:7000/Client-ProfessionalAdvisor-Modal/Update-Client-AdvisorModal/${email}`, data)
      .then((res) => {
        //Popper Massage
        console.log("Updated Complete");
      })
  
      setTimeout(() => {
  
      axios
      .get(`http://localhost:7000/Client-ProfessionalAdvisor-Modal`)
      .then((res) => {
        console.log("got it");
      let clientObj=(res.data)
      let clientFilterObj=clientObj.filter((item) => item.Email ==email);
      setClientData(clientFilterObj);
      //  console.log(clientFilterObj);
      })
  
      }, 500);
 }

  let ClientAccountantDeleteHandler=(e)=>{
    // console.warn(e);

    let data = e;
    data.Accountant_Name="";
    data.Accountant_Company="";
    data.Accountant_Phone="";
    data.Accountant_Email="";
      
      // console.warn(data);


      let email=localStorage.getItem("EditClient");

      
      axios
      .patch(`http://localhost:7000/Client-ProfessionalAdvisor-Modal/Update-Client-AdvisorModal/${email}`, data)
      .then((res) => {
        //Popper Massage
        console.log("Updated Complete");
      })
  
      setTimeout(() => {
  
      axios
      .get(`http://localhost:7000/Client-ProfessionalAdvisor-Modal`)
      .then((res) => {
        console.log("got it");
      let clientObj=(res.data)
      let clientFilterObj=clientObj.filter((item) => item.Email ==email);
      setClientData(clientFilterObj);
      //  console.log(clientFilterObj);
      })
  
      }, 2000);


  }

  let ClientInsuranceDeleteHandler=(e)=>{
    // console.warn(e);

    let data = e;
    data.InsuranceAdvisor_Name="";
    data.InsuranceAdvisor_Company="";
    data.InsuranceAdvisor_Phone="";
    data.InsuranceAdvisor_Email="";
          // setClientData([data]);
      
      // console.warn(data);


      let email=localStorage.getItem("EditClient");

      
      axios
      .patch(`http://localhost:7000/Client-ProfessionalAdvisor-Modal/Update-Client-AdvisorModal/${email}`, data)
      .then((res) => {
        //Popper Massage
        console.log("Updated Complete");
      })
  
      setTimeout(() => {
  
      axios
      .get(`http://localhost:7000/Client-ProfessionalAdvisor-Modal`)
      .then((res) => {
        console.log("got it");
      let clientObj=(res.data)
      let clientFilterObj=clientObj.filter((item) => item.Email ==email);
      setClientData(clientFilterObj);
      //  console.log(clientFilterObj);
      })
  
      }, 500);



  }

  let ClientDoctorDeleteHandler=(e)=>{
    // console.warn(e);
    let data = e;
    data.Doctor_Name="";
    data.Doctor_Company="";
    data.Doctor_Phone="";
    data.Doctor_Email="";
        // setClientData([data]);
      
      // console.warn(data);


      let email=localStorage.getItem("EditClient");

      
      axios
      .patch(`http://localhost:7000/Client-ProfessionalAdvisor-Modal/Update-Client-AdvisorModal/${email}`, data)
      .then((res) => {
        //Popper Massage
        console.log("Updated Complete");
      })
  
      setTimeout(() => {
  
      axios
      .get(`http://localhost:7000/Client-ProfessionalAdvisor-Modal`)
      .then((res) => {
        console.log("got it");
      let clientObj=(res.data)
      let clientFilterObj=clientObj.filter((item) => item.Email ==email);
      setClientData(clientFilterObj);
      //  console.log(clientFilterObj);
      })
  
      }, 500);
  }

  let ClientOtherDeleteHandler=(e)=>{
    console.warn(e);

    let data = e;
    data.Other_Name="";
    data.Other_Company="";
    data.Other_Phone="";
    data.Other_Email="";
        // setClientData([data]);
      
      // console.warn(data);


      let email=localStorage.getItem("EditClient");

      
      axios
      .patch(`http://localhost:7000/Client-ProfessionalAdvisor-Modal/Update-Client-AdvisorModal/${email}`, data)
      .then((res) => {
        //Popper Massage
        console.log("Updated Complete");
      })
  
      setTimeout(() => {
  
      axios
      .get(`http://localhost:7000/Client-ProfessionalAdvisor-Modal`)
      .then((res) => {
        console.log("got it");
      let clientObj=(res.data)
      let clientFilterObj=clientObj.filter((item) => item.Email ==email);
      setClientData(clientFilterObj);
      //  console.log(clientFilterObj);
      })
  
      }, 500);
  }


  let PartnerSolicitorDeleteHandler=(e)=>{
    // console.warn(e);

    let data = e;
    data.Solicitor_Name="";
    data.Solicitor_Company="";
    data.Solicitor_Phone="";
    data.Solicitor_Email="";
    // setPartnerData([data]);
    
    // console.warn(data);

    let email=localStorage.getItem("EditClient");

    axios
    .patch(`http://localhost:7000/Partner-ProfessionalAdvisor-Modal/Update-Partner-AdvisorModal/${email}`, data)
    .then((res) => {
      //Popper Massage
      console.log("Updated Complete");
    })

    setTimeout(() => {

    axios
    .get(`http://localhost:7000/Partner-ProfessionalAdvisor-Modal`)
    .then((res) => {
      console.log("got it");
    let clientObj=(res.data)
    let clientFilterObj=clientObj.filter((item) => item.Email ==email);
    setPartnerData(clientFilterObj);
    //  console.log(clientFilterObj);
    })

    }, 500);


}

let PartnerAccountantDeleteHandler=(e)=>{
  // console.warn(e);

  let data = e;
  data.Accountant_Name="";
  data.Accountant_Company="";
  data.Accountant_Phone="";
  data.Accountant_Email="";
     // setPartnerData([data]);
    
    // console.warn(data);

    let email=localStorage.getItem("EditClient");

    axios
    .patch(`http://localhost:7000/Partner-ProfessionalAdvisor-Modal/Update-Partner-AdvisorModal/${email}`, data)
    .then((res) => {
      //Popper Massage
      console.log("Updated Complete");
    })

    setTimeout(() => {

    axios
    .get(`http://localhost:7000/Partner-ProfessionalAdvisor-Modal`)
    .then((res) => {
      console.log("got it");
    let clientObj=(res.data)
    let clientFilterObj=clientObj.filter((item) => item.Email ==email);
    setPartnerData(clientFilterObj);
    //  console.log(clientFilterObj);
    })

    }, 500);

}

let PartnerInsuranceAdvisorDeleteHandler=(e)=>{
  // console.warn(e);

  let data = e;
  data.InsuranceAdvisor_Name="";
  data.InsuranceAdvisor_Company="";
  data.InsuranceAdvisor_Phone="";
  data.InsuranceAdvisor_Email="";
     // setPartnerData([data]);
    
     let email=localStorage.getItem("EditClient");

    // console.warn(data);

    axios
    .patch(`http://localhost:7000/Partner-ProfessionalAdvisor-Modal/Update-Partner-AdvisorModal/${email}`, data)
    .then((res) => {
      //Popper Massage
      console.log("Updated Complete");
    })

    setTimeout(() => {

    axios
    .get(`http://localhost:7000/Partner-ProfessionalAdvisor-Modal`)
    .then((res) => {
      console.log("got it");
    let clientObj=(res.data)
    let clientFilterObj=clientObj.filter((item) => item.Email ==email);
    setPartnerData(clientFilterObj);
    //  console.log(clientFilterObj);
    })

    }, 500);

}

let PartnerDoctorDeleteHandler=(e)=>{
  // console.warn(e);
  let data = e;
  data.Doctor_Name="";
  data.Doctor_Company="";
  data.Doctor_Phone="";
  data.Doctor_Email="";
     // setPartnerData([data]);
    
     let email=localStorage.getItem("EditClient");

    // console.warn(data);

    axios
    .patch(`http://localhost:7000/Partner-ProfessionalAdvisor-Modal/Update-Partner-AdvisorModal/${email}`, data)
    .then((res) => {
      //Popper Massage
      console.log("Updated Complete");
    })

    setTimeout(() => {

    axios
    .get(`http://localhost:7000/Partner-ProfessionalAdvisor-Modal`)
    .then((res) => {
      console.log("got it");
    let clientObj=(res.data)
    let clientFilterObj=clientObj.filter((item) => item.Email ==email);
    setPartnerData(clientFilterObj);
    //  console.log(clientFilterObj);
    })

    }, 500);
}

let PartnerOtherDeleteHandler=(e)=>{
  console.warn(e);

  let data = e;
  data.Other_Name="";
  data.Other_Company="";
  data.Other_Phone="";
  data.Other_Email="";
      // setPartnerData([data]);
    
      let email=localStorage.getItem("EditClient");

    // console.warn(data);

    axios
    .patch(`http://localhost:7000/Partner-ProfessionalAdvisor-Modal/Update-Partner-AdvisorModal/${email}`, data)
    .then((res) => {
      //Popper Massage
      console.log("Updated Complete");
    })

    setTimeout(() => {

    axios
    .get(`http://localhost:7000/Partner-ProfessionalAdvisor-Modal`)
    .then((res) => {
      console.log("got it");
    let clientObj=(res.data)
    let clientFilterObj=clientObj.filter((item) => item.Email ==email);
    setPartnerData(clientFilterObj);
    //  console.log(clientFilterObj);
    })

    }, 500);
}

  return (
    <>
      <div className="container-fluid">
        <div className="row m-0 px-0">
          <div className="col-md-2"></div>
          <div className="col-md-12">
            {/*Expenses */}
            <div className="row my-4">
              <div className="col-md-12">
                <div className="shadow px-4 py-4">
                  <h3 className="text-center">Professional Advisors</h3>
                  <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    enableReinitialize
                  >
                    {({ values, handleChange }) => (
                      <Form>
                        {/* Client Professional Advisors */}
                        <div>
                          <h3 className="">Client Professional Advisors</h3>

                          {/* 1 row */}
                          <div className="row">
                            <div className="col-md-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Do you have any Professional Advisors?
                                </label>
                                {/* switch button style */}
                                <div className="form-check form-switch m-0 p-0 ">
                                  <div className="radiobutton">
                                    <input
                                      type="radio"
                                      name="ProfessionalAdvisors1radio"
                                      id="ProfessionalAdvisors1opt1"
                                      value="Yes"
                                      onClick={() => advisorHandler("Yes")}
                                      onChange={handleChange}
                                      checked={
                                        values.ProfessionalAdvisors1radio ===
                                        "Yes"
                                      }
                                    />
                                    <label
                                      htmlFor="ProfessionalAdvisors1opt1"
                                      className="label1"
                                    >
                                      <span>YES</span>
                                    </label>
                                    <input
                                      type="radio"
                                      name="ProfessionalAdvisors1radio"
                                      id="ProfessionalAdvisors1opt2"
                                      value="No"
                                      onClick={() => advisorHandler("No")}
                                      onChange={handleChange}
                                      checked={
                                        values.ProfessionalAdvisors1radio ===
                                        "No"
                                      }
                                    />
                                    <label
                                      htmlFor="ProfessionalAdvisors1opt2"
                                      className="label2"
                                    >
                                      <span>NO</span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {advisorState && (
                              <div className="col-md-6">
                                <label className="form-label">
                                  Please enter the details of your professional
                                  Advisors
                                </label>
                                <br />

                                <span
                                  className=" btn h-50 w-50
                            btn-outline-success "
                                  onClick={handleShow}
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
                            )}
                          </div>
                          {/* 1 row */}

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
                                Professional Advisor Detail
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
                              initialValues={ClientEdit ? ClientData[0] : Client_initialValues}
                              validationSchema={Client_validationSchema}
                              onSubmit={Client_onSubmit}
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
                                    {/* Professional Advisor Detail Form */}

                                    <div className="">
                                      {/* Solicitor */}
                                      <div className=" ">
                                        <h3 className="">
                                          <div className="iconContainerLg mx-1">
                                            <img
                                              className="img-fluid"
                                              src={lawyer}
                                              alt=""
                                            />
                                          </div>
                                          Solicitor 
                                        </h3>
                                        <div className="row">
                                          <div className="col-md-6">
                                            <div className="mb-3">
                                              <label
                                                htmlFor="Solicitor_Name"
                                                className="form-label"
                                              >
                                                Name
                                              </label>
                                              <Field
                                                type="text"
                                                className="form-control shadow inputDesign"
                                                id="Solicitor_Name"
                                                name="Solicitor_Name"
                                                placeholder="Name"
                                              />
                                              <ErrorMessage
                                                component="div"
                                                className="text-danger fw-bold"
                                                name="Solicitor_Name"
                                              />
                                            </div>
                                          </div>
                                          <div className="col-md-6">
                                            <div className="mb-3">
                                              <label
                                                htmlFor="Solicitor_Company"
                                                className="form-label"
                                              >
                                                Company
                                              </label>
                                              <Field
                                                type="text"
                                                className="form-control shadow inputDesign"
                                                id="Solicitor_Company"
                                                name="Solicitor_Company"
                                                placeholder="Company"
                                              />
                                              <ErrorMessage
                                                component="div"
                                                className="text-danger fw-bold"
                                                name="Solicitor_Company"
                                              />
                                            </div>
                                          </div>

                                          <div className="col-md-6">
                                            <div className="mb-3">
                                              <label
                                                htmlFor="Solicitor_Phone"
                                                className="form-label"
                                              >
                                                Phone
                                              </label>
                                              <Field
                                                type="number"
                                                className="form-control shadow inputDesign"
                                                id="Solicitor_Phone"
                                                name="Solicitor_Phone"
                                                placeholder="Phone"
                                              />
                                              <ErrorMessage
                                                component="div"
                                                className="text-danger fw-bold"
                                                name="Solicitor_Phone"
                                              />
                                            </div>
                                          </div>

                                          <div className="col-md-6">
                                            <div className="mb-3">
                                              <label
                                                htmlFor="Solicitor_Email"
                                                className="form-label"
                                              >
                                                Email
                                              </label>
                                              <Field
                                                type="email"
                                                className="form-control shadow inputDesign"
                                                id="Solicitor_Email"
                                                name="Solicitor_Email"
                                                placeholder="Email"
                                              />
                                              <ErrorMessage
                                                component="div"
                                                className="text-danger fw-bold"
                                                name="Solicitor_Email"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {/* Solicitor */}

                                      {/* Accountant */}
                                      <div className="my-2 ">
                                        <h3 className="mt-1">
                                          <div className="iconContainerLg mx-1">
                                            <img
                                              className="img-fluid"
                                              src={accounting}
                                              alt=""
                                            />
                                          </div>
                                          Accountant
                                        </h3>
                                        <div className="row">
                                          <div className="col-md-6">
                                            <div className="mb-3">
                                              <label
                                                htmlFor="Accountant_Name"
                                                className="form-label"
                                              >
                                                Name
                                              </label>
                                              <Field
                                                type="text"
                                                className="form-control shadow inputDesign"
                                                id="Accountant_Name"
                                                name="Accountant_Name"
                                                placeholder="Name"
                                              />
                                              <ErrorMessage
                                                component="div"
                                                className="text-danger fw-bold"
                                                name="Accountant_Name"
                                              />
                                            </div>
                                          </div>
                                          <div className="col-md-6">
                                            <div className="mb-3">
                                              <label
                                                htmlFor="Accountant_Company"
                                                className="form-label"
                                              >
                                                Company
                                              </label>
                                              <Field
                                                type="text"
                                                className="form-control shadow inputDesign"
                                                id="Accountant_Company"
                                                name="Accountant_Company"
                                                placeholder="Company"
                                              />
                                              <ErrorMessage
                                                component="div"
                                                className="text-danger fw-bold"
                                                name="Accountant_Company"
                                              />
                                            </div>
                                          </div>
                                          <div className="col-md-6">
                                            <div className="mb-3">
                                              <label
                                                htmlFor="Accountant_Phone"
                                                className="form-label"
                                              >
                                                Phone
                                              </label>
                                              <Field
                                                type="number"
                                                className="form-control shadow inputDesign"
                                                id="Accountant_Phone"
                                                name="Accountant_Phone"
                                                placeholder="Phone"
                                              />
                                              <ErrorMessage
                                                component="div"
                                                className="text-danger fw-bold"
                                                name="Accountant_Phone"
                                              />
                                            </div>
                                          </div>

                                          <div className="col-md-6">
                                            <div className="mb-3">
                                              <label
                                                htmlFor="Accountant_Email"
                                                className="form-label"
                                              >
                                                Email
                                              </label>
                                              <Field
                                                type="email"
                                                className="form-control shadow inputDesign"
                                                id="Accountant_Email"
                                                name="Accountant_Email"
                                                placeholder="Email"
                                              />
                                              <ErrorMessage
                                                component="div"
                                                className="text-danger fw-bold"
                                                name="Accountant_Email"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {/* Accountant */}

                                      {/* InsuranceAdvisor */}
                                      <div className="my-2">
                                        <h3 className="mt-1">
                                          <div className="iconContainerLg mx-1">
                                            <img
                                              className="img-fluid"
                                              src={businessman}
                                              alt=""
                                            />
                                          </div>
                                          Insurance Advisor
                                        </h3>
                                        <div className="row">
                                          <div className="col-md-6">
                                            <div className="mb-3">
                                              <label
                                                htmlFor="InsuranceAdvisor_Name"
                                                className="form-label"
                                              >
                                                Name
                                              </label>
                                              <Field
                                                type="text"
                                                className="form-control shadow inputDesign"
                                                id="InsuranceAdvisor_Name"
                                                name="InsuranceAdvisor_Name"
                                                placeholder="Name"
                                              />
                                              <ErrorMessage
                                                component="div"
                                                className="text-danger fw-bold"
                                                name="InsuranceAdvisor_Name"
                                              />
                                            </div>
                                          </div>
                                          <div className="col-md-6">
                                            <div className="mb-3">
                                              <label
                                                htmlFor="InsuranceAdvisor_Company"
                                                className="form-label"
                                              >
                                                Company
                                              </label>
                                              <Field
                                                type="text"
                                                className="form-control shadow inputDesign"
                                                id="InsuranceAdvisor_Company"
                                                name="InsuranceAdvisor_Company"
                                                placeholder="Company"
                                              />
                                              <ErrorMessage
                                                component="div"
                                                className="text-danger fw-bold"
                                                name="InsuranceAdvisor_Company"
                                              />
                                            </div>
                                          </div>
                                          <div className="col-md-6">
                                            <div className="mb-3">
                                              <label
                                                htmlFor="InsuranceAdvisor_Phone"
                                                className="form-label"
                                              >
                                                Phone
                                              </label>
                                              <Field
                                                type="number"
                                                className="form-control shadow inputDesign"
                                                id="InsuranceAdvisor_Phone"
                                                name="InsuranceAdvisor_Phone"
                                                placeholder="Phone"
                                              />
                                              <ErrorMessage
                                                component="div"
                                                className="text-danger fw-bold"
                                                name="InsuranceAdvisor_Phone"
                                              />
                                            </div>
                                          </div>

                                          <div className="col-md-6">
                                            <div className="mb-3">
                                              <label
                                                htmlFor="InsuranceAdvisor_Email"
                                                className="form-label"
                                              >
                                                Email
                                              </label>
                                              <Field
                                                type="email"
                                                className="form-control shadow inputDesign"
                                                id="InsuranceAdvisor_Email"
                                                name="InsuranceAdvisor_Email"
                                                placeholder="Email"
                                              />
                                              <ErrorMessage
                                                component="div"
                                                className="text-danger fw-bold"
                                                name="InsuranceAdvisor_Email"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {/* Insurance Advisor */}

                                      {/* Doctor */}
                                      <div className="my-2">
                                        <h3 className="mt-1">
                                          <div className="iconContainerLg mx-1">
                                            <img
                                              className="img-fluid"
                                              src={doctor}
                                              alt=""
                                            />
                                          </div>
                                          Doctor
                                        </h3>
                                        <div className="row">
                                          <div className="col-md-6">
                                            <div className="mb-3">
                                              <label
                                                htmlFor="Doctor_Name"
                                                className="form-label"
                                              >
                                                Name
                                              </label>
                                              <Field
                                                type="text"
                                                className="form-control shadow inputDesign"
                                                id="Doctor_Name"
                                                name="Doctor_Name"
                                                placeholder="Name"
                                              />
                                              <ErrorMessage
                                                component="div"
                                                className="text-danger fw-bold"
                                                name="Doctor_Name"
                                              />
                                            </div>
                                          </div>
                                          <div className="col-md-6">
                                            <div className="mb-3">
                                              <label
                                                htmlFor="Doctor_Company"
                                                className="form-label"
                                              >
                                                Company
                                              </label>
                                              <Field
                                                type="text"
                                                className="form-control shadow inputDesign"
                                                id="Doctor_Company"
                                                name="Doctor_Company"
                                                placeholder="Company"
                                              />
                                              <ErrorMessage
                                                component="div"
                                                className="text-danger fw-bold"
                                                name="Doctor_Company"
                                              />
                                            </div>
                                          </div>
                                          <div className="col-md-6">
                                            <div className="mb-3">
                                              <label
                                                htmlFor="Doctor_Phone"
                                                className="form-label"
                                              >
                                                Phone
                                              </label>
                                              <Field
                                                type="number"
                                                className="form-control shadow inputDesign"
                                                id="Doctor_Phone"
                                                name="Doctor_Phone"
                                                placeholder="Phone"
                                              />
                                              <ErrorMessage
                                                component="div"
                                                className="text-danger fw-bold"
                                                name="Doctor_Phone"
                                              />
                                            </div>
                                          </div>

                                          <div className="col-md-6">
                                            <div className="mb-3">
                                              <label
                                                htmlFor="Doctor_Email"
                                                className="form-label"
                                              >
                                                Email
                                              </label>
                                              <Field
                                                type="email"
                                                className="form-control shadow inputDesign"
                                                id="Doctor_Email"
                                                name="Doctor_Email"
                                                placeholder="Email"
                                              />
                                              <ErrorMessage
                                                component="div"
                                                className="text-danger fw-bold"
                                                name="Doctor_Email"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {/* Doctor */}

                                      {/* Other */}
                                      <div className="my-2">
                                        <h3 className="mt-1">
                                          <div className="iconContainerLg mx-1">
                                            <img
                                              className="img-fluid"
                                              src={businessman}
                                              alt=""
                                            />
                                          </div>
                                          Other
                                        </h3>
                                        <div className="row">
                                          <div className="col-md-6">
                                            <div className="mb-3">
                                              <label
                                                htmlFor="Other_Name"
                                                className="form-label"
                                              >
                                                Name
                                              </label>
                                              <Field
                                                type="text"
                                                className="form-control shadow inputDesign"
                                                id="Other_Name"
                                                name="Other_Name"
                                                placeholder="Name"
                                              />
                                              <ErrorMessage
                                                component="div"
                                                className="text-danger fw-bold"
                                                name="Other_Name"
                                              />
                                            </div>
                                          </div>
                                          <div className="col-md-6">
                                            <div className="mb-3">
                                              <label
                                                htmlFor="Other_Company"
                                                className="form-label"
                                              >
                                                Company
                                              </label>
                                              <Field
                                                type="text"
                                                className="form-control shadow inputDesign"
                                                id="Other_Company"
                                                name="Other_Company"
                                                placeholder="Company"
                                              />
                                              <ErrorMessage
                                                component="div"
                                                className="text-danger fw-bold"
                                                name="Other_Company"
                                              />
                                            </div>
                                          </div>
                                          <div className="col-md-6">
                                            <div className="mb-3">
                                              <label
                                                htmlFor="Other_Phone"
                                                className="form-label"
                                              >
                                                Phone
                                              </label>
                                              <Field
                                                type="number"
                                                className="form-control shadow inputDesign"
                                                id="Other_Phone"
                                                name="Other_Phone"
                                                placeholder="Phone"
                                              />
                                              <ErrorMessage
                                                component="div"
                                                className="text-danger fw-bold"
                                                name="Other_Phone"
                                              />
                                            </div>
                                          </div>

                                          <div className="col-md-6">
                                            <div className="mb-3">
                                              <label
                                                htmlFor="Other_Email"
                                                className="form-label"
                                              >
                                                Email
                                              </label>
                                              <Field
                                                type="email"
                                                className="form-control shadow inputDesign"
                                                id="Other_Email"
                                                name="Other_Email"
                                                placeholder="Email"
                                              />
                                              <ErrorMessage
                                                component="div"
                                                className="text-danger fw-bold"
                                                name="Other_Email"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {/* Other */}
                                    </div>
                                    {/* Professional Advisor Detail Form */}
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
                                      <span
                                        className="float-end btn w-25  btn-outline  backBtn mx-3"
                                        onClick={handleClose}
                                      >
                                        Cancel
                                      </span>
                                    </div>
                                  </Modal.Footer>
                                </Form>
                              )}
                            </Formik>
                          </Modal>
                          {/* -------------Client Professional Advisors modal---------------------------- */}
                        </div>
                        {/* Client Professional Advisors */}

                        {/* Table Client Professional Advisors */}
                        {isClientTable && (
                          <div className="table-responsive my-3">
                            <table className="table table-bordered table-hover text-center">
                              <thead className="text-light" id="tableHead">
                                <tr>
                                  <th>Advisor</th>
                                  <th>Name</th>
                                  <th>Company</th>
                                  <th>Phone</th>
                                  <th>Email</th>
                                  <th>Operations</th>
                                </tr>
                              </thead>
                              <tbody>
                                {ClientData.map((elem, index) => {
                                  let {
                                    Solicitor_Name,
                                    Solicitor_Company,
                                    Solicitor_Phone,
                                    Solicitor_Email,
                                  } = elem;
                                  if (
                                    ClientData[0].Solicitor_Name == "" ||
                                    ClientData[0].Solicitor_Phone == "" ||
                                    ClientData[0].Solicitor_Company == "" ||
                                    ClientData[0].Solicitor_Email == ""
                                  ) {
                                  } else {
                                    return (
                                      <tr key={index}>
                                        <td className="fw-bold">Solicitor</td>
                                        <td>{Solicitor_Name}</td>
                                        <td>{Solicitor_Company}</td>
                                        <td>{Solicitor_Phone}</td>
                                        <td>{Solicitor_Email}</td>

                                        <td>
                                         <button  type='button' onClick={(e)=>ClientSolicitorDeleteHandler(elem)} className='btn btn-danger btn-sm'>delete</button>
                                          <button  type='button' onClick={()=>{setClientEdit(true);handleShow();}} className='btn btn-warning btn-sm mx-2  my-1'>
                                          update</button> 
                                        </td>
                                      </tr>
                                    );
                                  }
                                })}

                                {ClientData.map((elem, index) => {
                                  let {
                                    Accountant_Name,
                                    Accountant_Company,
                                    Accountant_Phone,
                                    Accountant_Email,
                                  } = elem;
                                  if (
                                    ClientData[0].Accountant_Name == "" ||
                                    ClientData[0].Accountant_Phone ==
                                      "" ||
                                    ClientData[0].Accountant_Company ==
                                      "" ||
                                    ClientData[0].Accountant_Email == ""
                                  ) {
                                  } else {
                                    return (
                                      <tr key={index}>
                                        <td className="fw-bold">Accountant</td>
                                        <td>{Accountant_Name}</td>
                                        <td>{Accountant_Company}</td>
                                        <td>{Accountant_Phone}</td>
                                        <td>{Accountant_Email}</td>

                                        <td>
                                        <button  type='button' onClick={(e)=>ClientAccountantDeleteHandler(elem)} className='btn btn-danger btn-sm'>delete</button>
                                          <button  type='button' onClick={()=>{setClientEdit(true);handleShow();}} className='btn btn-warning btn-sm mx-2 my-1'>
                                          update</button>
                                        </td>
                                      </tr>
                                    );
                                  }
                                })}

                                {ClientData.map((elem, index) => {
                                  let {
                                    InsuranceAdvisor_Name,
                                    InsuranceAdvisor_Company,
                                    InsuranceAdvisor_Phone,
                                    InsuranceAdvisor_Email,
                                  } = elem;
                                  if (
                                    ClientData[0]
                                      .InsuranceAdvisor_Name == "" ||
                                    ClientData[0]
                                      .InsuranceAdvisor_Phone == "" ||
                                    ClientData[0]
                                      .InsuranceAdvisor_Company == "" ||
                                    ClientData[0]
                                      .InsuranceAdvisor_Email == ""
                                  ) {
                                  } else {
                                    return (
                                      <tr key={index}>
                                        <td className="fw-bold">
                                          Insurance Advisor
                                        </td>
                                        <td>{InsuranceAdvisor_Name}</td>
                                        <td>{InsuranceAdvisor_Company}</td>
                                        <td>{InsuranceAdvisor_Phone}</td>
                                        <td>{InsuranceAdvisor_Email}</td>

                                        <td>
                                         <button  type='button' onClick={(e)=>ClientInsuranceDeleteHandler(elem)} className='btn btn-danger btn-sm'>delete</button>
                                          <button  type='button' onClick={()=>{setClientEdit(true);handleShow();}} className='btn btn-warning btn-sm mx-2 my-1'>
                                          update</button>
                                        </td>
                                      </tr>
                                    );
                                  }
                                })}

                                {ClientData.map((elem, index) => {
                                  let {
                                    Doctor_Name,
                                    Doctor_Company,
                                    Doctor_Phone,
                                    Doctor_Email,
                                  } = elem;
                                  if (
                                    ClientData[0].Doctor_Name == "" ||
                                    ClientData[0].Doctor_Phone == "" ||
                                    ClientData[0].Doctor_Company == "" ||
                                    ClientData[0].Doctor_Email == ""
                                  ) {
                                  } else {
                                    return (
                                      <tr key={index}>
                                        <td className="fw-bold">Doctor</td>
                                        <td>{Doctor_Name}</td>
                                        <td>{Doctor_Company}</td>
                                        <td>{Doctor_Phone}</td>
                                        <td>{Doctor_Email}</td>

                                        <td>
                                          <button  type='button' onClick={(e)=>ClientDoctorDeleteHandler(elem)} className='btn btn-danger btn-sm'>delete</button>
                                          <button  type='button' onClick={()=>{setClientEdit(true);handleShow();}} className='btn btn-warning btn-sm mx-2  my-1'>
                                          update</button>
                                        </td>
                                      </tr>
                                    );
                                  }
                                })}

                                {ClientData.map((elem, index) => {
                                  let {
                                    Other_Name,
                                    Other_Company,
                                    Other_Phone,
                                    Other_Email,
                                  } = elem;
                                  if (
                                    ClientData[0].Other_Name == "" ||
                                    ClientData[0].Other_Phone == "" ||
                                    ClientData[0].Other_Company == "" ||
                                    ClientData[0].Other_Email == ""
                                  ) {
                                  } else {
                                    return (
                                      <tr key={index}>
                                        <td className="fw-bold">Other</td>
                                        <td>{Other_Name}</td>
                                        <td>{Other_Company}</td>
                                        <td>{Other_Phone}</td>
                                        <td>{Other_Email}</td>

                                        <td>
                                         <button  type='button' onClick={(e)=>ClientOtherDeleteHandler(elem)} className='btn btn-danger btn-sm'>delete</button>
                                          <button  type='button' onClick={()=>{setClientEdit(true);handleShow();}} className='btn btn-warning btn-sm mx-2  my-1'>
                                          update</button>
                                        </td>
                                      </tr>
                                    );
                                  }
                                })}
                              </tbody>
                            </table>
                          </div>
                        )}

                        {/* Table Client Professional Advisors */}

                        {/* Partner Professional Advisors */}
                        {isPartnered && (
                          <div className="mt-5">
                            <h3 className="">Partner Professional Advisors</h3>

                            {/* 1 row */}
                            <div className="row">
                              <div className="col-md-6">
                                <div className="mb-3">
                                  <label className="form-label">
                                    Do you have any Professional Advisors?
                                  </label>
                                  {/* switch button style */}
                                  <div className="form-check form-switch m-0 p-0 ">
                                    <div className="radiobutton">
                                      <input
                                        type="radio"
                                        name="ProfessionalAdvisors2radio"
                                        id="ProfessionalAdvisors2opt1"
                                        onClick={() => advisorHandler2("Yes")}
                                        value="Yes"
                                        onChange={handleChange}
                                        checked={
                                          values.ProfessionalAdvisors2radio ===
                                          "Yes"
                                        }
                                      />
                                      <label
                                        htmlFor="ProfessionalAdvisors2opt1"
                                        className="label1"
                                      >
                                        <span>YES</span>
                                      </label>
                                      <input
                                        type="radio"
                                        name="ProfessionalAdvisors2radio"
                                        id="ProfessionalAdvisors2opt2"
                                        onClick={() => advisorHandler2("No")}
                                        value="No"
                                        onChange={handleChange}
                                        checked={
                                          values.ProfessionalAdvisors2radio ===
                                          "No"
                                        }
                                      />
                                      <label
                                        htmlFor="ProfessionalAdvisors2opt2"
                                        className="label2"
                                      >
                                        <span>NO</span>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {advisorState2 && (
                                <div className="col-md-6">
                                  <label className="form-label">
                                    Please enter the details of your
                                    professional Advisors
                                  </label>
                                  <br />

                                  <span
                                    className=" btn h-50 w-50
                            btn-outline-success "
                                    onClick={handleShow2}
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
                              )}
                            </div>
                            {/* 1 row */}

                            {/* --------------------------------------------- */}

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
                                  Professional Advisor Detail
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
                                initialValues={PartnerEdit? PartnerData[0] : Partner_initialValues}
                                validationSchema={Partner_validationSchema}
                                onSubmit={Partner_onSubmit}
                              >
                                <Form>
                                  <Modal.Body>
                                    {/* Professional Advisor Detail Form */}

                                    <div className="">
                                      {/* Solicitor */}
                                      <div className=" ">
                                        <h3 className="">
                                          <div className="iconContainerLg mx-1">
                                            <img
                                              className="img-fluid"
                                              src={lawyer}
                                              alt=""
                                            />
                                          </div>
                                          Solicitor
                                        </h3>
                                        <div className="row">
                                          <div className="col-md-6">
                                            <div className="mb-3">
                                              <label
                                                htmlFor="Solicitor_Name"
                                                className="form-label"
                                              >
                                                Name
                                              </label>
                                              <Field
                                                type="text"
                                                className="form-control shadow inputDesign"
                                                id="Solicitor_Name"
                                                name="Solicitor_Name"
                                                placeholder="Name"
                                              />
                                              <ErrorMessage
                                                component="div"
                                                className="text-danger fw-bold"
                                                name="Solicitor_Name"
                                              />
                                            </div>
                                          </div>
                                          <div className="col-md-6">
                                            <div className="mb-3">
                                              <label
                                                htmlFor="Solicitor_Company"
                                                className="form-label"
                                              >
                                                Company
                                              </label>
                                              <Field
                                                type="text"
                                                className="form-control shadow inputDesign"
                                                id="Solicitor_Company"
                                                name="Solicitor_Company"
                                                placeholder="Company"
                                              />
                                              <ErrorMessage
                                                component="div"
                                                className="text-danger fw-bold"
                                                name="Solicitor_Company"
                                              />
                                            </div>
                                          </div>

                                          <div className="col-md-6">
                                            <div className="mb-3">
                                              <label
                                                htmlFor="Solicitor_Phone"
                                                className="form-label"
                                              >
                                                Phone
                                              </label>
                                              <Field
                                                type="number"
                                                className="form-control shadow inputDesign"
                                                id="Solicitor_Phone"
                                                name="Solicitor_Phone"
                                                placeholder="Phone"
                                              />
                                              <ErrorMessage
                                                component="div"
                                                className="text-danger fw-bold"
                                                name="Solicitor_Phone"
                                              />
                                            </div>
                                          </div>

                                          <div className="col-md-6">
                                            <div className="mb-3">
                                              <label
                                                htmlFor="Solicitor_Email"
                                                className="form-label"
                                              >
                                                Email
                                              </label>
                                              <Field
                                                type="email"
                                                className="form-control shadow inputDesign"
                                                id="Solicitor_Email"
                                                name="Solicitor_Email"
                                                placeholder="Email"
                                              />
                                              <ErrorMessage
                                                component="div"
                                                className="text-danger fw-bold"
                                                name="Solicitor_Email"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {/* Solicitor */}

                                      {/* Accountant */}
                                      <div className="my-2 ">
                                        <h3 className="mt-1">
                                          <div className="iconContainerLg mx-1">
                                            <img
                                              className="img-fluid"
                                              src={accounting}
                                              alt=""
                                            />
                                          </div>
                                          Accountant
                                        </h3>
                                        <div className="row">
                                          <div className="col-md-6">
                                            <div className="mb-3">
                                              <label
                                                htmlFor="Accountant_Name"
                                                className="form-label"
                                              >
                                                Name
                                              </label>
                                              <Field
                                                type="text"
                                                className="form-control shadow inputDesign"
                                                id="Accountant_Name"
                                                name="Accountant_Name"
                                                placeholder="Name"
                                              />
                                              <ErrorMessage
                                                component="div"
                                                className="text-danger fw-bold"
                                                name="Accountant_Name"
                                              />
                                            </div>
                                          </div>
                                          <div className="col-md-6">
                                            <div className="mb-3">
                                              <label
                                                htmlFor="Accountant_Company"
                                                className="form-label"
                                              >
                                                Company
                                              </label>
                                              <Field
                                                type="text"
                                                className="form-control shadow inputDesign"
                                                id="Accountant_Company"
                                                name="Accountant_Company"
                                                placeholder="Company"
                                              />
                                              <ErrorMessage
                                                component="div"
                                                className="text-danger fw-bold"
                                                name="Accountant_Company"
                                              />
                                            </div>
                                          </div>
                                          <div className="col-md-6">
                                            <div className="mb-3">
                                              <label
                                                htmlFor="Accountant_Phone"
                                                className="form-label"
                                              >
                                                Phone
                                              </label>
                                              <Field
                                                type="number"
                                                className="form-control shadow inputDesign"
                                                id="Accountant_Phone"
                                                name="Accountant_Phone"
                                                placeholder="Phone"
                                              />
                                              <ErrorMessage
                                                component="div"
                                                className="text-danger fw-bold"
                                                name="Accountant_Phone"
                                              />
                                            </div>
                                          </div>

                                          <div className="col-md-6">
                                            <div className="mb-3">
                                              <label
                                                htmlFor="Accountant_Email"
                                                className="form-label"
                                              >
                                                Email
                                              </label>
                                              <Field
                                                type="email"
                                                className="form-control shadow inputDesign"
                                                id="Accountant_Email"
                                                name="Accountant_Email"
                                                placeholder="Email"
                                              />
                                              <ErrorMessage
                                                component="div"
                                                className="text-danger fw-bold"
                                                name="Accountant_Email"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {/* Accountant */}

                                      {/* InsuranceAdvisor */}
                                      <div className="my-2">
                                        <h3 className="mt-1">
                                          <div className="iconContainerLg mx-1">
                                            <img
                                              className="img-fluid"
                                              src={businessman}
                                              alt=""
                                            />
                                          </div>
                                          Insurance Advisor
                                        </h3>
                                        <div className="row">
                                          <div className="col-md-6">
                                            <div className="mb-3">
                                              <label
                                                htmlFor="InsuranceAdvisor_Name"
                                                className="form-label"
                                              >
                                                Name
                                              </label>
                                              <Field
                                                type="text"
                                                className="form-control shadow inputDesign"
                                                id="InsuranceAdvisor_Name"
                                                name="InsuranceAdvisor_Name"
                                                placeholder="Name"
                                              />
                                              <ErrorMessage
                                                component="div"
                                                className="text-danger fw-bold"
                                                name="InsuranceAdvisor_Name"
                                              />
                                            </div>
                                          </div>
                                          <div className="col-md-6">
                                            <div className="mb-3">
                                              <label
                                                htmlFor="InsuranceAdvisor_Company"
                                                className="form-label"
                                              >
                                                Company
                                              </label>
                                              <Field
                                                type="text"
                                                className="form-control shadow inputDesign"
                                                id="InsuranceAdvisor_Company"
                                                name="InsuranceAdvisor_Company"
                                                placeholder="Company"
                                              />
                                              <ErrorMessage
                                                component="div"
                                                className="text-danger fw-bold"
                                                name="InsuranceAdvisor_Company"
                                              />
                                            </div>
                                          </div>
                                          <div className="col-md-6">
                                            <div className="mb-3">
                                              <label
                                                htmlFor="InsuranceAdvisor_Phone"
                                                className="form-label"
                                              >
                                                Phone
                                              </label>
                                              <Field
                                                type="number"
                                                className="form-control shadow inputDesign"
                                                id="InsuranceAdvisor_Phone"
                                                name="InsuranceAdvisor_Phone"
                                                placeholder="Phone"
                                              />
                                              <ErrorMessage
                                                component="div"
                                                className="text-danger fw-bold"
                                                name="InsuranceAdvisor_Phone"
                                              />
                                            </div>
                                          </div>

                                          <div className="col-md-6">
                                            <div className="mb-3">
                                              <label
                                                htmlFor="InsuranceAdvisor_Email"
                                                className="form-label"
                                              >
                                                Email
                                              </label>
                                              <Field
                                                type="email"
                                                className="form-control shadow inputDesign"
                                                id="InsuranceAdvisor_Email"
                                                name="InsuranceAdvisor_Email"
                                                placeholder="Email"
                                              />
                                              <ErrorMessage
                                                component="div"
                                                className="text-danger fw-bold"
                                                name="InsuranceAdvisor_Email"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {/* Insurance Advisor */}

                                      {/* Doctor */}
                                      <div className="my-2">
                                        <h3 className="mt-1">
                                          <div className="iconContainerLg mx-1">
                                            <img
                                              className="img-fluid"
                                              src={doctor}
                                              alt=""
                                            />
                                          </div>
                                          Doctor
                                        </h3>
                                        <div className="row">
                                          <div className="col-md-6">
                                            <div className="mb-3">
                                              <label
                                                htmlFor="Doctor_Name"
                                                className="form-label"
                                              >
                                                Name
                                              </label>
                                              <Field
                                                type="text"
                                                className="form-control shadow inputDesign"
                                                id="Doctor_Name"
                                                name="Doctor_Name"
                                                placeholder="Name"
                                              />
                                              <ErrorMessage
                                                component="div"
                                                className="text-danger fw-bold"
                                                name="Doctor_Name"
                                              />
                                            </div>
                                          </div>
                                          <div className="col-md-6">
                                            <div className="mb-3">
                                              <label
                                                htmlFor="Doctor_Company"
                                                className="form-label"
                                              >
                                                Company
                                              </label>
                                              <Field
                                                type="text"
                                                className="form-control shadow inputDesign"
                                                id="Doctor_Company"
                                                name="Doctor_Company"
                                                placeholder="Company"
                                              />
                                              <ErrorMessage
                                                component="div"
                                                className="text-danger fw-bold"
                                                name="Doctor_Company"
                                              />
                                            </div>
                                          </div>
                                          <div className="col-md-6">
                                            <div className="mb-3">
                                              <label
                                                htmlFor="Doctor_Phone"
                                                className="form-label"
                                              >
                                                Phone
                                              </label>
                                              <Field
                                                type="number"
                                                className="form-control shadow inputDesign"
                                                id="Doctor_Phone"
                                                name="Doctor_Phone"
                                                placeholder="Phone"
                                              />
                                              <ErrorMessage
                                                component="div"
                                                className="text-danger fw-bold"
                                                name="Doctor_Phone"
                                              />
                                            </div>
                                          </div>

                                          <div className="col-md-6">
                                            <div className="mb-3">
                                              <label
                                                htmlFor="Doctor_Email"
                                                className="form-label"
                                              >
                                                Email
                                              </label>
                                              <Field
                                                type="email"
                                                className="form-control shadow inputDesign"
                                                id="Doctor_Email"
                                                name="Doctor_Email"
                                                placeholder="Email"
                                              />
                                              <ErrorMessage
                                                component="div"
                                                className="text-danger fw-bold"
                                                name="Doctor_Email"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {/* Doctor */}

                                      {/* Other */}
                                      <div className="my-2">
                                        <h3 className="mt-1">
                                          <div className="iconContainerLg mx-1">
                                            <img
                                              className="img-fluid"
                                              src={businessman}
                                              alt=""
                                            />
                                          </div>
                                          Other
                                        </h3>
                                        <div className="row">
                                          <div className="col-md-6">
                                            <div className="mb-3">
                                              <label
                                                htmlFor="Other_Name"
                                                className="form-label"
                                              >
                                                Name
                                              </label>
                                              <Field
                                                type="text"
                                                className="form-control shadow inputDesign"
                                                id="Other_Name"
                                                name="Other_Name"
                                                placeholder="Name"
                                              />
                                              <ErrorMessage
                                                component="div"
                                                className="text-danger fw-bold"
                                                name="Other_Name"
                                              />
                                            </div>
                                          </div>
                                          <div className="col-md-6">
                                            <div className="mb-3">
                                              <label
                                                htmlFor="Other_Company"
                                                className="form-label"
                                              >
                                                Company
                                              </label>
                                              <Field
                                                type="text"
                                                className="form-control shadow inputDesign"
                                                id="Other_Company"
                                                name="Other_Company"
                                                placeholder="Company"
                                              />
                                              <ErrorMessage
                                                component="div"
                                                className="text-danger fw-bold"
                                                name="Other_Company"
                                              />
                                            </div>
                                          </div>
                                          <div className="col-md-6">
                                            <div className="mb-3">
                                              <label
                                                htmlFor="Other_Phone"
                                                className="form-label"
                                              >
                                                Phone
                                              </label>
                                              <Field
                                                type="number"
                                                className="form-control shadow inputDesign"
                                                id="Other_Phone"
                                                name="Other_Phone"
                                                placeholder="Phone"
                                              />
                                              <ErrorMessage
                                                component="div"
                                                className="text-danger fw-bold"
                                                name="Other_Phone"
                                              />
                                            </div>
                                          </div>

                                          <div className="col-md-6">
                                            <div className="mb-3">
                                              <label
                                                htmlFor="Other_Email"
                                                className="form-label"
                                              >
                                                Email
                                              </label>
                                              <Field
                                                type="email"
                                                className="form-control shadow inputDesign"
                                                id="Other_Email"
                                                name="Other_Email"
                                                placeholder="Email"
                                              />
                                              <ErrorMessage
                                                component="div"
                                                className="text-danger fw-bold"
                                                name="Other_Email"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {/* Other */}
                                    </div>
                                    {/* Professional Advisor Detail Form */}
                                  </Modal.Body>
                                  <Modal.Footer>
                                    <div className="col-md-12">
                                      <button
                                        className="float-end btn w-25  bgColor modalBtn"
                                        // onClick={handleClose2}
                                        type="submit"
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
                              </Formik>
                            </Modal>
                            {/* ---------------------------------------------------- */}
                          </div>
                        )}
                        {/* Partner Professional Advisors */}

                        {/* Table Client Professional Advisors */}
                        {isPartnerTable && (
                          <div className="table-responsive my-3">
                            <table className="table table-bordered table-hover text-center">
                              <thead className="text-light" id="tableHead">
                                <tr>
                                  <th>Advisor</th>
                                  <th>Name</th>
                                  <th>Company</th>
                                  <th>Phone</th>
                                  <th>Email</th>
                                  <th>Operations</th>
                                </tr>
                              </thead>
                              <tbody>
                                {PartnerData.map((elem, index) => {
                                  let {
                                    Solicitor_Name,
                                    Solicitor_Company,
                                    Solicitor_Phone,
                                    Solicitor_Email,
                                  } = elem;
                                  if (
                                   PartnerData[0].Solicitor_Name == "" ||
                                   PartnerData[0].Solicitor_Phone == "" ||
                                   PartnerData[0].Solicitor_Company ==
                                      "" ||
                                   PartnerData[0].Solicitor_Email == ""
                                  ) {
                                  } else {
                                    return (
                                      <tr key={index}>
                                        <td className="fw-bold">Solicitor</td>
                                        <td>{Solicitor_Name}</td>
                                        <td>{Solicitor_Company}</td>
                                        <td>{Solicitor_Phone}</td>
                                        <td>{Solicitor_Email}</td>

                                        <td>
                                           <button  type='button' onClick={(e)=>PartnerSolicitorDeleteHandler(elem)} className='btn btn-danger btn-sm'>delete</button>
                                           <button  type='button' onClick={()=>{setPartnerEdit(true); handleShow2();}} className='btn btn-warning btn-sm mx-2'>update</button> 
                                        </td>
                                      </tr>
                                    );
                                  }
                                })}

                                {PartnerData.map((elem, index) => {
                                  let {
                                    Accountant_Name,
                                    Accountant_Company,
                                    Accountant_Phone,
                                    Accountant_Email,
                                  } = elem;
                                  if (
                                    PartnerData[0].Accountant_Name ==
                                      "" ||
                                    PartnerData[0].Accountant_Phone ==
                                      "" ||
                                    PartnerData[0].Accountant_Company ==
                                      "" ||
                                    PartnerData[0].Accountant_Email == ""
                                  ) {
                                  } else {
                                    return (
                                      <tr key={index}>
                                        <td className="fw-bold">Accountant</td>
                                        <td>{Accountant_Name}</td>
                                        <td>{Accountant_Company}</td>
                                        <td>{Accountant_Phone}</td>
                                        <td>{Accountant_Email}</td>

                                        <td>
                                         <button  type='button' onClick={(e)=>PartnerAccountantDeleteHandler(elem)} className='btn btn-danger btn-sm'>delete</button>
                                         <button  type='button' onClick={()=>{setPartnerEdit(true); handleShow2();}} className='btn btn-warning btn-sm mx-2'>update</button> 
                                        </td>
                                      </tr>
                                    );
                                  }
                                })}

                                {PartnerData.map((elem, index) => {
                                  let {
                                    InsuranceAdvisor_Name,
                                    InsuranceAdvisor_Company,
                                    InsuranceAdvisor_Phone,
                                    InsuranceAdvisor_Email,
                                  } = elem;
                                  if (
                                    PartnerData[0]
                                      .InsuranceAdvisor_Name == "" ||
                                    PartnerData[0]
                                      .InsuranceAdvisor_Phone == "" ||
                                    PartnerData[0]
                                      .InsuranceAdvisor_Company == "" ||
                                    PartnerData[0]
                                      .InsuranceAdvisor_Email == ""
                                  ) {
                                  } else {
                                    return (
                                      <tr key={index}>
                                        <td className="fw-bold">
                                          Insurance Advisor
                                        </td>
                                        <td>{InsuranceAdvisor_Name}</td>
                                        <td>{InsuranceAdvisor_Company}</td>
                                        <td>{InsuranceAdvisor_Phone}</td>
                                        <td>{InsuranceAdvisor_Email}</td>

                                        <td>
                                          <button  type='button' onClick={(e)=>PartnerInsuranceAdvisorDeleteHandler(elem)} className='btn btn-danger btn-sm'>delete</button>
                                <button  type='button' onClick={()=>{setPartnerEdit(true); handleShow2();}} className='btn btn-warning btn-sm mx-2'>update</button> 

                                        </td>
                                      </tr>
                                    );
                                  }
                                })}

                                {PartnerData.map((elem, index) => {
                                  let {
                                    Doctor_Name,
                                    Doctor_Company,
                                    Doctor_Phone,
                                    Doctor_Email,
                                  } = elem;
                                  if (
                                   PartnerData[0].Doctor_Name == "" ||
                                   PartnerData[0].Doctor_Phone == "" ||
                                   PartnerData[0].Doctor_Company == "" ||
                                   PartnerData[0].Doctor_Email == ""
                                  ) {
                                  } else {
                                    return (
                                      <tr key={index}>
                                        <td className="fw-bold">Doctor</td>
                                        <td>{Doctor_Name}</td>
                                        <td>{Doctor_Company}</td>
                                        <td>{Doctor_Phone}</td>
                                        <td>{Doctor_Email}</td>

                                        <td>
                                       <button  type='button' onClick={(e)=>PartnerDoctorDeleteHandler(elem)} className='btn btn-danger btn-sm'>delete</button>
                           <button  type='button' onClick={()=>{setPartnerEdit(true); handleShow2();}} className='btn btn-warning btn-sm mx-2'>update</button> 

                                        </td>
                                      </tr>
                                    );
                                  }
                                })}

                                {PartnerData.map((elem, index) => {
                                  let {
                                    Other_Name,
                                    Other_Company,
                                    Other_Phone,
                                    Other_Email,
                                  } = elem;
                                  if (
                                    PartnerData[0].Other_Name == "" ||
                                    PartnerData[0].Other_Phone == "" ||
                                    PartnerData[0].Other_Company == "" ||
                                    PartnerData[0].Other_Email == ""
                                  ) {
                                  } else {
                                    return (
                                      <tr key={index}>
                                        <td className="fw-bold">Other</td>
                                        <td>{Other_Name}</td>
                                        <td>{Other_Company}</td>
                                        <td>{Other_Phone}</td>
                                        <td>{Other_Email}</td>

                                        <td>
                                          <button  type='button' onClick={(e)=>PartnerOtherDeleteHandler(elem)} className='btn btn-danger btn-sm'>delete</button>
                 <button  type='button' onClick={()=>{setPartnerEdit(true); handleShow2();}} className='btn btn-warning btn-sm mx-2'>update</button> 

                                        </td>
                                      </tr>
                                    );
                                  }
                                })}
                              </tbody>
                            </table>
                          </div>
                        )}

                        {/* Table Partner Professional Advisors */}
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
            {/*Expenses */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfessionalAdvisors;
