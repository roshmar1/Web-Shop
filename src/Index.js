const {addToBasket} = require("./storage");
const {fullThePage} = require("./storage")
const {addNewIteam} = require("./addNewIteam");
const {loadOnce} = require("./addNewIteam");
const {basketPage} = require("./Basket")
const {basketState} = require("./Basket")
const {addCard} = require("./storage")

window.basketState = basketState;
window.addCard = addCard;
window.basketPage = basketPage;
window.loadOnce = loadOnce;
window.fullThePage = fullThePage;
window.addToBasket = addToBasket;
window.addNewIteam = addNewIteam;

loadOnce();


module.exports  = {
    basketState:basketState,
    basketPage:basketPage,
    addToBasket: addToBasket,
    fullThePage: fullThePage,
    addNewIteam:addNewIteam
 }
