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
        states: null
    };


    saveForm = (newState) => {
        this.setState(newState)
    }


    componentDidMount() {
        getCountries()
            .then((countries) => {
                this.setState({
                    countries
                })
            })

        getTransformedUsersData().then(data => console.log(data))
    }


    render() {


        return (
            <div className="rl_container">
                <AddUserForm state={this.state} saveForm={this.saveForm}/>
                <UserTable/>
            </div>
        )
    }
}

export default AddUser