import * as Yup from 'yup';


export const forgotSchema = Yup.object({
    email: Yup.string().email("Please enter valid email").required("Please enter your email"),
    password: Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/, "Please enter valid password").required("Please enter your password"),
    cpassword: Yup.string().min(6).oneOf([Yup.ref('password')], "Password do not match!")
        .required("Please enter your confirm password")
})