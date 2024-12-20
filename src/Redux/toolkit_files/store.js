import {configureStore} from '@reduxjs/toolkit' 
// In redux we have configureStore and in react we have createStore

import EkartSlice from './Cart_slice.js'        // It will have all the reducers in Ekart


const Store = configureStore({          // configureStore function is used to create the Redux store.

    reducer: {       // reducer object will contain info of all the reducers.

        ekart: EkartSlice,  // This connects the EkartSlice reducer to the 'ekart' key in state. This means we are telling Redux to manage the state defined 
                            // in EkartSlice under a specific key (ekart).  
                            // When the store is created, it uses the reducer (EkartSlice.reducer) and assigns it to the ekart key in the overall store.
                            // The state created in our Cart_slice.js is stored under the ekart key, as specified in the reducer part of the store.js configuration.
        /* 
        State name: ekart
        Accessing state: In your components, you can access the cart state using state.ekart via useSelector from react-redux. 
        */

    },
})

export default Store