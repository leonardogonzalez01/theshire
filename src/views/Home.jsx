import React from 'react';
import Header from "../components/commons/Header/Header";
import Footer from "../components/commons/Footer/Footer";
import Heros from "../components/Home/Heroes/Heros";
import {MDBContainer} from 'mdbreact';

const Home = () => {
    return (
        <MDBContainer>
            <Header/>
                <Heros/>
            <Footer/>
        </MDBContainer>
    );
};


export default Home;