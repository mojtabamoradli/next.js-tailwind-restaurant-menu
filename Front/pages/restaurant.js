import Image from 'next/image';
import React from 'react';
import { useEffect, useState } from "react";
import FoodWrapper from '../components/FoodWrapper';
import Link from 'next/link';
import Head from "next/head";

const restaurant = () => {

        const restaurant_pish_ghaza = [
            { url: "/images/food/mirza.png", name: "میرزا قاسمی", ingridient: "", price: "۱۰۵" },
            { url: "/images/food/foodOne.png", name: "بورک", ingridient: "خمیر یوفکا، بیکن گوشت و مرغ، پنیر، سس", price: "۹۹" },
            { url: "/images/food/foodOne.png", name: "کالاماری سوخاری", ingridient: "فیله ماهی مرکب،آرد سوخاری، سس تاتار", price: "۲۳۲" },
            { url: "/images/food/foodOne.png", name: "فوجیتو", ingridient: "سینه مرغ، قارچ،گردو، پیاز کاراملایز، رب انار", price: "۱۲۷" },
            { url: "/images/food/hamas.png", name: "حمص", ingridient: "نخود، ارده، سیر", price: "۱۰۷" },
            { url: "/images/food/hamasplus.png", name: "حمص بالحم", ingridient: "نخود، ارده، سیر، فیله گوساله", price: "۱۴۸" },
          { url: "/images/food/fries.png", name: "سیب زمینی با ادویه مخصوص", ingridient: "", price: "۷۲" },
          { url: "/images/food/friesplus.png", name: "سیب زمینی با سس قارچ و بیکن", ingridient: "", price: "۹۸" },
          { url: "/images/food/foodOne.png", name: "نان سیر", ingridient: "خمیر پیتزا، سس سیر، میکس پنیر، هالوپینو انتخابی", price: "۱۲۰"},
          { url: "/images/food/borani.png", name: "بورانی بادمجان", ingridient: "", price: "۵۲"},
          { url: "/images/food/mastokhiar.png", name: "ماست و خیار", ingridient: "", price: "۴۸"},
          { url: "/images/food/soup.png", name: "سوپ قارچ و مرغ", ingridient: "کره،قارچ، سینه مرغ، خامه، شیر، نان مخصوص", price: "۷۵"},

        ];
        const restaurant_salad = [
            { url: "/images/food/foodOne.png", name: "", ingridient:  "", price: 0},
          ];
          const restaurant_burger = [
            { url: "/images/food/foodOne.png", name: "", ingridient:  "", price: 0},
          ];
          const restaurant_pasta = [
            { url: "/images/food/foodOne.png", name: "", ingridient:  "", price: 0},
          ];
          const restaurant_stake = [
            { url: "/images/food/foodOne.png", name: "", ingridient:  "", price: 0},
          ];
          const restaurant_rejimi = [
            { url: "/images/food/foodOne.png", name: "", ingridient:  "", price: 0},
          ];
          const restaurant_daryaee = [
            { url: "/images/food/foodOne.png", name: "", ingridient:  "", price: 0},
          ];
          const restaurant_aayoni = [
            { url: "/images/food/foodOne.png", name: "", ingridient:  "", price: 0},
          ];
          const restaurant_irani = [
            { url: "/images/food/foodOne.png", name: "", ingridient:  "", price: 0},
          ];                      
          const restaurant_melal = [
            { url: "/images/food/foodOne.png", name: "", ingridient:  "", price: 0},
          ];
          const restaurant_kabab = [
            { url: "/images/food/foodOne.png", name: "", ingridient:  "", price: 0},
          ];

          const data = restaurant_pish_ghaza.concat(restaurant_salad, restaurant_burger, restaurant_pasta, restaurant_stake, restaurant_rejimi, restaurant_daryaee, restaurant_aayoni, restaurant_irani, restaurant_melal, restaurant_kabab)

const [pishGhaza, setPishGhaza] = useState(true)
const [salad, setSalad] = useState(false)
const [burger, setBurger] = useState(false)
const [pasta, setPasta] = useState(false)
const [stake, setStake] = useState(false)
const [rejimi, setRejimi] = useState(false)
const [daryaee, setDaryaee] = useState(false)
const [aayoni, setAayoni] = useState(false)
const [irani, setIrani] = useState(false)
const [melal, setMelal] = useState(false)
const [kabab, setKabab] = useState(false)

const [search, setSearch] = useState("");
const [searchedFood, setSearchFood] = useState();

useEffect(() => {
  if (search) setSearchFood(data && data.filter((item) => item.name.includes(search)));
}, [search]);





    return (
        <>
<Head>
        <title>منو |  رستوران اونیو</title>
      </Head>


            <div className="max-w-[640px] ml-auto mr-auto z-5"  >
                <div className='flex pt-[30px] pr-[30px] pl-[27px] gap-3 items-center'>
                    <p className={`${search && "hidden"} font-[400] text-lg text-white whitespace-nowrap`} ><Link href="/">→ بازگشت </Link></p>
                    <div className=' w-full'>
                      <div className="block relative">
                        {search && <span  className='text-white opacity-50 absolute left-[10px] top-[9px]  z-20 text-xl cursor-pointer' onClick={() => setSearch("")}>╳</span>}
                        <input className="w-full  text-lg font-[400] text-white h-[40px]  outline-none bg-lightGrey rounded-lg indent-2 " placeholder="جستجو ..." value={search} onChange={(event) => setSearch(event.target.value)}></input>
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
                <p className={`cursor-pointer mr-[20px]  ${!pishGhaza ? "opacity-60" : "underline underline-offset-[20px] font-[600] "}`} onClick={() => setPishGhaza(true, setSalad(false), setBurger(false), setPasta(false), setStake(false), setRejimi(false), setDaryaee(false), setAayoni(false), setIrani(false), setMelal(false), setKabab(false))}>پیش‌غذا</p> 
                <p className={`cursor-pointer    ${!salad ? "opacity-60 " : "underline underline-offset-[20px] font-[600]"}`} onClick={() => setSalad(true, setPishGhaza(false), setBurger(false), setPasta(false), setStake(false), setRejimi(false), setDaryaee(false), setAayoni(false), setIrani(false), setMelal(false), setKabab(false))}>سالاد</p> 
                <p className={`cursor-pointer    ${!burger ? "opacity-60 " : "underline underline-offset-[20px] font-[600]"}`} onClick={() => setBurger(true, setPishGhaza(false), setSalad(false), setPasta(false), setStake(false), setRejimi(false), setDaryaee(false), setAayoni(false), setIrani(false), setMelal(false), setKabab(false))}>برگر</p> 
                <p className={`cursor-pointer    ${!pasta ? "opacity-60 " : "underline underline-offset-[20px] font-[600]"}`} onClick={() => setPasta(true, setPishGhaza(false), setSalad(false), setBurger(false), setStake(false), setRejimi(false), setDaryaee(false), setAayoni(false), setIrani(false), setMelal(false), setKabab(false))}>پاستا</p> 
                <p className={`cursor-pointer    ${!stake ? "opacity-60 " : "underline underline-offset-[20px] font-[600]"}`} onClick={() => setStake(true, setPishGhaza(false), setSalad(false), setBurger(false), setPasta(false), setRejimi(false), setDaryaee(false), setAayoni(false), setIrani(false), setMelal(false), setKabab(false))}>استیک</p> 
                <p className={`cursor-pointer    ${!rejimi ? "opacity-60 " : "underline underline-offset-[20px] font-[600]"}`} onClick={() => setRejimi(true, setPishGhaza(false), setSalad(false), setBurger(false), setPasta(false), setStake(false), setDaryaee(false), setAayoni(false), setIrani(false), setMelal(false), setKabab(false))}>رژیمی</p> 
                <p className={`cursor-pointer    ${!daryaee ? "opacity-60 " : "underline underline-offset-[20px] font-[600]"}`} onClick={() => setDaryaee(true, setPishGhaza(false), setSalad(false), setBurger(false), setPasta(false), setStake(false), setRejimi(false), setAayoni(false), setIrani(false), setMelal(false), setKabab(false))}>دریایی</p> 
                <p className={`cursor-pointer    ${!aayoni ? "opacity-60 " : "underline underline-offset-[20px] font-[600]"}`} onClick={() => setAayoni(true, setPishGhaza(false), setSalad(false), setBurger(false), setPasta(false), setStake(false), setRejimi(false), setDaryaee(false), setIrani(false), setMelal(false), setKabab(false))}>اعیونی</p> 
                <p className={`cursor-pointer    ${!irani ? "opacity-60 " : "underline underline-offset-[20px] font-[600]"}`} onClick={() => setIrani(true, setPishGhaza(false), setSalad(false), setBurger(false), setPasta(false), setStake(false), setRejimi(false), setDaryaee(false), setAayoni(false), setMelal(false), setKabab(false))}>ایرانی</p> 
                <p className={`cursor-pointer    ${!melal ? "opacity-60 " : "underline underline-offset-[20px] font-[600]"}`} onClick={() => setMelal(true, setPishGhaza(false), setSalad(false), setBurger(false), setPasta(false), setStake(false), setRejimi(false), setDaryaee(false), setIrani(false), setAayoni(false), setKabab(false))}>ملل</p> 
                <p className={`cursor-pointer    ${!kabab ? "opacity-60 " : "underline underline-offset-[20px] font-[600]"}`} onClick={() => setKabab(true, setPishGhaza(false), setSalad(false), setBurger(false), setPasta(false), setStake(false), setRejimi(false), setAayoni(false), setIrani(false), setMelal(false))}>کباب</p>
                </div>

  </div>


<div className={`${search && "hidden"}`}>

  {pishGhaza && <FoodWrapper food={restaurant_pish_ghaza}/>}

  {pishGhaza && 
  <div className='flex items-center text-center justify-center cursor-pointer  gap-3'>
  <p className={` p-3 w-[100px] text-center rounded-full mb-[40px] mt-[20px] text-white brightness-150 bg-darkGrey  ${!salad ? "opacity-60 " : "underline underline-offset-[20px]"}`} onClick={() => setSalad(true, setPishGhaza(false), setBurger(false), setPasta(false), setStake(false), setRejimi(false), setDaryaee(false), setAayoni(false), setIrani(false), setMelal(false), setKabab(false))}>بعدی </p>
  </div>
}


  {salad && <FoodWrapper food={restaurant_salad}/>}

{ salad &&
  <div className='flex items-center text-center justify-center cursor-pointer gap-3'>
  <p className={` p-3 w-[100px] text-center rounded-full mb-[40px] mt-[20px] text-white brightness-150 bg-darkGrey    ${!pishGhaza ? "opacity-60 " : "underline underline-offset-[20px]"}`} onClick={() => setPishGhaza(true, setSalad(false), setBurger(false), setPasta(false), setStake(false), setRejimi(false), setDaryaee(false), setAayoni(false), setIrani(false), setMelal(false), setKabab(false))}>قبلی</p> 
  <p className={` p-3 w-[100px] text-center rounded-full mb-[40px] mt-[20px] text-white brightness-150 bg-darkGrey     ${!burger ? "opacity-60 " : "underline underline-offset-[20px]"}`} onClick={() => setBurger(true, setPishGhaza(false), setSalad(false), setPasta(false), setStake(false), setRejimi(false), setDaryaee(false), setAayoni(false), setIrani(false), setMelal(false), setKabab(false))}>بعدی</p> 
  </div>
}


  {burger && <FoodWrapper food={restaurant_burger}/>}

{ burger &&

  <div className='flex items-center text-center justify-center cursor-pointer gap-3'>
                <p className={`p-3 w-[100px] text-center rounded-full mb-[40px] mt-[20px] text-white brightness-150 bg-darkGrey    ${!salad ? "opacity-60 " : "underline underline-offset-[20px]"}`} onClick={() => setSalad(true, setPishGhaza(false), setBurger(false), setPasta(false), setStake(false), setRejimi(false), setDaryaee(false), setAayoni(false), setIrani(false), setMelal(false), setKabab(false))}>قبلی</p> 
                <p className={`p-3 w-[100px] text-center rounded-full mb-[40px] mt-[20px] text-white brightness-150 bg-darkGrey    ${!pasta ? "opacity-60 " : "underline underline-offset-[20px]"}`} onClick={() => setPasta(true, setPishGhaza(false), setSalad(false), setBurger(false), setStake(false), setRejimi(false), setDaryaee(false), setAayoni(false), setIrani(false), setMelal(false), setKabab(false))}>بعدی</p> 
  </div>
}

  {pasta && <FoodWrapper food={restaurant_pasta}/>}
  {pasta && 
  <div className='flex items-center text-center justify-center cursor-pointer gap-3'>
                <p className={`p-3 w-[100px] text-center rounded-full mb-[40px] mt-[20px] text-white brightness-150 bg-darkGrey    ${!burger ? "opacity-60 " : "underline underline-offset-[20px]"}`} onClick={() => setBurger(true, setPishGhaza(false), setSalad(false), setPasta(false), setStake(false), setRejimi(false), setDaryaee(false), setAayoni(false), setIrani(false), setMelal(false), setKabab(false))}>قبلی</p> 
                <p className={`p-3 w-[100px] text-center rounded-full mb-[40px] mt-[20px] text-white brightness-150 bg-darkGrey    ${!stake ? "opacity-60 " : "underline underline-offset-[20px]"}`} onClick={() => setStake(true, setPishGhaza(false), setSalad(false), setBurger(false), setPasta(false), setRejimi(false), setDaryaee(false), setAayoni(false), setIrani(false), setMelal(false), setKabab(false))}>بعدی</p> 
</div>
}
  {stake && <FoodWrapper food={restaurant_stake}/>}
  {stake && 
    <div className='flex items-center text-center justify-center cursor-pointer gap-3'>
                <p className={`p-3 w-[100px] text-center rounded-full mb-[40px] mt-[20px] text-white brightness-150 bg-darkGrey    ${!pasta ? "opacity-60 " : "underline underline-offset-[20px]"}`} onClick={() => setPasta(true, setPishGhaza(false), setSalad(false), setBurger(false), setStake(false), setRejimi(false), setDaryaee(false), setAayoni(false), setIrani(false), setMelal(false), setKabab(false))}>قبلی</p> 
                <p className={`p-3 w-[100px] text-center rounded-full mb-[40px] mt-[20px] text-white brightness-150 bg-darkGrey    ${!rejimi ? "opacity-60 " : "underline underline-offset-[20px]"}`} onClick={() => setRejimi(true, setPishGhaza(false), setSalad(false), setBurger(false), setPasta(false), setStake(false), setDaryaee(false), setAayoni(false), setIrani(false), setMelal(false), setKabab(false))}>بعدی</p> 
    </div>
    }

  {rejimi && <FoodWrapper food={restaurant_rejimi}/>}
  {rejimi && 
  <div className='flex items-center text-center justify-center cursor-pointer gap-3'>
                <p className={`p-3 w-[100px] text-center rounded-full mb-[40px] mt-[20px] text-white brightness-150 bg-darkGrey    ${!stake ? "opacity-60 " : "underline underline-offset-[20px]"}`} onClick={() => setStake(true, setPishGhaza(false), setSalad(false), setBurger(false), setPasta(false), setRejimi(false), setDaryaee(false), setAayoni(false), setIrani(false), setMelal(false), setKabab(false))}>قبلی</p> 
                <p className={`p-3 w-[100px] text-center rounded-full mb-[40px] mt-[20px] text-white brightness-150 bg-darkGrey    ${!daryaee ? "opacity-60 " : "underline underline-offset-[20px]"}`} onClick={() => setDaryaee(true, setPishGhaza(false), setSalad(false), setBurger(false), setPasta(false), setStake(false), setRejimi(false), setAayoni(false), setIrani(false), setMelal(false), setKabab(false))}>بعدی</p> 
</div>
}
  {daryaee && <FoodWrapper food={restaurant_daryaee}/>}
  {daryaee && 
  <div className='flex items-center text-center justify-center cursor-pointer gap-3'>
                <p className={`p-3 w-[100px] text-center rounded-full mb-[40px] mt-[20px] text-white brightness-150 bg-darkGrey    ${!rejimi ? "opacity-60 " : "underline underline-offset-[20px]"}`} onClick={() => setRejimi(true, setPishGhaza(false), setSalad(false), setBurger(false), setPasta(false), setStake(false), setDaryaee(false), setAayoni(false), setIrani(false), setMelal(false), setKabab(false))}>قبلی</p> 
                <p className={`p-3 w-[100px] text-center rounded-full mb-[40px] mt-[20px] text-white brightness-150 bg-darkGrey    ${!aayoni ? "opacity-60 " : "underline underline-offset-[20px]"}`} onClick={() => setAayoni(true, setPishGhaza(false), setSalad(false), setBurger(false), setPasta(false), setStake(false), setRejimi(false), setDaryaee(false), setIrani(false), setMelal(false), setKabab(false))}>بعدی</p> 
  </div>
}
  {aayoni && <FoodWrapper food={restaurant_aayoni}/>}
  {aayoni && 
  <div className='flex items-center text-center justify-center cursor-pointer gap-3'>
                <p className={`p-3 w-[100px] text-center rounded-full mb-[40px] mt-[20px] text-white brightness-150 bg-darkGrey    ${!daryaee ? "opacity-60 " : "underline underline-offset-[20px]"}`} onClick={() => setDaryaee(true, setPishGhaza(false), setSalad(false), setBurger(false), setPasta(false), setStake(false), setRejimi(false), setAayoni(false), setIrani(false), setMelal(false), setKabab(false))}>قبلی</p> 
                <p className={`p-3 w-[100px] text-center rounded-full mb-[40px] mt-[20px] text-white brightness-150 bg-darkGrey    ${!irani ? "opacity-60 " : "underline underline-offset-[20px]"}`} onClick={() => setIrani(true, setPishGhaza(false), setSalad(false), setBurger(false), setPasta(false), setStake(false), setRejimi(false), setDaryaee(false), setAayoni(false), setMelal(false), setKabab(false))}>بعدی</p> 
  </div>
  }

  {irani && <FoodWrapper food={restaurant_irani}/>}
  {irani && 
  <div className='flex items-center text-center justify-center cursor-pointer gap-3'>
                <p className={`p-3 w-[100px] text-center rounded-full mb-[40px] mt-[20px] text-white brightness-150 bg-darkGrey    ${!aayoni ? "opacity-60 " : "underline underline-offset-[20px]"}`} onClick={() => setAayoni(true, setPishGhaza(false), setSalad(false), setBurger(false), setPasta(false), setStake(false), setRejimi(false), setDaryaee(false), setIrani(false), setMelal(false), setKabab(false))}>قبلی</p> 
                <p className={`p-3 w-[100px] text-center rounded-full mb-[40px] mt-[20px] text-white brightness-150 bg-darkGrey    ${!melal ? "opacity-60 " : "underline underline-offset-[20px]"}`} onClick={() => setMelal(true, setPishGhaza(false), setSalad(false), setBurger(false), setPasta(false), setStake(false), setRejimi(false), setDaryaee(false), setIrani(false), setAayoni(false), setKabab(false))}>بعدی</p> 
  </div>
}
  {melal && <FoodWrapper food={restaurant_melal}/>}
  {melal && 
    <div className='flex items-center text-center justify-center cursor-pointer gap-3'>
      <p className={`p-3 w-[100px] text-center rounded-full mb-[40px] mt-[20px] text-white brightness-150 bg-darkGrey    ${!irani ? "opacity-60 " : "underline underline-offset-[20px]"}`} onClick={() => setIrani(true, setPishGhaza(false), setSalad(false), setBurger(false), setPasta(false), setStake(false), setRejimi(false), setDaryaee(false), setAayoni(false), setMelal(false), setKabab(false))}>قبلی</p> 
      <p className={`p-3 w-[100px] text-center rounded-full mb-[40px] mt-[20px] text-white brightness-150 bg-darkGrey    ${!kabab ? "opacity-60 " : "underline underline-offset-[20px]"}`} onClick={() => setKabab(true, setPishGhaza(false), setSalad(false), setBurger(false), setPasta(false), setStake(false), setRejimi(false), setAayoni(false), setIrani(false), setMelal(false))}>بعدی</p>
    </div>
  }
  {kabab && <FoodWrapper food={restaurant_kabab}/>}
  {kabab && 
  <div className='flex items-center text-center justify-center cursor-pointer gap-3'>
      <p className={`p-3 w-[100px] text-center rounded-full mb-[40px] mt-[20px] text-white brightness-150 bg-darkGrey    ${!melal ? "opacity-60 " : "underline underline-offset-[20px]"}`} onClick={() => setMelal(true, setPishGhaza(false), setSalad(false), setBurger(false), setPasta(false), setStake(false), setRejimi(false), setDaryaee(false), setIrani(false), setAayoni(false), setKabab(false))}>قبلی</p> 

  </div>
}
</div>


            
        </>
    );
};

export default restaurant;