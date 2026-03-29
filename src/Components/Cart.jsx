import React from 'react';

const Cart = ({carts}) => {
    console.log(carts);
    return (
        <div className='p-10'>
            <h2 className='text-2xl font-bold'>Your Carts</h2>
       {carts.map(cart=> <div className='flex items-center justify-between border rounded-lg px-2' key={cart.id}>
<div className='flex items-center gap-2'>
    <div className='py-5'>
    <img className='h-20 w-20 object-contain' src={cart.image} alt="" />
</div>
<div>
    <h2 className='text-xl font-bold'>{cart.title}</h2>
</div>
</div>
<div className='text-3xl font-bold'>$ {cart.price}/Per Month</div>
       </div> )} 
        </div>
    );
};

export default Cart;