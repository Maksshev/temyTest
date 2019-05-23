import React, {Component} from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import FormField from '../../formConfig/FormField';
import {ValidationFail} from '../../formConfig/ErrorMessage';
import {registerValidation} from "../../formConfig/validationConfig";
import {initUserAddingValues} from "../../formConfig/init-values";
import UserTable from "../UserTable";



class AddUser extends Component {
    render() {
        return (
            <div className="rl_container">
                <Formik
                    initialValues={initUserAddingValues}
                    onSubmit={this.submitForm}
                    validationSchema={registerValidation}
                >
                    <Form>
                        <h2>Add user</h2>
                        <Field name="name" type="text" placeholder="Enter name" component={FormField}/>
                        <ErrorMessage name="name" render={ValidationFail}/>
                        <Field name="email" type="text" placeholder="Enter email" component={FormField}/>
                        <ErrorMessage name="email" render={ValidationFail}/>
                        <Field name="country" type="text" placeholder="Enter country" component={FormField}/>
                        <ErrorMessage name="country" render={ValidationFail}/>
                        <Field name="state" type="text" placeholder="Enter state" component={FormField}/>
                        <ErrorMessage name="state" render={ValidationFail}/>
                        <Field name="city" type="text" placeholder="Enter city" component={FormField}/>
                        <ErrorMessage name="city" render={ValidationFail}/>
                        <Field name="phone" type="text" placeholder="Enter your phone" component={FormField}/>
                        <ErrorMessage name="phone" render={ValidationFail}/>
                        <Field name="about" type="text" placeholder="Tell about yourself" component={FormField}/>
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