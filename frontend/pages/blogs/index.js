import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { FreeMode } from 'swiper/modules';
import Head from 'next/head';

export default function blogs() {


    return <>
        <Head>
            <title>Blogs</title>
        </Head>


        <div className="blogpage">
            <div className="tophero">
                <div className="container">


                    <div className="toptitle">
                        <div className="toptitlecont flex">
                            <h1 className="">welcome to <span className="">KunTech Blogs</span></h1>

                            <div className="subemail">
                                <form className="flex" action="" method="" >
                                    <input
                                        type="text"
                                        id="id"
                                        name="name"
                                        placeholder="Search For A Blog"
                                        className="w-[300px] border border-slate-200 rounded-lg py-3 px-5 outline-none	bg-transparent"
                                    />
                                    <button>Search</button>
                                </form>
                            </div>
                        </div>
                    </div>


                   <div className="featured">
                    <div className="container">
                        <div className="featuredposts">
                            <div className="postTitle flex">
                                <h3 className="">Featured Post </h3>
                            </div>
                            <div className="featuredPosts flex">
                                <Swiper>
                                    
                                </Swiper>
                            </div>
                        </div>
                    </div>
                   </div>





                </div>
            </div>

        </div>
    </>
}4