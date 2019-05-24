import React, {Component} from 'react';
import UserTable from "../UserTable";
import {getCountries} from "../../services/APIservice";
import AddUserFrom from "../AddUserForm";

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
    }


    render() {


        return (
            <div className="rl_container">
                <AddUserFrom state={this.state} saveForm={this.saveForm}/>
                <UserTable/>
            </div>
        )
    }
}

export default AddUser