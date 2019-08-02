import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import './Hero.css';

const HeroNotas = props => {
    const {hero} = props;
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
                    <MDBModalHeader toggle={toggle}>Detalles Heroe</MDBModalHeader>
                    <MDBModalBody>
                        <table>
                            <td><img src={hero.imagen} alt={hero.nombre}/></td>
                            <td>{hero.notas}</td>
                        </table>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="secondary" onClick={toggle}>Cerrar</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
        );
}

export default HeroNotas;