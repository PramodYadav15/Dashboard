import React from "react";
import { useNavigate } from "react-router-dom";
import { FormGroup, Form, Button } from "reactstrap";
// import { PiNotificationFill} from "react-icons/pi";
import { useState } from "react";
import OtpInput from "react-otp-input";
import '../../../stylee.css';



const Otp = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const otpInputStyle = {
    width: "100%", // You can adjust the width as needed
    // height: "30px", // You can adjust the height as needed
  };

  return (
    <>
      <div
        className="container-fluid d-flex justify-content-center
        align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="card shadow-lg p-3">
          <div className="card-body">
            <h1 className="card-title mb-4">Verify-OTP</h1>

            <Form>
              <FormGroup floating>
                <OtpInput
                  className="shadow bg-body rounded"
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  renderSeparator={
                  <span 
                  className="mx-1"
                  >-</span>}
                  // renderInput={(props) => <input {...props} />}
                  
                  renderInput={(props) => (
                    <div className="d-flex">
                      <input  {...props}
                       style={otpInputStyle} 
                       />
                    </div>
                  )}
                 
                />
                {/* <Input
                  type="number"
                  name="otp"
                  id="Otp"
                  placeholder="Your Email otp"
                />
                <Label for="Otp"><PiNotificationFill className='m-2'/>OTP</Label> */}
              </FormGroup>

              <FormGroup>
                <Button
                  onClick={() => navigate("/newpassword")}
                  className="w-100"
                >
                  {" "}
                  Submit
                </Button>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Otp;
