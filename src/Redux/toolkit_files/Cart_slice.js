import { createSlice } from "@reduxjs/toolkit";


const EkartSlice = createSlice({
    name: "Ekart",    // Name of this slice of state
    initialState: [],   // Initial state (empty array, representing an empty cart). This is the state aray, where we will be adding items using AddToCart reducer.
    // This can be accessed using useSelector. 

    reducers: {         // This will contains our reducers, i.e all the functions which will modify our state (i.e. intialstate)


        AddToCart: (state, action) => {
            console.log("AddToCart called");

            // Find if the item already exists in the cart
            const existingItem = state.find(item => item.item_name === action.payload.item_name);

            if (existingItem) {
                // If the item exists, increment its quantity
                existingItem.qty += 1;
                console.log("Item quantity incremented");
            } else {
                // If the item doesn't exist, add the new item to the cart
                state.push({              // This is the logic to Add to cart, i.e. adding items to initial state array's all_items key.
                    ...action.payload,  // Spread the payload (item details)
                    qty: 1              // Set the quantity to 1 for new items
                });
                console.log("New item added to cart");
            }
        },

        DecrementFromCart: (state, action) => {
            const existingItem = state.find(item => item.item_name === action.payload.id && item.qty > 0);

            if (existingItem) {
                // If the item exists, decrement its quantity
                existingItem.qty -= 1;
                console.log("Item quantity decremented");
            } else {
                console.log("Nothing to delete");
            }
        },

        IncrementFromCart: (state, action) => {
            const existingItem = state.find(item => item.item_name === action.payload.id);

            if (existingItem) {
                // If the item exists, increment its quantity
                existingItem.qty += 1;
                console.log("Item quantity incremented");
            }
        },

        DeleteFromCart: (state, action) => {
            console.log("delete called");

            const updatedState = state.filter(item => item.item_name !== action.payload.id);
            console.log("updated state is", updatedState);

            // Replace the current state with the updated state (filtered out the item)
            return updatedState;
            // Redux reducers, the return statement is used to specify the new state after an action is applied. 
            // It is an important part of how state is updated in Redux, as Redux follows an immutable pattern.


        },
    },
})

export const { AddToCart } = EkartSlice.actions;     // Exporting the action 
// EkartSlice.actions is an object that contains all the action creators defined in the slice. In this case, it contains a single action creator: AddToCart 

// EkartSlice.action will automatically take all the values which are in Ekart.reducers keys i.e. EkartSlice.action will bring all the functions which are
// inside EkartSlice.reducers and return them as an object. This object will be destructured by the line, const {AddToCart} and object destrcuturing requires
// same key name, so we will get AddToCart function here.

export const { DecrementFromCart } = EkartSlice.actions;
export const { IncrementFromCart } = EkartSlice.actions;
export const { DeleteFromCart } = EkartSlice.actions;

export default EkartSlice.reducer;   // Exporting the reducer to be used in the store i.e.
// It will send the reference to reducers key
