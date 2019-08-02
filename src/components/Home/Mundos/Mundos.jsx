import React from 'react';
import { connect } from 'react-redux';
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import Mundo from "./Mundo";
const Mundos = ({mundos}) => {

    return (
        <MDBTable title="Lista Herpoes">
            <MDBTableHead>
                <tr>
                    <th>Nombre</th>
                    <th>Poblacion</th>
                    <th>Ubicacion</th>
                    <th>Detalles</th>
                </tr>
            </MDBTableHead>
            <MDBTableBody>
                    {mundos.map(mundo => <Mundo key={mundo.id} mundo={mundo}/>)}
            </MDBTableBody>
        </MDBTable>
    );
};

const mapStateToProps = state => ({
    mundos: state.mundos.mundos
});

export default connect(mapStateToProps)(Mundos);