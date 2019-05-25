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

async function getStateById(stateId) {
    const stateReq = await axios.get(`/states?id=${stateId}`)
    return stateReq.data
}

async function getCountryById(countryId) {
    const countriesReq = await axios.get(`/countries?id=${countryId}`)
    return countriesReq.data
}

async function getCityById(cityId) {
    const citiesReq = await axios.get(`/cities?id=${cityId}`)
    return citiesReq.data
}

async function getUsers() {
    const usersReq = await axios.get('/users')
    return usersReq.data
}

async function getTransformedUsersData() {
    const users = await getUsers()

    const usersPromises = users.map(async user => {
        user.country = await getCountryById(user['country_id'])
        user.state = await getStateById(user['state_id'])
        user.city = await getCityById(user['city_id'])
        return user
    })

    return await Promise.all(usersPromises)
}



export {
    getCountries,
    getStatesByCountryId,
    getCitiesByStateId,
    getTransformedUsersData,
    getUsers
}