import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './Subcontent.css';

const Subcontent = (props) => {
    console.log(props);
    return (
        <div className="subcwrapper">
            <div className="user-face">
                <img src={props.subcontent.img} alt="profile"/>
            </div>
            <div className="user-details">
                <h3>Name:  <small>{props.subcontent.name}</small></h3>
                <h3>Email: <small>{props.subcontent.email}</small></h3>
                <h3>Phone: <small>{props.subcontent.phone}</small></h3>
                <h4> Annual income: {props.subcontent.income}</h4>
                <button className="add-btn" onClick={() => props.addPersonHandler(props.subcontent)}>
                    <FontAwesomeIcon icon={faPlus} /> Add Person
                </button>
            </div>
        </div>
    );
};

export default Subcontent;