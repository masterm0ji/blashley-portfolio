import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import "./index.css";

function App() {
  const formik = useFormik({
    initialValues: { 
      name: "",
      email: "",
      password: "",
   },
    onSubmit: values => {
      alert("Login Successful");
    },
    validate: (values) => {
      let errors = {};
      if (!values.name) errors.name = "field required";
      if (!values.email) errors.email = "field required";
      if (!values.password) errors.password = "field required";
      return errors;
    },
  });
  
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input 
          id="nameField"
          name="name"
          type= "text"
          onChange={formik.handleChange}
          value={formik.values.name} />
        
        {formik.errors.name ? (
          <div id="nameError" style={{ color: "red" }}>
            {formik.errors.name}
          </div>
        ) : null}

        <label htmlFor="email">Email Address</label>
        <input
          id="emailField"
          name="email"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email} />

        {formik.errors.email ? (
          <div id="emailError" style={{ color: "red" }}>
            {formik.errors.email}
          </div>
        ) : null}

        <label htmlFor="password">Password</label>
        <input
          id="passwordField"
          name="password"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.password} />
        <br />
        {formik.errors.password ? (
          <div id="pswError" style={{ color: "red" }}>
            {formik.errors.password}
          </div>
        ) : null}
        <button id="submitBtn" type="submit">Submit</button>
      </form>
  </div>
  );
};

export default App;


