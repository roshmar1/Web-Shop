import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import {Iteam} from './Iteam';
// Define a type for the slice state
interface CardSlice {
    name: string,
    description:string,
    category: string,
    file: {
            fileName: string | null,                   
            fileReader: string| ArrayBuffer| null,
        }
}

// Define the initial state using that type
const initialState: CardSlice = {
    name: 'Iphone 13',
    description: "loren Ipsum",
    category: "Phone",
    file: {
            fileName: 'Iphone 13',                   
            fileReader: '' ,
        }
} as CardSlice

export const counterSlice = createSlice({
  name: 'card',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: state => {
     
    },
    decrement: state => {
     
    },
    // Use the PayloadAction type to declare the contents of `action.payload`    
  }
})

export const { increment, decrement} = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.card

export default counterSlice.reducer