import React from 'react';
import './MainPage.scss';
import { Container } from 'react-bootstrap';

import Header from '../components/Header/Header';
import BinState from '../components/BinState/BinState';

const mainPage = props => {
    return (
        <Container fluid="true">
            <div className="mainPage">
            <Header />
            <BinState />
        </div>
        </Container>
        
    );
};

export default mainPage;