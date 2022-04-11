import React from 'react';
import styled from 'styled-components';

import Card from './Card';


const Wrapper = styled.section`
    width: 100%;
    padding: 2rem 0;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;

    @media (min-width: 767px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 3rem;
        padding: 2.5rem 0;
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 4rem;
    }
`

const List = ({filteredCountries}) => {

    console.log(filteredCountries);
    return (
        <Wrapper>
           {filteredCountries.map(c => {
                    const countryInfo = {
                        img: c.flags.png,
                        name: c.name,
                        info: [
                            {
                                title: 'Population',
                                description: c.population.toLocaleString()
                            },
                            {
                                title: 'Region',
                                description: c.region.toLocaleString()
                            },
                            {
                                title: 'Capital',
                                description: c.capital
                            },
                        ]
                    };
                    return <Card key={c.name} {...countryInfo} />
                })}
        </Wrapper>
    );
};

export default List;