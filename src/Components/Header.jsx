import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Container } from './Container';
import { IoMoon, IoMoonOutline, IoMoonSharp } from "react-icons/io5";
import Controls from './Controls/Controls';

const HeaderEl = styled.header`
    box-shadow: var(--shadow);
    background-color: var(--colors-ui-base);
    
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
`;

const Title = styled.a.attrs({
    href: '/'
})`
    text-decoration: none;
    color: var(--colors-text);
    font-weight: var(--fw-bold);
    font-size: var(--fs-sm);
`;

const ModeSwitcher = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    color: var(--colors-text);
    font-weight: var(--fw-bold);
    font-size: var(--fs-sm);
    text-transform: capitalize;
    
`

function Header(props) {
    const [theme, setTheme] = useState('light');

    useEffect( ()=> {
        document.body.setAttribute('data-theme', theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Title>Where is the world?</Title>
                    <ModeSwitcher onClick={toggleTheme}>
                        {theme === 'light' ? <IoMoonOutline/> : <IoMoonSharp />}
                        <span style ={{marginRight: '0.5rem'}}></span> {theme} mode
                    </ModeSwitcher>
                </Wrapper>
            </Container>
        </HeaderEl>
    );
}

export default Header;

