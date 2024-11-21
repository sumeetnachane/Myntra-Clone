import {createSlice} from "@reduxjs/toolkit";   
import { act } from "react";

const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => { //state= list of item
      return action.payload;
    }
  }
});
 
export const itemsActions = itemsSlice.actions; //named export

export default itemsSlice;

