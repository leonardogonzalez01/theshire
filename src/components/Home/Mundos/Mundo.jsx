import React from 'react';
import './Mundo.css';
import MundoNotas from "./MundoNotas";

const Mundo = (props) => {
    const {mundo} = props;

    return (
        <tr className='hero_css'>
            <td>{mundo.nombre}</td>
            <td>{mundo.poblacion}</td>
            <td>{mundo.localizacion}</td>
            <MundoNotas mundo={mundo}/>
        </tr>
    );
};

export default Mundo;