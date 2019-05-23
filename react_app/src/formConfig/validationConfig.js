import * as Yup from 'yup';


export const registerValidation = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Please, enter valid email').required('Email is required'),
    password: Yup.string().min(6, 'Password is to short').max(50, 'Password is two long').required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords do not match').required('Password confirmation is required')
});