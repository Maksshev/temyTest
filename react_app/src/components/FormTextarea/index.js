import React from 'react';

const FromTextarea = (props) => {
    return (
        <div className="form_element">
            <textarea {...props.field} placeholder={props.placeholder}/>
        </div>
    );
};

export default FromTextarea;
