import React from "react";
import { FormGroup,Input,Form,Label,Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import { signInSchema } from "../../Schemas";
import {useFormik} from "formik";
import '../../../stylee.css';

const initialValues={
    email: ""
};

const Forgot = () => {
    const navigate=useNavigate();

    const {values, errors, touched, handleBlur, handleChange, handleSubmit}  = useFormik({
        initialValues: initialValues,
        validationSchema: signInSchema,
        onSubmit: (values, action)=>{
            console.log(values);
            action.resetForm();
        },
       
    });
    // console.log(Formik);
    // console.log(errors);

  return (
    <>
      <div
        className="container-fluid d-flex justify-content-center
        align-items-center" 
        style={{ height: "100vh" }}
        >
        <div className="card shadow-lg p-3">
          <div className="card-body">
            <h1 className="card-title mb-4">Forgot-Password</h1>
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
                <Label for="Email"> <FaEnvelope className="m-2"/>Email</Label>
              </FormGroup>
                {errors.email && touched.email ?(<p className="form-error text-danger">{errors.email}</p>):null }

              <FormGroup>
                {/* <Button color="primary" block>
                  Submit
                </Button> */}
                <Button onClick={()=>navigate("/otp")} type="submit" className="w-100"> Submit</Button>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forgot;
