// all the products declared, following the mongoose productSchema

//can this be changed and updated in mongoDB?
// using this to import the data in the database

const products = [
    {
        name: "Crash Bandicoot 1",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/4/44/Crash_Bandicoot_Cover.png",
        description:
        "The first game of the successful Playstation 1 series! In very good shape",
        price: 499,
        countInStock: 2,
    },
    {
        name: "Crash Bandicoot 2",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/e/e6/Crash_Bandicoot_2_Cortex_Strikes_Back_Game_Cover.jpg",
        description:
        "The second game of the successful Playstation 1 series! In very good shape",
        price: 499,
        countInStock: 3,
    },

    {
        name: "Crash Bandicoot 3",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/3/3e/Crash_Bandicoot_3_Warped_Original_Box_Art.jpg",
        description:
        "The third game of the successful Playstation 1 series! In very good shape",
        price: 399,
        countInStock: 2,
    },

    {
        name: "Suikoden 1",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Suikoden_packaging01.jpg/220px-Suikoden_packaging01.jpg",
        description:
        "Unravel the secret of the Empire, unlock the meaning of the 27 True Runes, and discover the 108 Stars of Destiny in this classic JRPG",
        price: 999,
        countInStock: 2,
    },

    {
        name: "Spyro 1",
        imageUrl: "https://www.gbhbl.com/wp-content/uploads/2014/12/Spyro.jpg",
        description:
        "The classic game!",
        price: 699,
        countInStock: 2,
    },

    {
        name: "Spyro 2",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/9/91/Spyro_2_-_Ripto%27s_Rage%21_Coverart.png",
        description:
        "The second game in this PS1 trilogy",
        price: 699,
        countInStock: 1,
    },

    {
        name: "Spyro 3",
        imageUrl: "https://m.media-amazon.com/images/M/MV5BODc2MjFlZGYtN2IzNi00NzYwLTllY2YtZGMwOGNiYTQ5YTQ0XkEyXkFqcGdeQXVyNjM2NTM3ODA@._V1_.jpg",
        description:
        "The third game in this PS1 trilogy",
        price: 499,
        countInStock: 2,
    },

    {
        name: "Pokemon Red",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRseUiqwstFZmxxUtLa9t9SACCRrFdnFoye-A&usqp=CAU",
        description:
        "The first Pokemon game, version Blue! A must for the collector",
        price: 799,
        countInStock: 1,
    },

    {
        name: "Pokemon Blue",
        imageUrl: "http://retrospelbutiken.se/images/products/29463.jpg",
        description:
        "The first Pokemon game!",
        price: 799,
        countInStock: 2,
    },
];

module.exports = products;
// exporting it so it can be accessed in other files