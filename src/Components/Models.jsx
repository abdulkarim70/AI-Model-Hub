import React, { use } from 'react';

const Models = ({modelPromise}) => {
    const models= use(modelPromise)
    console.log(models);
    return (
        <div className='py-20'>
           <div className='text-center'><h2 className='text-5xl font-bold'>Choose Your Ai Model</h2> 
           <p>One subscription gives you access to all frontier AI Models</p>
           </div>
           <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
            {models.map(model=><div className='shadow-lg rounded-lg border'>
               <div className='flex justify-center h-56' >
                <img className='h-40 w-40' src={model.image} alt="" />
               </div>
               <div>
                <h2 className='text-2xl font-bold'>{model.title}</h2>
                <p>{model.description}</p>
                <div>${model.price}/Per Month</div>
               </div>
               <button>Subscribe Now</button>
            </div>)}
           </div>
        </div>
    );
};

export default Models;