import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props.country);
    const {name, population , area ,flags}  = props.country 
    return (
        <div className='main'> 
            <h3>{name.common}</h3>
            <p>population: { population}</p>
            <p>Area : {area}</p>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;