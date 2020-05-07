import React, { useState, Dispatch } from 'react';
import styled from 'styled-components';

import { SearchBar } from './SearchBar';
import { MenuCorpus } from '../../assets/corpus/menu_sample_array';

const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const MenuHeader = styled.div`
    height: 400px;
    width: 100%;
    margin-bottom: 34px;
    background: url('https://images6.alphacoders.com/908/908160.jpg');
    background-size: cover;
    background-repeat: no-repeat;
`;

const MenuHeaderContent = styled.div`
    width: 50%;
    float: right;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-right: 15px;

    h1 {
        color: #fff;
        font-size: 62px;
        margin-bottom: 15px;
        text-shadow: 0px 0px 3px #434343;
    }

    p {
        color: #fff;
        text-shadow: 0px 0px 3px #434343;
    }

    button {
        margin-top: 14px;
        padding: 10px 25px;
        color: #fff;
        font-size: 14px;
        font-weight: 800;
        letter-spacing: 0.6px;
        width: fit-content;
        border: none;
        border-radius: 6px;
        text-transform: uppercase;
        transition: all 0.3s ease-in-out;
        background-color: #c3393c;

        &:hover {
            cursor: pointer;
            padding: 10px 35px;
            transition: all 0.3s ease-in-out;
            background-color: #ae2c2e;
        }

        &:focus {
            outline: none;
        }
    }
`;

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MenuGrid = styled.div`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    padding: 29px;
`;

const MenuCard = styled.div`
    border-radius: 13px;
    box-shadow: 0px 0px 14px 0px #d3d3d3;

    div {
        padding: 9px 17px;

        h1 {
            color: #393939;
            font-size: 20px;
        }

        p {
            margin-top: 6px;
            color: #878787;
        }
    }

    img {
        height: 200px;
        width: 100%;
        object-fit: cover;
        border-top-left-radius: 13px;
        border-top-right-radius: 13px;
    }
`;

const MenuMsgContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 25px;
    text-align: center;

    h1 {
        color: #393939;
    }

    p {
        display: flex;
        color: #878787;
        margin-top: 10px;
    }
`;

const MsgDivider = styled.div`
    height: 3px;
    width: 45px;
    margin-top: 5px;
    background-color: #393939;
`;

export interface MenuProperties {
    name: string;
    desc: string;
    image: string;
}

function DisplayMenu(menu: MenuProperties[], term: string): JSX.Element[] {
    // Filter the menu based on the term input
    const filteredMenu = menu.filter((item: MenuProperties): boolean => {
        return item.name.toLowerCase().startsWith(term.toLowerCase());
    });

    // Iterates over the filteredMenu and displays the items.
    const menuResults = filteredMenu.map(
        (item: MenuProperties): JSX.Element => {
            return (
                <MenuCard key={item.name}>
                    <img src={item.image} alt={`${item.name}`} />
                    <div>
                        <h1>{item.name}</h1>
                        <p>{item.desc}</p>
                    </div>
                </MenuCard>
            );
        }
    );
    return menuResults;
}

// Menu names to populate the prefix tree
const MenuSearchTerms: string[] = MenuCorpus.map((item: any) => item.name);

export function MenuDemo(): JSX.Element {
    const [term, setTerm] = useState<string>('');

    return (
        <MenuContainer>
            <MenuHeader>
                <MenuHeaderContent>
                    <h1>Special Offer</h1>
                    <p>
                        Tryout our new Ares burger. Guaranteed to make you cry. Complete
                        this burger within
                        <strong> one hour </strong>
                        and get a years worth of our Fun Dip.
                    </p>
                    <button type='submit'>Order Now</button>
                </MenuHeaderContent>
            </MenuHeader>

            <MenuMsgContainer>
                <h1>Choose & enjoy</h1>
                <MsgDivider />
                <p>
                    We take pride in our world class meals.
                    <br />
                    Take a minute to let our menu talk you then choose and enjoy.
                </p>
            </MenuMsgContainer>

            <SearchContainer>
                <SearchBar
                    corpus={MenuSearchTerms}
                    onChange={(searchTerm: string) => setTerm(searchTerm)}
                    disableTermSubmit
                />
            </SearchContainer>
            <MenuGrid>{DisplayMenu(MenuCorpus, term)}</MenuGrid>
        </MenuContainer>
    );
}
