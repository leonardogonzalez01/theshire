import React, { useState } from 'react';
import {connect} from 'react-redux';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import {Row, Col} from 'react-bootstrap';
import Input from "../Controls/Input";
import {addHeroeAction} from "../../../store/heroes/actions";

const HeroForm = props => {

    const emptyHero = {
        nombre: '',
        apodo: '',
        poderdestacado: '',
        arma: '',
        notas: '',
        imagen: ''
    };
    const [state, setState] = useState(false);
    const [hero, setHero] = useState(emptyHero);
    const toggle = () => {
        setState({
            modal: !state.modal
        });
    }


    const handlerOnChange = ({target}) => {
        console.log(target.value);
        setHero({
            ...hero,
            [target.id]: target.value
        })
    };

    const handlerOnClick = () => {
        props.addHeroComponent(hero);
        setHero(emptyHero);
    };


    return (
        <MDBContainer>
            <MDBBtn onClick={toggle}>Ingresar Nuevo Heroe</MDBBtn>
            <MDBModal isOpen={state.modal} toggle={toggle}  size="lg">
                <MDBModalHeader toggle={toggle}>Detalles Heroe</MDBModalHeader>
                <MDBModalBody>
                    <Row>
                        <Col>
                            <Input value={hero.nombre} onChange={handlerOnChange} name={'nombre'} text={'Nombre Real'} type='text'/>
                            <Input value={hero.apodo} onChange={handlerOnChange} name={'apodo'} text={'Nombre Heroe'} type='text'/>
                            <Input value={hero.poderdestacado} onChange={handlerOnChange} name={'poderdestacado'} text={'Poder Destacado'} type='text'/>
                            <Input value={hero.arma} onChange={handlerOnChange} name={'arma'} text={'Arma'} type='text'/>
                            <Input value={hero.notas} onChange={handlerOnChange} name={'notas'} text={'Notas'} type='text'/>
                            <Input value={hero.imagen} onChange={handlerOnChange} name={'imagen'} text={'Imagen'} type='text'/>
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
    addHeroComponent : hero => dispatch(addHeroeAction(hero))
});

export default connect(null, mapDispatchToProps)(HeroForm);