import React, { useState, useEffect } from 'react'
import Cart from './Cart'
import Products from './Products_data.json'
import { useDispatch } from 'react-redux'   // It is required to create a dispatch variable, which is required to run Add to Cart, as we need dispatch function to update state in reducers
import { AddToCart } from '../toolkit_files/Cart_slice' // This will contain the logic to add to cart
import { useSelector } from 'react-redux'       // useSelector is used to access the state 
import { DecrementFromCart } from '../toolkit_files/Cart_slice'
import { IncrementFromCart } from '../toolkit_files/Cart_slice'
import { DeleteFromCart } from '../toolkit_files/Cart_slice'

const Home = () => {
    const dispatch = useDispatch();
    const Cart_array = useSelector((state) => state.ekart);

    console.log("Cart array is", Cart_array);

    let obj = {};
    let final;

    return (
        <div className='flex flex-wrap gap-3'>

            <Cart />

            <div className='group fixed right-2 top-1 bg-green-500 text-white w-20 rounded-md p-1 text-center cursor-pointer'> Cart
                <div className='overflow-y-scroll w-96 max-h-72 bg-black rounded-md flex-col hidden group-hover:block absolute top-[100%] right-[0]'>

                    {
                        Cart_array.map((item) => {

                            return (
                                <div key={item.item_name} className='flex justify-start bg-yellow-300 text-black p-2 gap-2 m-2 opacity-100'>
                                    <img src={item.image} alt="okok" width={90} height={90} />
                                    <div className='flex-col place-items-start'>
                                        <div className='text-left'>Item : {item.item_name}</div>
                                        <div>Qty: {item.qty}</div>
                                        <div>
                                            <button onClick={() => { dispatch(DecrementFromCart({ id: item.item_name })) }} className='bg-black text-white rounded-md w-6 '>-</button> &nbsp;
                                            <button onClick={() => { dispatch(IncrementFromCart({ id: item.item_name })) }} className='bg-black text-white rounded-md w-6 '>+</button> &nbsp;
                                            <button onClick={() => { dispatch(DeleteFromCart({ id: item.item_name })) }} className='bg-black text-white rounded-md w-14 '>Delete</button>

                                        </div>

                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>



            {
                Products.map((product, i) => {
                    return (
                        <div key={i} className="w-64 flex flex-col rounded-xl glass min-h-64 mt-3">
                            <div>
                                <img
                                    src={product.imager}
                                    alt="test"
                                    width="300"
                                    height="300"
                                    className="rounded-t-xl w-full"
                                />
                            </div>
                            <div className="flex flex-col py-3 px-3 pb-7 -mt-4 bg-gray-500 text-white rounded-b-xl ">
                                <div className="flex justify-between">
                                    <h1 className="font-RubikBold ">{product.item}</h1>
                                    <h1 className="font-bold font-RubikBold">{product.price}</h1>
                                </div>
                                <div className="flex  justify-between font-mono">
                                    <button onClick={() => { dispatch(AddToCart({ price: product.price, image: product.imager, item_name: product.item })) }} className='px-3 py-1 rounded-md bg-blue-500 my-2'>Add To Cart</button>
                                    {/* Through dispatch, we have called AddToCart and in AddToCart, we are passing our payload as an object.*/}
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div >
    )
}

export default Home
