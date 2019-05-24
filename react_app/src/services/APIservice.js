import axios from 'axios'


async function getCountries() {
    const countriesReq = await axios.get('/countries')
    return countriesReq.data
}


async function getStatesByCountryId(countryId) {
    const stateReq = await axios.get(`/states?country_id=${countryId}`)
    return stateReq.data
}

async function getCitiesByStateId(stateId) {
    const citiesReq = await axios.get(`/cities?state_id=${stateId}`)
    return citiesReq.data
}


export {
    getCountries,
    getStatesByCountryId,
    getCitiesByStateId
}