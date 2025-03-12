import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function MobMenu({ Menus }) {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null);
  };

  const subMenuDrawer = {
    enter: {
      height: "auto",
      overflow: "hidden",
    },
    exit: {
      height: 0,
      overflow: "hidden",
    },
  };

  return (
    <div>
      <button className="lg:hidden z-[999] relative" onClick={toggleDrawer}>
        {isOpen ? <X /> : <Menu />}
      </button>

      <motion.div
        className="fixed left-0 right-0 top-16 overflow-y-auto h-full bg-[url('../public/img/bg.png')] text-white p-6 pb-20"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
      >
        <ul className="text-center flex flex-col gap-4 text-xl justify-center">
          <li><Link href="#home">Home</Link></li>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#services">Services</Link></li>
          <li><Link href="#contact">Blogs</Link></li>
          <li><Link href="#services">Portfolio</Link></li>
          <li><Link href="#contact">Contact</Link></li>
          <button className="inline-flex items-center justify-center px-6 text-base tracking-wide text-white bg-blue-500 rounded-lg mx-auto w-1/2 h-[35px]">
            Hire Me
          </button>

          <div className="w-[20rem] h-[20rem] ml-8">
            <img src="https://res.cloudinary.com/dyikkz1ur/image/upload/v1741789709/kun/Portfolio/icons/KunLogoWhite_utpeih.png" alt="Logo" className="w-[100%] h-[100%] object-cover" />
          </div>
        </ul>
      </motion.div>
    </div>
  );
}
