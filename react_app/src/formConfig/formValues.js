import {getTransformedUsersData} from "../services/APIservice";

const initFormValues = () => {
    return {
        formData: {
            name: '',
                email: '',
                country: '',
                state: '',
                city: '',
                phone: '',
                address: '',
                about: ''
        },
        showCountrySelect: true,
        showStateSelect: false,
        showCitySelect: false,
        countries: null,
        cities: null,
        states: null,
        users: null,
        defaultSelect: true
    }
}



const resetFormValues = async () =>{
    return {
        formData: {
            name: '',
                email: '',
                country: '',
                state: '',
                city: '',
                phone: '',
                address: '',
                about: ''
        },
        showCountrySelect: true,
        showStateSelect: false,
        showCitySelect: false,
        cities: null,
        states: null,
        users: await getTransformedUsersData()
    }
}


const submitFormValues = values => {
    return {
        "name": values.name,
        "email": values.email,
        "phone_number": values.phone,
        "address": values.address ? values.address : null,
        "about_me": values.about ? values.about : null,
        "country_id": values.country,
        "state_id": values.state,
        "city_id": values.city,
    }
}


export {
    initFormValues,
    resetFormValues,
    submitFormValues
}