import React, {Component} from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import FormField from '../../formConfig/FormField';
import {ValidationFail} from '../../formConfig/ErrorMessage';
import {registerValidation} from "../../formConfig/validationConfig";
import {initUserAddingValues} from "../../formConfig/init-values";
import UserTable from "../UserTable";
import FormSelect from "../../formConfig/FormSelect";
import FormTextarea from '../../formConfig/FormTextarea';
import userService from '../../services/addUserService';



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
        }
    };


    componentDidMount() {
        userService.getCitiesByStateId('1')
            .then(data => console.log(data))
    }


    render() {
        return (
            <div className="rl_container">
                <Formik
                    initialValues={this.state.formData}
                    onSubmit={this.submitForm}
                    validationSchema={registerValidation}
                >
                    <Form>
                        <h2>Add user</h2>
                        <Field name="name" type="text" placeholder="*Enter name" component={FormField}/>
                        <ErrorMessage name="name" render={ValidationFail}/>
                        <Field name="email" type="text" placeholder="*Enter email" component={FormField}/>
                        <ErrorMessage name="email" render={ValidationFail}/>
                        <Field name="country" component={FormSelect}/>
                        <ErrorMessage name="country" render={ValidationFail}/>
                        <Field name="state" component={FormSelect}/>
                        <ErrorMessage name="state" render={ValidationFail}/>
                        <Field name="city" component={FormSelect}/>
                        <ErrorMessage name="city" render={ValidationFail}/>
                        <Field name="phone" type="text" placeholder="*Enter your phone" component={FormField}/>
                        <ErrorMessage name="phone" render={ValidationFail}/>
                        <Field name="address" type="text" placeholder="Enter address" component={FormField}/>
                        <ErrorMessage name="address" render={ValidationFail}/>
                        <Field name="about" placeholder="Tell us about yourself" component={FormTextarea}/>
                        <ErrorMessage name="about" render={ValidationFail}/>
                        <button type="submit">Add user</button>
                    </Form>
                </Formik>

                <UserTable/>
            </div>
        )
    }
}

export default AddUser