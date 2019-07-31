import React, {useState} from 'react';
import {connect} from 'react-redux';

const Hero = (props) => {
    const {hero} = props;

    return (
        <div>
            <p>Nombre: <strong>{hero}</strong></p>
        </div>
    );
};

export default Hero;