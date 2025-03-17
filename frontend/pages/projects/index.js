import Head from "next/head";
import { useState, useEffect } from "react";
import useFetchData from "@/hooks/useFetchData";
import Link from 'next/link';
import { GoArrowUpRight } from "react-icons/go";
import Spinner from "@/components/Spinner";


export default function projects() {

    const { alldata, loading } = useFetchData('/api/projects');
    const publishedData = alldata.filter(ab => ab.status === 'published');
    const [selectedCategory, setSelectedCategory] = useState('ALL');
    const [filteredProjects, setFilteredProjects] = useState([]);


    useEffect(() => {
        if (selectedCategory === 'ALL') {
            setFilteredProjects(alldata.filter(pro => pro.status === 'published'));
        } else {
            setFilteredProjects(alldata.filter(pro => pro.status === 'published' && pro.projectcategory.includes(selectedCategory)));
        }
    }, [selectedCategory, alldata]);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    }


    return <>


        <Head className="">
            <title>My Finest Work</title>
        </Head>


        <div className="projectpage pb-20">

            <div className="services md:h-[40vh] p-5 md:p-20">
                <div className="md:w-2/5">
                    <img src="https://res.cloudinary.com/dyikkz1ur/image/upload/v1666621970/kun/Portfolio/icons/port.png" alt="" className='w-[100%] h-[100%] object-contain' />
                </div>
                <p className="text-white text-xl pt-6">
                Some of my finest work
                </p>
            </div>


            <div className="container bg-gray-200 pt-10 pb-15">



                <div className="project_buttons p-0">
                    <button className={selectedCategory === 'ALL' ? 'active' : ''} onClick={() => handleCategoryChange('ALL')}>All</button>
                    <button className={selectedCategory === 'WebSite Development' ? 'active' : ''} onClick={() => handleCategoryChange('WebSite Development')}>Website</button>
                    <button className={selectedCategory === 'App Development' ? 'active' : ''} onClick={() => handleCategoryChange('App Development')}>Apps</button>
                    <button className={selectedCategory === 'Website Design' ? 'active' : ''} onClick={() => handleCategoryChange('Website Design')}>Design</button>
                </div>


                <div className="projects_cards">
                    {loading ? <Spinner /> : (
                        filteredProjects.map((project) => (
                            <Link href={`/projects/${project.slug}`} key={project._id} className="procard">
                                <div className="proimgbox">
                                    <img src={project.images[0]} alt={project.title} />
                                </div>
                                <div className="procontentbox">
                                    <h2 className=""> {project.title} </h2>
                                    <GoArrowUpRight />
                                </div>
                            </Link>
                        ))
                    )}
                </div>



            </div>


        </div>



    </>
}