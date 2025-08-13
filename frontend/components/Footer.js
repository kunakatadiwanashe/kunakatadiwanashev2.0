import React from 'react'
import Link from "next/link";
import { FaFacebook, FaGithub, FaWhatsapp } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const Footer = () => {
  return (
    <div className='relative bg-gradient-to-r from-[#1c233f] to-[#2a3867] flex flex-col md:flex-row items-center md:items-start p-6 md:p-12'>

      {/* First Section */}
      <div className="frst md:w-2/5 flex flex-col justify-center items-center md:items-start mb-8 md:mb-0">
        <p className='text-[12px] md:text-[14px] text-white text-center md:text-left mb-4 md:mb-6 max-w-sm'>
          A Frontend focused Web Developer building the Frontend of
          Websites and Web Applications that leads 
          to the success of the overall product
        </p>
        <button className='text-[13px] md:text-[14px] text-white mb-6 md:mb-8 font-bold border border-white px-4 py-2 rounded hover:bg-white hover:text-[#1c233f] transition'>
          -- VIEW RESUME
        </button>
        <img 
          src="https://res.cloudinary.com/dyikkz1ur/image/upload/v1741686176/kun/Portfolio/icons/tadiwa_ahy0a9.png" 
          alt="Portrait" 
          className='w-36 md:w-48 rounded-full'
        />
      </div>

      {/* Second Section */}
      <div className="sec md:w-1/3 flex flex-col items-center md:items-start mb-8 md:mb-0">
        <h3 className='text-white text-[12px] md:text-[14px] font-bold mb-3'>Socials</h3>
        <div className='flex justify-between w-48 md:w-40 mb-4'>
          <Link href="#" className='text-white'><FaFacebook size={30} /></Link>
          <Link href="#" className='text-white'><FaGithub size={30} /></Link>
          <Link href="#" className='text-white'><TiSocialLinkedinCircular size={30} /></Link>
          <Link href="#" className='text-white'><FaWhatsapp size={30} /></Link>
        </div>
        <h4 className='text-white text-sm md:text-base'>+263 779 968 190</h4>
        <h4 className='text-white text-sm md:text-base'>+263 718 998 415</h4>
      </div>

      {/* Third Section */}
      <div className="thrd md:w-2/5 relative flex justify-center md:justify-end">
        <img 
          src="https://res.cloudinary.com/dyikkz1ur/image/upload/v1741686419/kun/Portfolio/icons/fimg_nl0vsl.png" 
          alt="Background Image 1" 
          className="w-60 md:w-[800px] h-auto md:absolute md:left-[-150px] md:top-[-50px] mb-4"
        />
        <img 
          src="https://res.cloudinary.com/dyikkz1ur/image/upload/v1741785476/kun/Portfolio/icons/wg_tj7taa.png" 
          alt="Background Image 2" 
          className="w-60 md:w-[800px] h-auto md:absolute md:bottom-2 md:right-0"
        />
      </div>

    </div>
  )
}

export default Footer
