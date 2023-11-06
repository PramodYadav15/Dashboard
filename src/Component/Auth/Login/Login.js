import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope,FaLock } from "react-icons/fa";
import { Form, FormGroup, Input, Label, Button, InputGroup } from "reactstrap";
import '../../../stylee.css';
import './login.css';
// import * as yup from "yup";
import { FiEye, FiEyeOff } from "react-icons/fi";
import {useFormik} from "formik";
import { signInSchema } from "../../Schemas/index";

const initialValues={
    email: "",
    password: ""
};

const Login = () => {
 const {values, errors, touched, handleBlur, handleChange, handleSubmit}  = useFormik({
        initialValues: initialValues,
        validationSchema: signInSchema,
        onSubmit: (values, action)=>{
            console.log(values);
            action.resetForm();
        },
       
    });
    const [showPassowrd, setShowPassword] =useState(false)
    // console.log(Formik);
    // console.log(errors);
    const handleClickPassword = () =>{
        setShowPassword(!showPassowrd)
    }


  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="card shadow-lg p-3"> 
        <div className="card-body">
          <h1 className="card-title mb-4">Sign-In</h1>
          <Form onSubmit={handleSubmit}>
         {/* onSubmit={handleSubmit} */}
            <FormGroup floating >
           
              <Input
            //    className=" border border-dark"
                className="shadow bg-body rounded"
                id="Email"
                name="email"
                placeholder="Please enter your email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                // endAdornment={

                // }
              />
              {/* <i className="bi bi-envelope"></i> */}
              <Label for="Email"><FaEnvelope className="m-2"/> Email</Label>
              {/* <p className="text-danger">{errors.email}</p> */}
            </FormGroup>
              {errors.email && touched.email ?(<p className="form-error text-danger">{errors.email}</p>):null }

            <InputGroup>
            <FormGroup floating>
              <Input
            //    className=" border border-dark"
                className="shadow bg-body rounded border w-100 position-relative"
                id="Password"
                name="password"
                placeholder="Please enter your password"
                type={showPassowrd? "text": "password"}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
               
               <span 
               className="eye position-absolute top-50 translate-middle-y"
               onClick={handleClickPassword}>
                {showPassowrd?<FiEye/>:<FiEyeOff/>}
                 </span> 
              <Label for="Password"><FaLock className="m-2"/>Password</Label>
              {/* <span> <icon icon={FiEyeOff,FiEye}></icon> </span> */}
              {/* <p className="text-danger">{errors.password}</p> */}
            </FormGroup>
                </InputGroup>
                  {errors.password && touched.password ?(<p className="form-error text-danger">{errors.password}</p>) : null}
            
            <Link to="/forgot">Forgot Password?</Link> 
            <Button className="w-100 m-2" type="submit">
              Login
            </Button>
            <div>
                <p className="acc p-1">Don't have an account ?
              <Link to="/signup" className="m-2">  Sign up</Link> </p>
              
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
