import React, { useState, useEffect } from "react"
import Modal from "react-bootstrap/Modal"
import * as Yup from "yup"
import "yup-phone"
import plus from "./images/plus.svg"
import notebook from "./images/notebook.svg"
import { ErrorMessage, Field, Form, Formik } from "formik"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const EstatePlanning_Edit = () => {
  const [POA, setPOA] = useState(false)
  const [POA2, setPOA2] = useState(false)

  const [ClientPOAListUpdate, setClientPOAListUpdate] = useState([])
  const [ClientEstatePlanningFlag, setClientEstatePlanningFlag] =
    useState(false)

  const [PartnerPOAListUpdate, setPartnerPOAListUpdate] = useState([])
  const [PartnerEstatePlanningFlag, setPartnerEstatePlanningFlag] =
    useState(false)

  const [show2, setShow2] = useState(false)
  const handleClose2 = () => setShow2(false)
  const handleShow2 = () => setShow2(true)
  const [haveWills, setHaveWills] = useState(false)
  const [haveWills2, setHaveWills2] = useState(false)
  const [estatePlanning, setEstatePlanning] = useState(false)
  const [estatePlanning2, setEstatePlanning2] = useState(false)
  const [isPartnered, setIsPartnered] = useState()

  // const [updateIndex, setUpdateIndex] = useState()

  const [ClientPOAList, setClientPOAList] = useState([])
  const [ClientPOAList2, setClientPOAList2] = useState([])

  let partner = window.localStorage.getItem("partner")

  const [clientDataState, setClientData] = useState([]);
  const [PartnerDataState, setPartnerData] = useState([]);


  useEffect(() => {
    if(partner=="true"){
      setIsPartnered(true)
    
    }
    else{
      setIsPartnered(false)
   
    }

    let email=localStorage.getItem("EditClient")

    // client data
    axios
    .get(`http://localhost:7000/Client-EstatePlanning`)
    .then((res) => {
    let clientObj=(res.data)
    let clientFilterObj = clientObj.filter((item) => item.Email == email);
      
      let date = new Date(clientFilterObj[0].PreparationDate);
      clientFilterObj[0].PreparationDate = date;
      
      date = new Date(clientFilterObj[0].LastReviewDate);
      clientFilterObj[0].LastReviewDate = date;
      
      setClientData(clientFilterObj[0]);
      //  console.log(res.data)
      console.log("clientFilterObj",clientFilterObj[0])
    })

    // client data Modal
    axios
    .get(`http://localhost:7000/Client-ModalEstatePlanning`)
    .then((res) => {
    let clientObj=(res.data)
    let clientFilterObj=clientObj.filter((item) => item.Email ==email);
    setClientPOAList(clientFilterObj)
      //  console.log(res.data)
      //  console.log(clientFilterObj)
      
    })
    
    // Partner data
    axios
    .get(`http://localhost:7000/Partner-EstatePlanning`)
    .then((res) => {
    let clientObj=(res.data)
    let clientFilterObj = clientObj.filter((item) => item.Email == email);
      
      let date = new Date(clientFilterObj[0].PreparationDate);
      clientFilterObj[0].PreparationDate = date;
      
      date = new Date(clientFilterObj[0].LastReviewDate);
      clientFilterObj[0].LastReviewDate = date;

    setPartnerData(clientFilterObj[0])
      //  console.log("Partner",clientFilterObj[0])
      
    })

    // Partner data Modal
    axios
    .get(`http://localhost:7000/Partner-ModalEstatePlanning`)
    .then((res) => {
    let clientObj=(res.data)
    let clientFilterObj=clientObj.filter((item) => item.Email ==email);
    setClientPOAList2(clientFilterObj)
    //  console.log(res.data)
      
    })



    
     }, [])

  let estatePlanningHandler = (elem) => {
    if (elem === "No") {
      setEstatePlanning(false)
    } else {
      setEstatePlanning(true)
    }
  }

  let estatePlanningHandler2 = (elem) => {
    if (elem === "No") {
      setEstatePlanning2(false)
    } else {
      setEstatePlanning2(true)
    }
  }

  let haveWillsHandler = (elem) => {
    if (elem === "No") {
      setHaveWills(false)
    } else {
      setHaveWills(true)
    }
  }

  let haveWillsHandler2 = (elem) => {
    if (elem === "No") {
      setHaveWills2(false)
    } else {
      setHaveWills2(true)
    }
  }

  let POAHandler2 = (elem) => {
    if (elem === "No") {
      setPOA2(false)
    } else {
      setPOA2(true)
    }
  }

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  let POAHandler = (elem) => {
    if (elem === "No") {
      setPOA(false)
    } else {
      setPOA(true)
    }
  }

  function ChangeDateFormat(CDoB, HDate) {
    let CurrentDate = new Date(document.getElementById(HDate).value)
    let dd = CurrentDate.getDate()
    let mm = CurrentDate.getMonth()
    let yyyy = CurrentDate.getFullYear()
    let setDate = dd + "/" + (mm + 1) + "/" + yyyy
    document.getElementById(CDoB).value = setDate
  }
  let initialValues = {
    haveWillsradio: clientDataState.AnyWill,
    reflectCurrentWishesradio: clientDataState.CurrentWill_Reflection,
    datePrepared: clientDataState.PreparationDate,
    lastReviewed: clientDataState.LastReviewDate,
    LocationOfWill: clientDataState.WillLocation,
    allowTestamentaryradio: clientDataState.TestamentaryTest,
    Executor: clientDataState.Executors,
    funeralBondsradio: clientDataState.FuneralBonds,
    specificEstatePlanningradio: clientDataState.SpecificEstateRequirements,
    estatePlanningDetails: clientDataState.Details_SpecificRequirements,
    POAradio: clientDataState.POA,

    // partner estate planning

    haveWillsradio2: PartnerDataState.AnyWill,
    reflectCurrentWishesradio2: PartnerDataState.CurrentWill_Reflection,
    datePrepared2: PartnerDataState.PreparationDate,
    lastReviewed2: PartnerDataState.LastReviewDate,
    LocationOfWill2: PartnerDataState.WillLocation,
    allowTestamentaryradio2: PartnerDataState.TestamentaryTest,
    Executor2: PartnerDataState.Executors,
    funeralBondsradio2: PartnerDataState.FuneralBonds,
    specificEstatePlanningradio2: PartnerDataState.SpecificEstateRequirements,
    estatePlanningDetails2: PartnerDataState.Details_SpecificRequirements,
    POAradio2: PartnerDataState.POA,
  };
  let validationSchema = Yup.object({
    LocationOfWill: Yup.string().when("haveWillsradio", {
      is: (val) => val && val.length == 3,
      then: Yup.string().required("Required"),
      otherwise: Yup.string().notRequired(),
    }),

    Executor: Yup.string().when("haveWillsradio", {
      is: (val) => val && val.length == 3,
      then: Yup.string().required("Required"),
      otherwise: Yup.string().notRequired(),
    }),

    datePrepared: Yup.date().when("haveWillsradio", {
      is: (val) => val && val.length == 3,
      then: Yup.date().required("Required").nullable(),
    }),
    lastReviewed: Yup.date().when("haveWillsradio", {
      is: (val) => val && val.length == 3,
      then: Yup.date().required("Required").nullable(),
    }),

    estatePlanningDetails: Yup.string().when("specificEstatePlanningradio", {
      is: (val) => val && val.length == 3,
      then: Yup.string().required("Required"),
      otherwise: Yup.string().notRequired(),
    }),
    // estatePlanningDetails:Yup.string().required("Required"),

    // partner estate planning
    LocationOfWill2: Yup.string().when("haveWillsradio2", {
      is: (val) => val && val.length == 3,
      then: Yup.string().required("Required"),
      otherwise: Yup.string().notRequired(),
    }),

    Executor2: Yup.string().when("haveWillsradio2", {
      is: (val) => val && val.length == 3,
      then: Yup.string().required("Required"),
      otherwise: Yup.string().notRequired(),
    }),

    datePrepared2: Yup.date().when("haveWillsradio2", {
      is: (val) => val && val.length == 3,
      then: Yup.date().required("Required").nullable(),
    }),
    lastReviewed2: Yup.date().when("haveWillsradio2", {
      is: (val) => val && val.length == 3,
      then: Yup.date().required("Required").nullable(),
    }),

    estatePlanningDetails2: Yup.string().when("specificEstatePlanningradio2", {
      is: (val) => val && val.length == 3,
      then: Yup.string().required("Required"),
      otherwise: Yup.string().notRequired(),
    }),
  })

  let client_validationSchema = Yup.object({
    LocationOfWill: Yup.string().when("haveWillsradio", {
      is: (val) => val && val.length == 3,
      then: Yup.string().required("Required"),
      otherwise: Yup.string().notRequired(),
    }),

    Executor: Yup.string().when("haveWillsradio", {
      is: (val) => val && val.length == 3,
      then: Yup.string().required("Required"),
      otherwise: Yup.string().notRequired(),
    }),

    datePrepared: Yup.date().when("haveWillsradio", {
      is: (val) => val && val.length == 3,
      then: Yup.date().required("Required").nullable(),
    }),
    lastReviewed: Yup.date().when("haveWillsradio", {
      is: (val) => val && val.length == 3,
      then: Yup.date().required("Required").nullable(),
    }),

    estatePlanningDetails: Yup.string().when("specificEstatePlanningradio", {
      is: (val) => val && val.length == 3,
      then: Yup.string().required("Required"),
      otherwise: Yup.string().notRequired(),
    }),
  })

  let Navigate = useNavigate();
  function BackFunction() {
    Navigate('/Edit-Investments')
  }

  let onSubmit = (values) => {
    //  Navigate('/Edit-Super-And-Retirment')

    // partner estate planning
    let PartnerData = {
      Email: localStorage.getItem("ClientEmail"),
      AnyWill: values.haveWillsradio2,
      CurrentWill_Reflection: values.reflectCurrentWishesradio2,
      PreparationDate: values.datePrepared2,
      LastReviewDate: values.lastReviewed2,
      WillLocation: values.LocationOfWill2,
      TestamentaryTest: values.allowTestamentaryradio2,
      Executors: values.Executor2,
      FuneralBonds: values.funeralBondsradio2,
      SpecificEstateRequirements: values.specificEstatePlanningradio2,
      Details_SpecificRequirements: values.estatePlanningDetails2,
      POA: values.POAradio2,
    }

    // client estate planning
    let clientData = {
      Email: localStorage.getItem("ClientEmail"),
      AnyWill: values.haveWillsradio,
      CurrentWill_Reflection: values.reflectCurrentWishesradio,
      PreparationDate: values.datePrepared,
      LastReviewDate: values.lastReviewed,
      WillLocation: values.LocationOfWill,
      TestamentaryTest: values.allowTestamentaryradio,
      Executors: values.Executor,
      FuneralBonds: values.funeralBondsradio,
      SpecificEstateRequirements: values.specificEstatePlanningradio,
      Details_SpecificRequirements: values.estatePlanningDetails,
      POA: values.POAradio,
    }

    if (isPartnered === true) {
      console.log(clientData)
      console.log(PartnerData)

      axios
        .patch(
          `http://localhost:7000/Client-EstatePlanning/Update-Client-EstatePlanning/${clientData.Email}`,
          clientData
        )
        .then((res) => {
           
          console.log("Client Estate Planning Updated Successfullly!")
        })

          setTimeout(() => {
            axios
            .patch(
              `http://localhost:7000/Partner-EstatePlanning/Update-Partner-EstatePlanning/${PartnerData.Email}`,
              PartnerData
            )
              .then((res) => {
                Navigate('/Edit-Super-And-Retirment');
                console.log("Partner Estate Planning Updated Successfully!");
            }
            )
          }, 500);
      
    } else {
      console.log(clientData)
      axios
      .patch(
        `http://localhost:7000/Client-EstatePlanning/Update-Client-EstatePlanning/${clientData.Email}`,
        clientData
      )
        .then((res) => {
           Navigate('/Edit-Super-And-Retirment')
          console.log("Client Estate Planning Updated Successfullly!")
        })
    }
  }

  let POA_initialValues = {
    PowerofAttorney: "",
    dateLastReviewed: "",
    OtherDescription: "",
    locationOfPOA: "",
    POA1: "",
    Relationship1: "",
    POA2: "",
    Relationship2: "",
    POA3: "",
    Relationship3: "",
    POA4: "",
    Relationship4: "",
    POA5: "",
    Relationship5: "",
  }
  let POA_validationSchema = Yup.object({
    PowerofAttorney: Yup.string(),
    dateLastReviewed: Yup.date().nullable(),

    OtherDescription: Yup.string().when("PowerofAttorney", {
      is: (val) => val && val.length == 14,
      then: Yup.string(),
      otherwise: Yup.string().notRequired(),
    }),
    locationOfPOA: Yup.string(),
    POA1: Yup.string(),
    Relationship1: Yup.string(),
    POA2: Yup.string(),
    Relationship2: Yup.string(),
    POA3: Yup.string(),
    Relationship3: Yup.string(),
    POA4: Yup.string(),
    Relationship4: Yup.string(),
    POA5: Yup.string(),
    Relationship5: Yup.string(),
  })

  let POA_onSubmit = (Values) => {
    let email = localStorage.getItem("ClientEmail")

    let client_Modal = {
      Email: localStorage.getItem("ClientEmail"),
      POA_Type: Values.PowerofAttorney,
      POA_OtherDescription: Values.OtherDescription,
      POA_ReviewDate: Values.dateLastReviewed,
      POA_Location: Values.locationOfPOA,
      POA_1: Values.POA1,
      POA_2: Values.POA2,
      POA_3: Values.POA3,
      POA_4: Values.POA4,
      POA_5: Values.POA5,
      Relationship_1: Values.Relationship1,
      Relationship_2: Values.Relationship2,
      Relationship_3: Values.Relationship3,
      Relationship_4: Values.Relationship4,
      Relationship_5: Values.Relationship5,
    }

    if (ClientEstatePlanningFlag) {
      setClientEstatePlanningFlag(false)
      let id = Values.id
      axios
        .patch(
          `http://localhost:7000/Client-ModalEstatePlanning/Update-Client-ModalEstatePlanning/${email}/${id}`,
          client_Modal
        )
        .then((res) => {
          //Popper Massage
          console.log("Updated Complete SuccessFully")
        })

      setTimeout(() => {
        axios
          .get("http://localhost:7000/Client-ModalEstatePlanning")
          .then((res) => {
            let childObj = res.data
            let childFilterObj = childObj.filter((item) => item.Email == email)
            setClientPOAList(childFilterObj)

            console.log("Client Estate Planning Modal Get Successfullly!")
          })
      }, 500)

      handleClose()
    } else {
      // setClientPOAList([...ClientPOAList, client_Modal]);
      // console.log(client_Modal);

      handleClose()

      axios
        .post(
          "http://localhost:7000/Client-ModalEstatePlanning/Add-Client-ModalEstatePlanning",
          client_Modal
        )
        .then((res) => {
          handleClose()
          console.log("Client Estate Planning Modal Added Successfullly!")
        })

      setTimeout(() => {
        axios
          .get("http://localhost:7000/Client-ModalEstatePlanning")
          .then((res) => {
            let childObj = res.data
            let childFilterObj = childObj.filter((item) => item.Email == email)
            setClientPOAList(childFilterObj)

            console.log("Client Estate Planning Modal Get Successfullly!")
          })
      }, 500)
    }
  }

  let POA_initialValues2 = {
    PowerofAttorney2: "",
    datelastReviewed2: "",
    OtherDescription2: "",
    locationOfPOA2: "",
    POA12: "",
    Relationship12: "",
    POA22: "",
    Relationship22: "",
    POA32: "",
    Relationship32: "",
    POA42: "",
    POA52: "",
    Relationship52: "",
  }
  let POA_validationSchema2 = Yup.object({
    PowerofAttorney2: Yup.string(),
    datelastReviewed2: Yup.date().nullable(),
    // OtherDescription2:Yup.string(),

    OtherDescription2: Yup.string().when("PowerofAttorney2", {
      is: (val) => val && val.length == 14,
      then: Yup.string(),
      otherwise: Yup.string().notRequired(),
    }),
    locationOfPOA2: Yup.string(),
    POA12: Yup.string(),
    Relationship12: Yup.string(),
    POA22: Yup.string(),
    Relationship22: Yup.string(),
    POA32: Yup.string(),
    Relationship32: Yup.string(),
    POA42: Yup.string(),
    Relationship42: Yup.string(),
    POA52: Yup.string(),
    Relationship52: Yup.string(),
  })

  let ClientEstatePlanningDelete = (elem, ind) => {
    let email = localStorage.getItem("ClientEmail")
    let id = elem._id

    // setClientPOAList(
    //   ClientPOAList.filter((ClientPOAList, index) => index !== ind)
    // );

    // jojo

    axios
      .delete(
        `http://localhost:7000/Client-ModalEstatePlanning/Delete-Client-ModalEstatePlanning/${email}/${id}`
      )
      .then((res) => {
        //Popper Massage
        console.log("Client Modal Row Deleted Successfully")
      })

    setTimeout(() => {
      axios
        .get("http://localhost:7000/Client-ModalEstatePlanning")
        .then((res) => {
          let childObj = res.data
          let childFilterObj = childObj.filter((item) => item.Email == email)
          setClientPOAList(childFilterObj)

          console.log("Client Estate Planning Modal Get Successfullly!")
        })
    }, 500)
  }

  let ClientEstatePlanningUpdate = (elem, ind) => {
    setClientEstatePlanningFlag(true)

    let date = new Date(elem.POA_ReviewDate)
    elem.POA_ReviewDate = date

    let client_Modal = {
      id: elem._id,
      PowerofAttorney: elem.POA_Type,
      OtherDescription: elem.POA_OtherDescription,
      dateLastReviewed: elem.POA_ReviewDate,
      locationOfPOA: elem.POA_Location,
      POA1: elem.POA_1,
      POA2: elem.POA_2,
      POA3: elem.POA_3,
      POA4: elem.POA_4,
      POA5: elem.POA_5,
      Relationship1: elem.Relationship_1,
      Relationship2: elem.Relationship_2,
      Relationship3: elem.Relationship_3,
      Relationship4: elem.Relationship_4,
      Relationship5: elem.Relationship_5,
    }
    setClientPOAListUpdate([client_Modal])
    // setUpdateIndex(ind);
    setShow(true)
  }

  let POA_onSubmit2 = (values) => {
    let email = localStorage.getItem("ClientEmail")

    let Partnet_Modal = {
      Email: localStorage.getItem("ClientEmail"),
      POA_Type: values.PowerofAttorney2,
      POA_ReviewDate: values.datelastReviewed2,
      POA_OtherDescription: values.OtherDescription2,
      POA_Location: values.locationOfPOA2,
      POA_1: values.POA12,
      POA_2: values.POA22,
      POA_3: values.POA32,
      POA_4: values.POA42,
      POA_5: values.POA52,

      Relationship_1: values.Relationship12,
      Relationship_2: values.Relationship22,
      Relationship_3: values.Relationship32,
      Relationship_4: values.Relationship42,
      Relationship_5: values.Relationship52,
    }

    if (PartnerEstatePlanningFlag) {
      setPartnerEstatePlanningFlag(false)
      let id = values.id

      axios
        .patch(
          `http://localhost:7000/Partner-ModalEstatePlanning/Update-Partner-ModalEstatePlanning/${email}/${id}`,
          Partnet_Modal
        )
        .then((res) => {
          console.log("Partner Updated SuccessFully")
        })
      // alert("jango");

      // setClientPOAList2(
      //   ClientPOAList2.filter((ClientPOAList2, index) => index !== updateIndex)
      // );
      // setClientPOAList2(ClientPOAList2=>[...ClientPOAList2, Partnet_Modal]);
      handleClose2()
      setPartnerEstatePlanningFlag(false)
      setTimeout(() => {
        axios
          .get("http://localhost:7000/Partner-ModalEstatePlanning")
          .then((res) => {
            let childObj = res.data
            let childFilterObj = childObj.filter((item) => item.Email == email)
            setClientPOAList2(childFilterObj)
            console.log("Partner Estate Planning Modal Get Successfullly!")
          })
      }, 500)
    } else {
      // setClientPOAList2([...ClientPOAList2, Partnet_Modal]);
      console.log(Partnet_Modal)
      handleClose2()

      axios
        .post(
          "http://localhost:7000/Partner-ModalEstatePlanning/Add-Partner-ModalEstatePlanning",
          Partnet_Modal
        )
        .then((res) => {
          handleClose2()
          console.log("Partner Estate Planning Modal Added Successfully!")
        })

      setTimeout(() => {
        axios
          .get("http://localhost:7000/Partner-ModalEstatePlanning")
          .then((res) => {
            let childObj = res.data
            let childFilterObj = childObj.filter((item) => item.Email == email)
            setClientPOAList2(childFilterObj)
            console.log("Partner Estate Planning Modal Get Successfullly!")
          })
      }, 500)
    }
  }

  let PartnerDeleteHandel = (elem, ind) => {
    let id = elem._id
    let email = localStorage.getItem("ClientEmail")
    //chikapu
    axios
      .delete(
        `http://localhost:7000/Partner-ModalEstatePlanning/Delete-Partner-ModalEstatePlanning/${email}/${id}`
      )
      .then((res) => {
        //Popper Massage
        console.log("Client Modal Row Deleted Successfully")
      })

    setTimeout(() => {
      axios
        .get("http://localhost:7000/Partner-ModalEstatePlanning")
        .then((res) => {
          let childObj = res.data
          let childFilterObj = childObj.filter((item) => item.Email == email)
          setClientPOAList2(childFilterObj)
          console.log("Partner Estate Planning Modal Get Successfullly!")
        })
    }, 500)
  }
  let PartnerEstatePlanningUpdate = (e, ind) => {
    setPartnerEstatePlanningFlag(true)

    let date = new Date(e.POA_ReviewDate)
    e.POA_ReviewDate = date

    let Partnet_Modal = {
      id: e._id,
      PowerofAttorney2: e.POA_Type,
      datelastReviewed2: e.POA_ReviewDate,
      OtherDescription2: e.POA_OtherDescription,
      locationOfPOA2: e.POA_Location,
      POA12: e.POA_1,
      POA22: e.POA_2,
      POA32: e.POA_3,
      POA42: e.POA_4,
      POA52: e.POA_5,

      Relationship12: e.Relationship_1,
      Relationship22: e.Relationship_2,
      Relationship32: e.Relationship_3,
      Relationship42: e.Relationship_4,
      Relationship52: e.Relationship_5,
    }
    setPartnerPOAListUpdate([Partnet_Modal])
    // setUpdateIndex(ind);
    setShow2(true)
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row px-0 m-0">
          <div className="col-md-12">
            <div className="shadow py-4 px-4 my-5">
              <div>
                <h3 className="text-center">Estate Planning</h3>

                <Formik
                  initialValues={initialValues}
                  validationSchema={
                    isPartnered ? validationSchema : client_validationSchema
                  }
                  onSubmit={onSubmit}
                  enableReinitialize 
                >
                  {({ values, handleChange, setFieldValue, handleBlur }) => (
                    <Form>
                      {/* Client Estate Planning */}
                      <div>
                        <h3>Client Estate Planning</h3>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label className="form-label">
                                Do you have any Wills?
                              </label>
                              {/* switch button style */}
                              <div className="form-check form-switch m-0 p-0 ">
                                <div className="radiobutton">
                                  <input
                                    type="radio"
                                    name="haveWillsradio"
                                    id="haveWillsopt1"
                                    value="Yes"
                                    onClick={() => haveWillsHandler("Yes")}
                                    onChange={handleChange}
                                    checked={values.haveWillsradio === "Yes"}
                                  />
                                  <label
                                    htmlFor="haveWillsopt1"
                                    className="label1"
                                  >
                                    <span>YES</span>
                                  </label>
                                  <input
                                    type="radio"
                                    name="haveWillsradio"
                                    id="haveWillsopt2"
                                    value="No"
                                    onClick={() => haveWillsHandler("No")}
                                    onChange={handleChange}
                                    checked={values.haveWillsradio === "No"}
                                  />
                                  <label
                                    htmlFor="haveWillsopt2"
                                    className="label2"
                                  >
                                    <span>NO</span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="mb-3">
                              <label className="form-label">
                                Do you own any funeral bonds?
                              </label>
                              {/* switch button style */}
                              <div className="form-check form-switch m-0 p-0 ">
                                <div className="radiobutton">
                                  <input
                                    type="radio"
                                    name="funeralBondsradio"
                                    id="funeralBondsopt1"
                                    onChange={handleChange}
                                    value="Yes"
                                    checked={values.funeralBondsradio === "Yes"}
                                  />
                                  <label
                                    htmlFor="funeralBondsopt1"
                                    className="label1"
                                  >
                                    <span>YES</span>
                                  </label>
                                  <input
                                    type="radio"
                                    name="funeralBondsradio"
                                    id="funeralBondsopt2"
                                    onChange={handleChange}
                                    value="No"
                                    checked={values.funeralBondsradio === "No"}
                                  />
                                  <label
                                    htmlFor="funeralBondsopt2"
                                    className="label2"
                                  >
                                    <span>NO</span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {haveWills && (
                          <div>
                            {/* dates row*/}
                            <div className="row">
                              <div className="col-md-6">
                                <div className="mb-3">
                                  <label
                                    htmlFor="datePrepared"
                                    className="form-label"
                                  >
                                    Date Prepared 1st
                                  </label>
                                  <div>
                                    <DatePicker
                                      className="form-control inputDesign shadow"
                                      showIcon
                                      id="datePrepared"
                                      name="datePrepared"
                                      selected={values.datePrepared}
                                      onChange={(date) =>
                                        setFieldValue("datePrepared", date)
                                      }
                                      dateFormat="dd/MM/yyyy"
                                      placeholderText="dd/mm/yyyy"
                                      maxDate={new Date()}
                                      showMonthDropdown
                                      showYearDropdown
                                      dropdownMode="select"
                                      onBlur={handleBlur}
                                      // onBlur={(e)=>partnerAgeHandler("dateOfBirth","age")}
                                    />
                                    {/* {errors.dateOfBirth && touched.dateOfBirth && (
                            <div component="div" className='text-danger'>{errors.dateOfBirth}</div> */}
                                    {/* )} */}
                                  </div>
                                  <ErrorMessage
                                    component="div"
                                    className="text-danger fw-bold"
                                    name="datePrepared"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="mb-3">
                                  <label
                                    htmlFor="lastReviewed"
                                    className="form-label"
                                  >
                                    Date last reviewed
                                  </label>
                                  <div>
                                    <DatePicker
                                      className="form-control inputDesign shadow"
                                      showIcon
                                      id="lastReviewed"
                                      name="lastReviewed"
                                      selected={values.lastReviewed}
                                      onChange={(date) =>
                                        setFieldValue("lastReviewed", date)
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
                                    component="div"
                                    className="text-danger fw-bold"
                                    name="lastReviewed"
                                  />
                                </div>
                              </div>
                            </div>
                            {/* dates row */}

                            <div className="row">
                              <div className="col-md-6">
                                <div className="mb-3">
                                  <label
                                    htmlFor="LocationOfWill"
                                    className="form-label"
                                  >
                                    Location of Will
                                  </label>
                                  <Field
                                    type="text"
                                    className="form-control shadow inputDesign"
                                    id="LocationOfWill"
                                    name="LocationOfWill"
                                    placeholder="Location of Will"
                                  />
                                  <ErrorMessage
                                    name="LocationOfWill"
                                    component="div"
                                    className="text-danger fw-bold"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="mb-3">
                                  <label className="form-label">
                                    Does your Will allow for a testamentary
                                    trust?
                                  </label>
                                  {/* switch button style */}
                                  <div className="form-check form-switch m-0 p-0 ">
                                    <div className="radiobutton">
                                      <input
                                        type="radio"
                                        name="allowTestamentaryradio"
                                        id="allowTestamentaryopt1"
                                        onChange={handleChange}
                                        value="Yes"
                                        checked={
                                          values.allowTestamentaryradio ===
                                          "Yes"
                                        }
                                      />
                                      <label
                                        htmlFor="allowTestamentaryopt1"
                                        className="label1"
                                      >
                                        <span>YES</span>
                                      </label>
                                      <input
                                        type="radio"
                                        name="allowTestamentaryradio"
                                        id="allowTestamentaryopt2"
                                        onChange={handleChange}
                                        value="No"
                                        checked={
                                          values.allowTestamentaryradio === "No"
                                        }
                                      />
                                      <label
                                        htmlFor="allowTestamentaryopt2"
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
                                    htmlFor="Executor"
                                    className="form-label"
                                  >
                                    Executor/s
                                  </label>
                                  <Field
                                    type="text"
                                    className="form-control shadow inputDesign"
                                    id="Executor"
                                    name="Executor"
                                    placeholder="Executor/s"
                                  />
                                  <ErrorMessage
                                    name="Executor"
                                    component="div"
                                    className="text-danger fw-bold"
                                  />
                                </div>
                              </div>

                              <div className="col-md-6">
                                <div className="mb-3">
                                  <label className="form-label">
                                    Does it reflect your current wishes?
                                  </label>
                                  {/* switch button style */}
                                  <div className="form-check form-switch m-0 p-0 ">
                                    <div className="radiobutton">
                                      <input
                                        type="radio"
                                        name="reflectCurrentWishesradio"
                                        id="reflectCurrentWishesopt1"
                                        value="Yes"
                                        //  onClick={()=>ownFamilyHandler("Yes")}
                                        onChange={handleChange}
                                        checked={
                                          values.reflectCurrentWishesradio ===
                                          "Yes"
                                        }
                                      />
                                      <label
                                        htmlFor="reflectCurrentWishesopt1"
                                        className="label1"
                                      >
                                        <span>YES</span>
                                      </label>
                                      <input
                                        type="radio"
                                        name="reflectCurrentWishesradio"
                                        id="reflectCurrentWishesopt2"
                                        value="No"
                                        //  onClick={()=>ownFamilyHandler("No")}
                                        onChange={handleChange}
                                        checked={
                                          values.reflectCurrentWishesradio ===
                                          "No"
                                        }
                                      />
                                      <label
                                        htmlFor="reflectCurrentWishesopt2"
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
                        )}

                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label className="form-label">
                                Do you have any specific estate planning
                                requirements/needs?
                              </label>
                              {/* switch button style */}
                              <div className="form-check form-switch m-0 p-0 ">
                                <div className="radiobutton">
                                  <input
                                    type="radio"
                                    name="specificEstatePlanningradio"
                                    id="specificEstatePlanningopt1"
                                    onChange={handleChange}
                                    value="Yes"
                                    onClick={() => estatePlanningHandler("Yes")}
                                    checked={
                                      values.specificEstatePlanningradio ===
                                      "Yes"
                                    }
                                  />
                                  <label
                                    htmlFor="specificEstatePlanningopt1"
                                    className="label1"
                                  >
                                    <span>YES</span>
                                  </label>
                                  <input
                                    type="radio"
                                    name="specificEstatePlanningradio"
                                    id="specificEstatePlanningopt2"
                                    onChange={handleChange}
                                    value="No"
                                    onClick={() => estatePlanningHandler("No")}
                                    checked={
                                      values.specificEstatePlanningradio ===
                                      "No"
                                    }
                                  />
                                  <label
                                    htmlFor="specificEstatePlanningopt2"
                                    className="label2"
                                  >
                                    <span>NO</span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            {estatePlanning && (
                              <div className="mb-3">
                                <label
                                  htmlFor="estatePlanningDetails"
                                  className="form-label"
                                >
                                  Please enter details below
                                </label>
                                <Field
                                  type="text"
                                  className="form-control shadow inputDesign"
                                  id="estatePlanningDetails"
                                  name="estatePlanningDetails"
                                  placeholder="Details"
                                />
                                <ErrorMessage
                                  name="estatePlanningDetails"
                                  component="div"
                                  className="text-danger fw-bold"
                                />
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label className="form-label">
                                Do you have any POA?
                              </label>
                              {/* switch button style */}
                              <div className="form-check form-switch m-0 p-0 ">
                                <div className="radiobutton">
                                  <input
                                    type="radio"
                                    name="POAradio"
                                    id="POAopt1"
                                    value="Yes"
                                    onClick={() => POAHandler("Yes")}
                                    onChange={handleChange}
                                    checked={values.POAradio === "Yes"}
                                  />
                                  <label htmlFor="POAopt1" className="label1">
                                    <span>YES</span>
                                  </label>
                                  <input
                                    type="radio"
                                    name="POAradio"
                                    id="POAopt2"
                                    value="No"
                                    onClick={() => POAHandler("No")}
                                    onChange={handleChange}
                                    checked={values.POAradio === "No"}
                                  />
                                  <label htmlFor="POAopt2" className="label2">
                                    <span>NO</span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          {POA && (
                            <div className="col-md-6">
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

                        {/* Modal  Do you have any POA?*/}
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
                              Power of Attorney Details
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
                              ClientEstatePlanningFlag
                                ? ClientPOAListUpdate[0]
                                : POA_initialValues
                            }
                            validationSchema={POA_validationSchema}
                            onSubmit={POA_onSubmit}
                          >
                            {({
                              values,
                              handleChange,
                              setFieldValue,
                              formik,
                            }) => (
                              <Form>
                                <Modal.Body>
                                  {/* Personal Assets Details*/}

                                  <div className="">
                                    {/* Row 1*/}
                                    <div className="row">
                                      <input type="hidden" name="_id" />
                                      <div className="col-md-6">
                                        <div className="mb-3">
                                          <label
                                            htmlFor="PowerofAttorney"
                                            className="form-label"
                                          >
                                            Type of Power of Attorney
                                          </label>
                                          <Field
                                            as="select"
                                            id="PowerofAttorney"
                                            className="form-select shadow  inputDesign"
                                            name="PowerofAttorney"
                                          >
                                            <option value="">Select</option>
                                            <option value="Enduring">
                                              Enduring
                                            </option>
                                            <option value="Medical">
                                              Medical
                                            </option>
                                            <option value="Limited">
                                              Limited
                                            </option>
                                            <option value="OtherFinancial">
                                              OtherFinancial
                                            </option>
                                          </Field>
                                          <ErrorMessage
                                            className="text-danger fw-bold"
                                            component="div"
                                            name="PowerofAttorney"
                                          />
                                        </div>
                                      </div>

                                      <div className="col-md-6">
                                        <div className="mb-3">
                                          <label
                                            htmlFor="dateLastReviewed"
                                            className="form-label"
                                          >
                                            Date last reviewed
                                          </label>
                                          <div>
                                            <DatePicker
                                              className="form-control inputDesign shadow"
                                              showIcon
                                              id="dateLastReviewed"
                                              name="dateLastReviewed"
                                              selected={values.dateLastReviewed}
                                              onChange={(date) =>
                                                setFieldValue(
                                                  "dateLastReviewed",
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
                                            name="dateLastReviewed"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    {/* Row 1*/}

                                    {/* Row 2*/}
                                    <div className="row">
                                      {values.PowerofAttorney ===
                                        "OtherFinancial" && (
                                        <div className="col-md-6">
                                          <div className="mb-3">
                                            <label
                                              htmlFor="OtherDescription"
                                              className="form-label"
                                            >
                                              Other Description
                                            </label>
                                            <Field
                                              type="text"
                                              className="form-control shadow inputDesign"
                                              id="OtherDescription"
                                              name="OtherDescription"
                                              placeholder="Other Description"
                                            />
                                            <ErrorMessage
                                              component="div"
                                              className="text-danger fw-bold"
                                              name="OtherDescription"
                                            />
                                          </div>
                                        </div>
                                      )}

                                      <div className="col-md-6">
                                        <div className="mb-3">
                                          <label
                                            htmlFor="locationOfPOA"
                                            className="form-label"
                                          >
                                            Location of POA
                                          </label>
                                          <Field
                                            type="text"
                                            className="form-control shadow inputDesign"
                                            id="locationOfPOA"
                                            name="locationOfPOA"
                                          />
                                          <ErrorMessage
                                            component="div"
                                            className="text-danger fw-bold"
                                            name="locationOfPOA"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    {/* Row 2*/}

                                    <div className="row">
                                      <div className="col-md-6">
                                        <div className="mb-3">
                                          <label
                                            htmlFor="POA1"
                                            className="form-label"
                                          >
                                            POA #1
                                          </label>
                                          <Field
                                            type="text"
                                            className="form-control shadow inputDesign"
                                            id="POA1"
                                            name="POA1"
                                            placeholder="POA #1"
                                          />
                                          <ErrorMessage
                                            component="div"
                                            className="text-danger fw-bold"
                                            name="POA1"
                                          />
                                        </div>
                                      </div>

                                      <div className="col-md-6">
                                        <div className="mb-3">
                                          <label
                                            htmlFor="Relationship1"
                                            className="form-label"
                                          >
                                            Relationship #1
                                          </label>
                                          <Field
                                            type="text"
                                            className="form-control shadow inputDesign"
                                            id="Relationship1"
                                            name="Relationship1"
                                            placeholder="Relationship #1"
                                          />
                                          <ErrorMessage
                                            component="div"
                                            className="text-danger fw-bold"
                                            name="Relationship1"
                                          />
                                        </div>
                                      </div>
                                    </div>

                                    <div className="row">
                                      <div className="col-md-6">
                                        <div className="mb-3">
                                          <label
                                            htmlFor="POA2"
                                            className="form-label"
                                          >
                                            POA #2
                                          </label>
                                          <Field
                                            type="text"
                                            className="form-control shadow inputDesign"
                                            id="POA2"
                                            name="POA2"
                                            placeholder="POA #2"
                                          />
                                          <ErrorMessage
                                            component="div"
                                            className="text-danger fw-bold"
                                            name="POA2"
                                          />
                                        </div>
                                      </div>

                                      <div className="col-md-6">
                                        <div className="mb-3">
                                          <label
                                            htmlFor="Relationship2"
                                            className="form-label"
                                          >
                                            Relationship #2
                                          </label>
                                          <Field
                                            type="text"
                                            className="form-control shadow inputDesign"
                                            id="Relationship2"
                                            name="Relationship2"
                                            placeholder="Relationship #2"
                                          />
                                          <ErrorMessage
                                            component="div"
                                            className="text-danger fw-bold"
                                            name="Relationship2"
                                          />
                                        </div>
                                      </div>
                                    </div>

                                    <div className="row">
                                      <div className="col-md-6">
                                        <div className="mb-3">
                                          <label
                                            htmlFor="POA3"
                                            className="form-label"
                                          >
                                            POA #3
                                          </label>
                                          <Field
                                            type="text"
                                            className="form-control shadow inputDesign"
                                            id="POA3"
                                            name="POA3"
                                            placeholder="POA #3"
                                          />
                                          <ErrorMessage
                                            component="div"
                                            className="text-danger fw-bold"
                                            name="POA3"
                                          />
                                        </div>
                                      </div>

                                      <div className="col-md-6">
                                        <div className="mb-3">
                                          <label
                                            htmlFor="Relationship3"
                                            className="form-label"
                                          >
                                            Relationship #3
                                          </label>
                                          <Field
                                            type="text"
                                            className="form-control shadow inputDesign"
                                            id="Relationship3"
                                            name="Relationship3"
                                            placeholder="Relationship #3"
                                          />
                                          <ErrorMessage
                                            component="div"
                                            className="text-danger fw-bold"
                                            name="Relationship3"
                                          />
                                        </div>
                                      </div>
                                    </div>

                                    <div className="row">
                                      <div className="col-md-6">
                                        <div className="mb-3">
                                          <label
                                            htmlFor="POA4"
                                            className="form-label"
                                          >
                                            POA #4
                                          </label>
                                          <Field
                                            type="text"
                                            className="form-control shadow inputDesign"
                                            id="POA4"
                                            name="POA4"
                                            placeholder="POA #4"
                                          />
                                          <ErrorMessage
                                            component="div"
                                            className="text-danger fw-bold"
                                            name="POA4"
                                          />
                                        </div>
                                      </div>

                                      <div className="col-md-6">
                                        <div className="mb-3">
                                          <label
                                            htmlFor="Relationship4"
                                            className="form-label"
                                          >
                                            Relationship #4
                                          </label>
                                          <Field
                                            type="text"
                                            className="form-control shadow inputDesign"
                                            id="Relationship4"
                                            name="Relationship4"
                                            placeholder="Relationship #4"
                                          />
                                          <ErrorMessage
                                            component="div"
                                            className="text-danger fw-bold"
                                            name="Relationship4"
                                          />
                                        </div>
                                      </div>
                                    </div>

                                    <div className="row">
                                      <div className="col-md-6">
                                        <div className="mb-3">
                                          <label
                                            htmlFor="POA5"
                                            className="form-label"
                                          >
                                            POA #5
                                          </label>
                                          <Field
                                            type="text"
                                            className="form-control shadow inputDesign"
                                            id="POA5"
                                            name="POA5"
                                            placeholder="POA #5"
                                          />
                                          <ErrorMessage
                                            component="div"
                                            className="text-danger fw-bold"
                                            name="POA5"
                                          />
                                        </div>
                                      </div>

                                      <div className="col-md-6">
                                        <div className="mb-3">
                                          <label
                                            htmlFor="Relationship5"
                                            className="form-label"
                                          >
                                            Relationship #5
                                          </label>
                                          <Field
                                            type="text"
                                            className="form-control shadow inputDesign"
                                            id="Relationship5"
                                            name="Relationship5"
                                            placeholder="Relationship #5"
                                          />
                                          <ErrorMessage
                                            component="div"
                                            className="text-danger fw-bold"
                                            name="Relationship5"
                                          />
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
                        {/* Modal Do you have any POA?*/}
                      </div>
                      {/* Client Estate Planning */}

                      {/*Table1 */}

                      <div className="table-responsive my-3">
                        <table className="table table-bordered table-hover text-center">
                          <thead className="text-light" id="tableHead">
                            <tr>
                              <th>POA Type</th>
                              <th>Name of POA</th>
                              <th>Operations</th>
                            </tr>
                          </thead>

                          <tbody>
                            {/* ClientPOAList  */}
                            {ClientPOAList.map((elem, index) => {
                              let { POA_Type } = elem
                              if (ClientPOAList[0].POA_Type !== "") {
                                return (
                                  <tr key={index}>
                                    <td className="fw-bold">{POA_Type}</td>
                                    <td>
                                      <ol className="list-group list-group-numbered">
                                        <li className="list-group-item m-0 p-0 border-0">
                                          {elem.POA_1}
                                        </li>
                                        <li className="list-group-item m-0 p-0 border-0">
                                          {elem.POA_2}
                                        </li>
                                        <li className="list-group-item m-0 p-0 border-0">
                                          {elem.POA_3}
                                        </li>
                                        <li className="list-group-item m-0 p-0 border-0">
                                          {elem.POA_4}
                                        </li>
                                        <li className="list-group-item m-0 p-0 border-0">
                                          {elem.POA_5}
                                        </li>
                                      </ol>
                                    </td>
                                    <td>
                                      <button
                                        type="button"
                                        onClick={(e) => {
                                          ClientEstatePlanningDelete(
                                            elem,
                                            index
                                          )
                                        }}
                                        className="btn btn-danger btn-sm"
                                      >
                                        delete
                                      </button>
                                      <button
                                        type="button"
                                        onClick={(e) => {
                                          ClientEstatePlanningUpdate(
                                            elem,
                                            index
                                          )
                                        }}
                                        className="btn btn-warning btn-sm mx-2"
                                      >
                                        update
                                      </button>
                                    </td>
                                  </tr>
                                )
                              } else {
                              }
                            })}
                            {/* ClientPOAList  */}
                          </tbody>
                        </table>
                      </div>

                      {/*Table1 */}

                      {/* partner planninng */}
                      {isPartnered && (
                        <div className="my-5">
                          <h3>Partner Estate Planning</h3>

                          <div className="row">
                            <div className="col-md-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Do you have any Wills?
                                </label>
                                {/* switch button style */}
                                <div className="form-check form-switch m-0 p-0 ">
                                  <div className="radiobutton">
                                    <input
                                      type="radio"
                                      name="haveWillsradio2"
                                      id="haveWillsopt12"
                                      value="Yes"
                                      onClick={() => haveWillsHandler2("Yes")}
                                      onChange={handleChange}
                                      checked={values.haveWillsradio2 === "Yes"}
                                    />
                                    <label
                                      htmlFor="haveWillsopt12"
                                      className="label1"
                                    >
                                      <span>YES</span>
                                    </label>
                                    <input
                                      type="radio"
                                      name="haveWillsradio2"
                                      id="haveWillsopt22"
                                      value="No"
                                      onClick={() => haveWillsHandler2("No")}
                                      onChange={handleChange}
                                      checked={values.haveWillsradio2 === "No"}
                                    />
                                    <label
                                      htmlFor="haveWillsopt22"
                                      className="label2"
                                    >
                                      <span>NO</span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Do you own any funeral bonds?
                                </label>
                                {/* switch button style */}
                                <div className="form-check form-switch m-0 p-0 ">
                                  <div className="radiobutton">
                                    <input
                                      type="radio"
                                      name="funeralBondsradio2"
                                      id="funeralBondsopt12"
                                      onChange={handleChange}
                                      value="Yes"
                                      checked={
                                        values.funeralBondsradio2 === "Yes"
                                      }
                                    />
                                    <label
                                      htmlFor="funeralBondsopt12"
                                      className="label1"
                                    >
                                      <span>YES</span>
                                    </label>
                                    <input
                                      type="radio"
                                      name="funeralBondsradio2"
                                      id="funeralBondsopt22"
                                      onChange={handleChange}
                                      value="No"
                                      checked={
                                        values.funeralBondsradio2 === "No"
                                      }
                                    />
                                    <label
                                      htmlFor="funeralBondsopt22"
                                      className="label2"
                                    >
                                      <span>NO</span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {haveWills2 && (
                            <div>
                              {/* dates row*/}
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="datePrepared2"
                                      className="form-label"
                                    >
                                      Date Prepared 2nd
                                    </label>
                                    <div>
                                      <DatePicker
                                        className="form-control inputDesign shadow"
                                        showIcon
                                        id="datePrepared2"
                                        name="datePrepared2"
                                        selected={values.datePrepared2}
                                        onChange={(date) =>
                                          setFieldValue("datePrepared2", date)
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
                                      component="div"
                                      className="text-danger fw-bold"
                                      name="datePrepared2"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="lastReviewed2"
                                      className="form-label"
                                    >
                                      Date last reviewed{" "}
                                    </label>
                                    <div>
                                      <DatePicker
                                        className="form-control inputDesign shadow"
                                        showIcon
                                        id="lastReviewed2"
                                        name="lastReviewed2"
                                        selected={values.lastReviewed2}
                                        onChange={(date) =>
                                          setFieldValue("lastReviewed2", date)
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
                                      component="div"
                                      className="text-danger fw-bold"
                                      name="lastReviewed2"
                                    />
                                  </div>
                                </div>
                              </div>
                              {/* dates row */}

                              <div className="row">
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="LocationOfWill2"
                                      className="form-label"
                                    >
                                      Location of Will
                                    </label>
                                    <Field
                                      type="text"
                                      className="form-control shadow inputDesign"
                                      id="LocationOfWill2"
                                      name="LocationOfWill2"
                                      placeholder="Location of Will"
                                    />
                                    <ErrorMessage
                                      name="LocationOfWill2"
                                      component="div"
                                      className="text-danger fw-bold"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label className="form-label">
                                      Does your Will allow for a testamentary
                                      trust?
                                    </label>
                                    {/* switch button style */}
                                    <div className="form-check form-switch m-0 p-0 ">
                                      <div className="radiobutton">
                                        <input
                                          type="radio"
                                          name="allowTestamentaryradio2"
                                          id="allowTestamentaryopt12"
                                          onChange={handleChange}
                                          value="Yes"
                                          checked={
                                            values.allowTestamentaryradio2 ===
                                            "Yes"
                                          }
                                        />
                                        <label
                                          htmlFor="allowTestamentaryopt12"
                                          className="label1"
                                        >
                                          <span>YES</span>
                                        </label>
                                        <input
                                          type="radio"
                                          name="allowTestamentaryradio2"
                                          id="allowTestamentaryopt22"
                                          onChange={handleChange}
                                          value="No"
                                          checked={
                                            values.allowTestamentaryradio2 ===
                                            "No"
                                          }
                                        />
                                        <label
                                          htmlFor="allowTestamentaryopt22"
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
                                      htmlFor="Executor2"
                                      className="form-label"
                                    >
                                      Executor2/s
                                    </label>
                                    <Field
                                      type="text"
                                      className="form-control shadow inputDesign"
                                      id="Executor2"
                                      name="Executor2"
                                      placeholder="Executor2/s"
                                    />
                                    <ErrorMessage
                                      name="Executor2"
                                      component="div"
                                      className="text-danger fw-bold"
                                    />
                                  </div>
                                </div>

                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label className="form-label">
                                      Does it reflect your current wishes?
                                    </label>
                                    {/* switch button style */}
                                    <div className="form-check form-switch m-0 p-0 ">
                                      <div className="radiobutton">
                                        <input
                                          type="radio"
                                          name="reflectCurrentWishesradio2"
                                          id="reflectCurrentWishesopt12"
                                          value="Yes"
                                          //  onClick={()=>ownFamilyHandler("Yes")}
                                          onChange={handleChange}
                                          checked={
                                            values.reflectCurrentWishesradio2 ===
                                            "Yes"
                                          }
                                        />
                                        <label
                                          htmlFor="reflectCurrentWishesopt12"
                                          className="label1"
                                        >
                                          <span>YES</span>
                                        </label>
                                        <input
                                          type="radio"
                                          name="reflectCurrentWishesradio2"
                                          id="reflectCurrentWishesopt22"
                                          value="No"
                                          //  onClick={()=>ownFamilyHandler("No")}
                                          onChange={handleChange}
                                          checked={
                                            values.reflectCurrentWishesradio2 ===
                                            "No"
                                          }
                                        />
                                        <label
                                          htmlFor="reflectCurrentWishesopt22"
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
                          )}
                          <div className="row">
                            <div className="col-md-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Do you have any specific estate planning
                                  requirements/needs?
                                </label>
                                {/* switch button style */}
                                <div className="form-check form-switch m-0 p-0 ">
                                  <div className="radiobutton">
                                    <input
                                      type="radio"
                                      name="specificEstatePlanningradio2"
                                      id="specificEstatePlanningopt12"
                                      onChange={handleChange}
                                      value="Yes"
                                      onClick={() =>
                                        estatePlanningHandler2("Yes")
                                      }
                                      checked={
                                        values.specificEstatePlanningradio2 ===
                                        "Yes"
                                      }
                                    />
                                    <label
                                      htmlFor="specificEstatePlanningopt12"
                                      className="label1"
                                    >
                                      <span>YES</span>
                                    </label>
                                    <input
                                      type="radio"
                                      name="specificEstatePlanningradio2"
                                      id="specificEstatePlanningopt22"
                                      onChange={handleChange}
                                      value="No"
                                      onClick={() =>
                                        estatePlanningHandler2("No")
                                      }
                                      checked={
                                        values.specificEstatePlanningradio2 ===
                                        "No"
                                      }
                                    />
                                    <label
                                      htmlFor="specificEstatePlanningopt22"
                                      className="label2"
                                    >
                                      <span>NO</span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              {estatePlanning2 && (
                                <div className="mb-3">
                                  <label
                                    htmlFor="details"
                                    className="form-label"
                                  >
                                    Please enter details below
                                  </label>
                                  <Field
                                    type="text"
                                    className="form-control shadow inputDesign"
                                    id="estatePlanningDetails2"
                                    name="estatePlanningDetails2"
                                    placeholder="Details"
                                  />
                                  <ErrorMessage
                                    name="estatePlanningDetails2"
                                    component="div"
                                    className="text-danger fw-bold"
                                  />
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Do you have any POA?
                                </label>
                                {/* switch button style */}
                                <div className="form-check form-switch m-0 p-0 ">
                                  <div className="radiobutton">
                                    <input
                                      type="radio"
                                      name="POAradio2"
                                      id="POAopt12"
                                      value="Yes"
                                      onClick={() => POAHandler2("Yes")}
                                      onChange={handleChange}
                                      checked={values.POAradio2 === "Yes"}
                                    />
                                    <label
                                      htmlFor="POAopt12"
                                      className="label1"
                                    >
                                      <span>YES</span>
                                    </label>
                                    <input
                                      type="radio"
                                      name="POAradio2"
                                      id="POAopt22"
                                      value="No"
                                      onClick={() => POAHandler2("No")}
                                      onChange={handleChange}
                                      checked={values.POAradio2 === "No"}
                                    />
                                    <label
                                      htmlFor="POAopt22"
                                      className="label2"
                                    >
                                      <span>NO</span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {POA2 && (
                              <div className="col-md-6">
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

                          {/* Modal  Do you have any POA?*/}
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
                                Power of Attorney Details
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
                                PartnerEstatePlanningFlag
                                  ? PartnerPOAListUpdate[0]
                                  : POA_initialValues2
                              }
                              validationSchema={POA_validationSchema2}
                              onSubmit={POA_onSubmit2}
                            >
                              {({
                                values,
                                handleChange,
                                setFieldValue,
                                formik,
                              }) => (
                                <Form>
                                  <Modal.Body>
                                    {/* Personal Assets Details*/}

                                    <div className="">
                                      {/* Row 1*/}

                                      <input type="hidden" name="_id" />

                                      <div className="row">
                                        <div className="col-md-6">
                                          <div className="mb-3">
                                            <label
                                              htmlFor="PowerofAttorney2"
                                              className="form-label"
                                            >
                                              Type of Power of Attorney
                                            </label>
                                            <Field
                                              as="select"
                                              id="PowerofAttorney2"
                                              className="form-select shadow  inputDesign"
                                              name="PowerofAttorney2"
                                            >
                                              <option value="">Select</option>
                                              <option value="Enduring">
                                                Enduring
                                              </option>
                                              <option value="Medical">
                                                Medical
                                              </option>
                                              <option value="Limited">
                                                Limited
                                              </option>
                                              <option value="OtherFinancial">
                                                OtherFinancial
                                              </option>
                                            </Field>
                                            <ErrorMessage
                                              className="text-danger fw-bold"
                                              component="div"
                                              name="PowerofAttorney2"
                                            />
                                          </div>
                                        </div>

                                        <div className="col-md-6">
                                          <div className="mb-3">
                                            <label
                                              htmlFor="datelastReviewed2"
                                              className="form-label"
                                            >
                                              Date last reviewed
                                            </label>
                                            <div>
                                              <DatePicker
                                                className="form-control inputDesign shadow"
                                                showIcon
                                                id="datelastReviewed2"
                                                name="datelastReviewed2"
                                                selected={
                                                  values.datelastReviewed2
                                                }
                                                onChange={(date) =>
                                                  setFieldValue(
                                                    "datelastReviewed2",
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
                                              name="datelastReviewed2"
                                            />
                                          </div>
                                        </div>

                                        {/* Row 1*/}

                                        {/* Row 2*/}
                                        {values.PowerofAttorney2 ===
                                          "OtherFinancial" && (
                                          <div className="col-md-6">
                                            <div className="mb-3">
                                              <label
                                                htmlFor="OtherDescription2"
                                                className="form-label"
                                              >
                                                Other Description
                                              </label>
                                              <Field
                                                type="text"
                                                className="form-control shadow inputDesign"
                                                id="OtherDescription2"
                                                name="OtherDescription2"
                                                placeholder="Other Description"
                                              />
                                              <ErrorMessage
                                                component="div"
                                                className="text-danger fw-bold"
                                                name="OtherDescription2"
                                              />
                                            </div>
                                          </div>
                                        )}

                                        <div className="col-md-6">
                                          <div className="mb-3">
                                            <label
                                              htmlFor="locationOfPOA2"
                                              className="form-label"
                                            >
                                              Location of POA
                                            </label>
                                            <Field
                                              type="text"
                                              className="form-control shadow inputDesign"
                                              id="locationOfPOA2"
                                              name="locationOfPOA2"
                                            />
                                            <ErrorMessage
                                              component="div"
                                              className="text-danger fw-bold"
                                              name="locationOfPOA2"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      {/* Row 2*/}

                                      <div className="row">
                                        <div className="col-md-6">
                                          <div className="mb-3">
                                            <label
                                              htmlFor="POA12"
                                              className="form-label"
                                            >
                                              POA #1
                                            </label>
                                            <Field
                                              type="text"
                                              className="form-control shadow inputDesign"
                                              id="POA12"
                                              name="POA12"
                                              placeholder="POA #1"
                                            />
                                            <ErrorMessage
                                              component="div"
                                              className="text-danger fw-bold"
                                              name="POA12"
                                            />
                                          </div>
                                        </div>

                                        <div className="col-md-6">
                                          <div className="mb-3">
                                            <label
                                              htmlFor="Relationship12"
                                              className="form-label"
                                            >
                                              Relationship #1
                                            </label>
                                            <Field
                                              type="text"
                                              className="form-control shadow inputDesign"
                                              id="Relationship12"
                                              name="Relationship12"
                                              placeholder="Relationship #1"
                                            />
                                            <ErrorMessage
                                              component="div"
                                              className="text-danger fw-bold"
                                              name="Relationship12"
                                            />
                                          </div>
                                        </div>
                                      </div>

                                      <div className="row">
                                        <div className="col-md-6">
                                          <div className="mb-3">
                                            <label
                                              htmlFor="POA22"
                                              className="form-label"
                                            >
                                              POA #2
                                            </label>
                                            <Field
                                              type="text"
                                              className="form-control shadow inputDesign"
                                              id="POA2"
                                              name="POA22"
                                              placeholder="POA #2"
                                            />
                                            <ErrorMessage
                                              component="div"
                                              className="text-danger fw-bold"
                                              name="POA22"
                                            />
                                          </div>
                                        </div>

                                        <div className="col-md-6">
                                          <div className="mb-3">
                                            <label
                                              htmlFor="Relationship22"
                                              className="form-label"
                                            >
                                              Relationship #2
                                            </label>
                                            <Field
                                              type="text"
                                              className="form-control shadow inputDesign"
                                              id="Relationship22"
                                              name="Relationship22"
                                              placeholder="Relationship #2"
                                            />
                                            <ErrorMessage
                                              component="div"
                                              className="text-danger fw-bold"
                                              name="Relationship22"
                                            />
                                          </div>
                                        </div>
                                      </div>

                                      <div className="row">
                                        <div className="col-md-6">
                                          <div className="mb-3">
                                            <label
                                              htmlFor="POA32"
                                              className="form-label"
                                            >
                                              POA #3
                                            </label>
                                            <Field
                                              type="text"
                                              className="form-control shadow inputDesign"
                                              id="POA32"
                                              name="POA32"
                                              placeholder="POA #3"
                                            />
                                            <ErrorMessage
                                              component="div"
                                              className="text-danger fw-bold"
                                              name="POA32"
                                            />
                                          </div>
                                        </div>

                                        <div className="col-md-6">
                                          <div className="mb-3">
                                            <label
                                              htmlFor="Relationship32"
                                              className="form-label"
                                            >
                                              Relationship #3
                                            </label>
                                            <Field
                                              type="text"
                                              className="form-control shadow inputDesign"
                                              id="Relationship32"
                                              name="Relationship32"
                                              placeholder="Relationship #3"
                                            />
                                            <ErrorMessage
                                              component="div"
                                              className="text-danger fw-bold"
                                              name="Relationship32"
                                            />
                                          </div>
                                        </div>
                                      </div>

                                      <div className="row">
                                        <div className="col-md-6">
                                          <div className="mb-3">
                                            <label
                                              htmlFor="POA42"
                                              className="form-label"
                                            >
                                              POA #4
                                            </label>
                                            <Field
                                              type="text"
                                              className="form-control shadow inputDesign"
                                              id="POA42"
                                              name="POA42"
                                              placeholder="POA #4"
                                            />
                                            <ErrorMessage
                                              component="div"
                                              className="text-danger fw-bold"
                                              name="POA42"
                                            />
                                          </div>
                                        </div>

                                        <div className="col-md-6">
                                          <div className="mb-3">
                                            <label
                                              htmlFor="Relationship42"
                                              className="form-label"
                                            >
                                              Relationship #4
                                            </label>
                                            <Field
                                              type="text"
                                              className="form-control shadow inputDesign"
                                              id="Relationship42"
                                              name="Relationship42"
                                              placeholder="Relationship #4"
                                            />
                                            <ErrorMessage
                                              component="div"
                                              className="text-danger fw-bold"
                                              name="Relationship42"
                                            />
                                          </div>
                                        </div>
                                      </div>

                                      <div className="row">
                                        <div className="col-md-6">
                                          <div className="mb-3">
                                            <label
                                              htmlFor="POA52"
                                              className="form-label"
                                            >
                                              POA #5
                                            </label>
                                            <Field
                                              type="text"
                                              className="form-control shadow inputDesign"
                                              id="POA52"
                                              name="POA52"
                                              placeholder="POA #5"
                                            />
                                            <ErrorMessage
                                              component="div"
                                              className="text-danger fw-bold"
                                              name="POA52"
                                            />
                                          </div>
                                        </div>

                                        <div className="col-md-6">
                                          <div className="mb-3">
                                            <label
                                              htmlFor="Relationship52"
                                              className="form-label"
                                            >
                                              Relationship #5
                                            </label>
                                            <Field
                                              type="text"
                                              className="form-control shadow inputDesign"
                                              id="Relationship52"
                                              name="Relationship52"
                                              placeholder="Relationship #5"
                                            />
                                            <ErrorMessage
                                              component="div"
                                              className="text-danger fw-bold"
                                              name="Relationship52"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
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

                          {/* Modal Do you have any POA?*/}

                          {/*Table2 */}

                          <div className="table-responsive my-3">
                            <table className="table table-bordered table-hover text-center">
                              <thead className="text-light" id="tableHead">
                                <tr>
                                  <th>POA Type</th>
                                  <th>Name of POA</th>
                                  <th>Operations</th>
                                </tr>
                              </thead>

                              <tbody>
                                {/* ClientPOAList  */}
                                {ClientPOAList2.map((elem, index) => {
                                  let { POA_Type } = elem
                                  if (ClientPOAList2[0].POA_Type !== "") {
                                    return (
                                      <tr key={index}>
                                        <td className="fw-bold">{POA_Type}</td>
                                        <td>
                                          <ol className="list-group list-group-numbered">
                                            <li className="list-group-item m-0 p-0 border-0">
                                              {elem.POA_1}
                                            </li>
                                            <li className="list-group-item m-0 p-0 border-0">
                                              {elem.POA_2}
                                            </li>
                                            <li className="list-group-item m-0 p-0 border-0">
                                              {elem.POA_3}
                                            </li>
                                            <li className="list-group-item m-0 p-0 border-0">
                                              {elem.POA_4}
                                            </li>
                                            <li className="list-group-item m-0 p-0 border-0">
                                              {elem.POA_5}
                                            </li>
                                          </ol>
                                        </td>
                                        <td>
                                          <button
                                            type="button"
                                            className="btn btn-danger btn-sm"
                                            onClick={(e) => {
                                              PartnerDeleteHandel(elem, index)
                                            }}
                                          >
                                            delete
                                          </button>
                                          <button
                                            type="button"
                                            className="btn btn-warning btn-sm mx-2"
                                            onClick={(e) => {
                                              PartnerEstatePlanningUpdate(
                                                elem,
                                                index
                                              )
                                            }}
                                          >
                                            update
                                          </button>
                                        </td>
                                      </tr>
                                    )
                                  } else {
                                  }
                                })}
                                {/* ClientPOAList */}
                              </tbody>
                            </table>
                          </div>

                          {/*Table2 */}
                        </div>
                      )}
                      {/* partner planninng */}
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
        </div>
      </div>
    </>
  )
}

export default EstatePlanning_Edit;
