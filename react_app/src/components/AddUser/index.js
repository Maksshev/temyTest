import React, {Component} from 'react';
import UserTable from "../UserTable";
import {getCountries, getTransformedUsersData, getUsers} from "../../services/APIservice";
import AddUserForm from "../AddUserForm";

class AddUser extends Component {


    state = {
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
    };


    saveForm = (newState) => {
        this.setState(newState)
    }


    updateCountries = () => {
        getCountries().then(countries => {
            this.setState({
                countries
            })
        })

        return null
    }




    componentDidMount() {
        getCountries()
            .then(countries => {
                getTransformedUsersData()
                    .then(users => {
                        this.setState({
                            countries,
                            users
                        })
                    })
            })

    }


    render() {

        console.log('rendered');


        return (

            <div className="rl_container">
                <AddUserForm state={this.state} saveForm={this.saveForm}/>
                <UserTable users={this.state.users}/>
            </div>

        )
    }
}

export default AddUser