import React from 'react';

export default ({ input, label, meta: {touched, error} }) => {
    console.log(error);
    return (
        <div>
            <label>{label}</label>
            <input {...input}/>
            {touched && error}
        </div>
    );
};
