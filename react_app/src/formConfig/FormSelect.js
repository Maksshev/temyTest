import React from 'react';

const FormSelect = (props) => {
    return (
        <div className="form_element">
            <select
                {...props.field}
                className="city-select"
            >
                <option value="">*Choose coutry</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </div>
    );
};

export default FormSelect;

