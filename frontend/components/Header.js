import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <nav className="flex items-center justify-between p-5">
            <div className="flex items-center justify-between bg-transparent  w-full">

                <div className="w-20 h-20">
                    <img src="https://res.cloudinary.com/dyikkz1ur/image/upload/v1739973643/blog/file_1739973642190.png" alt="DreamHost logo" className="w-[100%] h-[100%] object-contain" />
                </div>


                <ul className="flex gap-4 font-bold">
                    <li className="">
                        <Link href="#">
                            Domains
                        </Link>
                    </li>
                    <li className="">
                        <Link href="#">
                            Hosting
                        </Link>
                    </li>
                    <li className="">
                        <Link href="#">
                            Websites
                        </Link>
                    </li>
                    <li className="">
                        <Link href="#">
                            WordPress
                        </Link>
                    </li>
                    <li className="hire">
                    <Link href="#">
                    Hire Me!
                </Link>
                    </li>
                </ul>

            </div>

 


        </nav>
    );
}

export default Header