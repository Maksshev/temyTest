import * as Yup from 'yup';


export const registerValidation = Yup.object().shape({
    name: Yup.string().matches(/[a-zA-Z]/, {
        message: 'Name must contain letters only',
        excludeEmptyString: true
    }).required('Name is required'),
    email: Yup.string().email('Please, enter valid email').required('Email is required'),
    phone: Yup.string().matches(/^[0-9]$/, {
        message: 'Phone must contain numbers only'
    }).required('Phone number is required'),
    country: Yup.string().required('Country is required'),
    state: Yup.string().required('State is required'),
    city: Yup.string().required('City is required'),
    about: Yup.string().max(500, 'About Us section must not exceed 500 charachters')
});