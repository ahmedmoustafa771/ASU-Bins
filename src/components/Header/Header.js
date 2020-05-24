import React from 'react';
import './Header.scss';
import { Row } from 'react-bootstrap'; 
import logo from '../../assets/download (1).png';

const binState = props => {
    return (
        <Row noGutters>
            <h1 className="header">
            <img src={logo} alt="logo" className="logo" />
                ASU Bins Monitor</h1>
        </Row>
    );
};

export default binState;