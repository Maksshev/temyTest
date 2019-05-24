import {getCitiesByStateId, getStatesByCountryId} from "../services/APIservice";

function handleSelectStateChange(name, value, values, cb) {
    switch (name) {
        case 'country':
            updateByCountry(value, values, cb)
            break
        case 'state':
            updateByState(value, values, cb)
            break
        default:
            return null
    }
}


async function updateByCountry(value, values, cb) {
    if (value) {
        cb({
            formData: {
                ...values, state: ''
            },
            showStateSelect: true,
            states: await getStatesByCountryId(value)
        })
    } else {
        cb({
            formData: {
                ...values, state: ''
            },
            showStateSelect: false,
            showCitySelect: false
        })
    }
}


async function updateByState(value, values, cb) {
    if (value) {
        cb({
            formData: {
                ...values, city: ''
            },
            showCitySelect: true,
            cities: await getCitiesByStateId(value)
        })
    } else {
        cb({
            formData: {
                ...values, city: ''
            },
            showCitySelect: false
        })
    }
}


export {
    handleSelectStateChange
}