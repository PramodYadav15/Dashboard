import React from "react";
import { Form, FormGroup, Input, Label, Button, InputGroup, } from "reactstrap";
import {FaAddressCard,FaCircleUser,FaPhone } from "react-icons/fa6";
import { FaEnvelope,FaLock } from "react-icons/fa";
import { signUpSchema } from "../../Schemas/signupSchema.js";
import { FiEye, FiEyeOff } from "react-icons/fi";
import {useFormik} from "formik";
import '../../../stylee.css';
import { useState } from "react";

      const initialValues={
        fName: "",
        lName: "",
       email: "",
       password: "",
       dob:"",
       gender: "",
       address: "",
       phone: "",
       };
const Signup = () =>{

     const {values, errors, touched, handleBlur, handleChange, handleSubmit}  = useFormik({
            initialValues: initialValues,
            validationSchema: signUpSchema,
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
        className="container d-flex justify-content-center align-items-center my-5"
        // style={{ height: "100vh" }}
      >
        <div className="card shadow-lg p-3">
        {/* <div className="card   mb-3 max-width: 2rem;"> */}
          <div className="card-body ">
            <h1 className="card-title mb-4">Sign-Up</h1>
           
            <Form onSubmit={handleSubmit}>
           
            <FormGroup floating>
                <Input  className="shadow bg-body rounded "
                id="fName"name="fName" 
                placeholder="Entre Your First_Name" 
                type="text"
                value={values.fName}
                onChange={handleChange}
                onBlur={handleBlur}
                />
                <Label for="fName">
                    <FaCircleUser className="m-2"/>First_Name</Label>
              </FormGroup>
                {errors.fName && touched.fName ?(<p className="form-error text-danger">{errors.fName}</p>):null }

                <FormGroup floating>
                <Input className="shadow bg-body rounded "
                id="lName"name="lName" 
                placeholder="Entre Your Last_Name" 
                type="text"
                 value={values.lName}
                 onChange={handleChange}
                 onBlur={handleBlur}
                 />
                <Label for="lName">
                    <FaCircleUser className="m-2"/>Last_Name</Label>
              </FormGroup>
                 {errors.lName && touched.lName ?(<p className="form-error text-danger">{errors.lName}</p>):null }

              <FormGroup floating>
                <Input  className="shadow bg-body rounded "
                id="Email"name="email" 
                placeholder="Enter Your Email" 
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                />
                <Label for="Email">
                    <FaEnvelope className="m-2"/> Email</Label>
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
            

              {/* <FormGroup floating>
                <Input className="shadow bg-body rounded "
                id="Password" name="password"
                  placeholder="Enter Your Password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  />
                  {errors.password && touched.password ?(<p className="form-error text-danger">{errors.password}</p>):null }
                <Label for="Password">
                    <FaLock className="m-2"/> Password </Label>
             </FormGroup>{" "} */}

             <FormGroup floating>
                <Input className="shadow bg-body rounded "
                id="Dob" name="dob"
                  placeholder="Enter Your D.O.B"
                  type="Date"
                  value={values.dob}
                  onChange={handleChange}
                  />
                {/* {errors.dob && touched.dob ?(<p className="form-error">{errors.dob}</p>):null } */}
                <Label for="Dob"> Date-of-birth </Label>
             </FormGroup>{" "}
        
              <FormGroup>
                <label className="mx-2">Gender</label>
              <Input className="border border-info m-1" type="radio" name="gender"  value="male"
                  onChange={handleChange}/>Male
              <Input className="border border-info m-1" type="radio" name="gender"  value="female"
                  onChange={handleChange}gender/> Female
                  <Input className="border border-info m-1" type="radio" name="gender"  value="other"
                  onChange={handleChange}gender/> Other
              </FormGroup>
              
              <FormGroup floating>
                <Input  className="shadow bg-body rounded "
                 id="Address"name="address" 
                 placeholder="Enter Your Address" type="text"
                 value={values.address}
                 onChange={handleChange}
                 onBlur={handleBlur}
                 />
                <Label for="Address">
                    <FaAddressCard className="m-2"/> Address</Label>
              </FormGroup>
                 {errors.address && touched.address ?(<p className="form-error text-danger">{errors.address}</p>):null }

              <FormGroup floating>
                <Input  className="shadow bg-body rounded "
                id="Phone"name="phone" 
                placeholder="Enter Your PhoneNumer"
                 type="tel"
                 value={values.phone}
                 onChange={handleChange}
                 onBlur={handleBlur}
                 />
                 {/* <Input type="tel" name="telphone"  pattern="[0-9]{10}"  title="Ten digits code" required/> */}
                <Label for="Phone">
                    <FaPhone className="m-2"/>Phone_No</Label>
              </FormGroup>
                 {errors.phone && touched.phone ?(<p className="form-error text-danger">{errors.phone}</p>):null }


              <Button type="submit" className="w-100"> Signup </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
