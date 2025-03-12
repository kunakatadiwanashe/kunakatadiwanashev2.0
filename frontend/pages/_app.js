import Header from "@/components/Header";
import "@/styles/globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from "@/components/Footer";

import { Menus } from "@/utils/utils";
import MobMenu from "@/components/MobMenu";




export default function App({ Component, pageProps }) {

  return <>

    <header className="h-[10vh]  bg-[url('../public/img/bg.png')] text-white flex justify-between items-center pl-10 pr-10">
      <nav className="w-full flex justify-between items-center md:pl-8 md:pr-8 ">

        <div className="flex flex-center items-center gap-x-2 z-[999] relative">
          {/* <img src='https://res.cloudinary.com/dyikkz1ur/image/upload/v1741778728/kun/Portfolio/icons/Kun_Log_ahfgir.png' alt="" className="size-10 " /> */}
          <h3 className="text-lg font-semibold">KunTech</h3>
        </div>

        <div className="hidden lg:block  gap-3 items-center w-full justify-items-end ">

          <ul className="flex gap-3 text-base">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Blogs</a></li>
            <li><a href="#services">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
            <button className="inline-flex items-center justify-center px-6 text-base tracking-wide text-white bg-blue-500 rounded-lg h-[35px]">
              Hire Me
            </button>
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
