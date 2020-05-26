import React, { useEffect, useState } from 'react';
import './BinState.scss';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';

import mapImg from '../../assets/2.PNG';
import Bin from '../../UI/binIndicator/binIndicator';
import BinCard from './BInCard/BinCard';
import Spinner from '../../UI/Spinner/Spinner';

const binState = props => {
    const [binArray, setBinArray] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(() => {
        axios.get("https://asu-bins.firebaseio.com/bins.json")
        .then(res =>{
            let newBinArray =[];
            for (let key in res.data) {
                newBinArray.push(res.data[key]);
            }
            setBinArray([...newBinArray]);
            setLoading(false);
        });
    }, []);


    let binCards = binArray.map(el => {
        return (
            <BinCard full={el.full} name={el.name} key={el.id}/>
        );
    });

    let bin = binArray.map(el => {
        return (
            <Bin full={el.full} location={"bin" + el.id} key={el.id}/>
        );
    });

    let mainContent = null;
    if (loading) {
        mainContent = <Spinner />;
    } else {
        mainContent = (
            <Row className="binState flex-row " noGutters>
                <Col md={12} lg={6} >
                    <div className="binState__map">
                        <img src={mapImg} alt="asu_map" className="binState__map--img" />
                        {bin}
                    </div>
                </Col>

                <Col md={12} lg={6}>
                <div className="binState__board">
                    {binCards}
                </div>
                </Col> 
            </Row>
        );
    }

    return (
        <React.Fragment>
            {mainContent}
        </React.Fragment>
    );
};

export default binState;