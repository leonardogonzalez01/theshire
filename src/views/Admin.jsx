import React from 'react';
import Header from "../components/commons/Header/Header";
import Footer from "../components/commons/Footer/Footer";
import {MDBContainer} from 'mdbreact';
import HeroForm from "../components/Admin/Forms/HeroForm";
import MundoForm from "../components/Admin/Forms/MundoForm";

const Admin = () => {
    return (
        <MDBContainer>
            <Header/>
            <HeroForm/>
            <MundoForm/>
            <Footer/>
        </MDBContainer>
    );
};

export default Admin;