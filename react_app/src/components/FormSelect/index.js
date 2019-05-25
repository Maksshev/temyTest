import React from 'react';
import {handleSelectStateChange} from "../../formConfig/selectStateChange";


const FormSelect = (props) => {


    const showOptions = (optionsArr) => (

        optionsArr ?

            optionsArr.map(option => (
                <option key={option.id} value={option.id}>
                    {option.name}
                </option>
            ))
            :
            null
    )

    const handleChange = (e) => {

        const value = e.target.value
        const name = props.field.name
        props.form.setFieldValue(name, value, true)
        const values = props.form.values;

        handleSelectStateChange(name, value, values, props.saveForm);
    }


    return (
        props.show ?

            <div className="form_element">
                <select
                    className="city-select"
                    {...props.field}
                    onChange={handleChange}

                >
                    <option value="">{props.defaultOption}</option>
                    {showOptions(props.options)}
                </select>
            </div>

            :

            null
    );

}


export default FormSelect;

