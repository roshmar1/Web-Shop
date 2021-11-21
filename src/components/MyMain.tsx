import React from "react";
import '../css/Store.css';
import {addToBasket} from '../ts/storage';
import {MyForm} from'./MyForm';
import { SellCard } from "./SellCard";

export function MyMain()
{
    return(
        <div>
            <MyForm/>           
            <main>

            </main>
        </div>
    );
}