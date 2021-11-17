const {addToBasket} = require("./storage");
const {fullThePage} = require("./storage")
const {addNewIteam} = require("./addNewIteam");
const {addRowdata} = require("./addNewIteam");

window.addRowdata = addRowdata;
window.fullThePage = fullThePage;
window.addToBasket = addToBasket;
window.addNewIteam = addNewIteam;
module.exports = {basketAdd}
module.exports  = {
    addToBasket: addToBasket,
    fullThePage: fullThePage,
    addNewIteam:addNewIteam
 }
