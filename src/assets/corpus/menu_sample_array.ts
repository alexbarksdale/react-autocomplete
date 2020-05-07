import { MenuProperties } from '../../components/demo/MenuDemo';

/*
CORPUS EXAMPLE: Food Menu
You could load this information from a database, file upload, etc.
The only thing required is to pass SearchBar an array of strings as the corpus.
*/
export const MenuCorpus: MenuProperties[] = [
    {
        name: 'Double Down',
        desc: 'Hello darkness my old friend.',
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/0b/70/fd/5c/foodporn.jpg',
    },
    {
        name: 'Fun Dip',
        desc: 'Feelin freeky? Enjoy some dip!',
        image:
            'https://i.pinimg.com/236x/ce/07/6d/ce076df606d41c232d25053768a07183--food-porn-eat.jpg',
    },
    {
        name: "Something's Not Right",
        desc: 'It started as a pizza... ended up throwing a cow in too.',
        image: 'https://i.redd.it/kqvn0cy4w8uz.jpg',
    },
    {
        name: 'Abomination',
        desc: "Don't be shy, put some more.",
        image:
            'https://66.media.tumblr.com/933545c51866c6348313efd8a1e2844e/e1d30c3209e679f3-fd/s1280x1920/75177289bf8d843a099267fa590faa951caab805.jpg',
    },
    {
        name: 'A Couple of Dogs',
        desc: 'Feeling spicy? Feeling basic? Feeling healthyish? Grab a dog.',
        image:
            'https://i2.wp.com/localemagazine.com/wp-content/uploads/2019/06/dirt-dog.jpg?resize=750%2C400&ssl=1',
    },
    {
        name: 'Yeah...',
        desc: 'Must be 21+.',
        image: 'https://i.redd.it/tomdyjesf2901.png',
    },
];
