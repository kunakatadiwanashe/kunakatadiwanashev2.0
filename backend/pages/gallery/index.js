import React, { useState, useEffect } from 'react';
import useFetchData from '../../hooks/useFetchData';
import { SiBloglovin } from "react-icons/si";
import Dataloading from '../../components/Dataloading'; // Correct import
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { FaEdit } from 'react-icons/fa';
import Link from 'next/link';

export default function Gallery() {

    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(7);
    const [searchQuery, setSearchQuery] = useState('');
    const { alldata, loading } = useFetchData('/api/gallery');

    useEffect(() => {
        console.log('Fetched data:', alldata);
    }, [alldata]);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const allblog = alldata.length;

    const filteredBlogs = searchQuery.trim() === ' ' ? alldata : alldata.filter(blog => blog.title.toLowerCase().includes(searchQuery.toLowerCase()));

    const indexOfFirstBlog = (currentPage - 1) * perPage;
    const indexOfLastBlog = currentPage * perPage;

    const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

    const publishedblogs = currentBlogs.filter(ab => ab.status === 'published');

    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(allphotos / perPage); i++) {
        pageNumber.push(i);
    }

    return <>
        <div className="blogpage">
            <div className="titledashboard flex flex-sb">
                <div className="">
                    <h2 className="">All Photos</h2>
                    <h3 className="">admin panel</h3>
                </div>
                <div className="breadcrumb">
                    <SiBloglovin /> Gallery
                </div>
            </div>
            <div className="blogstable">
                <div className="flex gap-2 mb-1">
                    <h2 className="">search Gallery</h2>
                    <input
                        type="text"
                        id="id"
                        name="name"
                        placeholder="search title"
                        className="border border-slate-200 rounded-lg py-3 px-5 outline-none	bg-transparent"
                        value={searchQuery}
                        onChange={(e) => setGallery(e.target.value)}
                    />
                </div>

                <table className="table table-styling">
                    <thead>
                        <tr>
                            <th className="">#</th>
                            <th className="">image</th>
                            <th className="">title</th>
                            <th className="">edit / delete</th>
                        </tr>
                    </thead>




<tbody className="">
                        {loading ? <>
                            <tr className="">
                                <td><Dataloading /></td>
                            </tr>
                        </> : <>
                            {publishedblogs.length === 0 ? (
                                <tr>
                                    <td colSpan={4} className="text-center">no photos</td>
                                </tr>
                            ) : (
                                publishedblogs.map((blog, index) => (
                                    <tr key={blog.id}>
                                        <td>{indexOfFirstBlog + index + 1}</td>
                                        <td><img src={blog.images[0]} width={180} alt={blog.title} className="img-thumbnail" /></td>
                                        <td> <h3>{blog.title}</h3> </td>
                                        <td>
                                            <div className="flex gap-2 flex-center ">
                                              
                                                <Link href={'/photos/delete' + blog._id}><RiDeleteBin2Fill /></Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </>
                        }
                    </tbody>



                </table>
            </div>
        </div>
    </>
}