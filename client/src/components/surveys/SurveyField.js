import React from 'react';

export default ({ icon, label, input, meta: {touched, error} }) => {
    return (
        <div>
            <label>
                <i className="material-icons left">{icon}</i>
                {label}
            </label>
            <input style={{marginBottom: "5px"}} {...input}/>
            <div className="red-text" style={{marginBottom: "20px"}}>
                {touched && error}
            </div>
        </div>
    );
};
