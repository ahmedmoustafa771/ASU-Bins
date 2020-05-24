import React from 'react';
import './BinCard.scss';
import { RiDeleteBinLine } from "react-icons/ri";

const binCard = props => {
    let classes = "";
    if(props.full) {
        classes = "red";
    } else {
        classes = "black";
    }

    return (
        
        <div className="binCard">
            <RiDeleteBinLine className={"binCard__icon " + classes} />
            <div className={"binCard__text " + classes}>
                <h2>{props.name} </h2>
                {props.full? <p>Please empty the bin</p> : <p>You can dispose garbage here</p>}
            </div>
        </div>
    );
};

export default binCard;