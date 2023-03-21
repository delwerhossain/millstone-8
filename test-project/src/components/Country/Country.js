import React from 'react';
import './Country.css'

const Country = (props) => {
    return (
        <div className='main'> 
            <h3>{props.name}</h3>
            <p>population: {props.population}</p>
            {/* <p>{props.name}</p> */}
        </div>
    );
};

export default Country;