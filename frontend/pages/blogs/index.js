import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react';
import useFetchData from '@/hooks/useFetchData';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/pagination';

import { FreeMode } from 'swiper/modules';
import Head from 'next/head';
import Spinner from '@/components/Spinner';

export default function Blogs() {
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(7);
    const [searchQuery, setSearchQuery] = useState('');
    const { alldata, loading } = useFetchData('/api/blogs');

    useEffect(() => {
        console.log('Fetched data:', alldata);
    }, [alldata]);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const allblog = alldata.length;

    const filteredBlogs = searchQuery.trim() === '' ? alldata : alldata.filter(blog => blog.title.toLowerCase().includes(searchQuery.toLowerCase()));

    const indexOfFirstBlog = (currentPage - 1) * perPage;
    const indexOfLastBlog = currentPage * perPage;

    const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

    const publishedData = currentBlogs.filter(blog => blog.status === 'published');
    const sliderpubdata = alldata.filter(blog => blog.status === 'published');

    console.log('Slider data:', sliderpubdata);
    console.log('Published data:', publishedData);

    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(allblog / perPage); i++) {
        pageNumber.push(i);
    }

    return (
        <>
            <Head>
                <title>Blogs</title>
            </Head>

            <div className="blogpage">
                <div className="tophero">
                    <div className="container">



                        <div className="pt-10 pb-10">
                            <h1 className="text-5xl md:text-6xl font-bold mb-4">
                                Welcome to <span className="text-[#0668D5]">KunTech Blogs</span>!
                            </h1>
                            <p className="text-lg md:text-xl text-gray-400 mb-2">
                                I write about web, mobile development and modern JavaScript frameworks.
                            </p>

                            <div className="flex items-center w-full max-w-md">
                                <input
                                    type="text"
                                    placeholder="Search blogs here..."
                                    className="flex-grow p-3 rounded-l-full bg-gray-800 text-gray-300 focus:outline-none"
                                />
                                <button className="p-3 bg-[#0668D5] hover:bg-[#0668D5] text-white rounded-r-full">
                                    Search
                                </button>
                            </div>
                        </div>




                        <div className="featured h-[390px] relative">
                            <div className="md:container">
                                <div className=" relative pt-2 pb-[14rem] ">
                                    <div className="postTitle flex justify-between">
                                        <h3 className='text-2xl pb-4 hed '>Featured Post</h3>
                                    </div>
                                    <div className="featuredPosts flex">
                                        <Swiper
                                            slidesPerView={'auto'}
                                            freeMode={true}
                                            spaceBetween={30}
                                            modules={[FreeMode]}
                                            className='mySwiper'
                                        >
                                            {loading ? <Spinner /> : (
                                                sliderpubdata.slice(0, 6).map((blog) => (
                                                    <SwiperSlide key={blog.id}>
                                                        <div className="fpost min-w-[427px] max-w-1/2 h-[350px] mr-[2rem] z-30 cursor-pointer">
                                                            <Link href={`/blog/${blog.slug}`}>
                                                                <img src={blog.images[0] || '/default-image.jpg'} alt={blog.title} className='w-[100%] h-[100%] object-cover' />
                                                            </Link>
                                                            <div className="absolute bottom-0 left-0 w-1/2 bg-[#0668D5] p-5 text-white">
                                                                <div className="tegs flex">
                                                                    {Array.isArray(blog.blogcategory) ? (
                                                                        blog.blogcategory.map((cat, index) => (
                                                                            <Link key={index} href={`/blog/category${cat}`}>{cat}</Link>
                                                                        ))
                                                                    ) : (
                                                                        <span>No categories available</span>
                                                                    )}
                                                                    <h2 className=""><Link href={`/blogs/${blog.slug}`}>{blog.title}</Link></h2>
                                                                    <div className="flex">
                                                                        <img src="" alt="" />
                                                                        <p className="">kuntech</p>
                                                                    </div>
                                                                </div>

                                                            </div>



                                                        </div>
                                                    </SwiperSlide>
                                                ))
                                            )}
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <section className=" w-full md:p-20 mt-20">
                <div className="container">

                    <div className="latestpostsdat">
                        <div className="title">
                            <h3 className="text-xl md:text-2xl pb-10 hed">Latest Posts</h3>
                        </div>

                        <div className="latestposts w-full h-full flex align-center justify-between flex-wrap gap-2">
                            {loading ? <Spinner /> : <>
                                {publishedData.map((blog) => {
                                    return <div className='md:min-w-[30%] md:max-w-[30%] h-auto mt-1.3' key={blog._id}>
                                        <div className="w-full h-[240px] relative mb-[1.3rem]">
                                            <Link href={`/blogs/${blog.slug}`}>
                                                <img src={blog.images[0]} alt={blog.title} className='w-[100%] h-[100%] object-cover ' />
                                            </Link>
                                            <div className="absolute bg-[#0668D5] p-2 rounded-lg bottom-2 left-2 font-bold text-white text-sm">
                                                {Array.isArray(blog.blogcategory) ? (
                                                    blog.blogcategory.map((cat, index) => (
                                                        <Link key={index} href={`/blog/category${cat}`}>{cat}</Link>
                                                    ))
                                                ) : (
                                                    <span>No categories available</span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="info">
                                            <h3><Link href={`/blogs/${blog.slug}`}>{blog.title}</Link></h3>
                                            <p className="text-sm line-clamp-3">{blog.description} </p>
                                        </div>
                                    </div>
                                })}
                            </>}
                        </div>




                    </div>
                </div>
            </section>























        </>
    );
}