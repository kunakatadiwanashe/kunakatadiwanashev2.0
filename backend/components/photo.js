import ReactMarkdown from 'react-markdown';
import MarkdownEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import { DotLoader, MoonLoader } from "react-spinners";
import { useState } from 'react';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import axios from 'axios';
import { ReactSortable } from 'react-sortablejs';
import Link from 'next/link';

export default function Photo(

    {
        _id,
        title: existingTitle,
        slug: existingSlug,
        images: existingImages,
        description: existingDescription,
        blogcategory: existingBlogCategory,


    }) {


    const [redirect, setRedirect] = useState(false);
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [images, setImages] = useState([]);
    const [description, setDescription] = useState('');
    const [blogcategory, setBlogCategory] = useState('');
    const [status, setStatus] = useState('draft');
    const [isUploading, setIsUploading] = useState(false);
    const uploadImagesQueue = [];

    async function createPhoto(ev) {
        ev.preventDefault();

        if (isUploading) {
            await Promise.all(uploadImagesQueue);
        }

        const data = {
            title,
            slug,
            images,
            description,
            blogcategory,
            status,
        };

        try {
            if (_id) {
                await axios.put('/api/photos', { ...data, _id });
                toast.success('Photo updated successfully');
            } else {
                await axios.post('/api/photos', data);
                toast.success('Photo created successfully');
                router.push('/photos');
            }
        } catch (error) {
            console.error('Error creating/updating blog:', error);
            toast.error('Failed to save blog. Please try again.');
        }
    }

    async function uploadImages(ev) {
        const files = ev.target.files;
        if (files?.length > 0) {
            setIsUploading(true);

            for (const file of files) {
                const data = new FormData();
                data.append('file', file);

                uploadImagesQueue.push(
                    axios.post('/api/upload', data).then(res => {
                        setImages(oldImages => [...oldImages, ...res.data.links]);
                    })
                );
            }

            await Promise.all(uploadImagesQueue);
            toast.success('Images uploaded successfully');
            setIsUploading(false);
        } else {
            toast.error('No files selected');
        }
    }

    if (redirect) {
        router.push('/photos');
        return null;
    }

    function updateImagesOrder(images) {
        setImages(images);
    }

    function handleDeleteImage(index) {
        const updateImages = [...images];
        uploadImages.splice(index, 1);
        setImages(updateImages);
        toast.success('Image deleted successfully');
    }




    const handleSlugChange = (ev) => {
        const input = ev.target.value;
        const slug = input.toLowerCase().replace(/\s+/g, '-');
        setSlug(slug);
    }

    return (
        <form className="addWebsiteform" onSubmit={createPhoto}>
            <div className="w-100 flex flex-col flex-left mb-2">
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    placeholder='Enter Title'
                    value={title}
                    onChange={ev => {
                        setTitle(ev.target.value);
                        handleSlugChange(ev);
                    }}
                />
            </div>

            <div className="w-100 flex flex-col flex-left mb-2">
                <label htmlFor="slug">Slug</label>
                <input
                    type="text"
                    id="slug"
                    placeholder='Enter Slug'
                    value={slug}
                    onChange={ev => setSlug(ev.target.value)}
                />
            </div>



            <div className="w-100 flex flex-col flex-left mb-2">
                <label htmlFor="images">Images</label>
                <input
                    type="file"
                    id="fileInput"
                    placeholder="placeholder"
                    className="w-[300px] border border-slate-200 rounded-lg py-3 px-5 outline-none bg-transparent"
                    multiple onChange={uploadImages}
                />
                {isUploading && (<MoonLoader color="#36d7b7" />)}

            </div>


            {!isUploading && (
                <div className="flex">
                    <ReactSortable list={Array.isArray(images) ? images : []} setList={updateImagesOrder} animation={200}
                        className='flex flex-wrap gap-2'>
                        {images?.map((link, index) => (
                            <div key={link} className="uploading">
                                <img src={link} alt="blog image" className="object-cover" />
                                <button type="button" className="rounded-full p-1" onClick={() => handleDeleteImage(index)}>X</button>
                            </div>
                        ))}


                    </ReactSortable>
                </div>
            )}








            <div className="w-100">
                <button type="submit" className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]">
                    Save Photo
                </button>
            </div>
        </form>
    );
}









