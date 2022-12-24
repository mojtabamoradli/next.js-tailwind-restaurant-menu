import Image from 'next/image';
import React from 'react';
import { useEffect, useState } from "react";
import FoodWrapper from '../components/FoodWrapper';
import Link from 'next/link';
import Head from "next/head";

const cafe = () => {

          const cafe_modern_panch = [
            { url: "/images/food/abmiveh.png", name: "آبمیوه طبیعی", ingridient:  "آبمیوه های فصل (انتخابی)", price: "۶۵"},
            { url: "/images/food/lira.png", name: "لیرا", ingridient:  "انار, آلوورا, میکس مرکبات", price: "۶۵"},
            { url: "/images/food/majik.png", name: "مجیک کولا", ingridient:  "پشن فروت, میکس بری, کوکا ", price: "۷۷"},
            { url: "/images/food/nimo.png", name: "پای نیمو", ingridient:  "نارگیل , آلوورا , میوه های استوایی", price: "۶۵"},
            { url: "/images/food/pineapple.png", name: "پاین اپل", ingridient:  "بلوبری , سیب , میوه های استوایی", price: "۶۵"},
            { url: "/images/food/queen.png", name: "کویین", ingridient:  "تمر هندی , انار , لیمو", price: "۸۳"},
            { url: "/images/food/king.png", name: "کینگ", ingridient:  "هلو , آناناس , پرتقال ", price: "۸۵"},
            { url: "/images/food/mix.png", name: "گری", ingridient:  "میکس مرکبات , بلوبری , لیمو", price: "۷۷"},
            { url: "/images/food/yelo.png", name: "یلو پشن", ingridient:  "پشن فروت, لیمو, آناناس", price: "۸۵"},


          ];
          const cafe_sonati_bar = [
            { url: "/images/food/foodOne.png", name: "", ingridient:  "", price: ""},
          ];
          const cafe_ice_cafe_bar = [
            { url: "/images/food/foodOne.png", name: "", ingridient:  "", price: ""},
          ];
          const cafe_coffee = [
            { url: "/images/food/foodOne.png", name: "", ingridient:  "", price: ""},
          ];
          const cafe_tea = [
            { url: "/images/food/foodOne.png", name: "", ingridient:  "", price: ""},
          ];
          const cafe_hot_drink = [
            { url: "/images/food/foodOne.png", name: "", ingridient:  "", price: ""},
          ];                      
          const cafe_smoothie = [
            { url: "/images/food/foodOne.png", name: "", ingridient:  "", price: ""},
          ];
          const cafe_shake = [
            { url: "/images/food/foodOne.png", name: "", ingridient:  "", price: ""},
          ];

          const data = cafe_modern_panch.concat(cafe_sonati_bar, cafe_ice_cafe_bar, cafe_coffee, cafe_tea, cafe_hot_drink, cafe_smoothie, cafe_shake)

          

const [modernPanch, setModernPanch] = useState(true)
const [sonatiBar, setSonatiBar] = useState(false)
const [iceCafeBar, setIceCafeBar] = useState(false)
const [coffee, setCoffee] = useState(false)
const [tea, setTea] = useState(false)
const [hotDrink, setHotDrink] = useState(false)
const [smoothie, setSmoothie] = useState(false)
const [shake, setShake] = useState(false)

const [search, setSearch] = useState("");
const [searchedFood, setSearchFood] = useState();

useEffect(() => {
  if (search) setSearchFood(data && data.filter((item) => item.name.includes(search)));
}, [search]);



    return (
        <>
<Head>
        <title>منو کافه |  رستوران اونیو</title>
      </Head>

<div className="max-w-[640px] ml-auto mr-auto z-5"  >
                <div className='flex pt-[30px] pr-[30px] pl-[27px] gap-3 items-center'>
                    <p className={`${search && "hidden"} font-[400] text-lg text-white whitespace-nowrap`} ><Link href="/">→ بازگشت </Link></p>
                    <div className=' w-full'>
                      <div className="block relative">
                        {search && <span  className='text-white opacity-50 absolute left-[10px] top-[9px]  z-20 text-xl cursor-pointer' onClick={() => setSearch("")}>╳</span>}
                        <input className="w-full  text-lg font-[400]  h-[40px] text-white outline-none bg-lightGrey rounded-lg indent-2 " placeholder="جستجو ..." value={search} onChange={(event) => setSearch(event.target.value)}></input>
                      </div>

                      {search && (
                        <div className="z-20 mt-[5px] max-w-[570px]  ml-[10px] mr-[10px]">
                          {searchedFood &&
                            searchedFood.map((item, index) => (
                              <div key={index} className="flex text-white backdrop-blur drop-shadow-lg items-center rounded-lg mb-[2px] pt-1 pb-1">
                                <Image  width={40} height={40} src={item.url} alt="" />
                                <p className=" pr-[10px]  w-[60%]">{item.name} <span className="absolute font-[300] left-0">{item.price} ت</span></p>
                                
                              </div>
                            ))}
                        </div>
                      )}
                    </div>
                  </div>





                  <div className={`${search && "hidden"} flex text-white text-lg  ml-3 mr-3 mt-3 p-3 bg-darkGrey brightness-150 rounded-full whitespace-nowrap gap-5 overflow-scroll scroll-auto `} >
                <p className={`cursor-pointer mr-[20px]   ${!modernPanch ? "opacity-60 " : "underline underline-offset-[20px] font-[600]"}`} onClick={() => setModernPanch(true, setSonatiBar(false), setIceCafeBar(false), setCoffee(false), setTea(false), setHotDrink(false), setSmoothie(false), setShake(false))}>مدرن </p> 
                <p className={`cursor-pointer    ${!sonatiBar ? "opacity-60 " : "underline underline-offset-[20px] font-[600]"}`} onClick={() => setSonatiBar(true, setModernPanch(false), setIceCafeBar(false), setCoffee(false), setTea(false), setHotDrink(false), setSmoothie(false), setShake(false))}>سنتی </p> 
                <p className={`cursor-pointer    ${!iceCafeBar ? "opacity-60 " : "underline underline-offset-[20px] font-[600]"}`} onClick={() => setIceCafeBar(true, setModernPanch(false), setSonatiBar(false), setCoffee(false), setTea(false), setHotDrink(false), setSmoothie(false), setShake(false))}>آیس‌کافه</p> 
                <p className={`cursor-pointer    ${!coffee ? "opacity-60 " : "underline underline-offset-[20px] font-[600]"}`} onClick={() => setCoffee(true, setModernPanch(false), setSonatiBar(false), setIceCafeBar(false), setTea(false), setHotDrink(false), setSmoothie(false), setShake(false))}>قهوه</p> 
                <p className={`cursor-pointer    ${!tea ? "opacity-60 " : "underline underline-offset-[20px] font-[600]"}`} onClick={() => setTea(true, setModernPanch(false), setSonatiBar(false), setIceCafeBar(false), setCoffee(false), setHotDrink(false), setSmoothie(false), setShake(false))}>دمنوش</p> 
                <p className={`cursor-pointer    ${!hotDrink ? "opacity-60 " : "underline underline-offset-[20px] font-[600]"}`} onClick={() => setHotDrink(true, setModernPanch(false), setSonatiBar(false), setIceCafeBar(false), setCoffee(false), setTea(false), setSmoothie(false), setShake(false))}>نوشیدنی‌ گرم</p> 
                <p className={`cursor-pointer    ${!smoothie ? "opacity-60 " : "underline underline-offset-[20px] font-[600]"}`} onClick={() => setSmoothie(true, setModernPanch(false), setSonatiBar(false), setIceCafeBar(false), setCoffee(false), setTea(false), setHotDrink(false), setShake(false))}>اسموتی</p> 
                <p className={`cursor-pointer    ${!shake ? "opacity-60 " : "underline underline-offset-[20px] font-[600]"}`} onClick={() => setShake(true, setModernPanch(false), setSonatiBar(false), setIceCafeBar(false), setCoffee(false), setTea(false), setHotDrink(false), setSmoothie(false))}>شیک</p> 

                
                </div>

  </div>


  <div className={`${search && "hidden"}`}>

  {modernPanch && <FoodWrapper food={cafe_modern_panch}/>}

  {modernPanch && 

<div className='flex items-center text-center justify-center cursor-pointer  gap-3'>
<p className={`p-3 w-[100px] text-center rounded-full mb-[40px] mt-[20px] text-white brightness-150 bg-darkGrey     ${!sonatiBar ? "opacity-60 " : "underline underline-offset-[20px] font-[600]"}`} onClick={() => setSonatiBar(true, setModernPanch(false), setIceCafeBar(false), setCoffee(false), setTea(false), setHotDrink(false), setSmoothie(false), setShake(false))}>بعدی</p> 

    </div>
  
  }

  {sonatiBar && <FoodWrapper food={cafe_sonati_bar}/>}


  {sonatiBar && 
  
  <div className='flex items-center text-center justify-center cursor-pointer  gap-3'>
                <p className={`p-3 w-[100px] text-center rounded-full mb-[40px] mt-[20px] text-white brightness-150 bg-darkGrey    ${!modernPanch ? "opacity-60 " : "underline underline-offset-[20px] font-[600]"}`} onClick={() => setModernPanch(true, setSonatiBar(false), setIceCafeBar(false), setCoffee(false), setTea(false), setHotDrink(false), setSmoothie(false), setShake(false))}>قبلی </p> 
                <p className={`p-3 w-[100px] text-center rounded-full mb-[40px] mt-[20px] text-white brightness-150 bg-darkGrey     ${!iceCafeBar ? "opacity-60 " : "underline underline-offset-[20px] font-[600]"}`} onClick={() => setIceCafeBar(true, setModernPanch(false), setSonatiBar(false), setCoffee(false), setTea(false), setHotDrink(false), setSmoothie(false), setShake(false))}>بعدی</p> 
    </div>
  }

  {iceCafeBar && <FoodWrapper food={cafe_ice_cafe_bar}/>}

{iceCafeBar && 

<div className='flex items-center text-center justify-center cursor-pointer  gap-3'>
<p className={`p-3 w-[100px] text-center rounded-full mb-[40px] mt-[20px] text-white brightness-150 bg-darkGrey     ${!sonatiBar ? "opacity-60 " : "underline underline-offset-[20px] font-[600]"}`} onClick={() => setSonatiBar(true, setModernPanch(false), setIceCafeBar(false), setCoffee(false), setTea(false), setHotDrink(false), setSmoothie(false), setShake(false))}>قبلی </p> 
                <p className={`p-3 w-[100px] text-center rounded-full mb-[40px] mt-[20px] text-white brightness-150 bg-darkGrey     ${!coffee ? "opacity-60 " : "underline underline-offset-[20px] font-[600]"}`} onClick={() => setCoffee(true, setModernPanch(false), setSonatiBar(false), setIceCafeBar(false), setTea(false), setHotDrink(false), setSmoothie(false), setShake(false))}>بعدی</p> 
</div>

}


  {coffee && <FoodWrapper food={cafe_coffee}/>}


  {coffee && 
  
  <div className='flex items-center text-center justify-center cursor-pointer  gap-3'>
                <p className={`p-3 w-[100px] text-center rounded-full mb-[40px] mt-[20px] text-white brightness-150 bg-darkGrey     ${!iceCafeBar ? "opacity-60 " : "underline underline-offset-[20px] font-[600]"}`} onClick={() => setIceCafeBar(true, setModernPanch(false), setSonatiBar(false), setCoffee(false), setTea(false), setHotDrink(false), setSmoothie(false), setShake(false))}>قبلی</p> 
                <p className={`p-3 w-[100px] text-center rounded-full mb-[40px] mt-[20px] text-white brightness-150 bg-darkGrey     ${!tea ? "opacity-60 " : "underline underline-offset-[20px] font-[600]"}`} onClick={() => setTea(true, setModernPanch(false), setSonatiBar(false), setIceCafeBar(false), setCoffee(false), setHotDrink(false), setSmoothie(false), setShake(false))}>بعدی</p> 
    </div>
  }

  {tea && <FoodWrapper food={cafe_tea}/>}


  {tea && 
  
  <div className='flex items-center text-center justify-center cursor-pointer  gap-3'>
                <p className={`p-3 w-[100px] text-center rounded-full mb-[40px] mt-[20px] text-white brightness-150 bg-darkGrey     ${!coffee ? "opacity-60 " : "underline underline-offset-[20px] font-[600]"}`} onClick={() => setCoffee(true, setModernPanch(false), setSonatiBar(false), setIceCafeBar(false), setTea(false), setHotDrink(false), setSmoothie(false), setShake(false))}>قبلی</p> 
                <p className={`p-3 w-[100px] text-center rounded-full mb-[40px] mt-[20px] text-white brightness-150 bg-darkGrey     ${!hotDrink ? "opacity-60 " : "underline underline-offset-[20px] font-[600]"}`} onClick={() => setHotDrink(true, setModernPanch(false), setSonatiBar(false), setIceCafeBar(false), setCoffee(false), setTea(false), setSmoothie(false), setShake(false))}> بعدی</p> 
    </div>
  }


  {hotDrink && <FoodWrapper food={cafe_hot_drink}/>}


  {hotDrink && 
  
  <div className='flex items-center text-center justify-center cursor-pointer  gap-3'>
                <p className={`p-3 w-[100px] text-center rounded-full mb-[40px] mt-[20px] text-white brightness-150 bg-darkGrey     ${!tea ? "opacity-60 " : "underline underline-offset-[20px] font-[600]"}`} onClick={() => setTea(true, setModernPanch(false), setSonatiBar(false), setIceCafeBar(false), setCoffee(false), setHotDrink(false), setSmoothie(false), setShake(false))}>قبلی</p> 
                <p className={`p-3 w-[100px] text-center rounded-full mb-[40px] mt-[20px] text-white brightness-150 bg-darkGrey     ${!smoothie ? "opacity-60 " : "underline underline-offset-[20px] font-[600]"}`} onClick={() => setSmoothie(true, setModernPanch(false), setSonatiBar(false), setIceCafeBar(false), setCoffee(false), setTea(false), setHotDrink(false), setShake(false))}>بعدی</p> 
    </div>
  }


  {smoothie && <FoodWrapper food={cafe_smoothie}/>}

  {smoothie && 
  
  <div className='flex items-center text-center justify-center cursor-pointer  gap-3'>
                <p className={`p-3 w-[100px] text-center rounded-full mb-[40px] mt-[20px] text-white brightness-150 bg-darkGrey     ${!hotDrink ? "opacity-60 " : "underline underline-offset-[20px] font-[600]"}`} onClick={() => setHotDrink(true, setModernPanch(false), setSonatiBar(false), setIceCafeBar(false), setCoffee(false), setTea(false), setSmoothie(false), setShake(false))}> قبلی</p> 
                <p className={`p-3 w-[100px] text-center rounded-full mb-[40px] mt-[20px] text-white brightness-150 bg-darkGrey     ${!shake ? "opacity-60 " : "underline underline-offset-[20px] font-[600]"}`} onClick={() => setShake(true, setModernPanch(false), setSonatiBar(false), setIceCafeBar(false), setCoffee(false), setTea(false), setHotDrink(false), setSmoothie(false))}>بعدی</p> 
    </div>
  }



  {shake && <FoodWrapper food={cafe_shake}/>}

  {shake && 
  
  <div className='flex items-center text-center justify-center cursor-pointer  gap-3'>

<p className={`p-3 w-[100px] text-center rounded-full mb-[40px] mt-[20px] text-white brightness-150 bg-darkGrey     ${!smoothie ? "opacity-60 " : "underline underline-offset-[20px] font-[600]"}`} onClick={() => setSmoothie(true, setModernPanch(false), setSonatiBar(false), setIceCafeBar(false), setCoffee(false), setTea(false), setHotDrink(false), setShake(false))}>قبلی</p> 

    </div>
  }

</div>


            
        </>
    );
};

export default cafe;