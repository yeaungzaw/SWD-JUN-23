import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

/* 
Formik => init
Form => html => form
Field => html => input
ErrorMessage => Error Text String
*/

const App = () => {
  const initialValue = {
    email: "",
    password: "",
  };

  const validationSchema = yup.object({
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid Email Format"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character"
      ),
  });

  const handleSubmit = (value) => {
    console.log(value);
  };

  return (
    <div style={{ width: "50%" }}>
      <Formik
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={false}
        // Custom Validate

        // validate={(values) => {
        //   const errors = {};
        //   if (!values.email) {
        //     errors.email = "Email is Required";
        //   } else if (
        //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        //   ) {
        //     errors.email = "Invalid email address";
        //   }

        //   if (!values.password) {
        //     errors.password = "Password is Required";
        //   }

        //   return errors;
        // }}
        initialValues={initialValue}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <>
            <Form style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <label htmlFor="email">Email Address</label>
              <Field
                className="border-2"
                type="email"
                name="email"
                id="email"
              />
              <ErrorMessage
                component={"p"}
                name="email"
                className="text-red-500"
              />
              <label htmlFor="password">Password</label>
              <Field
                className="border-2"
                type="password"
                name="password"
                id="password"
              />
              <ErrorMessage
                component={"p"}
                name="password"
                className="text-red-500"
              />
              <button disabled={isSubmitting} type="submit">
                Submit
              </button>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};

export default App;

// validation
// custom => validate
// library => validationSchema
