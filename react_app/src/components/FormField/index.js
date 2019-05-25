import React from 'react';


const showAsterix = (name) => {
    switch (name) {
        case 'address':
        case 'about':
            return false
        default:
            return true
    }
}

const FormField = (props) => {
    return (
        <div className="form_element">
            {showAsterix(props.field.name) ? <span>*</span> : null}
            <input {...props.field} type={props.type} placeholder={props.placeholder}/>
        </div>
    );
};

export default FormField;