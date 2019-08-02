import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import './Mundo.css';

const MundoNotas = props => {
    const {mundo} = props;
    const [state, setState] = React.useState(false);
    const toggle = () => {
        setState({
            modal: !state.modal
        });
    }
        return (
            <MDBContainer>
                <MDBBtn onClick={toggle}>ver detalles</MDBBtn>
                <MDBModal isOpen={state.modal} toggle={toggle}>
                    <MDBModalHeader toggle={toggle}>Detalles Mundo</MDBModalHeader>
                    <MDBModalBody>
                        <table>
                            <td><img src={mundo.imagen} alt={mundo.nombre}/></td>
                            <td>{mundo.notas}</td>
                        </table>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="secondary" onClick={toggle}>Cerrar</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
        );
}

export default MundoNotas;