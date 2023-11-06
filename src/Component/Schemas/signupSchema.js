import * as Yup from 'yup';

// const passwordRegex = new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]).{8,32}$");
export const signUpSchema = Yup.object({
    
    fName:Yup.string().min(2).max(30).required("Please enter your firstName"),
    lName:Yup.string().min(2).max(30).required("Please enter your lastName"),
    email: Yup.string().email("Please enter valid email").required("Please enter your email"),
    password: Yup.string().min(6).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/,"Please enter valid password")
    .required("Please enter your password"),
    dob:Yup.string(),
    gender:Yup.string(),
    address:Yup.string().min(20).max(50).required("Please enter your address"),
    phone:Yup.string().max(10).required("Please enter your mobile number").matches(/^([+]\d{2})?\d{10}$/,"Please enter valid number")
//     phone: Yup.number()
//   .typeError("That doesn't look like a phone number")
//   .positive("A phone number can't start with a minus")
//   .integer("A phone number can't include a decimal point")
//   .min(8)
//   .required('Please Enter Your Phone Number'),

    //  phone:Yup.string().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid')
    
})