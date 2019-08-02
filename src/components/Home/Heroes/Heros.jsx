import React from 'react';
import { connect } from 'react-redux';
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import Hero from "./Hero";
const Heros = ({heroes}) => {

    return (
        <MDBTable title="Editable Example">
            <MDBTableHead>
                <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Apodo</th>
                    <th>Poder</th>
                    <th>Arma</th>
                    <th>Detalles</th>
                </tr>
            </MDBTableHead>
            <MDBTableBody>
                    {heroes.map(hero => <Hero key={hero.id} hero={hero}/>)}
            </MDBTableBody>
        </MDBTable>
    );
};

const mapStateToProps = state => ({
    heroes: state.heroes.heroes
});

export default connect(mapStateToProps)(Heros);