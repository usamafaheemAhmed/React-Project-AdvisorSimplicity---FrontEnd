import React, { useState, useEffect } from 'react';
import Modal from "react-bootstrap/Modal";
import * as Yup from 'yup';
import 'yup-phone';
import plus from "./images/plus.svg"
import notebook from './images/notebook.svg';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from 'react-router-dom';

const EstatePlanning = () => {
    const [POA, setPOA] = useState(false)
    const [POA2, setPOA2] = useState(false)
    

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    const [haveWills, setHaveWills] = useState(false)
    const [haveWills2, setHaveWills2] = useState(false)
    const [estatePlanning, setEstatePlanning] = useState(false)
    const [estatePlanning2, setEstatePlanning2] = useState(false)
    const [isPartnered, setIsPartnered] = useState()

    let partner= window.localStorage.getItem("partner");
    useEffect(() => {
      if(partner=="true"){
        setIsPartnered(true)
      
      }
      else{
        setIsPartnered(false)
     
      }
      
       }, [])


    let estatePlanningHandler=(elem)=>{
      if (elem==="No"){
        setEstatePlanning(false)
      }
      else{
        setEstatePlanning(true)
      }
      
      }

      let estatePlanningHandler2=(elem)=>{
        if (elem==="No"){
          setEstatePlanning2(false)
        }
        else{
          setEstatePlanning2(true)
        }
        
        }



    let haveWillsHandler=(elem)=>{
      if (elem==="No"){
        setHaveWills(false)
      }
      else{
        setHaveWills(true)
      }
      
      }

      let haveWillsHandler2=(elem)=>{
        if (elem==="No"){
          setHaveWills2(false)
        }
        else{
          setHaveWills2(true)
        }
        
        }

    let POAHandler2=(elem)=>{
        if (elem==="No"){
            setPOA2(false)
        }
        else{
            setPOA2(true)
        }
        
        }


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let POAHandler=(elem)=>{
        if (elem==="No"){
            setPOA(false)
        }
        else{
            setPOA(true)
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
    let initialValues={
        haveWillsradio:'No',
        reflectCurrentWishesradio:'No',
        datePrepared:'',
        lastReviewed:'',
        LocationOfWill:'',
        allowTestamentaryradio:'No',
        funeralBondsradio:'No',
        Executor:'',
        specificEstatePlanningradio:'No',
        POAradio:'No',
        estatePlanningDetails:'',

        // partner estate planning

        haveWillsradio2:'No',
        reflectCurrentWishesradio2:'No',
        datePrepared2:'',
        lastReviewed2:'',
        LocationOfWill2:'',
        allowTestamentaryradio2:'No',
        funeralBondsradio2:'No',
        Executor2:'',
        estatePlanningDetails2:'',
        specificEstatePlanningradio2:'No',
        POAradio2:'No',


    }
    let validationSchema = Yup.object({

      LocationOfWill:Yup.string()
      .when("haveWillsradio",{
      is:(val)=> val && val.length ==3,
      then:Yup.string().required("Required")
      ,otherwise: Yup.string()
      .notRequired()
       }),

       Executor:Yup.string()
      .when("haveWillsradio",{
      is:(val)=> val && val.length ==3,
      then:Yup.string().required("Required")
       }),

       datePrepared:Yup.date()
       .when("haveWillsradio",{
       is:(val)=> val && val.length ==3,
       then:Yup.date().required('Required').nullable()
        }),
        lastReviewed:Yup.date()
        .when("haveWillsradio",{
        is:(val)=> val && val.length ==3,
        then:Yup.date().required("Required").nullable()
         }),

         estatePlanningDetails:Yup.string()
         .when("specificEstatePlanningradio",
         {
         is:(val)=> val && val.length ==3,
         then:Yup.string().required("Required")
         ,otherwise: Yup.string()
         .notRequired()
          }),
        // estatePlanningDetails:Yup.string().required("Required"),
      
     

// partner estate planning
LocationOfWill2:Yup.string()
.when("haveWillsradio2",{
is:(val)=> val && val.length ==3,
then:Yup.string().required("Required")
 }),

 Executor2:Yup.string()
.when("haveWillsradio2",{
is:(val)=> val && val.length ==3,
then:Yup.string().required("Required")
 }),

 datePrepared2:Yup.date()
 .when("haveWillsradio2",{
 is:(val)=> val && val.length ==3,
 then:Yup.date().required("Required").nullable()
  }),
  lastReviewed2:Yup.date()
  .when("haveWillsradio2",{
  is:(val)=> val && val.length ==3,
  then:Yup.date().required("Required").nullable()
   }),

   estatePlanningDetails2:Yup.string()
   .when("specificEstatePlanningradio2",{
   is:(val)=> val && val.length ==3,
   then:Yup.string().required("Required")
    }),



    })

    let client_validationSchema = Yup.object({

      LocationOfWill:Yup.string()
      .when("haveWillsradio",{
      is:(val)=> val && val.length ==3,
      then:Yup.string().required("Required")
      ,otherwise: Yup.string()
      .notRequired()
       }),

       Executor:Yup.string()
      .when("haveWillsradio",{
      is:(val)=> val && val.length ==3,
      then:Yup.string().required("Required")
       }),

       datePrepared:Yup.date()
       .when("haveWillsradio",{
       is:(val)=> val && val.length ==3,
       then:Yup.date().required('Required').nullable()
        }),
        lastReviewed:Yup.date()
        .when("haveWillsradio",{
        is:(val)=> val && val.length ==3,
        then:Yup.date().required("Required").nullable()
         }),

         estatePlanningDetails:Yup.string()
         .when("specificEstatePlanningradio",
         {
         is:(val)=> val && val.length ==3,
         then:Yup.string().required("Required")
         ,otherwise: Yup.string()
         .notRequired()
          }),
       
      
     
    })
    

    let Navigate = useNavigate();
            function BackFunction(){
              Navigate('/Investments')
            }
    let onSubmit = (values) => {

    let clientPartnerData={
      A:values.haveWillsradio,
      B:values.reflectCurrentWishesradio,
      cA:values.datePrepared,
      dA:values.lastReviewed,
      eA:values.LocationOfWill,
      fA:values.allowTestamentaryradio,
      gA:values.funeralBondsradio,
      hA:values.Executor,
      iA:values.specificEstatePlanningradio,
      jA:values.POAradio,
      kA:values.estatePlanningDetails,

      // partner estate planning

      Adfg:values.haveWillsradio2,
      cvbA:values.reflectCurrentWishesradio2,
      tyA:values.datePrepared2,
      Aew:values.lastReviewed2,
      ewwA:values.LocationOfWill2,
      wewA:values.allowTestamentaryradio2,
      ewA:values.funeralBondsradio2,
      dsA:values.Executor2,
      A:values.estatePlanningDetails2,
      asA:values.specificEstatePlanningradio2,
      sA:values.POAradio2,


    }

    let clientData={
      A:values.haveWillsradio,
      B:values.reflectCurrentWishesradio,
      cA:values.datePrepared,
      dA:values.lastReviewed,
      eA:values.LocationOfWill,
      fA:values.allowTestamentaryradio,
      gA:values.funeralBondsradio,
      hA:values.Executor,
      iA:values.specificEstatePlanningradio,
      jA:values.POAradio,
      kA:values.estatePlanningDetails,
    }

    if(isPartnered===true){
    console.log(clientPartnerData)
      
      
        }
        else{
        
          console.log(clientData)

        }

        Navigate('/Super-And-Retirment')
    
    }

    let POA_initialValues={
      PowerofAttorney:'',
      dateLastReviewed:'',
      OtherDescription:'',
      locationOfPOA:'',
      POA1:'',
      Relationship1:'',
      POA2:'',
      Relationship2:'',
      POA3:'',
      Relationship3:'',
      POA4:'',
      Relationship4:'',
      POA5:'',
      Relationship5:'',
    }
    let POA_validationSchema = Yup.object({
      PowerofAttorney:Yup.string().required("Required"),
      dateLastReviewed:Yup.date().required("Requitred").nullable(),

      
 
      OtherDescription:Yup.string()
  .when('PowerofAttorney',{
    is: val => val && val.length ==14,
    then:Yup.string().required("Required"),
    otherwise: Yup.string().notRequired()
  }),
      locationOfPOA:Yup.string().required("Required"),
      POA1:Yup.string().required("Required"),
      Relationship1:Yup.string().required("Required"),
      POA2:Yup.string().required("Required"),
      Relationship2:Yup.string().required("Required"),
      POA3:Yup.string().required("Required"),
      Relationship3:Yup.string().required("Required"),
      POA4:Yup.string().required("Required"),
      Relationship4:Yup.string().required("Required"),
      POA5:Yup.string().required("Required"),
      Relationship5:Yup.string().required("Required"),
    })


    let POA_onSubmit = (Values) => {
        console.log(Values)
        
        }

        let POA_initialValues2={
          PowerofAttorney2:'',
          datelastReviewed2:'',
          OtherDescription2:'',
          locationOfPOA2:'',
          POA12:'',
          Relationship12:'',
          POA22:'', 
          Relationship22:'',
          POA32:'',
          Relationship32:'',
          POA42:'',
          Relationship42:'',
          POA52:'',
          Relationship52:'',
        }
        let POA_validationSchema2 = Yup.object({
          PowerofAttorney2:Yup.string().required("Required"),
          datelastReviewed2:Yup.date().required("Requitred").nullable(),
          // OtherDescription2:Yup.string().required("Required"),

          OtherDescription2:Yup.string()
          .when('PowerofAttorney2',{
            is: val => val && val.length ==14,
            then:Yup.string().required("Required"),
            otherwise: Yup.string().notRequired()
          }),
          locationOfPOA2:Yup.string().required("Required"),
          POA12:Yup.string().required("Required"),
          Relationship12:Yup.string().required("Required"),
          POA22:Yup.string().required("Required"),
          Relationship22:Yup.string().required("Required"),
          POA32:Yup.string().required("Required"),
          Relationship32:Yup.string().required("Required"),
          POA42:Yup.string().required("Required"),
          Relationship42:Yup.string().required("Required"),
          POA52:Yup.string().required("Required"),
          Relationship52:Yup.string().required("Required"),
        })
    
    
        let POA_onSubmit2 = (Values) => {
            console.log(Values)
            
            }

            
  return (
    <>
       <div className="container-fluid">
             <div className="row px-0 m-0">
                 <div className="col-md-12">
                     <div className='shadow py-4 px-4 my-5'>
                         <div>
                              <h3 className="text-center">Estate Planning</h3>

                    <Formik 
                        initialValues={initialValues}
                        validationSchema={isPartnered ? validationSchema : client_validationSchema}
                        onSubmit={onSubmit}
                        >
                        {({values,handleChange,setFieldValue, handleBlur})=>
                            <Form>
                          {/* Client Estate Planning */}
                              <div> 
                              <h3>Client Estate Planning</h3>
                        <div className="row">
                         <div className="col-md-6">
                              <div className="mb-3">
                            <label  className="form-label">
                            Do you have any Wills?
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="haveWillsradio"
                             id="haveWillsopt1" value="Yes"
                             onClick={()=>haveWillsHandler("Yes")} 

                             onChange={handleChange}
                             checked={values.haveWillsradio==="Yes"}
                             />
                            <label htmlFor="haveWillsopt1" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="haveWillsradio"
                             id="haveWillsopt2" value="No"
                             onClick={()=>haveWillsHandler("No")} 
                            
                             onChange={handleChange}
                             checked={values.haveWillsradio==="No"}
                           />
                            <label htmlFor="haveWillsopt2" className="label2">
                              <span>NO</span>
                            </label>
                          </div>



                              
                            </div>
                              </div>    
                         </div>

                            <div className="col-md-6">
                              <div className="mb-3">
                            <label  className="form-label">
                            Do you own any funeral bonds?
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="funeralBondsradio" id="funeralBondsopt1"
                             onChange={handleChange} value="Yes"
                             checked={values.funeralBondsradio==="Yes"}  />
                            <label htmlFor="funeralBondsopt1" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="funeralBondsradio" id="funeralBondsopt2"
                             onChange={handleChange} value="No"
                             checked={values.funeralBondsradio==="No"}  />
                            <label htmlFor="funeralBondsopt2" className="label2">
                              <span>NO</span>
                            </label>
                          </div>
                            </div>
                              </div>    
                        </div>
                        </div>
                    {
                      haveWills &&
                      <div>

                          {/* dates row*/}
                          <div className="row">
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="datePrepared" className="form-label">Date Prepared 1st</   label>
                              <div>
                            
                            <DatePicker
                            className="form-control inputDesign shadow"
                            showIcon
                            id="datePrepared"
                            name="datePrepared"
                            selected={values.datePrepared}
                            onChange={date => setFieldValue('datePrepared', date)}
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
                      <ErrorMessage component='div' className="text-danger fw-bold"name="datePrepared" />

                            </div> 


                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="lastReviewed" className="form-label">Date last reviewed</   label>
                              <div>
                            
                            <DatePicker

                            className="form-control inputDesign shadow"
                            showIcon
                            id="lastReviewed"
                            name="lastReviewed"
                            selected={values.lastReviewed}
                            onChange={date => setFieldValue('lastReviewed', date)}
                            dateFormat="dd/MM/yyyy"
                            placeholderText="dd/mm/yyyy"
                            maxDate={new Date()}
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                          onBlur={handleBlur}

                            />
                           
                             </div>
                      <ErrorMessage component='div' className="text-danger fw-bold"name="lastReviewed" />

                            </div> 


                            </div>
                              
                          </div>
                          {/* dates row */}

                          <div className="row">
                          <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="LocationOfWill" className="form-label">Location of Will</   label>
                          <Field type="text" className="form-control shadow inputDesign"
                           id="LocationOfWill"
                           name="LocationOfWill"
                            placeholder="Location of Will"/>
                            <ErrorMessage name="LocationOfWill" component="div" className="text-danger fw-bold"/>
                        </div>            
                        </div>
                        <div className="col-md-6">
                              <div className="mb-3">
                            <label  className="form-label">
                            Does your Will allow for a testamentary trust?
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="allowTestamentaryradio" id="allowTestamentaryopt1"
                             onChange={handleChange} value="Yes"
                             checked={values.allowTestamentaryradio==="Yes"}  />
                            <label htmlFor="allowTestamentaryopt1" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="allowTestamentaryradio" id="allowTestamentaryopt2"
                             onChange={handleChange} value="No"
                             checked={values.allowTestamentaryradio==="No"}  />
                            <label htmlFor="allowTestamentaryopt2" className="label2">
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
                          <label htmlFor="Executor" className="form-label">Executor/s</   label>
                          <Field type="text" className="form-control shadow inputDesign"
                           id="Executor"
                           name="Executor"
                            placeholder="Executor/s"/>
                            <ErrorMessage name="Executor" component="div" className="text-danger fw-bold"/>
                        </div>            
                        </div>
                        

                        <div className="col-md-6">
                              <div className="mb-3">
                            <label  className="form-label">
                            Does it reflect your current wishes?
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="reflectCurrentWishesradio"
                             id="reflectCurrentWishesopt1" value="Yes"
                            //  onClick={()=>ownFamilyHandler("Yes")} 
                             onChange={handleChange}
                             checked={values.reflectCurrentWishesradio==="Yes"}
                             />
                            <label htmlFor="reflectCurrentWishesopt1" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="reflectCurrentWishesradio"
                             id="reflectCurrentWishesopt2" value="No"
                            //  onClick={()=>ownFamilyHandler("No")} 
                             onChange={handleChange}
                             checked={values.reflectCurrentWishesradio==="No"}
                           />
                            <label htmlFor="reflectCurrentWishesopt2" className="label2">
                              <span>NO</span>
                            </label>
                          </div> 
                            </div>
                              </div>    
                         </div>
                        
                         </div>

                    </div>}



                         <div className="row">
                         
                        <div className="col-md-6">
                              <div className="mb-3">
                            <label  className="form-label">
                            Do you have any specific estate planning requirements/needs?
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="specificEstatePlanningradio" id="specificEstatePlanningopt1"
                             onChange={handleChange} value="Yes"
                             onClick={()=>estatePlanningHandler("Yes")} 

                             checked={values.specificEstatePlanningradio==="Yes"}  />
                            <label htmlFor="specificEstatePlanningopt1" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="specificEstatePlanningradio" id="specificEstatePlanningopt2"
                             onChange={handleChange} value="No"
                             onClick={()=>estatePlanningHandler("No")} 

                             checked={values.specificEstatePlanningradio==="No"}  />
                            <label htmlFor="specificEstatePlanningopt2" className="label2">
                              <span>NO</span>
                            </label>
                          </div>
                            </div>
                              </div>    
                        </div>
                        <div className="col-md-6">

                       {
                       estatePlanning &&
                       <div className="mb-3">
                          <label htmlFor="details" className="form-label">Please enter details below</   label>
                          <Field type="text" className="form-control shadow inputDesign"
                           id="estatePlanningDetails"
                           name="estatePlanningDetails"
                            placeholder="Details"/>
                            <ErrorMessage name="estatePlanningDetails" component="div" className="text-danger fw-bold"/>
                        </div>}            
                          </div>
                        
                         </div>

                         <div className="row">
                         <div className="col-md-6">
                              <div className="mb-3">
                            <label  className="form-label">
                            Do you have any POA?
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="POAradio"
                             id="POAopt1" value="Yes"
                             onClick={()=>POAHandler("Yes")} 
                             onChange={handleChange}
                             checked={values.POAradio==="Yes"}
                             />
                            <label htmlFor="POAopt1" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="POAradio"
                             id="POAopt2" value="No"
                             onClick={()=>POAHandler("No")} 
                             onChange={handleChange}
                             checked={values.POAradio==="No"}
                           />
                            <label htmlFor="POAopt2" className="label2">
                              <span>NO</span>
                            </label>
                          </div>



                              
                            </div>
                              </div>    
                        </div>
                        {
                         POA &&
                        <div className='col-md-6'>
                        <label  className="form-label">
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
                            <img className="img-fluid" src={notebook} alt="" />

                            </div>
                              </Modal.Title>
                            </Modal.Header>
                           <Formik
                            initialValues={POA_initialValues}
                            validationSchema={POA_validationSchema}
                            onSubmit={POA_onSubmit}
                            >
                          {({values,handleChange,setFieldValue,formik})=>
                            <Form>
                            <Modal.Body>
                                {/* Personal Assets Details*/}

                         <div className=''>

                        {/* Row 1*/}
                        <div className="row">
                   
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="PowerofAttorney" className="form-label">
                        Type of Power of Attorney
                        </label>
                        <Field
                        as='select'
                          id="PowerofAttorney"
                          className="form-select shadow  inputDesign"
                          name="PowerofAttorney"
                        >
                          <option value="">Select</option>
                          <option value="Enduring">Enduring</option>
                          <option value="Medical">Medical</option>
                          <option value="Limited">Limited</option>
                          <option value="OtherFinancial">OtherFinancial</option>
                        </Field>
                        <ErrorMessage className="text-danger fw-bold" component="div"   name="PowerofAttorney" />

                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="dateLastReviewed" className="form-label">
                        Date last reviewed 
                        </label>
                        <div>
                            
                            <DatePicker

                            className="form-control inputDesign shadow"
                            showIcon
                            id="dateLastReviewed"
                            name="dateLastReviewed"
                            selected={values.dateLastReviewed}
                            onChange={date => setFieldValue('dateLastReviewed', date)}
                            dateFormat="dd/MM/yyyy"
                            placeholderText="dd/mm/yyyy"
                            maxDate={new Date()}
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                            onBlur={handleBlur}

                            />
                           
                             </div>
                          <ErrorMessage className="text-danger fw-bold" component="div"   name="dateLastReviewed" />

                      </div>
                    </div>
                  </div>
                        {/* Row 1*/}

                        {/* Row 2*/}
                        <div className="row">

                       {
                       values.PowerofAttorney ==="OtherFinancial" &&
                       <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="OtherDescription" className="form-label">Other Description</   label>
                          <Field type="text" className="form-control shadow inputDesign"
                           id="OtherDescription" name='OtherDescription' placeholder="Other Description" />
                           <ErrorMessage component='div' className='text-danger fw-bold' name='OtherDescription' />
                        </div>            
                        </div>}

                         <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="locationOfPOA" className="form-label">Location of POA</   label>
                          <Field type="text" className="form-control shadow inputDesign" 
                          id="locationOfPOA" name='locationOfPOA'/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='locationOfPOA' />
                        </div>            
                         </div>

                        </div>
                        {/* Row 2*/}

                        
                        <div className="row">

                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="POA1" className="form-label">POA #1</   label>
                          <Field type="text" className="form-control shadow inputDesign"
                           id="POA1" name='POA1' placeholder="POA #1" />
                           <ErrorMessage component='div' className='text-danger fw-bold' name='POA1' />
                        </div>            
                        </div>

                         <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="Relationship1" className="form-label">Relationship #1</   label>
                          <Field type="text" className="form-control shadow inputDesign" 
                          id="Relationship1" name='Relationship1' placeholder="Relationship #1"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='Relationship1' />
                        </div>            
                         </div>

                        </div>

                        <div className="row">

                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="POA2" className="form-label">POA #2</   label>
                          <Field type="text" className="form-control shadow inputDesign"
                           id="POA2" name='POA2' placeholder="POA #2" />
                           <ErrorMessage component='div' className='text-danger fw-bold' name='POA2' />
                        </div>            
                        </div>

                         <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="Relationship2" className="form-label">Relationship #2</   label>
                          <Field type="text" className="form-control shadow inputDesign" 
                          id="Relationship2" name='Relationship2' placeholder="Relationship #2"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='Relationship2' />
                        </div>            
                         </div>

                        </div>

                        <div className="row">

                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="POA3" className="form-label">POA #3</   label>
                          <Field type="text" className="form-control shadow inputDesign"
                           id="POA3" name='POA3' placeholder="POA #3" />
                           <ErrorMessage component='div' className='text-danger fw-bold' name='POA3' />
                        </div>            
                        </div>

                         <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="Relationship3" className="form-label">Relationship #3</   label>
                          <Field type="text" className="form-control shadow inputDesign" 
                          id="Relationship3" name='Relationship3' placeholder="Relationship #3"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='Relationship3' />
                        </div>            
                         </div>

                        </div>

                        <div className="row">

                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="POA4" className="form-label">POA #4</   label>
                          <Field type="text" className="form-control shadow inputDesign"
                           id="POA4" name='POA4' placeholder="POA #4" />
                           <ErrorMessage component='div' className='text-danger fw-bold' name='POA4' />
                        </div>            
                        </div>

                         <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="Relationship4" className="form-label">Relationship #4</   label>
                          <Field type="text" className="form-control shadow inputDesign" 
                          id="Relationship4" name='Relationship4' placeholder="Relationship #4"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='Relationship4' />
                        </div>            
                         </div>

                        </div>

                        <div className="row">

                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="POA5" className="form-label">POA #5</   label>
                          <Field type="text" className="form-control shadow inputDesign"
                          id="POA5" name='POA5' placeholder="POA #5" />
                          <ErrorMessage component='div' className='text-danger fw-bold' name='POA5' />
                        </div>            
                        </div>

                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="Relationship5" className="form-label">Relationship #5</   label>
                          <Field type="text" className="form-control shadow inputDesign" 
                          id="Relationship5" name='Relationship5' placeholder="Relationship #5"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='Relationship5' />
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
                          {/* Modal Do you have any POA?*/}


                              </div>
                          {/* Client Estate Planning */}

                      {/* partner planninng */}
                     {
                     isPartnered && <div className='my-5'>
                      <h3>Partner Estate Planning</h3>

                        <div className="row">
                         <div className="col-md-6">
                              <div className="mb-3">
                            <label  className="form-label">
                            Do you have any Wills?
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="haveWillsradio2"
                             id="haveWillsopt12" value="Yes"
                             onClick={()=>haveWillsHandler2("Yes")} 
                           
                             onChange={handleChange}
                             checked={values.haveWillsradio2==="Yes"}
                             />
                            <label htmlFor="haveWillsopt12" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="haveWillsradio2"
                             id="haveWillsopt22" value="No"
                             onClick={()=>haveWillsHandler2("No")} 
                            
                             onChange={handleChange}
                             checked={values.haveWillsradio2==="No"}
                           />
                            <label htmlFor="haveWillsopt22" className="label2">
                              <span>NO</span>
                            </label>
                          </div>



                              
                            </div>
                              </div>    
                         </div>
                      <div className="col-md-6">
                          <div className="mb-3">
                            <label  className="form-label">
                            Do you own any funeral bonds?
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="funeralBondsradio2" id="funeralBondsopt12"
                             onChange={handleChange} value="Yes"
                             checked={values.funeralBondsradio2==="Yes"}  />
                            <label htmlFor="funeralBondsopt12" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="funeralBondsradio2" id="funeralBondsopt22"
                             onChange={handleChange} value="No"
                             checked={values.funeralBondsradio2==="No"}  />
                            <label htmlFor="funeralBondsopt22" className="label2">
                              <span>NO</span>
                            </label>
                          </div>
                            </div>
                              </div>    
                        </div>
                     


                        </div>
{
  // usama
  haveWills2 &&
  <div>
                          {/* dates row*/}
                          <div className="row">
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="datePrepared2" className="form-label">Date Prepared 2nd</   label>
                              <div>
                            
                            <DatePicker
                            className="form-control inputDesign shadow"
                            showIcon
                            id="datePrepared2"
                            name="datePrepared2"
                            selected={values.datePrepared2}
                            onChange={date => setFieldValue('datePrepared2', date)}
                            dateFormat="dd/MM/yyyy"
                            placeholderText="dd/mm/yyyy"
                            maxDate={new Date()}
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                            onBlur={handleBlur}
                          

                            />
                          
                             </div>
                      <ErrorMessage component='div' className="text-danger fw-bold"name="datePrepared2" />

                            </div> 


                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="lastReviewed2" className="form-label">Date last reviewed</   label>
                              <div>
                            
                            <DatePicker

                            className="form-control inputDesign shadow"
                            showIcon
                            id="lastReviewed2"
                            name="lastReviewed2"
                            selected={values.lastReviewed2}
                            onChange={date => setFieldValue('lastReviewed2', date)}
                            dateFormat="dd/MM/yyyy"
                            placeholderText="dd/mm/yyyy"
                            maxDate={new Date()}
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                          onBlur={handleBlur}

                            />
                           
                             </div>
                      <ErrorMessage component='div' className="text-danger fw-bold"name="lastReviewed2" />

                            </div> 


                            </div>
                              
                          </div>
                          {/* dates row */}

                          <div className="row">
                          <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="LocationOfWill2" className="form-label">Location of Will</   label>
                          <Field type="text" className="form-control shadow inputDesign"
                           id="LocationOfWill2"
                           name="LocationOfWill2"
                            placeholder="Location of Will"/>
                            <ErrorMessage name="LocationOfWill2" component="div" className="text-danger fw-bold"/>
                        </div>            
                        </div>
                        <div className="col-md-6">
                              <div className="mb-3">
                            <label  className="form-label">
                            Does your Will allow for a testamentary trust?
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="allowTestamentaryradio2" id="allowTestamentaryopt12"
                             onChange={handleChange} value="Yes"
                             checked={values.allowTestamentaryradio2==="Yes"}  />
                            <label htmlFor="allowTestamentaryopt12" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="allowTestamentaryradio2" id="allowTestamentaryopt22"
                             onChange={handleChange} value="No"
                             checked={values.allowTestamentaryradio2==="No"}  />
                            <label htmlFor="allowTestamentaryopt22" className="label2">
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
                          <label htmlFor="Executor2" className="form-label">Executor2/s</   label>
                          <Field type="text" className="form-control shadow inputDesign"
                           id="Executor2"
                           name="Executor2"
                            placeholder="Executor2/s"/>
                            <ErrorMessage name="Executor2" component="div" className="text-danger fw-bold"/>
                        </div>            
                        </div>
                       

                        <div className="col-md-6">
                              <div className="mb-3">
                            <label  className="form-label">
                            Does it reflect your current wishes?
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="reflectCurrentWishesradio2"
                             id="reflectCurrentWishesopt12" value="Yes"
                            //  onClick={()=>ownFamilyHandler("Yes")} 
                             onChange={handleChange}
                             checked={values.reflectCurrentWishesradio2==="Yes"}
                             />
                            <label htmlFor="reflectCurrentWishesopt12" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="reflectCurrentWishesradio2"
                             id="reflectCurrentWishesopt22" value="No"
                            //  onClick={()=>ownFamilyHandler("No")} 
                             onChange={handleChange}
                             checked={values.reflectCurrentWishesradio2==="No"}
                           />
                            <label htmlFor="reflectCurrentWishesopt22" className="label2">
                              <span>NO</span>
                            </label>
                          </div> 
                            </div>
                              </div>    
                         </div>
                        
                         </div>
                         </div>
}
                         <div className="row">
                         
                        <div className="col-md-6">
                              <div className="mb-3">
                            <label  className="form-label">
                            Do you have any specific estate planning requirements/needs?
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="specificEstatePlanningradio2" id="specificEstatePlanningopt12"
                             onChange={handleChange} value="Yes"
                             onClick={()=>estatePlanningHandler2("Yes")} 
                             
                             checked={values.specificEstatePlanningradio2==="Yes"}  />
                            <label htmlFor="specificEstatePlanningopt12" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="specificEstatePlanningradio2" id="specificEstatePlanningopt22"
                             onChange={handleChange} value="No"
                             onClick={()=>estatePlanningHandler2("No")} 

                             checked={values.specificEstatePlanningradio2==="No"}  />
                            <label htmlFor="specificEstatePlanningopt22" className="label2">
                              <span>NO</span>
                            </label>
                          </div>
                            </div>
                              </div>    
                        </div>
                        <div className="col-md-6">
                       {
                       estatePlanning2 &&
                       <div className="mb-3">
                          <label htmlFor="details" className="form-label">Please enter details below</   label>
                          <Field type="text" className="form-control shadow inputDesign"
                           id="estatePlanningDetails2"
                           name="estatePlanningDetails2"
                            placeholder="Details"/>
                            <ErrorMessage name="estatePlanningDetails2" component="div" className="text-danger fw-bold"/>
                        </div> }           
                          </div>
                        
                         </div>

                         <div className="row">
                         <div className="col-md-6">
                              <div className="mb-3">
                            <label  className="form-label">
                            Do you have any POA?
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="POAradio2"
                             id="POAopt12" value="Yes"
                             onClick={()=>POAHandler2("Yes")} 
                             onChange={handleChange}
                             checked={values.POAradio2==="Yes"}
                             />
                            <label htmlFor="POAopt12" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="POAradio2"
                             id="POAopt22" value="No"
                             onClick={()=>POAHandler2("No")} 
                             onChange={handleChange}
                             checked={values.POAradio2==="No"}
                           />
                            <label htmlFor="POAopt22" className="label2">
                              <span>NO</span>
                            </label>
                          </div>



                              
                            </div>
                              </div>    
                        </div>
                        {
                         POA2 &&
                        <div className='col-md-6'>
                        <label  className="form-label">
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
                            <img className="img-fluid" src={notebook} alt="" />

                            </div>
                              </Modal.Title>
                            </Modal.Header>
                           <Formik
                            initialValues={POA_initialValues2}
                            validationSchema={POA_validationSchema2}
                            onSubmit={POA_onSubmit2}
                            >
                          {({values,handleChange,setFieldValue,formik})=>
                            <Form>
                            <Modal.Body>
                                {/* Personal Assets Details*/}

                         <div className=''>

                        {/* Row 1*/}
                        <div className="row">
                   
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="PowerofAttorney2" className="form-label">
                        Type of Power of Attorney
                        </label>
                        <Field
                        as='select'
                          id="PowerofAttorney2"
                          className="form-select shadow  inputDesign"
                          name="PowerofAttorney2"
                        >
                          <option value="">Select</option>
                          <option value="Enduring">Enduring</option>
                          <option value="Medical">Medical</option>
                          <option value="Limited">Limited</option>
                          <option value="OtherFinancial">OtherFinancial</option>
                        </Field>
                        <ErrorMessage className="text-danger fw-bold" component="div"   name="PowerofAttorney2" />

                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="datelastReviewed2" className="form-label">
                        Date last reviewed
                        </label>
                        <div>
                            
                            <DatePicker

                            className="form-control inputDesign shadow"
                            showIcon
                            id="datelastReviewed2"
                            name="datelastReviewed2"
                            selected={values.datelastReviewed2}
                            onChange={date => setFieldValue('datelastReviewed2', date)}
                            dateFormat="dd/MM/yyyy"
                            placeholderText="dd/mm/yyyy"
                            maxDate={new Date()}
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                          onBlur={handleBlur}

                            />
                           
                             </div>
                          <ErrorMessage className="text-danger fw-bold" component="div"   name="datelastReviewed2" />

                      </div>
                    </div>
                  </div>
                        {/* Row 1*/}

                        {/* Row 2*/}
                        <div className="row">
                        <div className="col-md-6">
                  {values.PowerofAttorney2 ==="OtherFinancial" &&
                        <div className="mb-3">
                          <label htmlFor="OtherDescription2" className="form-label">Other Description</   label>
                          <Field type="text" className="form-control shadow inputDesign"
                           id="OtherDescription2" name='OtherDescription2' placeholder="Other Description" />
                           <ErrorMessage component='div' className='text-danger fw-bold' name='OtherDescription2' />
                        </div>    
                        }        
                        </div>

                         <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="locationOfPOA2" className="form-label">Location of POA</   label>
                          <Field type="text" className="form-control shadow inputDesign" 
                          id="locationOfPOA2" name='locationOfPOA2'/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='locationOfPOA2' />
                        </div>            
                         </div>

                        </div>
                        {/* Row 2*/}

                        
                        <div className="row">

                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="POA12" className="form-label">POA #1</   label>
                          <Field type="text" className="form-control shadow inputDesign"
                           id="POA12" name='POA12' placeholder="POA #1" />
                           <ErrorMessage component='div' className='text-danger fw-bold' name='POA12' />
                        </div>            
                        </div>

                         <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="Relationship12" className="form-label">Relationship #1</   label>
                          <Field type="text" className="form-control shadow inputDesign" 
                          id="Relationship12" name='Relationship12' placeholder="Relationship #1"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='Relationship12' />
                        </div>            
                         </div>

                        </div>

                        <div className="row">

                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="POA22" className="form-label">POA #2</   label>
                          <Field type="text" className="form-control shadow inputDesign"
                           id="POA2" name='POA22' placeholder="POA #2" />
                           <ErrorMessage component='div' className='text-danger fw-bold' name='POA22' />
                        </div>            
                        </div>

                         <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="Relationship22" className="form-label">Relationship #2</   label>
                          <Field type="text" className="form-control shadow inputDesign" 
                          id="Relationship22" name='Relationship22' placeholder="Relationship #2"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='Relationship22' />
                        </div>            
                         </div>

                        </div>

                        <div className="row">

                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="POA32" className="form-label">POA #3</   label>
                          <Field type="text" className="form-control shadow inputDesign"
                           id="POA32" name='POA32' placeholder="POA #3" />
                           <ErrorMessage component='div' className='text-danger fw-bold' name='POA32' />
                        </div>            
                        </div>

                         <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="Relationship32" className="form-label">Relationship #3</   label>
                          <Field type="text" className="form-control shadow inputDesign" 
                          id="Relationship32" name='Relationship32' placeholder="Relationship #3"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='Relationship32' />
                        </div>            
                         </div>

                        </div>

                        <div className="row">

                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="POA42" className="form-label">POA #4</   label>
                          <Field type="text" className="form-control shadow inputDesign"
                           id="POA42" name='POA42' placeholder="POA #4" />
                           <ErrorMessage component='div' className='text-danger fw-bold' name='POA42' />
                        </div>            
                        </div>

                         <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="Relationship42" className="form-label">Relationship #4</   label>
                          <Field type="text" className="form-control shadow inputDesign" 
                          id="Relationship42" name='Relationship42' placeholder="Relationship #4"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='Relationship42' />
                        </div>            
                         </div>

                        </div>

                        <div className="row">

                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="POA52" className="form-label">POA #5</   label>
                          <Field type="text" className="form-control shadow inputDesign"
                          id="POA52" name='POA52' placeholder="POA #5" />
                          <ErrorMessage component='div' className='text-danger fw-bold' name='POA52' />
                        </div>            
                        </div>

                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="Relationship52" className="form-label">Relationship #5</   label>
                          <Field type="text" className="form-control shadow inputDesign" 
                          id="Relationship52" name='Relationship52' placeholder="Relationship #5"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name='Relationship52' />
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
                          {/* Modal Do you have any POA?*/}
         
                      </div>}
                      {/* partner planninng */}
                      <div className="row mt-5 mb-3">
                        <div className="col-md-12">
                          <button  type='submit' className="float-end btn w-25  bgColor modalBtn">Next</button>
                          <button className="float-end btn w-25  btn-outline backBtn mx-3" onClick={BackFunction}>Back</button>
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

export default EstatePlanning