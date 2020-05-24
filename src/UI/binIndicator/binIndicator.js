import React from 'react';
import './binIndicator.scss';
import { RiDeleteBinLine } from "react-icons/ri";

const binIndicator = props => {
    let classes ="";
    if (props.full) {
        classes = "red" + " " + props.location;
    } else {
        classes = "blue" + " " + props.location;
    }
    return (
        <div className={"binIndicator "+ classes}>
            <RiDeleteBinLine className="binIndicator__icon" />
        </div>
    );
};

export default binIndicator;