import Image from 'next/image';
import React, { useState } from 'react';


const FoodWrapper = ({food}) => {



      
    return (
        <>
        
        <div className={`max-w-[640px] ml-auto mr-auto z-5  mt-4`} >
            {food && food.map((item, index) => 

            <div className='flex text-white  pl-[20px] pr-[20px] '>


                <div className='relative w-full flex p-3 ml-2 mr-2 mb-2   h-[150px] bg-lightGrey rounded-lg'>
                    
                <div className="absolute  drop-shadow-xl  right-[-20px] top-[25px]">
                <Image className="cursor-pointer" width={100} height={100} alt="" src={item.url} />
                </div>
                    
                    <div className=' pr-[100px]' >
                        <p className='font-[400] mt-2'>{item.name}</p>
                    <p className='font-[300] mt-1 text-sm'>{item.ingridient}</p>
                        <p className='font-[300] mt-1 text-sm'> {item.price} تومان</p>
                    </div>

                <div className='absolute pl-3 pr-3 text-3xl bg-darkGrey brightness-150 rounded-xl left-[-20px] top-[60px] font-[900] cursor-pointer'>+</div>
                
                </div>

            </div>
            )}
            
        </div>


        </>
    );
};

export default FoodWrapper;