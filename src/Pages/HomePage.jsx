import { useEffect, useState } from 'react';
import axios from 'axios';
import { ALL_COUNTRIES } from '../config';
import List from '../Components/Countries/List';
import Controls from '../Components/Controls/Controls';



const HomePage = ({countries, setCountries}) => {

    const [filteredCountries, setFilteredCountries] = useState(countries);

    const handleSearch = (search, region) => {
        let data = [...countries];

        if (region) {
            data = data.filter(c => c.region.includes(region))
        };

        if (search) {
            data = data.filter( c => c.name.toLowerCase().includes(search.toLowerCase()))
        };

        setFilteredCountries(data);
    }
    
    useEffect(() => {
        if (!countries.length)
            axios.get(ALL_COUNTRIES)
            .then(({ data }) => setCountries(data))
    }, [])

    // One more useEffect for pushing 'countries' to 'filteredCountries'
    useEffect( () => {
        setFilteredCountries(countries);
    }, [countries])

    return (
        <div>
            <Controls onSearch={handleSearch}/>
            <List filteredCountries={filteredCountries} />           
        </div>
    );
};

export default HomePage;