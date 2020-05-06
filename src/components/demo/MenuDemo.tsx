import React from 'react';
import styled from 'styled-components';

import { SearchBar } from '../SearchBar';

const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 34px;
`;

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MenuGrid = styled.div`
    display: grid;
    grid-gap: 18px;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    padding: 29px;
`;

const MenuCard = styled.div`
    border-radius: 13px;
    box-shadow: 0px 0px 11px 0px #d3d3d3;

    div {
        padding: 18px;

        h1 {
            font-size: 21px;
        }

        p {
            margin-top: 6px;
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

export function MenuDemo(): JSX.Element {
    return (
        <MenuContainer>
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
                        <p>Started as a pizza... ended up throwing a cow in too.</p>
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
