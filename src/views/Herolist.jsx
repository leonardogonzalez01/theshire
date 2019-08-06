import React from 'react';
import Header from "../components/commons/Header/Header";
import Footer from "../components/commons/Footer/Footer";
import Heros from "../components/Home/Heroes/Heros";
import {MDBContainer} from 'mdbreact';

const Herolist = () => {
    return (
        <MDBContainer>
            <Header/>
            <Heros/>
            <Footer/>
        </MDBContainer>
    );
};


export default Herolist;