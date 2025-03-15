// pages/blogs/[slug].js

import { SlCalender } from "react-icons/sl";
import { CiRead } from "react-icons/ci";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsCopy } from "react-icons/bs";
import Link from "next/link";
import Head from "next/head";

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import axios from "axios";
import useFetchData from "@/hooks/useFetchData";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Spinner from "@/components/Spinner";

const BlogPage = () => {
    const router = useRouter();
    const { slug } = router.query;

    const { alldata } = useFetchData('/api/blogs');
    const [blogData, setBlogData] = useState({ blog: {}, comments: [] });
    const [newComment, setNewComment] = useState({
        name: '',
        email: '',
        title: '',
        contentpera: '',
        maincomment: true,
        parent: null,
        parentName: null,
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [messageok, setMessageok] = useState('');

    useEffect(() => {
        const fetchBlogData = async () => {
            if (slug) {
                try {
                    const response = await axios.get(`/api/blogs/${slug}`);
                    setBlogData(response.data);
                    setLoading(false);
                } catch (error) {
                    setError(error.response?.data?.message || 'An error occurred');
                    setLoading(false);
                }
            }
        };
        fetchBlogData();
    }, [slug]);

    const handleCommentSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(`/api/blogs/${slug}`, newComment);
            if (newComment.parent) {
                setBlogData(prevData => ({
                    ...prevData,
                    comments: prevData.comments.map(comment => {
                        if (comment._id === newComment.parent) {
                            return {
                                ...comment,
                                children: [...comment.children, response.data]
                            };
                        } else if (comment.children && comment.children.length > 0) {
                            return {
                                ...comment,
                                children: comment.children.map(child => {
                                    if (child._id === newComment.parent) {
                                        return {
                                            ...child,
                                            children: [...child.children, response.data]
                                        };
                                    }
                                    return child;
                                })
                            };
                        }
                        return comment;
                    })
                }));
            } else {
                setBlogData(prevData => ({
                    ...prevData,
                    comments: [...prevData.comments, response.data]
                }));
            }
            setNewComment({
                name: '',
                email: '',
                title: '',
                contentpera: '',
                maincomment: true,
                parent: null,
                parentName: null,
            });
            setMessageok('Comment posted successfully!');
        } catch (error) {
            setError(error.response?.data?.message || 'An error occurred');
        }
    };

    if (loading) return <div className="flex justify-center w-full"> <Spinner />.</div>;

    if (error) return <div className="text-red-500">{error}</div>;

    const createdAtDate = blogData.blog.createdAt ? new Date(blogData.blog.createdAt) : null;

    const formatDate = (date) => {
        if (!date || isNaN(date)) {
            return '';
        }
        const options = {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour12: true
        };
        return new Intl.DateTimeFormat('en-us', options).format(date);
    };

    const handleImageError = (event) => {
        event.target.src = 'https://res.cloudinary.com/dyikkz1ur/image/upload/v1742025979/kun/Portfolio/icons/noimage_rh1qy4.png';
    };

    return (
        <>
            <Head>
                <title>{slug}</title>
            </Head>

            <div className="">
                {blogData && (
                    <div className="container">
                        <div className="blgslgcnt">
                            <div className="leftsitedetails">
                                <div className="leftbloginfoimg">
                                    <img
                                        src={blogData.blog?.images?.[0] || 'https://res.cloudinary.com/dyikkz1ur/image/upload/v1742025979/kun/Portfolio/icons/noimage_rh1qy4.png'}
                                        alt={blogData.blog.title}
                                        onError={handleImageError}
                                    />
                                </div>

                                <div className="slugbloginfopub">
                                    <div className="flex gap-2">
                                        <div className="adminslug">
                                            <img
                                                src="https://res.cloudinary.com/dyikkz1ur/image/upload/v1741684012/kun/Portfolio/icons/kunnn_yvu3r3.png"
                                                alt="kun"
                                                onError={handleImageError}
                                                className="size-20"
                                            />
                                            <span className="">by kuntech</span>
                                        </div>
                                        <div className="adminslug flex items-center gap-0.5">
                                            <SlCalender />
                                            <span className="">{formatDate(createdAtDate)}</span>
                                        </div>
                                        <div className="adminslug  flex items-center gap-0.5">
                                            <CiRead />
                                            <span className="">Comments({blogData.comments ? blogData.comments.length : 0})</span>
                                        </div>
                                    </div>

                                    <h1>{blogData.blog.title}</h1>
                                    {loading ? <Spinner /> : (
                                        <ReactMarkdown
                                            children={blogData.blog.content}
                                            remarkPlugins={[remarkGfm]}
                                            components={{
                                                code({ node, inline, className, children, ...props }) {
                                                    const match = /language-(\w+)/.exec(className || '');
                                                    return !inline && match ? (
                                                        <SyntaxHighlighter style={a11yDark} language={match[1]} PreTag="div" {...props}>
                                                            {String(children).replace(/\n$/, '')}
                                                        </SyntaxHighlighter>
                                                    ) : (
                                                        <code className={className} {...props}>
                                                            {children}
                                                        </code>
                                                    );
                                                }
                                            }}
                                        />
                                    )}

                                    <div className="b_comments">
                                        <h2 className="">Comments</h2>
                                        {blogData.comments.map(comment => (
                                            <div key={comment._id} className="comment">
                                                <h3>{comment.title}</h3>
                                                <p>{comment.contentpera}</p>
                                                <p>By: {comment.name}</p>
                                                {comment.children && comment.children.map(child => (
                                                    <div key={child._id} className="child-comment">
                                                        <h4>{child.title}</h4>
                                                        <p>{child.contentpera}</p>
                                                        <p>By: {child.name}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                    </div>


                                    <form className="" onSubmit={handleCommentSubmit}>
                                        <p className="">your email will not be published </p>
                                        <div className="w-full max-w-lg p-6 bg-gray-800 rounded-lg shadow-md">
                                            <form onSubmit={handleCommentSubmit} className="flex space-x-4 mb-4">
                                                <input
                                                    type="text"
                                                    placeholder="Enter Name"
                                                    value={newComment.name}
                                                    onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
                                                    className="w-1/2 p-3 bg-gray-700 text-white rounded-md focus:outline-none"
                                                />
                                                <input
                                                    type="email"
                                                    placeholder="Enter Email"
                                                    value={newComment.email}
                                                    onChange={(e) => setNewComment({ ...newComment, email: e.target.value })}
                                                    className="w-1/2 p-3 bg-gray-700 text-white rounded-md focus:outline-none"
                                                />
                                            </form>
                                            <div className="mb-4">
                                                <input
                                                    type="text"
                                                    placeholder="Enter Title"
                                                    value={newComment.title}
                                                    onChange={(e) => setNewComment({ ...newComment, title: e.target.value })}
                                                    className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none"
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <textarea
                                                    placeholder="Enter Your Comments"
                                                    value={newComment.contentpera}
                                                    onChange={(e) => setNewComment({ ...newComment, contentpera: e.target.value })}
                                                    className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none h-32"
                                                ></textarea>
                                            </div>
                                            <button type="submit" className="w-full p-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none" >
                                                POST COMMENT
                                            </button>
                                            {messageok && <p className="text-green-500">{messageok}</p>}
                                        </div>
                                    </form>




                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default BlogPage;