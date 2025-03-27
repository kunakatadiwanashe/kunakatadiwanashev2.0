import Header from "@/components/Header";
import "@/styles/globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from "@/components/Footer";

import { Menus } from "@/utils/utils";
import MobMenu from "@/components/MobMenu";
import Link from "next/link";




export default function App({ Component, pageProps }) {

  return <>

    <header className="h-[10vh]  bg-[url('../public/img/bg.png')] text-white flex justify-between items-center pl-10 pr-10">
      <nav className="w-full flex justify-between items-center md:pl-8 md:pr-8 ">

        <div className="flex flex-center items-center gap-x-2 z-[999] relative w-[95px] pt-2">
          <Link href="/">
            <img src='https://res.cloudinary.com/dyikkz1ur/image/upload/v1741789709/kun/Portfolio/icons/KunLogoWhite_utpeih.png' alt="" className="w-[100%] h-[100%] object-contain" />
          </Link>

        </div>

        <div className="hidden lg:block  gap-3 items-center w-full justify-items-end ">

          <ul className="flex gap-3 text-base">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="/blogs">Blogs</a></li>
            <li><a href="/projects">Portfolio</a></li>
            <li><a href="/contact">Contact</a></li>
            <Link href="/contact" className="inline-flex items-center justify-center px-6 text-base tracking-wide text-white bg-blue-500 rounded-lg h-[35px]">
              Hire Me
            </Link>
          </ul>

        </div>




        <div className="flex-center gap-x-5">
          <div className="lg:hidden">
            <MobMenu Menus={Menus} />
          </div>
        </div>


      </nav>



    </header>


    <main id="site-wrapper">
      <Component {...pageProps} />
    </main>
    <Footer />

    
  </>
}
