import React from 'react';
import FormTextarea from "../FormTextarea";
import FormField from "../FormField";
import {ValidationFail} from "../ErrorMessage";
import FormSelect from "../FormSelect";
import {registerValidation} from "../../formConfig/validationConfig";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {addUser, getCountries} from "../../services/APIservice";
import {getTransformedUsersData} from "../../services/APIservice";


const AddUserFrom = (props) => {


    const submitForm = (values, actions) => {


        const dataToSubmit = {
            "name": values.name,
            "email": values.email,
            "phone_number": values.phone,
            "address": values.address ? values.address : null,
            "about_me": values.about ? values.about : null,
            "country_id": values.country,
            "state_id": values.state,
            "city_id": values.city,
        }

        addUser(dataToSubmit).then(async res => {

            if (res.statusText === 'Created') {

                props.saveForm({
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
                    cities: null,
                    states: null,
                    users: await getTransformedUsersData()
                })

                actions.resetForm()


            }
        })

    }


    return (
        <Formik
            initialValues={props.state.formData}
            onSubmit={submitForm}
            validationSchema={registerValidation}
        >

            <Form>
                <h2>Add user</h2>
                <Field name="name" type="text" placeholder="*Enter name" component={FormField}/>
                <ErrorMessage name="name" render={ValidationFail}/>
                <Field name="email" type="text" placeholder="*Enter email" component={FormField}/>
                <ErrorMessage name="email" render={ValidationFail}/>
                <Field name="country" saveForm={props.saveForm} component={FormSelect}
                       options={props.state.countries} show={props.state.showCountrySelect}/>
                <ErrorMessage name="country" render={ValidationFail}/>
                <Field name="state" saveForm={props.saveForm} component={FormSelect} options={props.state.states}
                       show={props.state.showStateSelect}/>
                <ErrorMessage name="state" render={ValidationFail}/>
                <Field name="city" saveForm={props.saveForm} component={FormSelect} options={props.state.cities}
                       show={props.state.showCitySelect}/>
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
    );
};

export default AddUserFrom;
