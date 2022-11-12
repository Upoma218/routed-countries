import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Country = () => {
    const country = useLoaderData()[0];
    const {name} = country;
    return (
        <div>
            <h1>Name: {name.common}</h1>
        </div>
    );
};

export default Country;