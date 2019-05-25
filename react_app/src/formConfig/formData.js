import {getCountries, getTransformedUsersData} from "../services/APIservice";


const getCountriesAndUsers = async context => {
    context.setState({
        countries: await getCountries(),
        users: await getTransformedUsersData()
    })
}


export {
    getCountriesAndUsers
}