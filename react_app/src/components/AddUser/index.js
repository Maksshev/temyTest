import React, {Component} from 'react';
import UserTable from "../UserTable";
import AddUserForm from "../AddUserForm";
import {initFormValues} from "../../formConfig/formValues";
import {getCountriesAndUsers} from "../../formConfig/formData";

class AddUser extends Component {


    state = initFormValues()


    saveForm = (newState) => {
        this.setState(newState)
    }



    componentDidMount() {
        void getCountriesAndUsers(this)
    }



    render() {

        return (

            <div className="rl_container">
                <AddUserForm formConfig={this.state} saveForm={this.saveForm}/>
                <UserTable users={this.state.users}/>
            </div>

        )
    }
}

export default AddUser