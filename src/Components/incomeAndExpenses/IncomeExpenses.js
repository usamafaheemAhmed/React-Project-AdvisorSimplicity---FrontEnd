import React,{useEffect, useState} from "react";
import "./incomeExpenses.css"
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

import plus from "./images/plus.svg"
import down from "./images/down.svg"
import noteBook from "./images/notebook.svg"
import moneyBag from "./images/moneyBag.svg"
import dollarBag from "./images/dollarBag.svg"

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from'yup';


const IncomeExpenses = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  let Client_initialValues = {
    centrelinkPayments1: '',
    PaymentAmountFortnightly1: '',
    AnnualPaymentAmount1: '',
    FamilyTaxBenefit1: '',
    AssetBeenGiftedHM1: '',
    AssetBeenGiftedYears1: '',
    ActualDateofyear1: '',

    totalGeneralLivingCosts: '',
    incomeInRetirement: '',
    lumpsumExpensesopt1: '',
    lumpSumExpenseDescription: '',
    lumpSumExpenseYear: '',
    lumpSumExpenseAmount: '',
    expectingInheritancesDescription: '',
    expectingInheritancesYear: '',
    expectingInheritancesAmount: ''
  }

  let Client_validationSchema = Yup.object({
    centrelinkPayments1: Yup.string().required('Required'),
    PaymentAmountFortnightly1: Yup.number().required('Required'),
    AnnualPaymentAmount1: Yup.string().required('Required'),
    FamilyTaxBenefit1: Yup.string().required('Required'),
    AssetBeenGiftedHM1: Yup.string().required('Required'),
    AssetBeenGiftedYears1: Yup.string().required('Required'),
    ActualDateofyear1: Yup.string().required('Required'),

    totalGeneralLivingCosts: Yup.number().required('Required'),
    incomeInRetirement: Yup.number().required('Required'),
    lumpsumExpensesopt1: Yup.string().required('Required'),
    lumpSumExpenseDescription: Yup.string().required('Required'),
    lumpSumExpenseYear: Yup.string().required('Required'),
    lumpSumExpenseAmount: Yup.number().required('Required'),
    expectingInheritancesDescription: Yup.string().required('Required'),
    expectingInheritancesYear: Yup.string().required('Required'),
    expectingInheritancesAmount: Yup.number().required('Required')
  })

  let Client_onSubmit = (Values) => {}

  let Partner_initialValues = {    
    centrelinkPayments2: '',
    PaymentAmountFortnightly2:'',
    AnnualPaymentAmount2: '',
    FamilyTaxBenefit2: '',

    TaxPaymentsOutstanding2: '',
    TaxLossesCarriedForward2: '',
    AmountofOtherTaxableIncome2: ''
  }

  let Partner_validationSchema = Yup.object({ 
    centrelinkPayments2: Yup.string().required('Required'),
    PaymentAmountFortnightly2: Yup.number().required('Required'),
    AnnualPaymentAmount2: Yup.string().required('Required'),
    FamilyTaxBenefit2: Yup.string().required('Required'),
    
    TaxPaymentsOutstanding2: Yup.string().required('Required'),
    TaxLossesCarriedForward2: Yup.string().required('Required'),
    AmountofOtherTaxableIncome2: Yup.string().required('Required')
  })

  let Partner_onSubmit = (Values) => {}
  
  return (
    <>
      <div className="container-fluid mt-4">
        <div className="row m-0 px-0">
          <div className="col-md-2"></div>
          <div className="col-md-12">
                   
                  {/* Client Employment Details */}
                    <div className="row">
                      <div className="col-md-12">
                        <div className="shadow px-4 py-4">
                          <h3 className="text-center">Income & Expense</h3>
                          <h3 className="">Client Employment Details
                          <div className="iconContainerLg">
                             <img className="img-fluid" src={noteBook} alt="" />

                              </div>
                          </h3>

                          {/* 1 row */}
                            <div className="row">
                              <div className="col-md-6">
                              <div className="mb-3">
                                <label htmlFor="clientPrimaryOccupation" className="form-label">Primary Occupation</   label>
                                <input type="text" className="form-control shadow inputDesign" id="clientPrimaryOccupation" placeholder="Primary Occupation"/>
                              </div>            
                              </div>
                                <div className="col-md-6">
                                  <div className="mb-3">
                                <label  className="form-label">
                                Do you currently Salary Package?
                                </label>
                              {/* switch button style */}
                                <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="radio" id="opt1" />
                                <label htmlFor="opt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="radio" id="opt2" />
                                <label htmlFor="opt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>
                                </div>
                              {/* switch button style */}
                              </div>
                                </div>
                            </div>
                          {/* 1 row */}

                          {/* 2 row */}
                            <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                <label htmlFor="clientEmployerFBTStatus" className="form-label">
                                Employer FBT Status
                                </label>
                                <select
                                  id="clientEmployerFBTStatus"
                                  className="form-select shadow  inputDesign"
                                >
                                  <option>Select</option>
                                  <option value="Fll FBT">Fll FBT</option>
                                  <option value="Rebatable">Rebatable</option>
                                  <option value="Exempt ($17K Cap)">Exempt ($17K Cap)</option>
                                  <option value="Exempt ($30K Cap)">Exempt ($30K Cap)</option>
                          
                                </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                              
                              <div>
                            <label htmlFor="clientEmployerFBTStatus" className="form-label">
                                What do you have?
                                </label>
                                </div>
                           
                                <div class="btn-group " role="group" aria-label="Basic checkbox toggle button group">
                            
  <input type="checkbox" class="btn-check" id="car1" autocomplete="off"/>
  <label class="btn btn-outline-success" for="car1">Car</label>

  <input type="checkbox" class="btn-check" id="CreditCard1" autocomplete="off"/>
  <label class="btn btn-outline-success" for="CreditCard1">Credit Card</label>

  <input type="checkbox" class="btn-check" id="Mortgage1" autocomplete="off"/>
  <label class="btn btn-outline-success" for="Mortgage1">Mortgage</label>
  
 <input type="checkbox" class="btn-check" id="Other1" autocomplete="off"/>
  <label class="btn btn-outline-success" for="Other1">Other</label>
</div>

                           
                          
                            </div>
                            </div>
                          {/* 2 row */}

                          {/* 3 row */}
                            <div className="row">
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="clientCostBaseofCar" className="form-label">Cost Base of Car</   label>
                              <input type="number" className="form-control shadow inputDesign" id="clientCostBaseofCar" placeholder="Cost Base of Car"/>
                            </div>            
                            </div>
                                <div className="col-md-6">
                                <div className="mb-3">
                              <label  className="form-label">
                              FBT Paid By Employer
                              </label>
                                {/* switch button style */}
                                <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="FBTradio" id="FBTopt1" />
                                <label htmlFor="FBTopt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="FBTradio" id="FBTopt2" />
                                <label htmlFor="FBTopt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>
                                </div>
                              {/* switch button style */}

                              {/* <div className="form-check form-switch p-0">
                              <label htmlFor="clientFBTPaidByEmployer" className="float-start">No</label>

                                <input
                                  className="form-check-input boxShadow  mx-1"
                                  type="checkbox"
                                  id="clientFBTPaidByEmployer"
                                />
                                <label htmlFor="clientFBTPaidByEmployer">Yes</label>

                              </div> */}
                              

                                </div>
                                
                                    
                                      
                            
                                    
                                </div>
                            </div>
                          {/* 3 row */}

                          {/* 4 row */}
                            <div className="row">
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="clientRunningCostsofCarPackaged" className="form-label ">Running Costs of Car Packaged?</   label>
                              <input type="text" className="form-control inputDesign shadow" id="clientRunningCostsofCarPackaged" placeholder="Running Costs of Car Packaged"/>
                            </div>            
                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="clientCreditCardMortgageorOther" className="form-label">Credit Card, Mortgage or Other?</   label>
                              <input type="text" className="form-control inputDesign shadow" id="clientCreditCardMortgageorOther" placeholder="Credit Card, Mortgage or Other"/>
                            </div>            
                            </div>
                              
                          </div>
                          {/* 4 row */}

                          {/* end child of 1st row--------------- */}

                          {/* 5 row */}
                            <div className="row">
                            <div className="col-md-6">
                                    <div className="mb-3">
                                <label htmlFor="clientEmploymentStatus" className="form-label">
                                Employment Status
                                </label>
                                <select
                                  id="clientEmploymentStatus"
                                  className="form-select shadow  inputDesign"
                                >
                                  <option>Select</option>
                                  <option value="Full Time">Full Time</option>
                                  <option value="Part Time">Part Time</option>
                                  <option value="Casual">Casual</option>
                                  <option value="Conratct">Conratct</option>
                                  <option value="OnLeave">On Leave</option>

                          
                                </select>
                                    </div>
        
                            </div>
                            <div className="col-md-6">
                              <div className="mb-3">
                                <label htmlFor="clientNameofCompany" className="form-label">Name of Company</   label>
                                <input type="text" className="form-control inputDesign shadow" id="clientNameofCompany" placeholder="Name of Company"/>
                              </div>            
                            </div>
                            
                            </div>
                          {/* 5 row */}


                            {/* 6 row */}
                            <div className="row">
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="clientCommencementDate" className="form-label">Commencement Date</   label>
                              <input type="date" className="form-control inputDesign shadow" id="clientCommencementDate" placeholder=""/>
                            </div>            
                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="clientNumberofhoursperweek" className="form-label">Number of hours per week</   label>
                              <input type="text" className="form-control inputDesign shadow" id="clientNumberofhoursperweek" placeholder="Number of hours per week"/>
                            </div>            
                            </div>
                              
                          </div>
                          {/* 6 row */}

                          {/* 7 row */}
                          <div className="row">
                              <div className="col-md-6">
                              <div className="mb-3">
                                <label htmlFor="clientSalaryExcludingSuper" className="form-label">Salary (Excluding Super)</   label>
                                <input type="text" className="form-control inputDesign shadow" id="clientSalaryExcludingSuper" placeholder="Salary (Excluding Super)"/>
                              </div>            
                              </div>
                            <div className="col-md-6">
                                    <div className="mb-3">
                                <label htmlFor="clientSuperAnnuationGuaranteeNumber" className="form-label">
                                Superannuation Guarantee
                                </label>
                                <div className="row">
                                  <div className="col-8">
                                <input type="text" className="form-control inputDesign shadow" id="clientSuperAnnuationGuaranteeNumber"
                                placeholder="Superannuation Guarantee"/>

                                  </div>
                                  <div className="col-4">
                                  <select
                                  id="clientSuperAnnuationGuaranteeType"
                                  className="form-select shadow  inputDesign"
                                >
                                  <option>Select</option>
                                  <option value="dollor">$</option>
                                  <option value="percentage">%</option>
                                </select>
                                  </div>
                                </div>
                                    </div>
                            </div>
                            </div>
                          {/* 7 row */}

                          {/* 8 row */}
                          <div className="row">
                            <div className="col-md-6">
                                  <div className="mb-3">
                                <label  className="form-label">
                                Do you currently Salary Package?
                                </label>

                                  {/* switch button style */}
                                  <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="currentlyradio" id="currentlyopt1" />
                                <label htmlFor="currentlyopt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="currentlyradio" id="currentlyopt2" />
                                <label htmlFor="currentlyopt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>
                                </div>
                              {/* switch button style */}
                              
                                  </div>
                            </div>
                            <div className="col-md-6">
                                    <div className="mb-3">
                                <label htmlFor="UnusedSickLeaveEntitlementsNumber" className="form-label">
                                Unused sick leave entitlements
                                </label>
                                <div className="row">
                                  <div className="col-8">
                                <input type="text" className="form-control inputDesign shadow"
                                id="UnusedSickLeaveEntitlementsNumber" placeholder="Unused sick leave entitlements"/>

                                  </div>
                                  <div className="col-4">
                                  <select
                                  id="UnusedSickLeaveEntitlementsType"
                                  className="form-select shadow  inputDesign"
                                >
                                  <option>Select</option>
                                  <option value="days">Days</option>
                                  <option value="hours">Hours</option>
                                  <option value="weeks">Weeks</option>
                                  <option value="months">Months</option>
                                  

                          
                                </select>
                                  </div>
                                </div>
                            
                              
                                
                                    </div>
        
                            </div>
                          
                            </div>
                          {/* 8 row */}

                        
                          

                          {/* 9 row */}
                            <div className="row">
                            
                            <div className="col-md-6">
                                    <div className="mb-3">
                                <label htmlFor="clientUnusedAnnualleaveentitlementsNumber" className="form-label">
                                Unused annual leave entitlements
                                </label>
                                <div className="row">
                                  <div className="col-8">
                                <input type="text" className="form-control inputDesign shadow" id="clientUnusedAnnualleaveentitlementsNumber"
                                placeholder="Unused annual leave entitlements"/>

                                  </div>
                                  <div className="col-4">
                                  <select
                                  id="clientUnusedAnnualleaveentitlementsType"
                                  className="form-select shadow  inputDesign"
                                >
                                  <option>Select</option>
                                  <option value="days">Days</option>
                                  <option value="hours">Hours</option>
                                  <option value="weeks">Weeks</option>
                                  <option value="months">Months</option>
                                </select>
                                  </div>
                                </div>
                                    </div>
        
                            </div>

                            <div className="col-md-6">
                                    <div className="mb-3">
                                <label htmlFor="clientUnusedlongserviceleaveNumber" className="form-label">
                                Unused long service leave entitlements
                                </label>
                                <div className="row">
                                  <div className="col-8">
                                <input type="number" className="form-control inputDesign shadow"
                                id="clientUnusedlongserviceleaveNumber" placeholder="Unused long service leave entitlements"/>

                                  </div>
                                  <div className="col-4">
                                  <select
                                  id="clientUnusedlongserviceleaveType"
                                  className="form-select shadow  inputDesign"
                                >
                                  <option>Select</option>
                                  <option value="days">Days</option>
                                  <option value="hours">Hours</option>
                                  <option value="weeks">Weeks</option>
                                  <option value="months">Months</option>
                                  

                          
                                </select>
                                  </div>
                                </div>
                            
                              
                                
                                    </div>
        
                            </div>
                            
                            </div>
                          {/* 9 row */}

                      

                        

                          {/* 10 row */}
                            <div className="row">
                            <div className="col-md-6">
                                  <div className="mb-3">
                                <label  className="form-label">
                                Do you have the ability to salary sacrifice?
                                </label>

                                  {/* switch button style */}
                                  <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="sacrificeradio" id="sacrificeopt1" />
                                <label htmlFor="sacrificeopt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="sacrificeradio" id="sacrificeopt2" />
                                <label htmlFor="sacrificeopt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>
                                </div>
                              {/* switch button style */}
                              
                                  </div>
                            </div>
                              <div className="col-md-6">
                                  <div className="mb-3">
                                <label  className="form-label">
                                Do you make any after tax-contribution to super?
                                </label>
                              
                           {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="contributionradio" id="contributionopt1" />
                                <label htmlFor="contributionopt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="contributionradio" id="contributionopt2" />
                                <label htmlFor="contributionopt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>
                                </div>
                              {/* switch button style */}
                          </div>
                                   </div>
                            </div>
                          {/* 10 row */}

                          {/* 11 row */}
                            <div className="row">
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="clientAbilitytoSalarySacrificeHM" className="form-label">How Much</   label>
                              <input type="text" className="form-control inputDesign shadow" id="clientAbilitytoSalarySacrificeHM" placeholder="How much you have the ability to salary sacrifice?"/>
                            </div>            
                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="clientTaxContributiontoSuperHM" className="form-label">How Much</   label>
                              <input type="text" className="form-control inputDesign shadow" id="clientTaxContributiontoSuperHM" placeholder="How much you make any after tax-contribution to super?"/>
                            </div>            
                            </div>
                              
                            </div>
                          {/* 11 row */}

                          {/* 12 row */}
                          <div className="row">
                            <div className="col-md-6">
                                  <div className="mb-3">
                                <label  className="form-label">
                                Can your income vary significantly?
                                </label>

                                  {/* switch button style */}
                                  <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="significantlyradio" id="significantlyopt1" />
                                <label htmlFor="significantlyopt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="significantlyradio" id="significantlyopt2" />
                                <label htmlFor="significantlyopt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>
                                </div>
                              {/* switch button style */}
                       
                                  </div>
                            </div>
                                
                          </div>
                          {/* 12 row */}
                          </div>
                      </div>


                    </div>
                  {/* Client Employment Details */}

                    {/* Partner Employment Details */}
                    <div className="row">
                      <div className="col-md-12">
                        <div className="shadow px-4 py-4">
                          <h3 className="text-center">Income & Expense</h3>
                          <h3 className="">Partner Employment Details
                          <div className="iconContainerLg">
                             <img className="img-fluid" src={noteBook} alt="" />

                              </div>
                          </h3>

                          {/* 1 row */}
                            <div className="row">
                              <div className="col-md-6">
                              <div className="mb-3">
                                <label htmlFor="PartnerPrimaryOccupation" className="form-label">Primary Occupation</   label>
                                <input type="text" className="form-control shadow inputDesign" id="PartnerPrimaryOccupation" placeholder="Primary Occupation"/>
                              </div>            
                              </div>
                                <div className="col-md-6">
                                  <div className="mb-3">
                                <label  className="form-label">
                                Do you currently Salary Package?
                                </label>
                              {/* switch button style */}
                                <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="Partnerradio" id="Partneropt1" />
                                <label htmlFor="Partneropt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="Partnerradio" id="Partneropt2" />
                                <label htmlFor="Partneropt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>
                                </div>
                              {/* switch button style */}
                              </div>
                              </div>
                            </div>
                          {/* 1 row */}

                          {/* 2 row */}
                            <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                <label htmlFor="clientEmployerFBTStatus2" className="form-label">
                                Employer FBT Status
                                </label>
                                <select
                                  id="clientEmployerFBTStatus2"
                                  className="form-select shadow  inputDesign"
                                >
                                  <option>Select</option>
                                  <option value="Fll FBT">Fll FBT</option>
                                  <option value="Rebatable">Rebatable</option>
                                  <option value="Exempt ($17K Cap)">Exempt ($17K Cap)</option>
                                  <option value="Exempt ($30K Cap)">Exempt ($30K Cap)</option>
                          
                                </select>
                                </div>
                            </div>

                               <div className="col-md-6">
                              
                              <div>
                            <label htmlFor="clientEmployerFBTStatus" className="form-label">
                                What do you have?
                                </label>
                                </div>
                           
                                <div class="btn-group " role="group" aria-label="Basic checkbox toggle button group">
                            
  <input type="checkbox" class="btn-check" id="car2" autocomplete="off"/>
  <label class="btn btn-outline-success" for="car2">Car</label>

  <input type="checkbox" class="btn-check" id="CreditCard2" autocomplete="off"/>
  <label class="btn btn-outline-success" for="CreditCard2">Credit Card</label>

  <input type="checkbox" class="btn-check" id="Mortgage2" autocomplete="off"/>
  <label class="btn btn-outline-success" for="Mortgage2">Mortgage</label>

  <input type="checkbox" class="btn-check" id="Other2" autocomplete="off"/>
  <label class="btn btn-outline-success" for="Other2">Other</label>
</div>

                           
                          
                            </div>
                            </div>
                          {/* 2 row */}

                          {/* 3 row */}
                            <div className="row">
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="clientCostBaseofCar2" className="form-label">Cost Base of Car</   label>
                              <input type="number" className="form-control shadow inputDesign" id="clientCostBaseofCar2" placeholder="Cost Base of Car"/>
                            </div>            
                            </div>
                                <div className="col-md-6">
                                <div className="mb-3">
                              <label  className="form-label">
                              FBT Paid By Employer
                              </label>
                                {/* switch button style */}
                                <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="FBT2radio" id="FBT2opt1" />
                                <label htmlFor="FBT2opt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="FBT2radio" id="FBT2opt2" />
                                <label htmlFor="FBT2opt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>
                                </div>
                              {/* switch button style */}

                            </div>
                                </div>
                            </div>
                          {/* 3 row */}

                          {/* 4 row */}
                            <div className="row">
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="clientRunningCostsofCarPackaged2" className="form-label ">Running Costs of Car Packaged?</   label>
                              <input type="text" className="form-control inputDesign shadow" id="clientRunningCostsofCarPackaged2" placeholder="Running Costs of Car Packaged"/>
                            </div>            
                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="clientCreditCardMortgageorOther2" className="form-label">Credit Card, Mortgage or Other?</   label>
                              <input type="text" className="form-control inputDesign shadow" id="clientCreditCardMortgageorOther2" placeholder="Credit Card, Mortgage or Other"/>
                            </div>            
                            </div>
                              
                          </div>
                          {/* 4 row */}

                          {/* end child of 1st row--------------- */}

                          {/* 5 row */}
                            <div className="row">
                            <div className="col-md-6">
                                    <div className="mb-3">
                                <label htmlFor="clientEmploymentStatus2" className="form-label">
                                Employment Status
                                </label>
                                <select
                                  id="clientEmploymentStatus2"
                                  className="form-select shadow  inputDesign"
                                >
                                  <option>Select</option>
                                  <option value="Full Time">Full Time</option>
                                  <option value="Part Time">Part Time</option>
                                  <option value="Casual">Casual</option>
                                  <option value="Conratct">Conratct</option>
                                  <option value="OnLeave">On Leave</option>

                          
                                </select>
                                    </div>
        
                            </div>
                            <div className="col-md-6">
                              <div className="mb-3">
                                <label htmlFor="clientNameofCompany2" className="form-label">Name of Company</   label>
                                <input type="text" className="form-control inputDesign shadow" id="clientNameofCompany2" placeholder="Name of Company"/>
                              </div>            
                            </div>
                            
                            </div>
                          {/* 5 row */}


                            {/* 6 row */}
                            <div className="row">
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="clientCommencementDate2" className="form-label">Commencement Date</   label>
                              <input type="date" className="form-control inputDesign shadow" id="clientCommencementDate2" placeholder=""/>
                            </div>            
                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="clientNumberofhoursperweek2" className="form-label">Number of hours per week</   label>
                              <input type="text" className="form-control inputDesign shadow" id="clientNumberofhoursperweek2" placeholder="Number of hours per week"/>
                            </div>            
                            </div>
                              
                          </div>
                          {/* 6 row */}

                          {/* 7 row */}
                          <div className="row">
                              <div className="col-md-6">
                              <div className="mb-3">
                                <label htmlFor="clientSalaryExcludingSuper2" className="form-label">Salary (Excluding Super)</   label>
                                <input type="text" className="form-control inputDesign shadow" id="clientSalaryExcludingSuper2" placeholder="Salary (Excluding Super)"/>
                              </div>            
                              </div>
                            <div className="col-md-6">
                                    <div className="mb-3">
                                <label htmlFor="clientSuperAnnuationGuaranteeNumber2" className="form-label">
                                Superannuation Guarantee
                                </label>
                                <div className="row">
                                  <div className="col-8">
                                <input type="text" className="form-control inputDesign shadow" id="clientSuperAnnuationGuaranteeNumber2"
                                placeholder="Superannuation Guarantee"/>

                                  </div>
                                  <div className="col-4">
                                  <select
                                  id="clientSuperAnnuationGuaranteeType"
                                  className="form-select shadow  inputDesign"
                                >
                                  <option>Select</option>
                                  <option value="dollor">$</option>
                                  <option value="percentage">%</option>
                                </select>
                                  </div>
                                </div>
                                    </div>
                            </div>
                            </div>
                          {/* 7 row */}

                          {/* 8 row */}
                          <div className="row">
                            <div className="col-md-6">
                                  <div className="mb-3">
                                <label  className="form-label">
                                Do you currently Salary Package?
                                </label>

                                  {/* switch button style */}
                                  <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="currently2radio" id="currently2opt1" />
                                <label htmlFor="currently2opt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="currently2radio" id="currently2opt2" />
                                <label htmlFor="currently2opt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>
                                </div>
                              {/* switch button style */}
                              
                                  </div>
                            </div>
                            <div className="col-md-6">
                                    <div className="mb-3">
                                <label htmlFor="UnusedSickLeaveEntitlementsNumber2" className="form-label">
                                Unused sick leave entitlements
                                </label>
                                <div className="row">
                                  <div className="col-8">
                                <input type="text" className="form-control inputDesign shadow"
                                id="UnusedSickLeaveEntitlementsNumber2" placeholder="Unused sick leave entitlements"/>

                                  </div>
                                  <div className="col-4">
                                  <select
                                  id="UnusedSickLeaveEntitlementsType2"
                                  className="form-select shadow  inputDesign"
                                >
                                  <option>Select</option>
                                  <option value="days">Days</option>
                                  <option value="hours">Hours</option>
                                  <option value="weeks">Weeks</option>
                                  <option value="months">Months</option>
                                  

                          
                                </select>
                                  </div>
                                </div>
                            
                              
                                
                                    </div>
        
                            </div>
                          
                            </div>
                          {/* 8 row */}

                        
                          

                          {/* 9 row */}
                            <div className="row">
                            
                            <div className="col-md-6">
                                    <div className="mb-3">
                                <label htmlFor="clientUnusedAnnualleaveentitlementsNumber2" className="form-label">
                                Unused annual leave entitlements
                                </label>
                                <div className="row">
                                  <div className="col-8">
                                <input type="text" className="form-control inputDesign shadow" id="clientUnusedAnnualleaveentitlementsNumber2"
                                placeholder="Unused annual leave entitlements"/>

                                  </div>
                                  <div className="col-4">
                                  <select
                                  id="clientUnusedAnnualleaveentitlementsType2"
                                  className="form-select shadow  inputDesign"
                                >
                                  <option>Select</option>
                                  <option value="days">Days</option>
                                  <option value="hours">Hours</option>
                                  <option value="weeks">Weeks</option>
                                  <option value="months">Months</option>
                                </select>
                                  </div>
                                </div>
                                    </div>
        
                            </div>

                            <div className="col-md-6">
                                    <div className="mb-3">
                                <label htmlFor="clientUnusedlongserviceleaveNumber2" className="form-label">
                                Unused long service leave entitlements
                                </label>
                                <div className="row">
                                  <div className="col-8">
                                <input type="number" className="form-control inputDesign shadow"
                                id="clientUnusedlongserviceleaveNumber2" placeholder="Unused long service leave entitlements"/>

                                  </div>
                                  <div className="col-4">
                                  <select
                                  id="clientUnusedlongserviceleaveType2"
                                  className="form-select shadow  inputDesign"
                                >
                                  <option>Select</option>
                                  <option value="days">Days</option>
                                  <option value="hours">Hours</option>
                                  <option value="weeks">Weeks</option>
                                  <option value="months">Months</option>
                                  

                          
                                </select>
                                  </div>
                                </div>
                            
                              
                                
                                    </div>
        
                            </div>
                            
                            </div>
                          {/* 9 row */}

                      

                        

                          {/* 10 row */}
                            <div className="row">
                            <div className="col-md-6">
                                  <div className="mb-3">
                                <label  className="form-label">
                                Do you have the ability to salary sacrifice?
                                </label>

                                  {/* switch button style */}
                                  <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="sacrifice2radio" id="sacrifice2opt1" />
                                <label htmlFor="sacrifice2opt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="sacrifice2radio" id="sacrifice2opt2" />
                                <label htmlFor="sacrifice2opt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>
                                </div>
                              {/* switch button style */}
                              
                                  </div>
                            </div>
                                 <div className="col-md-6">
                                  <div className="mb-3">
                                <label  className="form-label">
                                Do you make any after tax-contribution to super?
                                </label>
                              
                           {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="contribution2radio" id="contribution2opt1" />
                                <label htmlFor="contribution2opt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="contribution2radio" id="contribution2opt2" />
                                <label htmlFor="contribution2opt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>
                                </div>
                              {/* switch button style */}
                          </div>
                                   </div>
                            </div>
                          {/* 10 row */}

                          {/* 11 row */}
                            <div className="row">
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="clientAbilitytoSalarySacrificeHM2" className="form-label">How Much</   label>
                              <input type="text" className="form-control inputDesign shadow" id="clientAbilitytoSalarySacrificeHM2" placeholder="How much you have the ability to salary sacrifice?"/>
                            </div>            
                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="clientTaxContributiontoSuperHM2" className="form-label">How Much</   label>
                              <input type="text" className="form-control inputDesign shadow" id="clientTaxContributiontoSuperHM2" placeholder="How much you make any after tax-contribution to super?"/>
                            </div>            
                            </div>
                              
                            </div>
                          {/* 11 row */}

                          {/* 12 row */}
                          <div className="row">
                            <div className="col-md-6">
                                  <div className="mb-3">
                                <label  className="form-label">
                                Can your income vary significantly?
                                </label>

                                  {/* switch button style */}
                                  <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="significantly2radio" id="significantly2opt1" />
                                <label htmlFor="significantly2opt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="significantly2radio" id="significantly2opt2" />
                                <label htmlFor="significantly2opt2" className="label2">
                                  <span>NO</span>
                                </label>
                              </div>
                                </div>
                              {/* switch button style */}
                       
                                  </div>
                            </div>
                                
                          </div>
                          {/* 12 row */}
                          </div>
                      </div>


                    </div>
                  {/* Partner Employment Details */}

                 {/* Client Centre Link  */}
                <div className="row my-5">
                  <div className="col-md-12">
                    <div className="shadow px-4 py-4">
                      <h3 className="text-center">Centre Link</h3>
                      <h3 className="">Client Centre Link
                      <div className="iconContainerLg">
                             <img className="img-fluid" src={dollarBag} alt="" />

                              </div>
                      </h3>

                      {/* 1 row */}
                        <div className="row">
                          <div className="col-md-12">
                              <div className="mb-3">
                            <label  className="form-label">
                            Are you receiving any centerlink payments (including FTBA & B)?
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="centerlink1radio" id="centerlink1opt1" />
                            <label htmlFor="centerlink1opt1" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="centerlink1radio" id="centerlink1opt2" />
                            <label htmlFor="centerlink1opt2" className="label2">
                              <span>NO</span>
                            </label>
                          </div>
                            </div>
                          {/* switch button style */}

                       </div>
                           </div>
                        </div>
                      {/* 1 row */}

                      <Formik initialValues={Client_initialValues}
                      validationSchema={Client_validationSchema} onSubmit={Client_onSubmit}>
                        <Form>
                          {/* 2 row */}
                        <div className="row">
                        <div className="col-md-6">
                                <div className="mb-3">
                            <label htmlFor="centrelinkPayments1" className="form-label">
                            Centrelink Payments
                            </label>
                            <Field
                              id="centrelinkPayments1"
                              name='centrelinkPayments1'
                              className="form-select shadow  inputDesign"
                              as='select'
                            >
                              <option value=''>Select</option>
                              <option value="NotEligible">Not Eligible</option>
                              <option value="AgePension">Age Pension</option>
                              <option value="Newstart Allowance">Newstart Allowance</option>
                              <option value="Disability Pension">Disability Pension</option>
                              <option value="CarersPayment">Carers Payment</option>
                              <option value="Other">Other</option>
                              </Field>
                              <ErrorMessage component='div' className='text-danger fw-bold' name="centrelinkPayments1" />
                                </div>
    
                        </div>

                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="PaymentAmountFortnightly1" className="form-label">Payment Amount (Fortnightly)</   label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="PaymentAmountFortnightly1" name="PaymentAmountFortnightly1" placeholder="Payment Amount (Fortnightly)"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name="PaymentAmountFortnightly1" />
                        </div>            
                        </div>
                      
                        </div>
                      {/* 2 row */}
                      {/* 3 row */}
                      <div className="row">
                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="AnnualPaymentAmount1" className="form-label">Annual Payment Amount</   label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="AnnualPaymentAmount1" name="AnnualPaymentAmount1" placeholder="Annual Payment Amount"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name="AnnualPaymentAmount1" />
                        </div>            
                        </div>

                        <div className="col-md-6">
                              <div className="mb-3">
                            <label  className="form-label">
                            Are you receiving the Carer Allowance?
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="CarerAllowance1radio" id="CarerAllowance1opt1" />
                            <label htmlFor="CarerAllowance1opt1" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="CarerAllowance1radio" id="CarerAllowance1opt2" />
                            <label htmlFor="CarerAllowance1opt2" className="label2">
                              <span>NO</span>
                            </label>
                          </div>
                            </div>
                              </div>    
                        </div>
                      
                        </div>
                      {/* 3 row */}
                        {/* 4 row */}
                        <div className="row">
                        <div className="col-md-6">
                                <div className="mb-3">
                            <label htmlFor="FamilyTaxBenefit1" className="form-label">
                            Are you claiming the Family Tax Benefit?
                            </label>
                            <Field
                              id="FamilyTaxBenefit1"
                              name='FamilyTaxBenefit1'
                              className="form-select shadow  inputDesign"
                              as='select'
                            >
                              <option value=''>Select</option>
                              <option value="Part A">Part A</option>
                              <option value="Part B">Part B</option>
                              <option value="Part A & B">Part A & B</option>
                              <option value="No">No</option>
                            </Field>
                            <ErrorMessage component='div' className='text-danger fw-bold' name="FamilyTaxBenefit1" />
                                </div>
    
                        </div>

                        <div className="col-md-6">
                              <div className="mb-3">
                            <label  className="form-label">
                            Are you currently renting?
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="currentlyrenting1radio" id="currentlyrenting1opt1" />
                            <label htmlFor="currentlyrenting1opt1" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="currentlyrenting1radio" id="currentlyrenting1opt2" />
                            <label htmlFor="currentlyrenting1opt2" className="label2">
                              <span>NO</span>
                            </label>
                          </div>
                            </div>
                              </div>    
                        </div>
                      
                        </div>
                      {/* 4 row */}


                          {/* 5 row */}
                          <div className="row">
                          <div className="col-md-12">
                              <div className="mb-3">
                            <label  className="form-label">
                            Have Asset Been Gifted in the last 5 years?
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="AssetGifted1radio" id="AssetGifted1opt1" />
                            <label htmlFor="AssetGifted1opt1" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="AssetGifted1radio" id="AssetGifted1opt2" />
                            <label htmlFor="AssetGifted1opt2" className="label2">
                              <span>NO</span>
                            </label>
                          </div>
                            </div>
                          {/* switch button style */}

                              </div>
                            
                          </div>
                          </div>
                          {/* 5 row */}

                        {/* 6 row */}
                        <div className="row">

                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="AssetBeenGiftedHM1" className="form-label">How Much?</   label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="AssetBeenGiftedHM1" name="AssetBeenGiftedHM1" placeholder="How Much?"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name="AssetBeenGiftedHM1" />
                        </div>            
                        </div>

                        <div className="col-md-6">
                                <div className="mb-3">
                            <label htmlFor="" className="form-label">
                            How many years back?
                            </label>
                            <Field
                              id="AssetBeenGiftedYears1"
                              name='AssetBeenGiftedYears1'
                              className="form-select shadow  inputDesign"
                              as='select'>
                              <option value=''>Select</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                              <option value="7">7</option>
                              <option value="8">8</option>


                            </Field>
                            <ErrorMessage component='div' className='text-danger fw-bold' name="AssetBeenGiftedYears1" />
                                </div>
    
                        </div>

                        </div>
                      {/* 6 row */}

                        {/* 7 row */}
                        <div className="row">

                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="ActualDateofyear1" className="form-label">Actual Date of year</   label>
                          <Field type="date" className="form-control shadow inputDesign" 
                          id="ActualDateofyear1" name="ActualDateofyear1" />
                          <ErrorMessage component='div' className='text-danger fw-bold' name="ActualDateofyear1" />
                        </div>            
                        </div>

                        </div>
                      {/* 7 row */}


                      <div className="row mt-5 mb-3">
                        <div className="col-md-12">
                          <button  type='submit' className="float-end btn w-25  bgColor modalBtn">Next</button>
                          <button className="float-end btn w-25  btn-outline  backBtn mx-3">Back</button>
                        </div>
                      </div>
                      
                      
                        </Form>
                      </Formik>
                      </div>
                  </div>
                </div>
                {/* Client Centre Link */}


                {/* Partner Centre Link  */}
                <div className="row my-5">
                <div className="col-md-12">
                  <div className="shadow px-4 py-4">
                    <h3 className="text-center">Centre Link</h3>
                    <h3 className="">Partner Centre Link
                    <div className="iconContainerLg">
                             <img className="img-fluid" src={dollarBag} alt="" />

                              </div>
                    </h3>

                    {/* 1 row */}
                      <div className="row">
                        <div className="col-md-12">
                            <div className="mb-3">
                          <label  className="form-label">
                          Are you receiving any centerlink payments (including FTBA & B)?
                          </label>
                        {/* switch button style */}
                          <div className="form-check form-switch m-0 p-0 ">
                        <div className="radiobutton">
                          <input type="radio" name="centerlink2radio" id="centerlink2opt1" />
                          <label htmlFor="centerlink2opt1" className="label1">
                            <span>YES</span>
                          </label>
                          <input type="radio" name="centerlink2radio" id="centerlink2opt2" />
                          <label htmlFor="centerlink2opt2" className="label2">
                            <span>NO</span>
                          </label>
                        </div>
                          </div>
                        {/* switch button style */}

                            </div>
                    
                        </div>
                      </div>
                    {/* 1 row */}
                    
                    <Formik initialValues={Partner_initialValues}
                    validationSchema={Partner_validationSchema} onSubmit={Partner_onSubmit}>
                      <Form>
                        {/* 2 row */}
                      <div className="row">
                      <div className="col-md-6">
                              <div className="mb-3">
                          <label htmlFor="centrelinkPayments2" className="form-label">
                          Centrelink Payments
                          </label>
                          <Field
                            id="centrelinkPayments2"
                            name='centrelinkPayments2'
                            className="form-select shadow  inputDesign"
                            as='select'
                          >
                            <option value=''>Select</option>
                            <option value="NotEligible">Not Eligible</option>
                            <option value="AgePension">Age Pension</option>
                            <option value="Newstart Allowance">Newstart Allowance</option>
                            <option value="Disability Pension">Disability Pension</option>
                            <option value="CarersPayment">Carers Payment</option>
                            <option value="Other">Other</option>                    
                          </Field>
                          <ErrorMessage component='div' className='text-danger fw-bold' name="centrelinkPayments2" />
                              </div>
  
                      </div>

                      <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="PaymentAmountFortnightly2" className="form-label">Payment Amount (Fortnightly)</   label>
                        <Field type="number" className="form-control shadow inputDesign" 
                        id="PaymentAmountFortnightly2" name="PaymentAmountFortnightly2" placeholder="Payment Amount (Fortnightly)"/>
                        <ErrorMessage component='div' className='text-danger fw-bold' name="PaymentAmountFortnightly2" />
                      </div>            
                      </div>
                    
                      </div>
                    {/* 2 row */}

                      {/* 3 row */}
                      <div className="row">
                      <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="AnnualPaymentAmount2" className="form-label">Annual Payment Amount</   label>
                        <Field type="number" className="form-control shadow inputDesign" 
                        id="AnnualPaymentAmount2" name="AnnualPaymentAmount2" placeholder="Annual Payment Amount"/>
                        <ErrorMessage component='div' className='text-danger fw-bold' name="AnnualPaymentAmount2" />
                      </div>            
                      </div>

                      <div className="col-md-6">
                            <div className="mb-3">
                          <label  className="form-label">
                          Are you receiving the Carer Allowance?
                          </label>
                        {/* switch button style */}
                          <div className="form-check form-switch m-0 p-0 ">
                        <div className="radiobutton">
                          <input type="radio" name="CarerAllowance2radio" id="CarerAllowance2opt1" />
                          <label htmlFor="CarerAllowance2opt1" className="label1">
                            <span>YES</span>
                          </label>
                          <input type="radio" name="CarerAllowance2radio" id="CarerAllowance2opt2" />
                          <label htmlFor="CarerAllowance2opt2" className="label2">
                            <span>NO</span>
                          </label>
                        </div>
                          </div>
                            </div>    
                      </div>
                    
                      </div>
                    {/* 3 row */}
                      {/* 4 row */}
                      <div className="row">
                      <div className="col-md-6">
                              <div className="mb-3">
                          <label htmlFor="FamilyTaxBenefit2" className="form-label">
                          Are you claiming the Family Tax Benefit?
                          </label>
                          <Field
                            id="FamilyTaxBenefit2"
                            name='FamilyTaxBenefit2'
                            className="form-select shadow  inputDesign"
                            as='select'
                          >
                            <option value=''>Select</option>
                            <option value="Part A">Part A</option>
                            <option value="Part B">Part B</option>
                            <option value="Part A & B">Part A & B</option>
                            <option value="No">No</option>
                          </Field>
                          <ErrorMessage component='div' className='text-danger fw-bold' name="FamilyTaxBenefit2" />
                              </div>
                            </div>
                          </div>
                    {/* 4 row */}


                      <div className="row mt-5 mb-3">
                        <div className="col-md-12">
                          <button  type='submit' className="float-end btn w-25  bgColor modalBtn">Next</button>
                          <button className="float-end btn w-25  btn-outline  backBtn mx-3">Back</button>
                        </div>
                      </div>
                      
                      
                        </Form>
                    </Formik>

                  </div>
                </div>


                </div>
                {/* Partner Centre Link */}

                {/*Client other taxable income  */}
                <div className="row my-5">
                  <div className="col-md-12">
                    <div className="shadow px-4 py-4">
                      <h3 className="text-center">Other Taxable Income</h3>
                      <h3 className="">Client Other Taxable Income
                      <div className="iconContainerLg">
                             <img className="img-fluid" src={dollarBag} alt="" />

                              </div></h3>

                      {/* 1 row */}
                        <div className="row">
                        <div className="col-md-6">
                              <div className="mb-3">
                            <label  className="form-label">
                            Australian resident for tax purposes
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="AustralianResident1radio" id="AustralianResident1opt1" />
                            <label htmlFor="AustralianResident1opt1" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="AustralianResident1radio" id="AustralianResident1opt2" />
                            <label htmlFor="AustralianResident1opt2" className="label2">
                              <span>NO</span>
                            </label>
                          </div>
                            </div>
                              </div>    
                        </div>

                          <div className="col-md-6">
                              <div className="mb-3">
                            <label  className="form-label">
                            Private hospital cover in place
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="PrivateHospital1radio" id="PrivateHospital1opt1" />
                            <label htmlFor="PrivateHospital1opt1" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="PrivateHospital1radio" id="PrivateHospital1opt2" />
                            <label htmlFor="PrivateHospital1opt2" className="label2">
                              <span>NO</span>
                            </label>
                          </div>
                            </div>
                          {/* switch button style */}
                          </div>
                            </div>
                        </div>
                      {/* 1 row */}

                            {/* 2 row */}
                          <div className="row">
                          <div className="col-md-6">
                              <div className="mb-3">
                            <label  className="form-label">
                            Do you have a HECS debt?
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="HECSdebt1radio" id="HECSdebt1opt1" />
                            <label htmlFor="HECSdebt1opt1" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="HECSdebt1radio" id="HECSdebt1opt2" />
                            <label htmlFor="HECSdebt1opt2" className="label2">
                              <span>NO</span>
                            </label>
                          </div>
                            </div>
                              </div>    
                          </div>

                          <div className="col-md-6">
                              <div className="mb-3">
                            <label  className="form-label">
                            Are you claiming the rebate?
                            </label> 
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="claimingRebate1radio" id="claimingRebate1opt1" />
                            <label htmlFor="claimingRebate1opt1" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="claimingRebate1radio" id="claimingRebate1opt2" />
                            <label htmlFor="claimingRebate1opt2" className="label2">
                              <span>NO</span>
                            </label>
                          </div>
                            </div>
                          {/* switch button style */}

                              </div>
                                
                          </div>
                          </div>
                      {/* 2 row */}

                    

                        {/* 3 row */}
                        <div className="row">
                        <div className="col-md-6">
                              <div className="mb-3">
                            <label  className="form-label">
                            Do you have an application to vary a PAYG?
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="applicationPAYG1radio" id="applicationPAYG1opt1" />
                            <label htmlFor="applicationPAYG1opt1" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="applicationPAYG1radio" id="applicationPAYG1opt2" />
                            <label htmlFor="applicationPAYG1opt2" className="label2">
                              <span>NO</span>
                            </label>
                          </div>
                            </div>
                              </div>    
                        </div>

                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="TaxPaymentsOutstanding1" className="form-label">Tax Payments Outstanding</   label>
                          <input type="number" className="form-control shadow inputDesign" id="TaxPaymentsOutstanding1" placeholder="Tax Payments Outstanding"/>
                        </div>            
                        </div>
                      
                        </div>
                      {/* 3 row */}

                      
                        {/* 4 row */}
                        <div className="row">
                        <div className="col-md-6">
                              <div className="mb-3">
                            <label  className="form-label">
                            Do you have any other taxable income (including overseas pensions)?
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="otherTaxableIncome1radio" id="otherTaxableIncome1opt1" />
                            <label htmlFor="otherTaxableIncome1opt1" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="otherTaxableIncome1radio" id="otherTaxableIncome1opt2" />
                            <label htmlFor="otherTaxableIncome1opt2" className="label2">
                              <span>NO</span>
                            </label>
                          </div>
                            </div>
                              </div>    
                        </div>

                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="TaxLossesCarriedForward1" className="form-label">Tax losses carried forward</   label>
                          <input type="number" className="form-control shadow inputDesign" id="TaxLossesCarriedForward1" placeholder="Annual Payment Amount"/>
                        </div>            
                        </div>
                      
                        </div>
                      {/* 4 row */}

                      
                        {/* 5 row */}
                        <div className="row">
                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="AmountofOtherTaxableIncome1" className="form-label">Amount of Other Taxable Income</   label>
                          <input type="number" className="form-control shadow inputDesign" id="AmountofOtherTaxableIncome1" placeholder="Annual Payment Amount"/>
                        </div>            
                        </div>
                        </div>
                      {/* 5 row */}
                    



                    </div>
                  </div>


                </div>
                {/*Client Other taxable income */}

                {/*Partner other taxable income  */}
                <div className="row my-5">
                  <div className="col-md-12">
                    <div className="shadow px-4 py-4">
                      <h3 className="text-center">Partner Taxable Income</h3>
                      <h3 className="">Partner Other Taxable Income
                      <div className="iconContainerLg">
                             <img className="img-fluid" src={dollarBag} alt="" />

                              </div></h3>

                      {/* 1 row */}
                        <div className="row">
                        <div className="col-md-6">
                              <div className="mb-3">
                            <label  className="form-label">
                            Australian resident for tax purposes
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="AustralianResident2radio" id="AustralianResident2opt1" />
                            <label htmlFor="AustralianResident2opt1" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="AustralianResident2radio" id="AustralianResident2opt2" />
                            <label htmlFor="AustralianResident2opt2" className="label2">
                              <span>NO</span>
                            </label>
                          </div>
                            </div>
                              </div>    
                        </div>

                          <div className="col-md-6">
                              <div className="mb-3">
                            <label  className="form-label">
                            Private hospital cover in place
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="PrivateHospital2radio" id="PrivateHospital2opt1" />
                            <label htmlFor="PrivateHospital2opt1" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="PrivateHospital2radio" id="PrivateHospital2opt2" />
                            <label htmlFor="PrivateHospital2opt2" className="label2">
                              <span>NO</span>
                            </label>
                          </div>
                            </div>
                          {/* switch button style */}
                          </div>
                            </div>
                        </div>
                      {/* 1 row */}

                      <Formik initialValues={Partner_initialValues} validationSchema={Partner_validationSchema} onSubmit={Partner_onSubmit}>
                        <Form>
                          {/* 2 row */}
                          <div className="row">
                          <div className="col-md-6">
                              <div className="mb-3">
                            <label  className="form-label">
                            Do you have a HECS debt?
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="HECSdebt2radio" id="HECSdebt2opt1" />
                            <label htmlFor="HECSdebt2opt1" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="HECSdebt2radio" id="HECSdebt2opt2" />
                            <label htmlFor="HECSdebt2opt2" className="label2">
                              <span>NO</span>
                            </label>
                          </div>
                            </div>
                              </div>    
                          </div>

                          <div className="col-md-6">
                              <div className="mb-3">
                            <label  className="form-label">
                            Are you claiming the rebate?
                            </label> 
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="claimingRebate2radio" id="claimingRebate2opt1" />
                            <label htmlFor="claimingRebate2opt1" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="claimingRebate2radio" id="claimingRebate2opt2" />
                            <label htmlFor="claimingRebate2opt2" className="label2">
                              <span>NO</span>
                            </label>
                          </div>
                            </div>
                          {/* switch button style */}

                              </div>
                                
                          </div>
                          </div>
                      {/* 2 row */}

                        {/* 3 row */}
                        <div className="row">
                        <div className="col-md-6">
                              <div className="mb-3">
                            <label  className="form-label">
                            Do you have an application to vary a PAYG?
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="applicationPAYG2radio" id="applicationPAYG2opt1" />
                            <label htmlFor="applicationPAYG2opt1" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="applicationPAYG2radio" id="applicationPAYG2opt2" />
                            <label htmlFor="applicationPAYG2opt2" className="label2">
                              <span>NO</span>
                            </label>
                          </div>
                            </div>
                              </div>    
                        </div>

                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="TaxPaymentsOutstanding2" className="form-label">Tax Payments Outstanding</   label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="TaxPaymentsOutstanding2" name="TaxPaymentsOutstanding2" placeholder="Tax Payments Outstanding"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name="TaxPaymentsOutstanding2" />
                        </div>            
                        </div>
                      
                        </div>
                      {/* 3 row */}
                      
                        {/* 4 row */}
                        <div className="row">
                        <div className="col-md-6">
                              <div className="mb-3">
                            <label  className="form-label">
                            Do you have any other taxable income (including overseas pensions)?
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="otherTaxableIncome2radio" id="otherTaxableIncome2opt1" />
                            <label htmlFor="otherTaxableIncome2opt1" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="otherTaxableIncome2radio" id="otherTaxableIncome2opt2" />
                            <label htmlFor="otherTaxableIncome2opt2" className="label2">
                              <span>NO</span>
                            </label>
                          </div>
                            </div>
                              </div>    
                        </div>

                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="TaxLossesCarriedForward2" className="form-label">Tax losses carried forward</   label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="TaxLossesCarriedForward2" name="TaxLossesCarriedForward2" placeholder="Annual Payment Amount"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name="TaxLossesCarriedForward2" />
                        </div>            
                        </div>
                      
                        </div>
                      {/* 4 row */}
                      
                        {/* 5 row */}
                        <div className="row">
                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="AmountofOtherTaxableIncome2" className="form-label">Amount of Other Taxable Income</   label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="AmountofOtherTaxableIncome2" name="AmountofOtherTaxableIncome2" placeholder="Annual Payment Amount"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name="AmountofOtherTaxableIncome2" />
                        </div>            
                        </div>
                        </div>
                      {/* 5 row */}


                      <div className="row mt-5 mb-3">
                        <div className="col-md-12">
                          <button  type='submit' className="float-end btn w-25  bgColor modalBtn">Next</button>
                          <button className="float-end btn w-25  btn-outline  backBtn mx-3">Back</button>
                        </div>
                      </div>
                      
                      
                        
                        </Form>
                      </Formik>

                            
                     </div>
                  </div>


                </div>
                {/*Partner Other taxable income */}


                  {/*Expenses */}
                <div className="row my-5">
                  <div className="col-md-12">
                    <div className="shadow px-4 py-4">
                      <h3 className="">Expenses
                      <div className="iconContainerLg">
                             <img className="img-fluid" src={dollarBag} alt="" />

                              </div></h3>

                              <Formik initialValues={Client_initialValues} validationSchema={Client_validationSchema} onSubmit={Client_onSubmit}>
                                <Form>
                                  
                       {/* 1 row */}
                        <div className="row">
                        <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="totalGeneralLivingCosts" className="form-label">Total General Living Costs</   label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="totalGeneralLivingCosts" name="totalGeneralLivingCosts" placeholder="Total General Living Costs"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name="totalGeneralLivingCosts" />
                        </div>            
                        </div>

                         <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="incomeInRetirement" className="form-label">How much Income do you want to have in retirement?</   label>
                          <Field type="number" className="form-control shadow inputDesign" id="incomeInRetirement"
                           name='incomeInRetirement' placeholder="How much Income do you want to have in retirement"/>
                           <ErrorMessage component='div' className='text-danger fw-bold' name="incomeInRetirement" />
                        </div>            
                        </div>
                        </div>
                      {/* 1 row */}

                      {/* 2 row */}
                        <div className="row">
                        <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="" className="form-label">
                          Use Business Expense Schedule
                        </label>
                        <div>
                          <button
                            className=" btn 
                            btn-outline-success "
                            onClick={handleShow}
                          >
                            <div className="iconContainer mx-1">
                            <img className="img-fluid" src={plus} alt="" />

                            </div>
                            Use Budget Planner
                          </button>
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
                              Budget Planner 
                              <div className="iconContainerLg">
                             <img className="img-fluid" src={noteBook} alt="" />
                              </div>
                              
                             </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <div className="row text-light bgColorIncome py-2 my-1">
                              <div className="col-md-6">
                                <label className="form-label mb-0">Total Expense</label>
                              </div>
                              <div className="col-md-6">
                              <label id="HouseholdTotalValue" 
                              className="float-end form-label mb-0">
                                 $ 2500
                                 <div className="iconContainer mx-1">
                             <img className="img-fluid" src={moneyBag} alt="" />

                              </div>
                                 </label>
                              </div>
                              </div>

                              {/* houseHold */}
                              <div className="row ">
                            <div 
                             onClick={() => setOpen(!open)}
                             aria-controls=""
                             aria-expanded={open}
                             className="bgColorIncome   py-2 text-light"
                             >
                              <div className="row">
                              <div className="col-md-6">
                                <label className="form-label mb-0">Household</label>
                              </div>
                              <div className="col-md-6">
                              <label id="HouseholdTotalValue" className="float-end form-label mb-0">$0
                              <div className="iconContainer mx-1">
                             <img className="img-fluid" src={down} alt="" />

                              </div>
                              </label>
                              </div>
                              </div>
                              

                            </div>
                            <div>
                              
                            </div>
                            <Collapse Collapse in={open}>

                              <div className="row">
                                <div className="col-md-12">

                                  {/* houseHold row 1 */}
                                  <div className="row  my-3">
                                
                                {/* Rent */}
                                   <div className="col-md-6">
                                   
                                <div className="row">
                                  <div className="col-7">
                                  <label htmlFor="houseHoldrent" className="form-label">
                                  Rent
                                </label>
                                <input type="number" className="form-control inputDesign shadow"
                                id="houseHoldrent" placeholder="Rent"/>
    
                                  </div>
                                  <div className="col-5">
                                  <label htmlFor="" className="form-label float-end">
                                $0 
                                </label>
                                  <select
                                  id="houseHoldrentType"
                                  className="form-select shadow  inputDesign"
                                >
                                  <option>Select</option>
                                  <option value="Weekly">Weekly</option>
                                  <option value="Fortnightly">Fortnightly</option>
                                  <option value="Monthly">Monthly</option>
                                  <option value="Quarterly">Quarterly</option>
                                  <option value="Six-Monthly">Six-Monthly</option>
                                  <option value="Annually">Annually</option>
                                  

                                  
    
                          
                                 </select>
                                  </div>
                                </div>
                                  </div>
                                {/* Rent */}
    
                                {/* Electricity */}
                                <div className="col-md-6">
                                <div className="row">
                                  <div className="col-7">
                                  <label htmlFor="houseHoldElectricity" className="form-label">
                                  Electricity
                                </label>
                                <input type="number" className="form-control inputDesign shadow"
                                id="houseHoldElectricity" placeholder="Electricity"/>
    
                                  </div>
                                  <div className="col-5">
                                  <label htmlFor="" className="form-label float-end">
                                $0 
                                </label>
                                <select
                                  id="houseHoldElectricityType"
                                  className="form-select shadow  inputDesign"
                                >
                                  <option>Select</option>
                                  <option value="Weekly">Weekly</option>
                                  <option value="Fortnightly">Fortnightly</option>
                                  <option value="Monthly">Monthly</option>
                                  <option value="Quarterly">Quarterly</option>
                                  <option value="Six-Monthly">Six-Monthly</option>
                                  <option value="Annually">Annually</option>
                                  

                                  
    
                          
                                 </select>
                                  </div>
                                </div>
                                </div>
                                {/* Electricity */}
    
                                  </div>
                                  {/* houseHold row 1 */}

                                  {/* houseHold row 2 */}
                                  <div className="row  my-3">
                                
                                {/* Water Rates*/}
                                   <div className="col-md-6">
                                   <div className="row">
                                  <div className="col-7">
                                  <label htmlFor="houseHoldWaterRates" className="form-label">
                                  Water Rates
                                </label>
                                <input type="number" className="form-control inputDesign shadow"
                                id="houseHoldWaterRates" placeholder="Water Rates"/>
    
                                  </div>
                                  <div className="col-5">
                                  <label id="houseHoldWaterRateValue" className="form-label float-end">
                                $0 
                                </label>
                                  <select
                                  id="houseHoldWaterRateType"
                                  className="form-select shadow  inputDesign"
                                >
                                  <option>Select</option>
                                  <option value="Weekly">Weekly</option>
                                  <option value="Fortnightly">Fortnightly</option>
                                  <option value="Monthly">Monthly</option>
                                  <option value="Quarterly">Quarterly</option>
                                  <option value="Six-Monthly">Six-Monthly</option>
                                  <option value="Annually">Annually</option>
                                  
                                  </select>
                                  </div>
                                  </div>
                                 </div>
                                {/* Water Rates */}
    
                                {/* Gas */}
                                <div className="col-md-6">
                                
                                <div className="row">
                                  <div className="col-7">
                                  <label htmlFor="houseHoldGas" className="form-label">
                                  Gas
                                </label>
                                <input type="number" className="form-control inputDesign shadow"
                                id="houseHoldGas" placeholder="Gas"/>
    
                                  </div>
                                  <div className="col-5">
                                  <label   id="houseHoldGasValue" className="form-label float-end ">
                                  $0
                                </label>
                                 <select
                                  id="houseHoldGasType"
                                  className="form-select shadow  inputDesign"
                                >
                                  <option>Select</option>
                                  <option value="Weekly">Weekly</option>
                                  <option value="Fortnightly">Fortnightly</option>
                                  <option value="Monthly">Monthly</option>
                                  <option value="Quarterly">Quarterly</option>
                                  <option value="Six-Monthly">Six-Monthly</option>
                                  <option value="Annually">Annually</option>
                                   </select> </div>
                                </div>
                                 
                                </div>
                                {/* Gas */}
                                </div>
                                  {/* houseHold row 2 */}

                                    {/* houseHold row 3 */}
                                    <div className="row  my-3">
                                
                                {/* Phone*/}
                                   <div className="col-md-6">
                                   <div className="row">
                                  <div className="col-7">
                                  <label htmlFor="houseHoldPhone" className="form-label">
                                  Phone
                                </label>
                                <input type="number" className="form-control inputDesign shadow"
                                id="houseHoldPhone" placeholder="Phone"/>
    
                                  </div>
                                  <div className="col-5">
                                  <label id="houseHoldPhoneValue" className="form-label float-end">
                                $0 
                                </label>
                                  <select
                                  id="houseHoldPhoneType"
                                  className="form-select shadow  inputDesign"
                                >
                                  <option>Select</option>
                                  <option value="Weekly">Weekly</option>
                                  <option value="Fortnightly">Fortnightly</option>
                                  <option value="Monthly">Monthly</option>
                                  <option value="Quarterly">Quarterly</option>
                                  <option value="Six-Monthly">Six-Monthly</option>
                                  <option value="Annually">Annually</option>
                                  
                                  </select>
                                  </div>
                                  </div>
                                 </div>
                                {/* Phone */}
    
                                {/* Council Rates */}
                                <div className="col-md-6">
                                
                                <div className="row">
                                  <div className="col-7">
                                  <label htmlFor="houseHoldCouncilRates" className="form-label">
                                  Council Rates
                                </label>
                                <input type="number" className="form-control inputDesign shadow"
                                id="houseHoldCouncilRates" placeholder="Council Rates"/>
    
                                  </div>
                                  <div className="col-5">
                                  <label   id="houseHoldCouncilRatesValue" className="form-label float-end ">
                                  $0
                                </label>
                                 <select
                                  id="houseHoldCouncilRatesType"
                                  className="form-select shadow  inputDesign"
                                >
                                  <option>Select</option>
                                  <option value="Weekly">Weekly</option>
                                  <option value="Fortnightly">Fortnightly</option>
                                  <option value="Monthly">Monthly</option>
                                  <option value="Quarterly">Quarterly</option>
                                  <option value="Six-Monthly">Six-Monthly</option>
                                  <option value="Annually">Annually</option>
                                   </select> </div>
                                </div>
                                 
                                </div>
                                {/* Council Rates */}
                                    </div>
                                    {/* houseHold row 3 */}


                                      {/* houseHold row 4 */}
                                      <div className="row  my-3">
                                
                                {/* Internet */}
                                <div className="col-md-6">
                                
                                <div className="row">
                                  <div className="col-7">
                                  <label htmlFor="houseHoldInternet" className="form-label">
                                  Internet
                                </label>
                                <input type="number" className="form-control inputDesign shadow"
                                id="houseHoldInternet" placeholder="Internet"/>
    
                                  </div>
                                  <div className="col-5">
                                  <label   id="houseHoldInternetValue" className="form-label float-end ">
                                  $0
                                </label>
                                 <select
                                  id="houseHoldInternetType"
                                  className="form-select shadow  inputDesign"
                                >
                                  <option>Select</option>
                                  <option value="Weekly">Weekly</option>
                                  <option value="Fortnightly">Fortnightly</option>
                                  <option value="Monthly">Monthly</option>
                                  <option value="Quarterly">Quarterly</option>
                                  <option value="Six-Monthly">Six-Monthly</option>
                                  <option value="Annually">Annually</option>
                                   </select> </div>
                                </div>
                                 
                                </div>
                                {/* Internet*/}
                                  {/* Other */}
                                  <div className="col-md-6">
                                
                                <div className="row">
                                  <div className="col-7">
                                  <label htmlFor="houseHoldOther" className="form-label">
                                  Other
                                </label>
                                <input type="number" className="form-control inputDesign shadow"
                                id="houseHoldOther" placeholder="Other"/>
    
                                  </div>
                                  <div className="col-5">
                                  <label   id="houseHoldOtherValue" className="form-label float-end ">
                                  $0
                                </label>
                                 <select
                                  id="houseHoldOtherType"
                                  className="form-select shadow  inputDesign"
                                >
                                  <option>Select</option>
                                  <option value="Weekly">Weekly</option>
                                  <option value="Fortnightly">Fortnightly</option>
                                  <option value="Monthly">Monthly</option>
                                  <option value="Quarterly">Quarterly</option>
                                  <option value="Six-Monthly">Six-Monthly</option>
                                  <option value="Annually">Annually</option>
                                   </select> </div>
                                </div>
                                 
                                </div>
                                {/* Internet*/}

                                
                                     </div>
                                    {/* houseHold row 4 */}
                                  
                                  
                                   </div>
                              </div>
                            
                             
                           
                            </Collapse>
                              </div>
                               {/* houseHold*/}

                                {/* Personal   */}
                              <div className="row my-1">
                            <div 
                             onClick={() => setOpen2(!open2)}
                             aria-controls=""
                             aria-expanded={open2}
                             className="bgColorIncome   py-2 text-light"
                             >
                              <div className="row ">
                              <div className="col-md-6">
                                <label className="form-label mb-0">Personal</label>
                              </div>
                              <div className="col-md-6">
                              <label className="float-end mb-0">$0
                              <div className="iconContainer mx-1">
                             <img className="img-fluid" src={down} alt="" />

                              </div></label>
                              </div>
                              </div>
                              

                            </div>
                            <div>
                              
                            </div>
                            <Collapse Collapse in={open2}>

                              <div className="row">
                                <div className="col-md-12">

                                  {/* Personal    row 1 */}
                                  <div className="row  my-3">
                                
                                {/* Food */}
                                   <div className="col-md-6">
                                   
                                <div className="row">
                                  <div className="col-7">
                                  <label htmlFor="PersonalFood" className="form-label">
                                  Food
                                </label>
                                <input type="text" className="form-control inputDesign shadow"
                                id="PersonalFood" placeholder="Food"/>
    
                                  </div>
                                  <div className="col-5">
                                  <label htmlFor="PersonalFoodValue" className="form-label float-end">
                                $0 
                                </label>
                                  <select
                                  id="PersonalFoodType"
                                  className="form-select shadow  inputDesign"
                                >
                                  <option>Select</option>
                                  <option value="Weekly">Weekly</option>
                                  <option value="Fortnightly">Fortnightly</option>
                                  <option value="Monthly">Monthly</option>
                                  <option value="Quarterly">Quarterly</option>
                                  <option value="Six-Monthly">Six-Monthly</option>
                                  <option value="Annually">Annually</option>
                                  

                                  
    
                          
                                 </select>
                                  </div>
                                </div>
                                  </div>
                                {/* Food */}
    
                                {/* Clothing */}
                                <div className="col-md-6">
                                <div className="row">
                                  <div className="col-7">
                                  <label htmlFor="PersonalClothing" className="form-label">
                                  Clothing
                                </label>
                                <input type="text" className="form-control inputDesign shadow"
                                id="PersonalClothing" placeholder="Clothing"/>
    
                                  </div>
                                  <div className="col-5">
                                  <label id="PersonalClothingValue" className="form-label float-end">
                                $0 
                                </label>
                                <select
                                  id="PersonalClothingValueType"
                                  className="form-select shadow  inputDesign"
                                >
                                  <option>Select</option>
                                  <option value="Weekly">Weekly</option>
                                  <option value="Fortnightly">Fortnightly</option>
                                  <option value="Monthly">Monthly</option>
                                  <option value="Quarterly">Quarterly</option>
                                  <option value="Six-Monthly">Six-Monthly</option>
                                  <option value="Annually">Annually</option>
                                  

                                  
    
                          
                                 </select>
                                  </div>
                                </div>
                                </div>
                                {/* Clothing */}
    
                                  </div>
                                  {/* Personal    row 1 */}

                                  {/* Personal row 2 */}
                                  <div className="row  my-3">
                                
                                {/* Cigarettes*/}
                                   <div className="col-md-6">
                                   <div className="row">
                                  <div className="col-7">
                                  <label htmlFor="PersonalCigarettes" className="form-label">
                                  Cigarettes
                                </label>
                                <input type="text" className="form-control inputDesign shadow"
                                id="PersonalCigarettes" placeholder="Cigarettes"/>
    
                                  </div>
                                  <div className="col-5">
                                  <label id="PersonalCigarettesValue" className="form-label float-end">
                                $0 
                                </label>
                                  <select
                                  id="PersonalCigarettesType"
                                  className="form-select shadow  inputDesign"
                                >
                                  <option>Select</option>
                                  <option value="Weekly">Weekly</option>
                                  <option value="Fortnightly">Fortnightly</option>
                                  <option value="Monthly">Monthly</option>
                                  <option value="Quarterly">Quarterly</option>
                                  <option value="Six-Monthly">Six-Monthly</option>
                                  <option value="Annually">Annually</option>
                                  
                                  </select>
                                  </div>
                                  </div>
                                 </div>
                                {/* Cigarettes */}
    
                                {/* Alcohol */}
                                <div className="col-md-6">
                                
                                <div className="row">
                                  <div className="col-7">
                                  <label htmlFor="PersonalAlcohol" className="form-label">
                                  Alcohol
                                </label>
                                <input type="text" className="form-control inputDesign shadow"
                                id="PersonalAlcohol" placeholder="Alcohol"/>
    
                                  </div>
                                  <div className="col-5">
                                  <label   id="PersonalAlcoholValue" className="form-label float-end ">
                                  $0
                                </label>
                                 <select
                                  id="PersonalAlcoholType"
                                  className="form-select shadow  inputDesign"
                                >
                                  <option>Select</option>
                                  <option value="Weekly">Weekly</option>
                                  <option value="Fortnightly">Fortnightly</option>
                                  <option value="Monthly">Monthly</option>
                                  <option value="Quarterly">Quarterly</option>
                                  <option value="Six-Monthly">Six-Monthly</option>
                                  <option value="Annually">Annually</option>
                                   </select> </div>
                                </div>
                                 
                                </div>
                                {/* Alcohol */}
                                  </div>
                                  {/* Personal row 2 */}

                                    {/* Personal row 3 */}
                                    <div className="row  my-3">
                                
                                {/* Subscription Fees*/}
                                   <div className="col-md-6">
                                   <div className="row">
                                  <div className="col-7">
                                  <label htmlFor="PersonalSubscriptionFees" className="form-label">
                                  Subscription Fees
                                </label>
                                <input type="text" className="form-control inputDesign shadow"
                                id="PersonalSubscriptionFees" placeholder="Subscription Fees"/>
    
                                  </div>
                                  <div className="col-5">
                                  <label id="PersonalSubscriptionFeesValue" className="form-label float-end">
                                $0 
                                </label>
                                  <select
                                  id="PersonalSubscriptionFeesType"
                                  className="form-select shadow  inputDesign"
                                >
                                  <option>Select</option>
                                  <option value="Weekly">Weekly</option>
                                  <option value="Fortnightly">Fortnightly</option>
                                  <option value="Monthly">Monthly</option>
                                  <option value="Quarterly">Quarterly</option>
                                  <option value="Six-Monthly">Six-Monthly</option>
                                  <option value="Annually">Annually</option>
                                  
                                  </select>
                                  </div>
                                  </div>
                                  </div>
                                {/* Subscription Fees */}
    
                                {/* Memberships & Clubs */}
                                <div className="col-md-6">
                                
                                <div className="row">
                                  <div className="col-7">
                                  <label htmlFor="PersonalMembershipsClubs" className="form-label">
                                  Memberships & Clubs
                                </label>
                                <input type="text" className="form-control inputDesign shadow"
                                id="PersonalMembershipsClubs" placeholder="Memberships & Clubs"/>
    
                                  </div>
                                  <div className="col-5">
                                  <label   id="PersonalMembershipsClubsValue" className="form-label float-end ">
                                  $0
                                </label>
                                 <select
                                  id="PersonalMembershipsClubsType"
                                  className="form-select shadow  inputDesign"
                                >
                                  <option>Select</option>
                                  <option value="Weekly">Weekly</option>
                                  <option value="Fortnightly">Fortnightly</option>
                                  <option value="Monthly">Monthly</option>
                                  <option value="Quarterly">Quarterly</option>
                                  <option value="Six-Monthly">Six-Monthly</option>
                                  <option value="Annually">Annually</option>
                                   </select> </div>
                                </div>
                                 
                                </div>
                                {/* Memberships & Clubs */}
                                   </div>
                                    {/* Personal row 3 */}

                                    {/* Personal row 4 */}
                                  <div className="row  my-3">
                                
                                {/* Other*/}
                                   <div className="col-md-6">
                                   <div className="row">
                                  <div className="col-7">
                                  <label htmlFor="PersonalOther" className="form-label">
                                  Other
                                </label>
                                <input type="text" className="form-control inputDesign shadow"
                                id="PersonalOther" placeholder="Other"/>
    
                                  </div>
                                  <div className="col-5">
                                  <label id="PersonalOtherValue" className="form-label float-end">
                                $0 
                                </label>
                                  <select
                                  id="PersonalOtherType"
                                  className="form-select shadow  inputDesign"
                                >
                                  <option>Select</option>
                                  <option value="Weekly">Weekly</option>
                                  <option value="Fortnightly">Fortnightly</option>
                                  <option value="Monthly">Monthly</option>
                                  <option value="Quarterly">Quarterly</option>
                                  <option value="Six-Monthly">Six-Monthly</option>
                                  <option value="Annually">Annually</option>
                                  
                                  </select>
                                  </div>
                                  </div>
                                 </div>
                                {/* Other */}
    
                                {/* Holidays */}
                                <div className="col-md-6">
                                
                                <div className="row">
                                  <div className="col-7">
                                  <label htmlFor="PersonalHolidays" className="form-label">
                                  Holidays
                                </label>
                                <input type="text" className="form-control inputDesign shadow"
                                id="PersonalHolidays" placeholder="Holidays"/>
    
                                  </div>
                                  <div className="col-5">
                                  <label   id="PersonalHolidaysValue" className="form-label float-end ">
                                  $0
                                </label>
                                 <select
                                  id="PersonalHolidaysType"
                                  className="form-select shadow  inputDesign"
                                >
                                  <option>Select</option>
                                  <option value="Weekly">Weekly</option>
                                  <option value="Fortnightly">Fortnightly</option>
                                  <option value="Monthly">Monthly</option>
                                  <option value="Quarterly">Quarterly</option>
                                  <option value="Six-Monthly">Six-Monthly</option>
                                  <option value="Annually">Annually</option>
                                   </select> </div>
                                </div>
                                 
                                </div>
                                {/* Alcohol */}
                                  </div>
                                  {/* Personal row 4 */}

                                  
                                    {/* Personal row 5 */}
                                    <div className="row  my-3">
                                
                                {/* Dining Out*/}
                                   <div className="col-md-6">
                                   <div className="row">
                                  <div className="col-7">
                                  <label htmlFor="PersonalDiningOut" className="form-label">
                                  Dining Out
                                </label>
                                <input type="text" className="form-control inputDesign shadow"
                                id="PersonalDiningOut" placeholder="Dining Out"/>
    
                                  </div>
                                  <div className="col-5">
                                  <label id="PersonalDiningOutValue" className="form-label float-end">
                                $0 
                                </label>
                                  <select
                                  id="PersonalDiningOutType"
                                  className="form-select shadow  inputDesign"
                                >
                                  <option>Select</option>
                                  <option value="Weekly">Weekly</option>
                                  <option value="Fortnightly">Fortnightly</option>
                                  <option value="Monthly">Monthly</option>
                                  <option value="Quarterly">Quarterly</option>
                                  <option value="Six-Monthly">Six-Monthly</option>
                                  <option value="Annually">Annually</option>
                                  
                                  </select>
                                  </div>
                                  </div>
                                 </div>
                                {/* Dining Out */}
    
                                {/* Mobile Phone */}
                                <div className="col-md-6">
                                
                                <div className="row">
                                  <div className="col-7">
                                  <label htmlFor="PersonalMobilePhone" className="form-label">
                                  Mobile Phone
                                </label>
                                <input type="text" className="form-control inputDesign shadow"
                                id="PersonalMobilePhone" placeholder="Mobile Phone"/>
    
                                  </div>
                                  <div className="col-5">
                                  <label   id="PersonalMobilePhoneValue" className="form-label float-end ">
                                  $0
                                </label>
                                 <select
                                  id="PersonalMobilePhoneType"
                                  className="form-select shadow  inputDesign"
                                >
                                  <option>Select</option>
                                  <option value="Weekly">Weekly</option>
                                  <option value="Fortnightly">Fortnightly</option>
                                  <option value="Monthly">Monthly</option>
                                  <option value="Quarterly">Quarterly</option>
                                  <option value="Six-Monthly">Six-Monthly</option>
                                  <option value="Annually">Annually</option>
                                   </select> </div>
                                </div>
                                 
                                </div>
                                {/* Mobile Phone */}
                                    </div>
                                    {/* Personal row 5 */}


                                    {/* Personal row 5 */}
                                    <div className="row  my-3">
                                
                                {/* Dining Out*/}
                                   <div className="col-md-6">
                                   <div className="row">
                                  <div className="col-7">
                                  <label htmlFor="PersonalMedicalExpenses" className="form-label">
                                  Medical Expenses
                                </label>
                                <input type="text" className="form-control inputDesign shadow"
                                id="PersonalMedicalExpenses" placeholder="Medical Expenses"/>
    
                                  </div>
                                  <div className="col-5">
                                  <label id="PersonalMedicalExpensesValue" className="form-label float-end">
                                $0 
                                </label>
                                  <select
                                  id="PersonalMedicalExpensesType"
                                  className="form-select shadow  inputDesign"
                                >
                                  <option>Select</option>
                                  <option value="Weekly">Weekly</option>
                                  <option value="Fortnightly">Fortnightly</option>
                                  <option value="Monthly">Monthly</option>
                                  <option value="Quarterly">Quarterly</option>
                                  <option value="Six-Monthly">Six-Monthly</option>
                                  <option value="Annually">Annually</option>
                                  
                                  </select>
                                  </div>
                                  </div>
                                 </div>
                                {/* Medical Expenses */}
    
                              
                                    </div>
                                    {/* Personal row 6 */}
                                    
                                    
                                     </div>
                              </div>
                             </Collapse>
                              </div>
                               {/* Personal*/}

                                 {/* Transport */}
                              <div className="row my-1 ">
                            <div 
                             onClick={() => setOpen3(!open3)}
                             aria-controls=""
                             aria-expanded={open3}
                             className="bgColorIncome   py-2 text-light"
                             >
                              <div className="row">
                              <div className="col-md-6">
                                <label className="form-label mb-0">Transport</label>
                              </div>
                              <div className="col-md-6">
                              <label id="TransportTotalValue" className="float-end form-label mb-0">$0
                              <div className="iconContainer mx-1">
                             <img className="img-fluid" src={down} alt="" />

                              </div></label>
                              </div>
                              </div>
                              

                            </div>
                            <div>
                              
                            </div>
                            <Collapse Collapse in={open3}>

                              <div className="row">
                                <div className="col-md-12">

                                  {/* TransportPetrol   row 1 */}
                                  <div className="row  my-3">
                                {/* Petrol */}

                                   <div className="col-md-6">
                                   
                                <div className="row">
                                  
                                  <div className="col-7">
                                    <br />
                                  <label htmlFor="TransportPetrol" className="form-label">
                                  Petrol
                                </label>
                                <input type="number" className="form-control inputDesign shadow"
                                id="TransportPetrol" placeholder="Petrol"/>
    
                                  </div>
                                  <div className="col-5">
                                  <br />
                                  <label id="TransportPetrolValue" className="form-label float-end">
                                $0 
                                </label>
                                  <select
                                  id="TransportPetrolType"
                                  className="form-select shadow  inputDesign"
                                >
                                  <option>Select</option>
                                  <option value="Weekly">Weekly</option>
                                  <option value="Fortnightly">Fortnightly</option>
                                  <option value="Monthly">Monthly</option>
                                  <option value="Quarterly">Quarterly</option>
                                  <option value="Six-Monthly">Six-Monthly</option>
                                  <option value="Annually">Annually</option>
                                  

                                  
    
                          
                                 </select>
                                  </div>
                                </div>
                                  </div>
                                {/* Petrol */}
    
                                {/* Car Repairs & Maintenance */}
                                <div className="col-md-6">

                                 <div className="row">
                                     <div className="col-7">
                                     <label htmlFor="TransportCarRepairs" className="form-label">
                                     Car Repairs & Maintenance
                                   </label>
                                   <input type="number" className="form-control inputDesign shadow"
                                   id="TransportCarRepairs" placeholder="Car Repairs & Maintenance"/>
       
                                     </div>
                                     <div className="col-5">
                                    <br />

                                     <label id="TransportCarRepairsValue" className="form-label float-end">
                                   $0 
                                   </label>
                                     <select
                                     id="TransportCarRepairsType"
                                     className="form-select shadow  inputDesign"
                                   >
                                     <option>Select</option>
                                     <option value="Weekly">Weekly</option>
                                     <option value="Fortnightly">Fortnightly</option>
                                     <option value="Monthly">Monthly</option>
                                     <option value="Quarterly">Quarterly</option>
                                     <option value="Six-Monthly">Six-Monthly</option>
                                     <option value="Annually">Annually</option>
                                       </select>
                                     </div>
                                   </div>
                                     </div>
                                {/* Electricity */}
    
                                  </div>
                                  {/* Transport   row 1 */}

                                    {/* Transport  row 2 */}
                                    <div className="row  my-3">
                                {/* Car Registration */}
                                   <div className="col-md-6">
                                   
                                <div className="row">
                                  <div className="col-7">
                                  <label htmlFor="TransportCarRegistration" className="form-label">
                                  Car Registration
                                </label>
                                <input type="number" className="form-control inputDesign shadow"
                                id="TransportCarRegistration" placeholder="Car Registration"/>
    
                                  </div>
                                  <div className="col-5">
                                  <label id="TransportCarRegistrationValue" className="form-label float-end">
                                $0 
                                </label>
                                  <select
                                  id="TransportCarRegistrationType"
                                  className="form-select shadow  inputDesign"
                                >
                                  <option>Select</option>
                                  <option value="Weekly">Weekly</option>
                                  <option value="Fortnightly">Fortnightly</option>
                                  <option value="Monthly">Monthly</option>
                                  <option value="Quarterly">Quarterly</option>
                                  <option value="Six-Monthly">Six-Monthly</option>
                                  <option value="Annually">Annually</option>
                                  

                                  
    
                          
                                 </select>
                                  </div>
                                </div>
                                  </div>
                                {/* Car Registration */}
    
                                {/* Public Transport */}
                                <div className="col-md-6">
                                   <div className="row">
                                     <div className="col-7">
                                     <label htmlFor="PublicTransport" className="form-label">
                                     Public Transport
                                   </label>
                                   <input type="number" className="form-control inputDesign shadow"
                                   id="PublicTransport" placeholder="Public Transport"/>
       
                                     </div>
                                     <div className="col-5">
                                     <label id="PublicTransportValue" className="form-label float-end">
                                   $0 
                                   </label>
                                     <select
                                     id="PublicTransportType"
                                     className="form-select shadow  inputDesign"
                                   >
                                     <option>Select</option>
                                     <option value="Weekly">Weekly</option>
                                     <option value="Fortnightly">Fortnightly</option>
                                     <option value="Monthly">Monthly</option>
                                     <option value="Quarterly">Quarterly</option>
                                     <option value="Six-Monthly">Six-Monthly</option>
                                     <option value="Annually">Annually</option>
                                     
   
                                     
       
                             
                                    </select>
                                     </div>
                                   </div>
                                </div>
                                {/* Public Transport */}
    
                                    </div>
                                    {/* Transport   row 2 */}

                                      {/* Transport  row 3 */}
                                      <div className="row  my-3">
                                  {/* Other*/}
                                   <div className="col-md-6">
                                   
                                <div className="row">
                                  <div className="col-7">
                                  <label htmlFor="TransportOther" className="form-label">
                                  Other
                                </label>
                                <input type="number" className="form-control inputDesign shadow"
                                id="TransportOther" placeholder="Other"/>
    
                                  </div>
                                  <div className="col-5">
                                  <label id="TransportOtherValue" className="form-label float-end">
                                $0 
                                </label>
                                  <select
                                  id="TransportOtherType"
                                  className="form-select shadow  inputDesign"
                                >
                                  <option>Select</option>
                                  <option value="Weekly">Weekly</option>
                                  <option value="Fortnightly">Fortnightly</option>
                                  <option value="Monthly">Monthly</option>
                                  <option value="Quarterly">Quarterly</option>
                                  <option value="Six-Monthly">Six-Monthly</option>
                                  <option value="Annually">Annually</option>
                                  </select>
                                  </div>
                                </div>
                                  </div>
                                {/* Car Registration */}
    
                              </div>
                                    {/* Transport   row 3 */}

                              </div>
                              </div>
                            
                             
                           
                            </Collapse>
                              </div>
                               {/* Transport   */}

                                  {/* Insurance */}
                              <div className="row my-1">
                            <div 
                             onClick={() => setOpen4(!open4)}
                             aria-controls=""
                             aria-expanded={open4}
                             className="bgColorIncome   py-2 text-light"
                             >
                              <div className="row">
                              <div className="col-md-6">
                                <label className="form-label mb-0">Insurance</label>
                              </div>
                              <div className="col-md-6">
                              <label id="InsuranceTotalValue" className="float-end form-label mb-0">$0
                              <div className="iconContainer mx-1">
                             <img className="img-fluid" src={down} alt="" />

                              </div></label>
                              </div>
                              </div>
                              

                            </div>
                            <div>
                              
                            </div>
                            <Collapse Collapse in={open4}>

                              <div className="row">
                                <div className="col-md-12">

                                  {/* Insurance   row 1 */}
                                  <div className="row  my-3">
                                {/* Private Health */}

                                   <div className="col-md-6">
                                   
                                <div className="row">
                                  
                                  <div className="col-7">
                                  <label htmlFor="PrivateHealth" className="form-label">
                                  Private Health
                                </label>
                                <input type="number" className="form-control inputDesign shadow"
                                id="PrivateHealth" placeholder="Private Health"/>
    
                                  </div>
                                  <div className="col-5">
                                  <label id="PrivateHealthValue" className="form-label float-end">
                                $0 
                                </label>
                                  <select
                                  id="PrivateHealthType"
                                  className="form-select shadow  inputDesign"
                                >
                                  <option>Select</option>
                                  <option value="Weekly">Weekly</option>
                                  <option value="Fortnightly">Fortnightly</option>
                                  <option value="Monthly">Monthly</option>
                                  <option value="Quarterly">Quarterly</option>
                                  <option value="Six-Monthly">Six-Monthly</option>
                                  <option value="Annually">Annually</option>
                                  

                                  
    
                          
                                 </select>
                                  </div>
                                </div>
                                  </div>
                                {/* Private Health */}
    
                                {/* Life/TPD/Trauma */}
                                <div className="col-md-6">

                                 <div className="row">
                                     <div className="col-7">
                                     <label htmlFor="LifeTPDTrauma" className="form-label">
                                     Life/TPD/Trauma
                                   </label>
                                   <input type="number" className="form-control inputDesign shadow"
                                   id="LifeTPDTrauma" placeholder="Life/TPD/Trauma"/>
       
                                     </div>
                                     <div className="col-5">
                                <label id="LifeTPDTraumaValue" className="form-label float-end">
                                   $0 
                                   </label>
                                     <select
                                     id="LifeTPDTraumaType"
                                     className="form-select shadow  inputDesign"
                                   >
                                     <option>Select</option>
                                     <option value="Weekly">Weekly</option>
                                     <option value="Fortnightly">Fortnightly</option>
                                     <option value="Monthly">Monthly</option>
                                     <option value="Quarterly">Quarterly</option>
                                     <option value="Six-Monthly">Six-Monthly</option>
                                     <option value="Annually">Annually</option>
                                     
   
                                     
       
                             
                                    </select>
                                     </div>
                                   </div>
                                     </div>
                                {/* Life/TPD/Trauma */}
    
                                  </div>
                                  {/* Insurance   row 1 */}

                                    {/* Transport  row 2 */}
                                    <div className="row  my-3">
                                {/* Income Protection */}
                                   <div className="col-md-6">
                                   
                                <div className="row">
                                  <div className="col-7">
                                  <label htmlFor="InsuranceIncomeProtection" className="form-label">
                                  Income Protection
                                </label>
                                <input type="number" className="form-control inputDesign shadow"
                                id="InsuranceIncomeProtection" placeholder="Income Protection"/>
    
                                  </div>
                                  <div className="col-5">
                                  <label id="InsuranceIncomeProtectionValue" className="form-label float-end">
                                $0 
                                </label>
                                  <select
                                  id="InsuranceIncomeProtectionType"
                                  className="form-select shadow  inputDesign"
                                >
                                  <option>Select</option>
                                  <option value="Weekly">Weekly</option>
                                  <option value="Fortnightly">Fortnightly</option>
                                  <option value="Monthly">Monthly</option>
                                  <option value="Quarterly">Quarterly</option>
                                  <option value="Six-Monthly">Six-Monthly</option>
                                  <option value="Annually">Annually</option>
                                  

                                  
    
                          
                                 </select>
                                  </div>
                                </div>
                                  </div>
                                {/* Income Protection */}
    
                                {/* Car*/}
                                <div className="col-md-6">
                                   <div className="row">
                                     <div className="col-7">
                                     <label htmlFor="InsuranceCar" className="form-label">
                                     Car
                                   </label>
                                   <input type="number" className="form-control inputDesign shadow"
                                   id="InsuranceCar" placeholder="Car"/>
       
                                     </div>
                                     <div className="col-5">
                                     <label id="InsuranceCarValue" className="form-label float-end">
                                   $0 
                                   </label>
                                     <select
                                     id="InsuranceCarType"
                                     className="form-select shadow  inputDesign"
                                   >
                                     <option>Select</option>
                                     <option value="Weekly">Weekly</option>
                                     <option value="Fortnightly">Fortnightly</option>
                                     <option value="Monthly">Monthly</option>
                                     <option value="Quarterly">Quarterly</option>
                                     <option value="Six-Monthly">Six-Monthly</option>
                                     <option value="Annually">Annually</option>
                                     
   
                                     
       
                             
                                    </select>
                                     </div>
                                   </div>
                                </div>
                                {/* Car */}
    
                                    </div>
                                    {/* Insurance row 2 */}

                                      {/* Insurance row 3 */}
                                      <div className="row  my-3">
                                         {/* Other*/}
                                   <div className="col-md-6">
                                    <div className="row">
                                      <div className="col-7">
                                      <label htmlFor="InsuranceHomeContents" className="form-label">
                                      Home And Contents
                                    </label>
                                    <input type="number" className="form-control inputDesign shadow"
                                    id="InsuranceHomeContents" placeholder="Home And Contents"/>
        
                                      </div>
                                      <div className="col-5">
                                      <label id="InsuranceHomeContentsValue" className="form-label float-end">
                                    $0 
                                    </label>
                                      <select
                                      id="InsuranceHomeContentsType"
                                      className="form-select shadow  inputDesign"
                                    >
                                      <option>Select</option>
                                      <option value="Weekly">Weekly</option>
                                      <option value="Fortnightly">Fortnightly</option>
                                      <option value="Monthly">Monthly</option>
                                      <option value="Quarterly">Quarterly</option>
                                      <option value="Six-Monthly">Six-Monthly</option>
                                      <option value="Annually">Annually</option>
                                      </select>
                                      </div>
                                    </div>
                                  </div>
                                {/* Home And Contents */}
                                  {/* Other*/}
                                   <div className="col-md-6">
                                    <div className="row">
                                      <div className="col-7">
                                      <label htmlFor="InsuranceOther" className="form-label">
                                      Other
                                    </label>
                                    <input type="number" className="form-control inputDesign shadow"
                                    id="InsuranceOther" placeholder="Other"/>
        
                                      </div>
                                      <div className="col-5">
                                      <label id="TransInsuranceValue" className="form-label float-end">
                                    $0 
                                    </label>
                                      <select
                                      id="TransInsuranceType"
                                      className="form-select shadow  inputDesign"
                                    >
                                      <option>Select</option>
                                      <option value="Weekly">Weekly</option>
                                      <option value="Fortnightly">Fortnightly</option>
                                      <option value="Monthly">Monthly</option>
                                      <option value="Quarterly">Quarterly</option>
                                      <option value="Six-Monthly">Six-Monthly</option>
                                      <option value="Annually">Annually</option>
                                      </select>
                                      </div>
                                    </div>
                                  </div>
                                {/* Other */}
    
                              </div>
                                    {/* Insurance  row 3 */}

                              </div>
                              </div>
                            
                             
                           
                            </Collapse>
                              </div>
                               {/* Insurance    */}
                            
                            </Modal.Body>
                            <Modal.Footer>
                              <div className="col-md-12">
                                <button
                                  className="float-end btn w-25  bgColor modalBtn"
                                  onClick={handleClose}
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
                          </Modal>
                          {/* Business Expense Schedule */}
                        </div>

                        {/* --------------------------------------------------------------- */}
                      </div>
                    </div>
                        <div className="col-md-6">
                              <div className="mb-3">
                            <label  className="form-label">
                           Do you have any one off lumpsum expenses?
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="lumpsumExpensesradio" id="lumpsumExpensesopt1" />
                            <label htmlFor="lumpsumExpensesopt1" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="lumpsumExpensesradio" id="lumpsumExpensesopt2" />
                            <label htmlFor="lumpsumExpensesopt2" className="label2">
                              <span>NO</span>
                            </label>
                          </div>
                            </div>
                              </div>    
                        </div>
                        </div>
                      {/* 2 row */}

                       {/* 2 2nd part  row */}
                       <div className="row">

                       <div className="col-md-4">
                                <div className="mb-3">
                                <label htmlFor="" className="form-label">
                                Description
                                </label>
                                <Field
                                  id="lumpSumExpenseDescription"
                                  name='lumpSumExpenseDescription'
                                  className="form-select shadow inputDesign"
                                  as='select'
                                >
                                  <option value=''>Select</option>
                                  <option value="Content">Content</option>
                                  <option value="Motor Vehicle">Motor Vehicle</option>
                                  <option value="Boat">Boat</option>

                                  <option value="Caravan">Caravan</option>
                                  <option value="Other Lifestyle Assets">Other Lifestyle Assets</option>
                                  <option value="Home Renovation">Home Renovation</option>
                                  <option value="Holiday">Holiday</option>
                                  <option value="Other">Other</option>
                          
                                </Field>
                                <ErrorMessage component='div' className='text-danger fw-bold' name="lumpSumExpenseDescription" />
                                </div>
                       </div>
                        <div className="col-md-4">
                                <div className="mb-3">
                                <label htmlFor="" className="form-label">
                                Year
                                </label>
                                <Field
                                  id="lumpSumExpenseYear"
                                  name='lumpSumExpenseYear'
                                  className="form-select shadow  inputDesign"
                                  as='select'
                                >
                                  <option value=''>Select</option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                  <option value="5">5</option>
                                </Field>
                                <ErrorMessage component='div' className='text-danger fw-bold' name="lumpSumExpenseYear" />
                                </div>
                        </div>
                        <div className="col-md-4">
                        <div className="mb-3">
                          <label htmlFor="lumpSumExpenseAmount" className="form-label">Amount</   label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="lumpSumExpenseAmount" name="lumpSumExpenseAmount" placeholder="Amount"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name="lumpSumExpenseAmount" />
                        </div>            
                        </div>
                       
                       </div>
                       {/* 2 2nd part  row */}



                         {/* 3 row */}
                        <div className="row">
                        <div className="col-md-6">
                              <div className="mb-3">
                            <label  className="form-label">
                            Are you expecting any inheritances?
                            </label>
                          {/* switch button style */}
                            <div className="form-check form-switch m-0 p-0 ">
                          <div className="radiobutton">
                            <input type="radio" name="expectingInheritancesradio" id="expectingInheritancesopt1" />
                            <label htmlFor="expectingInheritancesopt1" className="label1">
                              <span>YES</span>
                            </label>
                            <input type="radio" name="expectingInheritancesradio" id="expectingInheritancesopt2" />
                            <label htmlFor="expectingInheritancesopt2" className="label2">
                              <span>NO</span>
                            </label>
                          </div>
                            </div>
                              </div>    
                        </div>
                        </div>
                         {/* 3 row */}

                        {/*3 2nd part  row*/}
                        <div className="row">

                        <div className="col-md-4">
                        <div className="mb-3">
                          <label htmlFor="expectingInheritancesDescription" className="form-label">Description</   label>
                          <Field type="text" className="form-control shadow inputDesign" 
                          id="expectingInheritancesDescription" name='expectingInheritancesDescription' placeholder="Amount"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name="expectingInheritancesDescription" />
                        </div>            
                        </div>
                        <div className="col-md-4">
                                <div className="mb-3">
                                <label htmlFor="" className="form-label">
                                Year
                                </label>
                                <Field
                                  id="expectingInheritancesYear"
                                  name='expectingInheritancesYear'
                                  className="form-select shadow  inputDesign"
                                  as='select'
                                >
                                  <option value=''>Select</option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                  <option value="5">5</option>
                                </Field>
                                <ErrorMessage component='div' className='text-danger fw-bold' name="expectingInheritancesYear" />
                                </div>
                        </div>
                        <div className="col-md-4">
                        <div className="mb-3">
                          <label htmlFor="expectingInheritancesAmount" className="form-label">Amount</   label>
                          <Field type="number" className="form-control shadow inputDesign" 
                          id="expectingInheritancesAmount" name="expectingInheritancesAmount" placeholder="Amount"/>
                          <ErrorMessage component='div' className='text-danger fw-bold' name="expectingInheritancesAmount" />
                        </div>            
                        </div>

                      </div>
                    {/* 3 2nd part  row*/}


                      <div className="row mt-5 mb-3">
                        <div className="col-md-12">
                          <button  type='submit' className="float-end btn w-25  bgColor modalBtn">Next</button>
                          <button className="float-end btn w-25  btn-outline  backBtn mx-3">Back</button>
                        </div>
                      </div>
                      
                      
                        
                                </Form>
                              </Formik>                              
                      
                {/*Expenses */}
                
                </div>
        </div>
      </div>
      </div></div>
      </div>
    </>
  );
};

export default IncomeExpenses;
