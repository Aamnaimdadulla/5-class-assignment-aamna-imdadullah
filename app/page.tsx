import React from "react";
import Header from "./components/header";
import Image from "next/image";

function Home() {
  return (
    <div className="h-screen">
      <Header />
      {/* header  section  */}
       <header className="bg-[#A29875] h-auto w-full text-[#FFFFFF] flex flex-col md:flex-row justify-between items-center">
         <h1 className="text-white font-Rye font-bold text-3xl md:text-5xl lg:text-[60px] pt-2 md:pt-0">
          MANZZARI
        </h1>
     </header>
      <div className="flex h-[80%]">
         <div className="w-1/2 flex flex-col justify-center items-start m-12">
          <h1 className="text-[44px] font-bold w-439px h-94px t-20px ">IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1> 
           


           <p className="text-[32px] w-[571px]"> 
          
          An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
          </p>
          {/* <button className="width-fixed-[288px]  height-[58px] left[176px] gap[10px]s ">Explore Now</button> */}
          <button className=" bg-[#A29875] w-[177px] h-[38px] left-[176px] gap-[10px] bg-A29875 p-10px gap-10px rounded-[10px] font-bold text-[#FFFFFF];
          ">Explore Now</button>

        </div>
        <div className="w-1/2 flex justify-center items-center">
           <Image
            src={"/images/figma-pic.png"}
            alt="hero image"
            width={362}
            height={347}
            style={{  top: 198,  }}
            
          /> 
          

        </div>
      </div>
   </div>
  );
}

export default Home;