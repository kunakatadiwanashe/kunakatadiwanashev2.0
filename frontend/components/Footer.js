import React from 'react'
import Image from "next/image";
import Link from "next/link";
import tadiwa from "../public/img/noimage.png";
import footer from "../public/img/noimage.png";

import fimg from "../public/img/noimage.png"


import { FaFacebook } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";



const Footer = () => {
  return (
    <div className='relative bg-gradient-to-r from-[#1c233f] to-[#2a3867] h-[100vh] md:h-[55vh] flex flex-col md:flex-row'>



        <div className="frst md:w-[40%] flex flex-col justify-center md:justify-left pl-5 pr-5 md:pl-[50px] pt-[30px]">

            <p className='text-[12px] text-white text-center md:text-left pb-5 md:pb-6 md:text-[14px] md:w-[80%]'>
            A Frontend focused Web Developer building the Frontend of
             Websites and Web Applications that leads 
             to the success of the overall product
            </p>
            <button className='text-[13px] text-white mb-8 md:mb-16 font-bold'>-- VIEW RESUME</button>

        <img src="https://res.cloudinary.com/dyikkz1ur/image/upload/v1741686176/kun/Portfolio/icons/tadiwa_ahy0a9.png" alt="Portrait "   />

        </div>

        <div className="sec flex text-center md:text-left justify-center flex-col md:pb-11 md:pl-10 md:justify-end h-80 md:h-[100%] md:w-[30%]">
          <h3 className='text-white pb-4 text-[12px] md:text-[14px] font-bold'>socials</h3>
          <div className='flex justify-between pl-[35px] pr-[35px] md:pl-0 md:w-[50%] pb-4 '>

          <Link href="" className='text-white'><FaFacebook size={37} /></Link>
          <Link href="" className='text-white'><FaGithub size={37}  /></Link>
          <Link href="" className='text-white'><TiSocialLinkedinCircular size={37}  /></Link>
          <Link href="" className='text-white'><FaWhatsapp size={37}  /></Link>
          
          
          
          </div>
          <h4 className='text-white'>+263 779 968 190</h4>
          <h4 className='text-white'>+263 718 998 415</h4>
        </div>

        <div className="thrd md:w-[30%] relative flex justify-end">

        {/* <Image
          src={fimg}
          alt="tadiwanshe kunaka"
          className="md:absolute md:left-[-250px] md:top-[-150px]  ml-[40px] md:ml-0 h-[30px] w-[250px] md:h-[280px] md:w-[800px]"
        />
        <Image
          src={fimg}
          alt="tadiwanshe kunaka"
          className="md:absolute md:bottom-2 md-right-0 ml-[40px] md:ml-0 h-[30px] w-[250px] md:h-[280px] md:w-[800px]"
        /> */}

<img src="https://res.cloudinary.com/dyikkz1ur/image/upload/v1741686419/kun/Portfolio/icons/fimg_nl0vsl.png" alt="Portrait " 
  className="md:absolute md:left-[-250px] md:top-[-150px]  ml-[40px] md:ml-0 h-[30px] w-[250px] md:h-[280px] md:w-[800px]"
/>

<img src="https://res.cloudinary.com/dyikkz1ur/image/upload/v1741686419/kun/Portfolio/icons/fimg_nl0vsl.png" alt="Portrait "
 className="md:absolute md:bottom-2 md-right-0 ml-[40px] md:ml-0 h-[30px] w-[250px] md:h-[280px] md:w-[800px]"
/>

        </div>
      
    </div>
  )
}

export default Footer