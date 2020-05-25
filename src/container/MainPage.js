import React, { useState } from 'react';
import './MainPage.scss';
import { Container } from 'react-bootstrap';

import Header from '../components/Header/Header';
import BinState from '../components/BinState/BinState';
import Spinner from '../UI/Spinner/Spinner';


const mainPage = props => {
    const [loading,setLoading] = useState(true);
    let images=[];
    const loadImages = () => {
             images = [
                require('../assets/2.PNG'),
                require('../assets/24131909_377294069360392_8484384010358490932_o.jpg'),
                require('../assets/download (1).png')
            ];
    };

    async function asyncCall () {
        const images2 = await loadImages();
        setLoading(false);
    };

    asyncCall();

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