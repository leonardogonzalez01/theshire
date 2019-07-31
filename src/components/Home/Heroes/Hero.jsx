import React from 'react';
import './Hero.css';
import HeroNotas from "./HeroNotas";

const Hero = (props) => {
    const {hero} = props;

    return (
        <tr className='hero_css'>
            <td>{hero.id}</td>
            <td>{hero.nombre}</td>
            <td>{hero.apodo}</td>
            <td>{hero.poderdestacado}</td>
            <td>{hero.arma}</td>
            <HeroNotas hero={hero}/>
        </tr>
    );
};

export default Hero;