import React, { useState, useEffect } from 'react';
import './MainPage.scss';
import { Container } from 'react-bootstrap';

import Header from '../components/Header/Header';
import BinState from '../components/BinState/BinState';
import Spinner from '../UI/Spinner/Spinner';


const mainPage = props => {
    const [loading,setLoading] = useState(true);

    useEffect (() => {
        setLoading(false);
    }, []);
    

    let mainContent = (
        <div className="mainPage">
            <Header />
            <BinState />
        </div>
    );
    if (loading) {
        mainContent = <Spinner />;
    } else {
        mainContent = (
            <div className="mainPage">
                <Header />
                <BinState />
            </div>);
    }
    return (
        <Container fluid="true">
            {mainContent}
        </Container>
        
    );
};

export default mainPage;