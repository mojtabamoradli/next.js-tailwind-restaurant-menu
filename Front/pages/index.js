import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";



export default function Home() {
  const slides = [
    { url: "/images/slider/slideOne.jpg" },
    { url: "/images/slider/slideTwo.jpg" },
    { url: "/images/slider/slideThree.jpg" },
  ];

  const [intro, setIntro] = useState(true)
  const [contacts, setContacts] = useState(false)
  const [menu, setMenu] = useState(false)



  const [currentIndex, setCurrentIndex] = useState(0);


    setTimeout(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    }, 10000)
  
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>

<Head>
        <title>رستوران اونیو</title>
      </Head>
    <div className= {` max-w-[640px] ml-auto mr-auto  z-5 w-full ${menu && "opacity-50"}`} onClick={() => setMenu(false)}>


      
      <div className="relative" >


        <div className=" left-0 top-0 w-full mt-3 ">
          <div className="bg-cover w-full h-full bg-center  items-center text-center ">
            <Image className=" block drop-shadow-3xl ml-auto mr-auto w-[200px]" width={200} height={200} alt="" src="/images/logo.png" />
          </div>
        </div>

        <div className="flex   text-white text-lg   mt-3 p-3 ml-3 mr-3 bg-darkGrey brightness-150 rounded-full  gap-5 overflow-scroll scroll-auto">
        <p className={`cursor-pointer  mr-[20px] ${!intro ? "opacity-60 " : "underline underline-offset-[20px] font-[600]"}`} onClick={() => setIntro(true, setContacts(false))}>رستوران</p>
        <p className={`cursor-pointer   ${!contacts ? "opacity-60 " : "underline underline-offset-[20px] font-[600]"}`} onClick={() => setContacts( true, setIntro(false))}>اطلاعات </p>

      </div>


        </div>

{intro && 
<>
        <div className=" pl-3 pr-3  items-center text-center ">
        <Image className="block ml-auto mr-auto  mt-3 rounded-lg max-h-[350px] max-w-[95%]" width={640} height={500} alt="" src={slides[currentIndex].url} />

        </div>

        <div className="flex justify-center mt-[-65px] ">{slides.map((item, index) => (<div key={index}  className={index === currentIndex ? "cursor-pointer m-1 text-white text-5xl duration-300" : "opacity-50 cursor-pointer m-1 text-white text-5xl duration-300"} onClick={() => goToSlide(index)}>_</div>))}
 

      </div>

      <div className="flex-col text-white gap-[20px] mt-[50px]  text-center">

    <p className="text-xl font-[300] ">اونیو، دلیلی برای کنار هم بودن</p>


    </div>
</>

}

      


  



{contacts && 
      <div className="flex-col text-white gap-[20px] mt-[20px] text-center">

        <div className="flex-col">

        <p className="font-[400] mb-[20px]">ساعات کاری: ۲۳:۳۰ - ۱۲:۰۰ </p>
            <div className="flex mb-1 justify-center text-center">
              <span className="flex-col p-4 w-[130px] bg-lightGrey rounded-xl whitespace-nowrap">
                <span><Image className="block ml-auto mr-auto mb-2" width={40} height={40} alt="" src="/images/phone.png" /></span><span>۰۹۱۲۳۴۵۶۷۸۹</span>
              </span>

              <span className="flex-col p-4 mr-1 w-[130px] bg-lightGrey rounded-xl whitespace-nowrap">
                <span><Image className="block ml-auto mr-auto mb-2" width={40} height={40} alt="" src="/images/whatsapp.png" /></span><span>۰۹۱۲۳۴۵۶۷۸۹</span>
              </span>
            </div>


            <div className="flex justify-center">
              <span className="flex-col p-4 w-[130px] bg-lightGrey rounded-xl whitespace-nowrap">
                <span className=""><Image className="block ml-auto mr-auto mb-2" width={40} height={40} alt="" src="/images/instagram.png" /></span><span>averestaurant</span>
              </span>

              <span className="flex-col p-4 mr-1 w-[130px] bg-lightGrey rounded-xl whitespace-nowrap">
                <span><Image className="block ml-auto mr-auto mb-2" width={40} height={40} alt="" src="/images/address.png" /></span><span>مشاهده نقشه</span>
              </span>
            </div>

          <p className="mt-[20px] rounded-3xl whitespace-nowrap">تهران بالاشهر بلوار پایین‌شهر خیابان ۲۱۶</p>



          
          </div>
      </div>

}




      


    

    </div>
    <div className= {`max-w-[640px]  ml-auto mr-auto overflow-hidden z-5 w-full`} >

{!menu &&

  <div className=" bg-darkGrey absolute drop-shadow-3xl max-w-[600px] max-sm:max-w-[90%] text-white h-[80px] justify-center bottom-0 rounded-t-3xl left-0 right-0 ml-auto mr-auto">
    <div className= {` bg-lightGrey block h-[50px] p-3 mt-[15px] mr-[20px] ml-[20px] font-[900] text-center rounded-3xl whitespace-nowrap cursor-pointer`} onClick={() => setMenu(true)}>مشاهده منو</div>
  </div>
}


{ menu &&
<div className="bg-darkGrey absolute drop-shadow-3xl max-w-[640px] max-sm:max-w-[90%] text-white h-[200px]  bottom-0  rounded-t-3xl left-0 right-0 ml-auto mr-auto">


        <div className="flex mb-1 justify-center text-center mt-[40px]">
          <span className="flex-col  w-[130px] drop-shadow-3xl rounded-3xl whitespace-nowrap cursor-pointer">
            <span><Link href="/restaurant"><Image className="block ml-auto mr-auto mb-2" width={100} height={100} alt="" src="/images/restaurant.png" /></Link></span><span><Link href="/restaurant">رستوران</Link></span>
          </span>

          <span className="flex-col  w-[130px] drop-shadow-3xl rounded-3xl whitespace-nowrap cursor-pointer ">
            <span><Link href="/cafe"><Image className="block ml-auto mr-auto mb-2" width={100} height={100} alt="" src="/images/cafe.png" /></Link></span><span><Link href="/cafe">کافه</Link></span>
          </span>
        </div>

        </div>

}


</div>
</>
  );
}
