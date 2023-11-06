import React from 'react'
import { FormGroup,Input,Form,Label,Button, InputGroup } from "reactstrap";
import { FaEnvelope,FaLock } from "react-icons/fa";
// import { signInSchema } from "../../Schemas/signupSchema.js";
import { forgotSchema } from '../../Schemas/forgot.js';
import { FiEye, FiEyeOff } from "react-icons/fi";
import {useFormik} from "formik";
import '../../../stylee.css';
import { useState } from "react";

const initialValues={
    email: "",
    password: "",
    cpassword: ""
};

const NewPassword = () => {

    const {values, errors, touched, handleBlur, handleChange, handleSubmit}  = useFormik({
        initialValues: initialValues,
        validationSchema: forgotSchema,
        onSubmit: (values, action)=>{
            console.log(values);
            action.resetForm();
        },
       
    });
    // console.log(Formik);
    // console.log(errors);
    const [showPassowrd, setShowPassword] =useState(false)
    const handleClickPassword = () =>{
        setShowPassword(!showPassowrd)
    }


  return (
    <>
      <div
        className="container-fluid d-flex justify-content-center
        align-items-center" 
        style={{ height: "100vh" }}
        >
        <div className="card shadow-lg p-3">
          <div className="card-body">
            <h1 className="card-title mb-4">New-Password</h1>
            
            <Form onSubmit={handleSubmit}>
              <FormGroup floating>
                <Input 
                 className="shadow bg-body rounded "
                  type="email"
                  name="email"
                  id="Email"
                  placeholder="Enter Your Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Label for="Email"><FaEnvelope className='m-2'/>Email</Label>
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

                  <InputGroup>
            <FormGroup floating>
              <Input
            //    className=" border border-dark"
                className="shadow bg-body rounded border w-100 position-relative"
                id="CPassword"
                name="cpassword"
                placeholder="Please enter your password"
                type={showPassowrd? "text": "password"}
                value={values.cpassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
               
               <span 
               className="eye position-absolute top-50 translate-middle-y"
               onClick={handleClickPassword}>
                {showPassowrd?<FiEye/>:<FiEyeOff/>}
                 </span> 
              <Label for="CPassword"><FaLock className="m-2"/>Confirm Password</Label>
              {/* <span> <icon icon={FiEyeOff,FiEye}></icon> </span> */}
              {/* <p className="text-danger">{errors.password}</p> */}
            </FormGroup>
                </InputGroup>
                  {errors.cpassword && touched.cpassword ?(<p className="form-error text-danger">{errors.cpassword}</p>) : null}


              <FormGroup>  
                <Button className="w-100" type='submit'> Submit</Button>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewPassword;