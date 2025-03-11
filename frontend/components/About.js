import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  return (

    <div className="flex flex-col md:flex-row items-center justify-center p-6 relative bg-[#F2F2F2] h-[90vh]">
    <div className="text-center md:text-left md:w-1/2">
        <p className="mb-4 hed  text-center text-[14px] leading-7 md:text-left md:w-[95%] tracking-wider md:text-[13px] md:pl-[80px]">
            HELLO STRANGER! <span role="img" aria-label="wave">👋</span>, MY NAME IS <span className="text-blue-600">TADIWA</span> AND I AM A FRONT-END DEVELOPER, PASSIONATE ABOUT DIGITAL PRODUCTS THAT HELP PEOPLE EXPERIENCE EVERYDAY LIFE, NOT ENDURE IT.
        </p>
        <button className='w-[100%] text-center md:w-[65%] uppercase font-bold pt-8 md:pl-[60px] hed'>--- read about me</button>
    </div>
    <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center">
        <img src="https://res.cloudinary.com/dyikkz1ur/image/upload/v1741686326/kun/Portfolio/icons/mac_sk6xz3.png" alt="Two laptops floating in the air with one showing a blurred screen and the other showing a keyboard" className="w-full max-w-md"/>
    </div>
</div>

  )
}

export default About
