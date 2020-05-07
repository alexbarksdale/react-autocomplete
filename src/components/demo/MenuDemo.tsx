import React from 'react';
import styled from 'styled-components';

import { SearchBar } from './SearchBar';

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

export function MenuDemo(): JSX.Element {
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
                <SearchBar />
            </SearchContainer>
            <MenuGrid>
                <MenuCard>
                    <img
                        src='https://media-cdn.tripadvisor.com/media/photo-s/0b/70/fd/5c/foodporn.jpg'
                        alt='Food example'
                    />
                    <div>
                        <h1>Double Down</h1>
                        <p>Hello darkness my old friend.</p>
                    </div>
                </MenuCard>
                <MenuCard>
                    <img
                        src='https://i.pinimg.com/236x/ce/07/6d/ce076df606d41c232d25053768a07183--food-porn-eat.jpg'
                        alt='Food example'
                    />
                    <div>
                        <h1>Fun Dip</h1>
                        <p>Feelin freeky? Enjoy some dip!</p>
                    </div>
                </MenuCard>
                <MenuCard>
                    <img src='https://i.redd.it/kqvn0cy4w8uz.jpg' alt='Food example' />
                    <div>
                        <h1>Something&apos;s Not Right</h1>
                        <p>It started as a pizza... ended up throwing a cow in too.</p>
                    </div>
                </MenuCard>
                <MenuCard>
                    <img
                        src='https://66.media.tumblr.com/933545c51866c6348313efd8a1e2844e/e1d30c3209e679f3-fd/s1280x1920/75177289bf8d843a099267fa590faa951caab805.jpg'
                        alt='Food example'
                    />
                    <div>
                        <h1>Abomination</h1>
                        <p>Don&apos;t be shy, put some more.</p>
                    </div>
                </MenuCard>
                <MenuCard>
                    <img
                        src='https://i2.wp.com/localemagazine.com/wp-content/uploads/2019/06/dirt-dog.jpg?resize=750%2C400&ssl=1'
                        alt='Food example'
                    />
                    <div>
                        <h1>A Couple of Dogs</h1>
                        <p>
                            Feeling spicy? Feeling basic? Feeling healthyish? Grab a dog.
                        </p>
                    </div>
                </MenuCard>
                <MenuCard>
                    <img src='https://i.redd.it/tomdyjesf2901.png' alt='Food example' />
                    <div>
                        <h1>Yeah...</h1>
                        <p>Must be 21+.</p>
                    </div>
                </MenuCard>
            </MenuGrid>
        </MenuContainer>
    );
}
