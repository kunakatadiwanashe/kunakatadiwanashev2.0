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

export default function Project(

    {
        _id,
        title: existingTitle,
        slug: existingSlug,
        images: existingImages,
        description: existingDescription,
        productcategory: existingProductCategory,
        tags: existingTags,
        client: existingClient,
        status: existingStatus,



    }) {


    const [redirect, setRedirect] = useState(false);
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [images, setImages] = useState([]);
    const [description, setDescription] = useState('');
    const [projectcategory, setProjectCategory] = useState('');
    const [client, setClient] = useState('');
    const [livepreview, setLivePreview] = useState('');
    const [tags, setTags] = useState([]);
    const [status, setStatus] = useState('draft');
    const [isUploading, setIsUploading] = useState(false);
    const uploadImagesQueue = [];
    

    async function createProject(ev) {
        ev.preventDefault();

        if (isUploading) {
            await Promise.all(uploadImagesQueue);
        }

        const data = {
            title,
            slug,
            images,
            description,
            projectcategory,
            status,
            client,
            livepreview,
            tags,
        };

        try {
            if (_id) {
                await axios.put('/api/projects', { ...data, _id });
                toast.success('project updated successfully');
            } else {
                await axios.post('/api/projects', data);
                toast.success('project created successfully');
                router.push('/projects');
            }
        } catch (error) {
            console.error('Error creating/updating:', error);
            toast.error('Failed to save project. Please try again.');
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
        router.push('/Projects');
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
        <form className="addWebsiteform" onSubmit={createProject}>
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

           {/* client name */}

            <div className="w-100 flex flex-col flex-left mb-2">
                <label htmlFor="client">Client Name</label>
                <input
                    type="text"
                    id="client"
                    placeholder='Enter Name'
                    value={client}
                    onChange={ev => setClient(ev.target.value)}
                />
            </div>

                       {/* preview */}

                       <div className="w-100 flex flex-col flex-left mb-2">
                <label htmlFor="live preview">Live Preview</label>
                <input
                    type="text"
                    id="live preview"
                    placeholder='Enter Name'
                    value={livepreview}
                    onChange={ev => setLivePreview(ev.target.value)}
                />
            </div>




            <div className="w-100 flex flex-col flex-left mb-2">
                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    id="description"
                    placeholder="Description"
                    value={description}
                    onChange={ev => setDescription(ev.target.value)}
                />
            </div>

            <div className="w-100 flex flex-col flex-left mb-2">
                <label htmlFor="category">Select Category</label>
                <select
                    className="form-select"
                    onChange={ev => setProjectCategory(ev.target.value)}
                    value={projectcategory}
                >
                    <option value="">Select Category</option>
                    <option value="WebSite Development">WebSite Development</option>
                    <option value="App Development">App Development </option>
                    <option value="E-Commerce Website">E-Commerce Website</option>
                    <option value="Website Design">Website Design</option>
                </select>
            </div>


            <div className="w-100 flex flex-col flex-left mb-2">
                <label htmlFor="tags">Tags</label>
                <select
                    className="form-select"
                    onChange={ev => setTags(ev.target.value)}
                    value={tags}
                >
                    <option value="">Tags</option>
                    <option value="Html">Html</option>
                    <option value="Javascript ">Javascript </option>
                    <option value="Typescript">Typescript</option>
                    
                </select>
            </div>



            <div className="w-100 flex flex-col flex-left mb-2">
                <label htmlFor="status">Status</label>
                <select
                    className="form-select"
                    onChange={ev => setStatus(ev.target.value)}
                    value={status}
                >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                </select>
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
                                <img src={link} alt="image" className="object-cover" />
                                <button type="button" className="rounded-full p-1" onClick={() => handleDeleteImage(index)}>X</button>
                            </div>
                        ))}


                    </ReactSortable>
                </div>
            )}








            <div className="description w-100 flex flex-col flex-left mb-2">
                <label htmlFor="description">Project Content</label>
                <MarkdownEditor
                    value={description}
                    onChange={({ text }) => setDescription(text)}
                    style={{ height: "400px", width: "100%" }}
                    renderHTML={(text) => (
                        <ReactMarkdown>
                            {text}
                        </ReactMarkdown>
                    )}
                />
            </div>

            <div className="w-100">
                <button type="submit" className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]">
                    Save Project
                </button>
            </div>
        </form>
    );
}









