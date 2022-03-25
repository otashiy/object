const cartoon = {
    title: "Pokemon",
    year: 2021,
    img: "https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg",
    button: "download now",
}

const pokemon = document.querySelector(".pokemon");

const container = document.querySelector(".container");
container.className = "container";
const pokemonArticle = document.createElement("article");
pokemonArticle.className = "pokemon-article";
const pokemonTitle = document.createElement("h2");
pokemonTitle.className = "pokemon-title";
pokemonTitle.textContent = cartoon.title;
const pokemonDesc = document.createElement("p");
pokemonDesc.className = "pokemon-text";
pokemonDesc.textContent = cartoon.year;
const pokemonImg = document.createElement("img");
pokemonImg.className = "pokemon-img";
pokemonImg.src = cartoon.img;
const pokemonButton = document.createElement("button");
pokemonButton.className = "pokemon-btn";
pokemonButton.textContent = cartoon.button;
console.log(pokemonArticle);

pokemonArticle.append(pokemonButton);
pokemonArticle.prepend(pokemonImg);
pokemonArticle.prepend(pokemonDesc);
pokemonArticle.prepend(pokemonTitle);
pokemon.append(pokemonArticle);
container.append(pokemon);


const cinema = {
    title: "Batman",
    year: 2010,
    img: "https://media.vanityfair.com/photos/5ef25d9d184617200a49bac5/4:3/w_2999,h_2249,c_limit/M8DBATM_WB002.jpg",
    link: "Watch now",
}

const batman = document.querySelector(".batman");


const batmanArticle = document.createElement("article");
batmanArticle.className = "batman-article";
const batmanTitle = document.createElement("h2");
batmanTitle.className = "batman-title";
batmanTitle.textContent = cinema.title;
const batmanDesc = document.createElement("p");
batmanDesc.className = "batman-text";
batmanDesc.textContent = cinema.year;
const batmanImg = document.createElement("img");
batmanImg.className = "batman-img";
batmanImg.src = cinema.img;
const batmanLink = document.createElement("a");
batmanLink.className = "batman-link";
batmanLink.textContent = cinema.link;
console.log(batmanArticle);

batmanArticle.append(batmanLink);
batmanArticle.prepend(batmanImg);
batmanArticle.prepend(batmanDesc);
batmanArticle.prepend(batmanTitle);
batman.append(batmanArticle);



const uzb = {
    title: "Shaytanat",
    year: 2000,
    img: "https://avatars.mds.yandex.net/get-vthumb/3415088/5a8a3fae039519b99dd75bd5f3ec93f7/564x318_1",
    link: "Tomosha qilish",
}

const uzbKino = document.querySelector(".uzkino");


const uzbKinoArticle = document.createElement("article");
uzbKinoArticle.className = "uzbKino-article";
const uzbKinoTitle = document.createElement("h2");
uzbKinoTitle.className = "uzbKino-title";
uzbKinoTitle.textContent = uzb.title;
const uzbKinoDesc = document.createElement("p");
uzbKinoDesc.className = "uzbKino-text";
uzbKinoDesc.textContent = uzb.year;
const uzbKinoImg = document.createElement("img");
uzbKinoImg.className = "uzbKino-img";
uzbKinoImg.src = uzb.img;
const uzbKinoLink = document.createElement("a");
uzbKinoLink.className = "uzbKino-link";
uzbKinoLink.textContent = uzb.link;
console.log(uzbKinoArticle);

uzbKinoArticle.append(uzbKinoLink);
uzbKinoArticle.prepend(uzbKinoImg);
uzbKinoArticle.prepend(uzbKinoDesc);
uzbKinoArticle.prepend(uzbKinoTitle);
uzbKino.append(uzbKinoArticle);

