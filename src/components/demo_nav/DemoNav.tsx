import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface StyleProps {
    navlogo?: string;
}

const NavContainer = styled.nav`
    display: flex;
    height: 60px;
    border-bottom: 2px solid #ececec;
`;

const NavContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px auto;
    width: 1375px;

    ul {
        display: flex;

        li {
            list-style: none;
            margin-right: 15px;
        }
    }
`;

const NavLogo = styled.h1`
    position: absolute;
    left: 10px;
`;

export const StyledLink = styled(Link)`
    color: #3d3d3d;
    font-size: ${({ navlogo }: StyleProps) => (navlogo ? '19px' : '17px')};
    font-weight: 600;
    letter-spacing: 0.5;
    padding: ${({ navlogo }: StyleProps) => (navlogo ? '15px' : '0px')};
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    &:hover {
        opacity: 0.8;
        transition: all 0.3s ease-in-out;
    }
`;

export function DemoNav(): JSX.Element {
    return (
        <NavContainer>
            <NavContent>
                <NavLogo>
                    <StyledLink to='/' navlogo='true'>
                        AutoComplete
                    </StyledLink>
                </NavLogo>
                <ul>
                    <li>
                        <StyledLink to='/'>Home</StyledLink>
                    </li>
                    <li>
                        <StyledLink to='/demo'>Demo</StyledLink>
                    </li>
                </ul>
            </NavContent>
        </NavContainer>
    );
}
