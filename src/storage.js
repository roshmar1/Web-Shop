const {basketAdd} = require("./Basket");
const {basketRemove} = require('./Basket');
const {basketPage} = require('./Basket');

const addToBasket = (button) => {    

    let elementsValue = button.getAttribute("value");
    let elementClassName = button.classList.contains("card-btn");
    console.log(elementClassName);
    
    if(elementClassName){
        button.classList.add("card-btn-added");
        button.classList.remove("card-btn");

        basketAdd(elementsValue);       
    }
    else{        
        button.classList.add("card-btn");
        button.classList.remove("card-btn-added");

        basketRemove(elementsValue);
    }
}   

const fullThePage = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');

    const myNode = document.getElementById("storage-container");
    myNode.innerHTML = '';   

    if(category === "basketPage"){
        basketPage();
    }
    for (let i = 0; i < localStorage.length; i++){

        let iteamObject = JSON.parse(localStorage.getItem(localStorage.key(i)));         

        switch (category) {
            case 'All':
                addCard(iteamObject);
                break;
            case iteamObject.category:
                addCard(iteamObject);
                break;           
            default:                
                break;
          }        
    }
}

const addCard = (iteamObject) => {
    
    let main = document.getElementById('storage-container');  
    let template = document.querySelector('#card-teamplate');

    let clone = template.content.cloneNode(true);

    let img = clone.querySelector("img")
    img.src = iteamObject.file.fileReader;
    
    let span = clone.querySelector("span").innerHTML = iteamObject.description;  

    let btn = clone.querySelector("button")
    btn.setAttribute('value',iteamObject.name);

    if (sessionStorage.getItem(iteamObject.name) === null) {
        btn.classList.add("card-btn");
        btn.classList.remove("card-btn-added");
        btn.textContent = "Add to basket";
    }else{        
        btn.classList.add("card-btn-added");
        btn.classList.remove("card-btn");   
        btn.textContent = "Remove";    
    }

    main.appendChild(clone)
}

module.exports = {addToBasket,fullThePage,addCard}
