import React from 'react';
import './Content.css';
import Subcontent from '../Subcontent/Subcontent';
import information from '../../fakeData/userInfo';
import { useState } from 'react';
import Usummery from '../Usummery/Usummery';

const Content = () => {

    const [cart,setCart] = useState([]);

    const addPersonHandler = (subcontent) =>{
        const newCart = [...cart,subcontent]
        setCart(newCart);
    } 

    return (
        <div className="content-wrapper">
            <div className="left-content">
                {
                    information.map(data => <Subcontent subcontent={data} addPersonHandler={addPersonHandler}></Subcontent>)
                }
            </div>
            <div className="right-content">
               <Usummery cart={cart}></Usummery>
            </div>
        </div>
    );
};

export default Content;