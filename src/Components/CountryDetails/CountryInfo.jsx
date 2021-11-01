import styled from "styled-components";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { filterByCodes } from "../../config";

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: 100%;
    gap: 2rem;
    width: 100%;
    margin-top: 3rem;

    @media(min-width: 767px) {
        grid-template-columns: minmax(100px, 400px) 1fr;
        align-items: center;
        gap: 5rem;
    }

    @media(min-width: 1024px) {
        grid-template-columns: minmax(400px, 600px) 1fr;
    }
`;

const CoutryImage = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

const CountryTitle = styled.h1`
    margin: 0;
    font-weight: var(--fw-normal);
    margin-bottom: 1rem;
`;

const ListGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media(min-width: 1024px) {
        flex-direction: row;
        gap: 4rem;
    }
`;

const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const ListItem = styled.li`
    line-height: 1.8;

    & > b {
        font-weight: var(--fw-bold);
    }
`;

const Meta = styled.div`
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: flex-start;

    & > b {
        font-weight: var(--fw-bold);  
    }

    @media(min-width: 767px) {
        flex-direction: row;
        align-items: center;
    }
`;

const TagGroup = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
`;

const Tag = styled.span`
    padding: 0 1rem;
    background-color: var(--colors-ui-base);
    box-shadow: var(--shadow);
    line-height: 1.5;
    cursor: pointer;
`;


const CountryInfo = ({country, push}) => {

    const {
        name,
        nativeName,
        flag,
        capital,
        population,
        region,
        subregion,
        topLevelDomain,
        currencies = [],
        languages = [],
        borders = []
    } = country;

    const [neighbors, setNeighbors] = useState([]);

    useEffect( () => {
        if (borders.length) 
        axios.get(filterByCodes(borders))
        .then( ({data}) => setNeighbors(data.map(c => c.name)))
    }, [borders])

    return (
        <Wrapper>
            <CoutryImage src={flag}/>
            <div>
                <CountryTitle>
                    {name}
                </CountryTitle>
                <ListGroup>
                    <List>
                        <ListItem>
                            <b>Native Name:</b> {nativeName}
                        </ListItem>
                        <ListItem>
                            <b>Population: </b> {new Intl.NumberFormat('en-US').format(population)}
                        </ListItem>
                        <ListItem>
                            <b>Region: </b> {region}
                        </ListItem>
                        <ListItem>
                            <b>Sub Region: </b> {subregion}
                        </ListItem>
                        <ListItem>
                            <b>Capital: </b> {capital}
                        </ListItem>
                    </List>
                    <List>
                        <ListItem>
                            <b>Top Level Domain: </b> {topLevelDomain.map(
                                 d => <span key={d}>{d}</span>
                            )}
                        </ListItem>
                        <ListItem>
                            <b>Currencies: </b> {currencies.map( c => 
                                <span key={c.code}> {c.name} </span>
                            )}
                        </ListItem>
                        <ListItem>
                            <b>Languagies: </b> {languages.map( (l, index) => 
                               <span key={l.name}>
                                   { (index ? ', ' : '' ) +  l.name}
                                </span>
                            )}
                        </ListItem>
                    </List>
                </ListGroup>

                <Meta>
                    <b>Border Countries: </b>
                    {!borders.length ? (
                        <span>There is no border countries</span>
                     ) :
                        (<TagGroup>
                            {neighbors.map( c => (
                                <Tag key={c} onClick={ () => push(`/country/${c}`) }> 
                                    {c} 
                                </Tag>
                            ))}
                        </TagGroup>)
                    }   
                </Meta>
            </div>
        </Wrapper>
    );
};

export default CountryInfo;