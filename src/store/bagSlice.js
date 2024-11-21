import {createSlice} from "@reduxjs/toolkit";   

const bagSlice = createSlice({
  name: 'bag ',
  initialState: [],
  reducers: {
    addToBag: (state, action) => { //state= list of item
      state.push(action.payload);
    },
    removeFromBag: (state, action) => { //state= list of item
      return state.filter(itemId => itemId !== action.payload);
    }
  }
});
 
export const bagActions = bagSlice.actions; //named export

export default bagSlice;

