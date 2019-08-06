import React from 'react';
import Header from "../components/commons/Header/Header";
import Footer from "../components/commons/Footer/Footer";
import {MDBContainer} from 'mdbreact';
import Mundos from "../components/Home/Mundos/Mundos";

const Mundoslist = () => {
    return (
        <MDBContainer>
            <Header/>
            <Mundos/>
            <Footer/>
        </MDBContainer>
    );
};


export default Mundoslist;