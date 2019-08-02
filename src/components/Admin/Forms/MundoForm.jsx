import React, { useState } from 'react';
import {connect} from 'react-redux';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import {Row, Col} from 'react-bootstrap';
import Input from "../Controls/Input";
import {addMundoAction} from "../../../store/mundos/actions";

const MundoForm = props => {

    const emptyMundo = {
        nombre: '',
        poblacion: '',
        localizacion: '',
        notas: '',
        imagen: ''
    };
    const [state, setState] = useState(false);
    const [mundo, setMundo] = useState(emptyMundo);
    const toggle = () => {
        setState({
            modal: !state.modal
        });
    }


    const handlerOnChange = ({target}) => {
        console.log(target.value);
        setMundo({
            ...mundo,
            [target.id]: target.value
        })
    };

    const handlerOnClick = () => {
        props.addMundoComponent(mundo);
        setMundo(emptyMundo);
    };


    return (
        <MDBContainer>
            <MDBBtn onClick={toggle}>Ingresar Nuevo Mundo</MDBBtn>
            <MDBModal isOpen={state.modal} toggle={toggle}  size="lg">
                <MDBModalHeader toggle={toggle}>Detalles Mundo</MDBModalHeader>
                <MDBModalBody>
                    <Row>
                        <Col>
                            <Input value={mundo.nombre} onChange={handlerOnChange} name={'nombre'} text={'Nombre Planeta'} type='text'/>
                            <Input value={mundo.poblacion} onChange={handlerOnChange} name={'poblacion'} text={'Poblacion Residente'} type='text'/>
                            <Input value={mundo.localizacion} onChange={handlerOnChange} name={'localizacion'} text={'Localizacion'} type='text'/>
                            <Input value={mundo.notas} onChange={handlerOnChange} name={'notas'} text={'Notas'} type='text'/>
                            <Input value={mundo.imagen} onChange={handlerOnChange} name={'imagen'} text={'Imagen'} type='text'/>
                        </Col>
                    </Row>
                </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn color="primary" onClick={handlerOnClick}>Gaurdar Datos</MDBBtn>
                    <MDBBtn color="secondary" onClick={toggle}>Cerrar</MDBBtn>

                </MDBModalFooter>
            </MDBModal>
        </MDBContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    addMundoComponent : mundo => dispatch(addMundoAction(mundo))
});

export default connect(null, mapDispatchToProps)(MundoForm);