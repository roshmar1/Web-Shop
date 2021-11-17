const {basketAdd} = require("./Basket");

const addToBasket = (button) => {    

    let elements = button.getAttribute("value");
    let elementClassName = button.classList.contains("card-btn");
    console.log(elementClassName);
    
    if(elementClassName){
        button.classList.add("card-btn-added");
        button.classList.remove("card-btn");

        basketAdd();
        //sessionStorage.setItem( , 'value');
    }
    else{
        button.classList.add("card-btn");
        button.classList.remove("card-btn-added");
    }
}   

const fullThePage = (category) => {
    
    const myNode = document.getElementById("storage-container");
    myNode.innerHTML = '';   

    for (let i = 0; i < localStorage.length; i++){

        let iteamObject = JSON.parse(localStorage.getItem(localStorage.key(i)));         

        switch (category.getAttribute("value")) {
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

    console.log(clone);

    main.appendChild(clone)
}

module.exports = {addToBasket,fullThePage}
