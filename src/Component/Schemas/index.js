import * as Yup from 'yup';

export const signInSchema = Yup.object({
    email: Yup.string().email("Please enter valid email").required("Please enter your email"),
    password: Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/).required("Please enter your password"),
})