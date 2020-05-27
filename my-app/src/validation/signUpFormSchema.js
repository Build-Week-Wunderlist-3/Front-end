import * as yup from "yup";

const signUpFormSchema = yup.object().shape({
  email: yup
    .string()
    .email("must be a valid email address")
    .required("email is a required field"),
  password: yup
    .string()
    .trim()
    .min(8, "password must be at least eight characters")
    .required("password is a required field"),
  // passwordConfirmation: yup.string()
  //     .required()
  //     .oneOf([yup.ref('password'), null], 'Passwords must match')
});

export default signUpFormSchema;
