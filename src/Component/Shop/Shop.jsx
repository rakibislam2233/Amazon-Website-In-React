import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Product from '../Product/Product';
const Shop = () => {
    const [cart,setCart] = useState([]);
    const [showAll,setShowAll] = useState(false);
    const [sum,setSum] = useState([]);
    const [showShoppingCart,setShowShoppingCart] = useState([]);
    const hendelClick = (product) => {
        const newCart = [...showShoppingCart,product];
        setShowShoppingCart(newCart);
        const newSum = [...sum,product.price];
        setSum(newSum);
    }
    const sumition = sum.reduce((x,y) => x+y , 0);
    const showAllData = ()=>{
        setShowAll(true);
    }
    useEffect(()=>{
        fetch(`https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json`).then(res=>res.json()).then(data=>setCart(data))
    },[])
    return (
        <div className='w-full max-w-6xl mx-auto md:flex  justify-between gap-5 py-10'>
            <div className='border md:w-[80%] p-5 '>
                <div className='grid rounded-lg  grid-cols-1 md:grid-cols-3 gap-5 pb-5'>
                {
                   cart.slice(0,showAll ? cart.length-1 : 6).map(product => <Product key={product.id} product={product} hendelClick={hendelClick}></Product>)
                } ;
                </div>
                {
                 !showAll && <div className='flex justify-center'>
                    <span className='inline-block' onClick={showAllData}>
                    <Button>See More</Button>
                    </span>
                    </div>
                }
            </div>
            <div className='md:w-[20%] px-3 rounded bg-[#FFE1B3]'>
                <h1 className='text-2xl  font-semibold'>Order Summary</h1>
                <p className='font-semibold'>Selected Item: {showShoppingCart.length}</p>
                <p>Total Price : {sumition}</p>
                <p>Total Shipping Charge : $ {5} </p>
                <p>Tax : $ {114}</p>
                <h2 className='text-xl font-semibold'>Grand Total: $ {}</h2>
            </div>
        </div>
    );
};

export default Shop;