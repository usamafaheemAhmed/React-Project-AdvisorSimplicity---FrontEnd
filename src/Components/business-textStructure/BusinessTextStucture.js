import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";


import "./businessTextStructure.css"
import building from"./images/building.svg"
import plus from "./images/plus.svg"
import dealdone from "./images/deal-done.svg"
import businessman from "./images/businessman.svg"
import businessmen from "./images/businessmen.svg"
import trustbuilding from "./images/trustbuilding.svg"
import notebook from "./images/notebook.svg"




const BusinessTextStucture = () => {
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

  return (
    <>
      <div className="container-fluid mt-4 ">
        <div className="row m-0 px-0">
          <div className="col-md-2"></div>
          <div className="col-md-12">
            {/* -------------Sole Trader - Client----------------------------- */}
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
                        <input
                          type="text"
                          className="form-control shadow inputDesign"
                          id="soleBusinessName"
                          placeholder="Business Name"
                        />
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
                        <input
                          type="text"
                          className="form-control inputDesign shadow"
                          id="soleBusinessType"
                          placeholder="Business Type"
                        />
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
                        <input
                          type="number"
                          className="form-control inputDesign shadow"
                          id="soleIncomeGenerated"
                          placeholder="Income Generated"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="soloBusinessExpenses"
                          className="form-label"
                        >
                          Business Expenses
                        </label>
                        <input
                          type="number"
                          className="form-control inputDesign shadow"
                          id="soloBusinessExpenses"
                          placeholder="Business Expenses"
                        />
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
                          <button
                            className=" btn 
                            btn-outline-success "
                            onClick={handleShow}
                          >
                            <div className="iconContainer mx-1">
                            <img className="img-fluid" src={plus} alt="" />

                            </div>
                            Use Business Schedule
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
                                Business Expense Schedule
                                <div className="iconContainerLg">
                            <img className="img-fluid" src={notebook} alt="" />

                            </div>
                              </Modal.Title>
                            </Modal.Header>
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
                                    <input
                                      id="soleBusinessExpenses"
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
                                      htmlFor="soleRent"
                                      className="form-label"
                                    >
                                      Rent
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control inputDesign  shadow"
                                      id="soleRent"
                                      placeholder="Rent"
                                    />
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
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="soleLeaseCosts"
                                      placeholder="Lease Costs"
                                    />
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
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="soleInsurances"
                                      placeholder="Insurances"
                                    />
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
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="soleStaffCosts"
                                      placeholder="Staff Costs "
                                    />
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
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="soleRunningCosts"
                                      placeholder="Running Costs"
                                    />
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
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="soleTelephoneAndInternet"
                                      placeholder="Telephone and Internet "
                                    />
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
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="soleProfessionalFees"
                                      placeholder="Professional Fees"
                                    />
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
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="soleAllOther"
                                      placeholder="All Other"
                                    />
                                  </div>
                                </div>
                                {/* All Other */}
                              </div>
                              {/* row 5*/}
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
                        <label
                          htmlFor="soloNetBusinessIncome"
                          className="form-label"
                        >
                          Net Business Income
                        </label>
                        <input
                          type="number"
                          className="form-control inputDesign shadow"
                          id="soloNetBusinessIncome"
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                  {/*Third row*/}
                </div>
              </div>
            </div>
            {/* -------------Sole Trader - Client----------------------------- */}

            {/* -------------Sole Trader - Partner----------------------------- */}
            <div className="row my-5">
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
                        <input
                          type="text"
                          className="form-control inputDesign shadow inputDesign"
                          id="solePartnerBusinessName"
                          placeholder="Business Name"
                        />
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
                        <input
                          type="text"
                          className="form-control inputDesign shadow"
                          id="solePartnerBusinessType"
                          placeholder="Business Type"
                        />
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
                        <input
                          type="number"
                          className="form-control inputDesign shadow"
                          id="solePartnerIncomeGenerated"
                          placeholder="Income Generated"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="soloPartnerBusinessExpenses"
                          className="form-label"
                        >
                          Business Expenses
                        </label>
                        <input
                          type="number"
                          className="form-control inputDesign shadow"
                          id="soloPartnerBusinessExpenses"
                          placeholder="Business Expenses"
                        />
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
                          <button
                            className=" btn
                            btn-outline-success "
                            onClick={handleShowPartner}
                          >
                             <div className="iconContainer mx-1">
                            <img className="img-fluid" src={plus} alt="" />

                            </div>
                            Use Business Schedule
                          </button>
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
                            <Modal.Body>
                              {/*  first row*/}
                              <div className="row">
                                {/*  Business Expenses */}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="solePartnerBusinessExpenses"
                                      className="form-label"
                                    >
                                      Business Expenses
                                    </label>
                                    <input
                                      id="solePartnerBusinessExpenses"
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
                                    <input
                                      type="text"
                                      className="form-control inputDesign  shadow"
                                      id="solePartnerRent"
                                      placeholder="Rent"
                                    />
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
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="soleLeaseCosts"
                                      placeholder="Lease Costs"
                                    />
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
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="solePartnerInsurances"
                                      placeholder="Insurances"
                                    />
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
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="solePartnerStaffCosts"
                                      placeholder="Staff Costs "
                                    />
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
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="solePartnerRunningCosts"
                                      placeholder="Running Costs"
                                    />
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
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="solePartnerTelephoneAndInternet"
                                      placeholder="Telephone and Internet "
                                    />
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
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="solePartnerProfessionalFees"
                                      placeholder="Professional Fees"
                                    />
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
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="solePartnerAllOther"
                                      placeholder="All Other"
                                    />
                                  </div>
                                </div>
                                {/* All Other */}
                              </div>
                              {/* row 5*/}
                            </Modal.Body>
                            <Modal.Footer>
                              <div className="col-md-12">
                                <button
                                  className="float-end btn w-25  bgColor modalBtn"
                                  onClick={handleClosePartner}
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
                        <input
                          type="number"
                          className="form-control inputDesign shadow"
                          id="solePartnerNetBusinessIncome"
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                  {/*Third row*/}
                </div>
              </div>
            </div>
            {/* -------------Sole Trader - Partner----------------------------- */}

            {/*------ ------------------------------Partnership----------------------------- */}
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
                        <input
                          type="text"
                          className="form-control inputDesign shadow inputDesign"
                          id="clientsShareofPartnership"
                          placeholder="Client’s Share of Partnership"
                        />
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
                        <input
                          type="text"
                          className="form-control inputDesign shadow"
                          id="partnersShareofPartnership"
                          placeholder="Partner’s Share of Partnership"
                        />
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
                        <input
                          type="number"
                          className="form-control inputDesign shadow"
                          id="partnershipName"
                          placeholder="Partnership Name"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="businessType" className="form-label">
                          Business Type
                        </label>
                        <input
                          type="number"
                          className="form-control inputDesign shadow"
                          id="businessType"
                          placeholder="Business Type"
                        />
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
                        <input
                          type="number"
                          className="form-control inputDesign shadow"
                          id="incomeGenerated"
                          placeholder="Income Generated"
                        />
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
                        <input
                          type="number"
                          className="form-control inputDesign shadow"
                          id="businessExpenses"
                          placeholder="Business Expenses"
                        />
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
                          <button
                            className=" btn btn-outline-success "
                            onClick={handleShowPartnership}
                          >
                            <div className="iconContainer mx-1">
                            <img className="img-fluid" src={plus} alt="" />

                            </div>
                            Use Business Schedule
                          </button>
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
                                    <input
                                      id="partnershipBusinessExpenses"
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
                                    <input
                                      type="text"
                                      className="form-control inputDesign  shadow"
                                      id="partnershipRent"
                                      placeholder="Rent"
                                    />
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
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="partnershipLeaseCosts"
                                      placeholder="Lease Costs"
                                    />
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
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="partnershipInsurances"
                                      placeholder="Insurances"
                                    />
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
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="partnershipStaffCostWages"
                                      placeholder="Staff Costs "
                                    />
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
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="partnershipWageTakingByClient"
                                      placeholder="Wage taking by Client"
                                    />
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
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="partnerWageTakenByPartner"
                                      placeholder="Wage taken by Partner"
                                    />
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
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="partnershipRunningCosts"
                                      placeholder="Running Costs(Utilities)"
                                    />
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
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="partnershipTelephoneAndInternet"
                                      placeholder="Telephone and Internet "
                                    />
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
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="partnershipProfessionalFees"
                                      placeholder="Professional Fees"
                                    />
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
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="partnershipAllOther"
                                      placeholder="All Other"
                                    />
                                  </div>
                                </div>
                                {/* All Other */}
                              </div>
                              {/* row 6*/}
                            </Modal.Body>
                            <Modal.Footer>
                              <div className="col-md-12">
                                <button
                                  className="float-end btn w-25  bgColor modalBtn"
                                  onClick={handleClosePartnership}
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
                          </Modal>
                          {/* Business Expense Schedule */}
                        </div>

                        {/* ---------------------Model---------------------------- */}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="soloNetBusinessIncome"
                          className="form-label"
                        >
                          Net Business Income
                        </label>
                        <input
                          type="number"
                          className="form-control inputDesign shadow"
                          id="soloNetBusinessIncome"
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                  {/*four row*/}
                </div>
              </div>
            </div>
            {/* -------------Partnership----------------------------- */}

            {/*------ ------------------------------Private Company----------------------------- */}
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
                        <input
                          type="text"
                          className="form-control inputDesign shadow inputDesign"
                          id="privateNameOfCompany"
                          placeholder="Name of Company"
                        />
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
                        <input
                          type="text"
                          className="form-control inputDesign shadow"
                          id="privateNetAssetValueofCompany"
                          placeholder="Net Asset Value of Company"
                        />
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
                        <input
                          type="Text"
                          className="form-control inputDesign shadow"
                          id="privateTradingName"
                          placeholder="Trading Name"
                        />
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
                        <input
                          type="number"
                          className="form-control inputDesign shadow"
                          id="privateTotalRevenue"
                          placeholder="Total Revenue"
                        />
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
                        <input
                          type="text"
                          className="form-control inputDesign shadow"
                          id="privateBusinessType"
                          placeholder="Business Type"
                        />
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
                        <input
                          type="number"
                          className="form-control inputDesign shadow"
                          id="PrivatebusinessExpenses"
                          placeholder="Business Expenses"
                        />
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
                        <select
                          id="privateDirectorsDetail"
                          className="form-select shadow  inputDesign"
                        >
                          <option>Select</option>
                          <option value="Client">Client</option>
                          <option value="Partner">Partner</option>
                          <option value="Client & Partner">Client & Partner</option>
                          
                        </select>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="" className="form-label">
                          Use Business Expense Schedule
                        </label>
                        <div>
                          <button
                            className=" btn 
                            btn-outline-success "
                            onClick={handleShowPrivate}
                          >
                             <div className="iconContainer mx-1">
                            <img className="img-fluid" src={plus} alt="" />

                            </div>
                            Use Business Schedule
                          </button>
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
                            <Modal.Body>
                              {/*  first row*/}
                              <div className="row">
                                {/*  Business Expenses */}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="privateBusinessExpenses"
                                      className="form-label"
                                    >
                                      Business Expenses
                                    </label>
                                    <input
                                      id="privateBusinessExpenses"
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
                                    <input
                                      type="text"
                                      className="form-control inputDesign  shadow"
                                      id="privateRent"
                                      placeholder="Rent"
                                    />
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
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="privateLeaseCosts"
                                      placeholder="Lease Costs"
                                    />
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
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="privateInsurances"
                                      placeholder="Insurances"
                                    />
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
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="privateRunningCosts"
                                      placeholder="Running Costs(Utilities)"
                                    />
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
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="privateStaffCostWages"
                                      placeholder="Staff Costs "
                                    />
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
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="privateWageTakingByClient"
                                      placeholder="Wage taking by Client"
                                    />
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
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="privateSuperForClient"
                                      placeholder="Super For Client"
                                    />
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
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="privateWageTakenByPartner"
                                      placeholder="Wage taken by Partner"
                                    />
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
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="privateSuperForPartner"
                                      placeholder="Super For Partner"
                                    />
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
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="privateTelephoneAndInternet"
                                      placeholder="Telephone and Internet "
                                    />
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
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="privateProfessionalFees"
                                      placeholder="Professional Fees"
                                    />
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
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="privateAllOther"
                                      placeholder="All Other"
                                    />
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
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="privateLoanRepayments"
                                      placeholder="Loan Repayments"
                                    />
                                  </div>
                                </div>
                                {/* Loan Repayments*/}
                              </div>
                              {/* row 7*/}
                            </Modal.Body>
                            <Modal.Footer>
                              <div className="col-md-12">
                                <button
                                  className="float-end btn w-25  bgColor modalBtn"
                                  onClick={handleClosePrivate}
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
                        <input
                          type="text"
                          className="form-control inputDesign shadow"
                          id="privateClientsshareholding"
                          placeholder="Client’s shareholding %"
                        />
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
                        <input
                          type="number"
                          className="form-control inputDesign shadow"
                          id="privatePartnersShareholding"
                          placeholder="Partner’s shareholding %"
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
                      Dividends Taken As Cash?
                      </label>
                     
                             {/* switch button style */}
                                <div className="form-check form-switch m-0 p-0 ">
                              <div className="radiobutton">
                                <input type="radio" name="dividendsTakenradio" id="dividendsTakenopt1" />
                                <label htmlFor="dividendsTakenopt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="dividendsTakenradio" id="dividendsTakenopt2" />
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
                        <input
                          type="number"
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
                 <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="privateClient"
                          className="form-label"
                        >
                          Client %
                        </label>
                        <input
                          type="number"
                          className="form-control inputDesign shadow"
                          id="privateClient"
                          placeholder="Client %"
                        />
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
                        <input
                          type="number"
                          className="form-control inputDesign shadow"
                          id="privatePartner"
                          placeholder="Partner %"
                        />
                      </div>
                    </div>
                  </div>
                  {/*7 row*/}


                </div>
              </div>
            </div>
            {/* -------------Private Company----------------------------- */}


                 {/*------ ------------------------------Business Trust----------------------------- */}
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
                        <input
                          type="text"
                          className="form-control inputDesign shadow inputDesign"
                          id="NameofTrust"
                          placeholder="Name of Trust"
                        />
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
                        <input
                          type="text"
                          className="form-control inputDesign shadow"
                          id="netAssetValueofBusinessTrust"
                          placeholder="Net Asset Value of Business Trust"
                        />
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
                        <input
                          type="Text"
                          className="form-control inputDesign shadow"
                          id="trustTradingName"
                          placeholder="Trading Name"
                        />
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
                        <input
                          type="number"
                          className="form-control inputDesign shadow"
                          id="trustTotalRevenue"
                          placeholder="Total Revenue"
                        />
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
                        <input
                          type="text"
                          className="form-control inputDesign shadow"
                          id="trustBusinessType"
                          placeholder="Business Type"
                        />
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
                        <input
                          type="number"
                          className="form-control inputDesign shadow"
                          id="trustBusinessExpenses"
                          placeholder="Business Expenses"
                        />
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
                        <input
                          type="number"
                          className="form-control inputDesign shadow"
                          id="trustClientShareofDistribution"
                          placeholder="Client’s share of Distribution %"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="" className="form-label">
                          Use Business Expense Schedule
                        </label>
                        <div>
                          <button
                            className=" btn 
                            btn-outline-success"
                            onClick={handleShowTrust}
                          >
                             <div className="iconContainer mx-1">
                            <img className="img-fluid" src={plus} alt="" />

                            </div>
                            Use Business Schedule
                          </button>
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
                            <Modal.Body>
                              {/*  first row*/}
                              <div className="row">
                                {/*  Business Expenses */}
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      htmlFor="trustBusinessExpenses"
                                      className="form-label"
                                    >
                                      Business Expenses
                                    </label>
                                    <input
                                      id="trustBusinessExpenses"
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
                                    <input
                                      type="text"
                                      className="form-control inputDesign  shadow"
                                      id="trustRent"
                                      placeholder="Rent"
                                    />
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
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="trustLeaseCosts"
                                      placeholder="Lease Costs"
                                    />
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
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="trustInsurances"
                                      placeholder="Insurances"
                                    />
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
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="trustRunningCosts"
                                      placeholder="Running Costs(Utilities)"
                                    />
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
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="trustStaffCostWages"
                                      placeholder="Staff Costs "
                                    />
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
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="trustWageTakingByClient"
                                      placeholder="Wage taking by Client"
                                    />
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
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="trustSuperForClient"
                                      placeholder="Super For Client"
                                    />
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
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="trustWageTakenByPartner"
                                      placeholder="Wage taken by Partner"
                                    />
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
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="trustSuperForPartner"
                                      placeholder="Super For Partner"
                                    />
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
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="trustTelephoneAndInternet"
                                      placeholder="Telephone and Internet "
                                    />
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
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="trustProfessionalFees"
                                      placeholder="Professional Fees"
                                    />
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
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="trustAllOther"
                                      placeholder="All Other"
                                    />
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
                                    <input
                                      type="number"
                                      className="form-control inputDesign shadow"
                                      id="trustLoanRepayments"
                                      placeholder="Loan Repayments"
                                    />
                                  </div>
                                </div>
                                {/* Loan Repayments*/}
                              </div>
                              {/* row 7*/}
                            </Modal.Body>
                            <Modal.Footer>
                              <div className="col-md-12">
                                <button
                                  className="float-end btn w-25  bgColor modalBtn"
                                  onClick={handleCloseTrust}
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
                        <input
                          type="number"
                          className="form-control inputDesign shadow"
                          id="trustPartnerShareofDistribution"
                          placeholder="Partner's share of Distribution %"
                        />
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
                        <input
                          type="number"
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
                                <input type="radio" name="DistributionsTakenradio" id="DistributionsTakenopt1" />
                                <label htmlFor="DistributionsTakenopt1" className="label1">
                                  <span>YES</span>
                                </label>
                                <input type="radio" name="DistributionsTakenradio" id="DistributionsTakenopt2" />
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
                 <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="trustClient"
                          className="form-label"
                        >
                          Client %
                        </label>
                        <input
                          type="number"
                          className="form-control inputDesign shadow"
                          id="trustClient"
                          placeholder="Client %"
                        />
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
                        <input
                          type="number"
                          className="form-control inputDesign shadow"
                          id="trustPartner"
                          placeholder="Partner %"
                        />
                      </div>
                    </div>
                  </div>
                  {/*7 row*/}


                </div>
              </div>
            </div>
            {/* -------------Business Trust----------------------------- */}




          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessTextStucture;
