import React, { useEffect, useState } from "react";

function Options() {
  const [PostClient, setPostClient] = useState(true);
  const [EditClient, setEditClient] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("Edit") === "true") {
      setEditClient(true);
      setPostClient(false);
    } else if (localStorage.getItem("Edit") === "false") {
      setEditClient(false);
      setPostClient(true);
    }
  }, []);

  return (
    <div className="container-fluid mt-4">
      <div className="row m-0 px-0">
        <div className="col-md-12">
          {/* Conditions */}
          {/* {localStorage.getItem("EditClient") === "" ? (
            <div className="row">
              <div className="col-md-12">
                <div className="row px-4 py-5">
                  <div className="col-md-2 text-center">
                    <h5>
                      <b>
                        <a id="Options" href="/">
                          Personal Details
                        </a>
                      </b>
                    </h5>
                  </div>
                  <div className="col-md-2 text-center">
                    <h5>
                      <b>
                        <a id="Options" href="/Business-Tax-Structure">
                          Business Tax Structure
                        </a>
                      </b>
                    </h5>
                  </div>
                  <div className="col-md-2 text-center">
                    <h5>
                      <b>
                        <a id="Options" href="/Income-And-Expenses">
                          Income & Expense
                        </a>
                      </b>
                    </h5>
                  </div>
                  <div className="col-md-2 text-center">
                    <h5>
                      <b>
                        <a id="Options" href="/Professional-Advisors">
                          Professional Advisors
                        </a>
                      </b>
                    </h5>
                  </div>
                  <div className="col-md-2 text-center">
                    <h5>
                      <b>
                        <a id="Options" href="/Assets-And-Liabilities">
                          Assets & Liabilities
                        </a>
                      </b>
                    </h5>
                  </div>
                  <div className="col-md-2 text-center">
                    <h5>
                      <b>
                        <a id="Options" href="/Investments">
                          Investments
                        </a>
                      </b>
                    </h5>
                  </div>
                </div>
                <div className="row px-4 py-5">
                  <div className="col-md-2 text-center">
                    <h5>
                      <b>
                        <a id="Options" href="/Estate-Planning">
                          Estate Planning
                        </a>
                      </b>
                    </h5>
                  </div>
                  <div className="col-md-2 text-center">
                    <h5>
                      <b>
                        <a id="Options" href="/Super-And-Retirment">
                          Super & Retirment
                        </a>
                      </b>
                    </h5>
                  </div>
                  <div className="col-md-2 text-center">
                    <h5>
                      <b>
                        <a id="Options" href="/SMSF">
                          SMSF
                        </a>
                      </b>
                    </h5>
                  </div>
                  <div className="col-md-2 text-center">
                    <h5>
                      <b>
                        <a id="Options" href="/Investment-Trust">
                          Investment Trust
                        </a>
                      </b>
                    </h5>
                  </div>
                  <div className="col-md-2 text-center">
                    <h5>
                      <b>
                        <a id="Options" href="/Personal-Insurance">
                          Personal Insurance
                        </a>
                      </b>
                    </h5>
                  </div>
                  <div className="col-md-2 text-center">
                    <h5>
                      <b>
                        <a id="Options" href="/Client-Declaration">
                          Client Declaration
                        </a>
                      </b>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="row">
              <div className="col-md-12">
                <div className="row px-4 py-5">
                  <div className="col-md-2 text-center">
                    <h5>
                      <b>
                        <a id="Options" href="/Edit-Client">
                          Personal Details
                        </a>
                      </b>
                    </h5>
                  </div>
                  <div className="col-md-2 text-center">
                    <h5>
                      <b>
                        <a id="Options" href="/Edit-Business-Tax-Structure">
                          Business Tax Structure
                        </a>
                      </b>
                    </h5>
                  </div>
                  <div className="col-md-2 text-center">
                    <h5>
                      <b>
                        <a id="Options" href="/Edit-Income-And-Expenses">
                          Income & Expense
                        </a>
                      </b>
                    </h5>
                  </div>
                  <div className="col-md-2 text-center">
                    <h5>
                      <b>
                        <a id="Options" href="/Edit-Professional-Advisors">
                          Professional Advisors
                        </a>
                      </b>
                    </h5>
                  </div>
                  <div className="col-md-2 text-center">
                    <h5>
                      <b>
                        <a id="Options" href="/Edit-Assets-And-Liabilities">
                          Assets & Liabilities
                        </a>
                      </b>
                    </h5>
                  </div>
                  <div className="col-md-2 text-center">
                    <h5>
                      <b>
                        <a id="Options" href="/Edit-Investments">
                          Investments
                        </a>
                      </b>
                    </h5>
                  </div>
                </div>
                <div className="row px-4 py-5">
                  <div className="col-md-2 text-center">
                    <h5>
                      <b>
                        <a id="Options" href="/Edit-Estate-Planning">
                          Estate Planning
                        </a>
                      </b>
                    </h5>
                  </div>
                  <div className="col-md-2 text-center">
                    <h5>
                      <b>
                        <a id="Options" href="/Edit-Super-And-Retirment">
                          Super & Retirment
                        </a>
                      </b>
                    </h5>
                  </div>
                  <div className="col-md-2 text-center">
                    <h5>
                      <b>
                        <a id="Options" href="/Edit-SMSF">
                          SMSF
                        </a>
                      </b>
                    </h5>
                  </div>
                  <div className="col-md-2 text-center">
                    <h5>
                      <b>
                        <a id="Options" href="/Edit-Investment-Trust">
                          Investment Trust
                        </a>
                      </b>
                    </h5>
                  </div>
                  <div className="col-md-2 text-center">
                    <h5>
                      <b>
                        <a id="Options" href="/Edit-Personal-Insurance">
                          Personal Insurance
                        </a>
                      </b>
                    </h5>
                  </div>
                  <div className="col-md-2 text-center">
                    <h5>
                      <b>
                        <a id="Options" href="/Edit-Client-Declaration">
                          Client Declaration
                        </a>
                      </b>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          )} */}
          {PostClient && (
            <div className="row">
              <div className="col-md-12">
                <div className="row px-4 py-5">
                  <div className="col-md-2 text-center">
                    <h5>
                      <b>
                        <a id="Options" href="/">
                          Personal Details
                        </a>
                      </b>
                    </h5>
                  </div>
                  <div className="col-md-2 text-center">
                    <h5>
                      <b>
                        <a id="Options" href="/Business-Tax-Structure">
                          Business Tax Structure
                        </a>
                      </b>
                    </h5>
                  </div>
                  <div className="col-md-2 text-center">
                    <h5>
                      <b>
                        <a id="Options" href="/Income-And-Expenses">
                          Income & Expense
                        </a>
                      </b>
                    </h5>
                  </div>
                  <div className="col-md-2 text-center">
                    <h5>
                      <b>
                        <a id="Options" href="/Professional-Advisors">
                          Professional Advisors
                        </a>
                      </b>
                    </h5>
                  </div>
                  <div className="col-md-2 text-center">
                    <h5>
                      <b>
                        <a id="Options" href="/Assets-And-Liabilities">
                          Assets & Liabilities
                        </a>
                      </b>
                    </h5>
                  </div>
                  <div className="col-md-2 text-center">
                    <h5>
                      <b>
                        <a id="Options" href="/Investments">
                          Investments
                        </a>
                      </b>
                    </h5>
                  </div>
                </div>
                <div className="row px-4 py-5">
                  <div className="col-md-2 text-center">
                    <h5>
                      <b>
                        <a id="Options" href="/Estate-Planning">
                          Estate Planning
                        </a>
                      </b>
                    </h5>
                  </div>
                  <div className="col-md-2 text-center">
                    <h5>
                      <b>
                        <a id="Options" href="/Super-And-Retirment">
                          Super & Retirment
                        </a>
                      </b>
                    </h5>
                  </div>
                  <div className="col-md-2 text-center">
                    <h5>
                      <b>
                        <a id="Options" href="/SMSF">
                          SMSF
                        </a>
                      </b>
                    </h5>
                  </div>
                  <div className="col-md-2 text-center">
                    <h5>
                      <b>
                        <a id="Options" href="/Investment-Trust">
                          Investment Trust
                        </a>
                      </b>
                    </h5>
                  </div>
                  <div className="col-md-2 text-center">
                    <h5>
                      <b>
                        <a id="Options" href="/Personal-Insurance">
                          Personal Insurance
                        </a>
                      </b>
                    </h5>
                  </div>
                  <div className="col-md-2 text-center">
                    <h5>
                      <b>
                        <a id="Options" href="/Client-Declaration">
                          Client Declaration
                        </a>
                      </b>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          )}

          {EditClient && (
            <div className="row">
              <div className="col-md-12">
                <div className="row px-4 py-5">
                  <div className="col-md-2 text-center">
                    <h5>
                      <b>
                        <a id="Options" href="/Edit-Client">
                          Personal Details
                        </a>
                      </b>
                    </h5>
                  </div>
                  <div className="col-md-2 text-center">
                    <h5>
                      <b>
                        <a id="Options" href="/Edit-Business-Tax-Structure">
                          Business Tax Structure
                        </a>
                      </b>
                    </h5>
                  </div>
                  <div className="col-md-2 text-center">
                    <h5>
                      <b>
                        <a id="Options" href="/Edit-Income-And-Expenses">
                          Income & Expense
                        </a>
                      </b>
                    </h5>
                  </div>
                  <div className="col-md-2 text-center">
                    <h5>
                      <b>
                        <a id="Options" href="/Edit-Professional-Advisors">
                          Professional Advisors
                        </a>
                      </b>
                    </h5>
                  </div>
                  <div className="col-md-2 text-center">
                    <h5>
                      <b>
                        <a id="Options" href="/Edit-Assets-And-Liabilities">
                          Assets & Liabilities
                        </a>
                      </b>
                    </h5>
                  </div>
                  <div className="col-md-2 text-center">
                    <h5>
                      <b>
                        <a id="Options" href="/Edit-Investments">
                          Investments
                        </a>
                      </b>
                    </h5>
                  </div>
                </div>
                <div className="row px-4 py-5">
                  <div className="col-md-2 text-center">
                    <h5>
                      <b>
                        <a id="Options" href="/Edit-Estate-Planning">
                          Estate Planning
                        </a>
                      </b>
                    </h5>
                  </div>
                  <div className="col-md-2 text-center">
                    <h5>
                      <b>
                        <a id="Options" href="/Edit-Super-And-Retirment">
                          Super & Retirment
                        </a>
                      </b>
                    </h5>
                  </div>
                  <div className="col-md-2 text-center">
                    <h5>
                      <b>
                        <a id="Options" href="/Edit-SMSF">
                          SMSF
                        </a>
                      </b>
                    </h5>
                  </div>
                  <div className="col-md-2 text-center">
                    <h5>
                      <b>
                        <a id="Options" href="/Edit-Investment-Trust">
                          Investment Trust
                        </a>
                      </b>
                    </h5>
                  </div>
                  <div className="col-md-2 text-center">
                    <h5>
                      <b>
                        <a id="Options" href="/Edit-Personal-Insurance">
                          Personal Insurance
                        </a>
                      </b>
                    </h5>
                  </div>
                  <div className="col-md-2 text-center">
                    <h5>
                      <b>
                        <a id="Options" href="/Edit-Client-Declaration">
                          Client Declaration
                        </a>
                      </b>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Options;
