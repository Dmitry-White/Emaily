import React from 'react';

const gimme = require('../utils/gimme_feedback.jpg');

const landing = () => {
    return (
        <section style={{textAlign: "center"}}>
            <h1>Emaily!</h1>
            <p>Collect feedback from your users</p>
            <img src={gimme} style={{width: "70%"}} alt="Gimme feedback"/>
        </section>
    );
};


export default landing;
