import React from 'react';
import './Usummery.css';
import Subcontent from '../Subcontent/Subcontent';

const Usummery = (props) => {
    
    const cart = props.cart;

    let total = 0;
    for(let i = 0; i < cart.length; i++){
        const information = cart[i];
        total = total + parseInt(information.income);
    }       
    return(
        <div>
            <h3 className="u-summery">User info summery:</h3>
            <h4 className="addedper">Added person: {cart.length}</h4>
            <h4 id="t-income">Total income: {total}</h4>
        </div>
    );
};

export default Usummery;