import {basketAdd} from "./Basket";
import {basketRemove} from './Basket';
import {basketPage} from './Basket';
import { Iteam } from "./Iteam";


const addToBasket = (button: HTMLElement) =>{        
    let elementsValue: string | null = button.getAttribute("value");
    let isElementContainClassName: boolean = button.classList.contains("card-btn");   
    
    if(isElementContainClassName){
        button.classList.add("card-btn-added");
        button.classList.remove("card-btn");

        if(elementsValue!= null)
        {
            basketAdd(elementsValue);  
        }          
    }
    else
    {        
        button.classList.add("card-btn");
        button.classList.remove("card-btn-added");

        if(elementsValue!= null)
        {
            basketRemove(elementsValue);
        }            
    }    
}   

function fullThePage (){
    let urlParams: URLSearchParams = new URLSearchParams(window.location.search);
    let category: string | null = urlParams.get('category');
   
    let myNode = document.getElementById("storage-container");
    
    if(myNode != null)
    {
        myNode.innerHTML = '';
    }

    if(category === "basketPage"){
        basketPage();
    }

    for (let i = 0; i < localStorage.length; i++){

        let localStorageKey = localStorage.key(i);  
        let iteam: string|null;      
        let iteamObject:Iteam;

        if(localStorageKey != null)
        {
            iteam = localStorage.getItem(localStorageKey);      
            
            if(iteam != null)
            {
                iteamObject = JSON.parse(iteam); 
            }   
        }       

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

const addCard = (iteamObject:Iteam) => {   

    let main = document.getElementById('storage-container');  
    let template = document.querySelector('#card-teamplate') as HTMLTemplateElement;
    let clone = template.cloneNode(true) as Element;
    
    let img = clone.querySelector("img");

    let src = iteamObject.file.fileReader;

    if( typeof src == "string" )
    {          
        img!.src = src;    
    }
    
   
    let span = (clone.parentNode).querySelector("span");
    span!.innerHTML = iteamObject.description;  

    let btn = (clone.parentNode).querySelector("button");

    btn!.setAttribute('value',iteamObject.name);

    if (sessionStorage.getItem(iteamObject.name) === null) {
        btn!.classList.add("card-btn");
        btn!.classList.remove("card-btn-added");
        btn!.textContent = "Add to basket";
    }else{        
        btn!.classList.add("card-btn-added");
        btn!.classList.remove("card-btn");   
        btn!.textContent = "Remove";    
    }

    if(main != null)
    {
        main.appendChild(clone)
    }  
}

export {addToBasket,fullThePage,addCard}

