import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router';
import { IoArrowBack } from 'react-icons/io5';
import { searchByCoutry } from '../config';
import { Button } from '../Components/CountryDetails/Button';
import CountryInfo from '../Components/CountryDetails/CountryInfo';


const DetailsPage = () => {

    const {push, goBack} = useHistory();
    const {name} = useParams();
    const [country, setCountry] = useState(null);

    useEffect( () => {
        axios.get(searchByCoutry(name))
        .then( ({data}) => {
            setCountry(data[0])
        }) 
    }, [name])

    return (
        <div>
            <Button onClick={goBack}>
                <IoArrowBack/> 
                Back
            </Button>

            {country && 
                <CountryInfo push={push} country={country}/>
            }         
        </div>
    );
};

export default DetailsPage;