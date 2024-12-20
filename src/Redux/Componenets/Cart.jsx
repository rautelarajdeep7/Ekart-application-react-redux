import React from 'react'
import { useSelector } from "react-redux";    // useSelector is used to access value from store/reducer

const Cart = () => {
  const Cart = useSelector((state)=> {console.log(state); return state.ekart})   
  // state is an object which will have all the keys which are storing states of our project as their values. These keys are mentioned inside reducer key in store.js file.
  // Above, we can see in the console log, we are getting an object, which has one key with name "ekart" and this ekart key has its value as an array of object, which
  // contains all the state data of ekart.  i.e. ekart key has its value as an array (which is our state array which is initialstate defined in Cart_slice.js)
  // and and this state array will get multiple objects through AddToCart function payload, as these objects will stores as array items.
  // e.g, It looks like this { ekart: [{price: '449.96}, image: "http://dummyimage.com/250x250.png/5fa2dd/ffffff", item: "Soup Bowl Clear8ox92008"] }

  return (
    <div className='w-full bg-blue-500 py-3 text-white'>
        <span> &nbsp; Quantity: {Cart.reduce((accumulator, item)=>{return accumulator+ item.qty},0)} </span> <br />
        <span> &nbsp; Total: {Math.floor(Cart.reduce((accumulator,item)=> {return accumulator+Number(item.price*item.qty)},0))}</span>
    </div>
  )
}

export default Cart
