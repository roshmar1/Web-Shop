/**
 * @jest-environment jsdom
 */

'use strict';

const {basketAdd} = require("../Basket");
const {basketRemove} = require("../Basket");
const {basketState} = require("../Basket");

describe("basketAdd" , () =>{
    test("Should change text to 2" , () => {
        //Arrange
        document.body.innerHTML = `
        <span class="nav-basket-number" id="basket">0</span>
        `;

        //Act
        basketAdd(1);
        basketAdd(2);
        //Assert
        expect(document.getElementById("basket").textContent).toBe("2");
    })
})

describe("basketRemove" , () =>{
    test("Should change text to 1" , () => {
        //Arrange
        document.body.innerHTML = `
        <span class="nav-basket-number" id="basket">0</span>
        `;

        //Act
        basketRemove(1);
        //Assert
        expect(document.getElementById("basket").textContent).toBe("1");
    })
})

describe("basketState" , () =>{
    test("Should change text to 0" , () => {
        //Arrange
        
        document.body.innerHTML = `
        <span class="nav-basket-number" id="basket">0</span>
        `;
        //Act       
        basketState()
        //Assert
        expect(document.getElementById("basket").textContent).toBe("1");
    })
})