import * as yup from 'yup'

const loginFormSchema = yup.object().shape({
    email: yup.string()
        .email('please enter a valid email address')
        .required('your email is required'),
    password: yup.string()
        .trim()
        .min(8, 'password must be at least eight characters')
        .required('password is a required field'),
})

export default loginFormSchema