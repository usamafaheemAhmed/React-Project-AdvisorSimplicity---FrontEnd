import React from "react";
import { Formik, Form, Field } from "formik";

const SameAddress = () => {
  return (
    <Formik
      initialValues={{
        billingAddress: "",
        shippingAddress: "",
        sameAddress: false
      }}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {({ values, handleChange }) => (
        <Form>
          <div>
            <label htmlFor="billingAddress">Billing Address:</label>
            <Field name="billingAddress" type="text" />
          </div>
          <div>
            <label htmlFor="shippingAddress">Shipping Address:</label>
            <Field
              name="shippingAddress"
              type="text"
              value={
                values.sameAddress
                  ? values.billingAddress
                  : values.shippingAddress
              }
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="sameAddress">
              Same as billing address:{" "}
              <input
                type="checkbox"
                name="sameAddress"
                checked={values.sameAddress}
                onChange={handleChange}
              />
            </label>
          </div>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default SameAddress;
