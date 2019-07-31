import React from 'react';
import {Container} from 'react-bootstrap';
import { connect } from 'react-redux';
import Header from "../components/commons/Header/Header";
import Footer from "../components/commons/Footer/Footer";
import Hero from "../components/Home/Heroes/Hero";

const Home = ({heroes}) => {
    return (
        <div>
            <Header/>
            <Container>
                <div className='d-flex'>
                    {heroes.map(hero => <Hero key={hero.id} product={hero}/>)}
                </div>
            </Container>
            <Footer/>
        </div>
    );
};

const mapStateToProps = state => ({
    heroes: state.heroes.heroes
});

export default connect(mapStateToProps)(Home);