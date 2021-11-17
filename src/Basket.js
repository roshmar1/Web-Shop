//const {addCard} = require("./storage");

const  basketAdd = (elementsValue) => {          
    sessionStorage.setItem(elementsValue,localStorage.getItem(elementsValue));

    basketState();
} 

const  basketRemove = (elementsValue) => {             
    sessionStorage.removeItem(elementsValue);   

    basketState();
} 

const  basketState = () => {             
    document.getElementById("basket").textContent = sessionStorage.length;
} 

const basketPage =() => {

    const myNode = document.getElementById("storage-container");
    myNode.innerHTML = '';   

    for (let i = 0; i < sessionStorage.length; i++){

        let iteamObject = JSON.parse(sessionStorage.getItem(sessionStorage.key(i)));         
       
        addCard(iteamObject);
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

module.exports = {basketAdd,basketRemove,basketPage,basketState}