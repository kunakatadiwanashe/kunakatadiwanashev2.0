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
                        <div className="toptitle">
                            <div className="toptitlecont flex">
                                <h1>Welcome to <span>KunTech Blogs</span></h1>

                                <div className="subemail">
                                    <form className="flex" action="" method="">
                                        <input
                                            type="text"
                                            id="id"
                                            name="name"
                                            placeholder="Search For A Blog"
                                            className="w-[300px] border border-slate-200 rounded-lg py-3 px-5 outline-none bg-transparent"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                        />
                                        <button type="submit">Search</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="featured">
                            <div className="container">
                                <div className="featuredposts">
                                    <div className="postTitle flex">
                                        <h3>Featured Post</h3>
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
                                                        <div className="fpost">
                                                            <Link href={`/blog/${blog.slug}`}>
                                                                <img src={blog.images[0] || '/default-image.jpg'} alt={blog.title} />
                                                            </Link>
                                                            <div className="fpostinfo">
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




            <section className="latestpostsec">
                <div className="container">
                    <div className="border"></div>
                    <div className="latestpostsdat">
                        <div className="title">
                            <h3 className="">Latest Posts</h3>
                        </div>

                        <div className="latestposts">
                            {loading ? <Spinner /> : <>
                                {publishedData.map((blog) => {
                                    return <div className='lpost' key={blog._id}>
                                        <div className="lpostimg">
                                            <Link href={`/blogs/${blog.slug}`}>
                                                <img src={blog.images[0]} alt={blog.title} />
                                            </Link>
                                            <div className="tegs">
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
{/* 
                        {publishedData.length === 0 ? (
                               ""
                            ) : (
                                <div>
                                    bu
                                </div>
                            )} */}




                    </div>
                </div>
            </section>























        </>
    );
}